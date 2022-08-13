import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Venta } from '../models/venta';

@Injectable({
  providedIn: 'root',
})
export class VentaService {
  private ventaURL = environment.ventaURL;

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Venta[]> {
    return this.httpClient.get<Venta[]>(this.ventaURL + 'lista');
  }
  public listasVentas(id: number): Observable<Venta[]> {
    return this.httpClient.get<Venta[]>(this.ventaURL + `listaVentas/${id}`);
  }

  public save(venta: Venta): Observable<any> {
    return this.httpClient.post<any>(this.ventaURL + 'create', venta);
  }

  public update(id: number, categoria: Venta): Observable<Venta> {
    return this.httpClient.put<Venta>(
      this.ventaURL + `update/${id}`,
      categoria
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.ventaURL + `delete/${id}`);
  }
  public detail(id: number): Observable<Venta> {
    return this.httpClient.get<Venta>(this.ventaURL + `detail/${id}`);
  }
}
