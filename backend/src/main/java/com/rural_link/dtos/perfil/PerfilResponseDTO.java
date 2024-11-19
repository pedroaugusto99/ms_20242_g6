package com.rural_link.dtos.perfil;

import lombok.Builder;

@Builder
public record PerfilResponseDTO(String nome, String email, String telefone, String endereco, String complemento, String cidade,
                                String cep, String estado, String role, String nomeDaFazenda, String codigoDaFazenda) {
}
