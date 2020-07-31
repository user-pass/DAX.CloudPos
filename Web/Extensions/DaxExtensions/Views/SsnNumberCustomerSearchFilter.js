System.register(["PosApi/Extend/Views/CustomSearchFilters"], function (exports_1, context_1) {
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
    var CustomSearchFilters_1, SsnNumberCustomerSearchFilter;
    return {
        setters: [
            function (CustomSearchFilters_1_1) {
                CustomSearchFilters_1 = CustomSearchFilters_1_1;
            }
        ],
        execute: function () {
            SsnNumberCustomerSearchFilter = (function (_super) {
                __extends(SsnNumberCustomerSearchFilter, _super);
                function SsnNumberCustomerSearchFilter(context) {
                    var _this = _super.call(this, context) || this;
                    _this.id = "SsnNumberCustomerSearchFilter";
                    _this.labelValue = "SSN/IdNumber";
                    return _this;
                }
                return SsnNumberCustomerSearchFilter;
            }(CustomSearchFilters_1.CustomTextSearchFilterDefinitionBase));
            exports_1("default", SsnNumberCustomerSearchFilter);
        }
    };
});
//# sourceMappingURL=C:/RetailSDK/POS/Extensions/Views/SsnNumberCustomerSearchFilter.js.map