import { Response } from "PosApi/Create/RequestHandlers";
import { ProxyEntities } from "PosApi/Entities";
export default class EmployeeDiscountOperationResponse extends Response {
    cartEmployeeDiscounts: number;
    cart: ProxyEntities.Cart;
    isCustomerInCart: String;
    constructor(cartEmployeeDiscounts: number, cart: ProxyEntities.Cart, isCustomerInCart: String);
}
