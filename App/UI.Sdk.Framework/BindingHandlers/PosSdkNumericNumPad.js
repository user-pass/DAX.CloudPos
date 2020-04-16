System.register(["PosUISdk/Controls/NumPad", "./PosSdkBindingHelper"], function (exports_1, context_1) {
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
    var NumPad_1, PosSdkBindingHelper_1, Controls, PosSdkNumericNumPadBindingHandler;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (NumPad_1_1) {
                NumPad_1 = NumPad_1_1;
            },
            function (PosSdkBindingHelper_1_1) {
                PosSdkBindingHelper_1 = PosSdkBindingHelper_1_1;
            }
        ],
        execute: function () {
            Controls = Commerce.Controls;
            PosSdkNumericNumPadBindingHandler = (function (_super) {
                __extends(PosSdkNumericNumPadBindingHandler, _super);
                function PosSdkNumericNumPadBindingHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                PosSdkNumericNumPadBindingHandler.prototype.init = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                    var _this = this;
                    var correlationId = Commerce.LoggerHelper.getNewCorrelationId();
                    var controlName = "NumericNumberPad";
                    return PosSdkBindingHelper_1.default.initializeBinding(function () {
                        var numPad = valueAccessor();
                        if (!(numPad instanceof NumPad_1.NumericNumPad)) {
                            throw "PosSdkNumericNumPad invalid binding object. Must be bound to in instance of PosUISdk::NumericNumPad.";
                        }
                        PosSdkBindingHelper_1.default.addDomNodeDisposalCallback(element, numPad);
                        var newValueAccessor = PosSdkNumericNumPadBindingHandler._getValueAccessor(numPad);
                        return _super.prototype.init.call(_this, element, newValueAccessor, allBindings, viewModel, bindingContext);
                    }, controlName, correlationId);
                };
                PosSdkNumericNumPadBindingHandler._getValueAccessor = function (numPad) {
                    var options = {
                        labelDataBinding: { text: numPad.label },
                        inputDataBinding: undefined,
                        onEnter: numPad.onEnter,
                        value: numPad.value,
                        decimalPrecision: numPad.decimalPrecision,
                        numPadInputSource: numPad.numPadInputSource
                    };
                    return function () { return options; };
                };
                return PosSdkNumericNumPadBindingHandler;
            }(Controls.NumPad.NumericNumPadBindingHandler));
            exports_1("default", PosSdkNumericNumPadBindingHandler);
        }
    };
});
//# sourceMappingURL=PosSdkNumericNumPad.js.map
// SIG // Begin signature block
// SIG // MIIkeAYJKoZIhvcNAQcCoIIkaTCCJGUCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // HV51cq1r/j+6hsw6YwWt6wg36j9I+kTM5TZk3Fwpuxag
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
// SIG // ARUwLwYJKoZIhvcNAQkEMSIEIEjsdp/pmrzdD5D6ei3L
// SIG // tACe1Cm+GT9r1/FYGmZwf/uhMGQGCisGAQQBgjcCAQwx
// SIG // VjBUoDaANABnAGwAbwBiAGEAbABpAHoAZQAuAGMAdQBs
// SIG // AHQAdQByAGUALgBsAHYALQBMAFYALgBqAHOhGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBAF9cvwwQGsEHWghvm4q0lOu2EvGE2cnW+6H6
// SIG // NjMs9tltKR+C46p68mizkSX+5H+05YfgCOV6q7ZSWGwj
// SIG // lao7ykbxVxFGmfVWjuWThtHu+lFwSkuFtjE8gizJDOEU
// SIG // W2nmEhmnWQNMnbpc9jUnWhisKsQQ9aVxHNaGhq71s/U3
// SIG // 5snrEEVTFXXMxfAojrHahHmN1CaAygkKE/uSauwLz/K6
// SIG // /xP0TsDrDWdR/beQO7ZbNUeVagVGnGXnkbY9O19d47t0
// SIG // OzIiNV2ttHr6XnJiH7yxEQXvo6HTZQNKOJzBAbD7WFSc
// SIG // 6YkvGLZOJ91/WdQVwRvFkIeAkaIaXybQiVyMp+Omp0Gh
// SIG // ghO3MIITswYKKwYBBAGCNwMDATGCE6MwghOfBgkqhkiG
// SIG // 9w0BBwKgghOQMIITjAIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBWAYLKoZIhvcNAQkQAQSgggFHBIIBQzCCAT8CAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQgiJ21
// SIG // W5m4RiEf4xeYkZKq4KavorNJ2VUd45/ct4f+AOUCBlx2
// SIG // 7wF+oxgTMjAxOTAzMTIwOTU0NTAuNDA1WjAHAgEBgAIB
// SIG // 9KCB1KSB0TCBzjELMAkGA1UEBhMCVVMxEzARBgNVBAgT
// SIG // Cldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAc
// SIG // BgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEpMCcG
// SIG // A1UECxMgTWljcm9zb2Z0IE9wZXJhdGlvbnMgUHVlcnRv
// SIG // IFJpY28xJjAkBgNVBAsTHVRoYWxlcyBUU1MgRVNOOkY1
// SIG // MjgtMzc3Ny04QTc2MSUwIwYDVQQDExxNaWNyb3NvZnQg
// SIG // VGltZS1TdGFtcCBTZXJ2aWNloIIPHzCCBPUwggPdoAMC
// SIG // AQICEzMAAADRmM/kPJklZIQAAAAAANEwDQYJKoZIhvcN
// SIG // AQELBQAwfDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UE
// SIG // AxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTAw
// SIG // HhcNMTgwODIzMjAyNjMzWhcNMTkxMTIzMjAyNjMzWjCB
// SIG // zjELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEpMCcGA1UECxMgTWlj
// SIG // cm9zb2Z0IE9wZXJhdGlvbnMgUHVlcnRvIFJpY28xJjAk
// SIG // BgNVBAsTHVRoYWxlcyBUU1MgRVNOOkY1MjgtMzc3Ny04
// SIG // QTc2MSUwIwYDVQQDExxNaWNyb3NvZnQgVGltZS1TdGFt
// SIG // cCBTZXJ2aWNlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A
// SIG // MIIBCgKCAQEA7wDOxEyGqfaSKQqEPfMK7QKtk1H+sj/k
// SIG // yTnn6kQtbiyktUBLYnmL2kiYX38v6EJYHX5UAGvU7pns
// SIG // kuxwvI1Af2H7jbm4PD+P02K9lx1iFAdLlpdQauWD6EEj
// SIG // TipN1VdUWIvPtCc504JBZZPfjG7CIMVJNTek0PfMFNTO
// SIG // C0cbYMe5n0pgIEFAjmH4OmlJOsiXaGs2iLaHTjy3rz6T
// SIG // MLNlvG1wMHkl2+c+SWYlbR6JoFQ0sNAEn6qKxGgR7kpd
// SIG // dQlu9wVKHjRLU8cXmEpJIxrZ3Owr7tTs31JcyVrlZg4a
// SIG // yFlIP04qI3NHbiLqA1jEfHaquR7FbqPYz84KPzNykyrH
// SIG // /wIDAQABo4IBGzCCARcwHQYDVR0OBBYEFIP7EkVwNv9n
// SIG // ibpQi93Jxj1U82oMMB8GA1UdIwQYMBaAFNVjOlyKMZDz
// SIG // Q3t8RhvFM2hahW1VMFYGA1UdHwRPME0wS6BJoEeGRWh0
// SIG // dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2kvY3JsL3By
// SIG // b2R1Y3RzL01pY1RpbVN0YVBDQV8yMDEwLTA3LTAxLmNy
// SIG // bDBaBggrBgEFBQcBAQROMEwwSgYIKwYBBQUHMAKGPmh0
// SIG // dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2kvY2VydHMv
// SIG // TWljVGltU3RhUENBXzIwMTAtMDctMDEuY3J0MAwGA1Ud
// SIG // EwEB/wQCMAAwEwYDVR0lBAwwCgYIKwYBBQUHAwgwDQYJ
// SIG // KoZIhvcNAQELBQADggEBADrgMufapAT0iR6YGdEleg09
// SIG // nyLZRqYv1LLOfaQRHBW4FniWuU2Ndx3MYQXAqmfG3Dic
// SIG // dvB3JpTEN/bo27R9wYDT7xgmqKfFblG7yvS4ttuf/kMI
// SIG // SGegL94YS1CSBBULammK6Vr5STlFJOr8D3TGdPviOciA
// SIG // ZC4L22m3MubLcsdgEY5towI/EVpWR5r0EvzunGeTykYU
// SIG // X/Tr00UhkZvk6MwImCSrLJwcRv4qT4f8lPR+6rJ2SfwJ
// SIG // eTyWtX8x6GVr6MRwYtbYNIF0z0SmrzhmfjLDNT2zZGLr
// SIG // cp940BF++Qs1NaINHA+GiBXs7o7pjXvX7Vs6jhGCBYV1
// SIG // 8Bf8laWayigwggZxMIIEWaADAgECAgphCYEqAAAAAAAC
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
// SIG // BgNVBAsTHVRoYWxlcyBUU1MgRVNOOkY1MjgtMzc3Ny04
// SIG // QTc2MSUwIwYDVQQDExxNaWNyb3NvZnQgVGltZS1TdGFt
// SIG // cCBTZXJ2aWNloiUKAQEwCQYFKw4DAhoFAAMVAEpczNJO
// SIG // r+lrEQJ6hpddUbl2tlTxoIHeMIHbpIHYMIHVMQswCQYD
// SIG // VQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4G
// SIG // A1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0
// SIG // IENvcnBvcmF0aW9uMSkwJwYDVQQLEyBNaWNyb3NvZnQg
// SIG // T3BlcmF0aW9ucyBQdWVydG8gUmljbzEnMCUGA1UECxMe
// SIG // bkNpcGhlciBOVFMgRVNOOjRERTktMEM1RS0zRTA5MSsw
// SIG // KQYDVQQDEyJNaWNyb3NvZnQgVGltZSBTb3VyY2UgTWFz
// SIG // dGVyIENsb2NrMA0GCSqGSIb3DQEBBQUAAgUA4DDagzAi
// SIG // GA8yMDE5MDMxMTIxMDA1MVoYDzIwMTkwMzEyMjEwMDUx
// SIG // WjB0MDoGCisGAQQBhFkKBAExLDAqMAoCBQDgMNqDAgEA
// SIG // MAcCAQACAhM+MAcCAQACAhpWMAoCBQDgMiwDAgEAMDYG
// SIG // CisGAQQBhFkKBAIxKDAmMAwGCisGAQQBhFkKAwGgCjAI
// SIG // AgEAAgMW42ChCjAIAgEAAgMHoSAwDQYJKoZIhvcNAQEF
// SIG // BQADggEBAHtI8pCOqgqn2fwRm/RiNzZzDAE8xFBFk/HE
// SIG // 6kDsLtQS/cdfAeAWi/C0CMO4XD8hpYyz1RlsHKqO0xIQ
// SIG // QJWXAlf5ROPKB+PHgoc3M1Of8DXeD5KKsBw5Q15lkjVA
// SIG // KQ8Uww7drR82/YULsWZpyOZbjG3ZtpAj8n3hXyj5g/3Q
// SIG // tY1hbjC9xnpM43Q/BqNihVD+3/X5H4orF5keg8qbszD9
// SIG // L9IUizeaI9Bd+8skemaXsaGbzoQXsiDj5niDrzBcBLTV
// SIG // YSsm4yw/rx5fM4yeQ5jiMB1vDHFA3NwDFECycA35aCCb
// SIG // D8WZlfKmjreG9CWquicpkyXwbb9m7yXeyMjUtnXMFqIx
// SIG // ggL1MIIC8QIBATCBkzB8MQswCQYDVQQGEwJVUzETMBEG
// SIG // A1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9u
// SIG // ZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MSYwJAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFtcCBQ
// SIG // Q0EgMjAxMAITMwAAANGYz+Q8mSVkhAAAAAAA0TANBglg
// SIG // hkgBZQMEAgEFAKCCATIwGgYJKoZIhvcNAQkDMQ0GCyqG
// SIG // SIb3DQEJEAEEMC8GCSqGSIb3DQEJBDEiBCBiNyWlsEhe
// SIG // oLM2TG0SKRMsK7D0UMKFF9THBROqO/dkJzCB4gYLKoZI
// SIG // hvcNAQkQAgwxgdIwgc8wgcwwgbEEFEpczNJOr+lrEQJ6
// SIG // hpddUbl2tlTxMIGYMIGApH4wfDELMAkGA1UEBhMCVVMx
// SIG // EzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3Rh
// SIG // bXAgUENBIDIwMTACEzMAAADRmM/kPJklZIQAAAAAANEw
// SIG // FgQU+eXLCm8j8sF7RUMmZ0DRTvghZLIwDQYJKoZIhvcN
// SIG // AQELBQAEggEAjoSRdJuknVq+53sc4D71ndpGzjdMKZil
// SIG // B00MxO+EL79iYepzydibh8QIw3IQ2xEIEIJ1z/M3UnXM
// SIG // PBqk3g1Tfi/ogVx9tG1anQFzZyxcvik1zsVaMCaj6rpV
// SIG // NSrvcFwLNjmRD5b4Dteqoq0MVDfydVgEJ+n+l+kBxjJI
// SIG // WqFT1uuvb+zXtlINxbNo9j7I7T4RBiUWVS8Ua3s0TMDg
// SIG // zeOE2I+8cVzTvn+6v8mByLOkA/k1XLPa3g1x6JkKBQbi
// SIG // lzIVqzFyN3/jTuMQYjU8y1KO58oA76Zw9dtN1o5gR4dd
// SIG // dOhMaul6d+fnflI0LR+onbPzFG/rceTtzbRcETLHa8GjAA==
// SIG // End signature block
