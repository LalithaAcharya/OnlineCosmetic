import { Injectable } from '@angular/core';
import { Cleanser } from 'src/app/models/cleanser';

@Injectable({
  providedIn: 'root'
})
export class CleanserService {

  constructor() { }

  getCleanserById(id:number):Cleanser{
    return this.getAll().find(cleanser=>cleanser.id==id)!;
  }

  getAll():Cleanser[] {
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
        id:67,
        name:'lALME CLEANSING MILK',
        price:650,
        color:'Purple orchid',
        image:'../assets/pic72.png',
        discount:'50% OFF',
        users:30
      },
      {
        id:68,
        name:'BLUSH AND GLOW',
        price:500,
        color:'red',
        image:'../assets/pic73.png',
        discount:'15% OFF',
        users:50
      },
      {
        id:69,
        name:'ABSOLUTE ARGON OIL RINSE CLEANSING OIL',
        price:450,
        color:'red',
        image:'../assets/pic74.png',
        discount:'10% OFF',
        users:60
      },
      {
        id:70,
        name:'CLEAN UP CLEAR POERS ',
        price:600,
        color:'BROWN',
        image:'../assets/pic75.png',
        discount:'30% OFF',
        users:20
      },
      {
        id:71,
        name:'FACE CLEANSER',
        price:360,
        color:'purpule',
        image:'../assets/pic76.png',
        discount:'50% OFF',
        users:40
      },
      {
        id:72,
        name:'LAKME GENTLE AND SOFT DEEP PORE CLEANSER ',
        price:850,
        color:'PINK',
        image:'../assets/pic77.png',
        discount:'15% OFF',
        users:90
      },
      {
        id:73,
        name:'9TO5 MATTE MOIST',
        price:250,
        color:'red',
        image:'../assets/pic78.png',
        discount:'25% OFF',
        users:50
      },
      {
        id:74,
        name:'ABSOLUTE PORE FIX TONNER',
        price:250,
        color:'red',
        image:'../assets/pic80.png',
        discount:'25% OFF',
        users:50
      }
    ];
  }
}
