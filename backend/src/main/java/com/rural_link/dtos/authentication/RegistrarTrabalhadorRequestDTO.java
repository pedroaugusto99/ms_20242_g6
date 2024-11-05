package com.rural_link.dtos.authentication;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;

public record RegistrarTrabalhadorRequestDTO(
        @Schema(description = "Nome completo do trabalhador rural", example = "Ciclano Santos", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotNull
        String nomeCompleto,
        @Schema(description = "Email do trabalhador rural", example = "ciclanosantos@gmail.com", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotNull
        @Email
        String email,
        @Schema(description = "Senha do trabalhador rural", example = "ciclano", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotNull
        String password,
        @Schema(description = "Telefone do trabalhador rural", example = "(62)98888-8888", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotNull
        String telefone,
        @Schema(description = "Código da fazenda que o trabalhador rural vai se associar", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotNull
        String codigo) {
}
