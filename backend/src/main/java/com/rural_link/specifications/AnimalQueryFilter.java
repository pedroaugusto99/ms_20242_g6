package com.rural_link.specifications;

import com.rural_link.domain.animal.Animal;
import com.rural_link.domain.animal.Origem;
import com.rural_link.domain.animal.Sexo;
import com.rural_link.domain.fazenda.Fazenda;
import lombok.Data;
import org.springframework.data.jpa.domain.Specification;

import java.math.BigDecimal;
import java.time.LocalDate;

import static com.rural_link.specifications.AnimalSpecifications.*;

@Data
public class AnimalQueryFilter {

    private String raca;
    private BigDecimal pesoGte;
    private BigDecimal pesoLte;
    private LocalDate dataDeNascimento;
    private Sexo sexo;
    private Origem origem;

    public Specification<Animal> toSpecification(Fazenda fazenda){
        return racaEquals(raca, fazenda)
                .and(pesoGreaterThanOrEqualTo(pesoGte, fazenda))
                .and(pesoLessThanOrEqualTo(pesoLte, fazenda))
                .and(dataDeNascimentoEquals(dataDeNascimento, fazenda))
                .and(sexoEquals(sexo, fazenda))
                .and(origemEquals(origem, fazenda));
    }
}
