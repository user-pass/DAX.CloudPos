import GreetingsViewOperationResponse from "./GreetingsViewOperationResponse";
import GreetingsViewOperationRequest from "./GreetingsViewOperationRequest";
//import { InvitationController } from "../../DataServices/DataServiceRequests";
import { ExtensionOperationRequestHandlerBase, ExtensionOperationRequestType } from "PosApi/Create/Operations";
import { ClientEntities } from "PosApi/Entities";

export default class PrintOperationRequestHandler<TResponse extends GreetingsViewOperationResponse> extends ExtensionOperationRequestHandlerBase<TResponse> {

    public supportedRequestType(): ExtensionOperationRequestType<TResponse> {
        return GreetingsViewOperationRequest;
    }

    public executeAsync(request: GreetingsViewOperationRequest<TResponse>) {

        this.context.navigator.navigate("GreetingsDataListView");

        return Promise.resolve(<ClientEntities.ICancelableDataResult<TResponse>>{
            canceled: false,
            data: new GreetingsViewOperationResponse()
        });
    }
}