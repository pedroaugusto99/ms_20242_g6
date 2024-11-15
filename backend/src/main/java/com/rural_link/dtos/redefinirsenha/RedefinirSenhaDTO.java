package com.rural_link.dtos.redefinirsenha;

import jakarta.validation.constraints.Email;

public record RedefinirSenhaDTO(@Email String email, String password) {
}
