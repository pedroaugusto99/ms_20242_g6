package com.rural_link.infra.security;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.time.LocalTime;

public record CodeGenerator() {
    public static String gerarCodigoDaFazenda() {
        String pattern = "8CTJOQKXH4@F1NZ&GDLIW6!3V2%#R7A90E5BP?YSMU ";
        SecureRandom random = new SecureRandom();
        StringBuffer stringBuffer = new StringBuffer(11);
        for (int i = 0; i < 6; i++) {
            stringBuffer.append(pattern.charAt(random.nextInt(42)));
        }
        int horaDoDia = LocalDateTime.now().getHour();
        int diaDoMes = LocalDateTime.now().getDayOfMonth();
        if (horaDoDia < 10){
            stringBuffer.append(0);
        }
        stringBuffer.append(horaDoDia);
        if (diaDoMes < 10){
            stringBuffer.append(0);
        }
        stringBuffer.append(diaDoMes);
        return stringBuffer.toString();
    }

    public static boolean validarTempoDoCodigo(String codigo){
        int horaDeCriacao = Integer.parseInt(codigo.substring(6, 8));
        int diaDeCriacao = Integer.parseInt(codigo.substring(8, 10));
        if ((LocalTime.now().getHour() >= horaDeCriacao && LocalDateTime.now().getDayOfMonth() > diaDeCriacao) || (LocalDateTime.now().getDayOfMonth() - diaDeCriacao > 1)){
            return false;
        }
        return true;
    }
}
