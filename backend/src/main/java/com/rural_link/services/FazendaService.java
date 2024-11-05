package com.rural_link.services;

import com.rural_link.entities.fazenda.Fazenda;
import com.rural_link.entities.usuarios.Pessoa;
import com.rural_link.entities.usuarios.Proprietario;
import com.rural_link.entities.usuarios.TrabalhadorRural;
import com.rural_link.entities.usuarios.UserRole;
import com.rural_link.dtos.fazenda.CriarFazendaRequestDTO;
import com.rural_link.dtos.fazenda.CriarFazendaResponseDTO;
import com.rural_link.dtos.fazenda.FazendaTrabalhadoresResponseDTO;
import com.rural_link.exceptions.FazendaAlreadyRegisteredException;
import com.rural_link.exceptions.UserNotAuthenticatedException;
import com.rural_link.infra.security.CodeGenerator;
import com.rural_link.mappers.FazendaMapper;
import com.rural_link.mappers.TrabalhadorRuralMapper;
import com.rural_link.repositories.FazendaRepository;
import com.rural_link.repositories.ProprietarioRepository;
import com.rural_link.repositories.TrabalhadorRuralRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FazendaService {
    private final FazendaRepository fazendaRepository;
    private final ProprietarioService proprietarioService;
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

    public CriarFazendaResponseDTO criarFazenda(CriarFazendaRequestDTO fazendaDTO, Pessoa pessoa){
        Proprietario proprietario = proprietarioRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        if (fazendaRepository.findByEndereco(fazendaDTO.endereco()).isPresent() || proprietario.getFazenda() != null){
            throw new FazendaAlreadyRegisteredException();
        }
        String codeGenerator = CodeGenerator.gerarCodigoDaFazenda();
        Fazenda fazenda = FazendaMapper.INSTANCE.toFazenda(fazendaDTO);
        fazenda.setCodigoDeAutenticacao(codeGenerator);
        fazendaRepository.save(fazenda);
        proprietarioService.salvarFazendaDoProprietario(proprietario, fazenda);
        return new CriarFazendaResponseDTO(codeGenerator);
    }

    public CriarFazendaResponseDTO gerarNovoCodigo(Pessoa pessoa){
        Proprietario proprietario = proprietarioRepository.findByEmail(pessoa.getEmail()).orElseThrow(UserNotAuthenticatedException::new);
        Fazenda fazenda = proprietario.getFazenda();
        String codeGenerator = CodeGenerator.gerarCodigoDaFazenda();
        fazenda.setCodigoDeAutenticacao(codeGenerator);
        fazendaRepository.save(fazenda);
        return new CriarFazendaResponseDTO(codeGenerator);
    }

    public List<FazendaTrabalhadoresResponseDTO> listarTrabalhadoresDaFazenda(Pessoa pessoa){
        Fazenda fazenda = encontrarFazenda(pessoa);
        List<TrabalhadorRural> trabalhadores = trabalhadorRuralRepository.findByFazenda(fazenda);
        return TrabalhadorRuralMapper.INSTANCE.toListOfFazendaTrabalhadorResponseDTO(trabalhadores);
    }
}
