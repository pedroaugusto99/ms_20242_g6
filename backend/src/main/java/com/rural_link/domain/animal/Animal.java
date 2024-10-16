package com.rural_link.domain.animal;

import com.rural_link.domain.fazenda.Fazenda;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.mapping.Join;

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
    private String codigo;
    @ManyToOne
    @JoinColumn(name = "fazenda_id")
    private Fazenda fazenda;
}
