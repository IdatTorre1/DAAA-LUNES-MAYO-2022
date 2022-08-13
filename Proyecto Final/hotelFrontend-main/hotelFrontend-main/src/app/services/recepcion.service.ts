import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Recepcion } from '../models/recepcion';

@Injectable({
  providedIn: 'root',
})
export class RecepcionService {
  private recepcionURL = environment.recepcionURL;

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Recepcion[]> {
    return this.httpClient.get<Recepcion[]>(this.recepcionURL + 'lista');
  }

  public save(recepcion: Recepcion): Observable<any> {
    return this.httpClient.post<any>(this.recepcionURL + 'create', recepcion);
  }

  // public todo(): Observable<any[]> {
  //   return this.httpClient.get<any[]>(this.recepcionURL + 'recepciones');
  // }

  public update(id: number, recepcion: any): Observable<any> {
    return this.httpClient.put<any>(
      this.recepcionURL + `update/${id}`,
      recepcion
    );
  }

  public detail(id: number): Observable<Recepcion> {
    return this.httpClient.get<Recepcion>(this.recepcionURL + `detail/${id}`);
  }

  public detailXHabitacion(idhabitacion: number): Observable<Recepcion> {
    return this.httpClient.get<Recepcion>(
      this.recepcionURL + `recepcionxhabyest/${idhabitacion}`
    );
  }
}

// public delete(id: number): Observable<any> {
//   return this.httpClient.delete<any>(this.recepcionURL + `delete/${id}`);
// }
