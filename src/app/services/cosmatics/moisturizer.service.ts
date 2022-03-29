import { createMayBeForwardRefExpression } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Moisturizer } from 'src/app/models/moisturizer';

@Injectable({
  providedIn: 'root'
})
export class MoisturizerService {

  constructor() { }

  getMoisturizerById(id:number):Moisturizer{
    return this.getAll().find(lip=>lip.id==id)!;
  }

  getAll():Moisturizer[] {
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
        id:45,
        name:'PEACH MILK MOISTURIZER',
        price:650,
        image:'../assets/pic47.png',
        discount:'50% OFF',
        color:'cream',
        users:30
      },
      {
        id:46,
        name:'MATTE MOIST',
        price:500,
        image:'../assets/pic48.png',
        discount:'15% OFF',
        color:'cream',
        users:50
      },
      {
        id:47,
        name:'FRUIT MOISTURIZER PEACH MILK',
        price:450,
        image:'../assets/pic49.png',
        discount:'10% OFF',
        color:'cream',
        users:60
      },
      {
        id:48,
        name:'FRUIT MOISTURIZER',
        price:600,
        image:'../assets/pic50.png',
        discount:'30% OFF',
        color:'cream',
        users:20
      },
      {
        id:49,
        name:'FRUIT MOISTURIZER ON BEHANCE',
        price:360,
        image:'../assets/pic51.png',
        discount:'50% OFF',
        color:'cream',
        users:40
      },
      {
        id:50,
        name:'PEACH MILK MOISTURE',
        price:850,
        image:'../assets/pic52.png',
        discount:'15% OFF',
        color:'cream',
        users:90
      },
      {
        id:51,
        name:'PEACH MILK BODY LOCATION',
        price:250,
        image:'../assets/pic53.png',
        discount:'25% OFF',
        color:'cream',
        users:50
      },
      {
        id:52,
        name:'FRUIT MOISTURIZER DAILY GLOW',
        price:500,
        image:'../assets/pic54.png',
        discount:'40% OFF',
        color:'cream',
        users:60
      }
    ];
  }
}
