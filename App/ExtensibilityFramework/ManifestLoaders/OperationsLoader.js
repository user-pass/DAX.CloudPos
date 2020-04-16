System.register(["PosApi/Create/Operations", "../Extension", "./ManifestLoaderBase", "../ExtensionNameGenerator"], function (exports_1, context_1) {
    "use strict";
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
    var __assign = (this && this.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var Operations_1, Extension_1, ManifestLoaderBase_1, ExtensionNameGenerator_1, Extensibility, ExtensionPointType, OperationsLoader, ExtensionOperationMapper;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Operations_1_1) {
                Operations_1 = Operations_1_1;
            },
            function (Extension_1_1) {
                Extension_1 = Extension_1_1;
            },
            function (ManifestLoaderBase_1_1) {
                ManifestLoaderBase_1 = ManifestLoaderBase_1_1;
            },
            function (ExtensionNameGenerator_1_1) {
                ExtensionNameGenerator_1 = ExtensionNameGenerator_1_1;
            }
        ],
        execute: function () {
            Extensibility = Commerce.Extensibility;
            ExtensionPointType = Commerce.Extensibility.ExtensionPointType;
            OperationsLoader = (function (_super) {
                __extends(OperationsLoader, _super);
                function OperationsLoader() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                OperationsLoader.prototype.load = function (extensionPackage, operations) {
                    var _this = this;
                    operations = Commerce.ObjectExtensions.isNullOrUndefined(operations) ? [] : operations;
                    ExtensionOperationMapper.instance.initialize(extensionPackage.context);
                    var loadSequence = Promise.resolve();
                    operations.forEach(function (operationManifestItem) {
                        loadSequence = loadSequence.then(function () {
                            var correlationId = Commerce.LoggerHelper.getNewCorrelationId();
                            Commerce.RetailLogger.extensibilityFrameworkNewOperationManifestItemLoadingStarted(JSON.stringify(operationManifestItem), correlationId);
                            return _this.loadOperation(extensionPackage, operationManifestItem, correlationId).then(function () {
                                Commerce.RetailLogger.extensibilityFrameworkNewOperationManifestItemLoadingFinished(correlationId);
                            });
                        });
                    });
                    return loadSequence;
                };
                OperationsLoader.prototype.loadOperation = function (extensionPackage, operationManifestItem, correlationId) {
                    var _this = this;
                    var extensionPointName = "NewOperation";
                    var extensionPointType = ExtensionPointType.NewOperation;
                    var extensionName = ExtensionNameGenerator_1.default.getNewOperationExtensionName(operationManifestItem);
                    return Promise.resolve().then(function () {
                        if (Commerce.ObjectExtensions.isNullOrUndefined(operationManifestItem)
                            || (operationManifestItem.operationId === Commerce.Proxy.Entities.RetailOperation.None)
                            || Commerce.StringExtensions.isNullOrWhitespace(operationManifestItem.operationRequestFactoryPath)
                            || Commerce.StringExtensions.isNullOrWhitespace(operationManifestItem.operationRequestHandlerPath)) {
                            Commerce.RetailLogger.extensibilityFrameworkInvalidNewOperationManifestItem(JSON.stringify(operationManifestItem), "IOperationManifestItem", correlationId);
                            var loadError = new Error("Invalid new operation manifest item");
                            return Promise.reject(loadError);
                        }
                        var requestFactoryModuleToAdd;
                        var operationModuleToAdd;
                        var baseUrl = extensionPackage.packageInfo.baseUrl;
                        return _this.loadModule(baseUrl, operationManifestItem.operationRequestFactoryPath)
                            .then(function (requestFactoryModule) {
                            requestFactoryModuleToAdd = requestFactoryModule;
                        }).then(function () {
                            return _this.loadModule(extensionPackage.packageInfo.baseUrl, operationManifestItem.operationRequestHandlerPath);
                        }).then(function (operationModule) {
                            operationModuleToAdd = operationModule;
                        }).then(function () {
                            _this.addRequestFactory(requestFactoryModuleToAdd, operationManifestItem, correlationId);
                            return _this.addRequestHandler(extensionPackage, operationModuleToAdd, operationManifestItem, correlationId);
                        });
                    }).then(function () {
                        var extension = new Extension_1.default(extensionPointType, extensionPointName, extensionName);
                        extensionPackage.addExtension(extension);
                    }, function (error) {
                        Commerce.RetailLogger.extensibilityFrameworkErrorOccurredWhileLoadingNewOperationExtensions(Commerce.ErrorHelper.serializeError(error), correlationId);
                        var loadError = Commerce.ErrorHelper.toJavascriptError(error, correlationId);
                        var extension = new Extension_1.default(extensionPointType, extensionPointName, extensionName, loadError);
                        extensionPackage.addExtension(extension);
                    });
                };
                OperationsLoader.prototype.addRequestHandler = function (extensionPackage, operationModule, operationManifestItem, correlationId) {
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(operationModule) &&
                        !Commerce.ObjectExtensions.isNullOrUndefined(operationModule.default)) {
                        if (operationModule.default.prototype instanceof Operations_1.ExtensionOperationRequestHandlerBase) {
                            var request = new Commerce.RegisterRequestHandlersRequest(correlationId);
                            request.requestHandlerTypesAndOptions.push({
                                type: operationModule.default,
                                options: __assign({}, extensionPackage.context)
                            });
                            return extensionPackage.context.runtime.executeAsync(request).then(function () {
                                Commerce.RetailLogger.extensibilityFrameworkNewOperationRequestHandlerAddedSuccessfully(operationManifestItem.operationId, operationManifestItem.operationRequestHandlerPath, correlationId);
                            });
                        }
                        else {
                            Commerce.RetailLogger.extensibilityFrameworkTypeMismatchWhileLoadingNewOperationExtensions(operationManifestItem.operationRequestHandlerPath, "ExtensionOperationRequestHandlerBase", correlationId);
                            var loadError = new Error("Type mismatch while loading new operation extensions.");
                            return Promise.reject(loadError);
                        }
                    }
                    else {
                        Commerce.RetailLogger.extensibilityFrameworkErrorOccurredWhileLoadingNewOperationExtensions(operationManifestItem.operationRequestHandlerPath, correlationId);
                        return Promise.reject(operationManifestItem.operationRequestHandlerPath);
                    }
                };
                OperationsLoader.prototype.addRequestFactory = function (requestFactoryModule, operationManifestItem, correlationId) {
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(requestFactoryModule) &&
                        !Commerce.ObjectExtensions.isNullOrUndefined(requestFactoryModule.default)) {
                        if (Commerce.ObjectExtensions.isFunction(requestFactoryModule.default)) {
                            var factoryAdded = ExtensionOperationMapper.instance.addRequestFactory(requestFactoryModule.default, operationManifestItem.operationId);
                            if (factoryAdded) {
                                Commerce.RetailLogger.extensibilityFrameworkNewOperationRequestFactoryAddedSuccessfully(operationManifestItem.operationId, operationManifestItem.operationRequestFactoryPath, correlationId);
                            }
                            else {
                                Commerce.RetailLogger.extensibilityFrameworkDuplicateNewOperationManifestItem(operationManifestItem.operationId, JSON.stringify(operationManifestItem), correlationId);
                            }
                        }
                        else {
                            Commerce.RetailLogger.extensibilityFrameworkTypeMismatchWhileLoadingNewOperationExtensions(operationManifestItem.operationRequestFactoryPath, "ExtensionOperationRequestFactoryFunctionType", correlationId);
                        }
                    }
                    else {
                        Commerce.RetailLogger.extensibilityFrameworkErrorOccurredWhileLoadingNewOperationExtensions(operationManifestItem.operationRequestHandlerPath, correlationId);
                    }
                };
                return OperationsLoader;
            }(ManifestLoaderBase_1.default));
            exports_1("default", OperationsLoader);
            ExtensionOperationMapper = (function () {
                function ExtensionOperationMapper() {
                    this._requestFactoryMap = Object.create(null);
                }
                Object.defineProperty(ExtensionOperationMapper, "instance", {
                    get: function () {
                        if (Commerce.ObjectExtensions.isNullOrUndefined(ExtensionOperationMapper._instance)) {
                            ExtensionOperationMapper._instance = new ExtensionOperationMapper();
                            Extensibility.SetExtensionOperationProviderInstance(ExtensionOperationMapper._instance);
                        }
                        return ExtensionOperationMapper._instance;
                    },
                    enumerable: true,
                    configurable: true
                });
                ExtensionOperationMapper.prototype.initialize = function (context) {
                    this._context = context;
                };
                ExtensionOperationMapper.prototype.addRequestFactory = function (requestFactory, operationId) {
                    if (Commerce.ObjectExtensions.isNullOrUndefined(this._requestFactoryMap[operationId])) {
                        this._requestFactoryMap[operationId] = requestFactory;
                        return true;
                    }
                    return false;
                };
                ExtensionOperationMapper.prototype.getOperationRequest = function (operationId, actionParameters, correlationId) {
                    var requestFactory = this._requestFactoryMap[operationId];
                    if (Commerce.ObjectExtensions.isFunction(requestFactory)) {
                        return requestFactory(this._context, operationId, actionParameters, correlationId);
                    }
                    return null;
                };
                ExtensionOperationMapper.prototype.operationRequestExists = function (operationId) {
                    return Commerce.ObjectExtensions.isFunction(this._requestFactoryMap[operationId]);
                };
                ExtensionOperationMapper._instance = null;
                return ExtensionOperationMapper;
            }());
        }
    };
});
//# sourceMappingURL=OperationsLoader.js.map
// SIG // Begin signature block
// SIG // MIIjpgYJKoZIhvcNAQcCoIIjlzCCI5MCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // RyISp02dr7jcX4S1Jd01FEAo7/7LoU9h52BNSiA4OAKg
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
// SIG // SEXAQsmbdlsKgEhr/Xmfwb1tbWrJUnMTDXpQzTGCFX0w
// SIG // ghV5AgEBMIGVMH4xCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xKDAm
// SIG // BgNVBAMTH01pY3Jvc29mdCBDb2RlIFNpZ25pbmcgUENB
// SIG // IDIwMTECEzMAAAEDXiUcmR+jHrgAAAAAAQMwDQYJYIZI
// SIG // AWUDBAIBBQCggdAwGQYJKoZIhvcNAQkDMQwGCisGAQQB
// SIG // gjcCAQQwHAYKKwYBBAGCNwIBCzEOMAwGCisGAQQBgjcC
// SIG // ARUwLwYJKoZIhvcNAQkEMSIEICUaaBaJL+rtn+aOLOv+
// SIG // lGlEqNyG1MXzWFL0p+b5ATfXMGQGCisGAQQBgjcCAQwx
// SIG // VjBUoDaANABnAGwAbwBiAGEAbABpAHoAZQAuAGMAdQBs
// SIG // AHQAdQByAGUALgBsAHYALQBMAFYALgBqAHOhGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBAHHYbQo3tPU0TZNMXz5nR3nIOkvKuG31moP4
// SIG // 1ENI0lWMIHgxvjj2aiEHEKU1DW1Ck8ZwHwNXkq9imzBn
// SIG // JlqkgAb6VYG2x8V5Ekh0A5YMxgyMn8LVi3UAaBu+uxYH
// SIG // oi6gA4lH1K9su4x3LW3N4f/7Lg9+eQwxC0mbFfUSlnYd
// SIG // 7UK65pS3HOr4rteAMOba5+ouvyZSCywvcenSexYgBGtV
// SIG // tcsdfHqiOo8DmSTznVWUxH+fexqn98NbnZWTmkqja35G
// SIG // pziS5SS+2UY2l3RvwWTDx/cLr6+Gb61ig5Qui/H9xOHk
// SIG // ekLf02iBVtHO72sd7e+5SnHY8zZv+K/1hgPRpb8Z9Nuh
// SIG // ghLlMIIS4QYKKwYBBAGCNwMDATGCEtEwghLNBgkqhkiG
// SIG // 9w0BBwKgghK+MIISugIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBUQYLKoZIhvcNAQkQAQSgggFABIIBPDCCATgCAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQglrK1
// SIG // dL+ONEMch9SM2OjB4K162XMc27+/aUnsEebxA/QCBlx1
// SIG // QLrKkRgTMjAxOTAzMTIwOTUzMTMuNjM2WjAEgAIB9KCB
// SIG // 0KSBzTCByjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAldB
// SIG // MRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24xLTArBgNVBAsTJE1pY3Jv
// SIG // c29mdCBJcmVsYW5kIE9wZXJhdGlvbnMgTGltaXRlZDEm
// SIG // MCQGA1UECxMdVGhhbGVzIFRTUyBFU046QTg0MS00QkI0
// SIG // LUNBOTMxJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0
// SIG // YW1wIHNlcnZpY2Wggg48MIIE8TCCA9mgAwIBAgITMwAA
// SIG // AN3k3jrsrfPx1AAAAAAA3TANBgkqhkiG9w0BAQsFADB8
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNy
// SIG // b3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDAeFw0xODA4
// SIG // MjMyMDI2NTlaFw0xOTExMjMyMDI2NTlaMIHKMQswCQYD
// SIG // VQQGEwJVUzELMAkGA1UECBMCV0ExEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEtMCsGA1UECxMkTWljcm9zb2Z0IElyZWxhbmQg
// SIG // T3BlcmF0aW9ucyBMaW1pdGVkMSYwJAYDVQQLEx1UaGFs
// SIG // ZXMgVFNTIEVTTjpBODQxLTRCQjQtQ0E5MzElMCMGA1UE
// SIG // AxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgc2VydmljZTCC
// SIG // ASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAI2H
// SIG // FT+p60pioPFxF0JFH0FdkfmtnSYM79IlChuL5gn8JnHT
// SIG // Oe7lvOPihN7+byvgMUb/oZzLtHhgWYNNLr92jGns45bC
// SIG // 9D2XFDJNfZakEvepG+q8UNXJRlpqlEM70H/trnwTv/au
// SIG // R3TTqDBbjol39+7JPkf0iA8Eh8FmXssKfbdc4VUQBsJX
// SIG // sHYc5WCBly5V7mpuJvTd7F6jwuAufpeTOGSRtjwyZVfr
// SIG // 0Gf9mlYmyFZjwdZNGB1YvCbUfvyW3si5YKZitmxCITLL
// SIG // TNYhO/5yWYpA+ZQ6+t4hEQSTNn6kBqCVvlWFBhKNH1wM
// SIG // T23o1UzWBk7P9mGyKqdTs8QBbCwGfC0CAwEAAaOCARsw
// SIG // ggEXMB0GA1UdDgQWBBR3Ufb2yehiI6WG6WMsfZbw6OqP
// SIG // OTAfBgNVHSMEGDAWgBTVYzpcijGQ80N7fEYbxTNoWoVt
// SIG // VTBWBgNVHR8ETzBNMEugSaBHhkVodHRwOi8vY3JsLm1p
// SIG // Y3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9NaWNU
// SIG // aW1TdGFQQ0FfMjAxMC0wNy0wMS5jcmwwWgYIKwYBBQUH
// SIG // AQEETjBMMEoGCCsGAQUFBzAChj5odHRwOi8vd3d3Lm1p
// SIG // Y3Jvc29mdC5jb20vcGtpL2NlcnRzL01pY1RpbVN0YVBD
// SIG // QV8yMDEwLTA3LTAxLmNydDAMBgNVHRMBAf8EAjAAMBMG
// SIG // A1UdJQQMMAoGCCsGAQUFBwMIMA0GCSqGSIb3DQEBCwUA
// SIG // A4IBAQAlzHnuKr77BrCoI0wFCK9a/LlR7hf+c51/X62m
// SIG // oyICoCCSpTk1s4CHchJtWyGrzCnl15FzEYiFXphmZcmQ
// SIG // hQ6C2w6qKFaWlmjJV1nTAvNFglqfhfB0q1FS1szYgp6t
// SIG // BzzJ6mU6mO5wmJ4zgEsBICIgW3GYuNZ1hRz/UxQ3ZuMP
// SIG // Yyz5xajC9mdrcWJJMk/Z0vqfBM6mo6TxalpIsO6S7M/N
// SIG // O9XdOTTghVgSAykXZvxf1y4NXOWAb/dLVXp3f3zHVPQV
// SIG // 13qKaZKN3AvFo+50v/PG9NJNsHcYUUNX2p0RHAgCPahJ
// SIG // 3AGk6LtbxNXg4POWSPBiyJifP6GZpHeJjh/rApNCMIIG
// SIG // cTCCBFmgAwIBAgIKYQmBKgAAAAAAAjANBgkqhkiG9w0B
// SIG // AQsFADCBiDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEyMDAGA1UE
// SIG // AxMpTWljcm9zb2Z0IFJvb3QgQ2VydGlmaWNhdGUgQXV0
// SIG // aG9yaXR5IDIwMTAwHhcNMTAwNzAxMjEzNjU1WhcNMjUw
// SIG // NzAxMjE0NjU1WjB8MQswCQYDVQQGEwJVUzETMBEGA1UE
// SIG // CBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEe
// SIG // MBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYw
// SIG // JAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0Eg
// SIG // MjAxMDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC
// SIG // ggEBAKkdDbx3EYo6IOz8E5f1+n9plGt0VBDVpQoAgoX7
// SIG // 7XxoSyxfxcPlYcJ2tz5mK1vwFVMnBDEfQRsalR3OCROO
// SIG // fGEwWbEwRA/xYIiEVEMM1024OAizQt2TrNZzMFcmgqNF
// SIG // DdDq9UeBzb8kYDJYYEbyWEeGMoQedGFnkV+BVLHPk0yS
// SIG // wcSmXdFhE24oxhr5hoC732H8RsEnHSRnEnIaIYqvS2SJ
// SIG // UGKxXf13Hz3wV3WsvYpCTUBR0Q+cBj5nf/VmwAOWRH7v
// SIG // 0Ev9buWayrGo8noqCjHw2k4GkbaICDXoeByw6ZnNPOcv
// SIG // RLqn9NxkvaQBwSAJk3jN/LzAyURdXhacAQVPIk0CAwEA
// SIG // AaOCAeYwggHiMBAGCSsGAQQBgjcVAQQDAgEAMB0GA1Ud
// SIG // DgQWBBTVYzpcijGQ80N7fEYbxTNoWoVtVTAZBgkrBgEE
// SIG // AYI3FAIEDB4KAFMAdQBiAEMAQTALBgNVHQ8EBAMCAYYw
// SIG // DwYDVR0TAQH/BAUwAwEB/zAfBgNVHSMEGDAWgBTV9lbL
// SIG // j+iiXGJo0T2UkFvXzpoYxDBWBgNVHR8ETzBNMEugSaBH
// SIG // hkVodHRwOi8vY3JsLm1pY3Jvc29mdC5jb20vcGtpL2Ny
// SIG // bC9wcm9kdWN0cy9NaWNSb29DZXJBdXRfMjAxMC0wNi0y
// SIG // My5jcmwwWgYIKwYBBQUHAQEETjBMMEoGCCsGAQUFBzAC
// SIG // hj5odHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtpL2Nl
// SIG // cnRzL01pY1Jvb0NlckF1dF8yMDEwLTA2LTIzLmNydDCB
// SIG // oAYDVR0gAQH/BIGVMIGSMIGPBgkrBgEEAYI3LgMwgYEw
// SIG // PQYIKwYBBQUHAgEWMWh0dHA6Ly93d3cubWljcm9zb2Z0
// SIG // LmNvbS9QS0kvZG9jcy9DUFMvZGVmYXVsdC5odG0wQAYI
// SIG // KwYBBQUHAgIwNB4yIB0ATABlAGcAYQBsAF8AUABvAGwA
// SIG // aQBjAHkAXwBTAHQAYQB0AGUAbQBlAG4AdAAuIB0wDQYJ
// SIG // KoZIhvcNAQELBQADggIBAAfmiFEN4sbgmD+BcQM9naOh
// SIG // IW+z66bM9TG+zwXiqf76V20ZMLPCxWbJat/15/B4vceo
// SIG // niXj+bzta1RXCCtRgkQS+7lTjMz0YBKKdsxAQEGb3FwX
// SIG // /1z5Xhc1mCRWS3TvQhDIr79/xn/yN31aPxzymXlKkVIA
// SIG // rzgPF/UveYFl2am1a+THzvbKegBvSzBEJCI8z+0DpZaP
// SIG // WSm8tv0E4XCfMkon/VWvL/625Y4zu2JfmttXQOnxzplm
// SIG // kIz/amJ/3cVKC5Em4jnsGUpxY517IW3DnKOiPPp/fZZq
// SIG // kHimbdLhnPkd/DjYlPTGpQqWhqS9nhquBEKDuLWAmyI4
// SIG // ILUl5WTs9/S/fmNZJQ96LjlXdqJxqgaKD4kWumGnEcua
// SIG // 2A5HmoDF0M2n0O99g/DhO3EJ3110mCIIYdqwUB5vvfHh
// SIG // AN/nMQekkzr3ZUd46PioSKv33nJ+YWtvd6mBy6cJrDm7
// SIG // 7MbL2IK0cs0d9LiFAR6A+xuJKlQ5slvayA1VmXqHczsI
// SIG // 5pgt6o3gMy4SKfXAL1QnIffIrE7aKLixqduWsqdCosnP
// SIG // GUFN4Ib5KpqjEWYw07t0MkvfY3v1mYovG8chr1m1rtxE
// SIG // PJdQcdeh0sVV42neV8HR3jDA/czmTfsNv11P6Z0eGTgv
// SIG // vM9YBS7vDaBQNdrvCScc1bN+NR4Iuto229Nfj950iEkS
// SIG // oYICzjCCAjcCAQEwgfihgdCkgc0wgcoxCzAJBgNVBAYT
// SIG // AlVTMQswCQYDVQQIEwJXQTEQMA4GA1UEBxMHUmVkbW9u
// SIG // ZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MS0wKwYDVQQLEyRNaWNyb3NvZnQgSXJlbGFuZCBPcGVy
// SIG // YXRpb25zIExpbWl0ZWQxJjAkBgNVBAsTHVRoYWxlcyBU
// SIG // U1MgRVNOOkE4NDEtNEJCNC1DQTkzMSUwIwYDVQQDExxN
// SIG // aWNyb3NvZnQgVGltZS1TdGFtcCBzZXJ2aWNloiMKAQEw
// SIG // BwYFKw4DAhoDFQDppd7VYqc54PjF5U5pK9rjaY8IeKCB
// SIG // gzCBgKR+MHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpX
// SIG // YXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYD
// SIG // VQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAkBgNV
// SIG // BAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEw
// SIG // MA0GCSqGSIb3DQEBBQUAAgUA4DGLNDAiGA8yMDE5MDMx
// SIG // MjA5MzQ0NFoYDzIwMTkwMzEzMDkzNDQ0WjB3MD0GCisG
// SIG // AQQBhFkKBAExLzAtMAoCBQDgMYs0AgEAMAoCAQACAh5P
// SIG // AgH/MAcCAQACAhKAMAoCBQDgMty0AgEAMDYGCisGAQQB
// SIG // hFkKBAIxKDAmMAwGCisGAQQBhFkKAwKgCjAIAgEAAgMH
// SIG // oSChCjAIAgEAAgMBhqAwDQYJKoZIhvcNAQEFBQADgYEA
// SIG // ORj3DD8hbaNY/EAj4NidZ7ndIWN4srEulNrFvXtkYhSC
// SIG // mWH5mpT2B50xxVmCsxU7rBvIlra6vIDK3AHarmAGGlE2
// SIG // RPBHMgSEiyjfix/Qc5RkpaPA1WCh8xamy+v6dHql3uwb
// SIG // zp+vn/DflhmHg8h+pAF+JhYWRtpdI8/gzTCt6MIxggMN
// SIG // MIIDCQIBATCBkzB8MQswCQYDVQQGEwJVUzETMBEGA1UE
// SIG // CBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEe
// SIG // MBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYw
// SIG // JAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0Eg
// SIG // MjAxMAITMwAAAN3k3jrsrfPx1AAAAAAA3TANBglghkgB
// SIG // ZQMEAgEFAKCCAUowGgYJKoZIhvcNAQkDMQ0GCyqGSIb3
// SIG // DQEJEAEEMC8GCSqGSIb3DQEJBDEiBCBhIFLmt0sR0Tro
// SIG // pZpsYG28vtfrEJ/CKEVbqJluplnlITCB+gYLKoZIhvcN
// SIG // AQkQAi8xgeowgecwgeQwgb0EIErg4nDzh2o/LyQ46m0c
// SIG // /VC4PriQU+Lwkgt8r8df6FgYMIGYMIGApH4wfDELMAkG
// SIG // A1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAO
// SIG // BgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29m
// SIG // dCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0
// SIG // IFRpbWUtU3RhbXAgUENBIDIwMTACEzMAAADd5N467K3z
// SIG // 8dQAAAAAAN0wIgQg77oqUimeWn+scJkwVNQ3lQUY5P+U
// SIG // j/AvvnNXQrsyMPEwDQYJKoZIhvcNAQELBQAEggEAPXCz
// SIG // C9VjLd9Oz6AA4zkRd3h7a9bGO/WFUeDFsvJ+ekC5KPZi
// SIG // Agfoz10vm+pcP6zWpZ2c+4ILLM5Z/QNrYwSamS6AjGEh
// SIG // xlurnJV8N3g7BOGgMAvUSa8k09HrJ1UKV6QqGL+UB1kt
// SIG // gu3gPliV6YsCPjzr1K3+wrhMepsYJN9YnMsphFwyq2tq
// SIG // P9ayEN5T70oahk5YheiUt/DnfXmWSRlsY+ICyUKr37xd
// SIG // p7k/tpUJXFcBiF+ejP0mbPgBX8QXvnJ2g4lstb6BXJzy
// SIG // UZjOaJyRskuLu/zOYFGjSZ/FVW27PDWKEoiIyHgMOFqk
// SIG // 7U6UHc/Yk6P3Rf0oEP7pWW9oBXlWzA==
// SIG // End signature block
