package com.rural_link.dtos.redefinirsenha;

import jakarta.validation.constraints.Email;

public record TokenDTO(String token, @Email String email) {
}
