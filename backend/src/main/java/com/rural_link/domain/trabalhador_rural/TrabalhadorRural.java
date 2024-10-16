package com.rural_link.domain.trabalhador_rural;

import com.rural_link.domain.fazenda.Fazenda;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "trabalhador_rural")
@Table(name = "trabalhador_rural")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class TrabalhadorRural {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String senha;
    @ManyToOne
    @JoinColumn(name = "fazenda_id")
    private Fazenda fazenda;

    public TrabalhadorRural(String email, String senha){
        this.email = email;
        this.senha = senha;
    }
}
