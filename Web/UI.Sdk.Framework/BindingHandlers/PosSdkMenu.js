System.register(["PosUISdk/Controls/Menu", "./PosSdkBindingHelper", "./PosSdkMenuCommand"], function (exports_1, context_1) {
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
    var Menu_1, PosSdkBindingHelper_1, PosSdkMenuCommand_1, Controls, PosSdkMenuBindingHandler;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Menu_1_1) {
                Menu_1 = Menu_1_1;
            },
            function (PosSdkBindingHelper_1_1) {
                PosSdkBindingHelper_1 = PosSdkBindingHelper_1_1;
            },
            function (PosSdkMenuCommand_1_1) {
                PosSdkMenuCommand_1 = PosSdkMenuCommand_1_1;
            }
        ],
        execute: function () {
            Controls = Commerce.Controls;
            PosSdkMenuBindingHandler = (function (_super) {
                __extends(PosSdkMenuBindingHandler, _super);
                function PosSdkMenuBindingHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                PosSdkMenuBindingHandler.prototype.init = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                    var _this = this;
                    var correlationId = Commerce.LoggerHelper.getNewCorrelationId();
                    var controlName = "Menu";
                    return PosSdkBindingHelper_1.default.initializeBinding(function () {
                        var posSdkMenu = valueAccessor();
                        if (!(posSdkMenu instanceof Menu_1.Menu)) {
                            throw "PosSdkMenu invalid binding object. Must be bound to an instance of PosUISdk.Controls.Menu.";
                        }
                        PosSdkBindingHelper_1.default.addDomNodeDisposalCallback(element, posSdkMenu);
                        var newValueAccessor = PosSdkMenuBindingHandler._getValueAccessor(posSdkMenu);
                        return _super.prototype.init.call(_this, element, newValueAccessor, allBindings, viewModel, bindingContext);
                    }, controlName, correlationId);
                };
                PosSdkMenuBindingHandler._getValueAccessor = function (menu) {
                    var options = {
                        anchor: "",
                        anchorElement: menu.anchorElement,
                        placement: menu.placement,
                        alignment: menu.alignment,
                        visible: menu.visible
                    };
                    if (Commerce.ArrayExtensions.hasElements(menu.commands)) {
                        options.commands = [];
                        menu.commands.forEach(function (value) {
                            options.commands.push(PosSdkMenuCommand_1.default._getValueAccessor(value)());
                        });
                    }
                    return function () { return options; };
                };
                return PosSdkMenuBindingHandler;
            }(Controls.Menu.MenuBindingHandler));
            exports_1("default", PosSdkMenuBindingHandler);
        }
    };
});
//# sourceMappingURL=PosSdkMenu.js.map
// SIG // Begin signature block
// SIG // MIIkdwYJKoZIhvcNAQcCoIIkaDCCJGQCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // C1m5p0MRPNBio9Ys9Tf/t4jnbHTCBXDK+JkO5S4Jt1mg
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
// SIG // SEXAQsmbdlsKgEhr/Xmfwb1tbWrJUnMTDXpQzTGCFk4w
// SIG // ghZKAgEBMIGVMH4xCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xKDAm
// SIG // BgNVBAMTH01pY3Jvc29mdCBDb2RlIFNpZ25pbmcgUENB
// SIG // IDIwMTECEzMAAAEDXiUcmR+jHrgAAAAAAQMwDQYJYIZI
// SIG // AWUDBAIBBQCggdAwGQYJKoZIhvcNAQkDMQwGCisGAQQB
// SIG // gjcCAQQwHAYKKwYBBAGCNwIBCzEOMAwGCisGAQQBgjcC
// SIG // ARUwLwYJKoZIhvcNAQkEMSIEIDqL4OSqYTj48wHZqUYl
// SIG // gWETTd5fEOpWr90yo64Jwi1oMGQGCisGAQQBgjcCAQwx
// SIG // VjBUoDaANABnAGwAbwBiAGEAbABpAHoAZQAuAGMAdQBs
// SIG // AHQAdQByAGUALgBsAHYALQBMAFYALgBqAHOhGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBAJZXPZxB35zraEXbXd7MXlKRYcMERN8Bqgr8
// SIG // r5HjIgzQWQzKTKPXWNrkntmUdQfYBXoEZwTZDZANbz0D
// SIG // NttelDoP0lJALod63KExsTd6+1teRRwlJEoJDB36KuYH
// SIG // R5H+rFXAhSjPU2mfNtYDm8UVZ2JEVXonAY2/iv870O+y
// SIG // CbIkUn5/xKWxgy5Mk4gmtDWLwBqvJYWcrf/BaUybaGbf
// SIG // stxN3ndT1i22H0MjRL3/fA3xQ3oHCrtnyGw2vtFKsiXD
// SIG // NYv0QxjQ0aHafB1+DYNbuMSn+ilXMZzcJNL+LaY98EuC
// SIG // JNBrF7E0X7/dgOpIQfx+Dze0wvh/uruXU2Opccn5TDeh
// SIG // ghO2MIITsgYKKwYBBAGCNwMDATGCE6IwghOeBgkqhkiG
// SIG // 9w0BBwKgghOPMIITiwIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBVwYLKoZIhvcNAQkQAQSgggFGBIIBQjCCAT4CAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQgXjNZ
// SIG // nTuWIshJcQSgWOn9J/zxgVMypyC52yrSsRBcsTECBlx2
// SIG // 1EiPZxgSMjAxOTAzMTIwOTU0NTAuMzRaMAcCAQGAAgH0
// SIG // oIHUpIHRMIHOMQswCQYDVQQGEwJVUzETMBEGA1UECBMK
// SIG // V2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwG
// SIG // A1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSkwJwYD
// SIG // VQQLEyBNaWNyb3NvZnQgT3BlcmF0aW9ucyBQdWVydG8g
// SIG // UmljbzEmMCQGA1UECxMdVGhhbGVzIFRTUyBFU046QzBG
// SIG // NC0zMDg2LURFRjgxJTAjBgNVBAMTHE1pY3Jvc29mdCBU
// SIG // aW1lLVN0YW1wIFNlcnZpY2Wggg8fMIIE9TCCA92gAwIB
// SIG // AgITMwAAANAcamBhwufhrQAAAAAA0DANBgkqhkiG9w0B
// SIG // AQsFADB8MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQD
// SIG // Ex1NaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDAe
// SIG // Fw0xODA4MjMyMDI2MjhaFw0xOTExMjMyMDI2MjhaMIHO
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMSkwJwYDVQQLEyBNaWNy
// SIG // b3NvZnQgT3BlcmF0aW9ucyBQdWVydG8gUmljbzEmMCQG
// SIG // A1UECxMdVGhhbGVzIFRTUyBFU046QzBGNC0zMDg2LURF
// SIG // RjgxJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1w
// SIG // IFNlcnZpY2UwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw
// SIG // ggEKAoIBAQCbPoY211rO+8Z9zCo8IAYVmps5IDy61+pD
// SIG // NMYTp0m8huVorXo5SKMmKAYnE0C1sg6srmX5Q0s4a64H
// SIG // YRinDv2ly2HM2cU36hva3Ey1ZXtNkas6jSudX1Idqe3N
// SIG // uICGkOTGtydhBeSLWQ57tWx4c0/eFPyRb56B93OVe35g
// SIG // MirnNNUxG13+Z0PV52SRjGTZ+zUPZy7crK1UP8RNbKfH
// SIG // Wd2PYZK6WSRv37Vd7ocqC79HbP1xJb8pZLxTVCqWlfPo
// SIG // kE1oZfKxmHTtBDlPyT1rGkqCgV97H/KWaAeXsy/WReXa
// SIG // WuaPVxJVCnpcEsRrgtfFmnSiNoEzu+fg7FIIBPXOkkYr
// SIG // AgMBAAGjggEbMIIBFzAdBgNVHQ4EFgQUA4Mol6hrJfLE
// SIG // UzIfma06vHcYxXEwHwYDVR0jBBgwFoAU1WM6XIoxkPND
// SIG // e3xGG8UzaFqFbVUwVgYDVR0fBE8wTTBLoEmgR4ZFaHR0
// SIG // cDovL2NybC5taWNyb3NvZnQuY29tL3BraS9jcmwvcHJv
// SIG // ZHVjdHMvTWljVGltU3RhUENBXzIwMTAtMDctMDEuY3Js
// SIG // MFoGCCsGAQUFBwEBBE4wTDBKBggrBgEFBQcwAoY+aHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tL3BraS9jZXJ0cy9N
// SIG // aWNUaW1TdGFQQ0FfMjAxMC0wNy0wMS5jcnQwDAYDVR0T
// SIG // AQH/BAIwADATBgNVHSUEDDAKBggrBgEFBQcDCDANBgkq
// SIG // hkiG9w0BAQsFAAOCAQEApbwklmQJ31r0v5RTfzYZkW48
// SIG // IPXgYF18spdGCVoMGD7qK1GR5IXN0eTzTWNJTRpOkR47
// SIG // 26dJ9trulEfwTDe9owtngVnUTTZco4j1Ba1hLnc0rcT1
// SIG // wZfbQc9bXWmhEI3KLobATjK7Stfz49VV9QvRgr3ldnqG
// SIG // GbY5miHg5CKOIGOr9XDFtT3ve9jTqJZl8qxJVoKfHcUi
// SIG // dYdGwfAKj8zcMIrt0+aE9V7G00wTNV9duDIA5vazZAUk
// SIG // Jh6vs+H2Hmsl0SreztcnLOuSGL5HwSJrenGPlBT4mEeZ
// SIG // qRhdJWunQdNWfEGmN1ovQZs7KayRu9l5Oia8rM7wkXDV
// SIG // F9cE+cCBLDCCBnEwggRZoAMCAQICCmEJgSoAAAAAAAIw
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
// SIG // NtvTX4/edIhJEqGCA60wggKVAgEBMIH+oYHUpIHRMIHO
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMSkwJwYDVQQLEyBNaWNy
// SIG // b3NvZnQgT3BlcmF0aW9ucyBQdWVydG8gUmljbzEmMCQG
// SIG // A1UECxMdVGhhbGVzIFRTUyBFU046QzBGNC0zMDg2LURF
// SIG // RjgxJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1w
// SIG // IFNlcnZpY2WiJQoBATAJBgUrDgMCGgUAAxUAKSkfi3Fx
// SIG // Mlc3Nr+9neHTozE+jpWggd4wgdukgdgwgdUxCzAJBgNV
// SIG // BAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYD
// SIG // VQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQg
// SIG // Q29ycG9yYXRpb24xKTAnBgNVBAsTIE1pY3Jvc29mdCBP
// SIG // cGVyYXRpb25zIFB1ZXJ0byBSaWNvMScwJQYDVQQLEx5u
// SIG // Q2lwaGVyIE5UUyBFU046NERFOS0wQzVFLTNFMDkxKzAp
// SIG // BgNVBAMTIk1pY3Jvc29mdCBUaW1lIFNvdXJjZSBNYXN0
// SIG // ZXIgQ2xvY2swDQYJKoZIhvcNAQEFBQACBQDgMe+TMCIY
// SIG // DzIwMTkwMzEyMTY0MjU5WhgPMjAxOTAzMTMxNjQyNTla
// SIG // MHQwOgYKKwYBBAGEWQoEATEsMCowCgIFAOAx75MCAQAw
// SIG // BwIBAAICF7QwBwIBAAICG2UwCgIFAOAzQRMCAQAwNgYK
// SIG // KwYBBAGEWQoEAjEoMCYwDAYKKwYBBAGEWQoDAaAKMAgC
// SIG // AQACAxbjYKEKMAgCAQACAwehIDANBgkqhkiG9w0BAQUF
// SIG // AAOCAQEAS8KrJo9+EibsTRbYL+huc2yitoSx73PV+kYT
// SIG // vuBS0mzBcuvEXPgy15M4u/oiqgTOpF8EF28x0SuleplI
// SIG // Ea/KwtFe+KW9r2trg2OSZGsPLLlDe+d8iWwVW4DU9eTJ
// SIG // l3JGdYXhtfih7QxF4ALelY8yHkjBhVdeEJUxGRkg/URG
// SIG // tBYq5ke2XPUhezl9kDjfz30Q08OuYsNz240L7NPWyGsS
// SIG // cuif75F4OL9tvzonp7Ax7YTrWF8P2Wc3uPoFkvle0zUy
// SIG // snQ/CjfYKVg7/DL5BElUtigG6PeOq37Ej4EX/jMrRZMw
// SIG // 2DUdTgZBTUEP6qPuRzdvZITMO9egVUhQMGRNMVXoKzGC
// SIG // AvUwggLxAgEBMIGTMHwxCzAJBgNVBAYTAlVTMRMwEQYD
// SIG // VQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25k
// SIG // MR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24x
// SIG // JjAkBgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBD
// SIG // QSAyMDEwAhMzAAAA0BxqYGHC5+GtAAAAAADQMA0GCWCG
// SIG // SAFlAwQCAQUAoIIBMjAaBgkqhkiG9w0BCQMxDQYLKoZI
// SIG // hvcNAQkQAQQwLwYJKoZIhvcNAQkEMSIEIAnnCvKF49la
// SIG // OV4EuiAtTmZ61NZ6Dz+SgrRZr3SdgLzeMIHiBgsqhkiG
// SIG // 9w0BCRACDDGB0jCBzzCBzDCBsQQUKSkfi3FxMlc3Nr+9
// SIG // neHTozE+jpUwgZgwgYCkfjB8MQswCQYDVQQGEwJVUzET
// SIG // MBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVk
// SIG // bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
// SIG // aW9uMSYwJAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFt
// SIG // cCBQQ0EgMjAxMAITMwAAANAcamBhwufhrQAAAAAA0DAW
// SIG // BBT1AmwNtNJE+qeMHajHbGXqqBuTbzANBgkqhkiG9w0B
// SIG // AQsFAASCAQB3sOYvDrzf1ikI7V3HL6yzTDkCCNyUzCDF
// SIG // D/+wuT7sNi5j4z18ahyMad/La/6MRfVtCXuBY2h0SMdX
// SIG // Y/KwiJqeXFbUEx0ZQuGwnNh2mQ151Fw5zI7rsmLPv7d8
// SIG // dqoKUuvk931vDrkHpHQZinVYR2CZQzEP4kN9DjOnSGg3
// SIG // F27S4EnQhReUPo4Aei23T8C4MSACtUTheAuNLsar8bZH
// SIG // kYEoQq28g+9cdTDyCCvdXsz8Gq1e9AeYJiAUgfLO1egn
// SIG // LQ3lFYmbOo+TgAKaf/rZEgWSu3RrrEP/nsMFw7ukO/7N
// SIG // WPtC++7Y7QXNwoOxeFeIK+G2JdzRAYi59oAJCWv8iVdE
// SIG // End signature block
