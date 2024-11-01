package com.rural_link.service.proprietario;

import com.rural_link.domain.fazenda.Fazenda;
import com.rural_link.domain.usuarios.Proprietario;
import com.rural_link.domain.usuarios.UserRole;
import com.rural_link.dto.authentication.RegistrarProprietarioDTO;
import com.rural_link.repositories.PessoaRepository;
import com.rural_link.repositories.ProprietarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProprietarioService {

    private final ProprietarioRepository proprietarioRepository;
    private final PessoaRepository pessoaRepository;

    public void salvarFazendaDoProprietario(Proprietario proprietario, Fazenda fazenda){
        proprietario.setFazenda(fazenda);
        proprietarioRepository.save(proprietario);
    }

    public ResponseEntity<Void> registrarProprietario(RegistrarProprietarioDTO data){
        if (pessoaRepository.findByEmail(data.email()).isPresent()){
            return ResponseEntity.badRequest().build();
        }
        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
        Proprietario proprietario = new Proprietario(
                data.nomeCompleto() ,data.email(), encryptedPassword, data.telefone(), UserRole.PROPRIETARIO);
        proprietarioRepository.save(proprietario);
        return ResponseEntity.ok().build();
    }
}