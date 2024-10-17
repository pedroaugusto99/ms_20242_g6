package com.rural_link.domain.usuarios;

import com.rural_link.domain.fazenda.Fazenda;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class TrabalhadorRural extends Pessoa {
    @ManyToOne
    @JoinColumn(name = "fazendaTrabalhadorRural_id")
    private Fazenda fazenda;
    public TrabalhadorRural(String nomeCompleto, String email, String password, String telefone, UserRole role, Fazenda fazenda){
        this.setNomeCompleto(nomeCompleto);
        this.setEmail(email);
        this.setPassword(password);
        this.setTelefone(telefone);
        this.setRole(role);
        this.fazenda = fazenda;
    }
}
