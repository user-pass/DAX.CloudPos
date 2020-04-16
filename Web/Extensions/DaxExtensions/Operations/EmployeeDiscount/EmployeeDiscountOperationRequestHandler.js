System.register(["./EmployeeDiscountOperationResponse", "./EmployeeDiscountOperationRequest", "../../Dialogs/EmployeeDiscountMessageDialog", "PosApi/Create/Operations", "PosApi/Consume/Cart"], function (exports_1, context_1) {
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
    var EmployeeDiscountOperationResponse_1, EmployeeDiscountOperationRequest_1, EmployeeDiscountMessageDialog_1, Operations_1, CartOperations, PrintOperationRequestHandler;
    return {
        setters: [
            function (EmployeeDiscountOperationResponse_1_1) {
                EmployeeDiscountOperationResponse_1 = EmployeeDiscountOperationResponse_1_1;
            },
            function (EmployeeDiscountOperationRequest_1_1) {
                EmployeeDiscountOperationRequest_1 = EmployeeDiscountOperationRequest_1_1;
            },
            function (EmployeeDiscountMessageDialog_1_1) {
                EmployeeDiscountMessageDialog_1 = EmployeeDiscountMessageDialog_1_1;
            },
            function (Operations_1_1) {
                Operations_1 = Operations_1_1;
            },
            function (CartOperations_1) {
                CartOperations = CartOperations_1;
            }
        ],
        execute: function () {
            PrintOperationRequestHandler = (function (_super) {
                __extends(PrintOperationRequestHandler, _super);
                function PrintOperationRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                PrintOperationRequestHandler.prototype.supportedRequestType = function () {
                    return EmployeeDiscountOperationRequest_1.default;
                };
                PrintOperationRequestHandler.prototype.executeAsync = function (request) {
                    if (!request.isCustomerInCart) {
                        EmployeeDiscountMessageDialog_1.default.show(this.context);
                        return Promise.resolve({
                            canceled: true,
                            data: new EmployeeDiscountOperationResponse_1.default(request.cartEmployeeDiscounts, request.cart, request.isCustomerInCart)
                        });
                    }
                    if (request.isCustomerInCart) {
                        var percentDiscountRequest = new CartOperations.TotalDiscountPercentOperationRequest(request.cart, request.correlationId, request.cartEmployeeDiscounts);
                        return this.context.runtime.executeAsync(percentDiscountRequest)
                            .then(function (result) {
                            return {
                                canceled: result.canceled,
                                data: new EmployeeDiscountOperationResponse_1.default(request.cartEmployeeDiscounts, request.cart, request.isCustomerInCart)
                            };
                        });
                    }
                    else {
                        alert("Unhandled exception");
                        this.context.logger.logError("Unhandled exception");
                        return Promise.resolve({
                            canceled: true,
                            data: new EmployeeDiscountOperationResponse_1.default(request.cartEmployeeDiscounts, request.cart, request.isCustomerInCart)
                        });
                    }
                };
                return PrintOperationRequestHandler;
            }(Operations_1.ExtensionOperationRequestHandlerBase));
            exports_1("default", PrintOperationRequestHandler);
        }
    };
});
//# sourceMappingURL=C:/RetailSDK/POS/Extensions/Operations/EmployeeDiscount/EmployeeDiscountOperationRequestHandler.js.map