import { ProxyEntities } from "PosApi/Entities";
import { Entities } from "./DataServiceEntities";
import { DataServiceRequest, DataServiceResponse } from "PosApi/Consume/DataService";
export { ProxyEntities };
export { Entities };
export declare namespace InvitationController {
    class GetAllInvitationsResponse extends DataServiceResponse {
        result: Entities.Invitation[];
    }
    class GetAllInvitationsRequest<TResponse extends GetAllInvitationsResponse> extends DataServiceRequest<TResponse> {
        constructor();
    }
    class GetInvitationResponse extends DataServiceResponse {
        result: string;
    }
    class GetInvitationRequest<TResponse extends GetInvitationResponse> extends DataServiceRequest<TResponse> {
        constructor();
    }
    class DeleteInvitationResponse extends DataServiceResponse {
        result: Entities.Invitation[];
    }
    class DeleteInvitationRequest<TResponse extends DeleteInvitationResponse> extends DataServiceRequest<TResponse> {
        constructor(deleteInvitationRecord: Entities.Invitation);
    }
    class DeleteAllInvitationsResponse extends DataServiceResponse {
        result: Entities.Invitation[];
    }
    class DeleteAllInvitationsRequest<TResponse extends DeleteAllInvitationsResponse> extends DataServiceRequest<TResponse> {
        constructor();
    }
    class InsertInvitationResponse extends DataServiceResponse {
        result: Entities.Invitation[];
    }
    class InsertInvitationRequest<TResponse extends InsertInvitationResponse> extends DataServiceRequest<TResponse> {
        constructor(insertInvitationRecord: Entities.Invitation);
    }
    class UpdateInvitationResponse extends DataServiceResponse {
        result: Entities.Invitation[];
    }
    class UpdateInvitationRequest<TResponse extends UpdateInvitationResponse> extends DataServiceRequest<TResponse> {
        constructor(updateInvitationRecord: Entities.Invitation);
    }
}
