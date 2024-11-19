package com.rural_link.controllers;

import com.rural_link.dtos.redefinirsenha.EmailDTO;
import com.rural_link.dtos.redefinirsenha.RedefinirSenhaDTO;
import com.rural_link.dtos.redefinirsenha.TokenDTO;
import com.rural_link.dtos.redefinirsenha.ValidarTokenDTO;
import com.rural_link.services.RedefinirSenhaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/esqueceu-senha")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
public class RedefinirSenhaController {

    private final RedefinirSenhaService redefinirSenhaService;

    @Operation(summary = "Endpoint responsável por enviar email com o token para mudança de senha", method = "POST")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Email enviado com sucesso"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),
            @ApiResponse(responseCode = "500", description = "Erro ao realizar operação(Internal Server Error)")
    })
    @PostMapping(value = "/email")
    public ResponseEntity<Void> enviarToken (@RequestBody EmailDTO emailDTO){
        redefinirSenhaService.verificarEmail(emailDTO);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "Endpoint responsável por validar o token para mudança de senha", method = "POST")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Token validado com sucesso"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),
            @ApiResponse(responseCode = "500", description = "Erro ao realizar operação(Internal Server Error)")
    })
    @PostMapping(value = "/token", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ValidarTokenDTO> validarToken(@RequestBody TokenDTO token){
        return ResponseEntity.ok().body(redefinirSenhaService.validarToken(token));
    }

    @Operation(summary = "Endpoint responsável por redefinir a senha do usuário", method = "PUT")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Senha redefinida com sucesso"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),
            @ApiResponse(responseCode = "500", description = "Erro ao realizar operação(Internal Server Error)")
    })
    @PutMapping
    public ResponseEntity<Void> redefinirSenha(@RequestBody RedefinirSenhaDTO redefinirSenhaDTO){
        redefinirSenhaService.redefinirSenha(redefinirSenhaDTO);
        return ResponseEntity.ok().build();
    }
}
