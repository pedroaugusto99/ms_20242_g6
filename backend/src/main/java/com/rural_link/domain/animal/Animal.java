package com.rural_link.domain.animal;

import com.rural_link.domain.fazenda.Fazenda;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

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
    @NotNull(message = "Espécie do animal precisa ser preenchida")
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Especie especie;
    @NotNull(message = "Raça do animal precisa ser preenchida")
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Raca raca;
    @Enumerated(EnumType.STRING)
    @NotNull(message = "Sexo do animal precisa ser identificado")
    @Column(nullable = false)
    private Sexo sexo;
    @Temporal(TemporalType.DATE)
    private LocalDate dataDeNascimento;
    private Integer idade;
    @Temporal(TemporalType.DATE)
    private LocalDate dataDeAquisicao;
    private String codigoDaMae;
    private String codigoDoPai;
    @Enumerated(EnumType.STRING)
    private Status status;
    private String lote;
    @ManyToOne
    @JoinColumn(name = "fazenda_id", nullable = false)
    @NotNull(message = "Fazenda a que o animal pertence precisa ser preenchida")
    private Fazenda fazenda;
    private String urlQrCode;
    @OneToMany
    private List<VacinacaoAnimal> vacinacaoAnimal;
    @OneToMany
    private List<PesoAnimal> pesoAnimal;
}
