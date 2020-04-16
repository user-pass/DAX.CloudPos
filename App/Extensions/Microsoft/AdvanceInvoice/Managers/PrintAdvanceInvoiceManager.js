System.register(["PosApi/Consume/Device", "PosApi/Consume/Peripherals", "PosApi/Consume/StoreOperations", "PosApi/Entities", "PosApi/TypeExtensions", "../Messages/PrintAdvanceInvoiceResponse"], function (exports_1, context_1) {
    "use strict";
    var Device_1, Device_2, Peripherals_1, Peripherals_2, StoreOperations_1, Entities_1, TypeExtensions_1, PrintAdvanceInvoiceResponse_1, PrintAdvanceInvoiceManager;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Device_1_1) {
                Device_1 = Device_1_1;
                Device_2 = Device_1_1;
            },
            function (Peripherals_1_1) {
                Peripherals_1 = Peripherals_1_1;
                Peripherals_2 = Peripherals_1_1;
            },
            function (StoreOperations_1_1) {
                StoreOperations_1 = StoreOperations_1_1;
            },
            function (Entities_1_1) {
                Entities_1 = Entities_1_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            },
            function (PrintAdvanceInvoiceResponse_1_1) {
                PrintAdvanceInvoiceResponse_1 = PrintAdvanceInvoiceResponse_1_1;
            }
        ],
        execute: function () {
            PrintAdvanceInvoiceManager = (function () {
                function PrintAdvanceInvoiceManager(extensionContext) {
                    this._extensionContext = extensionContext;
                }
                PrintAdvanceInvoiceManager.isAdvanceInvoiceCreatedForDepositAsync = function (context) {
                    var request = new Device_1.GetDeviceConfigurationClientRequest();
                    return context.runtime.executeAsync(request)
                        .then(function (response) {
                        var isAdvanceInvoiceCreatedForDeposit = false;
                        if (!response.canceled) {
                            var useAdvanceInvoiceProp = {
                                Key: "UseAdvanceInvoice", Value: { BooleanValue: true }
                            };
                            isAdvanceInvoiceCreatedForDeposit = TypeExtensions_1.ArrayExtensions.hasElement(response.data.result.ExtensionProperties, useAdvanceInvoiceProp, function (left, right) {
                                return left.Key === right.Key &&
                                    left.Value.BooleanValue === right.Value.BooleanValue;
                            });
                        }
                        return Promise.resolve(isAdvanceInvoiceCreatedForDeposit);
                    });
                };
                PrintAdvanceInvoiceManager.isAdvanceInvoiceCanBePrinted = function (salesOrder, isOrderOperation) {
                    if (TypeExtensions_1.ObjectExtensions.isNullOrUndefined(salesOrder)) {
                        return false;
                    }
                    if (TypeExtensions_1.StringExtensions.isNullOrWhitespace(salesOrder.SalesId)) {
                        return false;
                    }
                    if (salesOrder.TransactionTypeValue !== Entities_1.ProxyEntities.TransactionType.CustomerOrder &&
                        salesOrder.TransactionTypeValue !== Entities_1.ProxyEntities.TransactionType.AsyncCustomerOrder) {
                        return false;
                    }
                    if (isOrderOperation) {
                        if (salesOrder.CustomerOrderModeValue !== Entities_1.ProxyEntities.CustomerOrderMode.CustomerOrderCreateOrEdit &&
                            salesOrder.CustomerOrderModeValue !== Entities_1.ProxyEntities.CustomerOrderMode.Cancellation) {
                            return false;
                        }
                    }
                    return true;
                };
                PrintAdvanceInvoiceManager.prototype.printAsync = function (printRequest) {
                    var _this = this;
                    if (TypeExtensions_1.ObjectExtensions.isNullOrUndefined(printRequest)) {
                        return Promise.resolve({ canceled: true, data: null });
                    }
                    return this._isReportCanBePrintedAsync()
                        .then(function (isReportCanBePrinted) {
                        if (!isReportCanBePrinted) {
                            return Promise.resolve({ canceled: true, data: null });
                        }
                        return _this._getAdvanceInvoiceReportDataSetAsync(printRequest)
                            .then(function (reportDataSet) {
                            return _this._printAdvanceInvoiceReportDataSetAsync(reportDataSet);
                        });
                    });
                };
                PrintAdvanceInvoiceManager.prototype._isReportCanBePrintedAsync = function () {
                    var _this = this;
                    return this._isHardwareStationActiveAsync()
                        .then(function (isHardwareStationActive) {
                        if (isHardwareStationActive) {
                            return _this._initWindowsPrinterNameAsync();
                        }
                        else {
                            return Promise.resolve(false);
                        }
                    });
                };
                PrintAdvanceInvoiceManager.prototype._isHardwareStationActiveAsync = function () {
                    var request = new Peripherals_2.HardwareStationStatusRequest();
                    return this._extensionContext.runtime.executeAsync(request)
                        .then(function (response) {
                        return Promise.resolve(response.data.isActive);
                    });
                };
                PrintAdvanceInvoiceManager.prototype._initWindowsPrinterNameAsync = function () {
                    var _this = this;
                    this._windowsPrinterName = TypeExtensions_1.StringExtensions.EMPTY;
                    var request = new Device_2.GetHardwareProfileClientRequest();
                    return this._extensionContext.runtime.executeAsync(request)
                        .then(function (response) {
                        if (!response.canceled) {
                            var printers = response.data.result.Printers;
                            if (!TypeExtensions_1.ObjectExtensions.isNullOrUndefined(printers)) {
                                var windowsPrinters = printers.filter(function (printer) {
                                    return printer.DeviceTypeValue === Entities_1.ProxyEntities.DeviceType.WindowsPrinter;
                                });
                                if (TypeExtensions_1.ArrayExtensions.hasElements(windowsPrinters)) {
                                    _this._windowsPrinterName = windowsPrinters[0].DeviceName;
                                }
                            }
                        }
                        if (TypeExtensions_1.StringExtensions.isNullOrWhitespace(_this._windowsPrinterName)) {
                            var errorMessage = _this._extensionContext.resources.getString("Windows_Printer_Not_Defined");
                            _this._extensionContext.logger.logError(_this._extensionContext.resources.getString("Advance_Invoice_Printing_Error") +
                                " " +
                                errorMessage);
                            return Promise.reject([new Entities_1.ClientEntities.ExtensionError(errorMessage)]);
                        }
                        else {
                            return Promise.resolve(true);
                        }
                    });
                };
                PrintAdvanceInvoiceManager.prototype._getAdvanceInvoiceReportDataSetAsync = function (printRequest) {
                    var reportId = "CustAdvanceInvoice";
                    var reportParameters = [];
                    this._addStringParameter("SalesOrderId", printRequest.salesOrderId, reportParameters);
                    this._addStringParameter("TransactionId", printRequest.transactionId, reportParameters);
                    this._addStringParameter("StoreId", printRequest.storeId, reportParameters);
                    this._addStringParameter("TerminalId", printRequest.terminalId, reportParameters);
                    this._addStringParameter("FileFormat", Entities_1.ProxyEntities.SrsReportFileFormat.Image.toString(), reportParameters);
                    var getSrsReportDataSetServiceRequest = new StoreOperations_1.GetSrsReportDataSetServiceRequest(this._extensionContext.logger.getNewCorrelationId(), reportId, reportParameters);
                    return this._extensionContext.runtime.executeAsync(getSrsReportDataSetServiceRequest)
                        .then(function (response) {
                        return Promise.resolve(response.data.reportDataSet);
                    });
                };
                PrintAdvanceInvoiceManager.prototype._printAdvanceInvoiceReportDataSetAsync = function (reportDataSet) {
                    var _this = this;
                    if (!this._isReportDataSetAvailable(reportDataSet)) {
                        return Promise.resolve({ canceled: true, data: null });
                    }
                    var imagePrinterPrintRequest = new Peripherals_1.HardwareStationDeviceActionRequest("Printer", "PrintImage", reportDataSet.Output.map(function (reportRow) {
                        return { ImageAsBase64String: reportRow.RowData[0].Value.StringValue, DeviceName: _this._windowsPrinterName };
                    }));
                    return this._extensionContext.runtime.executeAsync(imagePrinterPrintRequest)
                        .then(function (response) {
                        return Promise.resolve({ canceled: response.canceled, data: new PrintAdvanceInvoiceResponse_1.default() });
                    });
                };
                PrintAdvanceInvoiceManager.prototype._addStringParameter = function (parameterKey, parameterValue, parameters) {
                    var parameter = new Entities_1.ProxyEntities.CommercePropertyClass();
                    parameter.Key = parameterKey;
                    parameter.Value = new Entities_1.ProxyEntities.CommercePropertyValueClass();
                    parameter.Value.StringValue = parameterValue;
                    parameters.push(parameter);
                };
                PrintAdvanceInvoiceManager.prototype._isReportDataSetAvailable = function (reportDataSet) {
                    return !TypeExtensions_1.ObjectExtensions.isNullOrUndefined(reportDataSet) &&
                        TypeExtensions_1.ArrayExtensions.hasElements(reportDataSet.Output);
                };
                return PrintAdvanceInvoiceManager;
            }());
            exports_1("default", PrintAdvanceInvoiceManager);
        }
    };
});
//# sourceMappingURL=PrintAdvanceInvoiceManager.js.map
// SIG // Begin signature block
// SIG // MIIjpgYJKoZIhvcNAQcCoIIjlzCCI5MCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // w7dbbS8jM1jPRMagq0RcyAAE7TAN1+vkGdbDQapXr9Kg
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
// SIG // ARUwLwYJKoZIhvcNAQkEMSIEIMczyDrV4G2UuBGlQyf/
// SIG // MdUfxbzTmU4y2gJDQ1gLFNgZMGQGCisGAQQBgjcCAQwx
// SIG // VjBUoDaANABnAGwAbwBiAGEAbABpAHoAZQAuAGMAdQBs
// SIG // AHQAdQByAGUALgBsAHYALQBMAFYALgBqAHOhGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBAGelxeN2+ailjFBI2Dj7wVFnvLLjfIejz7OQ
// SIG // z73XSO1gpSPM3LzBmdRmXbXeFSMUrBApr/8U3dbZM0Li
// SIG // QoWUVNcXypcDz6wcaoeQD8pB4rzyBsvPAroULemDJsGt
// SIG // 4nROntE4GLtLmACqVDsUCqvgJ2xMw24APA5AxzY9Dc3T
// SIG // wI9ArZLHKPVxgT2OuHZVPUlzijHu3TL7qhNqECUfnQkm
// SIG // kj6Okeomskmuszual7BqgNbqA7tkbfgjDIKqWD9OXsph
// SIG // bfAe56oD/3VwMRGcIU1ioi1xOeGYbwRaqVwL6bmn9GlM
// SIG // Cp8j6ri/ymJsSMOfkHLovj7zsSX3LzMzBvmi5Yp9mVah
// SIG // ghLlMIIS4QYKKwYBBAGCNwMDATGCEtEwghLNBgkqhkiG
// SIG // 9w0BBwKgghK+MIISugIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBUQYLKoZIhvcNAQkQAQSgggFABIIBPDCCATgCAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQgMFa9
// SIG // RsOmU7obh8kyCQH1gzTIRUGnhkPcOtRBa0anYE4CBlx0
// SIG // OOnuDhgTMjAxOTAzMTIwOTUzMzIuMDk2WjAEgAIB9KCB
// SIG // 0KSBzTCByjELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjElMCMGA1UE
// SIG // CxMcTWljcm9zb2Z0IEFtZXJpY2EgT3BlcmF0aW9uczEm
// SIG // MCQGA1UECxMdVGhhbGVzIFRTUyBFU046MjI2NC1FMzNF
// SIG // LTc4MEMxJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0
// SIG // YW1wIFNlcnZpY2Wggg48MIIE8TCCA9mgAwIBAgITMwAA
// SIG // AO9M8mraywSdLAAAAAAA7zANBgkqhkiG9w0BAQsFADB8
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNy
// SIG // b3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDAeFw0xODEw
// SIG // MjQyMTE0MTZaFw0yMDAxMTAyMTE0MTZaMIHKMQswCQYD
// SIG // VQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4G
// SIG // A1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0
// SIG // IENvcnBvcmF0aW9uMSUwIwYDVQQLExxNaWNyb3NvZnQg
// SIG // QW1lcmljYSBPcGVyYXRpb25zMSYwJAYDVQQLEx1UaGFs
// SIG // ZXMgVFNTIEVTTjoyMjY0LUUzM0UtNzgwQzElMCMGA1UE
// SIG // AxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgU2VydmljZTCC
// SIG // ASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALU4
// SIG // bIOU0YHCOiZUmsSL1CYj48XyTW7YosKOKhw1EjBREczH
// SIG // g+L/awogn+OCMaHSKwU/QFdR0qnwhgf/1uDaaW6mrsC8
// SIG // y4FGQ7I8xqNMyJ5jx+X7Z7tflFEewL5OlZDz/opNEvdZ
// SIG // YKAq2b4kk87GqIwV8BeDB557pcPeXufpUp2edHAcVivy
// SIG // xPhfWxj8NNe7PiFzwezZFODLxh03ScR0PnUNXrFoLYiC
// SIG // R4FDE3GtaU324y5RqH0ZjiI140/4nWtWLYfRlMPmSnC8
// SIG // CUzZFG6mMJ76gJMsls6Qw8Lho/lLaFKIn1M9U+EyyyK3
// SIG // W65p54YwZuRXI/sq4lLi8fH2BZivXgkCAwEAAaOCARsw
// SIG // ggEXMB0GA1UdDgQWBBRMZCtKMzg8x3dkGRMKRJiE9k0p
// SIG // LTAfBgNVHSMEGDAWgBTVYzpcijGQ80N7fEYbxTNoWoVt
// SIG // VTBWBgNVHR8ETzBNMEugSaBHhkVodHRwOi8vY3JsLm1p
// SIG // Y3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9NaWNU
// SIG // aW1TdGFQQ0FfMjAxMC0wNy0wMS5jcmwwWgYIKwYBBQUH
// SIG // AQEETjBMMEoGCCsGAQUFBzAChj5odHRwOi8vd3d3Lm1p
// SIG // Y3Jvc29mdC5jb20vcGtpL2NlcnRzL01pY1RpbVN0YVBD
// SIG // QV8yMDEwLTA3LTAxLmNydDAMBgNVHRMBAf8EAjAAMBMG
// SIG // A1UdJQQMMAoGCCsGAQUFBwMIMA0GCSqGSIb3DQEBCwUA
// SIG // A4IBAQB1v8ZCvujAo97OlHhhGqx4+d50KyEh0hnq6hJr
// SIG // ZpwuWJrConqRLEDt5kx4yyWnFRaMOWrYz0AumdZDi0Db
// SIG // Cc6oDTDQTDIMBY/hq5So3gznofI93FwNU6j2to0sVAsB
// SIG // 3WUflnJox9N+Cse01TuQrK3pN4FyvV87tC1R1YvD/nRB
// SIG // INfrEGbuNIqd+3fEULnd9zLfFR9gFG+/G66ImB03+lgk
// SIG // At5LjJd0XsbErpgu8UybQRkOPlvQ6x3uqTOx1+w+LlhX
// SIG // +XiWozOKeN6GhpCzawIpP3u1XtSOdnQH2sdzp9QcPpSr
// SIG // kDnfvPWheHUjotyhh4Zzow2KCksE9pKj4mYrhGqhMIIG
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
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xJTAjBgNVBAsTHE1pY3Jvc29mdCBBbWVy
// SIG // aWNhIE9wZXJhdGlvbnMxJjAkBgNVBAsTHVRoYWxlcyBU
// SIG // U1MgRVNOOjIyNjQtRTMzRS03ODBDMSUwIwYDVQQDExxN
// SIG // aWNyb3NvZnQgVGltZS1TdGFtcCBTZXJ2aWNloiMKAQEw
// SIG // BwYFKw4DAhoDFQAlpSDgLefKXIKIL9DRLXS+tc4hXaCB
// SIG // gzCBgKR+MHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpX
// SIG // YXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYD
// SIG // VQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAkBgNV
// SIG // BAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEw
// SIG // MA0GCSqGSIb3DQEBBQUAAgUA4DHU1zAiGA8yMDE5MDMx
// SIG // MjE0NDg1NVoYDzIwMTkwMzEzMTQ0ODU1WjB3MD0GCisG
// SIG // AQQBhFkKBAExLzAtMAoCBQDgMdTXAgEAMAoCAQACAgk6
// SIG // AgH/MAcCAQACAhOIMAoCBQDgMyZXAgEAMDYGCisGAQQB
// SIG // hFkKBAIxKDAmMAwGCisGAQQBhFkKAwKgCjAIAgEAAgMH
// SIG // oSChCjAIAgEAAgMBhqAwDQYJKoZIhvcNAQEFBQADgYEA
// SIG // OuHxfqcdfbhjXODLPBecLiAAcaOj/227lRPMn85NKJ8p
// SIG // 0x+h2CQ9WuB5HP61/o/mIdtdGtsE/pjnYH/jGoO+F9se
// SIG // cxNdd4pBeaqkiRFQovj2I9EXOHi4RbJfTGV1pSMFewqu
// SIG // ilP9U4mvS4tuEHRV6mQdv60P9f1dEaxg5LRXnQYxggMN
// SIG // MIIDCQIBATCBkzB8MQswCQYDVQQGEwJVUzETMBEGA1UE
// SIG // CBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEe
// SIG // MBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYw
// SIG // JAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0Eg
// SIG // MjAxMAITMwAAAO9M8mraywSdLAAAAAAA7zANBglghkgB
// SIG // ZQMEAgEFAKCCAUowGgYJKoZIhvcNAQkDMQ0GCyqGSIb3
// SIG // DQEJEAEEMC8GCSqGSIb3DQEJBDEiBCDo7v4ytGH2RRO0
// SIG // ox8UJSBx7wXnHFmIEFSvXUzhuTuqcTCB+gYLKoZIhvcN
// SIG // AQkQAi8xgeowgecwgeQwgb0EIKBJ6qVVkjVZ5qaunJSn
// SIG // titLj2quJwpOliEwsQTf7nm6MIGYMIGApH4wfDELMAkG
// SIG // A1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAO
// SIG // BgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29m
// SIG // dCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0
// SIG // IFRpbWUtU3RhbXAgUENBIDIwMTACEzMAAADvTPJq2ssE
// SIG // nSwAAAAAAO8wIgQgqCYbCKRGozKPAG6r6MBU98HNu84K
// SIG // U01nN7711bfSGOUwDQYJKoZIhvcNAQELBQAEggEAml0v
// SIG // Ib6ofzjvNqoIKchtql4AvLZXxPlceJhXc9++DfOIb4ay
// SIG // 2dbm8YqJ8oSdwkCjxhWWSQjWX73vXKQSQqHZsKnisqhx
// SIG // UgpzKL7QVjpGprfuhxBzQ80H7a3bsWjSdvIU9RXmFiyH
// SIG // fiLPxHp8a8NKLSJtLXayAiEDu5PAEXydwlEQiu8XfN5V
// SIG // 3dq7Z0xc5D43bt+iqbXT3V/cC59g4+Tl5EzKdVAV9wW7
// SIG // wPSaAwUOdhOLPr0KwDPpyw9k9K8FJBIpQi051YFiprGv
// SIG // Ik9TLjGdXn/SkCe5YQNpXSWiIwUPsKMyjaoy8e9pWtXj
// SIG // byaMub7N8eIj86RM0FIvc39iiEsZ0w==
// SIG // End signature block
