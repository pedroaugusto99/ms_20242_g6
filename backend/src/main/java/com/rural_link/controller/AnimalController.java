package com.rural_link.controller;

import com.rural_link.domain.animal.Animal;
import com.rural_link.domain.usuarios.Pessoa;
import com.rural_link.domain.usuarios.UserRole;
import com.rural_link.dto.animal.AnimalDTO;
import com.rural_link.repositories.PessoaRepository;
import com.rural_link.service.animal.AnimalService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/animal")
@RequiredArgsConstructor
public class AnimalController {

    private final AnimalService animalService;
    private final PessoaRepository pessoaRepository;


    @PostMapping("/cadastrar")
    public ResponseEntity<Void> salvarAnimal(@RequestBody AnimalDTO animalDTO){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        Pessoa pessoaAutenticada = pessoaRepository.findByEmail(pessoa.getEmail()).orElseThrow(() -> new RuntimeException("Usuário não está autenticado"));
        return animalService.salvar(animalDTO, pessoaAutenticada);
    }
}
