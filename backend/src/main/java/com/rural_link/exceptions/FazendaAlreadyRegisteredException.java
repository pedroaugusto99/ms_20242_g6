package com.rural_link.exceptions;

public class FazendaAlreadyRegisteredException extends RuntimeException {
    public FazendaAlreadyRegisteredException() {
        super("Proprietário já possui uma fazenda cadastrada");
    }

    public FazendaAlreadyRegisteredException(String message) {
        super(message);
    }
}
