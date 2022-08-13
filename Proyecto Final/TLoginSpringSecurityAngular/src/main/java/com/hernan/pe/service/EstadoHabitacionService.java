package com.hernan.pe.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hernan.pe.entity.EstadoHabitacion;
import com.hernan.pe.repository.EstadoHabitacionRepository;

@Service
@Transactional
public class EstadoHabitacionService {

	@Autowired
	EstadoHabitacionRepository estadohabitacionRepository;

	public List<EstadoHabitacion> list() {
		return estadohabitacionRepository.findAll();
	}
}
