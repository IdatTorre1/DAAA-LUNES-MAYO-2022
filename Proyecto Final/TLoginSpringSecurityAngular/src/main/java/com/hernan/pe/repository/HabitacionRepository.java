package com.hernan.pe.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.hernan.pe.entity.Habitacion;

@Repository
public interface HabitacionRepository extends JpaRepository<Habitacion, Integer>{

	@Query("SELECT COUNT(u) FROM Habitacion u WHERE u.estadoHabitacion.idestadohabitacion=?1")
    Long cantidadPorEstadoDeHabitacion(int idestadohabitacion);
	
	@Query("SELECT u FROM Habitacion u WHERE u.piso.idpiso=?1")
    List<Habitacion> habitacionPorPiso(int idpiso);
//	@Query(nativeQuery = false,value = " SELECT COUNT p FROM Habitacion p WHERE estadoHabitacion = ?1")
//	Habitacion readId(Integer id);
}
