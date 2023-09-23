import { Component } from '@angular/core';
import { Iproductos } from '../iproductos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //directivas *ngif

  imageWidth:number=100;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='filtro'; //enlace de propiedad para pasar en enlace de un url que se vea en un html

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }


  product:Iproductos[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas familiar",
      "year":"febrero 3 2020",
      "Precio":120000,
      "Marca":"NISSAN",
      "Color":"Morado",
      "imagenUrl":"https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjYyOTgwL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkxMDA0MTY3NTUxLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjU0MCwiaGVpZ2h0IjozMTB9fX0=",
    },

    {
      "productoId": 2,
      "Modelo": "A4",
      "Descripcion": "4 puertas familiar",
      "year": "febrero 3 2021",
      "Precio": 200000,
      "Marca": "AUDI",
      "Color": "Blanco",
      "imagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1c0xyqtGQ7hTMCYwuZfz6VTb21CgueOgUyQ&usqp=CAU",
    },

    {
      "productoId": 3,
      "Modelo": "Rio",
      "Descripcion": "2 puertas familiar",
      "year": "Marzo 5 2022",
      "Precio": 150000,
      "Marca": "KIA",
      "Color": "Azul",
      "imagenUrl": "https://img.remediosdigitales.com/26c260/kia-rio-2021-1600-03/1366_2000.jpg",
    },

    {
      "productoId": 4,
      "Modelo": "Ibiza",
      "Descripcion": "2 puertas familiar",
      "year": "Agosto 26 2019",
      "Precio": 140000,
      "Marca": "Seat",
      "Color": "Gris",
      "imagenUrl": "https://www.indalomotor.com/wp-content/uploads/2021/01/VSSZZZKJZMR032024.jpg",
    }
  ]

}
