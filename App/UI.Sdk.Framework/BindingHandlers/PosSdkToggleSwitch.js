System.register(["PosUISdk/Controls/ToggleSwitch", "./PosSdkBindingHelper"], function (exports_1, context_1) {
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
    var ToggleSwitch_1, PosSdkBindingHelper_1, Controls, PosSdkToggleSwitchBindingHandler;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (ToggleSwitch_1_1) {
                ToggleSwitch_1 = ToggleSwitch_1_1;
            },
            function (PosSdkBindingHelper_1_1) {
                PosSdkBindingHelper_1 = PosSdkBindingHelper_1_1;
            }
        ],
        execute: function () {
            Controls = Commerce.Controls;
            PosSdkToggleSwitchBindingHandler = (function (_super) {
                __extends(PosSdkToggleSwitchBindingHandler, _super);
                function PosSdkToggleSwitchBindingHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                PosSdkToggleSwitchBindingHandler.prototype.init = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                    var _this = this;
                    var correlationId = Commerce.LoggerHelper.getNewCorrelationId();
                    var controlName = "ToggleSwitch";
                    return PosSdkBindingHelper_1.default.initializeBinding(function () {
                        var toggleSwitch = valueAccessor();
                        if (!(toggleSwitch instanceof ToggleSwitch_1.ToggleSwitch)) {
                            throw "PosSdkToggleSwitch invalid binding object. Must be bound to in instance of PosUISdk::ToggleSwitch.";
                        }
                        PosSdkBindingHelper_1.default.addDomNodeDisposalCallback(element, toggleSwitch);
                        var newValueAccessor = PosSdkToggleSwitchBindingHandler._getValueAccessor(toggleSwitch);
                        return _super.prototype.init.call(_this, element, newValueAccessor, allBindings, viewModel, bindingContext);
                    }, controlName, correlationId);
                };
                PosSdkToggleSwitchBindingHandler._getValueAccessor = function (toggleSwitch) {
                    var options = {
                        labelOn: toggleSwitch.labelOn,
                        labelOff: toggleSwitch.labelOff,
                        onChange: toggleSwitch.onChange,
                        enabled: toggleSwitch.enabled,
                        checked: toggleSwitch.checked,
                        tabIndex: toggleSwitch.tabIndex
                    };
                    return function () { return options; };
                };
                return PosSdkToggleSwitchBindingHandler;
            }(Controls.ToggleSwitch.ToggleSwitchBindingHandler));
            exports_1("default", PosSdkToggleSwitchBindingHandler);
        }
    };
});
//# sourceMappingURL=PosSdkToggleSwitch.js.map
// SIG // Begin signature block
// SIG // MIIkeAYJKoZIhvcNAQcCoIIkaTCCJGUCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // yMyN2qj0xma2ohpIsPf3S0QSYOUVHd8ofdZeyL5b3R2g
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
// SIG // ARUwLwYJKoZIhvcNAQkEMSIEIA+QKIFHrtudXei/WX+u
// SIG // tzacXOtm+YUo6xcVl6N0XMQ4MGQGCisGAQQBgjcCAQwx
// SIG // VjBUoDaANABnAGwAbwBiAGEAbABpAHoAZQAuAGMAdQBs
// SIG // AHQAdQByAGUALgBsAHYALQBMAFYALgBqAHOhGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBAAtBsn/uzDwb8wsIP59A7LHgAnJKSgLubpCH
// SIG // nyaki/AcrP1iDPkQZJlkZI4FLAJNZRgESC5W0uY37IoO
// SIG // S83KbgMVjx+ErL9GbJ88y7zFsUpBdIWpXx36bPk/0InQ
// SIG // HRWNy917jDYpqRA892GWImKlQPbIdmxd5JU/dLC2eine
// SIG // tvM99LBCELuTZKRerNGKZZGaDPkGWMt7KDg4H68tbm+7
// SIG // 63oD56Ak2/kq7EhhRxaip3w3iuRPjjJe1Qjs1vYcC1As
// SIG // zsSSlXQq41GtbqEByT8X/wx8ULS617pTgu652m8jL//i
// SIG // vaxbsuD3Lrh2ybAM/p3gybPkdy+EEXPBVOxNA9vgLT2h
// SIG // ghO3MIITswYKKwYBBAGCNwMDATGCE6MwghOfBgkqhkiG
// SIG // 9w0BBwKgghOQMIITjAIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBWAYLKoZIhvcNAQkQAQSgggFHBIIBQzCCAT8CAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQgxral
// SIG // K+gmPuzGHzh8AdJ20h0rnIad/ovEmsgEnIXhCz4CBlx2
// SIG // 0/1zzhgTMjAxOTAzMTIwOTU0NDkuMzcxWjAHAgEBgAIB
// SIG // 9KCB1KSB0TCBzjELMAkGA1UEBhMCVVMxEzARBgNVBAgT
// SIG // Cldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAc
// SIG // BgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEpMCcG
// SIG // A1UECxMgTWljcm9zb2Z0IE9wZXJhdGlvbnMgUHVlcnRv
// SIG // IFJpY28xJjAkBgNVBAsTHVRoYWxlcyBUU1MgRVNOOkI4
// SIG // RUMtMzBBNC03MTQ0MSUwIwYDVQQDExxNaWNyb3NvZnQg
// SIG // VGltZS1TdGFtcCBTZXJ2aWNloIIPHzCCBnEwggRZoAMC
// SIG // AQICCmEJgSoAAAAAAAIwDQYJKoZIhvcNAQELBQAwgYgx
// SIG // CzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9u
// SIG // MRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24xMjAwBgNVBAMTKU1pY3Jv
// SIG // c29mdCBSb290IENlcnRpZmljYXRlIEF1dGhvcml0eSAy
// SIG // MDEwMB4XDTEwMDcwMTIxMzY1NVoXDTI1MDcwMTIxNDY1
// SIG // NVowfDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hp
// SIG // bmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoT
// SIG // FU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMd
// SIG // TWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTAwggEi
// SIG // MA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCpHQ28
// SIG // dxGKOiDs/BOX9fp/aZRrdFQQ1aUKAIKF++18aEssX8XD
// SIG // 5WHCdrc+Zitb8BVTJwQxH0EbGpUdzgkTjnxhMFmxMEQP
// SIG // 8WCIhFRDDNdNuDgIs0Ldk6zWczBXJoKjRQ3Q6vVHgc2/
// SIG // JGAyWGBG8lhHhjKEHnRhZ5FfgVSxz5NMksHEpl3RYRNu
// SIG // KMYa+YaAu99h/EbBJx0kZxJyGiGKr0tkiVBisV39dx89
// SIG // 8Fd1rL2KQk1AUdEPnAY+Z3/1ZsADlkR+79BL/W7lmsqx
// SIG // qPJ6Kgox8NpOBpG2iAg16HgcsOmZzTznL0S6p/TcZL2k
// SIG // AcEgCZN4zfy8wMlEXV4WnAEFTyJNAgMBAAGjggHmMIIB
// SIG // 4jAQBgkrBgEEAYI3FQEEAwIBADAdBgNVHQ4EFgQU1WM6
// SIG // XIoxkPNDe3xGG8UzaFqFbVUwGQYJKwYBBAGCNxQCBAwe
// SIG // CgBTAHUAYgBDAEEwCwYDVR0PBAQDAgGGMA8GA1UdEwEB
// SIG // /wQFMAMBAf8wHwYDVR0jBBgwFoAU1fZWy4/oolxiaNE9
// SIG // lJBb186aGMQwVgYDVR0fBE8wTTBLoEmgR4ZFaHR0cDov
// SIG // L2NybC5taWNyb3NvZnQuY29tL3BraS9jcmwvcHJvZHVj
// SIG // dHMvTWljUm9vQ2VyQXV0XzIwMTAtMDYtMjMuY3JsMFoG
// SIG // CCsGAQUFBwEBBE4wTDBKBggrBgEFBQcwAoY+aHR0cDov
// SIG // L3d3dy5taWNyb3NvZnQuY29tL3BraS9jZXJ0cy9NaWNS
// SIG // b29DZXJBdXRfMjAxMC0wNi0yMy5jcnQwgaAGA1UdIAEB
// SIG // /wSBlTCBkjCBjwYJKwYBBAGCNy4DMIGBMD0GCCsGAQUF
// SIG // BwIBFjFodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vUEtJ
// SIG // L2RvY3MvQ1BTL2RlZmF1bHQuaHRtMEAGCCsGAQUFBwIC
// SIG // MDQeMiAdAEwAZQBnAGEAbABfAFAAbwBsAGkAYwB5AF8A
// SIG // UwB0AGEAdABlAG0AZQBuAHQALiAdMA0GCSqGSIb3DQEB
// SIG // CwUAA4ICAQAH5ohRDeLG4Jg/gXEDPZ2joSFvs+umzPUx
// SIG // vs8F4qn++ldtGTCzwsVmyWrf9efweL3HqJ4l4/m87WtU
// SIG // VwgrUYJEEvu5U4zM9GASinbMQEBBm9xcF/9c+V4XNZgk
// SIG // Vkt070IQyK+/f8Z/8jd9Wj8c8pl5SpFSAK84Dxf1L3mB
// SIG // ZdmptWvkx872ynoAb0swRCQiPM/tA6WWj1kpvLb9BOFw
// SIG // nzJKJ/1Vry/+tuWOM7tiX5rbV0Dp8c6ZZpCM/2pif93F
// SIG // SguRJuI57BlKcWOdeyFtw5yjojz6f32WapB4pm3S4Zz5
// SIG // Hfw42JT0xqUKloakvZ4argRCg7i1gJsiOCC1JeVk7Pf0
// SIG // v35jWSUPei45V3aicaoGig+JFrphpxHLmtgOR5qAxdDN
// SIG // p9DvfYPw4TtxCd9ddJgiCGHasFAeb73x4QDf5zEHpJM6
// SIG // 92VHeOj4qEir995yfmFrb3epgcunCaw5u+zGy9iCtHLN
// SIG // HfS4hQEegPsbiSpUObJb2sgNVZl6h3M7COaYLeqN4DMu
// SIG // Ein1wC9UJyH3yKxO2ii4sanblrKnQqLJzxlBTeCG+Sqa
// SIG // oxFmMNO7dDJL32N79ZmKLxvHIa9Zta7cRDyXUHHXodLF
// SIG // VeNp3lfB0d4wwP3M5k37Db9dT+mdHhk4L7zPWAUu7w2g
// SIG // UDXa7wknHNWzfjUeCLraNtvTX4/edIhJEjCCBPUwggPd
// SIG // oAMCAQICEzMAAADMOr07cjgRBboAAAAAAMwwDQYJKoZI
// SIG // hvcNAQELBQAwfDELMAkGA1UEBhMCVVMxEzARBgNVBAgT
// SIG // Cldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAc
// SIG // BgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQG
// SIG // A1UEAxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIw
// SIG // MTAwHhcNMTgwODIzMjAyNjI1WhcNMTkxMTIzMjAyNjI1
// SIG // WjCBzjELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hp
// SIG // bmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoT
// SIG // FU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEpMCcGA1UECxMg
// SIG // TWljcm9zb2Z0IE9wZXJhdGlvbnMgUHVlcnRvIFJpY28x
// SIG // JjAkBgNVBAsTHVRoYWxlcyBUU1MgRVNOOkI4RUMtMzBB
// SIG // NC03MTQ0MSUwIwYDVQQDExxNaWNyb3NvZnQgVGltZS1T
// SIG // dGFtcCBTZXJ2aWNlMIIBIjANBgkqhkiG9w0BAQEFAAOC
// SIG // AQ8AMIIBCgKCAQEAx9BVpYomFWsV3fB3mLu1+cxTSwZx
// SIG // MScSZOo9LyP6eVEotWi1ut8dW9O6C4MKVYhzX6WezDqC
// SIG // fP6aAlPljpXMganBpFhMx7dwn1f/9c5kFrvG5e70Djoe
// SIG // I7ZPmugkGQn2Ui3bry+hK9eaMZAD3Xc3WdaGxzpQThW4
// SIG // 6w/nqIe62IdK0nYCAxisOukkQEjYpRWT9cIRumIhpnIS
// SIG // fn2yHuIwEiTU4mnchKNBe34BiPGBKhZqrNK83+iPVFa7
// SIG // 6/SAV4tEGV2sWKEU70+9ncepInqzty2Y5mRid+Y2M7CF
// SIG // 5WZ0ePdCe55tt5jSE4MW1VdiW9BTsPDZIFDpcRyeXrFg
// SIG // cuUiiwIDAQABo4IBGzCCARcwHQYDVR0OBBYEFK2pTaZK
// SIG // wmUQT9frex4hmjEzSOupMB8GA1UdIwQYMBaAFNVjOlyK
// SIG // MZDzQ3t8RhvFM2hahW1VMFYGA1UdHwRPME0wS6BJoEeG
// SIG // RWh0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2kvY3Js
// SIG // L3Byb2R1Y3RzL01pY1RpbVN0YVBDQV8yMDEwLTA3LTAx
// SIG // LmNybDBaBggrBgEFBQcBAQROMEwwSgYIKwYBBQUHMAKG
// SIG // Pmh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2kvY2Vy
// SIG // dHMvTWljVGltU3RhUENBXzIwMTAtMDctMDEuY3J0MAwG
// SIG // A1UdEwEB/wQCMAAwEwYDVR0lBAwwCgYIKwYBBQUHAwgw
// SIG // DQYJKoZIhvcNAQELBQADggEBAD1dXWqC6eJlUTVSw8kc
// SIG // v+ARYFYQp5hy5kO6eCEIwbOrcCnbSTyqxGMoTCYunCNA
// SIG // rgSseGBku6NgIJGTGkBwdypSvN8FCXqExsuonAk1GYW7
// SIG // /sfgwkBySX7iUiY5SwlECOKF4eXrt+rlX6LwswGDwtg0
// SIG // 8rLiQKhNS9L+qBSE6tWdAKq0Q0lMMzGOY557M72S+o+2
// SIG // 8jHvoNJ0q2D49egT9SBdzfEvpEF42LHvox1TyUs6qDhL
// SIG // Uaz0HkrLFm/xO19/XJNT8TaQzA5/xCfNaerk19oNnXxN
// SIG // TOXJpwvjsYdbcrndNZ1bK37F+FgauTQpVweKnPWn3YB7
// SIG // UF7lfulKImsu2N+hggOtMIIClQIBATCB/qGB1KSB0TCB
// SIG // zjELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEpMCcGA1UECxMgTWlj
// SIG // cm9zb2Z0IE9wZXJhdGlvbnMgUHVlcnRvIFJpY28xJjAk
// SIG // BgNVBAsTHVRoYWxlcyBUU1MgRVNOOkI4RUMtMzBBNC03
// SIG // MTQ0MSUwIwYDVQQDExxNaWNyb3NvZnQgVGltZS1TdGFt
// SIG // cCBTZXJ2aWNloiUKAQEwCQYFKw4DAhoFAAMVAHPahzH9
// SIG // Lvs8aKzn6EaUc0SHv5ZNoIHeMIHbpIHYMIHVMQswCQYD
// SIG // VQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4G
// SIG // A1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0
// SIG // IENvcnBvcmF0aW9uMSkwJwYDVQQLEyBNaWNyb3NvZnQg
// SIG // T3BlcmF0aW9ucyBQdWVydG8gUmljbzEnMCUGA1UECxMe
// SIG // bkNpcGhlciBOVFMgRVNOOjRERTktMEM1RS0zRTA5MSsw
// SIG // KQYDVQQDEyJNaWNyb3NvZnQgVGltZSBTb3VyY2UgTWFz
// SIG // dGVyIENsb2NrMA0GCSqGSIb3DQEBBQUAAgUA4DHvRTAi
// SIG // GA8yMDE5MDMxMjA4NDE0MVoYDzIwMTkwMzEzMDg0MTQx
// SIG // WjB0MDoGCisGAQQBhFkKBAExLDAqMAoCBQDgMe9FAgEA
// SIG // MAcCAQACAhDzMAcCAQACAhz8MAoCBQDgM0DFAgEAMDYG
// SIG // CisGAQQBhFkKBAIxKDAmMAwGCisGAQQBhFkKAwGgCjAI
// SIG // AgEAAgMW42ChCjAIAgEAAgMHoSAwDQYJKoZIhvcNAQEF
// SIG // BQADggEBABg0LQje761X7MSEgCHI2RPpGnfdSs1BXVFo
// SIG // e+FmFu9uhPx84WZP5bzgqqDH/n0PcK84p9ZBRQgj3XuF
// SIG // xZZiva3M8TRom40p6mRAd6oWwkVELDEE+B1GkWf5i14e
// SIG // 45vRgj50vJZ6AEQ1HMkywBvepz306gMHFKHD8ELVLmWa
// SIG // LWavh1plzM7UMS64IV8yVDpIBNnG5wM7Cu9WSFCu454x
// SIG // +dcY20Vy8gRuzJFiZUqlm1vGP1H5fIfPM1QVCVGmAv01
// SIG // dD6GJkg00AukwEXcZTde4DNjvuYHsU56v7+gSXJGHXG+
// SIG // 4AJMS9cWcw2Y4Qx4w7WlgWxMa31JGT4LR6aMFWWV+1cx
// SIG // ggL1MIIC8QIBATCBkzB8MQswCQYDVQQGEwJVUzETMBEG
// SIG // A1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9u
// SIG // ZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MSYwJAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFtcCBQ
// SIG // Q0EgMjAxMAITMwAAAMw6vTtyOBEFugAAAAAAzDANBglg
// SIG // hkgBZQMEAgEFAKCCATIwGgYJKoZIhvcNAQkDMQ0GCyqG
// SIG // SIb3DQEJEAEEMC8GCSqGSIb3DQEJBDEiBCA0WU4hocWK
// SIG // o+WpceJif0o4X8BJ3X9yuwjFpT/ebNy0iDCB4gYLKoZI
// SIG // hvcNAQkQAgwxgdIwgc8wgcwwgbEEFHPahzH9Lvs8aKzn
// SIG // 6EaUc0SHv5ZNMIGYMIGApH4wfDELMAkGA1UEBhMCVVMx
// SIG // EzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3Rh
// SIG // bXAgUENBIDIwMTACEzMAAADMOr07cjgRBboAAAAAAMww
// SIG // FgQUxjElZkCSxhxC3hTWKFRmWGED2G8wDQYJKoZIhvcN
// SIG // AQELBQAEggEAdmYwjbadPSx02/SROQW3wTbSOnvM67+5
// SIG // sHndV4HhnJ1KWTjg2LOucSfnrKfRXJ51rKBXoBGaajv/
// SIG // SlOD1ZELAbRja9Ouz0tP25zmVW4Epbn8g+8Sd6uVBPg/
// SIG // /xazY6aASBNtBai4lJFR3I3azK2TyDySchY7ZmGcZ2Sg
// SIG // hsMcNMdAuNDrGDQSp6Sk4GaokM/bmdtImlaWdpduKUc4
// SIG // sfuVnO2SL4qAot++zxZ82IQ5pQI6cwUJQizKMsZhD76A
// SIG // Zf5i4xSA4DnVoT3NuOeP7RhOmkjsntWV/Mt5rWWs8q/t
// SIG // KGo9QAbZsR9fQqAODtDlWn4Aoer0QgBlbX+NiUT4X++HPw==
// SIG // End signature block
