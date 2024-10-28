package com.rural_link.domain.usuarios;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Builder
@Data
@Table(name = "usuario")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Pessoa implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull(message = "Nome precisa ser preenchido")
    @Column(nullable = false)
    private String nomeCompleto;
    @NotNull(message = "E-mail precisa ser preenchido")
    @Column(nullable = false, unique = true)
    private String email;
    @NotNull(message = "Senha precisa ser preenchida")
    @Column(nullable = false)
    private String password;
    @NotNull(message = "Telefone precisa ser preenchido")
    @Column(nullable = false)
    private String telefone;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private UserRole role;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if(this.role == UserRole.PROPRIETARIO) return List.of(new SimpleGrantedAuthority("ROLE_PROPRIETARIO"), new SimpleGrantedAuthority("ROLE_TRABALHADOR_RURAL"));
        else return List.of(new SimpleGrantedAuthority("ROLE_TRABALHADOR_RURAL"));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
