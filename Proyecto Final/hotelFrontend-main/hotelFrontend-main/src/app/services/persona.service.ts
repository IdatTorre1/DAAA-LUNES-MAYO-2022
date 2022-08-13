import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/persona';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  authURL = environment.authURL;

  constructor(private httpCliente: HttpClient) {}

  public lista(): Observable<any[]> {
    return this.httpCliente.get<any[]>(this.authURL + 'lista');
  }
  public nuevo(nuevoUsuario: any): Observable<any> {
    return this.httpCliente.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public update(id: number, usuario: any): Observable<any> {
    return this.httpCliente.put<any>(this.authURL + `update/${id}`, usuario);
  }

  public detail(id: number): Observable<any> {
    return this.httpCliente.get<any>(this.authURL + `detail/${id}`);
  }

  public delete(id: number): Observable<any> {
    return this.httpCliente.delete<any>(this.authURL + `delete/${id}`);
  }

  public cantidad(): Observable<number> {
    return this.httpCliente.get<number>(this.authURL + 'cantidad');
  }

  public obtenerData(correo: string): Observable<any> {
    return this.httpCliente.get<any>(this.authURL + `detailname/${correo}`);
  }
}
