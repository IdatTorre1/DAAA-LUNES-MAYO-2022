import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Detalle } from '../models/detalle';

@Injectable({
  providedIn: 'root',
})
export class DetalleService {
  private detalleVentaURL = environment.detalleVentaURL;

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Detalle[]> {
    return this.httpClient.get<Detalle[]>(this.detalleVentaURL + 'lista');
  }

  public save(detalleV: Detalle): Observable<any> {
    return this.httpClient.post<any>(this.detalleVentaURL + 'create', detalleV);
  }

  public update(id: number, detalleV: Detalle): Observable<Detalle> {
    return this.httpClient.put<Detalle>(
      this.detalleVentaURL + `update/${id}`,
      detalleV
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.detalleVentaURL + `delete/${id}`);
  }

  public detail(id: number): Observable<Detalle> {
    return this.httpClient.get<Detalle>(this.detalleVentaURL + `detail/${id}`);
  }

  public detalleByIdVenta(id: number): Observable<Detalle[]> {
    return this.httpClient.get<Detalle[]>(
      this.detalleVentaURL + `listaDetallesIDv/${id}`
    );
  }
}
