package com.rural_link.controller;

import com.rural_link.domain.usuarios.Pessoa;
import com.rural_link.dto.authentication.LoginDTO;
import com.rural_link.dto.authentication.RegistrarProprietarioDTO;
import com.rural_link.dto.authentication.RegistrarTrabalhadorDTO;
import com.rural_link.dto.authentication.LoginResponseDTO;
import com.rural_link.service.proprietario.ProprietarioService;
import com.rural_link.infra.security.TokenService;
import com.rural_link.service.trabalhador.TrabalhadorRuralService;
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

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody LoginDTO data){
        UsernamePasswordAuthenticationToken usernamePassword = new UsernamePasswordAuthenticationToken(data.email(), data.password());
        Authentication auth = this.authenticationManager.authenticate(usernamePassword);

        String token = tokenService.gerarToken((Pessoa) auth.getPrincipal());

        return ResponseEntity.ok(new LoginResponseDTO(data.email(), token));
    }

    @PostMapping("/registrar/proprietario")
    public ResponseEntity<Void> registrarProprietario(@RequestBody RegistrarProprietarioDTO data){
        return proprietarioService.registrarProprietario(data);
    }

    @PostMapping("/registrar/trabalhador")
    public ResponseEntity<Void> registrarTrabalhador(@RequestBody RegistrarTrabalhadorDTO data){
        return trabalhadorRuralService.registrarTrabalhador(data);
    }
}
