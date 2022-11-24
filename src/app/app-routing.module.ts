import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeteilProductComponent } from './core/deteil-product/deteil-product.component';
import { FormProductComponent } from './core/form-product/form-product.component';
import { AddProductsComponent } from './core/productsss/add-products/add-products.component';
import { ShowProductsComponent } from './core/productsss/show-products/show-products.component';
import { LoginComponent } from './core/user/login/login.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './shared/home/home.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },  // full =lezem path maktouba login
  { path: 'login', component: LoginComponent },
  // { path: 'addproduct', component: AddProductsComponent },
  { path: 'listeproduct', component: ProductsComponent },
  { path: 'detail/:id', component: DeteilProductComponent },
  { path: 'showproduct', component: ShowProductsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'addProduct', component: FormProductComponent },
  { path: '**', component: NotfoundComponent }


]; // on va declarer la liste des routes

@NgModule({
  imports: [RouterModule.forRoot(routes)], // parcour des routes pour savoir si route existante donc ijb composant sinon erreur
  exports: [RouterModule] // exportation(twali public) dans app-module.ts bech inajem yaref/ichouf el router el module (ou les autres classes ichouf)
})
export class AppRoutingModule { }
