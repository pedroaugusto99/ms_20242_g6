package com.rural_link.controllers;

import com.rural_link.dtos.perfil.PerfilResponseDTO;
import com.rural_link.entities.usuarios.Pessoa;
import com.rural_link.services.perfil.PerfilService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/perfil")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
@SecurityRequirement(name = "securityConfig")
public class PerfilController {

    private final PerfilService perfilService;

    @Operation(summary = "Endpoint responsável por buscar dados do Usuário cadastrado", method = "GET")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Busca realizada com sucesso"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),
            @ApiResponse(responseCode = "401", description = "Usuário não foi autorizado"),
            @ApiResponse(responseCode = "403", description = "Usuário não tem a permissão necessária para efetuar a operação"),
            @ApiResponse(responseCode = "500", description = "Erro ao buscar dados(Internal Server Error)")
    })
    @GetMapping(value = "/pegar-dados", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<PerfilResponseDTO> pegarDadosDoUsuario(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        return new ResponseEntity<>(perfilService.pegarDadosDoUsuario(pessoa), HttpStatus.OK);
    }
}
