package com.rural_link.mapper;

import com.rural_link.domain.animal.Animal;
import com.rural_link.dto.animal.*;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.springframework.data.domain.Page;

import java.util.List;

@Mapper(componentModel = "spring")
public abstract class AnimalMapper {
    public static final AnimalMapper INSTANCE = Mappers.getMapper(AnimalMapper.class);
    public abstract Animal toAnimal(AnimalPutRequestDTO animalPutRequestDTO);
    public abstract Animal toAnimal(AnimalRequestDTO animalRequestDTO);
    public abstract AnimalResponseDTO toAnimalResponseDTO(Animal animal);
    public abstract List<AnimalResponseDTO> toAnimalResponseDTO(List<Animal> animais);
    public abstract List<CriaResponseDTO> toListOfCriaResponseDTO(List<Animal> animais);
    public abstract List<AnimalListResponseDTO> toListOfAnimalListResponseDTO(List<Animal> animais);
}
