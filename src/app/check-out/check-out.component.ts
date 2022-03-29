import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../models/shoppingcart';
import { ShoppingCartItem } from '../models/shoppingcartItem';
import { ShoppingcartService } from '../services/shoppingcart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
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

    payment(){
    //  alert("payment successfull! Your order is placed! shop more...")
    Swal.fire('Thank you...', ' your order is placed. shop more!', 'success');
    }
}
