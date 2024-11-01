package com.rural_link.dtos.animal;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.time.LocalDate;

public record PesoAnimalRequestDTO(
        @Schema(description = "Peso do animal", example = "566.78", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotNull
        BigDecimal peso,
        @Schema(description = "Data de pesagem do animal", example = "2022-01-02", format = "date", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotNull
        LocalDate dataDePesagem,
        @Schema(description = "ID (Identificador único) do animal que foi pesado no banco de dados", example = "1", type = "int", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotNull
        Long animalId){

}