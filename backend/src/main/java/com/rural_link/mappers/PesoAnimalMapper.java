package com.rural_link.mappers;

import com.rural_link.entities.animal.PesoAnimal;
import com.rural_link.dtos.animal.PesoAnimalRequestDTO;
import com.rural_link.dtos.animal.PesoAnimalResponseDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public abstract class PesoAnimalMapper {
    public static final PesoAnimalMapper INSTANCE = Mappers.getMapper(PesoAnimalMapper.class);
    public abstract PesoAnimal toPesoAnimal(PesoAnimalRequestDTO pesoAnimalRequestDTO);
    public abstract List<PesoAnimalResponseDTO> toListOfPesoAnimalResponseDTO(List<PesoAnimal> pesosAnimal);
}
