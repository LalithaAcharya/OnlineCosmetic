import { getLocaleExtraDayPeriods } from '@angular/common';
import { Injectable } from '@angular/core';
import { Lips } from 'src/app/models/lips';
@Injectable({
  providedIn: 'root'
})

export class LipsService {

  constructor() { }

  getLipById(id:number):Lips{
    return this.getAll().find(lip=>lip.id==id)!;
  }

  getAll():Lips[] {
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
        id:1,
        name:'Cushion Matte Lipstick',
        price:650,
        color:'Purple orchid',
        image:'../assets/pic1.png',
        discount:'50% OFF',
        users:30
      },
      {
        id:2,
        name:'LAKME 9to5 Primer + Matte Lip Color',
        price:500,
        color:'red',
        image:'../assets/pic2.png',
        discount:'15% OFF',
        users:50
      },
      {
        id:3,
        name:'Enrich Lip Crayon Lipstick',
        price:450,
        color:'red',
        image:'../assets/pic3.png',
        discount:'10% OFF',
        users:60
      },
      {
        id:4,
        name:'Forever Liquid Lipstick ',
        price:600,
        color:'BROWN',
        image:'../assets/pic4.png',
        discount:'30% OFF',
        users:20
      },
      {
        id:5,
        name:'Absolute Limited Edition',
        price:360,
        color:'purpule',
        image:'../assets/pic5.png',
        discount:'50% OFF',
        users:40
      },
      {
        id:6,
        name:'POUT MATTE LIP COLOR',
        price:850,
        color:'PINK',
        image:'../assets/pic6.png',
        discount:'15% OFF',
        users:90
      },
      {
        id:7,
        name:'Enrich Lip Crayon Lipstick',
        price:250,
        color:'red',
        image:'../assets/pic7.png',
        discount:'25% OFF',
        users:50
      },
      {
        id:8,
        name:'Liquid Matte',
        price:500,
        color:'red',
        image:'../assets/pic8.png',
        discount:'40% OFF',
        users:60
      },
      {
        id:9,
        name:'CUSHION MATTE LIPSTICK',
        price:650,
        color:'red',
        image:'../assets/pic9.png',
        discount:'10% OFF',
        users:20
      },
      {
        id:10,
        name:'ENRICH SATIN LIP COLOR',
        price:450,
        color:'red',
        image:'../assets/pic10.png',
        discount:'5% OFF',
        users:50
      },
      {
        id:11,
        name:'9to5 PRIMER + MATTE',
        price:500,
        color:'BLUSH PINK',
        image:'../assets/pic11.png',
        discount:'70% OFF',
        users:45
      },
      {
        id:12,
        name:'LIQUID MATTE',
        price:350,
        
        color:'PINK',
        image:'../assets/pic12.png',
        discount:'15% OFF',
        users:30
      },
    ];
  
  }
}

