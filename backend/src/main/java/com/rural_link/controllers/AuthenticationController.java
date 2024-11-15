package com.rural_link.controllers;

import com.rural_link.dtos.authentication.LoginRequestDTO;
import com.rural_link.dtos.authentication.LoginResponseDTO;
import com.rural_link.dtos.authentication.RegistrarProprietarioRequestDTO;
import com.rural_link.dtos.authentication.RegistrarTrabalhadorRequestDTO;
import com.rural_link.entities.usuarios.Pessoa;
import com.rural_link.infra.security.TokenService;
import com.rural_link.services.AuthenticationService;
import com.rural_link.services.ProprietarioService;
import com.rural_link.services.TrabalhadorRuralService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
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

    @Operation(summary = "Endpoint responsável por fazer o login do usuário e gerar o token de autenticação", method = "POST")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Login realizado com sucesso"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),
            @ApiResponse(responseCode = "500", description = "Erro ao realizar cadastro(Internal Server Error)")
    })
    @PostMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<LoginResponseDTO> login(@RequestBody @Valid LoginRequestDTO data){
        UsernamePasswordAuthenticationToken usernamePassword = new UsernamePasswordAuthenticationToken(data.email(), data.password());
        Authentication auth = this.authenticationManager.authenticate(usernamePassword);

        String token = tokenService.gerarToken((Pessoa) auth.getPrincipal());

        return ResponseEntity.ok(authenticationService.gerarDadosDoLogin(data, token));
    }

    @Operation(summary = "Endpoint responsável por cadastrar um proprietário", method = "POST")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Cadastro realizado com sucesso"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),
            @ApiResponse(responseCode = "500", description = "Erro ao realizar cadastro(Internal Server Error)")
    })
    @PostMapping(value = "/registro/proprietario", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> registrarProprietario(@RequestBody @Valid RegistrarProprietarioRequestDTO data){
        proprietarioService.registrarProprietario(data);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "Endpoint responsável por cadastrar um trabalhador rural", method = "POST")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Cadastro realizado com sucesso"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),
            @ApiResponse(responseCode = "500", description = "Erro ao realizar cadastro(Internal Server Error)")
    })
    @PostMapping(value = "/registro/trabalhador", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> registrarTrabalhador(@RequestBody @Valid RegistrarTrabalhadorRequestDTO data){
        trabalhadorRuralService.registrarTrabalhador(data);
        return ResponseEntity.ok().build();
    }


}
