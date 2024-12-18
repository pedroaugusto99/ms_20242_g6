package com.rural_link.dtos.animal;

import com.rural_link.entities.animal.Especie;
import com.rural_link.entities.animal.Raca;
import com.rural_link.entities.animal.Sexo;
import com.rural_link.entities.animal.Status;
import io.swagger.v3.oas.annotations.media.Schema;

import java.time.LocalDate;

public record AnimalRequestDTO(
        @Schema(description = "Nome do animal", example = "Mimosa", requiredMode = Schema.RequiredMode.REQUIRED)
        String nome,
        @Schema(description = "Código do animal", example = "59", requiredMode = Schema.RequiredMode.REQUIRED)
        String codigo,
        @Schema(description = "Espécie do animal", example = "BOVINO", allowableValues = {"BOVINO", "CAPRINO", "EQUINO", "OVINO", "SUINO"}, requiredMode = Schema.RequiredMode.REQUIRED)
        Especie especie,
        @Schema(description = "Raça do animal", example = "NELORE", allowableValues = {"ANGUS", "NELORE", "BRAHMAN", "BRANGUS", "SENEPOL", "HEREFORD", "OUTRA", "SAANEN", "TOGGENBURG", "MURCIANA",
                "PARDA_ALPINA", "BOER", "SAVANNA", "CANINDE", "MOXOTO", "REPARTIDA", "SANTA_INES", "MORADA_NOVA", "SUFFOLK", "BERGAMACIA", "HAMPSHIRE_DOWN", "LANDRACE", "LARGE_WHITE", "DUROC",
                "PIETRAIN", "HAMPSHIRE"}, requiredMode = Schema.RequiredMode.REQUIRED)
        Raca raca,
        @Schema(description = "Sexo do animal", example = "FEMEA", allowableValues = {"FEMEA", "MACHO"}, requiredMode = Schema.RequiredMode.REQUIRED)
        Sexo sexo,
        @Schema(description = "Data de nascimento do animal", example = "2015-05-07", format = "date", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
        LocalDate dataDeNascimento,
        @Schema(description = "Idade do animal", example = "9", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
        Integer idade,
        @Schema(description = "Data de aquisição do animal", example = "2017-08-09", format = "date", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
        LocalDate dataDeAquisicao,
        @Schema(description = "Código da mãe do animal", example = "45", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
        String codigoDaMae,
        @Schema(description = "Código do pai do animal", example = "23", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
        String codigoDoPai,
        @Schema(description = "Status do animal", example = "ATIVO", allowableValues = {"ATIVO", "VENDIDO", "ABATIDO", "DESAPARECIDO"}, requiredMode = Schema.RequiredMode.NOT_REQUIRED)
        Status status,
        @Schema(description = "Lote em que o animal está", example = "Lt 23", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
        String lote) {
}
