package com.rural_link.controllers;

import com.rural_link.entities.usuarios.Pessoa;
import com.rural_link.dtos.fazenda.CriarFazendaRequestDTO;
import com.rural_link.dtos.fazenda.CriarFazendaResponseDTO;
import com.rural_link.dtos.fazenda.FazendaTrabalhadoresResponseDTO;
import com.rural_link.services.FazendaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/fazenda")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
@SecurityRequirement(name = "securityConfig")
public class FazendaController {
    private final FazendaService fazendaService;

    @Operation(summary = "Endpoint responsável por cadastrar uma fazenda associada ao proprietário e gerar o código da fazenda para vinculação do trabalhador rural", method = "POST")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Cadastro realizado com sucesso"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),
            @ApiResponse(responseCode = "401", description = "Usuário não foi autorizado"),
            @ApiResponse(responseCode = "403", description = "Usuário não tem a permissão necessária para efetuar a operação"),
            @ApiResponse(responseCode = "500", description = "Erro ao realizar cadastro(Internal Server Error)")
    })
    @PostMapping(value = "/criar", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CriarFazendaResponseDTO> criarFazenda(@RequestBody @Valid CriarFazendaRequestDTO criarFazendaRequestDTO){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        return new ResponseEntity<>(fazendaService.criarFazenda(criarFazendaRequestDTO, pessoa), HttpStatus.OK);
    }

    @Operation(summary = "Endpoint responsável por gerar um novo código da fazenda para que o trabalhador rural possa se vincular a ela", method = "GET")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Código gerado com sucesso"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),
            @ApiResponse(responseCode = "401", description = "Usuário não foi autorizado"),
            @ApiResponse(responseCode = "403", description = "Usuário não tem a permissão necessária para efetuar a operação"),
            @ApiResponse(responseCode = "500", description = "Erro ao gerar o código(Internal Server Error)")
    })
    @GetMapping(value = "/gerar-codigo", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CriarFazendaResponseDTO> gerarNovoCodigo(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        return new ResponseEntity<>(fazendaService.gerarNovoCodigo(pessoa), HttpStatus.OK);
    }

    @Operation(summary = "Endpoint responsável por listar todos os trabalhadores que fazem parte da Fazenda", method = "GET")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Busca realizada com sucesso"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),
            @ApiResponse(responseCode = "401", description = "Usuário não foi autorizado"),
            @ApiResponse(responseCode = "403", description = "Usuário não tem a permissão necessária para efetuar a operação"),
            @ApiResponse(responseCode = "500", description = "Erro ao buscar trabalhadores(Internal Server Error)")
    })
    @GetMapping(value = "/listar-trabalhadores", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<FazendaTrabalhadoresResponseDTO>> listarTrabalhadoresDaFazenda(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        return new ResponseEntity<>(fazendaService.listarTrabalhadoresDaFazenda(pessoa), HttpStatus.OK);
    }
}
