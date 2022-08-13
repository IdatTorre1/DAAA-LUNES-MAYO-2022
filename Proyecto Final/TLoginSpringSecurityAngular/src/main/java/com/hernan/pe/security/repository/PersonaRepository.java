package com.hernan.pe.security.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hernan.pe.security.entity.Persona;

@Repository
public interface PersonaRepository extends JpaRepository<Persona, Integer> {

	Optional<Persona> findByCorreo(String correo);
    boolean existsByCorreo(String correo);
    
    Optional<Persona> findByDni(String dni);
    boolean existsByDni(String dni);
}
