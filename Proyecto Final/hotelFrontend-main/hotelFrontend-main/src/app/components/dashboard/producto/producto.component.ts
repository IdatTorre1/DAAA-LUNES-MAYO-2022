import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { TokenService } from 'src/app/services/token.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = [];
  isAdmin = false;
  public page: number;
  constructor(
    private productoServicio: ProductoService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarProducto();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarProducto(): void {
    this.productoServicio.lista().subscribe(
      (data) => {
        this.productos = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  editarProducto(id: number) {
    console.log(id);
    this.router.navigate(['/dashboard/editar-producto', { id }]);
  }

  eliminarProducto(id: number) {
    swal
      .fire({
        title: '¿Estas seguro?',
        text: 'Confirma si deseas eliminar el Producto',
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
          this.productoServicio.delete(id).subscribe((dato) => {
            //console.log(dato);
            this.cargarProducto();
            swal.fire(
              'Producto eliminado',
              'El Producto ha sido eliminado con exito',
              'success'
            );
          });
        }
      });
  }
}
