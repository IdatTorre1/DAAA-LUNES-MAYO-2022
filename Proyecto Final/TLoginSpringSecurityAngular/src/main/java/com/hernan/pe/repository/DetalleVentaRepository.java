package com.hernan.pe.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hernan.pe.entity.DetalleVenta;

@Repository
public interface DetalleVentaRepository extends JpaRepository<DetalleVenta, Integer> {

	@Query("SELECT u FROM DetalleVenta u WHERE u.venta.idventa=?1")
	List<DetalleVenta> listaDeDetallerXIdVenta(int idventa);
}
