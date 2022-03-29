import { Injectable } from '@angular/core';
import { Face } from 'src/app/models/face';

@Injectable({
  providedIn: 'root'
})
export class FaceService {

  constructor() { }


  getFaceById(id:number):Face{
    return this.getAll().find(face=>face.id==id)!;
  }

  getAll():Face[] {
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
        id:13,
        name:'PERFECT RADIANCE INTENSE WHITENING',
        price:550,
        color:'Purple orchid',
        image:'../assets/pic13.png',
        discount:'50% OFF',
        users:30
      },
      {
        id:14,
        name:'9to5 CC COMPLEXION CARE CREAM ',
        price:550,
        color:'red',
        image:'../assets/pic14.png',
        discount:'15% OFF',
        users:50
      },
      {
        id:15,
        name:'ABSOLUTE ARGON OIL RADIANCE',
        price:550,
        color:'red',
        image:'../assets/pic15.png',
        discount:'10% OFF',
        users:60
      },
      {
        id:16,
        name:'FACE MAGIC SKIN TINYS SOUFFLE',
        price:550,
        color:'BROWN',
        image:'../assets/pic16.png',
        discount:'30% OFF',
        users:20
      },
      {
        id:17,
        name:'PEACH MILK',
        price:550,
        color:'purpule',
        image:'../assets/pic25.png',
        discount:'50% OFF',
        users:40
      },
      {
        id:18,
        name:'9TO5 NATURALE',
        price:550,
        color:'PINK',
        image:'../assets/pic18.png',
        discount:'15% OFF',
        users:90
      },
      {
        id:19,
        name:'BLUSH & GLOW',
        price:550,
        color:'red',
        image:'../assets/pic19.png',
        discount:'25% OFF',
        users:50
      },
      {
        id:20,
        name:'ABSOLUTE YOUTH INFINITY',
        price:550,
        color:'red',
        image:'../assets/pic26.png',
        discount:'40% OFF',
        users:60
      },
      {
        id:21,
        name:'ABSOLUTE FRESH LIFE',
        price:550,
        color:'red',
        image:'../assets/pic20.png',
        discount:'10% OFF',
        users:20
      },
      {
        id:22,
        name:'PERFECTING LIQUID FOUNDATION',
        price:550,
        color:'red',
        image:'../assets/pic21.png',
        discount:'5% OFF',
        users:50
      },
      {
        id:23,
        name:'ABSOLUTE BLUR PERFECT PRIMER',
        price:550,
        color:'BLUSH PINK',
        image:'../assets/pic22.png',
        discount:'70% OFF',
        users:45
      },
      {
        id:24,
        name:'ABSOLUTE 3D COVER FOUNDATION',
        price:550,
        color:'PINK',
        image:'../assets/pic23.png',
        discount:'15% OFF',
        users:30
      },
    ];
  }
}

