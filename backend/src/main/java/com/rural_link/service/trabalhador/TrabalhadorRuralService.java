package com.rural_link.service.trabalhador;

import com.rural_link.domain.fazenda.Fazenda;
import com.rural_link.domain.usuarios.TrabalhadorRural;
import com.rural_link.domain.usuarios.UserRole;
import com.rural_link.dto.authentication.RegistrarTrabalhadorRequestDTO;
import com.rural_link.exceptions.CodigoExpiredException;
import com.rural_link.exceptions.CodigoNotFoundException;
import com.rural_link.exceptions.UserAlreadyRegisteredException;
import com.rural_link.infra.security.CodeGenerator;
import com.rural_link.repositories.FazendaRepository;
import com.rural_link.repositories.PessoaRepository;
import com.rural_link.repositories.TrabalhadorRuralRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@Data
@RequiredArgsConstructor
public class TrabalhadorRuralService {
    private final TrabalhadorRuralRepository trabalhadorRuralRepository;
    private final PessoaRepository pessoaRepository;
    private final FazendaRepository fazendaRepository;

    public void registrarTrabalhador(RegistrarTrabalhadorRequestDTO data){
        if (pessoaRepository.findByEmail(data.email()).isPresent()){
            throw new UserAlreadyRegisteredException();
        }
        if (fazendaRepository.findByCodigoDeAutenticacao(data.codigo()).isEmpty()){
            throw new CodigoNotFoundException();
        }
        if (!CodeGenerator.validarTempoDoCodigo(data.codigo())){
            throw new CodigoExpiredException();
        }
        Fazenda fazenda = fazendaRepository.findByCodigoDeAutenticacao(data.codigo()).get();
        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
        TrabalhadorRural trabalhadorRural = new TrabalhadorRural(
                data.nomeCompleto() ,data.email(), encryptedPassword,data.telefone(), UserRole.TRABALHADOR_RURAL, fazenda);
        trabalhadorRuralRepository.save(trabalhadorRural);
    }
}
