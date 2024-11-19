package com.rural_link.dtos.animal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class PesoAnimalResponseDTO{
    private BigDecimal peso;
    private String dataDePesagem;
    private BigDecimal saldoDePeso;
    private Long id;
}
