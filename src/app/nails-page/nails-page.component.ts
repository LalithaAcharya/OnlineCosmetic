import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nails } from '../models/nails';
import { NailsService } from '../services/cosmatics/nails.service';
import { ShoppingcartService } from '../services/shoppingcart.service';

@Component({
  selector: 'app-nails-page',
  templateUrl: './nails-page.component.html',
  styleUrls: ['./nails-page.component.css']
})
export class NailsPageComponent implements OnInit {

  nail!:Nails;
  constructor(private activatedRounte:ActivatedRoute,
  private nailsServices:NailsService, private cartService:ShoppingcartService,
  private router:Router) {
    activatedRounte.params.subscribe((params)=>{
      if(params['id'])
      this.nail=nailsServices.getNailById(params['id'])
    })
   }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addtoCart(this.nail);
  this.router.navigateByUrl('/addtocart')
  }
 


}
