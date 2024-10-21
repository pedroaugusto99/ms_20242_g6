package com.rural_link.dto.authentication;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record RegistrarTrabalhadorDTO(@NotBlank String nomeCompleto,
                                      @NotBlank @Email String email,
                                      @NotBlank String password,
                                      @NotBlank String telefone,
                                      @NotBlank String codigo) {
}
