export class Cliente {
  idcliente?: number;
  nombre: string;
  apellido: string;
  tipodocumento: string;
  numdocumento: string;
  telefono: string;
  correo: string;

  constructor(
    nombre: string,
    apellido: string,
    tipodocumento: string,
    numdocumento: string,
    telefono: string,
    correo: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.tipodocumento = tipodocumento;
    this.numdocumento = numdocumento;
    this.telefono = telefono;
    this.correo = correo;
  }
}
