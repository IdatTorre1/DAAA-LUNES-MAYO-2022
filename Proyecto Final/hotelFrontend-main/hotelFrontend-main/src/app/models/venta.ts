import { Recepcion } from './recepcion';

export class Venta {
  idventa?: number;
  recepcion: Recepcion;
  total: number;
  estado: string;

  constructor(recepcion: Recepcion, total: number, estado: string) {
    this.recepcion = recepcion;
    this.total = total;
    this.estado = estado;
  }
}
