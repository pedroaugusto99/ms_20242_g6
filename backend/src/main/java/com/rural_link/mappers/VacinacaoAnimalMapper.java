package com.rural_link.mappers;

import com.rural_link.dtos.animal.VacinacaoAnimalResponseDTO;
import com.rural_link.entities.animal.VacinacaoAnimal;
import com.rural_link.dtos.animal.VacinacaoAnimalRequestDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public abstract class VacinacaoAnimalMapper {
    public static final VacinacaoAnimalMapper INSTANCE = Mappers.getMapper(VacinacaoAnimalMapper.class);

    public abstract VacinacaoAnimal toVacinacaoAnimal(VacinacaoAnimalRequestDTO vacinacaoAnimalRequestDTO);
    public abstract List<VacinacaoAnimalResponseDTO> toListOfVacinacaoAnimalResponseDTO(List<VacinacaoAnimal> vacinacoesAnimal);
}
