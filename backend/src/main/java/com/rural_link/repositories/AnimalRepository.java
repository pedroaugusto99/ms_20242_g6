package com.rural_link.repositories;

import com.rural_link.domain.animal.Animal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AnimalRepository extends JpaRepository<Animal, Long> {
    Optional<Animal> findByCodigo(String codigo);
}
