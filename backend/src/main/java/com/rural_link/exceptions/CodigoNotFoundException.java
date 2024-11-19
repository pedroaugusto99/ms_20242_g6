package com.rural_link.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class CodigoNotFoundException extends RuntimeException {

    public CodigoNotFoundException() {
        super("Código de autenticação não foi encontrado");
    }

    public CodigoNotFoundException(String message) {
        super(message);
    }
}
