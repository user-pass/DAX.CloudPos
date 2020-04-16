var Commerce;
(function (Commerce) {
    "use strict";
    var ObjectExtensions = (function () {
        function ObjectExtensions() {
        }
        ObjectExtensions.isNull = function (object) {
            return (object === null);
        };
        ObjectExtensions.isUndefined = function (object) {
            return (typeof object === "undefined");
        };
        ObjectExtensions.isOfType = function (object, type) {
            return !ObjectExtensions.isUndefined(object) && object instanceof type;
        };
        ObjectExtensions.isNullOrUndefined = function (object) {
            return ObjectExtensions.isNull(object)
                || ObjectExtensions.isUndefined(object);
        };
        ObjectExtensions.isFunction = function (object) {
            return typeof object === "function";
        };
        ObjectExtensions.isObject = function (variable) {
            return typeof variable === "object";
        };
        ObjectExtensions.isNumber = function (variable) {
            return typeof variable === "number";
        };
        ObjectExtensions.isString = function (variable) {
            return typeof variable === "string";
        };
        ObjectExtensions.isBoolean = function (variable) {
            return typeof variable === "boolean";
        };
        ObjectExtensions.clone = function (origObject) {
            return ObjectExtensions.safeClone(origObject, []);
        };
        ObjectExtensions.forEachKeyValuePair = function (object, iterator) {
            if (ObjectExtensions.isNullOrUndefined(object)) {
                return;
            }
            var keys = Object.keys(object);
            var stop = false;
            for (var i = 0; !stop && i < keys.length; i++) {
                var key = keys[i];
                stop = iterator(key, object[key]) === false;
            }
        };
        ObjectExtensions.groupBy = function (inputArray, keySelector) {
            var groupedArray = [];
            if (!Commerce.ArrayExtensions.hasElements(inputArray)) {
                return groupedArray;
            }
            inputArray.forEach(function (element) {
                var groupKey = keySelector(element);
                if (typeof (groupedArray[groupKey]) === "undefined") {
                    groupedArray[groupKey] = [];
                }
                groupedArray[groupKey].push(element);
            });
            return groupedArray;
        };
        ObjectExtensions.tryDispose = function (disposableObject) {
            if (!ObjectExtensions.isNullOrUndefined(disposableObject)
                && ObjectExtensions.isFunction(disposableObject.dispose)
                && !disposableObject[ObjectExtensions.DISPOSED_FLAG]) {
                disposableObject[ObjectExtensions.DISPOSED_FLAG] = true;
                disposableObject.dispose();
                return true;
            }
            return false;
        };
        ObjectExtensions.disposeAllProperties = function (obj) {
            if (!ObjectExtensions.isNullOrUndefined(obj) && ObjectExtensions.isObject(obj)) {
                for (var propertyKey in obj) {
                    if (obj.hasOwnProperty(propertyKey)) {
                        var property = obj[propertyKey];
                        if (Array.isArray(property)) {
                            for (var itemIndex in property) {
                                if (property.hasOwnProperty(itemIndex)) {
                                    ObjectExtensions.tryDispose(property[itemIndex]);
                                }
                            }
                        }
                        else {
                            ObjectExtensions.tryDispose(property);
                        }
                        delete obj[propertyKey];
                        property = null;
                    }
                }
            }
        };
        ObjectExtensions.safeClone = function (origObject, cloneMap) {
            if (ObjectExtensions.isNullOrUndefined(origObject)) {
                return origObject;
            }
            var newObj;
            if (origObject instanceof Array) {
                if (!cloneMap.some(function (val) {
                    if (val.id === origObject) {
                        newObj = val.value;
                        return true;
                    }
                    return false;
                })) {
                    newObj = [];
                    cloneMap.push({ id: origObject, value: newObj });
                    for (var i = 0; i < origObject.length; i++) {
                        if (typeof origObject[i] === "object") {
                            newObj.push(ObjectExtensions.safeClone(origObject[i], cloneMap));
                        }
                        else {
                            newObj.push(origObject[i]);
                        }
                    }
                }
            }
            else if (origObject instanceof Date) {
                newObj = new Date(origObject.valueOf());
            }
            else if (origObject instanceof Object) {
                if (!cloneMap.some(function (val) {
                    if (val.id === origObject) {
                        newObj = val.value;
                        return true;
                    }
                    return false;
                })) {
                    newObj = ObjectExtensions.extend(origObject);
                    cloneMap.push({ id: origObject, value: newObj });
                    for (var property in newObj) {
                        if (newObj.hasOwnProperty(property)) {
                            if (typeof newObj[property] === "object") {
                                if (property === "__metadata") {
                                    newObj[property] = ObjectExtensions.extend(origObject[property]);
                                }
                                else {
                                    newObj[property] = ObjectExtensions.safeClone(origObject[property], cloneMap);
                                }
                            }
                        }
                    }
                }
            }
            else {
                newObj = origObject;
            }
            return newObj;
        };
        ObjectExtensions.extend = function (source) {
            var newObj = $.extend(false, {}, source);
            ObjectExtensions.copyOverKeysWithUndefinedValues(source, newObj);
            return newObj;
        };
        ObjectExtensions.copyOverKeysWithUndefinedValues = function (source, target) {
            Object.keys(source).forEach(function (key) {
                if (ObjectExtensions.isUndefined(target[key])) {
                    target[key] = undefined;
                }
            });
        };
        ObjectExtensions.DISPOSED_FLAG = "_dax_disposed";
        return ObjectExtensions;
    }());
    Commerce.ObjectExtensions = ObjectExtensions;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var ArrayExtensions = (function () {
        function ArrayExtensions() {
        }
        ArrayExtensions.hasElements = function (array) {
            return !Commerce.ObjectExtensions.isNullOrUndefined(array) && array.length > 0;
        };
        ArrayExtensions.hasElement = function (array, element, equalityComparer) {
            if (!ArrayExtensions.hasElements(array)) {
                return false;
            }
            var equals = ArrayExtensions._getEqualityComparer(equalityComparer);
            for (var i in array) {
                if (equals(array[i], element)) {
                    return true;
                }
            }
            return false;
        };
        ArrayExtensions.distinct = function (array, equalityComparer) {
            if (!ArrayExtensions.hasElements(array)) {
                return array;
            }
            var equals = ArrayExtensions._getEqualityComparer(equalityComparer);
            var distinct = [];
            o: for (var i = 0, n = array.length; i < n; i++) {
                for (var x = 0, y = distinct.length; x < y; x++) {
                    if (equals(distinct[x], array[i])) {
                        continue o;
                    }
                }
                distinct.push(array[i]);
            }
            return distinct;
        };
        ArrayExtensions.difference = function (left, right, equalityComparer) {
            return ArrayExtensions._differenceOrIntersect(left, right, true, equalityComparer);
        };
        ArrayExtensions.firstOrUndefined = function (array, predicate) {
            if (!ArrayExtensions.hasElements(array)) {
                return undefined;
            }
            if (Commerce.ObjectExtensions.isFunction(predicate)) {
                for (var i = 0; i < array.length; i++) {
                    if (predicate(array[i])) {
                        return array[i];
                    }
                }
                return undefined;
            }
            else {
                return array[0];
            }
        };
        ArrayExtensions.lastOrUndefined = function (array, predicate) {
            if (!ArrayExtensions.hasElements(array)) {
                return undefined;
            }
            if (Commerce.ObjectExtensions.isFunction(predicate)) {
                for (var i = array.length - 1; i >= 0; i--) {
                    if (predicate(array[i])) {
                        return array[i];
                    }
                }
                return undefined;
            }
            else {
                return array[array.length - 1];
            }
        };
        ArrayExtensions.findIndex = function (array, predicate) {
            if (!ArrayExtensions.hasElements(array) || !Commerce.ObjectExtensions.isFunction(predicate)) {
                return -1;
            }
            for (var i = 0; i < array.length; i++) {
                if (predicate(array[i], i, array)) {
                    return i;
                }
            }
            return -1;
        };
        ArrayExtensions.sum = function (array, selector, predicate) {
            var usePredicate = false;
            if (predicate) {
                usePredicate = Commerce.ObjectExtensions.isFunction(predicate);
            }
            if (!Commerce.ObjectExtensions.isFunction(selector)) {
                throw "Selector is not a Function";
            }
            if (!ArrayExtensions.hasElements(array)) {
                return 0;
            }
            return array.reduce(function (accumulator, element) {
                var elementValue;
                if (usePredicate) {
                    elementValue = predicate(element) ? selector(element) : 0;
                }
                else {
                    elementValue = selector(element);
                }
                return accumulator + elementValue;
            }, 0);
        };
        ArrayExtensions._differenceOrIntersect = function (left, right, difference, equalityComparer) {
            if (Commerce.ObjectExtensions.isNullOrUndefined(left) || Commerce.ObjectExtensions.isNullOrUndefined(right)) {
                return null;
            }
            return left.filter(function (value) {
                var existsInRight = ArrayExtensions.hasElement(right, value, equalityComparer);
                return difference ? !existsInRight : existsInRight;
            });
        };
        ArrayExtensions._getDefaultEqualityComparer = function () {
            return function (left, right) { return left === right; };
        };
        ArrayExtensions._getEqualityComparer = function (equalityComparer) {
            return (equalityComparer) ? equalityComparer : ArrayExtensions._getDefaultEqualityComparer();
        };
        return ArrayExtensions;
    }());
    Commerce.ArrayExtensions = ArrayExtensions;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var DateExtensions = (function () {
        function DateExtensions() {
        }
        DateExtensions.setTimeToLastSecondOfDay = function (date) {
            date.setHours(23, 59, 59);
        };
        DateExtensions.isTodayOrFutureDate = function (date) {
            return DateExtensions.isTodayDate(date) || DateExtensions.isFutureDate(date);
        };
        DateExtensions.isFutureDate = function (date) {
            if (Commerce.ObjectExtensions.isNullOrUndefined(date)) {
                return false;
            }
            var yearFutureDate = date.getFullYear();
            var monthFutureDate = date.getMonth();
            var dayOfMonthFutureDate = date.getDate();
            var now = DateExtensions.now;
            var yearNow = now.getFullYear();
            var monthNow = now.getMonth();
            var dayOfMonthNow = now.getDate();
            if (yearFutureDate > yearNow) {
                return true;
            }
            else if (yearFutureDate === yearNow && monthFutureDate > monthNow) {
                return true;
            }
            else if (yearFutureDate === yearNow && monthFutureDate === monthNow && dayOfMonthFutureDate > dayOfMonthNow) {
                return true;
            }
            return false;
        };
        DateExtensions.isTodayDate = function (date) {
            if (Commerce.ObjectExtensions.isNullOrUndefined(date)) {
                return false;
            }
            var year = date.getFullYear();
            var month = date.getMonth();
            var dayOfMonth = date.getDate();
            var now = DateExtensions.now;
            return now.getFullYear() === year && now.getMonth() === month && now.getDate() === dayOfMonth;
        };
        DateExtensions.getDate = function (dateTime) {
            if (dateTime == null) {
                dateTime = new Date();
            }
            var newDate = new Date(dateTime.getTime());
            newDate.setHours(0, 0, 0, 0);
            return newDate;
        };
        DateExtensions.addDays = function (dateTime, days) {
            if (Commerce.ObjectExtensions.isNullOrUndefined(dateTime)) {
                dateTime = DateExtensions.now;
            }
            if (Commerce.ObjectExtensions.isNullOrUndefined(days) || days === 0) {
                return dateTime;
            }
            var newDate = new Date(dateTime.getTime());
            newDate.setDate(dateTime.getDate() + days);
            return newDate;
        };
        Object.defineProperty(DateExtensions, "now", {
            get: function () {
                return new Date();
            },
            enumerable: true,
            configurable: true
        });
        DateExtensions.areEqual = function (left, right) {
            if (Commerce.ObjectExtensions.isNullOrUndefined(left) || Commerce.ObjectExtensions.isNullOrUndefined(right)) {
                return false;
            }
            return left.getTime() === right.getTime();
        };
        DateExtensions.getMinDate = function () {
            return new Date(1, 1, 1);
        };
        DateExtensions.isValidDate = function (object) {
            if (Commerce.ObjectExtensions.isNullOrUndefined(object)) {
                return false;
            }
            return (!isNaN(Date.parse(object.toString())));
        };
        return DateExtensions;
    }());
    Commerce.DateExtensions = DateExtensions;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var EnumExtensions = (function () {
        function EnumExtensions() {
        }
        EnumExtensions.getValues = function (e) {
            if (Commerce.ObjectExtensions.isNullOrUndefined(e)) {
                return [];
            }
            return EnumExtensions.getObjValues(e)
                .filter(function (v) { return Commerce.ObjectExtensions.isNumber(v); });
        };
        EnumExtensions.getObjValues = function (e) {
            var objValues = Object.keys(e).map(function (k) { return e[k]; });
            return objValues;
        };
        return EnumExtensions;
    }());
    Commerce.EnumExtensions = EnumExtensions;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var StringExtensions = (function () {
        function StringExtensions() {
        }
        Object.defineProperty(StringExtensions, "EMPTY", {
            get: function () {
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StringExtensions, "NEW_LINE", {
            get: function () {
                return "\r\n";
            },
            enumerable: true,
            configurable: true
        });
        StringExtensions.isEmpty = function (object) {
            if (!Commerce.ObjectExtensions.isNullOrUndefined(object)) {
                if (!Commerce.ObjectExtensions.isString(object)) {
                    throw new Error("StringExtensions.isEmpty() has received input parameter not of type string.");
                }
                return object === "";
            }
            return false;
        };
        StringExtensions.isEmptyOrWhitespace = function (object) {
            if (!Commerce.ObjectExtensions.isNullOrUndefined(object)) {
                if (!Commerce.ObjectExtensions.isString(object)) {
                    throw new Error("StringExtensions.isEmptyOrWhitespace() has received input parameter not of type string.");
                }
                return object === "" || object.trim() === "";
            }
            return false;
        };
        StringExtensions.isNullOrWhitespace = function (object) {
            if (!Commerce.ObjectExtensions.isNullOrUndefined(object)) {
                if (!Commerce.ObjectExtensions.isString(object)) {
                    throw new Error("StringExtensions.isNullOrWhitespace() has received input parameter not of type string.");
                }
                return object === "" || object.trim() === "";
            }
            return true;
        };
        StringExtensions.padLeft = function (str, padString, length) {
            if (!Commerce.ObjectExtensions.isNullOrUndefined(str)) {
                if (!Commerce.ObjectExtensions.isString(str)) {
                    throw new Error("StringExtensions.padLeft() has received input parameter not of type string.");
                }
                if (!Commerce.ObjectExtensions.isNullOrUndefined(padString)) {
                    while (str.length < length) {
                        str = padString + str;
                    }
                }
            }
            return str;
        };
        StringExtensions.padRight = function (str, padString, length) {
            if (!Commerce.ObjectExtensions.isNullOrUndefined(str)) {
                if (!Commerce.ObjectExtensions.isString(str)) {
                    throw new Error("StringExtensions.padRight() has received input parameter not of type string.");
                }
                if (!Commerce.ObjectExtensions.isNullOrUndefined(padString)) {
                    while (str.length < length) {
                        str += padString;
                    }
                }
            }
            return str;
        };
        StringExtensions.format = function (object) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            if (!Commerce.ObjectExtensions.isNullOrUndefined(object) && !Commerce.ObjectExtensions.isString(object)) {
                throw new Error("StringExtensions.format() has received input parameter not of type string.");
            }
            if (StringExtensions.isNullOrWhitespace(object)) {
                return object;
            }
            if (params == null) {
                throw new Error("StringExtensions.format() Invalid parameter (params) cannot be null.");
            }
            for (var i = 0; i < params.length; i++) {
                if (params[i] == null) {
                    throw new Error("StringExtensions.format() Invalid parameter (at index " + i + ") cannot be null or undefined.");
                }
                var param = params[i].toString().replace(/\$/gi, "$$$$");
                var regexp = new RegExp("\\{" + i + "\\}", "gi");
                object = object.replace(regexp, param);
            }
            return object;
        };
        StringExtensions.compare = function (object, comparisonObject, ignoreCase) {
            if (Commerce.ObjectExtensions.isNullOrUndefined(object) && Commerce.ObjectExtensions.isNullOrUndefined(comparisonObject)) {
                return 0;
            }
            else if (Commerce.ObjectExtensions.isNullOrUndefined(object)) {
                return -1;
            }
            else if (Commerce.ObjectExtensions.isNullOrUndefined(comparisonObject)) {
                return 1;
            }
            var val1 = ignoreCase ? object.toLowerCase() : object;
            var val2 = ignoreCase ? comparisonObject.toLowerCase() : comparisonObject;
            return val1 < val2 ? -1 : val1 > val2 ? 1 : 0;
        };
        StringExtensions.replaceAll = function (txt, txtToReplace, valueToReplaceWith) {
            return txt.replace(new RegExp(txtToReplace, "g"), valueToReplaceWith);
        };
        StringExtensions.cleanUri = function (uri) {
            if (!Commerce.ObjectExtensions.isNullOrUndefined(uri)) {
                uri = uri.trim();
            }
            if (StringExtensions.isNullOrWhitespace(uri)) {
                return "";
            }
            var cutoffIndex = uri.length - 1;
            while (cutoffIndex >= 0
                && (uri[cutoffIndex] === "/"
                    || uri[cutoffIndex] === "\\")) {
                --cutoffIndex;
            }
            return uri.substr(0, cutoffIndex + 1);
        };
        StringExtensions.beginsWith = function (str, prefix, caseSensitive) {
            if (caseSensitive === void 0) { caseSensitive = false; }
            if (Commerce.ObjectExtensions.isNullOrUndefined(str) || Commerce.ObjectExtensions.isNullOrUndefined(prefix)) {
                return false;
            }
            if (prefix.length > str.length) {
                return false;
            }
            var originalString = (caseSensitive) ? str : str.toLowerCase();
            var subString = (caseSensitive) ? prefix : prefix.toLowerCase();
            return originalString.indexOf(subString) === 0;
        };
        StringExtensions.endsWith = function (str, suffix, caseSensitive) {
            if (caseSensitive === void 0) { caseSensitive = false; }
            if (Commerce.ObjectExtensions.isNullOrUndefined(str) || Commerce.ObjectExtensions.isNullOrUndefined(suffix)) {
                return false;
            }
            if (suffix.length > str.length) {
                return false;
            }
            var originalString = (caseSensitive) ? str : str.toLowerCase();
            var subString = (caseSensitive) ? suffix : suffix.toLowerCase();
            return originalString.indexOf(subString, originalString.length - subString.length) !== -1;
        };
        StringExtensions.formattedJoin = function (stringArray, formatString) {
            if (Commerce.ObjectExtensions.isNullOrUndefined(formatString)) {
                throw new Error("StringExtensions.formattedJoin() Invalid parameter (formatString) cannot be null.");
            }
            if (Commerce.ObjectExtensions.isNullOrUndefined(stringArray)) {
                return StringExtensions.EMPTY;
            }
            var formattedResult = StringExtensions.EMPTY;
            for (var i = 0; i < stringArray.length; i++) {
                if (!StringExtensions.isNullOrWhitespace(stringArray[i])) {
                    if (StringExtensions.isEmpty(formattedResult)) {
                        formattedResult = stringArray[i];
                    }
                    else {
                        formattedResult = StringExtensions.format(formatString, formattedResult, stringArray[i]);
                    }
                }
            }
            return formattedResult;
        };
        return StringExtensions;
    }());
    Commerce.StringExtensions = StringExtensions;
})(Commerce || (Commerce = {}));
//# sourceMappingURL=D:/a/1/s/src/Components/Apps/Platform/Pos/Utilities.Public/Commerce.Utilities.Public.js.map
// SIG // Begin signature block
// SIG // MIIkeAYJKoZIhvcNAQcCoIIkaTCCJGUCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // PO1CS0tcTkluUUwckbHtwEMy2t9bslSwVsVlRC9c32+g
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
// SIG // ARUwLwYJKoZIhvcNAQkEMSIEIMo1uY1wqlaC5NKz7Acp
// SIG // 0zNcy241WcnrmGQ0BsUP7nYHMGQGCisGAQQBgjcCAQwx
// SIG // VjBUoDaANABnAGwAbwBiAGEAbABpAHoAZQAuAGMAdQBs
// SIG // AHQAdQByAGUALgBsAHYALQBMAFYALgBqAHOhGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBAFXjGS6AyuepHRQZwv3iJz0ROHhHvzB9QFWv
// SIG // J/D0lKCoY9433Q+UK8saeCsc1stkYl2/K/Q1whZwaGjl
// SIG // FhSvUphh7Af3G5dp9fYA5CrUCTmmEGBaUfOfSIGg0uK9
// SIG // f1VcDhZlUhqMGntmtKptwqP2+DWTGpf39ZjP0OX0unuO
// SIG // NDi++iblBq5kZU/R9B2K25HNNLfSzCgh8ZyOFtin/5s6
// SIG // wYcJJ4bug9VSAx0eFhfmuCD9YyXAyLlLecSwlKQpeB3o
// SIG // wDoOKsRmUYqAy8kyNeqjFQOoEXWnBiLjfOCRgM1VhaG+
// SIG // vqlmK2/ixpVSrjmbo9/tXfvDX13sOqYZNNtb8noATheh
// SIG // ghO3MIITswYKKwYBBAGCNwMDATGCE6MwghOfBgkqhkiG
// SIG // 9w0BBwKgghOQMIITjAIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBWAYLKoZIhvcNAQkQAQSgggFHBIIBQzCCAT8CAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQgUYQv
// SIG // UTaxGRdVLY2DN9tEl6UK5HAFZj+cBTbE6+6S1/YCBlx2
// SIG // 1COPsRgTMjAxOTAzMTIwOTU1NDguNTE1WjAHAgEBgAIB
// SIG // 9KCB1KSB0TCBzjELMAkGA1UEBhMCVVMxEzARBgNVBAgT
// SIG // Cldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAc
// SIG // BgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEpMCcG
// SIG // A1UECxMgTWljcm9zb2Z0IE9wZXJhdGlvbnMgUHVlcnRv
// SIG // IFJpY28xJjAkBgNVBAsTHVRoYWxlcyBUU1MgRVNOOjdE
// SIG // MkUtMzc4Mi1CMEY3MSUwIwYDVQQDExxNaWNyb3NvZnQg
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
// SIG // oAMCAQICEzMAAADPTBCl2yy3BVIAAAAAAM8wDQYJKoZI
// SIG // hvcNAQELBQAwfDELMAkGA1UEBhMCVVMxEzARBgNVBAgT
// SIG // Cldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAc
// SIG // BgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQG
// SIG // A1UEAxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIw
// SIG // MTAwHhcNMTgwODIzMjAyNjI3WhcNMTkxMTIzMjAyNjI3
// SIG // WjCBzjELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hp
// SIG // bmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoT
// SIG // FU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEpMCcGA1UECxMg
// SIG // TWljcm9zb2Z0IE9wZXJhdGlvbnMgUHVlcnRvIFJpY28x
// SIG // JjAkBgNVBAsTHVRoYWxlcyBUU1MgRVNOOjdEMkUtMzc4
// SIG // Mi1CMEY3MSUwIwYDVQQDExxNaWNyb3NvZnQgVGltZS1T
// SIG // dGFtcCBTZXJ2aWNlMIIBIjANBgkqhkiG9w0BAQEFAAOC
// SIG // AQ8AMIIBCgKCAQEAsx8ZWqwk9hFhmdV0An6Q3U8IMj1T
// SIG // Zh5POuzqNhOwAmX80bNjzhbLVtnTlkiVh05GUJAZS+ni
// SIG // ilaMuQNsxGbv0TehQxRtEOw8CuPG/hfImNuDCzJwr5Ma
// SIG // 0MZZ58d8Wzf6gbMuae0Cwp/iURroivmj0lVjOFS0+KHk
// SIG // vPMykOmoO9/u2t3TVdJ4DZo4E1Rk2Pl1wIrfyo2Lz1vH
// SIG // Zb9OFzyRZv3MvCgu1vCRieUjujWqzuaFCuNlCsceudGz
// SIG // LeHCtvRBqsWoVEj8otosZHqA+U0bnDYl3O2MuLbmXoix
// SIG // qztoYZotEf1HYADJnL2R0XGCkhb3WGENQTn0kgXA4x3L
// SIG // j2AcMQIDAQABo4IBGzCCARcwHQYDVR0OBBYEFOFibOMi
// SIG // tjpAsmYb4tD7E962x8vwMB8GA1UdIwQYMBaAFNVjOlyK
// SIG // MZDzQ3t8RhvFM2hahW1VMFYGA1UdHwRPME0wS6BJoEeG
// SIG // RWh0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2kvY3Js
// SIG // L3Byb2R1Y3RzL01pY1RpbVN0YVBDQV8yMDEwLTA3LTAx
// SIG // LmNybDBaBggrBgEFBQcBAQROMEwwSgYIKwYBBQUHMAKG
// SIG // Pmh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2kvY2Vy
// SIG // dHMvTWljVGltU3RhUENBXzIwMTAtMDctMDEuY3J0MAwG
// SIG // A1UdEwEB/wQCMAAwEwYDVR0lBAwwCgYIKwYBBQUHAwgw
// SIG // DQYJKoZIhvcNAQELBQADggEBABESPeCskOJ/JDbE8jBb
// SIG // UZScpH7ouj3W0i6l/zCr9f9DwzbcqbK4FLLcGLdHJpCf
// SIG // lrhHME5KvVqyWCf46KgIrWoX9iEboMNlo/0XubEc4qlk
// SIG // hcyDWshXnAcN3fqGT4FJesRq3pA/GzozTOynwiVtJI3z
// SIG // OpMyFxyV3gfGnkix9JRQJmbF+XAiGoS6iP5RkxU7jHuO
// SIG // c/r0FeSY4CMRCru584BBePPeoRO20CvMKsGPXrf3e33i
// SIG // JjNLci1q5ShirPt7mDp8+sD691hj7Hf4hED0eB6VjeGq
// SIG // 32irqssMkeAG6s97UjZtZalxZ+6/yQBWL57myuyi0Dr8
// SIG // 9UJkOA/Q/AkZ2xShggOtMIIClQIBATCB/qGB1KSB0TCB
// SIG // zjELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEpMCcGA1UECxMgTWlj
// SIG // cm9zb2Z0IE9wZXJhdGlvbnMgUHVlcnRvIFJpY28xJjAk
// SIG // BgNVBAsTHVRoYWxlcyBUU1MgRVNOOjdEMkUtMzc4Mi1C
// SIG // MEY3MSUwIwYDVQQDExxNaWNyb3NvZnQgVGltZS1TdGFt
// SIG // cCBTZXJ2aWNloiUKAQEwCQYFKw4DAhoFAAMVAIk+0OTQ
// SIG // MsOFXV0ilrLeLdGvuJfdoIHeMIHbpIHYMIHVMQswCQYD
// SIG // VQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4G
// SIG // A1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0
// SIG // IENvcnBvcmF0aW9uMSkwJwYDVQQLEyBNaWNyb3NvZnQg
// SIG // T3BlcmF0aW9ucyBQdWVydG8gUmljbzEnMCUGA1UECxMe
// SIG // bkNpcGhlciBOVFMgRVNOOjRERTktMEM1RS0zRTA5MSsw
// SIG // KQYDVQQDEyJNaWNyb3NvZnQgVGltZSBTb3VyY2UgTWFz
// SIG // dGVyIENsb2NrMA0GCSqGSIb3DQEBBQUAAgUA4DHvaTAi
// SIG // GA8yMDE5MDMxMjA4NDIxN1oYDzIwMTkwMzEzMDg0MjE3
// SIG // WjB0MDoGCisGAQQBhFkKBAExLDAqMAoCBQDgMe9pAgEA
// SIG // MAcCAQACAgX4MAcCAQACAhsGMAoCBQDgM0DpAgEAMDYG
// SIG // CisGAQQBhFkKBAIxKDAmMAwGCisGAQQBhFkKAwGgCjAI
// SIG // AgEAAgMW42ChCjAIAgEAAgMHoSAwDQYJKoZIhvcNAQEF
// SIG // BQADggEBAJFyfRSet9EojWu5/hQVeo5m9eluePIGrAkq
// SIG // YBCPYfWwiszwaCZM1BJAw+BBYpJVCG+wV/keopN68OD3
// SIG // 9LwWP0CZycK9iaQp7XkDICxG0UHLTfJICaTlNyJqlquO
// SIG // LOKfjIE06eqBM42YBY5JRU23kVf6nhy+DLqWYQmcCg4g
// SIG // X+BG342YaAeZXvzjmjFPKPSLEu++a5eMtOfwxYeUZ3RW
// SIG // +5TvUOTkViRnHDkKJRtFleyoOucJ59mdh2wrfLfsqaO5
// SIG // CJirmybwkbZmcgf+o3T13/RtBtvOz2ghp4NEnPawsosQ
// SIG // H75zpWkb8kh8C0q0vwxHwJ4PUXmBljTXqmcoNJP3HtIx
// SIG // ggL1MIIC8QIBATCBkzB8MQswCQYDVQQGEwJVUzETMBEG
// SIG // A1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9u
// SIG // ZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MSYwJAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFtcCBQ
// SIG // Q0EgMjAxMAITMwAAAM9MEKXbLLcFUgAAAAAAzzANBglg
// SIG // hkgBZQMEAgEFAKCCATIwGgYJKoZIhvcNAQkDMQ0GCyqG
// SIG // SIb3DQEJEAEEMC8GCSqGSIb3DQEJBDEiBCCtBAVXoQxy
// SIG // NVrXqelX34+KRtlLzF24OefwQcjRw48CkDCB4gYLKoZI
// SIG // hvcNAQkQAgwxgdIwgc8wgcwwgbEEFIk+0OTQMsOFXV0i
// SIG // lrLeLdGvuJfdMIGYMIGApH4wfDELMAkGA1UEBhMCVVMx
// SIG // EzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3Rh
// SIG // bXAgUENBIDIwMTACEzMAAADPTBCl2yy3BVIAAAAAAM8w
// SIG // FgQUOJZNTGMd4oEqeb6/k96t35BdHXEwDQYJKoZIhvcN
// SIG // AQELBQAEggEAGjuRGcLR9wGlFWEaSxECsE1kytk6hC5I
// SIG // KIcmR4wKEvwJkSW4ZwTXtiaPdiHyQB5mvmISuPDRgZog
// SIG // mswP75RYs3RSmiqCvxx6C5MQRrw4/331PRTCxnz8zQ1u
// SIG // bATqIpkpTEAxhfUfoGO1Ua5dH5HAfhwWJAbY3sKOCgek
// SIG // LJMFTZYazrzbnzwVAw1AtNyoeUJzDV/vp+pqPbkyyLSu
// SIG // hL1vDdCx6zW36SBvfaBeYys49MwKKq9k7wMBHIJhTIqJ
// SIG // iax37jU7W2B91tarL9wmfgQXI2vKDqV67vQ+HvxqYfIH
// SIG // OiOszC8K3OJnYq8pCDTwB2frclRllPX03XaAz6dHS0UWSQ==
// SIG // End signature block
