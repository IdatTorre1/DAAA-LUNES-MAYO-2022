import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Piso } from '../models/piso';

@Injectable({
  providedIn: 'root',
})
export class PisoService {
  private pisoURL = environment.pisoURL;

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Piso[]> {
    return this.httpClient.get<Piso[]>(this.pisoURL + 'lista');
  }

  public save(piso: Piso): Observable<any> {
    return this.httpClient.post<any>(this.pisoURL + 'create', piso);
  }

  public update(id: number, piso: Piso): Observable<Piso> {
    return this.httpClient.put<Piso>(this.pisoURL + `update/${id}`, piso);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.pisoURL + `delete/${id}`);
  }
  public detail(id: number): Observable<Piso> {
    return this.httpClient.get<Piso>(this.pisoURL + `detail/${id}`);
  }
}
