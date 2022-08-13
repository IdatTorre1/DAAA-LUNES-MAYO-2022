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
import com.hernan.pe.entity.Hotel;
import com.hernan.pe.service.HotelService;

@RestController
@RequestMapping("/hotel")
@CrossOrigin(origins = "*")
public class HotelController {

	@Autowired
	HotelService hotelService;

	@GetMapping("/lista")
	public ResponseEntity<List<Hotel>> list() {
		List<Hotel> list = hotelService.list();
		return new ResponseEntity(list, HttpStatus.OK);
	}

	@PreAuthorize("hasRole('ADMIN')")
	@PostMapping("/create")
	public ResponseEntity<?> create(@RequestBody Hotel hotelEnt) {

		if (StringUtils.isBlank(hotelEnt.getDescripcion()))
			return new ResponseEntity(new Mensaje("La descripción es obligatorio"), HttpStatus.BAD_REQUEST);

		Hotel hotel = new Hotel(hotelEnt.getNombre_comercial(),
				hotelEnt.getDireccion(),hotelEnt.getDistrito(),
				hotelEnt.getTelefono(),hotelEnt.getRuc_hotel(),
				hotelEnt.getDescripcion());
		hotelService.save(hotel);
		return new ResponseEntity(new Mensaje("hotel creado"), HttpStatus.OK);
	}

	@PreAuthorize("hasRole('ADMIN')")
	@PutMapping("/update/{id}")
	public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody Hotel hotelEnt) {
		if (!hotelService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);

		if (StringUtils.isBlank(hotelEnt.getNombre_comercial()))
			return new ResponseEntity(new Mensaje("el nombre es obligatorio"), HttpStatus.BAD_REQUEST);

		Hotel hotel = hotelService.getOne(id).get();
		hotel.setNombre_comercial(hotelEnt.getNombre_comercial());
		hotel.setDireccion(hotelEnt.getDireccion());
		hotel.setDistrito(hotelEnt.getDistrito());
		hotel.setTelefono(hotelEnt.getTelefono());
		hotel.setRuc_hotel(hotelEnt.getRuc_hotel());
		hotel.setDescripcion(hotelEnt.getDescripcion());
		
		hotelService.save(hotel);
		return new ResponseEntity(new Mensaje("Los datos fueron actualizados"), HttpStatus.OK);
	}

	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") int id) {
		if (!hotelService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
		hotelService.delete(id);
		return new ResponseEntity(new Mensaje("hotel eliminado"), HttpStatus.OK);
	}

	@GetMapping("/detail/{id}")
	public ResponseEntity<Hotel> getById(@PathVariable("id") int id) {
		if (!hotelService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
		Hotel hotel = hotelService.getOne(id).get();
		return new ResponseEntity(hotel, HttpStatus.OK);
	}
}
