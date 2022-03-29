import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lips } from '../models/lips';
import { LipsService } from '../services/cosmatics/lips.service';
import { ShoppingcartService } from '../services/shoppingcart.service';

@Component({
  selector: 'app-lips-page',
  templateUrl: './lips-page.component.html',
  styleUrls: ['./lips-page.component.css']
})
export class LipsPageComponent implements OnInit {
  lip!:Lips;
  constructor(private activatedRounte:ActivatedRoute,
  private lipServices:LipsService, private cartService:ShoppingcartService,
  private router:Router) {
    activatedRounte.params.subscribe((params)=>{
      if(params['id'])
      this.lip=lipServices.getLipById(params['id'])
    })
   }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addtoCart(this.lip);
  this.router.navigateByUrl('/addtocart')
  }

}
