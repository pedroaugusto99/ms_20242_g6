package com.rural_link.dto.animal;

import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.time.LocalDate;

public record PesoAnimalRequestDTO(@NotNull BigDecimal peso, @NotNull LocalDate dataDePesagem, @NotNull Long animalId) {
}
