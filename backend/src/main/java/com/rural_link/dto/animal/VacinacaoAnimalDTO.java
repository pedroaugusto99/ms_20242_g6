package com.rural_link.dto.animal;

import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public record VacinacaoAnimalDTO(@NotNull String nomeDaVacina, @NotNull LocalDate dataDeVacinacao,
                                 @NotNull Integer numeroDeDoses, LocalDate dataDaProximaVacinacao,
                                 @NotNull Long animalId) {
}
