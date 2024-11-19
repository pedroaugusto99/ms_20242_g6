package com.rural_link.services;

import com.rural_link.dtos.perfil.PerfilResponseDTO;
import com.rural_link.entities.fazenda.Fazenda;
import com.rural_link.entities.usuarios.Pessoa;
import com.rural_link.entities.usuarios.Proprietario;
import com.rural_link.entities.usuarios.TrabalhadorRural;
import com.rural_link.entities.usuarios.UserRole;
import com.rural_link.repositories.ProprietarioRepository;
import com.rural_link.repositories.TrabalhadorRuralRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PerfilService {
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

    public PerfilResponseDTO pegarDadosDoUsuario(Pessoa pessoa){
        Fazenda fazenda = encontrarFazenda(pessoa);
        String role;
        if (pessoa.getRole() == UserRole.PROPRIETARIO){
            role = "Proprietário";
        } else{
            role = "Trabalhador Rural";
        }
        return PerfilResponseDTO.builder()
                .nome(pessoa.getNomeCompleto())
                .email(pessoa.getEmail())
                .telefone(pessoa.getTelefone())
                .endereco(fazenda.getEndereco())
                .complemento(fazenda.getComplemento())
                .cidade(fazenda.getCidade())
                .cep(fazenda.getCep())
                .estado(fazenda.getEstado())
                .role(role)
                .nomeDaFazenda(fazenda.getNomeDaFazenda())
                .codigoDaFazenda(fazenda.getCodigoDeAutenticacao())
                .build();
    }
}
