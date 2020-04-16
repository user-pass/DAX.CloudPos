import GreetingsViewOperationResponse from "./GreetingsViewOperationResponse";
import GreetingsViewOperationRequest from "./GreetingsViewOperationRequest";
import { ExtensionOperationRequestFactoryFunctionType, IOperationContext } from "PosApi/Create/Operations";
import { ClientEntities } from "PosApi/Entities";

let getOperationRequest: ExtensionOperationRequestFactoryFunctionType<GreetingsViewOperationResponse> =

    function (
        context: IOperationContext,
        operationId: number,
        actionParameters: string[],
        correlationId: string
    ): Promise<ClientEntities.ICancelableDataResult<GreetingsViewOperationRequest<GreetingsViewOperationResponse>>> {

        let operationRequest: GreetingsViewOperationRequest<GreetingsViewOperationResponse> = new GreetingsViewOperationRequest<GreetingsViewOperationResponse>(correlationId);

        return Promise.resolve(<ClientEntities.ICancelableDataResult<GreetingsViewOperationRequest<GreetingsViewOperationResponse>>>{
            canceled: false,
            data: operationRequest
        });
    };

export default getOperationRequest;