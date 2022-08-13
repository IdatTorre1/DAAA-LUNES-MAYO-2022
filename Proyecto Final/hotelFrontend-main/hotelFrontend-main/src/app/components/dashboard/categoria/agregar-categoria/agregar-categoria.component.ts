import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-categoria',
  templateUrl: './agregar-categoria.component.html',
  styleUrls: ['./agregar-categoria.component.css'],
})
export class AgregarCategoriaComponent implements OnInit {
  //categoria: Categoria = new Categoria();
  descripcion: string;
  estado: boolean = true;
  constructor(
    private categoriaServicio: CategoriaService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const categoria = new Categoria(this.descripcion, this.estado);
    this.categoriaServicio.save(categoria).subscribe(
      (data) => {
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Categoria registrada con exito',
          showConfirmButton: false,
          timer: 1500,
        });

        this.router.navigate(['/dashboard/categoria']);
      },
      (err) => {
        //console.log(err);
        swal.fire({
          position: 'center',
          icon: 'error',
          title: err,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }
}
