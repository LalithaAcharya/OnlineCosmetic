import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Lips } from '../models/lips';
import { ShoppingCart } from '../models/shoppingcart';
import { ShoppingCartItem } from '../models/shoppingcartItem';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {
  private shoppingcart:ShoppingCart=new ShoppingCart();
  addtoCart(lip:Lips):void{
    let shoppingCartItem=this.shoppingcart.items.find(item => item.lip.id === lip.id)
    if(shoppingCartItem){
      this.changeQuantity(lip.id,shoppingCartItem.quantity +1)
      return;
    }
    this.shoppingcart.items.push(new ShoppingCartItem(lip));
  }
  removeFromCart(lipId:number):void{
    this.shoppingcart.items=this.shoppingcart.items.filter(item => item.lip.id != lipId)
  }
  changeQuantity(quantity:number,lipId:number){
    let shoppingCartItem=this.shoppingcart.items.find(item => item.lip.id === lipId)
    if(!shoppingCartItem) return;
    shoppingCartItem.quantity=quantity;
  }
  getCart():ShoppingCart{
    return this.shoppingcart;
  }
}
