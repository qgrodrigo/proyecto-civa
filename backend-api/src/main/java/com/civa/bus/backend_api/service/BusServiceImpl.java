package com.civa.bus.backend_api.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.civa.bus.backend_api.dto.BusDto;
import com.civa.bus.backend_api.entity.Bus;
import com.civa.bus.backend_api.repository.BusRepository;


@Service
public class BusServiceImpl implements BusService{

    private final BusRepository busRepository;

    public BusServiceImpl(BusRepository busRepository){
        this.busRepository = busRepository;
    }

    @Override
    public Page<BusDto> getAll(Pageable pageable){
        return busRepository.findAll(pageable)
        .map(this::toDto);
    }

    @Override
    public BusDto getById(Long id) {
        Bus bus = busRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Bus no encontrado"));
        return toDto(bus);
    }

     private BusDto toDto(Bus bus) {
        return new BusDto(
            bus.getBusId(),
            bus.getNumeroBus(),
            bus.getPlaca(),
            bus.getCaracteristica(),
            bus.getMarca().getNombre(),
            bus.getEstado()
        );
    }
}

