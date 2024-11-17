package com.rural_link.dtos.redefinirsenha;

import lombok.Builder;

@Builder
public record ValidarTokenDTO(boolean tokenValido) {
}
