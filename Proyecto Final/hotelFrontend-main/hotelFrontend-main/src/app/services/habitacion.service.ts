import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habitacion } from '../models/habitacion';

@Injectable({
  providedIn: 'root',
})
export class HabitacionService {
  private habitacionURL = environment.habitacionURL;

  constructor(private httpClient: HttpClient) {}

  public todo(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.habitacionURL + 'todo');
  }

  public lista(): Observable<Habitacion[]> {
    return this.httpClient.get<Habitacion[]>(this.habitacionURL + 'lista');
  }

  public save(habitacion: any): Observable<any> {
    return this.httpClient.post(this.habitacionURL + 'create', habitacion);
  }

  public update(id: number, habitacion: Habitacion): Observable<Habitacion> {
    return this.httpClient.put<Habitacion>(
      this.habitacionURL + `update/${id}`,
      habitacion
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.habitacionURL + `delete/${id}`);
  }

  public detail(id: number): Observable<Habitacion> {
    return this.httpClient.get<Habitacion>(this.habitacionURL + `detail/${id}`);
  }

  public estadoDisponible(id: number): Observable<any> {
    return this.httpClient.put<any>(
      this.habitacionURL + `estadoDisponible/${id}`,
      null
    );
  }

  public estadoOcupado(id: number): Observable<any> {
    return this.httpClient.put<any>(
      this.habitacionURL + `estadoOcupado/${id}`,
      null
    );
  }

  public estadoLimpieza(id: number): Observable<any> {
    return this.httpClient.put<any>(
      this.habitacionURL + `estadoLimpieza/${id}`,
      null
    );
  }

  public cantidad(): Observable<number> {
    return this.httpClient.get<number>(this.habitacionURL + 'cantidad');
  }

  public cantidadPorEst(id: number): Observable<number> {
    return this.httpClient.get<number>(this.habitacionURL + `cantxest/${id}`);
  }

  public listaPosPiso(id: number): Observable<Habitacion[]> {
    return this.httpClient.get<Habitacion[]>(
      this.habitacionURL + `listaPorPiso/${id}`
    );
  }
}
