System.register(["PosApi/Entities", "./DataServiceEntities.g", "PosApi/Consume/DataService"], function (exports_1, context_1) {
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
    var Entities_1, DataServiceEntities_g_1, DataService_1, InvitationController;
    return {
        setters: [
            function (Entities_1_1) {
                Entities_1 = Entities_1_1;
            },
            function (DataServiceEntities_g_1_1) {
                DataServiceEntities_g_1 = DataServiceEntities_g_1_1;
            },
            function (DataService_1_1) {
                DataService_1 = DataService_1_1;
            }
        ],
        execute: function () {
            exports_1("ProxyEntities", Entities_1.ProxyEntities);
            exports_1("Entities", DataServiceEntities_g_1.Entities);
            (function (InvitationController) {
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
            })(InvitationController || (InvitationController = {}));
            exports_1("InvitationController", InvitationController);
        }
    };
});
//# sourceMappingURL=C:/RetailSDK/POS/Extensions/DataServices/DataServiceRequests.g.js.map