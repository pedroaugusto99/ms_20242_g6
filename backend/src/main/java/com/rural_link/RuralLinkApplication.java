package com.rural_link;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "API da plataforma RuralLink",
		version = "1.0",
		description = "API com os endpoints e as informações necessárias para serem utilizadas pelo frontend da plataforma RuralLink"))
public class RuralLinkApplication {

	public static void main(String[] args) {
		SpringApplication.run(RuralLinkApplication.class, args);
	}

}
