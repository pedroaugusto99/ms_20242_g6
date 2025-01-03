package com.rural_link.dtos.animal;

import com.rural_link.entities.animal.Especie;
import com.rural_link.entities.animal.Raca;
import com.rural_link.entities.animal.Sexo;
import com.rural_link.entities.animal.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AnimalResponseDTO {
    private Long id;
    private String nome;
    private String codigo;
    private Especie especie;
    private Raca raca;
    private Sexo sexo;
    private String dataDeNascimento;
    private Integer idade;
    private String dataDeAquisicao;
    private Status status;
    private String lote;
    private String codigoDoPai;
    private String codigoDaMae;
    private BigDecimal pesoAtual;
    private Integer numeroDeCrias;
}
