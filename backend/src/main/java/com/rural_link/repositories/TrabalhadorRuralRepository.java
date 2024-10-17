package com.rural_link.repositories;

import com.rural_link.domain.usuarios.TrabalhadorRural;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TrabalhadorRuralRepository extends JpaRepository<TrabalhadorRural, Long> {
    Optional<TrabalhadorRural> findByEmail(String email);
}
