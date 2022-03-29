import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bestdeals } from '../models/bestdeals';
import { BestdealsService } from '../services/cosmatics/bestdeals.service';
import { ShoppingcartService } from '../services/shoppingcart.service';

@Component({
  selector: 'app-bestdeals-page',
  templateUrl: './bestdeals-page.component.html',
  styleUrls: ['./bestdeals-page.component.css']
})
export class BestdealsPageComponent implements OnInit {

  bestdeals!:Bestdeals;
  constructor(private activatedRounte:ActivatedRoute,
  private bestdealsServices:BestdealsService, private cartService:ShoppingcartService,
  private router:Router) {
    activatedRounte.params.subscribe((params)=>{
      if(params['id'])
      this.bestdeals=bestdealsServices.getBestdealsById(params['id'])
    })
   }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addtoCart(this.bestdeals);
  this.router.navigateByUrl('/addtocart')
  }

}
