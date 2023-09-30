import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


import { AppComponent } from './app.component';
import { ProductListComponent } from './prodct/product-list/product-list.component';
import { ProductoFilterPipe } from './prodct/producto-filter.pipe';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { CalculosComponent } from './formularios/calculos/calculos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SumaComponent } from './formularios/suma/suma.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductoFilterPipe,
    OperasBasComponent,
    CalculosComponent,
    SumaComponent //que pueda ser usado en todos los demas archivos
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//archivo generico para todos los archivos de los componentes 
