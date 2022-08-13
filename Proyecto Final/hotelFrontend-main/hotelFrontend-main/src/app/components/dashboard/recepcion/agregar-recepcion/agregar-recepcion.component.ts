import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { Cliente } from 'src/app/models/cliente';
import { Habitacion } from 'src/app/models/habitacion';
import { Persona } from 'src/app/models/persona';
import { Piso } from 'src/app/models/piso';
import { Recepcion } from 'src/app/models/recepcion';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { PersonaService } from 'src/app/services/persona.service';
import { PisoService } from 'src/app/services/piso.service';
import { RecepcionService } from 'src/app/services/recepcion.service';
import { TokenService } from 'src/app/services/token.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-recepcion',
  templateUrl: './agregar-recepcion.component.html',
  styleUrls: ['./agregar-recepcion.component.css'],
})
export class AgregarRecepcionComponent implements OnInit {
  clientes: Cliente[] = [];
  idh: number;

  habitacionSeleccionada: Habitacion;
  clienteSelecionado: Cliente;
  personaSeleccionada: Persona;
  /*clienteSeleccionada*/
  idcliente: number;
  tipodocumento: string;
  numdocumento: string;
  nombre: string;
  apellido: string;
  correo: string;

  /**/
  fecha = new Date().toLocaleDateString();

  /*habitacionSelecionada*/
  numero: string;
  detalle: string;
  piso: string;
  categoria: string;
  precioinicial: number;
  precioEstatico: number;

  /*persona*/
  idUsuario: number;
  correoUsuario: string;

  fechaSalida: Date = new Date();

  /*recepcio */
  adelanto: number = 0;
  preciorestante: number = 0;
  totalpagado: number = 0;
  costopenalidad: number = 0;
  observacion: string = '';
  estado: boolean = true;

  constructor(
    private tokenService: TokenService,
    private clienteServicio: ClienteService,
    private habitacionServicio: HabitacionService,
    private personaServicio: PersonaService,
    private recepcionServicio: RecepcionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idh = this.route.snapshot.params['id'];
    /*correo*/
    this.correoUsuario = this.tokenService.getUserName();
    //console.log(this.idh);
    this.habitacionServicio.detail(this.idh).subscribe(
      (data) => {
        this.habitacionSeleccionada = data;
        this.numero = this.habitacionSeleccionada.numero;
        this.detalle = this.habitacionSeleccionada.detalle;
        this.piso = this.habitacionSeleccionada.piso.descripcion;
        this.categoria = this.habitacionSeleccionada.categoria.descripcion;
        this.precioinicial = this.habitacionSeleccionada.precio;
        this.precioEstatico = this.habitacionSeleccionada.precio;
      },
      (err) => {
        console.log(err);
      }
    );

    this.clienteServicio.lista().subscribe(
      (data) => {
        this.clientes = data;
      },
      (err) => {
        console.log(err);
      }
    );

    this.personaServicio.obtenerData(this.correoUsuario).subscribe(
      (data) => {
        this.personaSeleccionada = data;
        this.idUsuario = data.idpersona;
        //console.log(this.idUsuario);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  carga(id: number): void {
    //console.log(id);
    this.clienteServicio.detail(id).subscribe(
      (data) => {
        this.clienteSelecionado = data;
        this.idcliente = this.clienteSelecionado.idcliente;
        this.numdocumento = this.clienteSelecionado.numdocumento;
        this.tipodocumento = this.clienteSelecionado.tipodocumento;
        this.nombre = this.clienteSelecionado.nombre;
        this.apellido = this.clienteSelecionado.apellido;
        this.correo = this.clienteSelecionado.correo;

        //console.log(this.clienteSelecionado);
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

  fechaEntrada(): void {
    // let fechaS = document.getElementById('txtfechasalida');
    // console.log(fechaS);
    let numSalida = this.fechaSalida.toString().substring(8);
    let days = parseInt(numSalida) - new Date().getDate();
    //console.log(days);
    this.precioinicial = days * this.precioEstatico;
    //console.log(this.precioinicial);
  }

  cambiaestadoOcupado(): void {
    this.habitacionServicio.estadoOcupado(this.idh).subscribe((data) => {
      //console.log(data);
    });
  }

  onCreate(): void {
    if (this.adelanto > 0) {
      this.preciorestante = this.precioinicial - this.adelanto;
    }

    const recepcion = new Recepcion(
      // this.idUsuario,
      // this.idh,
      // this.idcliente,
      this.personaSeleccionada,
      this.habitacionSeleccionada,
      this.clienteSelecionado,
      this.fechaSalida.toString(),
      this.precioinicial,
      this.adelanto,
      this.preciorestante,
      this.totalpagado,
      this.costopenalidad,
      this.observacion,
      this.estado
    );
    console.log(recepcion);

    this.recepcionServicio.save(recepcion).subscribe(
      (data) => {
        //console.log(categoria);
        this.cambiaestadoOcupado();
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Recepcion registrada con exito',
          showConfirmButton: false,
          timer: 1500,
        });
        //console.log(recepcion);
        this.router.navigate(['/dashboard/recepcion']);
      },
      (err) => {
        //console.log(err);
        swal.fire({
          position: 'center',
          icon: 'error',
          title: err,
          showConfirmButton: false,
          timer: 1500,
        });
        //console.log(recepcion);
      }
    );
  }
}
