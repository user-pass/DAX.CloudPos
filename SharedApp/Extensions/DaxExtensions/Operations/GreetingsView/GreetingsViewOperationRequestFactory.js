System.register(["./GreetingsViewOperationRequest"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GreetingsViewOperationRequest_1, getOperationRequest;
    return {
        setters: [
            function (GreetingsViewOperationRequest_1_1) {
                GreetingsViewOperationRequest_1 = GreetingsViewOperationRequest_1_1;
            }
        ],
        execute: function () {
            getOperationRequest = function (context, operationId, actionParameters, correlationId) {
                var operationRequest = new GreetingsViewOperationRequest_1.default(correlationId);
                return Promise.resolve({
                    canceled: false,
                    data: operationRequest
                });
            };
            exports_1("default", getOperationRequest);
        }
    };
});
//# sourceMappingURL=C:/RetailSDK/POS/Extensions/Operations/GreetingsView/GreetingsViewOperationRequestFactory.js.map