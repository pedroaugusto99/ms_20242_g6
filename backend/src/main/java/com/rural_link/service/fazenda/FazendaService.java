package com.rural_link.service.fazenda;

import com.rural_link.domain.fazenda.Fazenda;
import com.rural_link.domain.usuarios.Pessoa;
import com.rural_link.domain.usuarios.Proprietario;
import com.rural_link.dto.fazenda.CriarFazendaDTO;
import com.rural_link.repositories.FazendaRepository;
import com.rural_link.repositories.PessoaRepository;
import com.rural_link.service.proprietario.ProprietarioService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FazendaService {
    private final FazendaRepository fazendaRepository;
    private final ProprietarioService proprietarioService;

    public ResponseEntity<Void> criarFazenda(CriarFazendaDTO fazendaDTO, Proprietario proprietario){
        if (fazendaRepository.findByEndereco(fazendaDTO.endereco()).isPresent() || proprietario.getFazenda() != null){
            return ResponseEntity.badRequest().build();
        }
        Fazenda fazenda = new Fazenda(
                fazendaDTO.endereco(),
                fazendaDTO.complemento(),
                fazendaDTO.cidade(),
                fazendaDTO.cep(),
                fazendaDTO.estado()
        );
        fazendaRepository.save(fazenda);
        proprietarioService.salvarFazendaDoProprietario(proprietario, fazenda);
        return ResponseEntity.ok().build();
    }
}
