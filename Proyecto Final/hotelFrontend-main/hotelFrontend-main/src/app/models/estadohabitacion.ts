export class Estadohabitacion {
  idestadohabitacion?: number;
  descripcion: string;
  estado: boolean;

  constructor(descripcion: string, estado: boolean) {
    this.descripcion = descripcion;
    this.estado = estado;
  }
}
