import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from 'src/app/models/habitacion';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { TokenService } from 'src/app/services/token.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.css'],
})
export class HabitacionComponent implements OnInit {
  //habitaciones: Habitacion[] = [];
  //habitaciones: any;
  public page: number;
  todo: any = [];
  isAdmin = false;
  habitaciones: Habitacion[];

  //habi: Habitacion;

  constructor(
    private habitacionServicio: HabitacionService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //this.cargarHabitacion();
    this.cargartodo();
    this.isAdmin = this.tokenService.isAdmin();
    //this.metodollenar();
  }

  actualizarHabitacion(id: number) {
    //console.log(id);
    this.router.navigate(['/dashboard/editar-habitacion', { id }]);
  }

  // cargarHabitacion(): void {
  //   this.habitacionServicio.lista().subscribe(
  //     (data) => {
  //       this.habitaciones = data;
  //       console.log(this.habitaciones);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }

  cargartodo(): void {
    // this.habitacionServicio.todo().subscribe(
    //   (data) => {
    //     this.todo = data;
    //     // for (let i = 0; i < this.todo.length; i++) {
    //     //   this.habi[i] = this.todo[i];
    //     // }
    //     // console.log(this.habi);
    //     //console.log(this.todo);
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
    this.habitacionServicio.lista().subscribe((data) => {
      this.habitaciones = data;
    });
  }

  eliminarHabitacion(id: number) {
    swal
      .fire({
        title: '¿Estas seguro?',
        text: 'Confirma si deseas eliminar la Habitacion',
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
          this.habitacionServicio.delete(id).subscribe((dato) => {
            //console.log(dato);
            //this.cargarHabitacion();
            this.cargartodo();
            swal.fire(
              'Habitacion eliminada',
              'La Habitacion ha sido eliminada con exito',
              'success'
            );
          });
        }
      });
  }
}
