package com.rural_link.controller;

import com.rural_link.repositories.FazendaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/fazenda")
@RequiredArgsConstructor
public class FazendaController {
    private final FazendaRepository fazendaRepository;
}
