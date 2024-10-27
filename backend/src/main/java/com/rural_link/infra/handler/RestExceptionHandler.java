package com.rural_link.infra.handler;

import com.rural_link.exceptions.*;
import org.apache.coyote.BadRequestException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.LocalDateTime;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@ControllerAdvice
public class RestExceptionHandler {

    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<ExceptionDetails> handleBadRequestException(BadRequestException exception){
        return new ResponseEntity<>(ExceptionDetails.builder()
                .timestamp(LocalDateTime.now())
                .status(HttpStatus.BAD_REQUEST)
                .titulo("Bad Request Exception, cheque a documentação para mais detalhes")
                .detalhes(exception.getMessage())
                .mensagem(exception.getClass().getName())
                .build(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ExceptionDetails> handleMethodArgumentNotValidException(MethodArgumentNotValidException exception){
        List<FieldError> fieldErrors = exception.getBindingResult().getFieldErrors();
        List<String> fields = fieldErrors.stream().map(FieldError::getField).collect(Collectors.toList());
        List<String> defaultMessages = fieldErrors.stream().map(FieldError::getDefaultMessage).collect(Collectors.toList());
        return new ResponseEntity<>(ExceptionDetails.builder()
                .timestamp(LocalDateTime.now())
                .status(HttpStatus.BAD_REQUEST)
                .titulo("Bad Request Exception, cheque a documentação para mais detalhes")
                .detalhes(exception.getMessage())
                .mensagem(exception.getClass().getName())
                .errosDeValidacao(mapeandoErrosDeValidacao(fields, defaultMessages))
                .build(), HttpStatus.BAD_REQUEST
        );
    }

    private Map<String, String> mapeandoErrosDeValidacao(List<String> fields, List<String> defaultMessages){
        Iterator<String> keyIterator = fields.iterator();
        Iterator<String> valueIterator = defaultMessages.iterator();
        return IntStream.range(0, fields.size()).boxed().collect(Collectors.toMap(i -> keyIterator.next(), i -> valueIterator.next()));
    }

    @ExceptionHandler(CodigoNotFoundException.class)
    public ResponseEntity<ExceptionDetails> handleCodigoNotFoundException (CodigoNotFoundException exception){
        return new ResponseEntity<>(ExceptionDetails.builder()
                .timestamp(LocalDateTime.now())
                .status(HttpStatus.NOT_FOUND)
                .titulo("Código não encontrado, consulte o proprietário da fazenda")
                .detalhes(exception.getMessage())
                .mensagem(exception.getClass().getName())
                .build(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(CodigoExpiredException.class)
    public ResponseEntity<ExceptionDetails> handleCodigoExpiredException (CodigoExpiredException exception){
        return new ResponseEntity<>(ExceptionDetails.builder()
                .timestamp(LocalDateTime.now())
                .status(HttpStatus.BAD_REQUEST)
                .titulo("Codigo está expirado, consulte o proprietário da fazenda")
                .detalhes(exception.getMessage())
                .mensagem(exception.getClass().getName())
                .build(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(UserNotAuthenticatedException.class)
    public ResponseEntity<ExceptionDetails> handleUserNotAuthenticatedException (UserNotAuthenticatedException exception){
        return new ResponseEntity<>(ExceptionDetails.builder()
                .timestamp(LocalDateTime.now())
                .status(HttpStatus.FORBIDDEN)
                .titulo("Usuário não autenticado, faça o login novamente")
                .detalhes(exception.getMessage())
                .mensagem(exception.getClass().getName())
                .build(), HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler(UserAlreadyRegisteredException.class)
    public ResponseEntity<ExceptionDetails> handleUserAlreadyRegisteredException (UserAlreadyRegisteredException exception){
        return new ResponseEntity<>(ExceptionDetails.builder()
                .timestamp(LocalDateTime.now())
                .status(HttpStatus.BAD_REQUEST)
                .titulo("Email já está em uso, tente fazer login ou se cadastrar com diferentes credenciais")
                .detalhes(exception.getMessage())
                .mensagem(exception.getClass().getName())
                .build(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(FazendaAlreadyRegisteredException.class)
    public ResponseEntity<ExceptionDetails> handleFazendaAlreadyRegisteredExceptionException (FazendaAlreadyRegisteredException exception){
        return new ResponseEntity<>(ExceptionDetails.builder()
                .timestamp(LocalDateTime.now())
                .status(HttpStatus.BAD_REQUEST)
                .titulo("Proprietário já possui fazenda registrada, limite máximo de uma fazenda por cadastro")
                .detalhes(exception.getMessage())
                .mensagem(exception.getClass().getName())
                .build(), HttpStatus.BAD_REQUEST);
    }
}
