package com.rural_link.controller;

import com.rural_link.domain.usuarios.Pessoa;
import com.rural_link.dto.animal.AnimalDTO;
import com.rural_link.dto.animal.AnimalPutDTO;
import com.rural_link.dto.animal.QrCodeDTO;
import com.rural_link.exceptions.UserNotAuthenticatedException;
import com.rural_link.repositories.PessoaRepository;
import com.rural_link.service.animal.AnimalService;
import com.rural_link.specifications.AnimalQueryFilter;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/animal")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
public class AnimalController {

    private final AnimalService animalService;
    private final PessoaRepository pessoaRepository;


    @PostMapping("/cadastrar")
    public ResponseEntity<Void> salvarAnimal(@RequestBody @Valid AnimalDTO animalDTO){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        Pessoa pessoaAutenticada = pessoaRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        animalService.salvar(animalDTO, pessoaAutenticada);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/qr-code/{id}")
    public ResponseEntity<QrCodeDTO> buscarQrCode(@PathVariable Long id){
        return ResponseEntity.ok().body(animalService.buscarQrCode(id));
    }

    @GetMapping("/listar-todos")
    public ResponseEntity<Page<AnimalDTO>> listarTodosAnimais(Pageable pageable){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        Pessoa pessoaAutenticada = pessoaRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        return new ResponseEntity<>(animalService.listarTodosAnimaisPaginados(pageable, pessoaAutenticada), HttpStatus.OK);
    }

    @GetMapping("/listar")
    public ResponseEntity<List<AnimalDTO>> buscarAnimalPorNome(@RequestParam String nome){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        Pessoa pessoaAutenticada = pessoaRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        return new ResponseEntity<>(animalService.buscarAnimalPorNome(nome, pessoaAutenticada), HttpStatus.OK);
    }

    @GetMapping("/filtrar")
    public ResponseEntity<List<AnimalDTO>> filtrarPorCampos(AnimalQueryFilter animalQueryFilter){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        Pessoa pessoaAutenticada = pessoaRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        return new ResponseEntity<>(animalService.filtrarPorCampos(animalQueryFilter, pessoaAutenticada), HttpStatus.OK);
    }

    @PutMapping("/atualizar")
    public ResponseEntity<AnimalDTO> atualizarDadosDoAnimal(@RequestBody @Valid AnimalPutDTO animal){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        Pessoa pessoaAutenticada = pessoaRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        return new ResponseEntity<>(animalService.atualizarDadosDoAnimal(animal, pessoaAutenticada), HttpStatus.OK);
    }
}
