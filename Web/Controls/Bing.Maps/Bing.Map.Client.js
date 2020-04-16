(function () {
    var loader = {
        loadScript: function (path, done) {
            var url = path;
            var scriptTag = document.createElement("script");
            scriptTag.type = "text/javascript";
            scriptTag.onload = done;
            scriptTag.src = url;
            document.head.appendChild(scriptTag);
        },

        // Load stylesheet.
        loadStyleSheet: function (path, id) {
            var url = path;
            var fileref = document.createElement("link");
            fileref.setAttribute("rel", "stylesheet");
            fileref.setAttribute("type", "text/css");
            fileref.setAttribute("href", url);

            if (id) {
                fileref.setAttribute("id", id);
            }

            document.head.appendChild(fileref);
        }
    };

    var MapWrapper = function () {

        var ErrorEvent = function (errorMessage) {
            this.message = errorMessage;
        };

        var MapMessages = {
            ERROR: "error",
            INFOBOX_HYPERLINK_CLICKED: "infoboxHyperlinkClicked",
            INITIALIZATION_ERROR: "initialization_error",
            LOADED: "loaded",
            READY: "ready",
            SEARCH_SUCCESS: "searchSuccess",
            UPDATE_LOCATIONS: "updateLocations"
        };

        var DistanceUnit = { Miles: 0, Kilometers: 1 };

        var protocol = document.location.protocol.indexOf("ms-appx") !== -1
            ? "ms-appx:"    // in case ms-appx is part of the protocol, we are inside an win8-app
            : document.location.protocol;

        var domain = protocol + "//" + document.location.host;

        var map = null;
        var mapsAPIKey = null;
        var mapScriptLoadAttempts = 5; // max load attempt count, delay 500 ms between
        var previousZoomValue = null;
        var previousCenter = null;
        var distanceUnitValue = DistanceUnit.Miles;
        var currentCssTheme = "";
        var accentColorLoaded = false;
        var currentTextDirection = null;
        var currentInfobox = null;
        var currentInfoboxClickId = null;
        var currentInfoboxClickEvent = null;
        var currentClickEvent = null;

        var requiredModules = [
            "Microsoft.Maps.Search"
        ];

        var posLightThemeElementId = "";
        var posDarkThemeElementId = "";
        var winUILightThemeElementId = "";
        var winUIDarkThemeElementId = "";

        return {
            processMessage: function (msg) {
                if (!msg || !msg.data || msg.origin !== domain) {
                    return;
                }
                var call = JSON.parse(msg.data);

                if (!call.functionName) {
                    throw "Message does not contain a valid function name.";
                }
                var target = this[call.functionName];

                if (typeof target != "function") {
                    throw "The function name does not resolve to an actual function";
                }

                target.apply(this, call.args);
            },

            notifyParent: function (event, args) {
                if (!args) args = {};

                args["event"] = event;
                window.parent.postMessage(JSON.stringify(args), domain);
            },

            addListener: function () {
                window.addEventListener("message", this.processMessage.bind(this), false);
            },

            loadModules: function () {
                for (var moduleIndex in requiredModules) {
                    if (requiredModules.hasOwnProperty(moduleIndex)) {

                        var module = requiredModules[moduleIndex];
                        Microsoft.Maps.loadModule(module, { callback: this.onModuleLoaded.bind(this, module) });
                    }
                }
            },

            onModuleLoaded: function (module) {
                var moduleIndex = requiredModules.indexOf(module);
                requiredModules.splice(moduleIndex, 1);
                if (requiredModules.length === 0) {
                    this.initMap();
                }
            },

            init: function (credentials) {

                // make sure that all is loaded
                if (typeof Microsoft === "undefined" || !Microsoft.Maps.hasOwnProperty("loadModule")) {
                    if (mapScriptLoadAttempts-- > 0) {
                        setTimeout(this.init.bind(this, credentials), 500);
                    } else {
                        this.notifyParent.call(this, MapMessages.INITIALIZATION_ERROR, new ErrorEvent("Map cannot be initialized"));
                    }

                    return;
                }

                if (!credentials) {
                    this.notifyParent.call(this, MapMessages.ERROR, new ErrorEvent("Bing maps api key is missing"));
                    return;
                }

                mapsAPIKey = credentials;

                this.loadModules.call(this);
            },

            initMap: function () {

                map = new Microsoft.Maps.Map(document.getElementById("mapDiv"), {
                    credentials: mapsAPIKey,
                    mapTypeId: Microsoft.Maps.MapTypeId.road,
                    showBreadcrumb: false
                });

                previousZoomValue = map.getZoom();
                previousCenter = map.getCenter();

                Microsoft.Maps.Events.addThrottledHandler(map, "viewchangestart", this.viewChangeStart.bind(this), 1000);
                Microsoft.Maps.Events.addThrottledHandler(map, "viewchangeend", this.viewChangeEnd.bind(this), 1000);

                this.notifyParent.call(this, MapMessages.LOADED);
                mapLoaded = true;
            },

            pinLocation: function (latitude, longitude, text) {

                if (!this.checkMap()) {
                    return;
                }

                var location = new Microsoft.Maps.Location(latitude, longitude);
                var pushpin = new Microsoft.Maps.Pushpin(location, { text: text });

                map.entities.push(pushpin);
            },

            removeAllPushpins: function () {

                if (!this.checkMap()) {
                    return;
                }

                for (var i = map.entities.getLength() - 1; i >= 0; i--) {
                    var pushpin = map.entities.get(i);
                    if (pushpin instanceof Microsoft.Maps.Pushpin) {
                        map.entities.removeAt(i);
                    };
                }
            },

            // Remove infobox(es) from Bing maps.
            removeInfobox: function () {
                var element = document.getElementById(currentInfoboxClickId);
                if (element && currentInfoboxClickEvent) {
                    element.removeEventListener("click", currentInfoboxClickEvent);
                }
                currentClickEvent = null;

                if (currentInfobox) {
                    currentInfobox.setMap(null);
                    currentInfobox = null;
                }
            },

            // Show infobox on Bing maps.
            setInfobox: function (latitude, longitude, closeButtonId, title, text) {

                if (this.checkMap()) {
                    this.removeInfobox();

                    // A buffer limit to use to specify the infobox must be away from the edges of the map.
                    var buffer = 9;

                    var infoboxOptions = {
                        width: 350, height: 150, showCloseButton: false, zIndex: 0,
                        offset: new Microsoft.Maps.Point(0, buffer), showPointer: true,
                        title: title, description: text
                    };

                    currentInfobox = new Microsoft.Maps.Infobox(map.getCenter(), infoboxOptions);
                    currentInfobox.setMap(map);

                    var location = new Microsoft.Maps.Location(latitude, longitude);
                    currentInfobox.setLocation(location);

                    // Move map if infobox is partially hidden.
                    var infoboxOffset = currentInfobox.getOffset();
                    var infoboxAnchor = currentInfobox.getAnchor();
                    var infoboxLocation = map.tryLocationToPixel(location, Microsoft.Maps.PixelReference.control);

                    var dx = infoboxLocation.x + infoboxOffset.x - infoboxAnchor.x;
                    var dy = infoboxLocation.y - buffer - infoboxAnchor.y;

                    if (dy < buffer) { // Infobox overlaps with top of map.
                        // Offset in opposite direction.
                        dy *= -1;
 
                        // Add buffer from the top edge of the map.
                        dy += buffer;
                    } else {
                        dy = map.getHeight() - infoboxLocation.y + infoboxAnchor.y - currentInfobox.getHeight();

                        // If dy is greater than buffer then it does not overlap.
                        if (dy > buffer) {
                            dy = 0;
                        } else {
                            // Add a buffer from the bottom edge of the map.
                            dy -= buffer;
                        }
                    }
 
                    // Check to see if overlapping with left side of map.
                    if (dx < buffer) {    

                        // Offset in opposite direction.
                        dx *= -1;
 
                        // Add a buffer from the left edge of the map.
                        dx += buffer;
                    } else { // Check to see if overlapping with right side of map.
                        
                        dx = map.getWidth() - infoboxLocation.x + infoboxAnchor.x - currentInfobox.getWidth();
 
                        // If dx is greater than buffer then it does not overlap.
                        if (dx > buffer) {
                            dx = 0;
                        } else {
                            // Add a buffer from the right edge of the map.
                            dx -= buffer;
                        }
                    }
 
                    // Adjust the map so infobox is in view.
                    if (dx !== 0 || dy !== 0) {
                        var centerPixel = map.tryLocationToPixel(map.getCenter());
                        centerPixel.x -= dx;
                        centerPixel.y -= dy;
                        map.setView({ center: map.tryPixelToLocation(centerPixel) });
                    }

                    if (closeButtonId) {
                        var infoBox = document.getElementById(closeButtonId);
                        if (infoBox) {
                            currentInfoboxClickId = closeButtonId;

                            var self = this;
                            currentClickEvent = function (mouseEvent) {
                                self.removeInfobox();
                            };
                            currentInfoboxClickEvent = currentClickEvent;
                            infoBox.addEventListener("click", currentClickEvent);
                        }
                    }
                }
            },

            setMapView: function (latitude, longitude, zoom) {

                if (!this.checkMap()) {
                    return;
                }

                var view = {};
                if (latitude != null && longitude != null) {
                    view['center'] = new Microsoft.Maps.Location(latitude, longitude);
                }
                if (zoom) {
                    view['zoom'] = zoom;
                }

                map.setView(view);
            },

            searchByAddress: function (address) {
                if (!this.checkMap()) {
                    this.notifyParent.call(this, MapMessages.INITIALIZATION_ERROR, new ErrorEvent("Map cannot be initialized"));
                    return;
                }

                var searchManager = new Microsoft.Maps.Search.SearchManager(map);

                var request = {
                    where: address,
                    count: 1,
                    callback: onSearchSuccess.bind(this),
                    errorCallback: onSearchFailed.bind(this)
                };

                searchManager.geocode(request);

                function onSearchSuccess(result) {
                    if (result) {
                        map.entities.clear();
                        var topResult = result.results && result.results[0];
                        var resultData = {};
                        if (topResult) {
                            map.setView({ center: topResult.location, zoom: 10 });
                            resultData.searchResult = topResult;
                            resultData.radius = this.getExcircleRadius(map.getBounds());
                        }

                        this.notifyParent.call(this, MapMessages.SEARCH_SUCCESS, resultData);
                    }
                }

                function onSearchFailed(result) {
                    this.notifyParent.call(this, MapMessages.ERROR, result);
                }
            },

            checkMap: function () {
                if (map === null) {
                    return false;
                }
                return true;
            },

            viewChangeStart: function () {
                previousZoomValue = map.getZoom();
                previousCenter = map.getCenter();
            },

            viewChangeEnd: function () {
                var newZoomValue = map.getZoom();
                var newBounds = map.getBounds();

                // We are starting search only when panning or when zooming out
                if ((this.isNotZeroLocation(newBounds.center) && this.isNotZeroLocation(previousCenter) && !Microsoft.Maps.Location.areEqual(newBounds.center, previousCenter))
                    || newZoomValue < previousZoomValue) {
                    this.notifyParent.call(this, MapMessages.UPDATE_LOCATIONS, { longitude: newBounds.center.longitude, latitude: newBounds.center.latitude, radius: this.getExcircleRadius(newBounds) });

                    previousZoomValue = newZoomValue;
                    previousCenter = newBounds.center;
                }
            },

            isNotZeroLocation: function (location) {

                // The smallest latitude and longitude value that we are taking into account as non-zero
                // other values less than EPSILON are considered as equal to zero
                var EPSILON = 0.0001;

                return Math.abs(location.latitude) > EPSILON && Math.abs(location.longitude) > EPSILON;
            },

            // This method is used for maximum distance calculation when searching stores.
            // Returns the radius of the excircle of the current map view based on rib with max length.
            getExcircleRadius: function (locationRect) {

                var conversionValue = this.getUnitConversion();

                var width = Math.abs(conversionValue * locationRect.width * Math.cos(locationRect.center.latitude * (Math.PI / 180)));
                var height = conversionValue * locationRect.height;

                var maxLength = Math.max(width, height);

                return maxLength / Math.sqrt(2);
            },

            getUnitConversion: function () {
                var MILES_PER_1_LATITUDE_DEGREE = 69.055; // average number of miles per latitude degree. Actual value changes from 68.703 to 69.407 miles
                var KILOMETERS_PER_1_LATITUDE_DEGREE = 111.133; // average number of kilometers per latitude degree. Actual value changes from 110.567 to 111.699 kilometers

                return distanceUnitValue === DistanceUnit.Miles ? MILES_PER_1_LATITUDE_DEGREE : KILOMETERS_PER_1_LATITUDE_DEGREE;
            },

            //Initialize CSS element theme identifier.
            initializeThemeElementIds: function (posLightThemeId, posDarkThemeId, winUILightThemeId, winUIDarkThemeId) {
                posLightThemeElementId = posLightThemeId,
                posDarkThemeElementId = posDarkThemeId,
                winUILightThemeElementId = winUILightThemeId,
                winUIDarkThemeElementId = winUIDarkThemeId
            },

            // Remove stylesheet by identifier.
            removeStyleSheetById: function (id) {
                $("head link[id=" + id + "]").remove();
            },

            // Apply CSS theme.
            applyCSSTheme: function (theme) {
                if (currentCssTheme === theme) {
                    return;
                }

                var infoboxSelector = "body";
                if (theme === "dark") {
                    loader.loadStyleSheet("../../Libraries/winjs/css/ui-dark.css", winUIDarkThemeElementId);
                    loader.loadStyleSheet("../../Stylesheets/Themes/PosDarkTheme.css", posDarkThemeElementId);

                    //apply selected theme on infobox
                    $(infoboxSelector).removeClass(currentCssTheme);
                    $(infoboxSelector).addClass(theme);

                    currentCssTheme = theme;

                    // after loading the correct CSS files, remove the unnecessary ones, if applicable
                    if (document.getElementById(posLightThemeElementId)) {
                        this.removeStyleSheetById(posLightThemeElementId);
                    }
                    if (document.getElementById(winUILightThemeElementId)) {
                        this.removeStyleSheetById(winUILightThemeElementId);
                    }
                } else if (theme === "light") {
                    loader.loadStyleSheet("../../Libraries/winjs/css/ui-light.css", winUILightThemeElementId);
                    loader.loadStyleSheet("../../Stylesheets/Themes/PosLightTheme.css", posLightThemeElementId);

                    //apply selected theme on infobox
                    $(infoboxSelector).removeClass(currentCssTheme);
                    $(infoboxSelector).addClass(theme);
                    currentCssTheme = theme;

                    // after loading the correct CSS files, remove the unnecessary ones, if applicable
                    if (document.getElementById(posDarkThemeElementId)) {
                        this.removeStyleSheetById(posDarkThemeElementId);
                    }
                    if (document.getElementById(winUIDarkThemeElementId)) {
                        this.removeStyleSheetById(winUIDarkThemeElementId);
                    }
                }
                loader.loadStyleSheet("../../Stylesheets/Main.min.css");
            },

            // Apply accent color.
            applyAccentColor: function (accentColor) {
                if (accentColorLoaded) {
                    return;
                }

                var styleSheet = null;
                for (var i = 0; i < document.styleSheets.length; i++) {
                    if (document.styleSheets[i].href && document.styleSheets[i].href.match("Main.min.css$")) {
                        styleSheet = document.styleSheets[i];
                        break;
                    }
                }

                if (!styleSheet) {
                    return;
                }

                if (styleSheet.addRule) {
                    styleSheet.addRule("a, a:active, a:hover", "color: " + accentColor + " !important");
                } else if (styleSheet.insertRule) {
                    styleSheet.insertRule("a, a:active, a:hover { color: " + accentColor + " !important }");
                }

                accentColorLoaded = true;
            },

            // Apply text direction.
            applyTextDirection: function (textDirection) {
                if (currentTextDirection === textDirection) {
                    return;
                }

                $("body").attr("dir", textDirection);
                currentTextDirection = textDirection;
            },

            start: function () {
                MapWrapper.addListener();
                this.notifyParent.call(this, MapMessages.READY);
            }
        };
    }();

    // load css style sheets
    loader.loadScript('../../Libraries/jQuery.min.js', function () {
        MapWrapper.start();
    });
})();
// SIG // Begin signature block
// SIG // MIIkkAYJKoZIhvcNAQcCoIIkgTCCJH0CAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // DKgjkhTd2736EPrO93tkVA9KTCjTKSnuMq1OsqDQ6zyg
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
// SIG // SEXAQsmbdlsKgEhr/Xmfwb1tbWrJUnMTDXpQzTGCFmcw
// SIG // ghZjAgEBMIGVMH4xCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xKDAm
// SIG // BgNVBAMTH01pY3Jvc29mdCBDb2RlIFNpZ25pbmcgUENB
// SIG // IDIwMTECEzMAAAEDXiUcmR+jHrgAAAAAAQMwDQYJYIZI
// SIG // AWUDBAIBBQCggdAwGQYJKoZIhvcNAQkDMQwGCisGAQQB
// SIG // gjcCAQQwHAYKKwYBBAGCNwIBCzEOMAwGCisGAQQBgjcC
// SIG // ARUwLwYJKoZIhvcNAQkEMSIEICFxB1wd/3kUu43hjH+s
// SIG // WQ5At9ZCywQec3H52CR08IDFMGQGCisGAQQBgjcCAQwx
// SIG // VjBUoDaANABnAGwAbwBiAGEAbABpAHoAZQAuAGMAdQBs
// SIG // AHQAdQByAGUALgBsAHYALQBMAFYALgBqAHOhGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBAFzjaQPBpu0uIKhefUf41OCl8Iq3IXqHuOu3
// SIG // CLXJ0Lj0o3sMNAujTTbtFt6XMluNrJ9GjXCuGT57gt1u
// SIG // ACbRF/BmICBfRRTeF0Sh8AT8oCXrNDJqOecLVqh36602
// SIG // RP0Wj0A49xIx+Ss+nKDkFdY5TcAKgHmYQ0iWqpoCf+X7
// SIG // 2v+oy0o65/MuPRMkBuFbKcmR2uW3+1xZKVK8Te5kCbvu
// SIG // UHeC+if1qKeWQaBmArW76F6B2xwobLvxqMtlznuNUEKc
// SIG // geJnAE0fJVuufwod80WP1kJL8NS00kazfw5U+oYNec4U
// SIG // zP0TCGK2lamGMw0lEIQkNLOrHlMmdzZ+JzHfKcn0Ga+h
// SIG // ghPPMIITywYKKwYBBAGCNwMDATGCE7swghO3BgkqhkiG
// SIG // 9w0BBwKgghOoMIITpAIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBWAYLKoZIhvcNAQkQAQSgggFHBIIBQzCCAT8CAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQgzW8C
// SIG // cy1p0OGJgGdRvni2UsFGtxr4svhD4z8eN6y07oUCBlx2
// SIG // ohN8VxgTMjAxOTAzMTIwOTU1NDcuNjkyWjAHAgEBgAIB
// SIG // 9KCB1KSB0TCBzjELMAkGA1UEBhMCVVMxEzARBgNVBAgT
// SIG // Cldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAc
// SIG // BgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEpMCcG
// SIG // A1UECxMgTWljcm9zb2Z0IE9wZXJhdGlvbnMgUHVlcnRv
// SIG // IFJpY28xJjAkBgNVBAsTHVRoYWxlcyBUU1MgRVNOOjk4
// SIG // RkQtQzYxRS1FNjQxMSUwIwYDVQQDExxNaWNyb3NvZnQg
// SIG // VGltZS1TdGFtcCBTZXJ2aWNloIIPHzCCBPUwggPdoAMC
// SIG // AQICEzMAAADLX3jLIw6Ul8MAAAAAAMswDQYJKoZIhvcN
// SIG // AQELBQAwfDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UE
// SIG // AxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTAw
// SIG // HhcNMTgwODIzMjAyNjI0WhcNMTkxMTIzMjAyNjI0WjCB
// SIG // zjELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEpMCcGA1UECxMgTWlj
// SIG // cm9zb2Z0IE9wZXJhdGlvbnMgUHVlcnRvIFJpY28xJjAk
// SIG // BgNVBAsTHVRoYWxlcyBUU1MgRVNOOjk4RkQtQzYxRS1F
// SIG // NjQxMSUwIwYDVQQDExxNaWNyb3NvZnQgVGltZS1TdGFt
// SIG // cCBTZXJ2aWNlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A
// SIG // MIIBCgKCAQEAxXjIHe/wHUFwHG00Sj9UAsoaeLMDVYIQ
// SIG // hTbYMKnLLzfw7RWVbsPcpSiZk8hTeezHczFpBelqLQ6J
// SIG // Wz4M+4ep2gq2y5gJozF4MeGh0KA9Z09P003SGeCcLTtH
// SIG // acMHY2G+1EGmvhXfrv3U+qLcKywoN0uMGs5BSGoSfxLR
// SIG // U/nGV0NA98wimpEVB0/pS3h29oj8y9rl7zodtrAnF0Yq
// SIG // tN0enss5p7dgdfbmSFuG41q2qnd0O7cOjrEMTUEhrYa5
// SIG // QZlrigdU3BYhaTdJnjFmVqtPd4CLvXbJbJ5OuMa/npHK
// SIG // N7zIOIG137VQKfru3RPBClNr5rZk8/a/wfJDFB6Bz71O
// SIG // FQIDAQABo4IBGzCCARcwHQYDVR0OBBYEFCjk8ub2ydFN
// SIG // rm7I2yqWvzHD+9l2MB8GA1UdIwQYMBaAFNVjOlyKMZDz
// SIG // Q3t8RhvFM2hahW1VMFYGA1UdHwRPME0wS6BJoEeGRWh0
// SIG // dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2kvY3JsL3By
// SIG // b2R1Y3RzL01pY1RpbVN0YVBDQV8yMDEwLTA3LTAxLmNy
// SIG // bDBaBggrBgEFBQcBAQROMEwwSgYIKwYBBQUHMAKGPmh0
// SIG // dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2kvY2VydHMv
// SIG // TWljVGltU3RhUENBXzIwMTAtMDctMDEuY3J0MAwGA1Ud
// SIG // EwEB/wQCMAAwEwYDVR0lBAwwCgYIKwYBBQUHAwgwDQYJ
// SIG // KoZIhvcNAQELBQADggEBAIv0YYWDBWJsyxSUl8PpJQNs
// SIG // crEv2k3plgyD5o5MTwDIKH2gPody6KdSOSPpp9BTrdO+
// SIG // BVFYTFgkvOtAHKwCHYaBsaQog+11XrJBAyUnFyVelHjy
// SIG // 3WNLVW8FfQqSxHkGr/j/R7nz6Ne9RpTYlxRBXDeUef0j
// SIG // 9i1Al64C+c18sQ3EkoTcDsU6M4DD58Qfj04YrUgFH3KF
// SIG // dL6voeyUW4Ut+MrsNTz34K7XMCD0lMIKuqVZLJ1YCkBi
// SIG // H8AIic40scen05l2KULjbMaMHxGj/TtiowCM+Ertl7Xa
// SIG // VZOGJkgWpzl9lPEKLcvZPylAj3X83G7gKekjMtdTBJdT
// SIG // GQil9I2wrs4wggZxMIIEWaADAgECAgphCYEqAAAAAAAC
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
// SIG // BgNVBAsTHVRoYWxlcyBUU1MgRVNOOjk4RkQtQzYxRS1F
// SIG // NjQxMSUwIwYDVQQDExxNaWNyb3NvZnQgVGltZS1TdGFt
// SIG // cCBTZXJ2aWNloiUKAQEwCQYFKw4DAhoFAAMVALmjk9JA
// SIG // dtG3HxWjBFGXrjgr25ohoIHeMIHbpIHYMIHVMQswCQYD
// SIG // VQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4G
// SIG // A1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0
// SIG // IENvcnBvcmF0aW9uMSkwJwYDVQQLEyBNaWNyb3NvZnQg
// SIG // T3BlcmF0aW9ucyBQdWVydG8gUmljbzEnMCUGA1UECxMe
// SIG // bkNpcGhlciBOVFMgRVNOOjRERTktMEM1RS0zRTA5MSsw
// SIG // KQYDVQQDEyJNaWNyb3NvZnQgVGltZSBTb3VyY2UgTWFz
// SIG // dGVyIENsb2NrMA0GCSqGSIb3DQEBBQUAAgUA4DERujAi
// SIG // GA8yMDE5MDMxMjAwNTYyNloYDzIwMTkwMzEzMDA1NjI2
// SIG // WjB0MDoGCisGAQQBhFkKBAExLDAqMAoCBQDgMRG6AgEA
// SIG // MAcCAQACAgMCMAcCAQACAhcVMAoCBQDgMmM6AgEAMDYG
// SIG // CisGAQQBhFkKBAIxKDAmMAwGCisGAQQBhFkKAwGgCjAI
// SIG // AgEAAgMW42ChCjAIAgEAAgMHoSAwDQYJKoZIhvcNAQEF
// SIG // BQADggEBAKY4UjCTk3/AiP7Kc2O99oyrZW4vI4rZzyQw
// SIG // pRyronM83drsLezOfzkX87S6VGA+QW1Olx/hhkYUnauG
// SIG // GDEm1+WHjgK0X1f3b3gAnA+fCjCkU5K6Et1D6Wq9mWgj
// SIG // 5dURvG16tArqxmnxm2Ux0bNqs9HaoXKQ0AlAOqVHcUr8
// SIG // j3zn7dYyifXbWETk8ms82wmSA+m9W3b96C6VcxzPqnGS
// SIG // SS6rj2RTBVcb6pLVUD9sgrGQ2NOoCWrJmI+XP3yiiiLz
// SIG // +0eQ8QGhlBUZL91IKIw6zyq8mg2TS2LPWVeJhQy3x7ZC
// SIG // NhxneIm2GSrnSCfTgC0Hsdf6wkjxNhwtBMbgx4XkUZYx
// SIG // ggMNMIIDCQIBATCBkzB8MQswCQYDVQQGEwJVUzETMBEG
// SIG // A1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9u
// SIG // ZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MSYwJAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFtcCBQ
// SIG // Q0EgMjAxMAITMwAAAMtfeMsjDpSXwwAAAAAAyzANBglg
// SIG // hkgBZQMEAgEFAKCCAUowGgYJKoZIhvcNAQkDMQ0GCyqG
// SIG // SIb3DQEJEAEEMC8GCSqGSIb3DQEJBDEiBCDHOwnGEaTn
// SIG // jbSpYnGQx2ZHLK47sR3mMA8ZQaEZSyR4YDCB+gYLKoZI
// SIG // hvcNAQkQAi8xgeowgecwgeQwgb0EIDYnIaqpYKde63PQ
// SIG // pL1LfC4X9p9L0y7uFEdeqmDdwR1kMIGYMIGApH4wfDEL
// SIG // MAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24x
// SIG // EDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jv
// SIG // c29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWljcm9z
// SIG // b2Z0IFRpbWUtU3RhbXAgUENBIDIwMTACEzMAAADLX3jL
// SIG // Iw6Ul8MAAAAAAMswIgQgpSD7lAa3kW06sKZ1GopqPgLb
// SIG // g/FVbGq1bA3BqhQVEfYwDQYJKoZIhvcNAQELBQAEggEA
// SIG // pvPK2VQu7eUGohg+dKnEkfhgaxPhyma56etZMea8qUJO
// SIG // fiPOpHPwRsxS47UDhrCFRMEUV6ilQKVDXrHGnS1NaIlY
// SIG // 1h6oxz81vZP2BOiOG63iuIOpr7ELzclUHfjbUe3QKd+c
// SIG // JXQ6ZgYNpQl7o0heaZQTitqfgPzrBs68yod2CLYVFIwQ
// SIG // yGnY/rVK41Syq9QuM10zvIoAz1wFiJgT9h72dej6XjV6
// SIG // 1yliP7t2ZdVxktgF1+cYQ4BApMZkFMQUhP/YuVGHKCfX
// SIG // m5dvgLWh4r4rtwCysiLoBu2kt9KJUXqdeOxGT7e8ATEi
// SIG // oc2nrKxPD/S+Pp+h8waG3sBlzeRJptogFQ==
// SIG // End signature block
