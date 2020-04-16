import EmployeeDiscountOperationResponse from "./EmployeeDiscountOperationResponse";
import EmployeeDiscountOperationRequest from "./EmployeeDiscountOperationRequest";
import EmployeeDiscountMessageDialog from "../../Dialogs/EmployeeDiscountMessageDialog";
import { ExtensionOperationRequestHandlerBase, ExtensionOperationRequestType } from "PosApi/Create/Operations";
import { ClientEntities } from "PosApi/Entities";
import * as CartOperations from "PosApi/Consume/Cart";

export default class PrintOperationRequestHandler<TResponse extends EmployeeDiscountOperationResponse> extends ExtensionOperationRequestHandlerBase<TResponse> {

    public supportedRequestType(): ExtensionOperationRequestType<TResponse> {
        return EmployeeDiscountOperationRequest;
    }

    public executeAsync(request: EmployeeDiscountOperationRequest<TResponse>): Promise<ClientEntities.ICancelableDataResult<TResponse>> {

        if (!request.isCustomerInCart) {
            EmployeeDiscountMessageDialog.show(this.context);
            return Promise.resolve(<ClientEntities.ICancelableDataResult<TResponse>>{
                canceled: true,
                data: new EmployeeDiscountOperationResponse(request.cartEmployeeDiscounts, request.cart, request.isCustomerInCart)
            });
        }
        if (request.isCustomerInCart) {
            let percentDiscountRequest: CartOperations.TotalDiscountPercentOperationRequest<CartOperations.TotalDiscountPercentOperationResponse> =
                new CartOperations.TotalDiscountPercentOperationRequest(request.cart, request.correlationId, request.cartEmployeeDiscounts);
            return this.context.runtime.executeAsync(percentDiscountRequest)
                .then((
                    result: ClientEntities.ICancelableDataResult<CartOperations.TotalDiscountPercentOperationResponse>
                ): ClientEntities.ICancelableDataResult<TResponse> => {

                    return <ClientEntities.ICancelableDataResult<TResponse>>{
                        canceled: result.canceled,
                        data: new EmployeeDiscountOperationResponse(request.cartEmployeeDiscounts, request.cart, request.isCustomerInCart)
                    };
                });
        } else {
            alert("Unhandled exception");
            this.context.logger.logError("Unhandled exception");
            return Promise.resolve(<ClientEntities.ICancelableDataResult<TResponse>>{
                canceled: true,
                data: new EmployeeDiscountOperationResponse(request.cartEmployeeDiscounts, request.cart, request.isCustomerInCart)
            });
        }
    }
}