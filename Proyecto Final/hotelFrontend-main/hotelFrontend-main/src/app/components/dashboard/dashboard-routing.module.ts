import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AgregarCategoriaComponent } from './agregar-categoria/agregar-categoria.component';
import { CategoriaComponent } from './categoria/categoria.component';
// import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
import { DashboardComponent } from './dashboard.component';
import { HotelComponent } from './hotel/hotel.component';
import { InicioComponent } from './inicio/inicio.component';
//import { PersonaComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';
import { ProdGuardService } from 'src/app/guards/prod-guard.service';
import { AgregarCategoriaComponent } from './categoria/agregar-categoria/agregar-categoria.component';
import { EditarCategoriaComponent } from './categoria/editar-categoria/editar-categoria.component';
import { HabitacionComponent } from './habitacion/habitacion.component';
import { AgregarHabitacionComponent } from './habitacion/agregar-habitacion/agregar-habitacion.component';
import { EditarHabitacionComponent } from './habitacion/editar-habitacion/editar-habitacion.component';
import { PisoComponent } from './piso/piso.component';
import { AgregarPisoComponent } from './piso/agregar-piso/agregar-piso.component';
import { EditarPisoComponent } from './piso/editar-piso/editar-piso.component';
import { ProductoComponent } from './producto/producto.component';
import { AgregarProductoComponent } from './producto/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { PersonaComponent } from './persona/persona.component';
import { ClienteComponent } from './cliente/cliente.component';
import { AgregarClienteComponent } from './cliente/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { ProductosReporteComponent } from './productos-reporte/productos-reporte.component';
import { AgregarPersonaComponent } from './persona/agregar-persona/agregar-persona.component';
import { EditarPersonaComponent } from './persona/editar-persona/editar-persona.component';
import { RecepcionReporteComponent } from './recepcion-reporte/recepcion-reporte.component';
import { RecepcionComponent } from './recepcion/recepcion.component';
import { SalidaComponent } from './salida/salida.component';
import { VenderComponent } from './vender/vender.component';
import { AgregarRecepcionComponent } from './recepcion/agregar-recepcion/agregar-recepcion.component';
import { DetalleRecepcionComponent } from './recepcion/detalle-recepcion/detalle-recepcion.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SalidaFinalizarComponent } from './salida/salida-finalizar/salida-finalizar.component';
import { AgregarVentaComponent } from './vender/agregar-venta/agregar-venta.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: InicioComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin', 'user'] },
      },
      {
        path: 'hotel',
        component: HotelComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin', 'user'] },
      },
      {
        path: 'categoria',
        component: CategoriaComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin'] },
      },
      {
        path: 'agregar-categoria',
        component: AgregarCategoriaComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin'] },
      },
      {
        path: 'editar-categoria',
        component: EditarCategoriaComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin'] },
      },
      {
        path: 'habitacion',
        component: HabitacionComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin'] },
      },
      {
        path: 'agregar-habitacion',
        component: AgregarHabitacionComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin'] },
      },
      {
        path: 'editar-habitacion',
        component: EditarHabitacionComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin'] },
      },
      {
        path: 'piso',
        component: PisoComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin'] },
      },
      {
        path: 'agregar-piso',
        component: AgregarPisoComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin'] },
      },
      {
        path: 'editar-piso',
        component: EditarPisoComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin'] },
      },
      {
        path: 'producto-reporte',
        component: ProductosReporteComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin', 'user'] },
      },
      {
        path: 'producto',
        component: ProductoComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin'] },
      },
      {
        path: 'agregar-producto',
        component: AgregarProductoComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin'] },
      },
      {
        path: 'editar-producto',
        component: EditarProductoComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin'] },
      },
      {
        path: 'persona',
        component: PersonaComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin'] },
      },
      {
        path: 'agregar-persona',
        component: AgregarPersonaComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin'] },
      },
      {
        path: 'editar-persona',
        component: EditarPersonaComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin'] },
      },
      {
        path: 'cliente',
        component: ClienteComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin', 'user'] },
      },
      {
        path: 'agregar-cliente',
        component: AgregarClienteComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin', 'user'] },
      },
      {
        path: 'editar-cliente',
        component: EditarClienteComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin', 'user'] },
      },
      {
        path: 'recepcion',
        component: RecepcionComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin', 'user'] },
      },
      {
        path: 'agregar-recepcion',
        component: AgregarRecepcionComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin', 'user'] },
      },
      {
        path: 'detalle-recepcion',
        component: DetalleRecepcionComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin', 'user'] },
      },
      {
        path: 'recepcion-reporte',
        component: RecepcionReporteComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin', 'user'] },
      },
      {
        path: 'salida',
        component: SalidaComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin', 'user'] },
      },
      {
        path: 'salida-finalizar',
        component: SalidaFinalizarComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin', 'user'] },
      },
      {
        path: 'vender',
        component: VenderComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin', 'user'] },
      },
      {
        path: 'agregar-venta',
        component: AgregarVentaComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin', 'user'] },
      },
      {
        path: 'perfil',
        component: PerfilComponent,
        canActivate: [ProdGuardService],
        data: { expectedRol: ['admin', 'user'] },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule],
  exports: [RouterModule, FormsModule],
})
export class DashboardRoutingModule {}
