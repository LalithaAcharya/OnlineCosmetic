import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sunscreen } from '../models/sunscreen';
import { SunscreenService } from '../services/cosmatics/sunscreen.service';
import { ShoppingcartService } from '../services/shoppingcart.service';

@Component({
  selector: 'app-sunscreen-page',
  templateUrl: './sunscreen-page.component.html',
  styleUrls: ['./sunscreen-page.component.css']
})
export class SunscreenPageComponent implements OnInit {

  sunscreen!:Sunscreen;
  constructor(private activatedRounte:ActivatedRoute,
  private sunscreenServices:SunscreenService, private cartService:ShoppingcartService,
  private router:Router) {
    activatedRounte.params.subscribe((params)=>{
      if(params['id'])
      this.sunscreen=sunscreenServices.getSunscreenById(params['id'])
    })
   }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addtoCart(this.sunscreen);
  this.router.navigateByUrl('/addtocart')
  }

}
