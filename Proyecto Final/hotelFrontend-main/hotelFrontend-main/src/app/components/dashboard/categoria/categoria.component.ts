import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { TokenService } from 'src/app/services/token.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent implements OnInit {
  categorias: Categoria[] = [];
  isAdmin = false;
  public page: number;

  constructor(
    private categoriaServicio: CategoriaService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarCategoria();
    this.isAdmin = this.tokenService.isAdmin();
  }

  actualizarCategoria(id: number) {
    //console.log(id);
    this.router.navigate(['/dashboard/editar-categoria', { id }]);
  }

  /*Listas*/
  cargarCategoria(): void {
    this.categoriaServicio.lista().subscribe(
      (data) => {
        this.categorias = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  eliminarCategoria(id: number) {
    swal
      .fire({
        title: '¿Estas seguro?',
        text: 'Confirma si deseas eliminar la Categoria',
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
          this.categoriaServicio.delete(id).subscribe((dato) => {
            //console.log(dato);
            this.cargarCategoria();
            swal.fire(
              'Categoria eliminada',
              'La Categoria ha sido eliminado con exito',
              'success'
            );
          });
        }
      });
  }
  // this.categoriaServicio.delete(id).subscribe((dato) => {
  //   console.log(dato);
  //   this.cargarCategoria();
  // });
  //}
}
