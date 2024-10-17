package com.rural_link.dto.animal;

import com.rural_link.domain.animal.Origem;
import com.rural_link.domain.animal.Sexo;

import java.math.BigDecimal;
import java.time.LocalDate;

public record AnimalDTO(String nome, String codigo, LocalDate dataDeNascimento, String raca, String codigoDaMae,
                        String codigoDoPai, Sexo sexo, BigDecimal peso, Origem origem) {
}
