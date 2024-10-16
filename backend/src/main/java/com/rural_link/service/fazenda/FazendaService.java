package com.rural_link.service.fazenda;

import com.rural_link.domain.fazenda.Fazenda;
import com.rural_link.domain.proprietario.Proprietario;
import com.rural_link.repositories.FazendaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FazendaService {
    private final FazendaRepository fazendaRepository;

    public Fazenda criarFazenda(String nome){
        return fazendaRepository.save(new Fazenda(nome));
    }
}
