System.register(["PosApi/Extend/Views/CustomerDetailsView", "PosApi/Consume/Customer", "PosApi/Entities", "PosApi/TypeExtensions", "PosUISdk/Controls/DataList"], function (exports_1, context_1) {
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
    var CustomerDetailsView_1, Customer_1, Entities_1, TypeExtensions_1, DataList_1, CustomerDetailsFriendsPanel;
    return {
        setters: [
            function (CustomerDetailsView_1_1) {
                CustomerDetailsView_1 = CustomerDetailsView_1_1;
            },
            function (Customer_1_1) {
                Customer_1 = Customer_1_1;
            },
            function (Entities_1_1) {
                Entities_1 = Entities_1_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            },
            function (DataList_1_1) {
                DataList_1 = DataList_1_1;
            }
        ],
        execute: function () {
            CustomerDetailsFriendsPanel = (function (_super) {
                __extends(CustomerDetailsFriendsPanel, _super);
                function CustomerDetailsFriendsPanel(id, context) {
                    var _this = _super.call(this, id, context) || this;
                    _this.friends = ko.observableArray([]);
                    _this.title = ko.observable("");
                    _this.dataList = new DataList_1.DataList({
                        columns: [
                            {
                                title: "Account Number",
                                ratio: 40,
                                collapseOrder: 1,
                                minWidth: 100,
                                computeValue: function (value) {
                                    return value.AccountNumber;
                                }
                            },
                            {
                                title: "Name",
                                ratio: 60,
                                collapseOrder: 2,
                                minWidth: 100,
                                computeValue: function (value) {
                                    return value.Name;
                                }
                            }
                        ],
                        itemDataSource: _this.friends,
                        selectionMode: DataList_1.SelectionMode.InvokeOnly,
                        itemInvoked: _this._viewFriendDetails.bind(_this)
                    });
                    return _this;
                }
                CustomerDetailsFriendsPanel.prototype.onReady = function (element) {
                    ko.applyBindingsToNode(element, {
                        template: {
                            name: CustomerDetailsFriendsPanel.TEMPLATE_ID,
                            data: this
                        }
                    });
                };
                CustomerDetailsFriendsPanel.prototype.init = function (state) {
                    var _this = this;
                    this._state = state;
                    if (!this._state.isSelectionMode) {
                        this.isVisible = true;
                        this.title(this._state.customer.FirstName + "'s Friends");
                        var allFriendAccountNumbers = ["2001", "2002", "2003", "2004", "2005"];
                        var friendLoadPromises_1 = [];
                        var friends_1 = [];
                        allFriendAccountNumbers.forEach(function (friendAccountNumber) {
                            if (friendAccountNumber !== _this._state.customer.AccountNumber) {
                                var getFirstFriendRequest = new Customer_1.GetCustomerClientRequest(friendAccountNumber);
                                var loadPromise = _this.context.runtime.executeAsync(getFirstFriendRequest)
                                    .then(function (result) {
                                    if (!result.canceled) {
                                        friends_1.push(result.data.result);
                                    }
                                }).catch(function (reason) {
                                    _this.context.logger.logError("Failed to load customer information for customer with account number: " + friendAccountNumber);
                                });
                                friendLoadPromises_1.push(loadPromise);
                            }
                        });
                        Promise.all(friendLoadPromises_1).then(function () {
                            _this.friends(friends_1.sort(function (left, right) {
                                return TypeExtensions_1.StringExtensions.compare(left.AccountNumber, right.AccountNumber);
                            }));
                        });
                    }
                };
                CustomerDetailsFriendsPanel.prototype._viewFriendDetails = function (friend) {
                    var correlationId = this.context.logger.getNewCorrelationId();
                    this.context.logger.logInformational("The view friend details button was clicked on the customer details friends panel.", correlationId);
                    var customerDetailsOptions = new Entities_1.ClientEntities.CustomerDetailsNavigationParameters(friend.AccountNumber, correlationId);
                    this.context.navigator.navigateToPOSView("CustomerDetailsView", customerDetailsOptions);
                };
                return CustomerDetailsFriendsPanel;
            }(CustomerDetailsView_1.CustomerDetailsCustomControlBase));
            CustomerDetailsFriendsPanel.TEMPLATE_ID = "Microsot_Pos_Extensibility_Samples_CustomerDetailsFriendsPanel";
            exports_1("default", CustomerDetailsFriendsPanel);
        }
    };
});
//# sourceMappingURL=C:/RetailSDK/POS/Extensions/Views/CustomerDetailsFriendsPanel.js.map