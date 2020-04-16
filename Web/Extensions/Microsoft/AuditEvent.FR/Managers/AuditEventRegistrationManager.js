System.register(["PosApi/Consume/Device", "PosApi/Consume/SalesOrders", "PosApi/Consume/Employees", "PosApi/Consume/Peripherals", "PosApi/Consume/StoreOperations", "PosApi/Entities", "PosApi/TypeExtensions", "../Entities/FranceExtensibleAuditEventType"], function (exports_1, context_1) {
    "use strict";
    var Device_1, Device_2, SalesOrders_1, Employees_1, Peripherals_1, StoreOperations_1, Entities_1, TypeExtensions_1, FranceExtensibleAuditEventType_1, AuditEventRegistrationManager;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Device_1_1) {
                Device_1 = Device_1_1;
                Device_2 = Device_1_1;
            },
            function (SalesOrders_1_1) {
                SalesOrders_1 = SalesOrders_1_1;
            },
            function (Employees_1_1) {
                Employees_1 = Employees_1_1;
            },
            function (Peripherals_1_1) {
                Peripherals_1 = Peripherals_1_1;
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
            function (FranceExtensibleAuditEventType_1_1) {
                FranceExtensibleAuditEventType_1 = FranceExtensibleAuditEventType_1_1;
            }
        ],
        execute: function () {
            AuditEventRegistrationManager = (function () {
                function AuditEventRegistrationManager(extensionContext) {
                    this.extensionContext = extensionContext;
                }
                AuditEventRegistrationManager.prototype.registerConnectionStatusChangeAsync = function (connectionStatusType, previousConnectionStatusType) {
                    var message;
                    var auditEventType;
                    var shouldRegister = false;
                    switch (connectionStatusType) {
                        case Entities_1.ClientEntities.ConnectionStatusType.Online:
                            if (!TypeExtensions_1.ObjectExtensions.isNullOrUndefined(previousConnectionStatusType) &&
                                previousConnectionStatusType !== Entities_1.ClientEntities.ConnectionStatusType.Online) {
                                message = this.extensionContext.resources.getString(AuditEventRegistrationManager.OFFLINE_MODE_OFF_EVENT_MESSAGE_RESOURCE_ID);
                                auditEventType = FranceExtensibleAuditEventType_1.FranceExtensibleAuditEventType.OfflineModeOff;
                                shouldRegister = true;
                            }
                            break;
                        case Entities_1.ClientEntities.ConnectionStatusType.ManualOffline:
                        case Entities_1.ClientEntities.ConnectionStatusType.SeamlessOffline:
                            if (previousConnectionStatusType !== Entities_1.ClientEntities.ConnectionStatusType.ManualOffline &&
                                previousConnectionStatusType !== Entities_1.ClientEntities.ConnectionStatusType.SeamlessOffline) {
                                message = this.extensionContext.resources.getString(AuditEventRegistrationManager.OFFLINE_MODE_ON_EVENT_MESSAGE_RESOURCE_ID);
                                auditEventType = FranceExtensibleAuditEventType_1.FranceExtensibleAuditEventType.OfflineModeOn;
                                shouldRegister = true;
                            }
                            break;
                        default:
                            break;
                    }
                    if (!shouldRegister) {
                        return Promise.resolve();
                    }
                    var eventData = {
                        auditEventTypeValue: auditEventType.Value,
                        eventMessage: message,
                        source: AuditEventRegistrationManager.CONNECTION_STATUS_CHANGE_EVENT_SOURCE
                    };
                    return this._registerCustomAuditEventAsync(eventData);
                };
                AuditEventRegistrationManager.prototype.updateAndPrintReceipts = function (salesOrder, receiptAndPrinterPairs) {
                    var _this = this;
                    return this._recreateSalesReceiptsForSalesOrder(salesOrder)
                        .then(function (recreatedReceipts) {
                        var receiptsToPrint = receiptAndPrinterPairs.filter(function (pair) {
                            return (!TypeExtensions_1.ObjectExtensions.isNullOrUndefined(pair) && !TypeExtensions_1.ObjectExtensions.isNullOrUndefined(pair.receipt)
                                && pair.receipt.ReceiptTypeValue !== Entities_1.ProxyEntities.ReceiptType.SalesReceipt);
                        })
                            .map(function (pair) {
                            return pair.receipt;
                        })
                            .concat(recreatedReceipts);
                        var printRequest = new Peripherals_1.PrinterPrintRequest(receiptsToPrint);
                        return _this.extensionContext.runtime.executeAsync(printRequest);
                    });
                };
                AuditEventRegistrationManager.prototype.registerPrintReceiptCopyAsync = function (salesOrder) {
                    var eventData = {
                        auditEventTypeValue: FranceExtensibleAuditEventType_1.FranceExtensibleAuditEventType.PrintReceiptCopy.Value,
                        eventMessage: TypeExtensions_1.StringExtensions.format(this.extensionContext.resources.getString(AuditEventRegistrationManager.PRINT_RECEIPT_COPY_EVENT_MESSAGE_RESOURCE_ID), salesOrder.Id),
                        source: AuditEventRegistrationManager.PRINT_RECEIPT_COPY_EVENT_SOURCE,
                        transactionReference: {
                            Channel: salesOrder.ChannelId,
                            Store: salesOrder.StoreId,
                            Terminal: salesOrder.TerminalId,
                            TransactionId: salesOrder.Id
                        },
                        extensionProperties: []
                    };
                    var receiptIdExtensionProperty = {
                        Key: AuditEventRegistrationManager.RECEIPT_ID_KEY_ID,
                        Value: {
                            StringValue: salesOrder.ReceiptId
                        }
                    };
                    eventData.extensionProperties.push(receiptIdExtensionProperty);
                    return this._registerCustomAuditEventAsync(eventData);
                };
                AuditEventRegistrationManager.prototype.registerPurgeTransactionsDataAsync = function () {
                    var eventData = {
                        auditEventTypeValue: FranceExtensibleAuditEventType_1.FranceExtensibleAuditEventType.PurgeTransactionsData.Value,
                        eventMessage: this.extensionContext.resources.getString(AuditEventRegistrationManager.PURGE_TRANSACTIONS_DATA_EVENT_MESSAGE_RESOURCE_ID),
                        source: AuditEventRegistrationManager.PURGE_TRANSACTIONS_DATA_EVENT_SOURCE
                    };
                    return this._registerCustomAuditEventAsync(eventData);
                };
                AuditEventRegistrationManager.prototype.registerUserLogOn = function (employee) {
                    var eventData = {
                        auditEventTypeValue: FranceExtensibleAuditEventType_1.FranceExtensibleAuditEventType.UserLogOn.Value,
                        eventMessage: TypeExtensions_1.StringExtensions.format(this.extensionContext.resources.getString(AuditEventRegistrationManager.USER_LOGON_EVENT_MESSAGE_RESOURCE_ID), employee.StaffId),
                        source: AuditEventRegistrationManager.USER_LOGON_EVENT_SOURCE
                    };
                    return this._registerCustomAuditEventAsync(eventData);
                };
                AuditEventRegistrationManager.prototype.registerUserLogOff = function (employee) {
                    var eventData = {
                        staff: employee.StaffId,
                        auditEventTypeValue: FranceExtensibleAuditEventType_1.FranceExtensibleAuditEventType.UserLogOff.Value,
                        eventMessage: TypeExtensions_1.StringExtensions.format(this.extensionContext.resources.getString(AuditEventRegistrationManager.USER_LOGOFF_EVENT_MESSAGE_RESOURCE_ID), employee.StaffId),
                        source: AuditEventRegistrationManager.USER_LOGOFF_EVENT_SOURCE
                    };
                    return this._registerCustomAuditEventAsync(eventData);
                };
                AuditEventRegistrationManager.prototype._recreateSalesReceiptsForSalesOrder = function (salesOrder) {
                    var _this = this;
                    var salesOrderId = TypeExtensions_1.StringExtensions.EMPTY;
                    var queryBySalesId = false;
                    if (!TypeExtensions_1.StringExtensions.isNullOrWhitespace(salesOrder.Id)
                        && TypeExtensions_1.StringExtensions.compare(salesOrder.Id, salesOrder.SalesId, true) !== 0) {
                        salesOrderId = salesOrder.Id;
                    }
                    else if (!TypeExtensions_1.StringExtensions.isNullOrWhitespace(salesOrder.SalesId)) {
                        salesOrderId = salesOrder.SalesId;
                        queryBySalesId = true;
                    }
                    return Promise.all([
                        this.extensionContext.runtime.executeAsync(new Device_2.GetHardwareProfileClientRequest())
                            .then(function (response) {
                            return response.data.result;
                        }),
                        this.extensionContext.runtime.executeAsync(new Device_1.GetDeviceConfigurationClientRequest())
                            .then(function (response) {
                            return response.data.result;
                        })
                    ])
                        .then(function (results) {
                        var hardwareProfile = results[0];
                        var deviceConfiguration = results[1];
                        var criteria = {
                            IsCopy: true,
                            IsRemoteTransaction: salesOrder.StoreId !== deviceConfiguration.StoreNumber,
                            IsPreview: false,
                            QueryBySalesId: queryBySalesId,
                            ReceiptTypeValue: Entities_1.ProxyEntities.ReceiptType.SalesReceipt,
                            HardwareProfileId: hardwareProfile.ProfileId
                        };
                        var getReceiptsRequest = new SalesOrders_1.GetReceiptsClientRequest(salesOrderId, criteria);
                        return _this.extensionContext.runtime.executeAsync(getReceiptsRequest);
                    })
                        .then(function (response) {
                        return response.data.result;
                    });
                };
                AuditEventRegistrationManager.prototype._registerCustomAuditEventAsync = function (eventData) {
                    var _this = this;
                    return this.extensionContext.runtime.executeAsync(new Device_1.GetDeviceConfigurationClientRequest())
                        .then(function (response) {
                        var deviceConfiguration = response.data.result;
                        if (!deviceConfiguration.AuditEnabled) {
                            return Promise.resolve();
                        }
                        var getStaffIdAsync;
                        if (TypeExtensions_1.ObjectExtensions.isNullOrUndefined(eventData.staff) || TypeExtensions_1.StringExtensions.isEmpty(eventData.staff)) {
                            getStaffIdAsync = _this.extensionContext.runtime.executeAsync(new Employees_1.GetLoggedOnEmployeeClientRequest())
                                .then(function (response) {
                                var currentEmployee = response.data.result;
                                return TypeExtensions_1.ObjectExtensions.isNullOrUndefined(currentEmployee) ? TypeExtensions_1.StringExtensions.EMPTY : currentEmployee.StaffId;
                            });
                        }
                        else {
                            getStaffIdAsync = Promise.resolve(eventData.staff);
                        }
                        return getStaffIdAsync.then(function (staffId) {
                            var request = new StoreOperations_1.RegisterCustomAuditEventClientRequest(eventData.auditEventTypeValue, eventData.channel || deviceConfiguration.ChannelId, eventData.store || deviceConfiguration.StoreNumber, eventData.terminal || deviceConfiguration.TerminalId, staffId, eventData.source, eventData.eventMessage, Entities_1.ProxyEntities.AuditLogTraceLevel.Trace, eventData.transactionReference, eventData.extensionProperties);
                            return _this.extensionContext.runtime.executeAsync(request)
                                .then(function () { return Promise.resolve(); });
                        });
                    }).catch(function (reason) {
                        _this.extensionContext.logger.logError(TypeExtensions_1.StringExtensions.format(_this.extensionContext.resources.getString(AuditEventRegistrationManager.AUDIT_EVENT_REGISTRATION_ERROR_MESSAGE_RESOURCE_ID), eventData.source, JSON.stringify(reason)));
                    });
                };
                AuditEventRegistrationManager.CONNECTION_STATUS_CHANGE_EVENT_SOURCE = "AuditEvent.FR.Extension.AuditEventRegistrationManager.registerConnectionStatusChange()";
                AuditEventRegistrationManager.PRINT_RECEIPT_COPY_EVENT_SOURCE = "AuditEvent.FR.Extension.AuditEventRegistrationManager.registerPrintReceiptCopyAsync()";
                AuditEventRegistrationManager.PURGE_TRANSACTIONS_DATA_EVENT_SOURCE = "AuditEvent.FR.Extension.registerPurgeTransactionsData()";
                AuditEventRegistrationManager.USER_LOGON_EVENT_SOURCE = "AuditEvent.FR.Extension.registerUserLogOn()";
                AuditEventRegistrationManager.USER_LOGOFF_EVENT_SOURCE = "AuditEvent.FR.Extension.registerUserLogOff()";
                AuditEventRegistrationManager.OFFLINE_MODE_ON_EVENT_MESSAGE_RESOURCE_ID = "Audit_event_offline_mode_on_event_message";
                AuditEventRegistrationManager.OFFLINE_MODE_OFF_EVENT_MESSAGE_RESOURCE_ID = "Audit_event_offline_mode_off_event_message";
                AuditEventRegistrationManager.PRINT_RECEIPT_COPY_EVENT_MESSAGE_RESOURCE_ID = "Audit_event_print_receipt_copy_event_message";
                AuditEventRegistrationManager.PURGE_TRANSACTIONS_DATA_EVENT_MESSAGE_RESOURCE_ID = "Audit_event_purge_transactions_data_event_message";
                AuditEventRegistrationManager.USER_LOGON_EVENT_MESSAGE_RESOURCE_ID = "Audit_event_user_logon_event_message";
                AuditEventRegistrationManager.USER_LOGOFF_EVENT_MESSAGE_RESOURCE_ID = "Audit_event_user_logoff_event_message";
                AuditEventRegistrationManager.AUDIT_EVENT_REGISTRATION_ERROR_MESSAGE_RESOURCE_ID = "Audit_event_registration_error_message";
                AuditEventRegistrationManager.RECEIPT_ID_KEY_ID = "RECEIPT_ID_335496B6-3F44-4EBF-B644-1F91B4DEFC8F";
                return AuditEventRegistrationManager;
            }());
            exports_1("AuditEventRegistrationManager", AuditEventRegistrationManager);
        }
    };
});
//# sourceMappingURL=AuditEventRegistrationManager.js.map
// SIG // Begin signature block
// SIG // MIIjpgYJKoZIhvcNAQcCoIIjlzCCI5MCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // AfHOTUtJe49OXQ3Z/xZ3QnpLOQ30bHfkdeteHmua7JOg
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
// SIG // ARUwLwYJKoZIhvcNAQkEMSIEION1nUm9cj+Unt+gTqMq
// SIG // VTuF0kXW9j9oK+bkDBnlgftfMGQGCisGAQQBgjcCAQwx
// SIG // VjBUoDaANABnAGwAbwBiAGEAbABpAHoAZQAuAGMAdQBs
// SIG // AHQAdQByAGUALgBsAHYALQBMAFYALgBqAHOhGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBAMCbq9lFnqNDxr4zNTjqCedMLmZJcIenmCNl
// SIG // dCpoS0WJ6yu7jcZ5PBW9ApKMdcOBSfD0WCh56U9OYFPL
// SIG // BjdoEy/zF5LcQ0w2VWvxdTrqTwVyVMMmt2aqau1KHqPB
// SIG // 60Fs4XuDjONKUocfBS9TK3slULPsbGltNKYxnay4Spmo
// SIG // 7a7sdeKl9MTSdEHOlGdx6c+Lx4IuejV+9AXLee1DW/Vb
// SIG // VBJB56KNfu+Bn1pX1jjSXmDD2y3Z9Kf/33wD7QVuFdIf
// SIG // 0pi7fAhnj1gr+xnR+LB8+PlOH+eTB6MoQB+/KaLxdz8T
// SIG // cV1je3V0uOpheyAc/IsZb7R3KAXhohhGTIdvSm7EGjOh
// SIG // ghLlMIIS4QYKKwYBBAGCNwMDATGCEtEwghLNBgkqhkiG
// SIG // 9w0BBwKgghK+MIISugIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBUQYLKoZIhvcNAQkQAQSgggFABIIBPDCCATgCAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQgbIt3
// SIG // VQvGMNKVBAYNaKpDQ381HwKZiv0zr6U+dQBDzwACBlx1
// SIG // QL2PkBgTMjAxOTAzMTIwOTUxNTcuNDg5WjAEgAIB9KCB
// SIG // 0KSBzTCByjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAldB
// SIG // MRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24xLTArBgNVBAsTJE1pY3Jv
// SIG // c29mdCBJcmVsYW5kIE9wZXJhdGlvbnMgTGltaXRlZDEm
// SIG // MCQGA1UECxMdVGhhbGVzIFRTUyBFU046ODZERi00QkJD
// SIG // LTkzMzUxJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0
// SIG // YW1wIHNlcnZpY2Wggg48MIIE8TCCA9mgAwIBAgITMwAA
// SIG // AN41674JVMTsPQAAAAAA3jANBgkqhkiG9w0BAQsFADB8
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNy
// SIG // b3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDAeFw0xODA4
// SIG // MjMyMDI3MDBaFw0xOTExMjMyMDI3MDBaMIHKMQswCQYD
// SIG // VQQGEwJVUzELMAkGA1UECBMCV0ExEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEtMCsGA1UECxMkTWljcm9zb2Z0IElyZWxhbmQg
// SIG // T3BlcmF0aW9ucyBMaW1pdGVkMSYwJAYDVQQLEx1UaGFs
// SIG // ZXMgVFNTIEVTTjo4NkRGLTRCQkMtOTMzNTElMCMGA1UE
// SIG // AxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgc2VydmljZTCC
// SIG // ASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAN15
// SIG // d2liCJOruuptJ7gkSPtGh8wttJKNdNE32a4HP2SRABHM
// SIG // 1L1jCCNKPQg4Xrl5nrq6GnWaW6Fe9BXLIvqJJLEOMZcY
// SIG // oO8lxmT6+1iQdf3yajj6FVzS0CKF12yyaEqSMPlLYO7T
// SIG // vkuFIGVOXP4kZzmtyujd+7y0AmYqru7nDd0IsnsHwnby
// SIG // f12eaYXkk2x/syfb6ThBCzvgoLbtdBqN+nVJLltqLH1m
// SIG // bITZowG2IkF08AkZ8JTP2gpykFxR4T/4c5udJru0cHgd
// SIG // OtaBdAq2rJXR8BdOr60ObGmEM7UOVov5uoDlBLxzzexE
// SIG // DyL7u2cNFhugdqve5YFjkY+tV8otXgkCAwEAAaOCARsw
// SIG // ggEXMB0GA1UdDgQWBBTHTLCBGH+fIgogH5vz3DEyb+3q
// SIG // rjAfBgNVHSMEGDAWgBTVYzpcijGQ80N7fEYbxTNoWoVt
// SIG // VTBWBgNVHR8ETzBNMEugSaBHhkVodHRwOi8vY3JsLm1p
// SIG // Y3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9NaWNU
// SIG // aW1TdGFQQ0FfMjAxMC0wNy0wMS5jcmwwWgYIKwYBBQUH
// SIG // AQEETjBMMEoGCCsGAQUFBzAChj5odHRwOi8vd3d3Lm1p
// SIG // Y3Jvc29mdC5jb20vcGtpL2NlcnRzL01pY1RpbVN0YVBD
// SIG // QV8yMDEwLTA3LTAxLmNydDAMBgNVHRMBAf8EAjAAMBMG
// SIG // A1UdJQQMMAoGCCsGAQUFBwMIMA0GCSqGSIb3DQEBCwUA
// SIG // A4IBAQAJoMkOg0U+0W4HDrw7LWjoJEFhmOe6lkZtSAWX
// SIG // WY+k4hICwG5MlG0cq45Lln+vUh+FgyKlw2WVEo8L5UbI
// SIG // ZzAMoWFwt8rnHerUGH3AKxwqOdvCI5Yxayc577CpN1A/
// SIG // T33bXPf+dLSR6vsBNCr+87T4QwnSQDCBGayPHqDi2xEb
// SIG // /5gp2QERZbk2No/ul9aowV1iACjmE1Wke/eFyboGZsZ+
// SIG // Fbm1UiWjD0RdTbvlund+KGNNeA0d/5VQnxOcHIFYgf0y
// SIG // TKs8DLy2bR1C8moebVtri8pvBNO/iz/w++ua751//00s
// SIG // UvhYvZ9USxI5tjcDFO9T/f8dho2jN8uNM4ehHzO3MIIG
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
// SIG // AlVTMQswCQYDVQQIEwJXQTEQMA4GA1UEBxMHUmVkbW9u
// SIG // ZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MS0wKwYDVQQLEyRNaWNyb3NvZnQgSXJlbGFuZCBPcGVy
// SIG // YXRpb25zIExpbWl0ZWQxJjAkBgNVBAsTHVRoYWxlcyBU
// SIG // U1MgRVNOOjg2REYtNEJCQy05MzM1MSUwIwYDVQQDExxN
// SIG // aWNyb3NvZnQgVGltZS1TdGFtcCBzZXJ2aWNloiMKAQEw
// SIG // BwYFKw4DAhoDFQBb95YJcfZ00gwbyE9C4jNPFR++zKCB
// SIG // gzCBgKR+MHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpX
// SIG // YXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYD
// SIG // VQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAkBgNV
// SIG // BAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEw
// SIG // MA0GCSqGSIb3DQEBBQUAAgUA4DGLMzAiGA8yMDE5MDMx
// SIG // MjA5MzQ0M1oYDzIwMTkwMzEzMDkzNDQzWjB3MD0GCisG
// SIG // AQQBhFkKBAExLzAtMAoCBQDgMYszAgEAMAoCAQACAhsB
// SIG // AgH/MAcCAQACAhFUMAoCBQDgMtyzAgEAMDYGCisGAQQB
// SIG // hFkKBAIxKDAmMAwGCisGAQQBhFkKAwKgCjAIAgEAAgMH
// SIG // oSChCjAIAgEAAgMBhqAwDQYJKoZIhvcNAQEFBQADgYEA
// SIG // IhFmk+/BqzIrQy800WMkK4CTeGKS1QidNUUnKjJS0Epl
// SIG // d+DrgRFpVYS+7VlG8xFqoM7MKFcQDJOInIphYNjvxhAM
// SIG // tSLgeuCw1JMe8ixok1DaQfKvPhyV9L24DhhZA+yR/9Iw
// SIG // wMWG+fEv97pWcUaaINp5PoVocdz/gKCo2SzonuYxggMN
// SIG // MIIDCQIBATCBkzB8MQswCQYDVQQGEwJVUzETMBEGA1UE
// SIG // CBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEe
// SIG // MBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYw
// SIG // JAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0Eg
// SIG // MjAxMAITMwAAAN41674JVMTsPQAAAAAA3jANBglghkgB
// SIG // ZQMEAgEFAKCCAUowGgYJKoZIhvcNAQkDMQ0GCyqGSIb3
// SIG // DQEJEAEEMC8GCSqGSIb3DQEJBDEiBCBm9PrmozH1cj0G
// SIG // qgY06byXZQIW1XAdpbsE2CQZiviPTzCB+gYLKoZIhvcN
// SIG // AQkQAi8xgeowgecwgeQwgb0EIMLhAk6rJWwcjxUvFUCD
// SIG // uMvq81HbvvY8d/GVE/CMVFVJMIGYMIGApH4wfDELMAkG
// SIG // A1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAO
// SIG // BgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29m
// SIG // dCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0
// SIG // IFRpbWUtU3RhbXAgUENBIDIwMTACEzMAAADeNeu+CVTE
// SIG // 7D0AAAAAAN4wIgQgpBYYXtSn8GIqMJ8jUdomT2DPAkoQ
// SIG // GD01vBbMDNurDUgwDQYJKoZIhvcNAQELBQAEggEARkpB
// SIG // JZ4VMPZ0EEuH0TZbNHL5MrZWJyaxsRadjrfCl+O5xB6L
// SIG // oAlQHUUyI3aD7o+WhUyWW3BOHrFdDDYueoUk7UX0Gg0/
// SIG // cm7+q2ViLmQbFTl6HH3g7NYKgpKOFHs1gHO69lLtA1ov
// SIG // +pzgpUO6w0Vurb0gGzH+cKOpyN8Jv6jtxBIaggLImPZL
// SIG // k0FTg88HLh32h98k30wletthsKvs3oPdFbTmTd7xoSw4
// SIG // hBiAPm3y8UEDqJYCxEwzFMgJxcE4rZuF1gVlWOH541cz
// SIG // r/meM1lTXOUS4FsAUBaV/6IXPsS+DhwtFYgO2QQ1gVgC
// SIG // QsIn5U/I/fuYEFcGhbHcf9NbYD9eEg==
// SIG // End signature block