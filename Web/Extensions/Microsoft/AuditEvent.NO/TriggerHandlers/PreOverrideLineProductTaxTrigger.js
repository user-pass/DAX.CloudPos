System.register(["PosApi/Extend/Triggers/TaxOverrideTriggers", "../Managers/CartManager"], function (exports_1, context_1) {
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
    var ProductTriggers, CartManager_1, PreOverrideLineProductTaxTrigger;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (ProductTriggers_1) {
                ProductTriggers = ProductTriggers_1;
            },
            function (CartManager_1_1) {
                CartManager_1 = CartManager_1_1;
            }
        ],
        execute: function () {
            PreOverrideLineProductTaxTrigger = (function (_super) {
                __extends(PreOverrideLineProductTaxTrigger, _super);
                function PreOverrideLineProductTaxTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                PreOverrideLineProductTaxTrigger.prototype.execute = function (options) {
                    CartManager_1.default.Instance.preOperationCartState = options.cart;
                    return Promise.resolve({ canceled: false });
                };
                return PreOverrideLineProductTaxTrigger;
            }(ProductTriggers.PreOverrideLineProductTaxTrigger));
            exports_1("default", PreOverrideLineProductTaxTrigger);
        }
    };
});
//# sourceMappingURL=PreOverrideLineProductTaxTrigger.js.map
// SIG // Begin signature block
// SIG // MIIkdAYJKoZIhvcNAQcCoIIkZTCCJGECAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // yHXuOf6los2gm5ifU/OHiv9YLfN56P/6gwJVEFrKrO2g
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
// SIG // SEXAQsmbdlsKgEhr/Xmfwb1tbWrJUnMTDXpQzTGCFksw
// SIG // ghZHAgEBMIGVMH4xCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xKDAm
// SIG // BgNVBAMTH01pY3Jvc29mdCBDb2RlIFNpZ25pbmcgUENB
// SIG // IDIwMTECEzMAAAEDXiUcmR+jHrgAAAAAAQMwDQYJYIZI
// SIG // AWUDBAIBBQCggdAwGQYJKoZIhvcNAQkDMQwGCisGAQQB
// SIG // gjcCAQQwHAYKKwYBBAGCNwIBCzEOMAwGCisGAQQBgjcC
// SIG // ARUwLwYJKoZIhvcNAQkEMSIEIIbJErzcoI3ShdrjVuQI
// SIG // ezOsSlCHLs4kwJ854RNKlIF2MGQGCisGAQQBgjcCAQwx
// SIG // VjBUoDaANABnAGwAbwBiAGEAbABpAHoAZQAuAGMAdQBs
// SIG // AHQAdQByAGUALgBsAHYALQBMAFYALgBqAHOhGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBACYWHNpypDyz2Za/PItusiQ6Rjxyfasgj8u4
// SIG // +OtLz+7FVW+xiXtMK4QXWHaU6WSGcN/ovDKYMZXtKx9A
// SIG // BBZ2iF6CcgTGM24nNhz9NKUn5jBYjcUtQ5iGWaNFcmR9
// SIG // nHU73zEufyFxoJ4RrbsVGTVWson7B15V8G3XFDEqQegK
// SIG // TxyfRSLrmXXRvkOfirkjW83+UhXsLZppYz4abtaXjMWT
// SIG // 10Zj7FBw3Vsyh77HYtDUVYReGOsCF19De5u9k89ZhKVk
// SIG // eSrXgSg1YZHNBhxj3mQ3aJFYpIund/bn/Bbahg7zh6N2
// SIG // GJXYUX50vta+4oD85iNaxA2oU5QOvHj5JwHVfNNlII2h
// SIG // ghOzMIITrwYKKwYBBAGCNwMDATGCE58wghObBgkqhkiG
// SIG // 9w0BBwKgghOMMIITiAIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBVAYLKoZIhvcNAQkQAQSgggFDBIIBPzCCATsCAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQgQrrN
// SIG // w3/Srp2xsm35P/39H6oCrAToZtawFR4zX5jsV3ECBlx2
// SIG // pF921BgSMjAxOTAzMTIwOTU1NTkuMzhaMASAAgH0oIHU
// SIG // pIHRMIHOMQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSkwJwYDVQQL
// SIG // EyBNaWNyb3NvZnQgT3BlcmF0aW9ucyBQdWVydG8gUmlj
// SIG // bzEmMCQGA1UECxMdVGhhbGVzIFRTUyBFU046MTQ4Qy1D
// SIG // NEI5LTIwNjYxJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1l
// SIG // LVN0YW1wIFNlcnZpY2Wggg8fMIIE9TCCA92gAwIBAgIT
// SIG // MwAAANWnI+V4lWoJ/wAAAAAA1TANBgkqhkiG9w0BAQsF
// SIG // ADB8MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGlu
// SIG // Z3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMV
// SIG // TWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1N
// SIG // aWNyb3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDAeFw0x
// SIG // ODA4MjMyMDI2NDVaFw0xOTExMjMyMDI2NDVaMIHOMQsw
// SIG // CQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQ
// SIG // MA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9z
// SIG // b2Z0IENvcnBvcmF0aW9uMSkwJwYDVQQLEyBNaWNyb3Nv
// SIG // ZnQgT3BlcmF0aW9ucyBQdWVydG8gUmljbzEmMCQGA1UE
// SIG // CxMdVGhhbGVzIFRTUyBFU046MTQ4Qy1DNEI5LTIwNjYx
// SIG // JTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1wIFNl
// SIG // cnZpY2UwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEK
// SIG // AoIBAQDCFAkrrhfxNIIy/O6J8HbudDNQcFMUMLa2VhEG
// SIG // ApizIRoTUf93kMQQ/ZamOBWMYUWdW8X7CI7O0ir3BdJt
// SIG // WH4YCuY/QXWb87nnnZBGPDFVLuNcwdfHZ/jZmnpc+bxc
// SIG // /QS6uYSTwBHWYN2UfuHT+9fbVVyT/4lZLJS00yh/2Kk/
// SIG // FXInplzlGgrCv0Xu8XQXvKgUobDsG4A+8VWMIJnr8/m0
// SIG // md1LFgpXHAQfZDITR4Z4iCpLjKOATSebXvsqfCgVcs6J
// SIG // 7SprToUtVyjUiMsBFgM0RimbZT9+g1RjsvUhmo8HldEY
// SIG // x5KmTFA9bRIiGg6AaYmV2nBz53tRUBsEoyuDTJRLAgMB
// SIG // AAGjggEbMIIBFzAdBgNVHQ4EFgQUKWijMZR2Q9lfXQ2b
// SIG // n9OyhPZiN4QwHwYDVR0jBBgwFoAU1WM6XIoxkPNDe3xG
// SIG // G8UzaFqFbVUwVgYDVR0fBE8wTTBLoEmgR4ZFaHR0cDov
// SIG // L2NybC5taWNyb3NvZnQuY29tL3BraS9jcmwvcHJvZHVj
// SIG // dHMvTWljVGltU3RhUENBXzIwMTAtMDctMDEuY3JsMFoG
// SIG // CCsGAQUFBwEBBE4wTDBKBggrBgEFBQcwAoY+aHR0cDov
// SIG // L3d3dy5taWNyb3NvZnQuY29tL3BraS9jZXJ0cy9NaWNU
// SIG // aW1TdGFQQ0FfMjAxMC0wNy0wMS5jcnQwDAYDVR0TAQH/
// SIG // BAIwADATBgNVHSUEDDAKBggrBgEFBQcDCDANBgkqhkiG
// SIG // 9w0BAQsFAAOCAQEAednLwunE0cCrLQ7SJr/aZ6AL/fbA
// SIG // tsEC8uK5gc1i9pCP7JXgTV6O+HKnQFqGHy0QkKPg7ltp
// SIG // uf9JjHuA6bzwy2AkEkiZALbv4VC/NMIpOWamjbyH6e4d
// SIG // fwifyjLiIHfFm4TWcS8huUuFuwLOuu0DYn8Hgq4xamTF
// SIG // fV7QTtsI8/ULYtUY3TiJoV+1eJHQmCkrXUINsSYVFPWb
// SIG // T6hqa7YWj6raPRYXqrN+wsNrzt7QI2KjF02Qr8m8/uG1
// SIG // B8SFr6rySFy6bjz89cwrwqLS3wc8wYlfZoiBAV7J79qi
// SIG // CJHQ5yEqpayGdZ13UR3V5eGYQX98AGUfxMCC7ympLChW
// SIG // M65OCzCCBnEwggRZoAMCAQICCmEJgSoAAAAAAAIwDQYJ
// SIG // KoZIhvcNAQELBQAwgYgxCzAJBgNVBAYTAlVTMRMwEQYD
// SIG // VQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25k
// SIG // MR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24x
// SIG // MjAwBgNVBAMTKU1pY3Jvc29mdCBSb290IENlcnRpZmlj
// SIG // YXRlIEF1dGhvcml0eSAyMDEwMB4XDTEwMDcwMTIxMzY1
// SIG // NVoXDTI1MDcwMTIxNDY1NVowfDELMAkGA1UEBhMCVVMx
// SIG // EzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3Rh
// SIG // bXAgUENBIDIwMTAwggEiMA0GCSqGSIb3DQEBAQUAA4IB
// SIG // DwAwggEKAoIBAQCpHQ28dxGKOiDs/BOX9fp/aZRrdFQQ
// SIG // 1aUKAIKF++18aEssX8XD5WHCdrc+Zitb8BVTJwQxH0Eb
// SIG // GpUdzgkTjnxhMFmxMEQP8WCIhFRDDNdNuDgIs0Ldk6zW
// SIG // czBXJoKjRQ3Q6vVHgc2/JGAyWGBG8lhHhjKEHnRhZ5Ff
// SIG // gVSxz5NMksHEpl3RYRNuKMYa+YaAu99h/EbBJx0kZxJy
// SIG // GiGKr0tkiVBisV39dx898Fd1rL2KQk1AUdEPnAY+Z3/1
// SIG // ZsADlkR+79BL/W7lmsqxqPJ6Kgox8NpOBpG2iAg16Hgc
// SIG // sOmZzTznL0S6p/TcZL2kAcEgCZN4zfy8wMlEXV4WnAEF
// SIG // TyJNAgMBAAGjggHmMIIB4jAQBgkrBgEEAYI3FQEEAwIB
// SIG // ADAdBgNVHQ4EFgQU1WM6XIoxkPNDe3xGG8UzaFqFbVUw
// SIG // GQYJKwYBBAGCNxQCBAweCgBTAHUAYgBDAEEwCwYDVR0P
// SIG // BAQDAgGGMA8GA1UdEwEB/wQFMAMBAf8wHwYDVR0jBBgw
// SIG // FoAU1fZWy4/oolxiaNE9lJBb186aGMQwVgYDVR0fBE8w
// SIG // TTBLoEmgR4ZFaHR0cDovL2NybC5taWNyb3NvZnQuY29t
// SIG // L3BraS9jcmwvcHJvZHVjdHMvTWljUm9vQ2VyQXV0XzIw
// SIG // MTAtMDYtMjMuY3JsMFoGCCsGAQUFBwEBBE4wTDBKBggr
// SIG // BgEFBQcwAoY+aHR0cDovL3d3dy5taWNyb3NvZnQuY29t
// SIG // L3BraS9jZXJ0cy9NaWNSb29DZXJBdXRfMjAxMC0wNi0y
// SIG // My5jcnQwgaAGA1UdIAEB/wSBlTCBkjCBjwYJKwYBBAGC
// SIG // Ny4DMIGBMD0GCCsGAQUFBwIBFjFodHRwOi8vd3d3Lm1p
// SIG // Y3Jvc29mdC5jb20vUEtJL2RvY3MvQ1BTL2RlZmF1bHQu
// SIG // aHRtMEAGCCsGAQUFBwICMDQeMiAdAEwAZQBnAGEAbABf
// SIG // AFAAbwBsAGkAYwB5AF8AUwB0AGEAdABlAG0AZQBuAHQA
// SIG // LiAdMA0GCSqGSIb3DQEBCwUAA4ICAQAH5ohRDeLG4Jg/
// SIG // gXEDPZ2joSFvs+umzPUxvs8F4qn++ldtGTCzwsVmyWrf
// SIG // 9efweL3HqJ4l4/m87WtUVwgrUYJEEvu5U4zM9GASinbM
// SIG // QEBBm9xcF/9c+V4XNZgkVkt070IQyK+/f8Z/8jd9Wj8c
// SIG // 8pl5SpFSAK84Dxf1L3mBZdmptWvkx872ynoAb0swRCQi
// SIG // PM/tA6WWj1kpvLb9BOFwnzJKJ/1Vry/+tuWOM7tiX5rb
// SIG // V0Dp8c6ZZpCM/2pif93FSguRJuI57BlKcWOdeyFtw5yj
// SIG // ojz6f32WapB4pm3S4Zz5Hfw42JT0xqUKloakvZ4argRC
// SIG // g7i1gJsiOCC1JeVk7Pf0v35jWSUPei45V3aicaoGig+J
// SIG // FrphpxHLmtgOR5qAxdDNp9DvfYPw4TtxCd9ddJgiCGHa
// SIG // sFAeb73x4QDf5zEHpJM692VHeOj4qEir995yfmFrb3ep
// SIG // gcunCaw5u+zGy9iCtHLNHfS4hQEegPsbiSpUObJb2sgN
// SIG // VZl6h3M7COaYLeqN4DMuEin1wC9UJyH3yKxO2ii4sanb
// SIG // lrKnQqLJzxlBTeCG+SqaoxFmMNO7dDJL32N79ZmKLxvH
// SIG // Ia9Zta7cRDyXUHHXodLFVeNp3lfB0d4wwP3M5k37Db9d
// SIG // T+mdHhk4L7zPWAUu7w2gUDXa7wknHNWzfjUeCLraNtvT
// SIG // X4/edIhJEqGCA60wggKVAgEBMIH+oYHUpIHRMIHOMQsw
// SIG // CQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQ
// SIG // MA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9z
// SIG // b2Z0IENvcnBvcmF0aW9uMSkwJwYDVQQLEyBNaWNyb3Nv
// SIG // ZnQgT3BlcmF0aW9ucyBQdWVydG8gUmljbzEmMCQGA1UE
// SIG // CxMdVGhhbGVzIFRTUyBFU046MTQ4Qy1DNEI5LTIwNjYx
// SIG // JTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1wIFNl
// SIG // cnZpY2WiJQoBATAJBgUrDgMCGgUAAxUArcMkvNHZdfBd
// SIG // 0N1FHzkxnm7WnrGggd4wgdukgdgwgdUxCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xKTAnBgNVBAsTIE1pY3Jvc29mdCBPcGVy
// SIG // YXRpb25zIFB1ZXJ0byBSaWNvMScwJQYDVQQLEx5uQ2lw
// SIG // aGVyIE5UUyBFU046NERFOS0wQzVFLTNFMDkxKzApBgNV
// SIG // BAMTIk1pY3Jvc29mdCBUaW1lIFNvdXJjZSBNYXN0ZXIg
// SIG // Q2xvY2swDQYJKoZIhvcNAQEFBQACBQDgMRHMMCIYDzIw
// SIG // MTkwMzEyMDA1NjQ0WhgPMjAxOTAzMTMwMDU2NDRaMHQw
// SIG // OgYKKwYBBAGEWQoEATEsMCowCgIFAOAxEcwCAQAwBwIB
// SIG // AAICAugwBwIBAAICGIYwCgIFAOAyY0wCAQAwNgYKKwYB
// SIG // BAGEWQoEAjEoMCYwDAYKKwYBBAGEWQoDAaAKMAgCAQAC
// SIG // AwehIKEKMAgCAQACAwehIDANBgkqhkiG9w0BAQUFAAOC
// SIG // AQEAIShm6nVJXXpF8kmMb/gIfmLe5etpnd1gU5WpxDP7
// SIG // RdYEYzIwUAUC10fEez9jW8M0YUUZ56enMz19+fCQSZFi
// SIG // UMDRw0ZZljAdbWRfqgvvDxwjuVzkOXqtg0Febs5CGAXo
// SIG // JNL5q4r/B5iFxO3ExHKdQDP2wfhRLyehuWlooeuBTDeQ
// SIG // ciFq83aQcNzugxIdzvDwIwMMsinPnfPex5/5qfGaLjon
// SIG // Fq3EWIxO5182aZEBGfZjfQrX3M2YtrVGSPzuOPBQkYqH
// SIG // saaFsIwA4h3wy8uAktmEyaBQvETZWG849jVf3/G4sIzu
// SIG // Ckp5sEFaZOuQjw94Ri9O/hvIantL9+lwYbLP6zGCAvUw
// SIG // ggLxAgEBMIGTMHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAk
// SIG // BgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAy
// SIG // MDEwAhMzAAAA1acj5XiVagn/AAAAAADVMA0GCWCGSAFl
// SIG // AwQCAQUAoIIBMjAaBgkqhkiG9w0BCQMxDQYLKoZIhvcN
// SIG // AQkQAQQwLwYJKoZIhvcNAQkEMSIEIHEq6UCS9+/ezJXZ
// SIG // R4VXUqkE5gYcRxRHTR2tAmrhBokUMIHiBgsqhkiG9w0B
// SIG // CRACDDGB0jCBzzCBzDCBsQQUrcMkvNHZdfBd0N1FHzkx
// SIG // nm7WnrEwgZgwgYCkfjB8MQswCQYDVQQGEwJVUzETMBEG
// SIG // A1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9u
// SIG // ZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MSYwJAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFtcCBQ
// SIG // Q0EgMjAxMAITMwAAANWnI+V4lWoJ/wAAAAAA1TAWBBS0
// SIG // laaSX4J2rIDYhEHAJ9Sxv7T3nDANBgkqhkiG9w0BAQsF
// SIG // AASCAQCj0s/+TXm3+O4xkjUZBO149Y/sQb8VQPFJ6EWV
// SIG // 0Y1A9Nfzx5Eds+etkXvrOsSrI9boQqSJ9UnuybQnzTNk
// SIG // S8kZgcrfF4ZkG2nGgpWQTR4p1eQvuiOIM4XfMDNUuH1n
// SIG // ElP7OYNyxijx6+e+zVAQ/08yQcWRjkirATdVnwjhqNJ/
// SIG // rOpIVwDG2lNAYia/ght6LCmJicvw2AMyrDVADecFDNdr
// SIG // idQSQHQljttlUEbyiQjURGALv1YcoZ0VNZALeohh05mj
// SIG // jT35MZqCtRJajalgG7/h2/Oh3P4So7tVv3snPkZh06GI
// SIG // DSKPxIDshpYgwY3BqIMW4upzgh6GXJc5qz54bRaW
// SIG // End signature block