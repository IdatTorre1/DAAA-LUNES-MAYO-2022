package com.hernan.pe.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hernan.pe.entity.Venta;
import com.hernan.pe.repository.VentaRepository;

@Service
@Transactional
public class VentaService {
	@Autowired
	VentaRepository ventaRepository;

	public List<Venta> list() {
		return ventaRepository.findAll();
	}
	
	public List<Venta> listaVentasIdRecep(int idrecepcion) {
		return ventaRepository.ventasByIdRecepcion(idrecepcion);
	}

	public Optional<Venta> getOne(int id) {
		return ventaRepository.findById(id);
	}

	public void save(Venta venta) {
		ventaRepository.save(venta);
	}

	public void delete(int id) {
		ventaRepository.deleteById(id);
	}

	public boolean existsById(int id) {
		return ventaRepository.existsById(id);
	}
}
