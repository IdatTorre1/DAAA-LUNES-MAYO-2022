import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { Estadohabitacion } from 'src/app/models/estadohabitacion';
import { Habitacion } from 'src/app/models/habitacion';
import { Piso } from 'src/app/models/piso';
import { CategoriaService } from 'src/app/services/categoria.service';
import { EstadohabitacionService } from 'src/app/services/estadohabitacion.service';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { PisoService } from 'src/app/services/piso.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-habitacion',
  templateUrl: './editar-habitacion.component.html',
  styleUrls: ['./editar-habitacion.component.css'],
})
export class EditarHabitacionComponent implements OnInit {
  id: number;
  categorias: Categoria[];
  pisos: Piso[];
  estadohabitacion: Estadohabitacion[];
  habitacion: Habitacion;
  // profileForm: FormGroup;

  constructor(
    //  public formB: FormBuilder,
    private router: Router,
    private categoriaServicio: CategoriaService,
    private pisoServicio: PisoService,
    private habitacioServicio: HabitacionService,
    private estadoHabitacionServicio: EstadohabitacionService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
    this.habitacioServicio.detail(this.id).subscribe(
      (data) => {
        this.habitacion = data;
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

  ngOnInit(): void {
    this.categoriaServicio.lista().subscribe(
      (data) => {
        this.categorias = data;
      },
      (err) => {
        console.log(err);
      }
    );
    this.estadoHabitacionServicio.lista().subscribe(
      (data) => {
        this.estadohabitacion = data;
      },
      (err) => {
        console.log(err);
      }
    );

    this.pisoServicio.lista().subscribe(
      (data) => {
        this.pisos = data;
        //console.log(this.pisos);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onUpdate(): void {
    //const id = this.activatedRoute.snapshot.params.id;
    this.habitacioServicio.update(this.id, this.habitacion).subscribe(
      (data) => {
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Habitacion actualizada con exito',
          showConfirmButton: false,
          timer: 1500,
        });

        this.router.navigate(['/dashboard/habitacion']);
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
