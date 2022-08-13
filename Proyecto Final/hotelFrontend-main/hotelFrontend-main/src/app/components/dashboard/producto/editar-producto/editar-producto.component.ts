import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css'],
})
export class EditarProductoComponent implements OnInit {
  producto: Producto = null;
  id: number;
  // nombre: string;
  // detalle: string;
  // precio: number;
  // cantidad: number;
  // estado: boolean = true;
  constructor(
    private productoServicio: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productoServicio.detail(this.id).subscribe(
      (data) => {
        this.producto = data;
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
        //this.router.navigate(['/dashboard/categoria']);
      }
    );
  }

  onUpdate(): void {
    //const id = this.activatedRoute.snapshot.params.id;
    this.productoServicio.update(this.id, this.producto).subscribe(
      (data) => {
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Producto actualizado con exito ',
          showConfirmButton: false,
          timer: 1500,
        });

        this.router.navigate(['/dashboard/producto']);
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
