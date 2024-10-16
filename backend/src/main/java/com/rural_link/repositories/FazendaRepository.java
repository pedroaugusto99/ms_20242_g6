package com.rural_link.repositories;

import com.rural_link.domain.fazenda.Fazenda;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FazendaRepository extends JpaRepository<Fazenda, Long> {
    Optional<Fazenda> findByEndereco(String endereco);
}
