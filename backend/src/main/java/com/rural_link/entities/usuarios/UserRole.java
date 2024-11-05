package com.rural_link.entities.usuarios;

public enum UserRole {
    PROPRIETARIO("proprietario"),
    TRABALHADOR_RURAL("trabalhador_rural");

    private String role;

    UserRole(String role){
        this.role = role;
    }

    public String getRole(){
        return role;
    }
}
