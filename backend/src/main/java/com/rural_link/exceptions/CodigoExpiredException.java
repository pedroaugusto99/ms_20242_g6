package com.rural_link.exceptions;

public class CodigoExpiredException extends RuntimeException{
    public CodigoExpiredException() {
        super("Código de autenticação está expirado");
    }

    public CodigoExpiredException(String message) {
        super(message);
    }
}
