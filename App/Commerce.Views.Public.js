"use strict";
var Commerce;
(function (Commerce) {
    var Extensibility;
    (function (Extensibility) {
        "use strict";
        var DisposableViewControllerBase = (function () {
            function DisposableViewControllerBase(saveInHistory) {
                this.isBackNavigationEnabled = true;
                this._saveInHistory = true;
                this._saveInHistory = saveInHistory;
                this._element = null;
            }
            Object.defineProperty(DisposableViewControllerBase.prototype, "saveInHistory", {
                get: function () {
                    return this._saveInHistory;
                },
                enumerable: true,
                configurable: true
            });
            DisposableViewControllerBase.prototype.getViewContainer = function () {
                if (Commerce.ObjectExtensions.isNullOrUndefined(this._element)) {
                    throw "Element is available only after page is created";
                }
                return this._element;
            };
            DisposableViewControllerBase.prototype.onReady = function (element) {
                this._element = element;
            };
            DisposableViewControllerBase.prototype.unload = function () {
                this._element = null;
            };
            DisposableViewControllerBase.prototype.dispose = function () {
                var _this = this;
                setTimeout(function () {
                    if (_this._element) {
                        WinJS.Utilities.disposeSubTree(_this._element);
                    }
                    Commerce.ObjectExtensions.disposeAllProperties(_this);
                }, DisposableViewControllerBase.VIEW_CONTROLLER_DISPOSAL_DELAY_IN_MILLISECONDS);
            };
            DisposableViewControllerBase.VIEW_CONTROLLER_DISPOSAL_DELAY_IN_MILLISECONDS = 140 * 1000;
            return DisposableViewControllerBase;
        }());
        Extensibility.DisposableViewControllerBase = DisposableViewControllerBase;
    })(Extensibility = Commerce.Extensibility || (Commerce.Extensibility = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Extensibility;
    (function (Extensibility) {
        var ValueFormatterManager = (function () {
            function ValueFormatterManager() {
            }
            Object.defineProperty(ValueFormatterManager, "instance", {
                get: function () {
                    if (Commerce.ObjectExtensions.isNullOrUndefined(ValueFormatterManager._instance)) {
                        ValueFormatterManager._instance = new ValueFormatterManager();
                    }
                    return ValueFormatterManager._instance;
                },
                enumerable: true,
                configurable: true
            });
            return ValueFormatterManager;
        }());
        Extensibility.ValueFormatterManager = ValueFormatterManager;
    })(Extensibility = Commerce.Extensibility || (Commerce.Extensibility = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var UI;
    (function (UI) {
        var Sdk;
        (function (Sdk) {
            var PosSdkException = (function () {
                function PosSdkException(originatingComponent, message) {
                    this._originatingComponent = originatingComponent;
                    this._exceptionMessage = message;
                }
                Object.defineProperty(PosSdkException.prototype, "message", {
                    get: function () {
                        return this._exceptionMessage;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PosSdkException.prototype, "originatingComponent", {
                    get: function () {
                        return this._originatingComponent;
                    },
                    enumerable: true,
                    configurable: true
                });
                return PosSdkException;
            }());
            Sdk.PosSdkException = PosSdkException;
        })(Sdk = UI.Sdk || (UI.Sdk = {}));
    })(UI = Commerce.UI || (Commerce.UI = {}));
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
    var UI;
    (function (UI) {
        var Sdk;
        (function (Sdk) {
            var InvalidConstructorStateException = (function (_super) {
                __extends(InvalidConstructorStateException, _super);
                function InvalidConstructorStateException() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                InvalidConstructorStateException.prototype.getType = function () {
                    return "InvalidConstructorStateException";
                };
                return InvalidConstructorStateException;
            }(Sdk.PosSdkException));
            Sdk.InvalidConstructorStateException = InvalidConstructorStateException;
        })(Sdk = UI.Sdk || (UI.Sdk = {}));
    })(UI = Commerce.UI || (Commerce.UI = {}));
})(Commerce || (Commerce = {}));
//# sourceMappingURL=Commerce.Views.Public.js.map
// SIG // Begin signature block
// SIG // MIIjpQYJKoZIhvcNAQcCoIIjljCCI5ICAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // TEssrRgitzR0w0s8t4qGSoGj4SiQy92j6ZhyPfpwr+Gg
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
// SIG // SEXAQsmbdlsKgEhr/Xmfwb1tbWrJUnMTDXpQzTGCFXww
// SIG // ghV4AgEBMIGVMH4xCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xKDAm
// SIG // BgNVBAMTH01pY3Jvc29mdCBDb2RlIFNpZ25pbmcgUENB
// SIG // IDIwMTECEzMAAAEDXiUcmR+jHrgAAAAAAQMwDQYJYIZI
// SIG // AWUDBAIBBQCggdAwGQYJKoZIhvcNAQkDMQwGCisGAQQB
// SIG // gjcCAQQwHAYKKwYBBAGCNwIBCzEOMAwGCisGAQQBgjcC
// SIG // ARUwLwYJKoZIhvcNAQkEMSIEIPsG3t7dMm4zqpfKcsDi
// SIG // 0ZYK55AzHDm7Y5gWDvRTGaVMMGQGCisGAQQBgjcCAQwx
// SIG // VjBUoDaANABnAGwAbwBiAGEAbABpAHoAZQAuAGMAdQBs
// SIG // AHQAdQByAGUALgBsAHYALQBMAFYALgBqAHOhGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBAEAEy/Q6J0/JcDaAys4MP2VKtzzvvOJWvFx5
// SIG // Wi5tzFZqY54TDKYtONqtV2qPRvsfL4C73+AjOZrk9jsO
// SIG // bKeg2L0j+7AnEgJ+jXeFh25ibJaWYQxG1PLd27KyIpNf
// SIG // RvjM4NDZMERRLFtsixCpLQgsLVTGMM4idG3YXsoDckZp
// SIG // QwptK4hIOVkVwSbEIYQBFIKzAAs8O18pVoEPOTSCKjDG
// SIG // vD1JuuD4+zp67rhnd1uIxO4DLr0CID2tQ8uqtVpttMte
// SIG // mOCiiixxS0gdp1UIbHzpB6QKJe8EeJEO9+TDIeUzA9m0
// SIG // mh5WDMXgh7a7JtaQjMgpWGDvtu0VkFAUIpq6tukD9Cqh
// SIG // ghLkMIIS4AYKKwYBBAGCNwMDATGCEtAwghLMBgkqhkiG
// SIG // 9w0BBwKgghK9MIISuQIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBUAYLKoZIhvcNAQkQAQSgggE/BIIBOzCCATcCAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQgUvIo
// SIG // OTA94MzbKSc4PYBBC/9IMJlJvqq5MMRtTx4mkQYCBlx0
// SIG // OSVZThgSMjAxOTAzMTIwOTU3MDguMTRaMASAAgH0oIHQ
// SIG // pIHNMIHKMQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSUwIwYDVQQL
// SIG // ExxNaWNyb3NvZnQgQW1lcmljYSBPcGVyYXRpb25zMSYw
// SIG // JAYDVQQLEx1UaGFsZXMgVFNTIEVTTjpFQUNFLUUzMTYt
// SIG // QzkxRDElMCMGA1UEAxMcTWljcm9zb2Z0IFRpbWUtU3Rh
// SIG // bXAgU2VydmljZaCCDjwwggTxMIID2aADAgECAhMzAAAA
// SIG // 8XTF0a7jPZs9AAAAAADxMA0GCSqGSIb3DQEBCwUAMHwx
// SIG // CzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9u
// SIG // MRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jv
// SIG // c29mdCBUaW1lLVN0YW1wIFBDQSAyMDEwMB4XDTE4MTAy
// SIG // NDIxMTQyM1oXDTIwMDExMDIxMTQyM1owgcoxCzAJBgNV
// SIG // BAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYD
// SIG // VQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQg
// SIG // Q29ycG9yYXRpb24xJTAjBgNVBAsTHE1pY3Jvc29mdCBB
// SIG // bWVyaWNhIE9wZXJhdGlvbnMxJjAkBgNVBAsTHVRoYWxl
// SIG // cyBUU1MgRVNOOkVBQ0UtRTMxNi1DOTFEMSUwIwYDVQQD
// SIG // ExxNaWNyb3NvZnQgVGltZS1TdGFtcCBTZXJ2aWNlMIIB
// SIG // IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqKuF
// SIG // qFhYEcO5zywdUra8GKf/7bHNzFiNjcET36MRwrcKSR10
// SIG // fZjbE5Dxun53Xsjv3CUQngR9QUoICNY5c/D1SfkleJE4
// SIG // DhSD3s+gKyfA3zi63bOvDVdGEpW4+7PGdzMCLWwdQ3Km
// SIG // xhPhwI4WoKZL6JyOe6OBSn1FCbKm53htVqafqddYmzIj
// SIG // jXFa9uDyqBCtwHIOVlknHa1j3PXji8a+z19J7fknw3/E
// SIG // LED6ZCuOz79CwkYaeoVoe4yZ9Aezjd2rAwcTYTwDN0L+
// SIG // ZzyDqDGfdTiIV9x6gbC834hhSysW0gMiIJYhfpeyM6KW
// SIG // fSF6cWa95mCKRFKB3fsqAo6DNRUbzQIDAQABo4IBGzCC
// SIG // ARcwHQYDVR0OBBYEFGbE4+n01f/MrPvREZr7i8bav5dS
// SIG // MB8GA1UdIwQYMBaAFNVjOlyKMZDzQ3t8RhvFM2hahW1V
// SIG // MFYGA1UdHwRPME0wS6BJoEeGRWh0dHA6Ly9jcmwubWlj
// SIG // cm9zb2Z0LmNvbS9wa2kvY3JsL3Byb2R1Y3RzL01pY1Rp
// SIG // bVN0YVBDQV8yMDEwLTA3LTAxLmNybDBaBggrBgEFBQcB
// SIG // AQROMEwwSgYIKwYBBQUHMAKGPmh0dHA6Ly93d3cubWlj
// SIG // cm9zb2Z0LmNvbS9wa2kvY2VydHMvTWljVGltU3RhUENB
// SIG // XzIwMTAtMDctMDEuY3J0MAwGA1UdEwEB/wQCMAAwEwYD
// SIG // VR0lBAwwCgYIKwYBBQUHAwgwDQYJKoZIhvcNAQELBQAD
// SIG // ggEBADq1Z4cASPr4vwA9jHkZZR2MINW1Aj+bBTgAOZBg
// SIG // FRg4g3AgwzxnjojIyT2Q7wJt1wg0HZGCQs0dfK0Ryvvx
// SIG // O+s7Pft/7wKagGVUvpCavaknhb7rY8odhRuNhfxVDmvu
// SIG // GlfSapPE1tEPUQVQq8O5VMYoAS5/l/QTO3ySaxbY6Yex
// SIG // qL/n3EI+ffUdV4IrPQXw1/OIdQxfQo9dE1fJX0UWg+CJ
// SIG // 9DU+rw1R7KvzBe+ZfRiP5YxHvhkcWjLW7ta4gU9KQ0WZ
// SIG // Py1WPIk8K2p5erfGoldk2PqbihQk24VKtbaADCM+EXna
// SIG // ZAIZ1jey8Wu/tSAnYTQabSSQ5hqqFLuFwNRQnH0wggZx
// SIG // MIIEWaADAgECAgphCYEqAAAAAAACMA0GCSqGSIb3DQEB
// SIG // CwUAMIGIMQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMTIwMAYDVQQD
// SIG // EylNaWNyb3NvZnQgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRo
// SIG // b3JpdHkgMjAxMDAeFw0xMDA3MDEyMTM2NTVaFw0yNTA3
// SIG // MDEyMTQ2NTVaMHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAk
// SIG // BgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAy
// SIG // MDEwMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKC
// SIG // AQEAqR0NvHcRijog7PwTl/X6f2mUa3RUENWlCgCChfvt
// SIG // fGhLLF/Fw+Vhwna3PmYrW/AVUycEMR9BGxqVHc4JE458
// SIG // YTBZsTBED/FgiIRUQwzXTbg4CLNC3ZOs1nMwVyaCo0UN
// SIG // 0Or1R4HNvyRgMlhgRvJYR4YyhB50YWeRX4FUsc+TTJLB
// SIG // xKZd0WETbijGGvmGgLvfYfxGwScdJGcSchohiq9LZIlQ
// SIG // YrFd/XcfPfBXday9ikJNQFHRD5wGPmd/9WbAA5ZEfu/Q
// SIG // S/1u5ZrKsajyeioKMfDaTgaRtogINeh4HLDpmc085y9E
// SIG // uqf03GS9pAHBIAmTeM38vMDJRF1eFpwBBU8iTQIDAQAB
// SIG // o4IB5jCCAeIwEAYJKwYBBAGCNxUBBAMCAQAwHQYDVR0O
// SIG // BBYEFNVjOlyKMZDzQ3t8RhvFM2hahW1VMBkGCSsGAQQB
// SIG // gjcUAgQMHgoAUwB1AGIAQwBBMAsGA1UdDwQEAwIBhjAP
// SIG // BgNVHRMBAf8EBTADAQH/MB8GA1UdIwQYMBaAFNX2VsuP
// SIG // 6KJcYmjRPZSQW9fOmhjEMFYGA1UdHwRPME0wS6BJoEeG
// SIG // RWh0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2kvY3Js
// SIG // L3Byb2R1Y3RzL01pY1Jvb0NlckF1dF8yMDEwLTA2LTIz
// SIG // LmNybDBaBggrBgEFBQcBAQROMEwwSgYIKwYBBQUHMAKG
// SIG // Pmh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2kvY2Vy
// SIG // dHMvTWljUm9vQ2VyQXV0XzIwMTAtMDYtMjMuY3J0MIGg
// SIG // BgNVHSABAf8EgZUwgZIwgY8GCSsGAQQBgjcuAzCBgTA9
// SIG // BggrBgEFBQcCARYxaHR0cDovL3d3dy5taWNyb3NvZnQu
// SIG // Y29tL1BLSS9kb2NzL0NQUy9kZWZhdWx0Lmh0bTBABggr
// SIG // BgEFBQcCAjA0HjIgHQBMAGUAZwBhAGwAXwBQAG8AbABp
// SIG // AGMAeQBfAFMAdABhAHQAZQBtAGUAbgB0AC4gHTANBgkq
// SIG // hkiG9w0BAQsFAAOCAgEAB+aIUQ3ixuCYP4FxAz2do6Eh
// SIG // b7Prpsz1Mb7PBeKp/vpXbRkws8LFZslq3/Xn8Hi9x6ie
// SIG // JeP5vO1rVFcIK1GCRBL7uVOMzPRgEop2zEBAQZvcXBf/
// SIG // XPleFzWYJFZLdO9CEMivv3/Gf/I3fVo/HPKZeUqRUgCv
// SIG // OA8X9S95gWXZqbVr5MfO9sp6AG9LMEQkIjzP7QOllo9Z
// SIG // Kby2/QThcJ8ySif9Va8v/rbljjO7Yl+a21dA6fHOmWaQ
// SIG // jP9qYn/dxUoLkSbiOewZSnFjnXshbcOco6I8+n99lmqQ
// SIG // eKZt0uGc+R38ONiU9MalCpaGpL2eGq4EQoO4tYCbIjgg
// SIG // tSXlZOz39L9+Y1klD3ouOVd2onGqBooPiRa6YacRy5rY
// SIG // DkeagMXQzafQ732D8OE7cQnfXXSYIghh2rBQHm+98eEA
// SIG // 3+cxB6STOvdlR3jo+KhIq/fecn5ha293qYHLpwmsObvs
// SIG // xsvYgrRyzR30uIUBHoD7G4kqVDmyW9rIDVWZeodzOwjm
// SIG // mC3qjeAzLhIp9cAvVCch98isTtoouLGp25ayp0Kiyc8Z
// SIG // QU3ghvkqmqMRZjDTu3QyS99je/WZii8bxyGvWbWu3EQ8
// SIG // l1Bx16HSxVXjad5XwdHeMMD9zOZN+w2/XU/pnR4ZOC+8
// SIG // z1gFLu8NoFA12u8JJxzVs341Hgi62jbb01+P3nSISRKh
// SIG // ggLOMIICNwIBATCB+KGB0KSBzTCByjELMAkGA1UEBhMC
// SIG // VVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcT
// SIG // B1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jw
// SIG // b3JhdGlvbjElMCMGA1UECxMcTWljcm9zb2Z0IEFtZXJp
// SIG // Y2EgT3BlcmF0aW9uczEmMCQGA1UECxMdVGhhbGVzIFRT
// SIG // UyBFU046RUFDRS1FMzE2LUM5MUQxJTAjBgNVBAMTHE1p
// SIG // Y3Jvc29mdCBUaW1lLVN0YW1wIFNlcnZpY2WiIwoBATAH
// SIG // BgUrDgMCGgMVALxTnZSsJ6VOYUXYRyQjfLxV8jNcoIGD
// SIG // MIGApH4wfDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UE
// SIG // AxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTAw
// SIG // DQYJKoZIhvcNAQEFBQACBQDgMdUWMCIYDzIwMTkwMzEy
// SIG // MTQ0OTU4WhgPMjAxOTAzMTMxNDQ5NThaMHcwPQYKKwYB
// SIG // BAGEWQoEATEvMC0wCgIFAOAx1RYCAQAwCgIBAAICC8QC
// SIG // Af8wBwIBAAICEY0wCgIFAOAzJpYCAQAwNgYKKwYBBAGE
// SIG // WQoEAjEoMCYwDAYKKwYBBAGEWQoDAqAKMAgCAQACAweh
// SIG // IKEKMAgCAQACAwGGoDANBgkqhkiG9w0BAQUFAAOBgQAG
// SIG // UfNJelTmVYu6DDGhvuXgixtZhwCZgO7sdxjpp9ymShlj
// SIG // Vrf9Br93p6dPJjH3nkDIyp4yJbZc2dMruLMGaaX8mgq7
// SIG // j+4/cY/jMzKMrSdT7976ynLwGnYC9O7xU7RhSRaIfbjz
// SIG // qRyrYPlWcwoGAxy+/uVatb2ZBAS+VDPSnwKgkzGCAw0w
// SIG // ggMJAgEBMIGTMHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAk
// SIG // BgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAy
// SIG // MDEwAhMzAAAA8XTF0a7jPZs9AAAAAADxMA0GCWCGSAFl
// SIG // AwQCAQUAoIIBSjAaBgkqhkiG9w0BCQMxDQYLKoZIhvcN
// SIG // AQkQAQQwLwYJKoZIhvcNAQkEMSIEIEaxWrkFbO4zcHvn
// SIG // BL6GBhT20HJExnrh/5vMcrv3F7EWMIH6BgsqhkiG9w0B
// SIG // CRACLzGB6jCB5zCB5DCBvQQghcDZlqkC2fvAIqxHaipv
// SIG // vFyhNyIa0abCdAxlZd842HcwgZgwgYCkfjB8MQswCQYD
// SIG // VQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4G
// SIG // A1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0
// SIG // IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNyb3NvZnQg
// SIG // VGltZS1TdGFtcCBQQ0EgMjAxMAITMwAAAPF0xdGu4z2b
// SIG // PQAAAAAA8TAiBCCsSYgdw2uF5gOhR48gM5Ckyike1btc
// SIG // Zw9uy+oNeNjNwjANBgkqhkiG9w0BAQsFAASCAQAMFddm
// SIG // p1bKruyVYD0SZ3Np5e07GvzZW0n8N0X2BfJNcTUsqwM9
// SIG // CBxuv0t+sfeFgTYdB36OqXU5f69Z6w/pGpQ6YYQA7OXp
// SIG // jtMSrKUPADK+hwRGuLCta3PRGcTUTLfcgUulqewTxm2F
// SIG // pGiH7qXBbC85PYSoizWwHwRaQHJatcTvt7Kgv1IpJpuJ
// SIG // OxsWjq0sdCDvfixtb9Defa+kxbxLoobbgIJtV8+6qJvI
// SIG // dg7gaXn8EUHrflF8ScJVqeoGhBV8tZ6OaWAPq9ykH+4f
// SIG // WW79JzPyURAJCXUzFpx4AuDVXUMw2fb7N842lE0S6PBd
// SIG // pT53UXPc6TRfLHpmmWs0QIyTDo/X
// SIG // End signature block
