package com.rural_link.controller;

import com.rural_link.domain.usuarios.Pessoa;
import com.rural_link.dto.animal.*;
import com.rural_link.service.animal.AnimalService;
import com.rural_link.specifications.AnimalQueryFilter;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
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

    @PostMapping("/cadastrar")
    public ResponseEntity<Void> salvarAnimal(@RequestBody @Valid AnimalRequestDTO animalRequestDTO){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        animalService.salvar(animalRequestDTO, pessoa);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/qr-code/{id}")
    public ResponseEntity<QrCodeResponseDTO> buscarQrCode(@PathVariable Long id){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        return ResponseEntity.ok().body(animalService.buscarQrCode(pessoa, id));
    }

    @GetMapping("/listar-todos")
    public ResponseEntity<List<AnimalListResponseDTO>> listarTodosAnimais(Pageable pageable){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        return new ResponseEntity<>(animalService.listarTodosAnimais(pessoa), HttpStatus.OK);
    }

    @GetMapping("/listar")
    public ResponseEntity<List<AnimalListResponseDTO>> buscarAnimalPorNome(@RequestParam String nome){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        return new ResponseEntity<>(animalService.buscarAnimalPorNome(nome, pessoa), HttpStatus.OK);
    }

    @GetMapping("/listar-crias/{id}")
    public ResponseEntity<List<CriaResponseDTO>> buscarCriasDoAnimal(@PathVariable Long id){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        return ResponseEntity.ok().body(animalService.buscarCriasDoAnimal(pessoa, id));
    }

    @GetMapping("/listar/{id}")
    public ResponseEntity<AnimalResponseDTO> buscarAnimalPorId(@PathVariable Long id){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        return ResponseEntity.ok().body(animalService.buscarAnimalPorId(pessoa, id));
    }

    @GetMapping("/filtrar")
    public ResponseEntity<List<AnimalListResponseDTO>> filtrarPorCampos(AnimalQueryFilter animalQueryFilter){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        return new ResponseEntity<>(animalService.filtrarPorCampos(animalQueryFilter, pessoa), HttpStatus.OK);
    }

    @PutMapping("/atualizar")
    public ResponseEntity<AnimalResponseDTO> atualizarDadosDoAnimal(@RequestBody @Valid AnimalPutRequestDTO animal){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        return new ResponseEntity<>(animalService.atualizarDadosDoAnimal(animal, pessoa), HttpStatus.OK);
    }

    @DeleteMapping("/remover/{id}")
    public ResponseEntity<Void> removerAnimal(@PathVariable Long id){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        animalService.removerAnimal(pessoa, id);
        return ResponseEntity.noContent().build();
    }
}
