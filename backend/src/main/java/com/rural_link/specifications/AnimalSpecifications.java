package com.rural_link.specifications;

import com.rural_link.domain.animal.*;
import com.rural_link.domain.fazenda.Fazenda;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.ObjectUtils;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class AnimalSpecifications {

    public static Specification<Animal> racaEquals(Raca raca, Fazenda fazenda){
        return (root, query, criteriaBuilder) -> {
            if (ObjectUtils.isEmpty(raca) || ObjectUtils.isEmpty(fazenda)){
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
            if (ObjectUtils.isEmpty(peso) || ObjectUtils.isEmpty(fazenda)){
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
            if (ObjectUtils.isEmpty(peso) || ObjectUtils.isEmpty(fazenda)) {
                return null;
            }
            List<Predicate> predicates = new ArrayList<>();
            predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("peso"), peso));
            predicates.add(criteriaBuilder.equal(root.get("fazenda"), fazenda));
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    public static Specification<Animal> sexoEquals(Sexo sexo, Fazenda fazenda){
        return (root, query, criteriaBuilder) -> {
            if (ObjectUtils.isEmpty(sexo) || ObjectUtils.isEmpty(fazenda)){
                return null;
            }
            List<Predicate> predicates = new ArrayList<>();
            predicates.add(criteriaBuilder.equal(root.get("sexo"), sexo));
            predicates.add(criteriaBuilder.equal(root.get("fazenda"), fazenda));
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    public static Specification<Animal> loteEquals(String lote, Fazenda fazenda){
        return (root, query, criteriaBuilder) -> {
            if (ObjectUtils.isEmpty(lote) || ObjectUtils.isEmpty(fazenda)){
                return null;
            }
            List<Predicate> predicates = new ArrayList<>();
            predicates.add(criteriaBuilder.equal(root.get("lote"), lote));
            predicates.add(criteriaBuilder.equal(root.get("fazenda"), fazenda));
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    public static Specification<Animal> especieEquals(Especie especie, Fazenda fazenda){
        return (root, query, criteriaBuilder) -> {
            if (ObjectUtils.isEmpty(especie) || ObjectUtils.isEmpty(fazenda)){
                return null;
            }
            List<Predicate> predicates = new ArrayList<>();
            predicates.add(criteriaBuilder.equal(root.get("especie"), especie));
            predicates.add(criteriaBuilder.equal(root.get("fazenda"), fazenda));
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    public static Specification<Animal> statusEquals(Status status, Fazenda fazenda){
        return (root, query, criteriaBuilder) -> {
            if (ObjectUtils.isEmpty(status) || ObjectUtils.isEmpty(fazenda)){
                return null;
            }
            List<Predicate> predicates = new ArrayList<>();
            predicates.add(criteriaBuilder.equal(root.get("status"), status));
            predicates.add(criteriaBuilder.equal(root.get("fazenda"), fazenda));
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    public static Specification<Animal> idadeLessThanOrEqualTo(Integer idade, Fazenda fazenda){
        return (root, query, criteriaBuilder) -> {
            if (ObjectUtils.isEmpty(idade) || ObjectUtils.isEmpty(fazenda)){
                return null;
            }
            List<Predicate> predicates = new ArrayList<>();
            predicates.add(criteriaBuilder.or(criteriaBuilder.lessThanOrEqualTo(
                    criteriaBuilder.function("date_part", Integer.class, criteriaBuilder.literal("YEAR"),
                            criteriaBuilder.function("age", String.class, criteriaBuilder.currentTimestamp(), root.get("dataDeNascimento"))
                    ), idade
            ), criteriaBuilder.lessThanOrEqualTo(root.get("idade"), idade)));
            predicates.add(criteriaBuilder.equal(root.get("fazenda"), fazenda));
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    public static Specification<Animal> idadeGreaterThanOrEqualTo(Integer idade, Fazenda fazenda){
        return (root, query, criteriaBuilder) -> {
            if (ObjectUtils.isEmpty(idade) || ObjectUtils.isEmpty(fazenda)){
                return null;
            }
            List<Predicate> predicates = new ArrayList<>();
            predicates.add(criteriaBuilder.or(criteriaBuilder.greaterThanOrEqualTo(
                    criteriaBuilder.function("date_part", Integer.class, criteriaBuilder.literal("YEAR"),
                            criteriaBuilder.function("age", String.class, criteriaBuilder.currentTimestamp(), root.get("dataDeNascimento"))
                    ), idade
            ), criteriaBuilder.greaterThanOrEqualTo(root.get("idade"), idade)));
            predicates.add(criteriaBuilder.equal(root.get("fazenda"), fazenda));
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}
