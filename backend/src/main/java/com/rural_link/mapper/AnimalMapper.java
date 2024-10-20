package com.rural_link.mapper;

import com.rural_link.domain.animal.Animal;
import com.rural_link.dto.animal.AnimalDTO;
import com.rural_link.dto.animal.AnimalPutDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public abstract class AnimalMapper {
    public static final AnimalMapper INSTANCE = Mappers.getMapper(AnimalMapper.class);
    public abstract Animal toAnimal(AnimalPutDTO animalPutDTO);
    public abstract Animal toAnimal(AnimalDTO animalDTO);
    public abstract AnimalDTO toAnimalDTO(Animal animal);
    public abstract List<AnimalDTO> toAnimalDTO(List<Animal> animais);
}
