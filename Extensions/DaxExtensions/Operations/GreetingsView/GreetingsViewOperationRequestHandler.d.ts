import GreetingsViewOperationResponse from "./GreetingsViewOperationResponse";
import GreetingsViewOperationRequest from "./GreetingsViewOperationRequest";
import { ExtensionOperationRequestHandlerBase, ExtensionOperationRequestType } from "PosApi/Create/Operations";
import { ClientEntities } from "PosApi/Entities";
export default class PrintOperationRequestHandler<TResponse extends GreetingsViewOperationResponse> extends ExtensionOperationRequestHandlerBase<TResponse> {
    supportedRequestType(): ExtensionOperationRequestType<TResponse>;
    executeAsync(request: GreetingsViewOperationRequest<TResponse>): Promise<ClientEntities.ICancelableDataResult<TResponse>>;
}
