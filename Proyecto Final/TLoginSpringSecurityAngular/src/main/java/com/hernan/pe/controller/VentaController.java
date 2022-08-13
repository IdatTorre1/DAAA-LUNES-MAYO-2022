package com.hernan.pe.controller;

import java.util.List;

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
import com.hernan.pe.entity.Venta;
import com.hernan.pe.service.VentaService;

@RestController
@RequestMapping("/venta")
@CrossOrigin(origins = "*")
public class VentaController {

	@Autowired
	VentaService ventaService;

	//@PreAuthorize("hasRole('ADMIN')")
	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@GetMapping("/lista")
	public ResponseEntity<List<Venta>> list() {
		List<Venta> list = ventaService.list();
		return new ResponseEntity(list, HttpStatus.OK);
	}

	//@PreAuthorize("hasRole('ADMIN')")
	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@PostMapping("/create")
	public ResponseEntity<?> create(@RequestBody Venta ventaEnt) {

//		if (StringUtils.isBlank(ventaEnt.getIdrecepcion()))
//			return new ResponseEntity(new Mensaje("La descripción es obligatorio"), HttpStatus.BAD_REQUEST);

		Venta venta = new Venta(ventaEnt.getRecepcion(), ventaEnt.getTotal(),ventaEnt.getEstado());
		ventaService.save(venta);
		return new ResponseEntity(venta, HttpStatus.OK);
	}

//	@PreAuthorize("hasRole('ADMIN')")
//	@PutMapping("/update/{id}")
//	public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody Venta categoriaEnt) {
//		if (!ventaService.existsById(id))
//			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
//
//		if (StringUtils.isBlank(categoriaEnt.getDescripcion()))
//			return new ResponseEntity(new Mensaje("el nombre es obligatorio"), HttpStatus.BAD_REQUEST);
//
//		Venta categoria = ventaService.getOne(id).get();
//		categoria.setDescripcion(categoriaEnt.getDescripcion());
//		categoria.setEstado(categoriaEnt.isEstado());
//		ventaService.save(categoria);
//		return new ResponseEntity(new Mensaje("catgoria actualizado"), HttpStatus.OK);
//	}

	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") int id) {
		if (!ventaService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
		ventaService.delete(id);
		return new ResponseEntity(new Mensaje("venta eliminada"), HttpStatus.OK);
	}

	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@GetMapping("/detail/{id}")
	public ResponseEntity<Venta> getById(@PathVariable("id") int id) {
		if (!ventaService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
		Venta venta = ventaService.getOne(id).get();
		return new ResponseEntity(venta, HttpStatus.OK);
	}
	
	
	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@GetMapping("/listaVentas/{idrecepcion}")
	public ResponseEntity<List<Venta>> list(@PathVariable("idrecepcion") int idrecepcion) {
		List<Venta> list = ventaService.listaVentasIdRecep(idrecepcion);
		return new ResponseEntity(list, HttpStatus.OK);
	}
}
