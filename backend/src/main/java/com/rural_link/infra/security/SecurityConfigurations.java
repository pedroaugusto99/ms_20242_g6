package com.rural_link.infra.security;

import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
@SecurityScheme(
        name = "securityConfig",
        type = SecuritySchemeType.HTTP,
        bearerFormat = "JWT",
        scheme = "bearer"
)
public class SecurityConfigurations {

    private final CustomUserDetailsService userDetailsService;
    private final SecurityFilter securityFilter;

    private static final String[] AUTH_WHITE_LIST = {
            "/v3/api-docs/**",
            "/swagger-ui/**",
            "/v2/api-docs/**",
            "/swagger-resources/**"
    };

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .cors(Customizer.withDefaults())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers(AUTH_WHITE_LIST).permitAll()
                        .requestMatchers(HttpMethod.POST, "/autenticacao/login").permitAll()
                        .requestMatchers(HttpMethod.POST, "/autenticacao/registro/**").permitAll()
                        .requestMatchers(HttpMethod.POST, "/esqueceu-senha/**").permitAll()
                        .requestMatchers(HttpMethod.PUT, "/esqueceu-senha/**").permitAll()
                        .requestMatchers(HttpMethod.POST, "/fazenda/cadastro").hasRole("PROPRIETARIO")
                        .requestMatchers(HttpMethod.GET, "/fazenda/codigo").hasRole("PROPRIETARIO")
                        .requestMatchers(HttpMethod.GET, "/fazenda/trabalhadores").hasRole("PROPRIETARIO")
                        .requestMatchers(HttpMethod.GET, "/graficos/**").hasRole("PROPRIETARIO")
                        .anyRequest().authenticated()
                )
                .addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
}
