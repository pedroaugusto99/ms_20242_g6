package com.rural_link.dto.authentication;

public record LoginResponseDTO(String email, String token, boolean redirectToCriarFazenda) {
}
