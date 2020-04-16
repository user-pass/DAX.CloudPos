import EmployeeDiscountOperationResponse from "./EmployeeDiscountOperationResponse";
import EmployeeDiscountOperationRequest from "./EmployeeDiscountOperationRequest";
import { ExtensionOperationRequestHandlerBase, ExtensionOperationRequestType } from "PosApi/Create/Operations";
import { ClientEntities } from "PosApi/Entities";
export default class PrintOperationRequestHandler<TResponse extends EmployeeDiscountOperationResponse> extends ExtensionOperationRequestHandlerBase<TResponse> {
    supportedRequestType(): ExtensionOperationRequestType<TResponse>;
    executeAsync(request: EmployeeDiscountOperationRequest<TResponse>): Promise<ClientEntities.ICancelableDataResult<TResponse>>;
}
