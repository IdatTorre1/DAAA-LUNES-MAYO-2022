import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private hotelURL = environment.hotelURL;

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>(this.hotelURL + 'lista');
  }

  public save(hotel: Hotel): Observable<any> {
    return this.httpClient.post<any>(this.hotelURL + 'create', hotel);
  }

  public update(id: number, hotel: Hotel): Observable<Hotel> {
    return this.httpClient.put<Hotel>(this.hotelURL + `update/${id}`, hotel);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.hotelURL + `delete/${id}`);
  }
  public detail(id: number): Observable<Hotel> {
    return this.httpClient.get<Hotel>(this.hotelURL + `detail/${id}`);
  }
}
