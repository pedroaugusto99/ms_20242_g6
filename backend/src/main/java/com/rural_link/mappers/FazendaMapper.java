package com.rural_link.mappers;

import com.rural_link.entities.fazenda.Fazenda;
import com.rural_link.dtos.fazenda.CriarFazendaRequestDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public abstract class FazendaMapper {
    public static final FazendaMapper INSTANCE = Mappers.getMapper(FazendaMapper.class);
    public abstract Fazenda toFazenda(CriarFazendaRequestDTO criarFazendaRequestDTO);
}
