package com.rural_link.service.animal;

import com.rural_link.domain.animal.Animal;
import com.rural_link.domain.animal.Sexo;
import com.rural_link.domain.fazenda.Fazenda;
import com.rural_link.domain.usuarios.Pessoa;
import com.rural_link.domain.usuarios.Proprietario;
import com.rural_link.domain.usuarios.TrabalhadorRural;
import com.rural_link.domain.usuarios.UserRole;
import com.rural_link.dto.animal.*;
import com.rural_link.mapper.AnimalMapper;
import com.rural_link.repositories.AnimalRepository;
import com.rural_link.repositories.PesoAnimalRepository;
import com.rural_link.repositories.ProprietarioRepository;
import com.rural_link.repositories.TrabalhadorRuralRepository;
import com.rural_link.specifications.AnimalQueryFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.cglib.core.Local;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AnimalService {
    private final AnimalRepository animalRepository;
    private final ProprietarioRepository proprietarioRepository;
    private final TrabalhadorRuralRepository trabalhadorRuralRepository;
    private final PesoAnimalRepository pesoAnimalRepository;
    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

    //Códigos de auxílio

    public Fazenda encontrarFazendaDoAnimal(Pessoa pessoa){
        if (pessoa.getRole() == UserRole.PROPRIETARIO){
            Proprietario proprietario = proprietarioRepository.findByEmail(pessoa.getEmail()).orElseThrow(() -> new RuntimeException("Proprietário não foi encontrado"));
            return proprietario.getFazenda();
        } else if (pessoa.getRole() == UserRole.TRABALHADOR_RURAL){
            TrabalhadorRural trabalhadorRural = trabalhadorRuralRepository.findByEmail(pessoa.getEmail()).orElseThrow(() -> new RuntimeException("Trabalhador não foi encontrado"));
            return trabalhadorRural.getFazenda();
        }
        return null;
    }

    public List<Animal> buscarAnimalPorCodigoFamiliar(Animal animal){
        if (animal.getSexo() == Sexo.FEMEA){
            return animalRepository.findByCodigoDaMae(animal.getCodigo());
        } else if (animal.getSexo() == Sexo.MACHO){
            return animalRepository.findByCodigoDoPai(animal.getCodigo());
        }
        return null;
    }

    public List<AnimalListResponseDTO> setarAnimalIdEIdade(List<Animal> animais,
                                                           List<AnimalListResponseDTO> animaisListResponseDTO){
        for (int i = 0; i < animaisListResponseDTO.size(); i++) {
            animaisListResponseDTO.get(i).setAnimalId(animais.get(i).getId());
            if (animais.get(i).getIdade() != null){
                animaisListResponseDTO.get(i).setIdade(animais.get(i).getIdade());
            } else{
                animaisListResponseDTO.get(i).setIdade(Period.between(animais.get(i).getDataDeNascimento(), LocalDate.now()).getYears());
            }
        }
        return animaisListResponseDTO;
    }

    //Services para Controllers

    public void salvar(AnimalRequestDTO animalRequestDTO, Pessoa pessoa){
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoa);
        if (animalRepository.findByCodigoAndFazenda(animalRequestDTO.codigo(), fazenda).isPresent()){
            throw new RuntimeException("Animal já está cadastado");
        }
        Animal animal = AnimalMapper.INSTANCE.toAnimal(animalRequestDTO);
        animal.setFazenda(fazenda);
        Animal animalSalvo = animalRepository.save(animal);
        animalSalvo.setUrlQrCode("http://localhost:3030/animal?id="+animalSalvo.getId());
        animalRepository.save(animalSalvo);
    }

    public List<AnimalListResponseDTO> listarTodosAnimais(Pessoa pessoa){
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoa);
        List<Animal> animais = animalRepository.findByFazenda(fazenda);
        List<AnimalListResponseDTO> animaisListResponseDTO = AnimalMapper.INSTANCE.toListOfAnimalListResponseDTO(animais);
        return setarAnimalIdEIdade(animais,animaisListResponseDTO);
    }

    public List<AnimalListResponseDTO> buscarAnimalPorNome(String nome, Pessoa pessoa){
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoa);
        List<Animal> animais = animalRepository.findByNomeLikeAndFazenda("%" + nome + "%", fazenda);
        List<AnimalListResponseDTO> animaisListResponseDTO = AnimalMapper.INSTANCE.toListOfAnimalListResponseDTO(animais);
        return setarAnimalIdEIdade(animais,animaisListResponseDTO);
    }
    
    public List<AnimalListResponseDTO> filtrarPorCampos(AnimalQueryFilter animalQueryFilter, Pessoa pessoa){
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoa);
        List<Animal> animais = animalRepository.findAll(animalQueryFilter.toSpecification(fazenda));
        List<AnimalListResponseDTO> animaisListResponseDTO = AnimalMapper.INSTANCE.toListOfAnimalListResponseDTO(animais);
        return setarAnimalIdEIdade(animais, animaisListResponseDTO);
    }

    public AnimalResponseDTO atualizarDadosDoAnimal(AnimalPutRequestDTO animalPutRequestDTO, Pessoa pessoa){
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoa);
        Animal animalSalvo = animalRepository.findByIdAndFazenda(animalPutRequestDTO.id(), fazenda).orElseThrow(() -> new RuntimeException("Animal não foi encontrado"));
        Animal animal = AnimalMapper.INSTANCE.toAnimal(animalPutRequestDTO);
        animal.setFazenda(fazenda);
        animal.setId(animalSalvo.getId());
        Animal animalAtualizado = animalRepository.save(animal);
        return AnimalMapper.INSTANCE.toAnimalResponseDTO(animalAtualizado);
    }

    public QrCodeResponseDTO buscarQrCode(Long id){
        Animal animal = animalRepository.findById(id).orElseThrow(() -> new RuntimeException("Id do animal não foi encontrado"));
        return new QrCodeResponseDTO(animal.getUrlQrCode());
    }

    public void removerAnimal(Long id){
        Animal animal = animalRepository.findById(id).orElseThrow(() -> new RuntimeException("Animal não foi cadastrado"));
        animalRepository.delete(animal);
    }

    public List<CriaResponseDTO> buscarCriasDoAnimal(Long id){
        Animal animal = animalRepository.findById(id).orElseThrow(() -> new RuntimeException("Id do Animal não existe"));
        List<Animal> animais = buscarAnimalPorCodigoFamiliar(animal);
        List<CriaResponseDTO> crias = AnimalMapper.INSTANCE.toListOfCriaResponseDTO(animais);
        for (int i = 0; i < crias.size(); i++) {
            if (animal.getSexo() == Sexo.FEMEA) {
                crias.get(i).setCodigoDoFamiliar(animal.getCodigoDoPai());
            } else if (animal.getSexo() == Sexo.MACHO) {
                crias.get(i).setCodigoDoFamiliar(animal.getCodigoDaMae());
            }
            if (animais.get(i).getDataDeNascimento() == null){
                crias.get(i).setDataDeNascimento("Não consta");
                crias.get(i).setIdade(animais.get(i).getIdade());
            } else{
                crias.get(i).setDataDeNascimento(formatter.format(animais.get(i).getDataDeNascimento()));
                crias.get(i).setIdade(Period.between(animais.get(i).getDataDeNascimento(), LocalDate.now()).getYears());
            }
        }
        return crias;
    }

    public AnimalResponseDTO buscarAnimalPorId(Long id){
        Animal animal = animalRepository.findById(id).orElseThrow(() -> new RuntimeException("Id do Animal não existe"));
        AnimalResponseDTO animalResponseDTO = AnimalMapper.INSTANCE.toAnimalResponseDTO(animal);
        animalResponseDTO.setDataDeAquisicao(formatter.format(animal.getDataDeAquisicao()));
        animalResponseDTO.setDataDeNascimento(formatter.format(animal.getDataDeNascimento()));
        if (animalResponseDTO.getIdade() == null && animalResponseDTO.getDataDeNascimento() != null){
            animalResponseDTO.setIdade(Period.between(animal.getDataDeNascimento(), LocalDate.now()).getYears());
        }
        animalResponseDTO.setPesoAtual(pesoAnimalRepository.findFirstByOrderByIdDesc().getPeso());
        animalResponseDTO.setNumeroDeCrias(buscarAnimalPorCodigoFamiliar(animal).size());
        animalResponseDTO.setId(id);
        return animalResponseDTO;
    }
}
