package com.rural_link.dto.authentication;

import com.rural_link.domain.user.UserRole;

public record RegistrarDTO(String email, String password, UserRole role) {
}
