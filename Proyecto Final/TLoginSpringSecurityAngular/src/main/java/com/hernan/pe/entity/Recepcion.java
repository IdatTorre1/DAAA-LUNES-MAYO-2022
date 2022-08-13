package com.hernan.pe.entity;

import java.util.Date;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.hernan.pe.security.entity.Persona;

@Entity
public class Recepcion {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idrecepcion;

	// @ManyToOne(optional = false, cascade = CascadeType.ALL, fetch =
	// FetchType.EAGER)
	@ManyToOne
	@JoinColumn(name = "idpersona")
	private Persona persona;

	// @ManyToOne(optional = false, cascade = CascadeType.ALL, fetch =
	// FetchType.EAGER)
	@ManyToOne
	@JoinColumn(name = "idhabitacion")
	private Habitacion habitacion;

	// @ManyToOne(optional = false, cascade = CascadeType.ALL, fetch =
	// FetchType.EAGER)
	@ManyToOne
	@JoinColumn(name = "idcliente")
	private Cliente cliente;

//	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
//	private Date fechaentrada;
	@Column(name = "fechaentrada", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	@CreationTimestamp
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private Date fechaentrada;

	// @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.DATE)
	@Column(nullable = true)
	private Date fechasalida;

	// @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	@Column(nullable = true)
	@Temporal(TemporalType.TIMESTAMP)
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private Date fechasalidaconfirmacion;

	@Column(name = "precioinicial", scale = 2, nullable = true)
	private double precioinicial;

	@Column(name = "adelanto", scale = 2, nullable = true)
	private double adelanto;

	@Column(name = "preciorestante", scale = 2, nullable = true)
	private double preciorestante;

	@Column(name = "totalpagado", scale = 2, nullable = true)
	private double totalpagado;

	@Column(name = "costopenalidad", scale = 2, nullable = true)
	private double costopenalidad;

	@Column(name = "observacion", nullable = true)
	private String observacion;

	@Column(name = "estado", nullable = true)
	private boolean estado;

	public Recepcion() {
	}

	public Recepcion(double totalpagado, double costopenalidad, boolean estado) {
		this.totalpagado = totalpagado;
		this.costopenalidad = costopenalidad;
		this.estado = estado;
	}

	public Recepcion(Persona persona, Habitacion habitacion, Cliente cliente, Date fechasalida, double precioinicial,
			double adelanto, double preciorestante, double totalpagado, double costopenalidad, String observacion,
			boolean estado) {
		this.persona = persona;
		this.habitacion = habitacion;
		this.cliente = cliente;
		this.fechasalida = fechasalida;
		// this.fechasalidaconfirmacion = fechasalidaconfirmacion;
		this.precioinicial = precioinicial;
		this.adelanto = adelanto;
		this.preciorestante = preciorestante;
		this.totalpagado = totalpagado;
		this.costopenalidad = costopenalidad;
		this.observacion = observacion;
		this.estado = estado;
	}

	public int getIdRecepcion() {
		return idrecepcion;
	}

	public void setIdRecepcion(int idRecepcion) {
		this.idrecepcion = idRecepcion;
	}

	public int getIdrecepcion() {
		return idrecepcion;
	}

	public void setIdrecepcion(int idrecepcion) {
		this.idrecepcion = idrecepcion;
	}

	public Persona getPersona() {
		return persona;
	}

	public void setPersona(Persona persona) {
		this.persona = persona;
	}

	public Habitacion getHabitacion() {
		return habitacion;
	}

	public void setHabitacion(Habitacion habitacion) {
		this.habitacion = habitacion;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public Date getFechasalida() {
		return fechasalida;
	}

	public void setFechasalida(Date fechasalida) {
		this.fechasalida = fechasalida;
	}

	public Date getFechasalidaconfirmacion() {
		return fechasalidaconfirmacion;
	}

	public void setFechasalidaconfirmacion(Date fechasalidaconfirmacion) {
		this.fechasalidaconfirmacion = fechasalidaconfirmacion;
	}

	public double getPrecioinicial() {
		return precioinicial;
	}

	public void setPrecioinicial(double precioinicial) {
		this.precioinicial = precioinicial;
	}

	public double getAdelanto() {
		return adelanto;
	}

	public void setAdelanto(double adelanto) {
		this.adelanto = adelanto;
	}

	public double getPreciorestante() {
		return preciorestante;
	}

	public void setPreciorestante(double preciorestante) {
		this.preciorestante = preciorestante;
	}

	public double getTotalpagado() {
		return totalpagado;
	}

	public void setTotalpagado(double totalpagado) {
		this.totalpagado = totalpagado;
	}

	public double getCostopenalidad() {
		return costopenalidad;
	}

	public void setCostopenalidad(double costopenalidad) {
		this.costopenalidad = costopenalidad;
	}

	public String getObservacion() {
		return observacion;
	}

	public void setObservacion(String observacion) {
		this.observacion = observacion;
	}

	public boolean isEstado() {
		return estado;
	}

	public void setEstado(boolean estado) {
		this.estado = estado;
	}

	public Date getFechaentrada() {
		return fechaentrada;
	}

	public void setFechaentrada(Date fechaentrada) {
		this.fechaentrada = fechaentrada;
	}

}
