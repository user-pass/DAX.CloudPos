System.register(["../Operations/EmployeeDiscount/EmployeeDiscountOperationRequest", "PosApi/Consume/Dialogs"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EmployeeDiscountOperationRequest_1, Dialogs_1, EmployeeDiscountMessageDialog;
    return {
        setters: [
            function (EmployeeDiscountOperationRequest_1_1) {
                EmployeeDiscountOperationRequest_1 = EmployeeDiscountOperationRequest_1_1;
            },
            function (Dialogs_1_1) {
                Dialogs_1 = Dialogs_1_1;
            }
        ],
        execute: function () {
            EmployeeDiscountMessageDialog = (function () {
                function EmployeeDiscountMessageDialog() {
                }
                EmployeeDiscountMessageDialog.prototype.supportedRequestType = function () {
                    return EmployeeDiscountOperationRequest_1.default;
                };
                EmployeeDiscountMessageDialog.show = function (context) {
                    var _this = this;
                    var promise = new Promise(function (resolve, reject) {
                        var messageDialogOptions = {
                            title: "Warning",
                            message: "No customer found. Do you want to add one?",
                            showCloseX: true,
                            button1: {
                                id: "button1OK",
                                label: "Yes",
                                result: "OKResult"
                            },
                            button2: {
                                id: "Button2Cancel",
                                label: "Cancel",
                                result: "CancelResult"
                            }
                        };
                        var dialogRequest = new Dialogs_1.ShowMessageDialogClientRequest(messageDialogOptions);
                        context.runtime.executeAsync(dialogRequest).then(function (result) {
                            if (result.data.result.dialogResult.toString() == "OKResult") {
                                var options = { label: "Please enter customer account:" };
                                var corellationId_1;
                                var customerAccount_1;
                                var customerAccountRequest = new Commerce.ShowTextInputDialogClientRequest(options, corellationId_1);
                                context.runtime.executeAsync(customerAccountRequest).then(function (result) {
                                    if (!result.canceled) {
                                        customerAccount_1 = result.data.result.value.toString();
                                        var getScanResult = new Commerce.GetScanResultClientRequest(customerAccount_1);
                                        context.runtime.executeAsync(getScanResult).then(function (result) {
                                            if (result.data.result.Customer) {
                                                var setCustomerAccountRequest = new Commerce.SetCustomerOnCartOperationRequest(corellationId_1, customerAccount_1);
                                                context.runtime.executeAsync(setCustomerAccountRequest).then(function (result) {
                                                }).catch(function (reason) {
                                                    context.logger.logError(JSON.stringify(reason));
                                                    reject(reason);
                                                });
                                            }
                                            else {
                                                _this.show(context);
                                            }
                                        }).catch(function (reason) {
                                            context.logger.logError(JSON.stringify(reason));
                                            reject(reason);
                                        });
                                    }
                                    else {
                                        resolve(null);
                                    }
                                }).catch(function (reason) {
                                    context.logger.logError(JSON.stringify(reason));
                                    reject(reason);
                                });
                                context.logger.logInformational("MessageDialog result:" + result.data.result.dialogResult);
                                resolve(result.data.result.dialogResult);
                            }
                            else {
                                resolve(null);
                            }
                        }).catch(function (reason) {
                            context.logger.logError(JSON.stringify(reason));
                            reject(reason);
                        });
                    });
                    return promise;
                };
                return EmployeeDiscountMessageDialog;
            }());
            exports_1("default", EmployeeDiscountMessageDialog);
        }
    };
});
//# sourceMappingURL=C:/RetailSDK/POS/Extensions/Dialogs/EmployeeDiscountMessageDialog.js.map