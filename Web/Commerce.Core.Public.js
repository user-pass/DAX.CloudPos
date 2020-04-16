"use strict";
var Commerce;
(function (Commerce) {
    "use strict";
    var Response = (function () {
        function Response() {
            this._responseId = window.performance.now().toString();
        }
        Object.defineProperty(Response.prototype, "responseId", {
            get: function () {
                return this._responseId;
            },
            enumerable: true,
            configurable: true
        });
        return Response;
    }());
    Commerce.Response = Response;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce_1) {
    "use strict";
    var Request = (function () {
        function Request(correlationId) {
            if (!Commerce_1.ObjectExtensions.isString(correlationId) || Commerce_1.StringExtensions.isNullOrWhitespace(correlationId)) {
                correlationId = Commerce.LoggerHelper.getNewCorrelationId();
            }
            this.correlationId = correlationId;
            this._requestId = window.performance.now().toString();
        }
        Object.defineProperty(Request.prototype, "requestId", {
            get: function () {
                return this._requestId;
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    Commerce_1.Request = Request;
})(Commerce || (Commerce = {}));
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Commerce;
(function (Commerce) {
    var DataService;
    (function (DataService) {
        var DataServiceRequest = (function (_super) {
            __extends(DataServiceRequest, _super);
            function DataServiceRequest(correlationId) {
                return _super.call(this, correlationId) || this;
            }
            Object.defineProperty(DataServiceRequest.prototype, "entitySet", {
                get: function () {
                    return this._entitySet;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DataServiceRequest.prototype, "entityType", {
                get: function () {
                    return this._entityType;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DataServiceRequest.prototype, "keys", {
                get: function () {
                    return this._keys;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DataServiceRequest.prototype, "method", {
                get: function () {
                    return this._method;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DataServiceRequest.prototype, "parameters", {
                get: function () {
                    return this._parameters;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DataServiceRequest.prototype, "isAction", {
                get: function () {
                    return this._isAction;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DataServiceRequest.prototype, "returnType", {
                get: function () {
                    return this._returnType;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DataServiceRequest.prototype, "isReturnTypeCollection", {
                get: function () {
                    return this._isReturnTypeCollection;
                },
                enumerable: true,
                configurable: true
            });
            return DataServiceRequest;
        }(Commerce.Request));
        DataService.DataServiceRequest = DataServiceRequest;
    })(DataService = Commerce.DataService || (Commerce.DataService = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var DataService;
    (function (DataService) {
        "use strict";
        var DataServiceResponse = (function (_super) {
            __extends(DataServiceResponse, _super);
            function DataServiceResponse() {
                return _super.call(this) || this;
            }
            return DataServiceResponse;
        }(Commerce.Response));
        DataService.DataServiceResponse = DataServiceResponse;
    })(DataService = Commerce.DataService || (Commerce.DataService = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Extensibility;
    (function (Extensibility) {
        var CustomGridColumnAlignment;
        (function (CustomGridColumnAlignment) {
            CustomGridColumnAlignment[CustomGridColumnAlignment["Left"] = 0] = "Left";
            CustomGridColumnAlignment[CustomGridColumnAlignment["Right"] = 1] = "Right";
        })(CustomGridColumnAlignment = Extensibility.CustomGridColumnAlignment || (Extensibility.CustomGridColumnAlignment = {}));
    })(Extensibility = Commerce.Extensibility || (Commerce.Extensibility = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Client;
    (function (Client) {
        var Entities;
        (function (Entities) {
            "use strict";
            var ExtensibleEnumerationBase = (function () {
                function ExtensibleEnumerationBase() {
                }
                Object.defineProperty(ExtensibleEnumerationBase, "extensibleEnumerationByNameGetter", {
                    set: function (getter) {
                        ExtensibleEnumerationBase._getExtensibleEnumerationByName = getter;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExtensibleEnumerationBase, "extensibleEnumerationByValueGetter", {
                    set: function (getter) {
                        ExtensibleEnumerationBase._getExtensibleEnumerationByValue = getter;
                    },
                    enumerable: true,
                    configurable: true
                });
                ExtensibleEnumerationBase.getValues = function () {
                    var _this = this;
                    var enumValueNames = Object.keys(this).filter(function (key) {
                        return !Commerce.ObjectExtensions.isNullOrUndefined(_this[key]) && !Commerce.StringExtensions.isNullOrWhitespace(_this[key].Name)
                            && Commerce.ObjectExtensions.isNumber(_this[key].Value);
                    });
                    return enumValueNames.map(function (key) {
                        return _this[key];
                    }).sort(function (left, right) {
                        return left.Value - right.Value;
                    });
                };
                Object.defineProperty(ExtensibleEnumerationBase.prototype, "Value", {
                    get: function () {
                        var extensibleEnumeration = ExtensibleEnumerationBase._getExtensibleEnumerationByName(this.TypeName, this.Name);
                        if (Commerce.ObjectExtensions.isNullOrUndefined(extensibleEnumeration)) {
                            return null;
                        }
                        return extensibleEnumeration.Value;
                    },
                    enumerable: true,
                    configurable: true
                });
                ExtensibleEnumerationBase.prototype.equals = function (value) {
                    if (Commerce.ObjectExtensions.isNumber(value)) {
                        return this.equalsValue(value);
                    }
                    else {
                        return this.equalsEnum(value);
                    }
                };
                ExtensibleEnumerationBase.getByValueUtility = function (typeName, value) {
                    return ExtensibleEnumerationBase._getExtensibleEnumerationByValue(typeName, value);
                };
                ExtensibleEnumerationBase.getByNameUtility = function (typeName, name) {
                    return ExtensibleEnumerationBase._getExtensibleEnumerationByName(typeName, name);
                };
                ExtensibleEnumerationBase.prototype.equalsEnum = function (value) {
                    var namesMatch = this.Name === value.Name;
                    var valuesMatch = this.Value === value.Value;
                    return namesMatch && valuesMatch;
                };
                ExtensibleEnumerationBase.prototype.equalsValue = function (value) {
                    return value === this.Value;
                };
                return ExtensibleEnumerationBase;
            }());
            Entities.ExtensibleEnumerationBase = ExtensibleEnumerationBase;
        })(Entities = Client.Entities || (Client.Entities = {}));
    })(Client = Commerce.Client || (Commerce.Client = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Client;
    (function (Client) {
        var Entities;
        (function (Entities) {
            "use strict";
            var CustomerSearchFieldType = (function (_super) {
                __extends(CustomerSearchFieldType, _super);
                function CustomerSearchFieldType(name) {
                    var _this = _super.call(this) || this;
                    _this._valueName = name;
                    Object.freeze(_this);
                    return _this;
                }
                Object.defineProperty(CustomerSearchFieldType.prototype, "TypeName", {
                    get: function () {
                        return CustomerSearchFieldType._typeName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CustomerSearchFieldType.prototype, "Name", {
                    get: function () {
                        return this._valueName;
                    },
                    enumerable: true,
                    configurable: true
                });
                CustomerSearchFieldType.getByValue = function (value) {
                    return Entities.ExtensibleEnumerationBase.getByValueUtility(CustomerSearchFieldType._typeName, value);
                };
                CustomerSearchFieldType.getByName = function (name) {
                    return Entities.ExtensibleEnumerationBase.getByNameUtility(CustomerSearchFieldType._typeName, name);
                };
                CustomerSearchFieldType.AccountNumber = new CustomerSearchFieldType("AccountNumber");
                CustomerSearchFieldType.Address = new CustomerSearchFieldType("Address");
                CustomerSearchFieldType.Default = new CustomerSearchFieldType("Default");
                CustomerSearchFieldType.Email = new CustomerSearchFieldType("Email");
                CustomerSearchFieldType.LoyaltyCardNumber = new CustomerSearchFieldType("LoyaltyCardNumber");
                CustomerSearchFieldType.Name = new CustomerSearchFieldType("Name");
                CustomerSearchFieldType.PhoneNumber = new CustomerSearchFieldType("PhoneNumber");
                CustomerSearchFieldType._typeName = "CustomerSearchFieldType";
                return CustomerSearchFieldType;
            }(Entities.ExtensibleEnumerationBase));
            Entities.CustomerSearchFieldType = CustomerSearchFieldType;
        })(Entities = Client.Entities || (Client.Entities = {}));
    })(Client = Commerce.Client || (Commerce.Client = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Client;
    (function (Client) {
        var Entities;
        (function (Entities) {
            "use strict";
            var ExtensibleAddressType = (function (_super) {
                __extends(ExtensibleAddressType, _super);
                function ExtensibleAddressType(name) {
                    var _this = _super.call(this) || this;
                    _this._valueName = name;
                    Object.freeze(_this);
                    return _this;
                }
                Object.defineProperty(ExtensibleAddressType.prototype, "TypeName", {
                    get: function () {
                        return ExtensibleAddressType._typeName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExtensibleAddressType.prototype, "Name", {
                    get: function () {
                        return this._valueName;
                    },
                    enumerable: true,
                    configurable: true
                });
                ExtensibleAddressType.getByValue = function (value) {
                    return Entities.ExtensibleEnumerationBase.getByValueUtility(ExtensibleAddressType._typeName, value);
                };
                ExtensibleAddressType.None = new ExtensibleAddressType("None");
                ExtensibleAddressType.Invoice = new ExtensibleAddressType("Invoice");
                ExtensibleAddressType.Delivery = new ExtensibleAddressType("Delivery");
                ExtensibleAddressType.AltDlv = new ExtensibleAddressType("AltDlv");
                ExtensibleAddressType.SWIFT = new ExtensibleAddressType("SWIFT");
                ExtensibleAddressType.Payment = new ExtensibleAddressType("Payment");
                ExtensibleAddressType.Service = new ExtensibleAddressType("Service");
                ExtensibleAddressType.Home = new ExtensibleAddressType("Home");
                ExtensibleAddressType.Other = new ExtensibleAddressType("Other");
                ExtensibleAddressType.Business = new ExtensibleAddressType("Business");
                ExtensibleAddressType.RemitTo = new ExtensibleAddressType("RemitTo");
                ExtensibleAddressType.ShipCarrierThirdPartyShipping = new ExtensibleAddressType("ShipCarrierThirdPartyShipping");
                ExtensibleAddressType.Statement = new ExtensibleAddressType("Statement");
                ExtensibleAddressType.FixedAsset = new ExtensibleAddressType("FixedAsset");
                ExtensibleAddressType.Onetime = new ExtensibleAddressType("Onetime");
                ExtensibleAddressType.Recruit = new ExtensibleAddressType("Recruit");
                ExtensibleAddressType.SMS = new ExtensibleAddressType("SMS");
                ExtensibleAddressType.Lading_W = new ExtensibleAddressType("Lading_W");
                ExtensibleAddressType.Unlading_W = new ExtensibleAddressType("Unlading_W");
                ExtensibleAddressType.Consignment_IN = new ExtensibleAddressType("Consignment_IN");
                ExtensibleAddressType._typeName = "ExtensibleAddressType";
                return ExtensibleAddressType;
            }(Entities.ExtensibleEnumerationBase));
            Entities.ExtensibleAddressType = ExtensibleAddressType;
        })(Entities = Client.Entities || (Client.Entities = {}));
    })(Client = Commerce.Client || (Commerce.Client = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Client;
    (function (Client) {
        var Entities;
        (function (Entities) {
            "use strict";
            var ExtensibleAuditEventType = (function (_super) {
                __extends(ExtensibleAuditEventType, _super);
                function ExtensibleAuditEventType(name) {
                    var _this = _super.call(this) || this;
                    _this._valueName = name;
                    Object.freeze(_this);
                    return _this;
                }
                Object.defineProperty(ExtensibleAuditEventType.prototype, "TypeName", {
                    get: function () {
                        return ExtensibleAuditEventType._typeName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExtensibleAuditEventType.prototype, "Name", {
                    get: function () {
                        return this._valueName;
                    },
                    enumerable: true,
                    configurable: true
                });
                ExtensibleAuditEventType.getByValue = function (value) {
                    return Entities.ExtensibleEnumerationBase.getByValueUtility(ExtensibleAuditEventType._typeName, value);
                };
                ExtensibleAuditEventType.Unknown = new ExtensibleAuditEventType("Unknown");
                ExtensibleAuditEventType.UserLogOn = new ExtensibleAuditEventType("LogOn");
                ExtensibleAuditEventType.UserLogOff = new ExtensibleAuditEventType("LogOff");
                ExtensibleAuditEventType.ManagerOverride = new ExtensibleAuditEventType("ManagerOverride");
                ExtensibleAuditEventType.ItemVoid = new ExtensibleAuditEventType("ItemVoid");
                ExtensibleAuditEventType.TransactionVoid = new ExtensibleAuditEventType("TransactionVoid");
                ExtensibleAuditEventType.PrintReceiptCopy = new ExtensibleAuditEventType("PrintReceiptCopy");
                ExtensibleAuditEventType.PriceCheck = new ExtensibleAuditEventType("PriceCheck");
                ExtensibleAuditEventType.TaxOverride = new ExtensibleAuditEventType("TaxOverride");
                ExtensibleAuditEventType.QuantityCorrection = new ExtensibleAuditEventType("QuantityCorrection");
                ExtensibleAuditEventType.PurgeTransactionsData = new ExtensibleAuditEventType("PurgeTransactionsData");
                ExtensibleAuditEventType._typeName = "ExtensibleAuditEventType";
                return ExtensibleAuditEventType;
            }(Entities.ExtensibleEnumerationBase));
            Entities.ExtensibleAuditEventType = ExtensibleAuditEventType;
        })(Entities = Client.Entities || (Client.Entities = {}));
    })(Client = Commerce.Client || (Commerce.Client = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Client;
    (function (Client) {
        var Entities;
        (function (Entities) {
            "use strict";
            var ExtensibleLoyaltyRewardPointActivityEntryType = (function (_super) {
                __extends(ExtensibleLoyaltyRewardPointActivityEntryType, _super);
                function ExtensibleLoyaltyRewardPointActivityEntryType(name) {
                    var _this = _super.call(this) || this;
                    _this._valueName = name;
                    Object.freeze(_this);
                    return _this;
                }
                Object.defineProperty(ExtensibleLoyaltyRewardPointActivityEntryType.prototype, "TypeName", {
                    get: function () {
                        return ExtensibleLoyaltyRewardPointActivityEntryType._typeName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExtensibleLoyaltyRewardPointActivityEntryType.prototype, "Name", {
                    get: function () {
                        return this._valueName;
                    },
                    enumerable: true,
                    configurable: true
                });
                ExtensibleLoyaltyRewardPointActivityEntryType.getByValue = function (value) {
                    return Entities.ExtensibleEnumerationBase.getByValueUtility(ExtensibleLoyaltyRewardPointActivityEntryType._typeName, value);
                };
                ExtensibleLoyaltyRewardPointActivityEntryType.Earned = new ExtensibleLoyaltyRewardPointActivityEntryType("Earned");
                ExtensibleLoyaltyRewardPointActivityEntryType.Returned = new ExtensibleLoyaltyRewardPointActivityEntryType("Returned");
                ExtensibleLoyaltyRewardPointActivityEntryType.Redeemed = new ExtensibleLoyaltyRewardPointActivityEntryType("Redeemed");
                ExtensibleLoyaltyRewardPointActivityEntryType.Refunded = new ExtensibleLoyaltyRewardPointActivityEntryType("Refunded");
                ExtensibleLoyaltyRewardPointActivityEntryType.Adjusted = new ExtensibleLoyaltyRewardPointActivityEntryType("Adjusted");
                ExtensibleLoyaltyRewardPointActivityEntryType.Expired = new ExtensibleLoyaltyRewardPointActivityEntryType("Expired");
                ExtensibleLoyaltyRewardPointActivityEntryType.Pending = new ExtensibleLoyaltyRewardPointActivityEntryType("Pending");
                ExtensibleLoyaltyRewardPointActivityEntryType.Expiring = new ExtensibleLoyaltyRewardPointActivityEntryType("Expiring");
                ExtensibleLoyaltyRewardPointActivityEntryType._typeName = "ExtensibleLoyaltyRewardPointActivityEntryType";
                return ExtensibleLoyaltyRewardPointActivityEntryType;
            }(Entities.ExtensibleEnumerationBase));
            Entities.ExtensibleLoyaltyRewardPointActivityEntryType = ExtensibleLoyaltyRewardPointActivityEntryType;
        })(Entities = Client.Entities || (Client.Entities = {}));
    })(Client = Commerce.Client || (Commerce.Client = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Client;
    (function (Client) {
        var Entities;
        (function (Entities) {
            "use strict";
            var ExtensibleSalesTransactionType = (function (_super) {
                __extends(ExtensibleSalesTransactionType, _super);
                function ExtensibleSalesTransactionType(name) {
                    var _this = _super.call(this) || this;
                    _this._valueName = name;
                    Object.freeze(_this);
                    return _this;
                }
                Object.defineProperty(ExtensibleSalesTransactionType.prototype, "TypeName", {
                    get: function () {
                        return ExtensibleSalesTransactionType._typeName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExtensibleSalesTransactionType.prototype, "Name", {
                    get: function () {
                        return this._valueName;
                    },
                    enumerable: true,
                    configurable: true
                });
                ExtensibleSalesTransactionType.getByValue = function (value) {
                    return Entities.ExtensibleEnumerationBase.getByValueUtility(ExtensibleSalesTransactionType._typeName, value);
                };
                ExtensibleSalesTransactionType.AsyncCustomerOrder = new ExtensibleSalesTransactionType("AsyncCustomerOrder");
                ExtensibleSalesTransactionType.AsyncCustomerQuote = new ExtensibleSalesTransactionType("AsyncCustomerQuote");
                ExtensibleSalesTransactionType.CustomerOrder = new ExtensibleSalesTransactionType("CustomerOrder");
                ExtensibleSalesTransactionType.IncomeExpense = new ExtensibleSalesTransactionType("IncomeExpense");
                ExtensibleSalesTransactionType.Payment = new ExtensibleSalesTransactionType("Payment");
                ExtensibleSalesTransactionType.PendingSalesOrder = new ExtensibleSalesTransactionType("PendingSalesOrder");
                ExtensibleSalesTransactionType.Sales = new ExtensibleSalesTransactionType("Sales");
                ExtensibleSalesTransactionType._typeName = "ExtensibleSalesTransactionType";
                return ExtensibleSalesTransactionType;
            }(Entities.ExtensibleEnumerationBase));
            Entities.ExtensibleSalesTransactionType = ExtensibleSalesTransactionType;
        })(Entities = Client.Entities || (Client.Entities = {}));
    })(Client = Commerce.Client || (Commerce.Client = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Client;
    (function (Client) {
        var Entities;
        (function (Entities) {
            "use strict";
            var ExtensibleTransactionType = (function (_super) {
                __extends(ExtensibleTransactionType, _super);
                function ExtensibleTransactionType(name) {
                    var _this = _super.call(this) || this;
                    _this._valueName = name;
                    Object.freeze(_this);
                    return _this;
                }
                Object.defineProperty(ExtensibleTransactionType.prototype, "TypeName", {
                    get: function () {
                        return ExtensibleTransactionType._typeName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExtensibleTransactionType.prototype, "Name", {
                    get: function () {
                        return this._valueName;
                    },
                    enumerable: true,
                    configurable: true
                });
                ExtensibleTransactionType.getByValue = function (value) {
                    return Entities.ExtensibleEnumerationBase.getByValueUtility(ExtensibleTransactionType._typeName, value);
                };
                ExtensibleTransactionType.Logoff = new ExtensibleTransactionType("Logoff");
                ExtensibleTransactionType.Logon = new ExtensibleTransactionType("Logon");
                ExtensibleTransactionType.Sales = new ExtensibleTransactionType("Sales");
                ExtensibleTransactionType.Payment = new ExtensibleTransactionType("Payment");
                ExtensibleTransactionType.RemoveTender = new ExtensibleTransactionType("RemoveTender");
                ExtensibleTransactionType.FloatEntry = new ExtensibleTransactionType("FloatEntry");
                ExtensibleTransactionType.ChangeTender = new ExtensibleTransactionType("ChangeTender");
                ExtensibleTransactionType.TenderDeclaration = new ExtensibleTransactionType("TenderDeclaration");
                ExtensibleTransactionType.OpenDrawer = new ExtensibleTransactionType("OpenDrawer");
                ExtensibleTransactionType.SalesOrder = new ExtensibleTransactionType("SalesOrder");
                ExtensibleTransactionType.SalesInvoice = new ExtensibleTransactionType("SalesInvoice");
                ExtensibleTransactionType.BankDrop = new ExtensibleTransactionType("BankDrop");
                ExtensibleTransactionType.SafeDrop = new ExtensibleTransactionType("SafeDrop");
                ExtensibleTransactionType.IncomeExpense = new ExtensibleTransactionType("IncomeExpense");
                ExtensibleTransactionType.CustomerOrder = new ExtensibleTransactionType("CustomerOrder");
                ExtensibleTransactionType.StartingAmount = new ExtensibleTransactionType("StartingAmount");
                ExtensibleTransactionType.SuspendShift = new ExtensibleTransactionType("SuspendShift");
                ExtensibleTransactionType.SuspendedTransaction = new ExtensibleTransactionType("SuspendedTransaction");
                ExtensibleTransactionType.BlindCloseShift = new ExtensibleTransactionType("BlindCloseShift");
                ExtensibleTransactionType.CloseShift = new ExtensibleTransactionType("CloseShift");
                ExtensibleTransactionType.PrintX = new ExtensibleTransactionType("PrintX");
                ExtensibleTransactionType.PrintZ = new ExtensibleTransactionType("PrintZ");
                ExtensibleTransactionType.PendingSalesOrder = new ExtensibleTransactionType("PendingSalesOrder");
                ExtensibleTransactionType.KitDisassembly = new ExtensibleTransactionType("KitDisassembly");
                ExtensibleTransactionType.AsyncCustomerQuote = new ExtensibleTransactionType("AsyncCustomerQuote");
                ExtensibleTransactionType.AsyncCustomerOrder = new ExtensibleTransactionType("AsyncCustomerOrder");
                ExtensibleTransactionType._typeName = "ExtensibleTransactionType";
                return ExtensibleTransactionType;
            }(Entities.ExtensibleEnumerationBase));
            Entities.ExtensibleTransactionType = ExtensibleTransactionType;
        })(Entities = Client.Entities || (Client.Entities = {}));
    })(Client = Commerce.Client || (Commerce.Client = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Client;
    (function (Client) {
        var Entities;
        (function (Entities) {
            "use strict";
            var FulfillmentLineDeliveryType = (function (_super) {
                __extends(FulfillmentLineDeliveryType, _super);
                function FulfillmentLineDeliveryType(name) {
                    var _this = _super.call(this) || this;
                    _this._valueName = name;
                    Object.freeze(_this);
                    return _this;
                }
                Object.defineProperty(FulfillmentLineDeliveryType.prototype, "TypeName", {
                    get: function () {
                        return FulfillmentLineDeliveryType._typeName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FulfillmentLineDeliveryType.prototype, "Name", {
                    get: function () {
                        return this._valueName;
                    },
                    enumerable: true,
                    configurable: true
                });
                FulfillmentLineDeliveryType.getByValue = function (value) {
                    return Entities.ExtensibleEnumerationBase.getByValueUtility(FulfillmentLineDeliveryType._typeName, value);
                };
                FulfillmentLineDeliveryType.All = new FulfillmentLineDeliveryType("All");
                FulfillmentLineDeliveryType.StorePickup = new FulfillmentLineDeliveryType("StorePickup");
                FulfillmentLineDeliveryType.StoreShipping = new FulfillmentLineDeliveryType("StoreShipping");
                FulfillmentLineDeliveryType._typeName = "FulfillmentLineDeliveryType";
                return FulfillmentLineDeliveryType;
            }(Entities.ExtensibleEnumerationBase));
            Entities.FulfillmentLineDeliveryType = FulfillmentLineDeliveryType;
        })(Entities = Client.Entities || (Client.Entities = {}));
    })(Client = Commerce.Client || (Commerce.Client = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Client;
    (function (Client) {
        var Entities;
        (function (Entities) {
            "use strict";
            var FulfillmentLineStatus = (function (_super) {
                __extends(FulfillmentLineStatus, _super);
                function FulfillmentLineStatus(name) {
                    var _this = _super.call(this) || this;
                    _this._valueName = name;
                    Object.freeze(_this);
                    return _this;
                }
                Object.defineProperty(FulfillmentLineStatus.prototype, "TypeName", {
                    get: function () {
                        return FulfillmentLineStatus._typeName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FulfillmentLineStatus.prototype, "Name", {
                    get: function () {
                        return this._valueName;
                    },
                    enumerable: true,
                    configurable: true
                });
                FulfillmentLineStatus.getByValue = function (value) {
                    return Entities.ExtensibleEnumerationBase.getByValueUtility(FulfillmentLineStatus._typeName, value);
                };
                FulfillmentLineStatus.Unknown = new FulfillmentLineStatus("Unknown");
                FulfillmentLineStatus.Pending = new FulfillmentLineStatus("Pending");
                FulfillmentLineStatus.Accepted = new FulfillmentLineStatus("Accepted");
                FulfillmentLineStatus.Picking = new FulfillmentLineStatus("Picking");
                FulfillmentLineStatus.PartiallyPicked = new FulfillmentLineStatus("PartiallyPicked");
                FulfillmentLineStatus.Picked = new FulfillmentLineStatus("Picked");
                FulfillmentLineStatus.PartiallyPacked = new FulfillmentLineStatus("PartiallyPacked");
                FulfillmentLineStatus.Packed = new FulfillmentLineStatus("Packed");
                FulfillmentLineStatus.PartiallyInvoiced = new FulfillmentLineStatus("PartiallyInvoiced");
                FulfillmentLineStatus.Invoiced = new FulfillmentLineStatus("Invoiced");
                FulfillmentLineStatus.Rejected = new FulfillmentLineStatus("Rejected");
                FulfillmentLineStatus._typeName = "FulfillmentLineStatus";
                return FulfillmentLineStatus;
            }(Entities.ExtensibleEnumerationBase));
            Entities.FulfillmentLineStatus = FulfillmentLineStatus;
        })(Entities = Client.Entities || (Client.Entities = {}));
    })(Client = Commerce.Client || (Commerce.Client = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var ExtensibleEnumerations;
    (function (ExtensibleEnumerations) {
        "use strict";
    })(ExtensibleEnumerations = Commerce.ExtensibleEnumerations || (Commerce.ExtensibleEnumerations = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Peripherals;
    (function (Peripherals) {
        "use strict";
    })(Peripherals = Commerce.Peripherals || (Commerce.Peripherals = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Peripherals;
    (function (Peripherals) {
        "use strict";
        var NumPadInputBroker = (function () {
            function NumPadInputBroker() {
                this._listeners = [];
            }
            NumPadInputBroker.prototype.publish = function (event) {
                return this._listeners.some(function (listener) {
                    return listener(event);
                });
            };
            NumPadInputBroker.prototype.subscribe = function (listener) {
                if (!Commerce.ArrayExtensions.hasElement(this._listeners, listener)) {
                    this._listeners.push(listener);
                }
            };
            NumPadInputBroker.prototype.unsubscribe = function (listener) {
                var index = this._listeners.indexOf(listener);
                if (index >= 0) {
                    this._listeners.splice(index, 1);
                }
            };
            NumPadInputBroker.prototype.dispose = function () {
                this._listeners = [];
            };
            return NumPadInputBroker;
        }());
        Peripherals.NumPadInputBroker = NumPadInputBroker;
    })(Peripherals = Commerce.Peripherals || (Commerce.Peripherals = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var RequestHandler = (function () {
        function RequestHandler() {
        }
        return RequestHandler;
    }());
    Commerce.RequestHandler = RequestHandler;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Triggers;
    (function (Triggers) {
        "use strict";
        var Trigger = (function () {
            function Trigger() {
            }
            return Trigger;
        }());
        Triggers.Trigger = Trigger;
    })(Triggers = Commerce.Triggers || (Commerce.Triggers = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Triggers;
    (function (Triggers) {
        "use strict";
    })(Triggers = Commerce.Triggers || (Commerce.Triggers = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Triggers;
    (function (Triggers) {
        "use strict";
    })(Triggers = Commerce.Triggers || (Commerce.Triggers = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Triggers;
    (function (Triggers) {
        "use strict";
    })(Triggers = Commerce.Triggers || (Commerce.Triggers = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Triggers;
    (function (Triggers) {
        "use strict";
    })(Triggers = Commerce.Triggers || (Commerce.Triggers = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Triggers;
    (function (Triggers) {
        "use strict";
    })(Triggers = Commerce.Triggers || (Commerce.Triggers = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Triggers;
    (function (Triggers) {
        "use strict";
    })(Triggers = Commerce.Triggers || (Commerce.Triggers = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Triggers;
    (function (Triggers) {
        "use strict";
    })(Triggers = Commerce.Triggers || (Commerce.Triggers = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Triggers;
    (function (Triggers) {
        "use strict";
    })(Triggers = Commerce.Triggers || (Commerce.Triggers = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Triggers;
    (function (Triggers) {
        "use strict";
    })(Triggers = Commerce.Triggers || (Commerce.Triggers = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Triggers;
    (function (Triggers) {
        "use strict";
    })(Triggers = Commerce.Triggers || (Commerce.Triggers = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Triggers;
    (function (Triggers) {
        "use strict";
    })(Triggers = Commerce.Triggers || (Commerce.Triggers = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Triggers;
    (function (Triggers) {
        "use strict";
    })(Triggers = Commerce.Triggers || (Commerce.Triggers = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Triggers;
    (function (Triggers) {
        "use strict";
    })(Triggers = Commerce.Triggers || (Commerce.Triggers = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Triggers;
    (function (Triggers) {
        "use strict";
        var NonCancelableTriggerType = (function () {
            function NonCancelableTriggerType(value) {
                this._value = value;
                Object.freeze(this);
            }
            NonCancelableTriggerType.prototype.toString = function () {
                return this._value;
            };
            NonCancelableTriggerType.ApplicationStart = new NonCancelableTriggerType("ApplicationStart");
            NonCancelableTriggerType.ApplicationSuspend = new NonCancelableTriggerType("ApplicationSuspend");
            NonCancelableTriggerType.PostConnectionStatusChange = new NonCancelableTriggerType("PostConnectionStatusChange");
            NonCancelableTriggerType.PostLogOff = new NonCancelableTriggerType("PostLogOff");
            NonCancelableTriggerType.PostLogOn = new NonCancelableTriggerType("PostLogOn");
            NonCancelableTriggerType.PostLockTerminal = new NonCancelableTriggerType("PostLockTerminal");
            NonCancelableTriggerType.PostDeviceActivation = new NonCancelableTriggerType("PostDeviceActivation");
            NonCancelableTriggerType.PostRegisterAuditEvent = new NonCancelableTriggerType("PostRegisterAuditEvent");
            NonCancelableTriggerType.PostTenderDeclaration = new NonCancelableTriggerType("PostTenderDeclaration");
            NonCancelableTriggerType.PostFloatEntry = new NonCancelableTriggerType("PostFloatEntry");
            NonCancelableTriggerType.PostCustomerAdd = new NonCancelableTriggerType("PostCustomerAdd");
            NonCancelableTriggerType.PostCustomerClear = new NonCancelableTriggerType("PostCustomerClear");
            NonCancelableTriggerType.PostCustomerSave = new NonCancelableTriggerType("PostCustomerSave");
            NonCancelableTriggerType.PostCustomerSearch = new NonCancelableTriggerType("PostCustomerSearch");
            NonCancelableTriggerType.PostGetLoyaltyCardBalance = new NonCancelableTriggerType("PostGetLoyaltyCardBalance");
            NonCancelableTriggerType.PostAddCoupon = new NonCancelableTriggerType("PostAddCoupon");
            NonCancelableTriggerType.PostLineDiscountAmount = new NonCancelableTriggerType("PostLineDiscountAmount");
            NonCancelableTriggerType.PostLineDiscountPercent = new NonCancelableTriggerType("PostLineDiscountPercent");
            NonCancelableTriggerType.PostTotalDiscountAmount = new NonCancelableTriggerType("PostTotalDiscountAmount");
            NonCancelableTriggerType.PostTotalDiscountPercent = new NonCancelableTriggerType("PostTotalDiscountPercent");
            NonCancelableTriggerType.OperationFailure = new NonCancelableTriggerType("OperationFailure");
            NonCancelableTriggerType.PostOperation = new NonCancelableTriggerType("PostOperation");
            NonCancelableTriggerType.PostPayment = new NonCancelableTriggerType("PostPayment");
            NonCancelableTriggerType.PostVoidPayment = new NonCancelableTriggerType("PostVoidPayment");
            NonCancelableTriggerType.PostReceiptPrompt = new NonCancelableTriggerType("PostReceiptPrompt");
            NonCancelableTriggerType.PostClearQuantity = new NonCancelableTriggerType("PostClearQuantity");
            NonCancelableTriggerType.PostPriceOverride = new NonCancelableTriggerType("PostPriceOverride");
            NonCancelableTriggerType.PostProductSale = new NonCancelableTriggerType("PostProductSale");
            NonCancelableTriggerType.PostReturnProduct = new NonCancelableTriggerType("PostReturnProduct");
            NonCancelableTriggerType.PostSetQuantity = new NonCancelableTriggerType("PostSetQuantity");
            NonCancelableTriggerType.PostVoidProducts = new NonCancelableTriggerType("PostVoidProducts");
            NonCancelableTriggerType.PostPriceCheck = new NonCancelableTriggerType("PostPriceCheck");
            NonCancelableTriggerType.PostGetSerialNumber = new NonCancelableTriggerType("PostGetSerialNumber");
            NonCancelableTriggerType.PostOpenShift = new NonCancelableTriggerType("PostOpenShift");
            NonCancelableTriggerType.PostOverrideLineProductTax = new NonCancelableTriggerType("PostOverrideLineProductTax");
            NonCancelableTriggerType.PostOverrideTransactionTax = new NonCancelableTriggerType("PostOverrideTransactionTax");
            NonCancelableTriggerType.BeginTransaction = new NonCancelableTriggerType("BeginTransaction");
            NonCancelableTriggerType.PostEndTransaction = new NonCancelableTriggerType("PostEndTransaction");
            NonCancelableTriggerType.PostRecallTransaction = new NonCancelableTriggerType("PostRecallTransaction");
            NonCancelableTriggerType.PostReturnTransaction = new NonCancelableTriggerType("PostReturnTransaction");
            NonCancelableTriggerType.PostSuspendTransaction = new NonCancelableTriggerType("PostSuspendTransaction");
            NonCancelableTriggerType.PostVoidTransaction = new NonCancelableTriggerType("PostVoidTransaction");
            NonCancelableTriggerType.PostCartCheckoutTransaction = new NonCancelableTriggerType("PostCartCheckoutTransaction");
            NonCancelableTriggerType.PostRecallCustomerOrder = new NonCancelableTriggerType("PostRecallCustomerOrder");
            return NonCancelableTriggerType;
        }());
        Triggers.NonCancelableTriggerType = NonCancelableTriggerType;
        var CancelableTriggerType = (function () {
            function CancelableTriggerType(value) {
                this.value = value;
                Object.freeze(this);
            }
            CancelableTriggerType.prototype.toString = function () {
                return this.value;
            };
            CancelableTriggerType.PreLogOn = new CancelableTriggerType("PreLogOn");
            CancelableTriggerType.PreLockTerminal = new CancelableTriggerType("PreLockTerminal");
            CancelableTriggerType.PreRegisterAuditEvent = new CancelableTriggerType("PreRegisterAuditEvent");
            CancelableTriggerType.PreTenderDeclaration = new CancelableTriggerType("PreTenderDeclaration");
            CancelableTriggerType.PreFloatEntry = new CancelableTriggerType("PreFloatEntry");
            CancelableTriggerType.PreCustomerAdd = new CancelableTriggerType("PreCustomerAdd");
            CancelableTriggerType.PreCustomerClear = new CancelableTriggerType("PreCustomerClear");
            CancelableTriggerType.PreCustomerSave = new CancelableTriggerType("PreCustomerSave");
            CancelableTriggerType.PreCustomerSearch = new CancelableTriggerType("PreCustomerSearch");
            CancelableTriggerType.PreCustomerSet = new CancelableTriggerType("PreCustomerSet");
            CancelableTriggerType.PreGetLoyaltyCardBalance = new CancelableTriggerType("PreGetLoyaltyCardBalance");
            CancelableTriggerType.PreDisplayLoyaltyCardBalance = new CancelableTriggerType("PreDisplayLoyaltyCardBalance");
            CancelableTriggerType.PreAddCoupon = new CancelableTriggerType("PreAddCoupon");
            CancelableTriggerType.PreLineDiscountAmount = new CancelableTriggerType("PreLineDiscountAmount");
            CancelableTriggerType.PreLineDiscountPercent = new CancelableTriggerType("PreLineDiscountPercent");
            CancelableTriggerType.PreTotalDiscountAmount = new CancelableTriggerType("PreTotalDiscountAmount");
            CancelableTriggerType.PreTotalDiscountPercent = new CancelableTriggerType("PreTotalDiscountPercent");
            CancelableTriggerType.PreOperation = new CancelableTriggerType("PreOperation");
            CancelableTriggerType.PreAddTenderLine = new CancelableTriggerType("PreAddTenderLine");
            CancelableTriggerType.PrePayment = new CancelableTriggerType("PrePayment");
            CancelableTriggerType.PreVoidPayment = new CancelableTriggerType("PreVoidPayment");
            CancelableTriggerType.PostGetGiftCardNumber = new CancelableTriggerType("PostGetGiftCardNumber");
            CancelableTriggerType.PrePrintReceiptCopy = new CancelableTriggerType("PrePrintReceiptCopy");
            CancelableTriggerType.PreClearQuantity = new CancelableTriggerType("PreClearQuantity");
            CancelableTriggerType.PrePriceOverride = new CancelableTriggerType("PrePriceOverride");
            CancelableTriggerType.PreProductSale = new CancelableTriggerType("PreProductSale");
            CancelableTriggerType.PreReturnProduct = new CancelableTriggerType("PreReturnProduct");
            CancelableTriggerType.PreSetQuantity = new CancelableTriggerType("PreSetQuantity");
            CancelableTriggerType.PreVoidProducts = new CancelableTriggerType("PreVoidProducts");
            CancelableTriggerType.PreOverrideLineProductTax = new CancelableTriggerType("PreOverrideLineProductTax");
            CancelableTriggerType.PreOverrideTransactionTax = new CancelableTriggerType("PreOverrideTransactionTax");
            CancelableTriggerType.PreConfirmReturnTransaction = new CancelableTriggerType("PreConfirmReturnTransaction");
            CancelableTriggerType.PreEndTransaction = new CancelableTriggerType("PreEndTransaction");
            CancelableTriggerType.PreRecallTransaction = new CancelableTriggerType("PreRecallTransaction");
            CancelableTriggerType.PreReturnTransaction = new CancelableTriggerType("PreReturnTransaction");
            CancelableTriggerType.PreSuspendTransaction = new CancelableTriggerType("PreSuspendTransaction");
            CancelableTriggerType.PreVoidTransaction = new CancelableTriggerType("PreVoidTransaction");
            CancelableTriggerType.PrePickUpCustomerOrderLines = new CancelableTriggerType("PrePickUpCustomerOrderLines");
            CancelableTriggerType.PreRecallCustomerOrder = new CancelableTriggerType("PreRecallCustomerOrder");
            CancelableTriggerType.PreChangeShippingOrigin = new CancelableTriggerType("PreChangeShippingOrigin");
            return CancelableTriggerType;
        }());
        Triggers.CancelableTriggerType = CancelableTriggerType;
    })(Triggers = Commerce.Triggers || (Commerce.Triggers = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var ClientResponse = (function (_super) {
        __extends(ClientResponse, _super);
        function ClientResponse(result) {
            var _this = _super.call(this) || this;
            _this.result = result;
            return _this;
        }
        return ClientResponse;
    }(Commerce.Response));
    Commerce.ClientResponse = ClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var ClientRequest = (function (_super) {
        __extends(ClientRequest, _super);
        function ClientRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ClientRequest;
    }(Commerce.Request));
    Commerce.ClientRequest = ClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var AddTenderLineToCartClientResponse = (function (_super) {
        __extends(AddTenderLineToCartClientResponse, _super);
        function AddTenderLineToCartClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return AddTenderLineToCartClientResponse;
    }(Commerce.ClientResponse));
    Commerce.AddTenderLineToCartClientResponse = AddTenderLineToCartClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var AddTenderLineToCartClientRequest = (function (_super) {
        __extends(AddTenderLineToCartClientRequest, _super);
        function AddTenderLineToCartClientRequest(tenderLine, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.tenderLine = tenderLine;
            return _this;
        }
        return AddTenderLineToCartClientRequest;
    }(Commerce.ClientRequest));
    Commerce.AddTenderLineToCartClientRequest = AddTenderLineToCartClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var EndTransactionClientResponseBase = (function (_super) {
        __extends(EndTransactionClientResponseBase, _super);
        function EndTransactionClientResponseBase(salesOrder) {
            var _this = _super.call(this) || this;
            _this.salesOrder = salesOrder;
            return _this;
        }
        return EndTransactionClientResponseBase;
    }(Commerce.Response));
    Commerce.EndTransactionClientResponseBase = EndTransactionClientResponseBase;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var ConcludeTransactionClientResponse = (function (_super) {
        __extends(ConcludeTransactionClientResponse, _super);
        function ConcludeTransactionClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ConcludeTransactionClientResponse;
    }(Commerce.EndTransactionClientResponseBase));
    Commerce.ConcludeTransactionClientResponse = ConcludeTransactionClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var EndTransactionClientRequestBase = (function (_super) {
        __extends(EndTransactionClientRequestBase, _super);
        function EndTransactionClientRequestBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EndTransactionClientRequestBase;
    }(Commerce.Request));
    Commerce.EndTransactionClientRequestBase = EndTransactionClientRequestBase;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var ConcludeTransactionClientRequest = (function (_super) {
        __extends(ConcludeTransactionClientRequest, _super);
        function ConcludeTransactionClientRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ConcludeTransactionClientRequest;
    }(Commerce.EndTransactionClientRequestBase));
    Commerce.ConcludeTransactionClientRequest = ConcludeTransactionClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var DeclareStartingAmountClientResponse = (function (_super) {
        __extends(DeclareStartingAmountClientResponse, _super);
        function DeclareStartingAmountClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DeclareStartingAmountClientResponse;
    }(Commerce.ClientResponse));
    Commerce.DeclareStartingAmountClientResponse = DeclareStartingAmountClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var DeclareStartingAmountClientRequest = (function (_super) {
        __extends(DeclareStartingAmountClientRequest, _super);
        function DeclareStartingAmountClientRequest(startingAmount, comment, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.startingAmount = startingAmount;
            _this.comment = comment;
            return _this;
        }
        return DeclareStartingAmountClientRequest;
    }(Commerce.ClientRequest));
    Commerce.DeclareStartingAmountClientRequest = DeclareStartingAmountClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetApplicationVersionClientResponse = (function (_super) {
        __extends(GetApplicationVersionClientResponse, _super);
        function GetApplicationVersionClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetApplicationVersionClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetApplicationVersionClientResponse = GetApplicationVersionClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetApplicationVersionClientRequest = (function (_super) {
        __extends(GetApplicationVersionClientRequest, _super);
        function GetApplicationVersionClientRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return GetApplicationVersionClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetApplicationVersionClientRequest = GetApplicationVersionClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetAuthenticationTokenClientResponse = (function (_super) {
        __extends(GetAuthenticationTokenClientResponse, _super);
        function GetAuthenticationTokenClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetAuthenticationTokenClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetAuthenticationTokenClientResponse = GetAuthenticationTokenClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetAuthenticationTokenClientRequest = (function (_super) {
        __extends(GetAuthenticationTokenClientRequest, _super);
        function GetAuthenticationTokenClientRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return GetAuthenticationTokenClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetAuthenticationTokenClientRequest = GetAuthenticationTokenClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetChannelConfigurationClientResponse = (function (_super) {
        __extends(GetChannelConfigurationClientResponse, _super);
        function GetChannelConfigurationClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetChannelConfigurationClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetChannelConfigurationClientResponse = GetChannelConfigurationClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetChannelConfigurationClientRequest = (function (_super) {
        __extends(GetChannelConfigurationClientRequest, _super);
        function GetChannelConfigurationClientRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return GetChannelConfigurationClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetChannelConfigurationClientRequest = GetChannelConfigurationClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetConnectionStatusClientResponse = (function (_super) {
        __extends(GetConnectionStatusClientResponse, _super);
        function GetConnectionStatusClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetConnectionStatusClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetConnectionStatusClientResponse = GetConnectionStatusClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetConnectionStatusClientRequest = (function (_super) {
        __extends(GetConnectionStatusClientRequest, _super);
        function GetConnectionStatusClientRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return GetConnectionStatusClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetConnectionStatusClientRequest = GetConnectionStatusClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetCurrentCartClientResponse = (function (_super) {
        __extends(GetCurrentCartClientResponse, _super);
        function GetCurrentCartClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetCurrentCartClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetCurrentCartClientResponse = GetCurrentCartClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetCurrentCartClientRequest = (function (_super) {
        __extends(GetCurrentCartClientRequest, _super);
        function GetCurrentCartClientRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return GetCurrentCartClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetCurrentCartClientRequest = GetCurrentCartClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetCurrentShiftClientResponse = (function (_super) {
        __extends(GetCurrentShiftClientResponse, _super);
        function GetCurrentShiftClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetCurrentShiftClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetCurrentShiftClientResponse = GetCurrentShiftClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetCurrentShiftClientRequest = (function (_super) {
        __extends(GetCurrentShiftClientRequest, _super);
        function GetCurrentShiftClientRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return GetCurrentShiftClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetCurrentShiftClientRequest = GetCurrentShiftClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetCustomerClientResponse = (function (_super) {
        __extends(GetCustomerClientResponse, _super);
        function GetCustomerClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetCustomerClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetCustomerClientResponse = GetCustomerClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetCustomerClientRequest = (function (_super) {
        __extends(GetCustomerClientRequest, _super);
        function GetCustomerClientRequest(customerId, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.customerId = customerId;
            return _this;
        }
        return GetCustomerClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetCustomerClientRequest = GetCustomerClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetDenominationTotalsClientResponse = (function (_super) {
        __extends(GetDenominationTotalsClientResponse, _super);
        function GetDenominationTotalsClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetDenominationTotalsClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetDenominationTotalsClientResponse = GetDenominationTotalsClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetDenominationTotalsClientRequest = (function (_super) {
        __extends(GetDenominationTotalsClientRequest, _super);
        function GetDenominationTotalsClientRequest(correlationId, denominationDetails, tenderTypeId, currencyCode) {
            var _this = _super.call(this, correlationId) || this;
            _this.denominationDetails = denominationDetails;
            _this.tenderTypeId = tenderTypeId;
            _this.currencyCode = currencyCode;
            return _this;
        }
        return GetDenominationTotalsClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetDenominationTotalsClientRequest = GetDenominationTotalsClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetDeviceConfigurationClientResponse = (function (_super) {
        __extends(GetDeviceConfigurationClientResponse, _super);
        function GetDeviceConfigurationClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetDeviceConfigurationClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetDeviceConfigurationClientResponse = GetDeviceConfigurationClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetDeviceConfigurationClientRequest = (function (_super) {
        __extends(GetDeviceConfigurationClientRequest, _super);
        function GetDeviceConfigurationClientRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return GetDeviceConfigurationClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetDeviceConfigurationClientRequest = GetDeviceConfigurationClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetExtensionProfileClientResponse = (function (_super) {
        __extends(GetExtensionProfileClientResponse, _super);
        function GetExtensionProfileClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetExtensionProfileClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetExtensionProfileClientResponse = GetExtensionProfileClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetExtensionProfileClientRequest = (function (_super) {
        __extends(GetExtensionProfileClientRequest, _super);
        function GetExtensionProfileClientRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return GetExtensionProfileClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetExtensionProfileClientRequest = GetExtensionProfileClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetHardwareProfileClientResponse = (function (_super) {
        __extends(GetHardwareProfileClientResponse, _super);
        function GetHardwareProfileClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetHardwareProfileClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetHardwareProfileClientResponse = GetHardwareProfileClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetHardwareProfileClientRequest = (function (_super) {
        __extends(GetHardwareProfileClientRequest, _super);
        function GetHardwareProfileClientRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return GetHardwareProfileClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetHardwareProfileClientRequest = GetHardwareProfileClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetKeyedInPriceClientResponse = (function (_super) {
        __extends(GetKeyedInPriceClientResponse, _super);
        function GetKeyedInPriceClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetKeyedInPriceClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetKeyedInPriceClientResponse = GetKeyedInPriceClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetKeyedInPriceClientRequest = (function (_super) {
        __extends(GetKeyedInPriceClientRequest, _super);
        function GetKeyedInPriceClientRequest(productId, minPrice, maxPrice, isMinPriceInclusive, isMaxPriceInclusive, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.productId = productId;
            _this.minPrice = minPrice;
            _this.maxPrice = maxPrice;
            _this.isMinPriceInclusive = isMinPriceInclusive;
            _this.isMaxPriceInclusive = isMaxPriceInclusive;
            return _this;
        }
        return GetKeyedInPriceClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetKeyedInPriceClientRequest = GetKeyedInPriceClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetLoggedOnEmployeeClientResponse = (function (_super) {
        __extends(GetLoggedOnEmployeeClientResponse, _super);
        function GetLoggedOnEmployeeClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetLoggedOnEmployeeClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetLoggedOnEmployeeClientResponse = GetLoggedOnEmployeeClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetLoggedOnEmployeeClientRequest = (function (_super) {
        __extends(GetLoggedOnEmployeeClientRequest, _super);
        function GetLoggedOnEmployeeClientRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return GetLoggedOnEmployeeClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetLoggedOnEmployeeClientRequest = GetLoggedOnEmployeeClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetOfflinePendingTransactionCountClientResponse = (function (_super) {
        __extends(GetOfflinePendingTransactionCountClientResponse, _super);
        function GetOfflinePendingTransactionCountClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetOfflinePendingTransactionCountClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetOfflinePendingTransactionCountClientResponse = GetOfflinePendingTransactionCountClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetOfflinePendingTransactionCountClientRequest = (function (_super) {
        __extends(GetOfflinePendingTransactionCountClientRequest, _super);
        function GetOfflinePendingTransactionCountClientRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return GetOfflinePendingTransactionCountClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetOfflinePendingTransactionCountClientRequest = GetOfflinePendingTransactionCountClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetOrgUnitConfigurationClientResponse = (function (_super) {
        __extends(GetOrgUnitConfigurationClientResponse, _super);
        function GetOrgUnitConfigurationClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetOrgUnitConfigurationClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetOrgUnitConfigurationClientResponse = GetOrgUnitConfigurationClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetOrgUnitConfigurationClientRequest = (function (_super) {
        __extends(GetOrgUnitConfigurationClientRequest, _super);
        function GetOrgUnitConfigurationClientRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return GetOrgUnitConfigurationClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetOrgUnitConfigurationClientRequest = GetOrgUnitConfigurationClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetOrgUnitTenderTypesClientResponse = (function (_super) {
        __extends(GetOrgUnitTenderTypesClientResponse, _super);
        function GetOrgUnitTenderTypesClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetOrgUnitTenderTypesClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetOrgUnitTenderTypesClientResponse = GetOrgUnitTenderTypesClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetOrgUnitTenderTypesClientRequest = (function (_super) {
        __extends(GetOrgUnitTenderTypesClientRequest, _super);
        function GetOrgUnitTenderTypesClientRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return GetOrgUnitTenderTypesClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetOrgUnitTenderTypesClientRequest = GetOrgUnitTenderTypesClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetPickupDateClientResponse = (function (_super) {
        __extends(GetPickupDateClientResponse, _super);
        function GetPickupDateClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetPickupDateClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetPickupDateClientResponse = GetPickupDateClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetPickupDateClientRequest = (function (_super) {
        __extends(GetPickupDateClientRequest, _super);
        function GetPickupDateClientRequest(cart, cartLines, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.cart = cart;
            _this.cartLines = cartLines;
            return _this;
        }
        return GetPickupDateClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetPickupDateClientRequest = GetPickupDateClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetReasonCodeLinesClientResponse = (function (_super) {
        __extends(GetReasonCodeLinesClientResponse, _super);
        function GetReasonCodeLinesClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetReasonCodeLinesClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetReasonCodeLinesClientResponse = GetReasonCodeLinesClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetReasonCodeLinesClientRequest = (function (_super) {
        __extends(GetReasonCodeLinesClientRequest, _super);
        function GetReasonCodeLinesClientRequest(reasonCodeIds, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.reasonCodeIds = reasonCodeIds || [];
            return _this;
        }
        return GetReasonCodeLinesClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetReasonCodeLinesClientRequest = GetReasonCodeLinesClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetReceiptEmailAddressClientResponse = (function (_super) {
        __extends(GetReceiptEmailAddressClientResponse, _super);
        function GetReceiptEmailAddressClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetReceiptEmailAddressClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetReceiptEmailAddressClientResponse = GetReceiptEmailAddressClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetReceiptEmailAddressClientRequest = (function (_super) {
        __extends(GetReceiptEmailAddressClientRequest, _super);
        function GetReceiptEmailAddressClientRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetReceiptEmailAddressClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetReceiptEmailAddressClientRequest = GetReceiptEmailAddressClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetReceiptsClientResponse = (function (_super) {
        __extends(GetReceiptsClientResponse, _super);
        function GetReceiptsClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetReceiptsClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetReceiptsClientResponse = GetReceiptsClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetReceiptsClientRequest = (function (_super) {
        __extends(GetReceiptsClientRequest, _super);
        function GetReceiptsClientRequest(salesOrderId, retrievalCriteria, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            if (Commerce.StringExtensions.isNullOrWhitespace(salesOrderId)) {
                throw new Error("Invalid sales order id provided to the GetReceiptsClientRequest constructor.");
            }
            else if (Commerce.ObjectExtensions.isNullOrUndefined(retrievalCriteria)) {
                var errorMessage = "Invalid retrieval criteria provided to the GetReceiptsClientRequest constructor. The retrieval criteria cannot be null or undefined.";
                throw new Error(errorMessage);
            }
            _this.salesOrderId = salesOrderId;
            _this.retrievalCriteria = retrievalCriteria;
            return _this;
        }
        return GetReceiptsClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetReceiptsClientRequest = GetReceiptsClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetSalesOrderDetailsByTransactionIdClientResponse = (function (_super) {
        __extends(GetSalesOrderDetailsByTransactionIdClientResponse, _super);
        function GetSalesOrderDetailsByTransactionIdClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetSalesOrderDetailsByTransactionIdClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetSalesOrderDetailsByTransactionIdClientResponse = GetSalesOrderDetailsByTransactionIdClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetSalesOrderDetailsByTransactionIdClientRequest = (function (_super) {
        __extends(GetSalesOrderDetailsByTransactionIdClientRequest, _super);
        function GetSalesOrderDetailsByTransactionIdClientRequest(transactionId, searchLocation, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.transactionId = transactionId;
            _this.searchLocation = searchLocation;
            return _this;
        }
        return GetSalesOrderDetailsByTransactionIdClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetSalesOrderDetailsByTransactionIdClientRequest = GetSalesOrderDetailsByTransactionIdClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetSalesOrdersWithNoFiscalTransactionsResponse = (function (_super) {
        __extends(GetSalesOrdersWithNoFiscalTransactionsResponse, _super);
        function GetSalesOrdersWithNoFiscalTransactionsResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetSalesOrdersWithNoFiscalTransactionsResponse;
    }(Commerce.ClientResponse));
    Commerce.GetSalesOrdersWithNoFiscalTransactionsResponse = GetSalesOrdersWithNoFiscalTransactionsResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetSalesOrdersWithNoFiscalTransactionsRequest = (function (_super) {
        __extends(GetSalesOrdersWithNoFiscalTransactionsRequest, _super);
        function GetSalesOrdersWithNoFiscalTransactionsRequest(storeNumber, terminalId, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.storeNumber = storeNumber;
            _this.terminalId = terminalId;
            return _this;
        }
        return GetSalesOrdersWithNoFiscalTransactionsRequest;
    }(Commerce.ClientRequest));
    Commerce.GetSalesOrdersWithNoFiscalTransactionsRequest = GetSalesOrdersWithNoFiscalTransactionsRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetScanResultClientResponse = (function (_super) {
        __extends(GetScanResultClientResponse, _super);
        function GetScanResultClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetScanResultClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetScanResultClientResponse = GetScanResultClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetScanResultClientRequest = (function (_super) {
        __extends(GetScanResultClientRequest, _super);
        function GetScanResultClientRequest(scanText, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.scanText = scanText;
            return _this;
        }
        return GetScanResultClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetScanResultClientRequest = GetScanResultClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetSessionInfoClientResponse = (function (_super) {
        __extends(GetSessionInfoClientResponse, _super);
        function GetSessionInfoClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetSessionInfoClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetSessionInfoClientResponse = GetSessionInfoClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetSessionInfoClientRequest = (function (_super) {
        __extends(GetSessionInfoClientRequest, _super);
        function GetSessionInfoClientRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return GetSessionInfoClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetSessionInfoClientRequest = GetSessionInfoClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetShippingChargeClientResponse = (function (_super) {
        __extends(GetShippingChargeClientResponse, _super);
        function GetShippingChargeClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetShippingChargeClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetShippingChargeClientResponse = GetShippingChargeClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetShippingChargeClientRequest = (function (_super) {
        __extends(GetShippingChargeClientRequest, _super);
        function GetShippingChargeClientRequest(correlationId, cartLines, shippingMethod, shipFromAddress, shipToAddress) {
            var _this = _super.call(this, correlationId) || this;
            _this.cartLines = cartLines;
            _this.shippingMethod = shippingMethod;
            _this.shipFromAddress = shipFromAddress;
            _this.shipToAddress = shipToAddress;
            return _this;
        }
        return GetShippingChargeClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetShippingChargeClientRequest = GetShippingChargeClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetShippingDateClientResponse = (function (_super) {
        __extends(GetShippingDateClientResponse, _super);
        function GetShippingDateClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetShippingDateClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetShippingDateClientResponse = GetShippingDateClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetShippingDateClientRequest = (function (_super) {
        __extends(GetShippingDateClientRequest, _super);
        function GetShippingDateClientRequest(correlationId, originalDeliveryDate, deliveryMethod) {
            var _this = _super.call(this, correlationId) || this;
            _this.originalDeliveryDate = originalDeliveryDate;
            _this.deliveryMethod = deliveryMethod;
            return _this;
        }
        return GetShippingDateClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetShippingDateClientRequest = GetShippingDateClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetTenderDetailsClientResponse = (function (_super) {
        __extends(GetTenderDetailsClientResponse, _super);
        function GetTenderDetailsClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetTenderDetailsClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetTenderDetailsClientResponse = GetTenderDetailsClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetTenderDetailsClientRequest = (function (_super) {
        __extends(GetTenderDetailsClientRequest, _super);
        function GetTenderDetailsClientRequest(correlationId, shiftId, shiftTerminalId, tenderTransactionType) {
            var _this = _super.call(this, correlationId) || this;
            _this.shiftId = shiftId;
            _this.shiftTerminalId = shiftTerminalId;
            _this.tenderTransactionType = tenderTransactionType;
            return _this;
        }
        return GetTenderDetailsClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetTenderDetailsClientRequest = GetTenderDetailsClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetTransferOrderHeaderClientResponse = (function (_super) {
        __extends(GetTransferOrderHeaderClientResponse, _super);
        function GetTransferOrderHeaderClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetTransferOrderHeaderClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetTransferOrderHeaderClientResponse = GetTransferOrderHeaderClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetTransferOrderHeaderClientRequest = (function (_super) {
        __extends(GetTransferOrderHeaderClientRequest, _super);
        function GetTransferOrderHeaderClientRequest(correlationId, transferOrder, actionType) {
            var _this = _super.call(this, correlationId) || this;
            _this.transferOrder = transferOrder;
            _this.actionType = actionType;
            return _this;
        }
        return GetTransferOrderHeaderClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetTransferOrderHeaderClientRequest = GetTransferOrderHeaderClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PrintPackingSlipClientResponse = (function (_super) {
        __extends(PrintPackingSlipClientResponse, _super);
        function PrintPackingSlipClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PrintPackingSlipClientResponse;
    }(Commerce.ClientResponse));
    Commerce.PrintPackingSlipClientResponse = PrintPackingSlipClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PrintPackingSlipClientRequest = (function (_super) {
        __extends(PrintPackingSlipClientRequest, _super);
        function PrintPackingSlipClientRequest(packingSlipId, isReprint, packingSlips, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.packingSlipId = packingSlipId;
            _this.isReprint = isReprint;
            _this.packingSlips = packingSlips;
            return _this;
        }
        return PrintPackingSlipClientRequest;
    }(Commerce.ClientRequest));
    Commerce.PrintPackingSlipClientRequest = PrintPackingSlipClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var RefreshCartClientResponse = (function (_super) {
        __extends(RefreshCartClientResponse, _super);
        function RefreshCartClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return RefreshCartClientResponse;
    }(Commerce.ClientResponse));
    Commerce.RefreshCartClientResponse = RefreshCartClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var RefreshCartClientRequest = (function (_super) {
        __extends(RefreshCartClientRequest, _super);
        function RefreshCartClientRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return RefreshCartClientRequest;
    }(Commerce.ClientRequest));
    Commerce.RefreshCartClientRequest = RefreshCartClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var RegisterCustomAuditEventClientResponse = (function (_super) {
        __extends(RegisterCustomAuditEventClientResponse, _super);
        function RegisterCustomAuditEventClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return RegisterCustomAuditEventClientResponse;
    }(Commerce.ClientResponse));
    Commerce.RegisterCustomAuditEventClientResponse = RegisterCustomAuditEventClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var RegisterCustomAuditEventClientRequest = (function (_super) {
        __extends(RegisterCustomAuditEventClientRequest, _super);
        function RegisterCustomAuditEventClientRequest(auditEventTypeValue, channelId, storeId, terminalId, staff, source, message, logLevel, transactionReference, extensionProperties, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.auditEventTypeValue = auditEventTypeValue;
            _this.channelId = channelId;
            _this.storeId = storeId;
            _this.terminalId = terminalId;
            _this.staff = staff;
            _this.source = source;
            _this.message = message;
            _this.logLevel = logLevel;
            _this.transactionReference = transactionReference;
            _this.extensionProperties = extensionProperties;
            return _this;
        }
        return RegisterCustomAuditEventClientRequest;
    }(Commerce.ClientRequest));
    Commerce.RegisterCustomAuditEventClientRequest = RegisterCustomAuditEventClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var RegisterPrintReceiptCopyEventResponse = (function (_super) {
        __extends(RegisterPrintReceiptCopyEventResponse, _super);
        function RegisterPrintReceiptCopyEventResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return RegisterPrintReceiptCopyEventResponse;
    }(Commerce.ClientResponse));
    Commerce.RegisterPrintReceiptCopyEventResponse = RegisterPrintReceiptCopyEventResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var RegisterPrintReceiptCopyEventRequest = (function (_super) {
        __extends(RegisterPrintReceiptCopyEventRequest, _super);
        function RegisterPrintReceiptCopyEventRequest(salesOrderToPrint, source, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.salesOrderToPrint = salesOrderToPrint;
            _this.source = source;
            return _this;
        }
        return RegisterPrintReceiptCopyEventRequest;
    }(Commerce.ClientRequest));
    Commerce.RegisterPrintReceiptCopyEventRequest = RegisterPrintReceiptCopyEventRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var ResumeSuspendedCartClientResponse = (function (_super) {
        __extends(ResumeSuspendedCartClientResponse, _super);
        function ResumeSuspendedCartClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ResumeSuspendedCartClientResponse;
    }(Commerce.ClientResponse));
    Commerce.ResumeSuspendedCartClientResponse = ResumeSuspendedCartClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var ResumeSuspendedCartClientRequest = (function (_super) {
        __extends(ResumeSuspendedCartClientRequest, _super);
        function ResumeSuspendedCartClientRequest(cartId, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.cartId = cartId;
            return _this;
        }
        return ResumeSuspendedCartClientRequest;
    }(Commerce.ClientRequest));
    Commerce.ResumeSuspendedCartClientRequest = ResumeSuspendedCartClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SaveAttributesOnCartClientResponse = (function (_super) {
        __extends(SaveAttributesOnCartClientResponse, _super);
        function SaveAttributesOnCartClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SaveAttributesOnCartClientResponse;
    }(Commerce.ClientResponse));
    Commerce.SaveAttributesOnCartClientResponse = SaveAttributesOnCartClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SaveAttributesOnCartClientRequest = (function (_super) {
        __extends(SaveAttributesOnCartClientRequest, _super);
        function SaveAttributesOnCartClientRequest(attributes, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.attributes = attributes;
            return _this;
        }
        return SaveAttributesOnCartClientRequest;
    }(Commerce.ClientRequest));
    Commerce.SaveAttributesOnCartClientRequest = SaveAttributesOnCartClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SaveAttributesOnCartLinesClientResponse = (function (_super) {
        __extends(SaveAttributesOnCartLinesClientResponse, _super);
        function SaveAttributesOnCartLinesClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SaveAttributesOnCartLinesClientResponse;
    }(Commerce.ClientResponse));
    Commerce.SaveAttributesOnCartLinesClientResponse = SaveAttributesOnCartLinesClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SaveAttributesOnCartLinesClientRequest = (function (_super) {
        __extends(SaveAttributesOnCartLinesClientRequest, _super);
        function SaveAttributesOnCartLinesClientRequest(attributesOnCartLines, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.attributesOnCartLines = attributesOnCartLines;
            return _this;
        }
        return SaveAttributesOnCartLinesClientRequest;
    }(Commerce.ClientRequest));
    Commerce.SaveAttributesOnCartLinesClientRequest = SaveAttributesOnCartLinesClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SaveExtensionPropertiesOnCartClientResponse = (function (_super) {
        __extends(SaveExtensionPropertiesOnCartClientResponse, _super);
        function SaveExtensionPropertiesOnCartClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SaveExtensionPropertiesOnCartClientResponse;
    }(Commerce.ClientResponse));
    Commerce.SaveExtensionPropertiesOnCartClientResponse = SaveExtensionPropertiesOnCartClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SaveExtensionPropertiesOnCartClientRequest = (function (_super) {
        __extends(SaveExtensionPropertiesOnCartClientRequest, _super);
        function SaveExtensionPropertiesOnCartClientRequest(extensionProperties, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.extensionProperties = extensionProperties;
            return _this;
        }
        return SaveExtensionPropertiesOnCartClientRequest;
    }(Commerce.ClientRequest));
    Commerce.SaveExtensionPropertiesOnCartClientRequest = SaveExtensionPropertiesOnCartClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SaveExtensionPropertiesOnCartLinesClientResponse = (function (_super) {
        __extends(SaveExtensionPropertiesOnCartLinesClientResponse, _super);
        function SaveExtensionPropertiesOnCartLinesClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SaveExtensionPropertiesOnCartLinesClientResponse;
    }(Commerce.ClientResponse));
    Commerce.SaveExtensionPropertiesOnCartLinesClientResponse = SaveExtensionPropertiesOnCartLinesClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SaveExtensionPropertiesOnCartLinesClientRequest = (function (_super) {
        __extends(SaveExtensionPropertiesOnCartLinesClientRequest, _super);
        function SaveExtensionPropertiesOnCartLinesClientRequest(extensionPropertiesOnCartLines, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.extensionPropertiesOnCartLines = extensionPropertiesOnCartLines;
            return _this;
        }
        return SaveExtensionPropertiesOnCartLinesClientRequest;
    }(Commerce.ClientRequest));
    Commerce.SaveExtensionPropertiesOnCartLinesClientRequest = SaveExtensionPropertiesOnCartLinesClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SaveFiscalTransactionClientResponse = (function (_super) {
        __extends(SaveFiscalTransactionClientResponse, _super);
        function SaveFiscalTransactionClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SaveFiscalTransactionClientResponse;
    }(Commerce.ClientResponse));
    Commerce.SaveFiscalTransactionClientResponse = SaveFiscalTransactionClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SaveFiscalTransactionClientRequest = (function (_super) {
        __extends(SaveFiscalTransactionClientRequest, _super);
        function SaveFiscalTransactionClientRequest(fiscalTransaction, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.fiscalTransaction = fiscalTransaction;
            return _this;
        }
        return SaveFiscalTransactionClientRequest;
    }(Commerce.ClientRequest));
    Commerce.SaveFiscalTransactionClientRequest = SaveFiscalTransactionClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SaveReasonCodeLinesOnCartClientResponse = (function (_super) {
        __extends(SaveReasonCodeLinesOnCartClientResponse, _super);
        function SaveReasonCodeLinesOnCartClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SaveReasonCodeLinesOnCartClientResponse;
    }(Commerce.ClientResponse));
    Commerce.SaveReasonCodeLinesOnCartClientResponse = SaveReasonCodeLinesOnCartClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SaveReasonCodeLinesOnCartClientRequest = (function (_super) {
        __extends(SaveReasonCodeLinesOnCartClientRequest, _super);
        function SaveReasonCodeLinesOnCartClientRequest(reasonCodeLines, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.reasonCodeLines = reasonCodeLines || [];
            return _this;
        }
        return SaveReasonCodeLinesOnCartClientRequest;
    }(Commerce.ClientRequest));
    Commerce.SaveReasonCodeLinesOnCartClientRequest = SaveReasonCodeLinesOnCartClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SaveReasonCodeLinesOnCartLinesClientResponse = (function (_super) {
        __extends(SaveReasonCodeLinesOnCartLinesClientResponse, _super);
        function SaveReasonCodeLinesOnCartLinesClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SaveReasonCodeLinesOnCartLinesClientResponse;
    }(Commerce.ClientResponse));
    Commerce.SaveReasonCodeLinesOnCartLinesClientResponse = SaveReasonCodeLinesOnCartLinesClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SaveReasonCodeLinesOnCartLinesClientRequest = (function (_super) {
        __extends(SaveReasonCodeLinesOnCartLinesClientRequest, _super);
        function SaveReasonCodeLinesOnCartLinesClientRequest(reasonCodeLinesOnCartLines, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.reasonCodeLinesOnCartLines = reasonCodeLinesOnCartLines || [];
            return _this;
        }
        return SaveReasonCodeLinesOnCartLinesClientRequest;
    }(Commerce.ClientRequest));
    Commerce.SaveReasonCodeLinesOnCartLinesClientRequest = SaveReasonCodeLinesOnCartLinesClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SelectSalesLinesForPickUpClientResponse = (function (_super) {
        __extends(SelectSalesLinesForPickUpClientResponse, _super);
        function SelectSalesLinesForPickUpClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SelectSalesLinesForPickUpClientResponse;
    }(Commerce.ClientResponse));
    Commerce.SelectSalesLinesForPickUpClientResponse = SelectSalesLinesForPickUpClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SelectSalesLinesForPickUpClientRequest = (function (_super) {
        __extends(SelectSalesLinesForPickUpClientRequest, _super);
        function SelectSalesLinesForPickUpClientRequest(correlationId, salesId) {
            var _this = _super.call(this, correlationId) || this;
            _this.salesId = salesId;
            return _this;
        }
        return SelectSalesLinesForPickUpClientRequest;
    }(Commerce.ClientRequest));
    Commerce.SelectSalesLinesForPickUpClientRequest = SelectSalesLinesForPickUpClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SelectZipCodeInfoClientResponse = (function (_super) {
        __extends(SelectZipCodeInfoClientResponse, _super);
        function SelectZipCodeInfoClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SelectZipCodeInfoClientResponse;
    }(Commerce.ClientResponse));
    Commerce.SelectZipCodeInfoClientResponse = SelectZipCodeInfoClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SelectZipCodeInfoClientRequest = (function (_super) {
        __extends(SelectZipCodeInfoClientRequest, _super);
        function SelectZipCodeInfoClientRequest(correlationId, zipCodeInfos) {
            var _this = _super.call(this, correlationId) || this;
            _this.zipCodeInfos = zipCodeInfos;
            return _this;
        }
        return SelectZipCodeInfoClientRequest;
    }(Commerce.ClientRequest));
    Commerce.SelectZipCodeInfoClientRequest = SelectZipCodeInfoClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SetCartAttributesClientResponse = (function (_super) {
        __extends(SetCartAttributesClientResponse, _super);
        function SetCartAttributesClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SetCartAttributesClientResponse;
    }(Commerce.ClientResponse));
    Commerce.SetCartAttributesClientResponse = SetCartAttributesClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SetCartAttributesClientRequest = (function (_super) {
        __extends(SetCartAttributesClientRequest, _super);
        function SetCartAttributesClientRequest(attributeValues, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.attributeValues = attributeValues;
            return _this;
        }
        return SetCartAttributesClientRequest;
    }(Commerce.ClientRequest));
    Commerce.SetCartAttributesClientRequest = SetCartAttributesClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var ShowAlphanumericInputDialogClientResponse = (function (_super) {
        __extends(ShowAlphanumericInputDialogClientResponse, _super);
        function ShowAlphanumericInputDialogClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ShowAlphanumericInputDialogClientResponse;
    }(Commerce.ClientResponse));
    Commerce.ShowAlphanumericInputDialogClientResponse = ShowAlphanumericInputDialogClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var ShowAlphanumericInputDialogClientRequest = (function (_super) {
        __extends(ShowAlphanumericInputDialogClientRequest, _super);
        function ShowAlphanumericInputDialogClientRequest(options, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            if (Commerce.ObjectExtensions.isNullOrUndefined(options)) {
                throw new Error("ShowAlphanumericInputDialogClientRequest: required parameter options is null or undefined.");
            }
            _this.options = options;
            return _this;
        }
        return ShowAlphanumericInputDialogClientRequest;
    }(Commerce.ClientRequest));
    Commerce.ShowAlphanumericInputDialogClientRequest = ShowAlphanumericInputDialogClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var ShowChangeDueClientResponse = (function (_super) {
        __extends(ShowChangeDueClientResponse, _super);
        function ShowChangeDueClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ShowChangeDueClientResponse;
    }(Commerce.Response));
    Commerce.ShowChangeDueClientResponse = ShowChangeDueClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var ShowChangeDueClientRequest = (function (_super) {
        __extends(ShowChangeDueClientRequest, _super);
        function ShowChangeDueClientRequest(correlationId, salesOrder) {
            var _this = _super.call(this, correlationId) || this;
            _this.salesOrder = salesOrder;
            return _this;
        }
        return ShowChangeDueClientRequest;
    }(Commerce.Request));
    Commerce.ShowChangeDueClientRequest = ShowChangeDueClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var ShowListInputDialogClientResponse = (function (_super) {
        __extends(ShowListInputDialogClientResponse, _super);
        function ShowListInputDialogClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ShowListInputDialogClientResponse;
    }(Commerce.ClientResponse));
    Commerce.ShowListInputDialogClientResponse = ShowListInputDialogClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var ShowListInputDialogClientRequest = (function (_super) {
        __extends(ShowListInputDialogClientRequest, _super);
        function ShowListInputDialogClientRequest(options, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            if (Commerce.ObjectExtensions.isNullOrUndefined(options)) {
                throw new Error("ShowListInputDialogClientRequest: required parameter options is null or undefined.");
            }
            else if (!Commerce.ArrayExtensions.hasElements(options.items)) {
                throw new Error("ShowListInputDialogClientRequest: required labels list is null or undefined.");
            }
            _this.options = options;
            return _this;
        }
        return ShowListInputDialogClientRequest;
    }(Commerce.ClientRequest));
    Commerce.ShowListInputDialogClientRequest = ShowListInputDialogClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var ShowMessageDialogClientResponse = (function (_super) {
        __extends(ShowMessageDialogClientResponse, _super);
        function ShowMessageDialogClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ShowMessageDialogClientResponse;
    }(Commerce.ClientResponse));
    Commerce.ShowMessageDialogClientResponse = ShowMessageDialogClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var ShowMessageDialogClientRequest = (function (_super) {
        __extends(ShowMessageDialogClientRequest, _super);
        function ShowMessageDialogClientRequest(options, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            if (Commerce.ObjectExtensions.isNullOrUndefined(options)) {
                throw new Error("ShowMessageDialogClientRequest: required parameter options is null or undefined.");
            }
            _this.options = options;
            return _this;
        }
        return ShowMessageDialogClientRequest;
    }(Commerce.ClientRequest));
    Commerce.ShowMessageDialogClientRequest = ShowMessageDialogClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var ShowNumericInputDialogClientResponse = (function (_super) {
        __extends(ShowNumericInputDialogClientResponse, _super);
        function ShowNumericInputDialogClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ShowNumericInputDialogClientResponse;
    }(Commerce.ClientResponse));
    Commerce.ShowNumericInputDialogClientResponse = ShowNumericInputDialogClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var ShowNumericInputDialogClientRequest = (function (_super) {
        __extends(ShowNumericInputDialogClientRequest, _super);
        function ShowNumericInputDialogClientRequest(options, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            if (Commerce.ObjectExtensions.isNullOrUndefined(options)) {
                throw new Error("ShowNumericInputDialogClientRequest: required parameter options is null or undefined.");
            }
            _this.options = options;
            return _this;
        }
        return ShowNumericInputDialogClientRequest;
    }(Commerce.ClientRequest));
    Commerce.ShowNumericInputDialogClientRequest = ShowNumericInputDialogClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var ShowTextInputDialogClientResponse = (function (_super) {
        __extends(ShowTextInputDialogClientResponse, _super);
        function ShowTextInputDialogClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ShowTextInputDialogClientResponse;
    }(Commerce.ClientResponse));
    Commerce.ShowTextInputDialogClientResponse = ShowTextInputDialogClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var ShowTextInputDialogClientRequest = (function (_super) {
        __extends(ShowTextInputDialogClientRequest, _super);
        function ShowTextInputDialogClientRequest(options, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            if (Commerce.ObjectExtensions.isNullOrUndefined(options)) {
                throw new Error("ShowTextInputDialogClientRequest: required parameter options is null or undefined.");
            }
            _this.options = options;
            return _this;
        }
        return ShowTextInputDialogClientRequest;
    }(Commerce.ClientRequest));
    Commerce.ShowTextInputDialogClientRequest = ShowTextInputDialogClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SyncAllStockCountJournalsClientResponse = (function (_super) {
        __extends(SyncAllStockCountJournalsClientResponse, _super);
        function SyncAllStockCountJournalsClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SyncAllStockCountJournalsClientResponse;
    }(Commerce.ClientResponse));
    Commerce.SyncAllStockCountJournalsClientResponse = SyncAllStockCountJournalsClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SyncAllStockCountJournalsClientRequest = (function (_super) {
        __extends(SyncAllStockCountJournalsClientRequest, _super);
        function SyncAllStockCountJournalsClientRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return SyncAllStockCountJournalsClientRequest;
    }(Commerce.ClientRequest));
    Commerce.SyncAllStockCountJournalsClientRequest = SyncAllStockCountJournalsClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var OperationRequest = (function (_super) {
        __extends(OperationRequest, _super);
        function OperationRequest(operationId, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.operationId = operationId;
            _this.skipManagerPermissionChecks = false;
            return _this;
        }
        return OperationRequest;
    }(Commerce.Request));
    Commerce.OperationRequest = OperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Extensibility;
    (function (Extensibility) {
        "use strict";
        var ExtensionOperationRequestBase = (function (_super) {
            __extends(ExtensionOperationRequestBase, _super);
            function ExtensionOperationRequestBase(operationId, correlationId) {
                return _super.call(this, operationId, correlationId) || this;
            }
            return ExtensionOperationRequestBase;
        }(Commerce.OperationRequest));
        Extensibility.ExtensionOperationRequestBase = ExtensionOperationRequestBase;
    })(Extensibility = Commerce.Extensibility || (Commerce.Extensibility = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var AddAffiliationOperationResponse = (function (_super) {
        __extends(AddAffiliationOperationResponse, _super);
        function AddAffiliationOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return AddAffiliationOperationResponse;
    }(Commerce.Response));
    Commerce.AddAffiliationOperationResponse = AddAffiliationOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var AddAffiliationOperationRequest = (function (_super) {
        __extends(AddAffiliationOperationRequest, _super);
        function AddAffiliationOperationRequest(affiliationNames, affiliations, correlationId) {
            var _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.AddAffiliation, correlationId) || this;
            _this.affiliationNames = affiliationNames;
            _this.affiliations = affiliations;
            return _this;
        }
        return AddAffiliationOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.AddAffiliationOperationRequest = AddAffiliationOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var AddCouponsOperationResponse = (function (_super) {
        __extends(AddCouponsOperationResponse, _super);
        function AddCouponsOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return AddCouponsOperationResponse;
    }(Commerce.Response));
    Commerce.AddCouponsOperationResponse = AddCouponsOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var AddCouponsOperationRequest = (function (_super) {
        __extends(AddCouponsOperationRequest, _super);
        function AddCouponsOperationRequest(correlationId, couponCode) {
            var _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.AddCoupons, correlationId) || this;
            _this.couponCode = couponCode;
            return _this;
        }
        return AddCouponsOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.AddCouponsOperationRequest = AddCouponsOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var AddItemToCartOperationResponse = (function (_super) {
        __extends(AddItemToCartOperationResponse, _super);
        function AddItemToCartOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return AddItemToCartOperationResponse;
    }(Commerce.Response));
    Commerce.AddItemToCartOperationResponse = AddItemToCartOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var AddItemToCartOperationRequest = (function (_super) {
        __extends(AddItemToCartOperationRequest, _super);
        function AddItemToCartOperationRequest(productSaleDetails, correlationId) {
            var _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.ItemSale, correlationId) || this;
            _this.productSaleDetails = productSaleDetails;
            return _this;
        }
        return AddItemToCartOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.AddItemToCartOperationRequest = AddItemToCartOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var AddToGiftCardOperationResponse = (function (_super) {
        __extends(AddToGiftCardOperationResponse, _super);
        function AddToGiftCardOperationResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return AddToGiftCardOperationResponse;
    }(Commerce.Response));
    Commerce.AddToGiftCardOperationResponse = AddToGiftCardOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var AddToGiftCardOperationRequest = (function (_super) {
        __extends(AddToGiftCardOperationRequest, _super);
        function AddToGiftCardOperationRequest(correlationId) {
            return _super.call(this, Commerce.Proxy.Entities.RetailOperation.AddToGiftCard, correlationId) || this;
        }
        return AddToGiftCardOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.AddToGiftCardOperationRequest = AddToGiftCardOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CalculateTotalOperationResponse = (function (_super) {
        __extends(CalculateTotalOperationResponse, _super);
        function CalculateTotalOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return CalculateTotalOperationResponse;
    }(Commerce.Response));
    Commerce.CalculateTotalOperationResponse = CalculateTotalOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CalculateTotalOperationRequest = (function (_super) {
        __extends(CalculateTotalOperationRequest, _super);
        function CalculateTotalOperationRequest(correlationId) {
            return _super.call(this, Commerce.Proxy.Entities.RetailOperation.CalculateFullDiscounts, correlationId) || this;
        }
        return CalculateTotalOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.CalculateTotalOperationRequest = CalculateTotalOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CarryoutSelectedProductsOperationResponse = (function (_super) {
        __extends(CarryoutSelectedProductsOperationResponse, _super);
        function CarryoutSelectedProductsOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return CarryoutSelectedProductsOperationResponse;
    }(Commerce.Response));
    Commerce.CarryoutSelectedProductsOperationResponse = CarryoutSelectedProductsOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CarryoutSelectedProductsOperationRequest = (function (_super) {
        __extends(CarryoutSelectedProductsOperationRequest, _super);
        function CarryoutSelectedProductsOperationRequest(correlationId, cartLines) {
            var _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.CarryoutSelectedProducts, correlationId) || this;
            _this.cartLines = cartLines;
            return _this;
        }
        return CarryoutSelectedProductsOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.CarryoutSelectedProductsOperationRequest = CarryoutSelectedProductsOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var ChangeCartLineUnitOfMeasureOperationResponse = (function (_super) {
        __extends(ChangeCartLineUnitOfMeasureOperationResponse, _super);
        function ChangeCartLineUnitOfMeasureOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return ChangeCartLineUnitOfMeasureOperationResponse;
    }(Commerce.Response));
    Commerce.ChangeCartLineUnitOfMeasureOperationResponse = ChangeCartLineUnitOfMeasureOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var ChangeCartLineUnitOfMeasureOperationRequest = (function (_super) {
        __extends(ChangeCartLineUnitOfMeasureOperationRequest, _super);
        function ChangeCartLineUnitOfMeasureOperationRequest(cartLineId, correlationId, unitOfMeasure) {
            var _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.ChangeUnitOfMeasure, correlationId) || this;
            _this.cartLineId = cartLineId;
            _this.unitOfMeasure = unitOfMeasure;
            return _this;
        }
        return ChangeCartLineUnitOfMeasureOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.ChangeCartLineUnitOfMeasureOperationRequest = ChangeCartLineUnitOfMeasureOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CheckGiftCardBalanceOperationResponse = (function (_super) {
        __extends(CheckGiftCardBalanceOperationResponse, _super);
        function CheckGiftCardBalanceOperationResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CheckGiftCardBalanceOperationResponse;
    }(Commerce.Response));
    Commerce.CheckGiftCardBalanceOperationResponse = CheckGiftCardBalanceOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CheckGiftCardBalanceOperationRequest = (function (_super) {
        __extends(CheckGiftCardBalanceOperationRequest, _super);
        function CheckGiftCardBalanceOperationRequest(correlationId) {
            return _super.call(this, Commerce.Proxy.Entities.RetailOperation.GiftCardBalance, correlationId) || this;
        }
        return CheckGiftCardBalanceOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.CheckGiftCardBalanceOperationRequest = CheckGiftCardBalanceOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CloseShiftOperationResponse = (function (_super) {
        __extends(CloseShiftOperationResponse, _super);
        function CloseShiftOperationResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CloseShiftOperationResponse;
    }(Commerce.Response));
    Commerce.CloseShiftOperationResponse = CloseShiftOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CloseShiftOperationRequest = (function (_super) {
        __extends(CloseShiftOperationRequest, _super);
        function CloseShiftOperationRequest(correlationId) {
            return _super.call(this, Commerce.Proxy.Entities.RetailOperation.CloseShift, correlationId) || this;
        }
        return CloseShiftOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.CloseShiftOperationRequest = CloseShiftOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CreateCustomerOrderOperationResponse = (function (_super) {
        __extends(CreateCustomerOrderOperationResponse, _super);
        function CreateCustomerOrderOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return CreateCustomerOrderOperationResponse;
    }(Commerce.Response));
    Commerce.CreateCustomerOrderOperationResponse = CreateCustomerOrderOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CreateCustomerOrderOperationRequest = (function (_super) {
        __extends(CreateCustomerOrderOperationRequest, _super);
        function CreateCustomerOrderOperationRequest(correlationId) {
            return _super.call(this, Commerce.Proxy.Entities.RetailOperation.CreateCustomerOrder, correlationId) || this;
        }
        return CreateCustomerOrderOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.CreateCustomerOrderOperationRequest = CreateCustomerOrderOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CreateCustomerQuoteOperationResponse = (function (_super) {
        __extends(CreateCustomerQuoteOperationResponse, _super);
        function CreateCustomerQuoteOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return CreateCustomerQuoteOperationResponse;
    }(Commerce.Response));
    Commerce.CreateCustomerQuoteOperationResponse = CreateCustomerQuoteOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CreateCustomerQuoteOperationRequest = (function (_super) {
        __extends(CreateCustomerQuoteOperationRequest, _super);
        function CreateCustomerQuoteOperationRequest(correlationId, quotationExpirationDate) {
            var _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.CreateQuotation, correlationId) || this;
            _this.quotationExpirationDate = quotationExpirationDate;
            return _this;
        }
        return CreateCustomerQuoteOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.CreateCustomerQuoteOperationRequest = CreateCustomerQuoteOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var ServiceResponse = (function (_super) {
        __extends(ServiceResponse, _super);
        function ServiceResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ServiceResponse;
    }(Commerce.Response));
    Commerce.ServiceResponse = ServiceResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var ServiceRequest = (function (_super) {
        __extends(ServiceRequest, _super);
        function ServiceRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return ServiceRequest;
    }(Commerce.Request));
    Commerce.ServiceRequest = ServiceRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CreateEmptyCartServiceResponse = (function (_super) {
        __extends(CreateEmptyCartServiceResponse, _super);
        function CreateEmptyCartServiceResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return CreateEmptyCartServiceResponse;
    }(Commerce.ServiceResponse));
    Commerce.CreateEmptyCartServiceResponse = CreateEmptyCartServiceResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CreateEmptyCartServiceRequest = (function (_super) {
        __extends(CreateEmptyCartServiceRequest, _super);
        function CreateEmptyCartServiceRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return CreateEmptyCartServiceRequest;
    }(Commerce.ServiceRequest));
    Commerce.CreateEmptyCartServiceRequest = CreateEmptyCartServiceRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CustomerAccountDepositOperationResponse = (function (_super) {
        __extends(CustomerAccountDepositOperationResponse, _super);
        function CustomerAccountDepositOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return CustomerAccountDepositOperationResponse;
    }(Commerce.Response));
    Commerce.CustomerAccountDepositOperationResponse = CustomerAccountDepositOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CustomerAccountDepositOperationRequest = (function (_super) {
        __extends(CustomerAccountDepositOperationRequest, _super);
        function CustomerAccountDepositOperationRequest(correlationId, accountDepositAmount) {
            var _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.CustomerAccountDeposit, correlationId) || this;
            _this.accountDepositAmount = accountDepositAmount;
            return _this;
        }
        return CustomerAccountDepositOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.CustomerAccountDepositOperationRequest = CustomerAccountDepositOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var DepositOverrideOperationResponse = (function (_super) {
        __extends(DepositOverrideOperationResponse, _super);
        function DepositOverrideOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return DepositOverrideOperationResponse;
    }(Commerce.Response));
    Commerce.DepositOverrideOperationResponse = DepositOverrideOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var DepositOverrideOperationRequest = (function (_super) {
        __extends(DepositOverrideOperationRequest, _super);
        function DepositOverrideOperationRequest(depositOrCorrelationId, correlationId) {
            var _this = this;
            if (typeof depositOrCorrelationId === "number") {
                _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.DepositOverride, correlationId) || this;
                _this.depositOverrideAmount = depositOrCorrelationId;
            }
            else {
                _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.DepositOverride, depositOrCorrelationId) || this;
            }
            return _this;
        }
        return DepositOverrideOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.DepositOverrideOperationRequest = DepositOverrideOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var EditCustomerOrderOperationResponse = (function (_super) {
        __extends(EditCustomerOrderOperationResponse, _super);
        function EditCustomerOrderOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return EditCustomerOrderOperationResponse;
    }(Commerce.Response));
    Commerce.EditCustomerOrderOperationResponse = EditCustomerOrderOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var EditCustomerOrderOperationRequest = (function (_super) {
        __extends(EditCustomerOrderOperationRequest, _super);
        function EditCustomerOrderOperationRequest(correlationId, salesId) {
            var _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.EditCustomerOrder, correlationId) || this;
            _this.salesId = salesId;
            return _this;
        }
        return EditCustomerOrderOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.EditCustomerOrderOperationRequest = EditCustomerOrderOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetTaxOverridesServiceResponse = (function (_super) {
        __extends(GetTaxOverridesServiceResponse, _super);
        function GetTaxOverridesServiceResponse(taxOverrides) {
            var _this = _super.call(this) || this;
            _this.taxOverrides = taxOverrides;
            return _this;
        }
        return GetTaxOverridesServiceResponse;
    }(Commerce.ServiceResponse));
    Commerce.GetTaxOverridesServiceResponse = GetTaxOverridesServiceResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetTaxOverridesServiceRequest = (function (_super) {
        __extends(GetTaxOverridesServiceRequest, _super);
        function GetTaxOverridesServiceRequest(correlationId, taxOverrideType) {
            var _this = _super.call(this, correlationId) || this;
            _this.taxOverrideType = taxOverrideType;
            return _this;
        }
        return GetTaxOverridesServiceRequest;
    }(Commerce.ServiceRequest));
    Commerce.GetTaxOverridesServiceRequest = GetTaxOverridesServiceRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var InventoryLookupOperationResponse = (function (_super) {
        __extends(InventoryLookupOperationResponse, _super);
        function InventoryLookupOperationResponse(orgUnitAvailability) {
            var _this = _super.call(this) || this;
            _this.orgUnitAvailability = orgUnitAvailability;
            return _this;
        }
        return InventoryLookupOperationResponse;
    }(Commerce.Response));
    Commerce.InventoryLookupOperationResponse = InventoryLookupOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var InventoryLookupOperationRequest = (function (_super) {
        __extends(InventoryLookupOperationRequest, _super);
        function InventoryLookupOperationRequest(productRecordId, correlationId, criteria) {
            var _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.InventoryLookup, correlationId) || this;
            _this.productRecordId = productRecordId;
            _this.criteria = criteria || {};
            return _this;
        }
        return InventoryLookupOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.InventoryLookupOperationRequest = InventoryLookupOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var IssueGiftCardOperationResponse = (function (_super) {
        __extends(IssueGiftCardOperationResponse, _super);
        function IssueGiftCardOperationResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return IssueGiftCardOperationResponse;
    }(Commerce.Response));
    Commerce.IssueGiftCardOperationResponse = IssueGiftCardOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var IssueGiftCardOperationRequest = (function (_super) {
        __extends(IssueGiftCardOperationRequest, _super);
        function IssueGiftCardOperationRequest(correlationId) {
            return _super.call(this, Commerce.Proxy.Entities.RetailOperation.IssueGiftCertificate, correlationId) || this;
        }
        return IssueGiftCardOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.IssueGiftCardOperationRequest = IssueGiftCardOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var LineDiscountAmountOperationResponse = (function (_super) {
        __extends(LineDiscountAmountOperationResponse, _super);
        function LineDiscountAmountOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return LineDiscountAmountOperationResponse;
    }(Commerce.Response));
    Commerce.LineDiscountAmountOperationResponse = LineDiscountAmountOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var LineDiscountAmountOperationRequest = (function (_super) {
        __extends(LineDiscountAmountOperationRequest, _super);
        function LineDiscountAmountOperationRequest(cartLineDiscounts, correlationId) {
            var _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.LineDiscountAmount, correlationId) || this;
            _this.cartLineDiscounts = cartLineDiscounts;
            return _this;
        }
        return LineDiscountAmountOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.LineDiscountAmountOperationRequest = LineDiscountAmountOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var LineDiscountPercentOperationResponse = (function (_super) {
        __extends(LineDiscountPercentOperationResponse, _super);
        function LineDiscountPercentOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return LineDiscountPercentOperationResponse;
    }(Commerce.Response));
    Commerce.LineDiscountPercentOperationResponse = LineDiscountPercentOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var LineDiscountPercentOperationRequest = (function (_super) {
        __extends(LineDiscountPercentOperationRequest, _super);
        function LineDiscountPercentOperationRequest(cartLineDiscounts, correlationId) {
            var _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.LineDiscountPercent, correlationId) || this;
            _this.cartLineDiscounts = cartLineDiscounts;
            return _this;
        }
        return LineDiscountPercentOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.LineDiscountPercentOperationRequest = LineDiscountPercentOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var LogOffOperationResponse = (function (_super) {
        __extends(LogOffOperationResponse, _super);
        function LogOffOperationResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return LogOffOperationResponse;
    }(Commerce.Response));
    Commerce.LogOffOperationResponse = LogOffOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var LogOffOperationRequest = (function (_super) {
        __extends(LogOffOperationRequest, _super);
        function LogOffOperationRequest(correlationId) {
            return _super.call(this, Commerce.Proxy.Entities.RetailOperation.LogOff, correlationId) || this;
        }
        return LogOffOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.LogOffOperationRequest = LogOffOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var LoyaltyCardPointsBalanceOperationResponse = (function (_super) {
        __extends(LoyaltyCardPointsBalanceOperationResponse, _super);
        function LoyaltyCardPointsBalanceOperationResponse(loyaltyCard, currentCart) {
            var _this = _super.call(this) || this;
            _this.loyaltyCard = loyaltyCard;
            _this.cart = currentCart;
            return _this;
        }
        return LoyaltyCardPointsBalanceOperationResponse;
    }(Commerce.Response));
    Commerce.LoyaltyCardPointsBalanceOperationResponse = LoyaltyCardPointsBalanceOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var LoyaltyCardPointsBalanceOperationRequest = (function (_super) {
        __extends(LoyaltyCardPointsBalanceOperationRequest, _super);
        function LoyaltyCardPointsBalanceOperationRequest(correlationId, loyaltyCardId) {
            var _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.LoyaltyCardPointsBalance, correlationId) || this;
            _this.loyaltyCardId = loyaltyCardId;
            return _this;
        }
        return LoyaltyCardPointsBalanceOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.LoyaltyCardPointsBalanceOperationRequest = LoyaltyCardPointsBalanceOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var OverrideLineTaxFromListOperationResponse = (function (_super) {
        __extends(OverrideLineTaxFromListOperationResponse, _super);
        function OverrideLineTaxFromListOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return OverrideLineTaxFromListOperationResponse;
    }(Commerce.Response));
    Commerce.OverrideLineTaxFromListOperationResponse = OverrideLineTaxFromListOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var OverrideLineTaxFromListOperationRequest = (function (_super) {
        __extends(OverrideLineTaxFromListOperationRequest, _super);
        function OverrideLineTaxFromListOperationRequest(correlationId, cartLineId) {
            var _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.OverrideTaxLineList, correlationId) || this;
            _this.cartLineId = cartLineId;
            return _this;
        }
        return OverrideLineTaxFromListOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.OverrideLineTaxFromListOperationRequest = OverrideLineTaxFromListOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var OverrideLineTaxOperationResponse = (function (_super) {
        __extends(OverrideLineTaxOperationResponse, _super);
        function OverrideLineTaxOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return OverrideLineTaxOperationResponse;
    }(Commerce.Response));
    Commerce.OverrideLineTaxOperationResponse = OverrideLineTaxOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var OverrideLineTaxOperationRequest = (function (_super) {
        __extends(OverrideLineTaxOperationRequest, _super);
        function OverrideLineTaxOperationRequest(correlationId, cartLineId, taxOverrideCode) {
            var _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.OverrideTaxLine, correlationId) || this;
            _this.cartLineId = cartLineId;
            _this.taxOverrideCode = taxOverrideCode;
            return _this;
        }
        return OverrideLineTaxOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.OverrideLineTaxOperationRequest = OverrideLineTaxOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var OverrideTransactionTaxOperationResponse = (function (_super) {
        __extends(OverrideTransactionTaxOperationResponse, _super);
        function OverrideTransactionTaxOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return OverrideTransactionTaxOperationResponse;
    }(Commerce.Response));
    Commerce.OverrideTransactionTaxOperationResponse = OverrideTransactionTaxOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var OverrideTransactionTaxOperationRequest = (function (_super) {
        __extends(OverrideTransactionTaxOperationRequest, _super);
        function OverrideTransactionTaxOperationRequest(correlationId, taxOverrideCode) {
            var _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.OverrideTaxTransaction, correlationId) || this;
            _this.taxOverrideCode = taxOverrideCode;
            return _this;
        }
        return OverrideTransactionTaxOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.OverrideTransactionTaxOperationRequest = OverrideTransactionTaxOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PickupAllOperationResponse = (function (_super) {
        __extends(PickupAllOperationResponse, _super);
        function PickupAllOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return PickupAllOperationResponse;
    }(Commerce.Response));
    Commerce.PickupAllOperationResponse = PickupAllOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PickupAllOperationRequest = (function (_super) {
        __extends(PickupAllOperationRequest, _super);
        function PickupAllOperationRequest(correlationId, pickupDate, orgUnitNumber) {
            var _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.PickupAllProducts, correlationId) || this;
            _this.pickupDate = pickupDate;
            _this.orgUnitNumber = orgUnitNumber;
            return _this;
        }
        return PickupAllOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.PickupAllOperationRequest = PickupAllOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PriceOverrideOperationResponse = (function (_super) {
        __extends(PriceOverrideOperationResponse, _super);
        function PriceOverrideOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return PriceOverrideOperationResponse;
    }(Commerce.Response));
    Commerce.PriceOverrideOperationResponse = PriceOverrideOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PriceOverrideOperationRequest = (function (_super) {
        __extends(PriceOverrideOperationRequest, _super);
        function PriceOverrideOperationRequest(cartLineId, price, correlationId) {
            var _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.PriceOverride, correlationId) || this;
            _this.cartLineId = cartLineId;
            _this.price = price;
            return _this;
        }
        return PriceOverrideOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.PriceOverrideOperationRequest = PriceOverrideOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SafeDropOperationResponse = (function (_super) {
        __extends(SafeDropOperationResponse, _super);
        function SafeDropOperationResponse(transaction) {
            var _this = _super.call(this) || this;
            _this.transaction = transaction;
            return _this;
        }
        return SafeDropOperationResponse;
    }(Commerce.Response));
    Commerce.SafeDropOperationResponse = SafeDropOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SafeDropOperationRequest = (function (_super) {
        __extends(SafeDropOperationRequest, _super);
        function SafeDropOperationRequest(correlationId) {
            return _super.call(this, Commerce.Proxy.Entities.RetailOperation.SafeDrop, correlationId) || this;
        }
        return SafeDropOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.SafeDropOperationRequest = SafeDropOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SetCartLineCommentOperationResponse = (function (_super) {
        __extends(SetCartLineCommentOperationResponse, _super);
        function SetCartLineCommentOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return SetCartLineCommentOperationResponse;
    }(Commerce.Response));
    Commerce.SetCartLineCommentOperationResponse = SetCartLineCommentOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SetCartLineCommentOperationRequest = (function (_super) {
        __extends(SetCartLineCommentOperationRequest, _super);
        function SetCartLineCommentOperationRequest(cartLineId, comment, correlationId) {
            var _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.ItemComment, correlationId) || this;
            _this.cartLineId = cartLineId;
            _this.comment = comment;
            return _this;
        }
        return SetCartLineCommentOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.SetCartLineCommentOperationRequest = SetCartLineCommentOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SetCartLineQuantityOperationResponse = (function (_super) {
        __extends(SetCartLineQuantityOperationResponse, _super);
        function SetCartLineQuantityOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return SetCartLineQuantityOperationResponse;
    }(Commerce.Response));
    Commerce.SetCartLineQuantityOperationResponse = SetCartLineQuantityOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SetCartLineQuantityOperationRequest = (function (_super) {
        __extends(SetCartLineQuantityOperationRequest, _super);
        function SetCartLineQuantityOperationRequest(correlationId, cartLineId, quantity) {
            var _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.SetQuantity, correlationId) || this;
            _this.cartLineId = cartLineId;
            _this.quantity = quantity;
            return _this;
        }
        return SetCartLineQuantityOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.SetCartLineQuantityOperationRequest = SetCartLineQuantityOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SetCustomerOnCartOperationResponse = (function (_super) {
        __extends(SetCustomerOnCartOperationResponse, _super);
        function SetCustomerOnCartOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return SetCustomerOnCartOperationResponse;
    }(Commerce.Response));
    Commerce.SetCustomerOnCartOperationResponse = SetCustomerOnCartOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SetCustomerOnCartOperationRequest = (function (_super) {
        __extends(SetCustomerOnCartOperationRequest, _super);
        function SetCustomerOnCartOperationRequest(correlationId, customerAccountNumber) {
            var _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.SetCustomer, correlationId) || this;
            _this.customerAccountNumber = customerAccountNumber;
            return _this;
        }
        return SetCustomerOnCartOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.SetCustomerOnCartOperationRequest = SetCustomerOnCartOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SetTransactionCommentOperationRequest = (function (_super) {
        __extends(SetTransactionCommentOperationRequest, _super);
        function SetTransactionCommentOperationRequest(correlationId, comment) {
            var _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.TransactionComment, correlationId) || this;
            _this.comment = comment;
            return _this;
        }
        return SetTransactionCommentOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.SetTransactionCommentOperationRequest = SetTransactionCommentOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SetTransactionCommentOperationResponse = (function (_super) {
        __extends(SetTransactionCommentOperationResponse, _super);
        function SetTransactionCommentOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return SetTransactionCommentOperationResponse;
    }(Commerce.Response));
    Commerce.SetTransactionCommentOperationResponse = SetTransactionCommentOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SuspendCurrentCartOperationResponse = (function (_super) {
        __extends(SuspendCurrentCartOperationResponse, _super);
        function SuspendCurrentCartOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return SuspendCurrentCartOperationResponse;
    }(Commerce.Response));
    Commerce.SuspendCurrentCartOperationResponse = SuspendCurrentCartOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SuspendCurrentCartOperationRequest = (function (_super) {
        __extends(SuspendCurrentCartOperationRequest, _super);
        function SuspendCurrentCartOperationRequest(correlationId) {
            return _super.call(this, Commerce.Proxy.Entities.RetailOperation.SuspendTransaction, correlationId) || this;
        }
        return SuspendCurrentCartOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.SuspendCurrentCartOperationRequest = SuspendCurrentCartOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var TenderDeclarationOperationResponse = (function (_super) {
        __extends(TenderDeclarationOperationResponse, _super);
        function TenderDeclarationOperationResponse(transaction) {
            var _this = _super.call(this) || this;
            _this.transaction = transaction;
            return _this;
        }
        return TenderDeclarationOperationResponse;
    }(Commerce.Response));
    Commerce.TenderDeclarationOperationResponse = TenderDeclarationOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var TenderDeclarationOperationRequest = (function (_super) {
        __extends(TenderDeclarationOperationRequest, _super);
        function TenderDeclarationOperationRequest(correlationId) {
            return _super.call(this, Commerce.Proxy.Entities.RetailOperation.TenderDeclaration, correlationId) || this;
        }
        return TenderDeclarationOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.TenderDeclarationOperationRequest = TenderDeclarationOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var TenderRemovalOperationResponse = (function (_super) {
        __extends(TenderRemovalOperationResponse, _super);
        function TenderRemovalOperationResponse(transaction) {
            var _this = _super.call(this) || this;
            _this.transaction = transaction;
            return _this;
        }
        return TenderRemovalOperationResponse;
    }(Commerce.Response));
    Commerce.TenderRemovalOperationResponse = TenderRemovalOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var TenderRemovalOperationRequest = (function (_super) {
        __extends(TenderRemovalOperationRequest, _super);
        function TenderRemovalOperationRequest(correlationId) {
            return _super.call(this, Commerce.Proxy.Entities.RetailOperation.TenderRemoval, correlationId) || this;
        }
        return TenderRemovalOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.TenderRemovalOperationRequest = TenderRemovalOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var TotalDiscountAmountOperationResponse = (function (_super) {
        __extends(TotalDiscountAmountOperationResponse, _super);
        function TotalDiscountAmountOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return TotalDiscountAmountOperationResponse;
    }(Commerce.Response));
    Commerce.TotalDiscountAmountOperationResponse = TotalDiscountAmountOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var TotalDiscountAmountOperationRequest = (function (_super) {
        __extends(TotalDiscountAmountOperationRequest, _super);
        function TotalDiscountAmountOperationRequest(cart, correlationId, discountValue) {
            var _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.TotalDiscountAmount, correlationId) || this;
            _this.cart = cart;
            _this.discountValue = discountValue;
            return _this;
        }
        return TotalDiscountAmountOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.TotalDiscountAmountOperationRequest = TotalDiscountAmountOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var TotalDiscountPercentOperationResponse = (function (_super) {
        __extends(TotalDiscountPercentOperationResponse, _super);
        function TotalDiscountPercentOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return TotalDiscountPercentOperationResponse;
    }(Commerce.Response));
    Commerce.TotalDiscountPercentOperationResponse = TotalDiscountPercentOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var TotalDiscountPercentOperationRequest = (function (_super) {
        __extends(TotalDiscountPercentOperationRequest, _super);
        function TotalDiscountPercentOperationRequest(cart, correlationId, discountValue) {
            var _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.TotalDiscountPercent, correlationId) || this;
            _this.cart = cart;
            _this.discountValue = discountValue;
            return _this;
        }
        return TotalDiscountPercentOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.TotalDiscountPercentOperationRequest = TotalDiscountPercentOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var VoidCartLineOperationResponse = (function (_super) {
        __extends(VoidCartLineOperationResponse, _super);
        function VoidCartLineOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return VoidCartLineOperationResponse;
    }(Commerce.Response));
    Commerce.VoidCartLineOperationResponse = VoidCartLineOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var VoidCartLineOperationRequest = (function (_super) {
        __extends(VoidCartLineOperationRequest, _super);
        function VoidCartLineOperationRequest(cartLineId, correlationId) {
            var _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.VoidItem, correlationId) || this;
            _this.cartLineId = cartLineId;
            return _this;
        }
        return VoidCartLineOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.VoidCartLineOperationRequest = VoidCartLineOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var VoidTenderLineOperationResponse = (function (_super) {
        __extends(VoidTenderLineOperationResponse, _super);
        function VoidTenderLineOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return VoidTenderLineOperationResponse;
    }(Commerce.Response));
    Commerce.VoidTenderLineOperationResponse = VoidTenderLineOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var VoidTenderLineOperationRequest = (function (_super) {
        __extends(VoidTenderLineOperationRequest, _super);
        function VoidTenderLineOperationRequest(tenderLineId, correlationId) {
            var _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.VoidPayment, correlationId) || this;
            _this.tenderLineId = tenderLineId;
            return _this;
        }
        return VoidTenderLineOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.VoidTenderLineOperationRequest = VoidTenderLineOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var VoidTransactionOperationResponse = (function (_super) {
        __extends(VoidTransactionOperationResponse, _super);
        function VoidTransactionOperationResponse(cart) {
            var _this = _super.call(this) || this;
            _this.cart = cart;
            return _this;
        }
        return VoidTransactionOperationResponse;
    }(Commerce.Response));
    Commerce.VoidTransactionOperationResponse = VoidTransactionOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var VoidTransactionOperationRequest = (function (_super) {
        __extends(VoidTransactionOperationRequest, _super);
        function VoidTransactionOperationRequest(promptConfirmation, correlationId) {
            var _this = _super.call(this, Commerce.Proxy.Entities.RetailOperation.VoidTransaction, correlationId) || this;
            _this.promptConfirmation = promptConfirmation;
            return _this;
        }
        return VoidTransactionOperationRequest;
    }(Commerce.OperationRequest));
    Commerce.VoidTransactionOperationRequest = VoidTransactionOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var AddPreprocessedTenderLineToCartClientRequest = (function (_super) {
        __extends(AddPreprocessedTenderLineToCartClientRequest, _super);
        function AddPreprocessedTenderLineToCartClientRequest(tenderLine, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.tenderLine = tenderLine;
            return _this;
        }
        return AddPreprocessedTenderLineToCartClientRequest;
    }(Commerce.Request));
    Commerce.AddPreprocessedTenderLineToCartClientRequest = AddPreprocessedTenderLineToCartClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var AddPreprocessedTenderLineToCartClientResponse = (function (_super) {
        __extends(AddPreprocessedTenderLineToCartClientResponse, _super);
        function AddPreprocessedTenderLineToCartClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return AddPreprocessedTenderLineToCartClientResponse;
    }(Commerce.ClientResponse));
    Commerce.AddPreprocessedTenderLineToCartClientResponse = AddPreprocessedTenderLineToCartClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Payments;
    (function (Payments) {
        "use strict";
        var GetGiftCardByIdServiceRequest = (function (_super) {
            __extends(GetGiftCardByIdServiceRequest, _super);
            function GetGiftCardByIdServiceRequest(correlationId, giftCardId) {
                var _this = _super.call(this, correlationId) || this;
                _this.giftCardId = giftCardId;
                return _this;
            }
            return GetGiftCardByIdServiceRequest;
        }(Commerce.ServiceRequest));
        Payments.GetGiftCardByIdServiceRequest = GetGiftCardByIdServiceRequest;
    })(Payments = Commerce.Payments || (Commerce.Payments = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Payments;
    (function (Payments) {
        "use strict";
        var GetGiftCardByIdServiceResponse = (function (_super) {
            __extends(GetGiftCardByIdServiceResponse, _super);
            function GetGiftCardByIdServiceResponse(giftCard) {
                var _this = _super.call(this) || this;
                _this.giftCard = giftCard;
                return _this;
            }
            return GetGiftCardByIdServiceResponse;
        }(Commerce.ServiceResponse));
        Payments.GetGiftCardByIdServiceResponse = GetGiftCardByIdServiceResponse;
    })(Payments = Commerce.Payments || (Commerce.Payments = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetPaymentCardTypeByBinRangeClientRequest = (function (_super) {
        __extends(GetPaymentCardTypeByBinRangeClientRequest, _super);
        function GetPaymentCardTypeByBinRangeClientRequest(paymentCardNumber, isSwipe, cardInfo, extensionTransactionProperties, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.paymentCardNumber = paymentCardNumber;
            _this.isSwipe = isSwipe;
            _this.cardInfo = cardInfo;
            _this.extensionTransactionProperties = extensionTransactionProperties;
            return _this;
        }
        return GetPaymentCardTypeByBinRangeClientRequest;
    }(Commerce.Request));
    Commerce.GetPaymentCardTypeByBinRangeClientRequest = GetPaymentCardTypeByBinRangeClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetPaymentCardTypeByBinRangeClientResponse = (function (_super) {
        __extends(GetPaymentCardTypeByBinRangeClientResponse, _super);
        function GetPaymentCardTypeByBinRangeClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetPaymentCardTypeByBinRangeClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetPaymentCardTypeByBinRangeClientResponse = GetPaymentCardTypeByBinRangeClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Payments;
    (function (Payments) {
        var UpdateTenderLineSignatureServiceRequest = (function (_super) {
            __extends(UpdateTenderLineSignatureServiceRequest, _super);
            function UpdateTenderLineSignatureServiceRequest(correlationId, tenderLineId, signatureData) {
                var _this = _super.call(this, correlationId) || this;
                _this.tenderLineId = tenderLineId;
                _this.signatureData = signatureData;
                return _this;
            }
            return UpdateTenderLineSignatureServiceRequest;
        }(Commerce.ServiceRequest));
        Payments.UpdateTenderLineSignatureServiceRequest = UpdateTenderLineSignatureServiceRequest;
    })(Payments = Commerce.Payments || (Commerce.Payments = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Payments;
    (function (Payments) {
        var UpdateTenderLineSignatureServiceResponse = (function (_super) {
            __extends(UpdateTenderLineSignatureServiceResponse, _super);
            function UpdateTenderLineSignatureServiceResponse(cart) {
                var _this = _super.call(this) || this;
                _this.cart = cart;
                return _this;
            }
            return UpdateTenderLineSignatureServiceResponse;
        }(Commerce.ServiceResponse));
        Payments.UpdateTenderLineSignatureServiceResponse = UpdateTenderLineSignatureServiceResponse;
    })(Payments = Commerce.Payments || (Commerce.Payments = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CardPaymentAuthorizePaymentRequest = (function (_super) {
        __extends(CardPaymentAuthorizePaymentRequest, _super);
        function CardPaymentAuthorizePaymentRequest(paymentConnectorId, amount, tenderInfo, extensionTransactionProperties, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.paymentConnectorId = paymentConnectorId;
            _this.amount = amount;
            _this.tenderInfo = tenderInfo;
            _this.extensionTransactionProperties = extensionTransactionProperties;
            return _this;
        }
        return CardPaymentAuthorizePaymentRequest;
    }(Commerce.Request));
    Commerce.CardPaymentAuthorizePaymentRequest = CardPaymentAuthorizePaymentRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CardPaymentAuthorizePaymentResponse = (function (_super) {
        __extends(CardPaymentAuthorizePaymentResponse, _super);
        function CardPaymentAuthorizePaymentResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CardPaymentAuthorizePaymentResponse;
    }(Commerce.ClientResponse));
    Commerce.CardPaymentAuthorizePaymentResponse = CardPaymentAuthorizePaymentResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CardPaymentBeginTransactionRequest = (function (_super) {
        __extends(CardPaymentBeginTransactionRequest, _super);
        function CardPaymentBeginTransactionRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return CardPaymentBeginTransactionRequest;
    }(Commerce.Request));
    Commerce.CardPaymentBeginTransactionRequest = CardPaymentBeginTransactionRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CardPaymentBeginTransactionResponse = (function (_super) {
        __extends(CardPaymentBeginTransactionResponse, _super);
        function CardPaymentBeginTransactionResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CardPaymentBeginTransactionResponse;
    }(Commerce.Response));
    Commerce.CardPaymentBeginTransactionResponse = CardPaymentBeginTransactionResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CardPaymentCapturePaymentRequest = (function (_super) {
        __extends(CardPaymentCapturePaymentRequest, _super);
        function CardPaymentCapturePaymentRequest(amount, paymentProperties, extensionTransactionProperties, correlationId, paymentServiceAccountId) {
            var _this = _super.call(this, correlationId) || this;
            _this.amount = amount;
            _this.paymentProperties = paymentProperties;
            _this.paymentServiceAccountId = paymentServiceAccountId;
            _this.extensionTransactionProperties = extensionTransactionProperties;
            return _this;
        }
        return CardPaymentCapturePaymentRequest;
    }(Commerce.Request));
    Commerce.CardPaymentCapturePaymentRequest = CardPaymentCapturePaymentRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CardPaymentCapturePaymentResponse = (function (_super) {
        __extends(CardPaymentCapturePaymentResponse, _super);
        function CardPaymentCapturePaymentResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CardPaymentCapturePaymentResponse;
    }(Commerce.ClientResponse));
    Commerce.CardPaymentCapturePaymentResponse = CardPaymentCapturePaymentResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CardPaymentEndTransactionRequest = (function (_super) {
        __extends(CardPaymentEndTransactionRequest, _super);
        function CardPaymentEndTransactionRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return CardPaymentEndTransactionRequest;
    }(Commerce.Request));
    Commerce.CardPaymentEndTransactionRequest = CardPaymentEndTransactionRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CardPaymentEndTransactionResponse = (function (_super) {
        __extends(CardPaymentEndTransactionResponse, _super);
        function CardPaymentEndTransactionResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CardPaymentEndTransactionResponse;
    }(Commerce.Response));
    Commerce.CardPaymentEndTransactionResponse = CardPaymentEndTransactionResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CardPaymentEnquireGiftCardBalancePeripheralRequest = (function (_super) {
        __extends(CardPaymentEnquireGiftCardBalancePeripheralRequest, _super);
        function CardPaymentEnquireGiftCardBalancePeripheralRequest(correlationId, paymentConnectorId, tenderInfo, extensionTransactionProperties) {
            var _this = _super.call(this, correlationId) || this;
            _this.paymentConnectorId = paymentConnectorId;
            _this.tenderInfo = tenderInfo;
            _this.extensionTransactionProperties = Commerce.ObjectExtensions.isNullOrUndefined(extensionTransactionProperties) ? null : extensionTransactionProperties;
            return _this;
        }
        return CardPaymentEnquireGiftCardBalancePeripheralRequest;
    }(Commerce.Request));
    Commerce.CardPaymentEnquireGiftCardBalancePeripheralRequest = CardPaymentEnquireGiftCardBalancePeripheralRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CardPaymentEnquireGiftCardBalancePeripheralResponse = (function (_super) {
        __extends(CardPaymentEnquireGiftCardBalancePeripheralResponse, _super);
        function CardPaymentEnquireGiftCardBalancePeripheralResponse(paymentInfo) {
            var _this = _super.call(this) || this;
            _this.paymentInfo = paymentInfo;
            return _this;
        }
        return CardPaymentEnquireGiftCardBalancePeripheralResponse;
    }(Commerce.Response));
    Commerce.CardPaymentEnquireGiftCardBalancePeripheralResponse = CardPaymentEnquireGiftCardBalancePeripheralResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CardPaymentExecuteTaskRequest = (function (_super) {
        __extends(CardPaymentExecuteTaskRequest, _super);
        function CardPaymentExecuteTaskRequest(task, extensionTransactionProperties, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.task = task;
            _this.extensionTransactionProperties = extensionTransactionProperties;
            return _this;
        }
        return CardPaymentExecuteTaskRequest;
    }(Commerce.Request));
    Commerce.CardPaymentExecuteTaskRequest = CardPaymentExecuteTaskRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CardPaymentExecuteTaskResponse = (function (_super) {
        __extends(CardPaymentExecuteTaskResponse, _super);
        function CardPaymentExecuteTaskResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CardPaymentExecuteTaskResponse;
    }(Commerce.ClientResponse));
    Commerce.CardPaymentExecuteTaskResponse = CardPaymentExecuteTaskResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CardPaymentRefundPaymentRequest = (function (_super) {
        __extends(CardPaymentRefundPaymentRequest, _super);
        function CardPaymentRefundPaymentRequest(paymentConnectorId, amount, tenderInfo, extensionTransactionProperties, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.paymentConnectorId = paymentConnectorId;
            _this.amount = amount;
            _this.tenderInfo = tenderInfo;
            _this.extensionTransactionProperties = extensionTransactionProperties;
            return _this;
        }
        return CardPaymentRefundPaymentRequest;
    }(Commerce.Request));
    Commerce.CardPaymentRefundPaymentRequest = CardPaymentRefundPaymentRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CardPaymentRefundPaymentResponse = (function (_super) {
        __extends(CardPaymentRefundPaymentResponse, _super);
        function CardPaymentRefundPaymentResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CardPaymentRefundPaymentResponse;
    }(Commerce.ClientResponse));
    Commerce.CardPaymentRefundPaymentResponse = CardPaymentRefundPaymentResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CardPaymentVoidPaymentRequest = (function (_super) {
        __extends(CardPaymentVoidPaymentRequest, _super);
        function CardPaymentVoidPaymentRequest(paymentConnectorId, amount, tenderInfo, paymentProperties, extensionTransactionProperties, correlationId, paymentServiceAccountId) {
            var _this = _super.call(this, correlationId) || this;
            _this.paymentConnectorId = paymentConnectorId;
            _this.amount = amount;
            _this.tenderInfo = tenderInfo;
            _this.paymentProperties = paymentProperties;
            _this.paymentServiceAccountId = paymentServiceAccountId;
            _this.extensionTransactionProperties = extensionTransactionProperties;
            return _this;
        }
        return CardPaymentVoidPaymentRequest;
    }(Commerce.Request));
    Commerce.CardPaymentVoidPaymentRequest = CardPaymentVoidPaymentRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CardPaymentVoidPaymentResponse = (function (_super) {
        __extends(CardPaymentVoidPaymentResponse, _super);
        function CardPaymentVoidPaymentResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CardPaymentVoidPaymentResponse;
    }(Commerce.ClientResponse));
    Commerce.CardPaymentVoidPaymentResponse = CardPaymentVoidPaymentResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CashDrawerIsOpenRequest = (function (_super) {
        __extends(CashDrawerIsOpenRequest, _super);
        function CashDrawerIsOpenRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return CashDrawerIsOpenRequest;
    }(Commerce.Request));
    Commerce.CashDrawerIsOpenRequest = CashDrawerIsOpenRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CashDrawerIsOpenResponse = (function (_super) {
        __extends(CashDrawerIsOpenResponse, _super);
        function CashDrawerIsOpenResponse(isOpen) {
            var _this = _super.call(this) || this;
            _this.isOpen = isOpen;
            return _this;
        }
        return CashDrawerIsOpenResponse;
    }(Commerce.Response));
    Commerce.CashDrawerIsOpenResponse = CashDrawerIsOpenResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CashDrawerOpenRequest = (function (_super) {
        __extends(CashDrawerOpenRequest, _super);
        function CashDrawerOpenRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return CashDrawerOpenRequest;
    }(Commerce.Request));
    Commerce.CashDrawerOpenRequest = CashDrawerOpenRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CashDrawerOpenResponse = (function (_super) {
        __extends(CashDrawerOpenResponse, _super);
        function CashDrawerOpenResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CashDrawerOpenResponse;
    }(Commerce.Response));
    Commerce.CashDrawerOpenResponse = CashDrawerOpenResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetActiveHardwareStationClientRequest = (function (_super) {
        __extends(GetActiveHardwareStationClientRequest, _super);
        function GetActiveHardwareStationClientRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return GetActiveHardwareStationClientRequest;
    }(Commerce.ClientRequest));
    Commerce.GetActiveHardwareStationClientRequest = GetActiveHardwareStationClientRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetActiveHardwareStationClientResponse = (function (_super) {
        __extends(GetActiveHardwareStationClientResponse, _super);
        function GetActiveHardwareStationClientResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GetActiveHardwareStationClientResponse;
    }(Commerce.ClientResponse));
    Commerce.GetActiveHardwareStationClientResponse = GetActiveHardwareStationClientResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var HardwareStationDeviceActionRequest = (function (_super) {
        __extends(HardwareStationDeviceActionRequest, _super);
        function HardwareStationDeviceActionRequest(device, action, actionData, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.device = device;
            _this.action = action;
            _this.actionData = actionData;
            return _this;
        }
        return HardwareStationDeviceActionRequest;
    }(Commerce.Request));
    Commerce.HardwareStationDeviceActionRequest = HardwareStationDeviceActionRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var HardwareStationDeviceActionResponse = (function (_super) {
        __extends(HardwareStationDeviceActionResponse, _super);
        function HardwareStationDeviceActionResponse(response) {
            var _this = _super.call(this) || this;
            _this.response = response;
            return _this;
        }
        return HardwareStationDeviceActionResponse;
    }(Commerce.Response));
    Commerce.HardwareStationDeviceActionResponse = HardwareStationDeviceActionResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var HardwareStationStatusRequest = (function (_super) {
        __extends(HardwareStationStatusRequest, _super);
        function HardwareStationStatusRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return HardwareStationStatusRequest;
    }(Commerce.Request));
    Commerce.HardwareStationStatusRequest = HardwareStationStatusRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var HardwareStationStatusResponse = (function (_super) {
        __extends(HardwareStationStatusResponse, _super);
        function HardwareStationStatusResponse(isActive) {
            var _this = _super.call(this) || this;
            _this.isActive = isActive;
            return _this;
        }
        return HardwareStationStatusResponse;
    }(Commerce.Response));
    Commerce.HardwareStationStatusResponse = HardwareStationStatusResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var LineDisplayDisplayLinesRequest = (function (_super) {
        __extends(LineDisplayDisplayLinesRequest, _super);
        function LineDisplayDisplayLinesRequest(lines, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.lines = lines;
            return _this;
        }
        return LineDisplayDisplayLinesRequest;
    }(Commerce.Request));
    Commerce.LineDisplayDisplayLinesRequest = LineDisplayDisplayLinesRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var LineDisplayDisplayLinesResponse = (function (_super) {
        __extends(LineDisplayDisplayLinesResponse, _super);
        function LineDisplayDisplayLinesResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return LineDisplayDisplayLinesResponse;
    }(Commerce.Response));
    Commerce.LineDisplayDisplayLinesResponse = LineDisplayDisplayLinesResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Peripherals;
    (function (Peripherals) {
        "use strict";
        var PaymentTerminalActivateGiftCardPeripheralRequest = (function (_super) {
            __extends(PaymentTerminalActivateGiftCardPeripheralRequest, _super);
            function PaymentTerminalActivateGiftCardPeripheralRequest(correlationId, amount, tenderInfo, paymentConnectorId, extensionTransactionProperties) {
                var _this = _super.call(this, correlationId) || this;
                _this.amount = amount;
                _this.tenderInfo = tenderInfo;
                _this.paymentConnectorId = paymentConnectorId;
                _this.extensionTransactionProperties = Commerce.ObjectExtensions.isNullOrUndefined(extensionTransactionProperties) ? null : extensionTransactionProperties;
                return _this;
            }
            return PaymentTerminalActivateGiftCardPeripheralRequest;
        }(Commerce.Request));
        Peripherals.PaymentTerminalActivateGiftCardPeripheralRequest = PaymentTerminalActivateGiftCardPeripheralRequest;
    })(Peripherals = Commerce.Peripherals || (Commerce.Peripherals = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Peripherals;
    (function (Peripherals) {
        "use strict";
        var PaymentTerminalActivateGiftCardPeripheralResponse = (function (_super) {
            __extends(PaymentTerminalActivateGiftCardPeripheralResponse, _super);
            function PaymentTerminalActivateGiftCardPeripheralResponse(paymentInfo) {
                var _this = _super.call(this) || this;
                _this.paymentInfo = paymentInfo;
                return _this;
            }
            return PaymentTerminalActivateGiftCardPeripheralResponse;
        }(Commerce.Response));
        Peripherals.PaymentTerminalActivateGiftCardPeripheralResponse = PaymentTerminalActivateGiftCardPeripheralResponse;
    })(Peripherals = Commerce.Peripherals || (Commerce.Peripherals = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Peripherals;
    (function (Peripherals) {
        "use strict";
        var PaymentTerminalAddBalanceToGiftCardPeripheralRequest = (function (_super) {
            __extends(PaymentTerminalAddBalanceToGiftCardPeripheralRequest, _super);
            function PaymentTerminalAddBalanceToGiftCardPeripheralRequest(correlationId, amount, tenderInfo, paymentConnectorId, extensionTransactionProperties) {
                var _this = _super.call(this, correlationId) || this;
                _this.amount = amount;
                _this.tenderInfo = tenderInfo;
                _this.paymentConnectorId = paymentConnectorId;
                _this.extensionTransactionProperties = Commerce.ObjectExtensions.isNullOrUndefined(extensionTransactionProperties) ? null : extensionTransactionProperties;
                return _this;
            }
            return PaymentTerminalAddBalanceToGiftCardPeripheralRequest;
        }(Commerce.Request));
        Peripherals.PaymentTerminalAddBalanceToGiftCardPeripheralRequest = PaymentTerminalAddBalanceToGiftCardPeripheralRequest;
    })(Peripherals = Commerce.Peripherals || (Commerce.Peripherals = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Peripherals;
    (function (Peripherals) {
        "use strict";
        var PaymentTerminalAddBalanceToGiftCardPeripheralResponse = (function (_super) {
            __extends(PaymentTerminalAddBalanceToGiftCardPeripheralResponse, _super);
            function PaymentTerminalAddBalanceToGiftCardPeripheralResponse(paymentInfo) {
                var _this = _super.call(this) || this;
                _this.paymentInfo = paymentInfo;
                return _this;
            }
            return PaymentTerminalAddBalanceToGiftCardPeripheralResponse;
        }(Commerce.Response));
        Peripherals.PaymentTerminalAddBalanceToGiftCardPeripheralResponse = PaymentTerminalAddBalanceToGiftCardPeripheralResponse;
    })(Peripherals = Commerce.Peripherals || (Commerce.Peripherals = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PaymentTerminalAuthorizePaymentActivityRequest = (function (_super) {
        __extends(PaymentTerminalAuthorizePaymentActivityRequest, _super);
        function PaymentTerminalAuthorizePaymentActivityRequest(paymentConnectorId, amount, tenderInfo, voiceAuthorization, isManualEntry, extensionTransactionProperties, correlationId, paymentTransactionReferenceData) {
            var _this = _super.call(this, correlationId) || this;
            _this.paymentConnectorId = paymentConnectorId;
            _this.amount = amount;
            _this.tenderInfo = tenderInfo;
            _this.voiceAuthorization = voiceAuthorization;
            _this.isManualEntry = isManualEntry;
            _this.paymentTransactionReferenceData = paymentTransactionReferenceData;
            _this.extensionTransactionProperties = extensionTransactionProperties;
            return _this;
        }
        return PaymentTerminalAuthorizePaymentActivityRequest;
    }(Commerce.Request));
    Commerce.PaymentTerminalAuthorizePaymentActivityRequest = PaymentTerminalAuthorizePaymentActivityRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PaymentTerminalAuthorizePaymentActivityResponse = (function (_super) {
        __extends(PaymentTerminalAuthorizePaymentActivityResponse, _super);
        function PaymentTerminalAuthorizePaymentActivityResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PaymentTerminalAuthorizePaymentActivityResponse;
    }(Commerce.ClientResponse));
    Commerce.PaymentTerminalAuthorizePaymentActivityResponse = PaymentTerminalAuthorizePaymentActivityResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PaymentTerminalAuthorizePaymentRequest = (function (_super) {
        __extends(PaymentTerminalAuthorizePaymentRequest, _super);
        function PaymentTerminalAuthorizePaymentRequest(paymentConnectorId, amount, tenderInfo, voiceAuthorization, isManualEntry, extensionTransactionProperties, correlationId, paymentTransactionReferenceData) {
            var _this = _super.call(this, correlationId) || this;
            _this.paymentConnectorId = paymentConnectorId;
            _this.amount = amount;
            _this.tenderInfo = tenderInfo;
            _this.voiceAuthorization = voiceAuthorization;
            _this.isManualEntry = isManualEntry;
            _this.extensionTransactionProperties = extensionTransactionProperties;
            _this.paymentTransactionReferenceData = paymentTransactionReferenceData;
            return _this;
        }
        return PaymentTerminalAuthorizePaymentRequest;
    }(Commerce.Request));
    Commerce.PaymentTerminalAuthorizePaymentRequest = PaymentTerminalAuthorizePaymentRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PaymentTerminalAuthorizePaymentResponse = (function (_super) {
        __extends(PaymentTerminalAuthorizePaymentResponse, _super);
        function PaymentTerminalAuthorizePaymentResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PaymentTerminalAuthorizePaymentResponse;
    }(Commerce.ClientResponse));
    Commerce.PaymentTerminalAuthorizePaymentResponse = PaymentTerminalAuthorizePaymentResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PaymentTerminalBeginTransactionRequest = (function (_super) {
        __extends(PaymentTerminalBeginTransactionRequest, _super);
        function PaymentTerminalBeginTransactionRequest(extensionTransactionProperties, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.extensionTransactionProperties = extensionTransactionProperties;
            return _this;
        }
        return PaymentTerminalBeginTransactionRequest;
    }(Commerce.Request));
    Commerce.PaymentTerminalBeginTransactionRequest = PaymentTerminalBeginTransactionRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PaymentTerminalBeginTransactionResponse = (function (_super) {
        __extends(PaymentTerminalBeginTransactionResponse, _super);
        function PaymentTerminalBeginTransactionResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PaymentTerminalBeginTransactionResponse;
    }(Commerce.Response));
    Commerce.PaymentTerminalBeginTransactionResponse = PaymentTerminalBeginTransactionResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PaymentTerminalCancelOperationRequest = (function (_super) {
        __extends(PaymentTerminalCancelOperationRequest, _super);
        function PaymentTerminalCancelOperationRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return PaymentTerminalCancelOperationRequest;
    }(Commerce.Request));
    Commerce.PaymentTerminalCancelOperationRequest = PaymentTerminalCancelOperationRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PaymentTerminalCancelOperationResponse = (function (_super) {
        __extends(PaymentTerminalCancelOperationResponse, _super);
        function PaymentTerminalCancelOperationResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PaymentTerminalCancelOperationResponse;
    }(Commerce.Response));
    Commerce.PaymentTerminalCancelOperationResponse = PaymentTerminalCancelOperationResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PaymentTerminalCapturePaymentRequest = (function (_super) {
        __extends(PaymentTerminalCapturePaymentRequest, _super);
        function PaymentTerminalCapturePaymentRequest(amount, paymentProperties, extensionTransactionProperties, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.amount = amount;
            _this.paymentProperties = paymentProperties;
            _this.extensionTransactionProperties = extensionTransactionProperties;
            return _this;
        }
        return PaymentTerminalCapturePaymentRequest;
    }(Commerce.Request));
    Commerce.PaymentTerminalCapturePaymentRequest = PaymentTerminalCapturePaymentRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PaymentTerminalCapturePaymentResponse = (function (_super) {
        __extends(PaymentTerminalCapturePaymentResponse, _super);
        function PaymentTerminalCapturePaymentResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PaymentTerminalCapturePaymentResponse;
    }(Commerce.ClientResponse));
    Commerce.PaymentTerminalCapturePaymentResponse = PaymentTerminalCapturePaymentResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PaymentTerminalEndTransactionRequest = (function (_super) {
        __extends(PaymentTerminalEndTransactionRequest, _super);
        function PaymentTerminalEndTransactionRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return PaymentTerminalEndTransactionRequest;
    }(Commerce.Request));
    Commerce.PaymentTerminalEndTransactionRequest = PaymentTerminalEndTransactionRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PaymentTerminalEndTransactionResponse = (function (_super) {
        __extends(PaymentTerminalEndTransactionResponse, _super);
        function PaymentTerminalEndTransactionResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PaymentTerminalEndTransactionResponse;
    }(Commerce.Response));
    Commerce.PaymentTerminalEndTransactionResponse = PaymentTerminalEndTransactionResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PaymentTerminalEnquireGiftCardBalancePeripheralRequest = (function (_super) {
        __extends(PaymentTerminalEnquireGiftCardBalancePeripheralRequest, _super);
        function PaymentTerminalEnquireGiftCardBalancePeripheralRequest(correlationId, paymentConnectorId, tenderInfo, extensionTransactionProperties) {
            var _this = _super.call(this, correlationId) || this;
            _this.paymentConnectorId = paymentConnectorId;
            _this.tenderInfo = tenderInfo;
            _this.extensionTransactionProperties = Commerce.ObjectExtensions.isNullOrUndefined(extensionTransactionProperties) ? null : extensionTransactionProperties;
            return _this;
        }
        return PaymentTerminalEnquireGiftCardBalancePeripheralRequest;
    }(Commerce.Request));
    Commerce.PaymentTerminalEnquireGiftCardBalancePeripheralRequest = PaymentTerminalEnquireGiftCardBalancePeripheralRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PaymentTerminalEnquireGiftCardBalancePeripheralResponse = (function (_super) {
        __extends(PaymentTerminalEnquireGiftCardBalancePeripheralResponse, _super);
        function PaymentTerminalEnquireGiftCardBalancePeripheralResponse(paymentInfo) {
            var _this = _super.call(this) || this;
            _this.paymentInfo = paymentInfo;
            return _this;
        }
        return PaymentTerminalEnquireGiftCardBalancePeripheralResponse;
    }(Commerce.Response));
    Commerce.PaymentTerminalEnquireGiftCardBalancePeripheralResponse = PaymentTerminalEnquireGiftCardBalancePeripheralResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PaymentTerminalExecuteTaskRequest = (function (_super) {
        __extends(PaymentTerminalExecuteTaskRequest, _super);
        function PaymentTerminalExecuteTaskRequest(task, extensionTransactionProperties, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.task = task;
            _this.extensionTransactionProperties = extensionTransactionProperties;
            return _this;
        }
        return PaymentTerminalExecuteTaskRequest;
    }(Commerce.Request));
    Commerce.PaymentTerminalExecuteTaskRequest = PaymentTerminalExecuteTaskRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PaymentTerminalExecuteTaskResponse = (function (_super) {
        __extends(PaymentTerminalExecuteTaskResponse, _super);
        function PaymentTerminalExecuteTaskResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PaymentTerminalExecuteTaskResponse;
    }(Commerce.ClientResponse));
    Commerce.PaymentTerminalExecuteTaskResponse = PaymentTerminalExecuteTaskResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PaymentTerminalRefundPaymentActivityRequest = (function (_super) {
        __extends(PaymentTerminalRefundPaymentActivityRequest, _super);
        function PaymentTerminalRefundPaymentActivityRequest(paymentConnectorId, amount, tenderInfo, voiceAuthorization, isManualEntry, extensionTransactionProperties, correlationId, paymentTransactionReferenceData) {
            var _this = _super.call(this, correlationId) || this;
            _this.paymentConnectorId = paymentConnectorId;
            _this.amount = amount;
            _this.tenderInfo = tenderInfo;
            _this.voiceAuthorization = voiceAuthorization;
            _this.isManualEntry = isManualEntry;
            _this.paymentTransactionReferenceData = paymentTransactionReferenceData;
            _this.extensionTransactionProperties = extensionTransactionProperties;
            return _this;
        }
        return PaymentTerminalRefundPaymentActivityRequest;
    }(Commerce.Request));
    Commerce.PaymentTerminalRefundPaymentActivityRequest = PaymentTerminalRefundPaymentActivityRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PaymentTerminalRefundPaymentActivityResponse = (function (_super) {
        __extends(PaymentTerminalRefundPaymentActivityResponse, _super);
        function PaymentTerminalRefundPaymentActivityResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PaymentTerminalRefundPaymentActivityResponse;
    }(Commerce.ClientResponse));
    Commerce.PaymentTerminalRefundPaymentActivityResponse = PaymentTerminalRefundPaymentActivityResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PaymentTerminalRefundPaymentRequest = (function (_super) {
        __extends(PaymentTerminalRefundPaymentRequest, _super);
        function PaymentTerminalRefundPaymentRequest(paymentConnectorId, amount, tenderInfo, isManualEntry, extensionTransactionProperties, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.paymentConnectorId = paymentConnectorId;
            _this.amount = amount;
            _this.tenderInfo = tenderInfo;
            _this.isManualEntry = isManualEntry;
            _this.extensionTransactionProperties = extensionTransactionProperties;
            return _this;
        }
        return PaymentTerminalRefundPaymentRequest;
    }(Commerce.Request));
    Commerce.PaymentTerminalRefundPaymentRequest = PaymentTerminalRefundPaymentRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PaymentTerminalRefundPaymentResponse = (function (_super) {
        __extends(PaymentTerminalRefundPaymentResponse, _super);
        function PaymentTerminalRefundPaymentResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PaymentTerminalRefundPaymentResponse;
    }(Commerce.ClientResponse));
    Commerce.PaymentTerminalRefundPaymentResponse = PaymentTerminalRefundPaymentResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PaymentTerminalUpdateLinesRequest = (function (_super) {
        __extends(PaymentTerminalUpdateLinesRequest, _super);
        function PaymentTerminalUpdateLinesRequest(cart, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.cart = cart;
            return _this;
        }
        return PaymentTerminalUpdateLinesRequest;
    }(Commerce.Request));
    Commerce.PaymentTerminalUpdateLinesRequest = PaymentTerminalUpdateLinesRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PaymentTerminalUpdateLinesResponse = (function (_super) {
        __extends(PaymentTerminalUpdateLinesResponse, _super);
        function PaymentTerminalUpdateLinesResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PaymentTerminalUpdateLinesResponse;
    }(Commerce.Response));
    Commerce.PaymentTerminalUpdateLinesResponse = PaymentTerminalUpdateLinesResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PaymentTerminalVoidPaymentRequest = (function (_super) {
        __extends(PaymentTerminalVoidPaymentRequest, _super);
        function PaymentTerminalVoidPaymentRequest(paymentConnectorId, tenderInfo, amount, paymentProperties, extensionTransactionProperties, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.paymentConnectorId = paymentConnectorId;
            _this.tenderInfo = tenderInfo;
            _this.amount = amount;
            _this.paymentProperties = paymentProperties;
            _this.extensionTransactionProperties = extensionTransactionProperties;
            return _this;
        }
        return PaymentTerminalVoidPaymentRequest;
    }(Commerce.Request));
    Commerce.PaymentTerminalVoidPaymentRequest = PaymentTerminalVoidPaymentRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PaymentTerminalVoidPaymentResponse = (function (_super) {
        __extends(PaymentTerminalVoidPaymentResponse, _super);
        function PaymentTerminalVoidPaymentResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PaymentTerminalVoidPaymentResponse;
    }(Commerce.ClientResponse));
    Commerce.PaymentTerminalVoidPaymentResponse = PaymentTerminalVoidPaymentResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PrinterPrintRequest = (function (_super) {
        __extends(PrinterPrintRequest, _super);
        function PrinterPrintRequest(receipts, correlationId) {
            var _this = _super.call(this, correlationId) || this;
            _this.receipts = receipts;
            return _this;
        }
        return PrinterPrintRequest;
    }(Commerce.Request));
    Commerce.PrinterPrintRequest = PrinterPrintRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var PrinterPrintResponse = (function (_super) {
        __extends(PrinterPrintResponse, _super);
        function PrinterPrintResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PrinterPrintResponse;
    }(Commerce.Response));
    Commerce.PrinterPrintResponse = PrinterPrintResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var ScaleReadRequest = (function (_super) {
        __extends(ScaleReadRequest, _super);
        function ScaleReadRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return ScaleReadRequest;
    }(Commerce.Request));
    Commerce.ScaleReadRequest = ScaleReadRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var ScaleReadResponse = (function (_super) {
        __extends(ScaleReadResponse, _super);
        function ScaleReadResponse(valueRead) {
            var _this = _super.call(this) || this;
            _this.valueRead = valueRead;
            return _this;
        }
        return ScaleReadResponse;
    }(Commerce.Response));
    Commerce.ScaleReadResponse = ScaleReadResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CreateCustomerServiceResponse = (function (_super) {
        __extends(CreateCustomerServiceResponse, _super);
        function CreateCustomerServiceResponse(customer) {
            var _this = _super.call(this) || this;
            _this.customer = customer;
            return _this;
        }
        return CreateCustomerServiceResponse;
    }(Commerce.ServiceResponse));
    Commerce.CreateCustomerServiceResponse = CreateCustomerServiceResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CreateCustomerServiceRequest = (function (_super) {
        __extends(CreateCustomerServiceRequest, _super);
        function CreateCustomerServiceRequest(correlationId, customer) {
            var _this = _super.call(this, correlationId) || this;
            _this.customer = customer;
            return _this;
        }
        return CreateCustomerServiceRequest;
    }(Commerce.ServiceRequest));
    Commerce.CreateCustomerServiceRequest = CreateCustomerServiceRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CreateNonSalesTransactionServiceResponse = (function (_super) {
        __extends(CreateNonSalesTransactionServiceResponse, _super);
        function CreateNonSalesTransactionServiceResponse(transaction) {
            var _this = _super.call(this) || this;
            _this.transaction = transaction;
            return _this;
        }
        return CreateNonSalesTransactionServiceResponse;
    }(Commerce.ServiceResponse));
    Commerce.CreateNonSalesTransactionServiceResponse = CreateNonSalesTransactionServiceResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var CreateNonSalesTransactionServiceRequest = (function (_super) {
        __extends(CreateNonSalesTransactionServiceRequest, _super);
        function CreateNonSalesTransactionServiceRequest(correlationId, transaction) {
            var _this = _super.call(this, correlationId) || this;
            _this.transaction = transaction;
            return _this;
        }
        return CreateNonSalesTransactionServiceRequest;
    }(Commerce.ServiceRequest));
    Commerce.CreateNonSalesTransactionServiceRequest = CreateNonSalesTransactionServiceRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetCommissionSalesGroupsServiceResponse = (function (_super) {
        __extends(GetCommissionSalesGroupsServiceResponse, _super);
        function GetCommissionSalesGroupsServiceResponse(commissionSalesGroups) {
            var _this = _super.call(this) || this;
            _this.commissionSalesGroups = commissionSalesGroups;
            return _this;
        }
        return GetCommissionSalesGroupsServiceResponse;
    }(Commerce.ServiceResponse));
    Commerce.GetCommissionSalesGroupsServiceResponse = GetCommissionSalesGroupsServiceResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetCommissionSalesGroupsServiceRequest = (function (_super) {
        __extends(GetCommissionSalesGroupsServiceRequest, _super);
        function GetCommissionSalesGroupsServiceRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return GetCommissionSalesGroupsServiceRequest;
    }(Commerce.ServiceRequest));
    Commerce.GetCommissionSalesGroupsServiceRequest = GetCommissionSalesGroupsServiceRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetCurrenciesServiceResponse = (function (_super) {
        __extends(GetCurrenciesServiceResponse, _super);
        function GetCurrenciesServiceResponse(currencies) {
            var _this = _super.call(this) || this;
            _this.currencies = currencies;
            return _this;
        }
        return GetCurrenciesServiceResponse;
    }(Commerce.ServiceResponse));
    Commerce.GetCurrenciesServiceResponse = GetCurrenciesServiceResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var GetCurrenciesServiceRequest = (function (_super) {
        __extends(GetCurrenciesServiceRequest, _super);
        function GetCurrenciesServiceRequest(correlationId) {
            return _super.call(this, correlationId) || this;
        }
        return GetCurrenciesServiceRequest;
    }(Commerce.ServiceRequest));
    Commerce.GetCurrenciesServiceRequest = GetCurrenciesServiceRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Reports;
    (function (Reports) {
        "use strict";
        var GetSrsReportDataSetServiceResponse = (function (_super) {
            __extends(GetSrsReportDataSetServiceResponse, _super);
            function GetSrsReportDataSetServiceResponse(reportDataSet) {
                var _this = _super.call(this) || this;
                _this.reportDataSet = reportDataSet;
                return _this;
            }
            return GetSrsReportDataSetServiceResponse;
        }(Commerce.ServiceResponse));
        Reports.GetSrsReportDataSetServiceResponse = GetSrsReportDataSetServiceResponse;
    })(Reports = Commerce.Reports || (Commerce.Reports = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Reports;
    (function (Reports) {
        "use strict";
        var GetSrsReportDataSetServiceRequest = (function (_super) {
            __extends(GetSrsReportDataSetServiceRequest, _super);
            function GetSrsReportDataSetServiceRequest(correlationId, reportId, parameters) {
                var _this = _super.call(this, correlationId) || this;
                _this.reportId = reportId;
                _this.parameters = parameters;
                return _this;
            }
            return GetSrsReportDataSetServiceRequest;
        }(Commerce.ServiceRequest));
        Reports.GetSrsReportDataSetServiceRequest = GetSrsReportDataSetServiceRequest;
    })(Reports = Commerce.Reports || (Commerce.Reports = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SearchCommissionSalesGroupsServiceResponse = (function (_super) {
        __extends(SearchCommissionSalesGroupsServiceResponse, _super);
        function SearchCommissionSalesGroupsServiceResponse(commissionSalesGroups) {
            var _this = _super.call(this) || this;
            _this.commissionSalesGroups = commissionSalesGroups;
            return _this;
        }
        return SearchCommissionSalesGroupsServiceResponse;
    }(Commerce.ServiceResponse));
    Commerce.SearchCommissionSalesGroupsServiceResponse = SearchCommissionSalesGroupsServiceResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var SearchCommissionSalesGroupsServiceRequest = (function (_super) {
        __extends(SearchCommissionSalesGroupsServiceRequest, _super);
        function SearchCommissionSalesGroupsServiceRequest(correlationId, searchText, pageSize, skip) {
            var _this = _super.call(this, correlationId) || this;
            _this.searchText = searchText;
            _this.pageSize = pageSize;
            _this.skip = skip;
            return _this;
        }
        return SearchCommissionSalesGroupsServiceRequest;
    }(Commerce.ServiceRequest));
    Commerce.SearchCommissionSalesGroupsServiceRequest = SearchCommissionSalesGroupsServiceRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var UpdateCustomerServiceResponse = (function (_super) {
        __extends(UpdateCustomerServiceResponse, _super);
        function UpdateCustomerServiceResponse(customer) {
            var _this = _super.call(this) || this;
            _this.customer = customer;
            return _this;
        }
        return UpdateCustomerServiceResponse;
    }(Commerce.ServiceResponse));
    Commerce.UpdateCustomerServiceResponse = UpdateCustomerServiceResponse;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var UpdateCustomerServiceRequest = (function (_super) {
        __extends(UpdateCustomerServiceRequest, _super);
        function UpdateCustomerServiceRequest(correlationId, customer) {
            var _this = _super.call(this, correlationId) || this;
            _this.customer = customer;
            return _this;
        }
        return UpdateCustomerServiceRequest;
    }(Commerce.ServiceRequest));
    Commerce.UpdateCustomerServiceRequest = UpdateCustomerServiceRequest;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var CashManagement;
    (function (CashManagement) {
        "use strict";
        var CreateCashManagementTransactionClientResponseBase = (function (_super) {
            __extends(CreateCashManagementTransactionClientResponseBase, _super);
            function CreateCashManagementTransactionClientResponseBase() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CreateCashManagementTransactionClientResponseBase;
        }(Commerce.ClientResponse));
        CashManagement.CreateCashManagementTransactionClientResponseBase = CreateCashManagementTransactionClientResponseBase;
    })(CashManagement = Commerce.CashManagement || (Commerce.CashManagement = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var CashManagement;
    (function (CashManagement) {
        "use strict";
        var CreateCashManagementTransactionClientRequestBase = (function (_super) {
            __extends(CreateCashManagementTransactionClientRequestBase, _super);
            function CreateCashManagementTransactionClientRequestBase(isOperationAborted, amountEntered, denominationDetails, operationComment, shift, correlationId) {
                var _this = _super.call(this, correlationId) || this;
                _this.isOperationAborted = isOperationAborted;
                _this.denominationDetails = denominationDetails;
                _this.amountEntered = amountEntered;
                _this.operationComment = operationComment;
                _this.shift = shift;
                return _this;
            }
            return CreateCashManagementTransactionClientRequestBase;
        }(Commerce.ClientRequest));
        CashManagement.CreateCashManagementTransactionClientRequestBase = CreateCashManagementTransactionClientRequestBase;
    })(CashManagement = Commerce.CashManagement || (Commerce.CashManagement = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var CashManagement;
    (function (CashManagement) {
        "use strict";
        var CreateFloatEntryTransactionClientRequest = (function (_super) {
            __extends(CreateFloatEntryTransactionClientRequest, _super);
            function CreateFloatEntryTransactionClientRequest(isOperationAborted, amountEntered, denominationDetails, operationComment, shift, correlationId, fromShift) {
                var _this = _super.call(this, isOperationAborted, amountEntered, denominationDetails, operationComment, shift, correlationId) || this;
                _this.fromShift = fromShift;
                return _this;
            }
            return CreateFloatEntryTransactionClientRequest;
        }(CashManagement.CreateCashManagementTransactionClientRequestBase));
        CashManagement.CreateFloatEntryTransactionClientRequest = CreateFloatEntryTransactionClientRequest;
    })(CashManagement = Commerce.CashManagement || (Commerce.CashManagement = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var CashManagement;
    (function (CashManagement) {
        "use strict";
        var CreateFloatEntryTransactionClientResponse = (function (_super) {
            __extends(CreateFloatEntryTransactionClientResponse, _super);
            function CreateFloatEntryTransactionClientResponse() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CreateFloatEntryTransactionClientResponse;
        }(CashManagement.CreateCashManagementTransactionClientResponseBase));
        CashManagement.CreateFloatEntryTransactionClientResponse = CreateFloatEntryTransactionClientResponse;
    })(CashManagement = Commerce.CashManagement || (Commerce.CashManagement = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var CashManagement;
    (function (CashManagement) {
        "use strict";
        var CreateStartingAmountTransactionClientRequest = (function (_super) {
            __extends(CreateStartingAmountTransactionClientRequest, _super);
            function CreateStartingAmountTransactionClientRequest(isOperationAborted, amountEntered, denominationDetails, operationComment, shift, correlationId, fromStoreSafe) {
                var _this = _super.call(this, isOperationAborted, amountEntered, denominationDetails, operationComment, shift, correlationId) || this;
                _this.fromStoreSafe = fromStoreSafe;
                return _this;
            }
            return CreateStartingAmountTransactionClientRequest;
        }(CashManagement.CreateCashManagementTransactionClientRequestBase));
        CashManagement.CreateStartingAmountTransactionClientRequest = CreateStartingAmountTransactionClientRequest;
    })(CashManagement = Commerce.CashManagement || (Commerce.CashManagement = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var CashManagement;
    (function (CashManagement) {
        "use strict";
        var CreateStartingAmountTransactionClientResponse = (function (_super) {
            __extends(CreateStartingAmountTransactionClientResponse, _super);
            function CreateStartingAmountTransactionClientResponse() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CreateStartingAmountTransactionClientResponse;
        }(CashManagement.CreateCashManagementTransactionClientResponseBase));
        CashManagement.CreateStartingAmountTransactionClientResponse = CreateStartingAmountTransactionClientResponse;
    })(CashManagement = Commerce.CashManagement || (Commerce.CashManagement = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var CashManagement;
    (function (CashManagement) {
        "use strict";
        var CreateTenderRemovalTransactionClientRequest = (function (_super) {
            __extends(CreateTenderRemovalTransactionClientRequest, _super);
            function CreateTenderRemovalTransactionClientRequest(isOperationAborted, amountEntered, denominationDetails, operationComment, shift, correlationId, toShift) {
                var _this = _super.call(this, isOperationAborted, amountEntered, denominationDetails, operationComment, shift, correlationId) || this;
                _this.toShift = toShift;
                return _this;
            }
            return CreateTenderRemovalTransactionClientRequest;
        }(CashManagement.CreateCashManagementTransactionClientRequestBase));
        CashManagement.CreateTenderRemovalTransactionClientRequest = CreateTenderRemovalTransactionClientRequest;
    })(CashManagement = Commerce.CashManagement || (Commerce.CashManagement = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var CashManagement;
    (function (CashManagement) {
        "use strict";
        var CreateTenderRemovalTransactionClientResponse = (function (_super) {
            __extends(CreateTenderRemovalTransactionClientResponse, _super);
            function CreateTenderRemovalTransactionClientResponse() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CreateTenderRemovalTransactionClientResponse;
        }(CashManagement.CreateCashManagementTransactionClientResponseBase));
        CashManagement.CreateTenderRemovalTransactionClientResponse = CreateTenderRemovalTransactionClientResponse;
    })(CashManagement = Commerce.CashManagement || (Commerce.CashManagement = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Customers;
    (function (Customers) {
        "use strict";
        var SelectCustomerClientResponse = (function (_super) {
            __extends(SelectCustomerClientResponse, _super);
            function SelectCustomerClientResponse() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SelectCustomerClientResponse;
        }(Commerce.ClientResponse));
        Customers.SelectCustomerClientResponse = SelectCustomerClientResponse;
    })(Customers = Commerce.Customers || (Commerce.Customers = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Customers;
    (function (Customers) {
        "use strict";
        var SelectCustomerClientRequest = (function (_super) {
            __extends(SelectCustomerClientRequest, _super);
            function SelectCustomerClientRequest(correlationId, searchText) {
                var _this = _super.call(this, correlationId) || this;
                _this.searchText = searchText;
                return _this;
            }
            return SelectCustomerClientRequest;
        }(Commerce.ClientRequest));
        Customers.SelectCustomerClientRequest = SelectCustomerClientRequest;
    })(Customers = Commerce.Customers || (Commerce.Customers = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Products;
    (function (Products) {
        "use strict";
        var GetCurrentProductCatalogStoreClientResponse = (function (_super) {
            __extends(GetCurrentProductCatalogStoreClientResponse, _super);
            function GetCurrentProductCatalogStoreClientResponse(store, context) {
                var _this = _super.call(this, void 0) || this;
                _this.store = store;
                _this.context = context;
                return _this;
            }
            return GetCurrentProductCatalogStoreClientResponse;
        }(Commerce.ClientResponse));
        Products.GetCurrentProductCatalogStoreClientResponse = GetCurrentProductCatalogStoreClientResponse;
    })(Products = Commerce.Products || (Commerce.Products = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Products;
    (function (Products) {
        "use strict";
        var GetCurrentProductCatalogStoreClientRequest = (function (_super) {
            __extends(GetCurrentProductCatalogStoreClientRequest, _super);
            function GetCurrentProductCatalogStoreClientRequest(correlationId) {
                return _super.call(this, correlationId) || this;
            }
            return GetCurrentProductCatalogStoreClientRequest;
        }(Commerce.ClientRequest));
        Products.GetCurrentProductCatalogStoreClientRequest = GetCurrentProductCatalogStoreClientRequest;
    })(Products = Commerce.Products || (Commerce.Products = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Products;
    (function (Products) {
        "use strict";
        var GetProductsByIdsClientResponse = (function (_super) {
            __extends(GetProductsByIdsClientResponse, _super);
            function GetProductsByIdsClientResponse(products) {
                var _this = _super.call(this, products) || this;
                _this.products = products;
                return _this;
            }
            return GetProductsByIdsClientResponse;
        }(Commerce.ClientResponse));
        Products.GetProductsByIdsClientResponse = GetProductsByIdsClientResponse;
    })(Products = Commerce.Products || (Commerce.Products = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Products;
    (function (Products) {
        "use strict";
        var GetProductsByIdsClientRequest = (function (_super) {
            __extends(GetProductsByIdsClientRequest, _super);
            function GetProductsByIdsClientRequest(productIds, correlationId) {
                var _this = _super.call(this, correlationId) || this;
                _this.productIds = productIds;
                return _this;
            }
            return GetProductsByIdsClientRequest;
        }(Commerce.ClientRequest));
        Products.GetProductsByIdsClientRequest = GetProductsByIdsClientRequest;
    })(Products = Commerce.Products || (Commerce.Products = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Products;
    (function (Products) {
        "use strict";
        var GetSerialNumberClientResponse = (function (_super) {
            __extends(GetSerialNumberClientResponse, _super);
            function GetSerialNumberClientResponse() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return GetSerialNumberClientResponse;
        }(Commerce.ClientResponse));
        Products.GetSerialNumberClientResponse = GetSerialNumberClientResponse;
    })(Products = Commerce.Products || (Commerce.Products = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Products;
    (function (Products) {
        "use strict";
        var GetSerialNumberClientRequest = (function (_super) {
            __extends(GetSerialNumberClientRequest, _super);
            function GetSerialNumberClientRequest(product, correlationId) {
                var _this = _super.call(this, correlationId) || this;
                _this.product = product;
                return _this;
            }
            return GetSerialNumberClientRequest;
        }(Commerce.ClientRequest));
        Products.GetSerialNumberClientRequest = GetSerialNumberClientRequest;
    })(Products = Commerce.Products || (Commerce.Products = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Products;
    (function (Products) {
        "use strict";
        var SelectProductClientResponse = (function (_super) {
            __extends(SelectProductClientResponse, _super);
            function SelectProductClientResponse() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SelectProductClientResponse;
        }(Commerce.ClientResponse));
        Products.SelectProductClientResponse = SelectProductClientResponse;
    })(Products = Commerce.Products || (Commerce.Products = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Products;
    (function (Products) {
        "use strict";
        var SelectProductClientRequest = (function (_super) {
            __extends(SelectProductClientRequest, _super);
            function SelectProductClientRequest(correlationId, searchText) {
                var _this = _super.call(this, correlationId) || this;
                _this.searchText = searchText;
                return _this;
            }
            return SelectProductClientRequest;
        }(Commerce.ClientRequest));
        Products.SelectProductClientRequest = SelectProductClientRequest;
    })(Products = Commerce.Products || (Commerce.Products = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Products;
    (function (Products) {
        var SelectProductVariantClientResponse = (function (_super) {
            __extends(SelectProductVariantClientResponse, _super);
            function SelectProductVariantClientResponse() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SelectProductVariantClientResponse;
        }(Commerce.ClientResponse));
        Products.SelectProductVariantClientResponse = SelectProductVariantClientResponse;
    })(Products = Commerce.Products || (Commerce.Products = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Products;
    (function (Products) {
        var SelectProductVariantClientRequest = (function (_super) {
            __extends(SelectProductVariantClientRequest, _super);
            function SelectProductVariantClientRequest(productMaster, preSelectedDimensions, correlationId) {
                var _this = _super.call(this, correlationId) || this;
                _this.productMaster = productMaster;
                _this.preSelectedDimensions = preSelectedDimensions || [];
                return _this;
            }
            return SelectProductVariantClientRequest;
        }(Commerce.ClientRequest));
        Products.SelectProductVariantClientRequest = SelectProductVariantClientRequest;
    })(Products = Commerce.Products || (Commerce.Products = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var SalesOrders;
    (function (SalesOrders) {
        "use strict";
        var GetGiftReceiptsClientResponse = (function (_super) {
            __extends(GetGiftReceiptsClientResponse, _super);
            function GetGiftReceiptsClientResponse() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return GetGiftReceiptsClientResponse;
        }(Commerce.ClientResponse));
        SalesOrders.GetGiftReceiptsClientResponse = GetGiftReceiptsClientResponse;
    })(SalesOrders = Commerce.SalesOrders || (Commerce.SalesOrders = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var SalesOrders;
    (function (SalesOrders) {
        "use strict";
        var GetGiftReceiptsClientRequest = (function (_super) {
            __extends(GetGiftReceiptsClientRequest, _super);
            function GetGiftReceiptsClientRequest(correlationId, salesOrder, productsInSalesOrder, isCopyOfReceipt, isPreview) {
                var _this = _super.call(this, correlationId) || this;
                _this.salesOrder = salesOrder;
                _this.productsInSalesOrder = productsInSalesOrder;
                _this.isCopyOfReceipt = isCopyOfReceipt;
                _this.isPreview = isPreview;
                return _this;
            }
            return GetGiftReceiptsClientRequest;
        }(Commerce.ClientRequest));
        SalesOrders.GetGiftReceiptsClientRequest = GetGiftReceiptsClientRequest;
    })(SalesOrders = Commerce.SalesOrders || (Commerce.SalesOrders = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var SalesOrders;
    (function (SalesOrders) {
        "use strict";
        var SelectCustomerOrderTypeClientResponse = (function (_super) {
            __extends(SelectCustomerOrderTypeClientResponse, _super);
            function SelectCustomerOrderTypeClientResponse() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SelectCustomerOrderTypeClientResponse;
        }(Commerce.ClientResponse));
        SalesOrders.SelectCustomerOrderTypeClientResponse = SelectCustomerOrderTypeClientResponse;
    })(SalesOrders = Commerce.SalesOrders || (Commerce.SalesOrders = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var SalesOrders;
    (function (SalesOrders) {
        "use strict";
        var SelectCustomerOrderTypeClientRequest = (function (_super) {
            __extends(SelectCustomerOrderTypeClientRequest, _super);
            function SelectCustomerOrderTypeClientRequest(correlationId) {
                return _super.call(this, correlationId) || this;
            }
            return SelectCustomerOrderTypeClientRequest;
        }(Commerce.ClientRequest));
        SalesOrders.SelectCustomerOrderTypeClientRequest = SelectCustomerOrderTypeClientRequest;
    })(SalesOrders = Commerce.SalesOrders || (Commerce.SalesOrders = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var TenderCounting;
    (function (TenderCounting) {
        "use strict";
        var CreateTenderCountingTransactionClientResponseBase = (function (_super) {
            __extends(CreateTenderCountingTransactionClientResponseBase, _super);
            function CreateTenderCountingTransactionClientResponseBase() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CreateTenderCountingTransactionClientResponseBase;
        }(Commerce.ClientResponse));
        TenderCounting.CreateTenderCountingTransactionClientResponseBase = CreateTenderCountingTransactionClientResponseBase;
    })(TenderCounting = Commerce.TenderCounting || (Commerce.TenderCounting = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var TenderCounting;
    (function (TenderCounting) {
        "use strict";
        var CreateTenderCountingTransactionClientRequestBase = (function (_super) {
            __extends(CreateTenderCountingTransactionClientRequestBase, _super);
            function CreateTenderCountingTransactionClientRequestBase(isOperationAborted, shift, tenderDetailLines, correlationId) {
                var _this = _super.call(this, correlationId) || this;
                _this.isOperationAborted = isOperationAborted;
                _this.shift = shift;
                _this.tenderDetailLines = tenderDetailLines;
                return _this;
            }
            return CreateTenderCountingTransactionClientRequestBase;
        }(Commerce.ClientRequest));
        TenderCounting.CreateTenderCountingTransactionClientRequestBase = CreateTenderCountingTransactionClientRequestBase;
    })(TenderCounting = Commerce.TenderCounting || (Commerce.TenderCounting = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var TenderCounting;
    (function (TenderCounting) {
        "use strict";
        var CreateBankDropTransactionClientRequest = (function (_super) {
            __extends(CreateBankDropTransactionClientRequest, _super);
            function CreateBankDropTransactionClientRequest(isOperationAborted, shift, tenderDetailLines, bankBagNumber, correlationId) {
                var _this = _super.call(this, isOperationAborted, shift, tenderDetailLines, correlationId) || this;
                _this.bankBagNumber = bankBagNumber;
                return _this;
            }
            return CreateBankDropTransactionClientRequest;
        }(TenderCounting.CreateTenderCountingTransactionClientRequestBase));
        TenderCounting.CreateBankDropTransactionClientRequest = CreateBankDropTransactionClientRequest;
    })(TenderCounting = Commerce.TenderCounting || (Commerce.TenderCounting = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var TenderCounting;
    (function (TenderCounting) {
        "use strict";
        var CreateBankDropTransactionClientResponse = (function (_super) {
            __extends(CreateBankDropTransactionClientResponse, _super);
            function CreateBankDropTransactionClientResponse() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CreateBankDropTransactionClientResponse;
        }(TenderCounting.CreateTenderCountingTransactionClientResponseBase));
        TenderCounting.CreateBankDropTransactionClientResponse = CreateBankDropTransactionClientResponse;
    })(TenderCounting = Commerce.TenderCounting || (Commerce.TenderCounting = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var TenderCounting;
    (function (TenderCounting) {
        "use strict";
        var CreateSafeDropTransactionClientRequest = (function (_super) {
            __extends(CreateSafeDropTransactionClientRequest, _super);
            function CreateSafeDropTransactionClientRequest(isOperationAborted, shift, tenderDetailLines, extensionProperties, correlationId) {
                var _this = _super.call(this, isOperationAborted, shift, tenderDetailLines, correlationId) || this;
                _this.extensionProperties = Commerce.ArrayExtensions.hasElements(extensionProperties) ? extensionProperties : [];
                return _this;
            }
            return CreateSafeDropTransactionClientRequest;
        }(TenderCounting.CreateTenderCountingTransactionClientRequestBase));
        TenderCounting.CreateSafeDropTransactionClientRequest = CreateSafeDropTransactionClientRequest;
    })(TenderCounting = Commerce.TenderCounting || (Commerce.TenderCounting = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var TenderCounting;
    (function (TenderCounting) {
        "use strict";
        var CreateSafeDropTransactionClientResponse = (function (_super) {
            __extends(CreateSafeDropTransactionClientResponse, _super);
            function CreateSafeDropTransactionClientResponse() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CreateSafeDropTransactionClientResponse;
        }(TenderCounting.CreateTenderCountingTransactionClientResponseBase));
        TenderCounting.CreateSafeDropTransactionClientResponse = CreateSafeDropTransactionClientResponse;
    })(TenderCounting = Commerce.TenderCounting || (Commerce.TenderCounting = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var TenderCounting;
    (function (TenderCounting) {
        "use strict";
        var CreateTenderDeclarationTransactionClientResponse = (function (_super) {
            __extends(CreateTenderDeclarationTransactionClientResponse, _super);
            function CreateTenderDeclarationTransactionClientResponse() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CreateTenderDeclarationTransactionClientResponse;
        }(TenderCounting.CreateTenderCountingTransactionClientResponseBase));
        TenderCounting.CreateTenderDeclarationTransactionClientResponse = CreateTenderDeclarationTransactionClientResponse;
    })(TenderCounting = Commerce.TenderCounting || (Commerce.TenderCounting = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var TenderCounting;
    (function (TenderCounting) {
        "use strict";
        var CreateTenderDeclarationTransactionClientRequest = (function (_super) {
            __extends(CreateTenderDeclarationTransactionClientRequest, _super);
            function CreateTenderDeclarationTransactionClientRequest(correlationId, isOperationAborted, shift, tenderDetailLines, reasonCodeLines) {
                var _this = _super.call(this, isOperationAborted, shift, tenderDetailLines, correlationId) || this;
                _this.reasonCodeLines = reasonCodeLines;
                return _this;
            }
            return CreateTenderDeclarationTransactionClientRequest;
        }(TenderCounting.CreateTenderCountingTransactionClientRequestBase));
        TenderCounting.CreateTenderDeclarationTransactionClientRequest = CreateTenderDeclarationTransactionClientRequest;
    })(TenderCounting = Commerce.TenderCounting || (Commerce.TenderCounting = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Products;
    (function (Products) {
        "use strict";
        var GetRefinerValuesByTextServiceResponse = (function (_super) {
            __extends(GetRefinerValuesByTextServiceResponse, _super);
            function GetRefinerValuesByTextServiceResponse(productRefinerValues) {
                var _this = _super.call(this) || this;
                _this.productRefinerValues = productRefinerValues;
                return _this;
            }
            return GetRefinerValuesByTextServiceResponse;
        }(Commerce.ServiceResponse));
        Products.GetRefinerValuesByTextServiceResponse = GetRefinerValuesByTextServiceResponse;
    })(Products = Commerce.Products || (Commerce.Products = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Products;
    (function (Products) {
        "use strict";
        var GetRefinerValuesByTextServiceRequest = (function (_super) {
            __extends(GetRefinerValuesByTextServiceRequest, _super);
            function GetRefinerValuesByTextServiceRequest(correlationId, searchText, productRefiner) {
                var _this = _super.call(this, correlationId) || this;
                _this.searchText = searchText;
                _this.productRefiner = productRefiner;
                return _this;
            }
            return GetRefinerValuesByTextServiceRequest;
        }(Commerce.ServiceRequest));
        Products.GetRefinerValuesByTextServiceRequest = GetRefinerValuesByTextServiceRequest;
    })(Products = Commerce.Products || (Commerce.Products = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var SalesOrders;
    (function (SalesOrders) {
        "use strict";
        var MarkAsPickedServiceResponse = (function (_super) {
            __extends(MarkAsPickedServiceResponse, _super);
            function MarkAsPickedServiceResponse() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MarkAsPickedServiceResponse;
        }(Commerce.ServiceResponse));
        SalesOrders.MarkAsPickedServiceResponse = MarkAsPickedServiceResponse;
    })(SalesOrders = Commerce.SalesOrders || (Commerce.SalesOrders = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var SalesOrders;
    (function (SalesOrders) {
        "use strict";
        var MarkAsPickedServiceRequest = (function (_super) {
            __extends(MarkAsPickedServiceRequest, _super);
            function MarkAsPickedServiceRequest(correlationId, fulfillmentLines) {
                var _this = _super.call(this, correlationId) || this;
                _this.fulfillmentLines = fulfillmentLines;
                return _this;
            }
            return MarkAsPickedServiceRequest;
        }(Commerce.ServiceRequest));
        SalesOrders.MarkAsPickedServiceRequest = MarkAsPickedServiceRequest;
    })(SalesOrders = Commerce.SalesOrders || (Commerce.SalesOrders = {}));
})(Commerce || (Commerce = {}));
//# sourceMappingURL=Commerce.Core.Public.js.map
// SIG // Begin signature block
// SIG // MIIkdwYJKoZIhvcNAQcCoIIkaDCCJGQCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // yfi0Ok99D9QJr+7dQxyX//tGETDegomllR2l6AOHIgmg
// SIG // gg2BMIIF/zCCA+egAwIBAgITMwAAAQNeJRyZH6MeuAAA
// SIG // AAABAzANBgkqhkiG9w0BAQsFADB+MQswCQYDVQQGEwJV
// SIG // UzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMH
// SIG // UmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBv
// SIG // cmF0aW9uMSgwJgYDVQQDEx9NaWNyb3NvZnQgQ29kZSBT
// SIG // aWduaW5nIFBDQSAyMDExMB4XDTE4MDcxMjIwMDg0OFoX
// SIG // DTE5MDcyNjIwMDg0OFowdDELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjEeMBwGA1UEAxMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA
// SIG // 0ZR2NuaGqzb+aflGfIuIUMuQcH+wVakkHX455wWfD6x7
// SIG // l7LOcwr71JskXBa1Od0bfjNsEfw7JvOYql1Ta6rD7BO4
// SIG // 0u/PV3/MZcuvTS4ysVYrTjQHif5pIb0+RPveEp2Fv3x2
// SIG // hn1ysXabYeaKZExGzrbVOox3k3dnIZy2WgZeR4b1PNEJ
// SIG // yg09zbLpoVB40YSI4gE8IvyvlgjMXZnA7eulWpiS9chA
// SIG // Tmpzr97jdHrTX0aXvOJnKHeZrMEOMRaPAA8B/kteVA/K
// SIG // xGU/CuOjRtv2LAM6Gb5oBRac5n80v6eHjWU5Jslj1O/F
// SIG // 3b0l/v0o9DSGeawq1V8wkTvkFGrrscoEIwIDAQABo4IB
// SIG // fjCCAXowHwYDVR0lBBgwFgYKKwYBBAGCN0wIAQYIKwYB
// SIG // BQUHAwMwHQYDVR0OBBYEFEe+wMvhpj/9ZdY48gNdt693
// SIG // 90D/MFAGA1UdEQRJMEekRTBDMSkwJwYDVQQLEyBNaWNy
// SIG // b3NvZnQgT3BlcmF0aW9ucyBQdWVydG8gUmljbzEWMBQG
// SIG // A1UEBRMNMjMwMDEyKzQzNzk2NTAfBgNVHSMEGDAWgBRI
// SIG // bmTlUAXTgqoXNzcitW2oynUClTBUBgNVHR8ETTBLMEmg
// SIG // R6BFhkNodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtp
// SIG // b3BzL2NybC9NaWNDb2RTaWdQQ0EyMDExXzIwMTEtMDct
// SIG // MDguY3JsMGEGCCsGAQUFBwEBBFUwUzBRBggrBgEFBQcw
// SIG // AoZFaHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3BraW9w
// SIG // cy9jZXJ0cy9NaWNDb2RTaWdQQ0EyMDExXzIwMTEtMDct
// SIG // MDguY3J0MAwGA1UdEwEB/wQCMAAwDQYJKoZIhvcNAQEL
// SIG // BQADggIBAJ/1yVMNPw0m7KJE2A3Rn2OWBks/HlzFM6Ok
// SIG // w2yvH8ABuutl7J4zEA+nrFvUvZBhF+cx58MmtKz1J9NI
// SIG // k4aI/hI1kWQi0WstO6gsFZQp0jeW5jX/DM7IBhYWniSx
// SIG // 4jn5bg542AwbtilgJ3Y0JJvduZd1ywE7rYISFiKAiRWE
// SIG // u5hQILAXJoZJr859RRVDNJbPgVwYLNST8mer4nPIPaPN
// SIG // /DIeYBzpsBsw+yy7By6WhJNFKFRczZb9oNuB2LYwykOx
// SIG // 80jAskYcXV52Klif1O7y9PpITLVhi7CMQemquJ2Q9P9q
// SIG // Qg+5PukO7JT8jYC7eOMjp3hbsm0f+VnBfbbROcl54IMc
// SIG // YAraPbDR7Ta/RQfpGzZu5T07BQOn1KclEo/mdqMTs0Va
// SIG // QzGC2tiErrmwH3X19h19URE3J+i1NYRx91eqrvqJccmY
// SIG // 0p5aZHa+jMN9FWqR8RT08tk1Mbjbcvq0dciIm2q/mEXH
// SIG // ZrLX/86SkHXk6+aG0sgb2yfAW5VvSW9YXWkq3lNL+OjK
// SIG // e/ZsFfkDGQ8RhapPmr+qV91gxvVxIPRRqJrK6dHrNEc9
// SIG // dfoi7FU/ahk5axDpWj+O9CN4MLLypjjLNY2qmFkkQLg6
// SIG // Z6QHX6D+2DtJE/sM4e0LbYNQzvB/PuDZCOiMIUpBwt7r
// SIG // jlvuA8Mdbm7mVDVmZ3J8GupS9iLEcj+uMIIHejCCBWKg
// SIG // AwIBAgIKYQ6Q0gAAAAAAAzANBgkqhkiG9w0BAQsFADCB
// SIG // iDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEyMDAGA1UEAxMpTWlj
// SIG // cm9zb2Z0IFJvb3QgQ2VydGlmaWNhdGUgQXV0aG9yaXR5
// SIG // IDIwMTEwHhcNMTEwNzA4MjA1OTA5WhcNMjYwNzA4MjEw
// SIG // OTA5WjB+MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSgwJgYDVQQD
// SIG // Ex9NaWNyb3NvZnQgQ29kZSBTaWduaW5nIFBDQSAyMDEx
// SIG // MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA
// SIG // q/D6chAcLq3YbqqCEE00uvK2WCGfQhsqa+laUKq4Bjga
// SIG // BEm6f8MMHt03a8YS2AvwOMKZBrDIOdUBFDFC04kNeWSH
// SIG // fpRgJGyvnkmc6Whe0t+bU7IKLMOv2akrrnoJr9eWWcpg
// SIG // GgXpZnboMlImEi/nqwhQz7NEt13YxC4Ddato88tt8zpc
// SIG // oRb0RrrgOGSsbmQ1eKagYw8t00CT+OPeBw3VXHmlSSnn
// SIG // Db6gE3e+lD3v++MrWhAfTVYoonpy4BI6t0le2O3tQ5GD
// SIG // 2Xuye4Yb2T6xjF3oiU+EGvKhL1nkkDstrjNYxbc+/jLT
// SIG // swM9sbKvkjh+0p2ALPVOVpEhNSXDOW5kf1O6nA+tGSOE
// SIG // y/S6A4aN91/w0FK/jJSHvMAhdCVfGCi2zCcoOCWYOUo2
// SIG // z3yxkq4cI6epZuxhH2rhKEmdX4jiJV3TIUs+UsS1Vz8k
// SIG // A/DRelsv1SPjcF0PUUZ3s/gA4bysAoJf28AVs70b1FVL
// SIG // 5zmhD+kjSbwYuER8ReTBw3J64HLnJN+/RpnF78IcV9uD
// SIG // jexNSTCnq47f7Fufr/zdsGbiwZeBe+3W7UvnSSmnEyim
// SIG // p31ngOaKYnhfsi+E11ecXL93KCjx7W3DKI8sj0A3T8Hh
// SIG // hUSJxAlMxdSlQy90lfdu+HggWCwTXWCVmj5PM4TasIgX
// SIG // 3p5O9JawvEagbJjS4NaIjAsCAwEAAaOCAe0wggHpMBAG
// SIG // CSsGAQQBgjcVAQQDAgEAMB0GA1UdDgQWBBRIbmTlUAXT
// SIG // gqoXNzcitW2oynUClTAZBgkrBgEEAYI3FAIEDB4KAFMA
// SIG // dQBiAEMAQTALBgNVHQ8EBAMCAYYwDwYDVR0TAQH/BAUw
// SIG // AwEB/zAfBgNVHSMEGDAWgBRyLToCMZBDuRQFTuHqp8cx
// SIG // 0SOJNDBaBgNVHR8EUzBRME+gTaBLhklodHRwOi8vY3Js
// SIG // Lm1pY3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9N
// SIG // aWNSb29DZXJBdXQyMDExXzIwMTFfMDNfMjIuY3JsMF4G
// SIG // CCsGAQUFBwEBBFIwUDBOBggrBgEFBQcwAoZCaHR0cDov
// SIG // L3d3dy5taWNyb3NvZnQuY29tL3BraS9jZXJ0cy9NaWNS
// SIG // b29DZXJBdXQyMDExXzIwMTFfMDNfMjIuY3J0MIGfBgNV
// SIG // HSAEgZcwgZQwgZEGCSsGAQQBgjcuAzCBgzA/BggrBgEF
// SIG // BQcCARYzaHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3Br
// SIG // aW9wcy9kb2NzL3ByaW1hcnljcHMuaHRtMEAGCCsGAQUF
// SIG // BwICMDQeMiAdAEwAZQBnAGEAbABfAHAAbwBsAGkAYwB5
// SIG // AF8AcwB0AGEAdABlAG0AZQBuAHQALiAdMA0GCSqGSIb3
// SIG // DQEBCwUAA4ICAQBn8oalmOBUeRou09h0ZyKbC5YR4WOS
// SIG // mUKWfdJ5DJDBZV8uLD74w3LRbYP+vj/oCso7v0epo/Np
// SIG // 22O/IjWll11lhJB9i0ZQVdgMknzSGksc8zxCi1LQsP1r
// SIG // 4z4HLimb5j0bpdS1HXeUOeLpZMlEPXh6I/MTfaaQdION
// SIG // 9MsmAkYqwooQu6SpBQyb7Wj6aC6VoCo/KmtYSWMfCWlu
// SIG // WpiW5IP0wI/zRive/DvQvTXvbiWu5a8n7dDd8w6vmSiX
// SIG // mE0OPQvyCInWH8MyGOLwxS3OW560STkKxgrCxq2u5bLZ
// SIG // 2xWIUUVYODJxJxp/sfQn+N4sOiBpmLJZiWhub6e3dMNA
// SIG // BQamASooPoI/E01mC8CzTfXhj38cbxV9Rad25UAqZaPD
// SIG // XVJihsMdYzaXht/a8/jyFqGaJ+HNpZfQ7l1jQeNbB5yH
// SIG // PgZ3BtEGsXUfFL5hYbXw3MYbBL7fQccOKO7eZS/sl/ah
// SIG // XJbYANahRr1Z85elCUtIEJmAH9AAKcWxm6U/RXceNcbS
// SIG // oqKfenoi+kiVH6v7RyOA9Z74v2u3S5fi63V4GuzqN5l5
// SIG // GEv/1rMjaHXmr/r8i+sLgOppO6/8MO0ETI7f33VtY5E9
// SIG // 0Z1WTk+/gFcioXgRMiF670EKsT/7qMykXcGhiJtXcVZO
// SIG // SEXAQsmbdlsKgEhr/Xmfwb1tbWrJUnMTDXpQzTGCFk4w
// SIG // ghZKAgEBMIGVMH4xCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xKDAm
// SIG // BgNVBAMTH01pY3Jvc29mdCBDb2RlIFNpZ25pbmcgUENB
// SIG // IDIwMTECEzMAAAEDXiUcmR+jHrgAAAAAAQMwDQYJYIZI
// SIG // AWUDBAIBBQCggdAwGQYJKoZIhvcNAQkDMQwGCisGAQQB
// SIG // gjcCAQQwHAYKKwYBBAGCNwIBCzEOMAwGCisGAQQBgjcC
// SIG // ARUwLwYJKoZIhvcNAQkEMSIEIMRPkT7yMgUfEthDWOPA
// SIG // isalUBBJXhgg1/vHR8sUmuJGMGQGCisGAQQBgjcCAQwx
// SIG // VjBUoDaANABnAGwAbwBiAGEAbABpAHoAZQAuAGMAdQBs
// SIG // AHQAdQByAGUALgBsAHYALQBMAFYALgBqAHOhGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBAH72hMIqkZkE0xrVNCv4+NL6ywhndsMYMKdA
// SIG // cuDWK5NQF0eEwXoLnz3Hn7W7hM65IrID1U0PjIFftqdi
// SIG // oPu4bxoIXhcuh0MhwEGDkGG90PTOTojQlPSGktJldaoQ
// SIG // KxmuDeSxjbBIf4txv7H9Rm2KWy8nFcUOV9udIoK3H7M2
// SIG // 5S2tzQvf5VMc65Ul2fERIkP3Wz9cKJwRBc95VcSRBth5
// SIG // driURwVRJ7VCXWqCDlQEcAAfZRd4eyIkBTbG0frHticH
// SIG // 2EnqYQExjkkqmPEHzmVYccKc6U9VjPfOZ8sbsC9tOjzo
// SIG // KhMTnrmlB0lHl9iyN4JIZMeyVItTCWd+X/F5fWDzzumh
// SIG // ghO2MIITsgYKKwYBBAGCNwMDATGCE6IwghOeBgkqhkiG
// SIG // 9w0BBwKgghOPMIITiwIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBVwYLKoZIhvcNAQkQAQSgggFGBIIBQjCCAT4CAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQgS+5U
// SIG // cHJiNLuWg0bTQR++pOLDlkyseJjZaQSqyE9ROF4CBlx2
// SIG // 1R18ORgSMjAxOTAzMTIwOTU1NDkuNDJaMAcCAQGAAgH0
// SIG // oIHUpIHRMIHOMQswCQYDVQQGEwJVUzETMBEGA1UECBMK
// SIG // V2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwG
// SIG // A1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSkwJwYD
// SIG // VQQLEyBNaWNyb3NvZnQgT3BlcmF0aW9ucyBQdWVydG8g
// SIG // UmljbzEmMCQGA1UECxMdVGhhbGVzIFRTUyBFU046MzFD
// SIG // NS0zMEJBLTdDOTExJTAjBgNVBAMTHE1pY3Jvc29mdCBU
// SIG // aW1lLVN0YW1wIFNlcnZpY2Wggg8fMIIE9TCCA92gAwIB
// SIG // AgITMwAAAM2m2zivvS1BAAAAAAAAzTANBgkqhkiG9w0B
// SIG // AQsFADB8MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQD
// SIG // Ex1NaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDAe
// SIG // Fw0xODA4MjMyMDI2MjZaFw0xOTExMjMyMDI2MjZaMIHO
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMSkwJwYDVQQLEyBNaWNy
// SIG // b3NvZnQgT3BlcmF0aW9ucyBQdWVydG8gUmljbzEmMCQG
// SIG // A1UECxMdVGhhbGVzIFRTUyBFU046MzFDNS0zMEJBLTdD
// SIG // OTExJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1w
// SIG // IFNlcnZpY2UwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw
// SIG // ggEKAoIBAQCyGo7FFLRXglYKrtD3s5lk8Uq9UgaJo2HO
// SIG // V3qNRbolSSs2UpJbkDoPjldqGRTfZQBH4IPyDLNA4Cs3
// SIG // Arjjpko+aKeveM+26PJJ6gQuVR3qDGJKo7ZHnmL6EZwq
// SIG // /mckGaeCk2ZrIrMkEIJKsgFnI0reD92vo2eAwU184uqd
// SIG // rFAolclNJUDNJKqwWoVzCPmhB3VaBnIhQlR+juIkyfTb
// SIG // kKspDrTl28iZW7FLa5SMJL36VR0FsWdNb1vZd1BtwjCP
// SIG // hIC3SLRE507JAJLSTxD1L7PfF341cYFUarl24UKVyouB
// SIG // AhWQs28pux9Wsbz7aB5yxnP/mr17T3F73ECEOcgW27Hb
// SIG // AgMBAAGjggEbMIIBFzAdBgNVHQ4EFgQUuB30YuL6CpIq
// SIG // VyAxBNnQvsnyAg4wHwYDVR0jBBgwFoAU1WM6XIoxkPND
// SIG // e3xGG8UzaFqFbVUwVgYDVR0fBE8wTTBLoEmgR4ZFaHR0
// SIG // cDovL2NybC5taWNyb3NvZnQuY29tL3BraS9jcmwvcHJv
// SIG // ZHVjdHMvTWljVGltU3RhUENBXzIwMTAtMDctMDEuY3Js
// SIG // MFoGCCsGAQUFBwEBBE4wTDBKBggrBgEFBQcwAoY+aHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tL3BraS9jZXJ0cy9N
// SIG // aWNUaW1TdGFQQ0FfMjAxMC0wNy0wMS5jcnQwDAYDVR0T
// SIG // AQH/BAIwADATBgNVHSUEDDAKBggrBgEFBQcDCDANBgkq
// SIG // hkiG9w0BAQsFAAOCAQEAQkIAKiiPfcD4uSDnHnY1PJ6w
// SIG // WkIF0GH48CxDPewPCO5eQIuiBcsG15Lt/ckBazjdJwQq
// SIG // 20k1C6y8vwrjSVO0hr8q+nz6d1BWoC8XiymTQKaoGUfG
// SIG // BPZkzvYy0qpj7gho6yR0eKIjRr6pjyKxbLV9pdIHHfsR
// SIG // RtZ78kLfgZpR0wMC6+8Ph2hk7LbEE/nJKWqZZDk1dHV3
// SIG // 0WKPokS12+WimwopoKoodBtkyvdGdQ3HWzYQFw9a3k73
// SIG // tTeU1K058gXlaXmhJhp/LsEUTA6XSTFpGH5+ViTgWTwy
// SIG // cXAHud68rUioXkah74TDTO2/385SdTZa20fWnfu78CBs
// SIG // Och9qtQfnTCCBnEwggRZoAMCAQICCmEJgSoAAAAAAAIw
// SIG // DQYJKoZIhvcNAQELBQAwgYgxCzAJBgNVBAYTAlVTMRMw
// SIG // EQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRt
// SIG // b25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRp
// SIG // b24xMjAwBgNVBAMTKU1pY3Jvc29mdCBSb290IENlcnRp
// SIG // ZmljYXRlIEF1dGhvcml0eSAyMDEwMB4XDTEwMDcwMTIx
// SIG // MzY1NVoXDTI1MDcwMTIxNDY1NVowfDELMAkGA1UEBhMC
// SIG // VVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcT
// SIG // B1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jw
// SIG // b3JhdGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUt
// SIG // U3RhbXAgUENBIDIwMTAwggEiMA0GCSqGSIb3DQEBAQUA
// SIG // A4IBDwAwggEKAoIBAQCpHQ28dxGKOiDs/BOX9fp/aZRr
// SIG // dFQQ1aUKAIKF++18aEssX8XD5WHCdrc+Zitb8BVTJwQx
// SIG // H0EbGpUdzgkTjnxhMFmxMEQP8WCIhFRDDNdNuDgIs0Ld
// SIG // k6zWczBXJoKjRQ3Q6vVHgc2/JGAyWGBG8lhHhjKEHnRh
// SIG // Z5FfgVSxz5NMksHEpl3RYRNuKMYa+YaAu99h/EbBJx0k
// SIG // ZxJyGiGKr0tkiVBisV39dx898Fd1rL2KQk1AUdEPnAY+
// SIG // Z3/1ZsADlkR+79BL/W7lmsqxqPJ6Kgox8NpOBpG2iAg1
// SIG // 6HgcsOmZzTznL0S6p/TcZL2kAcEgCZN4zfy8wMlEXV4W
// SIG // nAEFTyJNAgMBAAGjggHmMIIB4jAQBgkrBgEEAYI3FQEE
// SIG // AwIBADAdBgNVHQ4EFgQU1WM6XIoxkPNDe3xGG8UzaFqF
// SIG // bVUwGQYJKwYBBAGCNxQCBAweCgBTAHUAYgBDAEEwCwYD
// SIG // VR0PBAQDAgGGMA8GA1UdEwEB/wQFMAMBAf8wHwYDVR0j
// SIG // BBgwFoAU1fZWy4/oolxiaNE9lJBb186aGMQwVgYDVR0f
// SIG // BE8wTTBLoEmgR4ZFaHR0cDovL2NybC5taWNyb3NvZnQu
// SIG // Y29tL3BraS9jcmwvcHJvZHVjdHMvTWljUm9vQ2VyQXV0
// SIG // XzIwMTAtMDYtMjMuY3JsMFoGCCsGAQUFBwEBBE4wTDBK
// SIG // BggrBgEFBQcwAoY+aHR0cDovL3d3dy5taWNyb3NvZnQu
// SIG // Y29tL3BraS9jZXJ0cy9NaWNSb29DZXJBdXRfMjAxMC0w
// SIG // Ni0yMy5jcnQwgaAGA1UdIAEB/wSBlTCBkjCBjwYJKwYB
// SIG // BAGCNy4DMIGBMD0GCCsGAQUFBwIBFjFodHRwOi8vd3d3
// SIG // Lm1pY3Jvc29mdC5jb20vUEtJL2RvY3MvQ1BTL2RlZmF1
// SIG // bHQuaHRtMEAGCCsGAQUFBwICMDQeMiAdAEwAZQBnAGEA
// SIG // bABfAFAAbwBsAGkAYwB5AF8AUwB0AGEAdABlAG0AZQBu
// SIG // AHQALiAdMA0GCSqGSIb3DQEBCwUAA4ICAQAH5ohRDeLG
// SIG // 4Jg/gXEDPZ2joSFvs+umzPUxvs8F4qn++ldtGTCzwsVm
// SIG // yWrf9efweL3HqJ4l4/m87WtUVwgrUYJEEvu5U4zM9GAS
// SIG // inbMQEBBm9xcF/9c+V4XNZgkVkt070IQyK+/f8Z/8jd9
// SIG // Wj8c8pl5SpFSAK84Dxf1L3mBZdmptWvkx872ynoAb0sw
// SIG // RCQiPM/tA6WWj1kpvLb9BOFwnzJKJ/1Vry/+tuWOM7ti
// SIG // X5rbV0Dp8c6ZZpCM/2pif93FSguRJuI57BlKcWOdeyFt
// SIG // w5yjojz6f32WapB4pm3S4Zz5Hfw42JT0xqUKloakvZ4a
// SIG // rgRCg7i1gJsiOCC1JeVk7Pf0v35jWSUPei45V3aicaoG
// SIG // ig+JFrphpxHLmtgOR5qAxdDNp9DvfYPw4TtxCd9ddJgi
// SIG // CGHasFAeb73x4QDf5zEHpJM692VHeOj4qEir995yfmFr
// SIG // b3epgcunCaw5u+zGy9iCtHLNHfS4hQEegPsbiSpUObJb
// SIG // 2sgNVZl6h3M7COaYLeqN4DMuEin1wC9UJyH3yKxO2ii4
// SIG // sanblrKnQqLJzxlBTeCG+SqaoxFmMNO7dDJL32N79ZmK
// SIG // LxvHIa9Zta7cRDyXUHHXodLFVeNp3lfB0d4wwP3M5k37
// SIG // Db9dT+mdHhk4L7zPWAUu7w2gUDXa7wknHNWzfjUeCLra
// SIG // NtvTX4/edIhJEqGCA60wggKVAgEBMIH+oYHUpIHRMIHO
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMSkwJwYDVQQLEyBNaWNy
// SIG // b3NvZnQgT3BlcmF0aW9ucyBQdWVydG8gUmljbzEmMCQG
// SIG // A1UECxMdVGhhbGVzIFRTUyBFU046MzFDNS0zMEJBLTdD
// SIG // OTExJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1w
// SIG // IFNlcnZpY2WiJQoBATAJBgUrDgMCGgUAAxUAgPXrdH1g
// SIG // 73Y2qb8f7iqKTz8apyOggd4wgdukgdgwgdUxCzAJBgNV
// SIG // BAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYD
// SIG // VQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQg
// SIG // Q29ycG9yYXRpb24xKTAnBgNVBAsTIE1pY3Jvc29mdCBP
// SIG // cGVyYXRpb25zIFB1ZXJ0byBSaWNvMScwJQYDVQQLEx5u
// SIG // Q2lwaGVyIE5UUyBFU046NERFOS0wQzVFLTNFMDkxKzAp
// SIG // BgNVBAMTIk1pY3Jvc29mdCBUaW1lIFNvdXJjZSBNYXN0
// SIG // ZXIgQ2xvY2swDQYJKoZIhvcNAQEFBQACBQDgMfB7MCIY
// SIG // DzIwMTkwMzEyMTY0NjUxWhgPMjAxOTAzMTMxNjQ2NTFa
// SIG // MHQwOgYKKwYBBAGEWQoEATEsMCowCgIFAOAx8HsCAQAw
// SIG // BwIBAAICAMcwBwIBAAICGxcwCgIFAOAzQfsCAQAwNgYK
// SIG // KwYBBAGEWQoEAjEoMCYwDAYKKwYBBAGEWQoDAaAKMAgC
// SIG // AQACAxbjYKEKMAgCAQACAwehIDANBgkqhkiG9w0BAQUF
// SIG // AAOCAQEAkiNmmnJmjYtY2wmVdcQq0jAnLXV9Q5VPLQRJ
// SIG // M15Ad+9Hsc5Fs+aOXpGpee2gHykuh0Cyj8pfGqWA/cw3
// SIG // ppgNoQU4UeE/JWiY5iupfJAE8Z84fv81JvpE2M4RWING
// SIG // bZJOrUBc9nGdHCYgtYci/dA1Ki1VtdCPSPmkC9J/MYmV
// SIG // vlpa7OsyS1k/AWGp5MXZFtqpiajBPFoM9xRGqo3S1PW0
// SIG // eoZIZlmNOHuLy3hLsEinqdQk0vzXJrEkrB8K+voPCu26
// SIG // F2GlCjTLXr2KVrJnep9y9Vd7MuKhEur2vH1U9le/NXbq
// SIG // zKhuGE+bTrqG/quhNbSCxqwnBqc+IuLQJQNN8pxaGzGC
// SIG // AvUwggLxAgEBMIGTMHwxCzAJBgNVBAYTAlVTMRMwEQYD
// SIG // VQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25k
// SIG // MR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24x
// SIG // JjAkBgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBD
// SIG // QSAyMDEwAhMzAAAAzabbOK+9LUEAAAAAAADNMA0GCWCG
// SIG // SAFlAwQCAQUAoIIBMjAaBgkqhkiG9w0BCQMxDQYLKoZI
// SIG // hvcNAQkQAQQwLwYJKoZIhvcNAQkEMSIEINgXqYxP+Ss3
// SIG // HyAGwBh0+Yn8+FWBjFCRt53oVfYjY//zMIHiBgsqhkiG
// SIG // 9w0BCRACDDGB0jCBzzCBzDCBsQQUgPXrdH1g73Y2qb8f
// SIG // 7iqKTz8apyMwgZgwgYCkfjB8MQswCQYDVQQGEwJVUzET
// SIG // MBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVk
// SIG // bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
// SIG // aW9uMSYwJAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFt
// SIG // cCBQQ0EgMjAxMAITMwAAAM2m2zivvS1BAAAAAAAAzTAW
// SIG // BBSz0xZtNj7yKAb5ehS76Xw56NfFlTANBgkqhkiG9w0B
// SIG // AQsFAASCAQBzLPkWtIEgtB/ff2I1yDrnksyTe8ygxDOI
// SIG // ujpEZwvIKdYgVmWFxDVIrBMHqk8EyqMH0/AaTA9AovFl
// SIG // bIPMjTXTLSd7lUGD4/Sx7AkGipfJcMI4IRCliZLDprB8
// SIG // z7D4oKiGQskgSfRHIRA7JLYVL6RPPIck7XReDTc74sbU
// SIG // PxasUKhTPNKT3W2t6N5KQNfSonmpyI/OyG8jH2DouhY1
// SIG // UM6EDmgQceFGMNHEmNSy16hgPNpewa0rACd7eR6Puk/n
// SIG // 0se0kztpuoyXcGqVevBMqZbZL2FHwE9Z40KT0RX67aSD
// SIG // jA9ggjkwZ3zkfqVQA8FdUAlEEQNO3dbGgd441TBekmd7
// SIG // End signature block
