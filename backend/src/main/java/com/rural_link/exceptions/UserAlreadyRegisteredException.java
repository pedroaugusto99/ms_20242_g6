package com.rural_link.exceptions;

public class UserAlreadyRegisteredException extends RuntimeException {
  public UserAlreadyRegisteredException() {
    super("Email já foi utilizado");
  }

  public UserAlreadyRegisteredException(String message) {
        super(message);
    }
}
