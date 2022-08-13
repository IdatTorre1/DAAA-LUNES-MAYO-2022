import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detalle } from 'src/app/models/detalle';
import { Habitacion } from 'src/app/models/habitacion';
import { Recepcion } from 'src/app/models/recepcion';
import { Venta } from 'src/app/models/venta';
import { DetalleService } from 'src/app/services/detalle.service';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { RecepcionService } from 'src/app/services/recepcion.service';
import { VentaService } from 'src/app/services/venta.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-salida-finalizar',
  templateUrl: './salida-finalizar.component.html',
  styleUrls: ['./salida-finalizar.component.css'],
})
export class SalidaFinalizarComponent implements OnInit {
  recepcion: Recepcion;
  id: number;
  idrecepcion: number;
  //sumaPrecioVentas: number = 0;
  //recepcion: Recepcion[] = [];

  numero: string;
  detalle: string;
  categoria: string;
  piso: string;
  nombreApellido: string;
  numdocumento: string;
  correo: string;
  fechaEntrada: string;
  costohabitacion: number;
  cantidadAdelanto: number = 0;
  cantidadRestante: number = 0;
  fechaSalida: string;

  /*precioFinal */
  preciofinal: number;
  costopenalidad: number = 0;
  estado: boolean = false;
  /*comprobar*/
  idhabitacion: number;
  estadorecp: boolean;

  prueba: Detalle[] = [];
  venta: Venta[];
  detalleVenta: any = [];

  constructor(
    private recepcionServicio: RecepcionService,
    private habitacionServicio: HabitacionService,
    private ventaServicio: VentaService,
    private detalleVentaServicio: DetalleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.recepcionServicio.detailXHabitacion(this.id).subscribe(
      (data) => {
        this.recepcion = data;
        //console.log(this.recepciones);
        //console.log(this.encontrada);
        this.idrecepcion = this.recepcion.idrecepcion;
        this.numero = this.recepcion.habitacion.numero;
        this.detalle = this.recepcion.habitacion.detalle;
        this.categoria = this.recepcion.habitacion.categoria.descripcion;
        this.piso = this.recepcion.habitacion.piso.descripcion;
        this.nombreApellido =
          this.recepcion.cliente.nombre + ' ' + this.recepcion.cliente.apellido;
        this.numdocumento = this.recepcion.cliente.numdocumento;
        this.correo = this.recepcion.cliente.correo;
        this.fechaEntrada = this.recepcion.fechaentrada;
        this.costohabitacion = this.recepcion.habitacion.precio;
        this.cantidadAdelanto = this.recepcion.adelanto;
        this.cantidadRestante = this.recepcion.preciorestante;
        this.fechaSalida = this.recepcion.fechasalida;

        this.obetenerVenta(this.recepcion.idrecepcion);

        //console.log(this.sumaPrecioVentas);

        if (this.cantidadAdelanto > 0) {
          this.preciofinal =
            this.recepcion.precioinicial - this.cantidadAdelanto;
        } else {
          this.preciofinal = this.recepcion.precioinicial;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  cambiaestado() {
    this.habitacionServicio.estadoLimpieza(this.id).subscribe((data) => {
      //console.log(data);
    });
  }

  obetenerVenta(idrecepcion: number): void {
    this.ventaServicio.listasVentas(idrecepcion).subscribe(
      (data) => {
        this.venta = data;
        this.venta.forEach((element) => {
          //console.log(element.idventa);
          //this.sumaPrecioVentas += element.total;
          this.preciofinal += element.total;
          //console.log(this.sumaPrecioVentas);
          this.obetenerDetalleVenta(element.idventa);
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  obetenerDetalleVenta(idventa: number): void {
    this.detalleVentaServicio.detalleByIdVenta(idventa).subscribe(
      (data) => {
        this.detalleVenta = data;
        //console.log(this.detalleVenta);
        for (const objeto of this.detalleVenta) {
          this.prueba.push(objeto);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  finalizarRecepcion(): void {
    //alert(this.idrecepcion);
    var date = new Date();

    const formatDate = (current_datetime) => {
      let formatted_date =
        current_datetime.getFullYear() +
        '-' +
        (current_datetime.getMonth() + 1) +
        '-' +
        current_datetime.getDate() +
        ' ' +
        current_datetime.getHours() +
        ':' +
        current_datetime.getMinutes() +
        ':' +
        current_datetime.getSeconds();
      return formatted_date;
    };

    //console.log(formatDate(date));

    const objetoRecp = {
      totalpagado: this.preciofinal,
      costopenalidad: this.costopenalidad,
      fechasalidaconfirmacion: formatDate(date),
      estado: this.estado,
    };
    console.log(objetoRecp);
    this.cambiaestado();
    this.recepcionServicio.update(this.idrecepcion, objetoRecp).subscribe(
      (data) => {
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Recepcion finaliza con exito ',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/dashboard/salida']);
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
