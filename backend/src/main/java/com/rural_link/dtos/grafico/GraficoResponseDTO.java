package com.rural_link.dtos.grafico;

import lombok.Builder;

@Builder
public record GraficoResponseDTO(Long animaisCadastrados, Long animaisMacho, Long animaisFemea) {
}
