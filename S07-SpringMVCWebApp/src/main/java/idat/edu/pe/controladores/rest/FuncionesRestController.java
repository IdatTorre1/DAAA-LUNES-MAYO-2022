package idat.edu.pe.controladores.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import idat.edu.pe.daa2.jpa.modelo.Funciones;
import idat.edu.pe.daa2.servicios.FuncionesServicio;

@RestController
@RequestMapping("/rest/funciones")
public class FuncionesRestController {

@Autowired	
private FuncionesServicio servicio;

@GetMapping
public ResponseEntity<Object> buscarTodo()	{
	List<Funciones> listaFunciones = servicio.buscarTodo();
	
	  System.out.println("LISTA DE FUNCIONES : " + listaFunciones);
	  
	 return  new ResponseEntity<>(listaFunciones, HttpStatus.OK);
	
}
	
}
