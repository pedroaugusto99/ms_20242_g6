package com.rural_link.controller;

import com.rural_link.domain.usuarios.Pessoa;
import com.rural_link.dto.animal.PesoAnimalRequestDTO;
import com.rural_link.dto.animal.PesoAnimalResponseDTO;
import com.rural_link.service.animal.PesoAnimalService;
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
@RequestMapping("/animal/peso")
@RequiredArgsConstructor
@SecurityRequirement(name = "securityConfig")
public class PesoAnimalController {

    private final PesoAnimalService pesoAnimalService;

    @Operation(summary = "Endpoint responsável por registrar o peso do Animal", method = "POST")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Peso registrado com sucesso"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),
            @ApiResponse(responseCode = "401", description = "Usuário não foi autorizado"),
            @ApiResponse(responseCode = "403", description = "Usuário não tem a permissão necessária para efetuar a operação"),
            @ApiResponse(responseCode = "500", description = "Erro ao realizar registro do peso(Internal Server Error)")
    })
    @PostMapping(value = "/salvar", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<PesoAnimalResponseDTO> salvarPesoDoAnimal(@RequestBody PesoAnimalRequestDTO pesoAnimalRequestDTO){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        return ResponseEntity.ok().body(pesoAnimalService.salvarPesoDoAnimal(pesoAnimalRequestDTO, pessoa));
    }

    @Operation(summary = "Endpoint responsável por deletar um registro de peso do Animal pelo seu ID cadastrado no banco de dados", method = "DELETE")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Delete realizado com sucesso"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),
            @ApiResponse(responseCode = "401", description = "Usuário não foi autorizado"),
            @ApiResponse(responseCode = "403", description = "Usuário não tem a permissão necessária para efetuar a operação"),
            @ApiResponse(responseCode = "500", description = "Erro ao realizar delete(Internal Server Error)")
    })
    @DeleteMapping("/remover/{id}")
    public ResponseEntity<Void> removerPesoDoAnimal(@PathVariable Long id){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        pesoAnimalService.removerPesoDoAnimal(id, pessoa);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Endpoint responsável por buscar todos os registros de peso de um Animal pelo seu ID cadastrado no banco de dados", method = "GET")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Busca realizada com sucesso"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),
            @ApiResponse(responseCode = "401", description = "Usuário não foi autorizado"),
            @ApiResponse(responseCode = "403", description = "Usuário não tem a permissão necessária para efetuar a operação"),
            @ApiResponse(responseCode = "500", description = "Erro ao realizar busca(Internal Server Error)")
    })
    @GetMapping(value = "/listar/{animalId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<PesoAnimalResponseDTO>> listarTodosPesos(@PathVariable Long animalId){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        return ResponseEntity.ok().body(pesoAnimalService.listarTodosPesos(animalId, pessoa));
    }
}
