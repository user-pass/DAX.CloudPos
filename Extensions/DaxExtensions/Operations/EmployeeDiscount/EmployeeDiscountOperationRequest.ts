import { ExtensionOperationRequestBase } from "PosApi/Create/Operations";
import EmployeeDiscountOperationResponse from "./EmployeeDiscountOperationResponse";
import { ProxyEntities } from "PosApi/Entities";

export default class EmployeeDiscountOperationRequest<TResponse extends EmployeeDiscountOperationResponse> extends ExtensionOperationRequestBase<TResponse> {

    public cartEmployeeDiscounts: number;
    public cart: ProxyEntities.Cart;
    public isCustomerInCart: String;

    constructor(correlationId: string) {
        super(4096, correlationId);
    }
}