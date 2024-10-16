package com.rural_link.controller;

import com.rural_link.domain.proprietario.Proprietario;
import com.rural_link.domain.trabalhador_rural.TrabalhadorRural;
import com.rural_link.domain.user.User;
import com.rural_link.domain.user.UserRole;
import com.rural_link.dto.authentication.LoginDTO;
import com.rural_link.dto.authentication.RegistrarDTO;
import com.rural_link.dto.authentication.ResponseDTO;
import com.rural_link.repositories.ProprietarioRepository;
import com.rural_link.repositories.TrabalhadorRuralRepository;
import com.rural_link.repositories.UserRepository;
import com.rural_link.service.security.TokenService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/autenticacao")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
public class AuthenticationController {
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final ProprietarioRepository proprietarioRepository;
    private final TrabalhadorRuralRepository trabalhadorRuralRepository;
    private final TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity<ResponseDTO> login(@RequestBody LoginDTO data){
        UsernamePasswordAuthenticationToken usernamePassword = new UsernamePasswordAuthenticationToken(data.email(), data.password());
        Authentication auth = this.authenticationManager.authenticate(usernamePassword);

        String token = tokenService.gerarToken((User) auth.getPrincipal());

        return ResponseEntity.ok(new ResponseDTO(data.email(), token));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/registrar")
    public ResponseEntity<Void> register(@RequestBody RegistrarDTO data){
        if(this.userRepository.findByEmail(data.email()).isPresent()){
            return ResponseEntity.badRequest().build();
        }

        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
        User user = new User(data.email(), encryptedPassword, data.role());
        this.userRepository.save(user);
        if (data.role() == UserRole.PROPRIETARIO){
            Proprietario proprietario = new Proprietario(data.email(), encryptedPassword);
            proprietarioRepository.save(proprietario);
        } else if (data.role() == UserRole.TRABALHADOR_RURAL){
            TrabalhadorRural trabalhadorRural = new TrabalhadorRural(data.email(), encryptedPassword);
            trabalhadorRuralRepository.save(trabalhadorRural);
        }
        return ResponseEntity.ok().build();
    }
}
