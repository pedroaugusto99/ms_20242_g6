package com.rural_link.service.fazenda;

import com.rural_link.domain.fazenda.Fazenda;
import com.rural_link.domain.usuarios.Proprietario;
import com.rural_link.dto.fazenda.CriarFazendaDTO;
import com.rural_link.dto.fazenda.CriarFazendaResponseDTO;
import com.rural_link.infra.security.CodeGenerator;
import com.rural_link.repositories.FazendaRepository;
import com.rural_link.service.proprietario.ProprietarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FazendaService {
    private final FazendaRepository fazendaRepository;
    private final ProprietarioService proprietarioService;

    public ResponseEntity<CriarFazendaResponseDTO> criarFazenda(CriarFazendaDTO fazendaDTO, Proprietario proprietario){
        if (fazendaRepository.findByEndereco(fazendaDTO.endereco()).isPresent() || proprietario.getFazenda() != null){
            return ResponseEntity.badRequest().build();
        }
        String codeGenerator = CodeGenerator.gerarCodigoDaFazenda();
        Fazenda fazenda = new Fazenda(
                fazendaDTO.endereco(),
                fazendaDTO.complemento(),
                fazendaDTO.cidade(),
                fazendaDTO.cep(),
                fazendaDTO.estado(),
                codeGenerator
        );
        fazendaRepository.save(fazenda);
        proprietarioService.salvarFazendaDoProprietario(proprietario, fazenda);
        return new ResponseEntity<>(new CriarFazendaResponseDTO(codeGenerator) ,HttpStatus.OK);
    }
}
