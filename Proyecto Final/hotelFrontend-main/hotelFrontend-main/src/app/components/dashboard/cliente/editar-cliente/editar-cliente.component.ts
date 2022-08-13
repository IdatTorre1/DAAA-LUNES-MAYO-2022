import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css'],
})
export class EditarClienteComponent implements OnInit {
  id: number;
  cliente: Cliente = null;
  constructor(
    private clienteServicio: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clienteServicio.detail(this.id).subscribe(
      (data) => {
        this.cliente = data;
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
    this.clienteServicio.update(this.id, this.cliente).subscribe(
      (data) => {
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Cliente actualizado con exito ',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/dashboard/cliente']);
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
