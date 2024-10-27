package com.rural_link.dto.authentication;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;

public record RegistrarTrabalhadorRequestDTO(@NotNull String nomeCompleto,
                                             @NotNull @Email String email,
                                             @NotNull String password,
                                             @NotNull String telefone,
                                             @NotNull String codigo) {
}
