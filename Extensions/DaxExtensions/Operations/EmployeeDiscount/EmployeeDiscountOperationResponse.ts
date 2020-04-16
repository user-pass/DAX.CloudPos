import { Response } from "PosApi/Create/RequestHandlers";
import { ProxyEntities } from "PosApi/Entities";


export default class EmployeeDiscountOperationResponse extends Response {

    public cartEmployeeDiscounts: number;
    public cart: ProxyEntities.Cart;
    public isCustomerInCart: String;

    constructor(cartEmployeeDiscounts: number, cart: ProxyEntities.Cart, isCustomerInCart: String) {
        super();
        this.cartEmployeeDiscounts = cartEmployeeDiscounts;
        this.cart = cart;
    }
}