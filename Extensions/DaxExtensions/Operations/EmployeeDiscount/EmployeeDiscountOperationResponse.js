System.register(["PosApi/Create/RequestHandlers"], function (exports_1, context_1) {
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
    var RequestHandlers_1, EmployeeDiscountOperationResponse;
    return {
        setters: [
            function (RequestHandlers_1_1) {
                RequestHandlers_1 = RequestHandlers_1_1;
            }
        ],
        execute: function () {
            EmployeeDiscountOperationResponse = (function (_super) {
                __extends(EmployeeDiscountOperationResponse, _super);
                function EmployeeDiscountOperationResponse(cartEmployeeDiscounts, cart, isCustomerInCart) {
                    var _this = _super.call(this) || this;
                    _this.cartEmployeeDiscounts = cartEmployeeDiscounts;
                    _this.cart = cart;
                    return _this;
                }
                return EmployeeDiscountOperationResponse;
            }(RequestHandlers_1.Response));
            exports_1("default", EmployeeDiscountOperationResponse);
        }
    };
});
//# sourceMappingURL=C:/RetailSDK/POS/Extensions/Operations/EmployeeDiscount/EmployeeDiscountOperationResponse.js.map