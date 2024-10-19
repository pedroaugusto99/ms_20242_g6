package com.rural_link.service.animal;

import com.rural_link.domain.animal.Animal;
import com.rural_link.domain.fazenda.Fazenda;
import com.rural_link.domain.usuarios.Pessoa;
import com.rural_link.domain.usuarios.Proprietario;
import com.rural_link.domain.usuarios.TrabalhadorRural;
import com.rural_link.domain.usuarios.UserRole;
import com.rural_link.dto.animal.AnimalDTO;
import com.rural_link.dto.animal.AnimalPutDTO;
import com.rural_link.mapper.AnimalMapper;
import com.rural_link.repositories.AnimalRepository;
import com.rural_link.repositories.ProprietarioRepository;
import com.rural_link.repositories.TrabalhadorRuralRepository;
import com.rural_link.specifications.AnimalQueryFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AnimalService {
    private final AnimalRepository animalRepository;
    private final ProprietarioRepository proprietarioRepository;
    private final TrabalhadorRuralRepository trabalhadorRuralRepository;

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

    public ResponseEntity<Void> salvar(AnimalDTO animalDTO, Pessoa pessoa){
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoa);
        if (animalRepository.findByCodigoAndFazenda(animalDTO.codigo(), fazenda).isPresent()){
            return ResponseEntity.badRequest().build();
        }
        Animal animal = AnimalMapper.INSTANCE.toAnimal(animalDTO);
        animal.setFazenda(fazenda);
        animalRepository.save(animal);
        return ResponseEntity.ok().build();
    }

    public Page<AnimalDTO> listarTodosAnimaisPaginados(Pageable pageable, Pessoa pessoa){
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoa);
        return animalRepository.findByFazenda(fazenda, pageable);
    }

    public List<AnimalDTO> buscarAnimalPorNome(String nome, Pessoa pessoa){
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoa);
        return animalRepository.findByNomeLikeAndFazenda("%"+nome+"%", fazenda);
    }
    
    public List<AnimalDTO> filtrarPorCampos(AnimalQueryFilter animalQueryFilter, Pessoa pessoa){
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoa);
        List<Animal> animais = animalRepository.findAll(animalQueryFilter.toSpecification(fazenda));
        return AnimalMapper.INSTANCE.toAnimalDTO(animais);
    }

    public AnimalDTO atualizarDadosDoAnimal(AnimalPutDTO animalPutDTO, Pessoa pessoa){
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoa);
        Animal animalSalvo = animalRepository.findByIdAndFazenda(animalPutDTO.id(), fazenda).orElseThrow(() -> new RuntimeException("Animal não está cadastrado"));
        Animal animal = AnimalMapper.INSTANCE.toAnimal(animalPutDTO);
        animal.setFazenda(fazenda);
        animal.setId(animalSalvo.getId());
        Animal animalAtualizado = animalRepository.save(animal);
        return AnimalMapper.INSTANCE.toAnimalDTO(animalAtualizado);
    }
}
