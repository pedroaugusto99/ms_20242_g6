package com.rural_link.dtos.authentication;

public record LoginResponseDTO(String email, String token, boolean redirectToCriarFazenda) {
}
