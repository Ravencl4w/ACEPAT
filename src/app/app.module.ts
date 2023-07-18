import { LOCALE_ID, NgModule } from '@angular/core';
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
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
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
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { RestorePartnerDialogComponent } from './shared/restore-partner-dialog/restore-partner-dialog.component';
import { SocioAlertDialogComponent } from './shared/socio-alert-dialog/socio-alert-dialog.component';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'input',
  },
  display: {
    dateInput: { day: '2-digit', month: '2-digit', year: 'numeric' },
    monthYearLabel: 'MMM yyyy',
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: 'MMMM yyyy',
  },
};

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
    AsignarPrecioVentaComponent,
    RestorePartnerDialogComponent,
    SocioAlertDialogComponent,
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
    DatePipe,
    MatSlideToggleModule

  ],
  providers: [
    DatePipe,
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: MAT_DATE_LOCALE, useValue: 'es' },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { constructor() {
  registerLocaleData(localeEs);
} }
