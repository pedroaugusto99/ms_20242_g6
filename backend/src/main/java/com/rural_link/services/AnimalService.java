package com.rural_link.services;

import com.rural_link.dtos.animal.*;
import com.rural_link.entities.animal.Animal;
import com.rural_link.entities.animal.Sexo;
import com.rural_link.entities.fazenda.Fazenda;
import com.rural_link.entities.usuarios.Pessoa;
import com.rural_link.entities.usuarios.Proprietario;
import com.rural_link.entities.usuarios.TrabalhadorRural;
import com.rural_link.entities.usuarios.UserRole;
import com.rural_link.exceptions.UserNotAuthenticatedException;
import com.rural_link.mappers.AnimalMapper;
import com.rural_link.repositories.*;
import com.rural_link.specifications.AnimalQueryFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AnimalService {
    private final AnimalRepository animalRepository;
    private final PessoaRepository pessoaRepository;
    private final PesoAnimalRepository pesoAnimalRepository;
    private final VacinacaoAnimalRepository vacinacaoAnimalRepository;
    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    private final TrabalhadorRuralRepository trabalhadorRuralRepository;
    private final ProprietarioRepository proprietarioRepository;

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
    @Transactional
    public void salvar(AnimalRequestDTO animalRequestDTO, Pessoa pessoa){
        Pessoa pessoaAutenticada = pessoaRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoaAutenticada);
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
        Pessoa pessoaAutenticada = pessoaRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoaAutenticada);
        List<Animal> animais = animalRepository.findByFazenda(fazenda);
        List<AnimalListResponseDTO> animaisListResponseDTO = AnimalMapper.INSTANCE.toListOfAnimalListResponseDTO(animais);
        return setarAnimalIdEIdade(animais,animaisListResponseDTO);
    }

    public List<AnimalListResponseDTO> buscarAnimalPorNome(String nome, Pessoa pessoa){
        Pessoa pessoaAutenticada = pessoaRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoaAutenticada);
        List<Animal> animais = animalRepository.findByNomeLikeAndFazenda("%" + nome + "%", fazenda);
        List<AnimalListResponseDTO> animaisListResponseDTO = AnimalMapper.INSTANCE.toListOfAnimalListResponseDTO(animais);
        return setarAnimalIdEIdade(animais,animaisListResponseDTO);
    }
    
    public List<AnimalListResponseDTO> filtrarPorCampos(AnimalQueryFilter animalQueryFilter, Pessoa pessoa){
        Pessoa pessoaAutenticada = pessoaRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoaAutenticada);
        List<Animal> animais = animalRepository.findAll(animalQueryFilter.toSpecification(fazenda));
        List<AnimalListResponseDTO> animaisListResponseDTO = AnimalMapper.INSTANCE.toListOfAnimalListResponseDTO(animais);
        return setarAnimalIdEIdade(animais, animaisListResponseDTO);
    }

    public AnimalResponseDTO atualizarDadosDoAnimal(AnimalPutRequestDTO animalPutRequestDTO, Pessoa pessoa){
        Pessoa pessoaAutenticada = pessoaRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoaAutenticada);
        Animal animalSalvo = animalRepository.findByIdAndFazenda(animalPutRequestDTO.id(), fazenda).orElseThrow(() -> new RuntimeException("Animal não foi encontrado"));
        Animal animal = AnimalMapper.INSTANCE.toAnimal(animalPutRequestDTO);
        animal.setFazenda(fazenda);
        animal.setId(animalSalvo.getId());
        Animal animalAtualizado = animalRepository.save(animal);
        return AnimalMapper.INSTANCE.toAnimalResponseDTO(animalAtualizado);
    }

    public QrCodeResponseDTO buscarQrCode(Pessoa pessoa, Long id){
        Pessoa pessoaAutenticada = pessoaRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoaAutenticada);
        Animal animal = animalRepository.findByIdAndFazenda(id, fazenda).orElseThrow(() -> new RuntimeException("Id do animal não foi encontrado"));
        return new QrCodeResponseDTO(animal.getUrlQrCode());
    }

    @Transactional
    public void removerAnimal(Pessoa pessoa, Long id){
        Pessoa pessoaAutenticada = pessoaRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoaAutenticada);
        Animal animal = animalRepository.findByIdAndFazenda(id, fazenda).orElseThrow(() -> new RuntimeException("Animal não foi cadastrado"));
        pesoAnimalRepository.deleteByAnimal(animal);
        vacinacaoAnimalRepository.deleteByAnimal(animal);
        animalRepository.delete(animal);
    }

    public List<CriaResponseDTO> buscarCriasDoAnimal(Pessoa pessoa, Long id){
        Pessoa pessoaAutenticada = pessoaRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoaAutenticada);
        Animal animal = animalRepository.findByIdAndFazenda(id, fazenda).orElseThrow(() -> new RuntimeException("Id do Animal não existe"));
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

    public AnimalResponseDTO buscarAnimalPorId(Pessoa pessoa, Long id){
        Pessoa pessoaAutenticada = pessoaRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoaAutenticada);
        Animal animal = animalRepository.findByIdAndFazenda(id, fazenda).orElseThrow(() -> new RuntimeException("Id do Animal não existe"));
        AnimalResponseDTO animalResponseDTO = AnimalMapper.INSTANCE.toAnimalResponseDTO(animal);
        animalResponseDTO.setDataDeAquisicao(formatter.format(animal.getDataDeAquisicao()));
        animalResponseDTO.setDataDeNascimento(formatter.format(animal.getDataDeNascimento()));
        if (animalResponseDTO.getIdade() == null && animalResponseDTO.getDataDeNascimento() != null){
            animalResponseDTO.setIdade(Period.between(animal.getDataDeNascimento(), LocalDate.now()).getYears());
        }
        if (pesoAnimalRepository.findTopByAnimalOrderByIdDesc(animal) != null){
            animalResponseDTO.setPesoAtual(pesoAnimalRepository.findTopByAnimalOrderByIdDesc(animal).getPeso());
        }
        animalResponseDTO.setNumeroDeCrias(buscarAnimalPorCodigoFamiliar(animal).size());
        animalResponseDTO.setId(id);
        return animalResponseDTO;
    }
}
