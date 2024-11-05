package com.rural_link.services;

import com.rural_link.entities.fazenda.Fazenda;
import com.rural_link.entities.usuarios.Proprietario;
import com.rural_link.entities.usuarios.UserRole;
import com.rural_link.dtos.authentication.RegistrarProprietarioRequestDTO;
import com.rural_link.exceptions.UserAlreadyRegisteredException;
import com.rural_link.repositories.PessoaRepository;
import com.rural_link.repositories.ProprietarioRepository;
import lombok.RequiredArgsConstructor;
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

    public void registrarProprietario(RegistrarProprietarioRequestDTO data){
        if (pessoaRepository.findByEmail(data.email()).isPresent()){
            throw new UserAlreadyRegisteredException();
        }
        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
        Proprietario proprietario = new Proprietario(
                data.nomeCompleto() ,data.email(), encryptedPassword, data.telefone(), UserRole.PROPRIETARIO);
        proprietarioRepository.save(proprietario);
    }
}
