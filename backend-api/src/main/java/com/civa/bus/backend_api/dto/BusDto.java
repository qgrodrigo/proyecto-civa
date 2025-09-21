package com.civa.bus.backend_api.dto;

public record BusDto (
    Long busId,
    Integer numeroBus,
    String placa,
    String caracteristica,
    String marcaNombre,
    Boolean estado
) {}
