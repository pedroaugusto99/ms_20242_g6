package com.rural_link.controller;

import com.rural_link.domain.usuarios.Pessoa;
import com.rural_link.dto.animal.*;
import com.rural_link.service.animal.AnimalService;
import com.rural_link.specifications.AnimalQueryFilter;
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
@RequestMapping("/animal")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
@SecurityRequirement(name = "securityConfig")
public class AnimalController {

    private final AnimalService animalService;

    @Operation(summary = "Endpoint responsável por cadastrar um Animal na fazenda em que o usuário está inserido", method = "POST")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Cadastro realizado com sucesso"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),
            @ApiResponse(responseCode = "401", description = "Usuário não foi autorizado"),
            @ApiResponse(responseCode = "403", description = "Usuário não tem a permissão necessária para efetuar a operação"),
            @ApiResponse(responseCode = "500", description = "Erro ao realizar cadastro(Internal Server Error)")
    })
    @PostMapping(value = "/cadastrar", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> salvarAnimal(@RequestBody @Valid AnimalRequestDTO animalRequestDTO){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        animalService.salvar(animalRequestDTO, pessoa);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "Endpoint responsável por buscar as informações que devem ser contidas no qr-code do Animal", method = "GET")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Busca realizada com sucesso"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),
            @ApiResponse(responseCode = "401", description = "Usuário não foi autorizado"),
            @ApiResponse(responseCode = "403", description = "Usuário não tem a permissão necessária para efetuar a operação"),
            @ApiResponse(responseCode = "500", description = "Erro ao realizar busca(Internal Server Error)")
    })
    @GetMapping(value = "/qr-code/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<QrCodeResponseDTO> buscarQrCode(@PathVariable Long id){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        return ResponseEntity.ok().body(animalService.buscarQrCode(pessoa, id));
    }

    @Operation(summary = "Endpoint responsável por listar todos os Animais da fazenda em que o usuário está inserido", method = "GET")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Busca realizada com sucesso"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),
            @ApiResponse(responseCode = "401", description = "Usuário não foi autorizado"),
            @ApiResponse(responseCode = "403", description = "Usuário não tem a permissão necessária para efetuar a operação"),
            @ApiResponse(responseCode = "500", description = "Erro ao realizar busca(Internal Server Error)")
    })
    @GetMapping(value = "/listar-todos", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<AnimalListResponseDTO>> listarTodosAnimais(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        return new ResponseEntity<>(animalService.listarTodosAnimais(pessoa), HttpStatus.OK);
    }

    @Operation(summary = "Endpoint responsável por listar Animais de acordo com o nome passado na URL", method = "GET")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Busca realizada com sucesso"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),
            @ApiResponse(responseCode = "401", description = "Usuário não foi autorizado"),
            @ApiResponse(responseCode = "403", description = "Usuário não tem a permissão necessária para efetuar a operação"),
            @ApiResponse(responseCode = "500", description = "Erro ao realizar busca(Internal Server Error)")
    })
    @GetMapping(value = "/listar", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<AnimalListResponseDTO>> buscarAnimalPorNome(@RequestParam String nome){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        return new ResponseEntity<>(animalService.buscarAnimalPorNome(nome, pessoa), HttpStatus.OK);
    }

    @Operation(summary = "Endpoint responsável por buscar uma cria do Animal pelo seu ID cadastrado no banco de dados", method = "GET")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Busca realizada com sucesso"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),
            @ApiResponse(responseCode = "401", description = "Usuário não foi autorizado"),
            @ApiResponse(responseCode = "403", description = "Usuário não tem a permissão necessária para efetuar a operação"),
            @ApiResponse(responseCode = "500", description = "Erro ao realizar busca(Internal Server Error)")
    })
    @GetMapping(value = "/listar-crias/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<CriaResponseDTO>> buscarCriasDoAnimal(@PathVariable Long id){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        return ResponseEntity.ok().body(animalService.buscarCriasDoAnimal(pessoa, id));
    }

    @Operation(summary = "Endpoint responsável por buscar um Animal de acordo com seu ID no banco de dados", method = "GET")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Busca realizada com sucesso"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),
            @ApiResponse(responseCode = "401", description = "Usuário não foi autorizado"),
            @ApiResponse(responseCode = "403", description = "Usuário não tem a permissão necessária para efetuar a operação"),
            @ApiResponse(responseCode = "500", description = "Erro ao realizar busca(Internal Server Error)")
    })
    @GetMapping(value = "/listar/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<AnimalResponseDTO> buscarAnimalPorId(@PathVariable Long id){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        return ResponseEntity.ok().body(animalService.buscarAnimalPorId(pessoa, id));
    }

    @Operation(summary = "Endpoint responsável por buscar Animais de acordo com os parâmetros de filtragem passados na URL", method = "GET")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Busca realizada com sucesso"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),
            @ApiResponse(responseCode = "401", description = "Usuário não foi autorizado"),
            @ApiResponse(responseCode = "403", description = "Usuário não tem a permissão necessária para efetuar a operação"),
            @ApiResponse(responseCode = "500", description = "Erro ao realizar busca(Internal Server Error)")
    })
    @GetMapping(value = "/filtrar", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<AnimalListResponseDTO>> filtrarPorCampos(AnimalQueryFilter animalQueryFilter){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        return new ResponseEntity<>(animalService.filtrarPorCampos(animalQueryFilter, pessoa), HttpStatus.OK);
    }

    @Operation(summary = "Endpoint responsável por atualizar dados do Animal no banco de dados", method = "PUT")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Atualização realizada com sucesso"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),
            @ApiResponse(responseCode = "401", description = "Usuário não foi autorizado"),
            @ApiResponse(responseCode = "403", description = "Usuário não tem a permissão necessária para efetuar a operação"),
            @ApiResponse(responseCode = "500", description = "Erro ao realizar atualização(Internal Server Error)")
    })
    @PutMapping(value = "/atualizar", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<AnimalResponseDTO> atualizarDadosDoAnimal(@RequestBody @Valid AnimalPutRequestDTO animal){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        return new ResponseEntity<>(animalService.atualizarDadosDoAnimal(animal, pessoa), HttpStatus.OK);
    }

    @Operation(summary = "Endpoint responsável por deletar um Animal de acordo com seu ID cadastrado no banco de dados", method = "DELETE")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Delete realizado com sucesso"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),
            @ApiResponse(responseCode = "401", description = "Usuário não foi autorizado"),
            @ApiResponse(responseCode = "403", description = "Usuário não tem a permissão necessária para efetuar a operação"),
            @ApiResponse(responseCode = "500", description = "Erro ao realizar delete(Internal Server Error)")
    })
    @DeleteMapping("/remover/{id}")
    public ResponseEntity<Void> removerAnimal(@PathVariable Long id){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pessoa pessoa = (Pessoa) authentication.getPrincipal();
        animalService.removerAnimal(pessoa, id);
        return ResponseEntity.noContent().build();
    }
}
