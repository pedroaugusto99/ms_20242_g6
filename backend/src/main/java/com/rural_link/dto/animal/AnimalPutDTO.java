package com.rural_link.dto.animal;

import com.rural_link.domain.animal.Origem;
import com.rural_link.domain.animal.Sexo;
import jakarta.validation.constraints.NotBlank;

import java.math.BigDecimal;
import java.time.LocalDate;

public record AnimalPutDTO(@NotBlank Long id, @NotBlank String nome, @NotBlank String codigo,
                           @NotBlank LocalDate dataDeNascimento, @NotBlank String raca, String codigoDaMae,
                           String codigoDoPai, @NotBlank Sexo sexo, @NotBlank BigDecimal peso, @NotBlank Origem origem) {
}
