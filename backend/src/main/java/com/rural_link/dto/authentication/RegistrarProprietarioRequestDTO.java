package com.rural_link.dto.authentication;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;

public record RegistrarProprietarioRequestDTO(@NotNull String nomeCompleto,
                                              @Email @NotNull String email,
                                              @NotNull String password,
                                              @NotNull String telefone) {
}
