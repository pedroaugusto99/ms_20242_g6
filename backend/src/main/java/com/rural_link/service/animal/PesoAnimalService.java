package com.rural_link.service.animal;

import com.rural_link.domain.animal.Animal;
import com.rural_link.domain.animal.PesoAnimal;
import com.rural_link.dto.animal.PesoAnimalRequestDTO;
import com.rural_link.dto.animal.PesoAnimalResponseDTO;
import com.rural_link.mapper.PesoAnimalMapper;
import com.rural_link.repositories.AnimalRepository;
import com.rural_link.repositories.PesoAnimalRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PesoAnimalService {

    private final PesoAnimalRepository pesoAnimalRepository;
    private final AnimalRepository animalRepository;

    public PesoAnimalResponseDTO salvarPesoDoAnimal(PesoAnimalRequestDTO pesoAnimalRequestDTO){
        Animal animal = animalRepository.findById(pesoAnimalRequestDTO.animalId()).orElseThrow(() -> new RuntimeException("Animal não foi cadastrado"));
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

    public void removerPesoDoAnimal(Long id){
        PesoAnimal pesoAnimal = pesoAnimalRepository.findById(id).orElseThrow(() -> new RuntimeException("Peso do animal não está cadastrado"));
        pesoAnimalRepository.delete(pesoAnimal);
    }

    public List<PesoAnimalResponseDTO> listarTodosPesos(Long animalId){
        Animal animal = animalRepository.findById(animalId).orElseThrow(() -> new RuntimeException("Animal não foi cadastrado"));
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
