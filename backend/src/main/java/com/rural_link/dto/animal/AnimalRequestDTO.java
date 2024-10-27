package com.rural_link.dto.animal;

import com.rural_link.domain.animal.Especie;
import com.rural_link.domain.animal.Raca;
import com.rural_link.domain.animal.Sexo;
import com.rural_link.domain.animal.Status;

import java.time.LocalDate;

public record AnimalRequestDTO(String nome, String codigo, Especie especie, Raca raca,
                               Sexo sexo, LocalDate dataDeNascimento, Integer idade, LocalDate dataDeAquisicao,
                               String codigoDaMae, String codigoDoPai, Status status, String lote) {
}
