package com.rural_link.repositories;

import com.rural_link.domain.fazenda.Fazenda;
import com.rural_link.domain.proprietario.Proprietario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface FazendaRepository extends JpaRepository<Fazenda, Long> {
}
