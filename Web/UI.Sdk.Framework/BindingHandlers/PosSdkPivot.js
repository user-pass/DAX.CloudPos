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
    var Pivot_1, PosSdkBindingHelper_1, Controls, PosSdkPivotBindingHandler;
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
            PosSdkPivotBindingHandler = (function (_super) {
                __extends(PosSdkPivotBindingHandler, _super);
                function PosSdkPivotBindingHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                PosSdkPivotBindingHandler.prototype.init = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                    var _this = this;
                    var correlationId = Commerce.LoggerHelper.getNewCorrelationId();
                    var controlName = "Pivot";
                    return PosSdkBindingHelper_1.default.initializeBinding(function () {
                        var pivot = valueAccessor();
                        if (!(pivot instanceof Pivot_1.Pivot)) {
                            throw "PosSdkPivot invalid binding object. Must be bound to in instance of PosUISdk::Pivot.";
                        }
                        PosSdkBindingHelper_1.default.addDomNodeDisposalCallback(element, pivot);
                        var newValueAccessor = PosSdkPivotBindingHandler._getValueAccessor(pivot);
                        return _super.prototype.init.call(_this, element, newValueAccessor, allBindings, viewModel, bindingContext);
                    }, controlName, correlationId);
                };
                PosSdkPivotBindingHandler._getValueAccessor = function (pivot) {
                    var options = {
                        onselectionchanged: pivot.onSelectionChanged,
                        orientation: WinJS.UI.Orientation.horizontal,
                        headerItemsAxBubbleAttr: Commerce.StringExtensions.EMPTY
                    };
                    return function () { return options; };
                };
                return PosSdkPivotBindingHandler;
            }(Controls.Pivot.PivotBindingHandler));
            exports_1("default", PosSdkPivotBindingHandler);
        }
    };
});
//# sourceMappingURL=PosSdkPivot.js.map
// SIG // Begin signature block
// SIG // MIIkdwYJKoZIhvcNAQcCoIIkaDCCJGQCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // 3QouD7pU6vXqlpU9dw/pzujQra7PdZLi0Mb5xgWjHsmg
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
// SIG // ARUwLwYJKoZIhvcNAQkEMSIEIOkHHNN1tdd0hdNSRSx7
// SIG // wC2ra7GdHpB/HoQEU0wPmOs3MGQGCisGAQQBgjcCAQwx
// SIG // VjBUoDaANABnAGwAbwBiAGEAbABpAHoAZQAuAGMAdQBs
// SIG // AHQAdQByAGUALgBsAHYALQBMAFYALgBqAHOhGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBAF88cqaNvlghDMkKc8l0ZjnrDQAQIA2LUGFX
// SIG // HgkYToBfCxPiBc6fVVz8io1mOQz37MCG4cYxKVqek9OO
// SIG // 1L9yVP5XUgMrYUTJ8GDhB3+aCzkpFhMZ7RmZjkDM7tGF
// SIG // xs1frloEx2tpzH/6SZqRF/NLmogxOW7EMTGXnxDvidsR
// SIG // GBp3zBizuv9tzBrZRh0KV2FmTtp/DAt20t/A07g3asL2
// SIG // yuJSctCuit64b89ETATtAN8tkQoo1mZZZEIMBPN03xSq
// SIG // H7fMvyiNw74s7hjE9hdHxjnHP5l7Lm7ABMS8/NgTKhDD
// SIG // nVqebGva620OAHbcGSlMAVUCBqd8OVR+sQXqkwO1E+Ch
// SIG // ghO2MIITsgYKKwYBBAGCNwMDATGCE6IwghOeBgkqhkiG
// SIG // 9w0BBwKgghOPMIITiwIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBVwYLKoZIhvcNAQkQAQSgggFGBIIBQjCCAT4CAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQgVeqv
// SIG // 1hSlD03jm6+VMWsAbFu0BHvwhbBx3PjRIt6CieECBlx2
// SIG // 1COOixgSMjAxOTAzMTIwOTU0NDkuMDVaMAcCAQGAAgH0
// SIG // oIHUpIHRMIHOMQswCQYDVQQGEwJVUzETMBEGA1UECBMK
// SIG // V2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwG
// SIG // A1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSkwJwYD
// SIG // VQQLEyBNaWNyb3NvZnQgT3BlcmF0aW9ucyBQdWVydG8g
// SIG // UmljbzEmMCQGA1UECxMdVGhhbGVzIFRTUyBFU046N0Qy
// SIG // RS0zNzgyLUIwRjcxJTAjBgNVBAMTHE1pY3Jvc29mdCBU
// SIG // aW1lLVN0YW1wIFNlcnZpY2Wggg8fMIIGcTCCBFmgAwIB
// SIG // AgIKYQmBKgAAAAAAAjANBgkqhkiG9w0BAQsFADCBiDEL
// SIG // MAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24x
// SIG // EDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jv
// SIG // c29mdCBDb3Jwb3JhdGlvbjEyMDAGA1UEAxMpTWljcm9z
// SIG // b2Z0IFJvb3QgQ2VydGlmaWNhdGUgQXV0aG9yaXR5IDIw
// SIG // MTAwHhcNMTAwNzAxMjEzNjU1WhcNMjUwNzAxMjE0NjU1
// SIG // WjB8MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGlu
// SIG // Z3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMV
// SIG // TWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1N
// SIG // aWNyb3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDCCASIw
// SIG // DQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAKkdDbx3
// SIG // EYo6IOz8E5f1+n9plGt0VBDVpQoAgoX77XxoSyxfxcPl
// SIG // YcJ2tz5mK1vwFVMnBDEfQRsalR3OCROOfGEwWbEwRA/x
// SIG // YIiEVEMM1024OAizQt2TrNZzMFcmgqNFDdDq9UeBzb8k
// SIG // YDJYYEbyWEeGMoQedGFnkV+BVLHPk0ySwcSmXdFhE24o
// SIG // xhr5hoC732H8RsEnHSRnEnIaIYqvS2SJUGKxXf13Hz3w
// SIG // V3WsvYpCTUBR0Q+cBj5nf/VmwAOWRH7v0Ev9buWayrGo
// SIG // 8noqCjHw2k4GkbaICDXoeByw6ZnNPOcvRLqn9NxkvaQB
// SIG // wSAJk3jN/LzAyURdXhacAQVPIk0CAwEAAaOCAeYwggHi
// SIG // MBAGCSsGAQQBgjcVAQQDAgEAMB0GA1UdDgQWBBTVYzpc
// SIG // ijGQ80N7fEYbxTNoWoVtVTAZBgkrBgEEAYI3FAIEDB4K
// SIG // AFMAdQBiAEMAQTALBgNVHQ8EBAMCAYYwDwYDVR0TAQH/
// SIG // BAUwAwEB/zAfBgNVHSMEGDAWgBTV9lbLj+iiXGJo0T2U
// SIG // kFvXzpoYxDBWBgNVHR8ETzBNMEugSaBHhkVodHRwOi8v
// SIG // Y3JsLm1pY3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0
// SIG // cy9NaWNSb29DZXJBdXRfMjAxMC0wNi0yMy5jcmwwWgYI
// SIG // KwYBBQUHAQEETjBMMEoGCCsGAQUFBzAChj5odHRwOi8v
// SIG // d3d3Lm1pY3Jvc29mdC5jb20vcGtpL2NlcnRzL01pY1Jv
// SIG // b0NlckF1dF8yMDEwLTA2LTIzLmNydDCBoAYDVR0gAQH/
// SIG // BIGVMIGSMIGPBgkrBgEEAYI3LgMwgYEwPQYIKwYBBQUH
// SIG // AgEWMWh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9QS0kv
// SIG // ZG9jcy9DUFMvZGVmYXVsdC5odG0wQAYIKwYBBQUHAgIw
// SIG // NB4yIB0ATABlAGcAYQBsAF8AUABvAGwAaQBjAHkAXwBT
// SIG // AHQAYQB0AGUAbQBlAG4AdAAuIB0wDQYJKoZIhvcNAQEL
// SIG // BQADggIBAAfmiFEN4sbgmD+BcQM9naOhIW+z66bM9TG+
// SIG // zwXiqf76V20ZMLPCxWbJat/15/B4vceoniXj+bzta1RX
// SIG // CCtRgkQS+7lTjMz0YBKKdsxAQEGb3FwX/1z5Xhc1mCRW
// SIG // S3TvQhDIr79/xn/yN31aPxzymXlKkVIArzgPF/UveYFl
// SIG // 2am1a+THzvbKegBvSzBEJCI8z+0DpZaPWSm8tv0E4XCf
// SIG // Mkon/VWvL/625Y4zu2JfmttXQOnxzplmkIz/amJ/3cVK
// SIG // C5Em4jnsGUpxY517IW3DnKOiPPp/fZZqkHimbdLhnPkd
// SIG // /DjYlPTGpQqWhqS9nhquBEKDuLWAmyI4ILUl5WTs9/S/
// SIG // fmNZJQ96LjlXdqJxqgaKD4kWumGnEcua2A5HmoDF0M2n
// SIG // 0O99g/DhO3EJ3110mCIIYdqwUB5vvfHhAN/nMQekkzr3
// SIG // ZUd46PioSKv33nJ+YWtvd6mBy6cJrDm77MbL2IK0cs0d
// SIG // 9LiFAR6A+xuJKlQ5slvayA1VmXqHczsI5pgt6o3gMy4S
// SIG // KfXAL1QnIffIrE7aKLixqduWsqdCosnPGUFN4Ib5Kpqj
// SIG // EWYw07t0MkvfY3v1mYovG8chr1m1rtxEPJdQcdeh0sVV
// SIG // 42neV8HR3jDA/czmTfsNv11P6Z0eGTgvvM9YBS7vDaBQ
// SIG // NdrvCScc1bN+NR4Iuto229Nfj950iEkSMIIE9TCCA92g
// SIG // AwIBAgITMwAAAM9MEKXbLLcFUgAAAAAAzzANBgkqhkiG
// SIG // 9w0BAQsFADB8MQswCQYDVQQGEwJVUzETMBEGA1UECBMK
// SIG // V2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwG
// SIG // A1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYD
// SIG // VQQDEx1NaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAx
// SIG // MDAeFw0xODA4MjMyMDI2MjdaFw0xOTExMjMyMDI2Mjda
// SIG // MIHOMQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGlu
// SIG // Z3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMV
// SIG // TWljcm9zb2Z0IENvcnBvcmF0aW9uMSkwJwYDVQQLEyBN
// SIG // aWNyb3NvZnQgT3BlcmF0aW9ucyBQdWVydG8gUmljbzEm
// SIG // MCQGA1UECxMdVGhhbGVzIFRTUyBFU046N0QyRS0zNzgy
// SIG // LUIwRjcxJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0
// SIG // YW1wIFNlcnZpY2UwggEiMA0GCSqGSIb3DQEBAQUAA4IB
// SIG // DwAwggEKAoIBAQCzHxlarCT2EWGZ1XQCfpDdTwgyPVNm
// SIG // Hk867Oo2E7ACZfzRs2POFstW2dOWSJWHTkZQkBlL6eKK
// SIG // Voy5A2zEZu/RN6FDFG0Q7DwK48b+F8iY24MLMnCvkxrQ
// SIG // xlnnx3xbN/qBsy5p7QLCn+JRGuiK+aPSVWM4VLT4oeS8
// SIG // 8zKQ6ag73+7a3dNV0ngNmjgTVGTY+XXAit/KjYvPW8dl
// SIG // v04XPJFm/cy8KC7W8JGJ5SO6NarO5oUK42UKxx650bMt
// SIG // 4cK29EGqxahUSPyi2ixkeoD5TRucNiXc7Yy4tuZeiLGr
// SIG // O2hhmi0R/UdgAMmcvZHRcYKSFvdYYQ1BOfSSBcDjHcuP
// SIG // YBwxAgMBAAGjggEbMIIBFzAdBgNVHQ4EFgQU4WJs4yK2
// SIG // OkCyZhvi0PsT3rbHy/AwHwYDVR0jBBgwFoAU1WM6XIox
// SIG // kPNDe3xGG8UzaFqFbVUwVgYDVR0fBE8wTTBLoEmgR4ZF
// SIG // aHR0cDovL2NybC5taWNyb3NvZnQuY29tL3BraS9jcmwv
// SIG // cHJvZHVjdHMvTWljVGltU3RhUENBXzIwMTAtMDctMDEu
// SIG // Y3JsMFoGCCsGAQUFBwEBBE4wTDBKBggrBgEFBQcwAoY+
// SIG // aHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3BraS9jZXJ0
// SIG // cy9NaWNUaW1TdGFQQ0FfMjAxMC0wNy0wMS5jcnQwDAYD
// SIG // VR0TAQH/BAIwADATBgNVHSUEDDAKBggrBgEFBQcDCDAN
// SIG // BgkqhkiG9w0BAQsFAAOCAQEAERI94KyQ4n8kNsTyMFtR
// SIG // lJykfui6PdbSLqX/MKv1/0PDNtypsrgUstwYt0cmkJ+W
// SIG // uEcwTkq9WrJYJ/joqAitahf2IRugw2Wj/Re5sRziqWSF
// SIG // zINayFecBw3d+oZPgUl6xGrekD8bOjNM7KfCJW0kjfM6
// SIG // kzIXHJXeB8aeSLH0lFAmZsX5cCIahLqI/lGTFTuMe45z
// SIG // +vQV5JjgIxEKu7nzgEF4896hE7bQK8wqwY9et/d7feIm
// SIG // M0tyLWrlKGKs+3uYOnz6wPr3WGPsd/iEQPR4HpWN4arf
// SIG // aKuqywyR4Abqz3tSNm1lqXFn7r/JAFYvnubK7KLQOvz1
// SIG // QmQ4D9D8CRnbFKGCA60wggKVAgEBMIH+oYHUpIHRMIHO
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMSkwJwYDVQQLEyBNaWNy
// SIG // b3NvZnQgT3BlcmF0aW9ucyBQdWVydG8gUmljbzEmMCQG
// SIG // A1UECxMdVGhhbGVzIFRTUyBFU046N0QyRS0zNzgyLUIw
// SIG // RjcxJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1w
// SIG // IFNlcnZpY2WiJQoBATAJBgUrDgMCGgUAAxUAiT7Q5NAy
// SIG // w4VdXSKWst4t0a+4l92ggd4wgdukgdgwgdUxCzAJBgNV
// SIG // BAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYD
// SIG // VQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQg
// SIG // Q29ycG9yYXRpb24xKTAnBgNVBAsTIE1pY3Jvc29mdCBP
// SIG // cGVyYXRpb25zIFB1ZXJ0byBSaWNvMScwJQYDVQQLEx5u
// SIG // Q2lwaGVyIE5UUyBFU046NERFOS0wQzVFLTNFMDkxKzAp
// SIG // BgNVBAMTIk1pY3Jvc29mdCBUaW1lIFNvdXJjZSBNYXN0
// SIG // ZXIgQ2xvY2swDQYJKoZIhvcNAQEFBQACBQDgMe9pMCIY
// SIG // DzIwMTkwMzEyMDg0MjE3WhgPMjAxOTAzMTMwODQyMTda
// SIG // MHQwOgYKKwYBBAGEWQoEATEsMCowCgIFAOAx72kCAQAw
// SIG // BwIBAAICBfgwBwIBAAICGwYwCgIFAOAzQOkCAQAwNgYK
// SIG // KwYBBAGEWQoEAjEoMCYwDAYKKwYBBAGEWQoDAaAKMAgC
// SIG // AQACAxbjYKEKMAgCAQACAwehIDANBgkqhkiG9w0BAQUF
// SIG // AAOCAQEAkXJ9FJ630SiNa7n+FBV6jmb16W548gasCSpg
// SIG // EI9h9bCKzPBoJkzUEkDD4EFiklUIb7BX+R6ik3rw4Pf0
// SIG // vBY/QJnJwr2JpCnteQMgLEbRQctN8kgJpOU3ImqWq44s
// SIG // 4p+MgTTp6oEzjZgFjklFTbeRV/qeHL4MupZhCZwKDiBf
// SIG // 4EbfjZhoB5le/OOaMU8o9IsS775rl4y05/DFh5RndFb7
// SIG // lO9Q5ORWJGccOQolG0WV7Kg65wnn2Z2HbCt8t+ypo7kI
// SIG // mKubJvCRtmZyB/6jdPXf9G0G287PaCGng0Sc9rCyixAf
// SIG // vnOlaRvySHwLSrS/DEfAng9ReYGWNNeqZyg0k/ce0jGC
// SIG // AvUwggLxAgEBMIGTMHwxCzAJBgNVBAYTAlVTMRMwEQYD
// SIG // VQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25k
// SIG // MR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24x
// SIG // JjAkBgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBD
// SIG // QSAyMDEwAhMzAAAAz0wQpdsstwVSAAAAAADPMA0GCWCG
// SIG // SAFlAwQCAQUAoIIBMjAaBgkqhkiG9w0BCQMxDQYLKoZI
// SIG // hvcNAQkQAQQwLwYJKoZIhvcNAQkEMSIEIA3C9GNngu0O
// SIG // e0s1aEyr9zxr9NBRM708Eu+1BP+vEkH+MIHiBgsqhkiG
// SIG // 9w0BCRACDDGB0jCBzzCBzDCBsQQUiT7Q5NAyw4VdXSKW
// SIG // st4t0a+4l90wgZgwgYCkfjB8MQswCQYDVQQGEwJVUzET
// SIG // MBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVk
// SIG // bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
// SIG // aW9uMSYwJAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFt
// SIG // cCBQQ0EgMjAxMAITMwAAAM9MEKXbLLcFUgAAAAAAzzAW
// SIG // BBQ4lk1MYx3igSp5vr+T3q3fkF0dcTANBgkqhkiG9w0B
// SIG // AQsFAASCAQBmjNqPDrdvT+UfvrkP9DRRStV54gADtzbl
// SIG // XiPSGkvhdInL0C8rO3eOJ80NitGeLFdyV81BY/+jfxj4
// SIG // /jukKL+nogix0MuJ+Kgcf10sR76oJMifhXhDuG/2pt2t
// SIG // Jn9yJn6MUIbpH9q0WJXjqC0fvkoEeDc6FIs1G7gfBb/m
// SIG // HMMRIBynPz6RIxWB/qXXFPuvmB/1JuR7pygFd0P+eE6Q
// SIG // t1Mx2unuWjt+7FUB0l/F6jzonWjjiUn/74Y14EFPmYK0
// SIG // tQ0HarptxhNQmrhK78yk/NT9dYgKGsKI2YumNEQh0G4a
// SIG // LARP+drYUu1hkngEA8AfRlJvZPVvRNGnoSurdjxYUM+I
// SIG // End signature block
