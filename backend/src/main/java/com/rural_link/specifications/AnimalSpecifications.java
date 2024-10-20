package com.rural_link.specifications;

import com.rural_link.domain.animal.Animal;
import com.rural_link.domain.animal.Origem;
import com.rural_link.domain.animal.Sexo;
import com.rural_link.domain.fazenda.Fazenda;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.ObjectUtils;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class AnimalSpecifications {

    public static Specification<Animal> racaEquals(String raca, Fazenda fazenda){
        return (root, query, criteriaBuilder) -> {
            if (ObjectUtils.isEmpty(raca)){
                return null;
            }
            List<Predicate> predicates = new ArrayList<>();
            predicates.add(criteriaBuilder.equal(root.get("raca"), raca));
            predicates.add(criteriaBuilder.equal(root.get("fazenda"), fazenda));
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    public static Specification<Animal> pesoGreaterThanOrEqualTo(BigDecimal peso, Fazenda fazenda){
        return (root, query, criteriaBuilder) -> {
            if (ObjectUtils.isEmpty(peso)){
                return null;
            }
            List<Predicate> predicates = new ArrayList<>();
            predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("peso"), peso));
            predicates.add(criteriaBuilder.equal(root.get("fazenda"), fazenda));
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    public static Specification<Animal> pesoLessThanOrEqualTo(BigDecimal peso, Fazenda fazenda){
        return (root, query, criteriaBuilder) -> {
            if (ObjectUtils.isEmpty(peso)) {
                return null;
            }
            List<Predicate> predicates = new ArrayList<>();
            predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("peso"), peso));
            predicates.add(criteriaBuilder.equal(root.get("fazenda"), fazenda));
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    public static Specification<Animal> dataDeNascimentoEquals(LocalDate dataDeNascimento, Fazenda fazenda){
        return (root, query, criteriaBuilder) -> {
            if (ObjectUtils.isEmpty(dataDeNascimento)){
                return null;
            }
            List<Predicate> predicates = new ArrayList<>();
            predicates.add(criteriaBuilder.equal(root.get("dataDeNascimento"), dataDeNascimento));
            predicates.add(criteriaBuilder.equal(root.get("fazenda"), fazenda));
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    public static Specification<Animal> sexoEquals(Sexo sexo, Fazenda fazenda){
        return (root, query, criteriaBuilder) -> {
            if (ObjectUtils.isEmpty(sexo)){
                return null;
            }
            List<Predicate> predicates = new ArrayList<>();
            predicates.add(criteriaBuilder.equal(root.get("sexo"), sexo));
            predicates.add(criteriaBuilder.equal(root.get("fazenda"), fazenda));
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    public static Specification<Animal> origemEquals(Origem origem, Fazenda fazenda){
        return (root, query, criteriaBuilder) -> {
            if (ObjectUtils.isEmpty(origem)){
                return null;
            }
            List<Predicate> predicates = new ArrayList<>();
            predicates.add(criteriaBuilder.equal(root.get("origem"), origem));
            predicates.add(criteriaBuilder.equal(root.get("fazenda"), fazenda));
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}
