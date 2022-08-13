package com.hernan.pe.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hernan.pe.entity.Habitacion;
import com.hernan.pe.repository.HabitacionRepository;

@Service
@Transactional
public class HabitacionService {

	@Autowired
	HabitacionRepository habitacionRepository;

	public List<Habitacion> list() {
		return habitacionRepository.findAll();
	}

	public Long totalH() {
		return habitacionRepository.count();
	}
	
	public Long cantidadPorEst(int estado) {
		return habitacionRepository.cantidadPorEstadoDeHabitacion(estado);
	}

	public List<Habitacion> listPorPiso(int idpiso) {
		return habitacionRepository.habitacionPorPiso(idpiso);
	}

	public Optional<Habitacion> getOne(int id) {
		return habitacionRepository.findById(id);
	}

	public void save(Habitacion habitacion) {
		habitacionRepository.save(habitacion);
	}

	public void delete(int id) {
		habitacionRepository.deleteById(id);
	}

	public boolean existsById(int id) {
		return habitacionRepository.existsById(id);
	}
}
