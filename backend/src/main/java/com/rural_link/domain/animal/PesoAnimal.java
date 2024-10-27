package com.rural_link.domain.animal;

import jakarta.persistence.*;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "peso")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PesoAnimal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Digits(integer = 8, fraction = 2)
    @NotNull(message = "Peso do animal precisa ser preenchido")
    @Column(nullable = false)
    private BigDecimal peso;
    @Temporal(TemporalType.DATE)
    @NotNull(message = "Data da pesagem precisa ser preenchido")
    @Column(nullable = false)
    private LocalDate dataDePesagem;
    @ManyToOne
    @JoinColumn(name = "animal_id", nullable = false)
    @NotNull(message = "Id do Animal precisa ser preenchido")
    private Animal animal;
}
