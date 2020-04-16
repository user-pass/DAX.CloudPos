System.register(["PosApi/Entities"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Entities_1, Entities;
    return {
        setters: [
            function (Entities_1_1) {
                Entities_1 = Entities_1_1;
            }
        ],
        execute: function () {
            exports_1("ProxyEntities", Entities_1.ProxyEntities);
            (function (Entities) {
                var Invitation = (function () {
                    function Invitation(odataObject) {
                        odataObject = odataObject || {};
                        this.Id = odataObject.Id;
                        this.ExtensionProperties = undefined;
                        if (odataObject.ExtensionProperties) {
                            this.ExtensionProperties = [];
                            for (var i = 0; i < odataObject.ExtensionProperties.length; i++) {
                                if (odataObject.ExtensionProperties[i] != null) {
                                    if (odataObject.ExtensionProperties[i]['@odata.type'] != null) {
                                        var className = odataObject.ExtensionProperties[i]['@odata.type'];
                                        className = className.substr(className.lastIndexOf('.') + 1).concat("Class");
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities[className](odataObject.ExtensionProperties[i]);
                                    }
                                    else {
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities.CommercePropertyClass(odataObject.ExtensionProperties[i]);
                                    }
                                }
                                else {
                                    this.ExtensionProperties[i] = undefined;
                                }
                            }
                        }
                    }
                    return Invitation;
                }());
                Entities.Invitation = Invitation;
            })(Entities || (Entities = {}));
            exports_1("Entities", Entities);
        }
    };
});
//# sourceMappingURL=C:/RetailSDK/POS/Extensions/DataServices/DataServiceEntities.g.js.map