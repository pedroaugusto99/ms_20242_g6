package com.rural_link.service.authentication;

import com.rural_link.domain.usuarios.Proprietario;
import com.rural_link.dto.authentication.LoginRequestDTO;
import com.rural_link.dto.authentication.LoginResponseDTO;
import com.rural_link.repositories.ProprietarioRepository;
import com.rural_link.repositories.TrabalhadorRuralRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final ProprietarioRepository proprietarioRepository;
    private final TrabalhadorRuralRepository trabalhadorRuralRepository;

    public LoginResponseDTO gerarDadosDoLogin(LoginRequestDTO loginRequestDTO, String token){
        boolean redirectToCriarFazenda = true;
        if (proprietarioRepository.findByEmail(loginRequestDTO.email()).isPresent()){
            Proprietario proprietario = proprietarioRepository.findByEmail(loginRequestDTO.email()).get();
            if (proprietario.getFazenda() != null){
                redirectToCriarFazenda = false;
            }
        } else{
            redirectToCriarFazenda = false;
        }
        return new LoginResponseDTO(loginRequestDTO.email(), token, redirectToCriarFazenda);
    }
}
