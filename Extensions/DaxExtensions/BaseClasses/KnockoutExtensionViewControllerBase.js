System.register(["PosApi/Create/Views"], function (exports_1, context_1) {
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
    var NewView, KnockoutExtensionViewControllerBase;
    return {
        setters: [
            function (NewView_1) {
                NewView = NewView_1;
            }
        ],
        execute: function () {
            KnockoutExtensionViewControllerBase = (function (_super) {
                __extends(KnockoutExtensionViewControllerBase, _super);
                function KnockoutExtensionViewControllerBase(context, saveInHistory) {
                    return _super.call(this, context, saveInHistory) || this;
                }
                KnockoutExtensionViewControllerBase.prototype.onReady = function (element) {
                    _super.prototype.onReady.call(this, element);
                    ko.applyBindings(this, element);
                };
                return KnockoutExtensionViewControllerBase;
            }(NewView.ExtensionViewControllerBase));
            exports_1("default", KnockoutExtensionViewControllerBase);
        }
    };
});
//# sourceMappingURL=C:/RetailSDK/POS/Extensions/BaseClasses/KnockoutExtensionViewControllerBase.js.map