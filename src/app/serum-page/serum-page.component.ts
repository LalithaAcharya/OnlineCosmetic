import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Serum } from '../models/serum';
import { MoisturizerService } from '../services/cosmatics/moisturizer.service';
import { SerumService } from '../services/cosmatics/serum.service';
import { ShoppingcartService } from '../services/shoppingcart.service';

@Component({
  selector: 'app-serum-page',
  templateUrl: './serum-page.component.html',
  styleUrls: ['./serum-page.component.css']
})
export class SerumPageComponent implements OnInit {

  serum!:Serum;
  constructor(private activatedRounte:ActivatedRoute,
  private serumServices:SerumService, private cartService:ShoppingcartService,
  private router:Router) {
    activatedRounte.params.subscribe((params)=>{
      if(params['id'])
      this.serum=serumServices.getSerumById(params['id'])
    })
   }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addtoCart(this.serum);
  this.router.navigateByUrl('/addtocart')
  }

}
