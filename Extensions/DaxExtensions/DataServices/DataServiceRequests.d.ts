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
    class DeleteInvitationResponse extends DataServiceResponse {
        result: boolean;
    }
    class DeleteInvitationRequest<TResponse extends DeleteInvitationResponse> extends DataServiceRequest<TResponse> {
        constructor(deleteInvitationRecord: Entities.Invitation);
    }
    class DeleteAllInvitationsResponse extends DataServiceResponse {
        result: boolean;
    }
    class DeleteAllInvitationsRequest<TResponse extends DeleteAllInvitationsResponse> extends DataServiceRequest<TResponse> {
        constructor();
    }
    class InsertInvitationResponse extends DataServiceResponse {
        result: boolean;
    }
    class InsertInvitationRequest<TResponse extends InsertInvitationResponse> extends DataServiceRequest<TResponse> {
        constructor(insertInvitationRecord: Entities.Invitation);
    }
    class UpdateInvitationResponse extends DataServiceResponse {
        result: boolean;
    }
    class UpdateInvitationRequest<TResponse extends UpdateInvitationResponse> extends DataServiceRequest<TResponse> {
        constructor(updateInvitationRecord: Entities.Invitation);
    }
}
export declare namespace LanguageController {
    class GetAllLanguagesResponse extends DataServiceResponse {
        result: Entities.Language[];
    }
    class GetAllLanguagesRequest<TResponse extends GetAllLanguagesResponse> extends DataServiceRequest<TResponse> {
        constructor();
    }
}
export declare namespace TenderTypeController {
    class GetTenderTypesResponse extends DataServiceResponse {
        result: Entities.TenderTypeModel[];
    }
    class GetTenderTypesRequest<TResponse extends GetTenderTypesResponse> extends DataServiceRequest<TResponse> {
        constructor();
    }
}
