import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { Habitacion } from 'src/app/models/habitacion';
import { Producto } from 'src/app/models/producto';
import { ClienteService } from 'src/app/services/cliente.service';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { ProductoService } from 'src/app/services/producto.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-productos-reporte',
  templateUrl: './productos-reporte.component.html',
  styleUrls: ['./productos-reporte.component.css'],
})
export class ProductosReporteComponent implements OnInit {
  productos: Producto[];
  clientes: Cliente[];
  habitaciones: Habitacion[];
  //fileName = 'ReporteProducto.xlsx';

  constructor(
    private productoServicio: ProductoService,
    private clienteServicio: ClienteService,
    private habitacionServicio: HabitacionService
  ) {}

  ngOnInit(): void {
    this.productoServicio.lista().subscribe(
      (data) => {
        this.productos = data;
        //console.log(this.productos);
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

    this.habitacionServicio.lista().subscribe(
      (data) => {
        this.habitaciones = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  exportexcel(): void {
    /*formato fecha*/
    let date = new Date();
    let formato = date.toISOString().split('T')[0];
    let nombreArchivo = `reporteProducto${formato}.xlsx`;
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, nombreArchivo);
  }

  exportexcelClientes(): void {
    /*formato fecha*/
    let date = new Date();
    let formato = date.toISOString().split('T')[0];
    let nombreArchivo = `reporteClientes${formato}.xlsx`;
    /* pass here the table id */
    let element = document.getElementById('excel-cliente');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, nombreArchivo);
  }

  exportexcelHabitaciones(): void {
    /*formato fecha*/
    let date = new Date();
    let formato = date.toISOString().split('T')[0];
    let nombreArchivo = `reporteHabitacion${formato}.xlsx`;
    /* pass here the table id */
    let element = document.getElementById('excel-habitacion');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* save to file */
    XLSX.writeFile(wb, nombreArchivo);
  }
}
