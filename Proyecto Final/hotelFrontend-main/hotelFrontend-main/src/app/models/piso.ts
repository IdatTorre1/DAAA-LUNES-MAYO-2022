export class Piso {
  idpiso?: number;
  descripcion: string;
  estado: boolean;

  constructor(descripcion: string, estado: boolean) {
    this.descripcion = descripcion;
    this.estado = estado;
  }
}
