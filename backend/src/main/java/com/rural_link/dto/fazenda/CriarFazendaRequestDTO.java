package com.rural_link.dto.fazenda;

import com.rural_link.domain.fazenda.TipoDaFazenda;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;

public record CriarFazendaRequestDTO(@NotNull String nomeDaFazenda, @NotNull String endereco, String complemento,
                                     @NotNull String cidade, String cep, @NotNull String estado,
                                     @NotNull TipoDaFazenda tipoDaFazenda, @NotNull BigDecimal tamanho) {
}
