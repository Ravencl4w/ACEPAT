import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcopioDeRacimosComponent } from './acopio/acopio-de-racimos/acopio-de-racimos.component';
import { PartnerViewComponent } from './partners/partner-view/partner-view.component';
import { LoginComponent } from './security/login/login.component';
import { UsersManagementComponent } from './admin/users-management/users-management.component';


const routes: Routes = [
  {path: 'acopio-racimos', component: AcopioDeRacimosComponent},
  {path: 'vista-socios', component: PartnerViewComponent},
  { path: 'usersmanagement', component: UsersManagementComponent},
  {path: '', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
