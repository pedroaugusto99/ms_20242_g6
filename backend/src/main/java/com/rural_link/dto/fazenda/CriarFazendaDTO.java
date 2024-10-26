package com.rural_link.dto.fazenda;

import com.rural_link.domain.fazenda.TipoDaFazenda;

import java.math.BigDecimal;

public record CriarFazendaDTO(String nomeDaFazenda, String endereco, String complemento, String cidade,
                              String cep, String estado, TipoDaFazenda tipoDaFazenda, BigDecimal tamanho) {
}
