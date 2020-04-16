System.register(["./BindingHandlers/PosSdkAppBar", "./BindingHandlers/PosSdkAppBarCommand", "./BindingHandlers/PosSdkDatePicker", "./BindingHandlers/PosSdkHeaderSplitView", "./BindingHandlers/PosSdkLoader", "./BindingHandlers/PosSdkPivot", "./BindingHandlers/PosSdkPivotItem", "./BindingHandlers/PosSdkTimePicker", "./BindingHandlers/PosSdkToggleSwitch", "./BindingHandlers/PosSdkMenu", "./BindingHandlers/PosSdkMenuCommand", "./BindingHandlers/PosSdkDataList", "./BindingHandlers/PosSdkToggleMenu", "./BindingHandlers/PosSdkToggleMenuCommand", "./BindingHandlers/PosSdkAlphanumericNumPad", "./BindingHandlers/PosSdkCurrencyNumPad", "./BindingHandlers/PosSdkNumericNumPad", "./BindingHandlers/PosSdkTransactionNumPad"], function (exports_1, context_1) {
    "use strict";
    var PosSdkAppBar_1, PosSdkAppBarCommand_1, PosSdkDatePicker_1, PosSdkHeaderSplitView_1, PosSdkLoader_1, PosSdkPivot_1, PosSdkPivotItem_1, PosSdkTimePicker_1, PosSdkToggleSwitch_1, PosSdkMenu_1, PosSdkMenuCommand_1, PosSdkDataList_1, PosSdkToggleMenu_1, PosSdkToggleMenuCommand_1, PosSdkAlphanumericNumPad_1, PosSdkCurrencyNumPad_1, PosSdkNumericNumPad_1, PosSdkTransactionNumPad_1, UISdkLoader;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (PosSdkAppBar_1_1) {
                PosSdkAppBar_1 = PosSdkAppBar_1_1;
            },
            function (PosSdkAppBarCommand_1_1) {
                PosSdkAppBarCommand_1 = PosSdkAppBarCommand_1_1;
            },
            function (PosSdkDatePicker_1_1) {
                PosSdkDatePicker_1 = PosSdkDatePicker_1_1;
            },
            function (PosSdkHeaderSplitView_1_1) {
                PosSdkHeaderSplitView_1 = PosSdkHeaderSplitView_1_1;
            },
            function (PosSdkLoader_1_1) {
                PosSdkLoader_1 = PosSdkLoader_1_1;
            },
            function (PosSdkPivot_1_1) {
                PosSdkPivot_1 = PosSdkPivot_1_1;
            },
            function (PosSdkPivotItem_1_1) {
                PosSdkPivotItem_1 = PosSdkPivotItem_1_1;
            },
            function (PosSdkTimePicker_1_1) {
                PosSdkTimePicker_1 = PosSdkTimePicker_1_1;
            },
            function (PosSdkToggleSwitch_1_1) {
                PosSdkToggleSwitch_1 = PosSdkToggleSwitch_1_1;
            },
            function (PosSdkMenu_1_1) {
                PosSdkMenu_1 = PosSdkMenu_1_1;
            },
            function (PosSdkMenuCommand_1_1) {
                PosSdkMenuCommand_1 = PosSdkMenuCommand_1_1;
            },
            function (PosSdkDataList_1_1) {
                PosSdkDataList_1 = PosSdkDataList_1_1;
            },
            function (PosSdkToggleMenu_1_1) {
                PosSdkToggleMenu_1 = PosSdkToggleMenu_1_1;
            },
            function (PosSdkToggleMenuCommand_1_1) {
                PosSdkToggleMenuCommand_1 = PosSdkToggleMenuCommand_1_1;
            },
            function (PosSdkAlphanumericNumPad_1_1) {
                PosSdkAlphanumericNumPad_1 = PosSdkAlphanumericNumPad_1_1;
            },
            function (PosSdkCurrencyNumPad_1_1) {
                PosSdkCurrencyNumPad_1 = PosSdkCurrencyNumPad_1_1;
            },
            function (PosSdkNumericNumPad_1_1) {
                PosSdkNumericNumPad_1 = PosSdkNumericNumPad_1_1;
            },
            function (PosSdkTransactionNumPad_1_1) {
                PosSdkTransactionNumPad_1 = PosSdkTransactionNumPad_1_1;
            }
        ],
        execute: function () {
            UISdkLoader = (function () {
                function UISdkLoader() {
                }
                UISdkLoader.initialize = function () {
                    if (UISdkLoader._isInitialized) {
                        return;
                    }
                    var BINDING_HANDLERS_BY_NAME = {
                        msPosAlphanumericNumPad: PosSdkAlphanumericNumPad_1.default,
                        msPosAppBar: PosSdkAppBar_1.default,
                        msPosAppBarCommand: PosSdkAppBarCommand_1.default,
                        msPosCurrencyNumPad: PosSdkCurrencyNumPad_1.default,
                        msPosDatePicker: PosSdkDatePicker_1.default,
                        msPosHeaderSplitView: PosSdkHeaderSplitView_1.default,
                        msPosLoader: PosSdkLoader_1.default,
                        msPosPivot: PosSdkPivot_1.default,
                        msPosPivotItem: PosSdkPivotItem_1.default,
                        msPosMenu: PosSdkMenu_1.default,
                        msPosMenuCommand: PosSdkMenuCommand_1.default,
                        msPosNumericNumPad: PosSdkNumericNumPad_1.default,
                        msPosTimePicker: PosSdkTimePicker_1.default,
                        msPosToggleSwitch: PosSdkToggleSwitch_1.default,
                        msPosDataList: PosSdkDataList_1.default,
                        msPosToggleMenu: PosSdkToggleMenu_1.default,
                        msPosToggleMenuCommand: PosSdkToggleMenuCommand_1.default,
                        msPosTransactionNumPad: PosSdkTransactionNumPad_1.default
                    };
                    Object.keys(BINDING_HANDLERS_BY_NAME).forEach(function (bindingHandlerName) {
                        if (!Commerce.ObjectExtensions.isNullOrUndefined(ko.bindingHandlers[bindingHandlerName])) {
                            throw "UISdkLoader::initialize knockout binding with name " + bindingHandlerName + " already exists.";
                        }
                        var bindingHandlerType = BINDING_HANDLERS_BY_NAME[bindingHandlerName];
                        if (Commerce.ObjectExtensions.isFunction(bindingHandlerType)) {
                            ko.bindingHandlers[bindingHandlerName] = new bindingHandlerType();
                        }
                    });
                    UISdkLoader._isInitialized = true;
                };
                UISdkLoader._isInitialized = false;
                return UISdkLoader;
            }());
            exports_1("default", UISdkLoader);
        }
    };
});
//# sourceMappingURL=UISdkLoader.js.map
// SIG // Begin signature block
// SIG // MIIkeAYJKoZIhvcNAQcCoIIkaTCCJGUCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // /0wCLNfMrZPaiHMSnSvpc9uIkdUprXTzbmJwUquatCCg
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
// SIG // ARUwLwYJKoZIhvcNAQkEMSIEILE42EqwzOCEx6WPkdMY
// SIG // Ka0SWnaqRo1l4SOJBX486I9EMGQGCisGAQQBgjcCAQwx
// SIG // VjBUoDaANABnAGwAbwBiAGEAbABpAHoAZQAuAGMAdQBs
// SIG // AHQAdQByAGUALgBsAHYALQBMAFYALgBqAHOhGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBAGTGAMA+gGj4Iaw9u7jeXtssyrWOUns29xz2
// SIG // t7j3hDp968fKlcIHdYxOh16ZdM8TTCaSGnNTYum/LjVs
// SIG // W07gH8uOa//Bz0crWq8/X2RQ0lJstpZJPMW5fL/ACgGM
// SIG // sumA8zgOAsvLL3iU3uhWw/0mlwJf6DnDNyKZ2KV/FcxL
// SIG // SUqnpUyBGLewqChf98IxbW1DP6Yd21500Q2G286dCHOn
// SIG // fbCejQ44TdSP0urN8ZPCVTrBG8GRGUzNB5JC3tt8Ez9Z
// SIG // VW0Lr+KhT+qWGj736Bfsj0ZIbDavbfCBsynH8vSLpBXC
// SIG // ErRTXsVgRzYuq929Ad867pwr2kknVjimiEKUzIyVc26h
// SIG // ghO3MIITswYKKwYBBAGCNwMDATGCE6MwghOfBgkqhkiG
// SIG // 9w0BBwKgghOQMIITjAIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBWAYLKoZIhvcNAQkQAQSgggFHBIIBQzCCAT8CAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQginuo
// SIG // AXpX6VFCzgnH07Dq4OPlm1k03/Ta5ygR+owiC4ACBlx2
// SIG // 1EiPZhgTMjAxOTAzMTIwOTU0NTAuMTQ4WjAHAgEBgAIB
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
// SIG // SIb3DQEJEAEEMC8GCSqGSIb3DQEJBDEiBCBasOyU9seK
// SIG // C78NGxr+/bnvRIA+jF8cP+sNh4MxCKzSWTCB4gYLKoZI
// SIG // hvcNAQkQAgwxgdIwgc8wgcwwgbEEFCkpH4txcTJXNza/
// SIG // vZ3h06MxPo6VMIGYMIGApH4wfDELMAkGA1UEBhMCVVMx
// SIG // EzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3Rh
// SIG // bXAgUENBIDIwMTACEzMAAADQHGpgYcLn4a0AAAAAANAw
// SIG // FgQU9QJsDbTSRPqnjB2ox2xl6qgbk28wDQYJKoZIhvcN
// SIG // AQELBQAEggEANzf+fyvAtpnOrjCzB/8RNxm4fZ3UmsHO
// SIG // cicItNEizXOQ2Ph1UOeKioJQ5m9oNqiWZ2seQG4xfzm6
// SIG // Re8m7xH2o9IyWP6OkI7vE3s0pOk+b0cKbbmKOqiprZD/
// SIG // Sfgcii5pXiU5B8cxhzHkR9t07fGqTjana/IlJCET+8ww
// SIG // /8Pyn4WjO9llEFr4So322LNXiHVOrzbiFi+IBAZyYtJM
// SIG // DV6L6DZPkxS/w9V8Qe6TG/m5wIHGJX4DKXvhEzs4CqmT
// SIG // QfC3z58LV3FPgoJ90iTNbhbgk8/7KSiNQoiL4PMD7ig+
// SIG // bySW5EsH6sZsFUvXhy2WB91kt/eDF6NgDYjaqNAOcoRuPA==
// SIG // End signature block
