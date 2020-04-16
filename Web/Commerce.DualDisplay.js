"use strict";
var Commerce;
(function (Commerce) {
    var Config;
    (function (Config) {
        Config.isDualDisplay = true;
    })(Config = Commerce.Config || (Commerce.Config = {}));
})(Commerce || (Commerce = {}));
var DualDisplay;
(function (DualDisplay) {
    "use strict";
    var DualDisplayMessaging = (function () {
        function DualDisplayMessaging() {
        }
        DualDisplayMessaging.init = function () {
            DualDisplayMessaging._messageTypeToAsyncResultMap = new Commerce.Dictionary();
            DualDisplayMessaging._dualDisplayView = Windows.UI.ViewManagement.ApplicationView.getForCurrentView();
            DualDisplayMessaging._dualDisplayView.onconsolidated = DualDisplayMessaging._sendCloseMessage.bind(this);
            DualDisplayMessaging._opener = window.opener;
            window.onmessage = DualDisplayMessaging._handleMessage.bind(this);
        };
        DualDisplayMessaging.sendWriteEventMessage = function (event) {
            DualDisplayMessaging._sendMessage({
                type: "writeEvent",
                args: {
                    event: event
                }
            });
        };
        DualDisplayMessaging.sendReadyMessage = function () {
            DualDisplayMessaging._sendMessage({ type: "ready", args: {} });
        };
        DualDisplayMessaging.sendRequest = function (request) {
            if (DualDisplayMessaging._messageTypeToAsyncResultMap.hasItem(request.responseName)) {
                Commerce.RetailLogger.dualDisplaySendRequestFailed(request.requestName, request.responseName);
                return Commerce.AsyncResult.createRejected([
                    new Commerce.Proxy.Entities.Error(Commerce.ErrorTypeEnum.PERIPHERAL_DUALDISPLAY_RESPONSE_NOT_RECEIVED)
                ]);
            }
            var asyncResult = new Commerce.AsyncResult();
            DualDisplayMessaging._messageTypeToAsyncResultMap.setItem(request.responseName, asyncResult);
            DualDisplayMessaging._sendMessage({ type: request.requestName, args: request.requestData });
            return asyncResult;
        };
        DualDisplayMessaging._sendCloseMessage = function () {
            DualDisplayMessaging._sendMessage({ type: "close", args: {} });
        };
        DualDisplayMessaging._sendMessage = function (message) {
            DualDisplayMessaging._opener.postMessage(JSON.stringify(message), document.location.protocol + "//" + document.location.host);
        };
        DualDisplayMessaging._handleMessage = function (message) {
            var data = JSON.parse(message.data);
            switch (data.type) {
                case "cartChanged":
                    var cartChangedData = data;
                    DualDisplayMessaging._handleMessageCartChanged(cartChangedData.args);
                    break;
                case "customerChanged":
                    var customerChangedData = data;
                    DualDisplayMessaging._handleMessageCustomerChanged(customerChangedData.args);
                    break;
                case "isLoggedOnStateChanged":
                    var isLoggedOnStateChangedData = data;
                    DualDisplayMessaging._handleMessageIsLoggedOnStateChanged(isLoggedOnStateChangedData.args);
                    break;
                default:
                    DualDisplayMessaging._handleResponseMessage(data);
                    break;
            }
        };
        DualDisplayMessaging._handleResponseMessage = function (message) {
            if (DualDisplayMessaging._messageTypeToAsyncResultMap.hasItem(message.type)) {
                DualDisplayMessaging._messageTypeToAsyncResultMap.removeItem(message.type).resolve(message.args);
            }
        };
        DualDisplayMessaging._handleMessageCartChanged = function (cartChangedData) {
            DualDisplay.Model.DualDisplaySession.instance.cart = cartChangedData.cart;
        };
        DualDisplayMessaging._handleMessageCustomerChanged = function (customerChangedData) {
            DualDisplay.Model.DualDisplaySession.instance.customer = customerChangedData.customer;
        };
        DualDisplayMessaging._handleMessageIsLoggedOnStateChanged = function (isLoggedOnStateChangedData) {
            DualDisplay.Model.DualDisplaySession.instance.isLoggedOnState = {
                isLoggedOn: isLoggedOnStateChangedData.isLoggedOn,
                currentEmployee: isLoggedOnStateChangedData.currentEmployee
            };
        };
        return DualDisplayMessaging;
    }());
    DualDisplay.DualDisplayMessaging = DualDisplayMessaging;
})(DualDisplay || (DualDisplay = {}));
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
var DualDisplay;
(function (DualDisplay) {
    "use strict";
    var DualDisplayToPosSink = (function (_super) {
        __extends(DualDisplayToPosSink, _super);
        function DualDisplayToPosSink() {
            return _super.call(this, {}) || this;
        }
        DualDisplayToPosSink.prototype.writeEvent = function (event) {
            event = this.sanitizeEvent(event);
            DualDisplay.DualDisplayMessaging.sendWriteEventMessage(event);
        };
        DualDisplayToPosSink.prototype.setSessionInfo = function (appSessionId, userSessionId, deviceId, deviceNumber, terminalId, userId, tenantId, offlineAvailability, offlineCurrentMode) {
            return;
        };
        DualDisplayToPosSink.prototype.setInstrumentationKey = function (instrumentationKey) {
            return;
        };
        return DualDisplayToPosSink;
    }(Microsoft.Dynamics.Diagnostics.TypeScriptCore.LoggingSink));
    DualDisplay.DualDisplayToPosSink = DualDisplayToPosSink;
})(DualDisplay || (DualDisplay = {}));
var DualDisplay;
(function (DualDisplay) {
    var Model;
    (function (Model) {
        "use strict";
        var DualDisplaySession = (function () {
            function DualDisplaySession() {
                this._cart = null;
                this._customer = null;
                this._employee = null;
                this._isLoggedOn = false;
            }
            Object.defineProperty(DualDisplaySession, "instance", {
                get: function () {
                    if (Commerce.ObjectExtensions.isNullOrUndefined(DualDisplaySession._instance)) {
                        DualDisplaySession._instance = new DualDisplaySession();
                    }
                    return DualDisplaySession._instance;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DualDisplaySession.prototype, "cart", {
                get: function () {
                    return this._cart;
                },
                set: function (newCart) {
                    var oldCart = this._cart;
                    this._cart = newCart;
                    Commerce.EventProxy.Instance.raiseCustomEvent("CartStateUpdateEvent", {
                        cartStateType: undefined,
                        oldCart: oldCart
                    });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DualDisplaySession.prototype, "customer", {
                get: function () {
                    return this._customer;
                },
                set: function (newCustomer) {
                    this._customer = newCustomer;
                    Commerce.EventProxy.Instance.raiseCustomEvent("CustomerStateUpdateEvent", newCustomer);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DualDisplaySession.prototype, "isLoggedOnState", {
                set: function (args) {
                    var oldIsLoggedOn = this.isLoggedOn;
                    var oldCurrentEmployee = this._employee;
                    this._isLoggedOn = args.isLoggedOn;
                    this._employee = args.currentEmployee;
                    Commerce.EventProxy.Instance.raiseCustomEvent("IsLoggedOnStateUpdateEvent", {
                        oldIsLoggedOn: oldIsLoggedOn,
                        oldCurrentEmployee: oldCurrentEmployee
                    });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DualDisplaySession.prototype, "isLoggedOn", {
                get: function () {
                    return this._isLoggedOn;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DualDisplaySession.prototype, "currentEmployee", {
                get: function () {
                    return this._employee;
                },
                enumerable: true,
                configurable: true
            });
            DualDisplaySession._instance = null;
            return DualDisplaySession;
        }());
        Model.DualDisplaySession = DualDisplaySession;
    })(Model = DualDisplay.Model || (DualDisplay.Model = {}));
})(DualDisplay || (DualDisplay = {}));
var DualDisplay;
(function (DualDisplay) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var DualDisplaySession = DualDisplay.Model.DualDisplaySession;
        var ObjectExtensions = Commerce.ObjectExtensions;
        var VoidAsyncResult = Commerce.VoidAsyncResult;
        var ArrayExtensions = Commerce.ArrayExtensions;
        var DualDisplayViewModel = (function (_super) {
            __extends(DualDisplayViewModel, _super);
            function DualDisplayViewModel(options) {
                var _this = _super.call(this) || this;
                if (ObjectExtensions.isNullOrUndefined(DualDisplayViewModel._dualDisplayExtensionsManager)) {
                    _this._customControlViewModels = [];
                }
                else {
                    _this._customControlViewModels = DualDisplayViewModel._dualDisplayExtensionsManager.getCustomControls();
                }
                _this._cart = ko.observable(DualDisplaySession.instance.cart);
                _this._customer = ko.observable(DualDisplaySession.instance.customer);
                _this._isLoggedOnState = ko.observable({
                    loggedOn: DualDisplaySession.instance.isLoggedOn,
                    employee: DualDisplaySession.instance.currentEmployee
                });
                _this._amountDue = ko.computed(function () {
                    return ObjectExtensions.isNullOrUndefined(_this._cart()) ? 0 : _this._cart().AmountDue;
                });
                if (!ObjectExtensions.isNullOrUndefined(options)) {
                    _this._addSessionCartStateUpdateHandler = options.addSessionCartStateUpdateHandler;
                    _this._removeSessionCartStateUpdateHandler = options.removeSessionCartStateUpdateHandler;
                    _this._addSessionCustomerStateUpdateHandler = options.addSessionCustomerStateUpdateHandler;
                    _this._removeSessionCustomerStateUpdateHandler = options.removeSessionCustomerStateUpdateHandler;
                    _this._addSessionIsLoggedOnStateUpdateHandler = options.addSessionIsLoggedOnStateUpdateHandler;
                    _this._removeSessionIsLoggedOnStateUpdateHandler = options.removeSessionIsLoggedOnStateUpdateHandler;
                }
                _this._sessionCartStateUpdateHandler = function () {
                    _this._cart(DualDisplaySession.instance.cart);
                };
                _this._sessionCustomerStateUpdateHandler = function () {
                    _this._customer(DualDisplaySession.instance.customer);
                };
                _this._sessionIsLoggedOnStateUpdateHandler = function () {
                    _this._isLoggedOnState({
                        loggedOn: DualDisplaySession.instance.isLoggedOn,
                        employee: DualDisplaySession.instance.currentEmployee
                    });
                };
                _this._cart.subscribe(_this._dualDisplayViewModelCartUpdateCallback, _this);
                _this._customer.subscribe(_this._dualDisplayViewModelCustomerUpdateCallback, _this);
                _this._isLoggedOnState.subscribe(_this._dualDisplayViewModelLoginStatusUpdateCallback, _this);
                var isACustomControlBusy = ko.computed(function () {
                    return _this._customControlViewModels.some(function (customControlViewModel) {
                        return customControlViewModel.isBusy();
                    });
                });
                _this._isBusyWhen(isACustomControlBusy);
                return _this;
            }
            DualDisplayViewModel.prototype.load = function () {
                var _this = this;
                this._customControlViewModels.forEach(function (vm) {
                    vm.init({
                        cart: _this._cart(),
                        customer: _this._customer(),
                        loggedOn: _this._isLoggedOnState().loggedOn,
                        employee: _this._isLoggedOnState().employee
                    });
                });
                return VoidAsyncResult.createResolved();
            };
            DualDisplayViewModel.prototype.onShown = function () {
                this._addSessionCartStateUpdateHandler(this._sessionCartStateUpdateHandler);
                this._addSessionCustomerStateUpdateHandler(this._sessionCustomerStateUpdateHandler);
                this._addSessionIsLoggedOnStateUpdateHandler(this._sessionIsLoggedOnStateUpdateHandler);
            };
            DualDisplayViewModel.prototype.onHidden = function () {
                this._removeSessionCartStateUpdateHandler(this._sessionCartStateUpdateHandler);
                this._removeSessionCustomerStateUpdateHandler(this._sessionCustomerStateUpdateHandler);
                this._removeSessionIsLoggedOnStateUpdateHandler(this._sessionIsLoggedOnStateUpdateHandler);
            };
            Object.defineProperty(DualDisplayViewModel, "dualDisplayExtensionManager", {
                set: function (manager) {
                    DualDisplayViewModel._dualDisplayExtensionsManager = manager;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DualDisplayViewModel.prototype, "amountDue", {
                get: function () {
                    return this._amountDue;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DualDisplayViewModel.prototype, "customControlViewModels", {
                get: function () {
                    return this._customControlViewModels;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DualDisplayViewModel.prototype, "hasCustomControlViewModels", {
                get: function () {
                    return ArrayExtensions.hasElements(this._customControlViewModels);
                },
                enumerable: true,
                configurable: true
            });
            DualDisplayViewModel.prototype._sendMessageToExtensions = function (messageType, messageData) {
                if (ArrayExtensions.hasElements(this._customControlViewModels)) {
                    this._customControlViewModels.forEach(function (vm) {
                        vm.sendMessage(messageType, messageData);
                    });
                }
            };
            DualDisplayViewModel.prototype._dualDisplayViewModelCartUpdateCallback = function (newCart) {
                this._sendMessageToExtensions("CartChanged", { cart: newCart });
            };
            DualDisplayViewModel.prototype._dualDisplayViewModelCustomerUpdateCallback = function (newCustomer) {
                this._sendMessageToExtensions("CustomerChanged", { customer: newCustomer });
            };
            DualDisplayViewModel.prototype._dualDisplayViewModelLoginStatusUpdateCallback = function (logOnStatus) {
                this._sendMessageToExtensions("LogOnStatusChanged", { loggedOn: logOnStatus.loggedOn, employee: logOnStatus.employee });
            };
            return DualDisplayViewModel;
        }(Commerce.ViewModels.ViewModelBase));
        ViewModels.DualDisplayViewModel = DualDisplayViewModel;
    })(ViewModels = DualDisplay.ViewModels || (DualDisplay.ViewModels = {}));
})(DualDisplay || (DualDisplay = {}));
//# sourceMappingURL=Commerce.DualDisplay.js.map
// SIG // Begin signature block
// SIG // MIIkeAYJKoZIhvcNAQcCoIIkaTCCJGUCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // mmsjIoGR+41lTWaMgsjGwbfXLvpXJgldzw+4I38QRCmg
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
// SIG // SEXAQsmbdlsKgEhr/Xmfwb1tbWrJUnMTDXpQzTGCFk8w
// SIG // ghZLAgEBMIGVMH4xCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xKDAm
// SIG // BgNVBAMTH01pY3Jvc29mdCBDb2RlIFNpZ25pbmcgUENB
// SIG // IDIwMTECEzMAAAEDXiUcmR+jHrgAAAAAAQMwDQYJYIZI
// SIG // AWUDBAIBBQCggdAwGQYJKoZIhvcNAQkDMQwGCisGAQQB
// SIG // gjcCAQQwHAYKKwYBBAGCNwIBCzEOMAwGCisGAQQBgjcC
// SIG // ARUwLwYJKoZIhvcNAQkEMSIEIBUEL8LA1v+klwjuuSpk
// SIG // EmIhnRl3lnqfe8d3TqqWk4EeMGQGCisGAQQBgjcCAQwx
// SIG // VjBUoDaANABnAGwAbwBiAGEAbABpAHoAZQAuAGMAdQBs
// SIG // AHQAdQByAGUALgBsAHYALQBMAFYALgBqAHOhGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBAH0LksBLU0HQtPAQqO2N8p4pHPaYHkasG9bM
// SIG // Z0ehk96SJ0kqLGECy8lAY4uaZeo9bxHZ2gnzBhF4CJwN
// SIG // bN2rP/AOgsafkRfrkmuwMh7PGrgQgIrFybYtquv1CNul
// SIG // 35SxGZMvN6t4nynR7afp+1cnuBsei084Eo1/3eAAMm3M
// SIG // QewslaMabOcJnmriKvwpcGHCy3Tfk4+F8MgkDCwjtXdg
// SIG // iqvi85JgJxzg7Rt+4Kf3cTJV0RfGvowcmSlloZlXU6a/
// SIG // eyZ0+4rB7dMsnqbhKPuuh0xYi0unIMXkotbjti0hIWx3
// SIG // Jw1cIY+QPp0vAaj8GK3dHXN4fLacTwsP5YKuihP95nWh
// SIG // ghO3MIITswYKKwYBBAGCNwMDATGCE6MwghOfBgkqhkiG
// SIG // 9w0BBwKgghOQMIITjAIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBWAYLKoZIhvcNAQkQAQSgggFHBIIBQzCCAT8CAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQg6eM/
// SIG // pcbizH/DUko0+jZBMtn8hD75B5pnRXl0I8p6opgCBlx2
// SIG // 1EiQdBgTMjAxOTAzMTIwOTU1NDcuNzE2WjAHAgEBgAIB
// SIG // 9KCB1KSB0TCBzjELMAkGA1UEBhMCVVMxEzARBgNVBAgT
// SIG // Cldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAc
// SIG // BgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEpMCcG
// SIG // A1UECxMgTWljcm9zb2Z0IE9wZXJhdGlvbnMgUHVlcnRv
// SIG // IFJpY28xJjAkBgNVBAsTHVRoYWxlcyBUU1MgRVNOOkMw
// SIG // RjQtMzA4Ni1ERUY4MSUwIwYDVQQDExxNaWNyb3NvZnQg
// SIG // VGltZS1TdGFtcCBTZXJ2aWNloIIPHzCCBPUwggPdoAMC
// SIG // AQICEzMAAADQHGpgYcLn4a0AAAAAANAwDQYJKoZIhvcN
// SIG // AQELBQAwfDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UE
// SIG // AxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTAw
// SIG // HhcNMTgwODIzMjAyNjI4WhcNMTkxMTIzMjAyNjI4WjCB
// SIG // zjELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEpMCcGA1UECxMgTWlj
// SIG // cm9zb2Z0IE9wZXJhdGlvbnMgUHVlcnRvIFJpY28xJjAk
// SIG // BgNVBAsTHVRoYWxlcyBUU1MgRVNOOkMwRjQtMzA4Ni1E
// SIG // RUY4MSUwIwYDVQQDExxNaWNyb3NvZnQgVGltZS1TdGFt
// SIG // cCBTZXJ2aWNlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A
// SIG // MIIBCgKCAQEAmz6GNtdazvvGfcwqPCAGFZqbOSA8utfq
// SIG // QzTGE6dJvIblaK16OUijJigGJxNAtbIOrK5l+UNLOGuu
// SIG // B2EYpw79pcthzNnFN+ob2txMtWV7TZGrOo0rnV9SHant
// SIG // zbiAhpDkxrcnYQXki1kOe7VseHNP3hT8kW+egfdzlXt+
// SIG // YDIq5zTVMRtd/mdD1edkkYxk2fs1D2cu3KytVD/ETWyn
// SIG // x1ndj2GSulkkb9+1Xe6HKgu/R2z9cSW/KWS8U1QqlpXz
// SIG // 6JBNaGXysZh07QQ5T8k9axpKgoFfex/ylmgHl7Mv1kXl
// SIG // 2lrmj1cSVQp6XBLEa4LXxZp0ojaBM7vn4OxSCAT1zpJG
// SIG // KwIDAQABo4IBGzCCARcwHQYDVR0OBBYEFAODKJeoayXy
// SIG // xFMyH5mtOrx3GMVxMB8GA1UdIwQYMBaAFNVjOlyKMZDz
// SIG // Q3t8RhvFM2hahW1VMFYGA1UdHwRPME0wS6BJoEeGRWh0
// SIG // dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2kvY3JsL3By
// SIG // b2R1Y3RzL01pY1RpbVN0YVBDQV8yMDEwLTA3LTAxLmNy
// SIG // bDBaBggrBgEFBQcBAQROMEwwSgYIKwYBBQUHMAKGPmh0
// SIG // dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2kvY2VydHMv
// SIG // TWljVGltU3RhUENBXzIwMTAtMDctMDEuY3J0MAwGA1Ud
// SIG // EwEB/wQCMAAwEwYDVR0lBAwwCgYIKwYBBQUHAwgwDQYJ
// SIG // KoZIhvcNAQELBQADggEBAKW8JJZkCd9a9L+UU382GZFu
// SIG // PCD14GBdfLKXRglaDBg+6itRkeSFzdHk801jSU0aTpEe
// SIG // O9unSfba7pRH8Ew3vaMLZ4FZ1E02XKOI9QWtYS53NK3E
// SIG // 9cGX20HPW11poRCNyi6GwE4yu0rX8+PVVfUL0YK95XZ6
// SIG // hhm2OZoh4OQijiBjq/VwxbU973vY06iWZfKsSVaCnx3F
// SIG // InWHRsHwCo/M3DCK7dPmhPVextNMEzVfXbgyAOb2s2QF
// SIG // JCYer7Ph9h5rJdEq3s7XJyzrkhi+R8Eia3pxj5QU+JhH
// SIG // makYXSVrp0HTVnxBpjdaL0GbOymskbvZeTomvKzO8JFw
// SIG // 1RfXBPnAgSwwggZxMIIEWaADAgECAgphCYEqAAAAAAAC
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
// SIG // BgNVBAsTHVRoYWxlcyBUU1MgRVNOOkMwRjQtMzA4Ni1E
// SIG // RUY4MSUwIwYDVQQDExxNaWNyb3NvZnQgVGltZS1TdGFt
// SIG // cCBTZXJ2aWNloiUKAQEwCQYFKw4DAhoFAAMVACkpH4tx
// SIG // cTJXNza/vZ3h06MxPo6VoIHeMIHbpIHYMIHVMQswCQYD
// SIG // VQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4G
// SIG // A1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0
// SIG // IENvcnBvcmF0aW9uMSkwJwYDVQQLEyBNaWNyb3NvZnQg
// SIG // T3BlcmF0aW9ucyBQdWVydG8gUmljbzEnMCUGA1UECxMe
// SIG // bkNpcGhlciBOVFMgRVNOOjRERTktMEM1RS0zRTA5MSsw
// SIG // KQYDVQQDEyJNaWNyb3NvZnQgVGltZSBTb3VyY2UgTWFz
// SIG // dGVyIENsb2NrMA0GCSqGSIb3DQEBBQUAAgUA4DHvkzAi
// SIG // GA8yMDE5MDMxMjE2NDI1OVoYDzIwMTkwMzEzMTY0MjU5
// SIG // WjB0MDoGCisGAQQBhFkKBAExLDAqMAoCBQDgMe+TAgEA
// SIG // MAcCAQACAhe0MAcCAQACAhtlMAoCBQDgM0ETAgEAMDYG
// SIG // CisGAQQBhFkKBAIxKDAmMAwGCisGAQQBhFkKAwGgCjAI
// SIG // AgEAAgMW42ChCjAIAgEAAgMHoSAwDQYJKoZIhvcNAQEF
// SIG // BQADggEBAEvCqyaPfhIm7E0W2C/obnNsoraEse9z1fpG
// SIG // E77gUtJswXLrxFz4MteTOLv6IqoEzqRfBBdvMdErpXqZ
// SIG // SBGvysLRXvilva9ra4NjkmRrDyy5Q3vnfIlsFVuA1PXk
// SIG // yZdyRnWF4bX4oe0MReAC3pWPMh5IwYVXXhCVMRkZIP1E
// SIG // RrQWKuZHtlz1IXs5fZA43899ENPDrmLDc9uNC+zT1shr
// SIG // EnLon++ReDi/bb86J6ewMe2E61hfD9lnN7j6BZL5XtM1
// SIG // MrJ0Pwo32ClYO/wy+QRJVLYoBuj3jqt+xI+BF/4zK0WT
// SIG // MNg1HU4GQU1BD+qj7kc3b2SEzDvXoFVIUDBkTTFV6Csx
// SIG // ggL1MIIC8QIBATCBkzB8MQswCQYDVQQGEwJVUzETMBEG
// SIG // A1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9u
// SIG // ZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MSYwJAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFtcCBQ
// SIG // Q0EgMjAxMAITMwAAANAcamBhwufhrQAAAAAA0DANBglg
// SIG // hkgBZQMEAgEFAKCCATIwGgYJKoZIhvcNAQkDMQ0GCyqG
// SIG // SIb3DQEJEAEEMC8GCSqGSIb3DQEJBDEiBCCdiwQVVt0t
// SIG // W1UAJJcxVIRjVfm8n8kQHwPyL1VonAyKHjCB4gYLKoZI
// SIG // hvcNAQkQAgwxgdIwgc8wgcwwgbEEFCkpH4txcTJXNza/
// SIG // vZ3h06MxPo6VMIGYMIGApH4wfDELMAkGA1UEBhMCVVMx
// SIG // EzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3Rh
// SIG // bXAgUENBIDIwMTACEzMAAADQHGpgYcLn4a0AAAAAANAw
// SIG // FgQU9QJsDbTSRPqnjB2ox2xl6qgbk28wDQYJKoZIhvcN
// SIG // AQELBQAEggEADMm9v/mn3urePCPcAxHcuDgY+bs/iEi+
// SIG // q9EkKDLIkCawSmVlnMomm5MTzSSBXuyRIsDUopZc123N
// SIG // bBxey3x1SMoRfpxxis4KTByt02excCmQUH3n/WroXJjO
// SIG // zruQhXcSLH1/l4zBzU9KMhpS5wdp9YZCdWEkxqumLYAP
// SIG // BFTHsmnsksGV5u3RD9cODuA+Jq8xjBkq2dW9iAK4g9+7
// SIG // cZimGfqFg2NCq+6Yh3/jAWPOeKZom+9vX9KlVa/tNXj1
// SIG // zINe+Z4HbAj3avFpRhuiV5fPs9UDoc6AK8BJPGPfIwIo
// SIG // Tcl0L0Q1F7toxlkAudtSd7XssGpMNqvWnaovbLZjCP2j3g==
// SIG // End signature block
