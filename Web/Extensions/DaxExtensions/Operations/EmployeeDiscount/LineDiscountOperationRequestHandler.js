System.register(["./LineDiscountOperationResponse", "./LineDiscountOperationRequest", "PosApi/Create/Operations", "PosApi/Consume/Cart", "PosApi/TypeExtensions"], function (exports_1, context_1) {
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
    var LineDiscountOperationResponse_1, LineDiscountOperationRequest_1, Operations_1, CartOperations, TypeExtensions_1, PrintOperationRequestHandler;
    return {
        setters: [
            function (LineDiscountOperationResponse_1_1) {
                LineDiscountOperationResponse_1 = LineDiscountOperationResponse_1_1;
            },
            function (LineDiscountOperationRequest_1_1) {
                LineDiscountOperationRequest_1 = LineDiscountOperationRequest_1_1;
            },
            function (Operations_1_1) {
                Operations_1 = Operations_1_1;
            },
            function (CartOperations_1) {
                CartOperations = CartOperations_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            }
        ],
        execute: function () {
            PrintOperationRequestHandler = (function (_super) {
                __extends(PrintOperationRequestHandler, _super);
                function PrintOperationRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                PrintOperationRequestHandler.prototype.supportedRequestType = function () {
                    return LineDiscountOperationRequest_1.default;
                };
                PrintOperationRequestHandler.prototype.executeAsync = function (request) {
                    if (!TypeExtensions_1.ArrayExtensions.hasElements(request.cartLineDiscounts)) {
                        this.context.logger.logError("Cart does not have at least one item without a discount applied.");
                        return Promise.resolve({
                            canceled: true,
                            data: new LineDiscountOperationResponse_1.default(request.cartLineDiscounts, request.isPercentDiscount)
                        });
                    }
                    if (request.isPercentDiscount) {
                        var percentDiscountRequest = new CartOperations.LineDiscountPercentOperationRequest(request.cartLineDiscounts, request.correlationId);
                        return this.context.runtime.executeAsync(percentDiscountRequest)
                            .then(function (result) {
                            return {
                                canceled: result.canceled,
                                data: new LineDiscountOperationResponse_1.default(request.cartLineDiscounts, request.isPercentDiscount)
                            };
                        });
                    }
                    else {
                        var amountDiscountRequest = new CartOperations.LineDiscountAmountOperationRequest(request.cartLineDiscounts, request.correlationId);
                        return this.context.runtime.executeAsync(amountDiscountRequest)
                            .then(function (result) {
                            return {
                                canceled: result.canceled,
                                data: new LineDiscountOperationResponse_1.default(request.cartLineDiscounts, request.isPercentDiscount)
                            };
                        });
                    }
                };
                return PrintOperationRequestHandler;
            }(Operations_1.ExtensionOperationRequestHandlerBase));
            exports_1("default", PrintOperationRequestHandler);
        }
    };
});
//# sourceMappingURL=C:/RetailSDK/POS/Extensions/Operations/EmployeeDiscount/LineDiscountOperationRequestHandler.js.map