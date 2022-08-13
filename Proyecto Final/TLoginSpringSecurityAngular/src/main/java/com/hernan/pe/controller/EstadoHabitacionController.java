package com.hernan.pe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hernan.pe.entity.EstadoHabitacion;
import com.hernan.pe.service.EstadoHabitacionService;

@RestController
@RequestMapping("/estadohabitacion")
@CrossOrigin(origins = "*")
public class EstadoHabitacionController {

	@Autowired
	EstadoHabitacionService estadohabitacionService;
	
	@GetMapping("/lista")
	public ResponseEntity<List<EstadoHabitacion>> list() {
		List<EstadoHabitacion> list = estadohabitacionService.list();
		return new ResponseEntity(list, HttpStatus.OK);
	}
}
