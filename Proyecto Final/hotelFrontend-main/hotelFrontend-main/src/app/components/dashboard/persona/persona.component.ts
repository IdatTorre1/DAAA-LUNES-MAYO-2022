import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent implements OnInit {
  personas: any;
  public page: number;

  constructor(
    private personaServicio: PersonaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mostrarDatos();
  }
  mostrarDatos() {
    this.personaServicio.lista().subscribe(
      (resp) => {
        this.personas = resp;
        //console.log(this.personas);
        //console.log(this.personas[1].roles.length);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  editarPersona(id: number) {
    this.router.navigate(['/dashboard/editar-persona', { id }]);
  }
  eliminarPersona(id: number) {
    swal
      .fire({
        title: '¿Estas seguro?',
        text: 'Confirma si deseas eliminar el usuario',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si , elimínalo',
        cancelButtonText: 'No, cancelar',
        buttonsStyling: true,
      })
      .then((result) => {
        if (result.value) {
          this.personaServicio.delete(id).subscribe((dato) => {
            //console.log(dato);
            this.mostrarDatos();
            swal.fire(
              'Usuario eliminado',
              'El usuario ha sido eliminado con exito',
              'success'
            );
          });
        }
      });
  }
}
