package com.rural_link.services;

import com.rural_link.dtos.grafico.GraficoResponseDTO;
import com.rural_link.entities.animal.Sexo;
import com.rural_link.entities.fazenda.Fazenda;
import com.rural_link.entities.usuarios.Pessoa;
import com.rural_link.entities.usuarios.Proprietario;
import com.rural_link.entities.usuarios.TrabalhadorRural;
import com.rural_link.entities.usuarios.UserRole;
import com.rural_link.repositories.AnimalRepository;
import com.rural_link.repositories.ProprietarioRepository;
import com.rural_link.repositories.TrabalhadorRuralRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GraficoService {

    private final AnimalRepository animalRepository;
    private final ProprietarioRepository proprietarioRepository;
    private final TrabalhadorRuralRepository trabalhadorRuralRepository;

    public Fazenda encontrarFazenda(Pessoa pessoa){
        if (pessoa.getRole() == UserRole.PROPRIETARIO){
            Proprietario proprietario = proprietarioRepository.findByEmail(pessoa.getEmail()).orElseThrow(() -> new RuntimeException("Proprietário não foi encontrado"));
            return proprietario.getFazenda();
        } else if (pessoa.getRole() == UserRole.TRABALHADOR_RURAL){
            TrabalhadorRural trabalhadorRural = trabalhadorRuralRepository.findByEmail(pessoa.getEmail()).orElseThrow(() -> new RuntimeException("Trabalhador não foi encontrado"));
            return trabalhadorRural.getFazenda();
        }
        return null;
    }

    public GraficoResponseDTO buscarAnimaisCadastrados(Pessoa pessoa){
        Fazenda fazenda = encontrarFazenda(pessoa);
        long numeroDeAnimais = animalRepository.countByFazenda(fazenda);
        long animaisFemea = animalRepository.countByFazendaAndSexo(fazenda, Sexo.FEMEA);
        long animaisMacho = animalRepository.countByFazendaAndSexo(fazenda, Sexo.MACHO);
        return GraficoResponseDTO.builder()
                .animaisCadastrados(numeroDeAnimais)
                .animaisFemea(animaisFemea)
                .animaisMacho(animaisMacho)
                .build();
    }
}
