package com.rural_link.controller;

import com.rural_link.domain.usuarios.Pessoa;
import com.rural_link.dto.animal.VacinacaoAnimalDTO;
import com.rural_link.service.animal.VacinacaoAnimalService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/animal/vacinacao")
@RequiredArgsConstructor
public class VacinacaoAnimalController {

    private final VacinacaoAnimalService vacinacaoAnimalService;

    @PostMapping("/salvar")
    public ResponseEntity<Void> salvarVacinacaoDoAnimal(@RequestBody VacinacaoAnimalDTO vacinacaoAnimalDTO){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        vacinacaoAnimalService.salvarVacinacaoDoAnimal(vacinacaoAnimalDTO, pessoa);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/remover/{id}")
    public ResponseEntity<Void> removerVacinacaoDoAnimal(@PathVariable Long id){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        vacinacaoAnimalService.removerVacinacaoDoAnimal(id, pessoa);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/listar/{animalId}")
    public ResponseEntity<List<VacinacaoAnimalDTO>> listarVacinacoesDoAnimal(@PathVariable Long animalId){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        return ResponseEntity.ok().body(vacinacaoAnimalService.listarVacinacoesDoAnimal(animalId, pessoa));
    }

}
