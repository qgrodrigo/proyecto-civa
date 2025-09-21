package com.civa.bus.backend_api.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.civa.bus.backend_api.dto.BusDto;
import com.civa.bus.backend_api.service.BusService;

@RestController
@RequestMapping("/bus")
public class BusController {

    private final BusService busService;

    public BusController(BusService busService) {
        this.busService = busService;
    }

    // Endpoint paginado: GET /bus?page=0&size=10
    @GetMapping
    public ResponseEntity<Page<BusDto>> getAll(Pageable pageable) {
        return ResponseEntity.ok(busService.getAll(pageable));
    }

    // Endpoint por id: GET /bus/{id}
    @GetMapping("/{id}")
    public ResponseEntity<BusDto> getById(@PathVariable Long id) {
        return ResponseEntity.ok(busService.getById(id));
    }
}

