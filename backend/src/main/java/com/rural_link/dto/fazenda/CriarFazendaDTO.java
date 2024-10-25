package com.rural_link.dto.fazenda;

import com.rural_link.domain.fazenda.TipoDaFazenda;
import jakarta.validation.constraints.NotBlank;

import java.math.BigDecimal;

public record CriarFazendaDTO(@NotBlank String nomeDaFazenda, @NotBlank String endereco, String complemento, @NotBlank String cidade,
                              String cep, @NotBlank String estado, @NotBlank TipoDaFazenda tipoDaFazenda,
                              @NotBlank BigDecimal tamanho) {
}
