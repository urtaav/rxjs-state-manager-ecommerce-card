import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothesComponent, ProductComponent, TecnologyComponent } from './components/pages';
import { ProductsCartComponent } from './components/pages/products-cart/products-cart.component';
import { HeaderComponent } from './components/shared/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ClothesComponent,
    HeaderComponent,
    ProductComponent,
    TecnologyComponent,
    ProductsCartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
