package com.rural_link.dtos.animal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VacinacaoAnimalResponseDTO {
    private String nomeDaVacina;
    private String dataDeVacinacao;
    private Integer numeroDeDoses;
    private String dataDaProximaVacinacao;
    private Long animalId;
}
