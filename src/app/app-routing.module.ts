import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcopioDeRacimosComponent } from './acopio/acopio-de-racimos/acopio-de-racimos.component';
import { PartnerViewComponent } from './partners/partner-view/partner-view.component';
import { LoginComponent } from './security/login/login.component';
import { UsersManagementComponent } from './admin/users-management/users-management.component';
import { ReportAcopioTransporteComponent } from './reports/report-acopio-transporte/report-acopio-transporte.component';
import { ComprasAcopioComponent } from './reports/compras-acopio/compras-acopio.component';
import { AcopioListComponent } from './acopio/acopio-list/acopio-list.component';
import { AportMovementComponent } from './credit/aport-movement/aport-movement.component';
import { CentroAcopioComponent } from './comercializacion/centro-acopio/centro-acopio.component';
import { DebtListComponent } from './credit/debt-list/debt-list.component';

const routes: Routes = [
  {path: 'acopio-racimos', component: AcopioDeRacimosComponent},
  {path: 'vista-socios', component: PartnerViewComponent},
  {path: 'usersmanagement', component: UsersManagementComponent},
  {path: 'reporte-acopio-transporte', component: ReportAcopioTransporteComponent},
  {path: 'compras-acopio', component: ComprasAcopioComponent},
  {path: 'aport-movement', component: AportMovementComponent },
  {path: 'acopio-list', component: AcopioListComponent },
  {path: 'centro-acopio', component: CentroAcopioComponent},
  {path: 'lista-deudas', component: DebtListComponent},
  {path: '', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
