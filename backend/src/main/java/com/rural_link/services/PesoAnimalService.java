package com.rural_link.services;

import com.rural_link.dtos.animal.PesoAnimalRequestDTO;
import com.rural_link.dtos.animal.PesoAnimalResponseDTO;
import com.rural_link.entities.animal.Animal;
import com.rural_link.entities.animal.PesoAnimal;
import com.rural_link.entities.fazenda.Fazenda;
import com.rural_link.entities.usuarios.Pessoa;
import com.rural_link.entities.usuarios.Proprietario;
import com.rural_link.entities.usuarios.TrabalhadorRural;
import com.rural_link.entities.usuarios.UserRole;
import com.rural_link.exceptions.UserNotAuthenticatedException;
import com.rural_link.mappers.PesoAnimalMapper;
import com.rural_link.repositories.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PesoAnimalService {

    private final PesoAnimalRepository pesoAnimalRepository;
    private final PessoaRepository pessoaRepository;
    private final AnimalRepository animalRepository;
    private final TrabalhadorRuralRepository trabalhadorRuralRepository;
    private final ProprietarioRepository proprietarioRepository;
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

    public PesoAnimalResponseDTO salvarPesoDoAnimal(PesoAnimalRequestDTO pesoAnimalRequestDTO, Pessoa pessoa){
        Pessoa pessoaAutenticada = pessoaRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoaAutenticada);
        Animal animal = animalRepository.findByIdAndFazenda(pesoAnimalRequestDTO.animalId(), fazenda).orElseThrow(() -> new RuntimeException("Animal não foi cadastrado"));
        BigDecimal saldoPesos;
        PesoAnimal pesoAnimal = PesoAnimalMapper.INSTANCE.toPesoAnimal(pesoAnimalRequestDTO);
        pesoAnimal.setAnimal(animal);
        PesoAnimal pesoAnimalSalvo = pesoAnimalRepository.save(pesoAnimal);
        List<PesoAnimal> top2Pesos = pesoAnimalRepository.findFirst2ByOrderByIdDesc();
        if (top2Pesos.size() == 1){
            saldoPesos = BigDecimal.ZERO;
        } else{
            saldoPesos = top2Pesos.getFirst().getPeso().subtract(top2Pesos.getLast().getPeso());
        }
        return new PesoAnimalResponseDTO(
                pesoAnimalSalvo.getPeso(),
                pesoAnimalSalvo.getDataDePesagem().format(formatter),
                saldoPesos,
                pesoAnimalSalvo.getAnimal().getId()
        );
    }

    public void removerPesoDoAnimal(Long id, Pessoa pessoa){
        Pessoa pessoaAutenticada = pessoaRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoaAutenticada);
        PesoAnimal pesoAnimal = pesoAnimalRepository.findById(id).orElseThrow(() -> new RuntimeException("Peso do animal não está cadastrado"));
        if (animalRepository.existsByIdAndFazenda(pesoAnimal.getAnimal().getId(), fazenda)){
            pesoAnimalRepository.delete(pesoAnimal);
        } else{
            throw new RuntimeException("Peso do Animal não foi cadastrado");
        }
    }

    public List<PesoAnimalResponseDTO> listarTodosPesos(Long animalId, Pessoa pessoa){
        Pessoa pessoaAutenticada = pessoaRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        Fazenda fazenda = encontrarFazendaDoAnimal(pessoaAutenticada);
        Animal animal = animalRepository.findByIdAndFazenda(animalId, fazenda).orElseThrow(() -> new RuntimeException("Animal não foi cadastrado"));
        List<PesoAnimal> pesosAnimal = pesoAnimalRepository.findByAnimal(animal);
        List<PesoAnimalResponseDTO> pesoAnimalResponseDTO = PesoAnimalMapper.INSTANCE.toListOfPesoAnimalResponseDTO(pesosAnimal);
        for (int i = pesoAnimalResponseDTO.size()-1; i >= 0; i--) {
            pesoAnimalResponseDTO.get(i).setDataDePesagem(formatter.format(pesosAnimal.get(i).getDataDePesagem()));
            if (i == 0){
                pesoAnimalResponseDTO.get(i).setSaldoDePeso(BigDecimal.ZERO);
            } else{
                pesoAnimalResponseDTO.get(i).setSaldoDePeso(pesoAnimalResponseDTO.get(i).getPeso().subtract(pesoAnimalResponseDTO.get(i-1).getPeso()));
            }
        }
        return pesoAnimalResponseDTO;
    }
}
