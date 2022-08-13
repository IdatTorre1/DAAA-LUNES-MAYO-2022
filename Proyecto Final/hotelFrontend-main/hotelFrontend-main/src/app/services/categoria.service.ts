import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/categoria';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  private categoriaURL = environment.categoriaURL;

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(this.categoriaURL + 'lista');
  }

  public save(categoria: Categoria): Observable<any> {
    return this.httpClient.post<any>(this.categoriaURL + 'create', categoria);
  }

  public update(id: number, categoria: Categoria): Observable<Categoria> {
    return this.httpClient.put<Categoria>(
      this.categoriaURL + `update/${id}`,
      categoria
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.categoriaURL + `delete/${id}`);
  }
  public detail(id: number): Observable<Categoria> {
    return this.httpClient.get<Categoria>(this.categoriaURL + `detail/${id}`);
  }
}

// public detailName(nombre: string): Observable<Categoria> {
//   return this.httpClient.get<Categoria>(
//     this.categoriaURL + `detailname/${nombre}`
//   );
// }
