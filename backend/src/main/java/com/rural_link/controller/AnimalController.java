package com.rural_link.controller;

import com.rural_link.domain.animal.Animal;
import com.rural_link.dto.animal.AnimalDTO;
import com.rural_link.service.animal.AnimalService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/animal")
@RequiredArgsConstructor
public class AnimalController {

    private final AnimalService animalService;

    @GetMapping("/listar")
    public ResponseEntity<List<Animal>> listarTodos(){
        return ResponseEntity.ok(animalService.listarTodos());
    }

    @PostMapping("/salvar")
    public ResponseEntity<Animal> salvarAnimal(@RequestBody AnimalDTO animalDTO){
        return ResponseEntity.ok(animalService.salvar(animalDTO));
    }
}
