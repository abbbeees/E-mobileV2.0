import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepComponent } from './homep/homep.component';
import { FootbarComponent } from './footbar/footbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { DesignCaseComponent } from './design-case/design-case.component';
import { trybbcckComponent } from './trybbcck/trybbcck.component';
import { LoginComponent } from './login/login.component';
import { SoldingFormComponent } from './solding-form/solding-form.component';
import { PanierComponent } from './panier/panier.component';
import { ProddetComponent } from './products/proddet/proddet.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { AllprodComponent } from './admin/allprod/allprod.component';
import { MyhomeComponent } from './admin/myhome/myhome.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddprodComponent } from './admin/allprod/addprod/addprod.component';
import { UpdateprodComponent } from './admin/allprod/updateprod/updateprod.component';


const routes: Routes = [
  { path: '', redirectTo: 'homep', pathMatch: 'full' },
  { path: 'homep', component: HomepComponent},
  { path: 'navbar', component: NavbarComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'footer', component: FootbarComponent},
  { path: 'home', component: HomeComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'designYourCase', component: DesignCaseComponent},
  { path: 'tryybck', component: trybbcckComponent},
  { path: 'login', component: LoginComponent},
  { path: 'solding', component: SoldingFormComponent},
  { path: 'panier', component:PanierComponent},
  { path: 'proddet', component:ProddetComponent},
  { path: 'aboutus', component:AboutusComponent},
  { path: 'admin', component:AdminComponent},
  { path: 'sidebar', component:SidebarComponent},
  { path: 'allprod', component:AllprodComponent},
  { path: 'Mhome', component:MyhomeComponent},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'addprod', component:AddprodComponent},
  { path: 'updateprod', component:UpdateprodComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
