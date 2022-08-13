package com.hernan.pe.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "estado_habitacion")
public class EstadoHabitacion {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idestadohabitacion;
	
	@Column(name = "descripcion", length = 50, nullable = true)
	private String descripcion;

	@Column(name = "estado", nullable = true)
	private boolean estado;
	
	public EstadoHabitacion() {
	}

	public EstadoHabitacion(int idestadohabitacion, String descripcion, boolean estado) {
		this.idestadohabitacion = idestadohabitacion;
		this.descripcion = descripcion;
		this.estado = estado;
	}

	public int getIdestadohabitacion() {
		return idestadohabitacion;
	}

	public void setIdestadohabitacion(int idestadohabitacion) {
		this.idestadohabitacion = idestadohabitacion;
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
	
}
