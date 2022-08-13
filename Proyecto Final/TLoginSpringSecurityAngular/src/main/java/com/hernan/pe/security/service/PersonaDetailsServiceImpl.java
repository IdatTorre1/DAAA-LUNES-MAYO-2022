package com.hernan.pe.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hernan.pe.security.entity.Persona;
import com.hernan.pe.security.entity.PersonaPrincipal;

@Service
public class PersonaDetailsServiceImpl implements UserDetailsService {

	@Autowired
	PersonaService personaService;

	@Override
	public UserDetails loadUserByUsername(String correo) throws UsernameNotFoundException {
		Persona persona = personaService.getByCorreo(correo).get();
		return PersonaPrincipal.build(persona);
	}

}
