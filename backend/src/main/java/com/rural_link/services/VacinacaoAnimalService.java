package com.rural_link.services;

import com.rural_link.dtos.animal.VacinacaoAnimalResponseDTO;
import com.rural_link.entities.animal.Animal;
import com.rural_link.entities.animal.VacinacaoAnimal;
import com.rural_link.entities.fazenda.Fazenda;
import com.rural_link.entities.usuarios.Pessoa;
import com.rural_link.entities.usuarios.Proprietario;
import com.rural_link.entities.usuarios.TrabalhadorRural;
import com.rural_link.entities.usuarios.UserRole;
import com.rural_link.dtos.animal.VacinacaoAnimalRequestDTO;
import com.rural_link.exceptions.UserNotAuthenticatedException;
import com.rural_link.mappers.VacinacaoAnimalMapper;
import com.rural_link.repositories.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
@RequiredArgsConstructor
public class VacinacaoAnimalService {

    private final VacinacaoAnimalRepository vacinacaoAnimalRepository;
    private final AnimalRepository animalRepository;
    private final PessoaRepository pessoaRepository;
    private final ProprietarioRepository proprietarioRepository;
    private final TrabalhadorRuralRepository trabalhadorRuralRepository;
    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

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

    public void salvarVacinacaoDoAnimal(VacinacaoAnimalRequestDTO vacinacaoAnimalRequestDTO, Pessoa pessoa){
        Pessoa pessoaAutenticada = pessoaRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoaAutenticada);
        Animal animal = animalRepository.findByIdAndFazenda(vacinacaoAnimalRequestDTO.animalId(), fazenda).orElseThrow(() -> new RuntimeException("Animal não foi cadastrado"));
        VacinacaoAnimal vacinacaoAnimal = VacinacaoAnimalMapper.INSTANCE.toVacinacaoAnimal(vacinacaoAnimalRequestDTO);
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

    public List<VacinacaoAnimalResponseDTO> listarVacinacoesDoAnimal(Long animalId, Pessoa pessoa){
        Pessoa pessoaAutenticada = pessoaRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoaAutenticada);
        Animal animal = animalRepository.findByIdAndFazenda(animalId, fazenda).orElseThrow(() -> new RuntimeException("Id do Animal não foi encontrado"));
        List<VacinacaoAnimal> vacinacoesDoAnimal = vacinacaoAnimalRepository.findByAnimal(animal);
        List<VacinacaoAnimalResponseDTO> vacinacaoAnimalResponseDTO = VacinacaoAnimalMapper.INSTANCE.toListOfVacinacaoAnimalResponseDTO(vacinacoesDoAnimal);
        for (int i = 0; i < vacinacoesDoAnimal.size(); i++) {
            vacinacaoAnimalResponseDTO.get(i).setDataDeVacinacao(formatter.format(vacinacoesDoAnimal.get(i).getDataDeVacinacao()));
            vacinacaoAnimalResponseDTO.get(i).setDataDaProximaVacinacao(formatter.format(vacinacoesDoAnimal.get(i).getDataDaProximaVacinacao()));
        }
        return vacinacaoAnimalResponseDTO;
    }
}
