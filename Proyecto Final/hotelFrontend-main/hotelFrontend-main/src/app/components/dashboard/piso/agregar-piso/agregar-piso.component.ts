import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Piso } from 'src/app/models/piso';
import { PisoService } from 'src/app/services/piso.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-piso',
  templateUrl: './agregar-piso.component.html',
  styleUrls: ['./agregar-piso.component.css'],
})
export class AgregarPisoComponent implements OnInit {
  descripcion: string;
  estado: boolean = true;
  constructor(private pisoServicio: PisoService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const piso = new Piso(this.descripcion, this.estado);
    this.pisoServicio.save(piso).subscribe(
      (data) => {
        //console.log(data);
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Piso registrado con exito ',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/dashboard/piso']);
      },
      (err) => {
        //console.log(err);
        swal.fire({
          position: 'center',
          icon: 'error',
          title: err.error,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }
}
