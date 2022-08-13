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
import com.hernan.pe.entity.Piso;
import com.hernan.pe.service.PisoService;

@RestController
@RequestMapping("/piso")
@CrossOrigin(origins = "*")
public class PisoController {

	@Autowired
	PisoService pisoService;

	@GetMapping("/lista")
	public ResponseEntity<List<Piso>> list() {
		List<Piso> list = pisoService.list();
		return new ResponseEntity(list, HttpStatus.OK);
	}

	@PreAuthorize("hasRole('ADMIN')")
	@PostMapping("/create")
	public ResponseEntity<?> create(@RequestBody Piso pisoEnt) {

		if (StringUtils.isBlank(pisoEnt.getDescripcion()))
			return new ResponseEntity(new Mensaje("La descripción es obligatorio"), HttpStatus.BAD_REQUEST);

		Piso piso = new Piso(
				pisoEnt.getDescripcion(),pisoEnt.isEstado());
		pisoService.save(piso);
		return new ResponseEntity(new Mensaje("piso creado"), HttpStatus.OK);
	}

	@PreAuthorize("hasRole('ADMIN')")
	@PutMapping("/update/{id}")
	public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody Piso pisoEnt) {
		if (!pisoService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);

		if (StringUtils.isBlank(pisoEnt.getDescripcion()))
			return new ResponseEntity(new Mensaje("la descripcion es obligatorio"), HttpStatus.BAD_REQUEST);

		Piso piso = pisoService.getOne(id).get();
		piso.setDescripcion(pisoEnt.getDescripcion());
		piso.setEstado(pisoEnt.isEstado());
		
		pisoService.save(piso);
		return new ResponseEntity(new Mensaje("piso actualizado"), HttpStatus.OK);
	}

	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") int id) {
		if (!pisoService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
		pisoService.delete(id);
		return new ResponseEntity(new Mensaje("piso eliminado"), HttpStatus.OK);
	}

	@GetMapping("/detail/{id}")
	public ResponseEntity<Piso> getById(@PathVariable("id") int id) {
		if (!pisoService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
		Piso piso = pisoService.getOne(id).get();
		return new ResponseEntity(piso, HttpStatus.OK);
	}
}
