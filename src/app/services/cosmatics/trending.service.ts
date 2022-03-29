import { Injectable } from '@angular/core';
import { Trending } from 'src/app/models/trending';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor() { }

  getTreandingById(id:number):Trending{
    return this.getAll().find(treanding=>treanding.id==id)!;
  }

  getAll():Trending[] {
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
        id:75,
        name:'Forever Liquid Lipstick ',
        price:600,
        color:'BROWN',
        image:'../assets/pic4.png',
        discount:'30% OFF',
        users:20
      },
      {
        id:76,
        name:'9to5 CC COMPLEXION CARE CREAM ',
        price:550,
        color:'red',
        image:'../assets/pic14.png',
        discount:'15% OFF',
        users:50
      },
      {
        id:77,
        name:'ABSOLUTE GLOSS ARTIST EYELINER',
        price:250,
        color:'BLACK',
        image:'../assets/pic28.png',
        discount:'15% OFF',
        users:50
      },
      {
        id:78,
        name:'9to5 TAGGED NAL COLOR',
        price:500,
        color:'PALEPINK',
        image:'../assets/pic40.png',
        discount:'15% OFF',
        users:50
      },
      {
        id:79,
        name:'PEACH MILK MOISTURIZER',
        price:650,
        image:'../assets/pic47.png',
        discount:'50% OFF',
        color:'cream',
        users:30
      },
      {
        id:80,
        name:'LAKME SUNSCREEN',
        price:850,
        color:'PINK',
        image:'../assets/pic60.png',
        discount:'15% OFF',
        users:90
      },
      {
        id:81,
        name:'Absolute SKIN GLOSS REFLECTION SERUM',
        price:600,
        color:'BROWN',
        image:'../assets/pic67.png',
        discount:'30% OFF',
        users:20
      },
      {
        id:82,
        name:'lALME CLEANSING MILK',
        price:650,
        color:'Purple orchid',
        image:'../assets/pic72.png',
        discount:'50% OFF',
        users:30
      }
    ];
  }
}
