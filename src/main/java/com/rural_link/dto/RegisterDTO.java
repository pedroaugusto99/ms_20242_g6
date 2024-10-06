package com.rural_link.dto;

import com.rural_link.domain.user.UserRole;

public record RegisterDTO(String email, String password, UserRole role) {
}
