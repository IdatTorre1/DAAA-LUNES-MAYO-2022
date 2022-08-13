import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { Habitacion } from 'src/app/models/habitacion';
import { Piso } from 'src/app/models/piso';
import { CategoriaService } from 'src/app/services/categoria.service';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { PisoService } from 'src/app/services/piso.service';
import swal from 'sweetalert2';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EstadohabitacionService } from 'src/app/services/estadohabitacion.service';
import { Estadohabitacion } from 'src/app/models/estadohabitacion';

@Component({
  selector: 'app-agregar-habitacion',
  templateUrl: './agregar-habitacion.component.html',
  styleUrls: ['./agregar-habitacion.component.css'],
})
export class AgregarHabitacionComponent implements OnInit {
  //categorias: any;
  categorias: Categoria[];
  pisos: Piso[];
  estadohabitacion: Estadohabitacion[];
  habitacion: Habitacion;
  //profileForm: FormGroup;

  pisoSelecionado: Piso;
  categoriaSelecionada: Categoria;
  estadohabitacionSelecionada: Estadohabitacion;
  /*habitacion */
  numero: string;
  detalle: string;
  precio: number;
  estado: boolean = true;

  constructor(
    //public formB: FormBuilder,
    private router: Router,
    private categoriaServicio: CategoriaService,
    private pisoServicio: PisoService,
    private habitacioServicio: HabitacionService,
    private estadoHabitacionServicio: EstadohabitacionService
  ) {}

  ngOnInit(): void {
    // this.profileForm = this.formB.group({
    //   numero: ['', Validators.required],
    //   detalle: ['', Validators.required],
    //   precio: ['', Validators.required],
    //   estadoHabitacion: [, Validators.required],
    //   piso: ['', Validators.required],
    //   categoria: ['', Validators.required],
    //   estado: [true, Validators.required],
    // });

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

  onCreate(): void {
    // console.log(this.profileForm.value);
    // console.log(this.pisoSelecionado);
    // console.log(this.categoriaSelecionada);
    // console.log(this.estadohabitacionSelecionada);
    const obetjoHabitacion = new Habitacion(
      this.numero,
      this.detalle,
      this.precio,
      this.estadohabitacionSelecionada,
      this.pisoSelecionado,
      this.categoriaSelecionada,
      this.estado
    );
    console.log(obetjoHabitacion);

    this.habitacioServicio.save(obetjoHabitacion).subscribe(
      (data) => {
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Habitacion registrada con exito',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/dashboard/habitacion']);
      },
      (err) => {
        //console.log(err);
        swal.fire({
          position: 'center',
          icon: 'error',
          title: err.error,
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/dashboard/agregar-habitacion']);
      }
    );
  }
}
