package com.rural_link.controllers;

import com.rural_link.dtos.animal.VacinacaoAnimalResponseDTO;
import com.rural_link.entities.usuarios.Pessoa;
import com.rural_link.dtos.animal.VacinacaoAnimalRequestDTO;
import com.rural_link.services.VacinacaoAnimalService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vacinacao")
@RequiredArgsConstructor
@SecurityRequirement(name = "securityConfig")
@CrossOrigin("http://localhost:3000")
public class VacinacaoAnimalController {

    private final VacinacaoAnimalService vacinacaoAnimalService;

    @Operation(summary = "Endpoint responsável por registrar uma vacinação do Animal", method = "POST")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Registro realizado com sucesso"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),
            @ApiResponse(responseCode = "401", description = "Usuário não foi autorizado"),
            @ApiResponse(responseCode = "403", description = "Usuário não tem a permissão necessária para efetuar a operação"),
            @ApiResponse(responseCode = "500", description = "Erro ao realizar registro(Internal Server Error)")
    })
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> salvarVacinacaoDoAnimal(@RequestBody VacinacaoAnimalRequestDTO vacinacaoAnimalRequestDTO){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        vacinacaoAnimalService.salvarVacinacaoDoAnimal(vacinacaoAnimalRequestDTO, pessoa);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "Endpoint responsável por deletar uma vacinação do Animal de acordo com seu ID cadastrado no banco de dados", method = "DELETE")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Delete realizado com sucesso"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),
            @ApiResponse(responseCode = "401", description = "Usuário não foi autorizado"),
            @ApiResponse(responseCode = "403", description = "Usuário não tem a permissão necessária para efetuar a operação"),
            @ApiResponse(responseCode = "500", description = "Erro ao realizar delete(Internal Server Error)")
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removerVacinacaoDoAnimal(@PathVariable Long id){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        vacinacaoAnimalService.removerVacinacaoDoAnimal(id, pessoa);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Endpoint responsável por buscar todas as vacinações de um Animal de acordo com seu ID cadastrado no banco de dados", method = "GET")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Busca realizada com sucesso"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),
            @ApiResponse(responseCode = "401", description = "Usuário não foi autorizado"),
            @ApiResponse(responseCode = "403", description = "Usuário não tem a permissão necessária para efetuar a operação"),
            @ApiResponse(responseCode = "500", description = "Erro ao realizar busca(Internal Server Error)")
    })
    @GetMapping(value = "/{animalId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<VacinacaoAnimalResponseDTO>> listarVacinacoesDoAnimal(@PathVariable Long animalId){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        return ResponseEntity.ok().body(vacinacaoAnimalService.listarVacinacoesDoAnimal(animalId, pessoa));
    }

}
