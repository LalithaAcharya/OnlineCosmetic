import { Injectable } from '@angular/core';
import { Bestdeals } from 'src/app/models/bestdeals';

@Injectable({
  providedIn: 'root'
})
export class BestdealsService {

  constructor() { }

  getBestdealsById(id:number):Bestdeals{
    return this.getAll().find(bestdeals=>bestdeals.id==id)!;
  }

  getAll():Bestdeals[] {
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
        id:83,
        name:'lALME VITAMIN C KIT',
        price:650,
        color:'Purple orchid',
        image:'../assets/pic81.png',
        discount:'50% OFF',
        users:30
      },
      {
        id:84,
        name:'LAKME MAKE UP KIT',
        price:500,
        color:'red',
        image:'../assets/pic82.png',
        discount:'15% OFF',
        users:50
      },
      {
        id:85,
        name:'PERFECT RADIANCE KIT',
        price:450,
        color:'red',
        image:'../assets/pic83.png',
        discount:'10% OFF',
        users:60
      },
      {
        id:86,
        name:'ABSILUTE MATTE MELT MINI VALUE KIT',
        price:600,
        color:'BROWN',
        image:'../assets/pic84.png',
        discount:'30% OFF',
        users:20
      },
      {
        id:87,
        name:'RESTORE AND REVITALISE SKIN CAMBO',
        price:360,
        color:'purpule',
        image:'../assets/pic85.png',
        discount:'50% OFF',
        users:40
      },
      {
        id:88,
        name:'LIT FROM WITHIN CAMBO',
        price:850,
        color:'PINK',
        image:'../assets/pic86.png',
        discount:'15% OFF',
        users:90
      },
      {
        id:89,
        name:'ALL DAY MATTE CAMBO',
        price:250,
        color:'red',
        image:'../assets/pic87.png',
        discount:'25% OFF',
        users:50
      },
      {
        id:90,
        name:'ALL DAY RADIAMVE KIT',
        price:250,
        color:'red',
        image:'../assets/pic88.png',
        discount:'25% OFF',
        users:50
      }
    ];
  }
}
