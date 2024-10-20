package com.rural_link.domain.animal;

import com.rural_link.domain.fazenda.Fazenda;
import jakarta.persistence.*;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity(name = "animal")
@Table(name = "animal")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Animal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull(message = "Nome do animal precisa ser preenchido")
    @Column(nullable = false)
    private String nome;
    @NotNull(message = "Código do animal precisa ser preenchido")
    @Column(nullable = false)
    private String codigo;
    @Temporal(TemporalType.DATE)
    @NotNull(message = "Data de nascimento do animal precisa ser preenchida")
    @Column(nullable = false)
    private LocalDate dataDeNascimento;
    @NotNull(message = "Raça do animal precisa ser preenchida")
    @Column(nullable = false)
    private String raca;
    private String codigoDaMae;
    private String codigoDoPai;
    @Enumerated(EnumType.STRING)
    @NotNull(message = "Sexo do animal precisa ser identificado")
    @Column(nullable = false)
    private Sexo sexo;
    @Digits(integer = 5, fraction = 2)
    @NotNull(message = "Peso do animal precisa ser identificado")
    @Column(nullable = false)
    private BigDecimal peso;
    @Enumerated(EnumType.STRING)
    @NotNull(message = "Origem do animal precisa ser identificada")
    @Column(nullable = false)
    private Origem origem;
    @ManyToOne
    @JoinColumn(name = "fazenda_id", nullable = false)
    @NotNull(message = "Fazenda a que o animal pertence precisa ser preenchida")
    private Fazenda fazenda;
}
