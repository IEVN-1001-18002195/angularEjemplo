import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //
  templateUrl: './app.component.html', //establecer rutas del html de donde se ejecuta
  /*template:`
  <div class="container">
 </div>
 <h1>
  {{title}}
  <app-product-list></app-product-list>
</h1>`, */
  styleUrls: ['./app.component.css'] //estilos
})
export class AppComponent { //poder usar la clases o función en otros archivos
  title = 'angularEjemplo2';


/*
  apellido = 'Garcia';

  duplicarNumero(valor:number):number{
    return valor*2; 
   }

   pelicula={
    titulo:'Spiderman',
    fechaLanzamiento: new Date(),
    precio: 75.56
   }
*/



}
