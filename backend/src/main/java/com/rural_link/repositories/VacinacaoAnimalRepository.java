package com.rural_link.repositories;

import com.rural_link.entities.animal.Animal;
import com.rural_link.entities.animal.VacinacaoAnimal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VacinacaoAnimalRepository extends JpaRepository<VacinacaoAnimal, Long> {
    List<VacinacaoAnimal> findByAnimal(Animal animal);
}
