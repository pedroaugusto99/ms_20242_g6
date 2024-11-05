package com.rural_link.repositories;

import com.rural_link.entities.animal.Animal;
import com.rural_link.entities.animal.PesoAnimal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PesoAnimalRepository extends JpaRepository<PesoAnimal, Long> {
    List<PesoAnimal> findFirst2ByOrderByIdDesc();
    List<PesoAnimal> findByAnimal(Animal animal);
    PesoAnimal findFirstByOrderByIdDesc();
}
