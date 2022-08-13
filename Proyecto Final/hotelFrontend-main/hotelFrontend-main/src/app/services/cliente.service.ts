import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private clienteURL = environment.clienteURL

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.clienteURL + 'lista');
  }

  public cantidad(): Observable<number> {
    return this.httpClient.get<number>(this.clienteURL + 'cantidad');
  }

  public save(cliente: Cliente): Observable<any> {
    return this.httpClient.post<any>(this.clienteURL + 'create', cliente);
  }

  public update(id: number, cliente: Cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(
      this.clienteURL + `update/${id}`,
      cliente
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.clienteURL + `delete/${id}`);
  }
  public detail(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.clienteURL + `detail/${id}`);
  }
}
