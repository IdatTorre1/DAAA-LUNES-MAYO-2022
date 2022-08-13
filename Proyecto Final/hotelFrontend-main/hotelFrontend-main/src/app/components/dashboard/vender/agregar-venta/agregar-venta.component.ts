import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detalle } from 'src/app/models/detalle';
import { Habitacion } from 'src/app/models/habitacion';
import { Producto } from 'src/app/models/producto';
import { Recepcion } from 'src/app/models/recepcion';
import { Venta } from 'src/app/models/venta';
import { DetalleService } from 'src/app/services/detalle.service';
import { ProductoService } from 'src/app/services/producto.service';
import { RecepcionService } from 'src/app/services/recepcion.service';
import { VentaService } from 'src/app/services/venta.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-venta',
  templateUrl: './agregar-venta.component.html',
  styleUrls: ['./agregar-venta.component.css'],
})
export class AgregarVentaComponent implements OnInit {
  recepciones: Recepcion[];
  id: number;
  idrecepcion: number;

  encontrada: Recepcion[] = [];

  recepcionFija: Recepcion;
  productoDELcbo: Producto;
  stock: number = 0;

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
  fechaentrada: string;
  /*comprobar*/
  idhabitacion: number;
  estadorecp: boolean;

  /*productos */
  productos: Producto[];
  idproducto: number;
  //productoSeleccionado: Producto;
  precioProducto: number = 0;

  /*tabla */
  tablaproducto: any = [];
  cantidadPro: number = 0;
  totalPagar: number = 0;
  totalPag: number = 0;

  /**venta */
  ventaRealizada: Venta;
  estado: string = 'Pendiente';
  idventa: number;

  /**detalle venta */
  objetoDetalle: any = [];

  constructor(
    private recepcionServicio: RecepcionService,
    private productoServicio: ProductoService,
    private route: ActivatedRoute,
    private ventaServicio: VentaService,
    private detalleServicio: DetalleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.recepcionServicio.detailXHabitacion(this.id).subscribe(
      (data) => {
        this.recepcionFija = data;
        this.numero = this.recepcionFija.habitacion.numero;
        this.detalle = this.recepcionFija.habitacion.detalle;
        this.categoria = this.recepcionFija.habitacion.categoria.descripcion;
        this.piso = this.recepcionFija.habitacion.piso.descripcion;
        this.nombreApellido =
          this.recepcionFija.cliente.nombre +
          ', ' +
          this.recepcionFija.cliente.apellido;
        this.numdocumento = this.recepcionFija.cliente.numdocumento;
        this.correo = this.recepcionFija.cliente.correo;
        this.fechaEntrada = this.recepcionFija.fechaentrada;
        this.costohabitacion = this.recepcionFija.habitacion.precio;
        this.cantidadAdelanto = this.recepcionFija.adelanto;
        this.cantidadRestante = this.recepcionFija.preciorestante;
        this.fechaentrada = this.recepcionFija.fechaentrada;
      },
      (err) => {
        console.log(err);
      }
    );
    // this.recepcionServicio.lista().subscribe(
    //   (data) => {
    //     this.recepciones = data;
    //     for (let i = 0; i < this.recepciones.length; i++) {
    //       //console.log(this.recepciones[i]);
    //       if (
    //         this.recepciones[i].habitacion.idhabitacion == this.id &&
    //         this.recepciones[i].estado
    //       ) {
    //         this.encontrada.push(this.recepciones[i]);
    //       }
    //     }
    //     //console.log(this.encontrada);
    //     this.idrecepcion = this.encontrada[0].idrecepcion;
    //     this.numero = this.encontrada[0].habitacion.numero;
    //     this.detalle = this.encontrada[0].habitacion.detalle;
    //     this.categoria = this.encontrada[0].habitacion.categoria.descripcion;
    //     this.piso = this.encontrada[0].habitacion.piso.descripcion;
    //     this.nombreApellido =
    //       this.encontrada[0].cliente.nombre +
    //       ' ' +
    //       this.encontrada[0].cliente.apellido;
    //     this.numdocumento = this.encontrada[0].cliente.numdocumento;
    //     this.correo = this.encontrada[0].cliente.correo;
    //     this.fechaEntrada = this.encontrada[0].fechaentrada;
    //     this.costohabitacion = this.encontrada[0].habitacion.precio;
    //     this.cantidadAdelanto = this.encontrada[0].adelanto;
    //     this.cantidadRestante = this.encontrada[0].preciorestante;
    //     this.fechaSalida = this.encontrada[0].fechasalida;
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );

    this.productoServicio.lista().subscribe((data) => {
      this.productos = data;
      //console.log(this.productos);
    });
  }
  cambio(): void {
    //console.log(this.idproducto);
    //console.log(this.productoDELcbo);
    this.precioProducto = this.productoDELcbo.precio;
    this.stock = this.productoDELcbo.cantidad;
    // this.productoServicio.detail(this.idproducto).subscribe((data) => {
    //   this.productoSeleccionado = data;
    //   this.precioProducto = this.productoSeleccionado.precio;
    // });
  }

  agregarProdTabla(): void {
    //console.log(this.productoSeleccionado);
    let subtotalFinal = this.precioProducto * this.cantidadPro;

    let nuevoTabla = {
      idventa: 0,
      idproducto: this.productoDELcbo.idproducto,
      nombrePro: this.productoDELcbo.nombre,
      cantidad: this.cantidadPro,
      precioUnitatio: this.precioProducto,
      subtotalD: subtotalFinal,
    };
    this.totalPag = this.totalPag + subtotalFinal;
    this.totalPagar = this.totalPag;
    this.tablaproducto.push(nuevoTabla);

    let detalleVen = {
      venta: {},
      producto: this.productoDELcbo,
      cantidad: nuevoTabla.cantidad,
      subtotal: nuevoTabla.subtotalD,
    };

    this.objetoDetalle.push(detalleVen);

    console.log(this.objetoDetalle);
  }

  guardarVenta() {
    let vent = new Venta(this.recepcionFija, this.totalPagar, this.estado);
    this.ventaServicio.save(vent).subscribe(
      (data) => {
        this.ventaRealizada = data;
        this.guardarDetalle(this.ventaRealizada);

        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Venta registrada con exito',
          showConfirmButton: false,
          timer: 1500,
        });

        this.router.navigate(['/dashboard/vender']);
        //this.idventa = data.idventa;
      },
      (err) => {
        swal.fire({
          position: 'center',
          icon: 'error',
          title: err,
          showConfirmButton: false,
          timer: 1500,
        });
        //console.log(err);
      }
    );
  }

  guardarDetalle(ventaEnv: Venta): void {
    this.objetoDetalle.forEach((ele) => {
      ele.venta = ventaEnv;
      //console.log(ele);
      this.detalleServicio.save(ele).subscribe((data) => {
        console.log(data);
      });
    });
  }
}

// interface DetalleVent {
//   iddetalleventa: number;
//   idventa: number;
//   idproducto: number;
//   cantidad: number;
//   subtotal: number;
// }
