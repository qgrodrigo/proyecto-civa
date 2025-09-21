package com.civa.bus.backend_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.civa.bus.backend_api.entity.Bus;

@Repository
public interface  BusRepository extends JpaRepository<Bus, Long>{

}
