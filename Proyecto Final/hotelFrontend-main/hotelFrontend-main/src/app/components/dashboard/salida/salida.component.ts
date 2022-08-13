import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from 'src/app/models/habitacion';
import { Piso } from 'src/app/models/piso';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { PisoService } from 'src/app/services/piso.service';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css'],
})
export class SalidaComponent implements OnInit {
  piso: Piso[];
  habitaciones: Habitacion[];
  idpiso: string = 'TODOS';
  habitacionesOcupadas: Habitacion[] = [];
  //ocupados: any[] = [];
  constructor(
    private pisoServicio: PisoService,
    private habitacionServicio: HabitacionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pisoServicio.lista().subscribe(
      (data) => {
        this.piso = data;
      },
      (err) => {
        console.log(err);
      }
    );
    this.todasLasHabitaciones();
  }

  todasLasHabitaciones() {
    this.habitacionServicio.lista().subscribe(
      (data) => {
        this.habitaciones = data;
        this.habitacionesOcupadas = [];
        for (let i = 0; i < this.habitaciones.length; i++) {
          if (this.habitaciones[i].estadoHabitacion.descripcion === 'OCUPADO') {
            this.habitacionesOcupadas.push(this.habitaciones[i]);
          }
        }
        //console.log(this.habitacionesOcupadas);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  salida(id: number) {
    //alert(id);
    this.router.navigate(['/dashboard/salida-finalizar', { id }]);
  }
  cambio() {
    //console.log(this.idpiso);
    if (this.idpiso === 'TODOS') {
      this.todasLasHabitaciones();
    } else {
      this.habitacionServicio.listaPosPiso(parseInt(this.idpiso)).subscribe(
        (data) => {
          this.habitaciones = data;
          this.habitacionesOcupadas = [];
          for (let i = 0; i < this.habitaciones.length; i++) {
            if (
              this.habitaciones[i].estadoHabitacion.descripcion === 'OCUPADO'
            ) {
              this.habitacionesOcupadas.push(this.habitaciones[i]);
            }
          }
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
