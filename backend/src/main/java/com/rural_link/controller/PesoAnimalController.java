package com.rural_link.controller;

import com.rural_link.dto.animal.PesoAnimalRequestDTO;
import com.rural_link.dto.animal.PesoAnimalResponseDTO;
import com.rural_link.service.animal.PesoAnimalService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/animal/peso")
@RequiredArgsConstructor
public class PesoAnimalController {

    private final PesoAnimalService pesoAnimalService;

    @PostMapping("/salvar")
    public ResponseEntity<PesoAnimalResponseDTO> salvarPesoDoAnimal(@RequestBody PesoAnimalRequestDTO pesoAnimalRequestDTO){
        return ResponseEntity.ok().body(pesoAnimalService.salvarPesoDoAnimal(pesoAnimalRequestDTO));
    }

    @DeleteMapping("/remover/{id}")
    public ResponseEntity<Void> removerPesoDoAnimal(@PathVariable Long id){
        pesoAnimalService.removerPesoDoAnimal(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/listar/{animalId}")
    public ResponseEntity<List<PesoAnimalResponseDTO>> listarTodosPesos(@PathVariable Long animalId){
        return ResponseEntity.ok().body(pesoAnimalService.listarTodosPesos(animalId));
    }
}
