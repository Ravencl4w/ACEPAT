import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreacionUsuariosComponent } from './acopio/creacion-usuarios/creacion-usuarios.component';
import { AcopioDeRacimosComponent } from './acopio/acopio-de-racimos/acopio-de-racimos.component';
import { LoginComponent } from './seguridad/login/login.component';
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
import { FundoDialogComponent } from './shared/fundo-dialog/fundo-dialog.component';
import { ParientesDialogComponent } from './shared/parientes-dialog/parientes-dialog.component';
import { BankAccDialogComponent } from './shared/bank-acc-dialog/bank-acc-dialog.component';
import { PartnerStatusComponent } from './shared/partner-status/partner-status.component';
import { UbigeoDialogComponent } from './shared/ubigeo-dialog/ubigeo-dialog.component';
import {MatRadioModule} from '@angular/material/radio';
import { PartnerEditionDialogComponent } from './shared/partner-edition-dialog/partner-edition-dialog.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DeleteDialogComponent } from './shared/delete-dialog/delete-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    CreacionUsuariosComponent,
    AcopioDeRacimosComponent,
    LoginComponent,
    UsersManagementComponent,
    UserCreationDialogComponent,
    PartnerCreationDialogComponent,
    AcopioDialogComponent,
    SidebarComponent,
    FundoDialogComponent,
    ParientesDialogComponent,
    BankAccDialogComponent,
    PartnerStatusComponent,
    UbigeoDialogComponent,
    PartnerEditionDialogComponent,
    DeleteDialogComponent,

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
    MatTabsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
