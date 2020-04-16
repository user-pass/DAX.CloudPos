System.register(["./EmployeeDiscountOperationRequest", "PosApi/Consume/Cart", "PosApi/TypeExtensions"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EmployeeDiscountOperationRequest_1, CartOperations, TypeExtensions_1, getOperationRequest;
    return {
        setters: [
            function (EmployeeDiscountOperationRequest_1_1) {
                EmployeeDiscountOperationRequest_1 = EmployeeDiscountOperationRequest_1_1;
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
                })
                    .then(function () {
                    if (TypeExtensions_1.ObjectExtensions.isNullOrUndefined(cart)) {
                        return {
                            canceled: true,
                            data: null
                        };
                    }
                    var operationRequest = new EmployeeDiscountOperationRequest_1.default(correlationId);
                    operationRequest.isCustomerInCart = cart.CustomerId;
                    operationRequest.cartEmployeeDiscounts = 50;
                    operationRequest.cart = cart;
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
//# sourceMappingURL=C:/RetailSDK/POS/Extensions/Operations/EmployeeDiscount/EmployeeDiscountOperationRequestFactory.js.map