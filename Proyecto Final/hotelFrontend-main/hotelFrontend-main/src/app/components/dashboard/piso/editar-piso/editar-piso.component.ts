import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Piso } from 'src/app/models/piso';
import { PisoService } from 'src/app/services/piso.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-piso',
  templateUrl: './editar-piso.component.html',
  styleUrls: ['./editar-piso.component.css'],
})
export class EditarPisoComponent implements OnInit {
  id: number;
  piso: Piso = null;
  constructor(
    private pisoServicio: PisoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.pisoServicio.detail(this.id).subscribe(
      (data) => {
        this.piso = data;
      },
      (err) => {
        swal.fire({
          position: 'center',
          icon: 'error',
          title: err.error,
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(err);
      }
    );
  }
  onUpdate(): void {
    //const id = this.activatedRoute.snapshot.params.id;
    this.pisoServicio.update(this.id, this.piso).subscribe(
      (data) => {
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Piso actualizado con exito ',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/dashboard/piso']);
      },
      (err) => {
        console.log(err);
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
