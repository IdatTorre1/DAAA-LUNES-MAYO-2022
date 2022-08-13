import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css'],
})
export class AgregarClienteComponent implements OnInit {
  nombre: string;
  apellido: string;
  tipodocumento: string = 'DNI';
  numdocumento: string;
  telefono: string;
  correo: string;

  constructor(
    private clienteServicio: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const cliente = new Cliente(
      this.nombre,
      this.apellido,
      this.tipodocumento,
      this.numdocumento,
      this.telefono,
      this.correo
    );
    this.clienteServicio.save(cliente).subscribe(
      (data) => {
        //console.log(categoria);
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Cliente registrado con exito',
          showConfirmButton: false,
          timer: 1500,
        });

        this.router.navigate(['/dashboard/cliente']);
      },
      (err) => {
        //console.log(err);
        swal.fire({
          position: 'center',
          icon: 'success',
          title: err,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }
}
