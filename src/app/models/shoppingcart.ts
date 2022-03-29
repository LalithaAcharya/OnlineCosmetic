import { ShoppingCartItem } from "./shoppingcartItem";

export class ShoppingCart{
    items:ShoppingCartItem[]=[];
    
    get totalPrice():number{
        let totalPrice=0;
        this.items.forEach(item=> {
            totalPrice+=(item.price)
        });
        return totalPrice;
    }
}

