System.register(["PosApi/Extend/Triggers/ApplicationTriggers", "../DataServices/DataServiceRequests"], function (exports_1, context_1) {
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
    var Triggers, DataServiceRequests_1, PreLogonTrigger;
    return {
        setters: [
            function (Triggers_1) {
                Triggers = Triggers_1;
            },
            function (DataServiceRequests_1_1) {
                DataServiceRequests_1 = DataServiceRequests_1_1;
            }
        ],
        execute: function () {
            PreLogonTrigger = (function (_super) {
                __extends(PreLogonTrigger, _super);
                function PreLogonTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                PreLogonTrigger.prototype.execute = function (options) {
                    var _this = this;
                    var dataService = new DataServiceRequests_1.InvitationController.GetInvitationRequest();
                    this.context.runtime.executeAsync(dataService).then(function (result) {
                        var messageDialogOptions = {
                            title: "Hello",
                            message: result.data.result,
                            showCloseX: true,
                        };
                        var dialogRequest = new Commerce.ShowMessageDialogClientRequest(messageDialogOptions);
                        _this.context.runtime.executeAsync(dialogRequest);
                    });
                    return Promise.resolve({ canceled: false });
                };
                return PreLogonTrigger;
            }(Triggers.PreLogOnTrigger));
            exports_1("default", PreLogonTrigger);
        }
    };
});
//# sourceMappingURL=C:/RetailSDK/POS/Extensions/TriggerHandlers/PreLogonTrigger.js.map