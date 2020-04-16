System.register(["./GreetingsViewOperationResponse", "./GreetingsViewOperationRequest", "PosApi/Create/Operations"], function (exports_1, context_1) {
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
    var GreetingsViewOperationResponse_1, GreetingsViewOperationRequest_1, Operations_1, PrintOperationRequestHandler;
    return {
        setters: [
            function (GreetingsViewOperationResponse_1_1) {
                GreetingsViewOperationResponse_1 = GreetingsViewOperationResponse_1_1;
            },
            function (GreetingsViewOperationRequest_1_1) {
                GreetingsViewOperationRequest_1 = GreetingsViewOperationRequest_1_1;
            },
            function (Operations_1_1) {
                Operations_1 = Operations_1_1;
            }
        ],
        execute: function () {
            PrintOperationRequestHandler = (function (_super) {
                __extends(PrintOperationRequestHandler, _super);
                function PrintOperationRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                PrintOperationRequestHandler.prototype.supportedRequestType = function () {
                    return GreetingsViewOperationRequest_1.default;
                };
                PrintOperationRequestHandler.prototype.executeAsync = function (request) {
                    this.context.navigator.navigate("GreetingsDataListView");
                    return Promise.resolve({
                        canceled: false,
                        data: new GreetingsViewOperationResponse_1.default()
                    });
                };
                return PrintOperationRequestHandler;
            }(Operations_1.ExtensionOperationRequestHandlerBase));
            exports_1("default", PrintOperationRequestHandler);
        }
    };
});
//# sourceMappingURL=C:/RetailSDK/POS/Extensions/Operations/GreetingsView/GreetingsViewOperationRequestHandler.js.map