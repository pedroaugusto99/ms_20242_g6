package com.rural_link.service.trabalhador;

import com.rural_link.domain.usuarios.UserRole;
import com.rural_link.domain.usuarios.TrabalhadorRural;
import com.rural_link.dto.authentication.RegistrarProprietarioDTO;
import com.rural_link.dto.authentication.RegistrarTrabalhadorDTO;
import com.rural_link.repositories.PessoaRepository;
import com.rural_link.repositories.TrabalhadorRuralRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@Data
@RequiredArgsConstructor
public class TrabalhadorRuralService {
    private final TrabalhadorRuralRepository trabalhadorRuralRepository;
    private final PessoaRepository pessoaRepository;

    public ResponseEntity<Void> registrarTrabalhador(RegistrarTrabalhadorDTO data){
        if (pessoaRepository.findByEmail(data.email()).isPresent()){
            return ResponseEntity.badRequest().build();
        }
        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
        TrabalhadorRural trabalhadorRural = new TrabalhadorRural(
                data.nomeCompleto() ,data.email(), encryptedPassword,data.telefone(), UserRole.TRABALHADOR_RURAL, data.codigo());
        trabalhadorRuralRepository.save(trabalhadorRural);
        return ResponseEntity.ok().build();
    }
}
