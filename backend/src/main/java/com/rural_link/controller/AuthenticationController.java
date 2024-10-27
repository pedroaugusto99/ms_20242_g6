package com.rural_link.controller;

import com.rural_link.domain.usuarios.Pessoa;
import com.rural_link.dto.authentication.LoginRequestDTO;
import com.rural_link.dto.authentication.RegistrarProprietarioRequestDTO;
import com.rural_link.dto.authentication.RegistrarTrabalhadorRequestDTO;
import com.rural_link.dto.authentication.LoginResponseDTO;
import com.rural_link.service.authentication.AuthenticationService;
import com.rural_link.service.proprietario.ProprietarioService;
import com.rural_link.infra.security.TokenService;
import com.rural_link.service.trabalhador.TrabalhadorRuralService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/autenticacao")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
public class AuthenticationController {
    private final AuthenticationManager authenticationManager;
    private final TrabalhadorRuralService trabalhadorRuralService;
    private final TokenService tokenService;
    private final ProprietarioService proprietarioService;
    private final AuthenticationService authenticationService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody @Valid LoginRequestDTO data){
        UsernamePasswordAuthenticationToken usernamePassword = new UsernamePasswordAuthenticationToken(data.email(), data.password());
        Authentication auth = this.authenticationManager.authenticate(usernamePassword);

        String token = tokenService.gerarToken((Pessoa) auth.getPrincipal());

        return ResponseEntity.ok(authenticationService.gerarDadosDoLogin(data, token));
    }

    @PostMapping("/registrar/proprietario")
    public ResponseEntity<Void> registrarProprietario(@RequestBody @Valid RegistrarProprietarioRequestDTO data){
        proprietarioService.registrarProprietario(data);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/registrar/trabalhador")
    public ResponseEntity<Void> registrarTrabalhador(@RequestBody @Valid RegistrarTrabalhadorRequestDTO data){
        trabalhadorRuralService.registrarTrabalhador(data);
        return ResponseEntity.ok().build();
    }
}
