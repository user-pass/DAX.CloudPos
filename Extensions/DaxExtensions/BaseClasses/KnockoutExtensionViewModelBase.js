System.register(["PosApi/TypeExtensions"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TypeExtensions_1, KnockoutExtensionViewModelBase;
    return {
        setters: [
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            }
        ],
        execute: function () {
            KnockoutExtensionViewModelBase = (function () {
                function KnockoutExtensionViewModelBase() {
                }
                KnockoutExtensionViewModelBase.prototype.dispose = function () {
                    TypeExtensions_1.ObjectExtensions.disposeAllProperties(this);
                };
                return KnockoutExtensionViewModelBase;
            }());
            exports_1("default", KnockoutExtensionViewModelBase);
        }
    };
});
//# sourceMappingURL=C:/RetailSDK/POS/Extensions/BaseClasses/KnockoutExtensionViewModelBase.js.map