package com.rural_link.services;

import com.rural_link.dtos.redefinirsenha.EmailDTO;
import com.rural_link.dtos.redefinirsenha.RedefinirSenhaDTO;
import com.rural_link.dtos.redefinirsenha.TokenDTO;
import com.rural_link.dtos.redefinirsenha.ValidarTokenDTO;
import com.rural_link.entities.redefinirsenha.RedefinirSenha;
import com.rural_link.entities.usuarios.Pessoa;
import com.rural_link.infra.security.CodeGenerator;
import com.rural_link.repositories.PessoaRepository;
import com.rural_link.repositories.RedefinirSenhaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Arrays;

@Service
@RequiredArgsConstructor
public class RedefinirSenhaService {

    private final RedefinirSenhaRepository redefinirSenhaRepository;
    private final PessoaRepository pessoaRepository;
    private final JavaMailSender javaMailSender;

    @Value("${spring.mail.username}")
    private String emailFrom;

    @Transactional
    public void verificarEmail(EmailDTO emailDTO){
        Pessoa pessoa = pessoaRepository.findByEmail(emailDTO.email()).orElseThrow(() -> new RuntimeException("Email não foi encontrado"));
        if (redefinirSenhaRepository.existsByPessoa(pessoa)){
            RedefinirSenha redefinirSenha = redefinirSenhaRepository.findByPessoa(pessoa).get();
            redefinirSenha.setToken(CodeGenerator.gerarTokenEsqueceuSenha());
            redefinirSenha.setDataExpiracao(LocalDateTime.now().plusMinutes(5));
            RedefinirSenha redefinirSenhaSalvo = redefinirSenhaRepository.save(redefinirSenha);
            mandarEmail(redefinirSenhaSalvo);
        } else{
            RedefinirSenha redefinirSenha = RedefinirSenha.builder()
                    .token(CodeGenerator.gerarTokenEsqueceuSenha())
                    .dataExpiracao(LocalDateTime.now().plusMinutes(5))
                    .pessoa(pessoa)
                    .build();
            RedefinirSenha redefinirSenhaSalvo = redefinirSenhaRepository.save(redefinirSenha);
            mandarEmail(redefinirSenhaSalvo);
        }
    }

    @Transactional
    public void mandarEmail(RedefinirSenha redefinirSenha){
        String primeiroNome = Arrays.stream(redefinirSenha.getPessoa().getNomeCompleto().split(" ")).findFirst().get();
        try{
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(emailFrom);
            message.setTo(redefinirSenha.getPessoa().getEmail());
            message.setSubject("Redefinição de senha");
            message.setText("Olá " + primeiroNome + ",\nVocê solicitou a alteração de sua senha. \nSegue seu token para prosseguir com o processo de alteração. \nUtilize esse token para preenchimento na aplicação. \n\n" + redefinirSenha.getToken() + "\n\nRuralLink");
            javaMailSender.send(message);
        } catch(MailException e){
           throw new RuntimeException(e);
        }
    }

    public ValidarTokenDTO validarToken(TokenDTO tokenDTO){
        Pessoa pessoa = pessoaRepository.findByEmail(tokenDTO.email()).orElseThrow(() -> new RuntimeException("Email não foi encontrado"));
        RedefinirSenha redefinirSenha = redefinirSenhaRepository.findByTokenAndPessoa(tokenDTO.token(), pessoa).orElseThrow(() -> new RuntimeException("Token inválido!"));
        if (redefinirSenha.getDataExpiracao().isBefore(LocalDateTime.now())){
            redefinirSenhaRepository.deleteById(redefinirSenha.getId());
            return ValidarTokenDTO.builder().tokenValido(false).build();
        }
        return ValidarTokenDTO.builder().tokenValido(true).build();
    }

    public void redefinirSenha(RedefinirSenhaDTO redefinirSenhaDTO){
        Pessoa pessoa = pessoaRepository.findByEmail(redefinirSenhaDTO.email()).orElseThrow(() -> new RuntimeException("Email não foi encontrado"));
        pessoa.setPassword(new BCryptPasswordEncoder().encode(redefinirSenhaDTO.password()));
        pessoaRepository.save(pessoa);
    }

}
