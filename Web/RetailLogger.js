var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var TsLogging = Microsoft.Dynamics.Diagnostics.TypeScriptCore;
var EventKeywords = Microsoft.Dynamics.Diagnostics.TypeScriptCore.EventKeywords;
var Commerce;
(function (Commerce) {
    function attachLoggingSink(sink) {
        Microsoft.Dynamics.Diagnostics.TypeScriptCore.LoggerBase.addLoggingSink(sink);
    }
    Commerce.attachLoggingSink = attachLoggingSink;
    var RetailLogger = (function () {
        function RetailLogger() {
        }
        RetailLogger.writePageViewEvent = function (pageName) {
            TsLogging.LoggerBase.writePageViewEvent(pageName);
        };
        RetailLogger.appLaunch = function (correlationId, appSessionId, isDemoMode, deviceId, deviceNumber, applicationType) {
            TsLogging.LoggerBase.writeEvent("AppLaunch", 40010, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.LogAlways, [], "", "", "The application has been launched. Correlation Id: '{0}'");
        };
        RetailLogger.appUnhandledError = function (errorMessage, stackTrace, errorUrl, errorJson) {
            TsLogging.LoggerBase.writeEvent("AppUnhandledError", 40011, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Unhandled App error: {0}; \n StackTrace: {1}; ErrorUrl: '{2}'; ErrorObject: '{3}'");
        };
        RetailLogger.logon = function (userSessionId) {
            TsLogging.LoggerBase.writeEvent("Logon", 40012, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.LogAlways, [], "", "", "User logged in.");
        };
        RetailLogger.logoff = function (userSessionId) {
            TsLogging.LoggerBase.writeEvent("Logoff", 40013, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.LogAlways, [], "", "", "User logged out.");
        };
        RetailLogger.appUnhandledPosSdkException = function (exceptionType, originatingComponent, errorMessage, pageUrl) {
            TsLogging.LoggerBase.writeEvent("appUnhandledPosSdkException", 40014, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Critical, [], "", "", "Unhandled POS SDK Exception of type {0} was thrown. Originating SDK Component: {1} Exception Message: {2}; Page Url: '{3}';");
        };
        RetailLogger.deviceActivating = function (deviceNumber, deviceId, terminalId, forceActivate, massActivate, correlationId) {
            TsLogging.LoggerBase.writeEvent("deviceActivating", 40015, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Begin Device Activation. Device Number={0}; Device Id={1}; Terminal ID={2}; Force Activate={3}; Mass Activate={4}; Correlation Id={5}");
        };
        RetailLogger.deviceActivated = function (activationStatus, deviceNumber, deviceId, terminalId, forceActivate, correlationId) {
            TsLogging.LoggerBase.writeEvent("deviceActivated", 40016, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "End Device Activation. Activation Status={0}; Device Number={1}; Device Id={2}; Terminal ID={3}; Force Activate={4}; Correlation Id={5}");
        };
        RetailLogger.deviceActivationFailed = function (errors, deviceNumber, deviceId, terminalId, forceActivate, correlationId) {
            TsLogging.LoggerBase.writeEvent("deviceActivationFailed", 40017, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Device Activation failed. Errors={0}; Device Number={1}; Device Id={2}; Terminal ID={3}; Force Activate={4}; Correlation Id={5}");
        };
        RetailLogger.deviceDeactivating = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("deviceDeactivating", 40018, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Begin Device Deactivation. Correlation Id={0}");
        };
        RetailLogger.deviceDeactivated = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("deviceDeactivated", 40019, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "End Device Deactivation. Correlation Id={0}");
        };
        RetailLogger.messageDisplayed = function (messageType, messageTitle, message, additionalInfo, correlationId) {
            TsLogging.LoggerBase.writeEvent("messageDisplayed", 40020, 1, TsLogging.EventChannel.Admin, TsLogging.EventLevel.Informational, [], "", "", "Message displayed to the user: Message type: '{0}'; Title: '{1}'; Message: '{2}'; Additional info: '{3}'; Correlation Id: '{4}'");
        };
        RetailLogger.individualMessageDisplayed = function (messageType, resourceIDsAndCulture, messageTitle, message, additionalInfo, correlationId) {
            TsLogging.LoggerBase.writeEvent("individualMessageDisplayed", 40021, 1, TsLogging.EventChannel.Admin, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Individual message displayed to the user: Message type: '{0}'; Resource IDs: '{1}'; Title: '{2}'; Message: '{3}'; Additional info: '{4}'; Correlation Id: '{5}'");
        };
        RetailLogger.applicationContextSetupLanguagesInvalidLanguage = function (languageId) {
            TsLogging.LoggerBase.writeEvent("ApplicationContextSetupLanguagesInvalidLanguage", 40050, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "ApplicationContext SetupLanguages Invalid language ID = '{0}'.");
        };
        RetailLogger.applicationStylesheetsLoadFailed = function (uri, errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("ApplicationStylesheetsLoadFailed", 40051, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Application stylesheet has failed to load: uri = '{0}', error message '{2}'.");
        };
        RetailLogger.applicationLocalStorageNotAvailable = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("ApplicationLocalStorageNotAvailable", 40052, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Application Local storage is not available: error message '{0}'.");
        };
        RetailLogger.applicationContextInvalidCatalogImageFormat = function () {
            TsLogging.LoggerBase.writeEvent("ApplicationContextInvalidCatalogImageFormat", 40053, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ApplicationContext Invalid Catalog image format.");
        };
        RetailLogger.applicationContextApplicationContextEntitySetInvalid = function (entitySetId) {
            TsLogging.LoggerBase.writeEvent("ApplicationContextApplicationContextEntitySetInvalid", 40054, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "A method with ApplicationContextEntitySet ID '{0}' was reported.");
        };
        RetailLogger.applicationContextApplicationContextEntitySetMultipleTimes = function (entitySetId) {
            TsLogging.LoggerBase.writeEvent("ApplicationContextApplicationContextEntitySetMultipleTimes", 40055, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "A method with ApplicationContextEntitySet ID '{0}' was reported multiple times.");
        };
        RetailLogger.applicationContextApplicationContextEntitySetNoMethodNumber = function () {
            TsLogging.LoggerBase.writeEvent("ApplicationContextApplicationContextEntitySetNoMethodNumber", 40056, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "The value ApplicationContextEntitySet.All does not represent the number of methods that can be run");
        };
        RetailLogger.applicationFailedToParseError = function (error) {
            TsLogging.LoggerBase.writeEvent("ApplicationFailedToParseError", 40057, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed parse error message, error = '{0}'.");
        };
        RetailLogger.applicationFailedToParseErrorInvalidJson = function (error) {
            TsLogging.LoggerBase.writeEvent("ApplicationFailedToParseErrorInvalidJson", 40058, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Invalid JSON format from server, it was not possible to parse error message, error = '{0}'.");
        };
        RetailLogger.applicationGlobalizationResourcesEmpty = function () {
            TsLogging.LoggerBase.writeEvent("ApplicationGlobalizationResourcesEmpty", 40059, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Application Globalization Resources are empty.");
        };
        RetailLogger.applicationGlobalizationResourcesLoadFailed = function (languageTag, errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("ApplicationGlobalizationResourcesLoadFailed", 40060, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Application WebGlobalization Can not load resources for the '{0}' culture: error message = '{2}'.");
        };
        RetailLogger.applicationContextLoadCategoriesFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("ApplicationContextLoadCategoriesFailed", 40061, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Application Load categories failed: error message = '{1}'.");
        };
        RetailLogger.applicationLoadChannelConfigurationFailed = function (correlationId, component, errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("ApplicationLoadChannelConfigurationFailed", 40062, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Application Load channel configuration failed: component = '{1}', error message = '{3}'. Correlation Id: '{0}'");
        };
        RetailLogger.applicationContextSetupDebitCashbackLimitFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("ApplicationContextSetupDebitCashbackLimitFailed", 40063, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ApplicationContext Error when getting debit cashback limit: error message = '{1}'.");
        };
        RetailLogger.applicationContextSetupCardTypesFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("ApplicationContextSetupCardTypesFailed", 40064, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ApplicationContext Error when getting list of card types: error message = '{1}'.");
        };
        RetailLogger.applicationContextSetupReturnOrderReasonCodesFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("ApplicationContextSetupReturnOrderReasonCodesFailed", 40065, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ApplicationContext Error when getting list of return order reason codes: error message = '{1}'.");
        };
        RetailLogger.applicationContextSetupCustomerTypesFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("ApplicationContextSetupCustomerTypesFailed", 40066, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ApplicationContext Error when getting list of customer types: error message = '{1}'.");
        };
        RetailLogger.applicationContextSetupCustomerGroupsFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("ApplicationContextSetupCustomerGroupsFailed", 40067, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ApplicationContext Error when getting list of customer groups: error message = '{1}'.");
        };
        RetailLogger.applicationContextSetupHardwareStationProfileFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("ApplicationContextSetupHardwareStationProfileFailed", 40068, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ApplicationContext Error when getting list of hardware station profiles: error message = '{1}'.");
        };
        RetailLogger.applicationContextSetupLanguagesFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("ApplicationContextSetupLanguagesFailed", 40069, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ApplicationContext Error when getting list of available languages: error message = '{1}'.");
        };
        RetailLogger.applicationContextSetupCashDeclarationsFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("ApplicationContextSetupCashDeclarationsFailed", 40071, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ApplicationContext Error when getting list of cash declarations: error message = '{1}'.");
        };
        RetailLogger.applicationGlobalizationResourcesLoading = function (languageTag) {
            TsLogging.LoggerBase.writeEvent("applicationGlobalizationResourcesLoading", 40072, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Application WebGlobalization loadResourcesAsync Loading string resources for the language tag '{0}'.");
        };
        RetailLogger.applicationGlobalizationResourcesLanguageResolved = function (languageTag) {
            TsLogging.LoggerBase.writeEvent("applicationGlobalizationResourcesLanguageResolved", 40073, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Application WebGlobalization loadResourcesAsync Requested language tag has been resolved to '{0}'.");
        };
        RetailLogger.applicationLoadEnvironmentConfigurationStorageLoadSucceeded = function (config) {
            TsLogging.LoggerBase.writeEvent("applicationLoadEnvironmentConfigurationStorageLoadSucceeded", 40074, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The environment configuration was successfully loaded from the local storage and set on the app. Config: '{0}'.");
        };
        RetailLogger.applicationLoadEnvironmentConfigurationServerLoadSucceeded = function (config) {
            TsLogging.LoggerBase.writeEvent("applicationLoadEnvironmentConfigurationServerLoadSucceeded", 40075, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The environment configuration was successfully loaded from the server and set on the app. Config: '{0}'.");
        };
        RetailLogger.applicationLoadEnvironmentConfigurationServerLoadFailed = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("applicationLoadEnvironmentConfigurationServerLoadFailed", 40076, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "There was an error loading the environment configuration from the server. Error: '{0}'.");
        };
        RetailLogger.applicationUpdateIsRequired = function () {
            TsLogging.LoggerBase.writeEvent("applicationUpdateIsRequired", 40077, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Application update is required.");
        };
        RetailLogger.accessWrongDeviceTerminal = function () {
            TsLogging.LoggerBase.writeEvent("accessWrongDeviceTerminal", 40078, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Access to the wrong device/terminal while the different one is being currently activated.");
        };
        RetailLogger.applicationFailedToLoadConfiguration = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("applicationFailedToLoadConfiguration", 40079, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Application configuration failed to load. Error: '{0}'.");
        };
        RetailLogger.applicationContextSetupCommissionSalesGroupsFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("applicationContextSetupCommissionSalesGroupsFailed", 40080, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ApplicationContext Error when getting list of commission sales groups: error code = '{0}', error message = '{1}'.");
        };
        RetailLogger.applicationContextSetupCustomerAttributeDefinitionsFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("ApplicationContextSetupCustomerAttributeDefinitionsFailed", 40081, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ApplicationContext Error when getting list of customer attribute definitions: error message = '{1}'.");
        };
        RetailLogger.applicationLoadChannelConfigurationWarning = function (component, errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("ApplicationLoadChannelConfigurationWarning", 40082, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Application Load channel configuration failed to load a non-blocking component: component = '{0}', error message = '{2}'.");
        };
        RetailLogger.applicationContextSetupCardTypesSucceeded = function (cardTypesData) {
            TsLogging.LoggerBase.writeEvent("ApplicationContextSetupCardTypesSucceeded", 40083, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Completed loading available Card Types. Only first 6 characters are printed for NumberFrom/NumberTo fields: '{0}'.");
        };
        RetailLogger.applicationLoadChannelConfigurationSucceeded = function (component, data) {
            TsLogging.LoggerBase.writeEvent("ApplicationLoadChannelConfigurationSucceeded", 40084, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Application Load channel configuration succeeded: component='{0}', Data='{1}'.");
        };
        RetailLogger.applicationType = function (correlationId, applicationTypeId, applicationTypeName) {
            TsLogging.LoggerBase.writeEvent("applicationType", 40085, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Application type. Correlation Id={0}; Application type Id={1}; Application type name={2}");
        };
        RetailLogger.applicationContextSetupSalesOrderLinesAttributeGroupDetailsFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("ApplicationContextSetupSalesOrderLinesAttributeGroupDetailsFailed", 40086, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ApplicationContext Error when getting sales order lines attribute group details: error message = '{1}'.");
        };
        RetailLogger.applicationContextSetupSalesOrderHeaderAttributeGroupDetailsFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("ApplicationContextSetupSalesOrderHeaderAttributeGroupDetailsFailed", 40087, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ApplicationContext Error when getting sales order header attribute group details: error message = '{1}'.");
        };
        RetailLogger.applicationTelemetryContextUpdateCompleted = function (result) {
            TsLogging.LoggerBase.writeEvent("applicationTelemetryContextUpdateCompleted", 40088, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Application Telemetry Context Update Completed. Result: {0}");
        };
        RetailLogger.wwaConfigurationProviderFailedToGetConfigurationValue = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("wwaConfigurationProviderFailedToGetConfigurationValue", 40089, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Could not access configuration information due to error: {0}");
        };
        RetailLogger.modelManagersRetailServerRequestStarted = function (requestId, requestUrl) {
            TsLogging.LoggerBase.writeEvent("ModelManagersRetailServerRequestStarted", 40100, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "The Retail Server Request with request id '{0}' and request url '{1}' started.");
        };
        RetailLogger.modelManagersRetailServerRequestError = function (requestId, requestUrl, error, responseStatusCode) {
            TsLogging.LoggerBase.writeEvent("ModelManagersRetailServerRequestError", 40101, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [EventKeywords[EventKeywords.Telemetry]], "", "", "The Retail Server Request with request id '{0}' and request url '{1}' failed.  Error: {2}. Status code {3}");
        };
        RetailLogger.modelManagersRetailServerRequestFinished = function (requestId, requestUrl, responseStatusCode) {
            TsLogging.LoggerBase.writeEvent("ModelManagersRetailServerRequestFinished", 40102, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "The Retail Server Request with request id '{0}' and request url '{1}' succeeded. Status code {2}");
        };
        RetailLogger.modelManagersCommerceRuntimeRequestStarted = function (requestId, requestUrl) {
            TsLogging.LoggerBase.writeEvent("ModelManagersCommerceRuntimeRequestStarted", 40103, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "The Commerce Runtime Request with request id '{0}' and request url '{1}' started.");
        };
        RetailLogger.modelManagersCommerceRuntimeRequestError = function (requestId, requestUrl, error) {
            TsLogging.LoggerBase.writeEvent("ModelManagersCommerceRuntimeRequestError", 40104, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "The Commerce Runtime Request with request id '{0}' and request url '{1}' failed.  Error: {2}.");
        };
        RetailLogger.modelManagersCommerceRuntimeRequestFinished = function (requestId, requestUrl) {
            TsLogging.LoggerBase.writeEvent("ModelManagersCommerceRuntimeRequestFinished", 40105, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "The Commerce Runtime Request with request id '{0}' and request url '{1}' succeeded.");
        };
        RetailLogger.modelManagersCheckDownloadCompleteRequestError = function (statusText) {
            TsLogging.LoggerBase.writeEvent("ModelManagersCheckDownloadCompleteRequestError", 40106, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "The request to check if offline data is downloaded to offline database failed with error: {0}.");
        };
        RetailLogger.modelManagersLocatorServiceRequestStarted = function (request, locatorServiceActivityId) {
            TsLogging.LoggerBase.writeEvent("modelManagersLocatorServiceRequestStarted", 40107, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The request to discover retail server url has started. Request: {0}, Locator service activity id: {1}.");
        };
        RetailLogger.modelManagersLocatorServiceRequestException = function (errorMessage, locatorServiceActivityId) {
            TsLogging.LoggerBase.writeEvent("modelManagersLocatorServiceRequestException", 40108, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "The request to discover retail server url has failed. Error: {0}. Locator service activity id: {1}.");
        };
        RetailLogger.modelManagersLocatorServiceRequestFinished = function (locatorServiceActivityId) {
            TsLogging.LoggerBase.writeEvent("modelManagersLocatorServiceRequestFinished", 40109, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The request to discover retail server url has finished. Locator service activity id: {0}.");
        };
        RetailLogger.modelManagersServerResponseStatusCode = function (statusCode) {
            TsLogging.LoggerBase.writeEvent("modelManagersServerResponseStatusCode", 40110, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Server response status code is '{0}'.");
        };
        RetailLogger.modelManagersChainedRequestFactorySwitchingToOnline = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactorySwitchingToOnline", 40111, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "ChannelRequestFactory Switching connection state to online; Correlation Id: '{0}'.");
        };
        RetailLogger.modelManagersChainedRequestFactorySwitchingToOffline = function () {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactorySwitchingToOffline", 40112, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "ChannelRequestFactory Switching connection state to offline succeeded.");
        };
        RetailLogger.modelManagersChainedRequestFactoryShiftTransferFailed = function (currentState, errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactoryShiftTransferFailed", 40113, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ChannelRequestFactory Shift transfer failed during connection switch, current state = '{0}', error message = '{2}'.");
        };
        RetailLogger.modelManagersChainedRequestFactoryCartTransferToOfflineFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactoryCartTransferToOfflineFailed", 40114, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ChannelRequestFactory Cart transfer to offline failed, error message = '{1}'.");
        };
        RetailLogger.modelManagersODataExecuteBatchSuccess = function (batchRequestUri) {
            TsLogging.LoggerBase.writeEvent("modelManagersODataExecuteBatchSuccess", 40115, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "ODataRequest Request '{0}' success.");
        };
        RetailLogger.modelManagersODataExecuteBatchFailed = function (batchRequestUri, errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("modelManagersODataExecuteBatchFailed", 40116, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ODataRequest Request '{0}' failed, error message = '{2}'.");
        };
        RetailLogger.modelManagersRetailServerManagerFactoryCreate = function (platform) {
            TsLogging.LoggerBase.writeEvent("modelManagersRetailServerManagerFactoryCreate", 40117, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Creating Data Service Request Factory for '{0}' platform.");
        };
        RetailLogger.modelManagersRetailServerManagerFactoryCreateChained = function () {
            TsLogging.LoggerBase.writeEvent("modelManagersRetailServerManagerFactoryCreateChained", 40118, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "RetailServerManagerFactory Creating chained data service factory.");
        };
        RetailLogger.modelManagersRetailServerManagerFactoryCreateOnline = function () {
            TsLogging.LoggerBase.writeEvent("modelManagersRetailServerManagerFactoryCreateOnline", 40119, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "RetailServerManagerFactory Creating online data service factory.");
        };
        RetailLogger.modelManagersCartManagerAddTenderLineToCartFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("modelManagersCartManagerAddTenderLineToCartFailed", 40120, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Add tender line to cart failed, recovering: failed, error message = '{1}'.");
        };
        RetailLogger.modelManagersCartManagerFailedToOverridePriceNoCartLinesProvided = function () {
            TsLogging.LoggerBase.writeEvent("modelManagersCartManagerFailedToOverridePriceNoCartLinesProvided", 40121, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "CartManager Attempted to override price when no cart lines were provided.");
        };
        RetailLogger.modelManagersCartManagerFailedToOverridePriceNoCartLineOrPriceProvided = function () {
            TsLogging.LoggerBase.writeEvent("modelManagersCartManagerFailedToOverridePriceNoCartLineOrPriceProvided", 40122, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "CartManager Attempted to override price when a cart line, cart line id, or price was not provided.");
        };
        RetailLogger.modelManagersCustomerManagerCustomerValidationFailed = function () {
            TsLogging.LoggerBase.writeEvent("modelManagersCustomerManagerCustomerValidationFailed", 40123, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "CustomerManager Update customer validation failed.");
        };
        RetailLogger.modelManagersCustomerManagerCustomerIsNull = function () {
            TsLogging.LoggerBase.writeEvent("modelManagersCustomerManagerCustomerIsNull", 40124, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "CustomerManager Customer id is null, empty or undefined.");
        };
        RetailLogger.modelManagersCustomerManagerCustomerUpdated = function (createdDate) {
            TsLogging.LoggerBase.writeEvent("modelManagersCustomerManagerCustomerUpdated", 40125, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Customer with created date '{0}' information updated");
        };
        RetailLogger.modelManagersCustomerManagerCustomerUpdateFailure = function (createdDate, errorCode) {
            TsLogging.LoggerBase.writeEvent("modelManagersCustomerManagerCustomerUpdateFailure", 40126, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Customer with created date '{0}' information failed to update with error code '{1}'");
        };
        RetailLogger.modelManagersChainedRequestFactoryShiftTransferToOnlineCreateFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactoryShiftTransferToOnlineCreateFailed", 40127, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ChannelRequestFactory Shift transfer from offline to online failed when creating or updating shift in online channel, error message = '{1}'.");
        };
        RetailLogger.modelManagersChainedRequestFactoryShiftTransferToOnlineDeleteFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactoryShiftTransferToOnlineDeleteFailed", 40128, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ChannelRequestFactory Shift transfer from offline to online failed when deleting shift in offline channel, error message = '{1}'.");
        };
        RetailLogger.modelManagersProductManagerGetRecommendedProductsFailedUnknownError = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("modelManagersProductManagerGetRecommendedProductsFailedUnknownError", 40129, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "GetProductRecommendations failed due to an unexpected error, error message = '{1}'.");
        };
        RetailLogger.modelManagersSalesOrderGetReceiptSuccess = function (receiptIds) {
            TsLogging.LoggerBase.writeEvent("modelManagersSalesOrderGetReceiptSuccess", 40130, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Got receipts with ids: '{0}' successfully");
        };
        RetailLogger.modelManagersCartManagerUpdateCartSuccess = function (cartId) {
            TsLogging.LoggerBase.writeEvent("modelManagersCartManagerUpdateCartSuccess", 40131, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Successfully updated cart with Id '{0}'");
        };
        RetailLogger.modelManagersCartManagerUpdateCartFailure = function (cartId, errorCode) {
            TsLogging.LoggerBase.writeEvent("modelManagersCartManagerUpdateCartFailure", 40132, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Failed to update cart with Id '{0}' with error code '{1}'");
        };
        RetailLogger.modelManagersCartManagerFailedSaveAttributesOnCartLinesInvalidCartLineId = function (invalidCartLineIds, cartId) {
            TsLogging.LoggerBase.writeEvent("modelManagersCartManagerFailedSaveAttributesOnCartLinesInvalidCartLineId", 40133, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed to save attributes to cart lines due to the given cart line identifiers '{0}' not mapping to active cart lines on cart with identifier '{1}'.");
        };
        RetailLogger.modelManagersCartManagerFailedSaveExtensionPropertiesOnCartLinesInvalidCartLineId = function (invalidCartLineIds, cartId) {
            TsLogging.LoggerBase.writeEvent("modelManagersCartManagerFailedSaveExtensionPropertiesOnCartLinesInvalidCartLineId", 40134, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed to save extension properties to cart lines due to the given cart line identifiers '{0}' not mapping to active cart lines on cart with identifier '{1}'.");
        };
        RetailLogger.modelManagersChainedRequestFactorySwitchingToOnlineFailedUnavailableService = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactorySwitchingToOnlineFailedUnavailableService", 40135, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "ChannelRequestFactory Switching connection state to online failed, service unavailable; Correlation Id: '{0}'.");
        };
        RetailLogger.modelManagersChainedRequestFactorySwitchingToOnlineAuthenticationFailedManualOffline = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactorySwitchingToOnlineAuthenticationFailedManualOffline", 40136, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "ChannelRequestFactory Switching connection state to online failed, Authentication failure; Correlation Id: '{0}'.");
        };
        RetailLogger.modelManagersChainedRequestFactorySwitchingToOnlineAuthenticationFailed = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactorySwitchingToOnlineAuthenticationFailed", 40137, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "ChannelRequestFactory Switching connection state to online failed, Authentication failure; Correlation Id: '{0}'.");
        };
        RetailLogger.modelManagersChainedRequestFactorySwitchingToOnlineFailedShift = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactorySwitchingToOnlineFailedShift", 40138, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "ChannelRequestFactory Switching connection state to online failed, cannot transfer shift to online; Correlation Id: '{0}'.");
        };
        RetailLogger.modelManagersRetailServerManagerFactoryCreateOnlineDefault = function () {
            TsLogging.LoggerBase.writeEvent("modelManagersRetailServerManagerFactoryCreateOnlineDefault", 40139, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "RetailServerManagerFactory Creating online data service factory (Default).");
        };
        RetailLogger.modelManagersChainedRequestFactorySwitchingToOfflineNotAvailable = function (connectionType) {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactorySwitchingToOfflineNotAvailable", 40140, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ChannelRequestFactory Switching connection state to offline failed, Offline not avialable ({1}).");
        };
        RetailLogger.modelManagersChainedRequestFactorySwitchingToOfflineFailed = function () {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactorySwitchingToOfflineFailed", 40141, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ChannelRequestFactory Switching connection state to offline failed.");
        };
        RetailLogger.modelManagersChainedRequestFactoryRequestThatCausedSwitchToSeamlessOffline = function (requestId, correlationId) {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactoryRequestThatCausedSwitchToSeamlessOffline", 40142, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [EventKeywords[EventKeywords.Telemetry]], "", "", "The following request Id caused MPOS to switch to offline, Retail Server Request with request id '{0}'; Correlation Id: '{1}'");
        };
        RetailLogger.modelManagersChainedRequestFactoryOnlineDetectedButManualSwitchRequired = function () {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactoryOnlineDetectedButManualSwitchRequired", 40143, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Online detected but manual switch from offline required.");
        };
        RetailLogger.modelManagersChainedRequestFactoryOnlineDetectedButOfflineCartInProgress = function () {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactoryOnlineDetectedButOfflineCartInProgress", 40144, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Online detected but offline cart in progress.");
        };
        RetailLogger.modelManagersChainedRequestFactoryExecuteOfflineAvailable = function () {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactoryExecuteOfflineAvailable", 40145, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Offline available.");
        };
        RetailLogger.modelManagersChainedRequestFactoryExecuteOfflineUnAvailable = function () {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactoryExecuteOfflineUnAvailable", 40146, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Offline un-available.");
        };
        RetailLogger.modelManagersChainedRequestFactoryExecuteFailOfflineAvailable = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactoryExecuteFailOfflineAvailable", 40147, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Successful to execute as offline request; Correlation Id: '{0}'.");
        };
        RetailLogger.modelManagersChainedRequestFactoryExecuteFailOfflineUnAvailable = function (correlationId, errorMessage) {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactoryExecuteFailOfflineUnAvailable", 40148, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [EventKeywords[EventKeywords.Telemetry]], "", "", "Failed to execute as offline request; Error message: {1}; Correlation Id: '{0}'.");
        };
        RetailLogger.modelManagersChainedRequestFactoryExecuteOfflineLogonRequestAvailable = function () {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactoryExecuteOfflineLogonRequestAvailable", 40149, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Offline available.");
        };
        RetailLogger.modelManagersChainedRequestFactoryExecuteOfflineLogonRequestUnAvailable = function () {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactoryExecuteOfflineLogonRequestUnAvailable", 40150, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Offline un-available.");
        };
        RetailLogger.modelManagersChainedRequestFactorySwitchingToOnlineSucceeded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactorySwitchingToOnlineSucceeded", 40151, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "ChannelRequestFactory Switching connection state to online succeeded; Correlation Id: '{0}'.");
        };
        RetailLogger.modelManagersChainedRequestFactorySwitchingToOnlineFailedManualSwitchUnavailableService = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactorySwitchingToOnlineFailedManualSwitchUnavailableService", 40152, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ChannelRequestFactory Switching connection state to online failed, service unavailable; Correlation Id: '{0}'.");
        };
        RetailLogger.modelManagersChainedRequestFactoryLockingAndPromptingSeamlessOfflineDialog = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactoryLockingAndPromptingSeamlessOfflineDialog", 40153, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Request will lock and prompt the seamless offline dialog; Correlation Id: '{0}'");
        };
        RetailLogger.modelManagersChainedRequestFactoryRetryFailedInOnlineMode = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactoryRetryFailedInOnlineMode", 40154, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Retry failed in online mode; Correlation Id: '{0}'");
        };
        RetailLogger.modelManagersChainedRequestFactoryShouldGoOfflineResultFromSeamlessOfflineDialog = function (correlationId, goOffline) {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactoryShouldGoOfflineResultFromSeamlessOfflineDialog", 40155, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "PromptOnSeamlessOfflineDialog press:" + (goOffline ? "Go Offline;" : "Retry;") + "Correlation Id: '{0}'");
        };
        RetailLogger.modelManagersChainedRequestFactorySeamlessOfflineDialogResultForFailedQueuedRequest = function (correlationId, goOffline) {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactoryResultFromSeamlessOfflineDialogOnFailedQueuedRequest", 40156, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "PromptOnSeamlessOfflineDialog press on failed queued request:" + (goOffline ? "Go Offline;" : "Retry;") + "Correlation Id: '{0}'");
        };
        RetailLogger.modelManagersChainedRequestFactorySeamlessOfflineDialogResultForQueuedRequest = function (correlationId, goOffline) {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactoryResultFromSeamlessOfflineDialogOnQueuedRequest", 40157, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "PromptOnSeamlessOfflineDialog press on queued request:" + (goOffline ? "Go Offline;" : "Retry;") + "Correlation Id: '{0}'");
        };
        RetailLogger.modelManagersChainedRequestFactoryFailedRequestQueuedByLockedDialog = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactoryFailedRequestQueuedByLockedDialog", 40158, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Failed request queued by locked dialog; Correlation Id: '{0}'");
        };
        RetailLogger.modelManagersChainedRequestFactoryRequestQueuedByLockedDialog = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactoryRequestQueuedByLockedDialog", 40159, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Request queued by locked dialog; Correlation Id: '{0}'");
        };
        RetailLogger.modelManagersChainedRequestFactoryRetryCountForOnlineRequest = function (correlationId, currentRetryCount, totalRetryCount) {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactoryRetryCountForOnlineRequest", 40160, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Online request failed; Retry attempt number : {1}/{2}; Correlation Id: '{0}'");
        };
        RetailLogger.modelManagersChainedRequestFactoryPromptOnSeamlessOfflineNotSet = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactoryPromptOnSeamlessOfflineNotSet", 40161, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Seamless offline dialog prompting was not set. Request will directly execute in offline mode; Correlation Id: '{0}'.");
        };
        RetailLogger.modelManagersChainedRequestFactorySessionRequestThatCausedSwitchToSeamlessOffline = function (requestId, correlationId) {
            TsLogging.LoggerBase.writeEvent("modelManagersChainedRequestFactorySessionRequestThatCausedSwitchToSeamlessOffline", 40162, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "The following session request Id caused MPOS to switch to offline after its execution, Retail Server Request with request id '{0}'; Correlation Id: '{1}'");
        };
        RetailLogger.modelManagersRetailServerRequestErrorAsInformational = function (requestId, requestUrl, error, responseStatusCode) {
            TsLogging.LoggerBase.writeEvent("modelManagersRetailServerRequestErrorAsInformational", 40163, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "The Retail Server Request with request id '{0}' and request url '{1}' failed. This failure can occur as an expected part of the workflow. Error: {2}. Status code {3}");
        };
        RetailLogger.modelManagersCartManagerAddTenderLineToCartFailedAsInformational = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("modelManagersCartManagerAddTenderLineToCartFailedAsInformational", 40164, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Add tender line to cart failed, recovering: failed. This error can occur as an expected part of the workflow. Error message = '{1}'.");
        };
        RetailLogger.modelManagersCartManagerGetDeclinedOrVoidedCardReceiptsStarted = function (correlationId, cartId, receiptType) {
            TsLogging.LoggerBase.writeEvent("modelManagersCartManagerGetDeclinedOrVoidedCardReceiptsStarted", 40165, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Service call to get declined or voided card receipts started for cart with id: '{1}' and receipt type '{2}' for. Correlation Id: '{0}'.");
        };
        RetailLogger.modelManagersCartManagerGetDeclinedOrVoidedCardReceiptsSucceeded = function (correlationId, cartId, receiptType, receiptIds) {
            TsLogging.LoggerBase.writeEvent("modelManagersCartManagerGetDeclinedOrVoidedCardReceiptsSucceeded", 40166, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Service call to get declined or voided card receipts succeeded for cart with id: '{1}' and  receipt type '{2}'. Correlation Id: '{0}'. Retrieved receipts with Id's: '{3}'.");
        };
        RetailLogger.modelManagersCartManagerTenderLineCollectionNotAllExistInCart = function () {
            TsLogging.LoggerBase.writeEvent("modelManagersCartManagerTenderLineCollectionNotAllExistInCart", 40167, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "The tender lines to be updated do not exist in the cart.");
        };
        RetailLogger.modelManagersErrorParserRetailServerUnavailable = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("modelManagersErrorParserRetailServerUnavailable", 40168, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Retail Server connection is unavailable: {0}.");
        };
        RetailLogger.modelManagersErrorParserInternalServerError = function () {
            TsLogging.LoggerBase.writeEvent("modelManagersErrorParserInternalServerError", 40169, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Retail Server internal error has occured. Failed parse returned error");
        };
        RetailLogger.modelManagersErrorParserHardwareStationError = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("modelManagersErrorParserHardwareStationError", 40170, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Error occurred while communicating with Hardware Station : {0}.");
        };
        RetailLogger.modelManagerErrorParserHardwareStationCommunicatonFailed = function () {
            TsLogging.LoggerBase.writeEvent("modelManagerErrorParserHardwareStationCommunicatonFailed", 40171, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Error occurred while communicating with Hardware Station. Failed to parse returned error.");
        };
        RetailLogger.modelManagersErrorParserDataValidationFailure = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("modelManagersErrorParserDataValidationFailure", 40172, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ErrorParser _getErrorsFromDataValidationFailures error message: {0}.");
        };
        RetailLogger.modelManagersErrorParserUnsupportedContentType = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("modelManagersErrorParserUnsupportedContentType", 40173, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Server error has been received with unsupported content type: '{0}'.");
        };
        RetailLogger.coreCannotMapResourceMessage = function (resourceId) {
            TsLogging.LoggerBase.writeEvent("ResourceStringMappingNotFound", 40200, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Cannot localize message from resource identifier: '{0}'.");
        };
        RetailLogger.coreCannotMapErrorCode = function (errorCode) {
            TsLogging.LoggerBase.writeEvent("ErrorCodeMappingNotFound", 40201, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Cannot map to error entity from error code: '{0}'.");
        };
        RetailLogger.corePropertyMissingInDeviceActivationSequence = function (propertyName, operationName) {
            TsLogging.LoggerBase.writeEvent("MissingPropertyOnActivationSequence", 40202, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Operation '{1}' on device activation sequence is missing property '{0}'.");
        };
        RetailLogger.coreRetailOperationOnExecutingStarted = function (correlationId, operationName, operationId) {
            TsLogging.LoggerBase.writeEvent("coreRetailOperationOnExecutingStarted", 40203, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Running on execution operation pre-step  {1} ({2}).");
        };
        RetailLogger.coreOperationManagerRevertToSelf = function () {
            TsLogging.LoggerBase.writeEvent("OperationManagerRevertToSelf", 40204, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Executing revert to self.");
        };
        RetailLogger.coreRetailOperationManagerOverride = function (operationName, operationId) {
            TsLogging.LoggerBase.writeEvent("RetailOperationManagerOverride", 40205, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Running manager override for operation {0} ({1}).");
        };
        RetailLogger.coreRetailOperationHandlerNotFound = function (operationName, operationId) {
            TsLogging.LoggerBase.writeEvent("RetailOperationHandlerNotFound", 40206, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Operation handler not found for operation {0} ({1}).");
        };
        RetailLogger.coreRetailOperationOnExecutingCompleted = function (correlationId, operationName, operationId) {
            TsLogging.LoggerBase.writeEvent("coreRetailOperationOnExecutingCompleted", 40207, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Operation on execution pre-step completed for operation {1} ({2}).");
        };
        RetailLogger.coreRetailOperationOnExecutingCanceled = function (correlationId, operationName, operationId) {
            TsLogging.LoggerBase.writeEvent("coreRetailOperationOnExecutingCanceled", 40208, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Operation on execution pre-step canceled for operation {1} ({2}).");
        };
        RetailLogger.coreRetailOperationOnExecutingFailed = function (correlationId, operationName, operationId, errorMessage) {
            TsLogging.LoggerBase.writeEvent("coreRetailOperationOnExecutingFailed", 40209, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [EventKeywords[EventKeywords.Telemetry]], "", "", "Operation on execution pre-step failed for operation {1} ({2}) with error: {3}.");
        };
        RetailLogger.coreTriggerExecutionStarted = function (triggerType, triggerName, triggerPublisher, triggerVersion) {
            TsLogging.LoggerBase.writeEvent("TriggerExecutionStarted", 40210, 2, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Trigger execution started for trigger type {0}, trigger name {1}, trigger publisher {2}, trigger version {3}.");
        };
        RetailLogger.coreTriggerExecutionCompleted = function (triggerType, triggerName, triggerPublisher, triggerVersion) {
            TsLogging.LoggerBase.writeEvent("TriggerExecutionCompleted", 40211, 2, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Trigger execution completed for trigger type {0}, trigger name {1}, trigger publisher {2}, trigger version {3}.");
        };
        RetailLogger.coreTriggerExecutionCanceled = function (triggerType, triggerName, triggerPublisher, triggerVersion) {
            TsLogging.LoggerBase.writeEvent("TriggerExecutionCanceled", 40212, 2, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Trigger execution canceled for trigger type {0}, trigger name {1}, trigger publisher {2}, trigger version {3}.");
        };
        RetailLogger.coreTriggerExecutionFailed = function (triggerType, triggerName, triggerPublisher, triggerVersion, errorMessage) {
            TsLogging.LoggerBase.writeEvent("TriggerExecutionFailed", 40213, 2, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Trigger execution failed for trigger type {0}, trigger name {1}, trigger publisher {2}, trigger version {3} with error: {4}.");
        };
        RetailLogger.coreLogOriginalUnauthorizedRetailServerResponse = function (correlationId, errorResourceId, errorMessage) {
            TsLogging.LoggerBase.writeEvent("LogOriginalUnauthorizedRetailServerResponse", 40214, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Unauthorized response with error: {2}. ErrorResourceId: {1}. Correlation Id: '{0}'");
        };
        RetailLogger.coreLogXmlHttpRequestError = function (requestUrl, message) {
            TsLogging.LoggerBase.writeEvent("coreLogXmlHttpRequestError", 40215, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Warning, [], "", "", "Response error when sending request to URL {0}, Error message: '{1}'");
        };
        RetailLogger.coreLogXmlHttpRequestTimeout = function (requestUrl, requestId) {
            TsLogging.LoggerBase.writeEvent("coreLogXmlHttpRequestTimeout", 40216, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Timeout when sending request to URL {0}, RequestId: '{1}'");
        };
        RetailLogger.coreHelpersUnrecognizedAddressComponent = function (addressComponent) {
            TsLogging.LoggerBase.writeEvent("coreHelpersUnrecognizedAddressComponent", 40226, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "AddressHelper Unrecognized address component: {0}.");
        };
        RetailLogger.coreHelpersInvalidManualDiscountType = function (manualDiscountType) {
            TsLogging.LoggerBase.writeEvent("coreHelpersInvalidManualDiscountType", 40228, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "DiscountsHelper Invalid manual discount type: '{0}'.");
        };
        RetailLogger.coreHelpersInvalidCustomerDiscountType = function (customerDiscountType) {
            TsLogging.LoggerBase.writeEvent("coreHelpersInvalidCustomerDiscountType", 40229, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "DiscountsHelper Invalid customer discount type: '{0}'.");
        };
        RetailLogger.coreHelpersInvalidDiscountLineType = function (discountLineType) {
            TsLogging.LoggerBase.writeEvent("coreHelpersInvalidDiscountLineType", 40230, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "DiscountsHelper Invalid discount line type: '{0}'.");
        };
        RetailLogger.coreHelpersUnknownAddressType = function (addressType) {
            TsLogging.LoggerBase.writeEvent("coreHelpersUnknownAddressType", 40231, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "AddressTypeEnumHelper getDescription() Unknown address type '{0}'.");
        };
        RetailLogger.coreTenderTypeMapOperationHasNoTenderType = function (operationId) {
            TsLogging.LoggerBase.writeEvent("coreTenderTypeMapOperationHasNoTenderType", 40232, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "TenderTypeMap Operation id {0} has no tender type mapped to it.");
        };
        RetailLogger.coreTenderTypeMapMultipleTendersOfSameType = function () {
            TsLogging.LoggerBase.writeEvent("coreTenderTypeMapMultipleTendersOfSameType", 40233, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "TenderTypeMap Multiple tenders of same type.");
        };
        RetailLogger.coreBindingHandlersLoadImageFailed = function (src) {
            TsLogging.LoggerBase.writeEvent("coreBindingHandlersLoadImageFailed", 40234, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Error loading image for '{0}'. The Image is not displayed due to one or more of the following reasons, the image does not exist or the rendering failed.");
        };
        RetailLogger.coreFormattersCartLineWrongInputParameters = function (propertyName, data) {
            TsLogging.LoggerBase.writeEvent("coreFormattersCartLineWrongInputParameters", 40235, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Formatters.CartLineProperty Wrong input parameters: {0} data: {1}.");
        };
        RetailLogger.coreTenderTypeMapTenderTypeNotFound = function (tenderTypeId) {
            TsLogging.LoggerBase.writeEvent("coreTenderTypeMapTenderTypeNotFound", 40236, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "TenderTypeMap did not locate tender type. Tender type does not exist or job was not run. TenderTypeId: {0}");
        };
        RetailLogger.coreApplicationStorageSetItemFailure = function (storageKey, errorMessage) {
            TsLogging.LoggerBase.writeEvent("coreApplicationStorageSetItemFailure", 40237, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "The attempt to save key '{0}' in application storage failed. Error message: {1}");
        };
        RetailLogger.coreApplicationStorageSetItemFailureRecoveryUnsuccessful = function (storageKey, errorMessage) {
            TsLogging.LoggerBase.writeEvent("coreApplicationStorageSetItemFailureRecoveryUnsuccessful", 40238, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "The attempt to recover from the application storage failure for key '{0}' was unsuccessful. Error message: {1}.");
        };
        RetailLogger.coreLogUserAuthenticationRetailServerResponse = function (correlationId, errorResourceId, errorMessage) {
            TsLogging.LoggerBase.writeEvent("coreLogUserAuthenticationRetailServerResponse", 40239, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Unauthorized response with error: {2}. ErrorResourceId: {1} with Correlation Id: '{0}'");
        };
        RetailLogger.coreRetailCheckOpenDrawerStatusExecutionStart = function () {
            TsLogging.LoggerBase.writeEvent("coreRetailCheckOpenDrawerStatusStart", 40240, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Check Open Cash Drawer Status Execution Started.");
        };
        RetailLogger.coreRetailCheckOpenDrawerStatusExecutionCompleted = function () {
            TsLogging.LoggerBase.writeEvent("coreRetailCheckOpenDrawerStatusExecutionCompleted", 40241, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Check Open Cash Drawer Status Execution Completed.");
        };
        RetailLogger.coreRetailCheckOpenDrawerStatusExecutionFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("coreRetailCheckOpenDrawerStatusExecutionFailed", 40242, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Check Open Cash Drawer Status Execution Failed: error message = '{1}'.");
        };
        RetailLogger.coreHealthCheckResponseParseFailure = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("coreHealthCheckResponseParseFailure", 40243, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Error occurred while parsing the response from service health check. Error Message: {0}.");
        };
        RetailLogger.coreFeatureDisabled = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("coreFeatureDisabled", 40244, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Feature '{0}' disabled.");
        };
        RetailLogger.coreTimezoneMappingNotFound = function (timezoneId) {
            TsLogging.LoggerBase.writeEvent("coreTimezoneMappingNotFound", 40245, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Could not find Timezone mapping for time zone id '{0}'.");
        };
        RetailLogger.corePingHealthCheckUrl = function (healthCheckUrl) {
            TsLogging.LoggerBase.writeEvent("corePingHealthCheckUrl", 40246, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Ping health check url: {0}");
        };
        RetailLogger.coreCancelableSelectionHandlerExceptionDuringSelectionAttempt = function (exceptionMessage) {
            TsLogging.LoggerBase.writeEvent("coreCancelableSelectionHandlerExceptionDuringSelectionAttempt", 40247, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An exception was thrown while the cancelable selection handler was processing a selection attempt. Exception message: {0}");
        };
        RetailLogger.coreApplicationMemoryUsage = function (memoryLimit, memoryUsage) {
            TsLogging.LoggerBase.writeEvent("coreApplicationMemoryUsage", 40248, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The app's memory limit is {0} MB and the app's current memory usage is: {1} MB.");
        };
        RetailLogger.coreLogInvalidCartVersionRetailServerResponse = function () {
            TsLogging.LoggerBase.writeEvent("coreLogInvalidCartVersionRetailServerResponse", 40249, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Cart version mismatch occurred.");
        };
        RetailLogger.coreLogFailureToHandleCartVersionError = function (error) {
            TsLogging.LoggerBase.writeEvent("coreLogFailureToHandleCartVersionError", 40250, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred while trying to handle cart version error: '{0}'.");
        };
        RetailLogger.coreLogFailureToValidateCartVersion = function (error) {
            TsLogging.LoggerBase.writeEvent("coreLogFailureToValidateCartVersion", 40251, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred while trying to validate the cart version: '{0}'.");
        };
        RetailLogger.coreRetailOperationStarted = function (correlationId, operationName, operationId) {
            TsLogging.LoggerBase.writeEvent("RetailOperationStarted", 40252, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Running operation {1} ({2}).");
        };
        RetailLogger.coreRetailOperationCompleted = function (correlationId, operationName, operationId) {
            TsLogging.LoggerBase.writeEvent("RetailOperationCompleted", 40253, 2, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Operation completed for operation {1} ({2}).");
        };
        RetailLogger.coreRetailOperationCanceled = function (correlationId, operationName, operationId) {
            TsLogging.LoggerBase.writeEvent("RetailOperationCanceled", 40254, 2, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Operation canceled for operation {1} ({2}).");
        };
        RetailLogger.coreRetailOperationFailed = function (correlationId, operationName, operationId, errorMessage) {
            TsLogging.LoggerBase.writeEvent("RetailOperationFailed", 40255, 2, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Error, [EventKeywords[EventKeywords.Telemetry]], "", "", "Operation execution failed for operation {1} ({2}) with error: {3}.");
        };
        RetailLogger.coreButtonGridHandlerExtensionOperationRequestFromFactoryOperationMismatch = function (actualOperationId, expectedOperationId, correlationId) {
            TsLogging.LoggerBase.writeEvent("coreButtonGridHandlerExtensionOperationRequestFromFactoryOperationMismatch", 40256, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The operation '{0}' supported by the extension operation request, returned by the request factory, does not match with the button grid button's operation '{1}'.");
        };
        RetailLogger.coreButtonGridHandlerInvalidExtensionOperationRequestFromFactory = function (operationRequest, operationId, isCanceled, correlationId) {
            TsLogging.LoggerBase.writeEvent("coreButtonGridHandlerInvalidExtensionOperationRequestFromFactory", 40257, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The extension operation request '{0}', returned by the request factory for operation '{1}', is either null or undefined. Request factory canceled creating request: '{2}'.");
        };
        RetailLogger.coreHelpersGridExtensionModuleNotProvided = function (fieldName, gridName, pageName) {
            TsLogging.LoggerBase.writeEvent("coreHelpersGridExtensionModuleNotProvided", 40258, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "The '{0}' extension module is not provided for '{1}' grid in {2}' page.");
        };
        RetailLogger.coreAsyncWorkerQueueAsyncCallThrewAnException = function (errors) {
            TsLogging.LoggerBase.writeEvent("coreAsyncWorkerQueueAsyncCallThrewAnException", 40259, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "AsyncQueue.run() caught an exception when running multiple asynchronous calls in sequence. {0}.");
        };
        RetailLogger.coreGetExtensibleEnumerationByNameEnumerationMissing = function (typeName, valueName) {
            TsLogging.LoggerBase.writeEvent("coreGetExtensibleEnumerationByNameEnumerationMissing", 40260, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Extensible enumeration with type '{0}' and name '{1}' is missing.");
        };
        RetailLogger.coreGetExtensibleEnumerationByValueEnumerationMissing = function (typeName, value) {
            TsLogging.LoggerBase.writeEvent("coreGetExtensibleEnumerationByValueEnumerationMissing", 40261, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Extensible enumeration with type '{0}' and value '{1}' is missing.");
        };
        RetailLogger.coreAsyncQueueRunThrewAnException = function (errors) {
            TsLogging.LoggerBase.writeEvent("coreAsyncQueueRunThrewAnException", 40262, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "A call threw an exception when running multiple asynchronous calls in sequence. {0}.");
        };
        RetailLogger.coreOfflineHelperStopOffline = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("coreOfflineHelperStopOffline", 40263, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Stopped offline and switched to online. Correlation Id: {0}");
        };
        RetailLogger.coreStorageClearInitiated = function (correlationId, source) {
            TsLogging.LoggerBase.writeEvent("coreStorageClearInitiated", 40264, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "A request to clear Application Storage was initiated by {1}. Correlation Id: '{0}'");
        };
        RetailLogger.coreLoggerHelperGeneratedNewCorrelationId = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("coreLoggerHelperGeneratedNewCorrelationId", 40265, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Verbose, [], "", "", "Pos generated a new correlation id {0}.");
        };
        RetailLogger.resetApplicationStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("resetApplicationStarted", 40266, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Reset Application started. The Correlation Id: {0}");
        };
        RetailLogger.resetApplicationSucceeded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("resetApplicationSucceeded", 40267, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Reset Application succeeded. The Correlation Id: {0}");
        };
        RetailLogger.resetApplicationCanceled = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("resetApplicationCanceled", 40268, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Reset Application canceled. The Correlation Id: {0}");
        };
        RetailLogger.resetApplicationFailed = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("resetApplicationFailed", 40269, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Reset Application failed. The Correlation Id: {0}");
        };
        RetailLogger.coreUnableToConvertUnrecognizedErrorObjectIntoProxyError = function (errorJSON, correlationId) {
            TsLogging.LoggerBase.writeEvent("coreUnableToConvertUnrecognizedErrorObjectIntoProxyError", 40270, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "An unrecognized error object could not be converted into a proxy error. Error object: '{0}'");
        };
        RetailLogger.openCashDraswerOperationFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("openCashDraswerOperationFailed", 40271, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "OpenCashDrawerOperation failed: error message = '{1}'.");
        };
        RetailLogger.coreNumberSequenceReceivedSequence = function (numberSequence, correlationId) {
            TsLogging.LoggerBase.writeEvent("numberSequenceReceivedSequence", 40272, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Number sequence values from all sources: '{0}'. Correlaton ID: {1}");
        };
        RetailLogger.coreNumberSequenceCombinedSequence = function (numberSequence, correlationId) {
            TsLogging.LoggerBase.writeEvent("coreNumberSequenceCombinedSequence", 40273, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Number sequence values after combining all sources: '{0}'. Correlaton ID: {1}");
        };
        RetailLogger.customWinJSBindingsSetDefaultImage = function (error) {
            TsLogging.LoggerBase.writeEvent("customWinJSBindingsSetDefaultImage", 40274, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Commerce.CustomBindings.SetDefaultImage was called with invalid image path: '{0}'.");
        };
        RetailLogger.coreUnableToConvertUnrecognizedErrorObjectIntoJavascriptError = function (errorJSON, correlationId) {
            TsLogging.LoggerBase.writeEvent("coreUnableToConvertUnrecognizedErrorObjectIntoJavascriptError", 40275, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "An unrecognized error object could not be converted into a javascript error. Error object: '{0}'");
        };
        RetailLogger.operationLogOffComplete = function () {
            TsLogging.LoggerBase.writeEvent("operationLogOffComplete", 40300, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Logoff operation handler success.");
        };
        RetailLogger.operationLogOffFailed = function (errorCode, errorMessage, correlationId) {
            TsLogging.LoggerBase.writeEvent("operationLogOffFailed", 40301, 2, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Post logoff operation(s) failed: error message = '{1}'. The Correlation Id: {2}");
        };
        RetailLogger.operationAddGiftCard = function (giftCardId, amount, currency, lineDescription, connectorName, correlationId) {
            TsLogging.LoggerBase.writeEvent("operationAddGiftCard", 40302, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "AddGiftCard Gift card Id: {0}, amount: {1}, currency: {2}, description: {3}, payment connector: {4},  correlation Id: {5}");
        };
        RetailLogger.operationIssueGiftCard = function (giftCardId, amount, currency, lineDescription, connectorName, correlationId) {
            TsLogging.LoggerBase.writeEvent("operationIssueGiftCard", 40303, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "IssueGiftCard Gift card Id: {0}, amount: {1}, currency: {2}, description: {3}, payment connector: {4}, correlation Id: {5}");
        };
        RetailLogger.operationCloseShift = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("operationCloseShift", 40304, 2, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "CloseShift Close shift operation succeeded. The Correlation Id: {0}");
        };
        RetailLogger.operationLocateServerUrl = function (url) {
            TsLogging.LoggerBase.writeEvent("operationLocateServerUrl", 40305, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "UpdateServerUrl Getting Retail Server URL from locator service '{0}'.");
        };
        RetailLogger.operationUpdateServerUrl = function (url) {
            TsLogging.LoggerBase.writeEvent("operationUpdateServerUrl", 40306, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "UpdateServerUrl Retail Server URL from locator service '{0}'.");
        };
        RetailLogger.operationDeviceActivationUnhandledError = function (error, correlationId) {
            TsLogging.LoggerBase.writeEvent("operationDeviceActivationUnhandledError", 40307, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "DeviceActivationOperation Unhandled error = '{0}'; Correlation Id={1}");
        };
        RetailLogger.operationTimeClockNotEnabled = function () {
            TsLogging.LoggerBase.writeEvent("operationTimeClockNotEnabled", 40308, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "TimeClock Time clock not enabled.");
        };
        RetailLogger.operationPickingAndReceivingGetAllOrdersFailed = function () {
            TsLogging.LoggerBase.writeEvent("operationPickingAndReceivingGetAllOrdersFailed", 40309, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "PickingAndReceivingOperationHandler Failed to get all purchase orders.");
        };
        RetailLogger.operationPickingAndReceivingUpdatePurchaseOrderFailed = function (orderId) {
            TsLogging.LoggerBase.writeEvent("operationPickingAndReceivingUpdatePurchaseOrderFailed", 40310, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "PickingAndReceivingOperationHandler Failed to update purchase order {0}.");
        };
        RetailLogger.operationPickingAndReceivingCommitPurchaseOrderFailed = function (journalId) {
            TsLogging.LoggerBase.writeEvent("operationPickingAndReceivingCommitPurchaseOrderFailed", 40311, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "PickingAndReceivingOperationHandler Failed to commit purchase order {0}.");
        };
        RetailLogger.operationPickingAndReceivingGetPurchaseOrderFailed = function (journalId) {
            TsLogging.LoggerBase.writeEvent("operationPickingAndReceivingGetPurchaseOrderFailed", 40312, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "PickingAndReceivingOperationHandler Failed to get purchase order {0}.");
        };
        RetailLogger.operationPickingAndReceivingUpdateTransderOrderFailed = function (orderId) {
            TsLogging.LoggerBase.writeEvent("operationPickingAndReceivingUpdateTransderOrderFailed", 40313, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "PickingAndReceivingOperationHandler Failed to update transfer order {0}.");
        };
        RetailLogger.operationPickingAndReceivingCommitTransferOrderFailed = function (journalId) {
            TsLogging.LoggerBase.writeEvent("operationPickingAndReceivingCommitTransferOrderFailed", 40314, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "PickingAndReceivingOperationHandler Failed to commit transfer order {0}.");
        };
        RetailLogger.operationPickingAndReceivingGetTransferOrderFailed = function (journalId) {
            TsLogging.LoggerBase.writeEvent("operationPickingAndReceivingGetTransferOrderFailed", 40315, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "PickingAndReceivingOperationHandler Failed to get transfer order {0}.");
        };
        RetailLogger.operationPickingAndReceivingUpdatePickingListFailed = function (orderId) {
            TsLogging.LoggerBase.writeEvent("operationPickingAndReceivingUpdatePickingListFailed", 40316, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "PickingAndReceivingOperationHandler Failed to update picking list {0}.");
        };
        RetailLogger.operationPickingAndReceivingCommitPickingListFailed = function (journalId) {
            TsLogging.LoggerBase.writeEvent("operationPickingAndReceivingCommitPickingListFailed", 40317, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "PickingAndReceivingOperationHandler Failed to commit picking list {0}.");
        };
        RetailLogger.operationPickingAndReceivingGetPickingListFailed = function (journalId) {
            TsLogging.LoggerBase.writeEvent("operationPickingAndReceivingGetPickingListFailed", 40318, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "PickingAndReceivingOperationHandler Failed to get picking list {0}.");
        };
        RetailLogger.retailServerRequestRedirection = function (redirectionUrl) {
            TsLogging.LoggerBase.writeEvent("retailServerRequestRedirection", 40319, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Redirection response from server. Redirecting to: {0}.");
        };
        RetailLogger.operationItemSaleCreateCartLinesStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("operationItemSaleCreateCartLinesStarted", 40320, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Creating cart lines started.");
        };
        RetailLogger.operationItemSaleCreateCartLinesFinished = function (correlationId, successful) {
            TsLogging.LoggerBase.writeEvent("operationItemSaleCreateCartLinesFinished", 40321, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Creating cart lines. Was Successful: {1}.");
        };
        RetailLogger.operationItemSaleGetProductSaleDetailsStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("operationItemSaleGetProductSaleDetailsStarted", 40322, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Retrieving product details started.");
        };
        RetailLogger.operationItemSaleGetProductSaleDetailsFinished = function (correlationId, successful) {
            TsLogging.LoggerBase.writeEvent("operationItemSaleGetProductSaleDetailsFinished", 40323, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Retrieving product details. Was Successful: {1}.");
        };
        RetailLogger.operationBlindCloseSharedShiftFailedOnRevertToSelfDuringCancellation = function (shiftId, staffId, correlationId) {
            TsLogging.LoggerBase.writeEvent("operationBlindCloseSharedShiftFailedOnRevertToSelfDuringCancellation", 40324, 2, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [EventKeywords[EventKeywords.Telemetry]], "", "", "The staff '{1}' fails to cancel the blind close shared shift operation for shift '{0}' when reverting back from the elevated user. The Correlation Id: {2}.");
        };
        RetailLogger.operationSetQuantityOptionsValidationFailed = function (correlationId, errorMessage) {
            TsLogging.LoggerBase.writeEvent("operationSetQuantityOptionsValidationFailed", 40325, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "SetQuantityOperationHandler Failed to validate options: error message = '{1}'. The Correlation Id: {0}.");
        };
        RetailLogger.createEmptyCartServiceRequestValidationFailed = function (correlationId, errorMessage) {
            TsLogging.LoggerBase.writeEvent("createEmptyCartServiceRequestValidationFailed", 40326, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Creating empty cart failed. Error: {1}. The correlation id is {0}");
        };
        RetailLogger.operationGetLatestNumberSequenceOfflineErrorsIgnored = function (correlationId, errors) {
            TsLogging.LoggerBase.writeEvent("operationGetLatestNumberSequenceOfflineErrorsIgnored", 40327, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Ignoring errors while retrieving offline number sequence as there might be no data available in the offline DB yet. Errors ignored: '{0}'.");
        };
        RetailLogger.operationUpdateCustomerOrderInvalidOperationType = function (correlationId, operationType) {
            TsLogging.LoggerBase.writeEvent("operationUpdateCustomerOrderInvalidOperationType", 40328, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [EventKeywords[EventKeywords.Telemetry]], "", "", "Invalid Operation Type {0}.");
        };
        RetailLogger.customerOrderHelperValidateCartLinesForCustomerOrderCartIsNull = function () {
            TsLogging.LoggerBase.writeEvent("customerOrderHelperValidateCartLinesForCustomerOrderCartIsNull", 40329, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Null or undefined reference: cart on CustomerOrderHelper.validateCartLinesForCustomerOrder().");
        };
        RetailLogger.customerOrderHelperValidateCartLinesForRetailTransactionCartIsNull = function () {
            TsLogging.LoggerBase.writeEvent("customerOrderHelperValidateCartLinesForRetailTransactionCartIsNull", 40330, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Null or undefined reference: cart on CustomerOrderHelper.validateCartLinesForRetailTransaction().");
        };
        RetailLogger.peripheralsCashDrawerOpening = function (deviceName, deviceType) {
            TsLogging.LoggerBase.writeEvent("peripheralsCashDrawerOpening", 40400, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "CashDrawer Opening cash drawer. Name: {0}, Type: {1}.");
        };
        RetailLogger.peripheralsMSRKeyboardSwipeParserParseingCardStarted = function (swipeBuffer) {
            TsLogging.LoggerBase.writeEvent("peripheralsMSRKeyboardSwipeParserParseingCardStarted", 40401, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Verbose, [], "", "", "In onkeypress event handler: got all track data now parsing card. The swipe buffer is: {0}.");
        };
        RetailLogger.peripheralsCompositeBarcodeScannerObjectNotDefined = function (objectName) {
            TsLogging.LoggerBase.writeEvent("peripheralsCompositeBarcodeScannerObjectNotDefined", 40402, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "CompositeBarcodeScanner _barcodesLazy {0} is not defined.");
        };
        RetailLogger.peripheralsHardwareStationContextActionRequestSucceeded = function (actionRequest) {
            TsLogging.LoggerBase.writeEvent("peripheralsHardwareStationContextActionRequestSucceeded", 40403, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "HardwareStationContext {0} success.");
        };
        RetailLogger.peripheralsHardwareStationContextActionRequestFailed = function (actionRequest, errors) {
            TsLogging.LoggerBase.writeEvent("peripheralsHardwareStationContextActionRequestFailed", 40404, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "HardwareStationContext {0} failed. Errors: {1}.");
        };
        RetailLogger.peripheralsUnsupportedPrinterType = function (printerType) {
            TsLogging.LoggerBase.writeEvent("peripheralsUnsupportedPrinterType", 40405, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Peripherals Facade Printer has an unsupported printer type '{0}'.");
        };
        RetailLogger.peripheralsBarcodeScannerGetDeviceSelectorFailed = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("peripheralsBarcodeScannerGetDeviceSelectorFailed", 40406, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "BarcodeScanner Facade Could not get a barcode device selector from  Windows.Devices.PointOfService.BarcodeScanner - Error is: '{0}'.");
        };
        RetailLogger.peripheralsBarcodeScannerGetBluetoothDeviceSelectorFailed = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("peripheralsBarcodeScannerGetBluetoothDeviceSelectorFailed", 40407, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "BarcodeScanner Facade Could not get a bluetooth serial port device selector from Windows.Devices.Bluetooth.Rfcomm.RfcommDeviceService - Error is: '{0}'.");
        };
        RetailLogger.peripheralsBarcodeScannerRfCommDeviceServiceNotFound = function () {
            TsLogging.LoggerBase.writeEvent("peripheralsBarcodeScannerRfCommDeviceServiceNotFound", 40408, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "BarcodeScanner Facade Could not find RfCommDeviceService... this could be a problem where the device use consent is not presented or device is not turned on etc.");
        };
        RetailLogger.peripheralsBarcodeScannerEnableFailed = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("peripheralsBarcodeScannerEnableFailed", 40409, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "BarcodeScanner Native Error enabling barcode scanner.");
        };
        RetailLogger.peripheralsMagneticStripeReaderGetDeviceSelectorFailed = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("peripheralsMagneticStripeReaderGetDeviceSelectorFailed", 40410, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "MagneticStripeReader Facade Could not get a msr device selector from  Windows.Devices.PointOfService.MagneticStripeReader - Error is: '{0}'.");
        };
        RetailLogger.peripheralsMagneticStripeReaderGetBluetoothDeviceSelectorFailed = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("peripheralsMagneticStripeReaderGetBluetoothDeviceSelectorFailed", 40411, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "MagneticStripeReader Facade Could not get a bluetooth serial port device selector from Windows.Devices.Bluetooth.Rfcomm.RfcommDeviceService - Error is: '{0}'.");
        };
        RetailLogger.peripheralsMagneticStripeReaderRfCommDeviceServiceNotFound = function () {
            TsLogging.LoggerBase.writeEvent("peripheralsMagneticStripeReaderRfCommDeviceServiceNotFound", 40412, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "MagneticStripeReader Facade Could not find RfCommDeviceService... this could be a problem where the device use consent is not presented or device is not turned on etc.");
        };
        RetailLogger.peripheralsMagneticStripeReaderInitializeFailed = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("peripheralsMagneticStripeReaderInitializeFailed", 40413, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "MagneticStripeReader Native Device failed to initialize due to error: '{0}'.");
        };
        RetailLogger.peripheralsMagneticStripeReaderEnableFailed = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("peripheralsMagneticStripeReaderEnableFailed", 40414, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "MagneticStripeReader Native Error enabling magnetic stripe reader: '{0}'.");
        };
        RetailLogger.peripheralsProximityOpenDeviceFailed = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("peripheralsProximityOpenDeviceFailed", 40418, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Peripherals Proximity Error opening device: '{0}'.");
        };
        RetailLogger.peripheralsProximityNotAvailable = function () {
            TsLogging.LoggerBase.writeEvent("peripheralsProximityNotAvailable", 40419, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Peripherals Proximity Device is not available.");
        };
        RetailLogger.peripheralsLongPollingLockGetDataError = function (errors) {
            TsLogging.LoggerBase.writeEvent("peripheralsLongPoolingLockGetDataError", 40421, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Peripherals LongPollingLock Failed to get data.: errors = '{0}'.");
        };
        RetailLogger.peripheralsLongPollingLockGetDataUnhandledError = function (message) {
            TsLogging.LoggerBase.writeEvent("peripheralsLongPoolingLockGetDataUnhandledError", 40422, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Peripherals LongPollingLock {0}");
        };
        RetailLogger.peripheralsNetworkPaymentTerminalIsNotSupported = function () {
            TsLogging.LoggerBase.writeEvent("peripheralsNetworkPaymentTerminalIsNotSupported", 40423, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Network payment terminal is not supported for the application.");
        };
        RetailLogger.peripheralsOpenLineDisplayDeviceStarted = function () {
            TsLogging.LoggerBase.writeEvent("peripheralsOpenLineDisplayDeviceStarted", 40424, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Opening the line display device for use.");
        };
        RetailLogger.peripheralsCloseLineDisplayDeviceStarted = function () {
            TsLogging.LoggerBase.writeEvent("peripheralsCloseLineDisplayDeviceStarted", 40425, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Closing the line display device.");
        };
        RetailLogger.peripheralsOpenLineDisplayDeviceFailed = function (errorDetails) {
            TsLogging.LoggerBase.writeEvent("peripheralsOpenLineDisplayDeviceFailed", 40426, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Failed to open line display device. Errors: '{0}'.");
        };
        RetailLogger.peripheralsCloseLineDisplayDeviceFailed = function (errorDetails) {
            TsLogging.LoggerBase.writeEvent("peripheralsCloseLineDisplayDeviceFailed", 40427, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Failed to close line display device. Errors: '{0}'.");
        };
        RetailLogger.peripheralsCancelGettingSignatureFailed = function (errorDetails, correlationId) {
            TsLogging.LoggerBase.writeEvent("peripheralsCancelGettingSignatureFailed", 40428, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Failed to cancel getting signature. Errors: '{0}'; Correlation Id: '{1}'.");
        };
        RetailLogger.peripheralsGettingSignatureFailed = function (errorDetails, correlationId) {
            TsLogging.LoggerBase.writeEvent("peripheralsGettingSignatureFailed", 40429, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Failed to get signature. Errors: '{0}'; Correlation Id: '{1}'.");
        };
        RetailLogger.peripheralsCloseSignatureCaptureDeviceFailed = function (errorDetails, correlationId) {
            TsLogging.LoggerBase.writeEvent("peripheralsCloseSignatureCaptureDeviceFailed", 40430, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Failed to close the signature capture device. Errors: '{0}'; Correlation Id: '{1}'.");
        };
        RetailLogger.peripheralsOpenSignatureCaptureDeviceFailed = function (errorDetails, correlationId) {
            TsLogging.LoggerBase.writeEvent("peripheralsOpenSignatureCaptureDeviceFailed", 40431, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Failed to open the signature capture device. Errors: '{0}'; Correlation Id: '{1}'.");
        };
        RetailLogger.peripheralsMSRKeyboardSwipeParserParseingCardFinished = function () {
            TsLogging.LoggerBase.writeEvent("peripheralsMSRKeyboardSwipeParserParseingCardFinished", 40432, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Verbose, [], "", "", "Successfully parsed the card data.");
        };
        RetailLogger.peripheralsMSRKeyboardSwipeParserParseingCardFailed = function (swipeBuffer) {
            TsLogging.LoggerBase.writeEvent("peripheralsMSRKeyboardSwipeParserParseingCardFailed", 40433, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Failed to parse the card data. The swipe buffer is: '{0}'.");
        };
        RetailLogger.peripheralsMSRKeyboardSwipeParserParseingTrackDelimitersFailed = function (swipeCopy) {
            TsLogging.LoggerBase.writeEvent("peripheralsMSRKeyboardSwipeParserParseingTrackDelimitersFailed", 40434, 1, TsLogging.EventChannel.Admin, TsLogging.EventLevel.Warning, [], "", "", "Failed to process track tokens.The number of reTrackDelimMatches should be greater than or equal to 1. The raw data that was parsed was: '{0}'.");
        };
        RetailLogger.peripheralsMSRKeyboardSwipeParserParseingTrack1FieldDelimFailed = function (length, track1) {
            TsLogging.LoggerBase.writeEvent("peripheralsMSRKeyboardSwipeParserParseingTrack1FieldDelimFailed", 40435, 1, TsLogging.EventChannel.Admin, TsLogging.EventLevel.Warning, [], "", "", "Incorrect number of Field delimiter tokens in track1. The number should be smaller than 2, but it was '{0}'. Parameter track1 was '{2}'.");
        };
        RetailLogger.peripheralsMSRKeyboardSwipeParserParseingTrack2FieldDelimFailed = function (length, track2) {
            TsLogging.LoggerBase.writeEvent("peripheralsMSRKeyboardSwipeParserParseingTrack2FieldDelimFailed", 40436, 1, TsLogging.EventChannel.Admin, TsLogging.EventLevel.Warning, [], "", "", "Incorrect number of Field delimiter tokens in track2. The number should be 1, but it was '{0}'. Parameter track2 was '{2}'.");
        };
        RetailLogger.peripheralsMSRKeyboardSwipeParserInvalidExpirationYear = function (year) {
            TsLogging.LoggerBase.writeEvent("peripheralsMSRKeyboardSwipeParserInvalidExpirationYear", 40437, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Invalid expiration year; contains chars other than digits. The value of expiration year was '{0}'.");
        };
        RetailLogger.peripheralsMSRKeyboardSwipeParserInvalidExpirationMonth = function (month) {
            TsLogging.LoggerBase.writeEvent("peripheralsMSRKeyboardSwipeParserInvalidExpirationMonth", 40438, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Invalid expiration month; contains chars other than digits. The value of expiration month was '{0}'.");
        };
        RetailLogger.peripheralsMSRKeyboardSwipeParserSetCardReaderStreamTimer = function (timeout) {
            TsLogging.LoggerBase.writeEvent("peripheralsMSRKeyboardSwipeParserSetCardReaderStreamTimer", 40439, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Verbose, [], "", "", "Starting IsCardReaderStreamTimer. The timeout is set as '{0}'.");
        };
        RetailLogger.peripheralsMSRKeyboardSwipeParserSetKeystrokeLogTimer = function (timeout) {
            TsLogging.LoggerBase.writeEvent("peripheralsMSRKeyboardSwipeParserSetKeystrokeLogTimer", 40440, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Verbose, [], "", "", "Starting KeystrokeLogTimer. The timeout is set as '{0}'.");
        };
        RetailLogger.peripheralsMSRKeyboardSwipeParserEnteringKeystrokeLogTimer = function () {
            TsLogging.LoggerBase.writeEvent("peripheralsMSRKeyboardSwipeParserEnteringKeystrokeLogTimer", 40441, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Verbose, [], "", "", "Entering KeystrokeLogTimer.");
        };
        RetailLogger.peripheralsMSRKeyboardSwipeParserKeystrokeLogTimerTimeOut = function (swipeBuffer) {
            TsLogging.LoggerBase.writeEvent("peripheralsMSRKeyboardSwipeParserKeystrokeLogTimerTimeOut", 40442, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Verbose, [], "", "", "KeystrokeLogTimer timeout. The swipe buffer is discarded. The value of the swipe buffer was: '{0}'.");
        };
        RetailLogger.peripheralsMSRKeyboardSwipeParserKeystrokeLogTimerFinished = function () {
            TsLogging.LoggerBase.writeEvent("peripheralsMSRKeyboardSwipeParserKeystrokeLogTimerFinished", 40443, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Verbose, [], "", "", "KeystrokeLogTimer successfully read.");
        };
        RetailLogger.peripheralsMSRKeyboardSwipeParserInvalidSwipeBuffer = function (swipeBuffer) {
            TsLogging.LoggerBase.writeEvent("peripheralsMSRKeyboardSwipeParserInvalidSwipeBuffer", 40444, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The swipe buffer was not valid. The value of the swipe buffer was: '{0}'.");
        };
        RetailLogger.peripheralsMSRKeyboardSwipeParserCardReaderStreamTimerCanceled = function () {
            TsLogging.LoggerBase.writeEvent("peripheralsMSRKeyboardSwipeParserCardReaderStreamTimerCanceled", 40445, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Verbose, [], "", "", "IsCardReaderStreamTimer was canceled before it had a chance to run.");
        };
        RetailLogger.peripheralsMSRKeyboardSwipeParserKeystrokeLogTimerCanceled = function () {
            TsLogging.LoggerBase.writeEvent("peripheralsMSRKeyboardSwipeParserSetKeystrokeLogTimerCanceled", 40446, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Verbose, [], "", "", "KeystrokeLogTimer was canceled before it had a chance to run.");
        };
        RetailLogger.peripheralsMSRKeyboardSwipeParserFastCharsEaten = function (fastCharsEaten) {
            TsLogging.LoggerBase.writeEvent("peripheralsMSRKeyboardSwipeParserFastCharsEaten", 40447, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Verbose, [], "", "", "EatFastKeyStrokes ate these chars: '{0}'.");
        };
        RetailLogger.posInitiatedHardwareStationRequestStarted = function (activityId, hardwareStationUri, requestAction, requestTimeout, requestLocale) {
            TsLogging.LoggerBase.writeEvent("posInitiatedHardwareStationRequestStarted", 40448, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Pos initiated a hardware station request to uri: {1}. The activityId is: {0}.");
        };
        RetailLogger.posInitiatedHardwareStationRequestSucceeded = function (activityId, hardwareStationUri, requestAction, requestTimeout, requestLocale) {
            TsLogging.LoggerBase.writeEvent("posInitiatedHardwareStationRequestSucceeded", 40449, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Pos successfully completed a hardware station request to uri: {1}. The activityId is: {0}.");
        };
        RetailLogger.posInitiatedHardwareStationRequestFailed = function (activityId, hardwareStationUri, requestAction, requestTimeout, requestLocale, errors) {
            TsLogging.LoggerBase.writeEvent("posInitiatedHardwareStationRequestFailed", 40450, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Pos initiated hardware station request failed for uri: {1}. The activityId is: {0}.");
        };
        RetailLogger.posInitiatedHardwareStationRequestTimedOut = function (activityId, hardwareStationUri, requestAction, requestTimeout, requestLocale) {
            TsLogging.LoggerBase.writeEvent("posInitiatedHardwareStationRequestTimedOut", 40451, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Pos initiated hardware station request timed out for uri: {1}. The activityId is: {0}.");
        };
        RetailLogger.posInitiatedHardwareStationRequestRetry = function (activityId, newActivityId) {
            TsLogging.LoggerBase.writeEvent("posInitiatedHardwareStationRequestRetry", 40452, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Pos initiated hardware station request with activityId: {0} failed. Retrying with new activityId: {1}.");
        };
        RetailLogger.peripheralsOpenSignatureCaptureDeviceStarted = function (profileDescription, deviceName, deviceType, correlationId) {
            TsLogging.LoggerBase.writeEvent("peripheralsOpenSignatureCaptureDeviceStarted", 40454, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Opening the signature capture device. Hardware Profile Description: '{0}'; Device Name: '{1}'; Device Type: '{2}'; Correlation Id: {3}.");
        };
        RetailLogger.peripheralsOpenSignatureCaptureDeviceCancelled = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("peripheralsOpenSignatureCaptureDeviceCancelled", 40453, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Cancelled opening the signature capture device because the driver type is Unknown, specify one in the Hardware Profile. Correlation Id: {0}.");
        };
        RetailLogger.peripheralsOpenSignatureCaptureDeviceSucceeded = function (lockToken, correlationId) {
            TsLogging.LoggerBase.writeEvent("peripheralsOpenSignatureCaptureDeviceSucceeded", 40455, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Opened the signature capture device. Lock Token: '{0}'; Correlation Id: '{1}'.");
        };
        RetailLogger.peripheralsLongPollingGetDataCount = function (activeCalls) {
            TsLogging.LoggerBase.writeEvent("peripheralsLongPollingGetDataCount", 40456, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Peripherals LongPollingGetData call count. Number of active calls: '{0}'.");
        };
        RetailLogger.peripheralsLongPollingStopGetDataCall = function (handlerSource) {
            TsLogging.LoggerBase.writeEvent("peripheralsLongPollingStopGetDataCall", 40457, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Peripherals LongPollingGetData call stopped for handler source. Source: '{0}'.");
        };
        RetailLogger.peripheralsActiveHardwareStationSet = function (correlationId, hardwareStationProfileId, isDedicatedStation) {
            TsLogging.LoggerBase.writeEvent("peripheralsActiveHardwareStationSet", 40458, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Active Hardware Station was set to '{1}'. Is Dedicated: '{2}. Correlation Id: '{0}'");
        };
        RetailLogger.peripheralsDeviceConfigNotDefined = function (peripheralType, deviceName, deviceDriverType, hardwareStationProfileId) {
            TsLogging.LoggerBase.writeEvent("peripheralsDeviceConfigNotDefined", 40459, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "DeviceConfig was not set because peripheral configuration was not found. This means that IP Configuration was not set on Store neither on Register levels. Peripheral type:'{0}'; Device name:'{1}'; Device driver type:'{2}'; Hardware Station Profile ID:'{3}'.");
        };
        RetailLogger.peripheralsDeviceConfigDriverNotNetwork = function (peripheralType, deviceName, deviceDriverType, hardwareStationProfileId) {
            TsLogging.LoggerBase.writeEvent("peripheralsDeviceConfigDriverNotNetwork", 40460, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "DeviceConfig was not set because Driver Type is not Network. Peripheral type:'{0}'; Device name:'{1}'; Device driver type:'{2}'; Hardware Station Profile ID:'{3}'.");
        };
        RetailLogger.peripheralsMagneticStripeReaderEnableRequest = function (handlerSource) {
            TsLogging.LoggerBase.writeEvent("peripheralsMagneticStripeReaderEnableRequest", 40461, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "MSR enabled request initiated from source: '{0}'.");
        };
        RetailLogger.peripheralsMagneticStripeReaderDisableRequest = function (handlerSource) {
            TsLogging.LoggerBase.writeEvent("peripheralsMagneticStripeReaderDisableRequest", 40462, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "MSR disable request initiated from source: '{0}'.");
        };
        RetailLogger.peripheralsLongPollingLockRequestInitiated = function (handlerSource) {
            TsLogging.LoggerBase.writeEvent("peripheralsLongPollingLockRequestInitiated", 40463, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Peripheral lock request initiated from handler source: '{0}'.");
        };
        RetailLogger.peripheralsLongPollingGetDataRequestInitiated = function (handlerSource) {
            TsLogging.LoggerBase.writeEvent("peripheralsLongPollingGetDataRequestInitiated", 40464, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Peripheral GetData request initiated from handler source: '{0}'.");
        };
        RetailLogger.peripheralsLongPollingRunningRequestWithNoHandlerSpecified = function () {
            TsLogging.LoggerBase.writeEvent("peripheralsLongPollingRunningRequestWithNoHandlerSpecified", 40465, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "No handler source associated with this long polling request.");
        };
        RetailLogger.peripheralsCloseSignatureCaptureDeviceSucceeded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("peripheralsCloseSignatureCaptureDeviceSucceeded", 40466, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "POS successfully closed the signature capture device. Correlation Id: {0}.");
        };
        RetailLogger.peripheralsCloseSignatureCaptureDeviceCancelled = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("peripheralsCloseSignatureCaptureDeviceCancelled", 40467, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "POS cancelled closing the signature capture device because there is no active signature capture device. Correlation Id: {0}.");
        };
        RetailLogger.peripheralsCancelGettingSignatureSucceeded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("peripheralsCancelGettingSignatureSucceeded", 40468, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "POS successfully canceled the call to get the signature from the signature capture device. Correlation Id: {0}.");
        };
        RetailLogger.peripheralsCancelGettingSignatureCancelled = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("peripheralsCancelGettingSignatureCancelled", 40469, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "POS cancelled the call to cancelSignature from a signature capture device because there is no active signature capture device. Correlation Id: {0}.");
        };
        RetailLogger.peripheralsGettingSignatureSucceeded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("peripheralsGettingSignatureSucceeded", 40470, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "POS successfully completed the call to get the signature from a signature capture device. Correlation Id: {0}.");
        };
        RetailLogger.peripheralsGettingSignatureCancelled = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("peripheralsGettingSignatureCancelled", 40471, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "POS cancelled the call to get the signature from a signature capture device because there is no active signature capture device. Correlation Id: {0}.");
        };
        RetailLogger.peripheralsGettingSignatureStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("peripheralsGettingSignatureStarted", 40472, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "POS started the call to get the signature from the signature capture device. Correlation Id: {0}.");
        };
        RetailLogger.peripheralsCloseSignatureCaptureDeviceStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("peripheralsCloseSignatureCaptureDeviceStarted", 40473, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "POS started the call to close the signature capture device. Correlation Id: {0}.");
        };
        RetailLogger.peripheralsCancelGettingSignatureStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("peripheralsCancelGettingSignatureStarted", 40474, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "POS started the call to cancelSignature on the signature capture device. Correlation Id: {0}.");
        };
        RetailLogger.peripheralsGettingSignatureTerminatedByUser = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("peripheralsGettingSignatureTerminatedByUser", 40475, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "POS call to getSignature on the signature capture device was terminated by user. Correlation Id: {0}.");
        };
        RetailLogger.pairHardwareStationOperationOptionsNotSent = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("pairHardwareStationOperationOptionsNotSent", 40476, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The expected PairHardwareStationOperationOptions is not sent; Correlation ID: '{0}'.");
        };
        RetailLogger.fiscalIntegrationInitializeFiscalPeripheralsClientRequestStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("fiscalIntegrationInitializeFiscalPeripheralsClientRequestStarted", 40477, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Fiscal peripheral initialization started. Correlation ID: '{0}'.");
        };
        RetailLogger.fiscalIntegrationInitializeFiscalPeripheralsClientRequestSucceeded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("fiscalIntegrationInitializeFiscalPeripheralsClientRequestSucceeded", 40478, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Fiscal peripheral initialization completed. Correlation ID: '{0}'.");
        };
        RetailLogger.fiscalIntegrationInitializeFiscalPeripheralsClientRequestFailed = function (errors, correlationId) {
            TsLogging.LoggerBase.writeEvent("fiscalIntegrationInitializeFiscalPeripheralsClientRequestFailed", 40479, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Fiscal peripheral initialization failed. Error: '{0}'. Correlation ID: '{1}'.");
        };
        RetailLogger.fiscalIntegrationRegisterFiscalEventClientRequestStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("fiscalIntegrationRegisterFiscalEventClientRequestStarted", 40480, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Fiscal event registration started. Correlation ID: '{0}'.");
        };
        RetailLogger.fiscalIntegrationRegisterFiscalEventClientRequestSucceeded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("fiscalIntegrationRegisterFiscalEventClientRequestSucceeded", 40481, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Fiscal event registration completed. Correlation ID: '{0}'.");
        };
        RetailLogger.fiscalIntegrationRegisterFiscalEventClientRequestFailed = function (errors, correlationId) {
            TsLogging.LoggerBase.writeEvent("fiscalIntegrationRegisterFiscalEventClientRequestFailed", 40482, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Fiscal event registration failed. Error: '{0}'. Correlation ID: '{1}'.");
        };
        RetailLogger.fiscalIntegrationFiscalPeripheralInitializationFailed = function (sequenceNumber, priority, errors, correlationId) {
            TsLogging.LoggerBase.writeEvent("fiscalIntegrationFiscalPeripheralInitializationFailed", 40483, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Fiscal peripheral initialization failed. The failed process line sequence number: {0}, priority: {1}. Error: '{2}'. Correlation ID: '{3}'.");
        };
        RetailLogger.fiscalIntegrationExecuteRegistrationProcessLineFailed = function (sequenceNumber, priority, errors, correlationId) {
            TsLogging.LoggerBase.writeEvent("fiscalIntegrationExecuteRegistrationProcessLineFailed", 40484, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Executing the fiscal registration process line failed. The failed process line sequence number: {0}, priority: {1}. Error: '{2}'. Correlation ID: '{3}'.");
        };
        RetailLogger.dedicatedHardwareStationOutgoingTaskStarted = function (correlationId, uri) {
            TsLogging.LoggerBase.writeEvent("dedicatedHardwareStationOutgoingTaskStarted", 40485, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "POS initiated the HW station request to Android through outgoing task. Correlation Id: {0}, HW Station Url: '{1}'.");
        };
        RetailLogger.dedicatedHardwareStationClientBrokerStarted = function (correlationId, uri) {
            TsLogging.LoggerBase.writeEvent("dedicatedHardwareStationClientBrokerStarted", 40486, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "POS initiated the HW station request to windows client broker. Correlation Id: {0}, HW Station Url: '{1}'.");
        };
        RetailLogger.dedicatedHardwareStationOutgoingDeserializationFailure = function (serializedResponseText) {
            TsLogging.LoggerBase.writeEvent("dedicatedHardwareStationOutgoingDeserializationFailure", 40487, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "The Android outgoing task deserialization failed: serializedResponseText: '{0}'.");
        };
        RetailLogger.fiscalIntegrationDocumentGenerationFailed = function (sequenceNumber, priority, errors, correlationId) {
            TsLogging.LoggerBase.writeEvent("fiscalIntegrationDocumentGenerationFailed", 40488, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Document generation failed. The failed process line sequence number: {0}, priority: {1}. Error: '{2}'. Correlation ID: '{3}'.");
        };
        RetailLogger.fiscalIntegrationDocumentSubmittedWithNoResponse = function (sequenceNumber, priority, correlationId) {
            TsLogging.LoggerBase.writeEvent("fiscalIntegrationDocumentSubmittedWithNoResponse", 40489, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The document was submitted to the fiscal peripheral but no response received. The process line sequence number: {0}, priority: {1}. Correlation ID: '{2}'.");
        };
        RetailLogger.fiscalIntegrationRegistrationFailed = function (sequenceNumber, priority, errors, correlationId) {
            TsLogging.LoggerBase.writeEvent("fiscalIntegrationRegistrationFailed", 40490, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Fiscal event registration failed. The failed process line sequence number: {0}, priority: {1}. Error: '{2}'. Correlation ID: '{3}'.");
        };
        RetailLogger.librariesWinJsListViewShown = function (elementId) {
            TsLogging.LoggerBase.writeEvent("LibrariesWinJsListViewShown", 40500, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "The list view is shown. Element ID: '{0}'.");
        };
        RetailLogger.librariesWinJsListViewItemClick = function (elementId) {
            TsLogging.LoggerBase.writeEvent("LibrariesWinJsListViewItemClick", 40501, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "An item in the list view has been clicked. Element ID: '{0}'.");
        };
        RetailLogger.librariesNumpadEnterKey = function (textFieldValue) {
            TsLogging.LoggerBase.writeEvent("LibrariesNumpadEnterKey", 40600, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry], EventKeywords[EventKeywords.Performance]], "", "", "Numpad enter key was pressed.  Text field value: '{0}'.");
        };
        RetailLogger.librariesAuthenticationProviderLoginStarted = function (requestId, details) {
            TsLogging.LoggerBase.writeEvent("librariesAuthenticationProviderLoginStarted", 40610, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Login is starting. {1} RequestId: {0}");
        };
        RetailLogger.librariesAuthenticationProviderLoginFinished = function (requestId, details) {
            TsLogging.LoggerBase.writeEvent("librariesAuthenticationProviderLoginFinished", 40611, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Login has finished. {1} RequestId: {0}");
        };
        RetailLogger.librariesAuthenticationProviderAcquireTokenStarted = function (requestId, resourceId) {
            TsLogging.LoggerBase.writeEvent("librariesAuthenticationProviderAcquireTokenStarted", 40612, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Starting: acquireToken for resource '{1}'. RequestId: {0}");
        };
        RetailLogger.librariesAuthenticationProviderAcquireTokenFinished = function (requestId) {
            TsLogging.LoggerBase.writeEvent("librariesAuthenticationProviderAcquireTokenFinished", 40613, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Finished: acquireToken. RequestId: {0}");
        };
        RetailLogger.librariesAuthenticationProviderAuthenticationFailed = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("librariesAuthenticationProviderAuthenticationFailed", 40614, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Authentication failed with error: {0}");
        };
        RetailLogger.librariesAuthenticationProviderLogOutFailed = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("librariesAuthenticationProviderLogOutFailed", 40615, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Log Out failed with error: {0}");
        };
        RetailLogger.librariesAuthenticationProviderNotFound = function (providerId, authority) {
            TsLogging.LoggerBase.writeEvent("librariesAuthenticationProviderNotFound", 40616, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Unable to find Account Provider by given id: {0} and Authority {1}.");
        };
        RetailLogger.librariesAuthenticationFailedToRequestToken = function (authority, errorCode, errorDescription) {
            TsLogging.LoggerBase.writeEvent("librariesAuthenticationFailedToRequestToken", 40617, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Call to the AAD at {0} failed with error: {1} - {2}. Possible reason: the user cancelled authentication process.");
        };
        RetailLogger.librariesAuthenticationFailedToDisplayPane = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("librariesAuthenticationFailedToDisplayPane", 40618, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An attempt to display Account Settings Pane has failed with the error '{0}'.");
        };
        RetailLogger.librariesAuthenticationAadCallbackUrl = function (callbackUrl) {
            TsLogging.LoggerBase.writeEvent("librariesAuthenticationAadCallbackUrl", 40619, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "This UWP application was assigned the following callback Uri to be used while interacting with AAD: {0}");
        };
        RetailLogger.librariesAuthenticationAadUserPropertyNotFound = function (propertyKey) {
            TsLogging.LoggerBase.writeEvent("librariesAuthenticationAadUserPropertyNotFound", 40620, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The AAD User information recevied through security token does not contain a property: {0}.");
        };
        RetailLogger.librariesAuthenticationAadUserDetailsNotInitialized = function () {
            TsLogging.LoggerBase.writeEvent("librariesAuthenticationAadUserDetailsNotInitialized", 40621, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "AzureActiveDirectoryUserAuthenticationProvider.acquireTokenWithParam skipped accessing current user's information because corresponding data structure was not initialized.");
        };
        RetailLogger.librariesAuthenticationAADLogoutSkipped = function (providerAuthority, providerName) {
            TsLogging.LoggerBase.writeEvent("librariesAuthenticationAADLogoutSkipped", 40622, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "AAD Logout was skipped because there was no signed-in user. Identity Provider's Authority = '{0}'. Identity Provider's Name = '{1}'.");
        };
        RetailLogger.librariesAuthenticationAADDowngradingToOlderFlow = function () {
            TsLogging.LoggerBase.writeEvent("librariesAuthenticationAADDowngradingToOlderFlow", 40623, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Downgrading to AccountsSettingsPane.show because Windows 10 Anniversary Update is required to call AccountsSettingsPane.showManageAccountsAsync.");
        };
        RetailLogger.librariesAuthenticationAADLogOutInitiated = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("librariesAuthenticationAADLogOutInitiated", 40624, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "AAD Log Out initiated. Correlation Id = '{0}'.");
        };
        RetailLogger.librariesAuthenticationAADLogOutCompleted = function (providerAuthority, correlationId) {
            TsLogging.LoggerBase.writeEvent("librariesAuthenticationAADLogOutCompleted", 40625, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "AAD Log Out completed for the authority '{0}'. Correlation Id = '{1}'.");
        };
        RetailLogger.librariesAuthenticationAADAcquireTokenRequiresInteraction = function () {
            TsLogging.LoggerBase.writeEvent("librariesAuthenticationAADAcquireTokenRequiresInteraction", 40626, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "AAD Token cannot be acquired without interactive flow with a user.");
        };
        RetailLogger.librariesAuthenticationAADSettingUpAccountSettingsPane = function (providerAuthority, correlationId) {
            TsLogging.LoggerBase.writeEvent("librariesAuthenticationAADSettingUpAccountSettingsPane", 40627, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Setting up AAD AccountSettingsPane for the authority '{0}'. Correlation Id = '{1}'.");
        };
        RetailLogger.librariesAuthenticationAADAcquiredToken = function (providerAuthority, correlationId) {
            TsLogging.LoggerBase.writeEvent("librariesAuthenticationAADAcquiredToken", 40628, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "AAD token was acquired for the authority '{0}'. Correlation Id = '{1}'.");
        };
        RetailLogger.librariesAuthenticationAADLogoutLookingForAccount = function (providerAuthority, correlationId) {
            TsLogging.LoggerBase.writeEvent("librariesAuthenticationAADLogoutLookingForAccount", 40629, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "AAD Logout flow is initiating a lookup for an Account for the authority '{0}'. Correlation Id = '{1}'.");
        };
        RetailLogger.librariesAuthenticationAADLogoutFoundAccount = function (providerAuthority, correlationId) {
            TsLogging.LoggerBase.writeEvent("librariesAuthenticationAADLogoutFoundAccount", 40630, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "AAD Logout flow has found an Account for the authority '{0}'. Correlation Id = '{1}'.");
        };
        RetailLogger.helpersActivityHelperAddCartLinesStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("HelpersActivityHelperAddCartLineStarted", 40700, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Items added to cart started.");
        };
        RetailLogger.helpersActivityHelperAddCartLinesFinished = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("HelpersActivityHelperAddCartLineFinished", 40701, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Items added to cart finished.");
        };
        RetailLogger.helpersActivityHelperNumberOfCartLinesInCart = function (correlationId, numberOfCartLinesInCart) {
            TsLogging.LoggerBase.writeEvent("helpersActivityHelperNumberOfCartLinesInCart", 40702, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance]], "", "", "Number of cart lines in cart '{1}'.");
        };
        RetailLogger.helpersReasonCodesHelperGetCustomerOrderReasonCodesFinished = function () {
            TsLogging.LoggerBase.writeEvent("HelpersReasonCodesHelperGetCustomerOrderReasonCodesFinished", 40710, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Get Reason Codes for customer order finished.");
        };
        RetailLogger.helpersReasonCodesHelperGetCustomerOrderReasonCodesFailure = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("HelpersReasonCodesHelperGetCustomerOrderReasonCodesFailure", 40711, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Get Reason Codes for customer order failed with error '{1}'.");
        };
        RetailLogger.helpersReasonCodesHelperGetFunctionalityProfileReasonCodesFinished = function () {
            TsLogging.LoggerBase.writeEvent("HelpersReasonCodesHelperGetFunctionalityProfileReasonCodesFinished", 40712, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Get Reason Codes for functionality profile finished.");
        };
        RetailLogger.helpersReasonCodesHelperGetFunctionalityProfileReasonCodesFailure = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("HelpersReasonCodesHelperGetFunctionalityProfileReasonCodesFailure", 40713, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Get Reason Codes for functionality profile failed with error '{1}'.");
        };
        RetailLogger.helpersReasonCodesHelperGetFunctionalityProfileReasonCodeLinesFinished = function () {
            TsLogging.LoggerBase.writeEvent("HelpersReasonCodesHelperGetFunctionalityProfileReasonCodeLinesFinished", 40714, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Get Functionality Profile Reason Code Lines finished.");
        };
        RetailLogger.helpersReasonCodesHelperGetFunctionalityProfileReasonCodeLinesFailure = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("HelpersReasonCodesHelperGetFunctionalityProfileReasonCodeLinesFailure", 40715, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Get Functionality Profile Reason Code Lines failed with error '{1}'.");
        };
        RetailLogger.helpersReasonCodesHelperGetFunctionalityProfileReasonCodesComplete = function () {
            TsLogging.LoggerBase.writeEvent("HelpersReasonCodesHelperGetFunctionalityProfileReasonCodesComplete", 40716, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Get Functionality Profile Reason Code logic complete.");
        };
        RetailLogger.helpersReasonCodesHelperTriggerReasonSubCodeFinished = function (subCode) {
            TsLogging.LoggerBase.writeEvent("HelpersReasonCodesHelperTriggerReasonSubCodeFinished", 40717, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Trigger Reason Subcode '{0}' finished.");
        };
        RetailLogger.helpersReasonCodesHelperTriggerReasonSubCodeFailure = function (subCode, errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("HelpersReasonCodesHelperTriggerReasonSubCodeFailure", 40718, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Trigger Reason Subcode '{0}' failed with error '{2}'.");
        };
        RetailLogger.helpersReasonCodesHelperGetAllRequiredReasonCodesComplete = function () {
            TsLogging.LoggerBase.writeEvent("HelpersReasonCodesHelperGetAllRequiredReasonCodesComplete", 40719, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Get all required Reason Codes logic complete.");
        };
        RetailLogger.helpersReasonCodesHelperAffiliationLineReasonCodesFound = function () {
            TsLogging.LoggerBase.writeEvent("HelpersReasonCodesHelperAffiliationLineReasonCodesFound", 40721, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Required Reason Codes for Affiliation Line found.");
        };
        RetailLogger.helpersReasonCodesHelperTenderLineReasonCodesFound = function () {
            TsLogging.LoggerBase.writeEvent("HelpersReasonCodesHelperTenderLineReasonCodesFound", 40722, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Required Reason Codes for Tender Line found.");
        };
        RetailLogger.helpersReasonCodesHelperCartLineReasonCodesFound = function () {
            TsLogging.LoggerBase.writeEvent("HelpersReasonCodesHelperCartLineReasonCodesFound", 40723, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Required Reason Codes for Cart Line found.");
        };
        RetailLogger.helpersReasonCodesHelperCartReasonCodesFound = function () {
            TsLogging.LoggerBase.writeEvent("HelpersReasonCodesHelperCartReasonCodesFound", 40724, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Required Reason Codes for Cart found.");
        };
        RetailLogger.helpersReasonCodesHelperGetCartReasonCodeLinesFinished = function () {
            TsLogging.LoggerBase.writeEvent("HelpersReasonCodesHelperGetCartReasonCodeLinesFinished", 40725, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Get Cart Reason Code Lines finished.");
        };
        RetailLogger.helpersReasonCodesHelperGetCartReasonCodeLinesFailure = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("HelpersReasonCodesHelperGetCartReasonCodeLinesFailure", 40726, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Get Cart Reason Code Lines failed with error '{1}'.");
        };
        RetailLogger.helpersReasonCodesHelperGetCartLineReasonCodeLinesFinished = function () {
            TsLogging.LoggerBase.writeEvent("HelpersReasonCodesHelperGetCartLineReasonCodeLinesFinished", 40727, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Get Cart Line Reason Code Lines finished.");
        };
        RetailLogger.helpersReasonCodesHelperGetCartLineReasonCodeLinesFailure = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("HelpersReasonCodesHelperGeCartLineReasonCodeLinesFailure", 40728, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Get Cart Line Reason Code Lines failed with error '{1}'.");
        };
        RetailLogger.helpersReasonCodesHelperGetTenderLineReasonCodeLinesFinished = function () {
            TsLogging.LoggerBase.writeEvent("HelpersReasonCodesHelperGetTenderLineReasonCodeLinesFinished", 40729, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Get Tender Line Reason Code Lines finished.");
        };
        RetailLogger.helpersReasonCodesHelperGetTenderLineReasonCodeLinesFailure = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("HelpersReasonCodesHelperGetTenderLineReasonCodeLinesFailure", 40730, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Get Tender Line Reason Code Lines failed with error '{1}'.");
        };
        RetailLogger.helpersReasonCodesHelperGetAffiliationLineReasonCodeLinesFinished = function () {
            TsLogging.LoggerBase.writeEvent("HelpersReasonCodesHelperGetAffiliationLineReasonCodeLinesFinished", 40731, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Get Affiliation Line Reason Code Lines finished.");
        };
        RetailLogger.helpersReasonCodesHelperGetAffiliationLineReasonCodeLinesFailure = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("HelpersReasonCodesHelperGetAffiliationLineReasonCodeLinesFailure", 40732, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Get Affiliation Lines Reason Code Lines failed with error '{1}'.");
        };
        RetailLogger.helpersReasonCodesHelperGetReasonCodesLinesByReasonCodeIdFinished = function () {
            TsLogging.LoggerBase.writeEvent("helpersReasonCodesHelperGetReasonCodesLinesByReasonCodeIdFinished", 40733, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Get Reason Code Lines By Reason Code Id finished.");
        };
        RetailLogger.helpersReasonCodesHelperGetReasonCodesLinesByReasonCodeIdFailure = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("helpersReasonCodesHelperGetReasonCodesLinesByReasonCodeIdFailure", 40734, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Get Reason Code Lines By Reason Code Id failed with error '{1}'.");
        };
        RetailLogger.messagingPosMessagePortExceptionThrownWhileCallingMessageHandler = function (messageType, errorName, errorMessage) {
            TsLogging.LoggerBase.writeEvent("messagingPosMessagePortExceptionThrownWhileCallingMessageHandler", 40740, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error was thrown while executing a message handler for message type '{0}'. Error Name: {1}. Error Message: '{2}'.");
        };
        RetailLogger.messagingPosMessagePortSendMessageCalledAfterDisposal = function (messageType) {
            TsLogging.LoggerBase.writeEvent("messagingPosMessagePortSendMessageCalledAfterDisposal", 40741, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The send message method was called after disposal of the message port. The message will not be sent. Message type: '{0}'.");
        };
        RetailLogger.messagingPosMessagePortAddMessageHandlerCalledAfterDisposal = function (messageType) {
            TsLogging.LoggerBase.writeEvent("messagingPosMessagePortAddMessageHandlerCalledAfterDisposal", 40742, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The add message handler method was called after disposal of the message port. The handler will not be added. Message type: '{0}'.");
        };
        RetailLogger.viewsLoginLoginViewSignInStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("ViewsLoginLoginViewSignInStarted", 40800, 2, TsLogging.EventChannel.Admin, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry], EventKeywords[EventKeywords.Performance]], "", "", "Logon started. The Correlation Id: {0}");
        };
        RetailLogger.viewsLoginLoginViewSignInFinished = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("ViewsLoginLoginViewSignInFinished", 40804, 1, TsLogging.EventChannel.Admin, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Logon finished.");
        };
        RetailLogger.viewsCloudDeviceActivationViewActivationFailed = function () {
            TsLogging.LoggerBase.writeEvent("ViewsCloudDeviceActivationViewActivationFailed", 40810, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "The device activation operation failed.");
        };
        RetailLogger.viewsCloudDeviceActivationViewStartOver = function () {
            TsLogging.LoggerBase.writeEvent("ViewsCloudDeviceActivationViewStartOver", 40811, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The user starts over the activation process.");
        };
        RetailLogger.viewsHomeTileClick = function (action, correlationId) {
            TsLogging.LoggerBase.writeEvent("ViewsHomeTileClick", 40820, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "One of the tiles on the Home Page was clicked. Action: '{0}'.");
        };
        RetailLogger.viewsHomeViewIsVisible = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewsHomeViewIsVisible", 40821, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "The HomeView is shown and visible.");
        };
        RetailLogger.viewsOrderPaymentViewPaymentInitiated = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewPaymentInitiated", 40850, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "Payment has been initiated from the 'Payment View'.");
        };
        RetailLogger.viewsOrderPaymentViewInvalidPaymentAmount = function (amount, errors) {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewInvalidPaymentAmount", 40851, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The payment amount text is invalid. Amount text: '{0}', Errors: '{1}'.");
        };
        RetailLogger.viewsOrderPaymentViewPaymentAuthorizationStarted = function () {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewPaymentAuthorizationStarted", 40852, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Payment authorization has been started from the 'Payment View'.");
        };
        RetailLogger.viewsOrderPaymentViewRefundPaymentStarted = function () {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewRefundPaymentStarted", 40853, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Refund payment has been started from the 'Payment View'.");
        };
        RetailLogger.viewsOrderPaymentViewCardTokenizationStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewCardTokenizationStarted", 40854, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Payment card tokenization has been started from the 'Payment View'.");
        };
        RetailLogger.viewsOrderPaymentViewCardTokenizationFinished = function () {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewCardTokenizationFinished", 40855, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Payment card tokenization has been finished in the 'Payment View'.");
        };
        RetailLogger.viewsOrderPaymentViewPaymentInfoIsNull = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewPaymentInfoIsNull", 40856, 1, TsLogging.EventChannel.Admin, TsLogging.EventLevel.Warning, [], "", "", "The payment information is null or undefined.");
        };
        RetailLogger.viewsOrderPaymentViewPaymentInfoWasNotApproved = function (correlationId, cardNumberMasked, cardType, cashbackAmount, approvedAmount) {
            var lastFourDigits = "";
            var message;
            if (cardNumberMasked && cardNumberMasked.length >= 4) {
                lastFourDigits = cardNumberMasked.substring(cardNumberMasked.length - 4);
                message = "The payment information was not approved. Last four digits of the card number: " + lastFourDigits + ". Card type: '{1}'. Cashback amount: '{2}'. Approved amount: '{3}'.";
            }
            else {
                message = "The payment information was not approved. The whole card number has less than 4 digits and it was " + lastFourDigits + ". Card type: '{1}'. Cashback amount: '{2}'. Approved amount: '{3}'.";
            }
            TsLogging.LoggerBase.writeEvent("viewsOrderPaymentViewPaymentInfoWasNotApproved", 40857, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", message);
        };
        RetailLogger.viewsOrderPaymentViewCardTokenizationFailed = function (errors) {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewCardTokenizationFailed", 40858, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Payment card tokenization has been failed in the 'Payment View'. Errors: '{0}'.");
        };
        RetailLogger.viewsOrderPaymentViewRetrievePaymentInformationFinished = function () {
            TsLogging.LoggerBase.writeEvent("viewsOrderPaymentViewRetrievePaymentInformationFinished", 40859, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Verbose, [], "", "", "All the payment information has been retrieved, continue processing the payment.");
        };
        RetailLogger.viewsOrderPaymentViewGettingCashbackStarted = function () {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewGettingCashbackStarted", 40860, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Getting cashback has started in the 'Payment View'.");
        };
        RetailLogger.viewsOrderPaymentViewTenderAmountsValidationForCardPaymentFailed = function (errors) {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewTenderAmountsValidationForCardPaymentFailed", 40861, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Errors happened when validating tender amounts for card payment. Errors: '{0}'.");
        };
        RetailLogger.viewsOrderPaymentViewCashbackDialogFailure = function (errors) {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewCashbackDialogFailure", 40862, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Errors happened when displaying dialog for getting cashback. Errors: '{0}'.");
        };
        RetailLogger.viewsOrderPaymentViewGettingFilteredDenominationsForCurrencyFailed = function (currency, errors) {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewGettingFilteredDenominationsForCurrencyFailed", 40863, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Failed to get filtered denominations for currency. Currency:'{0}'. Errors: '{1}'.");
        };
        RetailLogger.viewsOrderPaymentViewNoPINPadInstanceWasFound = function () {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewNoPINPadInstanceWasFound", 40864, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "No PIN pad instance was found.");
        };
        RetailLogger.viewsOrderPaymentViewGettingPINFromPINPadFailed = function (errors) {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewGettingPINFromPINPadFailed", 40865, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Failed to get PIN from PIN pad in 'Payment view'. Errors: '{0}'.");
        };
        RetailLogger.viewsOrderPaymentViewUsingExternalPaymentPage = function () {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewUsingExternalPaymentPage", 40866, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "User is using the external payment page to make the payment.");
        };
        RetailLogger.viewsOrderPaymentViewMakeFinalPaymentStarted = function () {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewMakeFinalPaymentStarted", 40867, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Start making the final payment.");
        };
        RetailLogger.viewsOrderPaymentViewAddTenderLineToCartFailed = function (errors) {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewAddTenderLineToCartFailed", 40868, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Failed to add the tender line to the cart while making the final payment. Errors: '{0}'.");
        };
        RetailLogger.viewsOrderPaymentViewPaymentAuthorizedVoidFailed = function (errors) {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewPaymentAuthorizedVoidFailed", 40869, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The payment was authorized but could not be added to the transaction. The attempt to void the payment failed. Errors: '{0}'.");
        };
        RetailLogger.viewsOrderPaymentViewPaymentCapturedVoidFailed = function (errors) {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewPaymentCapturedVoidFailed", 40870, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The payment was captured but could not be added to the transaction. The attempt to void the payment failed. Errors: '{0}'.");
        };
        RetailLogger.viewsOrderPaymentViewPartialPaymentVoidFailed = function (errors) {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewPartialPaymentVoidFailed", 40871, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The attempt to void the partial payment failed. Errors: '{0}'.");
        };
        RetailLogger.viewsOrderPaymentViewVoidPaymentStarted = function () {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewVoidPaymentStarted", 40872, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Because some errors happened, the POS is now trying to void the payment.");
        };
        RetailLogger.viewsOrderPaymentViewFilterCardTypesFailed = function (isSwipe, cardTypeId, tenderTypeId, tenderTypeName, usedCardPrefix) {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewFilterCardTypesFailed", 40873, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Failed to get any applicable card types. To find supported Card Types look in Debug log for an event with ID #40083. Parameters passed in: isSwipe = '{0}', cardTypeId = '{1}', tenderTypeId = '{2}', tenderTypeName = '{3}', usedCardPrefix = '{4}'");
        };
        RetailLogger.viewsOrderPaymentViewPaymentTerminalAuthRefundFailed = function (errors) {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewPaymentTerminalAuthRefundFailed", 40874, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The payment terminal failed to authorize or refund the payment. Errors: '{0}'.");
        };
        RetailLogger.viewsOrderPaymentViewFilterCreditCardTypesFailed = function (cardPrefix) {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewFilterCreditCardTypesFailed", 40875, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Failed to get any applicable credit card types. Parameter passed in: cardPrefix = '{0}'.");
        };
        RetailLogger.viewsOrderPaymentViewRetrieveCardPaymentAcceptResultStarted = function () {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewRetrieveCardPaymentAcceptResultStarted", 40876, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Verbose, [], "", "", "Started to retrieve card payment accept result.");
        };
        RetailLogger.viewsOrderPaymentViewRetrieveCardPaymentAcceptResultFailed = function (errors) {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewRetrieveCardPaymentAcceptResultFailed", 40877, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Failed to retrieve card payment accept result. Errors: '{0}'.");
        };
        RetailLogger.viewsOrderPaymentViewHandleCardPaymentAcceptAuthorize = function () {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewHandleCardPaymentAcceptAuthorize", 40878, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Card payment accept result for authorization has been retrieved.");
        };
        RetailLogger.viewsOrderPaymentViewHandleCardPaymentAcceptRefund = function () {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewHandleCardPaymentAcceptRefund", 40879, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Card payment accept result for refund has been retrieved.");
        };
        RetailLogger.viewsOrderPaymentViewSubmitCardPaymentToAcceptPageByUsingURL = function () {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewSubmitCardPaymentToAcceptPageByUsingURL", 40880, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Verbose, [], "", "", "Start submitting payment to the external card payment accept page..");
        };
        RetailLogger.viewsOrderPaymentViewSubmitCardPaymentToAcceptPageBySendingMessage = function () {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewSubmitCardPaymentToAcceptPageBySendingMessage", 40881, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Verbose, [], "", "", "The origin of the card page is unavailable. Start sending a message to the card page to trigger submit.");
        };
        RetailLogger.viewsOrderPaymentViewShowSelectPaymentCardTypeDialog = function () {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewShowSelectPaymentCardTypeDialog", 40882, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Got multiple card types given the card prefix. Start showing the dialog to select a card type.");
        };
        RetailLogger.viewsOrderPaymentViewCancelSelectPaymentCardTypeDialog = function () {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewCancelSelectPaymentCardTypeDialog", 40883, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "User canceled the dialog to select a card type.");
        };
        RetailLogger.viewsOrderPaymentViewPaymentCardTypeSelectedInDialog = function (typeId, paymentMethodId, recordId) {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewPaymentCardTypeSelectedInDialog", 40884, 1, TsLogging.EventChannel.Admin, TsLogging.EventLevel.Informational, [], "", "", "User has selected a payment card type from the dialog. Card information: TypeId = '{0}', PaymentMethodId = '{1}', RecordId = '{2}'.");
        };
        RetailLogger.viewsOrderPaymentViewGetSignatureFailed = function (errors) {
            TsLogging.LoggerBase.writeEvent("ViewsOrderPaymentViewGetSignatureFailed", 40885, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Failed to get signature. Errors: '{0}'.");
        };
        RetailLogger.viewsOrderPaymentViewPaymentWasForceVoided = function (error) {
            TsLogging.LoggerBase.writeEvent("viewsOrderPaymentViewPaymentWasForceVoided", 40886, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "An error occurred while trying to void card payment. Force void was applied: '{0}'.");
        };
        RetailLogger.viewsOrderPaymentViewPaymentAmount = function (amount) {
            TsLogging.LoggerBase.writeEvent("viewsOrderPaymentViewPaymentAmount", 40887, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [EventKeywords[EventKeywords.Performance]], "", "", "Payment amount: '{0}'.");
        };
        RetailLogger.viewsCustomerDetailsLoaded = function () {
            TsLogging.LoggerBase.writeEvent("ViewsCustomerDetailsLoaded", 40890, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "The Customer Details page has fully loaded.");
        };
        RetailLogger.viewsCustomerDetailsError = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("viewsCustomerDetailsError", 40891, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "CustomerDetailsViewController: error message = '{1}'.");
        };
        RetailLogger.viewsCustomerDetailsAddCustomerFailed = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewsCustomerDetailsAddCustomerFailed", 40892, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "CustomerDetailsViewController addCustomerToCart() failed. Tracking ID: {0}.");
        };
        RetailLogger.viewsCustomerDetailsLoadRecommendedProductsFailed = function (errors) {
            TsLogging.LoggerBase.writeEvent("viewsCustomerDetailsLoadRecommendedProductsFailed", 40893, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [EventKeywords[EventKeywords.Telemetry]], "", "", "Load product recommendations failed on Customer Details Page with error: {0}.");
        };
        RetailLogger.viewsCustomerDetailsLoadRecommendedProductsSucceeded = function (trackingId, numberOfProductsRetrieved, numberOfProductsShown) {
            TsLogging.LoggerBase.writeEvent("viewsCustomerDetailsLoadRecommendedProductsSucceeded", 40894, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Product recommendations were successfully loaded on Customer Details Page. Tracking ID: {0}.");
        };
        RetailLogger.viewsCustomerDetailsSeeAllRecommendedProductsLinkClicked = function (trackingId, numberOfProductsShown) {
            TsLogging.LoggerBase.writeEvent("viewsCustomerDetailsSeeAllRecommendedProductsLinkClicked", 40895, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "See all recommended products link clicked on Customer Details Page. Tracking ID: {0}.");
        };
        RetailLogger.viewsCustomerDetailsIsVisible = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewsCustomerDetailsIsVisible", 40896, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "The CustomerDetailsView is shown and visible.");
        };
        RetailLogger.viewsCustomerDetailsShowAllOrderHistoryStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewsCustomerDetailsShowAllOrderHistoryStarted", 40897, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "Show all order history from the CustomerDetailsView started.");
        };
        RetailLogger.viewsCustomerDetailsShowAllOrderHistoryCustomer = function (correlationId, customerData) {
            TsLogging.LoggerBase.writeEvent("viewsCustomerDetailsShowAllOrderHistoryCustomer", 40898, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [EventKeywords[EventKeywords.Performance]], "", "", "Show customer order details from the CustomerDetailsView. Customer: '{1}'. Tracking ID: {0}.");
        };
        RetailLogger.viewsCustomerDetailsShowSalesOrderDetailsStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewsCustomerDetailsShowSalesOrderDetailsStarted", 40899, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "Show sales order details from the CustomerDetailsView started.");
        };
        RetailLogger.viewsMerchandisingSearchViewSearchClick = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("ViewsMerchandisingSearchViewSearchClick", 40900, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry], EventKeywords[EventKeywords.Performance]], "", "", "A search has been initiated from the search view.");
        };
        RetailLogger.viewsMerchandisingSearchViewProductButtonClick = function (searchTerm) {
            TsLogging.LoggerBase.writeEvent("ViewsMerchandisingSearchViewProductButtonClick", 40901, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [EventKeywords[EventKeywords.Performance]], "", "", "The product button has been clicked in the search view. Search term: '{0}'.");
        };
        RetailLogger.viewsMerchandisingSearchViewCustomerButtonClick = function (searchTerm) {
            TsLogging.LoggerBase.writeEvent("ViewsMerchandisingSearchViewCustomerButtonClick", 40902, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance]], "", "", "The customer button has been clicked in the search view. Search term: '{0}'.");
        };
        RetailLogger.viewsMerchandisingSearchViewAddToCartClick = function (correlationId, numberOfItems) {
            TsLogging.LoggerBase.writeEvent("ViewsMerchandisingSearchViewAddToCartClick", 40903, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry], EventKeywords[EventKeywords.Performance]], "", "", "The 'Add to Sale' button was clicked on the Search View Page. Number of items: '{1}'.");
        };
        RetailLogger.viewsMerchandisingSearchViewQuickSaleClick = function (correlationId, numberOfItems) {
            TsLogging.LoggerBase.writeEvent("ViewsMerchandisingSearchViewQuickSaleClick", 40904, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry], EventKeywords[EventKeywords.Performance]], "", "", "The 'Sell Now' button was clicked on the Search View Page. Number of items: '{1}'.");
        };
        RetailLogger.viewsMerchandisingSearchViewInvalidProductOperation = function () {
            TsLogging.LoggerBase.writeEvent("viewsMerchandisingSearchViewInvalidProductOperation", 40907, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "SearchViewController productOperationHandler() Invalid product operation.");
        };
        RetailLogger.viewsMerchandisingSearchViewInvalidCustomerOperation = function () {
            TsLogging.LoggerBase.writeEvent("viewsMerchandisingSearchViewInvalidCustomerOperation", 40908, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "SearchViewController customerOperationHandler() Invalid product operation.");
        };
        RetailLogger.viewsMerchandisingSearchViewShowProductDetailsStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewsMerchandisingSearchViewShowProductDetailsStarted", 40909, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "Show product details started.");
        };
        RetailLogger.viewsMerchandisingProductDetailsLoadStarted = function () {
            TsLogging.LoggerBase.writeEvent("ViewsMerchandisingProductDetailsLoadStarted", 40910, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "The loading of the Product Details page has started.");
        };
        RetailLogger.viewsMerchandisingProductDetailsAddItem = function () {
            TsLogging.LoggerBase.writeEvent("ViewsMerchandisingProductDetailsAddItem", 40911, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "The 'Add Item' button on the Product Details page has been clicked.");
        };
        RetailLogger.viewsMerchandisingProductDetailsQuickSale = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("ViewsMerchandisingProductDetailsQuickSale", 40912, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "The 'Quick Sale' button on the Product Details page has been clicked.");
        };
        RetailLogger.viewsMerchandisingProductDetailsLoaded = function () {
            TsLogging.LoggerBase.writeEvent("ViewsMerchandisingProductDetailsLoaded", 40913, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "The Product Details page has fully loaded.");
        };
        RetailLogger.viewsMerchandisingProductDetailsKitVariantNotFound = function (kitVariantId, productId) {
            TsLogging.LoggerBase.writeEvent("viewsMerchandisingProductDetailsKitVariantNotFound", 40914, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ProductDetailsViewController Kit Variant {0} not found as part of the variant information in product id {1}.");
        };
        RetailLogger.viewsMerchandisingProductDetailsFromRecommendation = function (trackingId, recordId) {
            TsLogging.LoggerBase.writeEvent("viewsMerchandisingProductDetailsFromRecommendation", 40915, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Product details loaded from product recommendation. Tracking ID: {0}. Record ID: {1}.");
        };
        RetailLogger.viewsMerchandisingProductDetailsAddToCart = function (trackingId, recordId) {
            TsLogging.LoggerBase.writeEvent("ViewsMerchandisingProductDetailsAddToCart", 40916, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "An item was added to the cart from the product details page. Tracking ID: {0}. Record ID: {1}.");
        };
        RetailLogger.viewsMerchandisingProductDetailsIsVisible = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewsMerchandisingProductDetailsIsVisible", 40917, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "The SimpleProductDetailsView is shown and visible.");
        };
        RetailLogger.viewsMerchandisingProductDetailsLoadingVariantSelectionStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewsMerchandisingProductDetailsLoadingVariantSelectionStarted", 40918, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Verbose, [EventKeywords[EventKeywords.Performance]], "", "", "Loading variant selection started.");
        };
        RetailLogger.viewsMerchandisingProductDetailsLoadingVariantSelectionSuccessful = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewsMerchandisingProductDetailsLoadingVariantSelectionSuccessful", 40919, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "Loading variant selection finished successfully.");
        };
        RetailLogger.viewsMerchandisingProductDetailsLoadingVariantSelectionFailed = function (correlationId, errorMessage) {
            TsLogging.LoggerBase.writeEvent("viewsMerchandisingProductDetailsLoadingVariantSelectionFailed", 40920, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Error, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "Loading variant selection failed. Error message = '{1}'");
        };
        RetailLogger.viewsMerchandisingPriceCheckViewGetPriceFinished = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("ViewsMerchandisingPriceCheckViewGetPriceFinished", 40930, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "The price for a specific item was successfully retrieved.");
        };
        RetailLogger.viewsMerchandisingCatalogsCatalogClicked = function (correlationId, catalogId, catalogName) {
            TsLogging.LoggerBase.writeEvent("ViewsMerchandisingCatalogsCatalogClicked", 40936, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry], EventKeywords[EventKeywords.Performance]], "", "", "A catalog was clicked in the Catalogs Page. Catalog ID: '{1}'. Catalog Name: '{2}'.");
        };
        RetailLogger.viewsMerchandisingCategoryForCatalogViewTitleNotFound = function (categoryId) {
            TsLogging.LoggerBase.writeEvent("viewsMerchandisingCategoryForCatalogViewTitleNotFound", 40937, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Category for catalog view title not found. Category ID: '{0}'.");
        };
        RetailLogger.viewsMerchandisingCategoriesViewLoaded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewsMerchandisingCategoriesViewLoaded", 40940, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry], EventKeywords[EventKeywords.Performance]], "", "", "The Categories Page was successfully loaded.");
        };
        RetailLogger.viewsCartCartViewPayQuickCash = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("ViewsCartCartViewPayQuickCash", 44000, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "Checking out with quick cash.");
        };
        RetailLogger.concludeTransactionHandlerShowPrintDialogFailed = function (errorCode, errorMessage, correlationId) {
            TsLogging.LoggerBase.writeEvent("concludeTransactionHandlerShowPrintDialogFailed", 44001, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "CartViewController showPrintDialog() failed: error message = '{1}'.");
        };
        RetailLogger.concludeTransactionHandlerPeripheralPaymentUnknown = function (tenderLineNumber, correlationId) {
            TsLogging.LoggerBase.writeEvent("concludeTransactionHandlerPeripheralPaymentUnknown", 44002, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Tender line number '{0}' failed to capture. Peripheral payment unknown");
        };
        RetailLogger.concludeTransactionHandlerCartCheckoutSuccessful = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("concludeTransactionHandlerCartCheckoutSuccessful", 44003, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "All Cart checkout logic completed successful");
        };
        RetailLogger.concludeTransactionHandlerCartCheckoutFailure = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("concludeTransactionHandlerCartCheckoutFailure", 44004, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Cart checkout failed");
        };
        RetailLogger.concludeTransactionHandlerCartConcludeTransactionStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("concludeTransactionHandlerCartConcludeTransactionStarted", 44005, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Begin Conclude Transaction");
        };
        RetailLogger.viewsCartCartViewCartConcludeTransactionSuccessful = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewsCartCartViewCartConcludeTransactionSuccessful", 44006, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Transaction concluded successfully");
        };
        RetailLogger.viewsCartCartViewCartConcludeTransactionFailure = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewsCartCartViewCartConcludeTransactionFailure", 44007, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Transaction failed to conclude successfully");
        };
        RetailLogger.concludeTransactionHandlerCartCapturingTenderlineFromPaymentTerminal = function (tenderLineNumber, correlationId) {
            TsLogging.LoggerBase.writeEvent("concludeTransactionHandlerCartCapturingTenderlineFromPaymentTerminal", 44008, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Capture tender line number '{0}' from payment terminal started");
        };
        RetailLogger.concludeTransactionHandlerCartCapturingTenderlineFromPaymentController = function (tenderLineNumber, correlationId) {
            TsLogging.LoggerBase.writeEvent("concludeTransactionHandlerCartCapturingTenderlineFromPaymentController", 44009, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Capture tender line number '{0}' from payment controller started");
        };
        RetailLogger.concludeTransactionHandlerCartEmailSetForReceipt = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("concludeTransactionHandlerCartEmailSetForReceipt", 44010, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Customer receipt email set");
        };
        RetailLogger.concludeTransactionHandlerMemoIssuedAndCartCheckoutSuccessful = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("concludeTransactionHandlerMemoIssuedAndCartCheckoutSuccessful", 44011, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Credit memo issued and Cart checkout logic completed successful");
        };
        RetailLogger.concludeTransactionHandlerMemoIssuedAndCartCheckoutFailure = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("concludeTransactionHandlerMemoIssuedAndCartCheckoutFailure", 44012, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Credit memo issued and cart checkout failed");
        };
        RetailLogger.concludeTransactionHandlerMemoIssuedAndCartCheckoutCancel = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("concludeTransactionHandlerMemoIssuedAndCartCheckoutCancel", 44013, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Credit memo issued and cart checkout cancelled");
        };
        RetailLogger.concludeTransactionHandlerCartCheckoutCancel = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("concludeTransactionHandlerCartCheckoutCancel", 44014, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Cart checkout cancelled");
        };
        RetailLogger.viewsCartCartViewCartConcludeTransactionCancel = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewsCartCartViewCartConcludeTransactionCancel", 44015, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Conclude transaction cancelled");
        };
        RetailLogger.viewsCartShowJournalViewRetrieveProductFailed = function (productId) {
            TsLogging.LoggerBase.writeEvent("viewsCartShowJournalViewRetrieveProductFailed", 44016, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ShowJournalViewController Failed to retrieve product with Id {0}.");
        };
        RetailLogger.viewsCartAddLineDiscountPercentStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewsCartAddLineDiscountPercentStarted", 44017, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "Add line discount percent started.");
        };
        RetailLogger.viewsCartAddLineDiscountPercentFinishedSuccessfully = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewsCartAddLineDiscountPercentFinishedSuccessfully", 44018, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "Add line discount percent finished successfully.");
        };
        RetailLogger.viewsCartAddLineDiscountPercentFailed = function (correlationId, errorMessage) {
            TsLogging.LoggerBase.writeEvent("viewsCartAddLineDiscountPercentFailed", 44019, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Error, [], "", "", "Add line discount percent failed: error message = '{1}'.");
        };
        RetailLogger.viewsCartAddLineDiscountAmountStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewsCartAddLineDiscountAmountStarted", 44020, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Add line discount amount started.");
        };
        RetailLogger.viewsCartAddLineDiscountAmountFinishedSuccessfully = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewsCartAddLineDiscountAmountFinishedSuccessfully", 44021, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance]], "", "", "Add line discount amount finished successfully.");
        };
        RetailLogger.viewsCartAddLineDiscountAmountFailed = function (correlationId, errorMessage) {
            TsLogging.LoggerBase.writeEvent("viewsCartAddLineDiscountAmountFailed", 44022, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Error, [], "", "", "Add line discount amount failed: error message = '{1}'.");
        };
        RetailLogger.printGiftReceiptFailure = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("printGiftReceiptFailure", 44023, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Print gift receipt if required failed.");
        };
        RetailLogger.viewsCartButtonGridOperationExecutionStarted = function (correlationId, operationId, actionProperty) {
            TsLogging.LoggerBase.writeEvent("viewsCartButtonGridOperationExecutionStarted", 44024, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Operation with id '{1}' executed from button click on the cart page.");
        };
        RetailLogger.printDeclinedOrVoidedCardPaymentReceiptsSkipped = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("printDeclinedOrVoidedCardPaymentReceiptsSkipped", 44025, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "The print declined or voided card payment receipts request skipping printing receipts as there are no printable receipts. Correlation id: {0}.");
        };
        RetailLogger.printDeclinedOrVoidedCardPaymentReceiptsCancelledDueToInvalidTenderLine = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("printDeclinedOrVoidedCardPaymentReceiptsCancelledDueToInvalidTenderLine", 44026, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "The print declined or voided card payment receipts request was cancelled as the tenderline was null or invalid. Correlation id: {0}.");
        };
        RetailLogger.printDeclinedOrVoidedCardPaymentReceiptsFailed = function (correlationId, errors) {
            TsLogging.LoggerBase.writeEvent("printDeclinedOrVoidedCardPaymentReceiptsFailed", 44027, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Error, [], "", "", "The print declined or voided card payment receipts request failed while attempting to printing receipts. Correlation id: {0}. Error: {1}");
        };
        RetailLogger.viewsControlsModalDialogRendered = function (controlName) {
            TsLogging.LoggerBase.writeEvent("ViewsControlsModalDialogRendered", 44110, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "The {0} has been successfully rendered.");
        };
        RetailLogger.viewsControlsRefinersApplyFilters = function () {
            TsLogging.LoggerBase.writeEvent("ViewsControlsRefinersApplyFilters", 44116, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "The 'Apply Filters' button on the filter nav bar was clicked.");
        };
        RetailLogger.viewsControlsRefinersTypeNotSupported = function (refiner) {
            TsLogging.LoggerBase.writeEvent("viewsControlsRefinersTypeNotSupported", 44118, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "RefinerControl Refiner Type Value not supported: data: {0}.");
        };
        RetailLogger.viewsControlsRefinersDisplayTemplateNotSupported = function (refiner) {
            TsLogging.LoggerBase.writeEvent("viewsControlsRefinersDisplayTemplateNotSupported", 44119, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "RefinerControl Refiner DisplayTemplate not supported: data: {0}.");
        };
        RetailLogger.viewsControlsRefinersWrongInputParameters = function (refiner) {
            TsLogging.LoggerBase.writeEvent("viewsControlsRefinersWrongInputParameters", 44120, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "RefinerControl Wrong input parameters: data: {0}.");
        };
        RetailLogger.viewsControlsPrintReceiptShown = function () {
            TsLogging.LoggerBase.writeEvent("ViewsControlsPrintReceiptShown", 44130, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "The Print Receipt dialog is shown.");
        };
        RetailLogger.viewsControlsPrintReceiptSkippedToPrintDirectly = function () {
            TsLogging.LoggerBase.writeEvent("viewsControlsPrintReceiptSkippedToPrintDirectly", 44131, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "The Print Receipt dialog was not shown and skipped to print directly.");
        };
        RetailLogger.viewsControlsPrintReceiptSkipped = function (numberOfPrintableReceipts) {
            TsLogging.LoggerBase.writeEvent("viewsControlsPrintReceiptSkipped", 44132, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "The Print Receipt dialog was not shown as configured. {0} receipts were ignored for printing.");
        };
        RetailLogger.viewsControlsPrintReceiptPrinted = function () {
            TsLogging.LoggerBase.writeEvent("ViewsControlsPrintReceiptPrinted", 44133, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "The receipts were printed.");
        };
        RetailLogger.voidTransactionOperationFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("voidTransactionOperationFailed", 44134, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "VoidTransactionOperation failed: error message = '{1}'.");
        };
        RetailLogger.viewsControlsCashbackDialogOnShowingParametersUndefined = function () {
            TsLogging.LoggerBase.writeEvent("viewsControlsCashbackDialogOnShowingParametersUndefined", 44140, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "CashbackDialog onShowing failed. Parameter options is null or undefined.");
        };
        RetailLogger.viewsControlsChangeDialogVisible = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewsControlsChangeDialogVisible", 44160, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "CashbackDialog is shown and visible.");
        };
        RetailLogger.viewsMerchandisingAllStoresViewConstructorArgumentUndefined = function (argument) {
            TsLogging.LoggerBase.writeEvent("viewsMerchandisingAllStoresViewConstructorArgumentUndefined", 44180, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "AllStoresView constructor: Argument '{0}' is null or undefined.");
        };
        RetailLogger.viewsMerchandisingPickingAndReceivingDetailsViewLoadJournalFailed = function (journalId) {
            TsLogging.LoggerBase.writeEvent("viewsMerchandisingPickingAndReceivingDetailsViewLoadJournalFailed", 44190, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "PickingAndReceivingDetailsView Failed to load journal with journal Id {0}.");
        };
        RetailLogger.viewsCustomerAddEditViewAddCustomerFailed = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewsCustomerAddEditViewAddCustomerFailed", 44200, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "CustomerAddEditView addCustomerToCart() failed. The Correlation Id: {0}.");
        };
        RetailLogger.viewsCustomerAddEditViewAddUpdateNewCustomerFailed = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewsCustomerAddEditViewAddUpdateNewCustomerFailed", 44201, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "CustomerAddEditView addUpdateNewCustomer() failed. The Correlation Id: {0}.");
        };
        RetailLogger.viewsCustomerPickUpInStoreViewBingMapsFaild = function (message) {
            TsLogging.LoggerBase.writeEvent("viewsCustomerPickUpInStoreViewBingMapsFaild", 44210, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "PickUpInStoreView Bing maps control Failed: {0}.");
        };
        RetailLogger.viewsCustomerPickUpInStoreViewBingMapsFailedToInitialize = function (message) {
            TsLogging.LoggerBase.writeEvent("viewsCustomerPickUpInStoreViewBingMapsFailedToInitialize", 44211, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "PickUpInStoreView Bing maps control failed to initialize: {0}.");
        };
        RetailLogger.viewsCustomerAddressAddEditViewDownloadTaxGroupsFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("viewsCustomerAddressAddEditViewDownloadTaxGroupsFailed", 44220, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "AddressAddEditView Failed when downloading sales tax groups: error message = '{1}'.");
        };
        RetailLogger.viewsDailyOperationsCashManagementViewOperationFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("viewsDailyOperationsCashManagementViewOperationFailed", 44230, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "CashManagementView operationSuccessCallback() failed: error message = '{1}'.");
        };
        RetailLogger.tenderDetailsInitializedFromDefault = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("tenderDetailsInitializedFromDefault", 44231, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Default tender details are populated on TenderCountingView.");
        };
        RetailLogger.tenderDetailsInitializedFromExtensions = function (correlationId, denominationDetails) {
            TsLogging.LoggerBase.writeEvent("tenderDetailsInitializedFromExtensions", 44232, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Tender details are populated from the extensions on TenderCountingView.Tender details: {1} ");
        };
        RetailLogger.navigatetoDenominationViewClicked = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("navigatetoDenominationViewClicked", 44233, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry], EventKeywords[EventKeywords.Performance]], "", "", "Navigate to denomination view clicked.");
        };
        RetailLogger.viewsControlsKnockoutCustomerCardDataPropertyRequired = function () {
            TsLogging.LoggerBase.writeEvent("viewsControlsKnockoutCustomerCardDataPropertyRequired", 44240, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "knockout.customerCard the data property is required.");
        };
        RetailLogger.viewsControlsKnockoutParallaxBackgroundElementRequired = function () {
            TsLogging.LoggerBase.writeEvent("viewsControlsKnockoutParallaxBackgroundElementRequired", 44241, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "knockout.parallax A parallax background element class, id, or tagname is required.");
        };
        RetailLogger.viewsTutorialVideoDialogVideoElementThrowsError = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("viewsTutorialVideoDialogVideoElementThrowsError", 44260, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Video element at tutorial dialog failed to initialize due to missing Media Player, missing UI (e.g. PhantomJS) or some underlying OS error. Details: {0}.");
        };
        RetailLogger.viewModelCartVoidProductsStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelCartVoidProductsStarted", 44310, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry], EventKeywords[EventKeywords.Performance]], "", "", "Product void has started.");
        };
        RetailLogger.viewModelCartVoidProductsFinished = function (correlationId, success) {
            TsLogging.LoggerBase.writeEvent("viewModelCartVoidProductsFinished", 44311, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry], EventKeywords[EventKeywords.Performance]], "", "", "Product void has finished. Success: {1}.");
        };
        RetailLogger.viewModelCartGetProductDetailsFailed = function () {
            TsLogging.LoggerBase.writeEvent("viewModelCartGetProductDetailsFailed", 44312, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "CartViewModel getProductDetailsAsync() failed.");
        };
        RetailLogger.viewModelGetCustomerBalanceFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("viewModelGetCustomerBalanceFailed", 44313, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "CartViewModel getCustomerBalanceAsync() failed: error message = '{1}'.");
        };
        RetailLogger.viewModelGetCustomerLoyaltyCardsFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("viewModelGetCustomerLoyaltyCardsFailed", 44314, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "CartViewModel getCustomerLoyaltyCardsAsync() failed: error message = '{1}'.");
        };
        RetailLogger.viewModelUnsupportedBarcodeMaskType = function (maskType) {
            TsLogging.LoggerBase.writeEvent("viewModelUnsupportedBarcodeMaskType", 44315, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "CartViewModel a bar code with unsupported mask type, {0}, was scanned.");
        };
        RetailLogger.viewModelCartProcessItemScanResultStarted = function (correlationId, productType, numberOfCartlines) {
            TsLogging.LoggerBase.writeEvent("viewModelCartProcessItemScanResultStarted", 44316, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "CartViewModel processing scan result for item with product type {1} started with {2} cart lines in the cart.");
        };
        RetailLogger.viewModelCartProcessTextFinished = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelCartProcessTextFinished", 44317, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry], EventKeywords[EventKeywords.Performance]], "", "", "CartViewModel processing text finished successfully.");
        };
        RetailLogger.viewModelCartUpdateRecommendedProductsFailed = function (errors) {
            TsLogging.LoggerBase.writeEvent("viewModelCartUpdateRecommendedProductsFailed", 44318, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Update recommended products failed.");
        };
        RetailLogger.viewModelCartRecommendedProductsView = function (trackingId, numberOfCartItems, numberOfRecommendedProducts) {
            TsLogging.LoggerBase.writeEvent("viewModelCartRecommendedProductsView", 44319, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Product recommendations loaded with Tracking ID '{0}'. Number of cart items: {1}. Number of recommended products: {2}.");
        };
        RetailLogger.viewModelCartViewRecommendedProductDetails = function (trackingId, recordId) {
            TsLogging.LoggerBase.writeEvent("viewModelCartViewRecommendedProductDetails", 44320, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Product recommendation clicked from the Cart page. Tracking ID '{0}'. Record ID: {1}..");
        };
        RetailLogger.viewModelCartProcessTextStarted = function (correlationId, textToProcess) {
            TsLogging.LoggerBase.writeEvent("viewModelCartProcessTextStarted", 44321, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "CartViewModel processing text '{1}' started.");
        };
        RetailLogger.viewModelCartProcessTextFailed = function (correlationId, errors) {
            TsLogging.LoggerBase.writeEvent("viewModelCartProcessTextFailed", 44322, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "CartViewModel processing text failed. Errors: {1}");
        };
        RetailLogger.viewModelCartProcessCustomerScanResultStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelCartProcessCustomerScanResultStarted", 44323, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "CartViewModel processing scan result for customer started.");
        };
        RetailLogger.viewModelCartProcessLoyaltyCardScanResultStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelCartProcessLoyaltyCardScanResultStarted", 44324, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "CartViewModel processing scan result for loyalty card started.");
        };
        RetailLogger.viewModelCartProcessDiscountCodeScanResultStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelCartProcessDiscountCodeScanResultStarted", 44325, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "CartViewModel processing scan result for discount code started.");
        };
        RetailLogger.concludeTransactionHandlerCartTenderLineUpdated = function (tenderLineNumber, tenderLineStatusValue, correlationId) {
            TsLogging.LoggerBase.writeEvent("concludeTransactionHandlerCartTenderLineUpdated", 44326, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Cart tender line updated to tender line number '{0}' with status value '{1}'");
        };
        RetailLogger.concludeTransactionHandlerCartTenderLineUpdateFailure = function (tenderLineNumber, tenderLineStatusValue, errorCode, correlationId) {
            TsLogging.LoggerBase.writeEvent("concludeTransactionHandlerCartTenderLineUpdateFailure", 44327, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Cart tender line failed to update to tender line number '{0}' with status value'{1}' with error code '{2}'");
        };
        RetailLogger.viewModelCartViewIsVisible = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelCartViewIsVisible", 44328, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "The CartView is shown and visible.");
        };
        RetailLogger.viewModelCartViewAsynchronousProcessingIsCompletedAndViewIsReady = function () {
            TsLogging.LoggerBase.writeEvent("viewModelCartViewAsynchronousProcessingIsCompletedAndViewIsReady", 44329, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [EventKeywords[EventKeywords.Performance]], "", "", "The asynchronous processing on the CartView has completed and the CartView is ready for user input (no longer showing indeterminate wait).");
        };
        RetailLogger.viewModelCartUpdateHasCompleted = function () {
            TsLogging.LoggerBase.writeEvent("viewModelCartUpdateHasCompleted", 44330, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [EventKeywords[EventKeywords.Performance]], "", "", "A new cart in the CartViewModel has been updated.");
        };
        RetailLogger.viewModelCartProcessCouponCodeScanResultStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelCartProcessCouponCodeScanResultStarted", 44331, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "CartViewModel processing scan result for coupon code started.");
        };
        RetailLogger.concludeTransactionHandlerCartTenderLineUpdatePreprocessedTenderLineConnectivityError = function (tenderLineNumber, tenderLineStatusValue, errorCode, correlationId) {
            TsLogging.LoggerBase.writeEvent("concludeTransactionHandlerCartTenderLineUpdatePreprocessedTenderLineConnectivityError", 44332, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Connectivity error on updating the preprocessed tender line on the cart. Tender line number '{0}' with status value'{1}' with error code '{2}'");
        };
        RetailLogger.viewModelLoginDeviceActivationFailed = function (deviceId, terminalId, errorResourceIds) {
            TsLogging.LoggerBase.writeEvent("ViewModelLoginDeviceActivationFailed", 44400, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "The device activation call failed for device {0}, terminal {1} due to {2}.");
        };
        RetailLogger.viewModelLoginRetrieveUserAuthenticationTokenFailed = function (tokenResourceId, errorDetails) {
            TsLogging.LoggerBase.writeEvent("ViewModelLoginRetrieveUserAuthenticationTokenFailed", 44401, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Retrieving user authentication token for resource identifier '{0}' failed with error: {1}.");
        };
        RetailLogger.viewModelLoginRetrieveDeviceInformationFailed = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("ViewModelLoginRetrieveDeviceInformationFailed", 44403, 2, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The device token and/or device identifier could not be found in persistent store during logon attempt. The Correlation Id: {0}");
        };
        RetailLogger.viewModelLoginFailed = function (errorCode, errorMessage, correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelLoginFailed", 44404, 2, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "LoginViewModel Logon failed: error message = '{1}'. The Correlation Id: {2}");
        };
        RetailLogger.viewModelLoginTenantIdEmptyOrNotFound = function (tenantIdAApplicationStorageKey, tenantId) {
            TsLogging.LoggerBase.writeEvent("viewModelLoginTenantIdNotFound", 44405, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The tenant identifier found in the application storage mapped to the key = '{0}' has value = '{1}'.");
        };
        RetailLogger.viewModelLoginAuthenticateUserFailed = function (errorDetails) {
            TsLogging.LoggerBase.writeEvent("ViewModelLoginAuthenticateUserFailed", 44406, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Authenticating user failed with error: {0}.");
        };
        RetailLogger.viewModelLoginLoadingBackgroundImagesFailed = function (errorDetails) {
            TsLogging.LoggerBase.writeEvent("viewModelLoginLoadingBackgroundImagesFailed", 44407, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Loading the application's background images failed with error: {0}.");
        };
        RetailLogger.viewModelLoginLoadingChannelConfigInOfflineModeFailed = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelLoginLoadingChannelConfigInOfflineModeFailed", 44408, 2, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Switched to online since loading channel configuration failed in offline mode. The Correlation Id: {0}");
        };
        RetailLogger.viewModelLoginUnlockRegisterFailed = function (errorDetails, correlationId) {
            TsLogging.LoggerBase.writeEvent("ViewModelLoginUnlockRegisterFailed", 44409, 2, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Failed to unlock the register. Errors: '{0}'. The Correlation Id: {1}");
        };
        RetailLogger.viewModelLoginExtendedLogon = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("ViewModelLoginExtendedLogon", 44410, 2, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "User is using extended logon. The Correlation Id: {0}");
        };
        RetailLogger.viewModelDeleteExpiredSessionFailed = function (statusText) {
            TsLogging.LoggerBase.writeEvent("ViewModelDeleteExpiredSessionFailed", 44500, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "The request to delete expired session records failed with error: {0}.");
        };
        RetailLogger.viewModelRetrieveBlobStorageUriFailed = function () {
            TsLogging.LoggerBase.writeEvent("ViewModelRetrieveBlobStorageUriFailed", 44501, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed to retrieve download session url from blob storage. Some download sessions are failed to download.");
        };
        RetailLogger.viewModelGetTerminalIdFailed = function () {
            TsLogging.LoggerBase.writeEvent("ViewModelGetTerminalIdFailed", 44502, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed to get terminalId.");
        };
        RetailLogger.viewModelGetTerminalDataStoreNameFailed = function (terminalId) {
            TsLogging.LoggerBase.writeEvent("ViewModelGetTerminalDataStoreNameFailed", 44503, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "AsyncServiceViewModel.GetTerminalDataStoreNameAsync(), Failed to get data store name by terminalId: {0}.");
        };
        RetailLogger.viewModelGetDownloadIntervalFailed = function (dataStoreName) {
            TsLogging.LoggerBase.writeEvent("ViewModelGetDownloadIntervalFailed", 44504, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "AsyncServiceViewModel.GetDownloadIntervalAsync(), Failed to get download interval from data store name: {0 }.");
        };
        RetailLogger.viewModelCheckInitialSyncFailed = function (statusText) {
            TsLogging.LoggerBase.writeEvent("ViewModelCheckInitialSyncFailed", 44505, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "CheckInitialDataSyncResponseMessage: {0}.");
        };
        RetailLogger.viewModelGetDownloadSessionsFailed = function (dataStoreName, errorMessage) {
            TsLogging.LoggerBase.writeEvent("ViewModelGetDownloadSessionsFailed", 44506, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "AsyncServiceViewModel.GetDownloadSessionsAsync(), Failed to get download sessions from data store name: {0}. Error message: {1}");
        };
        RetailLogger.viewModelDownloadFileFailed = function (statusText) {
            TsLogging.LoggerBase.writeEvent("ViewModelDownloadFileFailed", 44507, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "DownloadFileResponseMessage: {0}.");
        };
        RetailLogger.viewModelDownloadFileBrokerRequestFailed = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("ViewModelDownloadFileBrokerRequestFailed", 44508, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Microsoft.Dynamics.Commerce.ClientBroker.DownloadFileRequest.executeAsync() Failed. Errors: {0}");
        };
        RetailLogger.viewModelApplyToOfflineDbFailed = function (statusText) {
            TsLogging.LoggerBase.writeEvent("ViewModelApplyToOfflineDbFailed", 44509, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "AsyncClientResponseMessage: {0}");
        };
        RetailLogger.viewModelApplyToOfflineDbBrokerRequestFailed = function (statusText) {
            TsLogging.LoggerBase.writeEvent("ViewModelApplyToOfflineDbBrokerRequestFailed", 44510, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Microsoft.Dynamics.Commerce.ClientBroker.ApplyToOfflineDatabaseRequest.executeAsync(() Failed. Errors: {0}");
        };
        RetailLogger.viewModelUpdateDownloadSessionStatusBrokerRequestFailed = function (statusText) {
            TsLogging.LoggerBase.writeEvent("ViewModelUpdateDownloadSessionStatusBrokerRequestFailed", 44511, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "AsyncClientResponseMessage: {0}");
        };
        RetailLogger.viewModelUpdateDownloadSessionStatusFailed = function () {
            TsLogging.LoggerBase.writeEvent("ViewModelUpdateDownloadSessionStatusFailed", 44512, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "AsyncServiceViewModel.UpdateDownloadSessionAsync(), Failed to update download session status");
        };
        RetailLogger.viewModelGetUploadIntervalFailed = function (dataStoreName) {
            TsLogging.LoggerBase.writeEvent("ViewModelGetUploadIntervalFailed", 44513, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "AsyncServiceViewModel.GetUploadIntervalAsync(), Failed to get upload interval for data store name: {0}");
        };
        RetailLogger.viewModelGetUploadJobDefinitionsFailed = function (dataStoreName) {
            TsLogging.LoggerBase.writeEvent("ViewModelGetUploadJobDefinitionsFailed", 44514, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "AsyncServiceViewModel.GetUploadJobDefinitionsAsync(), Failed to get upload job definitions for data store name: {0}");
        };
        RetailLogger.viewModelLoadUploadTransactionsFailed = function (statusText) {
            TsLogging.LoggerBase.writeEvent("ViewModelLoadUploadTransactionsFailed", 44515, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "LoadUploadTransactionResponseMessage: {0}");
        };
        RetailLogger.viewModelSyncOfflineTransactionsFailed = function () {
            TsLogging.LoggerBase.writeEvent("ViewModelSyncOfflineTransactionsFailed", 44516, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "AsyncServiceViewModel.SyncOfflineTransactionAsync(), Failed to post offline transaction data.");
        };
        RetailLogger.viewModelPurgeOfflineTransactionsFailed = function (statusText) {
            TsLogging.LoggerBase.writeEvent("ViewModelPurgeOfflineTransactionsFailed", 44517, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "AsyncClientResponseMessage: {0}.");
        };
        RetailLogger.viewModelGetDownloadLinkFailed = function (dataStoreName, downloadSessionId) {
            TsLogging.LoggerBase.writeEvent("ViewModelGetDownloadLinkFailed", 44518, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "AsyncServiceViewModel.GetDownloadLinkAsync(), Failed to get download link from data store name: {0} and download session id: {1}.");
        };
        RetailLogger.viewModelGetOfflineSyncStatsFailed = function (statusText) {
            TsLogging.LoggerBase.writeEvent("ViewModelGetOfflineSyncStatsFailed", 44519, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed to load offline sync records from offline database. Error message: {0}.");
        };
        RetailLogger.viewModelCheckIfInitialFullPackageRequiredFailed = function (statusText) {
            TsLogging.LoggerBase.writeEvent("ViewModelCheckIfInitialFullPackageRequiredFailed", 44520, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed to check if initial full sync package has been requested after database upgrade. Error message: {0}.");
        };
        RetailLogger.viewModelGetInitialDownloadSessionsFailed = function (dataStoreName, errorMessage) {
            TsLogging.LoggerBase.writeEvent("ViewModelGetInitialDownloadSessionsFailed", 44521, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed to get initial download sessions from data store name: {0}. Error message: {1}");
        };
        RetailLogger.viewModelUpdateFullPackageIsRequestedFailed = function (statusText) {
            TsLogging.LoggerBase.writeEvent("ViewModelUpdateFullPackageIsRequestedFailed", 44522, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed to update the flag in offline database which indicates if initial full sync package has been requested after database upgrade. Error message: {0}.");
        };
        RetailLogger.viewModelCheckInitialFullPackageRequiredFailed = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("ViewModelCheckInitialFullPackageRequiredFailed", 44523, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed to check if initial full sync package has been requested after database upgrade. Error message: {0}.");
        };
        RetailLogger.viewModelProcessCDXDataPackageFailed = function (statusText) {
            TsLogging.LoggerBase.writeEvent("ViewModelProcessCDXDataPackageFailed", 44524, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "The request to process serialized CDX data package failed with error: {0}.");
        };
        RetailLogger.stripMasterDataFailed = function (dataStoreName, statusText) {
            TsLogging.LoggerBase.writeEvent("stripMasterDataFailed", 44525, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Failed to strip irrelevant or expired master data from offline database: {0}. Status: {1}.");
        };
        RetailLogger.stripMasterDataBrokerRequestFailed = function (dataStoreName) {
            TsLogging.LoggerBase.writeEvent("stripMasterDataBrokerRequestFailed", 44526, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Microsoft.Dynamics.Commerce.ClientBroker.stripMasterData.executeAsync() failed on offline database: {0}.");
        };
        RetailLogger.viewModelProductDetailsComponentsNotInKit = function () {
            TsLogging.LoggerBase.writeEvent("viewModelProductDetailsComponentsNotInKit", 44600, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "ProductDetailsViewModel Components are not defined for this kit.");
        };
        RetailLogger.viewModelProductDetailsKitVariantNotFound = function (kitVariantId, productId) {
            TsLogging.LoggerBase.writeEvent("viewModelProductDetailsKitVariantNotFound", 44601, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "ProductDetailsViewModel Kit Variant {0} not found as part of the variant information in product id {1}.");
        };
        RetailLogger.viewModelProductDetailsLoadRecommendedProductsFailed = function (errors) {
            TsLogging.LoggerBase.writeEvent("viewModelProductDetailsLoadRecommendedProductsFailed", 44602, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [EventKeywords[EventKeywords.Telemetry]], "", "", "Load product recommendations failed on Product Details Page with error: {0}.");
        };
        RetailLogger.viewModelProductDetailsLoadRecommendedProductsSucceeded = function (trackingId, numberOfProductsRetrieved, numberOfProductsShown) {
            TsLogging.LoggerBase.writeEvent("viewModelProductDetailsLoadRecommendedProductsSucceeded", 44603, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Product recommendations where successfully loaded on Product Details Page. Tracking ID: {0}.");
        };
        RetailLogger.viewModelProductDetailsSeeAllRecommendedProductsLinkClicked = function (trackingId, numberOfProductsRetrieved, numberOfProductsShown) {
            TsLogging.LoggerBase.writeEvent("viewModelProductDetailsSeeAllRecommendedProductsLinkClicked", 44604, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "See all recommended products link clicked on Product Details Page. Tracking ID: {0}.");
        };
        RetailLogger.viewModelProductDetailsLoadProductDetailsFailed = function (correlationId, productId, errors) {
            TsLogging.LoggerBase.writeEvent("viewModelProductDetailsLoadProductDetailsFailed", 44605, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [EventKeywords[EventKeywords.Telemetry]], "", "", "Load product details for product id {1} failed with error: {2}.");
        };
        RetailLogger.viewModelProductDetailsLoadProductDetailsProductNotFound = function (correlationId, productId, channelId) {
            TsLogging.LoggerBase.writeEvent("viewModelProductDetailsLoadProductDetailsProductNotFound", 44606, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [EventKeywords[EventKeywords.Telemetry]], "", "", "Product details for product id {1} not found in channel id {2}.");
        };
        RetailLogger.viewModelProductDetailsLoadStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelProductDetailsLoadStarted", 44607, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "SimpleProductDetailsView load has started.");
        };
        RetailLogger.viewModelProductDetailsLoadCompleted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelProductDetailsLoadCompleted", 44608, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "SimpleProductDetailsView load has completed.");
        };
        RetailLogger.viewModelKitDisassemblyRetrievedKitProduct = function () {
            TsLogging.LoggerBase.writeEvent("viewModelKitDisassemblyRetrievedKitProduct", 44700, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "KitDisassemblyViewModel Retrieved kit product.");
        };
        RetailLogger.viewModelKitDisassemblyKitDisassemblyBlocked = function () {
            TsLogging.LoggerBase.writeEvent("viewModelKitDisassemblyKitDisassemblyBlocked", 44701, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "KitDisassemblyViewModel Kit is blocked from being disassembled at a register.");
        };
        RetailLogger.viewModelAddressAddEditGetAddressFromZipCodeFailed = function () {
            TsLogging.LoggerBase.writeEvent("viewModelAddressAddEditGetAddressFromZipCodeFailed", 44800, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "AddressAddEditViewModel getAddressFromZipCodeAsync() failed.");
        };
        RetailLogger.viewModelGetAffiliationsFailed = function () {
            TsLogging.LoggerBase.writeEvent("viewModelGetAffiliationsFailed", 44900, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "AffiliationsViewModel getAffiliationsAsync() failed.");
        };
        RetailLogger.viewModelPriceCheckGetProductPriceFailed = function (errorCode, errorMessage, correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelPriceCheckGetProductPriceFailed", 45003, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "PriceCheckViewModel load.getProductPrice() failed when getting product price: error message = '{1}'.");
        };
        RetailLogger.viewModelPriceCheckGetCustomerFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("viewModelPriceCheckGetCustomerFailed", 45004, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "PriceCheckViewModel load.getCustomer() failed when getting customer: error message = '{1}'.");
        };
        RetailLogger.viewModelPriceCheckGetStoreDetailsFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("viewModelPriceCheckGetStoreDetailsFailed", 45005, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "PriceCheckViewModel load.getStoreDetailsAsync() failed when getting store: error message = '{1}'.");
        };
        RetailLogger.viewModelPriceCheckGetActivePriceFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("viewModelPriceCheckGetActivePriceFailed", 45006, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "PriceCheckViewModel load.getProductPrice() failed when getting product price: error code = '{0}', error message = '{1}'.");
        };
        RetailLogger.viewModelPriceCheckSearchProductStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelPriceCheckSearchProductStarted", 45007, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry], EventKeywords[EventKeywords.Performance]], "", "", "PriceCheckViewModel - Search products started.");
        };
        RetailLogger.viewModelPriceCheckSearchProductSucceeded = function (correlationId, numberOfProducts) {
            TsLogging.LoggerBase.writeEvent("viewModelPriceCheckSearchProductSucceeded", 45008, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry], EventKeywords[EventKeywords.Performance]], "", "", "PriceCheckViewModel - Search products completed successfully.");
        };
        RetailLogger.viewModelPriceCheckSearchProductFailed = function (correlationId, errorMessage) {
            TsLogging.LoggerBase.writeEvent("viewModelPriceCheckSearchProductFailed", 45009, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "PriceCheckViewModel - Search products failed. error: '{1}'.");
        };
        RetailLogger.viewModelPriceCheckSearchText = function (searchText, correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelPriceCheckSearchText", 45010, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "PriceCheckViewModel - Search product. Text: '{0}'.");
        };
        RetailLogger.viewModelPriceCheckSearchProductCanceled = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelPriceCheckSearchProductCanceled", 45011, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry], EventKeywords[EventKeywords.Performance]], "", "", "PriceCheckViewModel - Search products canceled.");
        };
        RetailLogger.viewModelPaymentCardSwipeNotSupported = function (operationId) {
            TsLogging.LoggerBase.writeEvent("viewModelPaymentCardSwipeNotSupported", 45100, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "PaymentViewModel Card swipe is not supported for payment operation id {0}.");
        };
        RetailLogger.viewModelPaymentGetGiftCardAsyncUndefinedCardType = function (tenderTypeId) {
            TsLogging.LoggerBase.writeEvent("viewModelPaymentGetGiftCardAsyncUndefinedCardType", 45101, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "PaymentViewModel Gift Card type not found for tender type Id {0}.");
        };
        RetailLogger.viewModelPaymentGetGiftCardAsyncRetrievePrivateTenderFailed = function (tenderTypeId) {
            TsLogging.LoggerBase.writeEvent("viewModelPaymentGetGiftCardAsyncRetrievePrivateTenderFailed", 45102, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "PaymentViewModel Payment terminal retrieve private tender failed with errors {0}.");
        };
        RetailLogger.viewModelPaymentGetGiftCardAsyncNoPaymentTerminalConfigured = function () {
            TsLogging.LoggerBase.writeEvent("viewModelPaymentGetGiftCardAsyncNoPaymentTerminalConfigured", 45103, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "PaymentViewModel Payment terminal not configured.");
        };
        RetailLogger.viewModelPaymentViewModelgetLoyaltyCardAsyncStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelPaymentViewModelgetLoyaltyCardAsyncStarted", 45104, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Call to get loyalty card with expiring points API started. The correlation id is '{0}'.");
        };
        RetailLogger.viewModelPaymentViewModelgetLoyaltyCardAsyncSucceeded = function (correlationId, loyaltyCardNumber) {
            TsLogging.LoggerBase.writeEvent("viewModelPaymentViewModelgetLoyaltyCardAsyncSucceeded", 45105, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Call to get loyalty card with expiring points API finished. Loyalty Card Number: '{1}'. The correlation id is '{0}'.");
        };
        RetailLogger.viewModelPaymentViewModelgetLoyaltyCardAsyncError = function (correlationId, errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("viewModelPaymentViewModelgetLoyaltyCardAsyncError", 45106, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Call to get loyalty card with expiring points API failed.  The correlation id is '{0}'. The error code is '{1}.' The error message is '{2}'.");
        };
        RetailLogger.viewModelPaymentViewModelGetMaxLoyaltyPointsToRedeemForTransactionBalanceAsyncStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelPaymentViewModelGetMaxLoyaltyPointsToRedeemForTransactionBalanceAsyncStarted", 45107, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Call to get max loyalty points to redeem for transaction balance API started. The correlation id is '{0}'.");
        };
        RetailLogger.viewModelPaymentViewModelGetMaxLoyaltyPointsToRedeemForTransactionBalanceAsyncSucceeded = function (correlationId, countOfRewardPointToRedeem, maxCurrencyValueOfLoyaltyPoints) {
            TsLogging.LoggerBase.writeEvent("viewModelPaymentViewModelGetMaxLoyaltyPointsToRedeemForTransactionBalanceAsyncSucceeded", 45108, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Call to get max loyalty points to redeem for transaction balance API finished. Count of Reward Points to Redeem: '{1}' Max Currency Value Of Loyalty Points: '{2}'. The correlation id is '{0}'.");
        };
        RetailLogger.viewModelPaymentViewModelGetMaxLoyaltyPointsToRedeemForTransactionBalanceAsyncError = function (correlationId, errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("viewModelPaymentViewModelGetMaxLoyaltyPointsToRedeemForTransactionBalanceAsyncError", 45109, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Call to get max loyalty points to redeem for transaction balance API failed.  The correlation id is '{0}'. The error code is '{1}.' The error message is '{2}'.");
        };
        RetailLogger.viewModelCustomerAddEditUnknownCustomerType = function (customerType) {
            TsLogging.LoggerBase.writeEvent("viewModelCustomerAddEditUnknownCustomerType", 45200, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "CustomerAddEditViewModel Unknown CustomerType: {0}.");
        };
        RetailLogger.viewModelStockCountDetailsSearchProductsByItemsFailed = function () {
            TsLogging.LoggerBase.writeEvent("viewModelStockCountDetailsSearchProductsByItemsFailed", 45300, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "StockCountDetailsViewModel Failed to do operation searchProductsByItemIdsAsync.");
        };
        RetailLogger.viewModelStoreOperationsGetCurrenciesForStoreFailed = function () {
            TsLogging.LoggerBase.writeEvent("viewModelStoreOperationsGetCurrenciesForStoreFailed", 45400, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "StoreOperationsViewModel getCurrenciesForCurrentStoreAsync() failed.");
        };
        RetailLogger.viewModelPickingAndReceivingDetailsSearchProductsByIdFailed = function () {
            TsLogging.LoggerBase.writeEvent("viewModelPickingAndReceivingDetailsSearchProductsByIdFailed", 45500, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "PickingAndReceivingDetailsViewModel Failed to do operation searchProductsByItemIdsAsync.");
        };
        RetailLogger.viewModelPickingAndReceivingDetailsEditQuantityStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelPickingAndReceivingDetailsEditQuantityStarted", 45501, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Edit quantity of product was started. The correlation id is {0}");
        };
        RetailLogger.viewModelPickingAndReceivingDetailsEditQuantityCompleted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelPickingAndReceivingDetailsEditQuantityCompleted", 45502, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Edit quantity of product was completed. The correlation id is {0}");
        };
        RetailLogger.viewModelPickingAndReceivingDetailsEditQuantityFailed = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelPickingAndReceivingDetailsEditQuantityFailed", 45503, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Edit quantity of product failed. The correlation id is {0}");
        };
        RetailLogger.viewModelPickingAndReceivingDetailsEditQuantityCanceled = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelPickingAndReceivingDetailsEditQuantityCanceled", 45504, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Edit quantity of product canceled. The correlation id is {0}");
        };
        RetailLogger.viewModelPickingAndReceivingDetailsAddProductStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelPickingAndReceivingDetailsAddProductStarted", 45505, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Add product was started. The correlation id is {0}");
        };
        RetailLogger.viewModelPickingAndReceivingDetailsAddProductCompleted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelPickingAndReceivingDetailsAddProductCompleted", 45506, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Add product was completed. The correlation id is {0}");
        };
        RetailLogger.viewModelPickingAndReceivingDetailsAddProductFailed = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelPickingAndReceivingDetailsAddProductFailed", 45507, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Add product failed. The correlation id is {0}");
        };
        RetailLogger.viewModelPickingAndReceivingDetailsAddProductCanceled = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelPickingAndReceivingDetailsAddProductCanceled", 45508, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Add product was canceled. The correlation id is {0}");
        };
        RetailLogger.cloudPosBrowserNotSupported = function (userAgentDetails, errorDetails) {
            TsLogging.LoggerBase.writeEvent("CloudPosBrowserNotSupported", 45600, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "The browser being used ({0}) is not supported. {1}.");
        };
        RetailLogger.coreOperationValidatorsNoCartOnCartValidator = function (src) {
            TsLogging.LoggerBase.writeEvent("operationValidatorFailed", 45800, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "OperationValidators validator {0} failed - Cart is undefined.");
        };
        RetailLogger.viewModelProductSearchViewModelSearchProductsByTextFailed = function (searchText, refinerValues, error) {
            TsLogging.LoggerBase.writeEvent("viewModelProductSearchViewModelSearchProductsByTextFailed", 46000, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Search by text failed. Search text: '{0}', Refiner values: '{1}', Error: {2}.");
        };
        RetailLogger.viewModelProductSearchViewModelGetRefinersByTextFailed = function (searchText, error) {
            TsLogging.LoggerBase.writeEvent("viewModelProductSearchViewModelGetRefinersByTextFailed", 46001, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Get refiners by text failed. Search text: '{0}' Error: {1}.");
        };
        RetailLogger.viewModelProductSearchViewModelGetRefinerValuesByTextFailed = function (searchText, refinerId, refinerSourceValue, error) {
            TsLogging.LoggerBase.writeEvent("viewModelProductSearchViewModelGetRefinerValuesByTextFailed", 46002, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Get refiner values by text failed. Search text: '{0}', Refiner Id: '{1}', Refiner source value: '{2}', Error: {3}.");
        };
        RetailLogger.viewModelProductSearchProductSearchPageLoadCompleted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelProductSearchProductSearchPageLoadCompleted", 46003, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "The product search from the search view completed loading a page.");
        };
        RetailLogger.viewModelProductSearchCustomerSearchPageLoadCompleted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelProductSearchCustomerSearchPageLoadCompleted", 46004, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "The customer search from the search view completed loading a page.");
        };
        RetailLogger.viewModelProductSearchViewModelGetRefinersByText = function (searchText) {
            TsLogging.LoggerBase.writeEvent("viewModelProductSearchViewModelGetRefinersByText", 46005, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance]], "", "", "Get refiners by text. Search text: '{0}'.");
        };
        RetailLogger.viewModelProductSearchViewModelSearchProducts = function (correlationId, searchText, pageSize, skip) {
            TsLogging.LoggerBase.writeEvent("viewModelProductSearchViewModelSearchProducts", 46006, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [EventKeywords[EventKeywords.Performance]], "", "", "Search text parameters.");
        };
        RetailLogger.viewModelProductSearchViewModelSearchProductsRefinerValue = function (correlationId, searchText, refinerValues) {
            TsLogging.LoggerBase.writeEvent("viewModelProductSearchViewModelSearchProductsRefinerValue", 46007, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [EventKeywords[EventKeywords.Performance]], "", "", "Search text refiner values.");
        };
        RetailLogger.viewModelProductsViewModelAddItemsToCart = function (itemDetails, isQuickSale) {
            TsLogging.LoggerBase.writeEvent("viewModelProductsViewModelAddItemsToCart", 46050, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "The 'Add Item' action in the Products view model has been initiated. Item details: {0}, Is quick sale: '{1}'");
        };
        RetailLogger.viewsModelProductsViewModelSearchProductsByCategoryFailed = function (categoryId, refinerValues, error) {
            TsLogging.LoggerBase.writeEvent("viewsModelProductsViewModelSearchProductsByCategoryFailed", 46051, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Search by category failed. Category Id: '{0}', Refiner values: '{1}', Error: {2}.");
        };
        RetailLogger.viewsModelProductsViewModelGetRefinersByCategoryFailed = function (categoryId, error) {
            TsLogging.LoggerBase.writeEvent("viewsModelProductsViewModelGetRefinersByCategoryFailed", 46052, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Get refiners by category failed. Category Id: '{0}', Error: {1}.");
        };
        RetailLogger.viewsModelProductsViewModelGetRefinerValuesByCategoryFailed = function (categoryId, refinerId, refinerSourceValue, error) {
            TsLogging.LoggerBase.writeEvent("viewsModelProductsViewModelGetRefinerValuesByCategoryFailed", 46053, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Get refiner values by category failed. Category Id: '{0}', Refiner Id: '{1}', Refiner source value: '{2}', Error: {3}.");
        };
        RetailLogger.viewModelProductsViewModelGetProductDetailsFailed = function (productSearchCriteria, error) {
            TsLogging.LoggerBase.writeEvent("viewModelProductsViewModelGetProductDetailsFailed", 46054, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Get product details by search criteria failed. Search criteria: {0}, Error: '{1}'");
        };
        RetailLogger.viewsModelProductsViewModelProductPageLoadCompleted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewsModelProductsViewModelProductPageLoadCompleted", 46055, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "Incremental product page load completed.");
        };
        RetailLogger.viewModelSearchViewModelAddCustomerToCartFailed = function (customerAccountNumber, error) {
            TsLogging.LoggerBase.writeEvent("viewModelSearchViewModelAddCustomerToCartFailed", 46100, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Add customer to cart failed. Customer account number: {0}, Error: {1}");
        };
        RetailLogger.viewModelSearchViewModelGetProductDetailsFailed = function (productSearchCriteria, error) {
            TsLogging.LoggerBase.writeEvent("viewModelSearchViewModelGetProductDetailsFailed", 46101, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Get product details by search criteria failed. Search criteria: {0}, Error: '{1}'");
        };
        RetailLogger.viewModelSearchViewModelFromRecommendation = function (trackingId, numberOfRecords) {
            TsLogging.LoggerBase.writeEvent("viewModelSearchViewModelFromRecommendation", 46102, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Search view loaded from product recommendation. Tracking ID: {0}.");
        };
        RetailLogger.viewModelSearchViewModelFromRecommendationAddToCart = function (trackingId, recordId) {
            TsLogging.LoggerBase.writeEvent("viewModelSearchViewModelFromRecommendationAddToCart", 46103, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "A recommended item was added to the cart from the search view page. Tracking ID: {0}. Record ID: {1}.");
        };
        RetailLogger.viewModelSearchViewModelLoadCustomersStarted = function () {
            TsLogging.LoggerBase.writeEvent("viewModelSearchViewModelLoadCustomersStarted", 46104, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance]], "", "", "Loading the customers on the SearchViewModel started.");
        };
        RetailLogger.viewModelSearchViewModelLoadCustomersFinished = function () {
            TsLogging.LoggerBase.writeEvent("viewModelSearchViewModelLoadCustomersFinished", 46105, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance]], "", "", "Loading the customers on the SearchViewModel finished.");
        };
        RetailLogger.viewModelSearchViewModelLoadProductsStarted = function () {
            TsLogging.LoggerBase.writeEvent("viewModelSearchViewModelLoadProductsStarted", 46106, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Loading the products on the SearchViewModel started.");
        };
        RetailLogger.viewModelSearchViewModelLoadProductsFinished = function () {
            TsLogging.LoggerBase.writeEvent("viewModelSearchViewModelLoadProductsFinished", 46107, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance]], "", "", "Loading products on the cart on the SearchViewModel finished successfully.");
        };
        RetailLogger.viewModelSearchViewModelRefineProductsStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelSearchViewModelRefineProductsStarted", 46108, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "Refining the products on the SearchViewModel started.");
        };
        RetailLogger.viewModelSearchViewModelAddItemsToCartFailed = function (correlationId, errors) {
            TsLogging.LoggerBase.writeEvent("viewModelSearchViewModelAddItemsToCartFailed", 46109, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Adding products to the cart on the SearchViewModel finished failed. Errors: {1} .");
        };
        RetailLogger.viewModelSearchViewModelAddItemsToCartFinished = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelSearchViewModelAddItemsToCartFinished", 46110, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance]], "", "", "Adding products to the cart on the SearchViewModel finished successfully.");
        };
        RetailLogger.viewModelSearchViewModelApplySelectedRefiners = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelSearchViewModelApplyRefinersStarted", 46111, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "Applying selected refiners started.");
        };
        RetailLogger.viewModelSearchViewModelInvokeSearch = function (from, to) {
            TsLogging.LoggerBase.writeEvent("viewModelSearchViewModelInvokeSearch", 46112, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Search has switched from {0} to {1}.");
        };
        RetailLogger.viewsMerchandisingSearchViewModelShowCustomerDetailsStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewsMerchandisingSearchViewModelShowCustomerDetailsStarted", 46113, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "Show customer details started.");
        };
        RetailLogger.viewModelShowJournalLoaded = function () {
            TsLogging.LoggerBase.writeEvent("viewModelShowJournalLoaded", 44050, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "The Show Journal view model has successfully loaded.");
        };
        RetailLogger.viewModelShowJournalSalesOrderDetailsLoaded = function (salesOrderId) {
            TsLogging.LoggerBase.writeEvent("viewModelShowJournalSalesOrderDetailsLoaded", 44051, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Sales order details loaded. Sales id: '{0}'");
        };
        RetailLogger.viewModelShowJournalSalesOrderDetailsLoadingCompleted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelShowJournalSalesOrderDetailsLoadingCompleted", 44052, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "Sales order details loading completed.");
        };
        RetailLogger.viewModelShowJournalSelectionChangedStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelShowJournalSelectionChangedStarted", 44053, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance]], "", "", "Show Journal view model - Selection change started.");
        };
        RetailLogger.viewModelShowJournalSelectionChangedFailed = function (correlationId, errors) {
            TsLogging.LoggerBase.writeEvent("viewModelShowJournalSelectionChangedFailed", 44054, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance]], "", "", "Show Journal view model - Selection change false.");
        };
        RetailLogger.viewModelShowJournalSelectionChangedSucceeded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelShowJournalSelectionChangedSucceeded", 44055, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance]], "", "", "Show Journal view model - Selection change succeeded.");
        };
        RetailLogger.viewModelExtensionCommandIntialized = function (commandId, extensionPublisher, extensionName, extensionVersion) {
            TsLogging.LoggerBase.writeEvent("viewModelExtensionCommandIntialized", 44060, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Extension command view model sent initialize message to extension command with id {0}. Extension Publisher: {1} - Extension Name: {2} - Extension Version: {3}");
        };
        RetailLogger.viewModelExtensionCommandExecuted = function (commandId, extensionPublisher, extensionName, extensionVersion) {
            TsLogging.LoggerBase.writeEvent("viewModelExtensionCommandExecuted", 44061, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Extension command view model sent execute message to extension command with id {0}. Extension Publisher: {1} - Extension Name: {2} - Extension Version: {3}");
        };
        RetailLogger.viewModelCustomControlViewModelIntializingCustomControl = function (controlId, extensionPublisher, extensionName, extensionVersion) {
            TsLogging.LoggerBase.writeEvent("viewModelCustomControlViewModelIntializingCustomControl", 44070, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "CustomControlViewModel is sending initialize message to custom control with id {0}. Extension Publisher: {1} - Extension Name: {2} - Extension Version: {3}");
        };
        RetailLogger.viewModelCustomControlViewModelCustomControlOnReadyFailed = function (controlId, exceptionData, extensionPublisher, extensionName, extensionVersion) {
            TsLogging.LoggerBase.writeEvent("viewModelCustomControlViewModelCustomControlOnReadyFailed", 44071, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Custom control with id {0} threw an exception during onReady. Exception details: {1} Extension Publisher: {2} - Extension Name: {3} - Extension Version: {4}");
        };
        RetailLogger.viewModelCustomControlViewModelSendingMessageToCustomControl = function (controlId, messageType, extensionPublisher, extensionName, extensionVersion) {
            TsLogging.LoggerBase.writeEvent("viewModelCustomControlViewModelSendingMessageToCustomControl", 44072, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "CustomControlViewModel is sending message type '{1}' to custom control with id {0}. Extension Publisher: {2} - Extension Name: {3} - Extension Version: {4}");
        };
        RetailLogger.viewModelExtensionMenuCommandIntialized = function (commandId, extensionPublisher, extensionName, extensionVersion) {
            TsLogging.LoggerBase.writeEvent("viewModelExtensionMenuCommandIntialized", 44080, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Extension menu command view model sent initialize message to extension menu command with id {0}. Extension Publisher: {1} - Extension Name: {2} - Extension Version: {3}");
        };
        RetailLogger.viewModelExtensionMenuCommandExecuted = function (commandId, extensionPublisher, extensionName, extensionVersion) {
            TsLogging.LoggerBase.writeEvent("viewModelExtensionMenuCommandExecuted", 44081, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Extension menu command view model sent execute message to extension menu command with id {0}. Extension Publisher: {1} - Extension Name: {2} - Extension Version: {3}");
        };
        RetailLogger.taskRecorderContinueRecording = function (sessionId, sessionName) {
            TsLogging.LoggerBase.writeEvent("TaskRecorderContinueRecording", 46150, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The session ID:{0}, Name:{1} - RecordingViewModel continueRecording()");
        };
        RetailLogger.taskRecorderPauseRecording = function (sessionId, sessionName) {
            TsLogging.LoggerBase.writeEvent("TaskRecorderPauseRecording", 46151, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The session ID:{0}, Name:{1} - RecordingViewModel pauseRecording()");
        };
        RetailLogger.taskRecorderStopRecording = function (sessionId, sessionName) {
            TsLogging.LoggerBase.writeEvent("TaskRecorderStopRecording", 46152, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The session ID:{0}, Name:{1} - RecordingViewModel stopRecording()");
        };
        RetailLogger.taskRecorderEndTask = function (sessionId, sessionName) {
            TsLogging.LoggerBase.writeEvent("TaskRecorderEndTask", 46153, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The session ID:{0}, Name:{1} - RecordingViewModel endTask()");
        };
        RetailLogger.taskRecorderHandleAction = function (actionText) {
            TsLogging.LoggerBase.writeEvent("TaskRecorderHandleAction", 46154, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "{0} - TaskRecorderEventListener handleAction()");
        };
        RetailLogger.taskRecorderScreenshotsUploadingFailed = function (errors) {
            TsLogging.LoggerBase.writeEvent("TaskRecorderScreenshotsUploadingFailed", 46155, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Screenshots uploading to Azure failed. Errors: {0} .");
        };
        RetailLogger.taskRecorderDownloadFile = function (sourceUrl, destinationPath) {
            TsLogging.LoggerBase.writeEvent("TaskRecorderDownloadFile", 46156, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Source url: {0} , Destination path: {1} . - TaskRecorderDownloadHelper downloadFile()");
        };
        RetailLogger.taskRecorderShowSaveDialog = function (suggestedFileName, fileTypeChoice) {
            TsLogging.LoggerBase.writeEvent("TaskRecorderShowSaveDialog", 46157, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Suggested file name: {0} , File type choice: {1} . - TaskRecorderDialogHelper showSaveDialog()");
        };
        RetailLogger.taskRecorderSavingFileFailed = function (errors) {
            TsLogging.LoggerBase.writeEvent("TaskRecorderSavingFileFailed", 46158, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Saving file failed. Errors: {0} .");
        };
        RetailLogger.taskRecorderSavingFileFinished = function (url) {
            TsLogging.LoggerBase.writeEvent("TaskRecorderSaveFileFinished", 46159, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Saving file was finished. URL: {0} . - TaskRecorderManager saveFile()");
        };
        RetailLogger.taskRecorderSavingFileCanceled = function (url) {
            TsLogging.LoggerBase.writeEvent("TaskRecorderSavingFileCanceled", 46160, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Saving file was canceled. URL: {0} . - TaskRecorderManager saveFile()");
        };
        RetailLogger.taskRecorderFileWasSaved = function (fileName) {
            TsLogging.LoggerBase.writeEvent("TaskRecorderFileWasSaved", 46161, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "File {0} was saved. - TaskRecorderDownloadHelper downloadFile()");
        };
        RetailLogger.taskRecorderSaveXMLFailed = function (sessionId, errors) {
            TsLogging.LoggerBase.writeEvent("taskRecorderSaveXMLFailed", 46162, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Some error occurred in exporting the XML file. Session id: {0}. Error details: {1}. - CompleteRecordingViewModel saveRecording()");
        };
        RetailLogger.taskRecorderSaveTrainingDocumentFailed = function (sessionId, errors) {
            TsLogging.LoggerBase.writeEvent("taskRecorderSaveTrainingDocumentFailed", 46163, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Some error occurred in exporting the word document. Session id: {0}. Error details: {1}. - CompleteRecordingViewModel saveWordDocument()");
        };
        RetailLogger.taskRecorderDeleteFolderFromLocalStorageFailed = function (folder, errors) {
            TsLogging.LoggerBase.writeEvent("taskRecorderDeleteFolderFromLocalStorageFailed", 46164, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Delete folder '{0}' from local storage failed. Errors: {1}.");
        };
        RetailLogger.taskRecorderSaveBpmPackageFailed = function (sessionId, errors) {
            TsLogging.LoggerBase.writeEvent("taskRecorderSaveBpmPackageFailed", 46165, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Some error occurred in exporting the BPM package. Session id: {0}. Error details: {1}. - CompleteRecordingViewModel saveBpmPackage()");
        };
        RetailLogger.taskRecorderSaveSessionAsRecordingBundleFailed = function (sessionId) {
            TsLogging.LoggerBase.writeEvent("taskRecorderSaveSessionAsRecordingBundleFailed", 46166, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Some error occurred in saving session as recording bundle. Session id: {0}. - CompleteRecordingViewModel saveToThisPC()");
        };
        RetailLogger.taskRecorderCommandArgumentsParseError = function (errorMessage, inputString) {
            TsLogging.LoggerBase.writeEvent("taskRecorderCommandArgumentsParseError", 46167, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "TaskRecorder couldn't parse command argument string. Error details: {0}. Input string: '{1}'.");
        };
        RetailLogger.viewsAsyncImageControlInvalidDefaultImage = function () {
            TsLogging.LoggerBase.writeEvent("viewsAsyncImageControlInvalidDefaultImage", 46300, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Invalid default image set. It is either null or undefined.");
        };
        RetailLogger.viewModelRelatedProductsViewModelLoadAsyncFailed = function (productId, errorMessage) {
            TsLogging.LoggerBase.writeEvent("viewModelRelatedProductsViewModelLoadAsyncFailed", 46310, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Loading the related products for product id {0} failed, Error: {1}");
        };
        RetailLogger.viewModelProductPriceViewModelLoadAsyncFailed = function (productId, errorMessage) {
            TsLogging.LoggerBase.writeEvent("viewModelProductPriceViewModelLoadAsyncFailed", 46320, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Updating price for product id {0} failed, Error: {1}");
        };
        RetailLogger.viewModelProductAttributesViewModelLoadAsyncFailed = function (productId, errorMessage) {
            TsLogging.LoggerBase.writeEvent("viewModelProductAttributesViewModelLoadAsyncFailed", 46330, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Loading product attributes for product id {0} failed, Error: {1}");
        };
        RetailLogger.viewModelProductAttributesViewModelUnsupportedAttributeType = function (attributeType, attributeId) {
            TsLogging.LoggerBase.writeEvent("viewModelProductAttributesViewModelUnsupportedAttributeType", 46331, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Unsupported attribute data type '{0}' loaded for attribute id {1}");
        };
        RetailLogger.viewModelProductImagesViewModelLoadAsyncFailed = function (productId, errorMessage) {
            TsLogging.LoggerBase.writeEvent("viewModelProductImagesViewModelLoadAsyncFailed", 46340, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Loading product images for product id {0} failed, Error: {1}");
        };
        RetailLogger.viewModelProductImagesViewModelImageValidationFailed = function (productId, failureCount) {
            TsLogging.LoggerBase.writeEvent("viewModelProductImagesViewModelImageValidationFailed", 46341, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Validating images for product id {0} failed, Failure count: {1}");
        };
        RetailLogger.viewModelProductImagesViewModelImageNoValidImage = function (productId) {
            TsLogging.LoggerBase.writeEvent("viewModelProductImagesViewModelImageNoValidImage", 46342, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "There was no valid image discovered for product id {0}. Image Urls do not exist or could not be accessed.");
        };
        RetailLogger.viewModelProductImagesViewModelImageValidationSucceeded = function (productId, imageCount) {
            TsLogging.LoggerBase.writeEvent("viewModelProductImagesViewModelImageValidationSucceeded", 46343, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Successfully loaded all {1} images for for product id {0}.");
        };
        RetailLogger.navigationStartEvent = function (originPageName, destinationPageName, correlationId) {
            TsLogging.LoggerBase.writeEvent("navigationStartEvent", 60000, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Navigating from: '{0}'. Navigating to '{1}'. Correlation Id: '{2}'. ");
        };
        RetailLogger.navigationEndEvent = function (originPageName, destinationPageName, correlationId) {
            TsLogging.LoggerBase.writeEvent("navigationEndEvent", 60001, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Navigated from: '{0}'. Navigated to '{1}'. Correlation Id: '{2}'. ");
        };
        RetailLogger.navigateBackStarted = function (originPageName, destinationPageName, correlationId) {
            TsLogging.LoggerBase.writeEvent("navigateBackStarted", 60002, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Navigate back started from: '{0}'. Navigating to '{1}'. Correlation Id: '{2}'. ");
        };
        RetailLogger.navigateBackFinished = function (originPageName, destinationPageName, correlationId) {
            TsLogging.LoggerBase.writeEvent("navigateBackFinished", 60003, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Navigate back finished from: '{0}'. Navigating to '{1}'. Correlation Id: '{2}'. ");
        };
        RetailLogger.navigateBackCanceled = function (originPageName, destinationPageName, correlationId) {
            TsLogging.LoggerBase.writeEvent("navigateBackCanceled", 60004, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Navigate back from: '{0}' to '{1}' was canceled. Correlation Id: '{2}'. ");
        };
        RetailLogger.viewsReturnTransactionViewEnableBarcodeScannerFailed = function () {
            TsLogging.LoggerBase.writeEvent("viewsReturnTransactionViewEnableBarcodeScannerFailed", 46350, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "ReturnTransactionView: Enable the barcode scanner failed.");
        };
        RetailLogger.viewsHeaderSplitViewCartDisplayTextUpdated = function (correlationId, displayText, numberOfCartLinesInCart) {
            TsLogging.LoggerBase.writeEvent("viewsHeaderSplitViewCartDisplayTextUpdated", 46360, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Verbose, [EventKeywords[EventKeywords.Performance]], "", "", "The cart item count display text on the header split view was updated. Display text: '{1}'.");
        };
        RetailLogger.viewsHeaderSplitViewProductCategorySelected = function (correlationId, productCategory) {
            TsLogging.LoggerBase.writeEvent("viewsHeaderSplitViewProductCategorySelected", 46362, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "Product category selected. Product category: '{1}'.");
        };
        RetailLogger.activitiesGetProductsRefinerRefinerDialogShown = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("activitiesGetProductsRefinerRefinerDialogShown", 46370, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "Refiner dialog populated and shown.");
        };
        RetailLogger.dialogsRefinerDialogButtonClicked = function (buttonOperation) {
            TsLogging.LoggerBase.writeEvent("dialogsRefinerDialogButtonClicked", 46380, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "The button for '{0}' was clicked.");
        };
        RetailLogger.viewsControlsDiscountDialogProcessingDiscount = function (discountValue) {
            TsLogging.LoggerBase.writeEvent("viewsControlsDiscountDialogProcessingDiscount", 46390, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [EventKeywords[EventKeywords.Performance]], "", "", "DiscountDialog: Start processing the discount. Discount: '{0}'");
        };
        RetailLogger.viewModelKitVariantSelectionViewModelKitComponentsLoaded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelKitVariantSelectionViewModelKitComponentsLoaded", 46400, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "Loading the product kit variants has completed.");
        };
        RetailLogger.viewsMerchandisingSearchViewShowCustomerDetailsStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewsMerchandisingSearchViewShowCustomerDetailsStarted", 46410, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Show customer details started or continued from the item response handler.");
        };
        RetailLogger.viewsMerchandisingSearchViewShowProductDetailsProduct = function (itemId) {
            TsLogging.LoggerBase.writeEvent("viewsMerchandisingSearchViewShowProductDetailsProduct", 46411, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [EventKeywords[EventKeywords.Performance]], "", "", "Show product details. Item ID: '{0}'");
        };
        RetailLogger.viewsMerchandisingSearchViewSwitchToProductTab = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewsMerchandisingSearchViewSwitchToProductTab", 46412, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "Switch to product tab on SearchView.");
        };
        RetailLogger.viewsMerchandisingSearchViewSwitchToCustomerTab = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewsMerchandisingSearchViewSwitchToCustomerTab", 46413, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "Switch to customer tab on SearchView.");
        };
        RetailLogger.viewsMerchandisingSearchViewShowCustomerDetails = function (customerData) {
            TsLogging.LoggerBase.writeEvent("viewsMerchandisingSearchViewShowCustomerDetails", 46414, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [EventKeywords[EventKeywords.Performance]], "", "", "Show customer details started. Customer: '{0}'");
        };
        RetailLogger.viewsMerchandisingSearchViewProductDataListElementNotFound = function (dataListId) {
            TsLogging.LoggerBase.writeEvent("viewsMerchandisingSearchViewProductDataListElementNotFound", 46415, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Error, [], "", "", "Unable to find the products data list element with id '{0}'.");
        };
        RetailLogger.viewsMerchandisingSearchViewProductDataListViewModelNotFound = function (dataListId) {
            TsLogging.LoggerBase.writeEvent("viewsMerchandisingSearchViewProductDataListViewModelNotFound", 46416, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Error, [], "", "", "Unable to find the products data list view model on element with id '{0}'.");
        };
        RetailLogger.viewsMerchandisingAdvancedSearchViewSearchClick = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewsMerchandisingAdvancedSearchViewSearchClick", 46417, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Advanced search has been initiated from the search view.");
        };
        RetailLogger.viewModelInventoryLookupViewModelFindInventoriesByKeywordStarted = function (correlationId, keyword) {
            TsLogging.LoggerBase.writeEvent("viewModelInventoryLookupViewModelFindInventoriesByKeywordStarted", 46430, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "Find inventories by keyword started. Keyword: '{1}'");
        };
        RetailLogger.viewModelInventoryLookupViewModelFindInventoriesByKeywordFinished = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelInventoryLookupViewModelFindInventoriesByKeywordFinished", 46431, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "Find inventories by keyword finished.");
        };
        RetailLogger.operationItemSaleOperationHandlerAddItems = function (itemsToAdd) {
            TsLogging.LoggerBase.writeEvent("operationItemSaleOperationHandlerAddItems", 46440, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [EventKeywords[EventKeywords.Performance]], "", "", "Items to add: {0}.");
        };
        RetailLogger.operationItemSaleOperationHandlerReturnItems = function (itemsToAdd) {
            TsLogging.LoggerBase.writeEvent("operationItemSaleOperationHandlerReturnItems", 46441, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [EventKeywords[EventKeywords.Performance]], "", "", "Items to return: {0}.");
        };
        RetailLogger.operationVoidProductsOperationHandlerVoidLines = function (lineNumbersToVoid) {
            TsLogging.LoggerBase.writeEvent("operationVoidProductsOperationHandlerVoidLines", 46450, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [EventKeywords[EventKeywords.Performance]], "", "", "Line numbers to void: {0}.");
        };
        RetailLogger.operationVoidProductsOperationHandlerUnvoidLines = function (lineNumbersToUnvoid) {
            TsLogging.LoggerBase.writeEvent("operationVoidProductsOperationHandlerUnvoidLines", 46451, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [EventKeywords[EventKeywords.Performance]], "", "", "Line numbers to unvoid: {0}.");
        };
        RetailLogger.controlsHeaderSearchSearchInitiated = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("controlsHeaderSearchSearchInitiated", 46460, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Performance], EventKeywords[EventKeywords.Telemetry]], "", "", "Search initiated in the header has started.");
        };
        RetailLogger.operationPayCashQuickPaymentAmount = function (amount) {
            TsLogging.LoggerBase.writeEvent("operationPayCashQuickPaymentAmount", 46480, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [EventKeywords[EventKeywords.Performance]], "", "", "Pay cash quick: payment amount: '{0}'.");
        };
        RetailLogger.viewModelCustomerCardViewModelNoAttributeDefinitionFound = function (attributeName, attributeType) {
            TsLogging.LoggerBase.writeEvent("viewModelCustomerCardViewModelNoAttributeDefinitionFound", 46490, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "No customer attribute found with name '{0}' and data type '{1}'");
        };
        RetailLogger.viewModelCustomerCardViewModelUnsupportedAttributeType = function (attributeType, attributeId) {
            TsLogging.LoggerBase.writeEvent("viewModelCustomerCardViewModelUnsupportedAttributeType", 46491, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Unsupported attribute data type '{0}' loaded for attribute id {1}");
        };
        RetailLogger.viewsMerchandisingProductsViewDataListElementNotFound = function (dataListId) {
            TsLogging.LoggerBase.writeEvent("viewsMerchandisingProductsViewDataListElementNotFound", 46500, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Error, [], "", "", "Unable to find the data list element with id '{0}'.");
        };
        RetailLogger.viewsMerchandisingProductsViewDataListViewModelNotFound = function (dataListId) {
            TsLogging.LoggerBase.writeEvent("viewsMerchandisingProductsViewDataListViewModelNotFound", 46501, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Error, [], "", "", "Unable to find the data list view model on element with id '{0}'.");
        };
        RetailLogger.activitiesSaveMerchantInformationCurrentState = function (hardwareProfileId, localMerchantInformationHash, merchantInformationExistsLocally, correlationId) {
            TsLogging.LoggerBase.writeEvent("activitiesSaveMerchantInformationCurrentState", 46510, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Retrieved current merchant information from local app storage and file system to determine whether to download and locally save new merchant information from the server. Hardware Profile ID: '{0}'. Local Merchant Information Hash: '{1}'. Local Merchant Information File Exists: '{2}'. Correlation Id: '{3}'.");
        };
        RetailLogger.activitiesSaveMerchantInformationRequestingFromServer = function (hardwareProfileId, localMerchantInformationHash, correlationId) {
            TsLogging.LoggerBase.writeEvent("activitiesSaveMerchantInformationRequestingFromServer", 46511, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Retrieving merchant information from the server. Hardware Profile ID: '{0}'. Local Merchant Information Hash: '{1}'. Correlation Id: '{2}'.");
        };
        RetailLogger.activitiesSaveMerchantInformationRequestedFromServerNotChanged = function (hardwareProfileId, correlationId) {
            TsLogging.LoggerBase.writeEvent("activitiesSaveMerchantInformationRequestedFromServerNotChanged", 46512, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Local merchant information hash matched the merchant information hash on the server so saving the merchant information data locally is not required. Hardware Profile ID: '{0}'. Correlation Id: '{1}'.");
        };
        RetailLogger.activitiesSaveMerchantInformationRequestedFromServerNotValid = function (hardwareProfileId, serverMerchantInformationHash, correlationId) {
            TsLogging.LoggerBase.writeEvent("activitiesSaveMerchantInformationRequestedFromServerNotValid", 46513, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Merchant information data retrieved from the server is not valid. Hardware Profile ID: '{0}'. Retail Server Merchant Information Hash: '{1}'. Correlation Id: '{2}'.");
        };
        RetailLogger.activitiesSaveMerchantInformationRequestedFromServerChanged = function (hardwareProfileId, serverMerchantInformationHash, correlationId) {
            TsLogging.LoggerBase.writeEvent("activitiesSaveMerchantInformationRequestedFromServerChanged", 46514, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Local merchant information hash did not match the merchant information hash on the server so saving the merchant information data downloaded from the server locally on disk. Hardware Profile ID: '{0}'. Retail Server Merchant Information Hash: '{1}'. Correlation Id: '{2}'.");
        };
        RetailLogger.activitiesSaveMerchantInformationFailedWithCommunicationException = function (hardwareProfileId, serverMerchantInformationHash, correlationId) {
            TsLogging.LoggerBase.writeEvent("activitiesSaveMerchantInformationRetailServerFailedWithCommunicationException", 46515, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The merchant information download failed due to communication exception between Retail Server and Real-time service call and recovering the logon. Hardware Profile ID: '{0}'. Retail Server Merchant Information Hash: '{1}'. Correlation Id: '{2}'.");
        };
        RetailLogger.activitiesSaveMerchantInformationDownloadFailed = function (hardwareProfileId, serverMerchantInformationHash, correlationId) {
            TsLogging.LoggerBase.writeEvent("activitiesSaveMerchantInformationDownloadFailed", 46516, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "The merchant information download failed due to exception from Retail server, please check the Retail server logs for more information. Hardware Profile ID: '{0}'. Retail Server Merchant Information Hash: '{1}'. Correlation Id: '{2}'.");
        };
        RetailLogger.viewModelReturnTransactionViewModelProcessBarcodeStarted = function (correlationId, barcodeText) {
            TsLogging.LoggerBase.writeEvent("viewModelReturnTransactionViewModelProcessBarcodeStarted", 46520, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "ReturnTransactionViewModel processing barcode started. Barcode '{1}'.");
        };
        RetailLogger.viewModelReturnTransactionViewModelProcessBarcodeFinished = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelReturnTransactionViewModelProcessBarcodeFinished", 46521, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "ReturnTransactionViewModel processing barcode finished.");
        };
        RetailLogger.viewModelReturnTransactionViewModelProcessBarcodeCanceled = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelReturnTransactionViewModelProcessBarcodeCanceled", 46522, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "ReturnTransactionViewModel processing barcode was canceled by the user.");
        };
        RetailLogger.viewModelReturnTransactionViewModelProcessBarcodeFailed = function (correlationId, errorDetails) {
            TsLogging.LoggerBase.writeEvent("viewModelReturnTransactionViewModelProcessBarcodeFailed", 46523, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ReturnTransactionViewModel processing barcode failed. Error: {1}");
        };
        RetailLogger.viewModelReturnTransactionViewModelProcessBarcodeFailedDueToUserError = function (correlationId, errorDetails) {
            TsLogging.LoggerBase.writeEvent("viewModelReturnTransactionViewModelProcessBarcodeFailedDueToUserError", 46524, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "ReturnTransactionViewModel processing barcode was failed due to user error. Error: {1}");
        };
        RetailLogger.viewModelReturnTransactionViewModelLoadAsyncStarted = function (correlationId, salesOrderId) {
            TsLogging.LoggerBase.writeEvent("viewModelReturnTransactionViewModelLoadAsyncStarted", 46525, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "ReturnTransactionViewModel loading started. Sales Order Id: '{1}'.");
        };
        RetailLogger.viewModelReturnTransactionViewModelLoadAsyncFinished = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelReturnTransactionViewModelLoadAsyncFinished", 46526, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "ReturnTransactionViewModel loading finished.");
        };
        RetailLogger.viewModelReturnTransactionViewModelLoadAsyncFailed = function (correlationId, errorDetails) {
            TsLogging.LoggerBase.writeEvent("viewModelReturnTransactionViewModelLoadAsyncFailed", 46527, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ReturnTransactionViewModel loading failed. Error: {1}");
        };
        RetailLogger.viewModelReturnTransactionViewModelGetUserInputAndSearchProductsStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelReturnTransactionViewModelGetUserInputAndSearchProductsStarted", 46528, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "ReturnTransactionViewModel prompting for user input and searching for product started.");
        };
        RetailLogger.viewModelReturnTransactionViewModelGetUserInputAndSearchProductsCanceled = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelReturnTransactionViewModelGetUserInputAndSearchProductsCanceled", 46529, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "ReturnTransactionViewModel prompting for user input and searching for product was canceled by the user.");
        };
        RetailLogger.viewModelReturnTransactionViewModelGetUserInputAndSearchProductsFinished = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelReturnTransactionViewModelGetUserInputAndSearchProductsFinished", 46530, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "ReturnTransactionViewModel prompting for user input and searching for product finished.");
        };
        RetailLogger.viewModelReturnTransactionViewModelGetUserInputAndSearchProductsFailed = function (correlationId, errorDetails) {
            TsLogging.LoggerBase.writeEvent("viewModelReturnTransactionViewModelGetUserInputAndSearchProductsFailed", 46531, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ReturnTransactionViewModel prompting for user input and searching for product failed. Error: {1}");
        };
        RetailLogger.viewModelReturnTransactionViewModelGetUserInputAndSearchOrderStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelReturnTransactionViewModelGetUserInputAndSearchOrderStarted", 46532, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "ReturnTransactionViewModel prompting for user input and searching for order started.");
        };
        RetailLogger.viewModelReturnTransactionViewModelGetUserInputAndSearchOrderCanceled = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelReturnTransactionViewModelGetUserInputAndSearchOrderCanceled", 46533, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "ReturnTransactionViewModel prompting for user input and searching for order was canceled by the user.");
        };
        RetailLogger.viewModelReturnTransactionViewModelGetUserInputAndSearchOrderFinished = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelReturnTransactionViewModelGetUserInputAndSearchOrderFinished", 46534, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "ReturnTransactionViewModel prompting for user input searching for order finished.");
        };
        RetailLogger.viewModelReturnTransactionViewModelGetUserInputAndSearchOrderFailed = function (correlationId, errorDetails) {
            TsLogging.LoggerBase.writeEvent("viewModelReturnTransactionViewModelGetUserInputAndSearchOrderFailed", 46535, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "ReturnTransactionViewModel prompting for user input and searching for order failed. Error: {1}");
        };
        RetailLogger.extensibilityFrameworkFailedToLoadPosApi = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkFailedToLoadPosApi", 46600, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed to load javascript for POS API. Error: {0}.");
        };
        RetailLogger.extensibilityFrameworkFailedToLoadExtensionLoader = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkFailedToLoadExtensionLoader", 46601, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed to load javascript for POS extension loader. Error: {0}.");
        };
        RetailLogger.extensibilityFrameworkErrorOccurredWhileLoadingExtensions = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkErrorOccurredWhileLoadingExtensions", 46602, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred while loading the POS extensions. Error: {0}.");
        };
        RetailLogger.extensibilityFrameworkGetExtensionsJsonSucceeded = function (extensionsJson) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkGetExtensionsJsonSucceeded", 46603, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Successfully retrieved the POS extensions.json: {0}.");
        };
        RetailLogger.extensibilityFrameworkGetExtensionsJsonFailed = function (errorMessage, status) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkGetExtensionsJsonFailed", 46604, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed to retrieve the POS extensions.json: error message = '{0}', status = '{1}'.");
        };
        RetailLogger.extensibilityFrameworkGetExtensionProfileSucceeded = function (extensionProfileJson) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkGetExtensionProfileSucceeded", 46605, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Successfully retrieved the POS extension profile: {0}.");
        };
        RetailLogger.extensibilityFrameworkGetExtensionProfileFailed = function (errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkGetExtensionProfileFailed", 46606, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed to retrieve the POS extension profile: error message = '{1}'.");
        };
        RetailLogger.extensibilityFrameworkFailedToLoadPosUISdk = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkFailedToLoadPosUISdk", 46607, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed to load javascript for POS UI SDK. Error: {0}.");
        };
        RetailLogger.extensibilityFrameworkFailedToLoadPosUISdkLoader = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkFailedToLoadPosUISdkLoader", 46608, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed to load javascript for POS UI SDK Loader. Error: {0}.");
        };
        RetailLogger.extensibilityFrameworkFailedToGetChannelConfiguration = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkFailedToGetChannelConfiguration", 46609, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed to get channel configuration. Error: {0}.");
        };
        RetailLogger.triggerHandlersLoaderTriggerLoadFailedDueToInvalidTriggerType = function (triggerType, packageName, packagePublisher, extensionPackageVersion, correlationId) {
            TsLogging.LoggerBase.writeEvent("triggerHandlersLoaderTriggerLoadFailedDueToInvalidTriggerType", 46610, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed to load trigger {0} due to invalid trigger type. Please update the trigger type to match a supported trigger type.");
        };
        RetailLogger.triggerHandlersLoaderTriggerLoadFailedTriggerTypeNotSet = function (packageName, publisher, extensionPackageVersion) {
            TsLogging.LoggerBase.writeEvent("triggerHandlersLoaderTriggerLoadFailedTriggerTypeNotSet", 46611, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed to load trigger defined in extension package {0} by publisher {1} because the trigger type was not set.");
        };
        RetailLogger.triggerHandlersLoaderTriggerLoadFailedDueToErrorImportingTriggerModule = function (triggerType, packageName, publisher, modulePath, errorMessage, correlationId) {
            TsLogging.LoggerBase.writeEvent("triggerHandlersLoaderTriggerLoadFailedDueToErrorImportingTriggerModule", 46612, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed to load trigger {0} defined in extension package {1} by publisher {2} due to an error when importing the trigger module. Module Path: {4}. Error: {5}.");
        };
        RetailLogger.triggerHandlersLoaderTriggerLoadFailedDueToInvalidTriggerImplementation = function (triggerType, packageName, publisher, extensionPackageVersion, correlationId) {
            TsLogging.LoggerBase.writeEvent("triggerHandlersLoaderTriggerLoadFailedDueToInvalidTriggerImplementation", 46613, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Trigger {0} defined in extension package {1} by publisher {2} not registered due to invalid trigger implementation. Triggers must derive from Trigger base class that corresponds the their trigger type.");
        };
        RetailLogger.triggerHandlersLoaderTriggerRegistered = function (triggerType, packageName, publisher, extensionPackageVersion, correlationId) {
            TsLogging.LoggerBase.writeEvent("triggerHandlersLoaderTriggerRegistered", 46614, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Trigger type {0} registered for extension package {1} by publisher {2}.");
        };
        RetailLogger.triggerHandlersLoaderTriggerLoadStarted = function (triggerType, packageName, publisher, extensionPackageVersion, correlationId) {
            TsLogging.LoggerBase.writeEvent("triggerHandlersLoaderTriggerLoadStarted", 46615, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Attempting to load trigger with type {0} for extension package {1} by publisher {2}.");
        };
        RetailLogger.extensionsLoaderInvalidExtensionPackageDiscoveredNoPublisher = function (baseUrl) {
            TsLogging.LoggerBase.writeEvent("extensionsLoaderInvalidExtensionPackageDiscoveredNoPublisher", 46620, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Extension package with base url {0} not registered because the package publisher was not provided.");
        };
        RetailLogger.extensionsLoaderInvalidExtensionPackageDiscoveredNoName = function (baseUrl) {
            TsLogging.LoggerBase.writeEvent("extensionsLoaderInvalidExtensionPackageDiscoveredNoName", 46621, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Extension package with base url {0} not registered because the package name was not provided..");
        };
        RetailLogger.extensionsLoaderInvalidExtensionPackageDiscoveredInvalidVersion = function (baseUrl, version) {
            TsLogging.LoggerBase.writeEvent("extensionsLoaderInvalidExtensionPackageDiscoveredInvalidVersion", 46622, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Extension package with base url {0} not registered because the package version, {1}, is invalid.  All versions must follow semantic versioning and provide at least a major and a minor version.");
        };
        RetailLogger.extensionsLoaderFailedToLoadExtensionPackageManifest = function (baseUrl, error) {
            TsLogging.LoggerBase.writeEvent("extensionsLoaderFailedToLoadExtensionPackageManifest", 46623, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed to load extension package manifest for package with base url {0}. Error: {1}.");
        };
        RetailLogger.extensionsLoaderLoadingExtensionsCompleted = function (extensionPackageCount, extensionPackageIds, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensionsLoaderLoadingExtensionsCompleted", 46624, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Extension loading completed after loading {0} extension packages. Loaded extension package IDs: {1}");
        };
        RetailLogger.extensionsLoaderValidManifestDiscovered = function (baseUrl) {
            TsLogging.LoggerBase.writeEvent("extensionsLoaderValidManifestDiscovered", 46625, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "Extensions loader discovered a valid manifest for extension package with base url {0}.");
        };
        RetailLogger.extensionsLoaderLoadingExtensionPackageCompleted = function (baseUrl, packageName, packagePublisher, extensionPackageVersion) {
            TsLogging.LoggerBase.writeEvent("extensionsLoaderLoadingExtensionPackageCompleted", 46626, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Extension package with base url {0} loaded. Package Name: {1}. Package Publisher: {2}. Package Version: {3}.");
        };
        RetailLogger.extensionsLoaderExtensionPointSummary = function (extensionPointType, extensionCount, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensionsLoaderExtensionPointSummary", 46627, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Extension loading complete for extension type {0}. {1} extensions were loaded.");
        };
        RetailLogger.extensionsLoaderLoadExtensionsStarted = function (extensionPackageCount, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensionsLoaderLoadExtensionsStarted", 46628, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Extension loading started. Extension package count: {0}");
        };
        RetailLogger.extensionsLoaderExtensionNotSupportedInCurrentRegion = function (currentRegion, baseUrl, packageName, packagePublisher, extensionPackageVersion) {
            TsLogging.LoggerBase.writeEvent("extensionsLoaderExtensionNotSupportedInCurrentRegion", 46629, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Extension package with base url {1} not supported in '{0}' region. Package Name: {2}. Package Publisher: {3}. Package Version: {4}.");
        };
        RetailLogger.extensionsLoaderExtensionNotSupportedInCurrentVersion = function (currentVersion, baseUrl, packageName, packagePublisher, extensionPackageVersion, minimumPosVersion) {
            TsLogging.LoggerBase.writeEvent("extensionsLoaderExtensionNotSupportedInCurrentVersion", 46630, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Extension package with base url {1} not supported in '{0}' version. App version is below the minimum POS version - {5}. Package Name: {2}. Package Publisher: {3}. Package Version: {4}.");
        };
        RetailLogger.extensionsLoaderInvalidExtensionPackageDiscoveredInvalidMinimumPosVersion = function (baseUrl, version) {
            TsLogging.LoggerBase.writeEvent("extensionsLoaderInvalidExtensionPackageDiscoveredInvalidMinimumPosVersion", 46631, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Extension package with base url {0} not registered because the minimum Pos version, {1}, is invalid.  All versions must follow semantic versioning and provide at least a major and a minor version.");
        };
        RetailLogger.extensibilityFrameworkErrorOccurredWhileLoadingNewOperationExtensions = function (errorMessage, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkErrorOccurredWhileLoadingNewOperationExtensions", 46635, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred while loading new operation extensions. Error: {0}.");
        };
        RetailLogger.extensibilityFrameworkTypeMismatchWhileLoadingNewOperationExtensions = function (operationModulePath, expectedType, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkTypeMismatchWhileLoadingNewOperationExtensions", 46636, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Unable to load new operation extension '{0}' as it is not a child type of {1}.");
        };
        RetailLogger.extensibilityFrameworkInvalidNewOperationManifestItem = function (operationManifestItem, expectedType, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkInvalidNewOperationManifestItem", 46637, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Operations loader received invalid operation manifest item '{0}'. The JSON for the item is missing one or more properties defined in type '{1}'.");
        };
        RetailLogger.extensibilityFrameworkDuplicateNewOperationManifestItem = function (operationId, operationManifestItem, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkDuplicateNewOperationManifestItem", 46638, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "An operation module for new operation '{0}' has already been provided in the extension manifest. Duplicate module being ignored is '{1}'.");
        };
        RetailLogger.extensibilityFrameworkNewOperationManifestItemLoadingStarted = function (operationManifestItem, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkNewOperationManifestItemLoadingStarted", 46639, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Started loading new operation extension '{0}'. Correlation Id: '{1}'.");
        };
        RetailLogger.extensibilityFrameworkNewOperationManifestItemLoadingFinished = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkNewOperationManifestItemLoadingFinished", 46640, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Finished loading new operation extension. Correlation Id: '{0}'");
        };
        RetailLogger.extensibilityFrameworkNewOperationRequestFactoryAddedSuccessfully = function (operationId, requestFactoryPath, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkNewOperationRequestFactoryAddedSuccessfully", 46641, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "For operation '{0}', successfully added new operation extension request factory '{1}' to factory provider.");
        };
        RetailLogger.extensibilityFrameworkNewOperationRequestHandlerAddedSuccessfully = function (operationId, requestHandlerPath, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkNewOperationRequestHandlerAddedSuccessfully", 46642, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "For operation '{0}', successfully added new operation extension request handler '{1}' to runtime composition.");
        };
        RetailLogger.viewExtensionsLoaderCommandLoadFailedDueToInvalidCommandModule = function (modulePath, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderCommandLoadFailedDueToInvalidCommandModule", 46650, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "App bar command from module {0} not registered because it doesn't derive from ExtensionCommandBase. Each app bar command module should default export a class that derives from ExtensionCommandBase");
        };
        RetailLogger.viewExtensionsLoaderCommandLoadFailedDueToErrorImportingModule = function (modulePath, error, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderCommandLoadFailedDueToErrorImportingModule", 46651, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred when loading the command module {0}. Error: {1}.");
        };
        RetailLogger.viewExtensionsLoaderCustomColumnsLoadFailedDueToErrorImportingModule = function (modulePath, targetView, targetList, error) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderCustomColumnsLoadFailedDueToErrorImportingModule", 46652, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred when loading the custom columns module {0} for the {2} list on the {1} view. Error: {3}.");
        };
        RetailLogger.viewExtensionsLoaderAppBarCommandAdded = function (targetView, appBar, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderAppBarCommandAdded", 46653, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "App bar command added on {0} for app bar {1}.");
        };
        RetailLogger.viewExtensionsLoaderCustomColumnSetAdded = function (targetView, list, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderCustomColumnSetAdded", 46654, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Custom column set added on {0} for list {1}.");
        };
        RetailLogger.viewExtensionsLoaderViewControllerAdded = function (targetView, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderViewControllerAdded", 46655, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Extension view controller added on {0}.");
        };
        RetailLogger.viewExtensionsLoaderViewControllerFailedDueToInvalidModule = function (modulePath, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderViewControllerFailedDueToInvalidModule", 46656, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "View Controller from module {0} not registered because it doesn't derive from ExtensionViewControllerBase. Each extension view controller module should default export a class that derives from ExtensionViewControllerBase");
        };
        RetailLogger.viewExtensionsLoaderViewControllerLoadFailedDueToErrorImportingModule = function (modulePath, error, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderViewControllerLoadFailedDueToErrorImportingModule", 46657, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred when loading the extension view controller module {0}. Error: {1}.");
        };
        RetailLogger.viewExtensionsLoaderCustomControlAdded = function (targetView, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderCustomControlAdded", 46658, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Custom control added on {0}.");
        };
        RetailLogger.viewExtensionsLoaderCustomControlLoadFailedDueToErrorImportingModule = function (modulePath, error, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderCustomControlLoadFailedDueToErrorImportingModule", 46659, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred when loading the custom control module {0}. Error: {1}.");
        };
        RetailLogger.viewExtensionsLoaderCustomControlManifestValidationFailed = function (controlName, error, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderCustomControlManifestValidationFailed", 46660, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Custom control with name {0} not registered because of invalid manifest item. Reason: {1}");
        };
        RetailLogger.viewExtensionsLoaderCustomControlLoadFailedDueToInvalidControlType = function (modulePath, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderCustomControlLoadFailedDueToInvalidControlType", 46661, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Custom control from module {0} not registered because it doesn't derive from CustomControlBase. Each custom control module should default export a class that derives from CustomControlBase.");
        };
        RetailLogger.viewExtensionsLoaderCustomControlLoadFailedDueToInvalidModule = function (modulePath, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderCustomControlLoadFailedDueToInvalidModule", 46662, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Custom control from module {0} not registered because the module was not in the expected format. Ensure that the control class is a default export of the module.");
        };
        RetailLogger.viewExtensionsLoaderCustomGridColumnAdded = function (targetView, grid, column, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderCustomGridColumnAdded", 46663, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Grid custom column {2} added on {0} for grid {1}.");
        };
        RetailLogger.viewExtensionsLoaderCustomGridColumnLoadFailedDueToErrorImportingModule = function (modulePath, targetView, targetGrid, column, error) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderCustomGridColumnLoadFailedDueToErrorImportingModule", 46664, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred when loading the custom grid column module {0} for the {2} grid on the {1} view. Column name: {3}. Error: {4}.");
        };
        RetailLogger.viewExtensionsLoaderCustomSearchFilterLoadFailedDueToErrorImportingModule = function (modulePath, viewName, error, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderCustomSearchFilterLoadFailedDueToErrorImportingModule", 46665, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred when loading the custom search filter module {0} for the {1} view. Error: {2}.");
        };
        RetailLogger.viewExtensionsLoaderCustomSearchFilterLoadFailedDueToInvalidModule = function (modulePath, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderCustomSearchFilterLoadFailedDueToInvalidModule", 46666, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Custom search filter from module {0} not registered because it doesn't derive from CustomSearchFilterDefinitionBase. Each custom search filter module should default export a class that inherits indirectly from CustomSearchFilterDefinitionBase");
        };
        RetailLogger.viewExtensionsLoaderCustomSearchFilterAdded = function (targetView, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderCustomSearchFilterAdded", 46667, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Custom search filter added on {0}.");
        };
        RetailLogger.viewExtensionsLoaderCustomGridItemSubfieldAdded = function (targetView, grid, itemSubfield, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderCustomGridItemSubfieldAdded", 46668, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Grid custom item subfield {2} added on {0} for grid {1}.");
        };
        RetailLogger.viewExtensionsLoaderCustomGridItemSubfieldLoadFailedDueToErrorImportingModule = function (modulePath, targetView, targetGrid, itemSubfield, error) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderCustomGridItemSubfieldLoadFailedDueToErrorImportingModule", 46669, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred when loading the custom grid item subfield module {0} for the {2} grid on the {1} view. Item subfield name: {3}. Error: {4}.");
        };
        RetailLogger.viewsLoaderViewLoadFailedDueToErrorImportingModule = function (modulePath, error, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewsLoaderViewLoadFailedDueToErrorImportingModule", 46670, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred when loading the view module {0}. Error: {1}.");
        };
        RetailLogger.viewsLoaderViewLoadFailedDueToInvalidViewModule = function (viewControllerPath, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewsLoaderViewLoadFailedDueToInvalidViewModule", 46671, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Unable to load view '{0}' due to invalid module. Package Name: {1}. Package Publisher: {2}. Package Version: {3}.");
        };
        RetailLogger.viewsLoaderNewViewAdded = function (viewPath, phoneViewPath, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewsLoaderNewViewAdded", 46672, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "New view added with path {0}. Package Name: {1}. Package Publisher: {2}. Package Version: {3}.");
        };
        RetailLogger.extensibilityFrameworkTypeMismatchWhileLoadingViews = function (viewControllerPath, expectedType, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkTypeMismatchWhileLoadingViews", 46673, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "View controller from module {0} not registered because it doesn't derive from {1}. Each view controller module should default export a class that derives from {1}");
        };
        RetailLogger.extensibilityFrameworkControlsStarted = function (errorMessage, correlationId, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkControlsStarted", 46680, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Verbose, [], "", "", "Started loading control extension '{0}'. Correlation Id: '{1}'. Package Name: {2}. Package Publisher: {3}. Package Version: {4}.");
        };
        RetailLogger.extensibilityFrameworkControlsFinished = function (correlationId, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkControlsFinished", 46681, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Verbose, [], "", "", "Finished loading control extension. Correlation Id: '{1}'. Package Name: {1}. Package Publisher: {2}. Package Version: {3}.");
        };
        RetailLogger.extensibilityFrameworkControlsOneOftheRequiredParametersMissing = function (errorMessage, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkControlsOneOftheRequiredParametersMissing", 46682, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred while loading control extension. Error: {0}. Package Name: {1}. Package Publisher: {2}. Package Version: {3}.");
        };
        RetailLogger.extensibilityFrameworkUnableToFindRequiredCreatedAndInsertedHtmlPlaceholder = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkUnableToFindRequiredCreatedAndInsertedHtmlPlaceholder", 46683, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred while loading extension.");
        };
        RetailLogger.extensibilityFrameworkControlsUnableToLoadControlHtmlFragment = function (errorMessage, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkControlsUnableToLoadControlHtmlFragment", 46684, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred while loading control extension. Error: {0}. Package Name: {1}. Package Publisher: {2}. Package Version: {3}.");
        };
        RetailLogger.extensibilityFrameworkControlsUnableToLoadControlFailedToRenderHtmlFragment = function (errorMessage, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkControlsUnableToLoadControlFailedToRenderHtmlFragment", 46685, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred while loading control extension. Error: {0}. Package Name: {1}. Package Publisher: {2}. Package Version: {3}.");
        };
        RetailLogger.extensibilityFrameworkControlsUnableToLoadControlModule = function (errorMessage, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkControlsUnableToLoadControlModule", 46686, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred while loading control extension. Error: {0}. Package Name: {1}. Package Publisher: {2}. Package Version: {3}.");
        };
        RetailLogger.extensibilityFrameworkControlsUnableToInitializeControlModule = function (errorMessage, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkControlsUnableToInitializeControlModule", 46687, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred while loading control extension. Error: {0}. Package Name: {1}. Package Publisher: {2}. Package Version: {3}.");
        };
        RetailLogger.extensibilityFrameworkControlNotSupported = function (controlName) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkControlNotSupported", 46688, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred while loading control extension. The control '{0}' is not supported in this version.");
        };
        RetailLogger.extensibilityFrameworkControlsInformationNotProvided = function (controlName, publisherName, packageName) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkControlsInformationNotProvided", 46689, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred while loading control extension. Control information not provided. Control name: '{0}', publisher name: '{1}', package name: '{2}'.");
        };
        RetailLogger.extensibilityFrameworkControlsNotImplemented = function (controlName, publisherName, packageName) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkControlsNotImplemented", 46690, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred while loading control extension. Control is not configured. Control name: '{0}', publisher name: '{1}', package name: '{2}'.");
        };
        RetailLogger.viewExtensionsLoaderTotalsPanelCustomFieldManifestValidationFailed = function (fieldId, error, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderTotalsPanelCustomFieldManifestValidationFailed", 46691, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Custom field for totals panel with id {0} not registered because of invalid manifest item. Reason: {1}");
        };
        RetailLogger.viewExtensionsLoaderTotalsPanelCustomFieldAdded = function (targetView, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderTotalsPanelCustomFieldAdded", 46692, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Custom field for totals panel added on {0}.");
        };
        RetailLogger.viewExtensionsLoaderTotalsPanelCustomFieldLoadFailedDueToInvalidControlType = function (modulePath, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderTotalsPanelCustomFieldLoadFailedDueToInvalidControlType", 46693, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Custom field for totals panel from module {0} not registered because it doesn't derive from TotalsPanelCustomFieldBase. Each custom field module should default export a class that derives from TotalsPanelCustomFieldBase.");
        };
        RetailLogger.viewExtensionsLoaderTotalsPanelCustomFieldLoadFailedDueToInvalidModule = function (modulePath, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderTotalsPanelCustomFieldLoadFailedDueToInvalidModule", 46694, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Custom field for totals panel from module {0} not registered because the module was not in the expected format. Ensure that the custom field class is a default export of the module.");
        };
        RetailLogger.viewExtensionsLoaderTotalsPanelCustomFieldLoadFailedDueToErrorImportingModule = function (modulePath, error, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderTotalsPanelCustomFieldLoadFailedDueToErrorImportingModule", 46695, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred when loading the custom field module {0}. Error: {1}.");
        };
        RetailLogger.extensibilityFrameworkTotalsPanelCustomFieldNotImplemented = function (fieldId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkTotalsPanelCustomFieldNotImplemented", 46696, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Custom field for totals panel was defined in layout but extension module is not implemented. Field id: {0}.");
        };
        RetailLogger.extensibilityFrameworkTotalsPanelCustomFieldConflictsWithStandardField = function (fieldId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkTotalsPanelCustomFieldConflictsWithStandardField", 46697, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Custom field name conficts with standard field. The field id doesn't match. Field id: {0}.");
        };
        RetailLogger.extensibilityFrameworkUnableToCreateAndInsertHtmlFragmentForControl = function (errorMessage, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkUnableToCreateAndInsertHtmlFragmentForControl", 46698, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred while loading extension. Error: {0}. Package Name: {1}. Package Publisher: {2}. Package Version: {3}.");
        };
        RetailLogger.extensionCritical = function (extensionPublisher, extensionName, extensionVersion, message, correlationId, additionalParameter) {
            TsLogging.LoggerBase.writeEvent("extensionCritical", 47000, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Critical, [], "", "", "{3}");
        };
        RetailLogger.extensionError = function (extensionPublisher, extensionName, extensionVersion, message, correlationId, additionalParameter) {
            TsLogging.LoggerBase.writeEvent("extensionError", 47001, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "{3}");
        };
        RetailLogger.extensionWarning = function (extensionPublisher, extensionName, extensionVersion, message, correlationId, additionalParameter) {
            TsLogging.LoggerBase.writeEvent("extensionWarning", 47002, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "{3}");
        };
        RetailLogger.extensionInformational = function (extensionPublisher, extensionName, extensionVersion, message, correlationId, additionalParameter) {
            TsLogging.LoggerBase.writeEvent("extensionInformational", 47003, 1, TsLogging.EventChannel.Admin, TsLogging.EventLevel.Informational, [], "", "", "{3}");
        };
        RetailLogger.extensionVerbose = function (extensionPublisher, extensionName, extensionVersion, message, correlationId, additionalParameter) {
            TsLogging.LoggerBase.writeEvent("extensionVerbose", 47004, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "{3}");
        };
        RetailLogger.extensibilityFrameworkRequestHandlerSuccessfullyRegistered = function (handlerModulePath, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkRequestHandlerSuccessfullyRegistered", 46710, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Successfully registered request handler {0}.");
        };
        RetailLogger.extensibilityFrameworkRequestHandlerFailedToRegister = function (handlerModulePath, error, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkRequestHandlerFailedToRegistered", 46711, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed to register request handler {0}. Error: {1}.");
        };
        RetailLogger.extensibilityFrameworkTypeMismatchWhileLoadingRequestHandlers = function (handlerModulePath, expectedType, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkTypeMismatchWhileLoadingRequestHandlers", 46712, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Unable to load request handler '{0}' as it is not a child type of {1}.");
        };
        RetailLogger.extensibilityFrameworkInvalidModuleWhileLoadingRequestHandlers = function (handlerModulePath, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkInvalidModuleWhileLoadingRequestHandlers", 46713, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Unable to load request handler '{0}' due to invalid module.");
        };
        RetailLogger.extensibilityFrameworkGetExtensionsDownloadUrlsSucceeded = function (response) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkGetExtensionsDownloadUrlsSucceeded", 46720, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Successfully retrieved the POS extensions download URLs: {0}.");
        };
        RetailLogger.extensibilityFrameworkGetExtensionsDownloadUrlsFailed = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkGetExtensionsDownloadUrlsFailed", 46721, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed to retrieve the POS extensions download URLs: error message = '{0}'.");
        };
        RetailLogger.extensibilityFrameworkExtensionServiceUrlNotHttps = function (url) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkExtensionServiceUrlNotHttps", 46722, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Extension service URL '{0}' should be https.");
        };
        RetailLogger.extensibilityFrameworkExtensionDownloadUrlNotHttps = function (url, serviceId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkExtensionDownloadUrlNotHttps", 46723, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Extension download URL '{0}' for service '{1}' should be https.");
        };
        RetailLogger.extensibilityFrameworkTemplatedDialogsStarted = function (errorMessage, correlationId, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkTemplatedDialogsStarted", 46730, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Verbose, [], "", "", "Started loading control extension '{0}'. Correlation Id: '{1}'. Package Name: {2}. Package Publisher: {3}. Package Version: {4}.");
        };
        RetailLogger.extensibilityFrameworkTemplatedDialogsFinished = function (correlationId, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkTemplatedDialogsFinished", 46731, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Verbose, [], "", "", "Finished loading control extension. Correlation Id: '{1}'. Package Name: {1}. Package Publisher: {2}. Package Version: {3}.");
        };
        RetailLogger.extensibilityFrameworkTemplatedDialogsOneOftheRequiredParametersMissing = function (errorMessage, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkTemplatedDialogsOneOftheRequiredParametersMissing", 46732, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred while loading control extension. Error: {0}. Package Name: {1}. Package Publisher: {2}. Package Version: {3}.");
        };
        RetailLogger.extensibilityFrameworkTemplatedDialogsUnableToLoadControlHtmlFragment = function (errorMessage, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkTemplatedDialogsUnableToLoadControlHtmlFragment", 46733, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred while loading control extension. Error: {0}. Package Name: {1}. Package Publisher: {2}. Package Version: {3}.");
        };
        RetailLogger.extensibilityFrameworkTemplatedDialogsUnableToLoadControlModule = function (errorMessage, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkTemplatedDialogsUnableToLoadControlModule", 46734, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred while loading control extension. Error: {0}. Package Name: {1}. Package Publisher: {2}. Package Version: {3}.");
        };
        RetailLogger.extensibilityFrameworkExtensionResourceManagerCreated = function (packageId, supportedUICultures, fallbackUICulture, culturesDirectoryPath, stringResourcesFileName) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkExtensionResourceManagerCreated", 46750, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Extension string localizer instance created for package '{0}' with supported cultures: '{1}', fallback UI culture: '{2}', culture folder path: '{3}', string resources file name: '{4}'.");
        };
        RetailLogger.extensibilityFrameworkExtensionResourceManagerLoadStringResourcesStarted = function (culture, packageIds, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkExtensionResourceManagerLoadStringResourcesStarted", 46751, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Started loading string resources for the requested UI culture: '{0}' for package '{1}'. Correlation Id: '{2}'");
        };
        RetailLogger.extensibilityFrameworkExtensionResourceManagerLoadStringResourcesFinished = function (culture, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkExtensionResourceManagerLoadStringResourcesFinished", 46752, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Finished loading string resources for the requested/available UI culture: '{0}'. Correlation Id: '{1}'");
        };
        RetailLogger.extensibilityFrameworkExtensionResourceManagerErrorWhileLoadingStringResources = function (culture, errors, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkExtensionResourceManagerErrorWhileLoadingStringResources", 46753, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Unable to load string resources for the requested UI culture '{0}'. Correlation Id: '{2}', Error: '{1}'.");
        };
        RetailLogger.extensibilityFrameworkExtensionResourceManagerLoadStringResourcesForFallbackUICultureStarted = function (culture, packageIds, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkExtensionResourceManagerLoadStringResourcesForFallbackUICultureStarted", 46754, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Started loading string resources for the extension fallback UI culture: '{0}' for package '{1}'. Correlation Id: '{2}'");
        };
        RetailLogger.extensibilityFrameworkExtensionResourceManagerLoadStringResourcesForFallbackUICultureFinished = function (culture, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkExtensionResourceManagerLoadStringResourcesForFallbackUICultureFinished", 46755, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Finished loading string resources for the extension fallback UI culture: '{0}'. Correlation Id: '{1}'");
        };
        RetailLogger.extensibilityFrameworkExtensionResourceManagerErrorWhileLoadingStringResourcesForFallbackUICulture = function (defaultExtensionUICulture, errors, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkExtensionResourceManagerErrorWhileLoadingStringResourcesForFallbackUICulture", 46756, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Unable to load string resources for the extension fallback UI culture. Correlation Id: '{1}', Error: '{0}'.");
        };
        RetailLogger.extensibilityFrameworkExtensionResourceManagerLoadStringResourcesCanceled = function (culture) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkExtensionResourceManagerLoadStringResourcesCanceled", 46757, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The requested UI culture '{0}' is not available, canceling the string resources load process.");
        };
        RetailLogger.extensibilityFrameworkResourcesLoaderErrorLoadingCultureInfoOverrides = function (error, cultureInfoOverridesFilePath) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkResourcesLoaderErrorLoadingCultureInfoOverrides", 46758, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Error occurred while loading culture info overrides from file '{1}'. Error details: {0}");
        };
        RetailLogger.extensibilityFrameworkResourcesLoaderInvalidCultureInfoOverridesJson = function (cultureInfoOverridesFilePath, cultureInfoOverridesFileContent) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkResourcesLoaderInvalidCultureInfoOverridesJson", 46759, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "JSON provided in culture info overrides file is invalid. File path: '{0}'; File content: '{1}' ");
        };
        RetailLogger.extensibilityFrameworkResourcesLoaderInvalidCultureInfoOverride = function (cultureInfoOverridesFilePath, cultureInfoOverride) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkResourcesLoaderInvalidCultureInfoOverride", 46760, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The culture info override provided in file '{0}' is invalid. Override provided: '{1}'");
        };
        RetailLogger.extensibilityFrameworkResourcesLoaderCultureInfoOverrideLoadedSuccessfully = function (cultureInfoOverridesFilePath, cultureInfoOverride) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkResourcesLoaderCultureInfoOverrideLoadedSuccessfully", 46761, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Culture info override loaded successfully from file '{0}'. Override details: '{1}'");
        };
        RetailLogger.dialogsSerialNumberInputDialogShown = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("dialogsSerialNumberInputDialogShown", 46770, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "The dialog is shown. Correlation Id: '{0}'.");
        };
        RetailLogger.dialogsSerialNumberInputDialogButtonClicked = function (buttonOperation, correlationId) {
            TsLogging.LoggerBase.writeEvent("dialogsSerialNumberInputDialogButtonClicked", 46771, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "The button for '{0}' was clicked. Correlation Id: '{1}'.");
        };
        RetailLogger.dialogsSerialNumberInputDialogValueScanned = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("dialogsSerialNumberInputDialogValueScanned", 46772, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "The serial number value is scanned. Correlation Id: '{0}'.");
        };
        RetailLogger.extensibilityFrameworkRequestHandlerExtensionSuccessfullyRegistered = function (handlerModulePath, requestType, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkRequestHandlerExtensionSuccessfullyRegistered", 46780, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Successfully registered request handler extension {0} with request type {1}.");
        };
        RetailLogger.extensibilityFrameworkRequestHandlerExtensionFailedToRegister = function (handlerModulePath, error, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkRequestHandlerExtensionFailedToRegister", 46781, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed to register request handler extension {0}. Error: {1}.");
        };
        RetailLogger.extensibilityFrameworkTypeMismatchWhileLoadingRequestHandlerExtensions = function (handlerModulePath, expectedType, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkTypeMismatchWhileLoadingRequestHandlerExtensions", 46782, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Unable to load request handler extension '{0}' as it is not a child type of {1}.");
        };
        RetailLogger.extensibilityFrameworkInvalidModuleWhileLoadingRequestHandlerExtensions = function (handlerModulePath, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkInvalidModuleWhileLoadingRequestHandlerExtensions", 46783, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Unable to load request handler extension '{0}' due to invalid module.");
        };
        RetailLogger.extensibilityFrameworkNavigateToPOSView = function (viewName, packageName, packagePublisher, packageVersion, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkNavigateToPOSView", 46790, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Extension package {1} is navigating to POS view '{0}'.");
        };
        RetailLogger.extensibilityFrameworkNavigateToPOSViewVoidNavigationExecuted = function (viewName, packageName, packagePublisher, packageVersion, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkNavigateToPOSViewVoidNavigationExecuted", 46791, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Extension package {1} navigated to POS view '{0}' without navigation parameters. Navigating to POS view without parameters is deprecated.");
        };
        RetailLogger.extensibilityFrameworkNavigateToPOSViewInvalidParameter = function (viewName, parameterName, errorMessage, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkNavigateToPOSViewInvalidParameter", 46792, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Extension package {3} navigation to POS view '{0}' failed due to an invalid parameter. Parameter Name: {1}. Error Message: {2}");
        };
        RetailLogger.extensibilityFrameworkNavigateToExtensionView = function (viewName, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkNavigateToExtensionView", 46793, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Extension package {1} is navigating to extension view '{0}'.");
        };
        RetailLogger.extensibilityFrameworkNavigateToExtensionViewInvalidViewName = function (viewName, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkNavigateToExtensionViewInvalidViewName", 46794, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Extension package {1} navigation to extension view '{0}' failed due to an invalid view name. View name cannot be null or an empty string.");
        };
        RetailLogger.extensibilityFrameworkNavigateBack = function (packageName, packagePublisher, packageVersion, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkNavigateBack", 46795, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Extension package {0} invoked navigate back.");
        };
        RetailLogger.extensibilityFrameworkExecuteRuntimeRequestStarted = function (requestType, packageName, packagePublisher, packageVersion, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkExecuteRuntimeRequestStarted", 46800, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Executing a POS runtime request of type '{0}' for extension in package '{1}'.");
        };
        RetailLogger.extensibilityFrameworkExecuteRuntimeRequestFinished = function (requestType, packageName, packagePublisher, packageVersion, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkExecuteRuntimeRequestFinished", 46801, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "POS runtime request of type '{0}' for extension in package '{1}' completed successfully.");
        };
        RetailLogger.extensibilityFrameworkExecuteRuntimeRequestFailed = function (requestType, packageName, packagePublisher, packageVersion, errorMessage, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkExecuteRuntimeRequestFailed", 46802, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "POS runtime request of type '{0}' for extension in package '{1}' failed. Error Message: {4}");
        };
        RetailLogger.extensibilityFrameworkPosSdkBindingHandlerInitializeStarted = function (controlName, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkPosSdkBindingHandlerInitializeStarted", 46900, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Initializing Pos SDK binding handler '{0}'.");
        };
        RetailLogger.extensibilityFrameworkPosSdkBindingHandlerInitializeFinished = function (controlName, correlationId) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkPosSdkBindingHandlerInitializeFinished", 46901, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Initializing Pos SDK binding handler '{0}' finished successfully.");
        };
        RetailLogger.extensibilityFrameworkPosSdkBindingHandlerInitializeFailed = function (controlName, correlationId, error) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkPosSdkBindingHandlerInitializeFailed", 46902, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Initializing Pos SDK binding handler '{0}' failed with error: {2}.");
        };
        RetailLogger.dualDisplayExtensionsLoaderCustomControlAdded = function (packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("dualDisplayExtensionsLoaderCustomControlAdded", 46910, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Custom control added on dual display.");
        };
        RetailLogger.dualDisplayExtensionsLoaderCustomControlLoadFailedDueToErrorImportingModule = function (modulePath, error, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("dualDisplayExtensionsLoaderCustomControlLoadFailedDueToErrorImportingModule", 46911, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred when loading the custom control module {0}. Error: {1}.");
        };
        RetailLogger.dualDisplayExtensionsLoaderCustomControlManifestValidationFailed = function (controlName, error, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("dualDisplayExtensionsLoaderCustomControlManifestValidationFailed", 46912, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Custom control with name {0} not registered because of invalid manifest item. Reason: {1}");
        };
        RetailLogger.dualDisplayExtensionsLoaderCustomControlLoadFailedDueToInvalidControlType = function (modulePath, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("dualDisplayExtensionsLoaderCustomControlLoadFailedDueToInvalidControlType", 46913, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Custom control from module {0} not registered because it doesn't derive from CustomControlBase. Each custom control module should default export a class that derives from CustomControlBase.");
        };
        RetailLogger.dualDisplayExtensionsLoaderCustomControlLoadFailedDueToInvalidModule = function (modulePath, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("dualDisplayExtensionsLoaderCustomControlLoadFailedDueToInvalidModule", 46914, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Custom control from module {0} not registered because the module was not in the expected format. Ensure that the control class is a default export of the module.");
        };
        RetailLogger.extensibilityFrameworkGridCustomItemSubfieldMustDerive = function (modulePath, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkLinesGridCustomItemSubfieldMustDerive", 46920, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "The grid custom item subfield from module {0} was not loaded because it does not derive from CustomGridItemSubfieldBase.");
        };
        RetailLogger.extensibilityFrameworkGridCustomItemSubfieldDuplicateName = function (modulePath, packageName, packagePublisher, packageVersion, customItemSubfieldName) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkGridCustomItemSubfieldDuplicateName", 46921, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "The grid custom item subfield from module {0} was not loaded because there is already a loaded grid custom item subfield with name {4}.");
        };
        RetailLogger.extensibilityFrameworkGridCustomItemSubfieldMaxCountExceeded = function (modulePath, packageName, packagePublisher, packageVersion, maximumLinesGridCustomItemSubfields) {
            TsLogging.LoggerBase.writeEvent("extensibilityFrameworkGridCustomItemSubfieldMaxCountExceeded", 46922, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "The grid custom item subfield from module {0} was not loaded because the maximum of {4} grid custom item subfields have already been loaded.");
        };
        RetailLogger.viewExtensionsLoaderMenuCommandLoadFailedDueToInvalidCommandModule = function (modulePath, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderMenuCommandLoadFailedDueToInvalidCommandModule", 46923, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Menu command from module {0} not registered because it doesn't derive from ExtensionMenuCommandBase. Each menu command module should default export a class that derives from ExtensionMenuCommandBase");
        };
        RetailLogger.viewExtensionsLoaderMenuCommandLoadFailedDueToErrorImportingModule = function (modulePath, error, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderMenuCommandLoadFailedDueToErrorImportingModule", 46924, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred when loading the menu command module {0}. Error: {1}.");
        };
        RetailLogger.viewExtensionsLoaderMenuCommandAdded = function (targetView, menu, packageName, packagePublisher, packageVersion) {
            TsLogging.LoggerBase.writeEvent("viewExtensionsLoaderMenuCommandAdded", 46925, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Menu command added on {0} for menu {1}.");
        };
        RetailLogger.extensionsLoaderManifestLoaderNotFound = function (nodeName, packageName) {
            TsLogging.LoggerBase.writeEvent("extensionsLoaderManifestLoaderNotFound", 46950, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "A manifest loader was not found for the manifest node {0} in extension package {1}.");
        };
        RetailLogger.viewModelFulfillmentAcceptLinesFailed = function (errors) {
            TsLogging.LoggerBase.writeEvent("viewModelFulfillmentAcceptLinesFailed", 47010, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Accept lines failed.");
        };
        RetailLogger.viewModelFulfillmentGetFulfillmentLinesFailed = function (errors) {
            TsLogging.LoggerBase.writeEvent("viewModelFulfillmentGetFulfillmentLinesFailed", 47011, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Get fulfillment lines failed.");
        };
        RetailLogger.viewModelFulfillmentPickLinesFailed = function (errors) {
            TsLogging.LoggerBase.writeEvent("viewModelFulfillmentPickLinesFailed", 47012, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Pick lines failed.");
        };
        RetailLogger.viewModelFulfillmentPackFulfillmentLinesFailed = function (errors) {
            TsLogging.LoggerBase.writeEvent("viewModelFulfillmentPackFulfillmentLinesFailed", 47013, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Pack fulfillment lines failed.");
        };
        RetailLogger.viewModelFulfillmentShipLinesFailed = function (errors) {
            TsLogging.LoggerBase.writeEvent("viewModelFulfillmentShipLinesFailed", 47014, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Ship lines failed.");
        };
        RetailLogger.fulfillmentViewNavigationStart = function (fulfillmentLineDeliveryType, correlationId) {
            TsLogging.LoggerBase.writeEvent("fulfillmentViewNavigationStart", 47015, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Navigating to fulfillment view with fulfillment line delivery type {1}. The correlation id is {2}.");
        };
        RetailLogger.fulfillmentViewNavigationEnd = function (fulfillmentLineDeliveryType, correlationId) {
            TsLogging.LoggerBase.writeEvent("fulfillmentViewNavigationEnd", 47016, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Navigating to fulfillment view with fulfillment line delivery type {1} completed. The correlation id is {2}.");
        };
        RetailLogger.viewModelFulfillmentPickingLinesSucceeded = function (fulfillmentLines) {
            TsLogging.LoggerBase.writeEvent("viewModelFulfillmentPickingLinesSucceeded", 47017, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "{1} fulfillment lines were marked as picking.");
        };
        RetailLogger.viewModelFulfillmentPickingListPrintSucceeded = function (fulfillmentLines) {
            TsLogging.LoggerBase.writeEvent("viewModelFulfillmentPickingListPrintSucceeded", 47018, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "{1} fulfillment lines were printed on picking list.");
        };
        RetailLogger.viewModelFulfillmentMarkAsPickedSucceeded = function (fulfillmentLines, correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelFulfillmentMarkAsPickedSucceeded", 47019, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "{1} fulfillment lines were marked as picked.");
        };
        RetailLogger.fulfillmentQuantityDialogPopUp = function (quantityOrdered, quantityInvoiced, quantityPicked, quantityPacked, quantityEntered, fulfillmentProcess) {
            TsLogging.LoggerBase.writeEvent("fulfillmentQuantityDialogPopUp", 47020, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "{1} quantities were ordered. {2} quantities were invoiced. {3} quantities were picked. {4} quantities were packed. {5} quantity was entered for {6}");
        };
        RetailLogger.viewModelFulfillmentPackingSlipPrintSucceeded = function (fulfillmentLines) {
            TsLogging.LoggerBase.writeEvent("viewModelFulfillmentPackingSlipPrintSucceeded", 47021, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "{1} fulfillment lines were printed on packing slip.");
        };
        RetailLogger.viewModelFulfillmentMarkAsPackedSucceeded = function (fulfillmentLines) {
            TsLogging.LoggerBase.writeEvent("viewModelFulfillmentMarkAsPackedSucceeded", 47022, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "{1} fulfillment lines were marked as packed.");
        };
        RetailLogger.viewModelFulfillmentAcceptLinesSucceeded = function (fulfillmentLines) {
            TsLogging.LoggerBase.writeEvent("viewModelFulfillmentAcceptLinesSucceeded", 47023, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "{1} fulfillment lines were accepted.");
        };
        RetailLogger.viewModelFulfillmentPickupLinesStarted = function (fulfillmentLines, correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelFulfillmentPickupLinesStarted", 47024, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "{1} fulfillment lines were marked for pick up. The correlation id is {2}");
        };
        RetailLogger.viewModelFulfillmentShipLinesSucceeded = function (fulfillmentLines) {
            TsLogging.LoggerBase.writeEvent("viewModelFulfillmentShipLinesSucceeded", 47025, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "{1} fulfillment lines were shipped.");
        };
        RetailLogger.viewModelFulfillmentRejectLinesFailed = function (errors) {
            TsLogging.LoggerBase.writeEvent("viewModelFulfillmentRejectLinesFailed", 47026, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Reject lines failed.");
        };
        RetailLogger.viewModelFulfillmentRejectLinesSucceeded = function (fulfillmentLines) {
            TsLogging.LoggerBase.writeEvent("viewModelFulfillmentRejectLinesSucceeded", 47027, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "{1} fulfillment lines were Rejected.");
        };
        RetailLogger.viewModelFulfillmentGetFulfillmentLinesStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelFulfillmentGetFulfillmentLinesStarted", 47028, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry], EventKeywords[EventKeywords.Performance]], "", "", "GetFulfillmntLines API call started. The correlation id is {1}");
        };
        RetailLogger.viewModelFulfillmentGetFulfillmentLinesCompleted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelFulfillmentGetFulfillmentLinesCompleted", 47029, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry], EventKeywords[EventKeywords.Performance]], "", "", "GetFulfillmntLines API call completed. The correlation id is {1}");
        };
        RetailLogger.getNotificationsSucceeded = function (operationId) {
            TsLogging.LoggerBase.writeEvent("getNotificationsSucceeded", 47100, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Get Notification for {0} was successful.");
        };
        RetailLogger.getNotificationsFailed = function (operationId, errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("getNotificationsFailed", 47101, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Get Notification for {0} failed. Error: {2}.");
        };
        RetailLogger.getAllNotificationsStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("getAllNotificationsStarted", 47102, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Get all notifications was started. The correlation id is {0}");
        };
        RetailLogger.getAllNotificationsCompleted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("getAllNotificationsCompleted", 47103, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Get all notifications was completed. The correlation id is {0}");
        };
        RetailLogger.posAuthentication_StandardLogOnBegin = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_StandardLogOnBegin", 47110, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "A user is attempting a standard (non-extended) log on to POS. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_StandardLogOnSuccess = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_StandardLogOnSuccess", 47111, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The standard (non-extended) log was a success. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_StandardLogOnDidntSucceed = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_StandardLogOnDidntSucceed", 47112, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The standard (non-extended) log on flow didn't succeed for some reason. Specific Error or Warning level events that occurred are logged with the same Correlation Id. Look into those correlated events to determine whether this was user error or a failure of our code. The errors: {2}. The error codes: {1}. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_ExtendedLogOnBegin = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_ExtendedLogOnBegin", 47115, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "An extended log on is being attempted. The Correlation Id: {0}");
            RetailLogger.viewModelLoginExtendedLogon(correlationId);
        };
        RetailLogger.posAuthentication_ExtendedLogOnSuccess = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_ExtendedLogOnSuccess", 47116, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The extended log on was a success. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_ExtendedLogOnDidntSucceed = function (correlationId, errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_ExtendedLogOnDidntSucceed", 47117, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The extended log on flow didn't succeed for some reason. Specific Error or Warning level events that occurred are logged with the same Correlation Id. Look into those correlated events to determine whether this was user error or a failure of our code. The errors: {2}. The error codes: {1}. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_UnlockBegin = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_UnlockBegin", 47120, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "A user is attempting to unlock POS. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_UnlockFetchSessionData = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_UnlockFetchSessionData", 47121, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The Unlocking user has authenticated, fetching session information for user. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_UnlockFailed = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_UnlockFailed", 47122, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed to get the user session information necessary for unlock. The following error(s) occurred: '{2}'. The error code(s) are: '{1}'. The Correlation Id: {0}");
            RetailLogger.viewModelLoginUnlockRegisterFailed(errorDetails, correlationId);
        };
        RetailLogger.posAuthentication_UnlockApplySessionData = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_UnlockApplySessionData", 47123, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Applying session data to complete unlock. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_UnlockSuccess = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_UnlockSuccess", 47124, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The register unlock attempt was a success. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_UnlockDidntSucceed = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_UnlockDidntSucceed", 47125, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The register unlock flow didn't succeed for some reason. Specific Error or Warning level events that occurred are logged with the same Correlation Id. Look into those correlated events to determine whether this was user error or a failure of our code. The errors: {2}. The error codes: {1}. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_UserLogOnAttemptOpenOrResumeShift = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_UserLogOnAttemptOpenOrResumeShift", 47130, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Starting or resuming a shift for the logged on user. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_GetShiftsForLoggedOnUserSuccess = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_GetShiftsForLoggedOnUserSuccess", 47131, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Successfully got a list of open shifts for the logged on user. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_GetShiftsForLoggedOnUserFailed = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_GetShiftsForLoggedOnUserFailed", 47132, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed to get a list of open shifts for the logged on user. The following error(s) occurred: '{2}'. The error code(s) are: '{1}'. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_UserLogOnOpenOrResumeShiftCanceledByUser = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_UserLogOnOpenOrResumeShiftCanceledByUser", 47133, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The logging on user opted to cancel opening or resuming a shift. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_UserLogOnOpenOrResumeShiftFailed = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_UserLogOnOpenOrResumeShiftFailed", 47134, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Failed to open or resume a shift for the logging on user. The following error(s) occurred: '{2}'. The error code(s) are: '{1}'. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_UserLogOnOpenOrResumeShiftSuccess = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_UserLogOnOpenOrResumeShiftSuccess", 47135, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The logging on user successfully opened or resumed a shift. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_ProcessLogOnBegin = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_ProcessLogOnBegin", 47140, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Shared code for various log on methods is starting, the Correlation Id can be used to determine the specific log on type calling this code. The Correlation Id: {0}");
            RetailLogger.viewsLoginLoginViewSignInStarted(correlationId);
        };
        RetailLogger.posAuthentication_ProcessLogOnArgumentsInvalid = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_ProcessLogOnArgumentsInvalid", 47141, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Processing POS log on couldn't proceed because neither extended credentials nor a username and password weren provided. The error(s): '{2}'. The error code(s) are: '{1}'. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_ProcessLogOnDeviceInformationInvalid = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_ProcessLogOnDeviceInformationInvalid", 47142, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Processing POS log on stopped because the device token or device ID was not set. The error(s): '{2}'. The error code(s) are: '{1}'. The Correlation Id: {0}");
            RetailLogger.viewModelLoginRetrieveDeviceInformationFailed(correlationId);
        };
        RetailLogger.posAuthentication_ProcessLogOnStartSession = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_ProcessLogOnStartSession", 47143, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Starting a session for the logged on user. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_ProcessLogOnGetAndApplyEmployeeToSession = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_ProcessLogOnGetAndApplyEmployeeToSession", 47144, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Getting and applying the logged on user to the session. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_ProcessLogOnEmployeeAppliedToSession = function (correlationId, staffId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_ProcessLogOnEmployeeAppliedToSession", 47145, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Employee with staff ID: '{1}' applied to session. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_ProcessLogOnLoadingChannelConfiguration = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_ProcessLogOnLoadingChannelConfiguration", 47146, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Loading channel information for the logged on user session. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_ProcessLogOnLoadingChannelConfigurationFailed = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_ProcessLogOnLoadingChannelConfigurationFailed", 47147, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Loading channel configuration failed during log on. All error(s) encountered: '{2}'. The error code(s) are: '{1}'. The Correlation Id: {0}");
            RetailLogger.viewModelLoginLoadingChannelConfigInOfflineModeFailed(correlationId);
        };
        RetailLogger.posAuthentication_ProcessLogOnConfigureLanguageAndCart = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_ProcessLogOnConfigureLanguageAndCart", 47148, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Setting the app language and configuring a cart for the logged on user session. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_ProcessLogOnConfigureLanguageAndCartFailed = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_ProcessLogOnConfigureLanguageAndCartFailed", 47149, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "An error occurred while setting the app language and configuring the logged on user's cart state. All error(s) encountered: '{2}'. The error code(s) are: '{1}'. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_ProcessLogOnOpenLineDisplay = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_ProcessLogOnOpenLineDisplay", 47150, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Opening line display for the logged on user session. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_ProcessLogOnOpenLineDisplayFailed = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_ProcessLogOnOpenLineDisplayFailed", 47151, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Failed to open the line display (a non-blocking error) due to the following error(s): '{2}'. The error code(s) are: '{1}'. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_ProcessLogOnPasswordExpired = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_ProcessLogOnPasswordExpired", 47152, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The user's password is expired, forcing a password change. All error(s) encountered: '{2}'. The error code(s) are: '{1}'. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_ProcessLogOnDeviceTokenInvalid = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_ProcessLogOnDeviceTokenInvalid", 47153, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The device token is invalid, navigating to guided activation view. All error(s) encountered: '{2}'. The error code(s) are: '{1}'. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_ProcessLogOnInvalidCredentials = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_ProcessLogOnInvalidCredentials", 47154, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The username, password, or extended credential provided by the user was invalid. All error(s) encountered: '{2}'. The error code(s) are: '{1}'. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_ProcessLogOnFailed = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_ProcessLogOnFailed", 47155, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Processing POS log on encountered the following error(s): '{2}'. The error code(s) are: '{1}'. The Correlation Id: {0}");
            RetailLogger.viewModelLoginFailed(errorCodes, errorDetails, correlationId);
        };
        RetailLogger.posAuthentication_ProcessLogOnSessionCreated = function (correlationId, sessionId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_ProcessLogOnSessionCreated", 47156, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The user successfully authenticated, and a session has been created. The session ID: '{1}'. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_ProcessLogOnSuccess = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_ProcessLogOnSuccess", 47157, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Shared code for various log on methods completed successfully. The Correlation Id: {0}");
            RetailLogger.viewsLoginLoginViewSignInFinished(correlationId);
        };
        RetailLogger.posAuthentication_ProcessLogOnDidntSucceed = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_ProcessLogOnDidntSucceed", 47158, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The POS log on flow didn't succeed for some reason. Specific Error or Warning level events that occurred are logged with the same Correlation Id. Look into those correlated events to determine whether this was user error or a failure of our code. The errors: {2}. The error codes: {1}. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_ProcessLogOnCanceledBecauseLogOnInProgress = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_ProcessLogOnCanceledBecauseLogOnInProgress", 47159, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The POS log on flow was canceled because a log on is already in progress. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_CoreLogOnBegin = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_CoreLogOnBegin", 47160, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Core log on code (the actual server call and most basic logic) is starting, the Correlation Id can be used to determine the specific log on flow calling this code. The Correlation Id: {0}");
            RetailLogger.viewsLoginLoginViewSignInStarted(correlationId);
        };
        RetailLogger.posAuthentication_CoreLogOnPasswordRequired = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_CoreLogOnPasswordRequired", 47161, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "A non-blocking/recoverable password required error was encountered. This typically occurrs during extended log on. The code will attempt to recover and continue. All error(s): '{2}'. The error code(s) are: '{1}'. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_CoreLogOnPasswordRequiredAndProvided = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_CoreLogOnPasswordRequiredAndProvided", 47162, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The user provided a password, so log on will be attempted again. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_CoreLogOnPasswordRequiredNotProvided = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_CoreLogOnPasswordRequiredNotProvided", 47163, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The user did not provide a password, so log on cannot continue. All error(s): '{2}'. The error code(s) are: '{1}'. Log on should attempt to recover and continue. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_CoreLogOnInvalidCredentials = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_CoreLogOnInvalidCredentials", 47164, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The username, password, or extended credential provided by the user was invalid. All error(s) encountered: '{2}'. The error code(s) are: '{1}'. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_CoreLogOnFailed = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_CoreLogOnFailed", 47165, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Core log on code encountered the following error(s): '{2}'. The error code(s) are: '{1}'. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_CoreLogOnSuccess = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_CoreLogOnSuccess", 47166, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Core log on code completed successfully. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_StartSessionBegin = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_StartSessionBegin", 47170, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Sending a request to start a new session. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_StartSessionFailed = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_StartSessionFailed", 47171, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Starting the user's session failed due to the following error(s): '{2}'. The error code(s) are: '{1}'. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_StartSessionSuccess = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_StartSessionSuccess", 47172, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Started a new session successfully. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_EndSessionCanceledDeviceNotActivated = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_EndSessionCanceledDeviceNotActivated", 47173, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Canceled a request to end the current session, as the device is not activated, so there cannot be a session in progress. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_EndSessionFailed = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_EndSessionFailed", 47174, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Ending the user's session failed due to the following error(s): '{2}'. The error code(s) are: '{1}'. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_EndSessionSuccess = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_EndSessionSuccess", 47175, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The current session was ended successfully. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_CoreLogOffBegin = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_CoreLogOffBegin", 47180, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Core log off code (does the actual logging off, closing open devices, etc) is starting, the Correlation Id can be used to determine the specific log off flow calling this code. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_CoreLogOffCriticalStepsBegin = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_CoreLogOffCriticalStepsBegin", 47181, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The critical core log off code (the most basic logic to remove user session information) is starting. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_CoreLogOffCriticalStepsFailed = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_CoreLogOffCriticalStepsFailed", 47182, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "The critical core log off code encountered blocking errors. This should never fail, and warrants immediate investigation. The error messages(s): '{2}'. The error code(s) are: '{1}'. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_CoreLogOffCriticalStepsSuccess = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_CoreLogOffCriticalStepsSuccess", 47183, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The critical core log off code completed successfully. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_CoreLogOffFailed = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_CoreLogOffFailed", 47184, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "The core log off flow encountered errors. The error messages(s): '{2}'. The error code(s) are: '{1}'. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_CoreLogOffSuccess = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_CoreLogOffSuccess", 47185, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Core log off code completed successfully. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_CoreLockBegin = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_CoreLockBegin", 47186, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Core POS lock flow is beginning, the Correlation Id can be used to determine the specific flow calling this code. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_CoreLockFailed = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_CoreLockFailed", 47187, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "The core POS lock flow encountered errors. The error messages(s): '{2}'. The error code(s) are: '{1}'. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_CoreLockSuccess = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_CoreLockSuccess", 47188, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Core POS lock flow completed successfully. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_AutomaticExitAfterTimeoutTriggered = function (correlationId, timeoutInMilliseconds) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_AutomaticExitAfterTimeoutTriggered", 47189, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The automatic exit timeout has elapsed (timeout length in ms: {1}). POS will now lock or logoff (depending on configuration). Use the Correlation Id to link this to a logoff or lock event. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_AutomaticExitAfterEachTransaction = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_AutomaticExitAfterEachTransaction", 47190, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Because automatic exit after each transaction is enabled, POS will now lock or logoff (depending on configuration). Use the Correlation Id to link this to a logoff or lock event. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_LogOffForUserAuthenticationException = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_LogOffForUserAuthenticationException", 47191, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "A user authentication exception was caught and we are not on a sign in page, so we must log off. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_LogOffOperationBegin = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_LogOffOperationBegin", 47192, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The log off operation (performs a log off, followed by some clean up) is starting. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_LogOffOperationBlockedByCartInProgress = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_LogOffOperationBlockedByCartInProgress", 47193, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The log off operation was blocked because a cart is in progress. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_LogOffOperationPostLogOffFailed = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_LogOffOperationPostLogOffFailed", 47194, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "The log off operation's post-log off steps encountered blocking errors. The error messages(s): '{2}'. The error code(s) are: '{1}'. The Correlation Id: {0}");
            RetailLogger.operationLogOffFailed(errorCodes, errorDetails, correlationId);
        };
        RetailLogger.posAuthentication_LogOffOperationPostLogOffSuccess = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_LogOffOperationPostLogOffSuccess", 47195, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The log off operation, including the post-log off steps, completed successfully. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_AadLogonModeEnabledSoMarkAsInitiated = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_AadLogonModeEnabledSoMarkAsInitiated", 47200, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "AAD Logon is enabled, and we are proceeding with a logon request, so AAD logon initiated is being marked in application storage. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_AadLogonAlreadyInitiatedSoAutomaticallyStartAadLogon = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_AadLogonAlreadyInitiatedSoAutomaticallyStartAadLogon", 47201, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "An AAD logon was marked as initiated in application storage, so we will automatically proceed with the AAD logon flow. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_AadLogonCompletedSoClearInitiatedMarker = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_AadLogonCompletedSoClearInitiatedMarker", 47202, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "AAD Logon was marked as initiated in application storage and the logon has completed, so we've cleared the logon initiated marker in application storage. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_AadLogonLockBlockedLogoffInstead = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_AadLogonLockBlockedLogoffInstead", 47203, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The user attempted to lock POS, but this is not permitted when using AAD logon. As a consequence, the user was logged off instead. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_AadLogonCoreFlowStart = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_AadLogonCoreFlowStart", 47204, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Starting the core logon code for AAD logon scenarios. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_AadLogonCoreFlowAadConfigurationError = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_AadLogonCoreFlowAadConfigurationError", 47205, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "The core logon code for AAD logon scenarios encountered an issue with the AAD configuration. The error messages(s): '{2}'. The error code(s) are: '{1}'. The Correlation Id: {0}");
            RetailLogger.viewModelLoginAuthenticateUserFailed(errorDetails);
        };
        RetailLogger.posAuthentication_AadLogonCoreFlowSuccess = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_AadLogonCoreFlowSuccess", 47206, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Core logon code for AAD logon scenarios succeeded. The Correlation Id: {0}");
        };
        RetailLogger.posAuthentication_AadLogonCoreFlowFailed = function (correlationId, errorCodes, errorDetails) {
            TsLogging.LoggerBase.writeEvent("posAuthentication_AadLogonCoreFlowFailed", 47207, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "The core logon code for AAD logon scenarios encountered errors. The error messages(s): '{2}'. The error code(s) are: '{1}'. The Correlation Id: {0}");
        };
        RetailLogger.resumeShiftCalled = function (shift, cashDrawer, correlationId) {
            TsLogging.LoggerBase.writeEvent("resumeShiftCalled", 47209, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Resume shift API called. Shift {0}, cash drawer {1}. Correlation id: {2}");
        };
        RetailLogger.resumeShiftSucceeded = function (shift, cashDrawer, shiftOpenedBy, isShared, shiftStatus, correlationId) {
            TsLogging.LoggerBase.writeEvent("resumeShiftSucceeded", 47210, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Shift resumed successfully. Shift {0}, cashdrawer {1} , Shift opened by {2}, isShared {3}, shiftStatus {4}. Correlation id: {5}.");
        };
        RetailLogger.resumeShiftFailed = function (shift, cashDrawer, shiftOpenedBy, isShared, errorMessage, correlationId) {
            TsLogging.LoggerBase.writeEvent("resumeShiftFailed", 47211, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [EventKeywords[EventKeywords.Telemetry]], "", "", "Resuming a shift failed. Shift {0}, cashdrawer {1} , Shift opened by {2}, isShared {3}, Correlation id: {5}. Error: {4}");
        };
        RetailLogger.blindCloseShiftCalled = function (shift, correlationId) {
            TsLogging.LoggerBase.writeEvent("blindCloseShiftCalled", 47212, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Blind close shift API called. Shift {0}. Correlation id: {1}");
        };
        RetailLogger.blindCloseShiftSucceeded = function (shift, cashDrawer, shiftOpenedBy, isShared, shiftStatus, correlationId) {
            TsLogging.LoggerBase.writeEvent("blindCloseShiftSucceeded", 47213, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Shift blind closed successfully. Shift {0}, cashdrawer {1} , Shift opened by {2}, isShared {3}, shiftStatus {4}. Correlation id: {5}.");
        };
        RetailLogger.blindCloseShiftFailed = function (shift, cashDrawer, shiftOpenedBy, isShared, errorMessage, correlationId) {
            TsLogging.LoggerBase.writeEvent("blindCloseShiftFailed", 47214, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [EventKeywords[EventKeywords.Telemetry]], "", "", "Blind Closing a shift failed. Shift {0}, cashdrawer {1} , Shift opened by {2}, isShared {3}, Correlation id: {5}. Error: {4}");
        };
        RetailLogger.closeShiftCalled = function (shift, correlationId) {
            TsLogging.LoggerBase.writeEvent("closeShiftCalled", 47215, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Close shift API called. Shift {0}. Correlation id: {1}.");
        };
        RetailLogger.closeShiftSucceeded = function (shift, cashDrawer, shiftOpenedBy, isShared, shiftStatus, correlationId) {
            TsLogging.LoggerBase.writeEvent("closeShiftSucceeded", 47216, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Shift closed successfully. Shift {0}, cashdrawer {1} , Shift opened by {2}, isShared {3}, shiftStatus {4}. Correlation id: {5}.");
        };
        RetailLogger.closeShiftFailed = function (shift, cashDrawer, shiftOpenedBy, isShared, errorMessage, correlationId) {
            TsLogging.LoggerBase.writeEvent("closeShiftFailed", 47217, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [EventKeywords[EventKeywords.Telemetry]], "", "", "Closing a shift failed. Shift {0}, cashdrawer {1} , Shift opened by {2}, isShared {3}, Correlation id: {5}. Error: {4}");
        };
        RetailLogger.upsertShiftsCalled = function (shiftsToUpsert, currentShift, correlationId) {
            TsLogging.LoggerBase.writeEvent("upsertShiftsCalled", 47218, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Calling upsert shifts API. shiftsToUpsert {0}, currentShift {1}, Correlation id: {2}.");
        };
        RetailLogger.upsertShiftsSucceeded = function (shiftsToUpsert, currentShift, correlationId) {
            TsLogging.LoggerBase.writeEvent("upsertShiftsSucceeded", 47219, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Shifts upserted successfully. shiftsToUpsert {0}, currentShift {1}, Correlation id: {2}.");
        };
        RetailLogger.upsertShiftsFailed = function (shiftsToUpsert, currentShift, errorMessage, correlationId) {
            TsLogging.LoggerBase.writeEvent("upsertShiftsFailed", 47220, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [EventKeywords[EventKeywords.Telemetry]], "", "", "Upserting shifts failed. shiftsToUpsert {0}, currentShift {1}, Correlation id: {3}. Error: {2}");
        };
        RetailLogger.deleteShiftsCalled = function (shiftsOpened, currentShift, correlationId) {
            TsLogging.LoggerBase.writeEvent("deleteShiftsCalled", 47221, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Calling delete shifts API. shiftsOpened {0}, currentShift {1}, Correlation id: {2}.");
        };
        RetailLogger.deleteShiftsSucceeded = function (shiftsOpened, currentShift, correlationId) {
            TsLogging.LoggerBase.writeEvent("deleteShiftsSucceeded", 47222, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Shifts deleted successfully. shiftsOpened {0}, currentShift {1}, Correlation id: {2}.");
        };
        RetailLogger.deleteShiftsFailed = function (shiftsOpened, currentShift, errorMessage, correlationId) {
            TsLogging.LoggerBase.writeEvent("deleteShiftsFailed", 47223, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [EventKeywords[EventKeywords.Telemetry]], "", "", "Deleting shifts failed. shiftsOpened {0}, currentShift {1}, Correlation id: {3}. Error: {2}");
        };
        RetailLogger.getShiftsCalled = function (shiftsStatus, userRoleFilter, currentShift, correlationId) {
            TsLogging.LoggerBase.writeEvent("getShiftsCalled", 47224, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Calling get shifts API. shiftsStatus {0}, UserRoleFilter {1}, currentShift {2}, Correlation id: {3}.");
        };
        RetailLogger.getShiftsSucceeded = function (shiftsStatus, shiftsReturned, currentShift, correlationId) {
            TsLogging.LoggerBase.writeEvent("getShiftsSucceeded", 47225, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Got Shifts successfully. shiftsStatus {0}, shiftsReturned {1}, currentShift {2}, Correlation id: {3}.");
        };
        RetailLogger.getShiftsFailed = function (shiftsStatus, currentShift, errorMessage, correlationId) {
            TsLogging.LoggerBase.writeEvent("getShiftsFailed", 47226, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [EventKeywords[EventKeywords.Telemetry]], "", "", "Getting shifts failed. shiftsStatus {0}, currentShift {1}, Correlation id: {3}. Error: {2}");
        };
        RetailLogger.openShiftCalled = function (shiftId, cashDrawer, isShared, correlationId) {
            TsLogging.LoggerBase.writeEvent("openShiftCalled", 47227, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Open shift API called with parameters shift id {0}, cashdrawer {1}, isShared {2}. Correlation id: {3}.");
        };
        RetailLogger.openShiftSucceeded = function (shift, cashDrawer, shiftOpenedBy, isShared, shiftStatus, correlationId) {
            TsLogging.LoggerBase.writeEvent("openShiftSucceeded", 47228, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Shift opened successfully. Shift {0}, cashdrawer {1} , Shift opened by {2}, isShared {3}, shiftStatus {4}. Correlation id: {5}.");
        };
        RetailLogger.openShiftFailed = function (errorMessage, correlationId) {
            TsLogging.LoggerBase.writeEvent("openShiftFailed", 47229, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [EventKeywords[EventKeywords.Telemetry]], "", "", "Opening a shift failed. Error: {0}. Correlation id: {1}.");
        };
        RetailLogger.useShiftCalled = function (shift, correlationId) {
            TsLogging.LoggerBase.writeEvent("useShiftCalled", 47230, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", " Use shift API called. Shift {0}. Correlation id: {1}.");
        };
        RetailLogger.useShiftSucceeded = function (shift, cashDrawer, shiftOpenedBy, isShared, shiftStatus, correlationId) {
            TsLogging.LoggerBase.writeEvent("useShiftSucceeded", 47231, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Shift used successfully. Shift {0}, cashdrawer {1} , Shift opened by {2}, isShared {3}, shiftStatus {4}. Correlation id: {5}.");
        };
        RetailLogger.useShiftFailed = function (shift, cashDrawer, shiftOpenedBy, isShared, errorMessage, correlationId) {
            TsLogging.LoggerBase.writeEvent("useShiftFailed", 47232, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [EventKeywords[EventKeywords.Telemetry]], "", "", "Using a shift failed. Shift {0}, cashdrawer {1} , Shift opened by {2}, isShared {3}, Correlation id: {5}. Error: {4}");
        };
        RetailLogger.suspendShiftCalled = function (shift, correlationId) {
            TsLogging.LoggerBase.writeEvent("suspendShiftCalled", 47233, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Suspend shift API called. Shift {0}. Correlation id: {1}.");
        };
        RetailLogger.suspendShiftSucceeded = function (shift, cashDrawer, shiftOpenedBy, isShared, shiftStatus, correlationId) {
            TsLogging.LoggerBase.writeEvent("suspendShiftSucceeded", 47234, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Shift suspended successfully. Shift {0}, cashdrawer {1} , Shift opened by {2}, isShared {3}, shiftStatus {4}. Correlation id: {5}.");
        };
        RetailLogger.suspendShiftFailed = function (shift, cashDrawer, shiftOpenedBy, isShared, errorMessage, correlationId) {
            TsLogging.LoggerBase.writeEvent("suspendShiftFailed", 47235, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [EventKeywords[EventKeywords.Telemetry]], "", "", "Suspending a shift failed. Shift {0}, cashdrawer {1} , Shift opened by {2}, isShared {3}, Correlation id: {5}. Error: {4}");
        };
        RetailLogger.forceDeleteShiftCalled = function (shift, correlationId) {
            TsLogging.LoggerBase.writeEvent("forceDeleteShiftCalled", 47236, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Force Delete shift API called. Shift {0}. Correlation id: {1}.");
        };
        RetailLogger.forceDeleteShiftSucceeded = function (shift, cashDrawer, shiftOpenedBy, isShared, shiftStatus, correlationId) {
            TsLogging.LoggerBase.writeEvent("forceDeleteShiftSucceeded", 47237, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Shift force deleted successfully. Shift {0}, cashdrawer {1} , Shift opened by {2}, isShared {3}, shiftStatus {4}. Correlation id: {5}.");
        };
        RetailLogger.forceDeleteShiftFailed = function (shift, cashDrawer, shiftOpenedBy, isShared, errorMessage, correlationId) {
            TsLogging.LoggerBase.writeEvent("forceDeleteShiftFailed", 47238, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [EventKeywords[EventKeywords.Telemetry]], "", "", "Force deleting a shift failed. Shift {0}, cashdrawer {1} , Shift opened by {2}, isShared {3}, Correlation id: {5}. Error: {4}");
        };
        RetailLogger.getShiftReconciliationLinesStarted = function (correlationId, transactionTypeValues, shiftReconciliationLineStatusValues) {
            TsLogging.LoggerBase.writeEvent("getShiftReconciliationLinesStarted", 47239, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Get Shift Reconciliation Lines API called. Correlation id: {0}. Transaction type values: {1}. Shift Reconciliation Line Status Values {2}.");
        };
        RetailLogger.getShiftReconciliationLinesSucceeded = function (correlationId, transactionTypeValues, shiftReconciliationLineStatusValues, countOfReturnedLines) {
            TsLogging.LoggerBase.writeEvent("getShiftReconciliationLinesSucceeded", 47240, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Get Shift Reconciliation Lines API succeeded. Correlation id: {0}. Transaction type values: {1}. Shift Reconciliation Line Status Values {2}. Count of Returned Lines {3}.");
        };
        RetailLogger.getShiftReconciliationLinesFailed = function (correlationId, transactionTypeValues, shiftReconciliationLineStatusValues, error) {
            TsLogging.LoggerBase.writeEvent("getShiftReconciliationLinesFailed", 47241, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [EventKeywords[EventKeywords.Telemetry]], "", "", "The retail server call to Get Shift Reconciliation Lines API failed. Correlation id: {0}. Transaction type values: {1}. Shift Reconciliation Line Status Values {2}. Error: {3}");
        };
        RetailLogger.reconcileLinesStarted = function (correlationId, linesToReconcileCount) {
            TsLogging.LoggerBase.writeEvent("reconcileLinesStarted", 47242, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Reconcile Lines API called. Correlation id: {0}. Lines to Reconcile Count: {1}.");
        };
        RetailLogger.reconcileLinesSucceeded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("reconcileLinesSucceeded", 47243, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Reconcile Lines API succeeded. Correlation id: {0}.");
        };
        RetailLogger.reconcileLinesFailed = function (correlationId, error) {
            TsLogging.LoggerBase.writeEvent("reconcileLinesFailed", 47244, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [EventKeywords[EventKeywords.Telemetry]], "", "", "The retail server call to Reconcile Lines API failed. Correlation id: {0}. Error: {1}");
        };
        RetailLogger.undoReconcileLinesStarted = function (correlationId, linesToUnReconcileCount) {
            TsLogging.LoggerBase.writeEvent("undoReconcileLinesStarted", 47245, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Undo Reconcile Lines API called. Correlation id: {0}. Lines to UnReconcile Count: {1}.");
        };
        RetailLogger.undoReconcileLinesSucceeded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("undoReconcileLinesSucceeded", 47246, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Undo Reconcile Lines API succeeded. Correlation id: {0}.");
        };
        RetailLogger.undoReconcileLinesFailed = function (correlationId, error) {
            TsLogging.LoggerBase.writeEvent("undoReconcileLinesFailed", 47247, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [EventKeywords[EventKeywords.Telemetry]], "", "", "The retail server call to undo Reconcile Lines API failed. Correlation id: {0}. Error: {1}");
        };
        RetailLogger.dualDisplayStartProjectionFailed = function (error) {
            TsLogging.LoggerBase.writeEvent("dualDisplayStartProjectionFailed", 47300, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Starting projection of dual display failed with error: {0}");
        };
        RetailLogger.dualDisplayStartProjectionSucceeded = function () {
            TsLogging.LoggerBase.writeEvent("dualDisplayStartProjectionSucceeded", 47301, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Starting projection of dual display succeeded.");
        };
        RetailLogger.dualDisplaySendRequestFailed = function (requestName, responseName) {
            TsLogging.LoggerBase.writeEvent("dualDisplaySendRequestFailed", 47302, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Execution of request '{0}' failed because '{1}' response was not received for previous call.");
        };
        RetailLogger.validateCashDrawerLimitStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("validateCashDrawerLimitStarted", 48010, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Started validating cash drawer limit. The correlation id is {0}");
        };
        RetailLogger.validateCashDrawerLimitSuccessfully = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("validateCashDrawerLimitSuccessfully", 48011, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Validate cash drawer limit successfully. The correlation id is {0}");
        };
        RetailLogger.validateCashDrawerLimitCashDrawerLimitExceeded = function (errorCode, correlationId) {
            TsLogging.LoggerBase.writeEvent("validateCashDrawerLimitCashDrawerLimitExceeded", 48012, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Cash drawer limit is exceeded. The correlation id is {1}");
        };
        RetailLogger.validateCashDrawerLimitFailed = function (errorCode, correlationId) {
            TsLogging.LoggerBase.writeEvent("validateCashDrawerLimitFailed", 48013, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Validate cash drawer limit failed. The correlation id is {1}");
        };
        RetailLogger.posTenderPaymentButtonClicked = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posTenderPaymentButtonClicked", 48100, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "PaymentView Tender payment button clicked.");
        };
        RetailLogger.posPaymentViewNumpadEnterButtonClicked = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posPaymentViewNumpadEnterButtonClicked", 48101, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "PaymentView numpad enter button clicked.");
        };
        RetailLogger.posTenderPaymentOperationStarted = function (correlationId, operationId, operationName, amount) {
            TsLogging.LoggerBase.writeEvent("posTenderPaymentOperationStarted", 48102, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Tender payment operation started for payment method operation {1} ({2}).");
        };
        RetailLogger.posTenderPaymentOperationSucceeded = function (correlationId, operationId, operationName, amount) {
            TsLogging.LoggerBase.writeEvent("posTenderPaymentOperationSucceeded", 48103, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Tender payment operation succeeded for payment method operation {1} ({2}).");
        };
        RetailLogger.posTenderPaymentOperationFailed = function (correlationId, operationId, operationName, amount, error) {
            TsLogging.LoggerBase.writeEvent("posTenderPaymentOperationFailed", 48104, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Tender payment operation failed for payment method operation {1} ({2}).");
        };
        RetailLogger.posTenderPaymentOperationCancelled = function (correlationId, operationId, operationName, amount) {
            TsLogging.LoggerBase.writeEvent("posTenderPaymentOperationCancelled", 48105, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Tender payment operation cancelled for payment method operation {1} ({2}).");
        };
        RetailLogger.posPaymentResultResolutionStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posPaymentResultResolutionStarted", 48106, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Resolve payment result started.");
        };
        RetailLogger.posPaymentResultResolutionSucceeded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posPaymentResultResolutionSucceeded", 48107, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Resolve payment result succeeded.");
        };
        RetailLogger.posPaymentResultResolutionFailed = function (correlationId, error) {
            TsLogging.LoggerBase.writeEvent("posPaymentResultResolutionFailed", 48108, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Resolve payment result failed.");
        };
        RetailLogger.posValidatePaymentAmountStarted = function (correlationId, operationId, operationName, amount) {
            TsLogging.LoggerBase.writeEvent("posValidatePaymentAmountStarted", 48109, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Validate payment amount started for payment method operation {1} ({2}).");
        };
        RetailLogger.posValidatePaymentAmountSucceeded = function (correlationId, operationId, operationName, amount) {
            TsLogging.LoggerBase.writeEvent("posValidatePaymentAmountSucceeded", 48110, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Validate payment amount succeeded for payment method operation {1} ({2}).");
        };
        RetailLogger.posValidatePaymentAmountFailed = function (correlationId, operationId, operationName, amount, error) {
            TsLogging.LoggerBase.writeEvent("posValidatePaymentAmountFailed", 48111, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Validate payment amount failed for payment method operation {1} ({2}).");
        };
        RetailLogger.posPaymentAmountSetToFullAmountDue = function (correlationId, amount) {
            TsLogging.LoggerBase.writeEvent("posPaymentAmountSetToFullAmountDue", 48112, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Payment amount set to full amount due.");
        };
        RetailLogger.posDenominationButtonClicked = function (correlationId, denominationAmount) {
            TsLogging.LoggerBase.writeEvent("posDenominationButtonClicked", 48113, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "PaymentView denomination button clicked.");
        };
        RetailLogger.posGetCurrencyInfoForAmountStarted = function (correlationId, operationId, amount, allCurrencies) {
            TsLogging.LoggerBase.writeEvent("posGetCurrencyInfoForAmountStarted", 48114, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Getting currency info request started.");
        };
        RetailLogger.posGetCurrencyInfoForAmountSucceeded = function (correlationId, operationId, amount, allCurrencies) {
            TsLogging.LoggerBase.writeEvent("posGetCurrencyInfoForAmountSucceeded", 48115, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Getting currency info request succeeded.");
        };
        RetailLogger.posGetCurrencyInfoForAmountFailed = function (correlationId, operationId, amount, allCurrencies, error) {
            TsLogging.LoggerBase.writeEvent("posGetCurrencyInfoForAmountFailed", 48116, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Getting currency info request failed.");
        };
        RetailLogger.posGetCurrencyAmountsStarted = function (correlationId, amount, allCurrencies) {
            TsLogging.LoggerBase.writeEvent("posGetCurrencyAmountsStarted", 48117, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Get currency amounts started.");
        };
        RetailLogger.posGetCurrencyAmountsSucceeded = function (correlationId, amount, allCurrencies) {
            TsLogging.LoggerBase.writeEvent("posGetCurrencyAmountsSucceeded", 48118, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Get currency amounts succeeded.");
        };
        RetailLogger.posGetCurrencyAmountsFailed = function (correlationId, amount, allCurrencies, error) {
            TsLogging.LoggerBase.writeEvent("posGetCurrencyAmountsFailed", 48119, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Get currency amounts failed.");
        };
        RetailLogger.posGetCurrencyDenominationListDictionaryStarted = function (correlationId, operationId, amount) {
            TsLogging.LoggerBase.writeEvent("posGetCurrencyDenominationListDictionaryStarted", 48120, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Get currency denomination list dictionary started.");
        };
        RetailLogger.posGetCurrencyDenominationListDictionarySucceeded = function (correlationId, operationId, amount) {
            TsLogging.LoggerBase.writeEvent("posGetCurrencyDenominationListDictionarySucceeded", 48121, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Get currency denomination list dictionary succeeded.");
        };
        RetailLogger.posGetCurrencyDenominationListDictionaryFailed = function (correlationId, operationId, amount, error) {
            TsLogging.LoggerBase.writeEvent("posGetCurrencyDenominationListDictionaryFailed", 48122, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Get currency denomination list dictionary failed.");
        };
        RetailLogger.posGetCurrencyDenominationListStarted = function (correlationId, currency, amount) {
            TsLogging.LoggerBase.writeEvent("posGetCurrencyDenominationListStarted", 48123, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Get currency denomination list started.");
        };
        RetailLogger.posGetCurrencyDenominationListSucceeded = function (correlationId, currency, amount) {
            TsLogging.LoggerBase.writeEvent("posGetCurrencyDenominationListSucceeded", 48124, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Get currency denomination list succeeded.");
        };
        RetailLogger.posGetCurrencyDenominationListFailed = function (correlationId, currency, amount, error) {
            TsLogging.LoggerBase.writeEvent("posGetCurrencyDenominationListFailed", 48125, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Get currency denomination list failed.");
        };
        RetailLogger.posPaymentAmountSetToDenominationAmount = function (correlationId, denominationAmount) {
            TsLogging.LoggerBase.writeEvent("posPaymentAmountSetToDenominationAmount", 48126, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Payment amount set to denomination amount.");
        };
        RetailLogger.posDenominationAmountAddedToPaymentAmount = function (correlationId, denominationAmount) {
            TsLogging.LoggerBase.writeEvent("posDenominationAmountAddedToPaymentAmount", 48127, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Denomination amount added to payment amount.");
        };
        RetailLogger.posPaymentAddCartTenderLineStarted = function (correlationId, operationId, operationName) {
            TsLogging.LoggerBase.writeEvent("posPaymentAddCartTenderLineStarted", 48128, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Payment add cart tender line started for payment method operation {1} ({2}).");
        };
        RetailLogger.posPaymentAddCartTenderLineSucceeded = function (correlationId, operationId, operationName) {
            TsLogging.LoggerBase.writeEvent("posPaymentAddCartTenderLineSucceeded", 48129, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Payment add cart tender line succeeded for payment method operation {1} ({2}).");
        };
        RetailLogger.posPaymentAddCartTenderLineCancelled = function (correlationId, operationId, operationName) {
            TsLogging.LoggerBase.writeEvent("posPaymentAddCartTenderLineCancelled", 48130, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Payment add cart tender line cancelled for payment method operation {1} ({2}).");
        };
        RetailLogger.posPaymentAddCartTenderLineFailed = function (correlationId, operationId, operationName, error) {
            TsLogging.LoggerBase.writeEvent("posPaymentAddCartTenderLineFailed", 48131, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Payment add cart tender line failed for payment method operation {1} ({2}).");
        };
        RetailLogger.posPaymentMethodViewModelLoadStarted = function (correlationId, operationId, operationName) {
            TsLogging.LoggerBase.writeEvent("posPaymentMethodViewModelLoadStarted", 48132, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Payment method view model load started for payment method operation {1} ({2}).");
        };
        RetailLogger.posPaymentMethodViewModelLoadSucceeded = function (correlationId, operationId, operationName) {
            TsLogging.LoggerBase.writeEvent("posPaymentMethodViewModelLoadSucceeded", 48133, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Payment method view model load succeeded for payment method operation {1} ({2}).");
        };
        RetailLogger.posPaymentMethodViewModelLoadCancelled = function (correlationId, operationId, operationName) {
            TsLogging.LoggerBase.writeEvent("posPaymentMethodViewModelLoadCancelled", 48134, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Payment method view model load cancelled for payment method operation {1} ({2}).");
        };
        RetailLogger.posPaymentMethodViewModelLoadFailed = function (correlationId, operationId, operationName, error) {
            TsLogging.LoggerBase.writeEvent("posPaymentMethodViewModelLoadFailed", 48135, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Payment method view model load failed for payment method operation {1} ({2}).");
        };
        RetailLogger.posPaymentUIButtonClicked = function (correlationId, controllerName, buttonName) {
            TsLogging.LoggerBase.writeEvent("posPaymentUIButtonClicked", 48136, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Button '{2}' was clicked on the controller {1} during a payment operation.");
        };
        RetailLogger.posIsValidatingSignatureFromExternalSource = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posIsValidatingSignatureFromExternalSource", 48137, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "PaymentMethodViewModelBase is validating signature data from an external source.");
        };
        RetailLogger.posGetSignatureRequestIsRetrievingFromPOS = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posGetSignatureRequestIsRetrievingFromPOS", 48138, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Get signature request handler started retrieving a signature from a POS user interface.");
        };
        RetailLogger.posGetSignatureRequestIsRetrievingFromDevice = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posGetSignatureRequestIsRetrievingFromDevice", 48139, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Get signature request handler started retrieving a signature from a signature capture device.");
        };
        RetailLogger.posGetSignatureRequestSkippingSignatureCapture = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posGetSignatureRequestSkippingSignatureCapture", 48140, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Get signature request handler skipped retrieving a signature as signature is not required.");
        };
        RetailLogger.posValidateSignatureInPOSActivityStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posValidateSignatureInPOSActivityStarted", 48141, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Validate signature in POS activity started.");
        };
        RetailLogger.posValidateSignatureInPOSActivitySucceeded = function (correlationId, result) {
            TsLogging.LoggerBase.writeEvent("posValidateSignatureInPOSActivitySucceeded", 48142, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Validate signature in POS activity completed with result: {1}.");
        };
        RetailLogger.posValidateSignatureInPOSActivityFailed = function (correlationId, error) {
            TsLogging.LoggerBase.writeEvent("posValidateSignatureInPOSActivityFailed", 48143, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Validate signature in POS activity failed with error: {1}.");
        };
        RetailLogger.posGetSignatureInPOSActivityStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posGetSignatureInPOSActivityStarted", 48144, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Get signature in POS activity started.");
        };
        RetailLogger.posGetSignatureInPOSActivitySucceeded = function (correlationId, result) {
            TsLogging.LoggerBase.writeEvent("posGetSignatureInPOSActivitySucceeded", 48145, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Get signature in POS activity completed with result: {1}.");
        };
        RetailLogger.posGetSignatureInPOSActivityFailed = function (correlationId, error) {
            TsLogging.LoggerBase.writeEvent("posGetSignatureInPOSActivityFailed", 48146, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Get signature in POS activity failed with error: {1}.");
        };
        RetailLogger.posGetSignatureFromDeviceActivityStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posGetSignatureFromDeviceActivityStarted", 48147, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Get signature from device activity started.");
        };
        RetailLogger.posGetSignatureFromDeviceActivitySucceeded = function (correlationId, result) {
            TsLogging.LoggerBase.writeEvent("posGetSignatureFromDeviceActivitySucceeded", 48148, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Get signature from device activity completed with result: {1}.");
        };
        RetailLogger.posGetSignatureFromDeviceActivityFailed = function (correlationId, error) {
            TsLogging.LoggerBase.writeEvent("posGetSignatureFromDeviceActivityFailed", 48149, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Get signature from device activity failed with error: {1}.");
        };
        RetailLogger.posGetValidatedSignatureAndUpdateTenderLineFlowFailed = function (correlationId, error) {
            TsLogging.LoggerBase.writeEvent("posGetValidatedSignatureAndUpdateTenderLineFlowFailed", 48150, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Get validated signature and update tender line flow failed. This failure will be ignored. Error: {1}.");
        };
        RetailLogger.posValidateSignatureAndUpdateTenderLineFlowFailed = function (correlationId, error) {
            TsLogging.LoggerBase.writeEvent("posValidateSignatureAndUpdateTenderLineFlowFailed", 48151, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Validate signature and update tender line flow failed. This failure will be ignored. Error: {1}.");
        };
        RetailLogger.posPaymentViewOnShownStarted = function (correlationId, operationId, operationName) {
            TsLogging.LoggerBase.writeEvent("posPaymentViewOnShownStarted", 48152, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "PaymentView on shown started for payment method operation {1} ({2}).");
        };
        RetailLogger.posPaymentViewOnShownSucceeded = function (correlationId, operationId, operationName) {
            TsLogging.LoggerBase.writeEvent("posPaymentViewOnShownSucceeded", 48153, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "PaymentView on shown succeeded for payment method operation {1} ({2}).");
        };
        RetailLogger.posPaymentViewOnShownCancelled = function (correlationId, operationId, operationName) {
            TsLogging.LoggerBase.writeEvent("posPaymentViewOnShownCancelled", 48154, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "PaymentView on shown cancelled for payment method operation {1} ({2}).");
        };
        RetailLogger.posPaymentViewOnShownFailed = function (correlationId, operationId, operationName, error) {
            TsLogging.LoggerBase.writeEvent("posPaymentViewOnShownFailed", 48155, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "PaymentView on shown failed for payment method operation {1} ({2}).");
        };
        RetailLogger.posPaymentMsrEventHandlerStarted = function (correlationId, operationId, operationName) {
            TsLogging.LoggerBase.writeEvent("posPaymentMsrEventHandlerStarted", 48156, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Payment view MSR event handler started.");
        };
        RetailLogger.posPaymentMsrEventHandlerSucceeded = function (correlationId, operationId, operationName) {
            TsLogging.LoggerBase.writeEvent("posPaymentMsrEventHandlerSucceeded", 48157, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Payment view MSR event handler succeeded.");
        };
        RetailLogger.posPaymentMsrEventHandlerFailed = function (correlationId, operationId, operationName, error) {
            TsLogging.LoggerBase.writeEvent("posPaymentMsrEventHandlerFailed", 48158, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Payment view MSR event handler failed.");
        };
        RetailLogger.posPaymentBarcodeScannerEventHandlerStarted = function (correlationId, operationId, operationName) {
            TsLogging.LoggerBase.writeEvent("posPaymentBarcodeScannerEventHandlerStarted", 48159, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Payment view barcode scanner event handler started.");
        };
        RetailLogger.posPaymentBarcodeScannerEventHandlerSucceeded = function (correlationId, operationId, operationName) {
            TsLogging.LoggerBase.writeEvent("posPaymentBarcodeScannerEventHandlerSucceeded", 48160, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Payment view barcode scanner event handler succeeded.");
        };
        RetailLogger.posPaymentBarcodeScannerEventHandlerFailed = function (correlationId, operationId, operationName, error) {
            TsLogging.LoggerBase.writeEvent("posPaymentBarcodeScannerEventHandlerFailed", 48161, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Payment view barcode scanner event handler failed.");
        };
        RetailLogger.posCardPaymentGetCardTypeStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posPaymentGetCardTypeStarted", 48162, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Payment get card type started.");
        };
        RetailLogger.posCardPaymentGetCardTypeSucceeded = function (correlationId, cardTypeId) {
            TsLogging.LoggerBase.writeEvent("posPaymentGetCardTypeSucceeded", 48163, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Payment get card type succeeded with card type id {1}.");
        };
        RetailLogger.posCardPaymentGetCardTypeCancelled = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posPaymentGetCardTypeCancelled", 48164, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Payment get card type cancelled.");
        };
        RetailLogger.posCardPaymentGetCardTypeFailed = function (correlationId, error) {
            TsLogging.LoggerBase.writeEvent("posPaymentGetCardTypeFailed", 48165, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Payment get card type failed.");
        };
        RetailLogger.posSelectCardTypeStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posSelectCardTypeStarted", 48166, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Payment select card type started.");
        };
        RetailLogger.posSelectCardTypeSucceeded = function (correlationId, cardTypeId) {
            TsLogging.LoggerBase.writeEvent("posSelectCardTypeSucceeded", 48167, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Payment select card type succeeded. Selected card type id: {1}.");
        };
        RetailLogger.posSelectCardTypeCancelled = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posSelectCardTypeCancelled", 48168, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Payment select card type cancelled.");
        };
        RetailLogger.posSelectCardTypeFailed = function (correlationId, error) {
            TsLogging.LoggerBase.writeEvent("posSelectCardTypeFailed", 48169, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Payment select card type failed.");
        };
        RetailLogger.posPaymentAddPreprocessedTenderLineStarted = function (correlationId, operationId, operationName) {
            TsLogging.LoggerBase.writeEvent("posPaymentAddPreprocessedTenderLineStarted", 48170, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Payment add preprocessed tender line started for payment method operation {1} ({2}).");
        };
        RetailLogger.posPaymentAddPreprocessedTenderLineSucceeded = function (correlationId, operationId, operationName) {
            TsLogging.LoggerBase.writeEvent("posPaymentAddPreprocessedTenderLineSucceeded", 48171, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Payment add preprocessed tender line succeeded for payment method operation {1} ({2}).");
        };
        RetailLogger.posPaymentAddPreprocessedTenderLineCancelled = function (correlationId, operationId, operationName) {
            TsLogging.LoggerBase.writeEvent("posPaymentAddPreprocessedTenderLineCancelled", 48172, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Payment add preprocessed tender line cancelled for payment method operation {1} ({2}).");
        };
        RetailLogger.posPaymentAddPreprocessedTenderLineFailed = function (correlationId, operationId, operationName, error) {
            TsLogging.LoggerBase.writeEvent("posPaymentAddPreprocessedTenderLineFailed", 48173, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Payment add preprocessed tender line failed for payment method operation {1} ({2}).");
        };
        RetailLogger.posPaymentFailedToRetrievePaymentTransactionReferenceId = function (correlationId, errors) {
            TsLogging.LoggerBase.writeEvent("posPaymentFailedToRetrievePaymentTransactionReferenceId", 48174, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "An attempt to retrieve payment transaction reference ID has failed. See associated Hardware Station logs for the error details. Correlation ID: '{0}'. Errors: '{1}'.");
        };
        RetailLogger.posPaymentTransactionReferenceDataFoundInStorage = function (paymentTransactionReferenceData, correlationId) {
            TsLogging.LoggerBase.writeEvent("posPaymentTransactionReferenceDataFoundInStorage", 48175, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Payment Transaction Reference Data was found in the storage: {0}. Correlation ID: '{1}'.");
        };
        RetailLogger.posPaymentTransactionReferenceDataNotFoundInStorage = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posPaymentTransactionReferenceDataNotFoundInStorage", 48176, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Payment Transaction Reference Data was not found in the storage. Correlation ID: '{0}'.");
        };
        RetailLogger.posPaymentTransactionReferenceIdNotSupported = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posPaymentTransactionReferenceIdNotSupported", 48177, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Payment Transaction Reference Data is not supported by the connector. Correlation ID: '{0}'.");
        };
        RetailLogger.posPaymentTransactionReferenceIdRetrievedFromConnector = function (paymentTransactionReferenceId, correlationId) {
            TsLogging.LoggerBase.writeEvent("posPaymentTransactionReferenceIdRetrievedFromConnector", 48178, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Payment Transaction Reference ID was successfully retrieved from the connector: '{0}'. Correlation ID: '{1}'.");
        };
        RetailLogger.posPaymentTransactionReferenceDataWasStored = function (paymentTransactionReferenceData, correlationId) {
            TsLogging.LoggerBase.writeEvent("posPaymentTransactionReferenceDataWasStored", 48180, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Complete Payment Transaction Reference Data was successfully stored in the storage: '{0}'. Correlation ID: '{1}'.");
        };
        RetailLogger.posPaymentSkippingDuplicateAuthorization = function (paymentTransactionReferenceData, correlationId) {
            TsLogging.LoggerBase.writeEvent("posPaymentSkippingDuplicateAuthorization", 48181, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Skipping Authorization step because an existing Authorization was found for the given Payment Transaction Reference Data '{0}'. Correlation ID: '{1}'.");
        };
        RetailLogger.posPaymentDuplicateAuthorizationNotFound = function (paymentTransactionReferenceData, correlationId) {
            TsLogging.LoggerBase.writeEvent("posPaymentDuplicateAuthorizationNotFound", 48182, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Duplicate Authorization was not found for the given Payment Transaction Reference Data '{0}'. Correlation ID: '{1}'.");
        };
        RetailLogger.posPaymentReacquiringTransactionReference = function (previousPaymentTransactionReferenceData, correlationId) {
            TsLogging.LoggerBase.writeEvent("posPaymentReacquiringTransactionReference", 48183, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Reacquiring payment transaction reference data because no corresponding existing transaction was found for the existing reference data and some connectors don't support reusing the same data for more than one authorization. Original Payment Transaction Reference Data: '{0}'; Correlation ID: '{1}'.");
        };
        RetailLogger.posPaymentAmountDidntMatchForFoundTransaction = function (paymentTransactionReferenceData, foundTransactionAmount, currentlyRequestedAmount, correlationId) {
            TsLogging.LoggerBase.writeEvent("posPaymentAmountDidntMatchForFoundTransaction", 48184, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The amount on the trasnaction found by the payment transaction reference data didn't match to the current amount. Payment CorrelationID: '{0}'; Found Transaction's Amount: '{1}', Currently requested amount: '{2}'. Diagnostics Correlation ID: '{3}'.");
        };
        RetailLogger.posPaymentRemovingPaymentTransactionReferenceData = function (paymentTransactionReferenceData, removalReason, additionalData, correlationId) {
            TsLogging.LoggerBase.writeEvent("posPaymentRemovingPaymentTransactionReferenceData", 48185, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Removing Payment Transaction Reference Data because {1}. Payment Transaction Reference Data: '{0}'; Additional data: '{2}'; Correlation ID: '{3}'.");
        };
        RetailLogger.posPaymentUsingExistingPaymentTransaction = function (paymentTransactionReferenceData, correlationId) {
            TsLogging.LoggerBase.writeEvent("posPaymentUsingExistingPaymentTransaction", 48186, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Cashier elected to use an existing payment transaction found by duplicate protection feature. Payment Transaction Reference Data: '{0}'; Correlation ID: '{1}'.");
        };
        RetailLogger.posPaymentSkippedPartialCheck = function (paymentTransactionReferenceData, paymentAmount, approvedAmount, isTransactionRecovered, correlationId) {
            TsLogging.LoggerBase.writeEvent("posPaymentSkippedPartialCheck", 48187, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Partial authorization check has been skipped. Payment Transaction Reference Data: '{0}'; Payment Amount: '{1}'; Approved Amount: '{2}'; The transaction was recovered by Duplicated Payments Protection: '{3}'; Correlation ID: '{4}'.");
        };
        RetailLogger.posOperationCanceledDueToRecoveredPayment = function (cancellationReason, correlationId) {
            TsLogging.LoggerBase.writeEvent("posOperationCanceledDueToRecoveredPayment", 48188, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The operation {0} has been canceled because a not processed payment transaction was found; Correlation ID: '{1}'.");
        };
        RetailLogger.posPaymentFailedToRetrieveTransactionByTransactionReferenceData = function (transactionReferenceData, errors, correlationId) {
            TsLogging.LoggerBase.writeEvent("posPaymentFailedToRetrieveTransactionByTransactionReferenceData", 48189, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Failed to retrieve Payment Transaction by Transaction Reference Data. Payment Transaction Reference Data: '{0}'; Errors: '{1}'; Correlation ID: '{2}'.");
        };
        RetailLogger.posPaymentSkippedDisplayingError = function (action, errors, correlationId) {
            TsLogging.LoggerBase.writeEvent("posPaymentSkippedDisplayingError", 48191, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Skipped displaying UI corresponding to an error while executing action '{0}'. Errors: '{1}'. Correlation ID: '{2}'.");
        };
        RetailLogger.posPaymentDeserializedTransactionReferenceMalformed = function (transactionReferenceData, error, correlationId) {
            TsLogging.LoggerBase.writeEvent("posPaymentDeserializedTransactionReferenceMalformed", 48192, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "An attempt to deserialize Payment Transaction Reference Data has failed due to malformed data: '{0}'. Correlation ID: '{1}'.");
        };
        RetailLogger.posPaymentRetryRetrievingTransactionByReferenceData = function (retriesLeft, correlationId) {
            TsLogging.LoggerBase.writeEvent("posPaymentRetryRetrievingTransactionByReferenceData", 48193, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Initiating a retry attempt to get payment transaction by reference data. Retries left: '{0}'. Correlation ID: '{1}'.");
        };
        RetailLogger.posPaymentStopRetrievingTransactionByReferenceDueToUnknownError = function (paymentErrorCode, retriesLeft, correlationId) {
            TsLogging.LoggerBase.writeEvent("posPaymentStopRetrievingTransactionByReferenceDueToUnknownError", 48194, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Stopping attempts to get payment transaction by reference data due to unknown payment error code '{0}'. Retries left (will not be attempted): '{1}'. Correlation ID: '{2}'.");
        };
        RetailLogger.posPaymentInformedUserRecoveredTransactionSameAmount = function (allowedActions, transactionReferenceData, correlationId) {
            TsLogging.LoggerBase.writeEvent("posPaymentInformedUserRecoveredTransactionSameAmount", 48195, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Informed user that a recovered payment transaction was found. Allowed Actions: '{0}'. Transaction Reference Data: '{1}'. Correlation ID: '{2}'.");
        };
        RetailLogger.posPaymentInformedUserRecoveredTransactionDifferentAmount = function (currentlyRequestedAmount, transactionReferenceData, correlationId) {
            TsLogging.LoggerBase.writeEvent("posPaymentInformedUserRecoveredTransactionDifferentAmount", 48196, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Informed user that a recovered payment transaction for a different amount was found. Currently requested amount: '{0}'. Transaction Reference Data: '{1}'. Correlation ID: '{2}'.");
        };
        RetailLogger.posPaymentCheckGiftCardBalanceStarted = function (correlationId, tenderTypeId) {
            TsLogging.LoggerBase.writeEvent("posPaymentCheckGiftCardBalanceStarted", 48197, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Check gift card balance started for tender type id {0}.");
        };
        RetailLogger.posPaymentCheckGiftCardBalanceSucceeded = function (correlationId, tenderTypeId) {
            TsLogging.LoggerBase.writeEvent("posPaymentCheckGiftCardBalanceSucceeded", 48198, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Check gift card balance succeeded for tender type id {0}.");
        };
        RetailLogger.posPaymentCheckGiftCardBalanceFailed = function (correlationId, tenderTypeId, error) {
            TsLogging.LoggerBase.writeEvent("posPaymentCheckGiftCardBalanceFailed", 48199, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Check gift card balance failed for tender type id {0}.");
        };
        RetailLogger.posGetGiftCardRequestStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posGetGiftCardRequestStarted", 48200, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Get gift card request started.");
        };
        RetailLogger.posGetGiftCardRequestRetrievePrivateTenderFailed = function (correlationId, error) {
            TsLogging.LoggerBase.writeEvent("posGetGiftCardRequestRetrievePrivateTenderFailed", 48201, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Get gift card request retrieve private tender failed.");
        };
        RetailLogger.posGetGiftCardRequestPaymentTerminalNotConfigured = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posGetGiftCardRequestPaymentTerminalNotConfigured", 48202, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Get gift card request payment terminal not provided.");
        };
        RetailLogger.posGetGiftCardRequestSucceeded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posGetGiftCardRequestSucceeded", 48203, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Get gift card request succeeded.");
        };
        RetailLogger.posGetGiftCardRequestFailed = function (correlationId, error) {
            TsLogging.LoggerBase.writeEvent("posGetGiftCardRequestFailed", 48204, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Get gift card request failed.");
        };
        RetailLogger.posValidatePaymentInfoStarted = function (correlationId, operationId, operationName) {
            TsLogging.LoggerBase.writeEvent("posValidatePaymentInfoStarted", 48205, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Validate payment information started for payment method operation {1} ({2}).");
        };
        RetailLogger.posValidatePaymentInfoSucceeded = function (correlationId, operationId, operationName) {
            TsLogging.LoggerBase.writeEvent("posValidatePaymentInfoSucceeded", 48206, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Validate payment information succeeded for payment method operation {1} ({2}).");
        };
        RetailLogger.posValidatePaymentInfoFailed = function (correlationId, operationId, operationName, error) {
            TsLogging.LoggerBase.writeEvent("posValidatePaymentInfoFailed", 48207, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Validate payment information failed for payment method operation {1} ({2}).");
        };
        RetailLogger.posPaymentCreateNewCustomerStarted = function (correlationId, operationId, operationName) {
            TsLogging.LoggerBase.writeEvent("posPaymentCreateNewCustomerStarted", 48208, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Creation of new customer method started for payment method operation {1} ({2}).");
        };
        RetailLogger.posPaymentCreateNewCustomerSucceeded = function (correlationId, operationId, operationName, customerId) {
            TsLogging.LoggerBase.writeEvent("posPaymentCreateNewCustomerSucceeded", 48209, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Creation of new customer method succeeded for payment method operation {1} ({2}). Customer id = {3}");
        };
        RetailLogger.posPaymentCreateNewCustomerCanceled = function (correlationId, operationId, operationName) {
            TsLogging.LoggerBase.writeEvent("posPaymentCreateNewCustomerCanceled", 48210, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Creation of new customer method canceled for payment method operation {1} ({2}).");
        };
        RetailLogger.posPaymentCreateNewCustomerFailed = function (correlationId, operationId, operationName, error) {
            TsLogging.LoggerBase.writeEvent("posPaymentCreateNewCustomerFailed", 48211, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Creation of new customer method failed for payment method operation {1} ({2}).");
        };
        RetailLogger.posPaymentSearchCustomersStarted = function (correlationId, operationId, operationName) {
            TsLogging.LoggerBase.writeEvent("posPaymentSearchCustomersStarted", 48212, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Search of customer method started for payment method operation {1} ({2}).");
        };
        RetailLogger.posPaymentSearchCustomersSucceeded = function (correlationId, operationId, operationName, customerId) {
            TsLogging.LoggerBase.writeEvent("posPaymentSearchCustomersSucceeded", 48213, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Search of customer method succeeded for payment method operation {1} ({2}). Customer id = {3}");
        };
        RetailLogger.posPaymentSearchCustomersCanceled = function (correlationId, operationId, operationName) {
            TsLogging.LoggerBase.writeEvent("posPaymentSearchCustomersCanceled", 48214, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Search of customer method canceled for payment method operation {1} ({2}).");
        };
        RetailLogger.posPaymentSearchCustomersFailed = function (correlationId, operationId, operationName, error) {
            TsLogging.LoggerBase.writeEvent("posPaymentSearchCustomersFailed", 48215, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Search of customer method failed for payment method operation {1} ({2}).");
        };
        RetailLogger.posCheckCreditMemoBalanceStarted = function (correlationId, operationId, operationName) {
            TsLogging.LoggerBase.writeEvent("posCheckCreditMemoBalanceStarted", 48216, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Check credit memo balance started for payment method operation {1} ({2}).");
        };
        RetailLogger.posCheckCreditMemoBalanceSucceeded = function (correlationId, operationId, operationName) {
            TsLogging.LoggerBase.writeEvent("posCheckCreditMemoBalanceSucceeded", 48217, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Check credit memo balance succeeded for payment method operation {1} ({2}).");
        };
        RetailLogger.posCheckCreditMemoBalanceFailed = function (correlationId, operationId, operationName, error) {
            TsLogging.LoggerBase.writeEvent("posCheckCreditMemoBalanceFailed", 48218, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Check credit memo balance failed for payment method operation {1} ({2}).");
        };
        RetailLogger.posApprovePartialAmountActivityStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posApprovePartialAmountActivityStarted", 48219, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Approve partial amount activity started.");
        };
        RetailLogger.posApprovePartialAmountActivitySucceeded = function (correlationId, result) {
            TsLogging.LoggerBase.writeEvent("posApprovePartialAmountActivitySucceeded", 48220, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Approve partial amount activity completed with result: {1}.");
        };
        RetailLogger.posApprovePartialAmountActivityFailed = function (correlationId, error) {
            TsLogging.LoggerBase.writeEvent("posApprovePartialAmountActivityFailed", 48221, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Approve partial amount activity failed with error: {1}.");
        };
        RetailLogger.posAddPreAuthorizedPaymentsStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAddPreAuthorizedPaymentsStarted", 48222, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Add preauthorized payments to cart request handler started.");
        };
        RetailLogger.posAddPreAuthorizedPaymentsNotApplicable = function (correlationId, isCustomerOrderPickup, isHardwareStationActive, authorizedTenderLinesLength, unauthorizedTenderLineExists) {
            TsLogging.LoggerBase.writeEvent("posAddPreAuthorizedPaymentsNotApplicable", 48223, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Add preauthorized payments to cart is not applicable so the flow has completed.");
        };
        RetailLogger.posAddPreAuthorizedPaymentsCancelled = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAddPreAuthorizedPaymentsCancelled", 48224, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Add preauthorized payments to cart was cancelled.");
        };
        RetailLogger.posAddPreAuthorizedPaymentsUpdateAuthorizedTenderLineStarted = function (correlationId, authorizedAmount, updatedAmount, paymentRefRecId) {
            TsLogging.LoggerBase.writeEvent("posAddPreAuthorizedPaymentsUpdateAuthorizedTenderLineStarted", 48225, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Add preauthorized payments updating the authorized tender line started.");
        };
        RetailLogger.posAddPreAuthorizedPaymentsUpdateAuthorizedTenderLineSucceeded = function (correlationId, authorizedAmount, updatedAmount, paymentRefRecId) {
            TsLogging.LoggerBase.writeEvent("posAddPreAuthorizedPaymentsUpdateAuthorizedTenderLineSucceeded", 48226, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Add preauthorized payments updating the authorized tender line succeeded.");
        };
        RetailLogger.posAddPreAuthorizedPaymentsUpdateAuthorizedTenderLineFailed = function (correlationId, authorizedAmount, updatedAmount, paymentRefRecId, errors) {
            TsLogging.LoggerBase.writeEvent("posAddPreAuthorizedPaymentsUpdateAuthorizedTenderLineFailed", 48227, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Add preauthorized payments updating the authorized tender line failed.");
        };
        RetailLogger.posAddPreAuthorizedPaymentsUpdateAuthorizeCardTokenStarted = function (correlationId, amount) {
            TsLogging.LoggerBase.writeEvent("posAddPreAuthorizedPaymentsUpdateAuthorizeCardTokenStarted", 48228, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Add preauthorized payments authorizing a card token started.");
        };
        RetailLogger.posAddPreAuthorizedPaymentsAuthorizeCardTokenRetryStarted = function (correlationId, amount) {
            TsLogging.LoggerBase.writeEvent("posAddPreAuthorizedPaymentsAuthorizeCardTokenRetryStarted", 48229, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Add preauthorized payments authorizing a card token retry started.");
        };
        RetailLogger.posAddPreAuthorizedPaymentsAuthorizeCardTokenSucceeded = function (correlationId, amount) {
            TsLogging.LoggerBase.writeEvent("posAddPreAuthorizedPaymentsAuthorizeCardTokenSucceeded", 48230, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Add preauthorized payments authorizing a card token succeeded.");
        };
        RetailLogger.posAddPreAuthorizedPaymentsAuthorizeCardTokenFailed = function (correlationId, amount, errors) {
            TsLogging.LoggerBase.writeEvent("posAddPreAuthorizedPaymentsAuthorizeCardTokenFailed", 48231, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Add preauthorized payments authorizing a card token failed.");
        };
        RetailLogger.posAddPreAuthorizedPaymentsUpdateUnauthorizedTenderLineStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAddPreAuthorizedPaymentsUpdateUnauthorizedTenderLineStarted", 48232, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Add preauthorized payments updating the unauthorized tender line started.");
        };
        RetailLogger.posAddPreAuthorizedPaymentsUpdateUnauthorizedTenderLineSucceeded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAddPreAuthorizedPaymentsUpdateUnauthorizedTenderLineSucceeded", 48233, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Add preauthorized payments updating the unauthorized tender line succeeded.");
        };
        RetailLogger.posAddPreAuthorizedPaymentsUpdateUnauthorizedTenderLineFailed = function (correlationId, errors) {
            TsLogging.LoggerBase.writeEvent("posAddPreAuthorizedPaymentsUpdateUnauthorizedTenderLineFailed", 48234, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Add preauthorized payments updating the unauthorized tender line failed.");
        };
        RetailLogger.posAddPreAuthorizedPaymentsAuthorizeCardTokenNotApproved = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAddPreAuthorizedPaymentsAuthorizeCardTokenNotApproved", 48235, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Add preauthorized payments authorizing a card token was not approved.");
        };
        RetailLogger.posAddPreAuthorizedPaymentsSucceeded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAddPreAuthorizedPaymentsSucceeded", 48236, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Add preauthorized payments to cart request handler succeeded.");
        };
        RetailLogger.posAddPreAuthorizedPaymentsFailed = function (correlationId, errors) {
            TsLogging.LoggerBase.writeEvent("posAddPreAuthorizedPaymentsFailed", 48237, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Add preauthorized payments to cart request handler failed.");
        };
        RetailLogger.posAddPreAuthorizedPaymentsAuthorizeCardTokenSkipped = function (correlationId, remainingAmount, unauthorizedTenderLineExists) {
            TsLogging.LoggerBase.writeEvent("posAddPreAuthorizedPaymentsAuthorizeCardTokenSkipped", 48238, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Add preauthorized payments authorizing a card token was skipped.");
        };
        RetailLogger.posCardPaymentLoadingMerchantPropertiesAlreadyInProgress = function () {
            TsLogging.LoggerBase.writeEvent("posCardPaymentLoadingMerchantPropertiesAlreadyInProgress", 48239, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Another operation to load merchant properties is already in progress.");
        };
        RetailLogger.posCardPaymentLoadingMerchantPropertiesForCartStarted = function (cartId) {
            TsLogging.LoggerBase.writeEvent("posCardPaymentLoadingMerchantPropertiesForCartStarted", 48240, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Loading merchant properties for the cart started. Cart id: {0}");
        };
        RetailLogger.posCardPaymentRetrievedServiceAccountIdsFromCartToLoadMerchantProperties = function (cartId) {
            TsLogging.LoggerBase.writeEvent("posCardPaymentRetrievedServiceAccountIdsFromCartToLoadMerchantProperties", 48241, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Retrieved service account Ids from the tender lines on the cart to load merchant properties. Cart id: {0}");
        };
        RetailLogger.posCardPaymentRetailServerCallToLoadMerchantPropertiesStarted = function (cartId) {
            TsLogging.LoggerBase.writeEvent("posCardPaymentRetailServerCallToLoadMerchantPropertiesStarted", 48242, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Retail server call to get merchant properties started. Cart id: {0}");
        };
        RetailLogger.posCardPaymentRetailServerCallToLoadMerchantPropertiesCompletedSuccessfully = function (cartId) {
            TsLogging.LoggerBase.writeEvent("posCardPaymentRetailServerCallToLoadMerchantPropertiesCompletedSuccessfully", 48243, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Retail server call to get merchant properties completed successfully. Cart id: {0}");
        };
        RetailLogger.posCardPaymentRetailServerCallToLoadMerchantPropertiesFailed = function (cartId, errors) {
            TsLogging.LoggerBase.writeEvent("posCardPaymentRetailServerCallToLoadMerchantPropertiesFailed", 48244, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Retail server call to get merchant properties failed. Cart id: {0}");
        };
        RetailLogger.posCardPaymentLoadingMerchantPropertiesForCartSkipped = function (cartId) {
            TsLogging.LoggerBase.writeEvent("posCardPaymentLoadingMerchantPropertiesForCartSkipped", 48245, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Loading merchant properties for the cart was skipped. Cart id: {0}");
        };
        RetailLogger.posCardPaymentMerchantPropertiesForPaymentExist = function (serviceAccountId) {
            TsLogging.LoggerBase.writeEvent("posCardPaymentMerchantPropertiesForCartExist", 48246, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Merchant properties for cart exist. Using them for the payment. Service account id: {0}");
        };
        RetailLogger.posCardPaymentLoadingMerchantPropertiesForPayment = function (serviceAccountId) {
            TsLogging.LoggerBase.writeEvent("posCardPaymentLoadingMerchantPropertiesForPayment", 48247, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Loading merchant properties for the payment. Service account id: {0}");
        };
        RetailLogger.posCardPaymentClearedMerchantPropertiesForCart = function () {
            TsLogging.LoggerBase.writeEvent("posCardPaymentClearedMerchantPropertiesForCart", 48248, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Cleared merchant properties for the cart.");
        };
        RetailLogger.posConcludeTransactionPreAuthorizedPaymentCaptureFailed = function (correlationId, paymentRefRecId, tenderLineNumber) {
            TsLogging.LoggerBase.writeEvent("posConcludeTransactionPreAuthorizedPaymentCaptureFailed", 48249, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Capturing the pre-authorized payment. Correlation id: {0}. Payment Record id: {1}. Tender line number: {2}");
        };
        RetailLogger.posConcludeTransactionUpdatingPreAuthorizedTenderLineFailed = function (correlationId, paymentRefRecId, tenderLineNumber, error) {
            TsLogging.LoggerBase.writeEvent("posConcludeTransactionUpdatingPreAuthorizedTenderLineFailed", 48250, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Updating the pre-authorized payment to indicate capture failure failed. Correlation id: {0}. Payment Record id: {1}. Tender line number: {2}. Error: {3}");
        };
        RetailLogger.posConcludeTransactionUpdatingPreAuthorizedTenderLineSucceeded = function (correlationId, paymentRefRecId, tenderLineNumber) {
            TsLogging.LoggerBase.writeEvent("posConcludeTransactionUpdatingPreAuthorizedTenderLineSucceeded", 48251, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Updating the pre-authorized payment to indicate capture failure succeeded. Correlation id: {0}. Payment Record id: {1}. Tender line number: {2}");
        };
        RetailLogger.posConcludeTransactionReauthorizingPaymentUsingCardTokenStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posConcludeTransactionReauthorizingPaymentUsingCardTokenStarted", 48252, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Re-authorizing payment using the card token on the pre-authorized payment started. Correlation id: {0}");
        };
        RetailLogger.posConcludeTransactionReauthorizingPaymentUsingCardTokenSucceeded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posConcludeTransactionReauthorizingPaymentUsingCardTokenSucceeded", 48253, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Re-authorizing payment using the card token on the pre-authorized payment succeeded. Correlation id: {0}");
        };
        RetailLogger.posConcludeTransactionReauthorizingPaymentUsingCardTokenFailed = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posConcludeTransactionReauthorizingPaymentUsingCardTokenFailed", 48254, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Re-authorizing payment using the card token on the pre-authorized payment failed. Correlation id: {0}");
        };
        RetailLogger.posConcludeTransactionAddingReauthorizedTenderLineToCartStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posConcludeTransactionAddingReauthorizedTenderLineToCartStarted", 48255, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Adding re-authorized payment to cart started. Correlation id: {0}");
        };
        RetailLogger.posConcludeTransactionAddingReauthorizedTenderLineToCartSucceeded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posConcludeTransactionAddingReauthorizedTenderLineToCartSucceeded", 48256, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Adding re-authorized payment to cart succeeded. Correlation id: {0}");
        };
        RetailLogger.posConcludeTransactionAddingReauthorizedTenderLineToCartFailed = function (correlationId, error) {
            TsLogging.LoggerBase.writeEvent("posConcludeTransactionAddingReauthorizedTenderLineToCartFailed", 48257, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Adding re-authorized payment to cart failed. Correlation id: {0}. Error: {1}");
        };
        RetailLogger.posConcludeTransactionCapturingReauthorizedTenderLineStarted = function (correlationId, tenderLineNumber) {
            TsLogging.LoggerBase.writeEvent("posConcludeTransactionCapturingReauthorizedTenderLineStarted", 48258, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Capturing and updating re-authorized tender line started. Correlation id: {0}. Tender line number: {1}");
        };
        RetailLogger.posConcludeTransactionCapturingReauthorizedTenderLineSucceeded = function (correlationId, tenderLineNumber) {
            TsLogging.LoggerBase.writeEvent("posConcludeTransactionCapturingReauthorizedTenderLineSucceeded", 48259, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Capturing and updating re-authorized tender line succeeded. Correlation id: {0}. Tender line number: {1}");
        };
        RetailLogger.posConcludeTransactionCapturingReauthorizedTenderLineFailed = function (correlationId, tenderLineNumber, error) {
            TsLogging.LoggerBase.writeEvent("posConcludeTransactionCapturingReauthorizedTenderLineFailed", 48260, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Capturing and updating re-authorized tender line failed. Correlation id: {0}. Tender line number: {1}. Error: {2}");
        };
        RetailLogger.posConcludeTransactionVoidPaymentStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posConcludeTransactionVoidPaymentStarted", 48261, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Void payment started. Correlation id: {0}.");
        };
        RetailLogger.posConcludeTransactionVoidPaymentSucceeded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posConcludeTransactionVoidPaymentSucceeded", 48262, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Voiding the payment succeeded. Correlation id: {0}.");
        };
        RetailLogger.posConcludeTransactionVoidPaymentCanceled = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posConcludeTransactionVoidPaymentCanceled", 48263, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Voiding the payment was canceled. Correlation id: {0}.");
        };
        RetailLogger.posConcludeTransactionVoidPaymentFailed = function (correlationId, error) {
            TsLogging.LoggerBase.writeEvent("posConcludeTransactionVoidPaymentFailed", 48264, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Voiding the payment failed. Correlation id: {0}. Error: {1}");
        };
        RetailLogger.posConcludeTransactionAddingVoidedTenderLineToCartStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posConcludeTransactionAddingVoidedTenderLineToCartStarted", 48265, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Adding voided tender line to cart started. Correlation id: {0}.");
        };
        RetailLogger.posConcludeTransactionAddingVoidedTenderLineToCartSucceeded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posConcludeTransactionAddingVoidedTenderLineToCartSucceeded", 48266, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Adding voided tender line to cart succeeded. Correlation id: {0}.");
        };
        RetailLogger.posConcludeTransactionAddingVoidedTenderLineToCartFailed = function (correlationId, error) {
            TsLogging.LoggerBase.writeEvent("posConcludeTransactionAddingVoidedTenderLineToCartFailed", 48267, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Adding voided tender line to cart failed. Correlation id: {0}. Error: {1}");
        };
        RetailLogger.posConcludeTransactionUserSelectedToRetryVoid = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posConcludeTransactionUserSelectedToRetryVoid", 48268, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "User selected to rety voiding the payment. Correlation id: {0}.");
        };
        RetailLogger.posConcludeTransactionRetryVoidPaymentUserPromptFailedToRender = function (correlationId, error) {
            TsLogging.LoggerBase.writeEvent("posConcludeTransactionRetryVoidPaymentUserPromptFailedToRender", 48269, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The user prompt to ask whether void payment should be retried failed to render. Correlation id: {0}. Error: {1}");
        };
        RetailLogger.posConcludeTransactionCapturingPaymentSucceeded = function (correlationId, isPastPayment) {
            TsLogging.LoggerBase.writeEvent("posConcludeTransactionCapturingPaymentSucceeded", 48270, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Capturing the payment succeeded. Correlation id: {0}. is Past Payment: {1}");
        };
        RetailLogger.posAuthorizeCardTokenStarted = function (correlationId, amount) {
            TsLogging.LoggerBase.writeEvent("posAuthorizeCardTokenStarted", 48271, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Authorizing a card token started.");
        };
        RetailLogger.posAuthorizeCardTokenSucceeded = function (correlationId, amount) {
            TsLogging.LoggerBase.writeEvent("posAuthorizeCardTokenSucceeded", 48272, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Authorizing a card token succeeded.");
        };
        RetailLogger.posAuthorizeCardTokenCancelled = function (correlationId, amount) {
            TsLogging.LoggerBase.writeEvent("posAuthorizeCardTokenCancelled", 48273, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Authorizing a card token cancelled.");
        };
        RetailLogger.posAuthorizeCardTokenFailed = function (correlationId, amount, errors) {
            TsLogging.LoggerBase.writeEvent("posAuthorizeCardTokenFailed", 48274, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Authorizing a card token failed.");
        };
        RetailLogger.posAuthorizeCardTokenNotApproved = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthorizeCardTokenNotApproved", 48275, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Authorizing a card token was not approved.");
        };
        RetailLogger.posAddAuthorizedDeferredTenderLineToCartStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAddAuthorizedDeferredTenderLineToCartStarted", 48276, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Adding an authorized deferred tender line to cart started.");
        };
        RetailLogger.posAddAuthorizedDeferredTenderLineToCartCancelled = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAddAuthorizedDeferredTenderLineToCartCancelled", 48277, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Adding an authorized deferred tender line to cart cancelled.");
        };
        RetailLogger.posAddAuthorizedDeferredTenderLineToCartSucceeded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAddAuthorizedDeferredTenderLineToCartSucceeded", 48278, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Adding an authorized deferred tender line to cart succeeded.");
        };
        RetailLogger.posAddAuthorizedDeferredTenderLineToCartFailed = function (correlationId, errors) {
            TsLogging.LoggerBase.writeEvent("posAddAuthorizedDeferredTenderLineToCartFailed", 48279, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Adding an authorized deferred tender line to cart failed.");
        };
        RetailLogger.posVoidPreviousAuthorizedTenderLineStarted = function (correlationId, paymentRefRecId) {
            TsLogging.LoggerBase.writeEvent("posVoidPreviousAuthorizedTenderLineStarted", 48280, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Voiding the previously authorized tender line to cart started.");
        };
        RetailLogger.posVoidPreviousAuthorizedTenderLineCancelled = function (correlationId, paymentRefRecId) {
            TsLogging.LoggerBase.writeEvent("posVoidPreviousAuthorizedTenderLineCancelled", 48281, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Voiding the previously authorized tender line to cart cancelled.");
        };
        RetailLogger.posVoidPreviousAuthorizedTenderLineSucceeded = function (correlationId, paymentRefRecId) {
            TsLogging.LoggerBase.writeEvent("posVoidPreviousAuthorizedTenderLineSucceeded", 48282, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Voiding the previously authorized tender line to cart succeeded.");
        };
        RetailLogger.posVoidPreviousAuthorizedTenderLineFailed = function (correlationId, paymentRefRecId, errors) {
            TsLogging.LoggerBase.writeEvent("posVoidPreviousAuthorizedTenderLineFailed", 48283, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Voiding the previously authorized tender line to cart failed.");
        };
        RetailLogger.posVoidPreviousAuthorizedTenderLineNotApplicable = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posVoidPreviousAuthorizedTenderLineNotApplicable", 48284, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Voiding the previously authorized tender line to cart not applicable.");
        };
        RetailLogger.posGetAuthorizationOptionsStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posGetAuthorizationOptionsStarted", 48285, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Getting the authorization options started.");
        };
        RetailLogger.posGetAuthorizationOptionsSucceeded = function (correlationId, isTokenizeSelected, isAuthorizeSelected, paymentRefRecIdToAuthorize) {
            TsLogging.LoggerBase.writeEvent("posGetAuthorizationOptionsSucceeded", 48286, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Getting the authorization options succeeded.");
        };
        RetailLogger.posGetAuthorizationOptionsCancelled = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posGetAuthorizationOptionsCancelled", 48287, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Getting the authorization options cancelled.");
        };
        RetailLogger.posGetAuthorizationOptionsFailed = function (correlationId, errors) {
            TsLogging.LoggerBase.writeEvent("posGetAuthorizationOptionsFailed", 48288, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Getting the authorization options failed.");
        };
        RetailLogger.posAuthorizationOfCardTokenSkipped = function (correlationId, isHardwareStationActive, isOmniChannelPaymentsEnabled) {
            TsLogging.LoggerBase.writeEvent("posAuthorizationOfCardTokenSkipped", 48289, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Authorization of card token skipped.");
        };
        RetailLogger.posApprovePartialPaymentStarted = function (correlationId, peripheralType) {
            TsLogging.LoggerBase.writeEvent("posApprovePartialPaymentStarted", 48290, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Approving the partial payment started.");
        };
        RetailLogger.posApprovePartialPaymentCancelled = function (correlationId, peripheralType) {
            TsLogging.LoggerBase.writeEvent("posApprovePartialPaymentCancelled", 48291, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Approving the partial payment cancelled.");
        };
        RetailLogger.posApprovePartialPaymentSucceeded = function (correlationId, peripheralType) {
            TsLogging.LoggerBase.writeEvent("posApprovePartialPaymentSucceeded", 48292, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Approving the partial payment succeeded.");
        };
        RetailLogger.posApprovePartialPaymentFailed = function (correlationId, peripheralType, errors) {
            TsLogging.LoggerBase.writeEvent("posApprovePartialPaymentFailed", 48293, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Approving the partial payment failed, which can include declining the payment on purpose.");
        };
        RetailLogger.posApprovePartialPaymentApproved = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posApprovePartialPaymentApproved", 48294, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "The partial payment was approved.");
        };
        RetailLogger.posApprovePartialPaymentNotApproved = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posApprovePartialPaymentNotApproved", 48295, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "The partial payment was not approved.");
        };
        RetailLogger.posVoidPaymentStarted = function (correlationId, peripheralType) {
            TsLogging.LoggerBase.writeEvent("posVoidPaymentStarted", 48296, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Void payment started.");
        };
        RetailLogger.posVoidPaymentCancelled = function (correlationId, peripheralType) {
            TsLogging.LoggerBase.writeEvent("posVoidPaymentCancelled", 48297, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Void payment cancelled.");
        };
        RetailLogger.posVoidPaymentSucceeded = function (correlationId, peripheralType) {
            TsLogging.LoggerBase.writeEvent("posVoidPaymentSucceeded", 48298, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Void payment succeeded.");
        };
        RetailLogger.posVoidPaymentFailed = function (correlationId, peripheralType, errors) {
            TsLogging.LoggerBase.writeEvent("posVoidPaymentFailed", 48299, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Void payment failed.");
        };
        RetailLogger.posVoidPaymentAddVoidedTenderLineStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posVoidPaymentAddVoidedTenderLineStarted", 48300, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Void payment adding voided tender line started.");
        };
        RetailLogger.posVoidPaymentAddVoidedTenderLineCancelled = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posVoidPaymentAddVoidedTenderLineCancelled", 48301, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Void payment adding voided tender line cancelled.");
        };
        RetailLogger.posVoidPaymentAddVoidedTenderLineSucceeded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posVoidPaymentAddVoidedTenderLineSucceeded", 48302, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Void payment adding voided tender line succeeded.");
        };
        RetailLogger.posVoidPaymentAddVoidedTenderLineFailed = function (correlationId, errors) {
            TsLogging.LoggerBase.writeEvent("posVoidPaymentAddVoidedTenderLineFailed", 48303, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Void payment adding voided tender line failed.");
        };
        RetailLogger.posVoidPaymentUsingPaymentTerminalVoidStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posVoidPaymentUsingPaymentTerminalVoidStarted", 48304, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Void payment payment terminal void started.");
        };
        RetailLogger.posVoidPaymentUsingPaymentTerminalVoidCancelled = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posVoidPaymentUsingPaymentTerminalVoidCancelled", 48305, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Void payment payment terminal void cancelled.");
        };
        RetailLogger.posVoidPaymentUsingPaymentTerminalVoidSucceeded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posVoidPaymentUsingPaymentTerminalVoidSucceeded", 48306, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Void payment payment terminal void succeeded.");
        };
        RetailLogger.posVoidPaymentUsingPaymentTerminalVoidFailed = function (correlationId, errors) {
            TsLogging.LoggerBase.writeEvent("posVoidPaymentUsingPaymentTerminalVoidFailed", 48307, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Void payment payment terminal void failed.");
        };
        RetailLogger.posVoidPaymentUsingCardPaymentVoidStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posVoidPaymentUsingCardPaymentVoidStarted", 48308, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Void payment card payment void started.");
        };
        RetailLogger.posVoidPaymentUsingCardPaymentVoidCancelled = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posVoidPaymentUsingCardPaymentVoidCancelled", 48309, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Void payment card payment void cancelled.");
        };
        RetailLogger.posVoidPaymentUsingCardPaymentVoidSucceeded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posVoidPaymentUsingCardPaymentVoidSucceeded", 48310, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Void payment card payment void succeeded.");
        };
        RetailLogger.posVoidPaymentUsingCardPaymentVoidFailed = function (correlationId, errors) {
            TsLogging.LoggerBase.writeEvent("posVoidPaymentUsingCardPaymentVoidFailed", 48311, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Void payment card payment void failed.");
        };
        RetailLogger.posVoidPaymentInvalidCardVersion = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posVoidPaymentInvalidCardVersion", 48312, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Void payment has invalid cart version.");
        };
        RetailLogger.posVoidPaymentPreventRecoveryOnFailure = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posVoidPaymentPreventRecoveryOnFailure", 48313, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Void payment preventing recovery on failure.");
        };
        RetailLogger.posVoidPaymentRetrying = function (correlationId, peripheralType) {
            TsLogging.LoggerBase.writeEvent("posVoidPaymentRetrying", 48314, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Void payment is retrying.");
        };
        RetailLogger.posGetLoyaltyCardRequestStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posGetLoyaltyCardRequestStarted", 48315, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Get loyalty card request started.");
        };
        RetailLogger.posGetLoyaltyCardRequestSucceeded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posGetLoyaltyCardRequestSucceeded", 48316, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Get loyalty card request succeeded.");
        };
        RetailLogger.posGetLoyaltyCardRequestFailed = function (correlationId, error) {
            TsLogging.LoggerBase.writeEvent("posGetLoyaltyCardRequestFailed", 48317, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Get loyalty card request failed with error: {1}.");
        };
        RetailLogger.posPaymentCheckLoyaltyCardBalanceStarted = function (correlationId, tenderTypeId) {
            TsLogging.LoggerBase.writeEvent("posPaymentCheckLoyaltyCardBalanceStarted", 48318, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Check loyalty card balance started for tender type id {1}.");
        };
        RetailLogger.posPaymentCheckLoyaltyCardBalanceSucceeded = function (correlationId, tenderTypeId) {
            TsLogging.LoggerBase.writeEvent("posPaymentCheckLoyaltyCardBalanceSucceeded", 48319, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Check loyalty card balance succeeded for tender type id {1}.");
        };
        RetailLogger.posPaymentCheckLoyaltyCardBalanceFailed = function (correlationId, tenderTypeId, error) {
            TsLogging.LoggerBase.writeEvent("posPaymentCheckLoyaltyCardBalanceFailed", 48320, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Check loyalty card balance failed for tender type id {1} with error: {2}.");
        };
        RetailLogger.posAuthorizeCardTokenRequestCardTypeIdSetOnTenderLine = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthorizeCardTokenRequestCardTypeIdSetOnTenderLine", 48321, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Set AuthorizeCardTokenAndAddToCartClientRequest card type identifier on the tender line. CorrelationId: {0}");
        };
        RetailLogger.posAuthorizeCardTokenRequestCardTypeIdIsNullOrUndefined = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posAuthorizeCardTokenRequestCardTypeIdIsNullOrUndefined", 48322, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "AuthorizeCardTokenAndAddToCartClientRequest card type identifier is null or empty. CorrelationId: {0}");
        };
        RetailLogger.posGettingCardTypedIdUsingMaskedCardNumberStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posGettingCardTypedIdUsingMaskedCardNumberStarted", 48323, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Getting cardTypeId based on masked card number started. CorrelationId: {0}");
        };
        RetailLogger.posGettingCardTypedIdUsingMaskedCardNumberSucceeded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("posGettingCardTypedIdUsingMaskedCardNumberSucceeded", 48324, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Getting cardTypeId based on masked card number succeeded. CorrelationId: {0}");
        };
        RetailLogger.posGettingCardTypedIdUsingMaskedCardNumberFailed = function (correlationId, error) {
            TsLogging.LoggerBase.writeEvent("posGettingCardTypedIdUsingMaskedCardNumberFailed", 48325, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Getting cardTypeId based on masked card number failed with error: {1}. CorrelationId: {0}");
        };
        RetailLogger.refinerHelperShowRefinerAsyncUnsupportedRefiner = function (refiner) {
            TsLogging.LoggerBase.writeEvent("refinerHelperShowRefinerAsyncUnsupportedRefiner", 50001, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "The refiner is not supported and no refiner will be created. Refiner: {0}.");
        };
        RetailLogger.viewsMerchandisingCustomerSearchViewModelSearchCustomersBySearchCriteria = function (pageSize, skip) {
            TsLogging.LoggerBase.writeEvent("viewsMerchandisingCustomerSearchViewModelSearchCustomersBySearchCriteria", 50101, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Search customers by search criteria started. PageSize: {0}, Skip: {1}, Number of search terms: 1");
        };
        RetailLogger.viewsMerchandisingCustomerSearchViewModelSearchCustomersBySearchFieldCriteria = function (pageSize, skip, numberCriteria, searchFields) {
            TsLogging.LoggerBase.writeEvent("viewsMerchandisingCustomerSearchViewModelSearchCustomersBySearchFieldCriteria", 50102, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Informational, [], "", "", "Search customers by search criteria started. PageSize: {0}, Skip: {1}, Number of search terms: {2}, Search fields: {3}");
        };
        RetailLogger.receiptHelperGetSalesLinesForGiftReceiptFilter = function (occurance, count, descriptions) {
            TsLogging.LoggerBase.writeEvent("receiptHelperGetSalesLinesForGiftReceiptFilter", 50151, 1, TsLogging.EventChannel.Debug, TsLogging.EventLevel.Verbose, [], "", "", "{0} filtering out returns, voids, and gift cards, the Sales Line array contains {1} item(s) with Item ID(s): {2}.");
        };
        RetailLogger.logonHelperHandleAsyncResultFailed = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("logonHelperHandleAsyncResultFailed", 50152, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Logon helper handleAsyncResult error message: {0}.");
        };
        RetailLogger.dataHelperLoadJsonAsyncFailed = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("dataHelperLoadJsonAsyncFailed", 50153, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Data helper loadJsonAsync error message: {0}.");
        };
        RetailLogger.dataHelperLoadTextAsyncFailed = function (errorMessage) {
            TsLogging.LoggerBase.writeEvent("dataHelperLoadTextAsyncFailed", 50154, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Data helper loadTextAsyncFailed error message: {0}.");
        };
        RetailLogger.requestInterceptorEnableAutoLogOffSucceeded = function (requestName, correlationId) {
            TsLogging.LoggerBase.writeEvent("requestInterceptorEnableAutoLogOffSucceeded", 50251, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Enabling auto logoff succeeded for request: {0}. The correlation id is {1}");
        };
        RetailLogger.requestInterceptorDisableAutoLogOffSucceeded = function (requestName, correlationId) {
            TsLogging.LoggerBase.writeEvent("requestInterceptorDisableAutoLogOffSucceeded", 50252, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Disabling auto logoff succeeded for request: {0}. The correlation id is {1}");
        };
        RetailLogger.requestInterceptorEnableAutoLogOffFailed = function (error, requestName, correlationId) {
            TsLogging.LoggerBase.writeEvent("requestInterceptorEnableAutoLogOffFailed", 50253, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Enabling auto logoff failed for request: {1} with error: {0}. The correlation id is {2}");
        };
        RetailLogger.requestInterceptorDisableAutoLogOffFailed = function (error, requestName, correlationId) {
            TsLogging.LoggerBase.writeEvent("requestInterceptorDisableAutoLogOffFailed", 50254, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "Disabling auto logoff failed for request: {1} with error: {0}. The correlation id is {2}");
        };
        RetailLogger.viewModelGetSalesRepresentativeViewModelGetSalesRepresentativesAsyncStarted = function (correlationId, message) {
            TsLogging.LoggerBase.writeEvent("viewModelGetSalesRepresentativeViewModelGetSalesRepresentativesAsyncStarted", 50351, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Search of Sales Representatives started. Search Text: '{1}'. The correlation id is '{0}'.");
        };
        RetailLogger.viewModelGetSalesRepresentativeViewModelGetSalesRepresentativesAsyncFinished = function (correlationId, countOfResults) {
            TsLogging.LoggerBase.writeEvent("viewModelGetSalesRepresentativeViewModelGetSalesRepresentativesAsyncFinished", 50352, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Search of Sales Representatives finished. Count of Representatives: '{1}'. The correlation id is '{0}'.");
        };
        RetailLogger.viewModelGetSalesRepresentativeViewModelGetSalesRepresentativesAsyncFailed = function (correlationId, errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("viewModelGetSalesRepresentativeViewModelGetSalesRepresentativesAsyncFailed", 50353, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Search of Sales Representatives failed.  The correlation id is '{0}'. The error code is '{1}.' The error message is '{2}'.");
        };
        RetailLogger.urlOperationHandlerLaunchUriAsyncSucceded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("urlOperationHandlerLaunchUriAsyncSucceded", 50401, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Verbose, [], "", "", "UrlOperationHandler successfully launch URI. The correlation id is '{0}'.");
        };
        RetailLogger.urlOperationHandlerLaunchUriAsyncFailed = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("urlOperationHandlerLaunchUriAsyncFailed", 50402, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "UrlOperationHandler failed to launch URI. The correlation id is '{0}'.");
        };
        RetailLogger.applicationFailedToLaunchUri = function (correlationId, errorMessage) {
            TsLogging.LoggerBase.writeEvent("applicationFailedToLaunchUri", 50403, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Fail to launch URI.  The correlation id is '{0}'. The error message is '{1}'.");
        };
        RetailLogger.viewModelLoyaltyExpiringPointsDialogViewModelgetLoyaltyRewardPointsExpiringSoonAsyncStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelLoyaltyExpiringPointsDialogViewModelgetLoyaltyRewardPointsExpiringSoonAsyncStarted", 50501, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Call to get expiring loyalty points API started. The correlation id is '{0}'.");
        };
        RetailLogger.viewModelLoyaltyExpiringPointsDialogViewModelgetLoyaltyRewardPointsExpiringSoonAsyncSucceeded = function (correlationId, countOfResults) {
            TsLogging.LoggerBase.writeEvent("viewModelLoyaltyExpiringPointsDialogViewModelgetLoyaltyRewardPointsExpiringSoonAsyncSucceeded", 50502, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Call to get expiring loyalty points API finished. Count of Records: '{1}'. The correlation id is '{0}'.");
        };
        RetailLogger.viewModelLoyaltyExpiringPointsDialogViewModelgetLoyaltyRewardPointsExpiringSoonAsyncError = function (correlationId, errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("viewModelLoyaltyExpiringPointsDialogViewModelgetLoyaltyRewardPointsExpiringSoonAsyncError", 50503, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Call to get expiring loyalty points API failed.  The correlation id is '{0}'. The error code is '{1}.' The error message is '{2}'.");
        };
        RetailLogger.remoteTaskManagerInternalTaskReplaced = function (remoteTaskManagerID, taskName) {
            TsLogging.LoggerBase.writeEvent("remoteTaskManagerInternalTaskReplaced", 50600, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [], "", "", "The internal task was replaced. Task name: {1}");
        };
        RetailLogger.remoteTaskManagerRunOutgoingTaskStart = function (correlationId, remoteTaskManagerID, taskName, outgoingTaskId) {
            TsLogging.LoggerBase.writeEvent("remoteTaskManagerRunOutgoingTaskStart", 50605, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "runOutgoingTask - Start. Correlation ID: {0}, TaskManager: {1}, Task name: {2}, Outgoing task id: {3}");
        };
        RetailLogger.remoteTaskManagerRunOutgoingTaskSuccessful = function (correlationId, taskName, outgoingTaskId) {
            TsLogging.LoggerBase.writeEvent("remoteTaskManagerRunOutgoingTaskSuccessful", 50606, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "runOutgoingTask - End - Successful. Correlation ID: {0}, Task name: {1}, Outgoing task id: {2}");
        };
        RetailLogger.remoteTaskManagerRunOutgoingTaskFailed = function (correlationId, taskName, outgoingTaskId, error) {
            TsLogging.LoggerBase.writeEvent("remoteTaskManagerRunOutgoingTaskFailed", 50607, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "runOutgoingTask - End - Failed. Correlation ID: {0}, Task name: {1}, Outgoing task id: {2}, Error: {3}");
        };
        RetailLogger.remoteTaskManagerRunOutgoingTaskTimedOut = function (correlationId, taskName, outgoingTaskId, timeoutInMilliseconds, serializedParameters) {
            TsLogging.LoggerBase.writeEvent("remoteTaskManagerRunOutgoingTaskTimedOut", 50608, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Outgoing task timed out. Correlation ID: {0}, Task name: {1}, Outgoing task id: {2}, TimeoutInMilliseconds: {3}, Serialized Parameters: {4}");
        };
        RetailLogger.remoteTaskManagerHandleOutgoingTaskResponseStart = function (correlationId, remoteTaskManagerID, taskInstanceId, message) {
            TsLogging.LoggerBase.writeEvent("remoteTaskManagerHandleOutgoingTaskResponseStart", 50610, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "handleOutgoingTaskResponse - Start. Correlation ID: {0}, TaskManager: {1}, Task instance id: {2}, Message: {3}");
        };
        RetailLogger.remoteTaskManagerHandleOutgoingTaskResponseEnd = function (correlationId, remoteTaskManagerID, taskInstanceId, message) {
            TsLogging.LoggerBase.writeEvent("remoteTaskManagerHandleOutgoingTaskResponseEnd", 50611, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "handleOutgoingTaskResponse - End. Correlation ID: {0}, TaskManager: {1}, Task instance id: {2}, Message: {3}");
        };
        RetailLogger.remoteTaskManagerHandleOutgoingTaskResponseFailedExpectedParameterValueNotSet = function (correlationId, taskInstanceId, message) {
            TsLogging.LoggerBase.writeEvent("remoteTaskManagerHandleOutgoingTaskResponseFailedExpectedParameterValueNotSet", 50612, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "handleOutgoingTaskResponse - Failed. Expected outgoing task result value not set. Correlation ID: {0}, Task instance id: {1}, Outgoing task message response: {2}");
        };
        RetailLogger.remoteTaskManagerHandleOutgoingTaskResponseFailedUnableToDeseriaizeMessage = function (correlationId, taskInstanceId, message, error) {
            TsLogging.LoggerBase.writeEvent("remoteTaskManagerHandleOutgoingTaskResponseFailedUnableToDeseriaizeMessage", 50613, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "handleOutgoingTaskResponse - Failed. Unable to deserialize message.Correlation ID: {0}, Task instance id: {1}, Outgoing task message response: {2}, Error: {3}");
        };
        RetailLogger.remoteTaskManagerHandleOutgoingTaskResultStart = function (correlationId, remoteTaskManagerID, taskInstanceId, outgoingTaskResult) {
            TsLogging.LoggerBase.writeEvent("remoteTaskManagerHandleOutgoingTaskResultStart", 50615, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "handleOutgoingTaskResult - Start. Correlation ID: {0}, TaskManager: {1}, Task instance id: {2}, Outgoing task result: {3}");
        };
        RetailLogger.remoteTaskManagerHandleOutgoingTaskResultEndAsOutgoingTaskNotFound = function (correlationId, taskInstanceId) {
            TsLogging.LoggerBase.writeEvent("remoteTaskManagerHandleOutgoingTaskResultEndAsOutgoingTaskNotFound", 50620, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "handleOutgoingTaskResult - End. The outgoing task we not resolved or rejected as it was not found in the list of running tasks. Please check whether the task was timed out and rejected. Correlation ID: {0}, Task instance id: {1}");
        };
        RetailLogger.remoteTaskManagerHandleOutgoingTaskResultSuccessfulWithOutgoingTaskSucceeded = function (correlationId, taskInstanceId) {
            TsLogging.LoggerBase.writeEvent("remoteTaskManagerHandleOutgoingTaskResultSuccessfulWithOutgoingTaskSucceeded", 50621, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "handleOutgoingTaskResult - End - Successful with outgoing task succeeded response. Correlation ID: {0}, Task instance id: {1}");
        };
        RetailLogger.remoteTaskManagerHandleOutgoingTaskResultSuccessfulWithOutgoingTaskFailed = function (correlationId, taskInstanceId, errorMessage) {
            TsLogging.LoggerBase.writeEvent("remoteTaskManagerHandleOutgoingTaskResultSuccessfulWithOutgoingTaskFailed", 50622, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "handleOutgoingTaskResult - End - Successful with outgoing task failed response. Correlation ID: {0}, Task instance id: {1}, Error message: {2}");
        };
        RetailLogger.remoteTaskManagerHandleOutgoingTaskResultFailedUnableToParseTaskResultData = function (correlationId, taskInstanceId, resultData, error) {
            TsLogging.LoggerBase.writeEvent("remoteTaskManagerHandleOutgoingTaskResultFailedUnableToParseTaskResultData", 50623, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "handleOutgoingTaskResult - End - Failed. Unable to parse the task result data. Correlation ID: {0}, Task instance id: {1}, Result Data: {2}, Error message: {3}");
        };
        RetailLogger.remoteTaskManagerHandleOutgoingTaskResultFailedUnableToParseTaskFailureData = function (correlationId, taskInstanceId, errorData, error) {
            TsLogging.LoggerBase.writeEvent("remoteTaskManagerHandleOutgoingTaskResultFailedUnableToParseTaskFailureData", 50624, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "handleOutgoingTaskResult - End - Failed. Unable to parse the task result data. Correlation ID: {0}, Task instance id: {1}, Error Data: {2}, Error message: {3}");
        };
        RetailLogger.remoteTaskManagerHandleIncomingTaskRequestStart = function (correlationId, remoteTaskManagerID, taskInstanceId, message) {
            TsLogging.LoggerBase.writeEvent("remoteTaskManagerHandleIncomingTaskRequestStart", 50625, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "handleIncomingTaskRequest - Start. Correlation Id {0}, TaskMananger: {1}, Task instance id: {2}, Message: {3}");
        };
        RetailLogger.remoteTaskManagerHandleIncomingTaskRequestEnd = function (correlationId, remoteTaskManagerID, taskInstanceId, message) {
            TsLogging.LoggerBase.writeEvent("remoteTaskManagerHandleIncomingTaskRequestEnd", 50626, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "handleIncomingTaskRequest - End. Correlation Id {0}, TaskMananger: {1}, Task instance id: {2}, Message: {3}");
        };
        RetailLogger.remoteTaskManagerHandleIncomingTaskRequestFailedExpectedParameterValueNotSet = function (correlationId, taskInstanceId, message) {
            TsLogging.LoggerBase.writeEvent("remoteTaskManagerHandleIncomingTaskRequestFailedExpectedParameterValueNotSet", 50627, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "handleIncomingTaskRequest - End - Failed. Expected incoming task result value not set. Correlation Id {0}, Task instance id: {1}, Incoming task message: {2}");
        };
        RetailLogger.remoteTaskManagerHandleIncomingTaskRequestFailedUnableToDeseriaizeMessage = function (correlationId, taskInstanceId, message, error) {
            TsLogging.LoggerBase.writeEvent("remoteTaskManagerHandleIncomingTaskRequestFailedUnableToDeseriaizeMessage", 50628, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "handleIncomingTaskRequest - End - Failed. Unable to deserialize message. Correlation Id {0}, Task instance id: {1}, Message: {2}, Error: {3}");
        };
        RetailLogger.remoteTaskManagerRunIncomingTaskStart = function (correlationId, remoteTaskManagerID, taskInstanceId, incomingTaskRequest) {
            TsLogging.LoggerBase.writeEvent("remoteTaskManagerRunIncomingTaskStart", 50630, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "runIncomingTask - Start. Correlation Id: {0}, TaskMananger: {1}, Task instance id: {2}, Incoming task request: {3}");
        };
        RetailLogger.remoteTaskManagerRunIncomingTaskEnd = function (correlationId, remoteTaskManagerID, taskInstanceId, incomingTaskRequest) {
            TsLogging.LoggerBase.writeEvent("remoteTaskManagerRunIncomingTaskEnd", 50631, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "runIncomingTask - End. Correlation Id: {0}, TaskMananger: {1}, Task instance id: {2}, Incoming task request: {3}");
        };
        RetailLogger.remoteTaskManagerRunIncomingTaskExecuteTask = function (correlationId, taskInstanceId, taskName, taskInput) {
            TsLogging.LoggerBase.writeEvent("remoteTaskManagerRunIncomingTaskExecuteTask", 50632, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "runIncomingTask. Run incoming task. Correlation Id: {0}, Task instance id: {1}, Task name: {2}, Task input: {3}");
        };
        RetailLogger.remoteTaskManagerRunIncomingTaskSuccessfulWithIncomingTaskSucceeded = function (correlationId, taskInstanceId, taskName) {
            TsLogging.LoggerBase.writeEvent("remoteTaskManagerRunIncomingTaskSuccessfulWithIncomingTaskSucceeded", 50633, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "runIncomingTask - The incoming task returned success. Correlation Id: {0}, Task instance id: {1}, Task name: {2}");
        };
        RetailLogger.remoteTaskManagerRunIncomingTaskSuccessfulWithIncomingTaskFailed = function (correlationId, taskInstanceId, taskName, errorMessage) {
            TsLogging.LoggerBase.writeEvent("remoteTaskManagerRunIncomingTaskSuccessfulWithIncomingTaskFailed", 50634, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "runIncomingTask - The incoming task returned failure. Correlation Id: {0}, Task instance id: {1}, Task name: {2}, Error: {3}");
        };
        RetailLogger.remoteTaskManagerRunIncomingTaskRequestFailedTaskNotSupported = function (correlationId, taskInstanceId, taskName) {
            TsLogging.LoggerBase.writeEvent("remoteTaskManagerRunIncomingTaskRequestFailedTaskNotSupported", 50635, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "runIncomingTask - End - Failed. The incoming task is not supported. Correlation Id: {0}, Task instance id: {1}, Task name: {2}");
        };
        RetailLogger.remoteTaskManagerRunIncomingTaskRequestFailedErrorWhenRunningIncomingTask = function (correlationId, taskInstanceId, taskName, error) {
            TsLogging.LoggerBase.writeEvent("remoteTaskManagerRunIncomingTaskRequestFailedErrorWhenRunningIncomingTask", 50636, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "runIncomingTask - End - Failed. Error running incoming task. Correlation Id: {0}, Task instance id: {1}, Task name: {2}, Error message: {3}");
        };
        RetailLogger.hostedAppRemoteTaskManagerHandlerReceiveStart = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("hostedAppRemoteTaskManagerHandlerReceiveStart", 50650, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "receive - Start. Correlation Id: {0}");
        };
        RetailLogger.hostedAppRemoteTaskManagerHandlerReceiveEnd = function (correlationId, taskInstanceId, messageType) {
            TsLogging.LoggerBase.writeEvent("hostedAppRemoteTaskManagerHandlerReceiveEnd", 50651, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "receive - End. Correlation Id: {0}, Task instance id: {1}, Message type: {2}");
        };
        RetailLogger.hostedAppRemoteTaskManagerHandlerReceiveFailedExpectedParameterValueNotSet = function (correlationId, taskInstanceId, messageType, message, error) {
            TsLogging.LoggerBase.writeEvent("hostedAppRemoteTaskManagerHandlerReceiveFailedExpectedParameterValueNotSet", 50652, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "handleRemoteRequestMessage - Failed. Correlation Id: {0}, Task instance id: {1}, Message type: {2}, Message: {3}, Error: {4}");
        };
        RetailLogger.hostedAppRemoteTaskManagerHandlerReceiveRunRequest = function (correlationId, taskInstanceId, messageType, message) {
            TsLogging.LoggerBase.writeEvent("hostedAppRemoteTaskManagerHandlerReceiveRunRequest", 50653, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "receive - Run request. Correlation Id: {0}, Task instance id: {1}, Message type: {2}, Message: {3}");
        };
        RetailLogger.hostedAppRemoteTaskManagerHandlerReceiveFailedMessageTypeIsNotSupported = function (correlationID, taskInstanceId, messageType) {
            TsLogging.LoggerBase.writeEvent("hostedAppRemoteTaskManagerHandlerReceiveFailedMessageTypeIsNotSupported", 50654, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "handleRemoteRequestMessage - Failed. Message type is not supported. Correlation Id: {0}, Task instance id: {1}, Message type: {2}");
        };
        RetailLogger.hostedAppRemoteTaskManagerHandlerReceiveFailedUnhandledErrorWhenRunningRemoteMessageRequest = function (correlationID, taskInstanceId, messageType, message, error) {
            TsLogging.LoggerBase.writeEvent("hostedAppRemoteTaskManagerHandlerReceiveFailedUnhandledErrorWhenRunningRemoteMessageRequest", 50655, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "handleRemoteRequestMessage - Failed. Exception when running remote message request. Correlation Id: {0}, Task instance id: {1}, Message type: {2}, Message: {3}, Error: {4}");
        };
        RetailLogger.viewModelStoreDetailsGetStoreDetailsStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelStoreDetailsGetStoreDetailsStarted", 50700, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "StoreDetailsViewModel - Get store details started. The correlation id is: '{0}'.");
        };
        RetailLogger.viewModelStoreDetailsGetStoreDetailsSucceeded = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelStoreDetailsGetStoreDetailsSucceeded", 50701, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "StoreDetailsViewModel - Get store details completed successfully. The correlation id is: '{0}'.");
        };
        RetailLogger.viewModelStoreDetailsGetStoreDetailsFailed = function (correlationId, errorMessage) {
            TsLogging.LoggerBase.writeEvent("viewModelStoreDetailsGetStoreDetailsFailed", 50702, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "StoreDetailsViewModel - Get store details failed. The correlation id is: '{0}', error is: '{1}'.");
        };
        RetailLogger.viewModelStoreDetailsFormatStoreHoursStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelStoreDetailsFormatStoreHoursStarted", 50703, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "StoreDetailsViewModel - Format store hours started. The correlation id is: '{0}'.");
        };
        RetailLogger.viewModelStoreDetailsFormatStoreHoursSucceeded = function (correlationID) {
            TsLogging.LoggerBase.writeEvent("viewModelStoreDetailsFormatStoreHoursSucceeded", 50704, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "StoreDetailsViewModel - Format store hours succeeded. The correlation id is: '{0}'.");
        };
        RetailLogger.printGiftCardInquiryReceiptFailed = function (correlationID, errorMessage) {
            TsLogging.LoggerBase.writeEvent("printGiftCardInquiryReceiptFailed", 50705, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "PrintGiftCardInquiryReceiptOperation failed: The correlation id is: '{0}', error message is '{1}'.");
        };
        RetailLogger.viewModelLoyaltyTransactionsDialogViewModelGetLoyaltyTransactionsAsyncStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("viewModelLoyaltyTransactionsDialogViewModelgetLoyaltyRewardPointsExpiringSoonAsyncStarted", 50751, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Call to get loyalty transactions API started. The correlation id is '{0}'.");
        };
        RetailLogger.viewModelLoyaltyTransactionsDialogViewModelGetLoyaltyTransactionsAsyncSucceeded = function (correlationId, countOfResults) {
            TsLogging.LoggerBase.writeEvent("viewModelLoyaltyTransactionsDialogViewModelgetLoyaltyRewardPointsExpiringSoonAsyncSucceeded", 50752, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Call to get loyalty transactions API finished. Count of Records: '{1}'. The correlation id is '{0}'.");
        };
        RetailLogger.viewModelLoyaltyTransactionsDialogViewModelGetLoyaltyTransactionsAsyncError = function (correlationId, errorCode, errorMessage) {
            TsLogging.LoggerBase.writeEvent("viewModelLoyaltyTransactionsDialogViewModelgetLoyaltyRewardPointsExpiringSoonAsyncError", 50753, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Call to get loyalty transactions API failed.  The correlation id is '{0}'. The error code is '{1}.' The error message is '{2}'.");
        };
        RetailLogger.viewModelSearchOrdersInvalidCustomerOrderRecallType = function (correlationId, recallType) {
            TsLogging.LoggerBase.writeEvent("viewModelSearchOrdersInvalidCustomerOrderRecallType", 50800, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Invalid order recall type {0}.");
        };
        RetailLogger.viewModelSearchOrdersSalesOrderNotProvided = function () {
            TsLogging.LoggerBase.writeEvent("viewModelSearchOrdersSalesOrderNotProvided", 50801, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Sales order should be provided.");
        };
        RetailLogger.errorHandlerSkippedClearingDeviceToken = function () {
            TsLogging.LoggerBase.writeEvent("errorHandlerSkippedClearingDeviceToken", 50850, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [], "", "", "Clearing the device token skipped. Cleaning the device token should not occur during attemption of activation already activated device.");
        };
        RetailLogger.getCashManagementTransactionSourceActivityStarted = function (correlationId, transactionType) {
            TsLogging.LoggerBase.writeEvent("getCashManagementTransactionSourceActivityStarted", 50900, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Get cash management transaction source activity started for transaction type: {1}. The correlation id is {0}.");
        };
        RetailLogger.getCashManagementTransactionSourceActivitySucceeded = function (correlationId, transactionType, result) {
            TsLogging.LoggerBase.writeEvent("getCashManagementTransactionSourceSucceeded", 50901, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Get cash management transaction source activity completed for transaction type: {1}, with result: {2}. The correlation id is {0}.");
        };
        RetailLogger.getCashManagementTransactionSourceActivityFailed = function (correlationId, transactionType, error) {
            TsLogging.LoggerBase.writeEvent("getCashManagementTransactionSourceActivityFailed", 50902, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Get cash management transaction source activity failed for transaction type: {1}, with error: {2}. The correlation id is {0}.");
        };
        RetailLogger.getCashManagementTransactionAmountActivityStarted = function (correlationId, transactionType) {
            TsLogging.LoggerBase.writeEvent("getCashManagementTransactionAmountActivityStarted", 50920, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Get cash management transaction amount activity started for transaction type: {1}. The correlation id is {0}.");
        };
        RetailLogger.getCashManagementTransactionAmountActivitySucceeded = function (correlationId, transactionType, result) {
            TsLogging.LoggerBase.writeEvent("getCashManagementTransactionAmountActivitySucceeded", 50921, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Get cash management transaction amount activity completed for transaction type: {1}, with result: {2}. The correlation id is {0}.");
        };
        RetailLogger.getCashManagementTransactionAmountActivityFailed = function (correlationId, transactionType, error) {
            TsLogging.LoggerBase.writeEvent("getCashManagementTransactionAmountActivityFailed", 50922, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Get cash management transaction amount activity failed for transaction type: {1}, with error: {2}. The correlation id is {0}.");
        };
        RetailLogger.createCashManagementTransactionActivityStarted = function (correlationId, transactionType) {
            TsLogging.LoggerBase.writeEvent("createCashManagementTransactionActivityStarted", 50940, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Create cash management transaction activity started for transaction type: {1}. The correlation id is {0}.");
        };
        RetailLogger.createCashManagementTransactionActivitySucceeded = function (correlationId, transactionType, result) {
            TsLogging.LoggerBase.writeEvent("createCashManagementTransactionActivitySucceeded", 50941, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Create cash management transaction activity completed for transaction type: {1}, with result: {2}. The correlation id is {0}.");
        };
        RetailLogger.createCashManagementTransactionActivityFailed = function (correlationId, transactionType, error) {
            TsLogging.LoggerBase.writeEvent("createCashManagementTransactionActivityFailed", 50942, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Create cash management transaction activity failed for transaction type: {1}, with error: {2}. The correlation id is {0}.");
        };
        RetailLogger.selectStoreSafeActivityStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("selectStoreSafeActivityStarted", 50960, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Select store safe activity started. The correlation id is {0}.");
        };
        RetailLogger.selectStoreSafeActivitySucceeded = function (correlationId, result) {
            TsLogging.LoggerBase.writeEvent("selectStoreSafeActivitySucceeded", 50961, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Select store safe activity completed with result: {1}. The correlation id is {0}.");
        };
        RetailLogger.selectStoreSafeActivityFailed = function (correlationId, error) {
            TsLogging.LoggerBase.writeEvent("selectStoreSafeActivityFailed", 50962, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Select store safe activity failed with error: {1}. The correlation id is {0}.");
        };
        RetailLogger.selectShiftActivityStarted = function (correlationId) {
            TsLogging.LoggerBase.writeEvent("selectShiftActivityStarted", 50980, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Select shift activity started. The correlation id is {0}.");
        };
        RetailLogger.selectShiftActivitySucceeded = function (correlationId, result) {
            TsLogging.LoggerBase.writeEvent("selectShiftActivitySucceeded", 50981, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Select shift activity completed with result: {1}. The correlation id is {0}.");
        };
        RetailLogger.selectShiftActivityFailed = function (correlationId, error) {
            TsLogging.LoggerBase.writeEvent("selectShiftActivityFailed", 50982, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Select shift activity failed with error: {1}. The correlation id is {0}.");
        };
        RetailLogger.createAdvancedCashManagementTransactionClientRequestStarted = function (correlationId, transactionType) {
            TsLogging.LoggerBase.writeEvent("createAdvancedCashManagementTransactionClientRequestStarted", 51000, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Started advanced cash management transaction client request for transaction type: {1}. The correlation id is {0}");
        };
        RetailLogger.createAdvancedCashManagementTransactionClientRequestSuccess = function (correlationId, transactionType) {
            TsLogging.LoggerBase.writeEvent("createAdvancedCashManagementTransactionClientRequestSuccess", 51101, 1, TsLogging.EventChannel.Analytic, TsLogging.EventLevel.Informational, [], "", "", "Advanced cash management transaction client request completed successfully for transaction type: {1}. The correlation id is {0}");
        };
        RetailLogger.createAdvancedCashManagementTransactionClientRequestFailed = function (correlationId, transactionType, error) {
            TsLogging.LoggerBase.writeEvent("createAdvancedCashManagementTransactionClientRequestFailed", 51102, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Error, [], "", "", "Advanced cash management transaction client request failed for transaction type: {1}. The correlation id is {0} and error is {2}");
        };
        RetailLogger.getStoreSafesSucceeded = function (safesCount, correlationId) {
            TsLogging.LoggerBase.writeEvent("getStoreSafesSucceeded", 51051, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Informational, [EventKeywords[EventKeywords.Telemetry]], "", "", "Got Safes successfully. Count of safes: {0}, Correlation id: {1}.");
        };
        RetailLogger.getStoreSafesFailed = function (errorMessage, correlationId) {
            TsLogging.LoggerBase.writeEvent("getStoreSafesFailed", 51052, 1, TsLogging.EventChannel.Operational, TsLogging.EventLevel.Warning, [EventKeywords[EventKeywords.Telemetry]], "", "", "Getting safes failed. Correlation id: {1}. Error: {0}");
        };
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent), __param(4, Commerce.CustomerContent), __param(5, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, Boolean, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "appLaunch", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "appUnhandledError", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "logon", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "logoff", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "appUnhandledPosSdkException", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.CustomerContent), __param(4, Commerce.CustomerContent), __param(5, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, Boolean, Boolean, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "deviceActivating", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.CustomerContent), __param(4, Commerce.CustomerContent), __param(5, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, Boolean, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "deviceActivated", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.CustomerContent), __param(4, Commerce.CustomerContent), __param(5, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, Boolean, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "deviceActivationFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "deviceDeactivating", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "deviceDeactivated", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.CustomerContent), __param(4, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "messageDisplayed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.CustomerContent), __param(4, Commerce.CustomerContent), __param(5, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "individualMessageDisplayed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationContextSetupLanguagesInvalidLanguage", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationStylesheetsLoadFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationLocalStorageNotAvailable", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationContextApplicationContextEntitySetInvalid", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationContextApplicationContextEntitySetMultipleTimes", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationFailedToParseError", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationFailedToParseErrorInvalidJson", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationGlobalizationResourcesLoadFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationContextLoadCategoriesFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationLoadChannelConfigurationFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationContextSetupDebitCashbackLimitFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationContextSetupCardTypesFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationContextSetupReturnOrderReasonCodesFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationContextSetupCustomerTypesFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationContextSetupCustomerGroupsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationContextSetupHardwareStationProfileFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationContextSetupLanguagesFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationContextSetupCashDeclarationsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationGlobalizationResourcesLoading", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationGlobalizationResourcesLanguageResolved", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationLoadEnvironmentConfigurationStorageLoadSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationLoadEnvironmentConfigurationServerLoadSucceeded", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationLoadEnvironmentConfigurationServerLoadFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationFailedToLoadConfiguration", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationContextSetupCommissionSalesGroupsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationContextSetupCustomerAttributeDefinitionsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationLoadChannelConfigurationWarning", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationContextSetupCardTypesSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationLoadChannelConfigurationSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationType", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationContextSetupSalesOrderLinesAttributeGroupDetailsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationContextSetupSalesOrderHeaderAttributeGroupDetailsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationTelemetryContextUpdateCompleted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "wwaConfigurationProviderFailedToGetConfigurationValue", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersRetailServerRequestStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersRetailServerRequestError", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersRetailServerRequestFinished", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersCommerceRuntimeRequestStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersCommerceRuntimeRequestError", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersCommerceRuntimeRequestFinished", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersCheckDownloadCompleteRequestError", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersLocatorServiceRequestStarted", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersLocatorServiceRequestException", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersLocatorServiceRequestFinished", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersServerResponseStatusCode", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersChainedRequestFactorySwitchingToOnline", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersChainedRequestFactoryShiftTransferFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersChainedRequestFactoryCartTransferToOfflineFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersODataExecuteBatchSuccess", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersODataExecuteBatchFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersRetailServerManagerFactoryCreate", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersCartManagerAddTenderLineToCartFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersCustomerManagerCustomerUpdated", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersCustomerManagerCustomerUpdateFailure", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersChainedRequestFactoryShiftTransferToOnlineCreateFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersChainedRequestFactoryShiftTransferToOnlineDeleteFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersProductManagerGetRecommendedProductsFailedUnknownError", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersSalesOrderGetReceiptSuccess", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersCartManagerUpdateCartSuccess", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersCartManagerUpdateCartFailure", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersCartManagerFailedSaveAttributesOnCartLinesInvalidCartLineId", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersCartManagerFailedSaveExtensionPropertiesOnCartLinesInvalidCartLineId", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersChainedRequestFactorySwitchingToOnlineFailedUnavailableService", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersChainedRequestFactorySwitchingToOnlineAuthenticationFailedManualOffline", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersChainedRequestFactorySwitchingToOnlineAuthenticationFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersChainedRequestFactorySwitchingToOnlineFailedShift", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersChainedRequestFactorySwitchingToOfflineNotAvailable", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersChainedRequestFactoryRequestThatCausedSwitchToSeamlessOffline", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersChainedRequestFactoryExecuteFailOfflineAvailable", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersChainedRequestFactoryExecuteFailOfflineUnAvailable", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersChainedRequestFactorySwitchingToOnlineSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersChainedRequestFactorySwitchingToOnlineFailedManualSwitchUnavailableService", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersChainedRequestFactoryLockingAndPromptingSeamlessOfflineDialog", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersChainedRequestFactoryRetryFailedInOnlineMode", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Boolean]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersChainedRequestFactoryShouldGoOfflineResultFromSeamlessOfflineDialog", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Boolean]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersChainedRequestFactorySeamlessOfflineDialogResultForFailedQueuedRequest", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Boolean]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersChainedRequestFactorySeamlessOfflineDialogResultForQueuedRequest", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersChainedRequestFactoryFailedRequestQueuedByLockedDialog", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersChainedRequestFactoryRequestQueuedByLockedDialog", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersChainedRequestFactoryRetryCountForOnlineRequest", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersChainedRequestFactoryPromptOnSeamlessOfflineNotSet", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersChainedRequestFactorySessionRequestThatCausedSwitchToSeamlessOffline", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersRetailServerRequestErrorAsInformational", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersCartManagerAddTenderLineToCartFailedAsInformational", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersCartManagerGetDeclinedOrVoidedCardReceiptsStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersCartManagerGetDeclinedOrVoidedCardReceiptsSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersErrorParserRetailServerUnavailable", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersErrorParserHardwareStationError", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersErrorParserDataValidationFailure", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "modelManagersErrorParserUnsupportedContentType", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreCannotMapResourceMessage", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreCannotMapErrorCode", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "corePropertyMissingInDeviceActivationSequence", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreRetailOperationOnExecutingStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreRetailOperationManagerOverride", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreRetailOperationHandlerNotFound", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreRetailOperationOnExecutingCompleted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreRetailOperationOnExecutingCanceled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreRetailOperationOnExecutingFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreTriggerExecutionStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreTriggerExecutionCompleted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreTriggerExecutionCanceled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata), __param(4, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreTriggerExecutionFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreLogOriginalUnauthorizedRetailServerResponse", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreLogXmlHttpRequestError", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreLogXmlHttpRequestTimeout", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreHelpersUnrecognizedAddressComponent", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreHelpersInvalidManualDiscountType", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreHelpersInvalidCustomerDiscountType", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreHelpersInvalidDiscountLineType", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreHelpersUnknownAddressType", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreTenderTypeMapOperationHasNoTenderType", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreBindingHandlersLoadImageFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreFormattersCartLineWrongInputParameters", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreTenderTypeMapTenderTypeNotFound", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreApplicationStorageSetItemFailure", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreApplicationStorageSetItemFailureRecoveryUnsuccessful", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreLogUserAuthenticationRetailServerResponse", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreRetailCheckOpenDrawerStatusExecutionFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreHealthCheckResponseParseFailure", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreFeatureDisabled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreTimezoneMappingNotFound", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "corePingHealthCheckUrl", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreCancelableSelectionHandlerExceptionDuringSelectionAttempt", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreApplicationMemoryUsage", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreLogFailureToHandleCartVersionError", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreLogFailureToValidateCartVersion", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreRetailOperationStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreRetailOperationCompleted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreRetailOperationCanceled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreRetailOperationFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreButtonGridHandlerExtensionOperationRequestFromFactoryOperationMismatch", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Boolean, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreButtonGridHandlerInvalidExtensionOperationRequestFromFactory", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreHelpersGridExtensionModuleNotProvided", null);
        __decorate([
            __param(0, Commerce.AccessControlData),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreAsyncWorkerQueueAsyncCallThrewAnException", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreGetExtensibleEnumerationByNameEnumerationMissing", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreGetExtensibleEnumerationByValueEnumerationMissing", null);
        __decorate([
            __param(0, Commerce.AccessControlData),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreAsyncQueueRunThrewAnException", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreOfflineHelperStopOffline", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreStorageClearInitiated", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreLoggerHelperGeneratedNewCorrelationId", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "resetApplicationStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "resetApplicationSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "resetApplicationCanceled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "resetApplicationFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreUnableToConvertUnrecognizedErrorObjectIntoProxyError", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "openCashDraswerOperationFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreNumberSequenceReceivedSequence", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreNumberSequenceCombinedSequence", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "customWinJSBindingsSetDefaultImage", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreUnableToConvertUnrecognizedErrorObjectIntoJavascriptError", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationLogOffFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.CustomerContent), __param(4, Commerce.CustomerContent), __param(5, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationAddGiftCard", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.CustomerContent), __param(4, Commerce.CustomerContent), __param(5, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationIssueGiftCard", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationCloseShift", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationLocateServerUrl", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationUpdateServerUrl", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationDeviceActivationUnhandledError", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationPickingAndReceivingUpdatePurchaseOrderFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationPickingAndReceivingCommitPurchaseOrderFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationPickingAndReceivingGetPurchaseOrderFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationPickingAndReceivingUpdateTransderOrderFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationPickingAndReceivingCommitTransferOrderFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationPickingAndReceivingGetTransferOrderFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationPickingAndReceivingUpdatePickingListFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationPickingAndReceivingCommitPickingListFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationPickingAndReceivingGetPickingListFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "retailServerRequestRedirection", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationItemSaleCreateCartLinesStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Boolean]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationItemSaleCreateCartLinesFinished", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationItemSaleGetProductSaleDetailsStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Boolean]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationItemSaleGetProductSaleDetailsFinished", null);
        __decorate([
            __param(0, Commerce.AccountData), __param(1, Commerce.EndUserIdentifiableInformation), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationBlindCloseSharedShiftFailedOnRevertToSelfDuringCancellation", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationSetQuantityOptionsValidationFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "createEmptyCartServiceRequestValidationFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationGetLatestNumberSequenceOfflineErrorsIgnored", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationUpdateCustomerOrderInvalidOperationType", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsCashDrawerOpening", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsMSRKeyboardSwipeParserParseingCardStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsCompositeBarcodeScannerObjectNotDefined", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsHardwareStationContextActionRequestSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsHardwareStationContextActionRequestFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsUnsupportedPrinterType", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsBarcodeScannerGetDeviceSelectorFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsBarcodeScannerGetBluetoothDeviceSelectorFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsBarcodeScannerEnableFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsMagneticStripeReaderGetDeviceSelectorFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsMagneticStripeReaderGetBluetoothDeviceSelectorFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsMagneticStripeReaderInitializeFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsMagneticStripeReaderEnableFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsProximityOpenDeviceFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsLongPollingLockGetDataError", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsLongPollingLockGetDataUnhandledError", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsOpenLineDisplayDeviceFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsCloseLineDisplayDeviceFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsCancelGettingSignatureFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsGettingSignatureFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsCloseSignatureCaptureDeviceFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsOpenSignatureCaptureDeviceFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsMSRKeyboardSwipeParserParseingCardFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsMSRKeyboardSwipeParserParseingTrackDelimitersFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsMSRKeyboardSwipeParserParseingTrack1FieldDelimFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsMSRKeyboardSwipeParserParseingTrack2FieldDelimFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsMSRKeyboardSwipeParserInvalidExpirationYear", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsMSRKeyboardSwipeParserInvalidExpirationMonth", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsMSRKeyboardSwipeParserSetCardReaderStreamTimer", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsMSRKeyboardSwipeParserSetKeystrokeLogTimer", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsMSRKeyboardSwipeParserKeystrokeLogTimerTimeOut", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsMSRKeyboardSwipeParserInvalidSwipeBuffer", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsMSRKeyboardSwipeParserFastCharsEaten", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata), __param(4, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posInitiatedHardwareStationRequestStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata), __param(4, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posInitiatedHardwareStationRequestSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata), __param(4, Commerce.SystemMetadata), __param(5, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posInitiatedHardwareStationRequestFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata), __param(4, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posInitiatedHardwareStationRequestTimedOut", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posInitiatedHardwareStationRequestRetry", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsOpenSignatureCaptureDeviceStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsOpenSignatureCaptureDeviceCancelled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsOpenSignatureCaptureDeviceSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsLongPollingGetDataCount", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsLongPollingStopGetDataCall", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, Boolean]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsActiveHardwareStationSet", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsDeviceConfigNotDefined", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsDeviceConfigDriverNotNetwork", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsMagneticStripeReaderEnableRequest", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsMagneticStripeReaderDisableRequest", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsLongPollingLockRequestInitiated", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsLongPollingGetDataRequestInitiated", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsCloseSignatureCaptureDeviceSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsCloseSignatureCaptureDeviceCancelled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsCancelGettingSignatureSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsCancelGettingSignatureCancelled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsGettingSignatureSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsGettingSignatureCancelled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsGettingSignatureStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsCloseSignatureCaptureDeviceStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsCancelGettingSignatureStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "peripheralsGettingSignatureTerminatedByUser", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "pairHardwareStationOperationOptionsNotSent", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "fiscalIntegrationInitializeFiscalPeripheralsClientRequestStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "fiscalIntegrationInitializeFiscalPeripheralsClientRequestSucceeded", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "fiscalIntegrationInitializeFiscalPeripheralsClientRequestFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "fiscalIntegrationRegisterFiscalEventClientRequestStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "fiscalIntegrationRegisterFiscalEventClientRequestSucceeded", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "fiscalIntegrationRegisterFiscalEventClientRequestFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "fiscalIntegrationFiscalPeripheralInitializationFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "fiscalIntegrationExecuteRegistrationProcessLineFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "dedicatedHardwareStationOutgoingTaskStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "dedicatedHardwareStationClientBrokerStarted", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "dedicatedHardwareStationOutgoingDeserializationFailure", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "fiscalIntegrationDocumentGenerationFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "fiscalIntegrationDocumentSubmittedWithNoResponse", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "fiscalIntegrationRegistrationFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "librariesWinJsListViewShown", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "librariesWinJsListViewItemClick", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "librariesNumpadEnterKey", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "librariesAuthenticationProviderLoginStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "librariesAuthenticationProviderLoginFinished", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "librariesAuthenticationProviderAcquireTokenStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "librariesAuthenticationProviderAcquireTokenFinished", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "librariesAuthenticationProviderAuthenticationFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "librariesAuthenticationProviderLogOutFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "librariesAuthenticationProviderNotFound", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "librariesAuthenticationFailedToRequestToken", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "librariesAuthenticationFailedToDisplayPane", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "librariesAuthenticationAadCallbackUrl", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "librariesAuthenticationAadUserPropertyNotFound", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "librariesAuthenticationAADLogoutSkipped", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "librariesAuthenticationAADLogOutInitiated", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "librariesAuthenticationAADLogOutCompleted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "librariesAuthenticationAADSettingUpAccountSettingsPane", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "librariesAuthenticationAADAcquiredToken", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "librariesAuthenticationAADLogoutLookingForAccount", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "librariesAuthenticationAADLogoutFoundAccount", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "helpersActivityHelperAddCartLinesStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "helpersActivityHelperAddCartLinesFinished", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "helpersActivityHelperNumberOfCartLinesInCart", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "helpersReasonCodesHelperGetCustomerOrderReasonCodesFailure", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "helpersReasonCodesHelperGetFunctionalityProfileReasonCodesFailure", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "helpersReasonCodesHelperGetFunctionalityProfileReasonCodeLinesFailure", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "helpersReasonCodesHelperTriggerReasonSubCodeFinished", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "helpersReasonCodesHelperTriggerReasonSubCodeFailure", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "helpersReasonCodesHelperGetCartReasonCodeLinesFailure", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "helpersReasonCodesHelperGetCartLineReasonCodeLinesFailure", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "helpersReasonCodesHelperGetTenderLineReasonCodeLinesFailure", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "helpersReasonCodesHelperGetAffiliationLineReasonCodeLinesFailure", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "helpersReasonCodesHelperGetReasonCodesLinesByReasonCodeIdFailure", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "messagingPosMessagePortExceptionThrownWhileCallingMessageHandler", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "messagingPosMessagePortSendMessageCalledAfterDisposal", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "messagingPosMessagePortAddMessageHandlerCalledAfterDisposal", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsLoginLoginViewSignInStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsLoginLoginViewSignInFinished", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsHomeTileClick", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsHomeViewIsVisible", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsOrderPaymentViewPaymentInitiated", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsOrderPaymentViewInvalidPaymentAmount", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsOrderPaymentViewCardTokenizationStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsOrderPaymentViewPaymentInfoIsNull", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.CustomerContent), __param(4, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, Number, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsOrderPaymentViewPaymentInfoWasNotApproved", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsOrderPaymentViewCardTokenizationFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsOrderPaymentViewTenderAmountsValidationForCardPaymentFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsOrderPaymentViewCashbackDialogFailure", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsOrderPaymentViewGettingFilteredDenominationsForCurrencyFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsOrderPaymentViewGettingPINFromPINPadFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsOrderPaymentViewAddTenderLineToCartFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsOrderPaymentViewPaymentAuthorizedVoidFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsOrderPaymentViewPaymentCapturedVoidFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsOrderPaymentViewPartialPaymentVoidFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.CustomerContent), __param(4, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Boolean, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsOrderPaymentViewFilterCardTypesFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsOrderPaymentViewPaymentTerminalAuthRefundFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsOrderPaymentViewFilterCreditCardTypesFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsOrderPaymentViewRetrieveCardPaymentAcceptResultFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsOrderPaymentViewPaymentCardTypeSelectedInDialog", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsOrderPaymentViewGetSignatureFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsOrderPaymentViewPaymentWasForceVoided", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsOrderPaymentViewPaymentAmount", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsCustomerDetailsError", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsCustomerDetailsAddCustomerFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsCustomerDetailsLoadRecommendedProductsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsCustomerDetailsLoadRecommendedProductsSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsCustomerDetailsSeeAllRecommendedProductsLinkClicked", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsCustomerDetailsIsVisible", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsCustomerDetailsShowAllOrderHistoryStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsCustomerDetailsShowAllOrderHistoryCustomer", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsCustomerDetailsShowSalesOrderDetailsStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingSearchViewSearchClick", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingSearchViewProductButtonClick", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingSearchViewCustomerButtonClick", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingSearchViewAddToCartClick", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingSearchViewQuickSaleClick", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingSearchViewShowProductDetailsStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingProductDetailsQuickSale", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingProductDetailsKitVariantNotFound", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingProductDetailsFromRecommendation", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingProductDetailsAddToCart", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingProductDetailsIsVisible", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingProductDetailsLoadingVariantSelectionStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingProductDetailsLoadingVariantSelectionSuccessful", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingProductDetailsLoadingVariantSelectionFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingPriceCheckViewGetPriceFinished", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingCatalogsCatalogClicked", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingCategoryForCatalogViewTitleNotFound", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingCategoriesViewLoaded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsCartCartViewPayQuickCash", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "concludeTransactionHandlerShowPrintDialogFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "concludeTransactionHandlerPeripheralPaymentUnknown", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "concludeTransactionHandlerCartCheckoutSuccessful", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "concludeTransactionHandlerCartCheckoutFailure", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "concludeTransactionHandlerCartConcludeTransactionStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsCartCartViewCartConcludeTransactionSuccessful", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsCartCartViewCartConcludeTransactionFailure", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "concludeTransactionHandlerCartCapturingTenderlineFromPaymentTerminal", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "concludeTransactionHandlerCartCapturingTenderlineFromPaymentController", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "concludeTransactionHandlerCartEmailSetForReceipt", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "concludeTransactionHandlerMemoIssuedAndCartCheckoutSuccessful", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "concludeTransactionHandlerMemoIssuedAndCartCheckoutFailure", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "concludeTransactionHandlerMemoIssuedAndCartCheckoutCancel", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "concludeTransactionHandlerCartCheckoutCancel", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsCartCartViewCartConcludeTransactionCancel", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsCartShowJournalViewRetrieveProductFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsCartAddLineDiscountPercentStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsCartAddLineDiscountPercentFinishedSuccessfully", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsCartAddLineDiscountPercentFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsCartAddLineDiscountAmountStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsCartAddLineDiscountAmountFinishedSuccessfully", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsCartAddLineDiscountAmountFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "printGiftReceiptFailure", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsCartButtonGridOperationExecutionStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "printDeclinedOrVoidedCardPaymentReceiptsSkipped", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "printDeclinedOrVoidedCardPaymentReceiptsCancelledDueToInvalidTenderLine", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "printDeclinedOrVoidedCardPaymentReceiptsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsControlsModalDialogRendered", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsControlsRefinersTypeNotSupported", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsControlsRefinersDisplayTemplateNotSupported", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsControlsRefinersWrongInputParameters", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsControlsPrintReceiptSkipped", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "voidTransactionOperationFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsControlsChangeDialogVisible", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingAllStoresViewConstructorArgumentUndefined", null);
        __decorate([
            __param(0, Commerce.AccountData),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingPickingAndReceivingDetailsViewLoadJournalFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsCustomerAddEditViewAddCustomerFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsCustomerAddEditViewAddUpdateNewCustomerFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsCustomerPickUpInStoreViewBingMapsFaild", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsCustomerPickUpInStoreViewBingMapsFailedToInitialize", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsCustomerAddressAddEditViewDownloadTaxGroupsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsDailyOperationsCashManagementViewOperationFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "tenderDetailsInitializedFromDefault", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "tenderDetailsInitializedFromExtensions", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "navigatetoDenominationViewClicked", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsTutorialVideoDialogVideoElementThrowsError", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelCartVoidProductsStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Boolean]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelCartVoidProductsFinished", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelGetCustomerBalanceFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelGetCustomerLoyaltyCardsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelUnsupportedBarcodeMaskType", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelCartProcessItemScanResultStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelCartProcessTextFinished", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelCartUpdateRecommendedProductsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelCartRecommendedProductsView", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelCartViewRecommendedProductDetails", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelCartProcessTextStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelCartProcessTextFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelCartProcessCustomerScanResultStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelCartProcessLoyaltyCardScanResultStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelCartProcessDiscountCodeScanResultStarted", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "concludeTransactionHandlerCartTenderLineUpdated", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "concludeTransactionHandlerCartTenderLineUpdateFailure", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelCartViewIsVisible", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelCartProcessCouponCodeScanResultStarted", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "concludeTransactionHandlerCartTenderLineUpdatePreprocessedTenderLineConnectivityError", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelLoginDeviceActivationFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelLoginRetrieveUserAuthenticationTokenFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelLoginRetrieveDeviceInformationFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelLoginFailed", null);
        __decorate([
            __param(0, Commerce.AccessControlData), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelLoginTenantIdEmptyOrNotFound", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelLoginAuthenticateUserFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelLoginLoadingBackgroundImagesFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelLoginLoadingChannelConfigInOfflineModeFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelLoginUnlockRegisterFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelLoginExtendedLogon", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelDeleteExpiredSessionFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelGetTerminalDataStoreNameFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelGetDownloadIntervalFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelCheckInitialSyncFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelGetDownloadSessionsFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelDownloadFileFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelDownloadFileBrokerRequestFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelApplyToOfflineDbFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelApplyToOfflineDbBrokerRequestFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelUpdateDownloadSessionStatusBrokerRequestFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelGetUploadIntervalFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelGetUploadJobDefinitionsFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelLoadUploadTransactionsFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPurgeOfflineTransactionsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelGetDownloadLinkFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelGetOfflineSyncStatsFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelCheckIfInitialFullPackageRequiredFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelGetInitialDownloadSessionsFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelUpdateFullPackageIsRequestedFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelCheckInitialFullPackageRequiredFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelProcessCDXDataPackageFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "stripMasterDataFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "stripMasterDataBrokerRequestFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelProductDetailsKitVariantNotFound", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelProductDetailsLoadRecommendedProductsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelProductDetailsLoadRecommendedProductsSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelProductDetailsSeeAllRecommendedProductsLinkClicked", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelProductDetailsLoadProductDetailsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelProductDetailsLoadProductDetailsProductNotFound", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelProductDetailsLoadStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelProductDetailsLoadCompleted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPriceCheckGetProductPriceFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPriceCheckGetCustomerFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPriceCheckGetStoreDetailsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPriceCheckGetActivePriceFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPriceCheckSearchProductStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPriceCheckSearchProductSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPriceCheckSearchProductFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPriceCheckSearchText", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPriceCheckSearchProductCanceled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPaymentCardSwipeNotSupported", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPaymentGetGiftCardAsyncUndefinedCardType", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPaymentGetGiftCardAsyncRetrievePrivateTenderFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPaymentViewModelgetLoyaltyCardAsyncStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPaymentViewModelgetLoyaltyCardAsyncSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPaymentViewModelgetLoyaltyCardAsyncError", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPaymentViewModelGetMaxLoyaltyPointsToRedeemForTransactionBalanceAsyncStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPaymentViewModelGetMaxLoyaltyPointsToRedeemForTransactionBalanceAsyncSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPaymentViewModelGetMaxLoyaltyPointsToRedeemForTransactionBalanceAsyncError", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelCustomerAddEditUnknownCustomerType", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPickingAndReceivingDetailsEditQuantityStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPickingAndReceivingDetailsEditQuantityCompleted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPickingAndReceivingDetailsEditQuantityFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPickingAndReceivingDetailsEditQuantityCanceled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPickingAndReceivingDetailsAddProductStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPickingAndReceivingDetailsAddProductCompleted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPickingAndReceivingDetailsAddProductFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelPickingAndReceivingDetailsAddProductCanceled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "cloudPosBrowserNotSupported", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "coreOperationValidatorsNoCartOnCartValidator", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelProductSearchViewModelSearchProductsByTextFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelProductSearchViewModelGetRefinersByTextFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelProductSearchViewModelGetRefinerValuesByTextFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelProductSearchProductSearchPageLoadCompleted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelProductSearchCustomerSearchPageLoadCompleted", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelProductSearchViewModelGetRefinersByText", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, Number, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelProductSearchViewModelSearchProducts", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelProductSearchViewModelSearchProductsRefinerValue", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Boolean]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelProductsViewModelAddItemsToCart", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsModelProductsViewModelSearchProductsByCategoryFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsModelProductsViewModelGetRefinersByCategoryFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, Number, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsModelProductsViewModelGetRefinerValuesByCategoryFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelProductsViewModelGetProductDetailsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsModelProductsViewModelProductPageLoadCompleted", null);
        __decorate([
            __param(0, Commerce.AccountData), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelSearchViewModelAddCustomerToCartFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelSearchViewModelGetProductDetailsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelSearchViewModelFromRecommendation", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelSearchViewModelFromRecommendationAddToCart", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelSearchViewModelRefineProductsStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelSearchViewModelAddItemsToCartFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelSearchViewModelAddItemsToCartFinished", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelSearchViewModelApplySelectedRefiners", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelSearchViewModelInvokeSearch", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingSearchViewModelShowCustomerDetailsStarted", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelShowJournalSalesOrderDetailsLoaded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelShowJournalSalesOrderDetailsLoadingCompleted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelShowJournalSelectionChangedStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelShowJournalSelectionChangedFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelShowJournalSelectionChangedSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelExtensionCommandIntialized", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelExtensionCommandExecuted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelCustomControlViewModelIntializingCustomControl", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata), __param(4, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelCustomControlViewModelCustomControlOnReadyFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata), __param(4, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelCustomControlViewModelSendingMessageToCustomControl", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelExtensionMenuCommandIntialized", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelExtensionMenuCommandExecuted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "taskRecorderContinueRecording", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "taskRecorderPauseRecording", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "taskRecorderStopRecording", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "taskRecorderEndTask", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "taskRecorderHandleAction", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "taskRecorderScreenshotsUploadingFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "taskRecorderDownloadFile", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "taskRecorderShowSaveDialog", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "taskRecorderSavingFileFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "taskRecorderSavingFileFinished", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "taskRecorderSavingFileCanceled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "taskRecorderFileWasSaved", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "taskRecorderSaveXMLFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "taskRecorderSaveTrainingDocumentFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "taskRecorderDeleteFolderFromLocalStorageFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "taskRecorderSaveBpmPackageFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "taskRecorderSaveSessionAsRecordingBundleFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "taskRecorderCommandArgumentsParseError", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelRelatedProductsViewModelLoadAsyncFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelProductPriceViewModelLoadAsyncFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelProductAttributesViewModelLoadAsyncFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelProductAttributesViewModelUnsupportedAttributeType", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelProductImagesViewModelLoadAsyncFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelProductImagesViewModelImageValidationFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelProductImagesViewModelImageNoValidImage", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelProductImagesViewModelImageValidationSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "navigationStartEvent", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "navigationEndEvent", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "navigateBackStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "navigateBackFinished", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "navigateBackCanceled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsHeaderSplitViewCartDisplayTextUpdated", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsHeaderSplitViewProductCategorySelected", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "activitiesGetProductsRefinerRefinerDialogShown", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "dialogsRefinerDialogButtonClicked", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsControlsDiscountDialogProcessingDiscount", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelKitVariantSelectionViewModelKitComponentsLoaded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingSearchViewShowCustomerDetailsStarted", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingSearchViewShowProductDetailsProduct", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingSearchViewSwitchToProductTab", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingSearchViewSwitchToCustomerTab", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingSearchViewShowCustomerDetails", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingSearchViewProductDataListElementNotFound", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingSearchViewProductDataListViewModelNotFound", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingAdvancedSearchViewSearchClick", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelInventoryLookupViewModelFindInventoriesByKeywordStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelInventoryLookupViewModelFindInventoriesByKeywordFinished", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationItemSaleOperationHandlerAddItems", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationItemSaleOperationHandlerReturnItems", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationVoidProductsOperationHandlerVoidLines", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationVoidProductsOperationHandlerUnvoidLines", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "controlsHeaderSearchSearchInitiated", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "operationPayCashQuickPaymentAmount", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelCustomerCardViewModelNoAttributeDefinitionFound", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelCustomerCardViewModelUnsupportedAttributeType", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingProductsViewDataListElementNotFound", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingProductsViewDataListViewModelNotFound", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, Boolean, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "activitiesSaveMerchantInformationCurrentState", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "activitiesSaveMerchantInformationRequestingFromServer", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "activitiesSaveMerchantInformationRequestedFromServerNotChanged", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "activitiesSaveMerchantInformationRequestedFromServerNotValid", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "activitiesSaveMerchantInformationRequestedFromServerChanged", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "activitiesSaveMerchantInformationFailedWithCommunicationException", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "activitiesSaveMerchantInformationDownloadFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelReturnTransactionViewModelProcessBarcodeStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelReturnTransactionViewModelProcessBarcodeFinished", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelReturnTransactionViewModelProcessBarcodeCanceled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelReturnTransactionViewModelProcessBarcodeFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelReturnTransactionViewModelProcessBarcodeFailedDueToUserError", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelReturnTransactionViewModelLoadAsyncStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelReturnTransactionViewModelLoadAsyncFinished", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelReturnTransactionViewModelLoadAsyncFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelReturnTransactionViewModelGetUserInputAndSearchProductsStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelReturnTransactionViewModelGetUserInputAndSearchProductsCanceled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelReturnTransactionViewModelGetUserInputAndSearchProductsFinished", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelReturnTransactionViewModelGetUserInputAndSearchProductsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelReturnTransactionViewModelGetUserInputAndSearchOrderStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelReturnTransactionViewModelGetUserInputAndSearchOrderCanceled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelReturnTransactionViewModelGetUserInputAndSearchOrderFinished", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelReturnTransactionViewModelGetUserInputAndSearchOrderFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkFailedToLoadPosApi", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkFailedToLoadExtensionLoader", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkErrorOccurredWhileLoadingExtensions", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkGetExtensionsJsonSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkGetExtensionsJsonFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkGetExtensionProfileSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkGetExtensionProfileFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkFailedToLoadPosUISdk", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkFailedToLoadPosUISdkLoader", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkFailedToGetChannelConfiguration", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent), __param(4, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "triggerHandlersLoaderTriggerLoadFailedDueToInvalidTriggerType", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.OrganizationIdentifiableInformation), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "triggerHandlersLoaderTriggerLoadFailedTriggerTypeNotSet", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.SystemMetadata), __param(4, Commerce.SystemMetadata), __param(5, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "triggerHandlersLoaderTriggerLoadFailedDueToErrorImportingTriggerModule", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent), __param(4, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "triggerHandlersLoaderTriggerLoadFailedDueToInvalidTriggerImplementation", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent), __param(4, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "triggerHandlersLoaderTriggerRegistered", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent), __param(4, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "triggerHandlersLoaderTriggerLoadStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensionsLoaderInvalidExtensionPackageDiscoveredNoPublisher", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensionsLoaderInvalidExtensionPackageDiscoveredNoName", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensionsLoaderInvalidExtensionPackageDiscoveredInvalidVersion", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensionsLoaderFailedToLoadExtensionPackageManifest", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensionsLoaderLoadingExtensionsCompleted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensionsLoaderValidManifestDiscovered", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensionsLoaderLoadingExtensionPackageCompleted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensionsLoaderExtensionPointSummary", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensionsLoaderLoadExtensionsStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.OrganizationIdentifiableInformation), __param(4, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensionsLoaderExtensionNotSupportedInCurrentRegion", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.OrganizationIdentifiableInformation), __param(4, Commerce.CustomerContent), __param(5, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensionsLoaderExtensionNotSupportedInCurrentVersion", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensionsLoaderInvalidExtensionPackageDiscoveredInvalidMinimumPosVersion", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkErrorOccurredWhileLoadingNewOperationExtensions", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkTypeMismatchWhileLoadingNewOperationExtensions", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkInvalidNewOperationManifestItem", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkDuplicateNewOperationManifestItem", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkNewOperationManifestItemLoadingStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkNewOperationManifestItemLoadingFinished", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkNewOperationRequestFactoryAddedSuccessfully", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkNewOperationRequestHandlerAddedSuccessfully", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderCommandLoadFailedDueToInvalidCommandModule", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.OrganizationIdentifiableInformation), __param(4, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderCommandLoadFailedDueToErrorImportingModule", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderCustomColumnsLoadFailedDueToErrorImportingModule", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.OrganizationIdentifiableInformation), __param(4, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderAppBarCommandAdded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.OrganizationIdentifiableInformation), __param(4, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderCustomColumnSetAdded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderViewControllerAdded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderViewControllerFailedDueToInvalidModule", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.OrganizationIdentifiableInformation), __param(4, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderViewControllerLoadFailedDueToErrorImportingModule", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderCustomControlAdded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.OrganizationIdentifiableInformation), __param(4, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderCustomControlLoadFailedDueToErrorImportingModule", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.OrganizationIdentifiableInformation), __param(4, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderCustomControlManifestValidationFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderCustomControlLoadFailedDueToInvalidControlType", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderCustomControlLoadFailedDueToInvalidModule", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent), __param(4, Commerce.OrganizationIdentifiableInformation), __param(5, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderCustomGridColumnAdded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata), __param(4, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderCustomGridColumnLoadFailedDueToErrorImportingModule", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent), __param(4, Commerce.OrganizationIdentifiableInformation), __param(5, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderCustomSearchFilterLoadFailedDueToErrorImportingModule", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderCustomSearchFilterLoadFailedDueToInvalidModule", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderCustomSearchFilterAdded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent), __param(4, Commerce.OrganizationIdentifiableInformation), __param(5, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderCustomGridItemSubfieldAdded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata), __param(4, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderCustomGridItemSubfieldLoadFailedDueToErrorImportingModule", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.OrganizationIdentifiableInformation), __param(4, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsLoaderViewLoadFailedDueToErrorImportingModule", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsLoaderViewLoadFailedDueToInvalidViewModule", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.OrganizationIdentifiableInformation), __param(4, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsLoaderNewViewAdded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkTypeMismatchWhileLoadingViews", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.OrganizationIdentifiableInformation), __param(4, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkControlsStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkControlsFinished", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkControlsOneOftheRequiredParametersMissing", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkUnableToFindRequiredCreatedAndInsertedHtmlPlaceholder", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkControlsUnableToLoadControlHtmlFragment", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkControlsUnableToLoadControlFailedToRenderHtmlFragment", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkControlsUnableToLoadControlModule", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkControlsUnableToInitializeControlModule", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkControlNotSupported", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkControlsInformationNotProvided", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkControlsNotImplemented", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.OrganizationIdentifiableInformation), __param(4, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderTotalsPanelCustomFieldManifestValidationFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderTotalsPanelCustomFieldAdded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderTotalsPanelCustomFieldLoadFailedDueToInvalidControlType", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderTotalsPanelCustomFieldLoadFailedDueToInvalidModule", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.OrganizationIdentifiableInformation), __param(4, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderTotalsPanelCustomFieldLoadFailedDueToErrorImportingModule", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkTotalsPanelCustomFieldNotImplemented", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkTotalsPanelCustomFieldConflictsWithStandardField", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkUnableToCreateAndInsertHtmlFragmentForControl", null);
        __decorate([
            __param(0, Commerce.OrganizationIdentifiableInformation), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.CustomerContent), __param(4, Commerce.CustomerContent), __param(5, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensionCritical", null);
        __decorate([
            __param(0, Commerce.OrganizationIdentifiableInformation), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.CustomerContent), __param(4, Commerce.CustomerContent), __param(5, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensionError", null);
        __decorate([
            __param(0, Commerce.OrganizationIdentifiableInformation), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.CustomerContent), __param(4, Commerce.CustomerContent), __param(5, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensionWarning", null);
        __decorate([
            __param(0, Commerce.OrganizationIdentifiableInformation), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.CustomerContent), __param(4, Commerce.CustomerContent), __param(5, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensionInformational", null);
        __decorate([
            __param(0, Commerce.OrganizationIdentifiableInformation), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.CustomerContent), __param(4, Commerce.CustomerContent), __param(5, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensionVerbose", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkRequestHandlerSuccessfullyRegistered", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkRequestHandlerFailedToRegister", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkTypeMismatchWhileLoadingRequestHandlers", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkInvalidModuleWhileLoadingRequestHandlers", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkGetExtensionsDownloadUrlsSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkGetExtensionsDownloadUrlsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkExtensionServiceUrlNotHttps", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkExtensionDownloadUrlNotHttps", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.OrganizationIdentifiableInformation), __param(4, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkTemplatedDialogsStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkTemplatedDialogsFinished", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkTemplatedDialogsOneOftheRequiredParametersMissing", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkTemplatedDialogsUnableToLoadControlHtmlFragment", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkTemplatedDialogsUnableToLoadControlModule", null);
        __decorate([
            __param(0, Commerce.OrganizationIdentifiableInformation), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.CustomerContent), __param(4, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkExtensionResourceManagerCreated", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.OrganizationIdentifiableInformation), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkExtensionResourceManagerLoadStringResourcesStarted", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkExtensionResourceManagerLoadStringResourcesFinished", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkExtensionResourceManagerErrorWhileLoadingStringResources", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.OrganizationIdentifiableInformation), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkExtensionResourceManagerLoadStringResourcesForFallbackUICultureStarted", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkExtensionResourceManagerLoadStringResourcesForFallbackUICultureFinished", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkExtensionResourceManagerErrorWhileLoadingStringResourcesForFallbackUICulture", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkExtensionResourceManagerLoadStringResourcesCanceled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkResourcesLoaderErrorLoadingCultureInfoOverrides", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkResourcesLoaderInvalidCultureInfoOverridesJson", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkResourcesLoaderInvalidCultureInfoOverride", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkResourcesLoaderCultureInfoOverrideLoadedSuccessfully", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "dialogsSerialNumberInputDialogShown", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "dialogsSerialNumberInputDialogButtonClicked", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "dialogsSerialNumberInputDialogValueScanned", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkRequestHandlerExtensionSuccessfullyRegistered", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkRequestHandlerExtensionFailedToRegister", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkTypeMismatchWhileLoadingRequestHandlerExtensions", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkInvalidModuleWhileLoadingRequestHandlerExtensions", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent), __param(4, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkNavigateToPOSView", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent), __param(4, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkNavigateToPOSViewVoidNavigationExecuted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent), __param(4, Commerce.OrganizationIdentifiableInformation), __param(5, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkNavigateToPOSViewInvalidParameter", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkNavigateToExtensionView", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkNavigateToExtensionViewInvalidViewName", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.OrganizationIdentifiableInformation), __param(2, Commerce.CustomerContent), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkNavigateBack", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent), __param(4, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkExecuteRuntimeRequestStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent), __param(4, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkExecuteRuntimeRequestFinished", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent), __param(4, Commerce.CustomerContent), __param(5, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkExecuteRuntimeRequestFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkPosSdkBindingHandlerInitializeStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkPosSdkBindingHandlerInitializeFinished", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkPosSdkBindingHandlerInitializeFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.OrganizationIdentifiableInformation), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "dualDisplayExtensionsLoaderCustomControlAdded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.OrganizationIdentifiableInformation), __param(4, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "dualDisplayExtensionsLoaderCustomControlLoadFailedDueToErrorImportingModule", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.OrganizationIdentifiableInformation), __param(4, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "dualDisplayExtensionsLoaderCustomControlManifestValidationFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "dualDisplayExtensionsLoaderCustomControlLoadFailedDueToInvalidControlType", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "dualDisplayExtensionsLoaderCustomControlLoadFailedDueToInvalidModule", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkGridCustomItemSubfieldMustDerive", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent), __param(4, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkGridCustomItemSubfieldDuplicateName", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent), __param(4, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensibilityFrameworkGridCustomItemSubfieldMaxCountExceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.OrganizationIdentifiableInformation), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderMenuCommandLoadFailedDueToInvalidCommandModule", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.OrganizationIdentifiableInformation), __param(4, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderMenuCommandLoadFailedDueToErrorImportingModule", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.OrganizationIdentifiableInformation), __param(4, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewExtensionsLoaderMenuCommandAdded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "extensionsLoaderManifestLoaderNotFound", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelFulfillmentAcceptLinesFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelFulfillmentGetFulfillmentLinesFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelFulfillmentPickLinesFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelFulfillmentPackFulfillmentLinesFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelFulfillmentShipLinesFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "fulfillmentViewNavigationStart", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "fulfillmentViewNavigationEnd", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelFulfillmentPickingLinesSucceeded", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelFulfillmentPickingListPrintSucceeded", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelFulfillmentMarkAsPickedSucceeded", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.CustomerContent), __param(4, Commerce.CustomerContent), __param(5, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, Number, Number, Number, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "fulfillmentQuantityDialogPopUp", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelFulfillmentPackingSlipPrintSucceeded", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelFulfillmentMarkAsPackedSucceeded", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelFulfillmentAcceptLinesSucceeded", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelFulfillmentPickupLinesStarted", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelFulfillmentShipLinesSucceeded", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelFulfillmentRejectLinesFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelFulfillmentRejectLinesSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelFulfillmentGetFulfillmentLinesStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelFulfillmentGetFulfillmentLinesCompleted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "getNotificationsSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "getNotificationsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "getAllNotificationsStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "getAllNotificationsCompleted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_StandardLogOnBegin", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_StandardLogOnSuccess", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_StandardLogOnDidntSucceed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_ExtendedLogOnBegin", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_ExtendedLogOnSuccess", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_ExtendedLogOnDidntSucceed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_UnlockBegin", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_UnlockFetchSessionData", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_UnlockFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_UnlockApplySessionData", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_UnlockSuccess", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_UnlockDidntSucceed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_UserLogOnAttemptOpenOrResumeShift", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_GetShiftsForLoggedOnUserSuccess", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_GetShiftsForLoggedOnUserFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_UserLogOnOpenOrResumeShiftCanceledByUser", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_UserLogOnOpenOrResumeShiftFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_UserLogOnOpenOrResumeShiftSuccess", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_ProcessLogOnBegin", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_ProcessLogOnArgumentsInvalid", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_ProcessLogOnDeviceInformationInvalid", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_ProcessLogOnStartSession", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_ProcessLogOnGetAndApplyEmployeeToSession", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_ProcessLogOnEmployeeAppliedToSession", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_ProcessLogOnLoadingChannelConfiguration", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_ProcessLogOnLoadingChannelConfigurationFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_ProcessLogOnConfigureLanguageAndCart", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_ProcessLogOnConfigureLanguageAndCartFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_ProcessLogOnOpenLineDisplay", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_ProcessLogOnOpenLineDisplayFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_ProcessLogOnPasswordExpired", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_ProcessLogOnDeviceTokenInvalid", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_ProcessLogOnInvalidCredentials", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_ProcessLogOnFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_ProcessLogOnSessionCreated", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_ProcessLogOnSuccess", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_ProcessLogOnDidntSucceed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_ProcessLogOnCanceledBecauseLogOnInProgress", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_CoreLogOnBegin", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_CoreLogOnPasswordRequired", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_CoreLogOnPasswordRequiredAndProvided", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_CoreLogOnPasswordRequiredNotProvided", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_CoreLogOnInvalidCredentials", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_CoreLogOnFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_CoreLogOnSuccess", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_StartSessionBegin", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_StartSessionFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_StartSessionSuccess", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_EndSessionCanceledDeviceNotActivated", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_EndSessionFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_EndSessionSuccess", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_CoreLogOffBegin", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_CoreLogOffCriticalStepsBegin", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_CoreLogOffCriticalStepsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_CoreLogOffCriticalStepsSuccess", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_CoreLogOffFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_CoreLogOffSuccess", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_CoreLockBegin", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_CoreLockFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_CoreLockSuccess", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_AutomaticExitAfterTimeoutTriggered", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_AutomaticExitAfterEachTransaction", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_LogOffForUserAuthenticationException", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_LogOffOperationBegin", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_LogOffOperationBlockedByCartInProgress", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_LogOffOperationPostLogOffFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_LogOffOperationPostLogOffSuccess", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_AadLogonModeEnabledSoMarkAsInitiated", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_AadLogonAlreadyInitiatedSoAutomaticallyStartAadLogon", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_AadLogonCompletedSoClearInitiatedMarker", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_AadLogonLockBlockedLogoffInstead", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_AadLogonCoreFlowStart", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_AadLogonCoreFlowAadConfigurationError", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_AadLogonCoreFlowSuccess", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthentication_AadLogonCoreFlowFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "resumeShiftCalled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata), __param(4, Commerce.SystemMetadata), __param(5, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "resumeShiftSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata), __param(4, Commerce.CustomerContent), __param(5, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "resumeShiftFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "blindCloseShiftCalled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata), __param(4, Commerce.SystemMetadata), __param(5, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "blindCloseShiftSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata), __param(4, Commerce.CustomerContent), __param(5, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "blindCloseShiftFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "closeShiftCalled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata), __param(4, Commerce.SystemMetadata), __param(5, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "closeShiftSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata), __param(4, Commerce.CustomerContent), __param(5, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "closeShiftFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "upsertShiftsCalled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "upsertShiftsSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "upsertShiftsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "deleteShiftsCalled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "deleteShiftsSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "deleteShiftsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "getShiftsCalled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "getShiftsSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "getShiftsFailed", null);
        __decorate([
            __param(0, Commerce.EndUserPseudonymousIdentifier), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "openShiftCalled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata), __param(4, Commerce.SystemMetadata), __param(5, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "openShiftSucceeded", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "openShiftFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "useShiftCalled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata), __param(4, Commerce.SystemMetadata), __param(5, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "useShiftSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata), __param(4, Commerce.CustomerContent), __param(5, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "useShiftFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "suspendShiftCalled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata), __param(4, Commerce.SystemMetadata), __param(5, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "suspendShiftSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata), __param(4, Commerce.CustomerContent), __param(5, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "suspendShiftFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "forceDeleteShiftCalled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata), __param(4, Commerce.SystemMetadata), __param(5, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "forceDeleteShiftSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata), __param(4, Commerce.CustomerContent), __param(5, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "forceDeleteShiftFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "getShiftReconciliationLinesStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "getShiftReconciliationLinesSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "getShiftReconciliationLinesFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "reconcileLinesStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "reconcileLinesSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "reconcileLinesFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "undoReconcileLinesStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "undoReconcileLinesSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "undoReconcileLinesFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "dualDisplayStartProjectionFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "dualDisplaySendRequestFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "validateCashDrawerLimitStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "validateCashDrawerLimitSuccessfully", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "validateCashDrawerLimitCashDrawerLimitExceeded", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "validateCashDrawerLimitFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posTenderPaymentButtonClicked", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentViewNumpadEnterButtonClicked", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posTenderPaymentOperationStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posTenderPaymentOperationSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent), __param(4, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posTenderPaymentOperationFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posTenderPaymentOperationCancelled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentResultResolutionStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentResultResolutionSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentResultResolutionFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posValidatePaymentAmountStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posValidatePaymentAmountSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent), __param(4, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posValidatePaymentAmountFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentAmountSetToFullAmountDue", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posDenominationButtonClicked", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Number, Boolean]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetCurrencyInfoForAmountStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Number, Boolean]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetCurrencyInfoForAmountSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.SystemMetadata), __param(4, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Number, Boolean, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetCurrencyInfoForAmountFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Boolean]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetCurrencyAmountsStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Boolean]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetCurrencyAmountsSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Boolean, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetCurrencyAmountsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetCurrencyDenominationListDictionaryStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetCurrencyDenominationListDictionarySucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetCurrencyDenominationListDictionaryFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetCurrencyDenominationListStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetCurrencyDenominationListSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetCurrencyDenominationListFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentAmountSetToDenominationAmount", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posDenominationAmountAddedToPaymentAmount", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentAddCartTenderLineStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentAddCartTenderLineSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentAddCartTenderLineCancelled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentAddCartTenderLineFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentMethodViewModelLoadStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentMethodViewModelLoadSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentMethodViewModelLoadCancelled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentMethodViewModelLoadFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentUIButtonClicked", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posIsValidatingSignatureFromExternalSource", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetSignatureRequestIsRetrievingFromPOS", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetSignatureRequestIsRetrievingFromDevice", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetSignatureRequestSkippingSignatureCapture", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posValidateSignatureInPOSActivityStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posValidateSignatureInPOSActivitySucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posValidateSignatureInPOSActivityFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetSignatureInPOSActivityStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetSignatureInPOSActivitySucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetSignatureInPOSActivityFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetSignatureFromDeviceActivityStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetSignatureFromDeviceActivitySucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetSignatureFromDeviceActivityFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetValidatedSignatureAndUpdateTenderLineFlowFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posValidateSignatureAndUpdateTenderLineFlowFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentViewOnShownStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentViewOnShownSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentViewOnShownCancelled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentViewOnShownFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentMsrEventHandlerStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentMsrEventHandlerSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentMsrEventHandlerFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentBarcodeScannerEventHandlerStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentBarcodeScannerEventHandlerSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentBarcodeScannerEventHandlerFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posCardPaymentGetCardTypeStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posCardPaymentGetCardTypeSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posCardPaymentGetCardTypeCancelled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posCardPaymentGetCardTypeFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posSelectCardTypeStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posSelectCardTypeSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posSelectCardTypeCancelled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posSelectCardTypeFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentAddPreprocessedTenderLineStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentAddPreprocessedTenderLineSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentAddPreprocessedTenderLineCancelled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentAddPreprocessedTenderLineFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentFailedToRetrievePaymentTransactionReferenceId", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentTransactionReferenceDataFoundInStorage", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentTransactionReferenceDataNotFoundInStorage", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentTransactionReferenceIdNotSupported", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentTransactionReferenceIdRetrievedFromConnector", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentTransactionReferenceDataWasStored", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentSkippingDuplicateAuthorization", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentDuplicateAuthorizationNotFound", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentReacquiringTransactionReference", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentAmountDidntMatchForFoundTransaction", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentRemovingPaymentTransactionReferenceData", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentUsingExistingPaymentTransaction", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.CustomerContent), __param(4, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Number, Boolean, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentSkippedPartialCheck", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posOperationCanceledDueToRecoveredPayment", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentFailedToRetrieveTransactionByTransactionReferenceData", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentSkippedDisplayingError", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentDeserializedTransactionReferenceMalformed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentRetryRetrievingTransactionByReferenceData", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentStopRetrievingTransactionByReferenceDueToUnknownError", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentInformedUserRecoveredTransactionSameAmount", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentInformedUserRecoveredTransactionDifferentAmount", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentCheckGiftCardBalanceStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentCheckGiftCardBalanceSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentCheckGiftCardBalanceFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetGiftCardRequestStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetGiftCardRequestRetrievePrivateTenderFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetGiftCardRequestPaymentTerminalNotConfigured", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetGiftCardRequestSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetGiftCardRequestFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posValidatePaymentInfoStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posValidatePaymentInfoSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posValidatePaymentInfoFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentCreateNewCustomerStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentCreateNewCustomerSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentCreateNewCustomerCanceled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentCreateNewCustomerFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentSearchCustomersStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentSearchCustomersSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentSearchCustomersCanceled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentSearchCustomersFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posCheckCreditMemoBalanceStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posCheckCreditMemoBalanceSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posCheckCreditMemoBalanceFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posApprovePartialAmountActivityStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posApprovePartialAmountActivitySucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posApprovePartialAmountActivityFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAddPreAuthorizedPaymentsStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata), __param(4, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Boolean, Boolean, Number, Boolean]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAddPreAuthorizedPaymentsNotApplicable", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAddPreAuthorizedPaymentsCancelled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Number, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAddPreAuthorizedPaymentsUpdateAuthorizedTenderLineStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Number, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAddPreAuthorizedPaymentsUpdateAuthorizedTenderLineSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.CustomerContent), __param(3, Commerce.CustomerContent), __param(4, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Number, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAddPreAuthorizedPaymentsUpdateAuthorizedTenderLineFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAddPreAuthorizedPaymentsUpdateAuthorizeCardTokenStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAddPreAuthorizedPaymentsAuthorizeCardTokenRetryStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAddPreAuthorizedPaymentsAuthorizeCardTokenSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAddPreAuthorizedPaymentsAuthorizeCardTokenFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAddPreAuthorizedPaymentsUpdateUnauthorizedTenderLineStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAddPreAuthorizedPaymentsUpdateUnauthorizedTenderLineSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAddPreAuthorizedPaymentsUpdateUnauthorizedTenderLineFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAddPreAuthorizedPaymentsAuthorizeCardTokenNotApproved", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAddPreAuthorizedPaymentsSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAddPreAuthorizedPaymentsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Boolean]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAddPreAuthorizedPaymentsAuthorizeCardTokenSkipped", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posCardPaymentLoadingMerchantPropertiesForCartStarted", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posCardPaymentRetrievedServiceAccountIdsFromCartToLoadMerchantProperties", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posCardPaymentRetailServerCallToLoadMerchantPropertiesStarted", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posCardPaymentRetailServerCallToLoadMerchantPropertiesCompletedSuccessfully", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posCardPaymentRetailServerCallToLoadMerchantPropertiesFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posCardPaymentLoadingMerchantPropertiesForCartSkipped", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posCardPaymentMerchantPropertiesForPaymentExist", null);
        __decorate([
            __param(0, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posCardPaymentLoadingMerchantPropertiesForPayment", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posConcludeTransactionPreAuthorizedPaymentCaptureFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posConcludeTransactionUpdatingPreAuthorizedTenderLineFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posConcludeTransactionUpdatingPreAuthorizedTenderLineSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posConcludeTransactionReauthorizingPaymentUsingCardTokenStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posConcludeTransactionReauthorizingPaymentUsingCardTokenSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posConcludeTransactionReauthorizingPaymentUsingCardTokenFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posConcludeTransactionAddingReauthorizedTenderLineToCartStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posConcludeTransactionAddingReauthorizedTenderLineToCartSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posConcludeTransactionAddingReauthorizedTenderLineToCartFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posConcludeTransactionCapturingReauthorizedTenderLineStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posConcludeTransactionCapturingReauthorizedTenderLineSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posConcludeTransactionCapturingReauthorizedTenderLineFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posConcludeTransactionVoidPaymentStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posConcludeTransactionVoidPaymentSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posConcludeTransactionVoidPaymentCanceled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posConcludeTransactionVoidPaymentFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posConcludeTransactionAddingVoidedTenderLineToCartStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posConcludeTransactionAddingVoidedTenderLineToCartSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posConcludeTransactionAddingVoidedTenderLineToCartFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posConcludeTransactionUserSelectedToRetryVoid", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posConcludeTransactionRetryVoidPaymentUserPromptFailedToRender", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Boolean]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posConcludeTransactionCapturingPaymentSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthorizeCardTokenStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthorizeCardTokenSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthorizeCardTokenCancelled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthorizeCardTokenFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthorizeCardTokenNotApproved", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAddAuthorizedDeferredTenderLineToCartStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAddAuthorizedDeferredTenderLineToCartCancelled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAddAuthorizedDeferredTenderLineToCartSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAddAuthorizedDeferredTenderLineToCartFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posVoidPreviousAuthorizedTenderLineStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posVoidPreviousAuthorizedTenderLineCancelled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posVoidPreviousAuthorizedTenderLineSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posVoidPreviousAuthorizedTenderLineFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posVoidPreviousAuthorizedTenderLineNotApplicable", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetAuthorizationOptionsStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Boolean, Boolean, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetAuthorizationOptionsSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetAuthorizationOptionsCancelled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetAuthorizationOptionsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Boolean, Boolean]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthorizationOfCardTokenSkipped", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posApprovePartialPaymentStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posApprovePartialPaymentCancelled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posApprovePartialPaymentSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posApprovePartialPaymentFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posApprovePartialPaymentApproved", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posApprovePartialPaymentNotApproved", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posVoidPaymentStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posVoidPaymentCancelled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posVoidPaymentSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posVoidPaymentFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posVoidPaymentAddVoidedTenderLineStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posVoidPaymentAddVoidedTenderLineCancelled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posVoidPaymentAddVoidedTenderLineSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posVoidPaymentAddVoidedTenderLineFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posVoidPaymentUsingPaymentTerminalVoidStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posVoidPaymentUsingPaymentTerminalVoidCancelled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posVoidPaymentUsingPaymentTerminalVoidSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posVoidPaymentUsingPaymentTerminalVoidFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posVoidPaymentUsingCardPaymentVoidStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posVoidPaymentUsingCardPaymentVoidCancelled", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posVoidPaymentUsingCardPaymentVoidSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posVoidPaymentUsingCardPaymentVoidFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posVoidPaymentInvalidCardVersion", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posVoidPaymentPreventRecoveryOnFailure", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posVoidPaymentRetrying", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetLoyaltyCardRequestStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetLoyaltyCardRequestSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGetLoyaltyCardRequestFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentCheckLoyaltyCardBalanceStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentCheckLoyaltyCardBalanceSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posPaymentCheckLoyaltyCardBalanceFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthorizeCardTokenRequestCardTypeIdSetOnTenderLine", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posAuthorizeCardTokenRequestCardTypeIdIsNullOrUndefined", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGettingCardTypedIdUsingMaskedCardNumberStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGettingCardTypedIdUsingMaskedCardNumberSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "posGettingCardTypedIdUsingMaskedCardNumberFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "refinerHelperShowRefinerAsyncUnsupportedRefiner", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingCustomerSearchViewModelSearchCustomersBySearchCriteria", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, Number, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewsMerchandisingCustomerSearchViewModelSearchCustomersBySearchFieldCriteria", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "receiptHelperGetSalesLinesForGiftReceiptFilter", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "logonHelperHandleAsyncResultFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "dataHelperLoadJsonAsyncFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "dataHelperLoadTextAsyncFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "requestInterceptorEnableAutoLogOffSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "requestInterceptorDisableAutoLogOffSucceeded", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "requestInterceptorEnableAutoLogOffFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "requestInterceptorDisableAutoLogOffFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelGetSalesRepresentativeViewModelGetSalesRepresentativesAsyncStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelGetSalesRepresentativeViewModelGetSalesRepresentativesAsyncFinished", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelGetSalesRepresentativeViewModelGetSalesRepresentativesAsyncFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "urlOperationHandlerLaunchUriAsyncSucceded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "urlOperationHandlerLaunchUriAsyncFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "applicationFailedToLaunchUri", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelLoyaltyExpiringPointsDialogViewModelgetLoyaltyRewardPointsExpiringSoonAsyncStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelLoyaltyExpiringPointsDialogViewModelgetLoyaltyRewardPointsExpiringSoonAsyncSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelLoyaltyExpiringPointsDialogViewModelgetLoyaltyRewardPointsExpiringSoonAsyncError", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "remoteTaskManagerInternalTaskReplaced", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "remoteTaskManagerRunOutgoingTaskStart", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "remoteTaskManagerRunOutgoingTaskSuccessful", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "remoteTaskManagerRunOutgoingTaskFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata), __param(4, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, Number, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "remoteTaskManagerRunOutgoingTaskTimedOut", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "remoteTaskManagerHandleOutgoingTaskResponseStart", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "remoteTaskManagerHandleOutgoingTaskResponseEnd", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "remoteTaskManagerHandleOutgoingTaskResponseFailedExpectedParameterValueNotSet", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "remoteTaskManagerHandleOutgoingTaskResponseFailedUnableToDeseriaizeMessage", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "remoteTaskManagerHandleOutgoingTaskResultStart", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "remoteTaskManagerHandleOutgoingTaskResultEndAsOutgoingTaskNotFound", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "remoteTaskManagerHandleOutgoingTaskResultSuccessfulWithOutgoingTaskSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "remoteTaskManagerHandleOutgoingTaskResultSuccessfulWithOutgoingTaskFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "remoteTaskManagerHandleOutgoingTaskResultFailedUnableToParseTaskResultData", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "remoteTaskManagerHandleOutgoingTaskResultFailedUnableToParseTaskFailureData", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "remoteTaskManagerHandleIncomingTaskRequestStart", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "remoteTaskManagerHandleIncomingTaskRequestEnd", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "remoteTaskManagerHandleIncomingTaskRequestFailedExpectedParameterValueNotSet", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "remoteTaskManagerHandleIncomingTaskRequestFailedUnableToDeseriaizeMessage", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "remoteTaskManagerRunIncomingTaskStart", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "remoteTaskManagerRunIncomingTaskEnd", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "remoteTaskManagerRunIncomingTaskExecuteTask", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "remoteTaskManagerRunIncomingTaskSuccessfulWithIncomingTaskSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "remoteTaskManagerRunIncomingTaskSuccessfulWithIncomingTaskFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "remoteTaskManagerRunIncomingTaskRequestFailedTaskNotSupported", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "remoteTaskManagerRunIncomingTaskRequestFailedErrorWhenRunningIncomingTask", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "hostedAppRemoteTaskManagerHandlerReceiveStart", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "hostedAppRemoteTaskManagerHandlerReceiveEnd", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent), __param(4, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "hostedAppRemoteTaskManagerHandlerReceiveFailedExpectedParameterValueNotSet", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "hostedAppRemoteTaskManagerHandlerReceiveRunRequest", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "hostedAppRemoteTaskManagerHandlerReceiveFailedMessageTypeIsNotSupported", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata), __param(3, Commerce.CustomerContent), __param(4, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "hostedAppRemoteTaskManagerHandlerReceiveFailedUnhandledErrorWhenRunningRemoteMessageRequest", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelStoreDetailsGetStoreDetailsStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelStoreDetailsGetStoreDetailsSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelStoreDetailsGetStoreDetailsFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelStoreDetailsFormatStoreHoursStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelStoreDetailsFormatStoreHoursSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "printGiftCardInquiryReceiptFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelLoyaltyTransactionsDialogViewModelGetLoyaltyTransactionsAsyncStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelLoyaltyTransactionsDialogViewModelGetLoyaltyTransactionsAsyncSucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.CustomerContent),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelLoyaltyTransactionsDialogViewModelGetLoyaltyTransactionsAsyncError", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "viewModelSearchOrdersInvalidCustomerOrderRecallType", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "getCashManagementTransactionSourceActivityStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "getCashManagementTransactionSourceActivitySucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "getCashManagementTransactionSourceActivityFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "getCashManagementTransactionAmountActivityStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "getCashManagementTransactionAmountActivitySucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "getCashManagementTransactionAmountActivityFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "createCashManagementTransactionActivityStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "createCashManagementTransactionActivitySucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "createCashManagementTransactionActivityFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "selectStoreSafeActivityStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "selectStoreSafeActivitySucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "selectStoreSafeActivityFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "selectShiftActivityStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "selectShiftActivitySucceeded", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "selectShiftActivityFailed", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "createAdvancedCashManagementTransactionClientRequestStarted", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "createAdvancedCashManagementTransactionClientRequestSuccess", null);
        __decorate([
            __param(0, Commerce.SystemMetadata), __param(1, Commerce.SystemMetadata), __param(2, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "createAdvancedCashManagementTransactionClientRequestFailed", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "getStoreSafesSucceeded", null);
        __decorate([
            __param(0, Commerce.CustomerContent), __param(1, Commerce.SystemMetadata),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], RetailLogger, "getStoreSafesFailed", null);
        return RetailLogger;
    }());
    Commerce.RetailLogger = RetailLogger;
})(Commerce || (Commerce = {}));
//# sourceMappingURL=D:/a/1/s/src/Components/Apps/Platform/Pos/RetailLogger/RetailLogger.js.map
// SIG // Begin signature block
// SIG // MIIjpgYJKoZIhvcNAQcCoIIjlzCCI5MCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // ip2liwWlsi5SzaQ4UVP9Db7Xo7KoS8wxyD2kw+OEgLKg
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
// SIG // ARUwLwYJKoZIhvcNAQkEMSIEIPsJRInX7nPRGqDu8+ol
// SIG // jj33S7XRmREke2IMOALlqd/fMGQGCisGAQQBgjcCAQwx
// SIG // VjBUoDaANABnAGwAbwBiAGEAbABpAHoAZQAuAGMAdQBs
// SIG // AHQAdQByAGUALgBsAHYALQBMAFYALgBqAHOhGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBAG4iSIQGw5H44S3wLve1CvcRJ0arcjyGCGVn
// SIG // QCmzhN/KGuC9ZdjnzwvugEvIMOYkNrXpUrHuxgOy4qDT
// SIG // G58+nP+gmepyoSxf6ZrdmVnKxdHu717cI5dMnlfODzHr
// SIG // LemSQ4h7viePMLRLsOihaPNvQBNWDZ7A27q3lOj9qiYI
// SIG // 2cWsh1sdjaa1Jxah3eF46KQ6xIumFBzmQz4qz5LklmtA
// SIG // Nl84TnVNgq6J+h/ANooMdJnOztbr9qIqi76bOGYN/2zL
// SIG // Bo8mdm7T7Vu8TFCabf46NjhcrQ3RFtdOMUkhYE87aLqG
// SIG // MrbnjYr7J3eaRuFXxDi895mWB19SRkBgzBsC4xusjxih
// SIG // ghLlMIIS4QYKKwYBBAGCNwMDATGCEtEwghLNBgkqhkiG
// SIG // 9w0BBwKgghK+MIISugIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBUQYLKoZIhvcNAQkQAQSgggFABIIBPDCCATgCAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQgaPHX
// SIG // flrp2aTKqvaY0hDvP1pxmq67kOTn4yrck/9LZbgCBlx1
// SIG // QLrLVBgTMjAxOTAzMTIwOTUzMTguNjU5WjAEgAIB9KCB
// SIG // 0KSBzTCByjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAldB
// SIG // MRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24xLTArBgNVBAsTJE1pY3Jv
// SIG // c29mdCBJcmVsYW5kIE9wZXJhdGlvbnMgTGltaXRlZDEm
// SIG // MCQGA1UECxMdVGhhbGVzIFRTUyBFU046QTg0MS00QkI0
// SIG // LUNBOTMxJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0
// SIG // YW1wIHNlcnZpY2Wggg48MIIE8TCCA9mgAwIBAgITMwAA
// SIG // AN3k3jrsrfPx1AAAAAAA3TANBgkqhkiG9w0BAQsFADB8
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNy
// SIG // b3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDAeFw0xODA4
// SIG // MjMyMDI2NTlaFw0xOTExMjMyMDI2NTlaMIHKMQswCQYD
// SIG // VQQGEwJVUzELMAkGA1UECBMCV0ExEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEtMCsGA1UECxMkTWljcm9zb2Z0IElyZWxhbmQg
// SIG // T3BlcmF0aW9ucyBMaW1pdGVkMSYwJAYDVQQLEx1UaGFs
// SIG // ZXMgVFNTIEVTTjpBODQxLTRCQjQtQ0E5MzElMCMGA1UE
// SIG // AxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgc2VydmljZTCC
// SIG // ASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAI2H
// SIG // FT+p60pioPFxF0JFH0FdkfmtnSYM79IlChuL5gn8JnHT
// SIG // Oe7lvOPihN7+byvgMUb/oZzLtHhgWYNNLr92jGns45bC
// SIG // 9D2XFDJNfZakEvepG+q8UNXJRlpqlEM70H/trnwTv/au
// SIG // R3TTqDBbjol39+7JPkf0iA8Eh8FmXssKfbdc4VUQBsJX
// SIG // sHYc5WCBly5V7mpuJvTd7F6jwuAufpeTOGSRtjwyZVfr
// SIG // 0Gf9mlYmyFZjwdZNGB1YvCbUfvyW3si5YKZitmxCITLL
// SIG // TNYhO/5yWYpA+ZQ6+t4hEQSTNn6kBqCVvlWFBhKNH1wM
// SIG // T23o1UzWBk7P9mGyKqdTs8QBbCwGfC0CAwEAAaOCARsw
// SIG // ggEXMB0GA1UdDgQWBBR3Ufb2yehiI6WG6WMsfZbw6OqP
// SIG // OTAfBgNVHSMEGDAWgBTVYzpcijGQ80N7fEYbxTNoWoVt
// SIG // VTBWBgNVHR8ETzBNMEugSaBHhkVodHRwOi8vY3JsLm1p
// SIG // Y3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9NaWNU
// SIG // aW1TdGFQQ0FfMjAxMC0wNy0wMS5jcmwwWgYIKwYBBQUH
// SIG // AQEETjBMMEoGCCsGAQUFBzAChj5odHRwOi8vd3d3Lm1p
// SIG // Y3Jvc29mdC5jb20vcGtpL2NlcnRzL01pY1RpbVN0YVBD
// SIG // QV8yMDEwLTA3LTAxLmNydDAMBgNVHRMBAf8EAjAAMBMG
// SIG // A1UdJQQMMAoGCCsGAQUFBwMIMA0GCSqGSIb3DQEBCwUA
// SIG // A4IBAQAlzHnuKr77BrCoI0wFCK9a/LlR7hf+c51/X62m
// SIG // oyICoCCSpTk1s4CHchJtWyGrzCnl15FzEYiFXphmZcmQ
// SIG // hQ6C2w6qKFaWlmjJV1nTAvNFglqfhfB0q1FS1szYgp6t
// SIG // BzzJ6mU6mO5wmJ4zgEsBICIgW3GYuNZ1hRz/UxQ3ZuMP
// SIG // Yyz5xajC9mdrcWJJMk/Z0vqfBM6mo6TxalpIsO6S7M/N
// SIG // O9XdOTTghVgSAykXZvxf1y4NXOWAb/dLVXp3f3zHVPQV
// SIG // 13qKaZKN3AvFo+50v/PG9NJNsHcYUUNX2p0RHAgCPahJ
// SIG // 3AGk6LtbxNXg4POWSPBiyJifP6GZpHeJjh/rApNCMIIG
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
// SIG // U1MgRVNOOkE4NDEtNEJCNC1DQTkzMSUwIwYDVQQDExxN
// SIG // aWNyb3NvZnQgVGltZS1TdGFtcCBzZXJ2aWNloiMKAQEw
// SIG // BwYFKw4DAhoDFQDppd7VYqc54PjF5U5pK9rjaY8IeKCB
// SIG // gzCBgKR+MHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpX
// SIG // YXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYD
// SIG // VQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAkBgNV
// SIG // BAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEw
// SIG // MA0GCSqGSIb3DQEBBQUAAgUA4DGLNDAiGA8yMDE5MDMx
// SIG // MjA5MzQ0NFoYDzIwMTkwMzEzMDkzNDQ0WjB3MD0GCisG
// SIG // AQQBhFkKBAExLzAtMAoCBQDgMYs0AgEAMAoCAQACAh5P
// SIG // AgH/MAcCAQACAhKAMAoCBQDgMty0AgEAMDYGCisGAQQB
// SIG // hFkKBAIxKDAmMAwGCisGAQQBhFkKAwKgCjAIAgEAAgMH
// SIG // oSChCjAIAgEAAgMBhqAwDQYJKoZIhvcNAQEFBQADgYEA
// SIG // ORj3DD8hbaNY/EAj4NidZ7ndIWN4srEulNrFvXtkYhSC
// SIG // mWH5mpT2B50xxVmCsxU7rBvIlra6vIDK3AHarmAGGlE2
// SIG // RPBHMgSEiyjfix/Qc5RkpaPA1WCh8xamy+v6dHql3uwb
// SIG // zp+vn/DflhmHg8h+pAF+JhYWRtpdI8/gzTCt6MIxggMN
// SIG // MIIDCQIBATCBkzB8MQswCQYDVQQGEwJVUzETMBEGA1UE
// SIG // CBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEe
// SIG // MBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYw
// SIG // JAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0Eg
// SIG // MjAxMAITMwAAAN3k3jrsrfPx1AAAAAAA3TANBglghkgB
// SIG // ZQMEAgEFAKCCAUowGgYJKoZIhvcNAQkDMQ0GCyqGSIb3
// SIG // DQEJEAEEMC8GCSqGSIb3DQEJBDEiBCBgJOwvO102JiFi
// SIG // c6jz4HJEAsuzXqrpzRQ4Y3vTM8lqJTCB+gYLKoZIhvcN
// SIG // AQkQAi8xgeowgecwgeQwgb0EIErg4nDzh2o/LyQ46m0c
// SIG // /VC4PriQU+Lwkgt8r8df6FgYMIGYMIGApH4wfDELMAkG
// SIG // A1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAO
// SIG // BgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29m
// SIG // dCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0
// SIG // IFRpbWUtU3RhbXAgUENBIDIwMTACEzMAAADd5N467K3z
// SIG // 8dQAAAAAAN0wIgQg77oqUimeWn+scJkwVNQ3lQUY5P+U
// SIG // j/AvvnNXQrsyMPEwDQYJKoZIhvcNAQELBQAEggEAFHuk
// SIG // mp3xQWnpa58NmCd2e5B55wND3+Ln6HnLKIC74ld0StJu
// SIG // /7sll03J7PmABJHpZTP1OecJI73OAi3CPLsMJiA6wfz3
// SIG // 2ydEATREyXIJdxP1EKEnKm2PVZAPURKZZtbyfIjiJOiF
// SIG // 5M8yx5TbF358FWJY7wHVqPRgWle+Hg3Kf0vPfjGF0bvp
// SIG // EOilc3eXm6Dv8YfDetc49b9HA2hsajRv+LtriDi2iQMu
// SIG // 6U2L89DaEc2n8jkxXoU9v1PhzP7ZukInqnc1A/XwO5I+
// SIG // ADlSjbcuitg9uLET/jYqCqs4WyWa1BrbaNkFsxbEj5Na
// SIG // GxhmuCV3FfkC6GvhX8ppfuVuOW6YKQ==
// SIG // End signature block
