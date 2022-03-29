import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moisturizer } from '../models/moisturizer';
import { MoisturizerService } from '../services/cosmatics/moisturizer.service';
import { ShoppingcartService } from '../services/shoppingcart.service';

@Component({
  selector: 'app-moisturizer-page',
  templateUrl: './moisturizer-page.component.html',
  styleUrls: ['./moisturizer-page.component.css']
})
export class MoisturizerPageComponent implements OnInit {

  moisturizer!:Moisturizer;
  constructor(private activatedRounte:ActivatedRoute,
  private moisturizerServices:MoisturizerService, private cartService:ShoppingcartService,
  private router:Router) {
    activatedRounte.params.subscribe((params)=>{
      if(params['id'])
      this.moisturizer=moisturizerServices.getMoisturizerById(params['id'])
    })
   }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addtoCart(this.moisturizer);
  this.router.navigateByUrl('/addtocart')
  }

}
