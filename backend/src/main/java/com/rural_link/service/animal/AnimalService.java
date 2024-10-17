package com.rural_link.service.animal;

import com.rural_link.domain.animal.Animal;
import com.rural_link.domain.fazenda.Fazenda;
import com.rural_link.domain.usuarios.Pessoa;
import com.rural_link.domain.usuarios.Proprietario;
import com.rural_link.domain.usuarios.TrabalhadorRural;
import com.rural_link.domain.usuarios.UserRole;
import com.rural_link.dto.animal.AnimalDTO;
import com.rural_link.repositories.AnimalRepository;
import com.rural_link.repositories.PessoaRepository;
import com.rural_link.repositories.ProprietarioRepository;
import com.rural_link.repositories.TrabalhadorRuralRepository;
import com.rural_link.service.trabalhador.TrabalhadorRuralService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AnimalService {
    private final AnimalRepository animalRepository;
    private final ProprietarioRepository proprietarioRepository;
    private final TrabalhadorRuralRepository trabalhadorRuralRepository;

    public Fazenda encontrarFazendaDoAnimal(Pessoa pessoa){
        if (pessoa.getRole() == UserRole.PROPRIETARIO){
            Proprietario proprietario = proprietarioRepository.findByEmail(pessoa.getEmail()).orElseThrow(() -> new RuntimeException("Proprietário não foi encontrado"));
            return proprietario.getFazenda();
        } else if (pessoa.getRole() == UserRole.TRABALHADOR_RURAL){
            TrabalhadorRural trabalhadorRural = trabalhadorRuralRepository.findByEmail(pessoa.getEmail()).orElseThrow(() -> new RuntimeException("Trabalhador não foi encontrado"));
            return trabalhadorRural.getFazenda();
        }
        return null;
    }

    public ResponseEntity<Void> salvar(AnimalDTO animalDTO, Pessoa pessoa){
        if (animalRepository.findByCodigo(animalDTO.codigo()).isPresent()){
            return ResponseEntity.badRequest().build();
        }
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd/MM/yyyy");
        animalRepository.save(Animal.builder()
                .codigo(animalDTO.codigo())
                .nome(animalDTO.nome())
                .dataDeNascimento(animalDTO.dataDeNascimento())
                .codigoDaMae(animalDTO.codigoDaMae())
                .codigoDoPai(animalDTO.codigoDoPai())
                .sexo(animalDTO.sexo())
                .peso(animalDTO.peso())
                .origem(animalDTO.origem())
                .raca(animalDTO.raca())
                .fazenda(encontrarFazendaDoAnimal(pessoa))
                .build());
        return ResponseEntity.ok().build();
    }
}
