import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { HotelComponent } from './hotel/hotel.component';
import { PersonaComponent } from './persona/persona.component';
import { MenuComponent } from './menu/menu.component';
import { AgregarCategoriaComponent } from './categoria/agregar-categoria/agregar-categoria.component';
import { EditarCategoriaComponent } from './categoria/editar-categoria/editar-categoria.component';
import { PisoComponent } from './piso/piso.component';
import { AgregarPisoComponent } from './piso/agregar-piso/agregar-piso.component';
import { EditarPisoComponent } from './piso/editar-piso/editar-piso.component';
import { HabitacionComponent } from './habitacion/habitacion.component';
import { AgregarHabitacionComponent } from './habitacion/agregar-habitacion/agregar-habitacion.component';
import { EditarHabitacionComponent } from './habitacion/editar-habitacion/editar-habitacion.component';
import { ProductoComponent } from './producto/producto.component';
import { AgregarProductoComponent } from './producto/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
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

@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    CategoriaComponent,
    HotelComponent,
    PersonaComponent,
    MenuComponent,
    AgregarCategoriaComponent,
    EditarCategoriaComponent,
    PisoComponent,
    AgregarPisoComponent,
    EditarPisoComponent,
    HabitacionComponent,
    AgregarHabitacionComponent,
    EditarHabitacionComponent,
    ProductoComponent,
    AgregarProductoComponent,
    EditarProductoComponent,
    ClienteComponent,
    AgregarClienteComponent,
    EditarClienteComponent,
    ProductosReporteComponent,
    AgregarPersonaComponent,
    EditarPersonaComponent,
    RecepcionReporteComponent,
    RecepcionComponent,
    SalidaComponent,
    VenderComponent,
    AgregarRecepcionComponent,
    DetalleRecepcionComponent,
    PerfilComponent,
    SalidaFinalizarComponent,
    AgregarVentaComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
