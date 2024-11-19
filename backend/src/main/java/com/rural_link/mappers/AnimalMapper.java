package com.rural_link.mappers;

import com.rural_link.dtos.animal.*;
import com.rural_link.entities.animal.Animal;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

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
