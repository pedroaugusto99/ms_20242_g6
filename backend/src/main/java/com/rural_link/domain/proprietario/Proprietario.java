package com.rural_link.domain.proprietario;

import com.rural_link.domain.fazenda.Fazenda;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "proprietario")
@Table(name = "proprietario")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Proprietario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String senha;
    @OneToOne
    @JoinColumn(name = "fazenda_id")
    private Fazenda fazenda;

    public Proprietario(String email, String senha){
        this.email = email;
        this.senha = senha;
    }

    public Proprietario(String email){
        this.email = email;
    }
}
