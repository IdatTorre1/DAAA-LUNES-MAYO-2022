import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private productoURL = environment.productoURL;

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.productoURL + 'lista');
  }

  public cantidad(): Observable<number> {
    return this.httpClient.get<number>(this.productoURL + 'cantidad');
  }

  public save(producto: Producto): Observable<any> {
    return this.httpClient.post<any>(this.productoURL + 'create', producto);
  }

  public update(id: number, producto: Producto): Observable<Producto> {
    return this.httpClient.put<Producto>(
      this.productoURL + `update/${id}`,
      producto
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.productoURL + `delete/${id}`);
  }
  public detail(id: number): Observable<Producto> {
    return this.httpClient.get<Producto>(this.productoURL + `detail/${id}`);
  }
}
