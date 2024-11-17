package com.rural_link.entities.redefinirsenha;

import com.rural_link.entities.usuarios.Pessoa;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RedefinirSenha {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String token;
    private LocalDateTime dataExpiracao;
    @OneToOne
    @JoinColumn(name = "usuario_id")
    private Pessoa pessoa;
}
