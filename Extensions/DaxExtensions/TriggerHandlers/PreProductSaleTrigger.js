System.register(["PosApi/Extend/Triggers/ProductTriggers", "../DataServices/DataServiceRequests"], function (exports_1, context_1) {
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
    var Triggers, DataServiceRequests_1, PreProductSaleTrigger;
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
            PreProductSaleTrigger = (function (_super) {
                __extends(PreProductSaleTrigger, _super);
                function PreProductSaleTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                PreProductSaleTrigger.prototype.execute = function (options) {
                    this.context.logger.logVerbose("Executing PreProductSaleTrigger with options " + JSON.stringify(options) + " at " + new Date().getTime() + ".");
                    var dataService = new DataServiceRequests_1.InvitationController.GetInvitationRequest();
                    this.context.runtime.executeAsync(dataService).then(function (result) {
                        alert(result.data.result);
                    });
                    return Promise.resolve({ canceled: false });
                };
                return PreProductSaleTrigger;
            }(Triggers.PreProductSaleTrigger));
            exports_1("default", PreProductSaleTrigger);
        }
    };
});
//# sourceMappingURL=C:/RetailSDK/POS/Extensions/TriggerHandlers/PreProductSaleTrigger.js.map