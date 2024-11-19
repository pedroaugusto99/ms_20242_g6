package com.rural_link.entities.fazenda;

import com.rural_link.entities.animal.Animal;
import com.rural_link.entities.usuarios.Proprietario;
import com.rural_link.entities.usuarios.TrabalhadorRural;
import jakarta.persistence.*;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.math.BigDecimal;
import java.util.List;

@Table(name = "fazendas")
@Entity(name = "fazendas")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@ToString
public class Fazenda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull(message = "Nome da fazenda precisa ser preenchido")
    @Column(nullable = false)
    private String nomeDaFazenda;
    @NotNull(message = "Endereço da fazenda precisa ser preenchido")
    @Column(nullable = false)
    private String endereco;
    private String complemento;
    @NotNull(message = "Cidade da fazenda precisa ser preenchida")
    @Column(nullable = false)
    private String cidade;
    @NotNull(message = "Tamanho da fazenda precisa ser preenchido")
    @Column(nullable = false)
    @Digits(integer = 8, fraction = 3)
    private BigDecimal tamanho;
    @NotNull(message = "Tipo da fazenda precisa ser preenchido")
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private TipoDaFazenda tipoDaFazenda;
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
