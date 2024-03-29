package com.hernan.pe.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hernan.pe.entity.Categoria;
import com.hernan.pe.repository.CategoriaRepository;

@Service
@Transactional
public class CategoriaService {

	@Autowired
	CategoriaRepository categoriaRepository;

	public List<Categoria> list() {
		return categoriaRepository.findAll();
	}

	public Optional<Categoria> getOne(int id) {
		return categoriaRepository.findById(id);
	}

	public void save(Categoria categoria) {
		categoriaRepository.save(categoria);
	}

	public void delete(int id) {
		categoriaRepository.deleteById(id);
	}

	public boolean existsById(int id) {
		return categoriaRepository.existsById(id);
	}

}
