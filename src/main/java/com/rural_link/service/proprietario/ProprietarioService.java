package com.rural_link.service.proprietario;

import com.rural_link.domain.fazenda.Fazenda;
import com.rural_link.domain.proprietario.Proprietario;
import com.rural_link.repositories.ProprietarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProprietarioService {

    private final ProprietarioRepository proprietarioRepository;

    public Proprietario salvarFazendaDoProprietario(Proprietario proprietario, Fazenda fazenda){
        proprietario.setFazenda(fazenda);
        return proprietarioRepository.save(proprietario);
    }
}
