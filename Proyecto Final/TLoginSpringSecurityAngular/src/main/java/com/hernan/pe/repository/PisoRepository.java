package com.hernan.pe.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.hernan.pe.entity.Piso;

@Repository
public interface PisoRepository extends JpaRepository<Piso, Integer> {

}
