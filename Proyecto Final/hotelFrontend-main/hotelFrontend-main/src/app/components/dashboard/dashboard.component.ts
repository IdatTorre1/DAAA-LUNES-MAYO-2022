import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/services/hotel.service';
import { PersonaService } from 'src/app/services/persona.service';
import { ProductoService } from 'src/app/services/producto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  nombreUsuario: string;
  isLogged = false;
  isAdmin = false;
  hotel: any;
  nombrehotel: string;
  nombreApellido: string;

  anio: number = new Date().getFullYear();

  constructor(
    private tokenService: TokenService,
    private hotelServicio: HotelService,
    private personaServicio: PersonaService
  ) {}

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();
    this.nombreUsuario = this.tokenService.getUserName();
    //console.log(this.nombreUsuario);
    this.hotelServicio.lista().subscribe(
      (resp) => {
        this.hotel = resp;
        //console.log(this.hotel);
        this.nombrehotel = this.hotel[0].nombre_comercial;
      },
      (error) => {
        console.error(error);
      }
    );

    this.personaServicio.obtenerData(this.nombreUsuario).subscribe(
      (resp) => {
        this.nombreApellido = resp.nombre + ' ' + resp.apellido;
        // console.log(this.nombreApellido);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  onLogOut(): void {
    this.tokenService.logOut();
  }
}
