System.register(["../DataServices/DataServiceRequests", "DataServices/DataServiceEntities", "../BaseClasses/KnockoutExtensionViewModelBase"], function (exports_1, context_1) {
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
    var DataServiceRequests_1, DataServiceEntities_1, KnockoutExtensionViewModelBase_1, GreetingsDataListViewModel;
    return {
        setters: [
            function (DataServiceRequests_1_1) {
                DataServiceRequests_1 = DataServiceRequests_1_1;
            },
            function (DataServiceEntities_1_1) {
                DataServiceEntities_1 = DataServiceEntities_1_1;
            },
            function (KnockoutExtensionViewModelBase_1_1) {
                KnockoutExtensionViewModelBase_1 = KnockoutExtensionViewModelBase_1_1;
            }
        ],
        execute: function () {
            GreetingsDataListViewModel = (function (_super) {
                __extends(GreetingsDataListViewModel, _super);
                function GreetingsDataListViewModel(_context) {
                    var _this = _super.call(this) || this;
                    _this.context = _context;
                    return _this;
                }
                GreetingsDataListViewModel.prototype.menuCommandClickDeleteSelected = function (args, view) {
                    var dataService = new DataServiceRequests_1.InvitationController.DeleteInvitationRequest(view.selectedLine);
                    this.context.runtime.executeAsync(dataService);
                };
                GreetingsDataListViewModel.prototype.menuCommandClickDeleteAll = function (args) {
                    var dataService = new DataServiceRequests_1.InvitationController.DeleteAllInvitationsRequest();
                    this.context.runtime.executeAsync(dataService);
                };
                GreetingsDataListViewModel.prototype.menuCommandClickAddNewRecord = function (args) {
                    var _this = this;
                    var messageOptions = { label: "Please enter new message:" };
                    var messageText = "";
                    var languageOptions = { label: "Please enter new language:" };
                    var languageText = "";
                    var corellationId;
                    var messageRequest = new Commerce.ShowTextInputDialogClientRequest(messageOptions, corellationId);
                    this.context.runtime.executeAsync(messageRequest).then(function (result) {
                        if (!result.canceled) {
                            messageText = result.data.result.value.toString();
                            var languageRequest = new Commerce.ShowTextInputDialogClientRequest(languageOptions, corellationId);
                            _this.context.runtime.executeAsync(languageRequest).then(function (result) {
                                if (!result.canceled) {
                                    languageText = result.data.result.value.toString();
                                    if (languageText) {
                                        var newInvitation = new DataServiceEntities_1.Entities.Invitation();
                                        newInvitation.Language = languageText;
                                        newInvitation.Message = messageText;
                                    }
                                }
                            });
                        }
                    });
                };
                GreetingsDataListViewModel.prototype.loadDataPage = function () {
                    var _this = this;
                    var promise = new Promise(function (resolve) {
                        var dataService = new DataServiceRequests_1.InvitationController.GetAllInvitationsRequest();
                        _this.context.runtime.executeAsync(dataService).then(function (result) {
                            setTimeout(function () {
                                var pageData = result.data.result;
                                resolve(pageData);
                            }, 1000);
                        });
                    });
                    return promise;
                };
                return GreetingsDataListViewModel;
            }(KnockoutExtensionViewModelBase_1.default));
            exports_1("default", GreetingsDataListViewModel);
        }
    };
});
//# sourceMappingURL=C:/RetailSDK/POS/Extensions/Views/GreetingsDataListViewModel.js.map