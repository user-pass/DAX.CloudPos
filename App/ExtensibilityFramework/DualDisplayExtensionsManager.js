System.register(["PosApi/Extend/DualDisplay", "./Extension", "./ExtensionNameGenerator"], function (exports_1, context_1) {
    "use strict";
    var DualDisplay_1, Extension_1, Messaging, ExtensionNameGenerator_1, DualDisplayExtensionsManager;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (DualDisplay_1_1) {
                DualDisplay_1 = DualDisplay_1_1;
            },
            function (Extension_1_1) {
                Extension_1 = Extension_1_1;
            },
            function (ExtensionNameGenerator_1_1) {
                ExtensionNameGenerator_1 = ExtensionNameGenerator_1_1;
            }
        ],
        execute: function () {
            Messaging = Commerce.Messaging;
            DualDisplayExtensionsManager = (function () {
                function DualDisplayExtensionsManager(loadModuleImpl, createAndInsertHtmlImpl, renderHtmlImpl) {
                    this._customControls = [];
                    if (Commerce.Config.isDualDisplay) {
                        DualDisplay.ViewModels.DualDisplayViewModel.dualDisplayExtensionManager = this;
                    }
                    this._loadModuleImpl = loadModuleImpl;
                    this._createAndInsertHtmlImpl = createAndInsertHtmlImpl;
                    this._renderHtmlImpl = renderHtmlImpl;
                }
                DualDisplayExtensionsManager.prototype.loadAsync = function (extensionPackage, dualDisplayConfig) {
                    var extensionLoadPromises = [];
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(dualDisplayConfig)) {
                        if (!Commerce.ObjectExtensions.isNullOrUndefined(dualDisplayConfig.customControl)) {
                            extensionLoadPromises.push(this._loadCustomControl(extensionPackage, dualDisplayConfig.customControl));
                        }
                    }
                    return Promise.all(extensionLoadPromises).then(function () { return void 0; });
                };
                DualDisplayExtensionsManager.prototype.getCustomControls = function () {
                    return this._getCustomControls()
                        .map(function (controlWrapper) {
                        var packageInfo = controlWrapper.extensionPackage.context.extensionPackageInfo;
                        return new Commerce.Extensibility.DualDisplayCustomControlViewModel(controlWrapper.extension, controlWrapper.messageChannel, packageInfo.publisher, packageInfo.name, packageInfo.version);
                    });
                };
                DualDisplayExtensionsManager.prototype._getCustomControls = function () {
                    var controlWrappers = [];
                    if (Commerce.ArrayExtensions.hasElements(this._customControls)) {
                        this._customControls.forEach(function (controlDetails) {
                            var extensionPackage = controlDetails.package;
                            var posToControlPort = new Messaging.PosMessagePort();
                            var controlToPosPort = new Messaging.PosMessagePort();
                            var commandContext = {
                                extensionPackageInfo: extensionPackage.packageInfo,
                                logger: extensionPackage.context.logger,
                                resources: extensionPackage.context.resources,
                                messageChannel: new Messaging.MessageChannelEndpoint(controlToPosPort, posToControlPort)
                            };
                            var controlWrapper = {
                                extension: new controlDetails.extension(controlDetails.id, commandContext),
                                messageChannel: new Messaging.MessageChannelEndpoint(posToControlPort, controlToPosPort),
                                extensionPackage: extensionPackage
                            };
                            controlWrappers.push(controlWrapper);
                        });
                    }
                    return controlWrappers;
                };
                DualDisplayExtensionsManager.prototype._loadCustomControl = function (extensionPackage, manifestItem) {
                    var _this = this;
                    var correlationId = Commerce.LoggerHelper.getNewCorrelationId();
                    var extensionPointName = "DualDisplay.CustomControl";
                    var extensionPointType = Commerce.Extensibility.ExtensionPointType.CustomControl;
                    var extensionName = ExtensionNameGenerator_1.default.getCustomControlExtensionName(manifestItem);
                    return Promise.resolve().then(function () {
                        var manifestValidationErrorDetails;
                        var controlId;
                        if (Commerce.ObjectExtensions.isNullOrUndefined(manifestItem)) {
                            manifestValidationErrorDetails = {
                                errorMessage: "Manifest item cannot be null or undefined.",
                                controlName: "Unknown"
                            };
                        }
                        else if (Commerce.StringExtensions.isNullOrWhitespace(manifestItem.controlName)) {
                            manifestValidationErrorDetails = {
                                errorMessage: "Manifest item must contain a control name.",
                                controlName: "Unknown"
                            };
                        }
                        else if (Commerce.StringExtensions.isNullOrWhitespace(manifestItem.htmlPath)) {
                            manifestValidationErrorDetails = {
                                errorMessage: "Manifest item must contain an html path.",
                                controlName: manifestItem.controlName
                            };
                        }
                        else if (Commerce.StringExtensions.isNullOrWhitespace(manifestItem.modulePath)) {
                            manifestValidationErrorDetails = {
                                errorMessage: "Manifest item must contain a module path.",
                                controlName: manifestItem.controlName
                            };
                        }
                        else if (_this._customControls.length > 0) {
                            manifestValidationErrorDetails = {
                                errorMessage: "A dual display custom control is already defined.",
                                controlName: manifestItem.controlName
                            };
                        }
                        else {
                            controlId = _this.getCustomControlId(manifestItem.controlName, extensionPackage.packageInfo.publisher, extensionPackage.packageInfo.name);
                            if (!Commerce.ObjectExtensions.isNullOrUndefined(DualDisplayExtensionsManager.controlsByControlId[controlId])) {
                                manifestValidationErrorDetails = {
                                    errorMessage: "Control with id '" + controlId + "' already exists.",
                                    controlName: manifestItem.controlName
                                };
                            }
                        }
                        if (!Commerce.ObjectExtensions.isNullOrUndefined(manifestValidationErrorDetails)) {
                            Commerce.RetailLogger.dualDisplayExtensionsLoaderCustomControlManifestValidationFailed(manifestValidationErrorDetails.controlName, manifestValidationErrorDetails.errorMessage, extensionPackage.packageInfo.name, extensionPackage.packageInfo.publisher, extensionPackage.packageInfo.version);
                            var loadError = new Error(manifestValidationErrorDetails.errorMessage);
                            return Promise.reject(loadError);
                        }
                        var extensionPath = _this._getExtensionPath(extensionPackage.packageInfo.baseUrl, manifestItem.modulePath);
                        return _this._loadControlHtmlFragment(extensionPackage, manifestItem.htmlPath).then(function () {
                            return _this._loadModuleImpl(extensionPath)
                                .then(function (controlModule) {
                                if (!Commerce.ObjectExtensions.isNullOrUndefined(controlModule) &&
                                    !Commerce.ObjectExtensions.isNullOrUndefined(controlModule.default)) {
                                    var controlType = controlModule.default;
                                    if (controlType.prototype instanceof DualDisplay_1.DualDisplayCustomControlBase) {
                                        var controlDetails = { extension: controlType, package: extensionPackage, id: controlId };
                                        _this._customControls.push(controlDetails);
                                        Commerce.RetailLogger.dualDisplayExtensionsLoaderCustomControlAdded(extensionPackage.packageInfo.name, extensionPackage.packageInfo.publisher, extensionPackage.packageInfo.version);
                                        return Promise.resolve();
                                    }
                                    else {
                                        Commerce.RetailLogger.dualDisplayExtensionsLoaderCustomControlLoadFailedDueToInvalidControlType(extensionPath, extensionPackage.packageInfo.name, extensionPackage.packageInfo.publisher, extensionPackage.packageInfo.version);
                                        var loadError = new Error("Invalid control type");
                                        return Promise.reject(loadError);
                                    }
                                }
                                else {
                                    Commerce.RetailLogger.dualDisplayExtensionsLoaderCustomControlLoadFailedDueToInvalidModule(extensionPath, extensionPackage.packageInfo.name, extensionPackage.packageInfo.publisher, extensionPackage.packageInfo.version);
                                    var loadError = new Error("Invalid module");
                                    return Promise.reject(loadError);
                                }
                            });
                        }, function (error) {
                            Commerce.RetailLogger.dualDisplayExtensionsLoaderCustomControlLoadFailedDueToErrorImportingModule(extensionPath, JSON.stringify(error), extensionPackage.packageInfo.name, extensionPackage.packageInfo.publisher, extensionPackage.packageInfo.version);
                            return Promise.reject(error);
                        });
                    }).then(function () {
                        var extension = new Extension_1.default(extensionPointType, extensionPointName, extensionName);
                        extensionPackage.addExtension(extension);
                    }, function (reason) {
                        var loadError = Commerce.ErrorHelper.toJavascriptError(reason, correlationId);
                        var extension = new Extension_1.default(extensionPointType, extensionPointName, extensionName, loadError);
                        extensionPackage.addExtension(extension);
                    });
                };
                DualDisplayExtensionsManager.prototype._loadControlHtmlFragment = function (extensionPackage, htmlPath) {
                    var _this = this;
                    var promise = new Promise(function (resolve, reject) {
                        if (Commerce.StringExtensions.isNullOrWhitespace(htmlPath)) {
                            resolve();
                        }
                        else {
                            var htmlFragmentPath = extensionPackage.packageInfo.baseUrl + "/" + htmlPath;
                            var fragmentWrapper_1 = _this._createAndInsertHtmlImpl(encodeURIComponent(htmlFragmentPath));
                            if (Commerce.ObjectExtensions.isNullOrUndefined(fragmentWrapper_1)) {
                                var errorMessage = "Unable to create and insert html for extension control.";
                                Commerce.RetailLogger.extensibilityFrameworkUnableToCreateAndInsertHtmlFragmentForControl(errorMessage, extensionPackage.packageInfo.name, extensionPackage.packageInfo.publisher, extensionPackage.packageInfo.version);
                                throw new Error(errorMessage);
                            }
                            _this._renderHtmlImpl(htmlFragmentPath, fragmentWrapper_1).then(function () {
                                resolve();
                            }).catch(function (error) {
                                fragmentWrapper_1.parentNode.removeChild(fragmentWrapper_1);
                                Commerce.RetailLogger.extensibilityFrameworkControlsUnableToLoadControlFailedToRenderHtmlFragment(JSON.stringify(error), extensionPackage.packageInfo.name, extensionPackage.packageInfo.publisher, extensionPackage.packageInfo.version);
                                reject(error);
                            });
                        }
                    });
                    return promise.catch(function (reason) {
                        Commerce.RetailLogger.extensibilityFrameworkControlsUnableToLoadControlHtmlFragment(JSON.stringify(reason), extensionPackage.packageInfo.name, extensionPackage.packageInfo.publisher, extensionPackage.packageInfo.version);
                        return Promise.reject(reason);
                    });
                };
                DualDisplayExtensionsManager.prototype.getCustomControlId = function (controlName, publisherName, packageName) {
                    return Commerce.StringExtensions.format(DualDisplayExtensionsManager.CUSTOM_CONTROL_ID_FORMAT_STRING, publisherName, packageName, controlName);
                };
                DualDisplayExtensionsManager.prototype._getExtensionPath = function (baseUrl, relativeModulePath) {
                    return baseUrl + "/" + relativeModulePath;
                };
                DualDisplayExtensionsManager.CUSTOM_CONTROL_ID_FORMAT_STRING = "dualDisplayCustomControl_{0}_{1}_{2}";
                DualDisplayExtensionsManager.controlsByControlId = Object.create(null);
                return DualDisplayExtensionsManager;
            }());
            exports_1("DualDisplayExtensionsManager", DualDisplayExtensionsManager);
        }
    };
});
//# sourceMappingURL=DualDisplayExtensionsManager.js.map
// SIG // Begin signature block
// SIG // MIIjpgYJKoZIhvcNAQcCoIIjlzCCI5MCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // eIxQvc+mraD3mEt9ZhIOEoYJG1uJOQnJwHq1S1eUy0Cg
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
// SIG // ARUwLwYJKoZIhvcNAQkEMSIEIHrsy2XBTMO26m4gKsaa
// SIG // QMlNqCFX8iI1lvEIe7gkDBqlMGQGCisGAQQBgjcCAQwx
// SIG // VjBUoDaANABnAGwAbwBiAGEAbABpAHoAZQAuAGMAdQBs
// SIG // AHQAdQByAGUALgBsAHYALQBMAFYALgBqAHOhGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBAE4oDogI2l2J3u/LU684BAkVGMO3dY4jLXcU
// SIG // Oz3I9YzWQ8v83/0V52W9MsxrD3VdHQX6JVyhHZQJAY3t
// SIG // ugdKtlz5i++4AzwE9OxrUfdwS1y4ashHKqVXjdGWpiK+
// SIG // qLo9DxHf38tiwoJpygmQpdszJlXR1n0FZBzI5LA8axFt
// SIG // YE4BKZcuC8NJR90ohosoBMVwkErzu6SR5ONZllTPLqzq
// SIG // aVMgauY+w08HDWfYAMHvFc2wKr2hHHLDslcTUCI6Nmpk
// SIG // a5Vhd8RTItZ1yOf4b9YzxEwjOpKrljqC6ZzR80PhK6D5
// SIG // BOPOwjDAXD4cAQiFIyFd6knX80DTY5h0lA5giUv9QnGh
// SIG // ghLlMIIS4QYKKwYBBAGCNwMDATGCEtEwghLNBgkqhkiG
// SIG // 9w0BBwKgghK+MIISugIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBUQYLKoZIhvcNAQkQAQSgggFABIIBPDCCATgCAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQgRYE4
// SIG // J4Maq5LnB9IXkvcloESTSLtKFhWps6IXucUwQd0CBlxn
// SIG // dmPYZhgTMjAxOTAzMTIwOTUzMTIuODczWjAEgAIB9KCB
// SIG // 0KSBzTCByjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAldB
// SIG // MRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24xLTArBgNVBAsTJE1pY3Jv
// SIG // c29mdCBJcmVsYW5kIE9wZXJhdGlvbnMgTGltaXRlZDEm
// SIG // MCQGA1UECxMdVGhhbGVzIFRTUyBFU046QTI0MC00Qjgy
// SIG // LTEzMEUxJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0
// SIG // YW1wIHNlcnZpY2Wggg48MIIE8TCCA9mgAwIBAgITMwAA
// SIG // AOCyGKnU0cK09wAAAAAA4DANBgkqhkiG9w0BAQsFADB8
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNy
// SIG // b3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDAeFw0xODA4
// SIG // MjMyMDI3MDFaFw0xOTExMjMyMDI3MDFaMIHKMQswCQYD
// SIG // VQQGEwJVUzELMAkGA1UECBMCV0ExEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEtMCsGA1UECxMkTWljcm9zb2Z0IElyZWxhbmQg
// SIG // T3BlcmF0aW9ucyBMaW1pdGVkMSYwJAYDVQQLEx1UaGFs
// SIG // ZXMgVFNTIEVTTjpBMjQwLTRCODItMTMwRTElMCMGA1UE
// SIG // AxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgc2VydmljZTCC
// SIG // ASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMKX
// SIG // +GcOx6ZsnHsUxLlG5omyJAkM/S2KrJ4J622I2UZw2hrj
// SIG // byhW1uUfrJlq0JdnKDKHNucMmh9Mcga12ITNBzl8+F11
// SIG // 9N3iERCB3lyH8GUYhNcUTAnh38aEdlDWFst2IFP+PrtD
// SIG // HXlV65fLmf+Mz0+8hsGSxJbBfy+uSFFP+uprXFauYX5J
// SIG // 9xgrD6kL53e1QeuAAKjRhpUe5LeOWleDfcD6m6XzCJtk
// SIG // FwbEwXUKrCU/QB8xbrQOniqb8kttbF3H+k6KI6sz+3KQ
// SIG // UO0Sc3TsddGNcOEOF8h4ELPgY+IIQWT3gBoXHKwV4Wf2
// SIG // /LPtPIonFSSxcmG1YaraLhaY9ymHIPMCAwEAAaOCARsw
// SIG // ggEXMB0GA1UdDgQWBBRrQdMKtjnOrO/+njita5JtdoCH
// SIG // 6DAfBgNVHSMEGDAWgBTVYzpcijGQ80N7fEYbxTNoWoVt
// SIG // VTBWBgNVHR8ETzBNMEugSaBHhkVodHRwOi8vY3JsLm1p
// SIG // Y3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9NaWNU
// SIG // aW1TdGFQQ0FfMjAxMC0wNy0wMS5jcmwwWgYIKwYBBQUH
// SIG // AQEETjBMMEoGCCsGAQUFBzAChj5odHRwOi8vd3d3Lm1p
// SIG // Y3Jvc29mdC5jb20vcGtpL2NlcnRzL01pY1RpbVN0YVBD
// SIG // QV8yMDEwLTA3LTAxLmNydDAMBgNVHRMBAf8EAjAAMBMG
// SIG // A1UdJQQMMAoGCCsGAQUFBwMIMA0GCSqGSIb3DQEBCwUA
// SIG // A4IBAQALH96d2ZLkNbrGBvx8h0Soj3rd9QHsihiVg1BT
// SIG // 9hnCrXnm4rWXCFwflHUJpUyv6XI0h8PyX6WrLyZ2i75n
// SIG // ByufOjebZQQY7S40V3hzwh7Dlnj1X7oCiNPrPkgYmHfL
// SIG // nq4MAJDNFmtH7bq4LHWcuxiMr9a3FAOrUgcdZ4DF+sbG
// SIG // wBk7UF1CjbkzHfhmx5WJWP66x+bLSdSZ+9nSEVwx413i
// SIG // Lgp2zTeRj8LBZVkHDra0CM4cr9zzXA7uGK6270lfgw2N
// SIG // oS4V2F6I3CYfICZumpibPor70g8zvmJcQtvOMNzrIsml
// SIG // U6rXuB9UMJrB6vLOBWcLYIjGruAMbJMz1p/Ay0RJMIIG
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
// SIG // U1MgRVNOOkEyNDAtNEI4Mi0xMzBFMSUwIwYDVQQDExxN
// SIG // aWNyb3NvZnQgVGltZS1TdGFtcCBzZXJ2aWNloiMKAQEw
// SIG // BwYFKw4DAhoDFQDGeaSM5d52mrIdCqQkaft7CFIL0aCB
// SIG // gzCBgKR+MHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpX
// SIG // YXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYD
// SIG // VQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAkBgNV
// SIG // BAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEw
// SIG // MA0GCSqGSIb3DQEBBQUAAgUA4DGYbzAiGA8yMDE5MDMx
// SIG // MjEwMzExMVoYDzIwMTkwMzEzMTAzMTExWjB3MD0GCisG
// SIG // AQQBhFkKBAExLzAtMAoCBQDgMZhvAgEAMAoCAQACAgjR
// SIG // AgH/MAcCAQACAhIcMAoCBQDgMunvAgEAMDYGCisGAQQB
// SIG // hFkKBAIxKDAmMAwGCisGAQQBhFkKAwKgCjAIAgEAAgMH
// SIG // oSChCjAIAgEAAgMBhqAwDQYJKoZIhvcNAQEFBQADgYEA
// SIG // fkrEKa8AXZbD8nrmvQwCpFlaeX0EwAboqDt+AjHdnreM
// SIG // rhSeqEqQbfl7fE/UFXtxy/WpReOHaaFRfvuvqTm4NrWH
// SIG // gJhSjiJyqQ4Bhux7seneY7DfwNn48qQ+hgFEkZmugqa+
// SIG // oIYNINkNyolmDui37p4+VfkjVPSYotAOhtlic6kxggMN
// SIG // MIIDCQIBATCBkzB8MQswCQYDVQQGEwJVUzETMBEGA1UE
// SIG // CBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEe
// SIG // MBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYw
// SIG // JAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0Eg
// SIG // MjAxMAITMwAAAOCyGKnU0cK09wAAAAAA4DANBglghkgB
// SIG // ZQMEAgEFAKCCAUowGgYJKoZIhvcNAQkDMQ0GCyqGSIb3
// SIG // DQEJEAEEMC8GCSqGSIb3DQEJBDEiBCDZJ+Nyifra7Yes
// SIG // Y/uIn0ybuWMEM5agtnMGCfGJme7c2zCB+gYLKoZIhvcN
// SIG // AQkQAi8xgeowgecwgeQwgb0EIKWBL1WkMyiyV3KDUZA9
// SIG // VWTnDA04P49yXZqgu9GsQl+QMIGYMIGApH4wfDELMAkG
// SIG // A1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAO
// SIG // BgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29m
// SIG // dCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0
// SIG // IFRpbWUtU3RhbXAgUENBIDIwMTACEzMAAADgship1NHC
// SIG // tPcAAAAAAOAwIgQg8Wz4J3Ka0IjirhyGmsWtQMXt/t/U
// SIG // cgmAtxV2Wye9L/wwDQYJKoZIhvcNAQELBQAEggEAt/7l
// SIG // nBOtckdH3kJ30WKrgTxRO1F21Zf6BAAtxGiPKafgtz11
// SIG // 6afrNn1jWNXcmeabclwtPlgOyr7znj4BB4c9a5oWjcV1
// SIG // CpLbaU4M7llI5gEQ+tAVyMTuoTj5ClgWKLr0wlPzmd7w
// SIG // rxfF5gSJntZuNtUQlYtiYCLqC5zkdkEZO7P5FUsu8Q4t
// SIG // LP0aC21gCCBv8C90brDfG3HOyJmlwTtrVvak/8bzdtnV
// SIG // BDVbf30iX7yOUBSc+R8HI+TFAuS+YdF/sjb5iasNXCD1
// SIG // AYRsToWfBK/T4BtUHPmprXdyJLOzAG4wdjdorIwvtiBh
// SIG // 8KhyGEJaum3H6TV6ZpvcSB5zg+UFUA==
// SIG // End signature block
