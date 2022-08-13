package com.hernan.pe.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hernan.pe.entity.Hotel;
import com.hernan.pe.repository.HotelRepository;

@Service
@Transactional
public class HotelService {

	@Autowired
	HotelRepository hotelRepository;

	public List<Hotel> list() {
		return hotelRepository.findAll();
	}

	public Optional<Hotel> getOne(int id) {
		return hotelRepository.findById(id);
	}

	public void save(Hotel hotel) {
		hotelRepository.save(hotel);
	}

	public void delete(int id) {
		hotelRepository.deleteById(id);
	}

	public boolean existsById(int id) {
		return hotelRepository.existsById(id);
	}
}
