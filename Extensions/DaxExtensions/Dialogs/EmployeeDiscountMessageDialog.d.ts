import EmployeeDiscountOperationResponse from "../Operations/EmployeeDiscount/EmployeeDiscountOperationResponse";
import { IExtensionContext } from "PosApi/Framework/ExtensionContext";
import { ExtensionOperationRequestType } from "PosApi/Create/Operations";
export default class EmployeeDiscountMessageDialog<TResponse extends EmployeeDiscountOperationResponse> {
    supportedRequestType(): ExtensionOperationRequestType<TResponse>;
    static show(context: IExtensionContext): Promise<string>;
}
