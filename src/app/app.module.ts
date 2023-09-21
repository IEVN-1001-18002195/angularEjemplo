import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './prodct/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent //que pueda ser usado en todos los demas archivos
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//archivo generico para todos los archivos de los componentes 
