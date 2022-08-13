import { Producto } from './producto';
import { Venta } from './venta';

export class Detalle {
  iddetalleventa?: number;
  venta: Venta;
  producto: Producto;
  cantidad: number;
  subtotal: number;

  constructor(
    venta: Venta,
    producto: Producto,
    cantidad: number,
    subtotal: number
  ) {
    this.venta = venta;
    this.producto = producto;
    this.cantidad = cantidad;
    this.subtotal = subtotal;
  }
}
