package com.idat.edu.pe.modelo;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name="pelicula")
@XmlRootElement
@NamedQueries({
	@NamedQuery(name ="Pelicula.findAll", query = "Select p FROM Pelicula p"),
	@NamedQuery(name = "Pelicula.findByIdPelicula", query = "SELECT p FROM Pelicula p WHERE p.idPelicula = :idPelicula")
	
	

})
public class Pelicula implements Serializable{

	 private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Basic(optional= false) // representa que este campo  es obligatorio en base de datos
	private Integer idPelicula;
	
	
	@Basic(optional= false) 
	@Column(name ="nombre")
	private  String nombre;
	
	@Column(name="duracion")
	private  String duracion;
	
	@Column(name="clasificacion")
	private  String clasificacion;
	
	@Column(name="idioma")
	private String idioma;
	
	@Column(name="genero")
	private String genero;
	
	@Column(name="formato")
	private String formato;
	
	@Column(name="sinopsis")
	private String sinopsis;
	
	
	
	
	
	
}
