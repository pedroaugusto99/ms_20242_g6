package com.rural_link.dto.authentication;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record RegistrarProprietarioDTO(@NotBlank String nomeCompleto,
                                       @Email @NotBlank String email,
                                       @NotBlank String password,
                                       @NotBlank String telefone) {
}
