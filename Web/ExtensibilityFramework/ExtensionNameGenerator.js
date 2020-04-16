System.register([], function (exports_1, context_1) {
    "use strict";
    var ObjectExtensions, StringExtensions, ExtensionNameGenerator;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            ObjectExtensions = Commerce.ObjectExtensions;
            StringExtensions = Commerce.StringExtensions;
            ExtensionNameGenerator = (function () {
                function ExtensionNameGenerator() {
                }
                ExtensionNameGenerator.getAppBarCommandExtensionName = function (manifestItem) {
                    if (ObjectExtensions.isNullOrUndefined(manifestItem) ||
                        StringExtensions.isNullOrWhitespace(manifestItem.modulePath)) {
                        return StringExtensions.EMPTY;
                    }
                    return manifestItem.modulePath;
                };
                ExtensionNameGenerator.getControlExtensionName = function (manifestItem) {
                    if (ObjectExtensions.isNullOrUndefined(manifestItem) ||
                        StringExtensions.isNullOrWhitespace(manifestItem.modulePath)) {
                        return StringExtensions.EMPTY;
                    }
                    return manifestItem.modulePath;
                };
                ExtensionNameGenerator.getCustomColumnSetExtensionName = function (manifestItem) {
                    if (ObjectExtensions.isNullOrUndefined(manifestItem) ||
                        StringExtensions.isNullOrWhitespace(manifestItem.modulePath)) {
                        return StringExtensions.EMPTY;
                    }
                    return manifestItem.modulePath;
                };
                ExtensionNameGenerator.getCustomControlExtensionName = function (manifestItem) {
                    if (ObjectExtensions.isNullOrUndefined(manifestItem) ||
                        StringExtensions.isNullOrWhitespace(manifestItem.controlName)) {
                        return StringExtensions.EMPTY;
                    }
                    return manifestItem.controlName;
                };
                ExtensionNameGenerator.getCustomGridColumnExtensionName = function (manifestItem) {
                    if (ObjectExtensions.isNullOrUndefined(manifestItem) ||
                        StringExtensions.isNullOrWhitespace(manifestItem.modulePath)) {
                        return StringExtensions.EMPTY;
                    }
                    return manifestItem.modulePath;
                };
                ExtensionNameGenerator.getCustomGridItemSubfieldExtensionName = function (manifestItem) {
                    if (ObjectExtensions.isNullOrUndefined(manifestItem) ||
                        StringExtensions.isNullOrWhitespace(manifestItem.itemSubfieldName)) {
                        return StringExtensions.EMPTY;
                    }
                    return manifestItem.itemSubfieldName;
                };
                ExtensionNameGenerator.getCustomSearchFilterExtensionName = function (manifestItem) {
                    if (ObjectExtensions.isNullOrUndefined(manifestItem) ||
                        StringExtensions.isNullOrWhitespace(manifestItem.modulePath)) {
                        return StringExtensions.EMPTY;
                    }
                    return manifestItem.modulePath;
                };
                ExtensionNameGenerator.getMenuCommandExtensionName = function (manifestItem) {
                    if (ObjectExtensions.isNullOrUndefined(manifestItem) ||
                        StringExtensions.isNullOrWhitespace(manifestItem.modulePath)) {
                        return StringExtensions.EMPTY;
                    }
                    return manifestItem.modulePath;
                };
                ExtensionNameGenerator.getNewOperationExtensionName = function (manifestItem) {
                    if (ObjectExtensions.isNullOrUndefined(manifestItem) ||
                        ObjectExtensions.isNullOrUndefined(manifestItem.operationId)) {
                        return StringExtensions.EMPTY;
                    }
                    return manifestItem.operationId.toString();
                };
                ExtensionNameGenerator.getNewRequestHandlerExtensionName = function (manifestItem) {
                    if (ObjectExtensions.isNullOrUndefined(manifestItem) ||
                        StringExtensions.isNullOrWhitespace(manifestItem.modulePath)) {
                        return StringExtensions.EMPTY;
                    }
                    return manifestItem.modulePath;
                };
                ExtensionNameGenerator.getNewViewExtensionName = function (manifestItem) {
                    if (ObjectExtensions.isNullOrUndefined(manifestItem) ||
                        StringExtensions.isNullOrWhitespace(manifestItem.pageName)) {
                        return StringExtensions.EMPTY;
                    }
                    return manifestItem.pageName;
                };
                ExtensionNameGenerator.getReplacementRequestHandlerExtensionName = function (manifestItem) {
                    if (ObjectExtensions.isNullOrUndefined(manifestItem) ||
                        StringExtensions.isNullOrWhitespace(manifestItem.modulePath)) {
                        return StringExtensions.EMPTY;
                    }
                    return manifestItem.modulePath;
                };
                ExtensionNameGenerator.getResourcesExtensionName = function (manifestItem) {
                    if (ObjectExtensions.isNullOrUndefined(manifestItem) ||
                        StringExtensions.isNullOrWhitespace(manifestItem.culturesDirectoryPath)) {
                        return StringExtensions.EMPTY;
                    }
                    return manifestItem.culturesDirectoryPath;
                };
                ExtensionNameGenerator.getTemplatedDialogExtensionName = function (manifestItem) {
                    if (ObjectExtensions.isNullOrUndefined(manifestItem) ||
                        StringExtensions.isNullOrWhitespace(manifestItem.modulePath)) {
                        return StringExtensions.EMPTY;
                    }
                    return manifestItem.modulePath;
                };
                ExtensionNameGenerator.getTotalsPanelCustomFieldExtensionName = function (manifestItem) {
                    if (ObjectExtensions.isNullOrUndefined(manifestItem) ||
                        StringExtensions.isNullOrWhitespace(manifestItem.fieldName)) {
                        return StringExtensions.EMPTY;
                    }
                    return manifestItem.fieldName;
                };
                ExtensionNameGenerator.getTriggerExtensionName = function (manifestItem) {
                    if (ObjectExtensions.isNullOrUndefined(manifestItem) ||
                        StringExtensions.isNullOrWhitespace(manifestItem.modulePath)) {
                        return StringExtensions.EMPTY;
                    }
                    return manifestItem.modulePath;
                };
                ExtensionNameGenerator.getViewControllerExtensionName = function (manifestItem) {
                    if (ObjectExtensions.isNullOrUndefined(manifestItem) ||
                        StringExtensions.isNullOrWhitespace(manifestItem.modulePath)) {
                        return StringExtensions.EMPTY;
                    }
                    return manifestItem.modulePath;
                };
                return ExtensionNameGenerator;
            }());
            exports_1("default", ExtensionNameGenerator);
        }
    };
});
//# sourceMappingURL=ExtensionNameGenerator.js.map
// SIG // Begin signature block
// SIG // MIIjpAYJKoZIhvcNAQcCoIIjlTCCI5ECAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // V3RxihBw+YosixagR+YdPxYY9kcauJae4rcKYtsHnDyg
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
// SIG // SEXAQsmbdlsKgEhr/Xmfwb1tbWrJUnMTDXpQzTGCFXsw
// SIG // ghV3AgEBMIGVMH4xCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xKDAm
// SIG // BgNVBAMTH01pY3Jvc29mdCBDb2RlIFNpZ25pbmcgUENB
// SIG // IDIwMTECEzMAAAEDXiUcmR+jHrgAAAAAAQMwDQYJYIZI
// SIG // AWUDBAIBBQCggdAwGQYJKoZIhvcNAQkDMQwGCisGAQQB
// SIG // gjcCAQQwHAYKKwYBBAGCNwIBCzEOMAwGCisGAQQBgjcC
// SIG // ARUwLwYJKoZIhvcNAQkEMSIEICBiTsoLNd7oTiAnsQ4a
// SIG // aaRTZqtgbdlXUUaDBWbtYctaMGQGCisGAQQBgjcCAQwx
// SIG // VjBUoDaANABnAGwAbwBiAGEAbABpAHoAZQAuAGMAdQBs
// SIG // AHQAdQByAGUALgBsAHYALQBMAFYALgBqAHOhGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBAGVKps4LttM79P4X8c07Wwo9iFw1JDdf1nsT
// SIG // vbhwcTFspGBi6YrjC4oV4t3cinEhcljjeF2MYePFWEdX
// SIG // IlYJem8EDLkhkzpjPlwN5uTZ5MwYY5vwDHpykLdYIMvq
// SIG // 27/gJJv7R/jmSixSofQ5TS/RCdw/GoGS/eA9VKgzMVgl
// SIG // W1hzoMLrAuoFV2auTXDAaCQ0kEW8P/BF56KcvSUwfbvB
// SIG // XTMf9os+qjMTORLrMrApDSNz+fVYbYH27+7bC9xTsW3r
// SIG // l4RGdBCb2FKOshYKcARN5g0b6qVqxl/d/EVSN0KIjpSs
// SIG // 0W+3iHWiKOpx37Bw/uqwDNXFO8uo/IQA37ubBG3DW2ih
// SIG // ghLjMIIS3wYKKwYBBAGCNwMDATGCEs8wghLLBgkqhkiG
// SIG // 9w0BBwKgghK8MIISuAIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBTwYLKoZIhvcNAQkQAQSgggE+BIIBOjCCATYCAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQgBjmV
// SIG // 9GVE7hrTIy8SU0D2FaDXPtVzTpmBwgAoUWyxf1ACBlxn
// SIG // dmPYOhgRMjAxOTAzMTIwOTUzMTEuNFowBIACAfSggdCk
// SIG // gc0wgcoxCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJXQTEQ
// SIG // MA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9z
// SIG // b2Z0IENvcnBvcmF0aW9uMS0wKwYDVQQLEyRNaWNyb3Nv
// SIG // ZnQgSXJlbGFuZCBPcGVyYXRpb25zIExpbWl0ZWQxJjAk
// SIG // BgNVBAsTHVRoYWxlcyBUU1MgRVNOOkEyNDAtNEI4Mi0x
// SIG // MzBFMSUwIwYDVQQDExxNaWNyb3NvZnQgVGltZS1TdGFt
// SIG // cCBzZXJ2aWNloIIOPDCCBPEwggPZoAMCAQICEzMAAADg
// SIG // ship1NHCtPcAAAAAAOAwDQYJKoZIhvcNAQELBQAwfDEL
// SIG // MAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24x
// SIG // EDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jv
// SIG // c29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWljcm9z
// SIG // b2Z0IFRpbWUtU3RhbXAgUENBIDIwMTAwHhcNMTgwODIz
// SIG // MjAyNzAxWhcNMTkxMTIzMjAyNzAxWjCByjELMAkGA1UE
// SIG // BhMCVVMxCzAJBgNVBAgTAldBMRAwDgYDVQQHEwdSZWRt
// SIG // b25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRp
// SIG // b24xLTArBgNVBAsTJE1pY3Jvc29mdCBJcmVsYW5kIE9w
// SIG // ZXJhdGlvbnMgTGltaXRlZDEmMCQGA1UECxMdVGhhbGVz
// SIG // IFRTUyBFU046QTI0MC00QjgyLTEzMEUxJTAjBgNVBAMT
// SIG // HE1pY3Jvc29mdCBUaW1lLVN0YW1wIHNlcnZpY2UwggEi
// SIG // MA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDCl/hn
// SIG // DsembJx7FMS5RuaJsiQJDP0tiqyeCettiNlGcNoa428o
// SIG // VtblH6yZatCXZygyhzbnDJofTHIGtdiEzQc5fPhddfTd
// SIG // 4hEQgd5ch/BlGITXFEwJ4d/GhHZQ1hbLdiBT/j67Qx15
// SIG // VeuXy5n/jM9PvIbBksSWwX8vrkhRT/rqa1xWrmF+SfcY
// SIG // Kw+pC+d3tUHrgACo0YaVHuS3jlpXg33A+pul8wibZBcG
// SIG // xMF1CqwlP0AfMW60Dp4qm/JLbWxdx/pOiiOrM/tykFDt
// SIG // EnN07HXRjXDhDhfIeBCz4GPiCEFk94AaFxysFeFn9vyz
// SIG // 7TyKJxUksXJhtWGq2i4WmPcphyDzAgMBAAGjggEbMIIB
// SIG // FzAdBgNVHQ4EFgQUa0HTCrY5zqzv/p44rWuSbXaAh+gw
// SIG // HwYDVR0jBBgwFoAU1WM6XIoxkPNDe3xGG8UzaFqFbVUw
// SIG // VgYDVR0fBE8wTTBLoEmgR4ZFaHR0cDovL2NybC5taWNy
// SIG // b3NvZnQuY29tL3BraS9jcmwvcHJvZHVjdHMvTWljVGlt
// SIG // U3RhUENBXzIwMTAtMDctMDEuY3JsMFoGCCsGAQUFBwEB
// SIG // BE4wTDBKBggrBgEFBQcwAoY+aHR0cDovL3d3dy5taWNy
// SIG // b3NvZnQuY29tL3BraS9jZXJ0cy9NaWNUaW1TdGFQQ0Ff
// SIG // MjAxMC0wNy0wMS5jcnQwDAYDVR0TAQH/BAIwADATBgNV
// SIG // HSUEDDAKBggrBgEFBQcDCDANBgkqhkiG9w0BAQsFAAOC
// SIG // AQEACx/endmS5DW6xgb8fIdEqI963fUB7IoYlYNQU/YZ
// SIG // wq155uK1lwhcH5R1CaVMr+lyNIfD8l+lqy8mdou+Zwcr
// SIG // nzo3m2UEGO0uNFd4c8Iew5Z49V+6AojT6z5IGJh3y56u
// SIG // DACQzRZrR+26uCx1nLsYjK/WtxQDq1IHHWeAxfrGxsAZ
// SIG // O1BdQo25Mx34ZseViVj+usfmy0nUmfvZ0hFcMeNd4i4K
// SIG // ds03kY/CwWVZBw62tAjOHK/c81wO7hiutu9JX4MNjaEu
// SIG // FdheiNwmHyAmbpqYmz6K+9IPM75iXELbzjDc6yLJpVOq
// SIG // 17gfVDCaweryzgVnC2CIxq7gDGyTM9afwMtESTCCBnEw
// SIG // ggRZoAMCAQICCmEJgSoAAAAAAAIwDQYJKoZIhvcNAQEL
// SIG // BQAwgYgxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNo
// SIG // aW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQK
// SIG // ExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xMjAwBgNVBAMT
// SIG // KU1pY3Jvc29mdCBSb290IENlcnRpZmljYXRlIEF1dGhv
// SIG // cml0eSAyMDEwMB4XDTEwMDcwMTIxMzY1NVoXDTI1MDcw
// SIG // MTIxNDY1NVowfDELMAkGA1UEBhMCVVMxEzARBgNVBAgT
// SIG // Cldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAc
// SIG // BgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQG
// SIG // A1UEAxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIw
// SIG // MTAwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB
// SIG // AQCpHQ28dxGKOiDs/BOX9fp/aZRrdFQQ1aUKAIKF++18
// SIG // aEssX8XD5WHCdrc+Zitb8BVTJwQxH0EbGpUdzgkTjnxh
// SIG // MFmxMEQP8WCIhFRDDNdNuDgIs0Ldk6zWczBXJoKjRQ3Q
// SIG // 6vVHgc2/JGAyWGBG8lhHhjKEHnRhZ5FfgVSxz5NMksHE
// SIG // pl3RYRNuKMYa+YaAu99h/EbBJx0kZxJyGiGKr0tkiVBi
// SIG // sV39dx898Fd1rL2KQk1AUdEPnAY+Z3/1ZsADlkR+79BL
// SIG // /W7lmsqxqPJ6Kgox8NpOBpG2iAg16HgcsOmZzTznL0S6
// SIG // p/TcZL2kAcEgCZN4zfy8wMlEXV4WnAEFTyJNAgMBAAGj
// SIG // ggHmMIIB4jAQBgkrBgEEAYI3FQEEAwIBADAdBgNVHQ4E
// SIG // FgQU1WM6XIoxkPNDe3xGG8UzaFqFbVUwGQYJKwYBBAGC
// SIG // NxQCBAweCgBTAHUAYgBDAEEwCwYDVR0PBAQDAgGGMA8G
// SIG // A1UdEwEB/wQFMAMBAf8wHwYDVR0jBBgwFoAU1fZWy4/o
// SIG // olxiaNE9lJBb186aGMQwVgYDVR0fBE8wTTBLoEmgR4ZF
// SIG // aHR0cDovL2NybC5taWNyb3NvZnQuY29tL3BraS9jcmwv
// SIG // cHJvZHVjdHMvTWljUm9vQ2VyQXV0XzIwMTAtMDYtMjMu
// SIG // Y3JsMFoGCCsGAQUFBwEBBE4wTDBKBggrBgEFBQcwAoY+
// SIG // aHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3BraS9jZXJ0
// SIG // cy9NaWNSb29DZXJBdXRfMjAxMC0wNi0yMy5jcnQwgaAG
// SIG // A1UdIAEB/wSBlTCBkjCBjwYJKwYBBAGCNy4DMIGBMD0G
// SIG // CCsGAQUFBwIBFjFodHRwOi8vd3d3Lm1pY3Jvc29mdC5j
// SIG // b20vUEtJL2RvY3MvQ1BTL2RlZmF1bHQuaHRtMEAGCCsG
// SIG // AQUFBwICMDQeMiAdAEwAZQBnAGEAbABfAFAAbwBsAGkA
// SIG // YwB5AF8AUwB0AGEAdABlAG0AZQBuAHQALiAdMA0GCSqG
// SIG // SIb3DQEBCwUAA4ICAQAH5ohRDeLG4Jg/gXEDPZ2joSFv
// SIG // s+umzPUxvs8F4qn++ldtGTCzwsVmyWrf9efweL3HqJ4l
// SIG // 4/m87WtUVwgrUYJEEvu5U4zM9GASinbMQEBBm9xcF/9c
// SIG // +V4XNZgkVkt070IQyK+/f8Z/8jd9Wj8c8pl5SpFSAK84
// SIG // Dxf1L3mBZdmptWvkx872ynoAb0swRCQiPM/tA6WWj1kp
// SIG // vLb9BOFwnzJKJ/1Vry/+tuWOM7tiX5rbV0Dp8c6ZZpCM
// SIG // /2pif93FSguRJuI57BlKcWOdeyFtw5yjojz6f32WapB4
// SIG // pm3S4Zz5Hfw42JT0xqUKloakvZ4argRCg7i1gJsiOCC1
// SIG // JeVk7Pf0v35jWSUPei45V3aicaoGig+JFrphpxHLmtgO
// SIG // R5qAxdDNp9DvfYPw4TtxCd9ddJgiCGHasFAeb73x4QDf
// SIG // 5zEHpJM692VHeOj4qEir995yfmFrb3epgcunCaw5u+zG
// SIG // y9iCtHLNHfS4hQEegPsbiSpUObJb2sgNVZl6h3M7COaY
// SIG // LeqN4DMuEin1wC9UJyH3yKxO2ii4sanblrKnQqLJzxlB
// SIG // TeCG+SqaoxFmMNO7dDJL32N79ZmKLxvHIa9Zta7cRDyX
// SIG // UHHXodLFVeNp3lfB0d4wwP3M5k37Db9dT+mdHhk4L7zP
// SIG // WAUu7w2gUDXa7wknHNWzfjUeCLraNtvTX4/edIhJEqGC
// SIG // As4wggI3AgEBMIH4oYHQpIHNMIHKMQswCQYDVQQGEwJV
// SIG // UzELMAkGA1UECBMCV0ExEDAOBgNVBAcTB1JlZG1vbmQx
// SIG // HjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEt
// SIG // MCsGA1UECxMkTWljcm9zb2Z0IElyZWxhbmQgT3BlcmF0
// SIG // aW9ucyBMaW1pdGVkMSYwJAYDVQQLEx1UaGFsZXMgVFNT
// SIG // IEVTTjpBMjQwLTRCODItMTMwRTElMCMGA1UEAxMcTWlj
// SIG // cm9zb2Z0IFRpbWUtU3RhbXAgc2VydmljZaIjCgEBMAcG
// SIG // BSsOAwIaAxUAxnmkjOXedpqyHQqkJGn7ewhSC9GggYMw
// SIG // gYCkfjB8MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQD
// SIG // Ex1NaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDAN
// SIG // BgkqhkiG9w0BAQUFAAIFAOAxmG8wIhgPMjAxOTAzMTIx
// SIG // MDMxMTFaGA8yMDE5MDMxMzEwMzExMVowdzA9BgorBgEE
// SIG // AYRZCgQBMS8wLTAKAgUA4DGYbwIBADAKAgEAAgII0QIB
// SIG // /zAHAgEAAgISHDAKAgUA4DLp7wIBADA2BgorBgEEAYRZ
// SIG // CgQCMSgwJjAMBgorBgEEAYRZCgMCoAowCAIBAAIDB6Eg
// SIG // oQowCAIBAAIDAYagMA0GCSqGSIb3DQEBBQUAA4GBAH5K
// SIG // xCmvAF2Ww/J65r0MAqRZWnl9BMAG6Kg7fgIx3Z63jK4U
// SIG // nqhKkG35e3xP1BV7ccv1qUXjh2mhUX77r6k5uDa1h4CY
// SIG // Uo4icqkOAYbse7Hp3mOw38DZ+PKkPoYBRJGZroKmvqCG
// SIG // DSDZDcqJZg7ot+6ePlX5I1T0mKLQDobZYnOpMYIDDTCC
// SIG // AwkCAQEwgZMwfDELMAkGA1UEBhMCVVMxEzARBgNVBAgT
// SIG // Cldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAc
// SIG // BgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQG
// SIG // A1UEAxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIw
// SIG // MTACEzMAAADgship1NHCtPcAAAAAAOAwDQYJYIZIAWUD
// SIG // BAIBBQCgggFKMBoGCSqGSIb3DQEJAzENBgsqhkiG9w0B
// SIG // CRABBDAvBgkqhkiG9w0BCQQxIgQgB4JMNIVV4rUWW2X4
// SIG // pqN/DA14JDlVtw8FzLla2kR2ZDYwgfoGCyqGSIb3DQEJ
// SIG // EAIvMYHqMIHnMIHkMIG9BCClgS9VpDMosldyg1GQPVVk
// SIG // 5wwNOD+Pcl2aoLvRrEJfkDCBmDCBgKR+MHwxCzAJBgNV
// SIG // BAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYD
// SIG // VQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQg
// SIG // Q29ycG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jvc29mdCBU
// SIG // aW1lLVN0YW1wIFBDQSAyMDEwAhMzAAAA4LIYqdTRwrT3
// SIG // AAAAAADgMCIEIPFs+CdymtCI4q4chprFrUDF7f7f1HIJ
// SIG // gLcVdlsnvS/8MA0GCSqGSIb3DQEBCwUABIIBABqU0qCb
// SIG // bNWqETqasRca7hnFu3apiqymrBOTedPaZLfFRmJeOEGJ
// SIG // /lLVMH9xDmzvt/xUfe+oFopNtqCsdmjfWG0depNDtZ6L
// SIG // wdYxj5s9OJERK+9l4tLNuybDvUq2FyyoowQ0nqpc3jUr
// SIG // JA+LmQW/4h1POu53NIhArRlrRwoZB2lbE4P5eataOwwB
// SIG // YwXeLHT9k431J0vsKjfudr18Ezcd1Bp7TLYUIsevthCW
// SIG // AyuZ8z7WHuhbE9auPTq74dplTyuDBK3PteUmnVKDwF6j
// SIG // 6DRlfbizMgD71BEJoJm2QXBcxU2QH+J+d1vbrqB7IMjf
// SIG // xkz8Bnrz14+WAtEjinRNvaKzcQg=
// SIG // End signature block
