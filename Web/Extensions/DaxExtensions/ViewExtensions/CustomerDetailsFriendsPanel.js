System.register(["PosApi/Extend/Views/CustomerDetailsView", "PosApi/Entities"], function (exports_1, context_1) {
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
    var CustomerDetailsView_1, Entities_1, CustomerDetailsFriendsPanel;
    return {
        setters: [
            function (CustomerDetailsView_1_1) {
                CustomerDetailsView_1 = CustomerDetailsView_1_1;
            },
            function (Entities_1_1) {
                Entities_1 = Entities_1_1;
            }
        ],
        execute: function () {
            CustomerDetailsFriendsPanel = (function (_super) {
                __extends(CustomerDetailsFriendsPanel, _super);
                function CustomerDetailsFriendsPanel(id, context) {
                    var _this = _super.call(this, id, context) || this;
                    _this.custIdField = ko.observable("");
                    _this.custTypeField = ko.observable("");
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
                    this.isVisible = true;
                    var securedString = state.customer.RecordId.toString().slice(0, -4) + '****';
                    this.custIdField(securedString);
                    if (state.customer.CustomerTypeValue == Entities_1.ProxyEntities.CustomerType.Person) {
                        this.custTypeField("Person");
                    }
                    else {
                        if (state.customer.CustomerTypeValue == Entities_1.ProxyEntities.CustomerType.Organization) {
                            this.custTypeField("Organization");
                        }
                        else {
                            this.custTypeField("None");
                        }
                    }
                };
                return CustomerDetailsFriendsPanel;
            }(CustomerDetailsView_1.CustomerDetailsCustomControlBase));
            CustomerDetailsFriendsPanel.TEMPLATE_ID = "CustomerDetails_DaxExtension";
            exports_1("default", CustomerDetailsFriendsPanel);
        }
    };
});
//# sourceMappingURL=C:/RetailSDK/POS/Extensions/ViewExtensions/CustomerDetailsFriendsPanel.js.map