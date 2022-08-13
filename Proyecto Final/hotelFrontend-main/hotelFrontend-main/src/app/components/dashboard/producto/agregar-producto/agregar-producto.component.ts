import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css'],
})
export class AgregarProductoComponent implements OnInit {
  nombre: string;
  detalle: string;
  precio: number;
  cantidad: number;
  estado: boolean = true;

  constructor(
    private productoServicio: ProductoService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  guardarProducto() {
    const producto = new Producto(
      this.nombre,
      this.detalle,
      this.precio,
      this.cantidad,
      this.estado
    );
    this.productoServicio.save(producto).subscribe(
      (dato) => {
        //console.log(dato);
        this.irListaProducto();
      },
      (error) => console.error(error)
    );
  }

  irListaProducto() {
    this.router.navigate(['/dashboard/producto']);
  }

  onSubmit() {
    this.guardarProducto();
  }
}
