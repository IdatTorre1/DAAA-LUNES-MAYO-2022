import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css'],
})
export class EditarCategoriaComponent implements OnInit {
  id: number;
  categoria: Categoria = null;
  constructor(
    private categoriaServicio: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.categoriaServicio.detail(this.id).subscribe(
      (data) => {
        this.categoria = data;
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
    this.categoriaServicio.update(this.id, this.categoria).subscribe(
      (data) => {
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Categoria actualizada con exito ',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/dashboard/categoria']);
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
