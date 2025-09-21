package com.civa.bus.backend_api.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.civa.bus.backend_api.dto.BusDto;

public interface BusService {
    Page<BusDto> getAll(Pageable pageable);
    BusDto getById(Long id);
}
