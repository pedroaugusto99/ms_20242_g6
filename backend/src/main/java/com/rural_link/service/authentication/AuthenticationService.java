package com.rural_link.service.authentication;

import com.rural_link.domain.usuarios.Proprietario;
import com.rural_link.dto.authentication.LoginDTO;
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

    public LoginResponseDTO gerarDadosDoLogin(LoginDTO loginDTO, String token){
        boolean redirectToCriarFazenda = true;
        if (proprietarioRepository.findByEmail(loginDTO.email()).isPresent()){
            Proprietario proprietario = proprietarioRepository.findByEmail(loginDTO.email()).get();
            if (proprietario.getFazenda() != null){
                redirectToCriarFazenda = false;
            }
        } else{
            redirectToCriarFazenda = false;
        }
        return new LoginResponseDTO(loginDTO.email(), token, redirectToCriarFazenda);
    }
}
