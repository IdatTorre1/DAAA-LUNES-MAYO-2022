package com.hernan.pe.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.hernan.pe.entity.Hotel;

@Repository
public interface HotelRepository extends JpaRepository<Hotel, Integer>{

}
