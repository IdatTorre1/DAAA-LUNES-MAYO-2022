package com.hernan.pe.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hernan.pe.entity.Piso;
import com.hernan.pe.repository.PisoRepository;

@Service
@Transactional
public class PisoService {

	@Autowired
	PisoRepository pisoRepository;

	public List<Piso> list() {
		return pisoRepository.findAll();
	}

	public Optional<Piso> getOne(int id) {
		return pisoRepository.findById(id);
	}

	public void save(Piso piso) {
		pisoRepository.save(piso);
	}

	public void delete(int id) {
		pisoRepository.deleteById(id);
	}

	public boolean existsById(int id) {
		return pisoRepository.existsById(id);
	}
}
