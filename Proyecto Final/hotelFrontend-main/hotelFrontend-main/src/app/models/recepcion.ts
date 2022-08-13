import { Cliente } from './cliente';
import { Habitacion } from './habitacion';
import { Persona } from './persona';

export class Recepcion {
  idrecepcion?: number;
  persona: Persona;
  habitacion: Habitacion;
  cliente: Cliente;
  // idpersona: number;
  // idhabitacion: number;
  // idcliente: number;
  fechaentrada?: string;
  fechasalida: string;
  fechasalidaconfirmacion: Date;
  precioinicial: number;
  adelanto: number;
  preciorestante: number;
  totalpagado: number;
  costopenalidad: number;
  observacion: string;
  estado: boolean;
  constructor(
    // idpersona: number,
    // idhabitacion: number,
    // idcliente: number,
    persona: Persona,
    habitacion: Habitacion,
    cliente: Cliente,
    //fechaentrada: string,
    fechasalida: string,
    //fechasalidaconfirmacion: Date,
    precioinicial: number,
    adelanto: number,
    preciorestante: number,
    totalpagado: number,
    costopenalidad: number,
    observacion: string,
    estado: boolean
  ) {
    // this.idpersona = idpersona;
    // this.idhabitacion = idhabitacion;
    // this.idcliente = idcliente;
    this.persona = persona;
    this.habitacion = habitacion;
    this.cliente = cliente;
    this.fechasalida = fechasalida;
    //this.fechasalidaconfirmacion = fechasalidaconfirmacion;
    this.precioinicial = precioinicial;
    this.adelanto = adelanto;
    this.preciorestante = preciorestante;
    this.totalpagado = totalpagado;
    this.costopenalidad = costopenalidad;
    this.observacion = observacion;
    this.estado = estado;
  }
}
