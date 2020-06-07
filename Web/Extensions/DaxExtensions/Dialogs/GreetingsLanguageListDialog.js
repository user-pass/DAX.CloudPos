System.register(["PosApi/Consume/Dialogs"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Dialogs_1, ListDialog;
    return {
        setters: [
            function (Dialogs_1_1) {
                Dialogs_1 = Dialogs_1_1;
            }
        ],
        execute: function () {
            ListDialog = (function () {
                function ListDialog() {
                }
                ListDialog.show = function (context, listItems) {
                    var promise = new Promise(function (resolve, reject) {
                        var title;
                        var message;
                        var dataList;
                        dataList = [];
                        console.log(listItems().length);
                        var listInputDialogOptions = {
                            title: title,
                            subTitle: message,
                            items: dataList
                        };
                        var dialogRequest = new Dialogs_1.ShowListInputDialogClientRequest(listInputDialogOptions);
                        context.runtime.executeAsync(dialogRequest)
                            .then(function (result) {
                            if (!result.canceled) {
                                var selectedItem = result.data.result.value;
                                resolve(selectedItem);
                            }
                            else {
                                context.logger.logInformational("Canceled");
                                reject(null);
                            }
                        }).catch(function (reason) {
                            context.logger.logError(JSON.stringify(reason));
                            reject(reason);
                        });
                    });
                    return promise;
                };
                return ListDialog;
            }());
            exports_1("default", ListDialog);
        }
    };
});
//# sourceMappingURL=C:/RetailSDK/POS/Extensions/Dialogs/GreetingsLanguageListDialog.js.map