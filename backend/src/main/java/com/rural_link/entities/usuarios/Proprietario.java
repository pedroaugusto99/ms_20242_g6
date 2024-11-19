package com.rural_link.entities.usuarios;

import com.rural_link.entities.fazenda.Fazenda;
import jakarta.persistence.*;
import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Proprietario extends Pessoa{
    @OneToOne
    @JoinColumn(name = "fazendaProprietario_id")
    private Fazenda fazenda;

    public Proprietario(String nomeCompleto, String email, String password, String telefone,UserRole role){
        this.setNomeCompleto(nomeCompleto);
        this.setEmail(email);
        this.setPassword(password);
        this.setRole(role);
        this.setTelefone(telefone);
    }

}
