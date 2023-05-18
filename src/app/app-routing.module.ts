import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcopioDeRacimosComponent } from './acopio/acopio-de-racimos/acopio-de-racimos.component';
import { CreacionUsuariosComponent } from './acopio/creacion-usuarios/creacion-usuarios.component';
import { LoginComponent } from './seguridad/login/login.component'; 
import { UsersManagementComponent } from './admin/users-management/users-management.component';
import { ReportAcopioTransporteComponent } from './reports/report-acopio-transporte/report-acopio-transporte.component';

const routes: Routes = [
  {path: 'acopio-racimos', component: AcopioDeRacimosComponent},
  {path: 'creacion-usuarios', component: CreacionUsuariosComponent},
  { path: 'usersmanagement', component: UsersManagementComponent},
  {path: 'reporte-acopio-transporte', component: ReportAcopioTransporteComponent},
  {path: '', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
