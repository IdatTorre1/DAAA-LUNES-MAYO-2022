import { Categoria } from './categoria';
import { Estadohabitacion } from './estadohabitacion';
import { Piso } from './piso';

export class Habitacion {
  idhabitacion?: number;
  numero: string;
  detalle: string;
  precio: number;
  estadoHabitacion: Estadohabitacion;
  piso: Piso;
  categoria: Categoria;
  // idestadohabitacion: number;
  // idpiso: number;
  // idcategoria: number;
  estado: boolean;
  constructor(
    numero: string,
    detalle: string,
    precio: number,
    // idestadohabitacion: number,
    // idpiso: number,
    // idcategoria: number,
    estadoHabitacion: Estadohabitacion,
    piso: Piso,
    categoria: Categoria,
    estado: boolean
  ) {
    this.numero = numero;
    this.detalle = detalle;
    this.precio = precio;
    this.estadoHabitacion = estadoHabitacion;
    this.piso = piso;
    this.categoria = categoria;
    // this.idestadohabitacion = idestadohabitacion;
    // this.idpiso = idpiso;
    // this.idcategoria = idcategoria;
    this.estado = estado;
  }
}
