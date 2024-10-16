package com.rural_link.controller;

import com.rural_link.domain.fazenda.Fazenda;
import com.rural_link.domain.proprietario.Proprietario;
import com.rural_link.domain.user.User;
import com.rural_link.dto.fazenda.CriarFazendaDTO;
import com.rural_link.repositories.FazendaRepository;
import com.rural_link.repositories.ProprietarioRepository;
import com.rural_link.service.fazenda.FazendaService;
import com.rural_link.service.proprietario.ProprietarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/fazenda")
@RequiredArgsConstructor
public class FazendaController {
    private final ProprietarioRepository proprietarioRepository;
    private final FazendaRepository fazendaRepository;
    private final FazendaService fazendaService;
    private final ProprietarioService proprietarioService;

    @PostMapping("/criar")
    public ResponseEntity<Fazenda> criarFazenda(@RequestBody CriarFazendaDTO criarFazendaDTO){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) authentication.getPrincipal();
        Proprietario proprietario = proprietarioRepository.findByEmail(user.getEmail())
                .orElseThrow(() -> new RuntimeException("Proprietário não foi cadastrado"));
        if (proprietario.getFazenda() != null){
            return ResponseEntity.badRequest().build();
        }
        Fazenda fazenda = fazendaService.criarFazenda(criarFazendaDTO.nome());
        proprietarioService.salvarFazendaDoProprietario(proprietario, fazenda);
        return ResponseEntity.ok(fazenda);
    }
}
