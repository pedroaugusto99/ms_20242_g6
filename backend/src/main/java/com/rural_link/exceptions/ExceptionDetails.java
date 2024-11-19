package com.rural_link.exceptions;

import lombok.Data;
import lombok.experimental.SuperBuilder;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Data
@SuperBuilder
public class ExceptionDetails {
    protected String titulo;
    protected HttpStatus status;
    protected String detalhes;
    protected String mensagem;
    protected LocalDateTime timestamp;
    protected Map<String, String> errosDeValidacao;
}
