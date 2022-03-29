import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Eyes } from '../models/eyes';
import { EyesService } from '../services/cosmatics/eyes.service';
import { ShoppingcartService } from '../services/shoppingcart.service';

@Component({
  selector: 'app-eyes-page',
  templateUrl: './eyes-page.component.html',
  styleUrls: ['./eyes-page.component.css']
})
export class EyesPageComponent implements OnInit {
  eye!:Eyes;
  constructor(private activatedRounte:ActivatedRoute,
  private faceServices:EyesService, private cartService:ShoppingcartService,
  private router:Router) {
    activatedRounte.params.subscribe((params)=>{
      if(params['id'])
      this.eye=faceServices.getFaceById(params['id'])
    })
   }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addtoCart(this.eye);
  this.router.navigateByUrl('/addtocart')
  }
  addToWishList(){
    this.cartService.addtoCart(this.eye);
  this.router.navigateByUrl('/wishlist')
  }

}
