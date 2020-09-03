System.register(["PosApi/Extend/RequestHandlers/CartRequestHandlers", "../DataServices/DataServiceRequests"], function (exports_1, context_1) {
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
    var CartRequestHandlers_1, DataServiceRequests_1, ShowChangeDueClientRequestHandlerExt;
    return {
        setters: [
            function (CartRequestHandlers_1_1) {
                CartRequestHandlers_1 = CartRequestHandlers_1_1;
            },
            function (DataServiceRequests_1_1) {
                DataServiceRequests_1 = DataServiceRequests_1_1;
            }
        ],
        execute: function () {
            ShowChangeDueClientRequestHandlerExt = (function (_super) {
                __extends(ShowChangeDueClientRequestHandlerExt, _super);
                function ShowChangeDueClientRequestHandlerExt() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                ShowChangeDueClientRequestHandlerExt.prototype.executeAsync = function (request) {
                    var _this = this;
                    this.tenderTypes = ko.observableArray([]);
                    var tenderTypesRequest = new DataServiceRequests_1.TenderTypeController.GetTenderTypesRequest();
                    this.context.runtime.executeAsync(tenderTypesRequest).then(function (result) {
                        if (!result.canceled) {
                            var iterator = 0;
                            _this.tenderTypes(result.data.result);
                            for (var i = 0; i < request.salesOrder.TenderLines.length; i++) {
                                for (var j = 0; j < _this.tenderTypes().length; j++) {
                                    if (request.salesOrder.TenderLines[i].TenderTypeId == _this.tenderTypes()[j].TenderTypeModelId && _this.tenderTypes()[j].DraftNeeded == true) {
                                        iterator++;
                                    }
                                }
                            }
                            if (iterator > 0)
                                return _this.defaultExecuteAsync(request);
                            else
                                return Promise.resolve({ canceled: false });
                        }
                        else {
                            return Promise.resolve({ canceled: false });
                        }
                    });
                    return Promise.resolve({ canceled: false });
                };
                return ShowChangeDueClientRequestHandlerExt;
            }(CartRequestHandlers_1.ShowChangeDueClientRequestHandler));
            exports_1("default", ShowChangeDueClientRequestHandlerExt);
        }
    };
});
//# sourceMappingURL=C:/RetailSDK/POS/Extensions/RequestHandlers/ShowChangeDueClientRequestHandler.js.map