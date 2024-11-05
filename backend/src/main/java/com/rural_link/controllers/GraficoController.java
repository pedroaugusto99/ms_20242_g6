package com.rural_link.controllers;

import com.rural_link.dtos.grafico.GraficoResponseDTO;
import com.rural_link.entities.usuarios.Pessoa;
import com.rural_link.services.GraficoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/graficos")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
@SecurityRequirement(name = "securityConfig")
public class GraficoController {

    private final GraficoService graficoService;

    @Operation(summary = "Endpoint responsável por levar dados aos gráficos da página de dashboard", method = "GET")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Busca realizada com sucesso"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),
            @ApiResponse(responseCode = "401", description = "Usuário não foi autorizado"),
            @ApiResponse(responseCode = "403", description = "Usuário não tem a permissão necessária para efetuar a operação"),
            @ApiResponse(responseCode = "500", description = "Erro ao buscar dados(Internal Server Error)")
    })
    @GetMapping(value = "/dados-dashboard", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<GraficoResponseDTO> buscarAnimaisCadastrados(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        return ResponseEntity.ok().body(graficoService.buscarAnimaisCadastrados(pessoa));
    }

}
