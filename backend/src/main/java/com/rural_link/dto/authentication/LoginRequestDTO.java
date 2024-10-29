package com.rural_link.dto.authentication;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;

public record LoginRequestDTO(
        @Schema(description = "Email cadastrado do usuário", example = "fulano@gmail.com", requiredMode = Schema.RequiredMode.REQUIRED)
        @Email
        @NotNull
        String email,
        @Schema(description = "Senha cadastrada do usuário", example = "fulano", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotNull
        String password) {
}
