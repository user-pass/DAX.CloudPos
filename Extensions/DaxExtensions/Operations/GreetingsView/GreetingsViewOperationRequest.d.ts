import { ExtensionOperationRequestBase } from "PosApi/Create/Operations";
import GreetingsViewOperationResponse from "./GreetingsViewOperationResponse";
export default class GreetingsViewOperationRequest<TResponse extends GreetingsViewOperationResponse> extends ExtensionOperationRequestBase<TResponse> {
    constructor(correlationId: string);
}
