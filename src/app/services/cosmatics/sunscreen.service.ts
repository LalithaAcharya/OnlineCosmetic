import { Injectable } from '@angular/core';
import { Sunscreen } from 'src/app/models/sunscreen';

@Injectable({
  providedIn: 'root'
})
export class SunscreenService {

  constructor() { }

  getSunscreenById(id:number):Sunscreen{
    return this.getAll().find(sunscreen=>sunscreen.id==id)!;
  }

  getAll():Sunscreen[] {
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
        id:52,
        name:'SUN EXPERT ULTRA MATTE LOTION',
        price:650,
        color:'Purple orchid',
        image:'../assets/pic55.png',
        discount:'50% OFF',
        users:30
      },
      {
        id:53,
        name:'LAKME SUN EXPERT SPF24',
        price:500,
        color:'red',
        image:'../assets/pic56.png',
        discount:'15% OFF',
        users:50
      },
      {
        id:54,
        name:'LAKME SUN EXPERT SPF 30PA',
        price:450,
        color:'red',
        image:'../assets/pic57.png',
        discount:'10% OFF',
        users:60
      },
      {
        id:55,
        name:'LAKME SUNSCREEN EXPERT SPF 30++',
        price:600,
        color:'BROWN',
        image:'../assets/pic58.png',
        discount:'30% OFF',
        users:20
      },
      {
        id:56,
        name:'LAKME SUN EXPERT ULTRA MATTE SPF 40',
        price:360,
        color:'purpule',
        image:'../assets/pic59.png',
        discount:'50% OFF',
        users:40
      },
      {
        id:57,
        name:'LAKME SUNSCREEN',
        price:850,
        color:'PINK',
        image:'../assets/pic60.png',
        discount:'15% OFF',
        users:90
      },
      {
        id:58,
        name:'LAKME SUN EXPERT FACE UV LOTION',
        price:250,
        color:'red',
        image:'../assets/pic61.png',
        discount:'25% OFF',
        users:50
      },
      {
        id:59,
        name:'LAKME SUN EXPERT SPF50+',
        price:500,
        color:'red',
        image:'../assets/pic62.png',
        discount:'40% OFF',
        users:60
      }
    ];
  }
}
