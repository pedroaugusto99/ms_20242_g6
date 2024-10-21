package com.rural_link.dto.authentication;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record LoginDTO(@Email @NotBlank  String email, @NotBlank  String password) {
}
