package com.rural_link.dto.animal;

import com.rural_link.domain.animal.Especie;
import com.rural_link.domain.animal.Raca;
import com.rural_link.domain.animal.Sexo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AnimalListResponseDTO {
    private Long animalId;
    private String codigo;
    private String nome;
    private Sexo sexo;
    private Especie especie;
    private Raca raca;
    private Integer idade;
    private String lote;
}
