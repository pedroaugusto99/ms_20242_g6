package com.rural_link.dtos.animal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CriaResponseDTO{
    private String codigo;
    private String dataDeNascimento;
    private String codigoDoFamiliar;
    private Integer idade;
    private Long id;
}
