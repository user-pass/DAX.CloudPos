import EmployeeDiscountOperationResponse from "./EmployeeDiscountOperationResponse";
import EmployeeDiscountOperationRequest from "./EmployeeDiscountOperationRequest";
import { ExtensionOperationRequestFactoryFunctionType, IOperationContext } from "PosApi/Create/Operations";
import { ClientEntities, ProxyEntities } from "PosApi/Entities";
import * as CartOperations from "PosApi/Consume/Cart";
import { ObjectExtensions } from "PosApi/TypeExtensions";

type CancelableDiscountRequest = ClientEntities.ICancelableDataResult<EmployeeDiscountOperationRequest<EmployeeDiscountOperationResponse>>;

let getOperationRequest: ExtensionOperationRequestFactoryFunctionType<EmployeeDiscountOperationResponse> =

    function (
        context: IOperationContext,
        operationId: number,
        actionParameters: string[],
        correlationId: string
    ): Promise<CancelableDiscountRequest> {

        let cart: ProxyEntities.Cart = null;

        let cartRequest: CartOperations.GetCurrentCartClientRequest<CartOperations.GetCurrentCartClientResponse> =
            new CartOperations.GetCurrentCartClientRequest();
        return context.runtime.executeAsync(cartRequest)
            .then((result: ClientEntities.ICancelableDataResult<CartOperations.GetCurrentCartClientResponse>): void => {
                if (!result.canceled) {
                    cart = result.data.result;
                }
            })
            .then((): CancelableDiscountRequest => {
                if (ObjectExtensions.isNullOrUndefined(cart)) {
                    return <CancelableDiscountRequest>{
                        canceled: true,
                        data: null
                    };
                }

                let operationRequest: EmployeeDiscountOperationRequest<EmployeeDiscountOperationResponse> =
                    new EmployeeDiscountOperationRequest<EmployeeDiscountOperationResponse>(correlationId);

                operationRequest.isCustomerInCart = cart.CustomerId;
                operationRequest.cartEmployeeDiscounts = 50;
                operationRequest.cart = cart;

                return <CancelableDiscountRequest>{
                    canceled: false,
                    data: operationRequest
                };
            });

    };

export default getOperationRequest;