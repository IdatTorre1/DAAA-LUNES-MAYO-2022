import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estadohabitacion } from '../models/estadohabitacion';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class EstadohabitacionService {
  private estadohabitacionURL = environment.estadohabitacionURL;

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Estadohabitacion[]> {
    return this.httpClient.get<Estadohabitacion[]>(
      this.estadohabitacionURL + 'lista'
    );
  }
}
