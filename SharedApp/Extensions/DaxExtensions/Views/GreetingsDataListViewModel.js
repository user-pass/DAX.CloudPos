System.register(["../DataServices/DataServiceRequests", "../DataServices/DataServiceEntities", "../BaseClasses/KnockoutExtensionViewModelBase", "../Dialogs/GreetingsLanguageListDialog"], function (exports_1, context_1) {
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
    var DataServiceRequests_1, DataServiceEntities_1, KnockoutExtensionViewModelBase_1, GreetingsLanguageListDialog_1, GreetingsDataListViewModel;
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
            },
            function (GreetingsLanguageListDialog_1_1) {
                GreetingsLanguageListDialog_1 = GreetingsLanguageListDialog_1_1;
            }
        ],
        execute: function () {
            GreetingsDataListViewModel = (function (_super) {
                __extends(GreetingsDataListViewModel, _super);
                function GreetingsDataListViewModel(_context) {
                    var _this = _super.call(this) || this;
                    _this.selectedLine = null;
                    _this.context = _context;
                    _this.invitations = ko.observableArray([]);
                    _this.languages = ko.observableArray([]);
                    return _this;
                }
                GreetingsDataListViewModel.prototype.dataListSelectionChanged = function (lines) {
                    this.selectedLine = lines[0];
                };
                GreetingsDataListViewModel.prototype.menuCommandClickDeleteSelected = function (args) {
                    var _this = this;
                    if (this.selectedLine) {
                        var dataService = new DataServiceRequests_1.InvitationController.DeleteInvitationRequest(this.selectedLine);
                        this.context.runtime.executeAsync(dataService).then(function (result) {
                            if (!result.canceled) {
                                _this.loadDataPage();
                            }
                        });
                    }
                    else {
                        alert("Line is not selected");
                    }
                };
                GreetingsDataListViewModel.prototype.menuCommandClickDeleteAll = function (args) {
                    var _this = this;
                    var dataService = new DataServiceRequests_1.InvitationController.DeleteAllInvitationsRequest();
                    this.context.runtime.executeAsync(dataService).then(function (result) {
                        if (!result.canceled) {
                            _this.loadDataPage();
                        }
                    });
                };
                GreetingsDataListViewModel.prototype.menuCommandClickAddNewRecord = function (args) {
                    var _this = this;
                    var messageOptions = { label: "Please enter new message:" };
                    var messageText = "";
                    var corellationId;
                    var messageRequest = new Commerce.ShowTextInputDialogClientRequest(messageOptions, corellationId);
                    this.context.runtime.executeAsync(messageRequest).then(function (result) {
                        if (!result.canceled) {
                            messageText = result.data.result.value.toString();
                            GreetingsLanguageListDialog_1.default.show(_this.context, _this.languages);
                        }
                    });
                };
                GreetingsDataListViewModel.prototype.menuCommandClickUpdateSelected = function (args) {
                    var _this = this;
                    if (this.selectedLine) {
                        var messageOptions = { label: "Please enter new message:" };
                        var messageText_1 = "";
                        var languageOptions_1 = { label: "Please enter new language:" };
                        var languageText_1 = "";
                        var corellationId_1;
                        var messageRequest = new Commerce.ShowTextInputDialogClientRequest(messageOptions, corellationId_1);
                        this.context.runtime.executeAsync(messageRequest).then(function (result) {
                            if (!result.canceled) {
                                messageText_1 = result.data.result.value.toString();
                                var languageRequest = new Commerce.ShowTextInputDialogClientRequest(languageOptions_1, corellationId_1);
                                _this.context.runtime.executeAsync(languageRequest).then(function (result) {
                                    if (!result.canceled) {
                                        languageText_1 = result.data.result.value.toString();
                                        if (languageText_1) {
                                            var newInvitation = new DataServiceEntities_1.Entities.Invitation();
                                            newInvitation.Language = languageText_1;
                                            newInvitation.Message = messageText_1;
                                            newInvitation.Id = _this.selectedLine.Id;
                                            var dataService = new DataServiceRequests_1.InvitationController.UpdateInvitationRequest(newInvitation);
                                            _this.context.runtime.executeAsync(dataService).then(function (result) {
                                                if (!result.canceled) {
                                                    _this.loadDataPage();
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        });
                    }
                    else {
                        alert("Line is not selected");
                    }
                };
                GreetingsDataListViewModel.prototype.loadDataPage = function () {
                    var _this = this;
                    var dataService = new DataServiceRequests_1.InvitationController.GetAllInvitationsRequest();
                    this.context.runtime.executeAsync(dataService).then(function (result) {
                        _this.invitations(result.data.result);
                    });
                };
                GreetingsDataListViewModel.prototype.loadLanguages = function () {
                    var _this = this;
                    var dataService = new DataServiceRequests_1.LanguageController.GetAllLanguagesRequest();
                    this.context.runtime.executeAsync(dataService).then(function (result) {
                        _this.languages(result.data.result);
                    });
                };
                return GreetingsDataListViewModel;
            }(KnockoutExtensionViewModelBase_1.default));
            exports_1("default", GreetingsDataListViewModel);
        }
    };
});
//# sourceMappingURL=C:/RetailSDK/POS/Extensions/Views/GreetingsDataListViewModel.js.map