package com.hernan.pe.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hernan.pe.entity.Recepcion;

@Repository
public interface RecepcionRepository extends JpaRepository<Recepcion, Integer>{

	@Query("SELECT u FROM Recepcion u WHERE u.habitacion.idhabitacion=?1 AND u.estado=true")
	Recepcion recepcionPorHabitacionYEstadoTrue(int idhabitacion);
}
