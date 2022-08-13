package com.hernan.pe.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "habitacion")
public class Habitacion {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idhabitacion;

	@Column(name = "numero", length = 50, nullable = true)
	private String numero;

	@Column(name = "detalle", length = 100, nullable = true)
	private String detalle;

	@Column(name = "precio",scale = 2)
	private double precio;

	@ManyToOne
	@JoinColumn(name = "idestadohabitacion")
	private EstadoHabitacion estadoHabitacion;

	@ManyToOne
	@JoinColumn(name = "idpiso")
	private Piso piso;

	@ManyToOne
	@JoinColumn(name = "idcategoria")
	private Categoria categoria;

	@Column(name = "estado")
	private boolean estado;

	@Column(name = "fechacreacion", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	@CreationTimestamp
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date fechacreacion;

	public Habitacion() {
	}

	public Habitacion(String numero, String detalle, double precio, EstadoHabitacion estadoHabitacion, Piso piso,
			Categoria categoria, boolean estado) {
		this.numero = numero;
		this.detalle = detalle;
		this.precio = precio;
		this.estadoHabitacion = estadoHabitacion;
		this.piso = piso;
		this.categoria = categoria;
		this.estado = estado;
	}

	public int getIdhabitacion() {
		return idhabitacion;
	}

	public void setIdhabitacion(int idhabitacion) {
		this.idhabitacion = idhabitacion;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getDetalle() {
		return detalle;
	}

	public void setDetalle(String detalle) {
		this.detalle = detalle;
	}

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
		this.precio = precio;
	}

	public EstadoHabitacion getEstadoHabitacion() {
		return estadoHabitacion;
	}

	public void setEstadoHabitacion(EstadoHabitacion estadoHabitacion) {
		this.estadoHabitacion = estadoHabitacion;
	}

	public Piso getPiso() {
		return piso;
	}

	public void setPiso(Piso piso) {
		this.piso = piso;
	}

	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
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
