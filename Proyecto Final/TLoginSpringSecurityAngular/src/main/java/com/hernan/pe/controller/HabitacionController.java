package com.hernan.pe.controller;

import java.net.URI;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceUnit;

//import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hernan.pe.dto.Mensaje;
import com.hernan.pe.entity.EstadoHabitacion;
import com.hernan.pe.entity.Habitacion;
import com.hernan.pe.service.HabitacionService;

@RestController
@RequestMapping("/habitacion/")
@CrossOrigin(origins = "*")
public class HabitacionController {

	@Autowired
	HabitacionService habitacionService;

//	@PersistenceUnit
//	private EntityManagerFactory emf;

	@GetMapping("/lista")
	public ResponseEntity<List<Habitacion>> list() {
		List<Habitacion> list = habitacionService.list();
		return new ResponseEntity(list, HttpStatus.OK);
	}

	@GetMapping("/listaPorPiso/{idpiso}")
	public ResponseEntity<List<Habitacion>> listPorPiso(@PathVariable("idpiso") int idpiso) {
		List<Habitacion> list = habitacionService.listPorPiso(idpiso);
		return new ResponseEntity(list, HttpStatus.OK);
	}

	@GetMapping("/cantidad")
	public ResponseEntity totalHabitaciones() {
		Long cantidad = habitacionService.totalH();
		return new ResponseEntity(cantidad, HttpStatus.OK);
	}

	@GetMapping("/cantxest/{id}")
	public ResponseEntity totalHabitacionesEst(@PathVariable("id") int id) {
		Long cantidad = habitacionService.cantidadPorEst(id);
		return new ResponseEntity(cantidad, HttpStatus.OK);
	}

	@PreAuthorize("hasRole('ADMIN')")
	@PostMapping("/create")
	public ResponseEntity<?> create(@RequestBody Habitacion habitacionEnt) {

		if (StringUtils.isBlank(habitacionEnt.getNumero()))
			return new ResponseEntity(new Mensaje("El numero es obligatorio"), HttpStatus.BAD_REQUEST);

		Habitacion habitacion = new Habitacion(habitacionEnt.getNumero(), habitacionEnt.getDetalle(),
				habitacionEnt.getPrecio(), habitacionEnt.getEstadoHabitacion(), habitacionEnt.getPiso(),
				habitacionEnt.getCategoria(), habitacionEnt.isEstado());
		habitacionService.save(habitacion);
		return new ResponseEntity(new Mensaje("habitacion creada"), HttpStatus.OK);
	}

	@PreAuthorize("hasRole('ADMIN')")
	@PutMapping("/update/{id}")
	public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody Habitacion habitacionEnt) {
		if (!habitacionService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);

		if (StringUtils.isBlank(habitacionEnt.getNumero()))
			return new ResponseEntity(new Mensaje("el numero es obligatorio"), HttpStatus.BAD_REQUEST);

		Habitacion habitacion = habitacionService.getOne(id).get();
		habitacion.setNumero(habitacionEnt.getNumero());
		habitacion.setDetalle(habitacionEnt.getDetalle());
		habitacion.setPrecio(habitacionEnt.getPrecio());
		habitacion.setEstadoHabitacion(habitacionEnt.getEstadoHabitacion());
		// habitacion.setIdestadohabitacion(habitacionEnt.getIdestadohabitacion());
		habitacion.setPiso(habitacion.getPiso());
		// habitacion.setIdpiso(habitacionEnt.getIdpiso());
		// habitacion.setIdcategoria(habitacionEnt.getIdcategoria());
		habitacion.setCategoria(habitacionEnt.getCategoria());
		habitacion.setEstado(habitacionEnt.isEstado());
		habitacionService.save(habitacion);
		return new ResponseEntity(new Mensaje("habitacion actualizada"), HttpStatus.OK);
	}

	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@PutMapping("/estadoOcupado/{id}")
	public ResponseEntity<?> estadoOcupado(@PathVariable("id") int id) {
		if (!habitacionService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);

		Habitacion habitacion = habitacionService.getOne(id).get();
		EstadoHabitacion ocupada = new EstadoHabitacion();
		ocupada.setIdestadohabitacion(2);
		habitacion.setEstadoHabitacion(ocupada);
		habitacionService.save(habitacion);
		return new ResponseEntity(new Mensaje("habitacion ocupada"), HttpStatus.OK);
	}

	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@PutMapping("/estadoLimpieza/{id}")
	public ResponseEntity<?> estadoLimpieza(@PathVariable("id") int id) {
		if (!habitacionService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);

		Habitacion habitacion = habitacionService.getOne(id).get();
		EstadoHabitacion limpieza = new EstadoHabitacion();
		limpieza.setIdestadohabitacion(3);
		habitacion.setEstadoHabitacion(limpieza);
		habitacionService.save(habitacion);
		return new ResponseEntity(new Mensaje("habitacion en limpieza"), HttpStatus.OK);
	}

	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@PutMapping("/estadoDisponible/{id}")
	public ResponseEntity<?> estadoDisponible(@PathVariable("id") int id) {
		if (!habitacionService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);

		Habitacion habitacion = habitacionService.getOne(id).get();
		EstadoHabitacion disponible = new EstadoHabitacion();
		disponible.setIdestadohabitacion(1);
		habitacion.setEstadoHabitacion(disponible);
		habitacionService.save(habitacion);
		return new ResponseEntity(new Mensaje("habitacion disponible"), HttpStatus.OK);
	}

	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") int id) {
		if (!habitacionService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
		habitacionService.delete(id);
		return new ResponseEntity(new Mensaje("habitacion eliminada"), HttpStatus.OK);
	}

	@GetMapping("/detail/{id}")
	public ResponseEntity<Habitacion> getById(@PathVariable("id") int id) {
		if (!habitacionService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
		Habitacion habitacion = habitacionService.getOne(id).get();
		return new ResponseEntity(habitacion, HttpStatus.OK);
	}

//	@GetMapping("/todo")
//	public List actionJoinTable() {
//
//		EntityManager em = emf.createEntityManager();
//
//		List habitaciones = em.createQuery(
//		"SELECT u.idhabitacion, u.numero, u.detalle, u.precio, e.descripcion , p.descripcion , c.descripcion , u.estado "
//		+ "FROM Habitacion u "
//		+ "INNER JOIN EstadoHabitacion e on (u.idestadohabitacion=e.idestadohabitacion) "
//		+ "INNER JOIN Piso p on (u.idpiso=p.idpiso) "
//		+ "INNER JOIN Categoria c on (u.idcategoria=c.idcategoria)").getResultList();
//
//		return habitaciones;
//	}
}
