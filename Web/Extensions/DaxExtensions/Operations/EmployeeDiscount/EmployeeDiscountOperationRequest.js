System.register(["PosApi/Create/Operations"], function (exports_1, context_1) {
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
    var Operations_1, EmployeeDiscountOperationRequest;
    return {
        setters: [
            function (Operations_1_1) {
                Operations_1 = Operations_1_1;
            }
        ],
        execute: function () {
            EmployeeDiscountOperationRequest = (function (_super) {
                __extends(EmployeeDiscountOperationRequest, _super);
                function EmployeeDiscountOperationRequest(correlationId) {
                    return _super.call(this, 4096, correlationId) || this;
                }
                return EmployeeDiscountOperationRequest;
            }(Operations_1.ExtensionOperationRequestBase));
            exports_1("default", EmployeeDiscountOperationRequest);
        }
    };
});
//# sourceMappingURL=C:/RetailSDK/POS/Extensions/Operations/EmployeeDiscount/EmployeeDiscountOperationRequest.js.map