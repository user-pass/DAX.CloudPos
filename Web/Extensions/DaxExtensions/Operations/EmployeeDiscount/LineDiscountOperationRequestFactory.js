System.register(["./LineDiscountOperationRequest", "PosApi/Consume/Cart", "PosApi/TypeExtensions"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LineDiscountOperationRequest_1, CartOperations, TypeExtensions_1, getOperationRequest;
    return {
        setters: [
            function (LineDiscountOperationRequest_1_1) {
                LineDiscountOperationRequest_1 = LineDiscountOperationRequest_1_1;
            },
            function (CartOperations_1) {
                CartOperations = CartOperations_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            }
        ],
        execute: function () {
            getOperationRequest = function (context, operationId, actionParameters, correlationId) {
                var cart = null;
                var cartRequest = new CartOperations.GetCurrentCartClientRequest();
                return context.runtime.executeAsync(cartRequest)
                    .then(function (result) {
                    if (!result.canceled) {
                        cart = result.data.result;
                    }
                }).then(function () {
                    if (TypeExtensions_1.ObjectExtensions.isNullOrUndefined(cart)) {
                        return {
                            canceled: true,
                            data: null
                        };
                    }
                    var nonDiscountedCartLine = TypeExtensions_1.ArrayExtensions.firstOrUndefined(cart.CartLines, function (cartLine) {
                        return !TypeExtensions_1.ArrayExtensions.hasElements(cartLine.DiscountLines);
                    });
                    var operationRequest = new LineDiscountOperationRequest_1.default(correlationId);
                    if (TypeExtensions_1.ObjectExtensions.isNullOrUndefined(nonDiscountedCartLine)) {
                        operationRequest.cartLineDiscounts = [];
                    }
                    else {
                        operationRequest.cartLineDiscounts = [{ cartLine: nonDiscountedCartLine, discountValue: 5 }];
                    }
                    operationRequest.isPercentDiscount = true;
                    return {
                        canceled: false,
                        data: operationRequest
                    };
                });
            };
            exports_1("default", getOperationRequest);
        }
    };
});
//# sourceMappingURL=C:/RetailSDK/POS/Extensions/Operations/EmployeeDiscount/LineDiscountOperationRequestFactory.js.map