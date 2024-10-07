package com.rural_link.domain.fazenda;

import com.rural_link.domain.animal.Animal;
import com.rural_link.domain.proprietario.Proprietario;
import com.rural_link.domain.trabalhador_rural.TrabalhadorRural;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.parameters.P;

import java.util.List;

@Table(name = "fazendas")
@Entity(name = "fazendas")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class Fazenda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    @OneToOne
    @JoinColumn(name = "proprietario_id")
    private Proprietario proprietario;
    @OneToMany(mappedBy = "fazenda")
    private List<TrabalhadorRural> trabalhadorRural;
    @OneToMany(mappedBy = "fazenda")
    private List<Animal> animal;

    public Fazenda(String nome, Proprietario proprietario){
        this.nome = nome;
        this.proprietario = proprietario;
    }
}
