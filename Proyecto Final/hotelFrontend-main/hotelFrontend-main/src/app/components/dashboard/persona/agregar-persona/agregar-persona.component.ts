import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-persona',
  templateUrl: './agregar-persona.component.html',
  styleUrls: ['./agregar-persona.component.css'],
})
export class AgregarPersonaComponent implements OnInit {
  dni: string;
  nombre: string;
  apellido: string;
  correo: string;
  clave: string;
  estado: boolean = true;
  roles: string = 'admin';
  finalRoles: string[] = [];
  constructor(
    private personaServicio: PersonaService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onCreate(): void {
    if (this.roles === 'admin') {
      this.finalRoles = ['admin', 'user'];
    } else {
      this.finalRoles = ['user'];
    }
    const usuario = new Persona(
      this.dni,
      this.nombre,
      this.apellido,
      this.correo,
      this.clave,
      this.estado,
      this.finalRoles
    );
    this.personaServicio.nuevo(usuario).subscribe(
      (data) => {
        //console.log(categoria);
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuario registrado con exito',
          showConfirmButton: false,
          timer: 1500,
        });

        this.router.navigate(['/dashboard/persona']);
      },
      (err) => {
        //console.log(err);
        swal.fire({
          position: 'center',
          icon: 'success',
          title: err,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }
}
