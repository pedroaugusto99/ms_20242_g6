package com.rural_link.dtos.animal;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public record VacinacaoAnimalDTO(
        @Schema(description = "Nome da vacina dada ao animal", example = "IBR", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotNull
        String nomeDaVacina,
        @Schema(description = "Data da vacinação do animal", example = "2023-04-05", format = "date", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotNull
        LocalDate dataDeVacinacao,
        @Schema(description = "Número de doses da vacina dada ao animal", example = "3", type = "int", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotNull
        Integer numeroDeDoses, LocalDate dataDaProximaVacinacao,
        @Schema(description = "ID (Identificador único) do animal que recebeu a vacina no banco de dados", example = "1", type = "int", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotNull
        Long animalId) {
}
