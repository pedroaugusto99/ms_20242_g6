package com.rural_link.dtos.perfil;

import com.rural_link.entities.fazenda.TipoDaFazenda;
import lombok.Builder;

import java.math.BigDecimal;

@Builder
public record PerfilResponseDTO(String nome, String email, String telefone, String endereco, String complemento, String cidade,
                                String cep, String estado, String role, String nomeDaFazenda, String codigoDaFazenda,
                                TipoDaFazenda tipoDaFazenda, BigDecimal tamanhoDaFazenda) {
}
