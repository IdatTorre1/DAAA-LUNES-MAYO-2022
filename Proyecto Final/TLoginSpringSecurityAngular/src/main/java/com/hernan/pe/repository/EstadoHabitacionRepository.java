package com.hernan.pe.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hernan.pe.entity.EstadoHabitacion;

@Repository
public interface EstadoHabitacionRepository extends JpaRepository<EstadoHabitacion, Integer>{

}
