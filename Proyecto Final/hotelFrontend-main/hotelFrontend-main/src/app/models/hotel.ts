export class Hotel {
  idhotel?: number;
  nombre_comercial: string;
  direccion: string;
  distrito: string;
  telefono: string;
  ruc_hotel: string;
  descripcion: string;

  constructor(
    nombre_comercial: string,
    direccion: string,
    distrito: string,
    telefono: string,
    ruc_hotel: string,
    descripcion: string
  ) {
    this.nombre_comercial = nombre_comercial;
    this.direccion = direccion;
    this.distrito = distrito;
    this.telefono = telefono;
    this.ruc_hotel = ruc_hotel;
    this.descripcion = descripcion;
  }
}
