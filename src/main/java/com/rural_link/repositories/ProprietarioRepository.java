package com.rural_link.repositories;

import com.rural_link.domain.proprietario.Proprietario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProprietarioRepository extends JpaRepository<Proprietario, Long> {
    Optional<Proprietario> findByEmail(String email);
}