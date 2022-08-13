export class Producto {
  idproducto?: number;
  nombre: string;
  detalle: string;
  precio: number;
  cantidad: number;
  estado: boolean;
  constructor(
    nombre: string,
    detalle: string,
    precio: number,
    cantidad: number,
    estado: boolean
  ) {
    this.nombre = nombre;
    this.detalle = detalle;
    this.precio = precio;
    this.cantidad = cantidad;
    this.estado = estado;
  }
}
