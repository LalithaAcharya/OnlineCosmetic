import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cleanser } from '../models/cleanser';
import { CleanserService } from '../services/cosmatics/cleanser.service';
import { ShoppingcartService } from '../services/shoppingcart.service';

@Component({
  selector: 'app-cleanser-page',
  templateUrl: './cleanser-page.component.html',
  styleUrls: ['./cleanser-page.component.css']
})
export class CleanserPageComponent implements OnInit {
  cleanser!:Cleanser;
  constructor(private activatedRounte:ActivatedRoute,
  private cleanserServices:CleanserService, private cartService:ShoppingcartService,
  private router:Router) {
    activatedRounte.params.subscribe((params)=>{
      if(params['id'])
      this.cleanser=cleanserServices.getCleanserById(params['id'])
    })
   }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addtoCart(this.cleanser);
  this.router.navigateByUrl('/addtocart')
  }

}
