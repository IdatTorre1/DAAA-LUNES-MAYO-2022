package com.hernan.pe.entity;

import java.util.Date;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "cliente")
public class Cliente {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idcliente;
	
	@Column(name = "nombre", length = 100, nullable = true)
	private String nombre;
	
	@Column(name = "apellido", length = 100, nullable = true)
	private String apellido;
	
	@Column(name = "tipodocumento", length = 60, nullable = true)
	private String tipodocumento;
	
	@Column(name = "numdocumento", length = 30, nullable = true)
	private String numdocumento;
	
	@Column(name = "telefono", length = 20, nullable = true)
	private String telefono;
	
	@Column(name = "correo", length = 100, nullable = true)
	private String correo;
	
	@Column(name = "fechacreacion",columnDefinition ="TIMESTAMP DEFAULT CURRENT_TIMESTAMP" )
	@CreationTimestamp
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date fechacreacion;
	
	public Cliente() {
	}

	public Cliente(int idcliente, String nombre, String apellido, String tipodocumento, String numdocumento,
			String telefono, String correo, Date fechacreacion) {
		this.idcliente = idcliente;
		this.nombre = nombre;
		this.apellido = apellido;
		this.tipodocumento = tipodocumento;
		this.numdocumento = numdocumento;
		this.telefono = telefono;
		this.correo = correo;
		this.fechacreacion = fechacreacion;
	}



	public Cliente( String nombre, String apellido, String tipodocumento, String numdocumento,
			String telefono, String correo) {
		//this.idcliente = idcliente;
		this.nombre = nombre;
		this.apellido = apellido;
		this.tipodocumento = tipodocumento;
		this.numdocumento = numdocumento;
		this.telefono = telefono;
		this.correo = correo;
	}

	public int getIdcliente() {
		return idcliente;
	}

	public void setIdcliente(int idcliente) {
		this.idcliente = idcliente;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getTipodocumento() {
		return tipodocumento;
	}

	public void setTipodocumento(String tipodocumento) {
		this.tipodocumento = tipodocumento;
	}

	public String getNumdocumento() {
		return numdocumento;
	}

	public void setNumdocumento(String numdocumento) {
		this.numdocumento = numdocumento;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public Date getFechacreacion() {
		return fechacreacion;
	}

	public void setFechacreacion(Date fechacreacion) {
		this.fechacreacion = fechacreacion;
	}

	@Override
	public int hashCode() {
		return Objects.hash(apellido, correo, fechacreacion, idcliente, nombre, numdocumento, telefono, tipodocumento);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Cliente other = (Cliente) obj;
		return Objects.equals(apellido, other.apellido) && Objects.equals(correo, other.correo)
				&& Objects.equals(fechacreacion, other.fechacreacion) && idcliente == other.idcliente
				&& Objects.equals(nombre, other.nombre) && Objects.equals(numdocumento, other.numdocumento)
				&& Objects.equals(telefono, other.telefono) && Objects.equals(tipodocumento, other.tipodocumento);
	}

	@Override
	public String toString() {
		return "Cliente [idcliente=" + idcliente + ", nombre=" + nombre + ", apellido=" + apellido + ", tipodocumento="
				+ tipodocumento + ", numdocumento=" + numdocumento + ", telefono=" + telefono + ", correo=" + correo
				+ ", fechacreacion=" + fechacreacion + "]";
	}
	
	
	
}
