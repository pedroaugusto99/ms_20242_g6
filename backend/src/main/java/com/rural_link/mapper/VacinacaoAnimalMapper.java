package com.rural_link.mapper;

import com.rural_link.domain.animal.VacinacaoAnimal;
import com.rural_link.dto.animal.VacinacaoAnimalDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public abstract class VacinacaoAnimalMapper {
    public static final VacinacaoAnimalMapper INSTANCE = Mappers.getMapper(VacinacaoAnimalMapper.class);

    public abstract VacinacaoAnimal toVacinacaoAnimal(VacinacaoAnimalDTO vacinacaoAnimalDTO);
    public abstract List<VacinacaoAnimalDTO> toListOfVacinacaoAnimalDTO(List<VacinacaoAnimal> vacinacoesAnimal);
}
