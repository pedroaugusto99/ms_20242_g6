package com.rural_link.domain.fazenda;

import com.rural_link.domain.animal.Animal;
import com.rural_link.domain.usuarios.Proprietario;
import com.rural_link.domain.usuarios.TrabalhadorRural;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
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
    @NotNull(message = "Endereço da fazenda precisa ser preenchido")
    @Column(nullable = false)
    private String endereco;
    private String complemento;
    @NotNull(message = "Cidade da fazenda precisa ser preenchida")
    @Column(nullable = false)
    private String cidade;
    @NotNull(message = "Cep da fazenda precisa ser preenchido")
    @Column(nullable = false)
    private String cep;
    @NotNull(message = "Estado da fazenda precisa ser preenchido")
    @Column(nullable = false)
    private String estado;
    @Column(nullable = false)
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
