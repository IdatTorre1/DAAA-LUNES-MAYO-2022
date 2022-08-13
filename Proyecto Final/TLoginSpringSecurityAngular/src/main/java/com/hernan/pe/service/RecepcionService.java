package com.hernan.pe.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hernan.pe.entity.Recepcion;
import com.hernan.pe.repository.RecepcionRepository;

@Service
@Transactional
public class RecepcionService {

	@Autowired
	RecepcionRepository recepcionRepository;

	public List<Recepcion> list() {
		return recepcionRepository.findAll();
	}

	public Optional<Recepcion> getOne(int id) {
		return recepcionRepository.findById(id);
	}

	public void save(Recepcion categoria) {
		recepcionRepository.save(categoria);
	}

	public void delete(int id) {
		recepcionRepository.deleteById(id);
	}

	public boolean existsById(int id) {
		return recepcionRepository.existsById(id);
	}

	public Recepcion obetnerPorHabYEstadoTrue(int idhabitacion) {
		return recepcionRepository.recepcionPorHabitacionYEstadoTrue(idhabitacion);
	}
}
