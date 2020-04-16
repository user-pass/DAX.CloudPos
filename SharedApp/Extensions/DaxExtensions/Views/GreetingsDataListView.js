System.register(["PosApi/Create/Views", "PosUISdk/Controls/HeaderSplitView", "PosUISdk/Controls/DataList", "PosUISdk/Controls/Menu", "../DataServices/DataServiceRequests", "DataServices/DataServiceEntities"], function (exports_1, context_1) {
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
    var NewView, HeaderSplitView, DataList, Menu, DataServiceRequests_1, DataServiceEntities_1, GreetingsDataListView;
    return {
        setters: [
            function (NewView_1) {
                NewView = NewView_1;
            },
            function (HeaderSplitView_1) {
                HeaderSplitView = HeaderSplitView_1;
            },
            function (DataList_1) {
                DataList = DataList_1;
            },
            function (Menu_1) {
                Menu = Menu_1;
            },
            function (DataServiceRequests_1_1) {
                DataServiceRequests_1 = DataServiceRequests_1_1;
            },
            function (DataServiceEntities_1_1) {
                DataServiceEntities_1 = DataServiceEntities_1_1;
            }
        ],
        execute: function () {
            GreetingsDataListView = (function (_super) {
                __extends(GreetingsDataListView, _super);
                function GreetingsDataListView(context) {
                    var _this = _super.call(this, context, false) || this;
                    _this.headerSplitView = new HeaderSplitView.HeaderSplitView({
                        title: "Invitation Table View"
                    });
                    var dataListDataSource = {
                        pageSize: 5,
                        loadDataPage: _this.loadDataPage.bind(_this)
                    };
                    _this.dataList = new DataList.DataList({
                        columns: [
                            {
                                title: "Message",
                                ratio: 40,
                                collapseOrder: 3,
                                minWidth: 100,
                                computeValue: function (value) {
                                    return value.Message;
                                }
                            },
                            {
                                title: "Language",
                                ratio: 30,
                                collapseOrder: 1,
                                minWidth: 100,
                                computeValue: function (value) {
                                    return value.Language;
                                }
                            },
                            {
                                title: "Record ID",
                                ratio: 30,
                                collapseOrder: 2,
                                minWidth: 100,
                                computeValue: function (value) {
                                    return value.Id;
                                }
                            }
                        ],
                        itemDataSource: dataListDataSource,
                        selectionMode: DataList.SelectionMode.SingleSelect,
                        selectionChanged: _this.dataListSelectionChanged.bind(_this),
                        autoSelectFirstItem: false
                    });
                    _this.menu = new Menu.Menu({
                        commands: [
                            {
                                id: "deleteSelected",
                                label: "Delete selected record",
                                onClick: _this.menuCommandClickDeleteSelected.bind(_this)
                            },
                            {
                                id: "deleteAll",
                                label: "Delete all records",
                                onClick: _this.menuCommandClickDeleteAll.bind(_this)
                            },
                            {
                                id: "addNew",
                                label: "Add new record",
                                onClick: _this.menuCommandClickAddNewRecord.bind(_this)
                            }
                        ]
                    });
                    return _this;
                }
                GreetingsDataListView.prototype.onReady = function (element) {
                    ko.applyBindingsToNode(element, {
                        template: {
                            name: GreetingsDataListView.TEMPLATE_ID,
                            data: this
                        }
                    });
                };
                GreetingsDataListView.prototype.showMenu = function (controller, eventArgs) {
                    this.menu.show(event.currentTarget);
                };
                GreetingsDataListView.prototype.dataListSelectionChanged = function (lines) {
                };
                GreetingsDataListView.prototype.loadDataPage = function () {
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
                GreetingsDataListView.prototype.menuCommandClickDeleteSelected = function (args) {
                    this.loadDataPage();
                };
                GreetingsDataListView.prototype.menuCommandClickDeleteAll = function (args) {
                    var dataService = new DataServiceRequests_1.InvitationController.DeleteAllInvitationsRequest();
                    this.context.runtime.executeAsync(dataService);
                };
                GreetingsDataListView.prototype.menuCommandClickAddNewRecord = function (args) {
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
                                    var newInvitation = new DataServiceEntities_1.Entities.Invitation();
                                    newInvitation.Language = languageText;
                                    newInvitation.Message = messageText;
                                }
                            });
                        }
                    });
                };
                return GreetingsDataListView;
            }(NewView.ExtensionViewControllerBase));
            GreetingsDataListView.TEMPLATE_ID = "GreetingsDataList_DaxExtension";
            exports_1("default", GreetingsDataListView);
        }
    };
});
//# sourceMappingURL=C:/RetailSDK/POS/Extensions/Views/GreetingsDataListView.js.map