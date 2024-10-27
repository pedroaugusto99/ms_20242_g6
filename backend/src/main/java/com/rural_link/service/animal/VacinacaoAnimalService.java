package com.rural_link.service.animal;

import com.rural_link.domain.animal.Animal;
import com.rural_link.domain.animal.VacinacaoAnimal;
import com.rural_link.dto.animal.VacinacaoAnimalDTO;
import com.rural_link.mapper.VacinacaoAnimalMapper;
import com.rural_link.repositories.AnimalRepository;
import com.rural_link.repositories.VacinacaoAnimalRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class VacinacaoAnimalService {

    private final VacinacaoAnimalRepository vacinacaoAnimalRepository;
    private final AnimalRepository animalRepository;

    public void salvarVacinacaoDoAnimal(VacinacaoAnimalDTO vacinacaoAnimalDTO){
        Animal animal = animalRepository.findById(vacinacaoAnimalDTO.animalId()).orElseThrow(() -> new RuntimeException("Animal não foi cadastrado"));
        VacinacaoAnimal vacinacaoAnimal = VacinacaoAnimalMapper.INSTANCE.toVacinacaoAnimal(vacinacaoAnimalDTO);
        vacinacaoAnimal.setAnimal(animal);
        vacinacaoAnimalRepository.save(vacinacaoAnimal);
    }

    public void removerVacinacaoDoAnimal(Long id){
        VacinacaoAnimal vacinacaoAnimal = vacinacaoAnimalRepository.findById(id).orElseThrow(() -> new RuntimeException("Vacinação selecionada não foi cadastrada"));
        vacinacaoAnimalRepository.delete(vacinacaoAnimal);
    }

    public List<VacinacaoAnimalDTO> listarVacinacoesDoAnimal(Long animalId){
        Animal animal = animalRepository.findById(animalId).orElseThrow(() -> new RuntimeException("Id do Animal não foi encontrado"));
        List<VacinacaoAnimal> vacinacoesDoAnimal = vacinacaoAnimalRepository.findByAnimal(animal);
        return VacinacaoAnimalMapper.INSTANCE.toListOfVacinacaoAnimalDTO(vacinacoesDoAnimal);
    }
}
