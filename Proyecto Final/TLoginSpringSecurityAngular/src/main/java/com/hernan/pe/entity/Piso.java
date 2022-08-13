package com.hernan.pe.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

@Entity
@Table(name = "piso")
public class Piso {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idpiso;

	@Column(name = "descripcion", length = 50, nullable = true)
	private String descripcion;

	@Column(name = "estado", nullable = true)
	private boolean estado;

	// @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss")
	// @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	@Column(name = "fechacreacion",columnDefinition ="TIMESTAMP DEFAULT CURRENT_TIMESTAMP" )
	@CreationTimestamp
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date fechacreacion;

	public Piso() {
	}

	public Piso(int idpiso, String descripcion, boolean estado) {
		this.idpiso = idpiso;
		this.descripcion = descripcion;
		this.estado = estado;
	}

	public Piso(String descripcion, boolean estado) {
		this.descripcion = descripcion;
		this.estado = estado;
	}

	public int getIdpiso() {
		return idpiso;
	}

	public void setIdpiso(int idpiso) {
		this.idpiso = idpiso;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public boolean isEstado() {
		return estado;
	}

	public void setEstado(boolean estado) {
		this.estado = estado;
	}

	public Date getFechacreacion() {
		return fechacreacion;
	}

	public void setFechacreacion(Date fechacreacion) {
		this.fechacreacion = fechacreacion;
	}
	
}
