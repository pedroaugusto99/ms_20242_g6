package com.rural_link.domain.animal;

import com.rural_link.domain.fazenda.Fazenda;
import jakarta.persistence.*;
import jakarta.validation.constraints.Digits;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity(name = "animal")
@Table(name = "animal")
@AllArgsConstructor
@Data
@Builder
public class Animal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String codigo;
    @Temporal(TemporalType.DATE)
    private LocalDate dataDeNascimento;
    private String raca;
    private String codigoDaMae;
    private String codigoDoPai;
    @Enumerated(EnumType.STRING)
    private Sexo sexo;
    @Digits(integer = 5, fraction = 2)
    private BigDecimal peso;
    @Enumerated(EnumType.STRING)
    private Origem origem;
    @ManyToOne
    @JoinColumn(name = "fazenda_id")
    private Fazenda fazenda;

    private Animal(String nome, String codigo, LocalDate dataDeNascimento, String raca, String codigoDaMae,
                   String codigoDoPai, Sexo sexo, BigDecimal peso, Origem origem, Fazenda fazenda){
        this.nome = nome;
        this.codigo = codigo;
        this.dataDeNascimento = dataDeNascimento;
        this.raca = raca;
        this.codigoDaMae = codigoDaMae;
        this.codigoDoPai = codigoDoPai;
        this.sexo = sexo;
        this.peso = peso;
        this.origem = origem;
        this.fazenda = fazenda;
    }
}
