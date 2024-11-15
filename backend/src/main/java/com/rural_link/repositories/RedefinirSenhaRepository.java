package com.rural_link.repositories;

import com.rural_link.entities.redefinirsenha.RedefinirSenha;
import com.rural_link.entities.usuarios.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RedefinirSenhaRepository extends JpaRepository<RedefinirSenha, Long> {
    Optional<RedefinirSenha> findByTokenAndPessoa(String token, Pessoa pessoa);
    boolean existsByPessoa(Pessoa pessoa);

    Optional<RedefinirSenha> findByPessoa(Pessoa pessoa);
}
