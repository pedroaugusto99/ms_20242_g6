package com.rural_link.specifications;

import com.rural_link.domain.animal.*;
import com.rural_link.domain.fazenda.Fazenda;
import lombok.Data;
import org.springframework.data.jpa.domain.Specification;

import java.math.BigDecimal;
import java.time.LocalDate;

import static com.rural_link.specifications.AnimalSpecifications.*;

@Data
public class AnimalQueryFilter {

    private Raca raca;
    private BigDecimal pesoGte;
    private BigDecimal pesoLte;
    private Integer idadeGte;
    private Integer idadeLte;
    private LocalDate dataDeNascimento;
    private Sexo sexo;
    private Status status;
    private String lote;
    private Especie especie;

    public Specification<Animal> toSpecification(Fazenda fazenda){
        return racaEquals(raca, fazenda)
                .and(pesoGreaterThanOrEqualTo(pesoGte, fazenda))
                .and(pesoLessThanOrEqualTo(pesoLte, fazenda))
                .and(sexoEquals(sexo, fazenda))
                .and(loteEquals(lote, fazenda))
                .and(especieEquals(especie, fazenda))
                .and(statusEquals(status, fazenda))
                .and(idadeLessThanOrEqualTo(idadeLte, fazenda))
                .and(idadeGreaterThanOrEqualTo(idadeGte, fazenda));
    }
}
