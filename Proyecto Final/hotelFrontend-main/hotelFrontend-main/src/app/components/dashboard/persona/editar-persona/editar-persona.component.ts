import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css'],
})
export class EditarPersonaComponent implements OnInit {
  id: number;
  persona: any;

  idper: number;
  dni: string;
  nombre: string;
  apellido: string;
  correo: string;
  clave: string;
  estado: boolean = true;
  roles: string = 'admin';
  finalRoles: string[] = [];
  nuevoRol: any[];

  constructor(
    private personaServicio: PersonaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personaServicio.detail(this.id).subscribe(
      (data) => {
        this.persona = data;
        this.dni = this.persona.dni;
        this.nombre = this.persona.nombre;
        this.apellido = this.persona.apellido;
        this.correo = this.persona.correo;
        if (this.persona.roles.length === 2) {
          this.roles = 'admin';
        } else {
          this.roles = 'user';
        }
        this.estado = this.persona.estado;
      },
      (err) => {
        swal.fire({
          position: 'center',
          icon: 'error',
          title: err.error,
          showConfirmButton: false,
          timer: 1500,
        });

        console.log(err);
      }
    );
  }

  onUpdate(): void {
    if (this.roles === 'admin') {
      this.nuevoRol = [
        { id: 1, rolNombre: 'ROLE_ADMIN' },
        { id: 2, rolNombre: 'ROLE_USER' },
      ];
    } else {
      this.nuevoRol = [{ id: 2, rolNombre: 'ROLE_USER' }];
    }
    const usuario = new Persona(
      this.dni,
      this.nombre,
      this.apellido,
      this.correo,
      this.clave,
      this.estado,
      this.nuevoRol
    );
    console.log(usuario);
    this.personaServicio.update(this.id, usuario).subscribe(
      (data) => {
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuario actualizado con exito ',
          showConfirmButton: false,
          timer: 1500,
        });

        this.router.navigate(['/dashboard/persona']);
      },
      (err) => {
        console.log(err);
        swal.fire({
          position: 'center',
          icon: 'error',
          title: err.error,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }
}
