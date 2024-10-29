package com.rural_link.service.animal;

import com.rural_link.domain.animal.Animal;
import com.rural_link.domain.animal.PesoAnimal;
import com.rural_link.domain.fazenda.Fazenda;
import com.rural_link.domain.usuarios.Pessoa;
import com.rural_link.domain.usuarios.Proprietario;
import com.rural_link.domain.usuarios.TrabalhadorRural;
import com.rural_link.domain.usuarios.UserRole;
import com.rural_link.dto.animal.PesoAnimalRequestDTO;
import com.rural_link.dto.animal.PesoAnimalResponseDTO;
import com.rural_link.exceptions.UserNotAuthenticatedException;
import com.rural_link.mapper.PesoAnimalMapper;
import com.rural_link.repositories.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
@Log4j2
public class PesoAnimalService {

    private final PesoAnimalRepository pesoAnimalRepository;
    private final PessoaRepository pessoaRepository;
    private final AnimalRepository animalRepository;
    private final TrabalhadorRuralRepository trabalhadorRuralRepository;
    private final ProprietarioRepository proprietarioRepository;

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
                pesoAnimalSalvo.getDataDePesagem(),
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
            if (i == 0){
                pesoAnimalResponseDTO.get(i).setSaldoDePeso(BigDecimal.ZERO);
            } else{
                pesoAnimalResponseDTO.get(i).setSaldoDePeso(pesoAnimalResponseDTO.get(i).getPeso().subtract(pesoAnimalResponseDTO.get(i-1).getPeso()));
            }
            pesoAnimalResponseDTO.get(i).setAnimalId(animalId);
        }
        return pesoAnimalResponseDTO;
    }
}
