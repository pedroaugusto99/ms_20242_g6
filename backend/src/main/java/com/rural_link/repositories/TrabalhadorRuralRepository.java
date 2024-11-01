package com.rural_link.repositories;

import com.rural_link.entities.fazenda.Fazenda;
import com.rural_link.entities.usuarios.TrabalhadorRural;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TrabalhadorRuralRepository extends JpaRepository<TrabalhadorRural, Long> {
    Optional<TrabalhadorRural> findByEmail(String email);
    List<TrabalhadorRural> findByFazenda(Fazenda fazenda);
}
