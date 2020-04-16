System.register(["PosUISdk/Controls/Pivot", "./PosSdkBindingHelper"], function (exports_1, context_1) {
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
    var Pivot_1, PosSdkBindingHelper_1, Controls, PosSdkPivotItemBindingHandler;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Pivot_1_1) {
                Pivot_1 = Pivot_1_1;
            },
            function (PosSdkBindingHelper_1_1) {
                PosSdkBindingHelper_1 = PosSdkBindingHelper_1_1;
            }
        ],
        execute: function () {
            Controls = Commerce.Controls;
            PosSdkPivotItemBindingHandler = (function (_super) {
                __extends(PosSdkPivotItemBindingHandler, _super);
                function PosSdkPivotItemBindingHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                PosSdkPivotItemBindingHandler.prototype.init = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                    var _this = this;
                    var correlationId = Commerce.LoggerHelper.getNewCorrelationId();
                    var controlName = "PivotItem";
                    return PosSdkBindingHelper_1.default.initializeBinding(function () {
                        var pivotItem = valueAccessor();
                        if (!(pivotItem instanceof Pivot_1.PivotItem)) {
                            throw "PosSdkPivotItem invalid binding object. Must be bound to in instance of PosUISdk::PivotItem.";
                        }
                        PosSdkBindingHelper_1.default.addDomNodeDisposalCallback(element, pivotItem);
                        var newValueAccessor = PosSdkPivotItemBindingHandler._getValueAccessor(pivotItem);
                        return _super.prototype.init.call(_this, element, newValueAccessor, allBindings, viewModel, bindingContext);
                    }, controlName, correlationId);
                };
                PosSdkPivotItemBindingHandler._getValueAccessor = function (pivotItem) {
                    var options = {
                        header: pivotItem.header
                    };
                    return function () { return options; };
                };
                return PosSdkPivotItemBindingHandler;
            }(Controls.Pivot.PivotItemBindingHandler));
            exports_1("default", PosSdkPivotItemBindingHandler);
        }
    };
});
//# sourceMappingURL=PosSdkPivotItem.js.map
// SIG // Begin signature block
// SIG // MIIkegYJKoZIhvcNAQcCoIIkazCCJGcCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // sRpnQa4xiYP+dmTHgLQuaeyQ2xbTtgB/Raz65gJ/dJag
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
// SIG // SEXAQsmbdlsKgEhr/Xmfwb1tbWrJUnMTDXpQzTGCFlEw
// SIG // ghZNAgEBMIGVMH4xCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xKDAm
// SIG // BgNVBAMTH01pY3Jvc29mdCBDb2RlIFNpZ25pbmcgUENB
// SIG // IDIwMTECEzMAAAEDXiUcmR+jHrgAAAAAAQMwDQYJYIZI
// SIG // AWUDBAIBBQCggdAwGQYJKoZIhvcNAQkDMQwGCisGAQQB
// SIG // gjcCAQQwHAYKKwYBBAGCNwIBCzEOMAwGCisGAQQBgjcC
// SIG // ARUwLwYJKoZIhvcNAQkEMSIEIOuflAkc03hlMduh9mx5
// SIG // pfyW8YIFJn2X6sDVBcf5O7esMGQGCisGAQQBgjcCAQwx
// SIG // VjBUoDaANABnAGwAbwBiAGEAbABpAHoAZQAuAGMAdQBs
// SIG // AHQAdQByAGUALgBsAHYALQBMAFYALgBqAHOhGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBAGH4FXefteqpy0FN3K8YpAGsUsi89oLJ/Ksr
// SIG // 0NkJnnmZnAQ7QKSli2FA7eyyifJ7FlsjmVWdnxGrf0HA
// SIG // 2OTVsFE4+pIvMiPXblaQ6//F8GQ5DPJXst3Gsg8DuI6O
// SIG // btc7fmKl6r8o4N5YjFf4NVEGyvIC7CeR43FKyWUC3Uov
// SIG // O3dl6vDgBtgSeLC6py5ZMvCFRXD+QvGD2bVpfNCzixq8
// SIG // bm/+wydxlC2AcWXYooJSoX5lnE/1QZ37qnRFPM49G4b8
// SIG // IFnnLc4Fhg+9+9M3A3sAwHIBcNvs7eZ+DK8ye4PvEask
// SIG // cNozDs9oq/dem2szhdSDQTrsUMZhl1faVhd1xuk551eh
// SIG // ghO5MIITtQYKKwYBBAGCNwMDATGCE6UwghOhBgkqhkiG
// SIG // 9w0BBwKgghOSMIITjgIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBVwYLKoZIhvcNAQkQAQSgggFGBIIBQjCCAT4CAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQgmfIz
// SIG // I0WFNJUx6XY0vX7ZX4uFe3v3vVs3ejrp4WDOnKQCBlx2
// SIG // obVwGxgSMjAxOTAzMTIwOTU0NTAuMDFaMAcCAQGAAgH0
// SIG // oIHUpIHRMIHOMQswCQYDVQQGEwJVUzETMBEGA1UECBMK
// SIG // V2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwG
// SIG // A1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSkwJwYD
// SIG // VQQLEyBNaWNyb3NvZnQgT3BlcmF0aW9ucyBQdWVydG8g
// SIG // UmljbzEmMCQGA1UECxMdVGhhbGVzIFRTUyBFU046NzI4
// SIG // RC1DNDVGLUY5RUIxJTAjBgNVBAMTHE1pY3Jvc29mdCBU
// SIG // aW1lLVN0YW1wIFNlcnZpY2Wggg8iMIIE9TCCA92gAwIB
// SIG // AgITMwAAANPQlFadDr2DBgAAAAAA0zANBgkqhkiG9w0B
// SIG // AQsFADB8MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQD
// SIG // Ex1NaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDAe
// SIG // Fw0xODA4MjMyMDI2NDBaFw0xOTExMjMyMDI2NDBaMIHO
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMSkwJwYDVQQLEyBNaWNy
// SIG // b3NvZnQgT3BlcmF0aW9ucyBQdWVydG8gUmljbzEmMCQG
// SIG // A1UECxMdVGhhbGVzIFRTUyBFU046NzI4RC1DNDVGLUY5
// SIG // RUIxJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1w
// SIG // IFNlcnZpY2UwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw
// SIG // ggEKAoIBAQCu8pwugBdto6Ev70z2bCBvNqKL2fJFzUHB
// SIG // ev9e3WbUZZVOqQhlfMzMUkDl01g9jGUSfzqnx1EmAjUz
// SIG // 2pJ3rTbK2YbLZRTU9PUAY43lV2sgxv2iPCT8vdT+a4jg
// SIG // BZP4L450AnXKFeuTgRdvOm7NpYFGuq3Nqih8A1aUdcPt
// SIG // o160vCbc+qJlIHwewjKcNWcDHkP/hW+NxACMXjVwebqv
// SIG // 2WDwwPojIrZHYa40CYDyikKoT4mHM9ynawJN+Fesv81M
// SIG // PBbifWYvPWnLX6EtHgHUnVmAwE4uqCIjwIqFmELsMemW
// SIG // PnuVPB3IxogNW4PaZ7n6nJ1S8yJwca/A1adYppgIbZH1
// SIG // AgMBAAGjggEbMIIBFzAdBgNVHQ4EFgQUKFHKD69qEDub
// SIG // B2laWFSg7GrUZ3gwHwYDVR0jBBgwFoAU1WM6XIoxkPND
// SIG // e3xGG8UzaFqFbVUwVgYDVR0fBE8wTTBLoEmgR4ZFaHR0
// SIG // cDovL2NybC5taWNyb3NvZnQuY29tL3BraS9jcmwvcHJv
// SIG // ZHVjdHMvTWljVGltU3RhUENBXzIwMTAtMDctMDEuY3Js
// SIG // MFoGCCsGAQUFBwEBBE4wTDBKBggrBgEFBQcwAoY+aHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tL3BraS9jZXJ0cy9N
// SIG // aWNUaW1TdGFQQ0FfMjAxMC0wNy0wMS5jcnQwDAYDVR0T
// SIG // AQH/BAIwADATBgNVHSUEDDAKBggrBgEFBQcDCDANBgkq
// SIG // hkiG9w0BAQsFAAOCAQEAPWLw/RQWtLCI/0PNudhl8FtK
// SIG // kGhJv6GV04eHiOobSCgElcV/MtYOCFXg+jvGMl3QZc0F
// SIG // IK++ge9KQ4Kssp8JiSuigaYNm3+ijnhyJnOKZqHxXPRI
// SIG // WC2YFz18KhyWNUYMLeF9ZAjTSuj0xnhZSaa6GK8t/GvA
// SIG // LlJtKCyaX+OkywuMEL/Pb38hIQXnf1r/eUaOX6p/7QEH
// SIG // PEv3NHqtQgHZDA87Cau5WZohADGlRdLyq3Eb7Vbu0+QW
// SIG // XE5j+mxzbc3A8Z5+6wek1IEkRJ1j+Q4uOmfT+tF62jX3
// SIG // 9E7YreTLMvIr7K3BGtgiMVILHG2A8QGlkfBoW/601SBB
// SIG // FmAQFaxfbzCCBnEwggRZoAMCAQICCmEJgSoAAAAAAAIw
// SIG // DQYJKoZIhvcNAQELBQAwgYgxCzAJBgNVBAYTAlVTMRMw
// SIG // EQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRt
// SIG // b25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRp
// SIG // b24xMjAwBgNVBAMTKU1pY3Jvc29mdCBSb290IENlcnRp
// SIG // ZmljYXRlIEF1dGhvcml0eSAyMDEwMB4XDTEwMDcwMTIx
// SIG // MzY1NVoXDTI1MDcwMTIxNDY1NVowfDELMAkGA1UEBhMC
// SIG // VVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcT
// SIG // B1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jw
// SIG // b3JhdGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUt
// SIG // U3RhbXAgUENBIDIwMTAwggEiMA0GCSqGSIb3DQEBAQUA
// SIG // A4IBDwAwggEKAoIBAQCpHQ28dxGKOiDs/BOX9fp/aZRr
// SIG // dFQQ1aUKAIKF++18aEssX8XD5WHCdrc+Zitb8BVTJwQx
// SIG // H0EbGpUdzgkTjnxhMFmxMEQP8WCIhFRDDNdNuDgIs0Ld
// SIG // k6zWczBXJoKjRQ3Q6vVHgc2/JGAyWGBG8lhHhjKEHnRh
// SIG // Z5FfgVSxz5NMksHEpl3RYRNuKMYa+YaAu99h/EbBJx0k
// SIG // ZxJyGiGKr0tkiVBisV39dx898Fd1rL2KQk1AUdEPnAY+
// SIG // Z3/1ZsADlkR+79BL/W7lmsqxqPJ6Kgox8NpOBpG2iAg1
// SIG // 6HgcsOmZzTznL0S6p/TcZL2kAcEgCZN4zfy8wMlEXV4W
// SIG // nAEFTyJNAgMBAAGjggHmMIIB4jAQBgkrBgEEAYI3FQEE
// SIG // AwIBADAdBgNVHQ4EFgQU1WM6XIoxkPNDe3xGG8UzaFqF
// SIG // bVUwGQYJKwYBBAGCNxQCBAweCgBTAHUAYgBDAEEwCwYD
// SIG // VR0PBAQDAgGGMA8GA1UdEwEB/wQFMAMBAf8wHwYDVR0j
// SIG // BBgwFoAU1fZWy4/oolxiaNE9lJBb186aGMQwVgYDVR0f
// SIG // BE8wTTBLoEmgR4ZFaHR0cDovL2NybC5taWNyb3NvZnQu
// SIG // Y29tL3BraS9jcmwvcHJvZHVjdHMvTWljUm9vQ2VyQXV0
// SIG // XzIwMTAtMDYtMjMuY3JsMFoGCCsGAQUFBwEBBE4wTDBK
// SIG // BggrBgEFBQcwAoY+aHR0cDovL3d3dy5taWNyb3NvZnQu
// SIG // Y29tL3BraS9jZXJ0cy9NaWNSb29DZXJBdXRfMjAxMC0w
// SIG // Ni0yMy5jcnQwgaAGA1UdIAEB/wSBlTCBkjCBjwYJKwYB
// SIG // BAGCNy4DMIGBMD0GCCsGAQUFBwIBFjFodHRwOi8vd3d3
// SIG // Lm1pY3Jvc29mdC5jb20vUEtJL2RvY3MvQ1BTL2RlZmF1
// SIG // bHQuaHRtMEAGCCsGAQUFBwICMDQeMiAdAEwAZQBnAGEA
// SIG // bABfAFAAbwBsAGkAYwB5AF8AUwB0AGEAdABlAG0AZQBu
// SIG // AHQALiAdMA0GCSqGSIb3DQEBCwUAA4ICAQAH5ohRDeLG
// SIG // 4Jg/gXEDPZ2joSFvs+umzPUxvs8F4qn++ldtGTCzwsVm
// SIG // yWrf9efweL3HqJ4l4/m87WtUVwgrUYJEEvu5U4zM9GAS
// SIG // inbMQEBBm9xcF/9c+V4XNZgkVkt070IQyK+/f8Z/8jd9
// SIG // Wj8c8pl5SpFSAK84Dxf1L3mBZdmptWvkx872ynoAb0sw
// SIG // RCQiPM/tA6WWj1kpvLb9BOFwnzJKJ/1Vry/+tuWOM7ti
// SIG // X5rbV0Dp8c6ZZpCM/2pif93FSguRJuI57BlKcWOdeyFt
// SIG // w5yjojz6f32WapB4pm3S4Zz5Hfw42JT0xqUKloakvZ4a
// SIG // rgRCg7i1gJsiOCC1JeVk7Pf0v35jWSUPei45V3aicaoG
// SIG // ig+JFrphpxHLmtgOR5qAxdDNp9DvfYPw4TtxCd9ddJgi
// SIG // CGHasFAeb73x4QDf5zEHpJM692VHeOj4qEir995yfmFr
// SIG // b3epgcunCaw5u+zGy9iCtHLNHfS4hQEegPsbiSpUObJb
// SIG // 2sgNVZl6h3M7COaYLeqN4DMuEin1wC9UJyH3yKxO2ii4
// SIG // sanblrKnQqLJzxlBTeCG+SqaoxFmMNO7dDJL32N79ZmK
// SIG // LxvHIa9Zta7cRDyXUHHXodLFVeNp3lfB0d4wwP3M5k37
// SIG // Db9dT+mdHhk4L7zPWAUu7w2gUDXa7wknHNWzfjUeCLra
// SIG // NtvTX4/edIhJEqGCA7AwggKYAgEBMIH+oYHUpIHRMIHO
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMSkwJwYDVQQLEyBNaWNy
// SIG // b3NvZnQgT3BlcmF0aW9ucyBQdWVydG8gUmljbzEmMCQG
// SIG // A1UECxMdVGhhbGVzIFRTUyBFU046NzI4RC1DNDVGLUY5
// SIG // RUIxJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1w
// SIG // IFNlcnZpY2WiJQoBATAJBgUrDgMCGgUAAxUAZ0Jaca70
// SIG // ItpZJTXDi9RuapkSXWeggd4wgdukgdgwgdUxCzAJBgNV
// SIG // BAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYD
// SIG // VQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQg
// SIG // Q29ycG9yYXRpb24xKTAnBgNVBAsTIE1pY3Jvc29mdCBP
// SIG // cGVyYXRpb25zIFB1ZXJ0byBSaWNvMScwJQYDVQQLEx5u
// SIG // Q2lwaGVyIE5UUyBFU046NERFOS0wQzVFLTNFMDkxKzAp
// SIG // BgNVBAMTIk1pY3Jvc29mdCBUaW1lIFNvdXJjZSBNYXN0
// SIG // ZXIgQ2xvY2swDQYJKoZIhvcNAQEFBQACBQDgMbqWMCIY
// SIG // DzIwMTkwMzEyMTI1NjU0WhgPMjAxOTAzMTMxMjU2NTRa
// SIG // MHcwPQYKKwYBBAGEWQoEATEvMC0wCgIFAOAxupYCAQAw
// SIG // CgIBAAICAScCAf8wBwIBAAICGJMwCgIFAOAzDBYCAQAw
// SIG // NgYKKwYBBAGEWQoEAjEoMCYwDAYKKwYBBAGEWQoDAaAK
// SIG // MAgCAQACAxbjYKEKMAgCAQACAwehIDANBgkqhkiG9w0B
// SIG // AQUFAAOCAQEAJQn+whmTVkhfpYJBM9sPNwO3uKYvYTQc
// SIG // cda/K6FU7WJSt2oR8TU0vZOttXWdN4xZFDzIF/ykvFJ7
// SIG // iWex/SvXqH+rOtwpKgxwbI1SQsnN1IeJj+bAgd+jrbsB
// SIG // uf6QrniBU2r/mEUTPtoJMACzboUcQz7SJAPOHgUofGFO
// SIG // UejZ6lpz1cLNrmvqSrNm5o82RLhxLFtxZoP3c6w27Ai7
// SIG // a4ooJqQN/aYYWD4ge0Ts89gzKQNeArpHnIAO/8UtRaTd
// SIG // VYAeM+PYkNDITPQFMv6P6QtPgZVE/oJosM4egk0vUcHn
// SIG // euW/LOwIqKyRlZCl592i91//iz4phQgDEuetME7HqdDx
// SIG // RDGCAvUwggLxAgEBMIGTMHwxCzAJBgNVBAYTAlVTMRMw
// SIG // EQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRt
// SIG // b25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRp
// SIG // b24xJjAkBgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1w
// SIG // IFBDQSAyMDEwAhMzAAAA09CUVp0OvYMGAAAAAADTMA0G
// SIG // CWCGSAFlAwQCAQUAoIIBMjAaBgkqhkiG9w0BCQMxDQYL
// SIG // KoZIhvcNAQkQAQQwLwYJKoZIhvcNAQkEMSIEIEIHxmhb
// SIG // WLshegaepm50pVtE3qRQPGmIuBYyvQZHVkoMMIHiBgsq
// SIG // hkiG9w0BCRACDDGB0jCBzzCBzDCBsQQUZ0Jaca70ItpZ
// SIG // JTXDi9RuapkSXWcwgZgwgYCkfjB8MQswCQYDVQQGEwJV
// SIG // UzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMH
// SIG // UmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBv
// SIG // cmF0aW9uMSYwJAYDVQQDEx1NaWNyb3NvZnQgVGltZS1T
// SIG // dGFtcCBQQ0EgMjAxMAITMwAAANPQlFadDr2DBgAAAAAA
// SIG // 0zAWBBSTibGmpLchOpyLJ6beZtx1iRC3LTANBgkqhkiG
// SIG // 9w0BAQsFAASCAQCJVBvssTCUpBefR7sU+nCXvFVe2ouK
// SIG // a6syYrqmpiWbd4Srp3jpmmaxhU/acx007ctJ9DuV5Svg
// SIG // oLfnEQKClujHXr0KU4uc1E2nL6Fwg8/EbfG5jqXdyKQJ
// SIG // Rp6RaNP8KuM99/SOvN+e8+ZloDdaYOQUFzGH8vnwmdVI
// SIG // QCqsI4Rc+dRT9DwEZNtB0dvrMO5CcgB7+P0F4klv+xxv
// SIG // sbUvPmSE7HpwrCh2juLLeNKIlnDtpAyLmHhOwJPNKYiv
// SIG // Ges5P02n1rPfnQjxM3q2eIEsdmdE6+Joo/g8J+q5F41E
// SIG // UbSWbHGXe6nhD9zvW5JY8X9MaSe1toBndNkSey3kWyZb
// SIG // M3EB
// SIG // End signature block
