package com.rural_link.controller;

import com.rural_link.dto.animal.VacinacaoAnimalDTO;
import com.rural_link.service.animal.VacinacaoAnimalService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/animal/vacinacao")
@RequiredArgsConstructor
public class VacinacaoAnimalController {

    private final VacinacaoAnimalService vacinacaoAnimalService;

    @PostMapping("/salvar")
    public ResponseEntity<Void> salvarVacinacaoDoAnimal(@RequestBody VacinacaoAnimalDTO vacinacaoAnimalDTO){
        vacinacaoAnimalService.salvarVacinacaoDoAnimal(vacinacaoAnimalDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/remover/{id}")
    public ResponseEntity<Void> removerVacinacaoDoAnimal(@PathVariable Long id){
        vacinacaoAnimalService.removerVacinacaoDoAnimal(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/listar/{animalId}")
    public ResponseEntity<List<VacinacaoAnimalDTO>> listarVacinacoesDoAnimal(@PathVariable Long animalId){
        return ResponseEntity.ok().body(vacinacaoAnimalService.listarVacinacoesDoAnimal(animalId));
    }

}
