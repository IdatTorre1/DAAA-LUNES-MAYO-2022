import { Component, OnInit } from '@angular/core';
import { Recepcion } from 'src/app/models/recepcion';
import { RecepcionService } from 'src/app/services/recepcion.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-recepcion-reporte',
  templateUrl: './recepcion-reporte.component.html',
  styleUrls: ['./recepcion-reporte.component.css'],
})
export class RecepcionReporteComponent implements OnInit {
  constructor(private recepcionServicio: RecepcionService) {}
  recepciones: Recepcion[];
  ngOnInit(): void {
    this.recepcionServicio.lista().subscribe(
      (data) => {
        this.recepciones = data;
        //console.log(this.recepciones);
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
    let nombreArchivo = `reporteRecepcion${formato}.xlsx`;
    /* pass here the table id */
    let element = document.getElementById('excel-recepcion');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, nombreArchivo);
  }
}
