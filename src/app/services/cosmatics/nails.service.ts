import { Injectable } from '@angular/core';
import { Nails } from 'src/app/models/nails';

@Injectable({
  providedIn: 'root'
})
export class NailsService {

  getNailById(id:number):Nails{
    return this.getAll().find(nail=>nail.id==id)!;
  }

  getAll():Nails[] {
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
        id:37,
        name:'ABSOLUTE GEL STYLISH',
        price:650,
        color:'RED',
        image:'../assets/pic39.png',
        discount:'50% OFF',
        users:30
      },
      {
        id:38,
        name:'9to5 TAGGED NAL COLOR',
        price:500,
        color:'PALEPINK',
        image:'../assets/pic40.png',
        discount:'15% OFF',
        users:50
      },
      {
        id:39,
        name:'COLOR CRUCH NAIL ART',
        price:450,
        color:'Red',
        image:'../assets/pic41.png',
        discount:'10% OFF',
        users:60
      },
      {
        id:40,
        name:'ABSILUTE GET STYLISH NAIL COLOR',
        price:600,
        color:'DARK RED',
        image:'../assets/pic42.png',
        discount:'30% OFF',
        users:20
      },
      {
        id:41,
        name:'LAKME COLOR CRUSH NAIL ART',
        price:360,
        color:'purpule',
        image:'../assets/pic43.png',
        discount:'50% OFF',
        users:40
      },
      {
        id:42,
        name:'ABSOLUTE GEL STYLISH NAIL COLOR',
        price:850,
        color:'ORNGE',
        image:'../assets/pic44.png',
        discount:'15% OFF',
        users:90
      },
      {
        id:43,
        name:'9to5 PRIMER+GLOSS NAIL COLOR',
        price:250,
        color:'CLAY GREY',
        image:'../assets/pic45.png',
        discount:'25% OFF',
        users:50
      },
      {
        id:44,
        name:'9to5 PRIMER+GLOSS NAIL COLOR',
        price:500,
        color:'PURPLE',
        image:'../assets/pic46.png',
        discount:'40% OFF',
        users:60
      }
    ];
  
}
}
