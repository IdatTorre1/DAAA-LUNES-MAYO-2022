package com.hernan.pe.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "venta")
public class Venta {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idventa;
	
	@ManyToOne
    @JoinColumn(name = "idrecepcion")
	private Recepcion recepcion;
	
	@Column(name = "total", nullable = true,scale=2)
	private double total;
	
	@Column(name = "estado", length = 50, nullable = true)
	private String estado;
	
	@Column(name = "fechacreacion",columnDefinition ="TIMESTAMP DEFAULT CURRENT_TIMESTAMP" )
	@CreationTimestamp
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date fechacreacion;
	
	public Venta() {
	}


	public Venta(Recepcion recepcion, double total, String estado) {
		this.recepcion = recepcion;
		this.total = total;
		this.estado = estado;
	}

	public int getIdventa() {
		return idventa;
	}
	
	public void setIdventa(int idventa) {
		this.idventa = idventa;
	}

//	public int getIdrecepcion() {
//		return idrecepcion;
//	}
//
//	public void setIdrecepcion(int idrecepcion) {
//		this.idrecepcion = idrecepcion;
//	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public Recepcion getRecepcion() {
		return recepcion;
	}

	public void setRecepcion(Recepcion recepcion) {
		this.recepcion = recepcion;
	}

	public Date getFechacreacion() {
		return fechacreacion;
	}

	public void setFechacreacion(Date fechacreacion) {
		this.fechacreacion = fechacreacion;
	}
	
	
	
}
