export class Persona {
  idpersona?: number;
  dni: string;
  nombre: string;
  apellido: string;
  correo: string;
  clave: string;
  estado: boolean;
  roles?: string[];

  constructor(
    dni: string,
    nombre: string,
    apellido: string,
    correo: string,
    clave: string,
    estado: boolean,
    roles: string[]
  ) {
    this.dni = dni;
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.clave = clave;
    this.estado = estado;
    this.roles = roles;
  }
}
