import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { MostrarProductosComponent } from './pages/mostrar-productos/mostrar-productos.component';
import { CrearProductosComponent } from './pages/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './pages/editar-productos/editar-productos.component';

const routes: Routes = [
  {path:'inicio', component:DashboardComponent},
  {path:'login', component:LoginComponent},
  {path:'productos', component:ProductosComponent},
  { path: 'mostrar', component: MostrarProductosComponent },
  { path: 'crear', component: CrearProductosComponent},
  { path: 'editar/:id', component: EditarProductosComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
