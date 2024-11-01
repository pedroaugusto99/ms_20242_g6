package com.rural_link.mappers;

import com.rural_link.entities.animal.VacinacaoAnimal;
import com.rural_link.dtos.animal.VacinacaoAnimalDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public abstract class VacinacaoAnimalMapper {
    public static final VacinacaoAnimalMapper INSTANCE = Mappers.getMapper(VacinacaoAnimalMapper.class);

    public abstract VacinacaoAnimal toVacinacaoAnimal(VacinacaoAnimalDTO vacinacaoAnimalDTO);
    public abstract List<VacinacaoAnimalDTO> toListOfVacinacaoAnimalDTO(List<VacinacaoAnimal> vacinacoesAnimal);
}
