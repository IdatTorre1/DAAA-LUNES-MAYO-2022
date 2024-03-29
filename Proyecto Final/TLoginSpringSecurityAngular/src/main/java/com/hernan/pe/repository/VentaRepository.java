package com.hernan.pe.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hernan.pe.entity.Venta;

@Repository
public interface VentaRepository extends JpaRepository<Venta, Integer> {

	@Query("SELECT u FROM Venta u WHERE u.recepcion.idrecepcion=?1")
	List<Venta> ventasByIdRecepcion(int idrecepcion);
}
