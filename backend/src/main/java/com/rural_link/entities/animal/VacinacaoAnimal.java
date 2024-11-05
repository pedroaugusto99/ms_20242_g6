package com.rural_link.entities.animal;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "vacina")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class VacinacaoAnimal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull(message = "Nome da vacina precisa ser preenchido")
    @Column(nullable = false)
    private String nomeDaVacina;
    @Temporal(TemporalType.DATE)
    @NotNull(message = "Data de vacinação precisa ser preenchida")
    @Column(nullable = false)
    private LocalDate dataDeVacinacao;
    @Column(nullable = false)
    @NotNull(message = "Número de doses precisa ser preenchido")
    private Integer numeroDeDoses;
    @Temporal(TemporalType.DATE)
    private LocalDate dataDaProximaVacinacao;
    @ManyToOne
    @JoinColumn(name = "animal_id", nullable = false)
    @NotNull(message = "Id do animal precisa ser preenchido")
    private Animal animal;
}
