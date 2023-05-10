import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcopioDeRacimosComponent } from './acopio/acopio-de-racimos/acopio-de-racimos.component';
import { CreacionUsuariosComponent } from './acopio/creacion-usuarios/creacion-usuarios.component';
import { LoginComponent } from './seguridad/login/login.component'; 

const routes: Routes = [
  {path: 'acopio-racimos', component: AcopioDeRacimosComponent},
  {path: 'creacion-usuarios', component: CreacionUsuariosComponent},
  {path: '', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
