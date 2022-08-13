import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { TokenService } from 'src/app/services/token.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[] = [];
  isAdmin = false;
  public page: number;
  constructor(
    private clienteServicio: ClienteService,
    private tokenService: TokenService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.cargarClicnte();
    this.isAdmin = this.tokenService.isAdmin();
  }

  actualizarCliente(id: number) {
    console.log(id);
    this.router.navigate(['/dashboard/editar-cliente', { id }]);
  }

  cargarClicnte(): void {
    this.clienteServicio.lista().subscribe(
      (data) => {
        this.clientes = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  eliminarCliente(id: number) {
    swal
      .fire({
        title: '¿Estas seguro?',
        text: 'Confirma si deseas eliminar el cliente',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si , elimínalo',
        cancelButtonText: 'No, cancelar',
        buttonsStyling: true,
      })
      .then((result) => {
        if (result.value) {
          this.clienteServicio.delete(id).subscribe((dato) => {
            //console.log(dato);
            this.cargarClicnte();
            swal.fire(
              'Categoria eliminada',
              'El cliente ha sido eliminado con exito',
              'success'
            );
          });
        }
      });
  }
}
