package com.rural_link.controller;

import com.rural_link.domain.usuarios.Pessoa;
import com.rural_link.dto.animal.PesoAnimalRequestDTO;
import com.rural_link.dto.animal.PesoAnimalResponseDTO;
import com.rural_link.exceptions.UserNotAuthenticatedException;
import com.rural_link.repositories.PessoaRepository;
import com.rural_link.service.animal.PesoAnimalService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/animal/peso")
@RequiredArgsConstructor
public class PesoAnimalController {

    private final PesoAnimalService pesoAnimalService;
    private final PessoaRepository pessoaRepository;


    @PostMapping("/salvar")
    public ResponseEntity<PesoAnimalResponseDTO> salvarPesoDoAnimal(@RequestBody PesoAnimalRequestDTO pesoAnimalRequestDTO){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        Pessoa pessoaAutenticada = pessoaRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        return ResponseEntity.ok().body(pesoAnimalService.salvarPesoDoAnimal(pesoAnimalRequestDTO, pessoaAutenticada));
    }

    @DeleteMapping("/remover/{id}")
    public ResponseEntity<Void> removerPesoDoAnimal(@PathVariable Long id){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        Pessoa pessoaAutenticada = pessoaRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        pesoAnimalService.removerPesoDoAnimal(id, pessoaAutenticada);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/listar/{animalId}")
    public ResponseEntity<List<PesoAnimalResponseDTO>> listarTodosPesos(@PathVariable Long animalId){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        Pessoa pessoaAutenticada = pessoaRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        return ResponseEntity.ok().body(pesoAnimalService.listarTodosPesos(animalId, pessoaAutenticada));
    }
}
