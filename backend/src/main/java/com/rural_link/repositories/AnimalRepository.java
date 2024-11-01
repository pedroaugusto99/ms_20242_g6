package com.rural_link.repositories;

import com.rural_link.entities.animal.Animal;
import com.rural_link.entities.fazenda.Fazenda;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;
import java.util.Optional;

public interface AnimalRepository extends JpaRepository<Animal, Long>, JpaSpecificationExecutor<Animal> {
    Optional<Animal> findByCodigoAndFazenda(String codigo, Fazenda fazenda);
    List<Animal> findByNomeLikeAndFazenda(String nome, Fazenda fazenda);
    List<Animal> findByFazenda(Fazenda fazenda);
    Optional<Animal> findByIdAndFazenda(Long id, Fazenda fazenda);
    List<Animal> findAll(Specification<Animal> specification);
    List<Animal> findByCodigoDoPai(String codigoDoPai);
    List<Animal> findByCodigoDaMae(String codigoDaMae);
    boolean existsByIdAndFazenda(Long id, Fazenda fazenda);
}

