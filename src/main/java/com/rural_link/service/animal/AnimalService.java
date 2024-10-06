package com.rural_link.service.animal;

import com.rural_link.domain.animal.Animal;
import com.rural_link.dto.AnimalDTO;
import com.rural_link.repositories.AnimalRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AnimalService {
    private final AnimalRepository animalRepository;

    @Transactional
    public Animal salvar(AnimalDTO animalDTO){
        return animalRepository.save(Animal.builder().codigo(animalDTO.codigo()).build());
    }

    public List<Animal> listarTodos(){
        return animalRepository.findAll();
    }
}
