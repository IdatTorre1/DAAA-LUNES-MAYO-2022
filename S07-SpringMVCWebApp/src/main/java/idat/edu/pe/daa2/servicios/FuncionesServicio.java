package idat.edu.pe.daa2.servicios;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import idat.edu.pe.daa2.jpa.modelo.Funciones;
import idat.edu.pe.daa2.jpa.repositorios.FuncionesRepositorio;

@Service
@Transactional
public class FuncionesServicio {

	@Autowired
	public FuncionesRepositorio repositorio;
	
	public FuncionesServicio() {
		
	}
	
	public Funciones crear (Funciones funciones) {
		return repositorio.save(funciones);
		
	}
	
    public List<Funciones> buscarTodo(){
    	return (ArrayList<Funciones>) repositorio.findAll();
    	
    }
	
	
	
	
	
	
}
