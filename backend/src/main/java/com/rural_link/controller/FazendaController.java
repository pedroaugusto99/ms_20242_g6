package com.rural_link.controller;

import com.rural_link.domain.usuarios.Pessoa;
import com.rural_link.domain.usuarios.Proprietario;
import com.rural_link.dto.fazenda.CriarFazendaDTO;
import com.rural_link.dto.fazenda.CriarFazendaResponseDTO;
import com.rural_link.repositories.ProprietarioRepository;
import com.rural_link.service.fazenda.FazendaService;
import lombok.RequiredArgsConstructor;
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
    public ResponseEntity<CriarFazendaResponseDTO> criarFazenda(@RequestBody CriarFazendaDTO criarFazendaDTO){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        Proprietario proprietario = proprietarioRepository.findByEmail(pessoa.getEmail()).orElseThrow(() -> new RuntimeException("Proprietário não foi cadastrado"));
        return fazendaService.criarFazenda(criarFazendaDTO, proprietario);
    }

    @GetMapping("/gerar-codigo")
    public ResponseEntity<CriarFazendaResponseDTO> gerarNovoCodigo(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        Proprietario proprietario = proprietarioRepository.findByEmail(pessoa.getEmail()).orElseThrow(() -> new RuntimeException("Proprietário não foi autenticado"));
        return fazendaService.gerarNovoCodigo(proprietario);
    }
}
