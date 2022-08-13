import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from 'src/app/models/habitacion';
import { Piso } from 'src/app/models/piso';
import { Recepcion } from 'src/app/models/recepcion';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { PisoService } from 'src/app/services/piso.service';
import swal from 'sweetalert2';
import { RecepcionService } from 'src/app/services/recepcion.service';

@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.component.html',
  styleUrls: ['./recepcion.component.css'],
})
export class RecepcionComponent implements OnInit {
  piso: Piso[];
  //todo: any;
  idpiso: string = 'TODOS';
  habitaciones: Habitacion[];
  recepciones: Recepcion;
  constructor(
    private pisoServicio: PisoService,
    private habitacionServicio: HabitacionService,
    private recepcionServicio: RecepcionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.todasLasHabitaciones();
    //this.listarRecepciones();
    this.pisoServicio.lista().subscribe(
      (data) => {
        this.piso = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // listarRecepciones(): void {
  //   this.recepcionServicio.lista().subscribe(
  //     (data) => {
  //       console.log(data);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }
  todasLasHabitaciones() {
    this.habitacionServicio.lista().subscribe(
      (data) => {
        this.habitaciones = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  cambiaestado(idhabitacion: number) {
    swal
      .fire({
        title: '¿Estas seguro?',
        text: 'Termino la limpiza?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si , Termino la limpieza',
        cancelButtonText: 'No, Todavía',
        buttonsStyling: true,
      })
      .then((result) => {
        if (result.value) {
          this.habitacionServicio.estadoDisponible(idhabitacion).subscribe(
            (data) => {
              // console.log(data);
              swal.fire('Habitacion', 'Finalizo la limpieza', 'success');
              this.todasLasHabitaciones();
            },
            (err) => {
              console.log(err);
            }
          );
        }
      });
  }

  cambio() {
    console.log(this.idpiso);
    if (this.idpiso === 'TODOS') {
      this.todasLasHabitaciones();
    } else {
      this.habitacionServicio.listaPosPiso(parseInt(this.idpiso)).subscribe(
        (data) => {
          this.habitaciones = data;
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  agregarRecepciom(id: number) {
    //alert(id);
    let estadoHabitacion = 0;
    this.habitacionServicio.detail(id).subscribe(
      (data) => {
        estadoHabitacion = data.estadoHabitacion.idestadohabitacion;
        if (estadoHabitacion == 1) {
          this.router.navigate(['/dashboard/agregar-recepcion', { id }]);
        } else if (estadoHabitacion == 2) {
          this.router.navigate(['/dashboard/detalle-recepcion', { id }]);
        } else {
          this.cambiaestado(id);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
