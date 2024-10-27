package com.rural_link.mapper;

import com.rural_link.domain.fazenda.Fazenda;
import com.rural_link.dto.fazenda.CriarFazendaRequestDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public abstract class FazendaMapper {
    public static final FazendaMapper INSTANCE = Mappers.getMapper(FazendaMapper.class);
    public abstract Fazenda toFazenda(CriarFazendaRequestDTO criarFazendaRequestDTO);
}
