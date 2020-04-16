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
var Commerce;
(function (Commerce) {
    "use strict";
    function AccessControlData(target, key, index) {
        Microsoft.Dynamics.Diagnostics.TypeScriptCore.UpdatePrivacyDataClassificationMap(Microsoft.Dynamics.Diagnostics.TypeScriptCore.PrivacyDataType.AccessControlData, key, index);
        return;
    }
    Commerce.AccessControlData = AccessControlData;
    function CustomerContent(target, key, index) {
        Microsoft.Dynamics.Diagnostics.TypeScriptCore.UpdatePrivacyDataClassificationMap(Microsoft.Dynamics.Diagnostics.TypeScriptCore.PrivacyDataType.CustomerContent, key, index);
        return;
    }
    Commerce.CustomerContent = CustomerContent;
    function EndUserIdentifiableInformation(target, key, index) {
        Microsoft.Dynamics.Diagnostics.TypeScriptCore.UpdatePrivacyDataClassificationMap(Microsoft.Dynamics.Diagnostics.TypeScriptCore.PrivacyDataType.EndUserIdentifiableInformation, key, index);
        return;
    }
    Commerce.EndUserIdentifiableInformation = EndUserIdentifiableInformation;
    function ObjectMetadata(target, key, index) {
        Microsoft.Dynamics.Diagnostics.TypeScriptCore.UpdatePrivacyDataClassificationMap(Microsoft.Dynamics.Diagnostics.TypeScriptCore.PrivacyDataType.ObjectMetadata, key, index);
        return;
    }
    Commerce.ObjectMetadata = ObjectMetadata;
    function SupportData(target, key, index) {
        Microsoft.Dynamics.Diagnostics.TypeScriptCore.UpdatePrivacyDataClassificationMap(Microsoft.Dynamics.Diagnostics.TypeScriptCore.PrivacyDataType.SupportData, key, index);
        return;
    }
    Commerce.SupportData = SupportData;
    function AccountData(target, key, index) {
        Microsoft.Dynamics.Diagnostics.TypeScriptCore.UpdatePrivacyDataClassificationMap(Microsoft.Dynamics.Diagnostics.TypeScriptCore.PrivacyDataType.AccountData, key, index);
        return;
    }
    Commerce.AccountData = AccountData;
    function PublicPersonalData(target, key, index) {
        Microsoft.Dynamics.Diagnostics.TypeScriptCore.UpdatePrivacyDataClassificationMap(Microsoft.Dynamics.Diagnostics.TypeScriptCore.PrivacyDataType.PublicPersonalData, key, index);
        return;
    }
    Commerce.PublicPersonalData = PublicPersonalData;
    function EndUserPseudonymousIdentifier(target, key, index) {
        Microsoft.Dynamics.Diagnostics.TypeScriptCore.UpdatePrivacyDataClassificationMap(Microsoft.Dynamics.Diagnostics.TypeScriptCore.PrivacyDataType.EndUserPseudonymousIdentifier, key, index);
        return;
    }
    Commerce.EndUserPseudonymousIdentifier = EndUserPseudonymousIdentifier;
    function OrganizationIdentifiableInformation(target, key, index) {
        Microsoft.Dynamics.Diagnostics.TypeScriptCore.UpdatePrivacyDataClassificationMap(Microsoft.Dynamics.Diagnostics.TypeScriptCore.PrivacyDataType.OrganizationIdentifiableInformation, key, index);
        return;
    }
    Commerce.OrganizationIdentifiableInformation = OrganizationIdentifiableInformation;
    function SystemMetadata(target, key, index) {
        Microsoft.Dynamics.Diagnostics.TypeScriptCore.UpdatePrivacyDataClassificationMap(Microsoft.Dynamics.Diagnostics.TypeScriptCore.PrivacyDataType.SystemMetadata, key, index);
        return;
    }
    Commerce.SystemMetadata = SystemMetadata;
    function PublicNonPersonalData(target, key, index) {
        Microsoft.Dynamics.Diagnostics.TypeScriptCore.UpdatePrivacyDataClassificationMap(Microsoft.Dynamics.Diagnostics.TypeScriptCore.PrivacyDataType.PublicNonPersonalData, key, index);
        return;
    }
    Commerce.PublicNonPersonalData = PublicNonPersonalData;
})(Commerce || (Commerce = {}));
var Microsoft;
(function (Microsoft) {
    var Dynamics;
    (function (Dynamics) {
        var Diagnostics;
        (function (Diagnostics) {
            var TypeScriptCore;
            (function (TypeScriptCore) {
                var PrivacyDataClassification = (function () {
                    function PrivacyDataClassification() {
                    }
                    PrivacyDataClassification.eventNameParameterNumberToPrivacyTypeMap = {};
                    return PrivacyDataClassification;
                }());
                TypeScriptCore.PrivacyDataClassification = PrivacyDataClassification;
                function GetPrivacyDataClassification(eventName, parameterIndex) {
                    var dataClassificationKey = eventName.toLowerCase() + "/" + parameterIndex;
                    if (PrivacyDataClassification.eventNameParameterNumberToPrivacyTypeMap[dataClassificationKey] == null) {
                        throw ("Key = " + dataClassificationKey + " does not exist in the privacy data classification map.");
                    }
                    var parameterPrivacyDataType = PrivacyDataClassification.eventNameParameterNumberToPrivacyTypeMap[dataClassificationKey];
                    return parameterPrivacyDataType;
                }
                TypeScriptCore.GetPrivacyDataClassification = GetPrivacyDataClassification;
                function UpdatePrivacyDataClassificationMap(classification, key, index) {
                    PrivacyDataClassification.eventNameParameterNumberToPrivacyTypeMap[key.toLowerCase() + "/" + index] = classification;
                }
                TypeScriptCore.UpdatePrivacyDataClassificationMap = UpdatePrivacyDataClassificationMap;
                var PrivacyDataType;
                (function (PrivacyDataType) {
                    PrivacyDataType[PrivacyDataType["None"] = 0] = "None";
                    PrivacyDataType[PrivacyDataType["AccessControlData"] = 1] = "AccessControlData";
                    PrivacyDataType[PrivacyDataType["CustomerContent"] = 2] = "CustomerContent";
                    PrivacyDataType[PrivacyDataType["EndUserIdentifiableInformation"] = 3] = "EndUserIdentifiableInformation";
                    PrivacyDataType[PrivacyDataType["ObjectMetadata"] = 4] = "ObjectMetadata";
                    PrivacyDataType[PrivacyDataType["SupportData"] = 5] = "SupportData";
                    PrivacyDataType[PrivacyDataType["AccountData"] = 6] = "AccountData";
                    PrivacyDataType[PrivacyDataType["PublicPersonalData"] = 7] = "PublicPersonalData";
                    PrivacyDataType[PrivacyDataType["EndUserPseudonymousIdentifier"] = 8] = "EndUserPseudonymousIdentifier";
                    PrivacyDataType[PrivacyDataType["OrganizationIdentifiableInformation"] = 9] = "OrganizationIdentifiableInformation";
                    PrivacyDataType[PrivacyDataType["SystemMetadata"] = 10] = "SystemMetadata";
                    PrivacyDataType[PrivacyDataType["PublicNonPersonalData"] = 11] = "PublicNonPersonalData";
                })(PrivacyDataType = TypeScriptCore.PrivacyDataType || (TypeScriptCore.PrivacyDataType = {}));
                var PayloadAnnotator = (function () {
                    function PayloadAnnotator(func) {
                        this.payload = {};
                        var names = Utils.getParameterNames(func);
                        var values = func.arguments;
                        for (var i = 0; i < names.length; i++) {
                            var name_1 = names[i];
                            var value = values[i];
                            if (value === null || typeof value === "undefined") {
                                this.payload[name_1] = "undefined";
                            }
                            else {
                                if (PayloadAnnotator.isAllowedType(value)) {
                                    this.payload[name_1] = value;
                                }
                                else {
                                    throw ("Type validation failed for parameter " + name_1);
                                }
                            }
                        }
                    }
                    PayloadAnnotator.isAllowedType = function (variable) {
                        for (var i = 0; i < PayloadAnnotator.allowedTypes.length; i++) {
                            if (typeof variable === PayloadAnnotator.allowedTypes[i]) {
                                return true;
                            }
                        }
                        return false;
                    };
                    PayloadAnnotator.prototype.annotate = function (event) {
                        event.Payload = this.payload;
                    };
                    PayloadAnnotator.allowedTypes = ["string", "number", "boolean"];
                    return PayloadAnnotator;
                }());
                TypeScriptCore.PayloadAnnotator = PayloadAnnotator;
                var EventType;
                (function (EventType) {
                    EventType[EventType["None"] = 0] = "None";
                    EventType[EventType["Custom"] = 1] = "Custom";
                    EventType[EventType["PageView"] = 2] = "PageView";
                })(EventType = TypeScriptCore.EventType || (TypeScriptCore.EventType = {}));
                var EventLevel;
                (function (EventLevel) {
                    EventLevel[EventLevel["LogAlways"] = 0] = "LogAlways";
                    EventLevel[EventLevel["Critical"] = 1] = "Critical";
                    EventLevel[EventLevel["Error"] = 2] = "Error";
                    EventLevel[EventLevel["Warning"] = 3] = "Warning";
                    EventLevel[EventLevel["Informational"] = 4] = "Informational";
                    EventLevel[EventLevel["Verbose"] = 5] = "Verbose";
                })(EventLevel = TypeScriptCore.EventLevel || (TypeScriptCore.EventLevel = {}));
                TypeScriptCore.DEFAULTEVENTLEVEL = EventLevel.Informational;
                var EventKeywords;
                (function (EventKeywords) {
                    EventKeywords[EventKeywords["None"] = 0] = "None";
                    EventKeywords[EventKeywords["Performance"] = 1] = "Performance";
                    EventKeywords[EventKeywords["Diagnostic"] = 2] = "Diagnostic";
                    EventKeywords[EventKeywords["Exception"] = 4] = "Exception";
                    EventKeywords[EventKeywords["Availability"] = 8] = "Availability";
                    EventKeywords[EventKeywords["Usability"] = 16] = "Usability";
                    EventKeywords[EventKeywords["Configuration"] = 32] = "Configuration";
                    EventKeywords[EventKeywords["Context"] = 64] = "Context";
                    EventKeywords[EventKeywords["SqlOperation"] = 256] = "SqlOperation";
                    EventKeywords[EventKeywords["OutboundServiceCall"] = 512] = "OutboundServiceCall";
                    EventKeywords[EventKeywords["InboundServiceCall"] = 1024] = "InboundServiceCall";
                    EventKeywords[EventKeywords["GenericEvent"] = 2048] = "GenericEvent";
                    EventKeywords[EventKeywords["LegacyMonitoringEvent"] = 4096] = "LegacyMonitoringEvent";
                    EventKeywords[EventKeywords["Telemetry"] = 8192] = "Telemetry";
                    EventKeywords[EventKeywords["DataAccess"] = 4294967296] = "DataAccess";
                })(EventKeywords = TypeScriptCore.EventKeywords || (TypeScriptCore.EventKeywords = {}));
                var EventChannel;
                (function (EventChannel) {
                    EventChannel[EventChannel["Admin"] = 16] = "Admin";
                    EventChannel[EventChannel["Operational"] = 17] = "Operational";
                    EventChannel[EventChannel["Analytic"] = 18] = "Analytic";
                    EventChannel[EventChannel["Debug"] = 19] = "Debug";
                })(EventChannel = TypeScriptCore.EventChannel || (TypeScriptCore.EventChannel = {}));
                var PageViewMetadata = (function () {
                    function PageViewMetadata() {
                    }
                    return PageViewMetadata;
                }());
                TypeScriptCore.PageViewMetadata = PageViewMetadata;
                var EventStaticMetadata = (function () {
                    function EventStaticMetadata() {
                    }
                    return EventStaticMetadata;
                }());
                TypeScriptCore.EventStaticMetadata = EventStaticMetadata;
                var EventCoreFields = (function () {
                    function EventCoreFields() {
                    }
                    return EventCoreFields;
                }());
                TypeScriptCore.EventCoreFields = EventCoreFields;
                var AppWindowId;
                (function (AppWindowId) {
                    AppWindowId[AppWindowId["Undefined"] = 0] = "Undefined";
                    AppWindowId[AppWindowId["POS"] = 1] = "POS";
                    AppWindowId[AppWindowId["DualDisplay"] = 2] = "DualDisplay";
                })(AppWindowId = TypeScriptCore.AppWindowId || (TypeScriptCore.AppWindowId = {}));
                var Event = (function () {
                    function Event(type, appSessionId, userSessionId, deviceId, deviceNumber, terminalId, userId, tenantId, appWindowId, offlineAvailability, offlineCurrentMode, screenResolution) {
                        this.CoreFields = new EventCoreFields();
                        this.Type = type;
                        this.CoreFields.ClientTimestamp = Date.now();
                        this.CoreFields.AppSessionId = appSessionId;
                        this.CoreFields.UserSessionId = userSessionId;
                        this.CoreFields.DeviceId = deviceId;
                        this.CoreFields.DeviceNumber = deviceNumber;
                        this.CoreFields.TerminalId = terminalId;
                        this.CoreFields.UserId = userId;
                        this.CoreFields.TenantId = tenantId;
                        this.CoreFields.AppWindowId = appWindowId;
                        this.CoreFields.OfflineAvailability = offlineAvailability;
                        this.CoreFields.OfflineCurrentMode = offlineCurrentMode;
                        this.CoreFields.ScreenResolution = screenResolution;
                        if (this.Type === EventType.Custom) {
                            this.StaticMetadata = new EventStaticMetadata();
                        }
                        else if (this.Type === EventType.PageView) {
                            this.PageViewMetadata = new PageViewMetadata();
                        }
                    }
                    return Event;
                }());
                TypeScriptCore.Event = Event;
                var LoggingSink = (function () {
                    function LoggingSink(configuration) {
                        this._eventFilterConfiguration = configuration || {};
                        this._excludedPrivacyDataTypes = (this._eventFilterConfiguration.ExcludedPrivacyDataTypes || []).map(function (t) { return PrivacyDataType[t]; });
                    }
                    LoggingSink.prototype.getMinEventLevel = function () {
                        var eventLevel = this._eventFilterConfiguration.EventLevel != null && EventLevel[this._eventFilterConfiguration.EventLevel] != null ?
                            EventLevel[this._eventFilterConfiguration.EventLevel] : TypeScriptCore.DEFAULTEVENTLEVEL;
                        return eventLevel;
                    };
                    LoggingSink.prototype.sanitizeEvent = function (event) {
                        var _this = this;
                        if (this._excludedPrivacyDataTypes != null && this._excludedPrivacyDataTypes.length !== 0) {
                            var keys = Object.keys(event.Payload);
                            keys.forEach(function (key, index) {
                                if (_this._excludedPrivacyDataTypes.indexOf(GetPrivacyDataClassification(event.StaticMetadata.Name, index)) !== -1) {
                                    event.Payload[key] = "(SCRUBBED)";
                                }
                            });
                        }
                        return event;
                    };
                    return LoggingSink;
                }());
                TypeScriptCore.LoggingSink = LoggingSink;
                var Utils = (function () {
                    function Utils() {
                    }
                    Utils.getParameterNames = function (func) {
                        var stripComments = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
                        var argNames = /([^\s,]+)/g;
                        var funcStr = func.toString().replace(stripComments, "");
                        var result = funcStr.slice(funcStr.indexOf("(") + 1, funcStr.indexOf(")")).match(argNames);
                        if (result === null) {
                            result = [];
                        }
                        return result;
                    };
                    Utils.generateGuid = function () {
                        function guidPart() {
                            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                        }
                        return guidPart() + guidPart() + "-" + guidPart() + "-" + guidPart() + "-" + guidPart() + "-" + guidPart() + guidPart() + guidPart();
                    };
                    Utils.emptyGuid = function () {
                        return "00000000-0000-0000-0000-000000000000";
                    };
                    return Utils;
                }());
                TypeScriptCore.Utils = Utils;
                var LoggerBase = (function () {
                    function LoggerBase() {
                    }
                    LoggerBase.addAnnotator = function (annotator) {
                        LoggerBase.annotators.push(annotator);
                    };
                    LoggerBase.addLoggingSink = function (loggingSink) {
                        LoggerBase.loggingSinks.push(loggingSink);
                    };
                    LoggerBase.setEmergencySink = function (sink) {
                        LoggerBase.emergencySink = sink;
                    };
                    LoggerBase.setAppSessionId = function (id) {
                        LoggerBase.appSessionId = id;
                        this.refreshSessionInfo();
                    };
                    LoggerBase.setUserSession = function (userSessionId, userId) {
                        LoggerBase.userSessionId = userSessionId;
                        LoggerBase.userId = userId;
                        this.refreshSessionInfo();
                    };
                    LoggerBase.setDeviceOfflineInfo = function (offlineMode, isOffline) {
                        LoggerBase.offlineAvailability = offlineMode;
                        LoggerBase.offlineCurrentMode = isOffline;
                        this.refreshSessionInfo();
                    };
                    LoggerBase.setDeviceInfo = function (deviceId, deviceNumber, terminalId) {
                        LoggerBase.deviceId = deviceId;
                        LoggerBase.deviceNumber = deviceNumber;
                        LoggerBase.terminalId = terminalId;
                        this.refreshSessionInfo();
                    };
                    LoggerBase.setTenantInfo = function (tenantId) {
                        LoggerBase.tenantId = tenantId;
                        this.refreshSessionInfo();
                    };
                    LoggerBase.clearUserSession = function () {
                        LoggerBase.userSessionId = Utils.emptyGuid();
                        LoggerBase.userId = "";
                        this.refreshSessionInfo();
                    };
                    LoggerBase.getAppSessionId = function () {
                        return LoggerBase.appSessionId;
                    };
                    LoggerBase.getUserSessionId = function () {
                        return LoggerBase.userSessionId;
                    };
                    LoggerBase.getScreenResolution = function () {
                        return window.screen.width + "x" + window.screen.height;
                    };
                    LoggerBase.setInstrumentationKey = function (instrumentationKey) {
                        for (var i = 0; i < LoggerBase.loggingSinks.length; i++) {
                            LoggerBase.loggingSinks[i].setInstrumentationKey(instrumentationKey);
                        }
                    };
                    LoggerBase.writeEvent = function (name, eventId, version, channel, level, keywords, task, opCode, message) {
                        var event = new Event(EventType.Custom, LoggerBase.appSessionId, LoggerBase.userSessionId, LoggerBase.deviceId, LoggerBase.deviceNumber, LoggerBase.terminalId, LoggerBase.userId, LoggerBase.tenantId, AppWindowId.POS, LoggerBase.offlineAvailability, LoggerBase.offlineCurrentMode, LoggerBase.getScreenResolution());
                        event.StaticMetadata.Name = name;
                        event.StaticMetadata.Id = eventId;
                        event.StaticMetadata.Version = version;
                        event.StaticMetadata.Level = level;
                        event.StaticMetadata.LevelName = EventLevel[level];
                        event.StaticMetadata.Channel = channel;
                        event.StaticMetadata.ChannelName = EventChannel[channel];
                        event.StaticMetadata.Keywords = keywords;
                        event.StaticMetadata.Task = task;
                        event.StaticMetadata.OpCode = opCode;
                        event.StaticMetadata.Message = message;
                        var payload = new PayloadAnnotator(arguments.callee.caller);
                        payload.annotate(event);
                        this.dispatchEvent(event);
                    };
                    LoggerBase.writeDualDisplayEvent = function (dualDisplayEvent) {
                        var posEvent = new Event(EventType.Custom, LoggerBase.appSessionId, LoggerBase.userSessionId, LoggerBase.deviceId, LoggerBase.deviceNumber, LoggerBase.terminalId, LoggerBase.userId, LoggerBase.tenantId, AppWindowId.DualDisplay, LoggerBase.offlineAvailability, LoggerBase.offlineCurrentMode, LoggerBase.getScreenResolution());
                        if (dualDisplayEvent.CoreFields !== null && dualDisplayEvent.CoreFields !== undefined) {
                            posEvent.CoreFields.ClientTimestamp = dualDisplayEvent.CoreFields.ClientTimestamp;
                        }
                        if (dualDisplayEvent.StaticMetadata !== null && dualDisplayEvent.StaticMetadata !== undefined) {
                            posEvent.StaticMetadata.Name = dualDisplayEvent.StaticMetadata.Name;
                            posEvent.StaticMetadata.Id = dualDisplayEvent.StaticMetadata.Id;
                            posEvent.StaticMetadata.Version = dualDisplayEvent.StaticMetadata.Version;
                            posEvent.StaticMetadata.Level = dualDisplayEvent.StaticMetadata.Level;
                            posEvent.StaticMetadata.LevelName = EventLevel[dualDisplayEvent.StaticMetadata.Level];
                            posEvent.StaticMetadata.Channel = dualDisplayEvent.StaticMetadata.Channel;
                            posEvent.StaticMetadata.ChannelName = EventChannel[dualDisplayEvent.StaticMetadata.Channel];
                            posEvent.StaticMetadata.Keywords = dualDisplayEvent.StaticMetadata.Keywords;
                            posEvent.StaticMetadata.Task = dualDisplayEvent.StaticMetadata.Task;
                            posEvent.StaticMetadata.OpCode = dualDisplayEvent.StaticMetadata.OpCode;
                            posEvent.StaticMetadata.Message = dualDisplayEvent.StaticMetadata.Message;
                        }
                        posEvent.Payload = dualDisplayEvent.Payload;
                        this.dispatchEvent(posEvent);
                    };
                    LoggerBase.writePageViewEvent = function (pageName) {
                        var event = new Event(EventType.PageView, LoggerBase.appSessionId, LoggerBase.userSessionId, LoggerBase.deviceId, LoggerBase.deviceNumber, LoggerBase.terminalId, LoggerBase.userId, LoggerBase.tenantId, AppWindowId.POS, LoggerBase.offlineAvailability, LoggerBase.offlineCurrentMode, LoggerBase.getScreenResolution());
                        event.PageViewMetadata.PageName = pageName;
                        this.dispatchEvent(event);
                    };
                    LoggerBase.refreshSessionInfo = function () {
                        for (var i = 0; i < LoggerBase.loggingSinks.length; i++) {
                            LoggerBase.loggingSinks[i].setSessionInfo(LoggerBase.appSessionId, LoggerBase.userSessionId, LoggerBase.deviceId, LoggerBase.deviceNumber, LoggerBase.terminalId, LoggerBase.userId, LoggerBase.tenantId, LoggerBase.offlineAvailability, LoggerBase.offlineCurrentMode, LoggerBase.getScreenResolution());
                        }
                    };
                    LoggerBase.dispatchEvent = function (event) {
                        try {
                            for (var i = 0; i < LoggerBase.annotators.length; i++) {
                                LoggerBase.annotators[i].annotate(event);
                            }
                            for (var i = 0; i < LoggerBase.loggingSinks.length; i++) {
                                LoggerBase.loggingSinks[i].writeEvent(event);
                            }
                        }
                        catch (error) {
                            try {
                                if (typeof LoggerBase.emergencySink !== "undefined") {
                                    LoggerBase.emergencySink.handleError(error);
                                }
                            }
                            catch (error) {
                            }
                        }
                    };
                    LoggerBase.appSessionId = Utils.emptyGuid();
                    LoggerBase.userSessionId = Utils.emptyGuid();
                    LoggerBase.deviceId = "";
                    LoggerBase.deviceNumber = "";
                    LoggerBase.terminalId = "";
                    LoggerBase.userId = "";
                    LoggerBase.tenantId = "";
                    LoggerBase.annotators = [];
                    LoggerBase.loggingSinks = [];
                    return LoggerBase;
                }());
                TypeScriptCore.LoggerBase = LoggerBase;
            })(TypeScriptCore = Diagnostics.TypeScriptCore || (Diagnostics.TypeScriptCore = {}));
        })(Diagnostics = Dynamics.Diagnostics || (Dynamics.Diagnostics = {}));
    })(Dynamics = Microsoft.Dynamics || (Microsoft.Dynamics = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var Dynamics;
    (function (Dynamics) {
        var Diagnostics;
        (function (Diagnostics) {
            var TypeScriptCore;
            (function (TypeScriptCore) {
                "use strict";
                var AppInsightsSink = (function (_super) {
                    __extends(AppInsightsSink, _super);
                    function AppInsightsSink(appInsightsInstrumentationKey, applicationName, configuration) {
                        var _this = _super.call(this, configuration) || this;
                        _this.appSessionId = TypeScriptCore.Utils.emptyGuid();
                        _this.userSessionId = TypeScriptCore.Utils.emptyGuid();
                        _this.tenantId = TypeScriptCore.Utils.emptyGuid();
                        _this.application = applicationName;
                        _this.applicationVersion = AppInsightsSink.appBaseVersion;
                        var defaultAppInsightsConfig = Microsoft.ApplicationInsights.Initialization.getDefaultConfig();
                        defaultAppInsightsConfig.instrumentationKey = appInsightsInstrumentationKey;
                        _this.appInsightsProxy = new Microsoft.ApplicationInsights.AppInsights(defaultAppInsightsConfig);
                        _this.appInsightsProxy.context.application.ver = _this.applicationVersion;
                        return _this;
                    }
                    AppInsightsSink.prototype.setSessionInfo = function (appSessionId, userSessionId, deviceId, deviceNumber, terminalId, userId, tenantId, offlineAvailability, offlineCurrentMode) {
                        this.appSessionId = appSessionId;
                        this.userSessionId = userSessionId;
                        this.deviceId = deviceId;
                        this.deviceNumber = deviceNumber;
                        this.terminalId = terminalId;
                        this.userId = userId;
                        this.tenantId = tenantId;
                        this.offlineAvailability = offlineAvailability;
                        this.offlineCurrentMode = offlineCurrentMode;
                        this.appInsightsProxy.context.user.id = userId;
                    };
                    AppInsightsSink.prototype.setInstrumentationKey = function (instrumentationKey) {
                        this.appInsightsProxy.config.instrumentationKey = instrumentationKey;
                    };
                    AppInsightsSink.prototype.writeEvent = function (event) {
                        var eventLevel = this.getMinEventLevel();
                        var payload;
                        if (event.Payload) {
                            event = this.sanitizeEvent(event);
                            payload = event.Payload;
                        }
                        else {
                            payload = {};
                        }
                        this.overrideObjectField(payload, "Application", this.application);
                        this.overrideObjectField(payload, "AppSessionId", this.appSessionId);
                        this.overrideObjectField(payload, "DeviceId", this.deviceId);
                        this.overrideObjectField(payload, "DeviceNumber", this.deviceNumber);
                        this.overrideObjectField(payload, "TerminalId", this.terminalId);
                        this.overrideObjectField(payload, "UserId", this.userId);
                        this.overrideObjectField(payload, "UserSessionId", this.userSessionId);
                        this.overrideObjectField(payload, "TenantId", this.tenantId);
                        this.overrideObjectField(payload, "OfflineAvailability", this.offlineAvailability);
                        this.overrideObjectField(payload, "OfflineCurrentMode", this.offlineCurrentMode);
                        this.overrideObjectField(payload, "AppWindowId", event.CoreFields.AppWindowId);
                        if (event.Type === TypeScriptCore.EventType.PageView) {
                            this.appInsightsProxy.trackPageView(event.PageViewMetadata.PageName, "", payload, null);
                        }
                        if (event.Type === TypeScriptCore.EventType.Custom && event.StaticMetadata.Level <= eventLevel) {
                            this.overrideObjectField(payload, "EventId", event.StaticMetadata.Id);
                            this.overrideObjectField(payload, "EventVersion", event.StaticMetadata.Version);
                            this.overrideObjectField(payload, "EventSeverity", event.StaticMetadata.LevelName);
                            this.appInsightsProxy.trackEvent(event.StaticMetadata.Name, payload, null);
                        }
                    };
                    AppInsightsSink.prototype.overrideObjectField = function (object, field, value) {
                        var fieldsToRemove;
                        fieldsToRemove = Object.keys(object).filter(function (fieldName, fieldIndex, keysArray) {
                            return fieldName.toLowerCase() === field.toLowerCase();
                        });
                        if (fieldsToRemove === null) {
                            return;
                        }
                        for (var i = 0; i < fieldsToRemove.length; i++) {
                            delete object[fieldsToRemove[i]];
                        }
                        object[field] = value;
                    };
                    AppInsightsSink.appBaseVersion = "9.10.19060.6";
                    return AppInsightsSink;
                }(TypeScriptCore.LoggingSink));
                TypeScriptCore.AppInsightsSink = AppInsightsSink;
            })(TypeScriptCore = Diagnostics.TypeScriptCore || (Diagnostics.TypeScriptCore = {}));
        })(Diagnostics = Dynamics.Diagnostics || (Dynamics.Diagnostics = {}));
    })(Dynamics = Microsoft.Dynamics || (Microsoft.Dynamics = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var Dynamics;
    (function (Dynamics) {
        var Diagnostics;
        (function (Diagnostics) {
            var TypeScriptCore;
            (function (TypeScriptCore) {
                "use strict";
                var DebuggingConsoleSink = (function (_super) {
                    __extends(DebuggingConsoleSink, _super);
                    function DebuggingConsoleSink(configuration) {
                        return _super.call(this, configuration) || this;
                    }
                    DebuggingConsoleSink.prototype.setSessionInfo = function (appSessionId, userSessionId, deviceId, deviceNumber, terminalId, userId, tenantId, offlineAvailability, offlineCurrentMode) {
                    };
                    DebuggingConsoleSink.prototype.setInstrumentationKey = function (instrumentationKey) {
                    };
                    DebuggingConsoleSink.prototype.writeEvent = function (event) {
                        var eventLevel = this.getMinEventLevel();
                        event = this.sanitizeEvent(event);
                        var args = [];
                        Object.keys(event.Payload).forEach(function (name) { args.push(event.Payload[name]); });
                        if (event.Type === Microsoft.Dynamics.Diagnostics.TypeScriptCore.EventType.PageView) {
                            console.info("Page Loaded: " + event.PageViewMetadata.PageName);
                        }
                        if (event.Type === Microsoft.Dynamics.Diagnostics.TypeScriptCore.EventType.Custom && event.StaticMetadata.Level <= eventLevel) {
                            var message_1 = event.StaticMetadata.Message.toString();
                            args.forEach(function (arg, index) {
                                var param = arg.toString().replace(/\$/gi, "$$$$");
                                var regexp = new RegExp("\\{" + index + "\\}", "gi");
                                message_1 = message_1.replace(regexp, param);
                            });
                            var level = event.StaticMetadata.Level;
                            switch (level) {
                                case Microsoft.Dynamics.Diagnostics.TypeScriptCore.EventLevel.Critical:
                                case Microsoft.Dynamics.Diagnostics.TypeScriptCore.EventLevel.Error:
                                    console.error(message_1);
                                    break;
                                case Microsoft.Dynamics.Diagnostics.TypeScriptCore.EventLevel.Warning:
                                    console.warn(message_1);
                                    break;
                                case Microsoft.Dynamics.Diagnostics.TypeScriptCore.EventLevel.LogAlways:
                                case Microsoft.Dynamics.Diagnostics.TypeScriptCore.EventLevel.Informational:
                                case Microsoft.Dynamics.Diagnostics.TypeScriptCore.EventLevel.Verbose:
                                    console.info(message_1);
                                    break;
                            }
                        }
                    };
                    return DebuggingConsoleSink;
                }(TypeScriptCore.LoggingSink));
                TypeScriptCore.DebuggingConsoleSink = DebuggingConsoleSink;
            })(TypeScriptCore = Diagnostics.TypeScriptCore || (Diagnostics.TypeScriptCore = {}));
        })(Diagnostics = Dynamics.Diagnostics || (Dynamics.Diagnostics = {}));
    })(Dynamics = Microsoft.Dynamics || (Microsoft.Dynamics = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var Dynamics;
    (function (Dynamics) {
        var Diagnostics;
        (function (Diagnostics) {
            var TypeScriptCore;
            (function (TypeScriptCore) {
                "use strict";
                var WindowsLoggingRequest = (function (_super) {
                    __extends(WindowsLoggingRequest, _super);
                    function WindowsLoggingRequest(configuration) {
                        return _super.call(this, configuration) || this;
                    }
                    WindowsLoggingRequest.prototype.writeEvent = function (event) {
                        var eventLevel = this.getMinEventLevel();
                        if (event.StaticMetadata.Level <= eventLevel) {
                            event = this.sanitizeEvent(event);
                            var request_1 = JSON.stringify(event);
                            window.setImmediate(function () {
                                try {
                                    Microsoft.Dynamics.Commerce.ClientBroker.Logger.logAsync(request_1)
                                        .done(function (response) { return void 0; }, function (error) {
                                        console.error("Logging request to native logging broker failed due to error sending the request to the broker.  Error: "
                                            + error);
                                    });
                                }
                                catch (exception) {
                                    console.error("Logging request to native logging broker failed due to a fatal error. Error: " + exception.message);
                                }
                            });
                        }
                    };
                    WindowsLoggingRequest.prototype.setSessionInfo = function (appSessionId, userSessionId, deviceId, deviceNumber, terminalId, userId, tenantId, offlineAvailability, offlineCurrentMode, screenResolution) {
                        window.setImmediate(function () {
                            Microsoft.Dynamics.Commerce.ClientBroker.Logger.setSessionInfoAsync(appSessionId, userSessionId, deviceId, deviceNumber, terminalId, userId, tenantId, offlineAvailability, offlineCurrentMode, screenResolution)
                                .done(function (response) { return void 0; }, function (error) {
                                console.error("Setting the session info through the native logging broker failed due to error sending the request to the broker."
                                    + " Error: " + error);
                            });
                        });
                    };
                    WindowsLoggingRequest.prototype.setInstrumentationKey = function (instrumentationKey) {
                        window.setImmediate(function () {
                            Microsoft.Dynamics.Commerce.ClientBroker.Logger.setInstrumentationKeyAsync(instrumentationKey)
                                .done(function (response) {
                                console.info("Called the API to set the instrumentation key on the client broker. Response: " + response);
                            }, function (error) {
                                console.error("Setting the instrumentation key through the native logging broker failed due to error sending the request to the "
                                    + "broker. Error: " + error);
                            });
                        });
                    };
                    return WindowsLoggingRequest;
                }(TypeScriptCore.LoggingSink));
                TypeScriptCore.WindowsLoggingRequest = WindowsLoggingRequest;
            })(TypeScriptCore = Diagnostics.TypeScriptCore || (Diagnostics.TypeScriptCore = {}));
        })(Diagnostics = Dynamics.Diagnostics || (Dynamics.Diagnostics = {}));
    })(Dynamics = Microsoft.Dynamics || (Microsoft.Dynamics = {}));
})(Microsoft || (Microsoft = {}));
//# sourceMappingURL=D:/a/1/s/src/Components/Platform/Libraries/Diagnostics/TypeScriptCore/Diagnostics.TypeScriptCore.js.map
// SIG // Begin signature block
// SIG // MIIjpgYJKoZIhvcNAQcCoIIjlzCCI5MCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // E6hL57xet7fzWaC2QFDcqi6mdjATnp9t3O3Aa9qltaqg
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
// SIG // ARUwLwYJKoZIhvcNAQkEMSIEIPN2nYi/MgfAsZotuzg4
// SIG // aF0Ek/+/d+stvBV8yDSf6ciPMGQGCisGAQQBgjcCAQwx
// SIG // VjBUoDaANABnAGwAbwBiAGEAbABpAHoAZQAuAGMAdQBs
// SIG // AHQAdQByAGUALgBsAHYALQBMAFYALgBqAHOhGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBAGR2uoAq+MM7MWVsIMpIzT/+/j1dnVLLyTU5
// SIG // slnmR6W09+nJl46HvHf15RKgNVnQ6V7TwIG073M5yeE1
// SIG // WY1QksqszvZlRDjfQ/2V7YG5dOnQJ100D1rUmXXgpZQV
// SIG // 0SrzQdC1CyTFX4xyPCL/HKqlLjIMmLYE67lSkq+Rnum5
// SIG // Or720BbwGuM7U0GlFgmyBL1qGe7MCcJREiX7febfJhpF
// SIG // mzJuAINBKpB0vtBogLpFJ2qyOTm22FSgQZU6EhgworeE
// SIG // x2jSZTn+kVuixrvGb4E5KfkLm/kqC60UCHmG2l4lifYn
// SIG // zt8DG2T13Hy2VlsIkADmeFi4feu6e92eI2sJ4fJqJ7Oh
// SIG // ghLlMIIS4QYKKwYBBAGCNwMDATGCEtEwghLNBgkqhkiG
// SIG // 9w0BBwKgghK+MIISugIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBUQYLKoZIhvcNAQkQAQSgggFABIIBPDCCATgCAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQguDgL
// SIG // cv58bskqsNGqjmcMA27FC1U35vWkPWeUOUEZ8PACBlx1
// SIG // QL2VaxgTMjAxOTAzMTIwOTUzMTMuMjU0WjAEgAIB9KCB
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
// SIG // DQEJEAEEMC8GCSqGSIb3DQEJBDEiBCA0+6T5fLgfC4cB
// SIG // UO4++HGJ3LZYpXJ8bCwvIbIA2hFsyDCB+gYLKoZIhvcN
// SIG // AQkQAi8xgeowgecwgeQwgb0EIMLhAk6rJWwcjxUvFUCD
// SIG // uMvq81HbvvY8d/GVE/CMVFVJMIGYMIGApH4wfDELMAkG
// SIG // A1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAO
// SIG // BgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29m
// SIG // dCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0
// SIG // IFRpbWUtU3RhbXAgUENBIDIwMTACEzMAAADeNeu+CVTE
// SIG // 7D0AAAAAAN4wIgQgpBYYXtSn8GIqMJ8jUdomT2DPAkoQ
// SIG // GD01vBbMDNurDUgwDQYJKoZIhvcNAQELBQAEggEAkIpt
// SIG // w9eSazbevNS0KMHKqe6XRhojDXAFX+K0cIMqXczXesrO
// SIG // 2cyAhb+X1U0MVqg2Km5/nwmr6VxQzTB0sqdpn1AdTCTj
// SIG // DkQnBllxLgNog3uLe33nolRZo3/Hs53udzc+hvL/KZh/
// SIG // 8ZxiR2tDrWVa9/UaD+mDtbpSRnCzrtasCNndYLDE9dz1
// SIG // gtaJQqBz/iztSTyuLN/4kY+EwzhgohESmOGU2OIJ4Ujs
// SIG // dZiDE6xkPsPlK8UTy/FvxLkM7pElZUiZwozr7a/OCpH9
// SIG // 95eZN2Zj8jshN8AJXEvOD3DY6F+iuGkWniseBq/JaMMX
// SIG // rZ06p0AEoEhndqPMFV5BwAZDB+svaA==
// SIG // End signature block
