import { ExtensionOperationRequestBase } from "PosApi/Create/Operations";
import EmployeeDiscountOperationResponse from "./EmployeeDiscountOperationResponse";
import { ProxyEntities } from "PosApi/Entities";
export default class EmployeeDiscountOperationRequest<TResponse extends EmployeeDiscountOperationResponse> extends ExtensionOperationRequestBase<TResponse> {
    cartEmployeeDiscounts: number;
    cart: ProxyEntities.Cart;
    isCustomerInCart: String;
    constructor(correlationId: string);
}
