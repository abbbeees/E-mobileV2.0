import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HammerModule } from '@angular/platform-browser';
import { IgxCarouselModule } from 'igniteui-angular';
import { NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FootbarComponent } from './footbar/footbar.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProdFilterComponent } from './products/prodfilter/prodfilter.component';
import { DesignCaseComponent } from './design-case/design-case.component';
import { trybbcckComponent } from './trybbcck/trybbcck.component';
import { LoginComponent } from './login/login.component';
import { SoldingFormComponent } from './solding-form/solding-form.component';
import { PanierComponent } from './panier/panier.component';
import { ProddetComponent } from './products/proddet/proddet.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AllprodComponent } from './admin/allprod/allprod.component';
import { MyhomeComponent } from './admin/myhome/myhome.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { SearchPipe } from './admin/allprod/search.pipe';
import { AddprodComponent } from './admin/allprod/addprod/addprod.component';
import { CasepopupComponent } from './trybbcck/casepopup/casepopup.component';
import { UpdateprodComponent } from './admin/allprod/updateprod/updateprod.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NavbarComponent,
    FootbarComponent,
    ProductsComponent,
    ProdFilterComponent,
    DesignCaseComponent,
    trybbcckComponent,
    LoginComponent,
    SoldingFormComponent,
    PanierComponent,
    ProddetComponent,
    AboutusComponent,
    AdminComponent,
    SidebarComponent,
    DashboardComponent,
    AllprodComponent,
    MyhomeComponent,
    SearchPipe,
    AddprodComponent,
    CasepopupComponent,
    UpdateprodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    IgxCarouselModule,
    HammerModule,
    CommonModule,
    NgForOf,
    RouterModule,
    MatNativeDateModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,ProductsComponent]
})
export class AppModule {
}
