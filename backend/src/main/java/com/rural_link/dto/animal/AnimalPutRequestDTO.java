package com.rural_link.dto.animal;

import com.rural_link.domain.animal.Status;
import jakarta.validation.constraints.NotNull;

public record AnimalPutRequestDTO(@NotNull Long id, Status status, String lote) {
}
