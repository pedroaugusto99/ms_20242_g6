package com.rural_link.dtos.fazenda;

import com.rural_link.entities.fazenda.TipoDaFazenda;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;

public record CriarFazendaRequestDTO(
        @Schema(description = "Nome da fazenda do proprietário", example = "Recanto Belo", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotNull
        String nomeDaFazenda,
        @Schema(description = "Endereço da fazenda do proprietário", example = "BR-153", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotNull
        String endereco,
        @Schema(description = "Complemento do endereço da fazenda do proprietário", example = "N 123", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
        String complemento,
        @Schema(description = "Cidade da fazenda do proprietário", example = "Inhumas", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotNull
        String cidade,
        @Schema(description = "CEP da fazenda do proprietário", example = "43265-444", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
        String cep,
        @Schema(description = "Estado da fazenda do proprietário", example = "Goiás", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotNull
        String estado,
        @Schema(description = "Tipo da fazenda do proprietário", example = "LEITEIRA", allowableValues = {"LEITEIRA", "DE_CORTE", "DE_CORTE_E_LEITEIRA"}, requiredMode = Schema.RequiredMode.REQUIRED)
        @NotNull
        TipoDaFazenda tipoDaFazenda,
        @Schema(description = "Tamanho da fazenda do proprietário", example = "6779.98", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotNull
        BigDecimal tamanho) {
}
