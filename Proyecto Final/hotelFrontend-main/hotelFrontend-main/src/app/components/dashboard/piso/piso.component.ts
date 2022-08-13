import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Piso } from 'src/app/models/piso';
import { PisoService } from 'src/app/services/piso.service';
import { TokenService } from 'src/app/services/token.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-piso',
  templateUrl: './piso.component.html',
  styleUrls: ['./piso.component.css'],
})
export class PisoComponent implements OnInit {
  pisos: Piso[] = [];
  isAdmin = false;
  public page: number;

  constructor(
    private pisoServicio: PisoService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarPiso();
    this.isAdmin = this.tokenService.isAdmin();
  }

  actualizarPiso(id: number) {
    console.log(id);
    this.router.navigate(['/dashboard/editar-piso', { id }]);
  }

  cargarPiso(): void {
    this.pisoServicio.lista().subscribe(
      (data) => {
        this.pisos = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  eliminarPiso(id: number) {
    swal
      .fire({
        title: '¿Estas seguro?',
        text: 'Confirma si deseas eliminar el Piso',
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
          this.pisoServicio.delete(id).subscribe((dato) => {
            console.log(dato);
            this.cargarPiso();
            swal.fire(
              'Piso eliminado',
              'El Piso ha sido eliminado con exito',
              'success'
            );
          });
        }
      });
  }
}
