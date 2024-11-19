package com.rural_link.mappers;

import com.rural_link.entities.usuarios.TrabalhadorRural;
import com.rural_link.dtos.fazenda.FazendaTrabalhadoresResponseDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public abstract class TrabalhadorRuralMapper {
    public static final TrabalhadorRuralMapper INSTANCE = Mappers.getMapper(TrabalhadorRuralMapper.class);
    public abstract List<FazendaTrabalhadoresResponseDTO> toListOfFazendaTrabalhadorResponseDTO(List<TrabalhadorRural> trabalhadores);
}
