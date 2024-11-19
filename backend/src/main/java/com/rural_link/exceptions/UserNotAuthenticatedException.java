package com.rural_link.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class UserNotAuthenticatedException extends RuntimeException{

    public UserNotAuthenticatedException(){
        super("Usuário não está autenticado");
    }

    public UserNotAuthenticatedException(String message) {
        super(message);
    }
}
