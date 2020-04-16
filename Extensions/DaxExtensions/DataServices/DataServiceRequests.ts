
import { ProxyEntities } from "PosApi/Entities";
import { Entities } from "./DataServiceEntities";
import { DataServiceRequest, DataServiceResponse } from "PosApi/Consume/DataService";
export { ProxyEntities };
export { Entities };

export namespace InvitationController {
  // Entity Set Invitation
  export class GetAllInvitationsResponse extends DataServiceResponse {
    public result: Entities.Invitation[];
  }

  export class GetAllInvitationsRequest<TResponse extends GetAllInvitationsResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor() {
        super();

        this._entitySet = "InvitationController";
        this._entityType = "Invitation";
        this._method = "GetAllInvitations";
        this._parameters = {  };
        this._isAction = true;
        this._returnType = Entities.Invitation;
        this._isReturnTypeCollection = true;
        
      }
  }

  export class GetInvitationResponse extends DataServiceResponse {
    public result: string;
  }

  export class GetInvitationRequest<TResponse extends GetInvitationResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor() {
        super();

        this._entitySet = "InvitationController";
        this._entityType = "Invitation";
        this._method = "GetInvitation";
        this._parameters = {  };
        this._isAction = true;
        this._returnType = null;
        this._isReturnTypeCollection = false;
        
      }
  }

  export class DeleteInvitationResponse extends DataServiceResponse {
    public result: Entities.Invitation[];
  }

  export class DeleteInvitationRequest<TResponse extends DeleteInvitationResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor(deleteInvitationRecord: Entities.Invitation) {
        super();

        this._entitySet = "InvitationController";
        this._entityType = "Invitation";
        this._method = "DeleteInvitation";
        this._parameters = { deleteInvitationRecord: deleteInvitationRecord };
        this._isAction = true;
        this._returnType = Entities.Invitation;
        this._isReturnTypeCollection = true;
        
      }
  }

  export class DeleteAllInvitationsResponse extends DataServiceResponse {
    public result: Entities.Invitation[];
  }

  export class DeleteAllInvitationsRequest<TResponse extends DeleteAllInvitationsResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor() {
        super();

        this._entitySet = "InvitationController";
        this._entityType = "Invitation";
        this._method = "DeleteAllInvitations";
        this._parameters = {  };
        this._isAction = true;
        this._returnType = Entities.Invitation;
        this._isReturnTypeCollection = true;
        
      }
  }

  export class InsertInvitationResponse extends DataServiceResponse {
    public result: Entities.Invitation[];
  }

  export class InsertInvitationRequest<TResponse extends InsertInvitationResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor(insertInvitationRecord: Entities.Invitation) {
        super();

        this._entitySet = "InvitationController";
        this._entityType = "Invitation";
        this._method = "InsertInvitation";
        this._parameters = { insertInvitationRecord: insertInvitationRecord };
        this._isAction = true;
        this._returnType = Entities.Invitation;
        this._isReturnTypeCollection = true;
        
      }
  }

  export class UpdateInvitationResponse extends DataServiceResponse {
    public result: Entities.Invitation[];
  }

  export class UpdateInvitationRequest<TResponse extends UpdateInvitationResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor(updateInvitationRecord: Entities.Invitation) {
        super();

        this._entitySet = "InvitationController";
        this._entityType = "Invitation";
        this._method = "UpdateInvitation";
        this._parameters = { updateInvitationRecord: updateInvitationRecord };
        this._isAction = true;
        this._returnType = Entities.Invitation;
        this._isReturnTypeCollection = true;
        
      }
  }

}
