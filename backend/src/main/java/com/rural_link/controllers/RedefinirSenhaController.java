package com.rural_link.controllers;

import com.rural_link.dtos.redefinirsenha.EmailDTO;
import com.rural_link.dtos.redefinirsenha.RedefinirSenhaDTO;
import com.rural_link.dtos.redefinirsenha.TokenDTO;
import com.rural_link.dtos.redefinirsenha.ValidarTokenDTO;
import com.rural_link.services.RedefinirSenhaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/esqueceu-senha")
@RequiredArgsConstructor
public class RedefinirSenhaController {

    private final RedefinirSenhaService redefinirSenhaService;

    @PostMapping("/email")
    public ResponseEntity<Void> enviarToken (@RequestBody EmailDTO emailDTO){
        redefinirSenhaService.verificarEmail(emailDTO);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/token")
    public ResponseEntity<ValidarTokenDTO> validarToken(@RequestBody TokenDTO token){
        return ResponseEntity.ok().body(redefinirSenhaService.validarToken(token));
    }

    @PutMapping
    public ResponseEntity<Void> redefinirSenha(@RequestBody RedefinirSenhaDTO redefinirSenhaDTO){
        redefinirSenhaService.redefinirSenha(redefinirSenhaDTO);
        return ResponseEntity.ok().build();
    }
}
