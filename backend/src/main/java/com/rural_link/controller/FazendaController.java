package com.rural_link.controller;

import com.rural_link.domain.usuarios.Pessoa;
import com.rural_link.domain.usuarios.Proprietario;
import com.rural_link.dto.fazenda.CriarFazendaRequestDTO;
import com.rural_link.dto.fazenda.CriarFazendaResponseDTO;
import com.rural_link.exceptions.UserNotAuthenticatedException;
import com.rural_link.repositories.ProprietarioRepository;
import com.rural_link.service.fazenda.FazendaService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/fazenda")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
public class FazendaController {
    private final FazendaService fazendaService;
    private final ProprietarioRepository proprietarioRepository;

    @PostMapping("/criar")
    public ResponseEntity<CriarFazendaResponseDTO> criarFazenda(@RequestBody @Valid CriarFazendaRequestDTO criarFazendaRequestDTO){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        Proprietario proprietario = proprietarioRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        return new ResponseEntity<>(fazendaService.criarFazenda(criarFazendaRequestDTO, proprietario), HttpStatus.OK);
    }

    @GetMapping("/gerar-codigo")
    public ResponseEntity<CriarFazendaResponseDTO> gerarNovoCodigo(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        Proprietario proprietario = proprietarioRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        return new ResponseEntity<>(fazendaService.gerarNovoCodigo(proprietario), HttpStatus.OK);
    }
}
