import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/services/hotel.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
})
export class HotelComponent implements OnInit {
  hotel: Hotel;
  prueba: false;
  formulario: boolean = false;

  form = new FormGroup({
    first: new FormControl(
      { value: 'Nancy', disabled: true },
      Validators.required
    ),
    last: new FormControl('Drew', Validators.required),
  });

  constructor(private hotelServicio: HotelService) {
    this.mostrarDatos();
    //console.log(this.hotel);
  }

  mostrarDatos() {
    return this.hotelServicio.detail(1).subscribe(
      (resp) => {
        this.hotel = resp;
        //console.log(this.hotel);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  modificar(id: number) {
    //console.log(id);
    this.hotelServicio.update(id, this.hotel).subscribe(
      (dato) => {
        // swal.fire({
        //   position: 'center',
        //   icon: 'success',
        //   title: 'Hotel Actualizado con exito',
        //   showConfirmButton: false,
        //   timer: 1500,
        // });
        // this.mostrarDatos();
        window.location.reload();
      },
      (error) => console.error(error)
    );
  }

  ngOnInit(): void {}
}
