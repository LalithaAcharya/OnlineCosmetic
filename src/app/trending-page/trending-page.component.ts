import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trending } from '../models/trending';
import { TrendingService } from '../services/cosmatics/trending.service';
import { ShoppingcartService } from '../services/shoppingcart.service';

@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.component.html',
  styleUrls: ['./trending-page.component.css']
})
export class TrendingPageComponent implements OnInit {

  trending!:Trending;
  constructor(private activatedRounte:ActivatedRoute,
  private trendingServices:TrendingService, private cartService:ShoppingcartService,
  private router:Router) {
    activatedRounte.params.subscribe((params)=>{
      if(params['id'])
      this.trending=trendingServices.getTreandingById(params['id'])
    })
   }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addtoCart(this.trending);
  this.router.navigateByUrl('/addtocart')
  }

}
