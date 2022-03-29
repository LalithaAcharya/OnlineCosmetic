import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Face } from '../models/face';
import { FaceService } from '../services/cosmatics/face.service';
import { ShoppingcartService } from '../services/shoppingcart.service';

@Component({
  selector: 'app-face-page',
  templateUrl: './face-page.component.html',
  styleUrls: ['./face-page.component.css']
})
export class FacePageComponent implements OnInit {
    face!:Face;
  constructor(private activatedRounte:ActivatedRoute,
  private faceServices:FaceService, private cartService:ShoppingcartService,
  private router:Router) {
    activatedRounte.params.subscribe((params)=>{
      if(params['id'])
      this.face=faceServices.getFaceById(params['id'])
    })
   }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addtoCart(this.face);
  this.router.navigateByUrl('/addtocart')
  }


}
