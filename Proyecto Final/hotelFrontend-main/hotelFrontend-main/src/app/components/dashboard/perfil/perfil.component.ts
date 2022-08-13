import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  nombre: string;
  apellido: string;
  correo: string;
  dni: string;
  nombreUsuario: string;
  rol: roles[];
  fechaCreacion: string;
  nombreRol: string;
  fechaHoy = new Date().toLocaleDateString();
  constructor(
    private personaServicio: PersonaService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.nombreUsuario = this.tokenService.getUserName();

    this.personaServicio.obtenerData(this.nombreUsuario).subscribe(
      (resp) => {
        //console.log(resp);
        this.nombre = resp.nombre;
        this.apellido = resp.apellido;
        this.correo = resp.correo;
        this.dni = resp.dni;
        this.fechaCreacion = resp.fechacreacion;
        this.rol = resp.roles;
        //this.nombreRol = this.rol[0].rolNombre.substring(5);
        //this.nombreRol.substring(1, 5);
        this.nombreRol = this.rol.length === 1 ? 'USER' : 'ADMIN';
        console.log(this.nombreRol);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
class roles {
  id: number;
  rolNombre: string;
  //constructor() {}
}
