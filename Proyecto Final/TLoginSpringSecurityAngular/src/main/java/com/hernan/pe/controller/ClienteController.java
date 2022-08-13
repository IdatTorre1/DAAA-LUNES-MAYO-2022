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
import com.hernan.pe.entity.Cliente;
import com.hernan.pe.service.ClienteService;

@RestController
@RequestMapping("/cliente")
@CrossOrigin(origins = "*")
public class ClienteController {

	@Autowired
	ClienteService clienteService;

	// @PreAuthorize("hasRole('ADMIN')")
	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@GetMapping("/lista")
	public ResponseEntity<List<Cliente>> list() {
		List<Cliente> list = clienteService.list();
		return new ResponseEntity(list, HttpStatus.OK);
	}

	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@GetMapping("/cantidad")
	public ResponseEntity totalClientes() {
		Long cantidad = clienteService.totalC();
		return new ResponseEntity(cantidad, HttpStatus.OK);
	}

	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@PostMapping("/create")
	public ResponseEntity<?> create(@RequestBody Cliente clienteEnt) {

		if (StringUtils.isBlank(clienteEnt.getNumdocumento()))
			return new ResponseEntity(new Mensaje("El numero de docuemento es obligatorio"), HttpStatus.BAD_REQUEST);

		Cliente cliente = new Cliente(clienteEnt.getNombre(), clienteEnt.getApellido(), clienteEnt.getTipodocumento(),
				clienteEnt.getNumdocumento(), clienteEnt.getTelefono(), clienteEnt.getCorreo());

		clienteService.save(cliente);
		return new ResponseEntity(new Mensaje("Cliente creado"), HttpStatus.OK);
	}

	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@PutMapping("/update/{id}")
	public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody Cliente categoriaEnt) {
		if (!clienteService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);

		if (StringUtils.isBlank(categoriaEnt.getNumdocumento()))
			return new ResponseEntity(new Mensaje("El numero de docuemento es obligatorio"), HttpStatus.BAD_REQUEST);

		Cliente cliente = clienteService.getOne(id).get();
		cliente.setNombre(categoriaEnt.getNombre());
		cliente.setApellido(categoriaEnt.getApellido());
		cliente.setTipodocumento(categoriaEnt.getTipodocumento());
		cliente.setNumdocumento(categoriaEnt.getNumdocumento());
		cliente.setTelefono(categoriaEnt.getTelefono());
		cliente.setCorreo(categoriaEnt.getCorreo());

		clienteService.save(cliente);
		return new ResponseEntity(new Mensaje("Cliente actualizado"), HttpStatus.OK);
	}

	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") int id) {
		if (!clienteService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
		clienteService.delete(id);
		return new ResponseEntity(new Mensaje("Cliente eliminado"), HttpStatus.OK);
	}

	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@GetMapping("/detail/{id}")
	public ResponseEntity<Cliente> getById(@PathVariable("id") int id) {
		if (!clienteService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
		Cliente cliente = clienteService.getOne(id).get();
		return new ResponseEntity(cliente, HttpStatus.OK);
	}
}
