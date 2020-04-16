System.register(["PosApi/Entities", "./DataServiceEntities", "PosApi/Consume/DataService"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __moduleName = context_1 && context_1.id;
    var Entities_1, DataServiceEntities_1, DataService_1, InvitationController;
    return {
        setters: [
            function (Entities_1_1) {
                Entities_1 = Entities_1_1;
            },
            function (DataServiceEntities_1_1) {
                DataServiceEntities_1 = DataServiceEntities_1_1;
            },
            function (DataService_1_1) {
                DataService_1 = DataService_1_1;
            }
        ],
        execute: function () {
            exports_1("ProxyEntities", Entities_1.ProxyEntities);
            exports_1("Entities", DataServiceEntities_1.Entities);
            (function (InvitationController) {
                var GetAllInvitationsResponse = (function (_super) {
                    __extends(GetAllInvitationsResponse, _super);
                    function GetAllInvitationsResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return GetAllInvitationsResponse;
                }(DataService_1.DataServiceResponse));
                InvitationController.GetAllInvitationsResponse = GetAllInvitationsResponse;
                var GetAllInvitationsRequest = (function (_super) {
                    __extends(GetAllInvitationsRequest, _super);
                    function GetAllInvitationsRequest() {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "InvitationController";
                        _this._entityType = "Invitation";
                        _this._method = "GetAllInvitations";
                        _this._parameters = {};
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_1.Entities.Invitation;
                        _this._isReturnTypeCollection = true;
                        return _this;
                    }
                    return GetAllInvitationsRequest;
                }(DataService_1.DataServiceRequest));
                InvitationController.GetAllInvitationsRequest = GetAllInvitationsRequest;
                var GetInvitationResponse = (function (_super) {
                    __extends(GetInvitationResponse, _super);
                    function GetInvitationResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return GetInvitationResponse;
                }(DataService_1.DataServiceResponse));
                InvitationController.GetInvitationResponse = GetInvitationResponse;
                var GetInvitationRequest = (function (_super) {
                    __extends(GetInvitationRequest, _super);
                    function GetInvitationRequest() {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "InvitationController";
                        _this._entityType = "Invitation";
                        _this._method = "GetInvitation";
                        _this._parameters = {};
                        _this._isAction = true;
                        _this._returnType = null;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return GetInvitationRequest;
                }(DataService_1.DataServiceRequest));
                InvitationController.GetInvitationRequest = GetInvitationRequest;
                var DeleteInvitationResponse = (function (_super) {
                    __extends(DeleteInvitationResponse, _super);
                    function DeleteInvitationResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return DeleteInvitationResponse;
                }(DataService_1.DataServiceResponse));
                InvitationController.DeleteInvitationResponse = DeleteInvitationResponse;
                var DeleteInvitationRequest = (function (_super) {
                    __extends(DeleteInvitationRequest, _super);
                    function DeleteInvitationRequest(deleteInvitationRecord) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "InvitationController";
                        _this._entityType = "Invitation";
                        _this._method = "DeleteInvitation";
                        _this._parameters = { deleteInvitationRecord: deleteInvitationRecord };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_1.Entities.Invitation;
                        _this._isReturnTypeCollection = true;
                        return _this;
                    }
                    return DeleteInvitationRequest;
                }(DataService_1.DataServiceRequest));
                InvitationController.DeleteInvitationRequest = DeleteInvitationRequest;
                var DeleteAllInvitationsResponse = (function (_super) {
                    __extends(DeleteAllInvitationsResponse, _super);
                    function DeleteAllInvitationsResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return DeleteAllInvitationsResponse;
                }(DataService_1.DataServiceResponse));
                InvitationController.DeleteAllInvitationsResponse = DeleteAllInvitationsResponse;
                var DeleteAllInvitationsRequest = (function (_super) {
                    __extends(DeleteAllInvitationsRequest, _super);
                    function DeleteAllInvitationsRequest() {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "InvitationController";
                        _this._entityType = "Invitation";
                        _this._method = "DeleteAllInvitations";
                        _this._parameters = {};
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_1.Entities.Invitation;
                        _this._isReturnTypeCollection = true;
                        return _this;
                    }
                    return DeleteAllInvitationsRequest;
                }(DataService_1.DataServiceRequest));
                InvitationController.DeleteAllInvitationsRequest = DeleteAllInvitationsRequest;
                var InsertInvitationResponse = (function (_super) {
                    __extends(InsertInvitationResponse, _super);
                    function InsertInvitationResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return InsertInvitationResponse;
                }(DataService_1.DataServiceResponse));
                InvitationController.InsertInvitationResponse = InsertInvitationResponse;
                var InsertInvitationRequest = (function (_super) {
                    __extends(InsertInvitationRequest, _super);
                    function InsertInvitationRequest(insertInvitationRecord) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "InvitationController";
                        _this._entityType = "Invitation";
                        _this._method = "InsertInvitation";
                        _this._parameters = { insertInvitationRecord: insertInvitationRecord };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_1.Entities.Invitation;
                        _this._isReturnTypeCollection = true;
                        return _this;
                    }
                    return InsertInvitationRequest;
                }(DataService_1.DataServiceRequest));
                InvitationController.InsertInvitationRequest = InsertInvitationRequest;
                var UpdateInvitationResponse = (function (_super) {
                    __extends(UpdateInvitationResponse, _super);
                    function UpdateInvitationResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return UpdateInvitationResponse;
                }(DataService_1.DataServiceResponse));
                InvitationController.UpdateInvitationResponse = UpdateInvitationResponse;
                var UpdateInvitationRequest = (function (_super) {
                    __extends(UpdateInvitationRequest, _super);
                    function UpdateInvitationRequest(updateInvitationRecord) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "InvitationController";
                        _this._entityType = "Invitation";
                        _this._method = "UpdateInvitation";
                        _this._parameters = { updateInvitationRecord: updateInvitationRecord };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_1.Entities.Invitation;
                        _this._isReturnTypeCollection = true;
                        return _this;
                    }
                    return UpdateInvitationRequest;
                }(DataService_1.DataServiceRequest));
                InvitationController.UpdateInvitationRequest = UpdateInvitationRequest;
            })(InvitationController || (InvitationController = {}));
            exports_1("InvitationController", InvitationController);
        }
    };
});
//# sourceMappingURL=C:/RetailSDK/POS/Extensions/DataServices/DataServiceRequests.js.map