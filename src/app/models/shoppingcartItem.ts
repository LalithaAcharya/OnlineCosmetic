import { Lips } from "./lips";

export class ShoppingCartItem{

    constructor(lip:Lips){
        this.lip=lip;
        this.price;
    }
    lip:Lips;
    quantity:number=1;

    get price(): number{
        return this.lip.price * this.quantity;
    }
}