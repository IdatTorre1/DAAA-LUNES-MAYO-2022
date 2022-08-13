import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Detalle } from 'src/app/models/detalle';
import { Recepcion } from 'src/app/models/recepcion';
import { Venta } from 'src/app/models/venta';
import { DetalleService } from 'src/app/services/detalle.service';
import { RecepcionService } from 'src/app/services/recepcion.service';
import { VentaService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-detalle-recepcion',
  templateUrl: './detalle-recepcion.component.html',
  styleUrls: ['./detalle-recepcion.component.css'],
})
export class DetalleRecepcionComponent implements OnInit {
  recepcion: Recepcion;
  //idrecepcion?
  id: number;
  venta: Venta[];
  //detalleVenta: Detalle;
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
  /*comprobar*/
  idhabitacion: number;
  estadorecp: boolean;

  //totalDetalle: Detalle[] = [];
  //totalDetalle: Detalle[];
  //detalleVenta: any = [];
  detalleVenta: Detalle[] = [];
  prueba: Detalle[] = [];

  constructor(
    private recepcionServicio: RecepcionService,
    private ventaServicio: VentaService,
    private detalleVentaServicio: DetalleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.recepcionServicio.detailXHabitacion(this.id).subscribe(
      (data) => {
        this.recepcion = data;
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
      },
      (err) => {
        console.log(err);
      }
    );
  }

  obetenerVenta(idrecepcion: number): void {
    this.ventaServicio.listasVentas(idrecepcion).subscribe(
      (data) => {
        this.venta = data;
        this.venta.forEach((element) => {
          //console.log(element.idventa);
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

  // aver(): void {
  //   console.log(this.prueba);
  //   // this.totalDetalle.forEach((element, index, arreglodet) => {
  //   //   //console.log(element[1].producto.nombre);
  //   //   for (const iterator of arreglodet) {
  //   //     console.log(iterator);
  //   //   }
  //   // });
  // }
}
