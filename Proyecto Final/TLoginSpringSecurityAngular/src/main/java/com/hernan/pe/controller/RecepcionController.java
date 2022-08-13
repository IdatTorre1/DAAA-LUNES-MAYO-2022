package com.hernan.pe.controller;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceUnit;

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
import com.hernan.pe.entity.Recepcion;
import com.hernan.pe.service.RecepcionService;

@RestController
@RequestMapping("/recepcion")
@CrossOrigin(origins = "*")
public class RecepcionController {

	@Autowired
	RecepcionService recepcionService;
	
//	@PersistenceUnit
//	private EntityManagerFactory emf;

	// @PreAuthorize("hasRole('ADMIN')")
	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@GetMapping("/lista")
	public ResponseEntity<List<Recepcion>> list() {
		List<Recepcion> list = recepcionService.list();
		return new ResponseEntity(list, HttpStatus.OK);
	}
	
//	@GetMapping("/recepciones")
//	public List actionJoinTable() {
//
//		EntityManager em = emf.createEntityManager();
//
//		List recepciones = em.createQuery(
//		"SELECT u.idrecepcion,u.idhabitacion, u.estado ,c.nombre, c.apellido , c.numdocumento,c.correo,p.numero,p.detalle,p.precio,e.descripcion,ct.descripcion, u.fechaentrada,u.fechasalida , u.precioinicial, u.adelanto, u.preciorestante "
//		+ "FROM Recepcion u "
//		+ "INNER JOIN Habitacion p on (u.idhabitacion=p.idhabitacion) "
//		+ "INNER JOIN Piso e on (p.idpiso=e.idpiso) "
//		+ "INNER JOIN Categoria ct on (p.idcategoria=ct.idcategoria) "
//		+ "INNER JOIN Cliente c on (u.idcliente=c.idcliente)").getResultList();
//
//		return recepciones;
//	}


	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@PostMapping("/create")
	public ResponseEntity<?> create(@RequestBody Recepcion recpcionEnt) {

		Recepcion cliente = new Recepcion(recpcionEnt.getPersona(), recpcionEnt.getHabitacion(),
				recpcionEnt.getCliente(), recpcionEnt.getFechasalida(),
				recpcionEnt.getPrecioinicial(), recpcionEnt.getAdelanto(), recpcionEnt.getPreciorestante(),
				recpcionEnt.getTotalpagado(), recpcionEnt.getCostopenalidad(), recpcionEnt.getObservacion(),
				recpcionEnt.isEstado());

		recepcionService.save(cliente);
		return new ResponseEntity(new Mensaje("Recepcion creada"), HttpStatus.OK);
	}

	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@PutMapping("/update/{id}")
	public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody Recepcion recepcionEnt) {
		if (!recepcionService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);

		Recepcion recepcion = recepcionService.getOne(id).get();
		recepcion.setTotalpagado(recepcionEnt.getTotalpagado());
		recepcion.setCostopenalidad(recepcionEnt.getCostopenalidad());
		recepcion.setFechasalidaconfirmacion(recepcionEnt.getFechasalidaconfirmacion());
		recepcion.setEstado(recepcionEnt.isEstado());

		recepcionService.save(recepcion);
		return new ResponseEntity(new Mensaje("Recepcion finalizada"), HttpStatus.OK);
	}

	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") int id) {
		if (!recepcionService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
		recepcionService.delete(id);
		return new ResponseEntity(new Mensaje("Recepcion eliminada"), HttpStatus.OK);
	}

	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@GetMapping("/detail/{id}")
	public ResponseEntity<Recepcion> getById(@PathVariable("id") int id) {
		if (!recepcionService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
		Recepcion recepcion = recepcionService.getOne(id).get();
		return new ResponseEntity(recepcion, HttpStatus.OK);
	}
	
	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@GetMapping("/recepcionxhabyest/{idhabitacion}")
	public ResponseEntity<Recepcion> getByHabitacionANDestadoTrue(@PathVariable("idhabitacion") int idhabitacion) {
		
		Recepcion recepcion = recepcionService.obetnerPorHabYEstadoTrue(idhabitacion);
		
		if(recepcion != null) {
			return new ResponseEntity(recepcion, HttpStatus.OK);
		}else {
			return new ResponseEntity(new Mensaje("No hay Recepcion"), HttpStatus.NO_CONTENT);
		}
		
		
	}

}
