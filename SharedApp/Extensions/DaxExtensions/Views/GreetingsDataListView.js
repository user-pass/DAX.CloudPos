System.register(["PosUISdk/Controls/HeaderSplitView", "PosUISdk/Controls/Menu", "PosUISdk/Controls/DataList", "../Views/GreetingsDataListViewModel", "../BaseClasses/KnockoutExtensionViewControllerBase"], function (exports_1, context_1) {
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
    var HeaderSplitView, Menu, DataList_1, GreetingsDataListViewModel_1, KnockoutExtensionViewControllerBase_1, GreetingsDataListView;
    return {
        setters: [
            function (HeaderSplitView_1) {
                HeaderSplitView = HeaderSplitView_1;
            },
            function (Menu_1) {
                Menu = Menu_1;
            },
            function (DataList_1_1) {
                DataList_1 = DataList_1_1;
            },
            function (GreetingsDataListViewModel_1_1) {
                GreetingsDataListViewModel_1 = GreetingsDataListViewModel_1_1;
            },
            function (KnockoutExtensionViewControllerBase_1_1) {
                KnockoutExtensionViewControllerBase_1 = KnockoutExtensionViewControllerBase_1_1;
            }
        ],
        execute: function () {
            GreetingsDataListView = (function (_super) {
                __extends(GreetingsDataListView, _super);
                function GreetingsDataListView(context) {
                    var _this = _super.call(this, context, true) || this;
                    _this.viewModel = new GreetingsDataListViewModel_1.default(context);
                    _this.headerSplitView = new HeaderSplitView.HeaderSplitView({
                        title: "Invitation Table View"
                    });
                    var invitationDataListOptions = {
                        autoSelectFirstItem: false,
                        selectionMode: DataList_1.SelectionMode.SingleSelect,
                        selectionChanged: _this.viewModel.dataListSelectionChanged,
                        itemDataSource: _this.viewModel.invitations,
                        columns: [
                            {
                                title: "Message",
                                ratio: 50,
                                collapseOrder: 2,
                                minWidth: 100,
                                computeValue: function (value) {
                                    return value.Message;
                                }
                            },
                            {
                                title: "Language",
                                ratio: 50,
                                collapseOrder: 1,
                                minWidth: 100,
                                computeValue: function (value) {
                                    return value.Language;
                                }
                            }
                        ]
                    };
                    _this.dataList = new DataList_1.DataList(invitationDataListOptions);
                    _this.menu = new Menu.Menu({
                        commands: [
                            {
                                id: "deleteSelected",
                                label: "Delete selected record",
                                onClick: _this.viewModel.menuCommandClickDeleteSelected.bind(_this)
                            },
                            {
                                id: "deleteAll",
                                label: "Delete all records",
                                onClick: _this.viewModel.menuCommandClickDeleteAll.bind(_this)
                            },
                            {
                                id: "addNew",
                                label: "Add new record",
                                onClick: _this.viewModel.menuCommandClickAddNewRecord.bind(_this)
                            },
                            {
                                id: "updateSelected",
                                label: "Update selected record",
                                onClick: _this.viewModel.menuCommandClickUpdateSelected.bind(_this)
                            }
                        ]
                    });
                    return _this;
                }
                GreetingsDataListView.prototype.onReady = function (element) {
                    _super.prototype.onReady.call(this, element);
                    this.viewModel.loadDataPage();
                };
                GreetingsDataListView.prototype.showMenu = function (controller, eventArgs) {
                    this.menu.show(event.currentTarget);
                };
                return GreetingsDataListView;
            }(KnockoutExtensionViewControllerBase_1.default));
            exports_1("default", GreetingsDataListView);
        }
    };
});
//# sourceMappingURL=C:/RetailSDK/POS/Extensions/Views/GreetingsDataListView.js.map