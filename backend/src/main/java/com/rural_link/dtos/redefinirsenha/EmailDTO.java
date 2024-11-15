package com.rural_link.dtos.redefinirsenha;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;

public record EmailDTO(@NotNull @Email String email) {
}
