import { Injectable } from '@angular/core';
import { Eyes } from 'src/app/models/eyes';

@Injectable({
  providedIn: 'root'
})
export class EyesService {

  getFaceById(id:number):Eyes{
    return this.getAll().find(face=>face.id==id)!;
  }

  getAll():Eyes[] {
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
        id:25,
        name:'EYECONIC KAJAL',
        price:150,
        color:'BLACK',
        image:'../assets/pic27.png',
        discount:'10% OFF',
        users:90
      },
      {
        id:26,
        name:'ABSOLUTE GLOSS ARTIST EYELINER',
        price:250,
        color:'BLACK',
        image:'../assets/pic28.png',
        discount:'15% OFF',
        users:50
      },
      {
        id:27,
        name:'LAKME KAJAL',
        price:200,
        color:'BLACK',
        image:'../assets/pic29.png',
        discount:'10% OFF',
        users:60
      },
      {
        id:28,
        name:'EYECONIC KAJAL WHITE',
        price:350,
        color:'WHITE',
        image:'../assets/pic30.png',
        discount:'30% OFF',
        users:20
      },
      {
        id:29,
        name:'EYECONIC KAJAL WHITE',
        price:250,
        color:'WHITE',
        image:'../assets/pic31.png',
        discount:'50% OFF',
        users:40
      },
      {
        id:30,
        name:'ABSOLUTE 3D EYEBROW DESIGNER',
        price:150,
        color:'BLACK',
        image:'../assets/pic32.png',
        discount:'15% OFF',
        users:90
      },
      {
        id:31,
        name:'EYECONIC KAJAL PENCIL',
        price:550,
        color:'BLACK',
        image:'../assets/pic33.png',
        discount:'25% OFF',
        users:50
      },
      {
        id:32,
        name:'9TO5 EYE SHADOW',
        price:250,
        color:'ROSSY RED',
        image:'../assets/pic34.png',
        discount:'40% OFF',
        users:60
      },
      {
        id:33,
        name:'ABSOLUTE INFINITY EYE SHADOW PALLETE',
        price:250,
        color:'BLACK',
        image:'../assets/pic35.png',
        discount:'10% OFF',
        users:20
      },
      {
        id:34,
        name:'ABSOLUTE SHINE LIQUID EYE LINER',
        price:550,
        color:'BLACK',
        image:'../assets/pic36.png',
        discount:'5% OFF',
        users:50
      },
      {
        id:35,
        name:'ABSOLUTE GLOSS ARTIST EYE LINER',
        price:550,
        color:'BLACK',
        image:'../assets/pic37.png',
        discount:'70% OFF',
        users:45
      },
      {
        id:36,
        name:'LAKME INSTA EYE LINER',
        price:550,
        color:'BLUE',
        image:'../assets/pic38.png',
        discount:'15% OFF',
        users:30
      },
    ];
  }
}
