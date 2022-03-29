import { Injectable } from '@angular/core';
import { Serum } from 'src/app/models/serum';

@Injectable({
  providedIn: 'root'
})
export class SerumService {

  constructor() { }

  getSerumById(id:number):Serum{
    return this.getAll().find(lip=>lip.id==id)!;
  }

  getAll():Serum[] {
    return [
      // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN85T57iAsZKRx6vSSJHg_ZjYAQWu_26VtKQ&usqp=CAU',
      // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN85T57iAsZKRx6vSSJHg_ZjYAQWu_26VtKQ&usqp=CAU',
      // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN85T57iAsZKRx6vSSJHg_ZjYAQWu_26VtKQ&usqp=CAU',
      // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN85T57iAsZKRx6vSSJHg_ZjYAQWu_26VtKQ&usqp=CAU',
      // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN85T57iAsZKRx6vSSJHg_ZjYAQWu_26VtKQ&usqp=CAU',
      // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN85T57iAsZKRx6vSSJHg_ZjYAQWu_26VtKQ&usqp=CAU',
      // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN85T57iAsZKRx6vSSJHg_ZjYAQWu_26VtKQ&usqp=CAU',
      // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN85T57iAsZKRx6vSSJHg_ZjYAQWu_26VtKQ&usqp=CAU',
      // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN85T57iAsZKRx6vSSJHg_ZjYAQWu_26VtKQ&usqp=CAU',
      // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN85T57iAsZKRx6vSSJHg_ZjYAQWu_26VtKQ&usqp=CAU',
      // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN85T57iAsZKRx6vSSJHg_ZjYAQWu_26VtKQ&usqp=CAU'
      {
        id:60,
        name:'ABSOLUTE ARGAN OIL RADIANCE',
        price:650,
        color:'Purple orchid',
        image:'../assets/pic64.png',
        discount:'50% OFF',
        users:30
      },
      {
        id:61,
        name:'ABSOLUTE YOUTH INFINITY SKIN SCULPTING SERUM',
        price:500,
        color:'red',
        image:'../assets/pic65.png',
        discount:'15% OFF',
        users:50
      },
      {
        id:62,
        name:'ABSOLUTE PERFECT RADIANCE SKIN BRIEGHTENING',
        price:450,
        color:'red',
        image:'../assets/pic66.png',
        discount:'10% OFF',
        users:60
      },
      {
        id:63,
        name:'Absolute SKIN GLOSS REFLECTION SERUM',
        price:600,
        color:'BROWN',
        image:'../assets/pic67.png',
        discount:'30% OFF',
        users:20
      },
      {
        id:64,
        name:'Absolute SKIN GLOSS REFLECTION SERUM',
        price:360,
        color:'purpule',
        image:'../assets/pic68.png',
        discount:'50% OFF',
        users:40
      },
      {
        id:65,
        name:'PERFECT RADIANCE INSTANCE WHITENING',
        price:850,
        color:'PINK',
        image:'../assets/pic69.png',
        discount:'15% OFF',
        users:90
      },
      {
        id:66,
        name:'FACE OIL SERUM',
        price:250,
        color:'red',
        image:'../assets/pic70.png',
        discount:'25% OFF',
        users:50
      },
      {
        id:66,
        name:'FACE SERUM',
        price:250,
        color:'red',
        image:'../assets/pic71.png',
        discount:'25% OFF',
        users:50
      }
    ];
  }
}
