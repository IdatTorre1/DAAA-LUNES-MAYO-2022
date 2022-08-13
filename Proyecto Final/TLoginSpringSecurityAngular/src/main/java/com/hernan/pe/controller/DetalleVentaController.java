package com.hernan.pe.controller;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hernan.pe.dto.Mensaje;
import com.hernan.pe.entity.DetalleVenta;
import com.hernan.pe.service.DetalleVentaService;

@RestController
@RequestMapping("/detalleVenta")
@CrossOrigin(origins = "*")
public class DetalleVentaController {

	@Autowired
	DetalleVentaService detalleVentaService;

	//@PreAuthorize("hasRole('ADMIN')")
	@GetMapping("/lista")
	public ResponseEntity<List<DetalleVenta>> list() {
		List<DetalleVenta> list = detalleVentaService.list();
		return new ResponseEntity(list, HttpStatus.OK);
	}

	//@PreAuthorize("hasRole('ADMIN')")
	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@PostMapping("/create")
	public ResponseEntity<?> create(@RequestBody DetalleVenta detalleVEnt) {

//		if (StringUtils.isBlank(categoriaEnt.getDescripcion()))
//			return new ResponseEntity(new Mensaje("La descripción es obligatorio"), HttpStatus.BAD_REQUEST);

		DetalleVenta detalleVenta = new DetalleVenta(detalleVEnt.getVenta(), detalleVEnt.getProducto(),
				detalleVEnt.getCantidad(),detalleVEnt.getSubtotal());
		detalleVentaService.save(detalleVenta);
		return new ResponseEntity(new Mensaje("detalle guardado"), HttpStatus.OK);
	}

	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@PutMapping("/update/{id}")
	public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody DetalleVenta detalleVEnt) {
		if (!detalleVentaService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);

//		if (StringUtils.isBlank(detalleVEnt.getDescripcion()))
//			return new ResponseEntity(new Mensaje("el nombre es obligatorio"), HttpStatus.BAD_REQUEST);

		DetalleVenta detalleVenta = detalleVentaService.getOne(id).get();
		detalleVenta.setVenta(detalleVEnt.getVenta());
		detalleVenta.setProducto(detalleVEnt.getProducto());
		detalleVenta.setCantidad(detalleVEnt.getCantidad());
		
		detalleVenta.setSubtotal(detalleVEnt.getSubtotal());
		detalleVentaService.save(detalleVenta);
		return new ResponseEntity(new Mensaje("detalle venta actualizada"), HttpStatus.OK);
	}

	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") int id) {
		if (!detalleVentaService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
		detalleVentaService.delete(id);
		return new ResponseEntity(new Mensaje("detalle venta eliminado"), HttpStatus.OK);
	}

	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@GetMapping("/detail/{id}")
	public ResponseEntity<DetalleVenta> getById(@PathVariable("id") int id) {
		if (!detalleVentaService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
		DetalleVenta detalleVenta = detalleVentaService.getOne(id).get();
		return new ResponseEntity(detalleVenta, HttpStatus.OK);
	}
	
	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@GetMapping("/listaDetallesIDv/{idventa}")
	public ResponseEntity<List<DetalleVenta>> listXIdVenta(@PathVariable("idventa") int idventa) {
		List<DetalleVenta> list = detalleVentaService.listDetallesByIDventa(idventa);
		return new ResponseEntity(list, HttpStatus.OK);
	}
}
