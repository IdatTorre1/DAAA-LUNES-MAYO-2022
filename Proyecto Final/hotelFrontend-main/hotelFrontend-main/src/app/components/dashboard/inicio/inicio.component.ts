import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { HotelService } from 'src/app/services/hotel.service';
import { PersonaService } from 'src/app/services/persona.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  cantidadHabitaciones: number;
  cantidadPersonas: number;
  cantidadClientes: number;
  cantidadUsuarios: number;
  isAdmin = false;

  //cantidadHabitaciones: number;
  HabitacionesDisponibles: number;
  HabitacionesOcupados: number;
  HabitacionesLiempieza: number;

  /**habitacion */

  constructor(
    private productoServicio: ProductoService,
    private clienteServicio: ClienteService,
    private personaServicio: PersonaService,
    private habitacionServicio: HabitacionService
  ) {}

  ngOnInit(): void {
    this.habitacionServicio.cantidad().subscribe(
      (data) => {
        this.cantidadHabitaciones = data;
      },
      (err) => {
        console.log(err);
      }
    );

    this.habitacionServicio.cantidadPorEst(1).subscribe(
      (data) => {
        this.HabitacionesDisponibles = data;
      },
      (err) => {
        console.log(err);
      }
    );

    this.habitacionServicio.cantidadPorEst(2).subscribe(
      (data) => {
        this.HabitacionesOcupados = data;
      },
      (err) => {
        console.log(err);
      }
    );

    this.habitacionServicio.cantidadPorEst(3).subscribe(
      (data) => {
        this.HabitacionesLiempieza = data;
      },
      (err) => {
        console.log(err);
      }
    );

    // this.habitacionServicio.todo().subscribe(
    //   (data) => {
    //     this.cantidadHabitaciones = data;
    //     for (let i = 0; i < this.cantidadHabitaciones.length; i++) {
    //       //console.log(this.todo[i][4]);
    //       if (this.cantidadHabitaciones[i][4] === 'OCUPADO') {
    //         this.ocupados.push(this.cantidadHabitaciones[i]);
    //       } else if (this.cantidadHabitaciones[i][4] === 'DISPONIBLE') {
    //         this.disponibles.push(this.cantidadHabitaciones[i]);
    //       } else {
    //         this.liempieza.push(this.cantidadHabitaciones[i]);
    //       }
    //     }
    //     //console.log(this.ocupados);
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );

    this.personaServicio.cantidad().subscribe(
      (data) => {
        this.cantidadUsuarios = data;
      },
      (err) => {
        console.log(err);
      }
    );

    this.productoServicio.cantidad().subscribe(
      (data) => {
        this.cantidadPersonas = data;
      },
      (err) => {
        console.log(err);
      }
    );

    this.clienteServicio.cantidad().subscribe(
      (data) => {
        this.cantidadClientes = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
