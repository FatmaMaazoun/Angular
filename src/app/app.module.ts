// module racine
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LogoComponent } from './shared/logo/logo.component';
import { ShowProductsComponent } from './core/productsss/show-products/show-products.component';
import { AddProductsComponent } from './core/productsss/add-products/add-products.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './core/user/login/login.component';
import { DeteilProductComponent } from './core/deteil-product/deteil-product.component';
import { HomeComponent } from './shared/home/home.component';
import { FormProductComponent } from './core/form-product/form-product.component';

@NgModule({
  declarations: [
    AppComponent,  //composant racine
    TestComponent,
    ProductsComponent,
    NavComponent,
    FooterComponent,
    LogoComponent,
    ShowProductsComponent,
    AddProductsComponent,
    NotfoundComponent,
    LoginComponent,
    DeteilProductComponent,
    HomeComponent,
    FormProductComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
