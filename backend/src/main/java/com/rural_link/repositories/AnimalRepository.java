package com.rural_link.repositories;

import com.rural_link.domain.animal.Animal;
import com.rural_link.domain.fazenda.Fazenda;
import com.rural_link.dto.animal.AnimalDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;
import java.util.Optional;

public interface AnimalRepository extends JpaRepository<Animal, Long>, JpaSpecificationExecutor<Animal> {
    Optional<Animal> findByCodigoAndFazenda(String codigo, Fazenda fazenda);
    List<AnimalDTO> findByNomeLikeAndFazenda(String nome, Fazenda fazenda);
    Page<AnimalDTO> findByFazenda(Fazenda fazenda, Pageable pageable);
    Optional<Animal> findByIdAndFazenda(Long id, Fazenda fazenda);
    List<Animal> findAll(Specification<Animal> specification);
}

