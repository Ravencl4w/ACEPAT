import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcopioDeRacimosComponent } from './acopio/acopio-de-racimos/acopio-de-racimos.component';
import { LoginComponent } from './security/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersManagementComponent } from './admin/users-management/users-management.component';
import { UserCreationDialogComponent } from './shared/user-creation-dialog/user-creation-dialog.component';
import { PartnerCreationDialogComponent } from './shared/partner-creation-dialog/partner-creation-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import { AcopioDialogComponent } from './shared/acopio-dialog/acopio-dialog.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { UserModifyDialogComponent } from './shared/user-modify-dialog/user-modify-dialog.component';
import { PartnerEditionDialogComponent } from './shared/partner-edition-dialog/partner-edition-dialog.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DeleteDialogComponent } from './shared/delete-dialog/delete-dialog.component';
import { PartnerViewComponent } from './partners/partner-view/partner-view.component';
import { ReportAcopioTransporteComponent } from './reports/report-acopio-transporte/report-acopio-transporte.component';
import { ComprasAcopioComponent } from './reports/compras-acopio/compras-acopio.component';
import { PartnerDetailEditionDialogComponent } from './shared/partner-detail-edition-dialog/partner-detail-edition-dialog.component';
import { DeletePartnerDetailDialogComponent } from './shared/delete-partner-detail-dialog/delete-partner-detail-dialog.component';
import { FormsModule } from '@angular/forms';
import { AcopioListComponent } from './acopio/acopio-list/acopio-list.component';
import { AcopioCreationDialogComponent } from './shared/acopio-creation-dialog/acopio-creation-dialog.component';
import { CentroAcopioComponent } from './comercializacion/centro-acopio/centro-acopio.component';
import { CentroAcopioDialogComponent } from './shared/centro-acopio-dialog/centro-acopio-dialog.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AportMovementComponent } from './credit/aport-movement/aport-movement.component';
import { CollectContributionsComponent } from './shared/collect-contributions/collect-contributions.component';
import { ReportingMovementComponent } from './shared/reporting-movement/reporting-movement.component';
import { DebtListComponent } from './credit/debt-list/debt-list.component';
import { CreateDebtDialogComponent } from './shared/create-debt-dialog/create-debt-dialog.component';
import { DatePipe } from '@angular/common';
import { ProduccionComponent } from './comercializacion/produccion/produccion.component';
import { AsignacionCostosDialogComponent } from './shared/asignacion-costos-dialog/asignacion-costos-dialog.component';
import { AsignarPrecioVentaComponent } from './shared/asignar-precio-venta/asignar-precio-venta.component';



@NgModule({
  declarations: [
    AppComponent,
    AcopioDeRacimosComponent,
    LoginComponent,
    UsersManagementComponent,
    UserCreationDialogComponent,
    PartnerCreationDialogComponent,
    AcopioDialogComponent,
    SidebarComponent,
    UserModifyDialogComponent,
    PartnerEditionDialogComponent,
    DeleteDialogComponent,
    PartnerViewComponent,
    ReportAcopioTransporteComponent,
    ComprasAcopioComponent,
    PartnerDetailEditionDialogComponent,
    DeletePartnerDetailDialogComponent,
    AcopioListComponent,
    AcopioCreationDialogComponent,
    AportMovementComponent,
    CollectContributionsComponent,
    ReportingMovementComponent,
    CentroAcopioComponent,
    CentroAcopioDialogComponent,
    DebtListComponent,
    CreateDebtDialogComponent,
    ProduccionComponent,
    AsignacionCostosDialogComponent,
    AsignarPrecioVentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSortModule,
    MatListModule,
    MatExpansionModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatTabsModule,
    FormsModule,
    MatAutocompleteModule,
    DatePipe

  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
