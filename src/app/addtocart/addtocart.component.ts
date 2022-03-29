import { Component, OnInit } from '@angular/core';
import { Lips } from '../models/lips';
import { ShoppingCart } from '../models/shoppingcart';
import { ShoppingCartItem } from '../models/shoppingcartItem';
import { LipsService } from '../services/cosmatics/lips.service';
import { ShoppingcartService } from '../services/shoppingcart.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
 

    cart!: ShoppingCart;
    constructor(private cartService: ShoppingcartService ) { 
      this.setCart();
    }
  
    ngOnInit(): void {
    }
    setCart(){
      this.cart = this.cartService.getCart();
    }
    removeFromCart(cartItem: ShoppingCartItem){
      this.cartService.removeFromCart(cartItem.lip.id);
      this.setCart();
    }
    changeQuantity(cartItem:ShoppingCartItem, quantityInString:string){
      const quantity = parseInt(quantityInString);
      this.cartService.changeQuantity(cartItem.lip.id, quantity);
      this.setCart();
    }
  }