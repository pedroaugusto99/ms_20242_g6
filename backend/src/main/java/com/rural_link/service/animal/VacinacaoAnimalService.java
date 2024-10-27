package com.rural_link.service.animal;

import com.rural_link.domain.animal.Animal;
import com.rural_link.domain.animal.VacinacaoAnimal;
import com.rural_link.domain.fazenda.Fazenda;
import com.rural_link.domain.usuarios.Pessoa;
import com.rural_link.domain.usuarios.Proprietario;
import com.rural_link.domain.usuarios.TrabalhadorRural;
import com.rural_link.domain.usuarios.UserRole;
import com.rural_link.dto.animal.VacinacaoAnimalDTO;
import com.rural_link.exceptions.UserNotAuthenticatedException;
import com.rural_link.mapper.VacinacaoAnimalMapper;
import com.rural_link.repositories.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class VacinacaoAnimalService {

    private final VacinacaoAnimalRepository vacinacaoAnimalRepository;
    private final AnimalRepository animalRepository;
    private final PessoaRepository pessoaRepository;
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

    public void salvarVacinacaoDoAnimal(VacinacaoAnimalDTO vacinacaoAnimalDTO, Pessoa pessoa){
        Pessoa pessoaAutenticada = pessoaRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoaAutenticada);
        Animal animal = animalRepository.findByIdAndFazenda(vacinacaoAnimalDTO.animalId(), fazenda).orElseThrow(() -> new RuntimeException("Animal não foi cadastrado"));
        VacinacaoAnimal vacinacaoAnimal = VacinacaoAnimalMapper.INSTANCE.toVacinacaoAnimal(vacinacaoAnimalDTO);
        vacinacaoAnimal.setAnimal(animal);
        vacinacaoAnimalRepository.save(vacinacaoAnimal);
    }

    public void removerVacinacaoDoAnimal(Long id, Pessoa pessoa){
        Pessoa pessoaAutenticada = pessoaRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoaAutenticada);
        VacinacaoAnimal vacinacaoAnimal = vacinacaoAnimalRepository.findById(id).orElseThrow(() -> new RuntimeException("Vacinação selecionada não foi cadastrada"));
        if (animalRepository.existsByIdAndFazenda(vacinacaoAnimal.getAnimal().getId(), fazenda)){
            vacinacaoAnimalRepository.delete(vacinacaoAnimal);
        } else{
            throw new RuntimeException("Vacinação selecionada não foi cadastrada");
        }
    }

    public List<VacinacaoAnimalDTO> listarVacinacoesDoAnimal(Long animalId, Pessoa pessoa){
        Pessoa pessoaAutenticada = pessoaRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoaAutenticada);
        Animal animal = animalRepository.findByIdAndFazenda(animalId, fazenda).orElseThrow(() -> new RuntimeException("Id do Animal não foi encontrado"));
        List<VacinacaoAnimal> vacinacoesDoAnimal = vacinacaoAnimalRepository.findByAnimal(animal);
        return VacinacaoAnimalMapper.INSTANCE.toListOfVacinacaoAnimalDTO(vacinacoesDoAnimal);
    }
}
