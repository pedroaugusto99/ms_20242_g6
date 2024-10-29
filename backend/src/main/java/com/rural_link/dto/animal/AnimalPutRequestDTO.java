package com.rural_link.dto.animal;

import com.rural_link.domain.animal.Status;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotNull;

public record AnimalPutRequestDTO(
        @Schema(description = "Identificador único do animal no banco de dados", example = "1", type = "int", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotNull Long id,
        @Schema(description = "Status do animal", example = "VENDIDO", allowableValues = {"ATIVO", "VENDIDO", "ABATIDO", "DESAPARECIDO"}, requiredMode = Schema.RequiredMode.NOT_REQUIRED)
        Status status,
        @Schema(description = "Lote em que o animal está", example = "Lt 77", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
        String lote) {
}
