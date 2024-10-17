package com.rural_link.domain.fazenda;

import com.rural_link.domain.animal.Animal;
import com.rural_link.domain.usuarios.Proprietario;
import com.rural_link.domain.usuarios.TrabalhadorRural;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    private String endereco;
    private String complemento;
    private String cidade;
    private String cep;
    private String estado;
    private String codigoDeAutenticacao;
    @OneToOne(mappedBy = "fazenda")
    private Proprietario proprietario;
    @OneToMany(mappedBy = "fazenda")
    private List<TrabalhadorRural> trabalhadorRural;
    @OneToMany(mappedBy = "fazenda")
    private List<Animal> animal;

    public Fazenda(String endereco, String complemento, String cidade ,String cep, String estado, String codigoDeAutenticacao){
        this.endereco = endereco;
        this.complemento = complemento;
        this.cidade = cidade;
        this.cep = cep;
        this.estado = estado;
        this.codigoDeAutenticacao = codigoDeAutenticacao;
    }
}
