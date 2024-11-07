package com.rural_link.dtos.authentication;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;

public record RegistrarProprietarioRequestDTO(
        @Schema(description = "Nome completo do proprietário", example = "Fulano Silva", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotNull
        String nomeCompleto,
        @Schema(description = "Email do proprietário", example = "fulano@gmail.com", requiredMode = Schema.RequiredMode.REQUIRED)
        @Email
        @NotNull
        String email,
        @Schema(description = "Senha do proprietário", example = "fulano", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotNull
        String password,
        @NotNull
        @Schema(description = "Telefone do proprietário", example = "(62)99999-9999", requiredMode = Schema.RequiredMode.REQUIRED)
        String telefone) {
}
