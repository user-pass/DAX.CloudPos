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
System.register("PosApi/Entities", [], function (exports_1, context_1) {
    "use strict";
    var ProxyEntities, ClientEntities;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("ProxyEntities", ProxyEntities = Commerce.Proxy.Entities);
            exports_1("ClientEntities", ClientEntities = Commerce.Client.Entities);
        }
    };
});
System.register("PosApi/TypeExtensions", [], function (exports_2, context_2) {
    "use strict";
    var StringExtensions, ArrayExtensions, ObjectExtensions, DateExtensions;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            exports_2("StringExtensions", StringExtensions = Commerce.StringExtensions);
            exports_2("ArrayExtensions", ArrayExtensions = Commerce.ArrayExtensions);
            exports_2("ObjectExtensions", ObjectExtensions = Commerce.ObjectExtensions);
            exports_2("DateExtensions", DateExtensions = Commerce.DateExtensions);
        }
    };
});
System.register("PosApi/Consume/Authentication", [], function (exports_3, context_3) {
    "use strict";
    var LogOffOperationRequest, LogOffOperationResponse;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            exports_3("LogOffOperationRequest", LogOffOperationRequest = Commerce.LogOffOperationRequest);
            exports_3("LogOffOperationResponse", LogOffOperationResponse = Commerce.LogOffOperationResponse);
        }
    };
});
System.register("PosApi/Consume/Cart", [], function (exports_4, context_4) {
    "use strict";
    var AddPreprocessedTenderLineToCartClientRequest, AddPreprocessedTenderLineToCartClientResponse, AddTenderLineToCartClientRequest, AddTenderLineToCartClientResponse, ConcludeTransactionClientRequest, ConcludeTransactionClientResponse, GetCurrentCartClientRequest, GetCurrentCartClientResponse, GetKeyedInPriceClientRequest, GetKeyedInPriceClientResponse, GetPickupDateClientRequest, GetPickupDateClientResponse, GetReasonCodeLinesClientRequest, GetReasonCodeLinesClientResponse, GetReceiptEmailAddressClientRequest, GetReceiptEmailAddressClientResponse, GetShippingChargeClientRequest, GetShippingChargeClientResponse, GetShippingDateClientRequest, GetShippingDateClientResponse, RefreshCartClientRequest, RefreshCartClientResponse, ResumeSuspendedCartClientRequest, ResumeSuspendedCartClientResponse, SaveAttributesOnCartClientRequest, SaveAttributesOnCartClientResponse, SaveAttributesOnCartLinesClientRequest, SaveAttributesOnCartLinesClientResponse, SaveExtensionPropertiesOnCartClientRequest, SaveExtensionPropertiesOnCartClientResponse, SaveExtensionPropertiesOnCartLinesClientRequest, SaveExtensionPropertiesOnCartLinesClientResponse, SaveReasonCodeLinesOnCartClientRequest, SaveReasonCodeLinesOnCartClientResponse, SaveReasonCodeLinesOnCartLinesClientRequest, SaveReasonCodeLinesOnCartLinesClientResponse, SelectSalesLinesForPickUpClientRequest, SelectSalesLinesForPickUpClientResponse, SetCartAttributesClientRequest, SetCartAttributesClientResponse, ShowChangeDueClientRequest, ShowChangeDueClientResponse, AddAffiliationOperationRequest, AddAffiliationOperationResponse, AddCouponsOperationRequest, AddCouponsOperationResponse, AddItemToCartOperationResponse, AddItemToCartOperationRequest, CalculateTotalOperationRequest, CalculateTotalOperationResponse, CarryoutSelectedProductsOperationRequest, CarryoutSelectedProductsOperationResponse, ChangeCartLineUnitOfMeasureOperationRequest, ChangeCartLineUnitOfMeasureOperationResponse, CreateCustomerOrderOperationRequest, CreateCustomerOrderOperationResponse, CreateCustomerQuoteOperationRequest, CreateCustomerQuoteOperationResponse, CustomerAccountDepositOperationRequest, CustomerAccountDepositOperationResponse, DepositOverrideOperationRequest, DepositOverrideOperationResponse, EditCustomerOrderOperationRequest, EditCustomerOrderOperationResponse, LineDiscountAmountOperationResponse, LineDiscountAmountOperationRequest, LineDiscountPercentOperationResponse, LineDiscountPercentOperationRequest, OverrideLineTaxFromListOperationRequest, OverrideLineTaxFromListOperationResponse, OverrideLineTaxOperationRequest, OverrideLineTaxOperationResponse, OverrideTransactionTaxOperationRequest, OverrideTransactionTaxOperationResponse, PickupAllOperationRequest, PickupAllOperationResponse, PriceOverrideOperationRequest, PriceOverrideOperationResponse, SetCartLineCommentOperationRequest, SetCartLineCommentOperationResponse, SetCartLineQuantityOperationRequest, SetCartLineQuantityOperationResponse, SetCustomerOnCartOperationRequest, SetCustomerOnCartOperationResponse, SetTransactionCommentOperationRequest, SetTransactionCommentOperationResponse, SuspendCurrentCartOperationRequest, SuspendCurrentCartOperationResponse, TotalDiscountAmountOperationResponse, TotalDiscountAmountOperationRequest, TotalDiscountPercentOperationResponse, TotalDiscountPercentOperationRequest, VoidCartLineOperationRequest, VoidCartLineOperationResponse, VoidTenderLineOperationRequest, VoidTenderLineOperationResponse, VoidTransactionOperationRequest, VoidTransactionOperationResponse, CreateEmptyCartServiceRequest, CreateEmptyCartServiceResponse, GetTaxOverridesServiceRequest, GetTaxOverridesServiceResponse, UpdateTenderLineSignatureServiceRequest, UpdateTenderLineSignatureServiceResponse;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
            // Client Messages
            exports_4("AddPreprocessedTenderLineToCartClientRequest", AddPreprocessedTenderLineToCartClientRequest = Commerce.AddPreprocessedTenderLineToCartClientRequest);
            exports_4("AddPreprocessedTenderLineToCartClientResponse", AddPreprocessedTenderLineToCartClientResponse = Commerce.AddPreprocessedTenderLineToCartClientResponse);
            exports_4("AddTenderLineToCartClientRequest", AddTenderLineToCartClientRequest = Commerce.AddTenderLineToCartClientRequest);
            exports_4("AddTenderLineToCartClientResponse", AddTenderLineToCartClientResponse = Commerce.AddTenderLineToCartClientResponse);
            exports_4("ConcludeTransactionClientRequest", ConcludeTransactionClientRequest = Commerce.ConcludeTransactionClientRequest);
            exports_4("ConcludeTransactionClientResponse", ConcludeTransactionClientResponse = Commerce.ConcludeTransactionClientResponse);
            exports_4("GetCurrentCartClientRequest", GetCurrentCartClientRequest = Commerce.GetCurrentCartClientRequest);
            exports_4("GetCurrentCartClientResponse", GetCurrentCartClientResponse = Commerce.GetCurrentCartClientResponse);
            exports_4("GetKeyedInPriceClientRequest", GetKeyedInPriceClientRequest = Commerce.GetKeyedInPriceClientRequest);
            exports_4("GetKeyedInPriceClientResponse", GetKeyedInPriceClientResponse = Commerce.GetKeyedInPriceClientResponse);
            exports_4("GetPickupDateClientRequest", GetPickupDateClientRequest = Commerce.GetPickupDateClientRequest);
            exports_4("GetPickupDateClientResponse", GetPickupDateClientResponse = Commerce.GetPickupDateClientResponse);
            exports_4("GetReasonCodeLinesClientRequest", GetReasonCodeLinesClientRequest = Commerce.GetReasonCodeLinesClientRequest);
            exports_4("GetReasonCodeLinesClientResponse", GetReasonCodeLinesClientResponse = Commerce.GetReasonCodeLinesClientResponse);
            exports_4("GetReceiptEmailAddressClientRequest", GetReceiptEmailAddressClientRequest = Commerce.GetReceiptEmailAddressClientRequest);
            exports_4("GetReceiptEmailAddressClientResponse", GetReceiptEmailAddressClientResponse = Commerce.GetReceiptEmailAddressClientResponse);
            exports_4("GetShippingChargeClientRequest", GetShippingChargeClientRequest = Commerce.GetShippingChargeClientRequest);
            exports_4("GetShippingChargeClientResponse", GetShippingChargeClientResponse = Commerce.GetShippingChargeClientResponse);
            exports_4("GetShippingDateClientRequest", GetShippingDateClientRequest = Commerce.GetShippingDateClientRequest);
            exports_4("GetShippingDateClientResponse", GetShippingDateClientResponse = Commerce.GetShippingDateClientResponse);
            exports_4("RefreshCartClientRequest", RefreshCartClientRequest = Commerce.RefreshCartClientRequest);
            exports_4("RefreshCartClientResponse", RefreshCartClientResponse = Commerce.RefreshCartClientResponse);
            exports_4("ResumeSuspendedCartClientRequest", ResumeSuspendedCartClientRequest = Commerce.ResumeSuspendedCartClientRequest);
            exports_4("ResumeSuspendedCartClientResponse", ResumeSuspendedCartClientResponse = Commerce.ResumeSuspendedCartClientResponse);
            exports_4("SaveAttributesOnCartClientRequest", SaveAttributesOnCartClientRequest = Commerce.SaveAttributesOnCartClientRequest);
            exports_4("SaveAttributesOnCartClientResponse", SaveAttributesOnCartClientResponse = Commerce.SaveAttributesOnCartClientResponse);
            exports_4("SaveAttributesOnCartLinesClientRequest", SaveAttributesOnCartLinesClientRequest = Commerce.SaveAttributesOnCartLinesClientRequest);
            exports_4("SaveAttributesOnCartLinesClientResponse", SaveAttributesOnCartLinesClientResponse = Commerce.SaveAttributesOnCartLinesClientResponse);
            exports_4("SaveExtensionPropertiesOnCartClientRequest", SaveExtensionPropertiesOnCartClientRequest = Commerce.SaveExtensionPropertiesOnCartClientRequest);
            exports_4("SaveExtensionPropertiesOnCartClientResponse", SaveExtensionPropertiesOnCartClientResponse = Commerce.SaveExtensionPropertiesOnCartClientResponse);
            exports_4("SaveExtensionPropertiesOnCartLinesClientRequest", SaveExtensionPropertiesOnCartLinesClientRequest = Commerce.SaveExtensionPropertiesOnCartLinesClientRequest);
            exports_4("SaveExtensionPropertiesOnCartLinesClientResponse", SaveExtensionPropertiesOnCartLinesClientResponse = Commerce.SaveExtensionPropertiesOnCartLinesClientResponse);
            exports_4("SaveReasonCodeLinesOnCartClientRequest", SaveReasonCodeLinesOnCartClientRequest = Commerce.SaveReasonCodeLinesOnCartClientRequest);
            exports_4("SaveReasonCodeLinesOnCartClientResponse", SaveReasonCodeLinesOnCartClientResponse = Commerce.SaveReasonCodeLinesOnCartClientResponse);
            exports_4("SaveReasonCodeLinesOnCartLinesClientRequest", SaveReasonCodeLinesOnCartLinesClientRequest = Commerce.SaveReasonCodeLinesOnCartLinesClientRequest);
            exports_4("SaveReasonCodeLinesOnCartLinesClientResponse", SaveReasonCodeLinesOnCartLinesClientResponse = Commerce.SaveReasonCodeLinesOnCartLinesClientResponse);
            exports_4("SelectSalesLinesForPickUpClientRequest", SelectSalesLinesForPickUpClientRequest = Commerce.SelectSalesLinesForPickUpClientRequest);
            exports_4("SelectSalesLinesForPickUpClientResponse", SelectSalesLinesForPickUpClientResponse = Commerce.SelectSalesLinesForPickUpClientResponse);
            exports_4("SetCartAttributesClientRequest", SetCartAttributesClientRequest = Commerce.SetCartAttributesClientRequest);
            exports_4("SetCartAttributesClientResponse", SetCartAttributesClientResponse = Commerce.SetCartAttributesClientResponse);
            exports_4("ShowChangeDueClientRequest", ShowChangeDueClientRequest = Commerce.ShowChangeDueClientRequest);
            exports_4("ShowChangeDueClientResponse", ShowChangeDueClientResponse = Commerce.ShowChangeDueClientResponse);
            // Operation Messages
            exports_4("AddAffiliationOperationRequest", AddAffiliationOperationRequest = Commerce.AddAffiliationOperationRequest);
            exports_4("AddAffiliationOperationResponse", AddAffiliationOperationResponse = Commerce.AddAffiliationOperationResponse);
            exports_4("AddCouponsOperationRequest", AddCouponsOperationRequest = Commerce.AddCouponsOperationRequest);
            exports_4("AddCouponsOperationResponse", AddCouponsOperationResponse = Commerce.AddCouponsOperationResponse);
            exports_4("AddItemToCartOperationResponse", AddItemToCartOperationResponse = Commerce.AddItemToCartOperationResponse);
            exports_4("AddItemToCartOperationRequest", AddItemToCartOperationRequest = Commerce.AddItemToCartOperationRequest);
            exports_4("CalculateTotalOperationRequest", CalculateTotalOperationRequest = Commerce.CalculateTotalOperationRequest);
            exports_4("CalculateTotalOperationResponse", CalculateTotalOperationResponse = Commerce.CalculateTotalOperationResponse);
            exports_4("CarryoutSelectedProductsOperationRequest", CarryoutSelectedProductsOperationRequest = Commerce.CarryoutSelectedProductsOperationRequest);
            exports_4("CarryoutSelectedProductsOperationResponse", CarryoutSelectedProductsOperationResponse = Commerce.CarryoutSelectedProductsOperationResponse);
            exports_4("ChangeCartLineUnitOfMeasureOperationRequest", ChangeCartLineUnitOfMeasureOperationRequest = Commerce.ChangeCartLineUnitOfMeasureOperationRequest);
            exports_4("ChangeCartLineUnitOfMeasureOperationResponse", ChangeCartLineUnitOfMeasureOperationResponse = Commerce.ChangeCartLineUnitOfMeasureOperationResponse);
            exports_4("CreateCustomerOrderOperationRequest", CreateCustomerOrderOperationRequest = Commerce.CreateCustomerOrderOperationRequest);
            exports_4("CreateCustomerOrderOperationResponse", CreateCustomerOrderOperationResponse = Commerce.CreateCustomerOrderOperationResponse);
            exports_4("CreateCustomerQuoteOperationRequest", CreateCustomerQuoteOperationRequest = Commerce.CreateCustomerQuoteOperationRequest);
            exports_4("CreateCustomerQuoteOperationResponse", CreateCustomerQuoteOperationResponse = Commerce.CreateCustomerQuoteOperationResponse);
            exports_4("CustomerAccountDepositOperationRequest", CustomerAccountDepositOperationRequest = Commerce.CustomerAccountDepositOperationRequest);
            exports_4("CustomerAccountDepositOperationResponse", CustomerAccountDepositOperationResponse = Commerce.CustomerAccountDepositOperationResponse);
            exports_4("DepositOverrideOperationRequest", DepositOverrideOperationRequest = Commerce.DepositOverrideOperationRequest);
            exports_4("DepositOverrideOperationResponse", DepositOverrideOperationResponse = Commerce.DepositOverrideOperationResponse);
            exports_4("EditCustomerOrderOperationRequest", EditCustomerOrderOperationRequest = Commerce.EditCustomerOrderOperationRequest);
            exports_4("EditCustomerOrderOperationResponse", EditCustomerOrderOperationResponse = Commerce.EditCustomerOrderOperationResponse);
            exports_4("LineDiscountAmountOperationResponse", LineDiscountAmountOperationResponse = Commerce.LineDiscountAmountOperationResponse);
            exports_4("LineDiscountAmountOperationRequest", LineDiscountAmountOperationRequest = Commerce.LineDiscountAmountOperationRequest);
            exports_4("LineDiscountPercentOperationResponse", LineDiscountPercentOperationResponse = Commerce.LineDiscountPercentOperationResponse);
            exports_4("LineDiscountPercentOperationRequest", LineDiscountPercentOperationRequest = Commerce.LineDiscountPercentOperationRequest);
            exports_4("OverrideLineTaxFromListOperationRequest", OverrideLineTaxFromListOperationRequest = Commerce.OverrideLineTaxFromListOperationRequest);
            exports_4("OverrideLineTaxFromListOperationResponse", OverrideLineTaxFromListOperationResponse = Commerce.OverrideLineTaxFromListOperationResponse);
            exports_4("OverrideLineTaxOperationRequest", OverrideLineTaxOperationRequest = Commerce.OverrideLineTaxOperationRequest);
            exports_4("OverrideLineTaxOperationResponse", OverrideLineTaxOperationResponse = Commerce.OverrideLineTaxOperationResponse);
            exports_4("OverrideTransactionTaxOperationRequest", OverrideTransactionTaxOperationRequest = Commerce.OverrideTransactionTaxOperationRequest);
            exports_4("OverrideTransactionTaxOperationResponse", OverrideTransactionTaxOperationResponse = Commerce.OverrideTransactionTaxOperationResponse);
            exports_4("PickupAllOperationRequest", PickupAllOperationRequest = Commerce.PickupAllOperationRequest);
            exports_4("PickupAllOperationResponse", PickupAllOperationResponse = Commerce.PickupAllOperationResponse);
            exports_4("PriceOverrideOperationRequest", PriceOverrideOperationRequest = Commerce.PriceOverrideOperationRequest);
            exports_4("PriceOverrideOperationResponse", PriceOverrideOperationResponse = Commerce.PriceOverrideOperationResponse);
            exports_4("SetCartLineCommentOperationRequest", SetCartLineCommentOperationRequest = Commerce.SetCartLineCommentOperationRequest);
            exports_4("SetCartLineCommentOperationResponse", SetCartLineCommentOperationResponse = Commerce.SetCartLineCommentOperationResponse);
            exports_4("SetCartLineQuantityOperationRequest", SetCartLineQuantityOperationRequest = Commerce.SetCartLineQuantityOperationRequest);
            exports_4("SetCartLineQuantityOperationResponse", SetCartLineQuantityOperationResponse = Commerce.SetCartLineQuantityOperationResponse);
            exports_4("SetCustomerOnCartOperationRequest", SetCustomerOnCartOperationRequest = Commerce.SetCustomerOnCartOperationRequest);
            exports_4("SetCustomerOnCartOperationResponse", SetCustomerOnCartOperationResponse = Commerce.SetCustomerOnCartOperationResponse);
            exports_4("SetTransactionCommentOperationRequest", SetTransactionCommentOperationRequest = Commerce.SetTransactionCommentOperationRequest);
            exports_4("SetTransactionCommentOperationResponse", SetTransactionCommentOperationResponse = Commerce.SetTransactionCommentOperationResponse);
            exports_4("SuspendCurrentCartOperationRequest", SuspendCurrentCartOperationRequest = Commerce.SuspendCurrentCartOperationRequest);
            exports_4("SuspendCurrentCartOperationResponse", SuspendCurrentCartOperationResponse = Commerce.SuspendCurrentCartOperationResponse);
            exports_4("TotalDiscountAmountOperationResponse", TotalDiscountAmountOperationResponse = Commerce.TotalDiscountAmountOperationResponse);
            exports_4("TotalDiscountAmountOperationRequest", TotalDiscountAmountOperationRequest = Commerce.TotalDiscountAmountOperationRequest);
            exports_4("TotalDiscountPercentOperationResponse", TotalDiscountPercentOperationResponse = Commerce.TotalDiscountPercentOperationResponse);
            exports_4("TotalDiscountPercentOperationRequest", TotalDiscountPercentOperationRequest = Commerce.TotalDiscountPercentOperationRequest);
            exports_4("VoidCartLineOperationRequest", VoidCartLineOperationRequest = Commerce.VoidCartLineOperationRequest);
            exports_4("VoidCartLineOperationResponse", VoidCartLineOperationResponse = Commerce.VoidCartLineOperationResponse);
            exports_4("VoidTenderLineOperationRequest", VoidTenderLineOperationRequest = Commerce.VoidTenderLineOperationRequest);
            exports_4("VoidTenderLineOperationResponse", VoidTenderLineOperationResponse = Commerce.VoidTenderLineOperationResponse);
            exports_4("VoidTransactionOperationRequest", VoidTransactionOperationRequest = Commerce.VoidTransactionOperationRequest);
            exports_4("VoidTransactionOperationResponse", VoidTransactionOperationResponse = Commerce.VoidTransactionOperationResponse);
            // Service Requests/Responses - Each request response pair maps to a Retail Server API.
            exports_4("CreateEmptyCartServiceRequest", CreateEmptyCartServiceRequest = Commerce.CreateEmptyCartServiceRequest);
            exports_4("CreateEmptyCartServiceResponse", CreateEmptyCartServiceResponse = Commerce.CreateEmptyCartServiceResponse);
            exports_4("GetTaxOverridesServiceRequest", GetTaxOverridesServiceRequest = Commerce.GetTaxOverridesServiceRequest);
            exports_4("GetTaxOverridesServiceResponse", GetTaxOverridesServiceResponse = Commerce.GetTaxOverridesServiceResponse);
            exports_4("UpdateTenderLineSignatureServiceRequest", UpdateTenderLineSignatureServiceRequest = Commerce.Payments.UpdateTenderLineSignatureServiceRequest);
            exports_4("UpdateTenderLineSignatureServiceResponse", UpdateTenderLineSignatureServiceResponse = Commerce.Payments.UpdateTenderLineSignatureServiceResponse);
        }
    };
});
System.register("PosApi/Consume/Customer", [], function (exports_5, context_5) {
    "use strict";
    var GetCustomerClientRequest, GetCustomerClientResponse, SelectCustomerClientRequest, SelectCustomerClientResponse, CreateCustomerServiceRequest, CreateCustomerServiceResponse, UpdateCustomerServiceRequest, UpdateCustomerServiceResponse;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [],
        execute: function () {
            // Client Messages
            exports_5("GetCustomerClientRequest", GetCustomerClientRequest = Commerce.GetCustomerClientRequest);
            exports_5("GetCustomerClientResponse", GetCustomerClientResponse = Commerce.GetCustomerClientResponse);
            exports_5("SelectCustomerClientRequest", SelectCustomerClientRequest = Commerce.Customers.SelectCustomerClientRequest);
            exports_5("SelectCustomerClientResponse", SelectCustomerClientResponse = Commerce.Customers.SelectCustomerClientResponse);
            // Service Requests/Responses - Each request response pair maps to a Retail Server API.
            exports_5("CreateCustomerServiceRequest", CreateCustomerServiceRequest = Commerce.CreateCustomerServiceRequest);
            exports_5("CreateCustomerServiceResponse", CreateCustomerServiceResponse = Commerce.CreateCustomerServiceResponse);
            exports_5("UpdateCustomerServiceRequest", UpdateCustomerServiceRequest = Commerce.UpdateCustomerServiceRequest);
            exports_5("UpdateCustomerServiceResponse", UpdateCustomerServiceResponse = Commerce.UpdateCustomerServiceResponse);
        }
    };
});
System.register("PosApi/Consume/DataService", [], function (exports_6, context_6) {
    "use strict";
    var DataServiceRequest, DataServiceResponse;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [],
        execute: function () {
            exports_6("DataServiceRequest", DataServiceRequest = Commerce.DataService.DataServiceRequest);
            exports_6("DataServiceResponse", DataServiceResponse = Commerce.DataService.DataServiceResponse);
        }
    };
});
System.register("PosApi/Consume/Device", [], function (exports_7, context_7) {
    "use strict";
    var GetActiveHardwareStationClientRequest, GetActiveHardwareStationClientResponse, GetApplicationVersionClientRequest, GetApplicationVersionClientResponse, GetChannelConfigurationClientRequest, GetChannelConfigurationClientResponse, GetDeviceConfigurationClientRequest, GetDeviceConfigurationClientResponse, GetExtensionProfileClientRequest, GetExtensionProfileClientResponse, GetHardwareProfileClientRequest, GetHardwareProfileClientResponse, GetAuthenticationTokenClientRequest, GetAuthenticationTokenClientResponse, GetConnectionStatusClientRequest, GetConnectionStatusClientResponse;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [],
        execute: function () {
            exports_7("GetActiveHardwareStationClientRequest", GetActiveHardwareStationClientRequest = Commerce.GetActiveHardwareStationClientRequest);
            exports_7("GetActiveHardwareStationClientResponse", GetActiveHardwareStationClientResponse = Commerce.GetActiveHardwareStationClientResponse);
            exports_7("GetApplicationVersionClientRequest", GetApplicationVersionClientRequest = Commerce.GetApplicationVersionClientRequest);
            exports_7("GetApplicationVersionClientResponse", GetApplicationVersionClientResponse = Commerce.GetApplicationVersionClientResponse);
            exports_7("GetChannelConfigurationClientRequest", GetChannelConfigurationClientRequest = Commerce.GetChannelConfigurationClientRequest);
            exports_7("GetChannelConfigurationClientResponse", GetChannelConfigurationClientResponse = Commerce.GetChannelConfigurationClientResponse);
            exports_7("GetDeviceConfigurationClientRequest", GetDeviceConfigurationClientRequest = Commerce.GetDeviceConfigurationClientRequest);
            exports_7("GetDeviceConfigurationClientResponse", GetDeviceConfigurationClientResponse = Commerce.GetDeviceConfigurationClientResponse);
            exports_7("GetExtensionProfileClientRequest", GetExtensionProfileClientRequest = Commerce.GetExtensionProfileClientRequest);
            exports_7("GetExtensionProfileClientResponse", GetExtensionProfileClientResponse = Commerce.GetExtensionProfileClientResponse);
            exports_7("GetHardwareProfileClientRequest", GetHardwareProfileClientRequest = Commerce.GetHardwareProfileClientRequest);
            exports_7("GetHardwareProfileClientResponse", GetHardwareProfileClientResponse = Commerce.GetHardwareProfileClientResponse);
            exports_7("GetAuthenticationTokenClientRequest", GetAuthenticationTokenClientRequest = Commerce.GetAuthenticationTokenClientRequest);
            exports_7("GetAuthenticationTokenClientResponse", GetAuthenticationTokenClientResponse = Commerce.GetAuthenticationTokenClientResponse);
            exports_7("GetConnectionStatusClientRequest", GetConnectionStatusClientRequest = Commerce.GetConnectionStatusClientRequest);
            exports_7("GetConnectionStatusClientResponse", GetConnectionStatusClientResponse = Commerce.GetConnectionStatusClientResponse);
        }
    };
});
System.register("PosApi/Consume/Diagnostics", [], function (exports_8, context_8) {
    "use strict";
    var GetSessionInfoClientRequest, GetSessionInfoClientResponse;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [],
        execute: function () {
            exports_8("GetSessionInfoClientRequest", GetSessionInfoClientRequest = Commerce.GetSessionInfoClientRequest);
            exports_8("GetSessionInfoClientResponse", GetSessionInfoClientResponse = Commerce.GetSessionInfoClientResponse);
        }
    };
});
System.register("PosApi/Consume/Dialogs", [], function (exports_9, context_9) {
    "use strict";
    var ShowMessageDialogClientRequest, ShowMessageDialogClientResponse, ShowAlphanumericInputDialogError, ShowAlphanumericInputDialogClientRequest, ShowAlphanumericInputDialogClientResponse, ShowNumericInputDialogError, ShowNumericInputDialogClientRequest, ShowNumericInputDialogClientResponse, ShowListInputDialogError, ShowListInputDialogClientRequest, ShowListInputDialogClientResponse, ShowTextInputDialogError, ShowTextInputDialogClientRequest, ShowTextInputDialogClientResponse;
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [],
        execute: function () {
            exports_9("ShowMessageDialogClientRequest", ShowMessageDialogClientRequest = Commerce.ShowMessageDialogClientRequest);
            exports_9("ShowMessageDialogClientResponse", ShowMessageDialogClientResponse = Commerce.ShowMessageDialogClientResponse);
            exports_9("ShowAlphanumericInputDialogError", ShowAlphanumericInputDialogError = Commerce.Client.Entities.ShowAlphanumericInputDialogError);
            exports_9("ShowAlphanumericInputDialogClientRequest", ShowAlphanumericInputDialogClientRequest = Commerce.ShowAlphanumericInputDialogClientRequest);
            exports_9("ShowAlphanumericInputDialogClientResponse", ShowAlphanumericInputDialogClientResponse = Commerce.ShowAlphanumericInputDialogClientResponse);
            exports_9("ShowNumericInputDialogError", ShowNumericInputDialogError = Commerce.Client.Entities.ShowNumericInputDialogError);
            exports_9("ShowNumericInputDialogClientRequest", ShowNumericInputDialogClientRequest = Commerce.ShowNumericInputDialogClientRequest);
            exports_9("ShowNumericInputDialogClientResponse", ShowNumericInputDialogClientResponse = Commerce.ShowNumericInputDialogClientResponse);
            exports_9("ShowListInputDialogError", ShowListInputDialogError = Commerce.Client.Entities.ShowListInputDialogError);
            exports_9("ShowListInputDialogClientRequest", ShowListInputDialogClientRequest = Commerce.ShowListInputDialogClientRequest);
            exports_9("ShowListInputDialogClientResponse", ShowListInputDialogClientResponse = Commerce.ShowListInputDialogClientResponse);
            exports_9("ShowTextInputDialogError", ShowTextInputDialogError = Commerce.Client.Entities.ShowTextInputDialogError);
            exports_9("ShowTextInputDialogClientRequest", ShowTextInputDialogClientRequest = Commerce.ShowTextInputDialogClientRequest);
            exports_9("ShowTextInputDialogClientResponse", ShowTextInputDialogClientResponse = Commerce.ShowTextInputDialogClientResponse);
        }
    };
});
System.register("PosApi/Consume/Employees", [], function (exports_10, context_10) {
    "use strict";
    var GetLoggedOnEmployeeClientRequest, GetLoggedOnEmployeeClientResponse;
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [],
        execute: function () {
            exports_10("GetLoggedOnEmployeeClientRequest", GetLoggedOnEmployeeClientRequest = Commerce.GetLoggedOnEmployeeClientRequest);
            exports_10("GetLoggedOnEmployeeClientResponse", GetLoggedOnEmployeeClientResponse = Commerce.GetLoggedOnEmployeeClientResponse);
        }
    };
});
System.register("PosApi/Consume/Formatters", [], function (exports_11, context_11) {
    "use strict";
    var BooleanFormatter, CurrencyFormatter, DateFormatter, PurchaseTransferOrderTypeFormatter, TransactionTypeFormatter;
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [],
        execute: function () {
            // tslint:disable-next-line:variable-name
            exports_11("BooleanFormatter", BooleanFormatter = {
                toYesNo: function (value) { return Commerce.Extensibility.ValueFormatterManager.instance.YesNoBooleanFormatter(value); }
            });
            // tslint:disable-next-line:variable-name
            exports_11("CurrencyFormatter", CurrencyFormatter = {
                toCurrency: function (value) { return Commerce.Extensibility.ValueFormatterManager.instance.PriceFormatter(value); }
            });
            // tslint:disable-next-line:variable-name
            exports_11("DateFormatter", DateFormatter = {
                toShortDateAndTime: function (value) { return Commerce.Extensibility.ValueFormatterManager.instance.ShortDateAndTimeFormatter(value); },
                toShortDate: function (value) { return Commerce.Extensibility.ValueFormatterManager.instance.ShortDateFormatter(value); }
            });
            // tslint:disable-next-line:variable-name
            exports_11("PurchaseTransferOrderTypeFormatter", PurchaseTransferOrderTypeFormatter = {
                toName: function (value) {
                    return Commerce.Extensibility.ValueFormatterManager.instance.PurchaseTransferOrderTypeFormatter(value);
                }
            });
            // tslint:disable-next-line:variable-name
            exports_11("TransactionTypeFormatter", TransactionTypeFormatter = {
                toName: function (value, entryStatusValue) {
                    return Commerce.Extensibility.ValueFormatterManager.instance.TransactionTypeFormatter(value, entryStatusValue);
                }
            });
        }
    };
});
System.register("PosApi/Consume/OrgUnits", [], function (exports_12, context_12) {
    "use strict";
    var GetOrgUnitConfigurationClientRequest, GetOrgUnitConfigurationClientResponse, GetOrgUnitTenderTypesClientRequest, GetOrgUnitTenderTypesClientResponse, InventoryLookupOperationRequest, InventoryLookupOperationResponse;
    var __moduleName = context_12 && context_12.id;
    return {
        setters: [],
        execute: function () {
            exports_12("GetOrgUnitConfigurationClientRequest", GetOrgUnitConfigurationClientRequest = Commerce.GetOrgUnitConfigurationClientRequest);
            exports_12("GetOrgUnitConfigurationClientResponse", GetOrgUnitConfigurationClientResponse = Commerce.GetOrgUnitConfigurationClientResponse);
            exports_12("GetOrgUnitTenderTypesClientRequest", GetOrgUnitTenderTypesClientRequest = Commerce.GetOrgUnitTenderTypesClientRequest);
            exports_12("GetOrgUnitTenderTypesClientResponse", GetOrgUnitTenderTypesClientResponse = Commerce.GetOrgUnitTenderTypesClientResponse);
            exports_12("InventoryLookupOperationRequest", InventoryLookupOperationRequest = Commerce.InventoryLookupOperationRequest);
            exports_12("InventoryLookupOperationResponse", InventoryLookupOperationResponse = Commerce.InventoryLookupOperationResponse);
        }
    };
});
System.register("PosApi/Consume/Payments", [], function (exports_13, context_13) {
    "use strict";
    var GetGiftCardByIdServiceRequest, GetGiftCardByIdServiceResponse, GetPaymentCardTypeByBinRangeClientRequest, GetPaymentCardTypeByBinRangeClientResponse;
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [],
        execute: function () {
            exports_13("GetGiftCardByIdServiceRequest", GetGiftCardByIdServiceRequest = Commerce.Payments.GetGiftCardByIdServiceRequest);
            exports_13("GetGiftCardByIdServiceResponse", GetGiftCardByIdServiceResponse = Commerce.Payments.GetGiftCardByIdServiceResponse);
            exports_13("GetPaymentCardTypeByBinRangeClientRequest", GetPaymentCardTypeByBinRangeClientRequest = Commerce.GetPaymentCardTypeByBinRangeClientRequest);
            exports_13("GetPaymentCardTypeByBinRangeClientResponse", GetPaymentCardTypeByBinRangeClientResponse = Commerce.GetPaymentCardTypeByBinRangeClientResponse);
        }
    };
});
System.register("PosApi/Consume/Peripherals", [], function (exports_14, context_14) {
    "use strict";
    var CardPaymentAuthorizePaymentRequest, CardPaymentAuthorizePaymentResponse, CardPaymentBeginTransactionRequest, CardPaymentBeginTransactionResponse, CardPaymentCapturePaymentRequest, CardPaymentCapturePaymentResponse, CardPaymentEndTransactionRequest, CardPaymentEndTransactionResponse, CardPaymentEnquireGiftCardBalancePeripheralRequest, CardPaymentEnquireGiftCardBalancePeripheralResponse, CardPaymentExecuteTaskRequest, CardPaymentExecuteTaskResponse, CardPaymentRefundPaymentRequest, CardPaymentRefundPaymentResponse, CardPaymentVoidPaymentRequest, CardPaymentVoidPaymentResponse, CashDrawerIsOpenRequest, CashDrawerIsOpenResponse, CashDrawerOpenRequest, CashDrawerOpenResponse, HardwareStationDeviceActionRequest, HardwareStationDeviceActionResponse, HardwareStationStatusRequest, HardwareStationStatusResponse, LineDisplayDisplayLinesRequest, LineDisplayDisplayLinesResponse, PaymentTerminalActivateGiftCardPeripheralRequest, PaymentTerminalActivateGiftCardPeripheralResponse, PaymentTerminalAddBalanceToGiftCardPeripheralRequest, PaymentTerminalAddBalanceToGiftCardPeripheralResponse, PaymentTerminalAuthorizePaymentActivityRequest, PaymentTerminalAuthorizePaymentActivityResponse, PaymentTerminalAuthorizePaymentRequest, PaymentTerminalAuthorizePaymentResponse, PaymentTerminalBeginTransactionRequest, PaymentTerminalBeginTransactionResponse, PaymentTerminalCancelOperationRequest, PaymentTerminalCancelOperationResponse, PaymentTerminalCapturePaymentRequest, PaymentTerminalCapturePaymentResponse, PaymentTerminalEndTransactionRequest, PaymentTerminalEndTransactionResponse, PaymentTerminalEnquireGiftCardBalancePeripheralRequest, PaymentTerminalEnquireGiftCardBalancePeripheralResponse, PaymentTerminalExecuteTaskRequest, PaymentTerminalExecuteTaskResponse, PaymentTerminalRefundPaymentActivityRequest, PaymentTerminalRefundPaymentActivityResponse, PaymentTerminalRefundPaymentRequest, PaymentTerminalRefundPaymentResponse, PaymentTerminalUpdateLinesRequest, PaymentTerminalUpdateLinesResponse, PaymentTerminalVoidPaymentRequest, PaymentTerminalVoidPaymentResponse, PrinterPrintRequest, PrinterPrintResponse, ScaleReadRequest, ScaleReadResponse;
    var __moduleName = context_14 && context_14.id;
    return {
        setters: [],
        execute: function () {
            exports_14("CardPaymentAuthorizePaymentRequest", CardPaymentAuthorizePaymentRequest = Commerce.CardPaymentAuthorizePaymentRequest);
            exports_14("CardPaymentAuthorizePaymentResponse", CardPaymentAuthorizePaymentResponse = Commerce.CardPaymentAuthorizePaymentResponse);
            exports_14("CardPaymentBeginTransactionRequest", CardPaymentBeginTransactionRequest = Commerce.CardPaymentBeginTransactionRequest);
            exports_14("CardPaymentBeginTransactionResponse", CardPaymentBeginTransactionResponse = Commerce.CardPaymentBeginTransactionResponse);
            exports_14("CardPaymentCapturePaymentRequest", CardPaymentCapturePaymentRequest = Commerce.CardPaymentCapturePaymentRequest);
            exports_14("CardPaymentCapturePaymentResponse", CardPaymentCapturePaymentResponse = Commerce.CardPaymentCapturePaymentResponse);
            exports_14("CardPaymentEndTransactionRequest", CardPaymentEndTransactionRequest = Commerce.CardPaymentEndTransactionRequest);
            exports_14("CardPaymentEndTransactionResponse", CardPaymentEndTransactionResponse = Commerce.CardPaymentEndTransactionResponse);
            exports_14("CardPaymentEnquireGiftCardBalancePeripheralRequest", CardPaymentEnquireGiftCardBalancePeripheralRequest = Commerce.CardPaymentEnquireGiftCardBalancePeripheralRequest);
            exports_14("CardPaymentEnquireGiftCardBalancePeripheralResponse", CardPaymentEnquireGiftCardBalancePeripheralResponse = Commerce.CardPaymentEnquireGiftCardBalancePeripheralResponse);
            exports_14("CardPaymentExecuteTaskRequest", CardPaymentExecuteTaskRequest = Commerce.CardPaymentExecuteTaskRequest);
            exports_14("CardPaymentExecuteTaskResponse", CardPaymentExecuteTaskResponse = Commerce.CardPaymentExecuteTaskResponse);
            exports_14("CardPaymentRefundPaymentRequest", CardPaymentRefundPaymentRequest = Commerce.CardPaymentRefundPaymentRequest);
            exports_14("CardPaymentRefundPaymentResponse", CardPaymentRefundPaymentResponse = Commerce.CardPaymentRefundPaymentResponse);
            exports_14("CardPaymentVoidPaymentRequest", CardPaymentVoidPaymentRequest = Commerce.CardPaymentVoidPaymentRequest);
            exports_14("CardPaymentVoidPaymentResponse", CardPaymentVoidPaymentResponse = Commerce.CardPaymentVoidPaymentResponse);
            exports_14("CashDrawerIsOpenRequest", CashDrawerIsOpenRequest = Commerce.CashDrawerIsOpenRequest);
            exports_14("CashDrawerIsOpenResponse", CashDrawerIsOpenResponse = Commerce.CashDrawerIsOpenResponse);
            exports_14("CashDrawerOpenRequest", CashDrawerOpenRequest = Commerce.CashDrawerOpenRequest);
            exports_14("CashDrawerOpenResponse", CashDrawerOpenResponse = Commerce.CashDrawerOpenResponse);
            exports_14("HardwareStationDeviceActionRequest", HardwareStationDeviceActionRequest = Commerce.HardwareStationDeviceActionRequest);
            exports_14("HardwareStationDeviceActionResponse", HardwareStationDeviceActionResponse = Commerce.HardwareStationDeviceActionResponse);
            exports_14("HardwareStationStatusRequest", HardwareStationStatusRequest = Commerce.HardwareStationStatusRequest);
            exports_14("HardwareStationStatusResponse", HardwareStationStatusResponse = Commerce.HardwareStationStatusResponse);
            exports_14("LineDisplayDisplayLinesRequest", LineDisplayDisplayLinesRequest = Commerce.LineDisplayDisplayLinesRequest);
            exports_14("LineDisplayDisplayLinesResponse", LineDisplayDisplayLinesResponse = Commerce.LineDisplayDisplayLinesResponse);
            exports_14("PaymentTerminalActivateGiftCardPeripheralRequest", PaymentTerminalActivateGiftCardPeripheralRequest = Commerce.Peripherals.PaymentTerminalActivateGiftCardPeripheralRequest);
            exports_14("PaymentTerminalActivateGiftCardPeripheralResponse", PaymentTerminalActivateGiftCardPeripheralResponse = Commerce.Peripherals.PaymentTerminalActivateGiftCardPeripheralResponse);
            exports_14("PaymentTerminalAddBalanceToGiftCardPeripheralRequest", PaymentTerminalAddBalanceToGiftCardPeripheralRequest = Commerce.Peripherals.PaymentTerminalAddBalanceToGiftCardPeripheralRequest);
            exports_14("PaymentTerminalAddBalanceToGiftCardPeripheralResponse", PaymentTerminalAddBalanceToGiftCardPeripheralResponse = Commerce.Peripherals.PaymentTerminalAddBalanceToGiftCardPeripheralResponse);
            exports_14("PaymentTerminalAuthorizePaymentActivityRequest", PaymentTerminalAuthorizePaymentActivityRequest = Commerce.PaymentTerminalAuthorizePaymentActivityRequest);
            exports_14("PaymentTerminalAuthorizePaymentActivityResponse", PaymentTerminalAuthorizePaymentActivityResponse = Commerce.PaymentTerminalAuthorizePaymentActivityResponse);
            exports_14("PaymentTerminalAuthorizePaymentRequest", PaymentTerminalAuthorizePaymentRequest = Commerce.PaymentTerminalAuthorizePaymentRequest);
            exports_14("PaymentTerminalAuthorizePaymentResponse", PaymentTerminalAuthorizePaymentResponse = Commerce.PaymentTerminalAuthorizePaymentResponse);
            exports_14("PaymentTerminalBeginTransactionRequest", PaymentTerminalBeginTransactionRequest = Commerce.PaymentTerminalBeginTransactionRequest);
            exports_14("PaymentTerminalBeginTransactionResponse", PaymentTerminalBeginTransactionResponse = Commerce.PaymentTerminalBeginTransactionResponse);
            exports_14("PaymentTerminalCancelOperationRequest", PaymentTerminalCancelOperationRequest = Commerce.PaymentTerminalCancelOperationRequest);
            exports_14("PaymentTerminalCancelOperationResponse", PaymentTerminalCancelOperationResponse = Commerce.PaymentTerminalCancelOperationResponse);
            exports_14("PaymentTerminalCapturePaymentRequest", PaymentTerminalCapturePaymentRequest = Commerce.PaymentTerminalCapturePaymentRequest);
            exports_14("PaymentTerminalCapturePaymentResponse", PaymentTerminalCapturePaymentResponse = Commerce.PaymentTerminalCapturePaymentResponse);
            exports_14("PaymentTerminalEndTransactionRequest", PaymentTerminalEndTransactionRequest = Commerce.PaymentTerminalEndTransactionRequest);
            exports_14("PaymentTerminalEndTransactionResponse", PaymentTerminalEndTransactionResponse = Commerce.PaymentTerminalEndTransactionResponse);
            exports_14("PaymentTerminalEnquireGiftCardBalancePeripheralRequest", PaymentTerminalEnquireGiftCardBalancePeripheralRequest = Commerce.PaymentTerminalEnquireGiftCardBalancePeripheralRequest);
            exports_14("PaymentTerminalEnquireGiftCardBalancePeripheralResponse", PaymentTerminalEnquireGiftCardBalancePeripheralResponse = Commerce.PaymentTerminalEnquireGiftCardBalancePeripheralResponse);
            exports_14("PaymentTerminalExecuteTaskRequest", PaymentTerminalExecuteTaskRequest = Commerce.PaymentTerminalExecuteTaskRequest);
            exports_14("PaymentTerminalExecuteTaskResponse", PaymentTerminalExecuteTaskResponse = Commerce.PaymentTerminalExecuteTaskResponse);
            exports_14("PaymentTerminalRefundPaymentActivityRequest", PaymentTerminalRefundPaymentActivityRequest = Commerce.PaymentTerminalRefundPaymentActivityRequest);
            exports_14("PaymentTerminalRefundPaymentActivityResponse", PaymentTerminalRefundPaymentActivityResponse = Commerce.PaymentTerminalRefundPaymentActivityResponse);
            exports_14("PaymentTerminalRefundPaymentRequest", PaymentTerminalRefundPaymentRequest = Commerce.PaymentTerminalRefundPaymentRequest);
            exports_14("PaymentTerminalRefundPaymentResponse", PaymentTerminalRefundPaymentResponse = Commerce.PaymentTerminalRefundPaymentResponse);
            exports_14("PaymentTerminalUpdateLinesRequest", PaymentTerminalUpdateLinesRequest = Commerce.PaymentTerminalUpdateLinesRequest);
            exports_14("PaymentTerminalUpdateLinesResponse", PaymentTerminalUpdateLinesResponse = Commerce.PaymentTerminalUpdateLinesResponse);
            exports_14("PaymentTerminalVoidPaymentRequest", PaymentTerminalVoidPaymentRequest = Commerce.PaymentTerminalVoidPaymentRequest);
            exports_14("PaymentTerminalVoidPaymentResponse", PaymentTerminalVoidPaymentResponse = Commerce.PaymentTerminalVoidPaymentResponse);
            exports_14("PrinterPrintRequest", PrinterPrintRequest = Commerce.PrinterPrintRequest);
            exports_14("PrinterPrintResponse", PrinterPrintResponse = Commerce.PrinterPrintResponse);
            exports_14("ScaleReadRequest", ScaleReadRequest = Commerce.ScaleReadRequest);
            exports_14("ScaleReadResponse", ScaleReadResponse = Commerce.ScaleReadResponse);
        }
    };
});
System.register("PosApi/Consume/Products", [], function (exports_15, context_15) {
    "use strict";
    var GetCurrentProductCatalogStoreClientRequest, GetCurrentProductCatalogStoreClientResponse, GetProductsByIdsClientRequest, GetProductsByIdsClientResponse, GetSerialNumberClientRequest, GetSerialNumberClientResponse, SelectProductClientRequest, SelectProductClientResponse, SelectProductVariantClientRequest, SelectProductVariantClientResponse, GetRefinerValuesByTextServiceRequest, GetRefinerValuesByTextServiceResponse;
    var __moduleName = context_15 && context_15.id;
    return {
        setters: [],
        execute: function () {
            // Client Messages
            exports_15("GetCurrentProductCatalogStoreClientRequest", GetCurrentProductCatalogStoreClientRequest = Commerce.Products.GetCurrentProductCatalogStoreClientRequest);
            exports_15("GetCurrentProductCatalogStoreClientResponse", GetCurrentProductCatalogStoreClientResponse = Commerce.Products.GetCurrentProductCatalogStoreClientResponse);
            exports_15("GetProductsByIdsClientRequest", GetProductsByIdsClientRequest = Commerce.Products.GetProductsByIdsClientRequest);
            exports_15("GetProductsByIdsClientResponse", GetProductsByIdsClientResponse = Commerce.Products.GetProductsByIdsClientResponse);
            exports_15("GetSerialNumberClientRequest", GetSerialNumberClientRequest = Commerce.Products.GetSerialNumberClientRequest);
            exports_15("GetSerialNumberClientResponse", GetSerialNumberClientResponse = Commerce.Products.GetSerialNumberClientResponse);
            exports_15("SelectProductClientRequest", SelectProductClientRequest = Commerce.Products.SelectProductClientRequest);
            exports_15("SelectProductClientResponse", SelectProductClientResponse = Commerce.Products.SelectProductClientResponse);
            exports_15("SelectProductVariantClientRequest", SelectProductVariantClientRequest = Commerce.Products.SelectProductVariantClientRequest);
            exports_15("SelectProductVariantClientResponse", SelectProductVariantClientResponse = Commerce.Products.SelectProductVariantClientResponse);
            // Service Requests/Responses - Each request response pair maps to a Retail Server API.
            exports_15("GetRefinerValuesByTextServiceRequest", GetRefinerValuesByTextServiceRequest = Commerce.Products.GetRefinerValuesByTextServiceRequest);
            exports_15("GetRefinerValuesByTextServiceResponse", GetRefinerValuesByTextServiceResponse = Commerce.Products.GetRefinerValuesByTextServiceResponse);
        }
    };
});
System.register("PosApi/Consume/SalesOrders", [], function (exports_16, context_16) {
    "use strict";
    var GetGiftReceiptsClientRequest, GetGiftReceiptsClientResponse, GetReceiptsClientRequest, GetReceiptsClientResponse, RegisterPrintReceiptCopyEventRequest, RegisterPrintReceiptCopyEventResponse, GetSalesOrderDetailsByTransactionIdClientRequest, GetSalesOrderDetailsByTransactionIdClientResponse, MarkAsPickedServiceRequest, MarkAsPickedServiceResponse, PrintPackingSlipClientRequest, PrintPackingSlipClientResponse, SelectCustomerOrderTypeClientRequest, SelectCustomerOrderTypeClientResponse;
    var __moduleName = context_16 && context_16.id;
    return {
        setters: [],
        execute: function () {
            exports_16("GetGiftReceiptsClientRequest", GetGiftReceiptsClientRequest = Commerce.SalesOrders.GetGiftReceiptsClientRequest);
            exports_16("GetGiftReceiptsClientResponse", GetGiftReceiptsClientResponse = Commerce.SalesOrders.GetGiftReceiptsClientResponse);
            exports_16("GetReceiptsClientRequest", GetReceiptsClientRequest = Commerce.GetReceiptsClientRequest);
            exports_16("GetReceiptsClientResponse", GetReceiptsClientResponse = Commerce.GetReceiptsClientResponse);
            exports_16("RegisterPrintReceiptCopyEventRequest", RegisterPrintReceiptCopyEventRequest = Commerce.RegisterPrintReceiptCopyEventRequest);
            exports_16("RegisterPrintReceiptCopyEventResponse", RegisterPrintReceiptCopyEventResponse = Commerce.RegisterPrintReceiptCopyEventResponse);
            exports_16("GetSalesOrderDetailsByTransactionIdClientRequest", GetSalesOrderDetailsByTransactionIdClientRequest = Commerce.GetSalesOrderDetailsByTransactionIdClientRequest);
            exports_16("GetSalesOrderDetailsByTransactionIdClientResponse", GetSalesOrderDetailsByTransactionIdClientResponse = Commerce.GetSalesOrderDetailsByTransactionIdClientResponse);
            exports_16("MarkAsPickedServiceRequest", MarkAsPickedServiceRequest = Commerce.SalesOrders.MarkAsPickedServiceRequest);
            exports_16("MarkAsPickedServiceResponse", MarkAsPickedServiceResponse = Commerce.SalesOrders.MarkAsPickedServiceResponse);
            exports_16("PrintPackingSlipClientRequest", PrintPackingSlipClientRequest = Commerce.PrintPackingSlipClientRequest);
            exports_16("PrintPackingSlipClientResponse", PrintPackingSlipClientResponse = Commerce.PrintPackingSlipClientResponse);
            exports_16("SelectCustomerOrderTypeClientRequest", SelectCustomerOrderTypeClientRequest = Commerce.SalesOrders.SelectCustomerOrderTypeClientRequest);
            exports_16("SelectCustomerOrderTypeClientResponse", SelectCustomerOrderTypeClientResponse = Commerce.SalesOrders.SelectCustomerOrderTypeClientResponse);
        }
    };
});
System.register("PosApi/Consume/ScanResults", [], function (exports_17, context_17) {
    "use strict";
    var GetScanResultClientRequest, GetScanResultClientResponse;
    var __moduleName = context_17 && context_17.id;
    return {
        setters: [],
        execute: function () {
            exports_17("GetScanResultClientRequest", GetScanResultClientRequest = Commerce.GetScanResultClientRequest);
            exports_17("GetScanResultClientResponse", GetScanResultClientResponse = Commerce.GetScanResultClientResponse);
        }
    };
});
System.register("PosApi/Consume/Shifts", [], function (exports_18, context_18) {
    "use strict";
    var GetCurrentShiftClientRequest, GetCurrentShiftClientResponse, CloseShiftOperationRequest, CloseShiftOperationResponse;
    var __moduleName = context_18 && context_18.id;
    return {
        setters: [],
        execute: function () {
            // Client Messages
            exports_18("GetCurrentShiftClientRequest", GetCurrentShiftClientRequest = Commerce.GetCurrentShiftClientRequest);
            exports_18("GetCurrentShiftClientResponse", GetCurrentShiftClientResponse = Commerce.GetCurrentShiftClientResponse);
            // Operation Messages
            exports_18("CloseShiftOperationRequest", CloseShiftOperationRequest = Commerce.CloseShiftOperationRequest);
            exports_18("CloseShiftOperationResponse", CloseShiftOperationResponse = Commerce.CloseShiftOperationResponse);
        }
    };
});
System.register("PosApi/Consume/StockCountJournals", [], function (exports_19, context_19) {
    "use strict";
    var SyncAllStockCountJournalsClientRequest, SyncAllStockCountJournalsClientResponse;
    var __moduleName = context_19 && context_19.id;
    return {
        setters: [],
        execute: function () {
            // Client Messages
            exports_19("SyncAllStockCountJournalsClientRequest", SyncAllStockCountJournalsClientRequest = Commerce.SyncAllStockCountJournalsClientRequest);
            exports_19("SyncAllStockCountJournalsClientResponse", SyncAllStockCountJournalsClientResponse = Commerce.SyncAllStockCountJournalsClientResponse);
        }
    };
});
System.register("PosApi/Consume/StoreOperations", [], function (exports_20, context_20) {
    "use strict";
    var CreateBankDropTransactionClientRequest, CreateBankDropTransactionClientResponse, CreateFloatEntryTransactionClientRequest, CreateFloatEntryTransactionClientResponse, CreateStartingAmountTransactionClientRequest, CreateStartingAmountTransactionClientResponse, CreateTenderDeclarationTransactionClientRequest, CreateTenderDeclarationTransactionClientResponse, CreateTenderRemovalTransactionClientRequest, CreateTenderRemovalTransactionClientResponse, DeclareStartingAmountClientRequest, DeclareStartingAmountClientResponse, GetDenominationTotalsClientRequest, GetDenominationTotalsClientResponse, GetSalesOrdersWithNoFiscalTransactionsRequest, GetSalesOrdersWithNoFiscalTransactionsResponse, RegisterCustomAuditEventClientRequest, RegisterCustomAuditEventClientResponse, GetOfflinePendingTransactionCountClientRequest, GetOfflinePendingTransactionCountClientResponse, SaveFiscalTransactionClientRequest, SaveFiscalTransactionClientResponse, SelectZipCodeInfoClientRequest, SelectZipCodeInfoClientResponse, CreateSafeDropTransactionClientRequest, CreateSafeDropTransactionClientResponse, GetTenderDetailsClientRequest, GetTenderDetailsClientResponse, LoyaltyCardPointsBalanceOperationRequest, LoyaltyCardPointsBalanceOperationResponse, SafeDropOperationRequest, SafeDropOperationResponse, TenderDeclarationOperationRequest, TenderDeclarationOperationResponse, TenderRemovalOperationRequest, TenderRemovalOperationResponse, CreateNonSalesTransactionServiceRequest, CreateNonSalesTransactionServiceResponse, GetCommissionSalesGroupsServiceRequest, GetCommissionSalesGroupsServiceResponse, GetCurrenciesServiceRequest, GetCurrenciesServiceResponse, GetSrsReportDataSetServiceRequest, GetSrsReportDataSetServiceResponse, SearchCommissionSalesGroupsServiceRequest, SearchCommissionSalesGroupsServiceResponse;
    var __moduleName = context_20 && context_20.id;
    return {
        setters: [],
        execute: function () {
            // Client Messages
            exports_20("CreateBankDropTransactionClientRequest", CreateBankDropTransactionClientRequest = Commerce.TenderCounting.CreateBankDropTransactionClientRequest);
            exports_20("CreateBankDropTransactionClientResponse", CreateBankDropTransactionClientResponse = Commerce.TenderCounting.CreateBankDropTransactionClientResponse);
            exports_20("CreateFloatEntryTransactionClientRequest", CreateFloatEntryTransactionClientRequest = Commerce.CashManagement.CreateFloatEntryTransactionClientRequest);
            exports_20("CreateFloatEntryTransactionClientResponse", CreateFloatEntryTransactionClientResponse = Commerce.CashManagement.CreateFloatEntryTransactionClientResponse);
            exports_20("CreateStartingAmountTransactionClientRequest", CreateStartingAmountTransactionClientRequest = Commerce.CashManagement.CreateStartingAmountTransactionClientRequest);
            exports_20("CreateStartingAmountTransactionClientResponse", CreateStartingAmountTransactionClientResponse = Commerce.CashManagement.CreateStartingAmountTransactionClientResponse);
            exports_20("CreateTenderDeclarationTransactionClientRequest", CreateTenderDeclarationTransactionClientRequest = Commerce.TenderCounting.CreateTenderDeclarationTransactionClientRequest);
            exports_20("CreateTenderDeclarationTransactionClientResponse", CreateTenderDeclarationTransactionClientResponse = Commerce.TenderCounting.CreateTenderDeclarationTransactionClientResponse);
            exports_20("CreateTenderRemovalTransactionClientRequest", CreateTenderRemovalTransactionClientRequest = Commerce.CashManagement.CreateTenderRemovalTransactionClientRequest);
            exports_20("CreateTenderRemovalTransactionClientResponse", CreateTenderRemovalTransactionClientResponse = Commerce.CashManagement.CreateTenderRemovalTransactionClientResponse);
            exports_20("DeclareStartingAmountClientRequest", DeclareStartingAmountClientRequest = Commerce.DeclareStartingAmountClientRequest);
            exports_20("DeclareStartingAmountClientResponse", DeclareStartingAmountClientResponse = Commerce.DeclareStartingAmountClientResponse);
            exports_20("GetDenominationTotalsClientRequest", GetDenominationTotalsClientRequest = Commerce.GetDenominationTotalsClientRequest);
            exports_20("GetDenominationTotalsClientResponse", GetDenominationTotalsClientResponse = Commerce.GetDenominationTotalsClientResponse);
            exports_20("GetSalesOrdersWithNoFiscalTransactionsRequest", GetSalesOrdersWithNoFiscalTransactionsRequest = Commerce.GetSalesOrdersWithNoFiscalTransactionsRequest);
            exports_20("GetSalesOrdersWithNoFiscalTransactionsResponse", GetSalesOrdersWithNoFiscalTransactionsResponse = Commerce.GetSalesOrdersWithNoFiscalTransactionsResponse);
            exports_20("RegisterCustomAuditEventClientRequest", RegisterCustomAuditEventClientRequest = Commerce.RegisterCustomAuditEventClientRequest);
            exports_20("RegisterCustomAuditEventClientResponse", RegisterCustomAuditEventClientResponse = Commerce.RegisterCustomAuditEventClientResponse);
            exports_20("GetOfflinePendingTransactionCountClientRequest", GetOfflinePendingTransactionCountClientRequest = Commerce.GetOfflinePendingTransactionCountClientRequest);
            exports_20("GetOfflinePendingTransactionCountClientResponse", GetOfflinePendingTransactionCountClientResponse = Commerce.GetOfflinePendingTransactionCountClientResponse);
            exports_20("SaveFiscalTransactionClientRequest", SaveFiscalTransactionClientRequest = Commerce.SaveFiscalTransactionClientRequest);
            exports_20("SaveFiscalTransactionClientResponse", SaveFiscalTransactionClientResponse = Commerce.SaveFiscalTransactionClientResponse);
            exports_20("SelectZipCodeInfoClientRequest", SelectZipCodeInfoClientRequest = Commerce.SelectZipCodeInfoClientRequest);
            exports_20("SelectZipCodeInfoClientResponse", SelectZipCodeInfoClientResponse = Commerce.SelectZipCodeInfoClientResponse);
            exports_20("CreateSafeDropTransactionClientRequest", CreateSafeDropTransactionClientRequest = Commerce.TenderCounting.CreateSafeDropTransactionClientRequest);
            exports_20("CreateSafeDropTransactionClientResponse", CreateSafeDropTransactionClientResponse = Commerce.TenderCounting.CreateSafeDropTransactionClientResponse);
            exports_20("GetTenderDetailsClientRequest", GetTenderDetailsClientRequest = Commerce.GetTenderDetailsClientRequest);
            exports_20("GetTenderDetailsClientResponse", GetTenderDetailsClientResponse = Commerce.GetTenderDetailsClientResponse);
            // Operation Messages
            exports_20("LoyaltyCardPointsBalanceOperationRequest", LoyaltyCardPointsBalanceOperationRequest = Commerce.LoyaltyCardPointsBalanceOperationRequest);
            exports_20("LoyaltyCardPointsBalanceOperationResponse", LoyaltyCardPointsBalanceOperationResponse = Commerce.LoyaltyCardPointsBalanceOperationResponse);
            exports_20("SafeDropOperationRequest", SafeDropOperationRequest = Commerce.SafeDropOperationRequest);
            exports_20("SafeDropOperationResponse", SafeDropOperationResponse = Commerce.SafeDropOperationResponse);
            exports_20("TenderDeclarationOperationRequest", TenderDeclarationOperationRequest = Commerce.TenderDeclarationOperationRequest);
            exports_20("TenderDeclarationOperationResponse", TenderDeclarationOperationResponse = Commerce.TenderDeclarationOperationResponse);
            exports_20("TenderRemovalOperationRequest", TenderRemovalOperationRequest = Commerce.TenderRemovalOperationRequest);
            exports_20("TenderRemovalOperationResponse", TenderRemovalOperationResponse = Commerce.TenderRemovalOperationResponse);
            // Service Requests/Responses - Each request response pair maps to a Retail Server API.
            exports_20("CreateNonSalesTransactionServiceRequest", CreateNonSalesTransactionServiceRequest = Commerce.CreateNonSalesTransactionServiceRequest);
            exports_20("CreateNonSalesTransactionServiceResponse", CreateNonSalesTransactionServiceResponse = Commerce.CreateNonSalesTransactionServiceResponse);
            exports_20("GetCommissionSalesGroupsServiceRequest", GetCommissionSalesGroupsServiceRequest = Commerce.GetCommissionSalesGroupsServiceRequest);
            exports_20("GetCommissionSalesGroupsServiceResponse", GetCommissionSalesGroupsServiceResponse = Commerce.GetCommissionSalesGroupsServiceResponse);
            exports_20("GetCurrenciesServiceRequest", GetCurrenciesServiceRequest = Commerce.GetCurrenciesServiceRequest);
            exports_20("GetCurrenciesServiceResponse", GetCurrenciesServiceResponse = Commerce.GetCurrenciesServiceResponse);
            exports_20("GetSrsReportDataSetServiceRequest", GetSrsReportDataSetServiceRequest = Commerce.Reports.GetSrsReportDataSetServiceRequest);
            exports_20("GetSrsReportDataSetServiceResponse", GetSrsReportDataSetServiceResponse = Commerce.Reports.GetSrsReportDataSetServiceResponse);
            exports_20("SearchCommissionSalesGroupsServiceRequest", SearchCommissionSalesGroupsServiceRequest = Commerce.SearchCommissionSalesGroupsServiceRequest);
            exports_20("SearchCommissionSalesGroupsServiceResponse", SearchCommissionSalesGroupsServiceResponse = Commerce.SearchCommissionSalesGroupsServiceResponse);
        }
    };
});
System.register("PosApi/Framework/Runtime", [], function (exports_21, context_21) {
    "use strict";
    var __moduleName = context_21 && context_21.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("PosApi/Framework/Logging", [], function (exports_22, context_22) {
    "use strict";
    var __moduleName = context_22 && context_22.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("PosApi/Framework/Navigation", [], function (exports_23, context_23) {
    "use strict";
    var __moduleName = context_23 && context_23.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("PosApi/Framework/ExtensionContext", [], function (exports_24, context_24) {
    "use strict";
    var __moduleName = context_24 && context_24.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("PosApi/Create/Controls", [], function (exports_25, context_25) {
    "use strict";
    var ExtensionControlBase;
    var __moduleName = context_25 && context_25.id;
    return {
        setters: [],
        execute: function () {
            /**
             * Represents a POS Controls.
             */
            ExtensionControlBase = /** @class */ (function () {
                function ExtensionControlBase(context) {
                    this.context = context;
                }
                return ExtensionControlBase;
            }());
            exports_25("ExtensionControlBase", ExtensionControlBase);
        }
    };
});
System.register("PosApi/Create/Dialogs", ["PosApi/TypeExtensions"], function (exports_26, context_26) {
    "use strict";
    var TypeExtensions_1, ExtensionTemplatedDialogBase;
    var __moduleName = context_26 && context_26.id;
    return {
        setters: [
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            }
        ],
        execute: function () {
            /**
             * Represents template dialog.
             * Dialog renders template with context provided.
             * On result it returns context back with updated values if any.
             */
            ExtensionTemplatedDialogBase = /** @class */ (function () {
                function ExtensionTemplatedDialogBase() {
                    /**
                     * Capture or not the global input for NumPad when typing.
                     */
                    this.captureGlobalInputForNumPad = false;
                    this.context = this._templatedDialogContext;
                    this._onBarcodeScanned = null;
                    this._onMsrSwiped = null;
                    this._isOpen = false;
                    this._proxyControl = this._createTemplatedDialogProxyControl(this);
                }
                Object.defineProperty(ExtensionTemplatedDialogBase.prototype, "numPadInputBroker", {
                    /**
                     * Gets the numpad input broker which serves as publisher\subscriber between view's numpad and the peripheral layer.
                     * @return {Commerce.Peripherals.NumPadInputBroker} The instance of the broker.
                     */
                    get: function () {
                        return this._proxyControl.numPadInputBroker();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExtensionTemplatedDialogBase.prototype, "onBarcodeScanned", {
                    /**
                     * Gets the handler for bacode scanner when it reads a barcode.
                     * @returns {(barcode: string) => void} The barcode scanned handler.
                     */
                    get: function () {
                        return this._onBarcodeScanned;
                    },
                    /**
                     * Sets the handler for bacode scanner when it reads a barcode.
                     * @remarks Derived classes should set the handler on its constructor.
                     */
                    set: function (impl) {
                        if (!TypeExtensions_1.ObjectExtensions.isFunction(impl)) {
                            throw new Error("ExtensionTemplatedDialogBase.onBarcodeScanned - The barcode scanned handler must be a function.");
                        }
                        else if (this._isOpen) {
                            throw new Error("ExtensionTemplatedDialogBase.onBarcodeScanned - Cannot set the barcode scanned handler after the dialog has been opened.");
                        }
                        this._onBarcodeScanned = impl;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExtensionTemplatedDialogBase.prototype, "onMsrSwiped", {
                    /**
                     * Gets the handler for magnetic stripe reader when a card is swiped.
                     * @returns {(cardInfo: ClientEntities.ICardInfo) => void} The MSR swiped handler.
                     */
                    get: function () {
                        return this._onMsrSwiped;
                    },
                    /**
                     * Sets the handler for magnetic stripe reader when a card is swiped.
                     * @remarks Derived classes should set the handler on its constructor to handle MSR Swipe.
                     */
                    set: function (impl) {
                        if (!TypeExtensions_1.ObjectExtensions.isFunction(impl)) {
                            throw new Error("ExtensionTemplatedDialogBase.onMsrSwiped - The MSR swiped handler must be a function.");
                        }
                        else if (this._isOpen) {
                            throw new Error("ExtensionTemplatedDialogBase.onMsrSwiped - Cannot set the MSR swiped handler after the dialog has been opened.");
                        }
                        this._onMsrSwiped = impl;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Opens POS dialog control.
                 * Method should be called by dialog extension and pass necessary parameters.
                 * @param {ITemplatedDialogOptions} dialogOptions Dialog options.
                 */
                ExtensionTemplatedDialogBase.prototype.openDialog = function (dialogOptions) {
                    this._proxyControl.openDialog(dialogOptions);
                    this._isOpen = true;
                };
                /**
                 * Closes POS dialog control.
                 */
                ExtensionTemplatedDialogBase.prototype.closeDialog = function () {
                    this._proxyControl.closeDialog();
                    this._isOpen = false;
                };
                /**
                 * Disable modal dialog button using id.
                 * @param {string} buttonId Button id.
                 * @param {boolean} disabled Disabled state.
                 */
                ExtensionTemplatedDialogBase.prototype.setButtonDisabledState = function (buttonId, disabled) {
                    this._proxyControl.setButtonDisabledState(buttonId, disabled);
                };
                return ExtensionTemplatedDialogBase;
            }());
            exports_26("ExtensionTemplatedDialogBase", ExtensionTemplatedDialogBase);
        }
    };
});
System.register("PosApi/Create/RequestHandlers", [], function (exports_27, context_27) {
    "use strict";
    var Request, Response, RequestHandler, ExtensionRequestBase, ExtensionRequestHandlerBase;
    var __moduleName = context_27 && context_27.id;
    return {
        setters: [],
        execute: function () {
            exports_27("Request", Request = Commerce.Request);
            exports_27("Response", Response = Commerce.Response);
            exports_27("RequestHandler", RequestHandler = Commerce.RequestHandler);
            /**
             * Represents the base class for new extension requests.
             * @remarks All extension requests should derive from this class.
             */
            ExtensionRequestBase = /** @class */ (function (_super) {
                __extends(ExtensionRequestBase, _super);
                /**
                 * Creates a new instance of the ExtensionRequestBase class.
                 * @param {string} [correlationId] The identifier used to correlate events related to this request.
                 */
                function ExtensionRequestBase(correlationId) {
                    return _super.call(this, correlationId) || this;
                }
                return ExtensionRequestBase;
            }(Request));
            exports_27("ExtensionRequestBase", ExtensionRequestBase);
            /**
             * Represents the base class for all extension request handlers.
             */
            ExtensionRequestHandlerBase = /** @class */ (function (_super) {
                __extends(ExtensionRequestHandlerBase, _super);
                /**
                 * Creates a new instance of the ExtensionRequestHandlerBase class.
                 * @param {IExtensionRequestHandlerContext} context
                 */
                function ExtensionRequestHandlerBase(context) {
                    var _this = _super.call(this) || this;
                    _this.context = context;
                    return _this;
                }
                return ExtensionRequestHandlerBase;
            }(RequestHandler));
            exports_27("ExtensionRequestHandlerBase", ExtensionRequestHandlerBase);
        }
    };
});
System.register("PosApi/Create/Operations", ["PosApi/Create/RequestHandlers"], function (exports_28, context_28) {
    "use strict";
    var RequestHandlers_1, ExtensionOperationRequestBase, ExtensionOperationRequestHandlerBase;
    var __moduleName = context_28 && context_28.id;
    return {
        setters: [
            function (RequestHandlers_1_1) {
                RequestHandlers_1 = RequestHandlers_1_1;
            }
        ],
        execute: function () {
            exports_28("ExtensionOperationRequestBase", ExtensionOperationRequestBase = Commerce.Extensibility.ExtensionOperationRequestBase);
            /**
             * Base class for operation request handler extension.
             */
            ExtensionOperationRequestHandlerBase = /** @class */ (function (_super) {
                __extends(ExtensionOperationRequestHandlerBase, _super);
                function ExtensionOperationRequestHandlerBase(context) {
                    var _this = _super.call(this) || this;
                    _this.context = context;
                    return _this;
                }
                return ExtensionOperationRequestHandlerBase;
            }(RequestHandlers_1.RequestHandler));
            exports_28("ExtensionOperationRequestHandlerBase", ExtensionOperationRequestHandlerBase);
        }
    };
});
System.register("PosApi/Create/Views", [], function (exports_29, context_29) {
    "use strict";
    var ExtensionViewControllerBase;
    var __moduleName = context_29 && context_29.id;
    return {
        setters: [],
        execute: function () {
            /**
             * Represents the base class for all extension view controllers.
             * @remarks All extension view controllers should derive from this class.
             */
            ExtensionViewControllerBase = /** @class */ (function (_super) {
                __extends(ExtensionViewControllerBase, _super);
                /**
                 * Base controller constructor.
                 * @param {IExtensionViewControllerContext} context View context.
                 * @param {boolean} saveInHistory Allows multiple instances of the same view to be saved in history seqientially.
                 *  Example: Categories view for drill down feature.
                 */
                function ExtensionViewControllerBase(context, saveInHistory) {
                    var _this = _super.call(this, saveInHistory) || this;
                    /**
                     * Capture or not the global input for NumPad when typing.
                     */
                    _this.captureGlobalInputForNumPad = false;
                    _this.context = context;
                    _this._numPadInputBroker = new Commerce.Peripherals.NumPadInputBroker();
                    return _this;
                }
                Object.defineProperty(ExtensionViewControllerBase.prototype, "numPadInputBroker", {
                    /**
                     * Gets the numpad input broker which serves as publisher\subscriber between view's numpad and the peripheral layer.
                     * @return {Commerce.Peripherals.NumPadInputBroker} The instance of the broker.
                     */
                    get: function () {
                        return this._numPadInputBroker;
                    },
                    enumerable: true,
                    configurable: true
                });
                return ExtensionViewControllerBase;
            }(Commerce.Extensibility.DisposableViewControllerBase));
            exports_29("ExtensionViewControllerBase", ExtensionViewControllerBase);
        }
    };
});
System.register("PosApi/Framework/Messaging", [], function (exports_30, context_30) {
    "use strict";
    var __moduleName = context_30 && context_30.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("PosApi/Extend/Views/CustomControls", [], function (exports_31, context_31) {
    "use strict";
    var CustomControlBase;
    var __moduleName = context_31 && context_31.id;
    return {
        setters: [],
        execute: function () {
            /**
             * The base class for all custom controls.
             * @remarks Custom controls in extensions should not directly inherit from this class. Instead custom controls should inherit from the derived class
             * for the page to be extended.
             */
            CustomControlBase = /** @class */ (function () {
                /**
                 * Creates a new instance of the CustomControlBase class.
                 * @param {string} id The control identifier.
                 * @param {ICustomControlContext<TExtToPage, TPageToExtMap>} context The custom control context.
                 */
                function CustomControlBase(id, context) {
                    var _this = this;
                    this.context = context;
                    this._isProcessing = false;
                    this._id = id;
                    this.context.messageChannel.addMessageHandler("Initialize", function (data) {
                        _this.init(data);
                    });
                    this.context.messageChannel.addMessageHandler("Dispose", function () {
                        _this.dispose();
                    });
                    // Start the message channel to begin receiving messages.
                    this.context.messageChannel.start();
                }
                Object.defineProperty(CustomControlBase.prototype, "id", {
                    /**
                     * Gets the control's identifier.
                     * @returns {string} The identifier.
                     */
                    get: function () {
                        return this._id;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CustomControlBase.prototype, "isProcessing", {
                    /**
                     * Gets a value indicating whether or not the custom control is processing.
                     * @return {boolean} True if the custom control is processing. False otherwise.
                     */
                    get: function () {
                        return this._isProcessing;
                    },
                    /**
                     * Sets a value indicating whether or not the custom control is processing.
                     * @param {boolean} value True if the custom control is processing. False otherwise.
                     */
                    set: function (value) {
                        if (value !== this._isProcessing) {
                            this._isProcessing = value;
                            this.context.messageChannel.sendMessage("IsProcessingChanged", this._isProcessing);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Disposes the control releasing its resources.
                 */
                CustomControlBase.prototype.dispose = function () {
                    Commerce.ObjectExtensions.disposeAllProperties(this);
                };
                return CustomControlBase;
            }());
            exports_31("CustomControlBase", CustomControlBase);
        }
    };
});
System.register("PosApi/Extend/DualDisplay", [], function (exports_32, context_32) {
    "use strict";
    var DualDisplayCustomControlBase;
    var __moduleName = context_32 && context_32.id;
    return {
        setters: [],
        execute: function () {
            /**
             * Represents the base class for all extension controls on the cart page.
             * @remarks Custom controls in extensions should derive from this class.
             */
            DualDisplayCustomControlBase = /** @class */ (function () {
                /**
                 * Creates a new instance of the DualDisplayCustomControlBase class.
                 * @param {string} id The control identifier.
                 * @param {ICartViewCustomControlContext} context The control context.
                 */
                function DualDisplayCustomControlBase(id, context) {
                    var _this = this;
                    // Initializes fields.
                    this.context = context;
                    this._isProcessing = false;
                    this._id = id;
                    // Adds the message handlers.
                    this.context.messageChannel.addMessageHandler("Initialize", function (data) {
                        _this.init(data);
                    });
                    this.context.messageChannel.addMessageHandler("Dispose", function () {
                        _this.dispose();
                    });
                    this.context.messageChannel.addMessageHandler("CartChanged", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.cartChangedHandler)) {
                            _this.cartChangedHandler(data);
                        }
                    });
                    this.context.messageChannel.addMessageHandler("CustomerChanged", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.customerChangedHandler)) {
                            _this.customerChangedHandler(data);
                        }
                    });
                    this.context.messageChannel.addMessageHandler("LogOnStatusChanged", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.logOnStatusChangedHandler)) {
                            _this.logOnStatusChangedHandler(data);
                        }
                    });
                    // Start the message channel to begin receiving messages.
                    this.context.messageChannel.start();
                }
                Object.defineProperty(DualDisplayCustomControlBase.prototype, "id", {
                    /**
                     * Gets the control's identifier.
                     * @returns {string} The identifier.
                     */
                    get: function () {
                        return this._id;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Disposes the control releasing its resources.
                 */
                DualDisplayCustomControlBase.prototype.dispose = function () {
                    Commerce.ObjectExtensions.disposeAllProperties(this);
                };
                Object.defineProperty(DualDisplayCustomControlBase.prototype, "isProcessing", {
                    /**
                     * Gets a value indicating whether or not the dual display custom control is processing.
                     * @return {boolean} True if the dual display custom control is processing. False otherwise.
                     */
                    get: function () {
                        return this._isProcessing;
                    },
                    /**
                     * Sets a value indicating whether or not the dual display custom control is processing.
                     * @param {boolean} value True if the dual display custom control is processing. False otherwise.
                     */
                    set: function (value) {
                        if (value !== this._isProcessing) {
                            this._isProcessing = value;
                            this.context.messageChannel.sendMessage("IsProcessingChanged", this._isProcessing);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                return DualDisplayCustomControlBase;
            }());
            exports_32("DualDisplayCustomControlBase", DualDisplayCustomControlBase);
        }
    };
});
System.register("PosApi/Extend/RequestHandlers/RequestHandlers", [], function (exports_33, context_33) {
    "use strict";
    var RequestHandler, ReplacementRequestHandlerBase;
    var __moduleName = context_33 && context_33.id;
    return {
        setters: [],
        execute: function () {
            RequestHandler = Commerce.RequestHandler;
            /**
             * Represents the base for a asynchronous replacement request handler.
             */
            ReplacementRequestHandlerBase = /** @class */ (function (_super) {
                __extends(ReplacementRequestHandlerBase, _super);
                /**
                 * Creates a new instance of the ExtensionRequestHandlerBase class.
                 * @param {IExtensionRequestHandlerContext} context
                 */
                function ReplacementRequestHandlerBase(context) {
                    var _this = _super.call(this) || this;
                    _this.context = context;
                    return _this;
                }
                /**
                 * Executes the default request handler asynchronously.
                 * @param {Request<TResponse>} request The request.
                 * @return {Promise<Client.Entities.ICancelableDataResult<TResponse>>} The promise with a cancelable result containing the response.
                 */
                ReplacementRequestHandlerBase.prototype.defaultExecuteAsync = function (request) {
                    return Promise.reject("The implementation for the defaultExecuteAsync has not been set.");
                };
                return ReplacementRequestHandlerBase;
            }(RequestHandler));
            exports_33("ReplacementRequestHandlerBase", ReplacementRequestHandlerBase);
        }
    };
});
System.register("PosApi/Extend/RequestHandlers/CartRequestHandlers", ["PosApi/Extend/RequestHandlers/RequestHandlers", "PosApi/Consume/Cart"], function (exports_34, context_34) {
    "use strict";
    var RequestHandlers_2, Cart_1, AddTenderLineToCartClientRequestHandler, GetKeyedInPriceClientRequestHandler, GetPickupDateClientRequestHandler, GetShippingDateClientRequestHandler, ShowChangeDueClientRequestHandler, GetReceiptEmailAddressClientRequestHandler, DepositOverrideOperationRequestHandler, GetShippingChargeClientRequestHandler;
    var __moduleName = context_34 && context_34.id;
    return {
        setters: [
            function (RequestHandlers_2_1) {
                RequestHandlers_2 = RequestHandlers_2_1;
            },
            function (Cart_1_1) {
                Cart_1 = Cart_1_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all replacement for AddTenderLineToCartClientRequestHandler.
             * @remarks All replacement for AddTenderLineToCartClientRequestHandler should derive from this class.
             */
            AddTenderLineToCartClientRequestHandler = /** @class */ (function (_super) {
                __extends(AddTenderLineToCartClientRequestHandler, _super);
                function AddTenderLineToCartClientRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<AddTenderLineToCartClientResponse>} The supported abstract or concrete operation request type.
                 */
                AddTenderLineToCartClientRequestHandler.prototype.supportedRequestType = function () {
                    return Cart_1.AddTenderLineToCartClientRequest;
                };
                return AddTenderLineToCartClientRequestHandler;
            }(RequestHandlers_2.ReplacementRequestHandlerBase));
            exports_34("AddTenderLineToCartClientRequestHandler", AddTenderLineToCartClientRequestHandler);
            /**
             * Represents the base class for all replacement for GetKeyedInPriceClientRequestHandler.
             * @remarks All replacement for GetKeyedInPriceClientRequestHandler should derive from this class.
             */
            GetKeyedInPriceClientRequestHandler = /** @class */ (function (_super) {
                __extends(GetKeyedInPriceClientRequestHandler, _super);
                function GetKeyedInPriceClientRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<GetKeyedInPriceClientResponse>} The supported abstract or concrete operation request type.
                 */
                GetKeyedInPriceClientRequestHandler.prototype.supportedRequestType = function () {
                    return Cart_1.GetKeyedInPriceClientRequest;
                };
                return GetKeyedInPriceClientRequestHandler;
            }(RequestHandlers_2.ReplacementRequestHandlerBase));
            exports_34("GetKeyedInPriceClientRequestHandler", GetKeyedInPriceClientRequestHandler);
            /**
             * Represents the base class for all replacement for GetPickupDateClientRequestHandler.
             * @remarks All replacement for GetPickupDateClientRequestHandler should derive from this class.
             */
            GetPickupDateClientRequestHandler = /** @class */ (function (_super) {
                __extends(GetPickupDateClientRequestHandler, _super);
                function GetPickupDateClientRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<GetPickupDateClientResponse>} The supported abstract or concrete operation request type.
                 */
                GetPickupDateClientRequestHandler.prototype.supportedRequestType = function () {
                    return Cart_1.GetPickupDateClientRequest;
                };
                return GetPickupDateClientRequestHandler;
            }(RequestHandlers_2.ReplacementRequestHandlerBase));
            exports_34("GetPickupDateClientRequestHandler", GetPickupDateClientRequestHandler);
            /**
             * Represents the base class for all replacement for GetShippingDateClientRequestHandler.
             * @remarks All replacement for GetShippingDateClientRequestHandler should derive from this class.
             */
            GetShippingDateClientRequestHandler = /** @class */ (function (_super) {
                __extends(GetShippingDateClientRequestHandler, _super);
                function GetShippingDateClientRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<GetShippingDateClientResponse>} The supported abstract or concrete operation request type.
                 */
                GetShippingDateClientRequestHandler.prototype.supportedRequestType = function () {
                    return Cart_1.GetShippingDateClientRequest;
                };
                return GetShippingDateClientRequestHandler;
            }(RequestHandlers_2.ReplacementRequestHandlerBase));
            exports_34("GetShippingDateClientRequestHandler", GetShippingDateClientRequestHandler);
            /**
             * Represents the base class for all replacement for ShowChangeDueClientRequestHandler.
             * @remarks All replacement for ShowChangeDueClientRequestHandler should derive from this class.
             */
            ShowChangeDueClientRequestHandler = /** @class */ (function (_super) {
                __extends(ShowChangeDueClientRequestHandler, _super);
                function ShowChangeDueClientRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<ShowChangeDueClientResponse>} The supported abstract or concrete operation request type.
                 */
                ShowChangeDueClientRequestHandler.prototype.supportedRequestType = function () {
                    return Cart_1.ShowChangeDueClientRequest;
                };
                return ShowChangeDueClientRequestHandler;
            }(RequestHandlers_2.ReplacementRequestHandlerBase));
            exports_34("ShowChangeDueClientRequestHandler", ShowChangeDueClientRequestHandler);
            /**
             * Represents the base class for all replacement GetReceiptEmailAddressClientRequestHandler.
             * @remarks All replacement GetReceiptEmailAddressClientRequestHandler should derive from this class.
             */
            GetReceiptEmailAddressClientRequestHandler = /** @class */ (function (_super) {
                __extends(GetReceiptEmailAddressClientRequestHandler, _super);
                function GetReceiptEmailAddressClientRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<GetReceiptEmailAddressClientResponse>} The supported abstract or concrete operation request type.
                 */
                GetReceiptEmailAddressClientRequestHandler.prototype.supportedRequestType = function () {
                    return Cart_1.GetReceiptEmailAddressClientRequest;
                };
                return GetReceiptEmailAddressClientRequestHandler;
            }(RequestHandlers_2.ReplacementRequestHandlerBase));
            exports_34("GetReceiptEmailAddressClientRequestHandler", GetReceiptEmailAddressClientRequestHandler);
            /**
             * Represents the base class for all replacement DepositOverrideOperationRequestHandler.
             * @remarks All replacement DepositOverrideOperationRequestHandler should derive from this class.
             */
            DepositOverrideOperationRequestHandler = /** @class */ (function (_super) {
                __extends(DepositOverrideOperationRequestHandler, _super);
                function DepositOverrideOperationRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<DepositOverrideOperationResponse>} The supported abstract or concrete operation request type.
                 */
                DepositOverrideOperationRequestHandler.prototype.supportedRequestType = function () {
                    return Cart_1.DepositOverrideOperationRequest;
                };
                return DepositOverrideOperationRequestHandler;
            }(RequestHandlers_2.ReplacementRequestHandlerBase));
            exports_34("DepositOverrideOperationRequestHandler", DepositOverrideOperationRequestHandler);
            /**
             * Represents the base class for all replacement for GetShippingChargeClientRequestHandler.
             * @remarks All replacement for GetShippingChargeClientRequestHandler should derive from this class.
             */
            GetShippingChargeClientRequestHandler = /** @class */ (function (_super) {
                __extends(GetShippingChargeClientRequestHandler, _super);
                function GetShippingChargeClientRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<GetShippingChargeClientResponse>} The supported abstract or concrete operation request type.
                 */
                GetShippingChargeClientRequestHandler.prototype.supportedRequestType = function () {
                    return Cart_1.GetShippingChargeClientRequest;
                };
                return GetShippingChargeClientRequestHandler;
            }(RequestHandlers_2.ReplacementRequestHandlerBase));
            exports_34("GetShippingChargeClientRequestHandler", GetShippingChargeClientRequestHandler);
        }
    };
});
System.register("PosApi/Extend/RequestHandlers/PaymentRequestHandlers", ["PosApi/Extend/RequestHandlers/RequestHandlers", "PosApi/Consume/Payments"], function (exports_35, context_35) {
    "use strict";
    var RequestHandlers_3, Payments_1, Payments_2, GetGiftCardByIdServiceRequestHandler, GetPaymentCardTypeByBinRangeClientRequestHandler;
    var __moduleName = context_35 && context_35.id;
    return {
        setters: [
            function (RequestHandlers_3_1) {
                RequestHandlers_3 = RequestHandlers_3_1;
            },
            function (Payments_1_1) {
                Payments_1 = Payments_1_1;
                Payments_2 = Payments_1_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all replacement GetGiftCardByIdServiceRequestHandler.
             * @remarks All replacement GetGiftCardByIdServiceRequestHandler should derive from this class.
             */
            GetGiftCardByIdServiceRequestHandler = /** @class */ (function (_super) {
                __extends(GetGiftCardByIdServiceRequestHandler, _super);
                function GetGiftCardByIdServiceRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<GetGiftCardByIdServiceResponse>} The supported abstract or concrete operation request type.
                 */
                GetGiftCardByIdServiceRequestHandler.prototype.supportedRequestType = function () {
                    return Payments_1.GetGiftCardByIdServiceRequest;
                };
                return GetGiftCardByIdServiceRequestHandler;
            }(RequestHandlers_3.ReplacementRequestHandlerBase));
            exports_35("GetGiftCardByIdServiceRequestHandler", GetGiftCardByIdServiceRequestHandler);
            /**
             * Represents the base class for all replacement GetPaymentCardTypeByBinRangeClientRequestHandler.
             * @remarks All replacement GetPaymentCardTypeByBinRangeClientRequestHandler should derive from this class.
             */
            GetPaymentCardTypeByBinRangeClientRequestHandler = /** @class */ (function (_super) {
                __extends(GetPaymentCardTypeByBinRangeClientRequestHandler, _super);
                function GetPaymentCardTypeByBinRangeClientRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<GetPaymentCardTypeByBinRangeClientResponse>} The supported abstract or concrete operation request type.
                 */
                GetPaymentCardTypeByBinRangeClientRequestHandler.prototype.supportedRequestType = function () {
                    return Payments_2.GetPaymentCardTypeByBinRangeClientRequest;
                };
                return GetPaymentCardTypeByBinRangeClientRequestHandler;
            }(RequestHandlers_3.ReplacementRequestHandlerBase));
            exports_35("GetPaymentCardTypeByBinRangeClientRequestHandler", GetPaymentCardTypeByBinRangeClientRequestHandler);
        }
    };
});
System.register("PosApi/Extend/RequestHandlers/PeripheralsRequestHandlers", ["PosApi/Extend/RequestHandlers/RequestHandlers", "PosApi/Consume/Peripherals"], function (exports_36, context_36) {
    "use strict";
    var RequestHandlers_4, Peripherals_1, Peripherals_2, Peripherals_3, Peripherals_4, Peripherals_5, Peripherals_6, Peripherals_7, Peripherals_8, Peripherals_9, Peripherals_10, Peripherals_11, Peripherals_12, Peripherals_13, Peripherals_14, Peripherals_15, Peripherals_16, Peripherals_17, Peripherals_18, Peripherals_19, Peripherals_20, Peripherals_21, Peripherals_22, Peripherals_23, CardPaymentAuthorizePaymentRequestHandler, CardPaymentCapturePaymentRequestHandler, CardPaymentExecuteTaskRequestHandler, CardPaymentRefundPaymentRequestHandler, CardPaymentVoidPaymentRequestHandler, CardPaymentBeginTransactionRequestHandler, CardPaymentEndTransactionRequestHandler, CardPaymentEnquireGiftCardBalancePeripheralRequestHandler, PaymentTerminalActivateGiftCardPeripheralRequestHandler, PaymentTerminalAddBalanceToGiftCardPeripheralRequestHandler, PaymentTerminalAuthorizePaymentActivityRequestHandler, PaymentTerminalAuthorizePaymentRequestHandler, PaymentTerminalCapturePaymentRequestHandler, PaymentTerminalEnquireGiftCardBalancePeripheralRequestHandler, PaymentTerminalExecuteTaskRequestHandler, PaymentTerminalRefundPaymentActivityRequestHandler, PaymentTerminalRefundPaymentRequestHandler, PaymentTerminalUpdateLinesRequestHandler, PaymentTerminalVoidPaymentRequestHandler, PaymentTerminalBeginTransactionRequestHandler, PaymentTerminalCancelOperationRequestHandler, PaymentTerminalEndTransactionRequestHandler, CashDrawerOpenRequestHandler;
    var __moduleName = context_36 && context_36.id;
    return {
        setters: [
            function (RequestHandlers_4_1) {
                RequestHandlers_4 = RequestHandlers_4_1;
            },
            function (Peripherals_1_1) {
                Peripherals_1 = Peripherals_1_1;
                Peripherals_2 = Peripherals_1_1;
                Peripherals_3 = Peripherals_1_1;
                Peripherals_4 = Peripherals_1_1;
                Peripherals_5 = Peripherals_1_1;
                Peripherals_6 = Peripherals_1_1;
                Peripherals_7 = Peripherals_1_1;
                Peripherals_8 = Peripherals_1_1;
                Peripherals_9 = Peripherals_1_1;
                Peripherals_10 = Peripherals_1_1;
                Peripherals_11 = Peripherals_1_1;
                Peripherals_12 = Peripherals_1_1;
                Peripherals_13 = Peripherals_1_1;
                Peripherals_14 = Peripherals_1_1;
                Peripherals_15 = Peripherals_1_1;
                Peripherals_16 = Peripherals_1_1;
                Peripherals_17 = Peripherals_1_1;
                Peripherals_18 = Peripherals_1_1;
                Peripherals_19 = Peripherals_1_1;
                Peripherals_20 = Peripherals_1_1;
                Peripherals_21 = Peripherals_1_1;
                Peripherals_22 = Peripherals_1_1;
                Peripherals_23 = Peripherals_1_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all replacement CardPaymentAuthorizePaymentRequestHandler.
             * @remarks All replacement CardPaymentAuthorizePaymentRequestHandler should derive from this class.
             */
            CardPaymentAuthorizePaymentRequestHandler = /** @class */ (function (_super) {
                __extends(CardPaymentAuthorizePaymentRequestHandler, _super);
                function CardPaymentAuthorizePaymentRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<CardPaymentAuthorizePaymentResponse>} The supported abstract or concrete operation request type.
                 */
                CardPaymentAuthorizePaymentRequestHandler.prototype.supportedRequestType = function () {
                    return Peripherals_1.CardPaymentAuthorizePaymentRequest;
                };
                return CardPaymentAuthorizePaymentRequestHandler;
            }(RequestHandlers_4.ReplacementRequestHandlerBase));
            exports_36("CardPaymentAuthorizePaymentRequestHandler", CardPaymentAuthorizePaymentRequestHandler);
            /**
             * Represents the base class for all replacement CardPaymentCapturePaymentRequestHandler.
             * @remarks All replacement CardPaymentCapturePaymentRequestHandler should derive from this class.
             */
            CardPaymentCapturePaymentRequestHandler = /** @class */ (function (_super) {
                __extends(CardPaymentCapturePaymentRequestHandler, _super);
                function CardPaymentCapturePaymentRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<CardPaymentCapturePaymentResponse>} The supported abstract or concrete operation request type.
                 */
                CardPaymentCapturePaymentRequestHandler.prototype.supportedRequestType = function () {
                    return Peripherals_3.CardPaymentCapturePaymentRequest;
                };
                return CardPaymentCapturePaymentRequestHandler;
            }(RequestHandlers_4.ReplacementRequestHandlerBase));
            exports_36("CardPaymentCapturePaymentRequestHandler", CardPaymentCapturePaymentRequestHandler);
            /**
             * Represents the base class for all replacement CardPaymentExecuteTaskRequestHandler.
             * @remarks All replacement CardPaymentExecuteTaskRequestHandler should derive from this class.
             */
            CardPaymentExecuteTaskRequestHandler = /** @class */ (function (_super) {
                __extends(CardPaymentExecuteTaskRequestHandler, _super);
                function CardPaymentExecuteTaskRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<CardPaymentExecuteTaskResponse>} The supported abstract or concrete operation request type.
                 */
                CardPaymentExecuteTaskRequestHandler.prototype.supportedRequestType = function () {
                    return Peripherals_6.CardPaymentExecuteTaskRequest;
                };
                return CardPaymentExecuteTaskRequestHandler;
            }(RequestHandlers_4.ReplacementRequestHandlerBase));
            exports_36("CardPaymentExecuteTaskRequestHandler", CardPaymentExecuteTaskRequestHandler);
            /**
             * Represents the base class for all replacement CardPaymentRefundPaymentRequestHandler.
             * @remarks All replacement CardPaymentRefundPaymentRequestHandler should derive from this class.
             */
            CardPaymentRefundPaymentRequestHandler = /** @class */ (function (_super) {
                __extends(CardPaymentRefundPaymentRequestHandler, _super);
                function CardPaymentRefundPaymentRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<CardPaymentRefundPaymentResponse>} The supported abstract or concrete operation request type.
                 */
                CardPaymentRefundPaymentRequestHandler.prototype.supportedRequestType = function () {
                    return Peripherals_7.CardPaymentRefundPaymentRequest;
                };
                return CardPaymentRefundPaymentRequestHandler;
            }(RequestHandlers_4.ReplacementRequestHandlerBase));
            exports_36("CardPaymentRefundPaymentRequestHandler", CardPaymentRefundPaymentRequestHandler);
            /**
             * Represents the base class for all replacement CardPaymentVoidPaymentRequestHandler.
             * @remarks All replacement CardPaymentVoidPaymentRequestHandler should derive from this class.
             */
            CardPaymentVoidPaymentRequestHandler = /** @class */ (function (_super) {
                __extends(CardPaymentVoidPaymentRequestHandler, _super);
                function CardPaymentVoidPaymentRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<CardPaymentVoidPaymentResponse>} The supported abstract or concrete operation request type.
                 */
                CardPaymentVoidPaymentRequestHandler.prototype.supportedRequestType = function () {
                    return Peripherals_8.CardPaymentVoidPaymentRequest;
                };
                return CardPaymentVoidPaymentRequestHandler;
            }(RequestHandlers_4.ReplacementRequestHandlerBase));
            exports_36("CardPaymentVoidPaymentRequestHandler", CardPaymentVoidPaymentRequestHandler);
            /**
             * Represents the base class for all replacement CardPaymentBeginTransactionRequestHandler.
             * @remarks All replacement CardPaymentBeginTransactionRequestHandler should derive from this class.
             */
            CardPaymentBeginTransactionRequestHandler = /** @class */ (function (_super) {
                __extends(CardPaymentBeginTransactionRequestHandler, _super);
                function CardPaymentBeginTransactionRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<CardPaymentBeginTransactionResponse>} The supported abstract or concrete operation request type.
                 */
                CardPaymentBeginTransactionRequestHandler.prototype.supportedRequestType = function () {
                    return Peripherals_2.CardPaymentBeginTransactionRequest;
                };
                return CardPaymentBeginTransactionRequestHandler;
            }(RequestHandlers_4.ReplacementRequestHandlerBase));
            exports_36("CardPaymentBeginTransactionRequestHandler", CardPaymentBeginTransactionRequestHandler);
            /**
             * Represents the base class for all replacement CardPaymentEndTransactionRequestHandler.
             * @remarks All replacement CardPaymentEndTransactionRequestHandler should derive from this class.
             */
            CardPaymentEndTransactionRequestHandler = /** @class */ (function (_super) {
                __extends(CardPaymentEndTransactionRequestHandler, _super);
                function CardPaymentEndTransactionRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<CardPaymentEndTransactionResponse>} The supported abstract or concrete operation request type.
                 */
                CardPaymentEndTransactionRequestHandler.prototype.supportedRequestType = function () {
                    return Peripherals_4.CardPaymentEndTransactionRequest;
                };
                return CardPaymentEndTransactionRequestHandler;
            }(RequestHandlers_4.ReplacementRequestHandlerBase));
            exports_36("CardPaymentEndTransactionRequestHandler", CardPaymentEndTransactionRequestHandler);
            /**
             * Represents the base class for all replacement CardPaymentEnquireGiftCardBalancePeripheralRequestHandler.
             * @remarks All replacement CardPaymentEnquireGiftCardBalancePeripheralRequestHandler should derive from this class.
             */
            CardPaymentEnquireGiftCardBalancePeripheralRequestHandler = /** @class */ (function (_super) {
                __extends(CardPaymentEnquireGiftCardBalancePeripheralRequestHandler, _super);
                function CardPaymentEnquireGiftCardBalancePeripheralRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<CardPaymentEnquireGiftCardBalancePeripheralResponse>} The supported abstract or concrete operation request type.
                 */
                CardPaymentEnquireGiftCardBalancePeripheralRequestHandler.prototype.supportedRequestType = function () {
                    return Peripherals_5.CardPaymentEnquireGiftCardBalancePeripheralRequest;
                };
                return CardPaymentEnquireGiftCardBalancePeripheralRequestHandler;
            }(RequestHandlers_4.ReplacementRequestHandlerBase));
            exports_36("CardPaymentEnquireGiftCardBalancePeripheralRequestHandler", CardPaymentEnquireGiftCardBalancePeripheralRequestHandler);
            /**
             * Represents the base class for all replacement PaymentTerminalActivateGiftCardPeripheralRequestHandler.
             * @remarks All replacement PaymentTerminalActivateGiftCardPeripheralRequestHandler should derive from this class.
             */
            PaymentTerminalActivateGiftCardPeripheralRequestHandler = /** @class */ (function (_super) {
                __extends(PaymentTerminalActivateGiftCardPeripheralRequestHandler, _super);
                function PaymentTerminalActivateGiftCardPeripheralRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<PaymentTerminalActivateGiftCardPeripheralResponse>} The supported abstract or concrete operation request type.
                 */
                PaymentTerminalActivateGiftCardPeripheralRequestHandler.prototype.supportedRequestType = function () {
                    return Peripherals_10.PaymentTerminalActivateGiftCardPeripheralRequest;
                };
                return PaymentTerminalActivateGiftCardPeripheralRequestHandler;
            }(RequestHandlers_4.ReplacementRequestHandlerBase));
            exports_36("PaymentTerminalActivateGiftCardPeripheralRequestHandler", PaymentTerminalActivateGiftCardPeripheralRequestHandler);
            /**
             * Represents the base class for all replacement PaymentTerminalAddBalanceToGiftCardPeripheralRequestHandler.
             * @remarks All replacement PaymentTerminalAddBalanceToGiftCardPeripheralRequestHandler should derive from this class.
             */
            PaymentTerminalAddBalanceToGiftCardPeripheralRequestHandler = /** @class */ (function (_super) {
                __extends(PaymentTerminalAddBalanceToGiftCardPeripheralRequestHandler, _super);
                function PaymentTerminalAddBalanceToGiftCardPeripheralRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<PaymentTerminalAddBalanceToGiftCardPeripheralResponse>} The supported abstract or concrete operation request type.
                 */
                PaymentTerminalAddBalanceToGiftCardPeripheralRequestHandler.prototype.supportedRequestType = function () {
                    return Peripherals_11.PaymentTerminalAddBalanceToGiftCardPeripheralRequest;
                };
                return PaymentTerminalAddBalanceToGiftCardPeripheralRequestHandler;
            }(RequestHandlers_4.ReplacementRequestHandlerBase));
            exports_36("PaymentTerminalAddBalanceToGiftCardPeripheralRequestHandler", PaymentTerminalAddBalanceToGiftCardPeripheralRequestHandler);
            /**
             * Represents the base class for all replacement PaymentTerminalAuthorizePaymentActivityRequestHandler.
             * @remarks All replacement PaymentTerminalAuthorizePaymentActivityRequestHandler should derive from this class.
             */
            PaymentTerminalAuthorizePaymentActivityRequestHandler = /** @class */ (function (_super) {
                __extends(PaymentTerminalAuthorizePaymentActivityRequestHandler, _super);
                function PaymentTerminalAuthorizePaymentActivityRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<PaymentTerminalAuthorizePaymentActivityResponse>} The supported abstract or concrete operation request type.
                 */
                PaymentTerminalAuthorizePaymentActivityRequestHandler.prototype.supportedRequestType = function () {
                    return Peripherals_12.PaymentTerminalAuthorizePaymentActivityRequest;
                };
                return PaymentTerminalAuthorizePaymentActivityRequestHandler;
            }(RequestHandlers_4.ReplacementRequestHandlerBase));
            exports_36("PaymentTerminalAuthorizePaymentActivityRequestHandler", PaymentTerminalAuthorizePaymentActivityRequestHandler);
            /**
             * Represents the base class for all replacement PaymentTerminalAuthorizePaymentRequestHandler.
             * @remarks All replacement PaymentTerminalAuthorizePaymentRequestHandler should derive from this class.
             */
            PaymentTerminalAuthorizePaymentRequestHandler = /** @class */ (function (_super) {
                __extends(PaymentTerminalAuthorizePaymentRequestHandler, _super);
                function PaymentTerminalAuthorizePaymentRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<PaymentTerminalAuthorizePaymentResponse>} The supported abstract or concrete operation request type.
                 */
                PaymentTerminalAuthorizePaymentRequestHandler.prototype.supportedRequestType = function () {
                    return Peripherals_15.PaymentTerminalAuthorizePaymentRequest;
                };
                return PaymentTerminalAuthorizePaymentRequestHandler;
            }(RequestHandlers_4.ReplacementRequestHandlerBase));
            exports_36("PaymentTerminalAuthorizePaymentRequestHandler", PaymentTerminalAuthorizePaymentRequestHandler);
            /**
             * Represents the base class for all replacement PaymentTerminalCapturePaymentRequestHandler.
             * @remarks All replacement PaymentTerminalCapturePaymentRequestHandler should derive from this class.
             */
            PaymentTerminalCapturePaymentRequestHandler = /** @class */ (function (_super) {
                __extends(PaymentTerminalCapturePaymentRequestHandler, _super);
                function PaymentTerminalCapturePaymentRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<PaymentTerminalCapturePaymentResponse>} The supported abstract or concrete operation request type.
                 */
                PaymentTerminalCapturePaymentRequestHandler.prototype.supportedRequestType = function () {
                    return Peripherals_16.PaymentTerminalCapturePaymentRequest;
                };
                return PaymentTerminalCapturePaymentRequestHandler;
            }(RequestHandlers_4.ReplacementRequestHandlerBase));
            exports_36("PaymentTerminalCapturePaymentRequestHandler", PaymentTerminalCapturePaymentRequestHandler);
            /**
             * Represents the base class for all replacement PaymentTerminalEnquireGiftCardBalancePeripheralRequestHandler.
             * @remarks All replacement PaymentTerminalEnquireGiftCardBalancePeripheralRequestHandler should derive from this class.
             */
            PaymentTerminalEnquireGiftCardBalancePeripheralRequestHandler = /** @class */ (function (_super) {
                __extends(PaymentTerminalEnquireGiftCardBalancePeripheralRequestHandler, _super);
                function PaymentTerminalEnquireGiftCardBalancePeripheralRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<PaymentTerminalEnquireGiftCardBalancePeripheralResponse>} The supported abstract or concrete operation request type.
                 */
                PaymentTerminalEnquireGiftCardBalancePeripheralRequestHandler.prototype.supportedRequestType = function () {
                    return Peripherals_18.PaymentTerminalEnquireGiftCardBalancePeripheralRequest;
                };
                return PaymentTerminalEnquireGiftCardBalancePeripheralRequestHandler;
            }(RequestHandlers_4.ReplacementRequestHandlerBase));
            exports_36("PaymentTerminalEnquireGiftCardBalancePeripheralRequestHandler", PaymentTerminalEnquireGiftCardBalancePeripheralRequestHandler);
            /**
             * Represents the base class for all replacement PaymentTerminalExecuteTaskRequestHandler.
             * @remarks All replacement PaymentTerminalExecuteTaskRequestHandler should derive from this class.
             */
            PaymentTerminalExecuteTaskRequestHandler = /** @class */ (function (_super) {
                __extends(PaymentTerminalExecuteTaskRequestHandler, _super);
                function PaymentTerminalExecuteTaskRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<PaymentTerminalExecuteTaskResponse>} The supported abstract or concrete operation request type.
                 */
                PaymentTerminalExecuteTaskRequestHandler.prototype.supportedRequestType = function () {
                    return Peripherals_19.PaymentTerminalExecuteTaskRequest;
                };
                return PaymentTerminalExecuteTaskRequestHandler;
            }(RequestHandlers_4.ReplacementRequestHandlerBase));
            exports_36("PaymentTerminalExecuteTaskRequestHandler", PaymentTerminalExecuteTaskRequestHandler);
            /**
             * Represents the base class for all replacement PaymentTerminalRefundPaymentActivityRequestHandler.
             * @remarks All replacement PaymentTerminalRefundPaymentActivityRequestHandler should derive from this class.
             */
            PaymentTerminalRefundPaymentActivityRequestHandler = /** @class */ (function (_super) {
                __extends(PaymentTerminalRefundPaymentActivityRequestHandler, _super);
                function PaymentTerminalRefundPaymentActivityRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<PaymentTerminalRefundPaymentActivityResponse>} The supported abstract or concrete operation request type.
                 */
                PaymentTerminalRefundPaymentActivityRequestHandler.prototype.supportedRequestType = function () {
                    return Peripherals_20.PaymentTerminalRefundPaymentActivityRequest;
                };
                return PaymentTerminalRefundPaymentActivityRequestHandler;
            }(RequestHandlers_4.ReplacementRequestHandlerBase));
            exports_36("PaymentTerminalRefundPaymentActivityRequestHandler", PaymentTerminalRefundPaymentActivityRequestHandler);
            /**
             * Represents the base class for all replacement PaymentTerminalRefundPaymentRequestHandler.
             * @remarks All replacement PaymentTerminalRefundPaymentRequestHandler should derive from this class.
             */
            PaymentTerminalRefundPaymentRequestHandler = /** @class */ (function (_super) {
                __extends(PaymentTerminalRefundPaymentRequestHandler, _super);
                function PaymentTerminalRefundPaymentRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<PaymentTerminalRefundPaymentResponse>} The supported abstract or concrete operation request type.
                 */
                PaymentTerminalRefundPaymentRequestHandler.prototype.supportedRequestType = function () {
                    return Peripherals_21.PaymentTerminalRefundPaymentRequest;
                };
                return PaymentTerminalRefundPaymentRequestHandler;
            }(RequestHandlers_4.ReplacementRequestHandlerBase));
            exports_36("PaymentTerminalRefundPaymentRequestHandler", PaymentTerminalRefundPaymentRequestHandler);
            /**
             * Represents the base class for all replacement PaymentTerminalUpdateLinesRequestHandler.
             * @remarks All replacement PaymentTerminalUpdateLinesRequestHandler should derive from this class.
             */
            PaymentTerminalUpdateLinesRequestHandler = /** @class */ (function (_super) {
                __extends(PaymentTerminalUpdateLinesRequestHandler, _super);
                function PaymentTerminalUpdateLinesRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<PaymentTerminalUpdateLinesResponse>} The supported abstract or concrete operation request type.
                 */
                PaymentTerminalUpdateLinesRequestHandler.prototype.supportedRequestType = function () {
                    return Peripherals_22.PaymentTerminalUpdateLinesRequest;
                };
                return PaymentTerminalUpdateLinesRequestHandler;
            }(RequestHandlers_4.ReplacementRequestHandlerBase));
            exports_36("PaymentTerminalUpdateLinesRequestHandler", PaymentTerminalUpdateLinesRequestHandler);
            /**
             * Represents the base class for all replacement PaymentTerminalVoidPaymentRequestHandler.
             * @remarks All replacement PaymentTerminalVoidPaymentRequestHandler should derive from this class.
             */
            PaymentTerminalVoidPaymentRequestHandler = /** @class */ (function (_super) {
                __extends(PaymentTerminalVoidPaymentRequestHandler, _super);
                function PaymentTerminalVoidPaymentRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<PaymentTerminalVoidPaymentResponse>} The supported abstract or concrete operation request type.
                 */
                PaymentTerminalVoidPaymentRequestHandler.prototype.supportedRequestType = function () {
                    return Peripherals_23.PaymentTerminalVoidPaymentRequest;
                };
                return PaymentTerminalVoidPaymentRequestHandler;
            }(RequestHandlers_4.ReplacementRequestHandlerBase));
            exports_36("PaymentTerminalVoidPaymentRequestHandler", PaymentTerminalVoidPaymentRequestHandler);
            /**
             * Represents the base class for all replacement PaymentTerminalBeginTransactionRequestHandler.
             * @remarks All replacement PaymentTerminalBeginTransactionRequestHandler should derive from this class.
             */
            PaymentTerminalBeginTransactionRequestHandler = /** @class */ (function (_super) {
                __extends(PaymentTerminalBeginTransactionRequestHandler, _super);
                function PaymentTerminalBeginTransactionRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<PaymentTerminalBeginTransactionResponse>} The supported abstract or concrete operation request type.
                 */
                PaymentTerminalBeginTransactionRequestHandler.prototype.supportedRequestType = function () {
                    return Peripherals_13.PaymentTerminalBeginTransactionRequest;
                };
                return PaymentTerminalBeginTransactionRequestHandler;
            }(RequestHandlers_4.ReplacementRequestHandlerBase));
            exports_36("PaymentTerminalBeginTransactionRequestHandler", PaymentTerminalBeginTransactionRequestHandler);
            /**
             * Represents the base class for all replacement PaymentTerminalCancelOperationRequestHandler.
             * @remarks All replacement PaymentTerminalCancelOperationRequestHandler should derive from this class.
             */
            PaymentTerminalCancelOperationRequestHandler = /** @class */ (function (_super) {
                __extends(PaymentTerminalCancelOperationRequestHandler, _super);
                function PaymentTerminalCancelOperationRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<PaymentTerminalCancelOperationResponse>} The supported abstract or concrete operation request type.
                 */
                PaymentTerminalCancelOperationRequestHandler.prototype.supportedRequestType = function () {
                    return Peripherals_14.PaymentTerminalCancelOperationRequest;
                };
                return PaymentTerminalCancelOperationRequestHandler;
            }(RequestHandlers_4.ReplacementRequestHandlerBase));
            exports_36("PaymentTerminalCancelOperationRequestHandler", PaymentTerminalCancelOperationRequestHandler);
            /**
             * Represents the base class for all replacement PaymentTerminalEndRequestHandler.
             * @remarks All replacement PaymentTerminalEndRequestHandler should derive from this class.
             */
            PaymentTerminalEndTransactionRequestHandler = /** @class */ (function (_super) {
                __extends(PaymentTerminalEndTransactionRequestHandler, _super);
                function PaymentTerminalEndTransactionRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<PaymentTerminalEndTransactionRequestHandler>} The supported abstract or concrete operation request type.
                 */
                PaymentTerminalEndTransactionRequestHandler.prototype.supportedRequestType = function () {
                    return Peripherals_17.PaymentTerminalEndTransactionRequest;
                };
                return PaymentTerminalEndTransactionRequestHandler;
            }(RequestHandlers_4.ReplacementRequestHandlerBase));
            exports_36("PaymentTerminalEndTransactionRequestHandler", PaymentTerminalEndTransactionRequestHandler);
            /**
             * Represents the base class for all replacement CashDrawerOpenRequestHandler.
             * @remarks All replacement CashDrawerOpenRequestHandler should derive from this class.
             */
            CashDrawerOpenRequestHandler = /** @class */ (function (_super) {
                __extends(CashDrawerOpenRequestHandler, _super);
                function CashDrawerOpenRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<OpenCashDrawerOperationResponse>} The supported abstract or concrete operation request type.
                 */
                CashDrawerOpenRequestHandler.prototype.supportedRequestType = function () {
                    return Peripherals_9.CashDrawerOpenRequest;
                };
                return CashDrawerOpenRequestHandler;
            }(RequestHandlers_4.ReplacementRequestHandlerBase));
            exports_36("CashDrawerOpenRequestHandler", CashDrawerOpenRequestHandler);
        }
    };
});
System.register("PosApi/Extend/RequestHandlers/ProductsRequestHandlers", ["PosApi/Extend/RequestHandlers/RequestHandlers", "PosApi/Consume/Products"], function (exports_37, context_37) {
    "use strict";
    var RequestHandlers_5, Products_1, GetSerialNumberClientRequestHandler, GetRefinerValuesByTextServiceRequestHandler;
    var __moduleName = context_37 && context_37.id;
    return {
        setters: [
            function (RequestHandlers_5_1) {
                RequestHandlers_5 = RequestHandlers_5_1;
            },
            function (Products_1_1) {
                Products_1 = Products_1_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all replacement GetSerialNumberClientRequestHandler.
             * @remarks All replacement GetSerialNumberClientRequestHandler should derive from this class.
             */
            GetSerialNumberClientRequestHandler = /** @class */ (function (_super) {
                __extends(GetSerialNumberClientRequestHandler, _super);
                function GetSerialNumberClientRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<GetSerialNumberClientResponse>} The supported abstract or concrete operation request type.
                 */
                GetSerialNumberClientRequestHandler.prototype.supportedRequestType = function () {
                    return Products_1.GetSerialNumberClientRequest;
                };
                return GetSerialNumberClientRequestHandler;
            }(RequestHandlers_5.ReplacementRequestHandlerBase));
            exports_37("GetSerialNumberClientRequestHandler", GetSerialNumberClientRequestHandler);
            /**
             * Represents the base class for all replacement for GetRefinerValuesByTextServiceRequestHandler.
             * @remarks All replacement for GetRefinerValuesByTextServiceRequestHandler should derive from this class.
             */
            GetRefinerValuesByTextServiceRequestHandler = /** @class */ (function (_super) {
                __extends(GetRefinerValuesByTextServiceRequestHandler, _super);
                function GetRefinerValuesByTextServiceRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<GetRefinerValuesByTextServiceResponse>} The supported abstract or concrete operation request type.
                 */
                GetRefinerValuesByTextServiceRequestHandler.prototype.supportedRequestType = function () {
                    return Products_1.GetRefinerValuesByTextServiceRequest;
                };
                return GetRefinerValuesByTextServiceRequestHandler;
            }(RequestHandlers_5.ReplacementRequestHandlerBase));
            exports_37("GetRefinerValuesByTextServiceRequestHandler", GetRefinerValuesByTextServiceRequestHandler);
        }
    };
});
System.register("PosApi/Extend/RequestHandlers/SalesOrdersRequestHandlers", ["PosApi/Extend/RequestHandlers/RequestHandlers", "PosApi/Consume/SalesOrders"], function (exports_38, context_38) {
    "use strict";
    var RequestHandlers_6, SalesOrders_1, GetGiftReceiptsClientRequestHandler, SelectCustomerOrderTypeClientRequestHandler;
    var __moduleName = context_38 && context_38.id;
    return {
        setters: [
            function (RequestHandlers_6_1) {
                RequestHandlers_6 = RequestHandlers_6_1;
            },
            function (SalesOrders_1_1) {
                SalesOrders_1 = SalesOrders_1_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all replacement GetGiftReceiptsClientRequestHandler.
             * @remarks All replacement GetGiftReceiptsClientRequestHandler should derive from this class.
             */
            GetGiftReceiptsClientRequestHandler = /** @class */ (function (_super) {
                __extends(GetGiftReceiptsClientRequestHandler, _super);
                function GetGiftReceiptsClientRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<GetGiftReceiptsClientResponse>} The supported abstract or concrete operation request type.
                 */
                GetGiftReceiptsClientRequestHandler.prototype.supportedRequestType = function () {
                    return SalesOrders_1.GetGiftReceiptsClientRequest;
                };
                return GetGiftReceiptsClientRequestHandler;
            }(RequestHandlers_6.ReplacementRequestHandlerBase));
            exports_38("GetGiftReceiptsClientRequestHandler", GetGiftReceiptsClientRequestHandler);
            /**
             * Represents the base class for all replacement for SelectCustomerOrderTypeClientRequestHandler.
             * @remarks All replacement for SelectCustomerOrderTypeClientRequestHandler should derive from this class.
             */
            SelectCustomerOrderTypeClientRequestHandler = /** @class */ (function (_super) {
                __extends(SelectCustomerOrderTypeClientRequestHandler, _super);
                function SelectCustomerOrderTypeClientRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<SelectCustomerOrderTypeClientResponse>} The supported abstract or concrete operation request type.
                 */
                SelectCustomerOrderTypeClientRequestHandler.prototype.supportedRequestType = function () {
                    return SalesOrders_1.SelectCustomerOrderTypeClientRequest;
                };
                return SelectCustomerOrderTypeClientRequestHandler;
            }(RequestHandlers_6.ReplacementRequestHandlerBase));
            exports_38("SelectCustomerOrderTypeClientRequestHandler", SelectCustomerOrderTypeClientRequestHandler);
        }
    };
});
System.register("PosApi/Extend/RequestHandlers/ScanResultsRequestHandlers", ["PosApi/Extend/RequestHandlers/RequestHandlers", "PosApi/Consume/ScanResults"], function (exports_39, context_39) {
    "use strict";
    var RequestHandlers_7, ScanResults_1, GetScanResultClientRequestHandler;
    var __moduleName = context_39 && context_39.id;
    return {
        setters: [
            function (RequestHandlers_7_1) {
                RequestHandlers_7 = RequestHandlers_7_1;
            },
            function (ScanResults_1_1) {
                ScanResults_1 = ScanResults_1_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all replacement GetScanResultClientRequestHandler.
             * @remarks All replacement GetScanResultClientRequestHandler should derive from this class.
             */
            GetScanResultClientRequestHandler = /** @class */ (function (_super) {
                __extends(GetScanResultClientRequestHandler, _super);
                function GetScanResultClientRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<GetScanResultClientResponse>} The supported abstract or concrete operation request type.
                 */
                GetScanResultClientRequestHandler.prototype.supportedRequestType = function () {
                    return ScanResults_1.GetScanResultClientRequest;
                };
                return GetScanResultClientRequestHandler;
            }(RequestHandlers_7.ReplacementRequestHandlerBase));
            exports_39("GetScanResultClientRequestHandler", GetScanResultClientRequestHandler);
        }
    };
});
System.register("PosApi/Extend/RequestHandlers/StoreFulfillmentRequestHandlers", ["PosApi/Extend/RequestHandlers/RequestHandlers", "PosApi/Consume/SalesOrders"], function (exports_40, context_40) {
    "use strict";
    var RequestHandlers_8, SalesOrders_2, PrintPackingSlipClientRequestHandler;
    var __moduleName = context_40 && context_40.id;
    return {
        setters: [
            function (RequestHandlers_8_1) {
                RequestHandlers_8 = RequestHandlers_8_1;
            },
            function (SalesOrders_2_1) {
                SalesOrders_2 = SalesOrders_2_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all replacement PrintPackingSlipClientRequestHandler.
             * @remarks All replacement PrintPackingSlipClientRequestHandler should derive from this class.
             */
            PrintPackingSlipClientRequestHandler = /** @class */ (function (_super) {
                __extends(PrintPackingSlipClientRequestHandler, _super);
                function PrintPackingSlipClientRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<PrintPackingSlipClientResponse>} The supported abstract or concrete operation request type.
                 */
                PrintPackingSlipClientRequestHandler.prototype.supportedRequestType = function () {
                    return SalesOrders_2.PrintPackingSlipClientRequest;
                };
                return PrintPackingSlipClientRequestHandler;
            }(RequestHandlers_8.ReplacementRequestHandlerBase));
            exports_40("PrintPackingSlipClientRequestHandler", PrintPackingSlipClientRequestHandler);
        }
    };
});
System.register("PosApi/Extend/RequestHandlers/StoreOperationsRequestHandlers", ["PosApi/Extend/RequestHandlers/RequestHandlers", "PosApi/Consume/StoreOperations"], function (exports_41, context_41) {
    "use strict";
    var RequestHandlers_9, StoreOperations_1, CreateTenderRemovalTransactionClientRequestHandler, CreateFloatEntryTransactionClientRequestHandler, CreateStartingAmountTransactionClientRequestHandler, LoyaltyCardPointsBalanceOperationRequestHandler, SelectZipCodeInfoClientRequestHandler;
    var __moduleName = context_41 && context_41.id;
    return {
        setters: [
            function (RequestHandlers_9_1) {
                RequestHandlers_9 = RequestHandlers_9_1;
            },
            function (StoreOperations_1_1) {
                StoreOperations_1 = StoreOperations_1_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all replacement CreateTenderRemovalTransactionClientRequestHandler.
             * @remarks All replacement CreateTenderRemovalTransactionClientRequestHandler should derive from this class.
             */
            CreateTenderRemovalTransactionClientRequestHandler = /** @class */ (function (_super) {
                __extends(CreateTenderRemovalTransactionClientRequestHandler, _super);
                function CreateTenderRemovalTransactionClientRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<CreateTenderRemovalTransactionClientResponse>} The supported abstract or concrete operation request type.
                 */
                CreateTenderRemovalTransactionClientRequestHandler.prototype.supportedRequestType = function () {
                    return StoreOperations_1.CreateTenderRemovalTransactionClientRequest;
                };
                return CreateTenderRemovalTransactionClientRequestHandler;
            }(RequestHandlers_9.ReplacementRequestHandlerBase));
            exports_41("CreateTenderRemovalTransactionClientRequestHandler", CreateTenderRemovalTransactionClientRequestHandler);
            /**
             * Represents the base class for all replacement CreateFloatEntryTransactionClientRequestHandler.
             * @remarks All replacement CreateFloatEntryTransactionClientRequestHandler should derive from this class.
             */
            CreateFloatEntryTransactionClientRequestHandler = /** @class */ (function (_super) {
                __extends(CreateFloatEntryTransactionClientRequestHandler, _super);
                function CreateFloatEntryTransactionClientRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<CreateTenderRemovalTransactionClientResponse>} The supported abstract or concrete operation request type.
                 */
                CreateFloatEntryTransactionClientRequestHandler.prototype.supportedRequestType = function () {
                    return StoreOperations_1.CreateFloatEntryTransactionClientRequest;
                };
                return CreateFloatEntryTransactionClientRequestHandler;
            }(RequestHandlers_9.ReplacementRequestHandlerBase));
            exports_41("CreateFloatEntryTransactionClientRequestHandler", CreateFloatEntryTransactionClientRequestHandler);
            /**
             * Represents the base class for all replacement CreateStartingAmountTransactionClientRequestHandler.
             * @remarks All replacement CreateStartingAmountTransactionClientRequestHandler should derive from this class.
             */
            CreateStartingAmountTransactionClientRequestHandler = /** @class */ (function (_super) {
                __extends(CreateStartingAmountTransactionClientRequestHandler, _super);
                function CreateStartingAmountTransactionClientRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<CreateStartingAmountTransactionClientResponse>} The supported abstract or concrete operation request type.
                 */
                CreateStartingAmountTransactionClientRequestHandler.prototype.supportedRequestType = function () {
                    return StoreOperations_1.CreateStartingAmountTransactionClientRequest;
                };
                return CreateStartingAmountTransactionClientRequestHandler;
            }(RequestHandlers_9.ReplacementRequestHandlerBase));
            exports_41("CreateStartingAmountTransactionClientRequestHandler", CreateStartingAmountTransactionClientRequestHandler);
            /**
             * Represents the base class for all replacement LoyaltyCardPointsBalanceOperationRequestHandler.
             * @remarks All replacement LoyaltyCardPointsBalanceOperationRequestHandler should derive from this class.
             */
            LoyaltyCardPointsBalanceOperationRequestHandler = /** @class */ (function (_super) {
                __extends(LoyaltyCardPointsBalanceOperationRequestHandler, _super);
                function LoyaltyCardPointsBalanceOperationRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<LoyaltyCardPointsBalanceOperationResponse>} The supported abstract or concrete operation request type.
                 */
                LoyaltyCardPointsBalanceOperationRequestHandler.prototype.supportedRequestType = function () {
                    return StoreOperations_1.LoyaltyCardPointsBalanceOperationRequest;
                };
                return LoyaltyCardPointsBalanceOperationRequestHandler;
            }(RequestHandlers_9.ReplacementRequestHandlerBase));
            exports_41("LoyaltyCardPointsBalanceOperationRequestHandler", LoyaltyCardPointsBalanceOperationRequestHandler);
            /**
             * Represents the base class for all replacement SelectZipCodeInfoClientRequestHandler.
             * @remarks All replacement SelectZipCodeInfoClientRequestHandler should derive from this class.
             */
            SelectZipCodeInfoClientRequestHandler = /** @class */ (function (_super) {
                __extends(SelectZipCodeInfoClientRequestHandler, _super);
                function SelectZipCodeInfoClientRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<SelectZipCodeInfoClientResponse>} The supported abstract or concrete operation request type.
                 */
                SelectZipCodeInfoClientRequestHandler.prototype.supportedRequestType = function () {
                    return StoreOperations_1.SelectZipCodeInfoClientRequest;
                };
                return SelectZipCodeInfoClientRequestHandler;
            }(RequestHandlers_9.ReplacementRequestHandlerBase));
            exports_41("SelectZipCodeInfoClientRequestHandler", SelectZipCodeInfoClientRequestHandler);
        }
    };
});
System.register("PosApi/Extend/RequestHandlers/TenderCountingRequestHandlers", ["PosApi/Extend/RequestHandlers/RequestHandlers", "PosApi/Consume/StoreOperations"], function (exports_42, context_42) {
    "use strict";
    var RequestHandlers_10, StoreOperations_2, StoreOperations_3, StoreOperations_4, StoreOperations_5, CreateSafeDropTransactionClientRequestHandler, GetTenderDetailsClientRequestHandler, CreateBankDropTransactionClientRequestHandler, CreateTenderDeclarationTransactionClientRequestHandler;
    var __moduleName = context_42 && context_42.id;
    return {
        setters: [
            function (RequestHandlers_10_1) {
                RequestHandlers_10 = RequestHandlers_10_1;
            },
            function (StoreOperations_2_1) {
                StoreOperations_2 = StoreOperations_2_1;
                StoreOperations_3 = StoreOperations_2_1;
                StoreOperations_4 = StoreOperations_2_1;
                StoreOperations_5 = StoreOperations_2_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all replacement CreateSafeDropTransactionClientRequestHandler.
             * @remarks All replacement CreateSafeDropTransactionClientRequestHandler should derive from this class.
             */
            CreateSafeDropTransactionClientRequestHandler = /** @class */ (function (_super) {
                __extends(CreateSafeDropTransactionClientRequestHandler, _super);
                function CreateSafeDropTransactionClientRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<CreateSafeDropTransactionClientResponse>} The supported abstract or concrete operation request type.
                 */
                CreateSafeDropTransactionClientRequestHandler.prototype.supportedRequestType = function () {
                    return StoreOperations_2.CreateSafeDropTransactionClientRequest;
                };
                return CreateSafeDropTransactionClientRequestHandler;
            }(RequestHandlers_10.ReplacementRequestHandlerBase));
            exports_42("CreateSafeDropTransactionClientRequestHandler", CreateSafeDropTransactionClientRequestHandler);
            /**
             * Represents the base class for all replacement GetTenderDetailsClientRequestHandler.
             * @remarks All replacement GetTenderDetailsClientRequestHandler should derive from this class.
             */
            GetTenderDetailsClientRequestHandler = /** @class */ (function (_super) {
                __extends(GetTenderDetailsClientRequestHandler, _super);
                function GetTenderDetailsClientRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<GetTenderDetailsClientResponse>} The supported abstract or concrete operation request type.
                 */
                GetTenderDetailsClientRequestHandler.prototype.supportedRequestType = function () {
                    return StoreOperations_3.GetTenderDetailsClientRequest;
                };
                return GetTenderDetailsClientRequestHandler;
            }(RequestHandlers_10.ReplacementRequestHandlerBase));
            exports_42("GetTenderDetailsClientRequestHandler", GetTenderDetailsClientRequestHandler);
            /**
             * Represents the base class for all replacement CreateBankDropTransactionClientRequestHandler.
             * @remarks All replacement CreateBankDropTransactionClientRequestHandler should derive from this class.
             */
            CreateBankDropTransactionClientRequestHandler = /** @class */ (function (_super) {
                __extends(CreateBankDropTransactionClientRequestHandler, _super);
                function CreateBankDropTransactionClientRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<CreateBankDropTransactionClientResponse>} The supported abstract or concrete operation request type.
                 */
                CreateBankDropTransactionClientRequestHandler.prototype.supportedRequestType = function () {
                    return StoreOperations_4.CreateBankDropTransactionClientRequest;
                };
                return CreateBankDropTransactionClientRequestHandler;
            }(RequestHandlers_10.ReplacementRequestHandlerBase));
            exports_42("CreateBankDropTransactionClientRequestHandler", CreateBankDropTransactionClientRequestHandler);
            /**
             * Represents the base class for all replacement CreateTenderDeclarationTransactionClientRequestHandler.
             * @remarks All replacement CreateTenderDeclarationTransactionClientRequestHandler should derive from this class.
             */
            CreateTenderDeclarationTransactionClientRequestHandler = /** @class */ (function (_super) {
                __extends(CreateTenderDeclarationTransactionClientRequestHandler, _super);
                function CreateTenderDeclarationTransactionClientRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the supported request type.
                 * @return {AbstractRequestType<CreateTenderDeclarationTransactionClientResponse>} The supported abstract or concrete operation request type.
                 */
                CreateTenderDeclarationTransactionClientRequestHandler.prototype.supportedRequestType = function () {
                    return StoreOperations_5.CreateTenderDeclarationTransactionClientRequest;
                };
                return CreateTenderDeclarationTransactionClientRequestHandler;
            }(RequestHandlers_10.ReplacementRequestHandlerBase));
            exports_42("CreateTenderDeclarationTransactionClientRequestHandler", CreateTenderDeclarationTransactionClientRequestHandler);
        }
    };
});
System.register("PosApi/Extend/Triggers/Triggers", [], function (exports_43, context_43) {
    "use strict";
    var CancelableTriggerType, NonCancelableTriggerType, TriggerBase, NonCancelableTriggerBase, CancelableTriggerBase;
    var __moduleName = context_43 && context_43.id;
    return {
        setters: [],
        execute: function () {
            exports_43("CancelableTriggerType", CancelableTriggerType = Commerce.Triggers.CancelableTriggerType);
            exports_43("NonCancelableTriggerType", NonCancelableTriggerType = Commerce.Triggers.NonCancelableTriggerType);
            /**
             * Represents a POS Trigger.
             */
            TriggerBase = /** @class */ (function (_super) {
                __extends(TriggerBase, _super);
                function TriggerBase(context) {
                    var _this = _super.call(this) || this;
                    _this.context = context;
                    return _this;
                }
                return TriggerBase;
            }(Commerce.Triggers.Trigger));
            exports_43("TriggerBase", TriggerBase);
            /**
             * Represents a Non-cancelable POS Trigger.
             */
            NonCancelableTriggerBase = /** @class */ (function (_super) {
                __extends(NonCancelableTriggerBase, _super);
                function NonCancelableTriggerBase() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return NonCancelableTriggerBase;
            }(TriggerBase));
            exports_43("NonCancelableTriggerBase", NonCancelableTriggerBase);
            /**
             * Represents a Cancelable POS Trigger.
             */
            CancelableTriggerBase = /** @class */ (function (_super) {
                __extends(CancelableTriggerBase, _super);
                function CancelableTriggerBase() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return CancelableTriggerBase;
            }(TriggerBase));
            exports_43("CancelableTriggerBase", CancelableTriggerBase);
        }
    };
});
System.register("PosApi/Extend/Triggers/ApplicationTriggers", ["PosApi/Extend/Triggers/Triggers"], function (exports_44, context_44) {
    "use strict";
    var Triggers_1, ApplicationStartTrigger, ApplicationSuspendTrigger, PostConnectionStatusChangeTrigger, PreLogOnTrigger, PostLogOnTrigger, PostLogOffTrigger, PreLockTerminalTrigger, PostLockTerminalTrigger, PostDeviceActivationTrigger;
    var __moduleName = context_44 && context_44.id;
    return {
        setters: [
            function (Triggers_1_1) {
                Triggers_1 = Triggers_1_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all ApplicationStart triggers.
             * @remarks All ApplicationStart triggers should derive from this class.
             */
            ApplicationStartTrigger = /** @class */ (function (_super) {
                __extends(ApplicationStartTrigger, _super);
                function ApplicationStartTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return ApplicationStartTrigger;
            }(Triggers_1.NonCancelableTriggerBase));
            exports_44("ApplicationStartTrigger", ApplicationStartTrigger);
            /**
             * Represents the base class for all ApplicationSuspend triggers.
             * @remarks All ApplicationSuspend triggers should derive from this class.
             */
            ApplicationSuspendTrigger = /** @class */ (function (_super) {
                __extends(ApplicationSuspendTrigger, _super);
                function ApplicationSuspendTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return ApplicationSuspendTrigger;
            }(Triggers_1.NonCancelableTriggerBase));
            exports_44("ApplicationSuspendTrigger", ApplicationSuspendTrigger);
            /**
             * Represents the base class for all PostConnectionStatusChange triggers.
             * @remarks All PostConnectionStatusChange triggers should derive from this class.
             */
            PostConnectionStatusChangeTrigger = /** @class */ (function (_super) {
                __extends(PostConnectionStatusChangeTrigger, _super);
                function PostConnectionStatusChangeTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostConnectionStatusChangeTrigger;
            }(Triggers_1.NonCancelableTriggerBase));
            exports_44("PostConnectionStatusChangeTrigger", PostConnectionStatusChangeTrigger);
            /**
             * Represents the base class for all PreLogOn triggers.
             * @remarks All PreLogOn triggers should derive from this class.
             */
            PreLogOnTrigger = /** @class */ (function (_super) {
                __extends(PreLogOnTrigger, _super);
                function PreLogOnTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreLogOnTrigger;
            }(Triggers_1.CancelableTriggerBase));
            exports_44("PreLogOnTrigger", PreLogOnTrigger);
            /**
             * Represents the base class for all PostLogOn triggers.
             * @remarks All PostLogOn triggers should derive from this class.
             */
            PostLogOnTrigger = /** @class */ (function (_super) {
                __extends(PostLogOnTrigger, _super);
                function PostLogOnTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostLogOnTrigger;
            }(Triggers_1.NonCancelableTriggerBase));
            exports_44("PostLogOnTrigger", PostLogOnTrigger);
            /**
             * Represents the base class for all PostLogOff triggers.
             * @remarks All PostLogOff triggers should derive from this class.
             */
            PostLogOffTrigger = /** @class */ (function (_super) {
                __extends(PostLogOffTrigger, _super);
                function PostLogOffTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostLogOffTrigger;
            }(Triggers_1.NonCancelableTriggerBase));
            exports_44("PostLogOffTrigger", PostLogOffTrigger);
            /**
             * Represents the base class for all PreLockTerminal triggers.
             * @remarks All PreLockTerminal triggers should derive from this class.
             */
            PreLockTerminalTrigger = /** @class */ (function (_super) {
                __extends(PreLockTerminalTrigger, _super);
                function PreLockTerminalTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreLockTerminalTrigger;
            }(Triggers_1.CancelableTriggerBase));
            exports_44("PreLockTerminalTrigger", PreLockTerminalTrigger);
            /**
             * Represents the base class for all PostLockTerminal triggers.
             * @remarks All PostLockTerminal triggers should derive from this class.
             */
            PostLockTerminalTrigger = /** @class */ (function (_super) {
                __extends(PostLockTerminalTrigger, _super);
                function PostLockTerminalTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostLockTerminalTrigger;
            }(Triggers_1.NonCancelableTriggerBase));
            exports_44("PostLockTerminalTrigger", PostLockTerminalTrigger);
            /**
             * Represents the base class for all PostDeviceActivation triggers.
             * @remarks All PostDeviceActivation triggers should derive from this class.
             */
            PostDeviceActivationTrigger = /** @class */ (function (_super) {
                __extends(PostDeviceActivationTrigger, _super);
                function PostDeviceActivationTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostDeviceActivationTrigger;
            }(Triggers_1.NonCancelableTriggerBase));
            exports_44("PostDeviceActivationTrigger", PostDeviceActivationTrigger);
        }
    };
});
System.register("PosApi/Extend/Triggers/AuditEventTriggers", ["PosApi/Extend/Triggers/Triggers"], function (exports_45, context_45) {
    "use strict";
    var Triggers_2, PreRegisterAuditEventTrigger, PostRegisterAuditEventTrigger;
    var __moduleName = context_45 && context_45.id;
    return {
        setters: [
            function (Triggers_2_1) {
                Triggers_2 = Triggers_2_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all PreRegisterAuditEvent triggers.
             * @remarks All PreRegisterAuditEvent triggers should derive from this class.
             */
            PreRegisterAuditEventTrigger = /** @class */ (function (_super) {
                __extends(PreRegisterAuditEventTrigger, _super);
                function PreRegisterAuditEventTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreRegisterAuditEventTrigger;
            }(Triggers_2.CancelableTriggerBase));
            exports_45("PreRegisterAuditEventTrigger", PreRegisterAuditEventTrigger);
            /**
             * Represents the base class for all PostRegisterAuditEvent triggers.
             * @remarks All PostRegisterAuditEvent triggers should derive from this class.
             */
            PostRegisterAuditEventTrigger = /** @class */ (function (_super) {
                __extends(PostRegisterAuditEventTrigger, _super);
                function PostRegisterAuditEventTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostRegisterAuditEventTrigger;
            }(Triggers_2.NonCancelableTriggerBase));
            exports_45("PostRegisterAuditEventTrigger", PostRegisterAuditEventTrigger);
        }
    };
});
System.register("PosApi/Extend/Triggers/CashManagementTriggers", ["PosApi/Extend/Triggers/Triggers"], function (exports_46, context_46) {
    "use strict";
    var Triggers_3, PreTenderDeclarationTrigger, PostTenderDeclarationTrigger, PreFloatEntryTrigger, PostFloatEntryTrigger;
    var __moduleName = context_46 && context_46.id;
    return {
        setters: [
            function (Triggers_3_1) {
                Triggers_3 = Triggers_3_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all PreTenderDeclaration triggers.
             * @remarks All PreTenderDeclaration triggers should derive from this class.
             */
            PreTenderDeclarationTrigger = /** @class */ (function (_super) {
                __extends(PreTenderDeclarationTrigger, _super);
                function PreTenderDeclarationTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreTenderDeclarationTrigger;
            }(Triggers_3.CancelableTriggerBase));
            exports_46("PreTenderDeclarationTrigger", PreTenderDeclarationTrigger);
            /**
             * Represents the base class for all PostTenderDeclaration triggers.
             * @remarks All PostTenderDeclaration triggers should derive from this class.
             */
            PostTenderDeclarationTrigger = /** @class */ (function (_super) {
                __extends(PostTenderDeclarationTrigger, _super);
                function PostTenderDeclarationTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostTenderDeclarationTrigger;
            }(Triggers_3.NonCancelableTriggerBase));
            exports_46("PostTenderDeclarationTrigger", PostTenderDeclarationTrigger);
            /**
             * Represents the base class for all PreFloatEntry triggers.
             * @remarks All PreFloatEntry triggers should derive from this class.
             */
            PreFloatEntryTrigger = /** @class */ (function (_super) {
                __extends(PreFloatEntryTrigger, _super);
                function PreFloatEntryTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreFloatEntryTrigger;
            }(Triggers_3.CancelableTriggerBase));
            exports_46("PreFloatEntryTrigger", PreFloatEntryTrigger);
            /**
             * Represents the base class for all PostFloatEntry triggers.
             * @remarks All PostFloatEntry triggers should derive from this class.
             */
            PostFloatEntryTrigger = /** @class */ (function (_super) {
                __extends(PostFloatEntryTrigger, _super);
                function PostFloatEntryTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostFloatEntryTrigger;
            }(Triggers_3.NonCancelableTriggerBase));
            exports_46("PostFloatEntryTrigger", PostFloatEntryTrigger);
        }
    };
});
System.register("PosApi/Extend/Triggers/CustomerTriggers", ["PosApi/Extend/Triggers/Triggers"], function (exports_47, context_47) {
    "use strict";
    var Triggers_4, PreCustomerAddTrigger, PostCustomerAddTrigger, PreCustomerClearTrigger, PostCustomerClearTrigger, PreCustomerSetTrigger, PreCustomerSearchTrigger, PostCustomerSearchTrigger, PreGetLoyaltyCardBalanceTrigger, PreDisplayLoyaltyCardBalanceTrigger, PostGetLoyaltyCardBalanceTrigger, PreCustomerSaveTrigger, PostCustomerSaveTrigger;
    var __moduleName = context_47 && context_47.id;
    return {
        setters: [
            function (Triggers_4_1) {
                Triggers_4 = Triggers_4_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all PreCustomerAdd triggers.
             * @remarks All PreCustomerAdd triggers should derive from this class.
             */
            PreCustomerAddTrigger = /** @class */ (function (_super) {
                __extends(PreCustomerAddTrigger, _super);
                function PreCustomerAddTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreCustomerAddTrigger;
            }(Triggers_4.CancelableTriggerBase));
            exports_47("PreCustomerAddTrigger", PreCustomerAddTrigger);
            /**
             * Represents the base class for all PostCustomerAdd triggers.
             * @remarks All PostCustomerAdd triggers should derive from this class.
             */
            PostCustomerAddTrigger = /** @class */ (function (_super) {
                __extends(PostCustomerAddTrigger, _super);
                function PostCustomerAddTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostCustomerAddTrigger;
            }(Triggers_4.NonCancelableTriggerBase));
            exports_47("PostCustomerAddTrigger", PostCustomerAddTrigger);
            /**
             * Represents the base class for all PreCustomerClear triggers.
             * @remarks All PreCustomerClear triggers should derive from this class.
             */
            PreCustomerClearTrigger = /** @class */ (function (_super) {
                __extends(PreCustomerClearTrigger, _super);
                function PreCustomerClearTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreCustomerClearTrigger;
            }(Triggers_4.CancelableTriggerBase));
            exports_47("PreCustomerClearTrigger", PreCustomerClearTrigger);
            /**
             * Represents the base class for all PostCustomerClear triggers.
             * @remarks All PostCustomerClear triggers should derive from this class.
             */
            PostCustomerClearTrigger = /** @class */ (function (_super) {
                __extends(PostCustomerClearTrigger, _super);
                function PostCustomerClearTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostCustomerClearTrigger;
            }(Triggers_4.NonCancelableTriggerBase));
            exports_47("PostCustomerClearTrigger", PostCustomerClearTrigger);
            /**
             * Represents the base class for all PreCustomerSet triggers.
             * @remarks All PreCustomerSet triggers should derive from this class.
             */
            PreCustomerSetTrigger = /** @class */ (function (_super) {
                __extends(PreCustomerSetTrigger, _super);
                function PreCustomerSetTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreCustomerSetTrigger;
            }(Triggers_4.CancelableTriggerBase));
            exports_47("PreCustomerSetTrigger", PreCustomerSetTrigger);
            /**
             * Represents the base class for all PreCustomerSearch triggers.
             * @remarks All PreCustomerSearch triggers should derive from this class.
             */
            PreCustomerSearchTrigger = /** @class */ (function (_super) {
                __extends(PreCustomerSearchTrigger, _super);
                function PreCustomerSearchTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreCustomerSearchTrigger;
            }(Triggers_4.CancelableTriggerBase));
            exports_47("PreCustomerSearchTrigger", PreCustomerSearchTrigger);
            /**
             * Represents the base class for all PostCustomerSearch triggers.
             * @remarks All PostCustomerSearch triggers should derive from this class.
             */
            PostCustomerSearchTrigger = /** @class */ (function (_super) {
                __extends(PostCustomerSearchTrigger, _super);
                function PostCustomerSearchTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostCustomerSearchTrigger;
            }(Triggers_4.NonCancelableTriggerBase));
            exports_47("PostCustomerSearchTrigger", PostCustomerSearchTrigger);
            /**
             * Represents the base class for all PreGetLoyaltyCardBalance triggers.
             * @remarks All PreGetLoyaltyCardBalance triggers should derive from this class.
             * @remarks The PreGetLoyaltyCardBalanceTrigger is executed prior to running the get loyalty card balance operation.
             */
            PreGetLoyaltyCardBalanceTrigger = /** @class */ (function (_super) {
                __extends(PreGetLoyaltyCardBalanceTrigger, _super);
                function PreGetLoyaltyCardBalanceTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreGetLoyaltyCardBalanceTrigger;
            }(Triggers_4.CancelableTriggerBase));
            exports_47("PreGetLoyaltyCardBalanceTrigger", PreGetLoyaltyCardBalanceTrigger);
            /**
             * Represents the base class for all PreDisplayLoyaltyCardBalance triggers.
             * @remarks All PreDisplayLoyaltyCardBalance triggers should derive from this class.
             * @remarks The PreDisplayLoyaltyCardBalanceTrigger is executed prior to showing the loyalty card balance details dialog.
             */
            PreDisplayLoyaltyCardBalanceTrigger = /** @class */ (function (_super) {
                __extends(PreDisplayLoyaltyCardBalanceTrigger, _super);
                function PreDisplayLoyaltyCardBalanceTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreDisplayLoyaltyCardBalanceTrigger;
            }(Triggers_4.CancelableTriggerBase));
            exports_47("PreDisplayLoyaltyCardBalanceTrigger", PreDisplayLoyaltyCardBalanceTrigger);
            /**
             * Represents the base class for all PostGetLoyaltyCardBalance triggers.
             * @remarks All PostGetLoyaltyCardBalance triggers should derive from this class.
             * @remarks The PostGetLoyaltyCardBalanceTrigger is executed when LoyaltyRequest operation is done.
             */
            PostGetLoyaltyCardBalanceTrigger = /** @class */ (function (_super) {
                __extends(PostGetLoyaltyCardBalanceTrigger, _super);
                function PostGetLoyaltyCardBalanceTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostGetLoyaltyCardBalanceTrigger;
            }(Triggers_4.NonCancelableTriggerBase));
            exports_47("PostGetLoyaltyCardBalanceTrigger", PostGetLoyaltyCardBalanceTrigger);
            /**
             * Represents the base class for all PreCustomerSave triggers.
             * @remarks All PreCustomerSave triggers should derive from this class.
             * @remarks The PreCustomerSaveTrigger is executed prior to saving customer.
             * @remarks This includes when creating a new customer and when editing an existing one.
             */
            PreCustomerSaveTrigger = /** @class */ (function (_super) {
                __extends(PreCustomerSaveTrigger, _super);
                function PreCustomerSaveTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreCustomerSaveTrigger;
            }(Triggers_4.CancelableTriggerBase));
            exports_47("PreCustomerSaveTrigger", PreCustomerSaveTrigger);
            /**
             * Represents the base class for all PostCustomerSave triggers.
             * @remarks All PostCustomerSave triggers should derive from this class.
             * @remarks The PostCustomerSaveTrigger is executed after saving customer.
             * @remarks This includes when creating a new customer.
             */
            PostCustomerSaveTrigger = /** @class */ (function (_super) {
                __extends(PostCustomerSaveTrigger, _super);
                function PostCustomerSaveTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostCustomerSaveTrigger;
            }(Triggers_4.NonCancelableTriggerBase));
            exports_47("PostCustomerSaveTrigger", PostCustomerSaveTrigger);
        }
    };
});
System.register("PosApi/Extend/Triggers/DiscountTriggers", ["PosApi/Extend/Triggers/Triggers"], function (exports_48, context_48) {
    "use strict";
    var Triggers_5, PreAddCouponTrigger, PostAddCouponTrigger, PreLineDiscountAmountTrigger, PostLineDiscountAmountTrigger, PreLineDiscountPercentTrigger, PostLineDiscountPercentTrigger, PreTotalDiscountAmountTrigger, PostTotalDiscountAmountTrigger, PreTotalDiscountPercentTrigger, PostTotalDiscountPercentTrigger;
    var __moduleName = context_48 && context_48.id;
    return {
        setters: [
            function (Triggers_5_1) {
                Triggers_5 = Triggers_5_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all PreAddCoupon triggers.
             * @remarks All PreAddCoupon triggers should derive from this class.
             */
            PreAddCouponTrigger = /** @class */ (function (_super) {
                __extends(PreAddCouponTrigger, _super);
                function PreAddCouponTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreAddCouponTrigger;
            }(Triggers_5.CancelableTriggerBase));
            exports_48("PreAddCouponTrigger", PreAddCouponTrigger);
            /**
             * Represents the base class for all PostAddCoupon triggers.
             * @remarks All PostAddCoupon triggers should derive from this class.
             */
            PostAddCouponTrigger = /** @class */ (function (_super) {
                __extends(PostAddCouponTrigger, _super);
                function PostAddCouponTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostAddCouponTrigger;
            }(Triggers_5.NonCancelableTriggerBase));
            exports_48("PostAddCouponTrigger", PostAddCouponTrigger);
            /**
             * Represents the base class for all PreLineDiscountAmount triggers.
             * @remarks All PreLineDiscountAmount triggers should derive from this class.
             */
            PreLineDiscountAmountTrigger = /** @class */ (function (_super) {
                __extends(PreLineDiscountAmountTrigger, _super);
                function PreLineDiscountAmountTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreLineDiscountAmountTrigger;
            }(Triggers_5.CancelableTriggerBase));
            exports_48("PreLineDiscountAmountTrigger", PreLineDiscountAmountTrigger);
            /**
             * Represents the base class for all PostLineDiscountAmount triggers.
             * @remarks All PostLineDiscountAmount triggers should derive from this class.
             */
            PostLineDiscountAmountTrigger = /** @class */ (function (_super) {
                __extends(PostLineDiscountAmountTrigger, _super);
                function PostLineDiscountAmountTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostLineDiscountAmountTrigger;
            }(Triggers_5.NonCancelableTriggerBase));
            exports_48("PostLineDiscountAmountTrigger", PostLineDiscountAmountTrigger);
            /**
             * Represents the base class for all PreLineDiscountPercent triggers.
             * @remarks All PreLineDiscountPercent triggers should derive from this class.
             */
            PreLineDiscountPercentTrigger = /** @class */ (function (_super) {
                __extends(PreLineDiscountPercentTrigger, _super);
                function PreLineDiscountPercentTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreLineDiscountPercentTrigger;
            }(Triggers_5.CancelableTriggerBase));
            exports_48("PreLineDiscountPercentTrigger", PreLineDiscountPercentTrigger);
            /**
             * Represents the base class for all PostLineDiscountPercent triggers.
             * @remarks All PostLineDiscountPercent triggers should derive from this class.
             */
            PostLineDiscountPercentTrigger = /** @class */ (function (_super) {
                __extends(PostLineDiscountPercentTrigger, _super);
                function PostLineDiscountPercentTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostLineDiscountPercentTrigger;
            }(Triggers_5.NonCancelableTriggerBase));
            exports_48("PostLineDiscountPercentTrigger", PostLineDiscountPercentTrigger);
            /**
             * Represents the base class for all PreTotalDiscountAmount triggers.
             * @remarks All PreTotalDiscountAmount triggers should derive from this class.
             */
            PreTotalDiscountAmountTrigger = /** @class */ (function (_super) {
                __extends(PreTotalDiscountAmountTrigger, _super);
                function PreTotalDiscountAmountTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreTotalDiscountAmountTrigger;
            }(Triggers_5.CancelableTriggerBase));
            exports_48("PreTotalDiscountAmountTrigger", PreTotalDiscountAmountTrigger);
            /**
             * Represents the base class for all PostTotalDiscountAmount triggers.
             * @remarks All PostTotalDiscountAmount triggers should derive from this class.
             */
            PostTotalDiscountAmountTrigger = /** @class */ (function (_super) {
                __extends(PostTotalDiscountAmountTrigger, _super);
                function PostTotalDiscountAmountTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostTotalDiscountAmountTrigger;
            }(Triggers_5.NonCancelableTriggerBase));
            exports_48("PostTotalDiscountAmountTrigger", PostTotalDiscountAmountTrigger);
            /**
             * Represents the base class for all PreTotalDiscountPercent triggers.
             * @remarks All PreTotalDiscountPercent triggers should derive from this class.
             */
            PreTotalDiscountPercentTrigger = /** @class */ (function (_super) {
                __extends(PreTotalDiscountPercentTrigger, _super);
                function PreTotalDiscountPercentTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreTotalDiscountPercentTrigger;
            }(Triggers_5.CancelableTriggerBase));
            exports_48("PreTotalDiscountPercentTrigger", PreTotalDiscountPercentTrigger);
            /**
             * Represents the base class for all PostTotalDiscountPercent triggers.
             * @remarks All PostTotalDiscountPercent triggers should derive from this class.
             */
            PostTotalDiscountPercentTrigger = /** @class */ (function (_super) {
                __extends(PostTotalDiscountPercentTrigger, _super);
                function PostTotalDiscountPercentTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostTotalDiscountPercentTrigger;
            }(Triggers_5.NonCancelableTriggerBase));
            exports_48("PostTotalDiscountPercentTrigger", PostTotalDiscountPercentTrigger);
        }
    };
});
System.register("PosApi/Extend/Triggers/OperationTriggers", ["PosApi/Extend/Triggers/Triggers"], function (exports_49, context_49) {
    "use strict";
    var Triggers_6, PreOperationTrigger, PostOperationTrigger, OperationFailureTrigger;
    var __moduleName = context_49 && context_49.id;
    return {
        setters: [
            function (Triggers_6_1) {
                Triggers_6 = Triggers_6_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all PreOperation triggers.
             * @remarks All PreOperation triggers should derive from this class.
             */
            PreOperationTrigger = /** @class */ (function (_super) {
                __extends(PreOperationTrigger, _super);
                function PreOperationTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreOperationTrigger;
            }(Triggers_6.CancelableTriggerBase));
            exports_49("PreOperationTrigger", PreOperationTrigger);
            /**
             * Represents the base class for all PostOperation triggers.
             * @remarks All PostOperation triggers should derive from this class.
             */
            PostOperationTrigger = /** @class */ (function (_super) {
                __extends(PostOperationTrigger, _super);
                function PostOperationTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostOperationTrigger;
            }(Triggers_6.NonCancelableTriggerBase));
            exports_49("PostOperationTrigger", PostOperationTrigger);
            /**
             * Represents the base class for all OperationFailure triggers.
             * @remarks All OperationFailure triggers should derive from this class.
             */
            OperationFailureTrigger = /** @class */ (function (_super) {
                __extends(OperationFailureTrigger, _super);
                function OperationFailureTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return OperationFailureTrigger;
            }(Triggers_6.NonCancelableTriggerBase));
            exports_49("OperationFailureTrigger", OperationFailureTrigger);
        }
    };
});
System.register("PosApi/Extend/Triggers/PaymentTriggers", ["PosApi/Extend/Triggers/Triggers"], function (exports_50, context_50) {
    "use strict";
    var Triggers_7, PreAddTenderLineTrigger, PrePaymentTrigger, PostPaymentTrigger, PreVoidPaymentTrigger, PostVoidPaymentTrigger, PostGetGiftCardNumberTrigger;
    var __moduleName = context_50 && context_50.id;
    return {
        setters: [
            function (Triggers_7_1) {
                Triggers_7 = Triggers_7_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all PreAddTenderLine triggers.
             * @remarks All PreAddTenderLine triggers should derive from this class.
             */
            PreAddTenderLineTrigger = /** @class */ (function (_super) {
                __extends(PreAddTenderLineTrigger, _super);
                function PreAddTenderLineTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreAddTenderLineTrigger;
            }(Triggers_7.CancelableTriggerBase));
            exports_50("PreAddTenderLineTrigger", PreAddTenderLineTrigger);
            /**
             * Represents the base class for all PrePayment triggers.
             * @remarks All PrePayment triggers should derive from this class.
             */
            PrePaymentTrigger = /** @class */ (function (_super) {
                __extends(PrePaymentTrigger, _super);
                function PrePaymentTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PrePaymentTrigger;
            }(Triggers_7.CancelableTriggerBase));
            exports_50("PrePaymentTrigger", PrePaymentTrigger);
            /**
             * Represents the base class for all PostPayment triggers.
             * @remarks All PostPayment triggers should derive from this class.
             */
            PostPaymentTrigger = /** @class */ (function (_super) {
                __extends(PostPaymentTrigger, _super);
                function PostPaymentTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostPaymentTrigger;
            }(Triggers_7.NonCancelableTriggerBase));
            exports_50("PostPaymentTrigger", PostPaymentTrigger);
            /**
             * Represents the base class for all PreVoidPayment triggers.
             * @remarks All PreVoidPayment triggers should derive from this class.
             */
            PreVoidPaymentTrigger = /** @class */ (function (_super) {
                __extends(PreVoidPaymentTrigger, _super);
                function PreVoidPaymentTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreVoidPaymentTrigger;
            }(Triggers_7.CancelableTriggerBase));
            exports_50("PreVoidPaymentTrigger", PreVoidPaymentTrigger);
            /**
             * Represents the base class for all PostVoidPayment triggers.
             * @remarks All PostVoidPayment triggers should derive from this class.
             */
            PostVoidPaymentTrigger = /** @class */ (function (_super) {
                __extends(PostVoidPaymentTrigger, _super);
                function PostVoidPaymentTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostVoidPaymentTrigger;
            }(Triggers_7.NonCancelableTriggerBase));
            exports_50("PostVoidPaymentTrigger", PostVoidPaymentTrigger);
            /**
             * Represents the base class for all PostGetGiftCardNumber triggers.
             * @remarks All PostGetGiftCardNumberTrigger triggers should derive from this class.
             */
            PostGetGiftCardNumberTrigger = /** @class */ (function (_super) {
                __extends(PostGetGiftCardNumberTrigger, _super);
                function PostGetGiftCardNumberTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostGetGiftCardNumberTrigger;
            }(Triggers_7.CancelableTriggerBase));
            exports_50("PostGetGiftCardNumberTrigger", PostGetGiftCardNumberTrigger);
        }
    };
});
System.register("PosApi/Extend/Triggers/PrintingTriggers", ["PosApi/Extend/Triggers/Triggers"], function (exports_51, context_51) {
    "use strict";
    var Triggers_8, PrePrintReceiptCopyTrigger, PostReceiptPromptTrigger;
    var __moduleName = context_51 && context_51.id;
    return {
        setters: [
            function (Triggers_8_1) {
                Triggers_8 = Triggers_8_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all PrePrintReceiptCopy triggers.
             * @remarks All PrePrintReceiptCopy triggers should derive from this class.
             */
            PrePrintReceiptCopyTrigger = /** @class */ (function (_super) {
                __extends(PrePrintReceiptCopyTrigger, _super);
                function PrePrintReceiptCopyTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PrePrintReceiptCopyTrigger;
            }(Triggers_8.CancelableTriggerBase));
            exports_51("PrePrintReceiptCopyTrigger", PrePrintReceiptCopyTrigger);
            /**
             * Represents the base class for all PostReceiptPromptTrigger triggers.
             * @remarks All PostReceiptPromptTrigger triggers should derive from this class.
             */
            PostReceiptPromptTrigger = /** @class */ (function (_super) {
                __extends(PostReceiptPromptTrigger, _super);
                function PostReceiptPromptTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostReceiptPromptTrigger;
            }(Triggers_8.NonCancelableTriggerBase));
            exports_51("PostReceiptPromptTrigger", PostReceiptPromptTrigger);
        }
    };
});
System.register("PosApi/Extend/Triggers/ProductTriggers", ["PosApi/Extend/Triggers/Triggers"], function (exports_52, context_52) {
    "use strict";
    var Triggers_9, PostGetSerialNumberTrigger, PreProductSaleTrigger, PostProductSaleTrigger, PreReturnProductTrigger, PostReturnProductTrigger, PreSetQuantityTrigger, PostSetQuantityTrigger, PrePriceOverrideTrigger, PostPriceOverrideTrigger, PreClearQuantityTrigger, PostClearQuantityTrigger, PreVoidProductsTrigger, PostVoidProductsTrigger, PostPriceCheckTrigger;
    var __moduleName = context_52 && context_52.id;
    return {
        setters: [
            function (Triggers_9_1) {
                Triggers_9 = Triggers_9_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all PostGetSerialNumber triggers.
             * @remarks All PostGetSerialNumber triggers should derive from this class.
             */
            PostGetSerialNumberTrigger = /** @class */ (function (_super) {
                __extends(PostGetSerialNumberTrigger, _super);
                function PostGetSerialNumberTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostGetSerialNumberTrigger;
            }(Triggers_9.NonCancelableTriggerBase));
            exports_52("PostGetSerialNumberTrigger", PostGetSerialNumberTrigger);
            /**
             * Represents the base class for all PreProductSale triggers.
             * @remarks All PreProductSale triggers should derive from this class.
             */
            PreProductSaleTrigger = /** @class */ (function (_super) {
                __extends(PreProductSaleTrigger, _super);
                function PreProductSaleTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreProductSaleTrigger;
            }(Triggers_9.CancelableTriggerBase));
            exports_52("PreProductSaleTrigger", PreProductSaleTrigger);
            /**
             * Represents the base class for all PostProductSale triggers.
             * @remarks All PostProductSale triggers should derive from this class.
             */
            PostProductSaleTrigger = /** @class */ (function (_super) {
                __extends(PostProductSaleTrigger, _super);
                function PostProductSaleTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostProductSaleTrigger;
            }(Triggers_9.NonCancelableTriggerBase));
            exports_52("PostProductSaleTrigger", PostProductSaleTrigger);
            /**
             * Represents the base class for all PreReturnProduct triggers.
             * @remarks All PreReturnProduct triggers should derive from this class.
             */
            PreReturnProductTrigger = /** @class */ (function (_super) {
                __extends(PreReturnProductTrigger, _super);
                function PreReturnProductTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreReturnProductTrigger;
            }(Triggers_9.CancelableTriggerBase));
            exports_52("PreReturnProductTrigger", PreReturnProductTrigger);
            /**
             * Represents the base class for all PostReturnProduct triggers.
             * @remarks All PostReturnProduct triggers should derive from this class.
             */
            PostReturnProductTrigger = /** @class */ (function (_super) {
                __extends(PostReturnProductTrigger, _super);
                function PostReturnProductTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostReturnProductTrigger;
            }(Triggers_9.NonCancelableTriggerBase));
            exports_52("PostReturnProductTrigger", PostReturnProductTrigger);
            /**
             * Represents the base class for all PreSetQuantity triggers.
             * @remarks All PreSetQuantity triggers should derive from this class.
             */
            PreSetQuantityTrigger = /** @class */ (function (_super) {
                __extends(PreSetQuantityTrigger, _super);
                function PreSetQuantityTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreSetQuantityTrigger;
            }(Triggers_9.CancelableTriggerBase));
            exports_52("PreSetQuantityTrigger", PreSetQuantityTrigger);
            /**
             * Represents the base class for all PostSetQuantity triggers.
             * @remarks All PostSetQuantity triggers should derive from this class.
             */
            PostSetQuantityTrigger = /** @class */ (function (_super) {
                __extends(PostSetQuantityTrigger, _super);
                function PostSetQuantityTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostSetQuantityTrigger;
            }(Triggers_9.NonCancelableTriggerBase));
            exports_52("PostSetQuantityTrigger", PostSetQuantityTrigger);
            /**
             * Represents the base class for all PrePriceOverride triggers.
             * @remarks All PrePriceOverride triggers should derive from this class.
             */
            PrePriceOverrideTrigger = /** @class */ (function (_super) {
                __extends(PrePriceOverrideTrigger, _super);
                function PrePriceOverrideTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PrePriceOverrideTrigger;
            }(Triggers_9.CancelableTriggerBase));
            exports_52("PrePriceOverrideTrigger", PrePriceOverrideTrigger);
            /**
             * Represents the base class for all PostPriceOverride triggers.
             * @remarks All PostPriceOverride triggers should derive from this class.
             */
            PostPriceOverrideTrigger = /** @class */ (function (_super) {
                __extends(PostPriceOverrideTrigger, _super);
                function PostPriceOverrideTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostPriceOverrideTrigger;
            }(Triggers_9.NonCancelableTriggerBase));
            exports_52("PostPriceOverrideTrigger", PostPriceOverrideTrigger);
            /**
             * Represents the base class for all PreClearQuantity triggers.
             * @remarks All PreClearQuantity triggers should derive from this class.
             */
            PreClearQuantityTrigger = /** @class */ (function (_super) {
                __extends(PreClearQuantityTrigger, _super);
                function PreClearQuantityTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreClearQuantityTrigger;
            }(Triggers_9.CancelableTriggerBase));
            exports_52("PreClearQuantityTrigger", PreClearQuantityTrigger);
            /**
             * Represents the base class for all PostClearQuantity triggers.
             * @remarks All PostClearQuantity triggers should derive from this class.
             */
            PostClearQuantityTrigger = /** @class */ (function (_super) {
                __extends(PostClearQuantityTrigger, _super);
                function PostClearQuantityTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostClearQuantityTrigger;
            }(Triggers_9.NonCancelableTriggerBase));
            exports_52("PostClearQuantityTrigger", PostClearQuantityTrigger);
            /**
             * Represents the base class for all PreVoidProducts triggers.
             * @remarks All PreVoidProducts triggers should derive from this class.
             */
            PreVoidProductsTrigger = /** @class */ (function (_super) {
                __extends(PreVoidProductsTrigger, _super);
                function PreVoidProductsTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreVoidProductsTrigger;
            }(Triggers_9.CancelableTriggerBase));
            exports_52("PreVoidProductsTrigger", PreVoidProductsTrigger);
            /**
             * Represents the base class for all PostVoidProducts triggers.
             * @remarks All PostVoidProducts triggers should derive from this class.
             */
            PostVoidProductsTrigger = /** @class */ (function (_super) {
                __extends(PostVoidProductsTrigger, _super);
                function PostVoidProductsTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostVoidProductsTrigger;
            }(Triggers_9.NonCancelableTriggerBase));
            exports_52("PostVoidProductsTrigger", PostVoidProductsTrigger);
            /**
             * Represents the base class for all PostPriceCheck triggers.
             * @remarks All PostPriceCheck triggers should derive from this class.
             */
            PostPriceCheckTrigger = /** @class */ (function (_super) {
                __extends(PostPriceCheckTrigger, _super);
                function PostPriceCheckTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostPriceCheckTrigger;
            }(Triggers_9.NonCancelableTriggerBase));
            exports_52("PostPriceCheckTrigger", PostPriceCheckTrigger);
        }
    };
});
System.register("PosApi/Extend/Triggers/SalesOrderTriggers", ["PosApi/Extend/Triggers/Triggers"], function (exports_53, context_53) {
    "use strict";
    var Triggers_10, PreRecallCustomerOrderTrigger, PostRecallCustomerOrderTrigger, PrePickUpCustomerOrderLinesTrigger, PreChangeShippingOriginTrigger;
    var __moduleName = context_53 && context_53.id;
    return {
        setters: [
            function (Triggers_10_1) {
                Triggers_10 = Triggers_10_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all PreRecallCustomerOrder triggers.
             * @remarks All PreRecallCustomerOrder triggers should derive from this class.
             */
            PreRecallCustomerOrderTrigger = /** @class */ (function (_super) {
                __extends(PreRecallCustomerOrderTrigger, _super);
                function PreRecallCustomerOrderTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreRecallCustomerOrderTrigger;
            }(Triggers_10.CancelableTriggerBase));
            exports_53("PreRecallCustomerOrderTrigger", PreRecallCustomerOrderTrigger);
            /**
             * Represents the base class for all PostRecallCustomerOrder triggers.
             * @remarks All PostRecallCustomerOrder triggers should derive from this class.
             */
            PostRecallCustomerOrderTrigger = /** @class */ (function (_super) {
                __extends(PostRecallCustomerOrderTrigger, _super);
                function PostRecallCustomerOrderTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostRecallCustomerOrderTrigger;
            }(Triggers_10.NonCancelableTriggerBase));
            exports_53("PostRecallCustomerOrderTrigger", PostRecallCustomerOrderTrigger);
            /**
             * Represents the base class for all PrePickUpCustomerOrderLines triggers.
             * @remarks All PrePickUpCustomerOrderLines triggers should derive from this class.
             */
            PrePickUpCustomerOrderLinesTrigger = /** @class */ (function (_super) {
                __extends(PrePickUpCustomerOrderLinesTrigger, _super);
                function PrePickUpCustomerOrderLinesTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PrePickUpCustomerOrderLinesTrigger;
            }(Triggers_10.CancelableTriggerBase));
            exports_53("PrePickUpCustomerOrderLinesTrigger", PrePickUpCustomerOrderLinesTrigger);
            /**
             * Represents the base class for all PreChangeShippingOrigin triggers.
             * @remarks All PreChangeShippingOrigin triggers should derive from this class.
             */
            PreChangeShippingOriginTrigger = /** @class */ (function (_super) {
                __extends(PreChangeShippingOriginTrigger, _super);
                function PreChangeShippingOriginTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreChangeShippingOriginTrigger;
            }(Triggers_10.CancelableTriggerBase));
            exports_53("PreChangeShippingOriginTrigger", PreChangeShippingOriginTrigger);
        }
    };
});
System.register("PosApi/Extend/Triggers/ShiftTriggers", ["PosApi/Extend/Triggers/Triggers"], function (exports_54, context_54) {
    "use strict";
    var Triggers_11, PostOpenShiftTrigger;
    var __moduleName = context_54 && context_54.id;
    return {
        setters: [
            function (Triggers_11_1) {
                Triggers_11 = Triggers_11_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all PostOpenShift triggers.
             * @remarks All PostOpenShift triggers should derive from this class.
             */
            PostOpenShiftTrigger = /** @class */ (function (_super) {
                __extends(PostOpenShiftTrigger, _super);
                function PostOpenShiftTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostOpenShiftTrigger;
            }(Triggers_11.NonCancelableTriggerBase));
            exports_54("PostOpenShiftTrigger", PostOpenShiftTrigger);
        }
    };
});
System.register("PosApi/Extend/Triggers/TaxOverrideTriggers", ["PosApi/Extend/Triggers/Triggers"], function (exports_55, context_55) {
    "use strict";
    var Triggers_12, PreOverrideLineProductTaxTrigger, PostOverrideLineProductTaxTrigger, PreOverrideTransactionTaxTrigger, PostOverrideTransactionTaxTrigger;
    var __moduleName = context_55 && context_55.id;
    return {
        setters: [
            function (Triggers_12_1) {
                Triggers_12 = Triggers_12_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all PreOverrideLineProductTax triggers.
             * @remarks All PreOverrideLineProductTax triggers should derive from this class.
             */
            PreOverrideLineProductTaxTrigger = /** @class */ (function (_super) {
                __extends(PreOverrideLineProductTaxTrigger, _super);
                function PreOverrideLineProductTaxTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreOverrideLineProductTaxTrigger;
            }(Triggers_12.CancelableTriggerBase));
            exports_55("PreOverrideLineProductTaxTrigger", PreOverrideLineProductTaxTrigger);
            /**
             * Represents the base class for all PostOverrideLineProductTax triggers.
             * @remarks All PostOverrideLineProductTax triggers should derive from this class.
             */
            PostOverrideLineProductTaxTrigger = /** @class */ (function (_super) {
                __extends(PostOverrideLineProductTaxTrigger, _super);
                function PostOverrideLineProductTaxTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostOverrideLineProductTaxTrigger;
            }(Triggers_12.NonCancelableTriggerBase));
            exports_55("PostOverrideLineProductTaxTrigger", PostOverrideLineProductTaxTrigger);
            /**
             * Represents the base class for all PreOverrideTransactionTax triggers.
             * @remarks All PreOverrideTransactionTax triggers should derive from this class.
             */
            PreOverrideTransactionTaxTrigger = /** @class */ (function (_super) {
                __extends(PreOverrideTransactionTaxTrigger, _super);
                function PreOverrideTransactionTaxTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreOverrideTransactionTaxTrigger;
            }(Triggers_12.CancelableTriggerBase));
            exports_55("PreOverrideTransactionTaxTrigger", PreOverrideTransactionTaxTrigger);
            /**
             * Represents the base class for all PostOverrideTransactionTax triggers.
             * @remarks All PostOverrideTransactionTax triggers should derive from this class.
             */
            PostOverrideTransactionTaxTrigger = /** @class */ (function (_super) {
                __extends(PostOverrideTransactionTaxTrigger, _super);
                function PostOverrideTransactionTaxTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostOverrideTransactionTaxTrigger;
            }(Triggers_12.NonCancelableTriggerBase));
            exports_55("PostOverrideTransactionTaxTrigger", PostOverrideTransactionTaxTrigger);
        }
    };
});
System.register("PosApi/Extend/Triggers/TransactionTriggers", ["PosApi/Extend/Triggers/Triggers"], function (exports_56, context_56) {
    "use strict";
    var Triggers_13, BeginTransactionTrigger, PreConfirmReturnTransactionTrigger, PreReturnTransactionTrigger, PostReturnTransactionTrigger, PreEndTransactionTrigger, PostEndTransactionTrigger, PreVoidTransactionTrigger, PostVoidTransactionTrigger, PreSuspendTransactionTrigger, PostSuspendTransactionTrigger, PreRecallTransactionTrigger, PostRecallTransactionTrigger, PostCartCheckoutTrigger;
    var __moduleName = context_56 && context_56.id;
    return {
        setters: [
            function (Triggers_13_1) {
                Triggers_13 = Triggers_13_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all BeginTransaction triggers.
             * @remarks All BeginTransaction triggers should derive from this class.
             */
            BeginTransactionTrigger = /** @class */ (function (_super) {
                __extends(BeginTransactionTrigger, _super);
                function BeginTransactionTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return BeginTransactionTrigger;
            }(Triggers_13.NonCancelableTriggerBase));
            exports_56("BeginTransactionTrigger", BeginTransactionTrigger);
            /**
             * Represents the base class for all PreConfirmReturnTransaction triggers.
             * @remarks All PreConfirmReturnTransaction triggers should derive from this class.
             */
            PreConfirmReturnTransactionTrigger = /** @class */ (function (_super) {
                __extends(PreConfirmReturnTransactionTrigger, _super);
                function PreConfirmReturnTransactionTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreConfirmReturnTransactionTrigger;
            }(Triggers_13.CancelableTriggerBase));
            exports_56("PreConfirmReturnTransactionTrigger", PreConfirmReturnTransactionTrigger);
            /**
             * Represents the base class for all PreReturnTransaction triggers.
             * @remarks All PreReturnTransaction triggers should derive from this class.
             */
            PreReturnTransactionTrigger = /** @class */ (function (_super) {
                __extends(PreReturnTransactionTrigger, _super);
                function PreReturnTransactionTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreReturnTransactionTrigger;
            }(Triggers_13.CancelableTriggerBase));
            exports_56("PreReturnTransactionTrigger", PreReturnTransactionTrigger);
            /**
             * Represents the base class for all PostReturnTransaction triggers.
             * @remarks All PostReturnTransaction triggers should derive from this class.
             */
            PostReturnTransactionTrigger = /** @class */ (function (_super) {
                __extends(PostReturnTransactionTrigger, _super);
                function PostReturnTransactionTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostReturnTransactionTrigger;
            }(Triggers_13.NonCancelableTriggerBase));
            exports_56("PostReturnTransactionTrigger", PostReturnTransactionTrigger);
            /**
             * Represents the base class for all PreEndTransaction triggers.
             * @remarks All PreEndTransaction triggers should derive from this class.
             */
            PreEndTransactionTrigger = /** @class */ (function (_super) {
                __extends(PreEndTransactionTrigger, _super);
                function PreEndTransactionTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreEndTransactionTrigger;
            }(Triggers_13.CancelableTriggerBase));
            exports_56("PreEndTransactionTrigger", PreEndTransactionTrigger);
            /**
             * Represents the base class for all PostEndTransaction triggers.
             * @remarks All PostEndTransaction triggers should derive from this class.
             */
            PostEndTransactionTrigger = /** @class */ (function (_super) {
                __extends(PostEndTransactionTrigger, _super);
                function PostEndTransactionTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostEndTransactionTrigger;
            }(Triggers_13.NonCancelableTriggerBase));
            exports_56("PostEndTransactionTrigger", PostEndTransactionTrigger);
            /**
             * Represents the base class for all PreVoidTransaction triggers.
             * @remarks All PreVoidTransaction triggers should derive from this class.
             * @remarks These triggers will be executed after the user confirms they want to void the transaction, but prior to voiding the transaction.
             */
            PreVoidTransactionTrigger = /** @class */ (function (_super) {
                __extends(PreVoidTransactionTrigger, _super);
                function PreVoidTransactionTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreVoidTransactionTrigger;
            }(Triggers_13.CancelableTriggerBase));
            exports_56("PreVoidTransactionTrigger", PreVoidTransactionTrigger);
            /**
             * Represents the base class for all PostVoidTransaction triggers.
             * @remarks All PostVoidTransaction triggers should derive from this class.
             */
            PostVoidTransactionTrigger = /** @class */ (function (_super) {
                __extends(PostVoidTransactionTrigger, _super);
                function PostVoidTransactionTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostVoidTransactionTrigger;
            }(Triggers_13.NonCancelableTriggerBase));
            exports_56("PostVoidTransactionTrigger", PostVoidTransactionTrigger);
            /**
             * Represents the base class for all PreSuspendTransaction triggers.
             * @remarks All PreSuspendTransaction triggers should derive from this class.
             */
            PreSuspendTransactionTrigger = /** @class */ (function (_super) {
                __extends(PreSuspendTransactionTrigger, _super);
                function PreSuspendTransactionTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreSuspendTransactionTrigger;
            }(Triggers_13.CancelableTriggerBase));
            exports_56("PreSuspendTransactionTrigger", PreSuspendTransactionTrigger);
            /**
             * Represents the base class for all PostSuspendTransaction triggers.
             * @remarks All PostSuspendTransaction triggers should derive from this class.
             */
            PostSuspendTransactionTrigger = /** @class */ (function (_super) {
                __extends(PostSuspendTransactionTrigger, _super);
                function PostSuspendTransactionTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostSuspendTransactionTrigger;
            }(Triggers_13.NonCancelableTriggerBase));
            exports_56("PostSuspendTransactionTrigger", PostSuspendTransactionTrigger);
            /**
             * Represents the base class for all PreRecallTransaction triggers.
             * @remarks All PreRecallTransaction triggers should derive from this class.
             */
            PreRecallTransactionTrigger = /** @class */ (function (_super) {
                __extends(PreRecallTransactionTrigger, _super);
                function PreRecallTransactionTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PreRecallTransactionTrigger;
            }(Triggers_13.CancelableTriggerBase));
            exports_56("PreRecallTransactionTrigger", PreRecallTransactionTrigger);
            /**
             * Represents the base class for all PostRecallTransaction triggers.
             * @remarks All PostRecallTransaction triggers should derive from this class.
             */
            PostRecallTransactionTrigger = /** @class */ (function (_super) {
                __extends(PostRecallTransactionTrigger, _super);
                function PostRecallTransactionTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostRecallTransactionTrigger;
            }(Triggers_13.NonCancelableTriggerBase));
            exports_56("PostRecallTransactionTrigger", PostRecallTransactionTrigger);
            /**
             * Represents the base class for all PostCartCheckout triggers.
             * @remarks All PostCartCheckout triggers should derive from this class.
             */
            PostCartCheckoutTrigger = /** @class */ (function (_super) {
                __extends(PostCartCheckoutTrigger, _super);
                function PostCartCheckoutTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PostCartCheckoutTrigger;
            }(Triggers_13.NonCancelableTriggerBase));
            exports_56("PostCartCheckoutTrigger", PostCartCheckoutTrigger);
        }
    };
});
System.register("PosApi/Extend/Views/AddressAddEditView", ["PosApi/Extend/Views/CustomControls"], function (exports_57, context_57) {
    "use strict";
    var CustomControls_1, AddressAddEditCustomControlBase;
    var __moduleName = context_57 && context_57.id;
    return {
        setters: [
            function (CustomControls_1_1) {
                CustomControls_1 = CustomControls_1_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all extension controls on the Address add edit page.
             * @remarks Custom controls in extensions should derive from this class.
             */
            AddressAddEditCustomControlBase = /** @class */ (function (_super) {
                __extends(AddressAddEditCustomControlBase, _super);
                /**
                 * Creates a new instance of the AddressAddEditCustomControlBase class.
                 * @param {string} id The control identifier.
                 * @param {IAddressAddEditCustomControlContext} context The control context.
                 */
                function AddressAddEditCustomControlBase(id, context) {
                    var _this = _super.call(this, id, context) || this;
                    _this.context.messageChannel.addMessageHandler("AddressUpdated", function (data) {
                        if (Commerce.StringExtensions.compare(JSON.stringify(data.address), JSON.stringify(_this._address), false) !== 0) {
                            _this._address = data.address;
                            if (Commerce.ObjectExtensions.isFunction(_this.addressUpdatedHandler)) {
                                _this.addressUpdatedHandler(data);
                            }
                        }
                    });
                    _this._isVisible = false;
                    return _this;
                }
                Object.defineProperty(AddressAddEditCustomControlBase.prototype, "isVisible", {
                    /**
                     * Gets a value indicating whether or not the custom control is visible.
                     * @return {boolean} True if the custom control is visible. False otherwise.
                     */
                    get: function () {
                        return this._isVisible;
                    },
                    /**
                     * Sets a value indicating whether or not the custom control is visible.
                     * @param {boolean} value True if the custom control is visble. False otherwise.
                     */
                    set: function (value) {
                        if (value !== this._isVisible) {
                            this._isVisible = value;
                            this.context.messageChannel.sendMessage("VisibilityChanged", this._isVisible);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AddressAddEditCustomControlBase.prototype, "address", {
                    /**
                     * Gets the address.
                     * @return {Address} The address.
                     */
                    get: function () {
                        return Commerce.ObjectExtensions.clone(this._address);
                    },
                    /**
                     * Sets the address. Will send a message to POS core to notify it of the updated address.
                     * @param {ProxyEntities.Address} value Sets the address.
                     */
                    set: function (value) {
                        if (Commerce.StringExtensions.compare(JSON.stringify(value), JSON.stringify(this._address), false) !== 0) {
                            this._address = value;
                            var data = { address: this._address };
                            this.context.messageChannel.sendMessage("UpdateAddress", data);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                return AddressAddEditCustomControlBase;
            }(CustomControls_1.CustomControlBase));
            exports_57("AddressAddEditCustomControlBase", AddressAddEditCustomControlBase);
        }
    };
});
System.register("PosApi/Extend/Views/AppBarCommands", [], function (exports_58, context_58) {
    "use strict";
    var ExtensionCommandBase;
    var __moduleName = context_58 && context_58.id;
    return {
        setters: [],
        execute: function () {
            /**
             * Represents an extension command.
             */
            ExtensionCommandBase = /** @class */ (function () {
                /**
                 * Creates a new instance of the ExtensionCommandBase class.
                 * @param {IExtensionCommandContext<TMap>} context The command context.
                 */
                function ExtensionCommandBase(context) {
                    var _this = this;
                    if (Commerce.ObjectExtensions.isNullOrUndefined(context)) {
                        throw "Invalid parameters passed to the ExtensionCommandBase constructor: context is a required parameter.";
                    }
                    else if (Commerce.ObjectExtensions.isNullOrUndefined(context.messageChannel)) {
                        throw "Invalid parameters passed to the ExtensionCommandBase constructor: context must contain the message channel.";
                    }
                    this.extraClass = "";
                    this.id = "";
                    this.label = "";
                    this.context = context;
                    this._isProcessing = false;
                    this._canExecute = false;
                    this._isVisible = false;
                    this.context.messageChannel.addMessageHandler("Initialize", function (data) {
                        _this.init(data);
                    });
                    this.context.messageChannel.addMessageHandler("Dispose", function () {
                        _this.dispose();
                    });
                    this.context.messageChannel.addMessageHandler("Execute", function () {
                        _this.execute();
                    });
                    // Start the message channel to begin receiving messages.
                    this.context.messageChannel.start();
                }
                Object.defineProperty(ExtensionCommandBase.prototype, "isProcessing", {
                    /**
                     * Gets a value indicating whether or not the command is processing.
                     * @return {boolean} True if the command is processing. False otherwise.
                     */
                    get: function () {
                        return this._isProcessing;
                    },
                    /**
                     * Sets a value indicating whether or not the command is processing.
                     * @param {boolean} value True if the command is processing. False otherwise.
                     */
                    set: function (value) {
                        if (value !== this._isProcessing) {
                            this._isProcessing = value;
                            this.context.messageChannel.sendMessage("IsProcessingChanged", this._isProcessing);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExtensionCommandBase.prototype, "canExecute", {
                    /**
                     * Gets a value indicating whether or not the command is processing.
                     * @return {boolean} True if the command can execute. False otherwise.
                     */
                    get: function () {
                        return this._canExecute;
                    },
                    /**
                     * Sets a value indicating whether or not the command can execute.
                     * @param {boolean} value True if the command can execute. False otherwise.
                     */
                    set: function (value) {
                        if (value !== this._canExecute) {
                            this._canExecute = value;
                            this.context.messageChannel.sendMessage("CanExecuteChanged", this._canExecute);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExtensionCommandBase.prototype, "isVisible", {
                    /**
                     * Gets a value indicating whether or not the command is visible.
                     * @return {boolean} True if the command is visible. False otherwise.
                     */
                    get: function () {
                        return this._isVisible;
                    },
                    /**
                     * Sets a value indicating whether or not the command is visible.
                     * @param {boolean} value True if the command is visble. False otherwise.
                     */
                    set: function (value) {
                        if (value !== this._isVisible) {
                            this._isVisible = value;
                            this.context.messageChannel.sendMessage("VisibilityChanged", this._isVisible);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Disposes the command releasing its resources.
                 */
                ExtensionCommandBase.prototype.dispose = function () {
                    Commerce.ObjectExtensions.disposeAllProperties(this);
                };
                return ExtensionCommandBase;
            }());
            exports_58("ExtensionCommandBase", ExtensionCommandBase);
        }
    };
});
System.register("PosApi/Extend/Views/ViewControllers", [], function (exports_59, context_59) {
    "use strict";
    var ExtensionViewControllerBase;
    var __moduleName = context_59 && context_59.id;
    return {
        setters: [],
        execute: function () {
            /**
             * Represents an extension view controller base.
             */
            ExtensionViewControllerBase = /** @class */ (function () {
                /**
                 * Creates a new instance of the ExtensionViewControllerBase class.
                 * @param {IExtensionViewControllerContext<TMap>} context The view controller context.
                 */
                function ExtensionViewControllerBase(context) {
                    if (Commerce.ObjectExtensions.isNullOrUndefined(context)) {
                        throw "Invalid parameters passed to the ExtensionViewControllerBase constructor: context is a required parameter.";
                    }
                    else if (Commerce.ObjectExtensions.isNullOrUndefined(context.messageChannel)) {
                        throw "Invalid parameters passed to the ExtensionViewControllerBase constructor: context must contain the message channel.";
                    }
                    this.context = context;
                    // Start the message channel to begin receiving messages.
                    this.context.messageChannel.start();
                }
                return ExtensionViewControllerBase;
            }());
            exports_59("ExtensionViewControllerBase", ExtensionViewControllerBase);
        }
    };
});
System.register("PosApi/Extend/Views/CustomGridColumns", [], function (exports_60, context_60) {
    "use strict";
    var CustomGridColumnAlignment, CustomGridColumnBase;
    var __moduleName = context_60 && context_60.id;
    return {
        setters: [],
        execute: function () {
            exports_60("CustomGridColumnAlignment", CustomGridColumnAlignment = Commerce.Extensibility.CustomGridColumnAlignment);
            /**
             * The base class for grid custom column extension.
             */
            CustomGridColumnBase = /** @class */ (function () {
                /**
                 * Creates a new instance of the class.
                 * @param {ICustomGridColumnContext} context The extension context.
                 */
                function CustomGridColumnBase(context) {
                    this.context = context;
                }
                return CustomGridColumnBase;
            }());
            exports_60("CustomGridColumnBase", CustomGridColumnBase);
        }
    };
});
System.register("PosApi/Extend/Views/CustomGridItemSubfield", [], function (exports_61, context_61) {
    "use strict";
    var CustomGridItemSubfieldBase;
    var __moduleName = context_61 && context_61.id;
    return {
        setters: [],
        execute: function () {
            /**
             * The base class for custom grid item subfield extension.
             */
            CustomGridItemSubfieldBase = /** @class */ (function () {
                /**
                 * Creates a new instance of the class.
                 * @param {ICustomGridItemSubfieldContext} context The extension context.
                 */
                function CustomGridItemSubfieldBase(context) {
                    this.context = context;
                }
                return CustomGridItemSubfieldBase;
            }());
            exports_61("CustomGridItemSubfieldBase", CustomGridItemSubfieldBase);
        }
    };
});
System.register("PosApi/Extend/Views/CartView", ["PosApi/Extend/Views/ViewControllers", "PosApi/Extend/Views/CustomControls", "PosApi/Extend/Views/CustomGridColumns", "PosApi/Extend/Views/CustomGridItemSubfield"], function (exports_62, context_62) {
    "use strict";
    var ViewControllers_1, CustomControls_2, CustomGridColumns_1, CustomGridItemSubfield_1, CartExtensionViewControllerBase, CustomLinesGridColumnBase, CustomPaymentsGridColumnBase, CustomDeliveryGridColumnBase, CustomLinesGridItemSubfieldBase, CartViewCustomControlBase, CartViewTotalsPanelCustomFieldBase;
    var __moduleName = context_62 && context_62.id;
    return {
        setters: [
            function (ViewControllers_1_1) {
                ViewControllers_1 = ViewControllers_1_1;
            },
            function (CustomControls_2_1) {
                CustomControls_2 = CustomControls_2_1;
            },
            function (CustomGridColumns_1_1) {
                CustomGridColumns_1 = CustomGridColumns_1_1;
            },
            function (CustomGridItemSubfield_1_1) {
                CustomGridItemSubfield_1 = CustomGridItemSubfield_1_1;
            }
        ],
        execute: function () {
            /**
             * Represents the extenesion's cart view controller base class.
             * @remarks All view controller extensions for the cart view should derive from this class.
             */
            CartExtensionViewControllerBase = /** @class */ (function (_super) {
                __extends(CartExtensionViewControllerBase, _super);
                /**
                 * Creates a new instance of the CartExtensionViewControllerBase class.
                 * @param {IExtensionCartViewControllerContext} context The view controller context.
                 */
                function CartExtensionViewControllerBase(context) {
                    var _this = _super.call(this, context) || this;
                    _this.context.messageChannel.addMessageHandler("CartLineSelected", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.cartLineSelectedHandler)) {
                            _this.cartLineSelectedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("CartLineSelectionCleared", function () {
                        if (Commerce.ObjectExtensions.isFunction(_this.cartLineSelectionClearedHandler)) {
                            _this.cartLineSelectionClearedHandler();
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("TenderLineSelected", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.tenderLineSelectedHandler)) {
                            _this.tenderLineSelectedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("TenderLineSelectionCleared", function () {
                        if (Commerce.ObjectExtensions.isFunction(_this.tenderLineSelectionClearedHandler)) {
                            _this.tenderLineSelectionClearedHandler();
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("ProcessingAddItemOrCustomerChanged", function (processing) {
                        if (Commerce.ObjectExtensions.isFunction(_this.processingAddItemOrCustomerChangedHandler)) {
                            _this.processingAddItemOrCustomerChangedHandler(processing);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("CartChanged", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.cartChangedHandler)) {
                            _this.cartChangedHandler(data);
                        }
                    });
                    return _this;
                }
                return CartExtensionViewControllerBase;
            }(ViewControllers_1.ExtensionViewControllerBase));
            exports_62("CartExtensionViewControllerBase", CartExtensionViewControllerBase);
            /**
             * The base class for lines grid custom column extension.
             */
            CustomLinesGridColumnBase = /** @class */ (function (_super) {
                __extends(CustomLinesGridColumnBase, _super);
                function CustomLinesGridColumnBase() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return CustomLinesGridColumnBase;
            }(CustomGridColumns_1.CustomGridColumnBase));
            exports_62("CustomLinesGridColumnBase", CustomLinesGridColumnBase);
            /**
             * The base class for payments grid custom column extension.
             */
            CustomPaymentsGridColumnBase = /** @class */ (function (_super) {
                __extends(CustomPaymentsGridColumnBase, _super);
                function CustomPaymentsGridColumnBase() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return CustomPaymentsGridColumnBase;
            }(CustomGridColumns_1.CustomGridColumnBase));
            exports_62("CustomPaymentsGridColumnBase", CustomPaymentsGridColumnBase);
            /**
             * The base class for delivery grid custom column extension.
             */
            CustomDeliveryGridColumnBase = /** @class */ (function (_super) {
                __extends(CustomDeliveryGridColumnBase, _super);
                function CustomDeliveryGridColumnBase() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return CustomDeliveryGridColumnBase;
            }(CustomGridColumns_1.CustomGridColumnBase));
            exports_62("CustomDeliveryGridColumnBase", CustomDeliveryGridColumnBase);
            /**
             * The base class for lines grid custom column extension.
             */
            CustomLinesGridItemSubfieldBase = /** @class */ (function (_super) {
                __extends(CustomLinesGridItemSubfieldBase, _super);
                function CustomLinesGridItemSubfieldBase() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return CustomLinesGridItemSubfieldBase;
            }(CustomGridItemSubfield_1.CustomGridItemSubfieldBase));
            exports_62("CustomLinesGridItemSubfieldBase", CustomLinesGridItemSubfieldBase);
            /**
             * Represents the base class for all extension controls on the cart page.
             * @remarks Custom controls in extensions should derive from this class.
             */
            CartViewCustomControlBase = /** @class */ (function (_super) {
                __extends(CartViewCustomControlBase, _super);
                /**
                 * Creates a new instance of the CartViewCustomControlBase class.
                 * @param {string} id The control identifier.
                 * @param {ICartViewCustomControlContext} context The control context.
                 */
                function CartViewCustomControlBase(id, context) {
                    var _this = _super.call(this, id, context) || this;
                    _this.context.messageChannel.addMessageHandler("CartLineSelected", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.cartLineSelectedHandler)) {
                            _this.cartLineSelectedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("CartLineSelectionCleared", function () {
                        if (Commerce.ObjectExtensions.isFunction(_this.cartLineSelectionClearedHandler)) {
                            _this.cartLineSelectionClearedHandler();
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("TenderLineSelected", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.tenderLineSelectedHandler)) {
                            _this.tenderLineSelectedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("TenderLineSelectionCleared", function () {
                        if (Commerce.ObjectExtensions.isFunction(_this.tenderLineSelectionClearedHandler)) {
                            _this.tenderLineSelectionClearedHandler();
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("CartChanged", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.cartChangedHandler)) {
                            _this.cartChangedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("ProcessingAddItemOrCustomerChanged", function (processing) {
                        if (Commerce.ObjectExtensions.isFunction(_this.processingAddItemOrCustomerChangedHandler)) {
                            _this.processingAddItemOrCustomerChangedHandler(processing);
                        }
                    });
                    return _this;
                }
                return CartViewCustomControlBase;
            }(CustomControls_2.CustomControlBase));
            exports_62("CartViewCustomControlBase", CartViewCustomControlBase);
            /**
             * Represents the base class for all totals panel custom fields on the cart page.
             * @remarks Custom fields in extensions should derive from this class.
             */
            CartViewTotalsPanelCustomFieldBase = /** @class */ (function () {
                /**
                 * Creates a new instance of the class.
                 * @param {ICartViewTotalsPanelCustomFieldContext} context The extension context.
                 */
                function CartViewTotalsPanelCustomFieldBase(context) {
                    this.context = context;
                }
                return CartViewTotalsPanelCustomFieldBase;
            }());
            exports_62("CartViewTotalsPanelCustomFieldBase", CartViewTotalsPanelCustomFieldBase);
        }
    };
});
System.register("PosApi/Extend/Views/CustomerAddEditView", ["PosApi/Extend/Views/AppBarCommands", "PosApi/Extend/Views/CustomControls"], function (exports_63, context_63) {
    "use strict";
    var AppBarCommands_1, CustomControls_3, CustomerAddEditExtensionCommandBase, CustomerAddEditCustomControlBase;
    var __moduleName = context_63 && context_63.id;
    return {
        setters: [
            function (AppBarCommands_1_1) {
                AppBarCommands_1 = AppBarCommands_1_1;
            },
            function (CustomControls_3_1) {
                CustomControls_3 = CustomControls_3_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all extension commands on the customer add/edit page.
             * @remarks All commands added to the customer add/edit page should derive from this class.
             */
            CustomerAddEditExtensionCommandBase = /** @class */ (function (_super) {
                __extends(CustomerAddEditExtensionCommandBase, _super);
                /**
                 * Creates a new instance of the CustomerAddEditExtensionCommandBase class.
                 * @param {ICustomerAddEditExtensionCommandContext} context The command context.
                 */
                function CustomerAddEditExtensionCommandBase(context) {
                    var _this = _super.call(this, context) || this;
                    _this.context.messageChannel.addMessageHandler("Initialize", function (data) {
                        _this._customer = data.customer;
                    });
                    _this.context.messageChannel.addMessageHandler("CustomerUpdated", function (data) {
                        _this._customer = data.customer;
                        if (Commerce.ObjectExtensions.isFunction(_this.customerUpdatedHandler)) {
                            _this.customerUpdatedHandler(data);
                        }
                    });
                    return _this;
                }
                Object.defineProperty(CustomerAddEditExtensionCommandBase.prototype, "customer", {
                    /**
                     * Gets the customer.
                     * @return {Customer} The customer.
                     */
                    get: function () {
                        return Commerce.ObjectExtensions.clone(this._customer);
                    },
                    /**
                     * Sets the customer.
                     * @param {Customer} Sets the customer and notifies the customer add/edit view of the change.
                     */
                    set: function (value) {
                        if (Commerce.StringExtensions.compare(JSON.stringify(value), JSON.stringify(this._customer), false) !== 0) {
                            this._customer = value;
                            var data = { customer: this._customer };
                            this.context.messageChannel.sendMessage("CustomerChanged", data);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                return CustomerAddEditExtensionCommandBase;
            }(AppBarCommands_1.ExtensionCommandBase));
            exports_63("CustomerAddEditExtensionCommandBase", CustomerAddEditExtensionCommandBase);
            /**
             * Represents the base class for all extension controls on the add\edit customer page.
             * @remarks Custom controls in extensions should derive from this class.
             */
            CustomerAddEditCustomControlBase = /** @class */ (function (_super) {
                __extends(CustomerAddEditCustomControlBase, _super);
                /**
                 * Creates a new instance of the CustomerDetailCustomControlBase class.
                 * @param {string} id The control identifier.
                 * @param {CustomerDetailCustomControlBase} context The control context.
                 */
                function CustomerAddEditCustomControlBase(id, context) {
                    var _this = _super.call(this, id, context) || this;
                    _this.context.messageChannel.addMessageHandler("Initialize", function (data) {
                        _this._customer = data.customer;
                    });
                    _this.context.messageChannel.addMessageHandler("CustomerUpdated", function (data) {
                        _this._customer = data.customer;
                        if (Commerce.ObjectExtensions.isFunction(_this.customerUpdatedHandler)) {
                            _this.customerUpdatedHandler(data);
                        }
                    });
                    _this._isVisible = false;
                    return _this;
                }
                Object.defineProperty(CustomerAddEditCustomControlBase.prototype, "isVisible", {
                    /**
                     * Gets a value indicating whether or not the custom control is visible.
                     * @return {boolean} True if the custom control is visible. False otherwise.
                     */
                    get: function () {
                        return this._isVisible;
                    },
                    /**
                     * Sets a value indicating whether or not the custom control is visible.
                     * @param {boolean} value True if the custom control is visble. False otherwise.
                     */
                    set: function (value) {
                        if (value !== this._isVisible) {
                            this._isVisible = value;
                            this.context.messageChannel.sendMessage("VisibilityChanged", this._isVisible);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CustomerAddEditCustomControlBase.prototype, "customer", {
                    /**
                     * Gets the customer.
                     * @return {Customer} The customer.
                     */
                    get: function () {
                        return Commerce.ObjectExtensions.clone(this._customer);
                    },
                    /**
                     * Sets the customer.
                     * @param {Customer} Sets the customer and notifies the customer add/edit view of the change.
                     */
                    set: function (value) {
                        if (Commerce.StringExtensions.compare(JSON.stringify(value), JSON.stringify(this._customer), false) !== 0) {
                            this._customer = value;
                            var data = { customer: this._customer };
                            this.context.messageChannel.sendMessage("CustomerChanged", data);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                return CustomerAddEditCustomControlBase;
            }(CustomControls_3.CustomControlBase));
            exports_63("CustomerAddEditCustomControlBase", CustomerAddEditCustomControlBase);
        }
    };
});
System.register("PosApi/Extend/Views/CustomerDetailsView", ["PosApi/Extend/Views/AppBarCommands", "PosApi/Extend/Views/CustomControls"], function (exports_64, context_64) {
    "use strict";
    var AppBarCommands_2, CustomControls_4, CustomerDetailsExtensionCommandBase, CustomerDetailsCustomControlBase;
    var __moduleName = context_64 && context_64.id;
    return {
        setters: [
            function (AppBarCommands_2_1) {
                AppBarCommands_2 = AppBarCommands_2_1;
            },
            function (CustomControls_4_1) {
                CustomControls_4 = CustomControls_4_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all extension commands on the customer details page.
             * @remarks All commands added to the customer details page should derive from this class.
             */
            CustomerDetailsExtensionCommandBase = /** @class */ (function (_super) {
                __extends(CustomerDetailsExtensionCommandBase, _super);
                /**
                 * Creates a new instance of the CustomerDetailsExtensionCommandBase class.
                 * @param {IExtensionCommandContext<ICustomerDetailsToExtensionCommandMessageTypeMap>} context The command context.
                 */
                function CustomerDetailsExtensionCommandBase(context) {
                    var _this = _super.call(this, context) || this;
                    _this.context.messageChannel.addMessageHandler("AffiliationAdded", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.affiliationAddedHandler)) {
                            _this.affiliationAddedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("LoyaltyCardsLoaded", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.loyaltyCardsLoadedHandler)) {
                            _this.loyaltyCardsLoadedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("WishListsLoaded", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.wishListsLoadedHandler)) {
                            _this.wishListsLoadedHandler(data);
                        }
                    });
                    return _this;
                }
                return CustomerDetailsExtensionCommandBase;
            }(AppBarCommands_2.ExtensionCommandBase));
            exports_64("CustomerDetailsExtensionCommandBase", CustomerDetailsExtensionCommandBase);
            /**
             * Represents the base class for all extension controls on the customer details page.
             * @remarks Custom controls in extensions should derive from this class.
             */
            CustomerDetailsCustomControlBase = /** @class */ (function (_super) {
                __extends(CustomerDetailsCustomControlBase, _super);
                /**
                 * Creates a new instance of the CustomerDetailsCustomControlBase class.
                 * @param {string} id The control identifier.
                 * @param {ICustomerDetailsCustomControlContext} context The control context.
                 */
                function CustomerDetailsCustomControlBase(id, context) {
                    var _this = _super.call(this, id, context) || this;
                    _this._isVisible = false;
                    _this.context.messageChannel.addMessageHandler("AffiliationAdded", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.affiliationAddedHandler)) {
                            _this.affiliationAddedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("LoyaltyCardsLoaded", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.loyaltyCardsLoadedHandler)) {
                            _this.loyaltyCardsLoadedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("WishListsLoaded", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.wishListsLoadedHandler)) {
                            _this.wishListsLoadedHandler(data);
                        }
                    });
                    return _this;
                }
                Object.defineProperty(CustomerDetailsCustomControlBase.prototype, "isVisible", {
                    /**
                     * Gets a value indicating whether or not the custom control is visible.
                     * @return {boolean} True if the command is visible. False otherwise.
                     */
                    get: function () {
                        return this._isVisible;
                    },
                    /**
                     * Sets a value indicating whether or not the custom control is visible.
                     * @param {boolean} value True if the command is visble. False otherwise.
                     */
                    set: function (value) {
                        if (value !== this._isVisible) {
                            this._isVisible = value;
                            this.context.messageChannel.sendMessage("VisibilityChanged", this._isVisible);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                return CustomerDetailsCustomControlBase;
            }(CustomControls_4.CustomControlBase));
            exports_64("CustomerDetailsCustomControlBase", CustomerDetailsCustomControlBase);
        }
    };
});
System.register("PosApi/Extend/Views/CustomListColumns", [], function (exports_65, context_65) {
    "use strict";
    var __moduleName = context_65 && context_65.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("PosApi/Extend/Views/CustomSearchFilters", ["PosApi/Entities", "PosApi/TypeExtensions"], function (exports_66, context_66) {
    "use strict";
    var Entities_1, TypeExtensions_2, CustomSearchFilterDefinitionBase, CustomTextSearchFilterDefinitionBase;
    var __moduleName = context_66 && context_66.id;
    return {
        setters: [
            function (Entities_1_1) {
                Entities_1 = Entities_1_1;
            },
            function (TypeExtensions_2_1) {
                TypeExtensions_2 = TypeExtensions_2_1;
            }
        ],
        execute: function () {
            CustomSearchFilterDefinitionBase = /** @class */ (function () {
                /**
                 * Creates a new instance of the CustomSearchFilterDefinitionBase class.
                 * @param {ProxyEntities.SearchFilterType} filterType The filter type.
                 * @param {ISearchFilterDefinitionContext} context The search filter definition context.
                 */
                function CustomSearchFilterDefinitionBase(filterType, context) {
                    this.context = context;
                    this._filterType = filterType;
                }
                Object.defineProperty(CustomSearchFilterDefinitionBase.prototype, "filterType", {
                    /**
                     * Gets the search filter definition type.
                     * @returns {ProxyEntities.SearchFilterType} The search filter definition type.
                     */
                    get: function () {
                        return this._filterType;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CustomSearchFilterDefinitionBase.prototype, "key", {
                    /**
                     * Gets the search filter definition key.
                     * @returns {string} The search filter definition key.
                     */
                    get: function () {
                        return TypeExtensions_2.StringExtensions.format(CustomSearchFilterDefinitionBase.KEY_FORMAT_STRING, this.context.extensionPackageInfo.publisher, this.context.extensionPackageInfo.name, this.id);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CustomSearchFilterDefinitionBase.prototype, "label", {
                    /**
                     * Gets the search filter definition label.
                     * @returns {string} The search filter definition label.
                     */
                    get: function () {
                        return this.labelValue;
                    },
                    enumerable: true,
                    configurable: true
                });
                CustomSearchFilterDefinitionBase.KEY_FORMAT_STRING = "{0}_{1}_{2}";
                return CustomSearchFilterDefinitionBase;
            }());
            exports_66("CustomSearchFilterDefinitionBase", CustomSearchFilterDefinitionBase);
            /**
             * Represents the base class for all custom text search filter definitions.
             * @remarks All custom text search filter definitions should derive directly from this class.
             */
            CustomTextSearchFilterDefinitionBase = /** @class */ (function (_super) {
                __extends(CustomTextSearchFilterDefinitionBase, _super);
                /**
                 * Creates a new instance of the CustomTextSearchFilterDefinitionBase class.
                 * @param {ISearchFilterDefinitionContext} context The search filter definition context.
                 */
                function CustomTextSearchFilterDefinitionBase(context) {
                    return _super.call(this, Entities_1.ProxyEntities.SearchFilterType.Text, context) || this;
                }
                return CustomTextSearchFilterDefinitionBase;
            }(CustomSearchFilterDefinitionBase));
            exports_66("CustomTextSearchFilterDefinitionBase", CustomTextSearchFilterDefinitionBase);
        }
    };
});
System.register("PosApi/Extend/Views/FulfillmentLineView", ["PosApi/Extend/Views/AppBarCommands"], function (exports_67, context_67) {
    "use strict";
    var AppBarCommands_3, FulfillmentLineExtensionCommandBase;
    var __moduleName = context_67 && context_67.id;
    return {
        setters: [
            function (AppBarCommands_3_1) {
                AppBarCommands_3 = AppBarCommands_3_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all extension commands on the FulfillmentLine page.
             * @remarks All commands added to the FulfillmentLine page should derive from this class.
             */
            FulfillmentLineExtensionCommandBase = /** @class */ (function (_super) {
                __extends(FulfillmentLineExtensionCommandBase, _super);
                /**
                 * Creates a new instance of the FulfillmentLineExtensionCommandBase class.
                 * @param {IFulfillmentLineExtensionCommandContext} context The command context.
                 */
                function FulfillmentLineExtensionCommandBase(context) {
                    var _this = _super.call(this, context) || this;
                    _this.context.messageChannel.addMessageHandler("FulfillmentLinesSelected", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.fulfillmentLinesSelectionHandler)) {
                            _this.fulfillmentLinesSelectionHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("FulfillmentLinesSelectionCleared", function () {
                        if (Commerce.ObjectExtensions.isFunction(_this.fulfillmentLinesSelectionClearedHandler)) {
                            _this.fulfillmentLinesSelectionClearedHandler();
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("PackingSlipSelected", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.packingSlipSelectedHandler)) {
                            _this.packingSlipSelectedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("PackingSlipSelectionCleared", function () {
                        if (Commerce.ObjectExtensions.isFunction(_this.packingSlipSelectionClearedHandler)) {
                            _this.packingSlipSelectionClearedHandler();
                        }
                    });
                    return _this;
                }
                /**
                 * Refreshes the fulfillment lines shown on the page.
                 */
                FulfillmentLineExtensionCommandBase.prototype.refreshFulfillmentLines = function () {
                    this.context.messageChannel.sendMessage("RefreshFulfillmentLines", undefined);
                };
                return FulfillmentLineExtensionCommandBase;
            }(AppBarCommands_3.ExtensionCommandBase));
            exports_67("FulfillmentLineExtensionCommandBase", FulfillmentLineExtensionCommandBase);
        }
    };
});
System.register("PosApi/Extend/Views/MenuCommands", [], function (exports_68, context_68) {
    "use strict";
    var ExtensionMenuCommandBase;
    var __moduleName = context_68 && context_68.id;
    return {
        setters: [],
        execute: function () {
            /**
             * Represents the base class for all extension menu commands.
             * Extension menu commands are used to add aditional items to existing POS menu controls that support extensions.
             */
            ExtensionMenuCommandBase = /** @class */ (function () {
                /**
                 * Creates a new instance of the ExtensionMenuCommandBase class.
                 * @param {IExtensionMenuCommandContext<TCommandToPageMap, TPageToCommandMap>} context The command context.
                 */
                function ExtensionMenuCommandBase(context) {
                    var _this = this;
                    if (Commerce.ObjectExtensions.isNullOrUndefined(context)) {
                        throw "Invalid parameters passed to the ExtensionMenuCommandBase constructor: context is a required parameter.";
                    }
                    else if (Commerce.ObjectExtensions.isNullOrUndefined(context.messageChannel)) {
                        throw "Invalid parameters passed to the ExtensionMenuCommandBase constructor: context must contain the message channel.";
                    }
                    this.context = context;
                    this._isProcessing = false;
                    this._canExecute = false;
                    this.context.messageChannel.addMessageHandler("Initialize", function (data) {
                        _this.init(data);
                    });
                    this.context.messageChannel.addMessageHandler("Dispose", function () {
                        _this.dispose();
                    });
                    this.context.messageChannel.addMessageHandler("Execute", function () {
                        _this.execute();
                    });
                    // Start the message channel to begin receiving messages.
                    this.context.messageChannel.start();
                }
                Object.defineProperty(ExtensionMenuCommandBase.prototype, "isProcessing", {
                    /**
                     * Gets a value indicating whether or not the command is processing.
                     * @return {boolean} True if the command is processing. False otherwise.
                     */
                    get: function () {
                        return this._isProcessing;
                    },
                    /**
                     * Sets a value indicating whether or not the command is processing.
                     * @param {boolean} value True if the command is processing. False otherwise.
                     */
                    set: function (value) {
                        if (value !== this._isProcessing) {
                            this._isProcessing = value;
                            this.context.messageChannel.sendMessage("IsProcessingChanged", this._isProcessing);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExtensionMenuCommandBase.prototype, "canExecute", {
                    /**
                     * Gets a value indicating whether or not the command is processing.
                     * @return {boolean} True if the command can execute. False otherwise.
                     */
                    get: function () {
                        return this._canExecute;
                    },
                    /**
                     * Sets a value indicating whether or not the command can execute.
                     * @param {boolean} value True if the command can execute. False otherwise.
                     */
                    set: function (value) {
                        if (value !== this._canExecute) {
                            this._canExecute = value;
                            this.context.messageChannel.sendMessage("CanExecuteChanged", this._canExecute);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Disposes the command releasing its resources.
                 */
                ExtensionMenuCommandBase.prototype.dispose = function () {
                    Commerce.ObjectExtensions.disposeAllProperties(this);
                };
                return ExtensionMenuCommandBase;
            }());
            exports_68("ExtensionMenuCommandBase", ExtensionMenuCommandBase);
        }
    };
});
System.register("PosApi/Extend/Views/InventoryLookupMatrixView", ["PosApi/Extend/Views/MenuCommands"], function (exports_69, context_69) {
    "use strict";
    var MenuCommands_1, InventoryLookupMatrixExtensionMenuCommandBase;
    var __moduleName = context_69 && context_69.id;
    return {
        setters: [
            function (MenuCommands_1_1) {
                MenuCommands_1 = MenuCommands_1_1;
            }
        ],
        execute: function () {
            /* tslint:enable:max-line-length */
            /**
             * Represents the base class for all extension menu commands on the InventoryLookupMatrixView.
             */
            InventoryLookupMatrixExtensionMenuCommandBase = /** @class */ (function (_super) {
                __extends(InventoryLookupMatrixExtensionMenuCommandBase, _super);
                /**
                 * Creates a new instance of the InventoryLookupMatrixExtensionMenuCommandBase class.
                 * @param {IInventoryLookupMatrixExtensionMenuCommandContext} context The menu command context.
                 * @remarks All commands added to the inventory lookup matrix page should derive from this class.
                 */
                function InventoryLookupMatrixExtensionMenuCommandBase(context) {
                    var _this = _super.call(this, context) || this;
                    _this.context.messageChannel.addMessageHandler("Initialize", function (data) {
                        _this.init(data);
                    });
                    _this.context.messageChannel.addMessageHandler("ItemAvailabilitySelected", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.itemAvailabilitySelectedHandler)) {
                            _this.itemAvailabilitySelectedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("StoreChanged", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.itemAvailabilitySelectedHandler)) {
                            _this.storeChangedHandler(data);
                        }
                    });
                    return _this;
                }
                return InventoryLookupMatrixExtensionMenuCommandBase;
            }(MenuCommands_1.ExtensionMenuCommandBase));
            exports_69("InventoryLookupMatrixExtensionMenuCommandBase", InventoryLookupMatrixExtensionMenuCommandBase);
        }
    };
});
System.register("PosApi/Extend/Views/InventoryLookupView", ["PosApi/Extend/Views/AppBarCommands"], function (exports_70, context_70) {
    "use strict";
    var AppBarCommands_4, InventoryLookupExtensionCommandBase;
    var __moduleName = context_70 && context_70.id;
    return {
        setters: [
            function (AppBarCommands_4_1) {
                AppBarCommands_4 = AppBarCommands_4_1;
            }
        ],
        execute: function () {
            InventoryLookupExtensionCommandBase = /** @class */ (function (_super) {
                __extends(InventoryLookupExtensionCommandBase, _super);
                /**
                 * Creates a new instance of the InventoryLookupExtensionCommandBase class.
                 * @param {IInventoryLookupExtensionCommandContext} context The command context.
                 * @remarks All commands added to the inventory lookup page should derive from this class.
                 */
                function InventoryLookupExtensionCommandBase(context) {
                    var _this = _super.call(this, context) || this;
                    _this.context.messageChannel.addMessageHandler("ProductChanged", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.productChangedHandler)) {
                            _this.productChangedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("LocationSelected", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.locationSelectionHandler)) {
                            _this.locationSelectionHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("LocationSelectionCleared", function () {
                        if (Commerce.ObjectExtensions.isFunction(_this.locationSelectionClearedHandler)) {
                            _this.locationSelectionClearedHandler();
                        }
                    });
                    return _this;
                }
                return InventoryLookupExtensionCommandBase;
            }(AppBarCommands_4.ExtensionCommandBase));
            exports_70("InventoryLookupExtensionCommandBase", InventoryLookupExtensionCommandBase);
        }
    };
});
System.register("PosApi/Extend/Views/ManageShiftsView", ["PosApi/Extend/Views/AppBarCommands"], function (exports_71, context_71) {
    "use strict";
    var AppBarCommands_5, ManageShiftsExtensionCommandBase;
    var __moduleName = context_71 && context_71.id;
    return {
        setters: [
            function (AppBarCommands_5_1) {
                AppBarCommands_5 = AppBarCommands_5_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all extension commands on the  ManageShifts page.
             * @remarks All commands added to the  ManageShifts page should derive from this class.
             */
            ManageShiftsExtensionCommandBase = /** @class */ (function (_super) {
                __extends(ManageShiftsExtensionCommandBase, _super);
                /**
                 * Creates a new instance of the ManageShiftsExtensionCommandBase class.
                 * @param {IManageShiftsExtensionCommandContext} context The command context.
                 */
                function ManageShiftsExtensionCommandBase(context) {
                    var _this = _super.call(this, context) || this;
                    _this.context.messageChannel.addMessageHandler("ShiftSelected", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.shiftSelectedHandler)) {
                            _this.shiftSelectedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("ShiftSelectionCleared", function () {
                        if (Commerce.ObjectExtensions.isFunction(_this.shiftSelectionClearedHandler)) {
                            _this.shiftSelectionClearedHandler();
                        }
                    });
                    return _this;
                }
                return ManageShiftsExtensionCommandBase;
            }(AppBarCommands_5.ExtensionCommandBase));
            exports_71("ManageShiftsExtensionCommandBase", ManageShiftsExtensionCommandBase);
        }
    };
});
System.register("PosApi/Extend/Views/PaymentView", ["PosApi/Extend/Views/AppBarCommands"], function (exports_72, context_72) {
    "use strict";
    var AppBarCommands_6, PaymentViewExtensionCommandBase;
    var __moduleName = context_72 && context_72.id;
    return {
        setters: [
            function (AppBarCommands_6_1) {
                AppBarCommands_6 = AppBarCommands_6_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all extension commands on the customer add/edit page.
             * @remarks All commands added to the customer add/edit page should derive from this class.
             */
            PaymentViewExtensionCommandBase = /** @class */ (function (_super) {
                __extends(PaymentViewExtensionCommandBase, _super);
                /**
                 * Creates a new instance of the PaymentExtensionCommandBase class.
                 * @param {IPaymentExtensionCommandContext} context The command context.
                 */
                function PaymentViewExtensionCommandBase(context) {
                    var _this = _super.call(this, context) || this;
                    _this.context.messageChannel.addMessageHandler("PaymentCardChanged", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.paymentViewPaymentCardChangedHandler)) {
                            _this.paymentViewPaymentCardChangedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("PaymentAmountChanged", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.paymentViewAmountChangedHandler)) {
                            _this.paymentViewAmountChangedHandler(data);
                        }
                    });
                    return _this;
                }
                return PaymentViewExtensionCommandBase;
            }(AppBarCommands_6.ExtensionCommandBase));
            exports_72("PaymentViewExtensionCommandBase", PaymentViewExtensionCommandBase);
        }
    };
});
System.register("PosApi/Extend/Views/PickingAndReceivingDetailsView", ["PosApi/Extend/Views/AppBarCommands"], function (exports_73, context_73) {
    "use strict";
    var AppBarCommands_7, PickingAndReceivingDetailsExtensionCommandBase;
    var __moduleName = context_73 && context_73.id;
    return {
        setters: [
            function (AppBarCommands_7_1) {
                AppBarCommands_7 = AppBarCommands_7_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all extension commands on the picking and receiving details page.
             * @remarks All commands added to the picking and receiving details page should derive from this class.
             */
            PickingAndReceivingDetailsExtensionCommandBase = /** @class */ (function (_super) {
                __extends(PickingAndReceivingDetailsExtensionCommandBase, _super);
                /**
                 * Creates a new instance of the PickingAndReceivingDetailsExtensionCommandBase class.
                 * @param {IPickingAndReceivingDetailsExtensionCommandContext} context The command context.
                 */
                function PickingAndReceivingDetailsExtensionCommandBase(context) {
                    var _this = _super.call(this, context) || this;
                    _this.context.messageChannel.addMessageHandler("JournalSaved", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.journalSavedHandler)) {
                            _this.journalSavedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("JournalLineSelected", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.journalLineSelectedHandler)) {
                            _this.journalLineSelectedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("JournalLineSelectionCleared", function () {
                        if (Commerce.ObjectExtensions.isFunction(_this.journalLineSelectionClearedHandler)) {
                            _this.journalLineSelectionClearedHandler();
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("JournalLinesChanged", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.journalLinesChangedHandler)) {
                            _this.journalLinesChangedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("ReceiptSelected", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.receiptSelectionHandler)) {
                            _this.receiptSelectionHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("ReceiptSelectionCleared", function () {
                        if (Commerce.ObjectExtensions.isFunction(_this.receiptSelectionClearedHandler)) {
                            _this.receiptSelectionClearedHandler();
                        }
                    });
                    return _this;
                }
                return PickingAndReceivingDetailsExtensionCommandBase;
            }(AppBarCommands_7.ExtensionCommandBase));
            exports_73("PickingAndReceivingDetailsExtensionCommandBase", PickingAndReceivingDetailsExtensionCommandBase);
        }
    };
});
System.register("PosApi/Extend/Views/PriceCheckView", ["PosApi/Extend/Views/CustomControls"], function (exports_74, context_74) {
    "use strict";
    var CustomControls_5, PriceCheckCustomControlBase;
    var __moduleName = context_74 && context_74.id;
    return {
        setters: [
            function (CustomControls_5_1) {
                CustomControls_5 = CustomControls_5_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all extension controls on the price check view page.
             * @remarks Custom controls in extensions should derive from this class.
             */
            PriceCheckCustomControlBase = /** @class */ (function (_super) {
                __extends(PriceCheckCustomControlBase, _super);
                /**
                 * Creates a new instance of the PriceCheckCustomControlBase class.
                 * @param {string} id The control identifier.
                 * @param {IPriceCheckCustomControlContext} context The control context.
                 */
                function PriceCheckCustomControlBase(id, context) {
                    var _this = _super.call(this, id, context) || this;
                    _this.context.messageChannel.addMessageHandler("Initialize", function (state) {
                        if (Commerce.ObjectExtensions.isFunction(_this.init)) {
                            _this.init(state);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("PriceCheckCompleted", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.priceCheckCompletedHandler)) {
                            _this.priceCheckCompletedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("CustomerChanged", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.priceCheckCompletedHandler)) {
                            _this.customerChangedHandler(data);
                        }
                    });
                    _this._isVisible = false;
                    return _this;
                }
                Object.defineProperty(PriceCheckCustomControlBase.prototype, "isVisible", {
                    /**
                     * Gets a value indicating whether or not the custom control is visible.
                     * @return {boolean} True if the custom control is visible. False otherwise.
                     */
                    get: function () {
                        return this._isVisible;
                    },
                    /**
                     * Sets a value indicating whether or not the custom control is visible.
                     * @param {boolean} value True if the custom control is visible. False otherwise.
                     */
                    set: function (value) {
                        if (value !== this._isVisible) {
                            this._isVisible = value;
                            this.context.messageChannel.sendMessage("VisibilityChanged", this._isVisible);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                return PriceCheckCustomControlBase;
            }(CustomControls_5.CustomControlBase));
            exports_74("PriceCheckCustomControlBase", PriceCheckCustomControlBase);
        }
    };
});
System.register("PosApi/Extend/Views/ReportDetailsView", ["PosApi/Extend/Views/AppBarCommands"], function (exports_75, context_75) {
    "use strict";
    var AppBarCommands_8, ReportDetailsExtensionCommandBase;
    var __moduleName = context_75 && context_75.id;
    return {
        setters: [
            function (AppBarCommands_8_1) {
                AppBarCommands_8 = AppBarCommands_8_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all extension commands on the report details page.
             * @remarks All commands added to the report details page should derive from this class.
             */
            ReportDetailsExtensionCommandBase = /** @class */ (function (_super) {
                __extends(ReportDetailsExtensionCommandBase, _super);
                /**
                 * Creates a new instance of the ReportDetailsExtensionCommandBase class.
                 * @param {IReportDetailsExtensionCommandContext} context The command context.
                 */
                function ReportDetailsExtensionCommandBase(context) {
                    var _this = _super.call(this, context) || this;
                    _this.context.messageChannel.addMessageHandler("ReportDataLoadedData", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.reportDataLoadedDataHandler)) {
                            _this.reportDataLoadedDataHandler(data);
                        }
                    });
                    return _this;
                }
                return ReportDetailsExtensionCommandBase;
            }(AppBarCommands_8.ExtensionCommandBase));
            exports_75("ReportDetailsExtensionCommandBase", ReportDetailsExtensionCommandBase);
        }
    };
});
System.register("PosApi/Extend/Views/ResumeCartView", [], function (exports_76, context_76) {
    "use strict";
    var __moduleName = context_76 && context_76.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("PosApi/Extend/Views/ReturnTransactionView", ["PosApi/Extend/Views/AppBarCommands"], function (exports_77, context_77) {
    "use strict";
    var AppBarCommands_9, ReturnTransactionExtensionCommandBase;
    var __moduleName = context_77 && context_77.id;
    return {
        setters: [
            function (AppBarCommands_9_1) {
                AppBarCommands_9 = AppBarCommands_9_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all extension commands on the return transaction page.
             * @remarks All commands added to the return transaction page should derive from this class.
             */
            ReturnTransactionExtensionCommandBase = /** @class */ (function (_super) {
                __extends(ReturnTransactionExtensionCommandBase, _super);
                /**
                 * Creates a new instance of the ReturnTransactionExtensionCommandBase class.
                 * @param {IReturnTransactionExtensionCommandContext} context The command context.
                 */
                function ReturnTransactionExtensionCommandBase(context) {
                    var _this = _super.call(this, context) || this;
                    _this.context.messageChannel.addMessageHandler("TransactionLineSelected", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.transactionLineSelectedHandler)) {
                            _this.transactionLineSelectedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("TransactionLineSelectionCleared", function () {
                        if (Commerce.ObjectExtensions.isFunction(_this.transactionLineSelectionClearedHandler)) {
                            _this.transactionLineSelectionClearedHandler();
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("TransactionSelected", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.transactionSelectedHandler)) {
                            _this.transactionSelectedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("TransactionSelectionCleared", function () {
                        if (Commerce.ObjectExtensions.isFunction(_this.transactionSelectionClearedHandler)) {
                            _this.transactionSelectionClearedHandler();
                        }
                    });
                    return _this;
                }
                return ReturnTransactionExtensionCommandBase;
            }(AppBarCommands_9.ExtensionCommandBase));
            exports_77("ReturnTransactionExtensionCommandBase", ReturnTransactionExtensionCommandBase);
        }
    };
});
System.register("PosApi/Extend/Views/SearchOrdersView", ["PosApi/Extend/Views/AppBarCommands"], function (exports_78, context_78) {
    "use strict";
    var AppBarCommands_10, SearchOrdersExtensionCommandBase;
    var __moduleName = context_78 && context_78.id;
    return {
        setters: [
            function (AppBarCommands_10_1) {
                AppBarCommands_10 = AppBarCommands_10_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all extension commands on the search orders page.
             * @remarks All commands added to the search orders page should derive from this class.
             */
            SearchOrdersExtensionCommandBase = /** @class */ (function (_super) {
                __extends(SearchOrdersExtensionCommandBase, _super);
                /**
                 * Creates a new instance of the SearchOrdersExtensionCommandBase class.
                 * @param {ISearchOrdersExtensionCommandContext} context The command context.
                 */
                function SearchOrdersExtensionCommandBase(context) {
                    var _this = _super.call(this, context) || this;
                    _this.context.messageChannel.addMessageHandler("OrderSelected", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.orderSelectionHandler)) {
                            _this.orderSelectionHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("OrderSelectionCleared", function () {
                        if (Commerce.ObjectExtensions.isFunction(_this.orderSelectionClearedHandler)) {
                            _this.orderSelectionClearedHandler();
                        }
                    });
                    return _this;
                }
                return SearchOrdersExtensionCommandBase;
            }(AppBarCommands_10.ExtensionCommandBase));
            exports_78("SearchOrdersExtensionCommandBase", SearchOrdersExtensionCommandBase);
        }
    };
});
System.register("PosApi/Extend/Views/SearchPickingAndReceivingView", ["PosApi/Extend/Views/AppBarCommands"], function (exports_79, context_79) {
    "use strict";
    var AppBarCommands_11, SearchPickingAndReceivingExtensionCommandBase;
    var __moduleName = context_79 && context_79.id;
    return {
        setters: [
            function (AppBarCommands_11_1) {
                AppBarCommands_11 = AppBarCommands_11_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all extension commands on the search picking and receiving page.
             * @remarks All commands added to the search picking and receiving page should derive from this class.
             */
            SearchPickingAndReceivingExtensionCommandBase = /** @class */ (function (_super) {
                __extends(SearchPickingAndReceivingExtensionCommandBase, _super);
                /**
                 * Creates a new instance of the SearchPickingAndReceivingExtensionCommandBase class.
                 * @param {ISearchPickingAndReceivingExtensionCommandContext} context The command context.
                 */
                function SearchPickingAndReceivingExtensionCommandBase(context) {
                    var _this = _super.call(this, context) || this;
                    _this.context.messageChannel.addMessageHandler("OrderLineSelected", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.orderLineSelectedHandler)) {
                            _this.orderLineSelectedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("OrderLineSelectionCleared", function () {
                        if (Commerce.ObjectExtensions.isFunction(_this.orderLineSelectionClearedHandler)) {
                            _this.orderLineSelectionClearedHandler();
                        }
                    });
                    return _this;
                }
                return SearchPickingAndReceivingExtensionCommandBase;
            }(AppBarCommands_11.ExtensionCommandBase));
            exports_79("SearchPickingAndReceivingExtensionCommandBase", SearchPickingAndReceivingExtensionCommandBase);
        }
    };
});
System.register("PosApi/Extend/Views/SearchStockCountView", [], function (exports_80, context_80) {
    "use strict";
    var __moduleName = context_80 && context_80.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("PosApi/Extend/Views/SearchView", ["PosApi/Extend/Views/AppBarCommands"], function (exports_81, context_81) {
    "use strict";
    var AppBarCommands_12, ProductSearchExtensionCommandBase, CustomerSearchExtensionCommandBase;
    var __moduleName = context_81 && context_81.id;
    return {
        setters: [
            function (AppBarCommands_12_1) {
                AppBarCommands_12 = AppBarCommands_12_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all product search extension commands on the search page.
             * @remarks All product search commands added to the search page should derive from this class.
             */
            ProductSearchExtensionCommandBase = /** @class */ (function (_super) {
                __extends(ProductSearchExtensionCommandBase, _super);
                /**
                 * Creates a new instance of the ProductSearchExtensionCommandBase class.
                 * @param {IExtensionCommandContext<IProductSearchToExtensionCommandMessageTypeMap>} context The command context.
                 */
                function ProductSearchExtensionCommandBase(context) {
                    var _this = _super.call(this, context) || this;
                    _this.context.messageChannel.addMessageHandler("SearchResultsLoaded", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.searchResultsLoadedHandler)) {
                            _this.searchResultsLoadedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("SearchResultSelected", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.searchResultsSelectedHandler)) {
                            _this.searchResultsSelectedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("SearchResultSelectionCleared", function () {
                        if (Commerce.ObjectExtensions.isFunction(_this.searchResultSelectionClearedHandler)) {
                            _this.searchResultSelectionClearedHandler();
                        }
                    });
                    return _this;
                }
                return ProductSearchExtensionCommandBase;
            }(AppBarCommands_12.ExtensionCommandBase));
            exports_81("ProductSearchExtensionCommandBase", ProductSearchExtensionCommandBase);
            /**
             * Represents the base class for all customer search extension commands on the search page.
             * @remarks All customer search commands added to the search page should derive from this class.
             */
            CustomerSearchExtensionCommandBase = /** @class */ (function (_super) {
                __extends(CustomerSearchExtensionCommandBase, _super);
                /**
                 * Creates a new instance of the CustomerSearchExtensionCommandBase class.
                 * @param {IExtensionCommandContext<ICustomerSearchToExtensionCommandMessageTypeMap>} context The command context.
                 */
                function CustomerSearchExtensionCommandBase(context) {
                    var _this = _super.call(this, context) || this;
                    _this.context.messageChannel.addMessageHandler("SearchResultsLoaded", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.searchResultsLoadedHandler)) {
                            _this.searchResultsLoadedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("SearchResultSelected", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.searchResultsSelectedHandler)) {
                            _this.searchResultsSelectedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("SearchResultSelectionCleared", function () {
                        if (Commerce.ObjectExtensions.isFunction(_this.searchResultSelectionClearedHandler)) {
                            _this.searchResultSelectionClearedHandler();
                        }
                    });
                    return _this;
                }
                return CustomerSearchExtensionCommandBase;
            }(AppBarCommands_12.ExtensionCommandBase));
            exports_81("CustomerSearchExtensionCommandBase", CustomerSearchExtensionCommandBase);
        }
    };
});
System.register("PosApi/Extend/Views/ShowJournalView", ["PosApi/Extend/Views/AppBarCommands", "PosApi/Extend/Views/CustomGridItemSubfield"], function (exports_82, context_82) {
    "use strict";
    var AppBarCommands_13, CustomGridItemSubfield_2, ShowJournalExtensionCommandBase, CustomLinesGridItemSubfieldBase;
    var __moduleName = context_82 && context_82.id;
    return {
        setters: [
            function (AppBarCommands_13_1) {
                AppBarCommands_13 = AppBarCommands_13_1;
            },
            function (CustomGridItemSubfield_2_1) {
                CustomGridItemSubfield_2 = CustomGridItemSubfield_2_1;
            }
        ],
        execute: function () {
            ShowJournalExtensionCommandBase = /** @class */ (function (_super) {
                __extends(ShowJournalExtensionCommandBase, _super);
                /**
                 * Creates a new instance of the ShowJournalExtensionCommandBase class.
                 * @param {IExtensionCommandContext<IShowJournalToExtensionCommandMessageTypeMap>} context The command context.
                 * @remarks All commands added to the show journal page should derive from this class.
                 */
                function ShowJournalExtensionCommandBase(context) {
                    var _this = _super.call(this, context) || this;
                    _this.context.messageChannel.addMessageHandler("JournalSelected", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.journalSelectionHandler)) {
                            _this.journalSelectionHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("JournalSelectionCleared", function () {
                        if (Commerce.ObjectExtensions.isFunction(_this.journalSelectionClearedHandler)) {
                            _this.journalSelectionClearedHandler();
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("ReceiptSelected", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.receiptSelectionHandler)) {
                            _this.receiptSelectionHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("ReceiptSelectionCleared", function () {
                        if (Commerce.ObjectExtensions.isFunction(_this.receiptSelectionClearedHandler)) {
                            _this.receiptSelectionClearedHandler();
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("JournalTransactionsLoaded", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.journalTransactionsLoadedHandler)) {
                            _this.journalTransactionsLoadedHandler(data);
                        }
                    });
                    return _this;
                }
                return ShowJournalExtensionCommandBase;
            }(AppBarCommands_13.ExtensionCommandBase));
            exports_82("ShowJournalExtensionCommandBase", ShowJournalExtensionCommandBase);
            /**
             * The base class for lines grid custom column extension.
             */
            CustomLinesGridItemSubfieldBase = /** @class */ (function (_super) {
                __extends(CustomLinesGridItemSubfieldBase, _super);
                function CustomLinesGridItemSubfieldBase() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return CustomLinesGridItemSubfieldBase;
            }(CustomGridItemSubfield_2.CustomGridItemSubfieldBase));
            exports_82("CustomLinesGridItemSubfieldBase", CustomLinesGridItemSubfieldBase);
        }
    };
});
System.register("PosApi/Extend/Views/SimpleProductDetailsView", ["PosApi/Extend/Views/AppBarCommands", "PosApi/Extend/Views/CustomControls"], function (exports_83, context_83) {
    "use strict";
    var AppBarCommands_14, CustomControls_6, SimpleProductDetailsExtensionCommandBase, SimpleProductDetailsCustomControlBase;
    var __moduleName = context_83 && context_83.id;
    return {
        setters: [
            function (AppBarCommands_14_1) {
                AppBarCommands_14 = AppBarCommands_14_1;
            },
            function (CustomControls_6_1) {
                CustomControls_6 = CustomControls_6_1;
            }
        ],
        execute: function () {
            SimpleProductDetailsExtensionCommandBase = /** @class */ (function (_super) {
                __extends(SimpleProductDetailsExtensionCommandBase, _super);
                /**
                 * Creates a new instance of the SimpleProductDetailsExtensionCommandBase class.
                 * @param {IExtensionCommandContext<ISimpleProductDetailsToExtensionCommandMessageTypeMap>} context The command context.
                 * @remarks All commands added to the simple product details page should derive from this class.
                 */
                function SimpleProductDetailsExtensionCommandBase(context) {
                    var _this = _super.call(this, context) || this;
                    _this.context.messageChannel.addMessageHandler("ProductChanged", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.productChangedHandler)) {
                            _this.productChangedHandler(data);
                        }
                    });
                    return _this;
                }
                return SimpleProductDetailsExtensionCommandBase;
            }(AppBarCommands_14.ExtensionCommandBase));
            exports_83("SimpleProductDetailsExtensionCommandBase", SimpleProductDetailsExtensionCommandBase);
            /**
             * Represents the base class for all extension controls on the simple product details page.
             * @remarks Custom controls in extensions should derive from this class.
             */
            SimpleProductDetailsCustomControlBase = /** @class */ (function (_super) {
                __extends(SimpleProductDetailsCustomControlBase, _super);
                /**
                 * Creates a new instance of the SimpleProductDetailsCustomControlBase class.
                 * @param {string} id The control identifier.
                 * @param {ISimpleProductDetailsCustomControlContext} context The control context.
                 */
                function SimpleProductDetailsCustomControlBase(id, context) {
                    var _this = _super.call(this, id, context) || this;
                    _this.context.messageChannel.addMessageHandler("ProductChanged", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.productChangedHandler)) {
                            _this.productChangedHandler(data);
                        }
                    });
                    _this._isVisible = false;
                    return _this;
                }
                Object.defineProperty(SimpleProductDetailsCustomControlBase.prototype, "isVisible", {
                    /**
                     * Gets a value indicating whether or not the custom control is visible.
                     * @return {boolean} True if the custom control is visible. False otherwise.
                     */
                    get: function () {
                        return this._isVisible;
                    },
                    /**
                     * Sets a value indicating whether or not the custom control is visible.
                     * @param {boolean} value True if the custom control is visble. False otherwise.
                     */
                    set: function (value) {
                        if (value !== this._isVisible) {
                            this._isVisible = value;
                            this.context.messageChannel.sendMessage("VisibilityChanged", this._isVisible);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                return SimpleProductDetailsCustomControlBase;
            }(CustomControls_6.CustomControlBase));
            exports_83("SimpleProductDetailsCustomControlBase", SimpleProductDetailsCustomControlBase);
        }
    };
});
System.register("PosApi/Extend/Views/StockCountDetailsView", ["PosApi/Extend/Views/AppBarCommands"], function (exports_84, context_84) {
    "use strict";
    var AppBarCommands_15, StockCountDetailsExtensionCommandBase;
    var __moduleName = context_84 && context_84.id;
    return {
        setters: [
            function (AppBarCommands_15_1) {
                AppBarCommands_15 = AppBarCommands_15_1;
            }
        ],
        execute: function () {
            /**
             * Represents the base class for all extension commands on the stock count details page.
             * @remarks All commands added to the stock count details page should derive from this class.
             */
            StockCountDetailsExtensionCommandBase = /** @class */ (function (_super) {
                __extends(StockCountDetailsExtensionCommandBase, _super);
                /**
                 * Creates a new instance of the StockCountDetailsExtensionCommandBase class.
                 * @param {IStockCountDetailsExtensionCommandContext} context The command context.
                 */
                function StockCountDetailsExtensionCommandBase(context) {
                    var _this = _super.call(this, context) || this;
                    _this.context.messageChannel.addMessageHandler("JournalLineSelected", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.journalLineSelectedHandler)) {
                            _this.journalLineSelectedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("JournalLineSelectionCleared", function () {
                        if (Commerce.ObjectExtensions.isFunction(_this.journalLineSelectionClearedHandler)) {
                            _this.journalLineSelectionClearedHandler();
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("JournalLinesUpdated", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.journalLinesUpdatedHandler)) {
                            _this.journalLinesUpdatedHandler(data);
                        }
                    });
                    _this.context.messageChannel.addMessageHandler("JournalSaved", function (data) {
                        if (Commerce.ObjectExtensions.isFunction(_this.journalSavedHandler)) {
                            _this.journalSavedHandler(data);
                        }
                    });
                    return _this;
                }
                return StockCountDetailsExtensionCommandBase;
            }(AppBarCommands_15.ExtensionCommandBase));
            exports_84("StockCountDetailsExtensionCommandBase", StockCountDetailsExtensionCommandBase);
        }
    };
});
System.register("PosApi/Extend/Views/TransferOrderDetailsView", [], function (exports_85, context_85) {
    "use strict";
    var __moduleName = context_85 && context_85.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
//# sourceMappingURL=Pos.Api.js.map
// SIG // Begin signature block
// SIG // MIIkkAYJKoZIhvcNAQcCoIIkgTCCJH0CAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // HXahqvVRkHC5Q76KnI0Nnt99JKTytXMNIZDp2ydCCfqg
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
// SIG // SEXAQsmbdlsKgEhr/Xmfwb1tbWrJUnMTDXpQzTGCFmcw
// SIG // ghZjAgEBMIGVMH4xCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xKDAm
// SIG // BgNVBAMTH01pY3Jvc29mdCBDb2RlIFNpZ25pbmcgUENB
// SIG // IDIwMTECEzMAAAEDXiUcmR+jHrgAAAAAAQMwDQYJYIZI
// SIG // AWUDBAIBBQCggdAwGQYJKoZIhvcNAQkDMQwGCisGAQQB
// SIG // gjcCAQQwHAYKKwYBBAGCNwIBCzEOMAwGCisGAQQBgjcC
// SIG // ARUwLwYJKoZIhvcNAQkEMSIEIAuHIqUl/dDiuZPyReKi
// SIG // NMKEk4ml1FyI8h1sLdu6jxRmMGQGCisGAQQBgjcCAQwx
// SIG // VjBUoDaANABnAGwAbwBiAGEAbABpAHoAZQAuAGMAdQBs
// SIG // AHQAdQByAGUALgBsAHYALQBMAFYALgBqAHOhGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBALI1vX5TOssqXVji8LIAKVb6inNxHiwHTC5t
// SIG // HWt90GGf18kVzEo8yoTnkwwkWvvmzxRJCfuiqnNFjFmG
// SIG // hmr1axqCsEzmr+EUf33liFH9Ap+sl/nB0ezon5leEimF
// SIG // 7EPgtxTaWI+W+YWkzvtvRUmz2+bNR/iDmzmn7UFTocgi
// SIG // rtb4kSHKrbfFFi+1VeB4SBvLi4ao+OI3LKiuQlCEyAOu
// SIG // rb8HZfWoopYrW5ndhQIg3vMw/I62h9I0btcQ7srkBsuP
// SIG // wZkdBjrUyoyp32hUduxnihgl/yXexerVSv+fIBs9/dnw
// SIG // 891Z/pj1b8WziLSUJTBfJuQrqnLn8g0RNSu9YuSBct6h
// SIG // ghPPMIITywYKKwYBBAGCNwMDATGCE7swghO3BgkqhkiG
// SIG // 9w0BBwKgghOoMIITpAIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBWAYLKoZIhvcNAQkQAQSgggFHBIIBQzCCAT8CAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQg6uJz
// SIG // /vo4H37/ISWA7YV0Mfq1Cypt28Duy2ppfY87bpACBlx2
// SIG // ohN7NxgTMjAxOTAzMTIwOTU0NDguODc3WjAHAgEBgAIB
// SIG // 9KCB1KSB0TCBzjELMAkGA1UEBhMCVVMxEzARBgNVBAgT
// SIG // Cldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAc
// SIG // BgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEpMCcG
// SIG // A1UECxMgTWljcm9zb2Z0IE9wZXJhdGlvbnMgUHVlcnRv
// SIG // IFJpY28xJjAkBgNVBAsTHVRoYWxlcyBUU1MgRVNOOjk4
// SIG // RkQtQzYxRS1FNjQxMSUwIwYDVQQDExxNaWNyb3NvZnQg
// SIG // VGltZS1TdGFtcCBTZXJ2aWNloIIPHzCCBPUwggPdoAMC
// SIG // AQICEzMAAADLX3jLIw6Ul8MAAAAAAMswDQYJKoZIhvcN
// SIG // AQELBQAwfDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UE
// SIG // AxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTAw
// SIG // HhcNMTgwODIzMjAyNjI0WhcNMTkxMTIzMjAyNjI0WjCB
// SIG // zjELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEpMCcGA1UECxMgTWlj
// SIG // cm9zb2Z0IE9wZXJhdGlvbnMgUHVlcnRvIFJpY28xJjAk
// SIG // BgNVBAsTHVRoYWxlcyBUU1MgRVNOOjk4RkQtQzYxRS1F
// SIG // NjQxMSUwIwYDVQQDExxNaWNyb3NvZnQgVGltZS1TdGFt
// SIG // cCBTZXJ2aWNlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A
// SIG // MIIBCgKCAQEAxXjIHe/wHUFwHG00Sj9UAsoaeLMDVYIQ
// SIG // hTbYMKnLLzfw7RWVbsPcpSiZk8hTeezHczFpBelqLQ6J
// SIG // Wz4M+4ep2gq2y5gJozF4MeGh0KA9Z09P003SGeCcLTtH
// SIG // acMHY2G+1EGmvhXfrv3U+qLcKywoN0uMGs5BSGoSfxLR
// SIG // U/nGV0NA98wimpEVB0/pS3h29oj8y9rl7zodtrAnF0Yq
// SIG // tN0enss5p7dgdfbmSFuG41q2qnd0O7cOjrEMTUEhrYa5
// SIG // QZlrigdU3BYhaTdJnjFmVqtPd4CLvXbJbJ5OuMa/npHK
// SIG // N7zIOIG137VQKfru3RPBClNr5rZk8/a/wfJDFB6Bz71O
// SIG // FQIDAQABo4IBGzCCARcwHQYDVR0OBBYEFCjk8ub2ydFN
// SIG // rm7I2yqWvzHD+9l2MB8GA1UdIwQYMBaAFNVjOlyKMZDz
// SIG // Q3t8RhvFM2hahW1VMFYGA1UdHwRPME0wS6BJoEeGRWh0
// SIG // dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2kvY3JsL3By
// SIG // b2R1Y3RzL01pY1RpbVN0YVBDQV8yMDEwLTA3LTAxLmNy
// SIG // bDBaBggrBgEFBQcBAQROMEwwSgYIKwYBBQUHMAKGPmh0
// SIG // dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2kvY2VydHMv
// SIG // TWljVGltU3RhUENBXzIwMTAtMDctMDEuY3J0MAwGA1Ud
// SIG // EwEB/wQCMAAwEwYDVR0lBAwwCgYIKwYBBQUHAwgwDQYJ
// SIG // KoZIhvcNAQELBQADggEBAIv0YYWDBWJsyxSUl8PpJQNs
// SIG // crEv2k3plgyD5o5MTwDIKH2gPody6KdSOSPpp9BTrdO+
// SIG // BVFYTFgkvOtAHKwCHYaBsaQog+11XrJBAyUnFyVelHjy
// SIG // 3WNLVW8FfQqSxHkGr/j/R7nz6Ne9RpTYlxRBXDeUef0j
// SIG // 9i1Al64C+c18sQ3EkoTcDsU6M4DD58Qfj04YrUgFH3KF
// SIG // dL6voeyUW4Ut+MrsNTz34K7XMCD0lMIKuqVZLJ1YCkBi
// SIG // H8AIic40scen05l2KULjbMaMHxGj/TtiowCM+Ertl7Xa
// SIG // VZOGJkgWpzl9lPEKLcvZPylAj3X83G7gKekjMtdTBJdT
// SIG // GQil9I2wrs4wggZxMIIEWaADAgECAgphCYEqAAAAAAAC
// SIG // MA0GCSqGSIb3DQEBCwUAMIGIMQswCQYDVQQGEwJVUzET
// SIG // MBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVk
// SIG // bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
// SIG // aW9uMTIwMAYDVQQDEylNaWNyb3NvZnQgUm9vdCBDZXJ0
// SIG // aWZpY2F0ZSBBdXRob3JpdHkgMjAxMDAeFw0xMDA3MDEy
// SIG // MTM2NTVaFw0yNTA3MDEyMTQ2NTVaMHwxCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jvc29mdCBUaW1l
// SIG // LVN0YW1wIFBDQSAyMDEwMIIBIjANBgkqhkiG9w0BAQEF
// SIG // AAOCAQ8AMIIBCgKCAQEAqR0NvHcRijog7PwTl/X6f2mU
// SIG // a3RUENWlCgCChfvtfGhLLF/Fw+Vhwna3PmYrW/AVUycE
// SIG // MR9BGxqVHc4JE458YTBZsTBED/FgiIRUQwzXTbg4CLNC
// SIG // 3ZOs1nMwVyaCo0UN0Or1R4HNvyRgMlhgRvJYR4YyhB50
// SIG // YWeRX4FUsc+TTJLBxKZd0WETbijGGvmGgLvfYfxGwScd
// SIG // JGcSchohiq9LZIlQYrFd/XcfPfBXday9ikJNQFHRD5wG
// SIG // Pmd/9WbAA5ZEfu/QS/1u5ZrKsajyeioKMfDaTgaRtogI
// SIG // Neh4HLDpmc085y9Euqf03GS9pAHBIAmTeM38vMDJRF1e
// SIG // FpwBBU8iTQIDAQABo4IB5jCCAeIwEAYJKwYBBAGCNxUB
// SIG // BAMCAQAwHQYDVR0OBBYEFNVjOlyKMZDzQ3t8RhvFM2ha
// SIG // hW1VMBkGCSsGAQQBgjcUAgQMHgoAUwB1AGIAQwBBMAsG
// SIG // A1UdDwQEAwIBhjAPBgNVHRMBAf8EBTADAQH/MB8GA1Ud
// SIG // IwQYMBaAFNX2VsuP6KJcYmjRPZSQW9fOmhjEMFYGA1Ud
// SIG // HwRPME0wS6BJoEeGRWh0dHA6Ly9jcmwubWljcm9zb2Z0
// SIG // LmNvbS9wa2kvY3JsL3Byb2R1Y3RzL01pY1Jvb0NlckF1
// SIG // dF8yMDEwLTA2LTIzLmNybDBaBggrBgEFBQcBAQROMEww
// SIG // SgYIKwYBBQUHMAKGPmh0dHA6Ly93d3cubWljcm9zb2Z0
// SIG // LmNvbS9wa2kvY2VydHMvTWljUm9vQ2VyQXV0XzIwMTAt
// SIG // MDYtMjMuY3J0MIGgBgNVHSABAf8EgZUwgZIwgY8GCSsG
// SIG // AQQBgjcuAzCBgTA9BggrBgEFBQcCARYxaHR0cDovL3d3
// SIG // dy5taWNyb3NvZnQuY29tL1BLSS9kb2NzL0NQUy9kZWZh
// SIG // dWx0Lmh0bTBABggrBgEFBQcCAjA0HjIgHQBMAGUAZwBh
// SIG // AGwAXwBQAG8AbABpAGMAeQBfAFMAdABhAHQAZQBtAGUA
// SIG // bgB0AC4gHTANBgkqhkiG9w0BAQsFAAOCAgEAB+aIUQ3i
// SIG // xuCYP4FxAz2do6Ehb7Prpsz1Mb7PBeKp/vpXbRkws8LF
// SIG // Zslq3/Xn8Hi9x6ieJeP5vO1rVFcIK1GCRBL7uVOMzPRg
// SIG // Eop2zEBAQZvcXBf/XPleFzWYJFZLdO9CEMivv3/Gf/I3
// SIG // fVo/HPKZeUqRUgCvOA8X9S95gWXZqbVr5MfO9sp6AG9L
// SIG // MEQkIjzP7QOllo9ZKby2/QThcJ8ySif9Va8v/rbljjO7
// SIG // Yl+a21dA6fHOmWaQjP9qYn/dxUoLkSbiOewZSnFjnXsh
// SIG // bcOco6I8+n99lmqQeKZt0uGc+R38ONiU9MalCpaGpL2e
// SIG // Gq4EQoO4tYCbIjggtSXlZOz39L9+Y1klD3ouOVd2onGq
// SIG // BooPiRa6YacRy5rYDkeagMXQzafQ732D8OE7cQnfXXSY
// SIG // Ighh2rBQHm+98eEA3+cxB6STOvdlR3jo+KhIq/fecn5h
// SIG // a293qYHLpwmsObvsxsvYgrRyzR30uIUBHoD7G4kqVDmy
// SIG // W9rIDVWZeodzOwjmmC3qjeAzLhIp9cAvVCch98isTtoo
// SIG // uLGp25ayp0Kiyc8ZQU3ghvkqmqMRZjDTu3QyS99je/WZ
// SIG // ii8bxyGvWbWu3EQ8l1Bx16HSxVXjad5XwdHeMMD9zOZN
// SIG // +w2/XU/pnR4ZOC+8z1gFLu8NoFA12u8JJxzVs341Hgi6
// SIG // 2jbb01+P3nSISRKhggOtMIIClQIBATCB/qGB1KSB0TCB
// SIG // zjELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEpMCcGA1UECxMgTWlj
// SIG // cm9zb2Z0IE9wZXJhdGlvbnMgUHVlcnRvIFJpY28xJjAk
// SIG // BgNVBAsTHVRoYWxlcyBUU1MgRVNOOjk4RkQtQzYxRS1F
// SIG // NjQxMSUwIwYDVQQDExxNaWNyb3NvZnQgVGltZS1TdGFt
// SIG // cCBTZXJ2aWNloiUKAQEwCQYFKw4DAhoFAAMVALmjk9JA
// SIG // dtG3HxWjBFGXrjgr25ohoIHeMIHbpIHYMIHVMQswCQYD
// SIG // VQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4G
// SIG // A1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0
// SIG // IENvcnBvcmF0aW9uMSkwJwYDVQQLEyBNaWNyb3NvZnQg
// SIG // T3BlcmF0aW9ucyBQdWVydG8gUmljbzEnMCUGA1UECxMe
// SIG // bkNpcGhlciBOVFMgRVNOOjRERTktMEM1RS0zRTA5MSsw
// SIG // KQYDVQQDEyJNaWNyb3NvZnQgVGltZSBTb3VyY2UgTWFz
// SIG // dGVyIENsb2NrMA0GCSqGSIb3DQEBBQUAAgUA4DERujAi
// SIG // GA8yMDE5MDMxMjAwNTYyNloYDzIwMTkwMzEzMDA1NjI2
// SIG // WjB0MDoGCisGAQQBhFkKBAExLDAqMAoCBQDgMRG6AgEA
// SIG // MAcCAQACAgMCMAcCAQACAhcVMAoCBQDgMmM6AgEAMDYG
// SIG // CisGAQQBhFkKBAIxKDAmMAwGCisGAQQBhFkKAwGgCjAI
// SIG // AgEAAgMW42ChCjAIAgEAAgMHoSAwDQYJKoZIhvcNAQEF
// SIG // BQADggEBAKY4UjCTk3/AiP7Kc2O99oyrZW4vI4rZzyQw
// SIG // pRyronM83drsLezOfzkX87S6VGA+QW1Olx/hhkYUnauG
// SIG // GDEm1+WHjgK0X1f3b3gAnA+fCjCkU5K6Et1D6Wq9mWgj
// SIG // 5dURvG16tArqxmnxm2Ux0bNqs9HaoXKQ0AlAOqVHcUr8
// SIG // j3zn7dYyifXbWETk8ms82wmSA+m9W3b96C6VcxzPqnGS
// SIG // SS6rj2RTBVcb6pLVUD9sgrGQ2NOoCWrJmI+XP3yiiiLz
// SIG // +0eQ8QGhlBUZL91IKIw6zyq8mg2TS2LPWVeJhQy3x7ZC
// SIG // NhxneIm2GSrnSCfTgC0Hsdf6wkjxNhwtBMbgx4XkUZYx
// SIG // ggMNMIIDCQIBATCBkzB8MQswCQYDVQQGEwJVUzETMBEG
// SIG // A1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9u
// SIG // ZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MSYwJAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFtcCBQ
// SIG // Q0EgMjAxMAITMwAAAMtfeMsjDpSXwwAAAAAAyzANBglg
// SIG // hkgBZQMEAgEFAKCCAUowGgYJKoZIhvcNAQkDMQ0GCyqG
// SIG // SIb3DQEJEAEEMC8GCSqGSIb3DQEJBDEiBCDsBJ8qn8R1
// SIG // VPMsLfwHf9CizUyVfgTCNr4L3e16B3MW3zCB+gYLKoZI
// SIG // hvcNAQkQAi8xgeowgecwgeQwgb0EIDYnIaqpYKde63PQ
// SIG // pL1LfC4X9p9L0y7uFEdeqmDdwR1kMIGYMIGApH4wfDEL
// SIG // MAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24x
// SIG // EDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jv
// SIG // c29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWljcm9z
// SIG // b2Z0IFRpbWUtU3RhbXAgUENBIDIwMTACEzMAAADLX3jL
// SIG // Iw6Ul8MAAAAAAMswIgQgpSD7lAa3kW06sKZ1GopqPgLb
// SIG // g/FVbGq1bA3BqhQVEfYwDQYJKoZIhvcNAQELBQAEggEA
// SIG // ZBjC6NXDQNCri7T9bKjQQh+OXDSAsSuY2fBpzDzuxSuj
// SIG // bzW4Ey/gnRFf6olMaT/EzDahSsSgt9uBWaLr2qJ0A61e
// SIG // n7o87QaC1NX+E4mkMgdQHfjP+q9lLSPlAXxDCdMJfTFd
// SIG // SnbyJ7yeANfkeEZmQxXcWlrZGIsGiHURm4VbUlPY9KRi
// SIG // mSoonqNQ56CUXwUG2lCK9zsgiWDqPUWWR0Gp6QieEAzW
// SIG // QvMM157Amw/avHNYlfZ8lBU4lOUgzBqWAJ2PHSvxdb0L
// SIG // t7bo/CdrAFFdxb3yyT+0Zet0yR5SfKCZ2o21ioip4Way
// SIG // 24N8jUqOzVAZMTRdToKvGFx7ntEMYcayTQ==
// SIG // End signature block
