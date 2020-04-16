"use strict";
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        "use strict";
        var UserControl = (function () {
            function UserControl() {
                this._element = null;
                this._children = null;
            }
            Object.defineProperty(UserControl.prototype, "element", {
                get: function () {
                    if (this._element == null) {
                        this._element = document.createElement("div");
                        this._element.innerHTML = Commerce.StringExtensions.EMPTY;
                    }
                    return this._element;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(UserControl.prototype, "children", {
                get: function () {
                    if (this._children == null) {
                        this._children = [];
                    }
                    return this._children;
                },
                enumerable: true,
                configurable: true
            });
            UserControl.prototype.addControl = function (control) {
                if (control) {
                    this.children.push(control);
                    if (this._element != null) {
                        this._element.appendChild(control.element);
                    }
                }
            };
            UserControl.prototype.render = function () {
                if (this._viewPath !== null && Commerce.StringExtensions.isNullOrWhitespace(this.element.innerHTML)) {
                    var asyncResult_1 = new Commerce.VoidAsyncResult();
                    WinJS.UI.Pages.render(this._viewPath, this.element, this)
                        .done(function () { asyncResult_1.resolve(); });
                    return asyncResult_1;
                }
                return Commerce.VoidAsyncResult.createResolved();
            };
            UserControl.prototype.focus = function () {
                this.element.focus();
            };
            UserControl.prototype.dispose = function () {
                if (this._element) {
                    WinJS.Utilities.disposeSubTree(this._element);
                    UserControl.sterilizeNode(this._element);
                }
                Commerce.ObjectExtensions.disposeAllProperties(this);
            };
            UserControl.prototype.onLoaded = function () {
            };
            UserControl.prototype.onCreated = function () {
                var _this = this;
                this.children.forEach(function (control) {
                    _this.element.appendChild(control.element);
                });
            };
            UserControl.sterilizeNode = function (domElement) {
                var $jqueryElement = $(domElement);
                if (!Commerce.ObjectExtensions.isNullOrUndefined($jqueryElement)) {
                    $jqueryElement.children().each(function (unbindElemenetIndex, unbindElement) {
                        UserControl.sterilizeNode(unbindElement);
                    });
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(domElement.winControl)) {
                        Commerce.ObjectExtensions.tryDispose(domElement.winControl);
                    }
                    $jqueryElement.off();
                    $jqueryElement.html("");
                }
                $jqueryElement = null;
            };
            return UserControl;
        }());
        Controls.UserControl = UserControl;
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
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
    var Controls;
    (function (Controls) {
        "use strict";
        var ModalDialog = (function (_super) {
            __extends(ModalDialog, _super);
            function ModalDialog(numPadInputBroker) {
                var _this = _super.call(this) || this;
                _this._visible = ko.observable(false);
                _this._title = ko.observable(Commerce.StringExtensions.EMPTY);
                _this._subTitle = ko.observable(Commerce.StringExtensions.EMPTY);
                _this._message = ko.observable(Commerce.StringExtensions.EMPTY);
                _this._indeterminateWaitVisible = ko.observable(false);
                _this._subTitleCssClass = ko.observable(null);
                _this._onHidden = new Commerce.VoidAsyncResult(null);
                _this._numPadInputBroker = !Commerce.ObjectExtensions.isNullOrUndefined(numPadInputBroker) ?
                    numPadInputBroker : new Commerce.Peripherals.NumPadInputBroker();
                _this._ignoreTaskRecorderEventResults = [];
                return _this;
            }
            Object.defineProperty(ModalDialog.prototype, "visible", {
                get: function () {
                    return this._visible;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModalDialog.prototype, "numPadInputBroker", {
                get: function () {
                    return this._numPadInputBroker;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModalDialog.prototype, "title", {
                get: function () {
                    return this._title;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModalDialog.prototype, "subTitle", {
                get: function () {
                    return this._subTitle;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModalDialog.prototype, "subTitleCssClass", {
                get: function () {
                    return this._subTitleCssClass;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModalDialog.prototype, "message", {
                get: function () {
                    return this._message;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModalDialog.prototype, "indeterminateWaitVisible", {
                get: function () {
                    return this._indeterminateWaitVisible;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModalDialog.prototype, "dialogResult", {
                get: function () {
                    return this._dialogResult;
                },
                enumerable: true,
                configurable: true
            });
            ModalDialog.prototype.clearResult = function () {
                this._dialogResult.clear();
            };
            ModalDialog.prototype.show = function (dialogState, hideOnResult) {
                var _this = this;
                if (hideOnResult === void 0) { hideOnResult = true; }
                this._dialogResult = new Commerce.AsyncDialogResult(null);
                if (hideOnResult) {
                    this._dialogResult.onAny(function (result) { _this.hide(); });
                }
                if (!this.element.parentNode) {
                    $(this.element).attr("IRemoveable", "true");
                    document.body.appendChild(this.element);
                }
                this.render().done(function () {
                    _this.onShowing(dialogState);
                    if (_this.visible()) {
                        _this._enableNumPad();
                    }
                    Commerce.RetailLogger.viewsControlsModalDialogRendered(_this.controlName);
                });
                this._dialogResult.onAny(function (result, dialogResult) {
                    if (!Commerce.ArrayExtensions.hasElement(_this._ignoreTaskRecorderEventResults, dialogResult)) {
                        Commerce.ViewModelAdapter.raiseTaskRecorderEvent($(_this.element).find(".commerceDialog").get(0), Commerce.DialogResult[dialogResult]);
                    }
                });
                return this._dialogResult;
            };
            ModalDialog.prototype.onShowing = function (dialogState) {
                this.visible(true);
            };
            ModalDialog.prototype.hide = function () {
                var _this = this;
                if (!this.visible()) {
                    this._onHidden.resolve();
                }
                else {
                    this.visible(false);
                    this.indeterminateWaitVisible(false);
                }
                return this._onHidden.always(function () {
                    _this.clearResult();
                });
            };
            ModalDialog.prototype.invokeOnHidden = function () {
                this._disableNumPad();
                this.onHidden();
            };
            ModalDialog.prototype.onHidden = function () {
                if (document.body === this.element.parentNode) {
                    ko.removeNode(this.element);
                }
                this._onHidden.resolve();
            };
            ModalDialog.prototype._enableNumPad = function () {
                if (!this._numPadEnabled) {
                    Commerce.Peripherals.instance.numPad.enable(this.numPadInputBroker);
                    this._numPadEnabled = true;
                }
            };
            ModalDialog.prototype._disableNumPad = function () {
                if (this._numPadEnabled) {
                    Commerce.Peripherals.instance.numPad.disable();
                    this._numPadEnabled = false;
                }
            };
            return ModalDialog;
        }(Controls.UserControl));
        Controls.ModalDialog = ModalDialog;
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    "use strict";
    var TabIndexController = (function () {
        function TabIndexController() {
        }
        TabIndexController.prototype.init = function (viewElementSelector, observerAttributeFilter, sectionElementSelectors) {
            this._targetElement = document.querySelector(viewElementSelector);
            if (Commerce.ObjectExtensions.isNullOrUndefined(this._targetElement)) {
                throw new Error("ViewTabIndexController.init unable to find target element: " + viewElementSelector);
            }
            var attributeFilterSet = observerAttributeFilter || ["aria-selected"];
            this._sectionElementSelectors = sectionElementSelectors || null;
            this._mutationObjectCallback();
            this._observerObject = new MutationObserver(this._mutationObjectCallback.bind(this));
            this._observerObject.observe(this._targetElement, {
                attributes: true,
                attributeFilter: attributeFilterSet,
                attributeOldValue: false,
                subtree: true,
                childList: true
            });
        };
        TabIndexController.prototype.dispose = function () {
            if (!Commerce.ObjectExtensions.isNullOrUndefined(this._observerObject)) {
                this._observerObject.disconnect();
                this._observerObject = null;
            }
        };
        TabIndexController.prototype.disconnect = function () {
            this._observerObject.disconnect();
        };
        TabIndexController.prototype._mutationObjectCallback = function (mutationRecordsList) {
            var _this = this;
            var isRtl = $("body").attr("dir") === TabIndexController.RTL;
            var filter = TabIndexController.FILTER_VISIBLE_ENABLED_ELEMENT;
            var tabIndex = 0;
            var $targetElement = $(this._targetElement);
            $targetElement.find(".headerSplitView .win-splitview-panewrapper .win-splitview-pane").find(filter).each(function (index, elem) {
                tabIndex = _this._setTabIndexAttribute(elem, tabIndex);
            });
            $targetElement.find(".headerSplitView .win-splitview-content .headerSplitViewHeader").find(filter).each(function (index, elem) {
                tabIndex = _this._setTabIndexAttribute(elem, tabIndex);
            });
            var mainContentElements = [];
            if (Commerce.ObjectExtensions.isNullOrUndefined(this._sectionElementSelectors)) {
                $targetElement.find(".headerSplitView .win-splitview-content .main").find(filter).each(function (index, elem) {
                    mainContentElements.push(elem);
                });
            }
            else {
                this._sectionElementSelectors.forEach(function (id) {
                    var elem = $targetElement.find(id);
                    if (elem.length > 0 && elem.is(":visible")) {
                        mainContentElements.push(elem[0]);
                    }
                });
            }
            mainContentElements.sort(function (a, b) {
                var aRect = a.getBoundingClientRect();
                var bRect = b.getBoundingClientRect();
                if (Commerce.ObjectExtensions.isNullOrUndefined(_this._sectionElementSelectors)) {
                    if (isRtl) {
                        return aRect.top - bRect.top || bRect.right - aRect.right;
                    }
                    else {
                        return aRect.top - bRect.top || aRect.left - bRect.left;
                    }
                }
                else {
                    if (isRtl) {
                        return bRect.right - aRect.right || aRect.top - bRect.top;
                    }
                    else {
                        return aRect.left - bRect.left || aRect.top - bRect.top;
                    }
                }
            });
            if (Commerce.ObjectExtensions.isNullOrUndefined(this._sectionElementSelectors)) {
                $(mainContentElements).each(function (index, elem) {
                    tabIndex = _this._setTabIndexAttribute(elem, tabIndex);
                });
            }
            else {
                $(mainContentElements).each(function (index, element) {
                    $(element).find(filter).each(function (index, elem) {
                        tabIndex = _this._setTabIndexAttribute(elem, tabIndex);
                    });
                });
            }
            $targetElement.find(".AppBar").find(filter).each(function (index, elem) {
                tabIndex = _this._setTabIndexAttribute(elem, tabIndex);
            });
        };
        TabIndexController.prototype._setTabIndexAttribute = function (element, tabIndex) {
            var $el = $(element);
            if (this._isValidElement($el)) {
                $el.attr("tabindex", ++tabIndex);
            }
            return tabIndex;
        };
        TabIndexController.prototype._isValidElement = function ($element) {
            if (Commerce.ObjectExtensions.isNullOrUndefined($element)) {
                throw new Error("TabIndexController._isValidElement: $element cannot be null or undefined");
            }
            var isValid = $element.length > 0 && $element.is(TabIndexController.FILTER_VISIBLE_ENABLED_ELEMENT);
            return isValid;
        };
        TabIndexController.RTL = "rtl";
        TabIndexController.FILTER_VISIBLE_ENABLED_ELEMENT = ":tabbable:visible:not([disabled])";
        return TabIndexController;
    }());
    Commerce.TabIndexController = TabIndexController;
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var AppBar;
        (function (AppBar) {
            var AppBarBindingHandler = (function () {
                function AppBarBindingHandler() {
                }
                AppBarBindingHandler.prototype.init = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                    var options = ko.utils.unwrapObservable(valueAccessor()) || Object.create(null);
                    var $element = $(element);
                    $element.addClass("AppBar primaryAppBarBackground dynamicsSymbolFont bottom0 left0 right0");
                    $element.find("button").each(function (index, elem) {
                        if (!elem.winControl) {
                            new WinJS.UI.AppBarCommand(elem);
                        }
                    });
                    var dynamicElements = [];
                    if (Commerce.ArrayExtensions.hasElements(options.extensionCommands)) {
                        dynamicElements = options.extensionCommands.map(function (vm) {
                            var buttonElement = document.createElement("button");
                            if (element.firstElementChild) {
                                element.firstElementChild.insertAdjacentElement("beforebegin", buttonElement);
                            }
                            else {
                                element.appendChild(buttonElement);
                            }
                            new WinJS.UI.AppBarCommand(buttonElement);
                            var commandOptions = {
                                extraClass: vm.extraClass,
                                id: vm.id,
                                labelResx: Commerce.StringExtensions.EMPTY,
                                visible: vm.visible,
                                enabled: vm.enabled,
                                label: vm.label,
                                flyout: undefined,
                                onclick: vm.executeCommand.bind(vm)
                            };
                            return { element: buttonElement, appBarCommandOptions: commandOptions };
                        });
                    }
                    var appBarWinControl = new WinJS.UI.AppBar(element, options);
                    var showAppBarLabel = false;
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(Commerce.ApplicationContext.Instance.deviceConfiguration)) {
                        showAppBarLabel = Commerce.ApplicationContext.Instance.deviceConfiguration.ShowAppBarLabel;
                    }
                    if (showAppBarLabel) {
                        appBarWinControl.closedDisplayMode = "full";
                    }
                    var $overflowButton = $element.find(".win-appbar-overflowbutton");
                    $element.find(".win-appbar-overflowbutton").click(function (e) {
                        e.preventDefault();
                        $overflowButton.attr("aria-expanded", $overflowButton.attr("aria-expanded") === "true" ? "false" : "true");
                    });
                    $element.find(".win-appbar-overflowbutton").focusin(function (e) {
                        $overflowButton.attr("aria-expanded", $element.hasClass("win-appbar-opened") ? "true" : "false");
                    });
                    $element.find(".win-appbar-overflowbutton").focusout(function (e) {
                        $overflowButton.attr("aria-expanded", $element.hasClass("win-appbar-opened") ? "true" : "false");
                    });
                    ko.utils.domNodeDisposal.addDisposeCallback(element, function (e) {
                        if (element.winControl) {
                            element.winControl.dispose();
                        }
                    });
                    $overflowButton.attr("aria-label", Commerce.ViewModelAdapter.getResourceString("string_1700"));
                    $overflowButton.attr("aria-expanded", "false");
                    $overflowButton.attr("title", Commerce.ViewModelAdapter.getResourceString("string_1700"));
                    ko.applyBindingsToDescendants(bindingContext, element);
                    if (Commerce.ArrayExtensions.hasElements(dynamicElements)) {
                        dynamicElements.forEach(function (dynamicElement) {
                            ko.cleanNode(dynamicElement.element);
                            ko.applyBindingsToNode(dynamicElement.element, { appBarCommand: dynamicElement.appBarCommandOptions });
                        });
                    }
                    return { controlsDescendantBindings: true };
                };
                return AppBarBindingHandler;
            }());
            AppBar.AppBarBindingHandler = AppBarBindingHandler;
        })(AppBar = Controls.AppBar || (Controls.AppBar = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var AppBar;
        (function (AppBar) {
            var AppBarCommandBindingHandler = (function () {
                function AppBarCommandBindingHandler() {
                }
                AppBarCommandBindingHandler.prototype.init = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    var options = ko.utils.unwrapObservable(valueAccessor()) || Object.create(null);
                    var $element = $(element).addClass("AppBarCommand");
                    var flyoutControl;
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(options.flyout)) {
                        flyoutControl = $(options.flyout)[0].winControl;
                    }
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(element.winControl)) {
                        var onclickHandler_1 = options.onclick;
                        var appBarCommand = element.winControl;
                        options.onclick = function (eventArgs) {
                            if (Commerce.ObjectExtensions.isNullOrUndefined($element.attr("disabled"))) {
                                if (Commerce.ObjectExtensions.isFunction(onclickHandler_1)) {
                                    onclickHandler_1.call(viewModel, eventArgs);
                                }
                                if (!Commerce.ObjectExtensions.isNullOrUndefined(flyoutControl)) {
                                    if (flyoutControl.element.getAttribute("aria-label") === "Menu" &&
                                        flyoutControl.element.getAttribute("role") === "menu") {
                                        flyoutControl.element.setAttribute("role", "presentation");
                                    }
                                    if (flyoutControl.hidden) {
                                        flyoutControl.show(eventArgs.currentTarget);
                                    }
                                    else {
                                        flyoutControl.hide();
                                    }
                                }
                            }
                        };
                        if (!Commerce.StringExtensions.isNullOrWhitespace(options.extraClass)) {
                            appBarCommand.extraClass = options.extraClass;
                        }
                        appBarCommand.id = options.id;
                        appBarCommand.onclick = options.onclick;
                        if (!Commerce.StringExtensions.isNullOrWhitespace(options.labelResx)) {
                            appBarCommand.label = Commerce.ViewModelAdapter.getResourceString(options.labelResx);
                        }
                    }
                    AppBarCommandBindingHandler._updateCommandState(element, options);
                    ko.utils.domNodeDisposal.addDisposeCallback(element, function (e) {
                        if (element.winControl) {
                            element.winControl.dispose();
                        }
                    });
                };
                AppBarCommandBindingHandler.prototype.update = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    var options = ko.utils.unwrapObservable(valueAccessor());
                    AppBarCommandBindingHandler._updateCommandState(element, options);
                };
                AppBarCommandBindingHandler._updateCommandState = function (element, options) {
                    var $element = $(element);
                    if (element.winControl) {
                        var $appbarElement = $element.closest(".win-appbar");
                        if ($appbarElement.length > 0) {
                            var appBar = $appbarElement[0].winControl;
                            var appBarCommand = element.winControl;
                            if (options.hasOwnProperty("disabled")) {
                                appBarCommand.disabled = ko.utils.unwrapObservable(options.disabled);
                            }
                            if (options.hasOwnProperty("enabled")) {
                                appBarCommand.disabled = !ko.utils.unwrapObservable(options.enabled);
                            }
                            if (Commerce.StringExtensions.isNullOrWhitespace(options.labelResx) && options.hasOwnProperty("label")) {
                                var label = ko.utils.unwrapObservable(options.label);
                                if (!Commerce.StringExtensions.isNullOrWhitespace(label)) {
                                    appBarCommand.label = label;
                                }
                            }
                            var updatedVisibilityValue = ko.utils.unwrapObservable(options.visible) !== false;
                            var previousVisibilityValueString = $element.attr("visible");
                            var hasVisibilityAttribute = !Commerce.StringExtensions.isNullOrWhitespace(previousVisibilityValueString);
                            var previousVisibilityValue = previousVisibilityValueString === "true";
                            var shouldUpdateVisibleCommands = !hasVisibilityAttribute || previousVisibilityValue !== updatedVisibilityValue;
                            if (shouldUpdateVisibleCommands) {
                                $element.attr("visible", updatedVisibilityValue ? "true" : "false");
                                var $appBarCommands = $appbarElement.find(".AppBarCommand");
                                var $visibleAppBarCommands = $appBarCommands.not("[visible=false]");
                                var visibleAppBarCommands = $visibleAppBarCommands.map(function (index, domElement) {
                                    return domElement.winControl;
                                });
                                appBar.showOnlyCommands(visibleAppBarCommands);
                            }
                            appBar.forceLayout();
                        }
                    }
                };
                return AppBarCommandBindingHandler;
            }());
            AppBar.AppBarCommandBindingHandler = AppBarCommandBindingHandler;
        })(AppBar = Controls.AppBar || (Controls.AppBar = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var AppBar;
        (function (AppBar) {
            "use strict";
        })(AppBar = Controls.AppBar || (Controls.AppBar = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var AppBar;
        (function (AppBar) {
            "use strict";
        })(AppBar = Controls.AppBar || (Controls.AppBar = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Extensibility;
    (function (Extensibility) {
        var CustomControlBindingHandler = (function () {
            function CustomControlBindingHandler() {
            }
            CustomControlBindingHandler.prototype.init = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var customControl = valueAccessor();
                customControl.onReady(element);
                return { controlsDescendantBindings: true };
            };
            return CustomControlBindingHandler;
        }());
        ko.bindingHandlers.customControl = new CustomControlBindingHandler();
    })(Extensibility = Commerce.Extensibility || (Commerce.Extensibility = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var DataList;
        (function (DataList) {
            "use strict";
            var DataListViewModel = (function () {
                function DataListViewModel(dataListElement, listViewControl, dataListOptions) {
                    var _this = this;
                    this.$dataListElement = $(dataListElement);
                    this.dataListId = dataListElement.id;
                    this.listViewControl = listViewControl;
                    this.dataListOptions = dataListOptions;
                    this.removedColumns = [];
                    this.previousWindowWidth = this.$dataListElement.width();
                    this.currentListType = this.dataListOptions.defaultListType;
                    this.currentTemplate = null;
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(this.dataListOptions.itemTemplates) && Commerce.ArrayExtensions.hasElements(this.dataListOptions.itemTemplates)) {
                        if (Commerce.ArrayExtensions.hasElements(this.dataListOptions.columns)) {
                            var listTemplate = {
                                name: "string_900",
                                deviceType: DataList.DeviceType.All,
                                cardType: DataList.CardType.Stretchable,
                                templateId: this.dataListId + "ListTemplate"
                            };
                            this.dataListOptions.itemTemplates.push(listTemplate);
                        }
                        if (this.currentListType === DataList.ListType.List) {
                            this.currentTemplate = this.dataListOptions.itemTemplates[this.dataListOptions.itemTemplates.length - 1];
                        }
                        else {
                            this.currentTemplate = this.dataListOptions.itemTemplates[0];
                        }
                    }
                    this.activeColumns = Commerce.ObjectExtensions.clone(dataListOptions.columns);
                    this.activeColumns = this.activeColumns.sort(function (firstCol, secondCol) {
                        return secondCol.collapseOrder - firstCol.collapseOrder;
                    });
                    this.activeColumns.forEach(function (column) {
                        column.originalRatio = column.ratio;
                        var classId = Commerce.StringExtensions.format(DataListViewModel.columnClassIdStringTemplate, _this.dataListId, column.collapseOrder);
                        var classContent = Commerce.StringExtensions.format(DataListViewModel.columnClassContentStringTemplate, _this.dataListId, column.collapseOrder, column.ratio);
                        Commerce.CSSHelpers.injectCss(classId, classContent);
                        classId = Commerce.StringExtensions.format(DataListViewModel.rowClassIdStringTemplate, _this.dataListId, column.collapseOrder);
                        classContent = Commerce.StringExtensions.format(DataListViewModel.rowHiddenClassContentStringTemplate, _this.dataListId, column.collapseOrder);
                        Commerce.CSSHelpers.injectCss(classId, classContent);
                    });
                    var secondaryClassId = Commerce.StringExtensions.format(DataListViewModel.secondaryLineClassIdStringTemplate, this.dataListId);
                    var secondaryClassContent = Commerce.StringExtensions.format(DataListViewModel.secondaryLineHiddenClassContentStringTemplate, this.dataListId);
                    Commerce.CSSHelpers.injectCss(secondaryClassId, secondaryClassContent);
                    var dataListWidth = this.$dataListElement.width();
                    if (this.isWindowPhoneSize) {
                        this.currentDeviceType = DataList.DeviceType.Phone;
                    }
                    else {
                        this.currentDeviceType = DataList.DeviceType.Tablet;
                    }
                    this.resizeHandler(dataListWidth, true);
                    if (dataListWidth <= DataListViewModel.checkboxSectionWidth) {
                        var resizeTryCounter_1 = 0;
                        var resizeMaxTries_1 = 5;
                        var resizeRetryInterval_1 = window.setInterval((function () {
                            if (!Commerce.ObjectExtensions.isNullOrUndefined(_this.$dataListElement) && resizeMaxTries_1 > resizeTryCounter_1) {
                                _this.resizeHandler(_this.$dataListElement.width(), true);
                                if (_this.$dataListElement.width() > DataListViewModel.checkboxSectionWidth) {
                                    window.clearInterval(resizeRetryInterval_1);
                                }
                                resizeTryCounter_1++;
                            }
                            else {
                                window.clearInterval(resizeRetryInterval_1);
                            }
                        }).bind(this), 200);
                    }
                    Commerce.EventProxy.Instance.addWindowResizeHandler(dataListElement, function (eventArg) {
                        _this.resizeHandler(_this.$dataListElement.width());
                    });
                }
                DataListViewModel.prototype.toggleSelectionMode = function () {
                    this.listViewControl.selection.clear();
                    if (this.listViewControl.selectionMode === WinJS.UI.SelectionMode.none) {
                        switch (this.dataListOptions.selectionModes) {
                            case DataList.SelectionMode.NoneOrSingle:
                            case DataList.SelectionMode.InvokeOrSingle:
                                this.listViewControl.selectionMode = WinJS.UI.SelectionMode.single;
                                this.listViewControl.tapBehavior = WinJS.UI.TapBehavior.toggleSelect;
                                this.$dataListElement.find(".win-surface").addClass("win-selectionmode");
                                this.$dataListElement.removeClass("no-select");
                                this.$dataListElement.find(".headerCheckbox").show();
                                break;
                            case DataList.SelectionMode.NoneOrMulti:
                            case DataList.SelectionMode.InvokeOrMulti:
                                this.listViewControl.selectionMode = WinJS.UI.SelectionMode.multi;
                                this.listViewControl.tapBehavior = WinJS.UI.TapBehavior.toggleSelect;
                                this.$dataListElement.removeClass("no-select");
                                this.$dataListElement.find(".headerCheckbox").show();
                                break;
                        }
                    }
                    else {
                        switch (this.dataListOptions.selectionModes) {
                            case DataList.SelectionMode.NoneOrSingle:
                                this.listViewControl.selectionMode = WinJS.UI.SelectionMode.none;
                                this.listViewControl.tapBehavior = WinJS.UI.TapBehavior.none;
                                this.$dataListElement.addClass("no-select");
                                this.$dataListElement.find(".headerCheckbox").hide();
                                break;
                            case DataList.SelectionMode.NoneOrMulti:
                            case DataList.SelectionMode.InvokeOrSingle:
                            case DataList.SelectionMode.InvokeOrMulti:
                                this.listViewControl.selectionMode = WinJS.UI.SelectionMode.none;
                                this.listViewControl.tapBehavior = WinJS.UI.TapBehavior.invokeOnly;
                                this.$dataListElement.addClass("no-select");
                                this.$dataListElement.find(".headerCheckbox").hide();
                                break;
                        }
                    }
                    this.resizeHandler(this.$dataListElement.width());
                };
                DataListViewModel.prototype.selectAll = function () {
                    this.listViewControl.selection.selectAll();
                };
                DataListViewModel.prototype.clearAll = function () {
                    this.listViewControl.selection.clear();
                };
                DataListViewModel.prototype.selectItem = function (index) {
                    this.listViewControl.selection.set(index);
                    this.listViewControl.ensureVisible(index);
                };
                DataListViewModel.prototype.selectItems = function (indexes) {
                    var _this = this;
                    this.listViewControl.selection.set(indexes).done(function () {
                        if (Commerce.ArrayExtensions.hasElements(indexes)) {
                            _this.listViewControl.ensureVisible(indexes[0]);
                        }
                    });
                };
                DataListViewModel.prototype.getItemCountAsync = function () {
                    var asyncResult = new Commerce.AsyncResult();
                    this.listViewControl.itemDataSource.getCount().then(function (count) {
                        asyncResult.resolve(count);
                    });
                    return asyncResult;
                };
                DataListViewModel.prototype.refreshList = function () {
                    this.listViewControl.recalculateItemPosition();
                };
                DataListViewModel.prototype.getTemplates = function (deviceType) {
                    if (deviceType === void 0) { deviceType = DataList.DeviceType.All; }
                    if (deviceType === DataList.DeviceType.All) {
                        return this.dataListOptions.itemTemplates;
                    }
                    var templates = this.dataListOptions.itemTemplates.filter(function (item) {
                        return item.deviceType === deviceType || item.deviceType === DataList.DeviceType.All;
                    });
                    return templates;
                };
                DataListViewModel.prototype.getCurrentDeviceType = function () {
                    return this.currentDeviceType;
                };
                DataListViewModel.prototype.getCurrentTemplate = function () {
                    return this.currentTemplate;
                };
                DataListViewModel.prototype.getCurrentListType = function () {
                    return this.currentListType;
                };
                DataListViewModel.prototype.switchTemplate = function (template) {
                    if (template === this.getCurrentTemplate()) {
                        return;
                    }
                    if (template.templateId === (this.dataListId + "ListTemplate")) {
                        this.currentListType = DataList.ListType.List;
                        this.listViewControl.itemTemplate = DataListBindingHandler.renderItemTemplate(this.$dataListElement, DataListViewModel.linesTemplateName, this.dataListOptions, this.currentListType);
                    }
                    else {
                        this.currentListType = DataList.ListType.Card;
                        this.listViewControl.itemTemplate = DataListBindingHandler.renderItemTemplate(this.$dataListElement, template.templateId, this.dataListOptions, this.currentListType);
                    }
                    this.listViewControl.layout = DataListBindingHandler.getListLayout(this.currentListType, template.cardType);
                    DataListBindingHandler.setListClasses(this.$dataListElement, this.currentListType);
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(this.listViewControl.setTemplate)) {
                        this.listViewControl.setTemplate(null);
                    }
                    this.currentTemplate = template;
                };
                DataListViewModel.prototype.dispose = function () {
                    Commerce.ObjectExtensions.disposeAllProperties(this);
                };
                DataListViewModel.prototype.resizeHandler = function (elementWidth, isInitializing) {
                    if (isInitializing === void 0) { isInitializing = false; }
                    if (this.currentListType === DataList.ListType.Card) {
                        if ((isInitializing || this.currentDeviceType !== DataList.DeviceType.Phone)
                            && this.isWindowPhoneSize) {
                            var phoneTemplates = this.getTemplates(DataList.DeviceType.Phone);
                            if (Commerce.ArrayExtensions.hasElements(phoneTemplates)) {
                                this.switchTemplate(phoneTemplates[0]);
                                this.currentDeviceType = DataList.DeviceType.Phone;
                            }
                        }
                        else if ((isInitializing || this.currentDeviceType !== DataList.DeviceType.Tablet)
                            && !this.isWindowPhoneSize) {
                            var tabletTemplates = this.getTemplates(DataList.DeviceType.Tablet);
                            if (Commerce.ArrayExtensions.hasElements(tabletTemplates)) {
                                this.switchTemplate(tabletTemplates[0]);
                                this.currentDeviceType = DataList.DeviceType.Tablet;
                            }
                        }
                    }
                    else {
                        if (this.listViewControl.selectionMode !== WinJS.UI.SelectionMode.none) {
                            elementWidth -= DataListViewModel.checkboxSectionWidth;
                        }
                        if (this.currentDeviceType !== DataList.DeviceType.Phone && this.isWindowPhoneSize) {
                            this.currentDeviceType = DataList.DeviceType.Phone;
                        }
                        else if (this.currentDeviceType !== DataList.DeviceType.Tablet && !this.isWindowPhoneSize) {
                            this.currentDeviceType = DataList.DeviceType.Tablet;
                        }
                        if (isInitializing || (elementWidth < this.previousWindowWidth)) {
                            this.collapseColumns(elementWidth);
                        }
                        else if (elementWidth > this.previousWindowWidth) {
                            this.uncollapseColumns(elementWidth);
                        }
                        this.listViewControl.recalculateItemPosition();
                    }
                    this.previousWindowWidth = elementWidth;
                };
                DataListViewModel.prototype.collapseColumns = function (elementWidth) {
                    var _this = this;
                    var isProcessing = elementWidth > DataListViewModel.checkboxSectionWidth;
                    while (isProcessing && this.activeColumns.length > 1) {
                        var _loop_1 = function (i) {
                            if (this_1.activeColumns[i].minWidth > (elementWidth * (this_1.activeColumns[i].ratio / 100))) {
                                var removedColumn_1 = this_1.activeColumns.pop();
                                this_1.removedColumns.push(removedColumn_1);
                                var classId_1 = Commerce.StringExtensions.format(DataListViewModel.columnClassIdStringTemplate, this_1.dataListId, removedColumn_1.collapseOrder);
                                var classContent_1 = Commerce.StringExtensions.format(DataListViewModel.columnHiddenClassContentStringTemplate, this_1.dataListId, removedColumn_1.collapseOrder);
                                Commerce.CSSHelpers.injectCss(classId_1, classContent_1);
                                classId_1 = Commerce.StringExtensions.format(DataListViewModel.rowClassIdStringTemplate, this_1.dataListId, removedColumn_1.collapseOrder);
                                classContent_1 = Commerce.StringExtensions.format(DataListViewModel.rowClassContentStringTemplate, this_1.dataListId, removedColumn_1.collapseOrder);
                                Commerce.CSSHelpers.injectCss(classId_1, classContent_1);
                                this_1.activeColumns.forEach(function (column) {
                                    column.ratio = (column.ratio / (100 - removedColumn_1.ratio)) * 100;
                                    classId_1 = Commerce.StringExtensions.format(DataListViewModel.columnClassIdStringTemplate, _this.dataListId, column.collapseOrder);
                                    classContent_1 = Commerce.StringExtensions.format(DataListViewModel.columnClassContentStringTemplate, _this.dataListId, column.collapseOrder, column.ratio);
                                    Commerce.CSSHelpers.injectCss(classId_1, classContent_1);
                                });
                                if (this_1.removedColumns.length === 1) {
                                    var secondaryClassId = Commerce.StringExtensions.format(DataListViewModel.secondaryLineClassIdStringTemplate, this_1.dataListId);
                                    var secondaryClassContent = Commerce.StringExtensions.format(DataListViewModel.secondaryLineClassContentStringTemplate, this_1.dataListId);
                                    Commerce.CSSHelpers.injectCss(secondaryClassId, secondaryClassContent);
                                }
                                return "break";
                            }
                            if (i >= (this_1.activeColumns.length - 1)) {
                                isProcessing = false;
                            }
                        };
                        var this_1 = this;
                        for (var i = 0; i < this.activeColumns.length; i++) {
                            var state_1 = _loop_1(i);
                            if (state_1 === "break")
                                break;
                        }
                    }
                };
                DataListViewModel.prototype.uncollapseColumns = function (elementWidth) {
                    var _this = this;
                    var isProcessing = true;
                    var _loop_2 = function () {
                        var addedColumn = this_2.removedColumns[this_2.removedColumns.length - 1];
                        var ratioSum = addedColumn.originalRatio;
                        if (this_2.removedColumns.length === 1) {
                            ratioSum = 100;
                        }
                        else {
                            this_2.activeColumns.forEach(function (column) {
                                ratioSum += column.originalRatio;
                            });
                        }
                        var tempColumns = Commerce.ObjectExtensions.clone(this_2.activeColumns);
                        tempColumns.push(addedColumn);
                        for (var i = 0; i < tempColumns.length; i++) {
                            tempColumns[i].ratio = (tempColumns[i].originalRatio / ratioSum) * 100;
                            if (tempColumns[i].minWidth > (elementWidth * (tempColumns[i].ratio / 100))) {
                                isProcessing = false;
                                break;
                            }
                        }
                        if (isProcessing) {
                            this_2.activeColumns = tempColumns;
                            this_2.removedColumns.pop();
                            var classId_2 = Commerce.StringExtensions.format(DataListViewModel.rowClassIdStringTemplate, this_2.dataListId, addedColumn.collapseOrder);
                            var classContent_2 = Commerce.StringExtensions.format(DataListViewModel.rowHiddenClassContentStringTemplate, this_2.dataListId, addedColumn.collapseOrder);
                            Commerce.CSSHelpers.injectCss(classId_2, classContent_2);
                            this_2.activeColumns.forEach(function (column) {
                                classId_2 = Commerce.StringExtensions.format(DataListViewModel.columnClassIdStringTemplate, _this.dataListId, column.collapseOrder);
                                classContent_2 = Commerce.StringExtensions.format(DataListViewModel.columnClassContentStringTemplate, _this.dataListId, column.collapseOrder, column.ratio);
                                Commerce.CSSHelpers.injectCss(classId_2, classContent_2);
                            });
                            if (!Commerce.ArrayExtensions.hasElements(this_2.removedColumns)) {
                                var secondaryClassId = Commerce.StringExtensions.format(DataListViewModel.secondaryLineClassIdStringTemplate, this_2.dataListId);
                                var secondaryClassContent = Commerce.StringExtensions.format(DataListViewModel.secondaryLineHiddenClassContentStringTemplate, this_2.dataListId);
                                Commerce.CSSHelpers.injectCss(secondaryClassId, secondaryClassContent);
                            }
                        }
                    };
                    var this_2 = this;
                    while ((this.removedColumns.length > 0) && isProcessing) {
                        _loop_2();
                    }
                };
                Object.defineProperty(DataListViewModel.prototype, "isWindowPhoneSize", {
                    get: function () {
                        return $(window).width() < DataListViewModel.minimumTabletWidth;
                    },
                    enumerable: true,
                    configurable: true
                });
                DataListViewModel.columnClassIdStringTemplate = "dataList{0}Col{1}";
                DataListViewModel.columnClassContentStringTemplate = "#{0}.dataList .column{1} { max-width: {2}%; min-width: {2}%; }";
                DataListViewModel.columnHiddenClassContentStringTemplate = "#{0}.dataList .column{1} { display: none }";
                DataListViewModel.rowClassIdStringTemplate = "dataList{0}Row{1}";
                DataListViewModel.rowClassContentStringTemplate = "#{0}.dataList .row{1} { }";
                DataListViewModel.rowHiddenClassContentStringTemplate = "#{0}.dataList .row{1} { display: none; }";
                DataListViewModel.secondaryLineClassIdStringTemplate = "dataList{0}SecondaryLineBottomPadding";
                DataListViewModel.secondaryLineClassContentStringTemplate = "#{0}.dataList .dataListSecondaryLineBottomPadding { padding-bottom: 8px; }";
                DataListViewModel.secondaryLineHiddenClassContentStringTemplate = "#{0}.dataList .dataListSecondaryLineBottomPadding { padding-bottom: 0px; }";
                DataListViewModel.checkboxSectionWidth = 40;
                DataListViewModel.minimumTabletWidth = 480;
                DataListViewModel.linesTemplateName = "dataListLinesTemplate";
                return DataListViewModel;
            }());
            DataList.DataListViewModel = DataListViewModel;
            var ExtensibleDataListOptions = (function () {
                function ExtensibleDataListOptions(dataListOptions) {
                    this.itemDataSource = dataListOptions.itemDataSource;
                    this.onItemDataSourceUpdated = dataListOptions.onItemDataSourceUpdated;
                    this.incrementalDataSource = dataListOptions.incrementalDataSource;
                    this.selectionModes = dataListOptions.selectionModes;
                    this.itemInvoked = dataListOptions.itemInvoked;
                    this.selectionChanged = dataListOptions.selectionChanged;
                    this.onLoadingComplete = dataListOptions.onLoadingComplete;
                    this.ariaLabelResx = dataListOptions.ariaLabelResx;
                    this.emptyDataListTemplate = dataListOptions.emptyDataListTemplate;
                    this.emptyDataListMessageResx = dataListOptions.emptyDataListMessageResx;
                    this.autoSelectFirstItem = dataListOptions.autoSelectFirstItem;
                    this.autoFocusFirstItem = dataListOptions.autoFocusFirstItem;
                    this.selectInvokedItem = dataListOptions.selectInvokedItem;
                    this.itemTemplates = dataListOptions.itemTemplates;
                    this.defaultListType = dataListOptions.defaultListType;
                    this.groupedDataListInformation = dataListOptions.groupedDataListInformation;
                    this.autoFocusDelayInMilliseconds = dataListOptions.autoFocusDelayInMilliseconds;
                    var configuredColumns = dataListOptions.columns || [];
                    this.columns = configuredColumns.map(function (columnConfig) {
                        return new ExtensibleDataListColumn(columnConfig);
                    });
                }
                return ExtensibleDataListOptions;
            }());
            DataList.ExtensibleDataListOptions = ExtensibleDataListOptions;
            var ExtensibleDataListColumn = (function () {
                function ExtensibleDataListColumn(columnConfig) {
                    this.title = columnConfig.title;
                    this.titleResx = columnConfig.titleResx;
                    this.converter = columnConfig.converter;
                    this.ratio = columnConfig.ratio;
                    this.originalRatio = columnConfig.originalRatio;
                    this.collapseOrder = columnConfig.collapseOrder;
                    this.minWidth = columnConfig.minWidth;
                    this.isSecondaryTitleHidden = columnConfig.isSecondaryTitleHidden;
                    this.isRightAligned = columnConfig.isRightAligned;
                    this.type = columnConfig.type;
                    if (Commerce.StringExtensions.isNullOrWhitespace(columnConfig.field) &&
                        !Commerce.ObjectExtensions.isFunction(columnConfig.computeValue)) {
                        throw "Either field or computeValue must be provided for DataList columns." +
                            "Please ensure one of the two is provided for the column: " + this.title;
                    }
                    this._fieldPath = Commerce.StringExtensions.isNullOrWhitespace(columnConfig.field) ? [] : columnConfig.field.split(".");
                    this._computeValue = columnConfig.computeValue;
                }
                ExtensibleDataListColumn.prototype.getValue = function (row) {
                    if (Commerce.ArrayExtensions.hasElements(this._fieldPath)) {
                        if (this._fieldPath.length === 1 && this._fieldPath[0] === "$data") {
                            return row;
                        }
                        return this._fieldPath.reduce(function (curValue, field) {
                            return !Commerce.ObjectExtensions.isNullOrUndefined(curValue) ? curValue[field] : null;
                        }, row);
                    }
                    else if (Commerce.ObjectExtensions.isFunction(this._computeValue)) {
                        return this._computeValue(row);
                    }
                    else {
                        throw "Neither field nor computeValue was properly configured for the column " + this.title;
                    }
                };
                return ExtensibleDataListColumn;
            }());
            DataList.ExtensibleDataListColumn = ExtensibleDataListColumn;
            var DataListBindingHandler = (function () {
                function DataListBindingHandler() {
                }
                DataListBindingHandler.setTriggerEventMethod = function (triggerEventMethod) {
                    DataListBindingHandler._triggerEvent = triggerEventMethod;
                };
                DataListBindingHandler.renderItemTemplate = function ($dataListElement, templateName, viewModel, listType) {
                    if (listType === DataList.ListType.List) {
                        var templateElement_1 = document.createElement("div");
                        var $templateElement_1 = $(templateElement_1);
                        ko.renderTemplate(templateName, viewModel, {
                            afterRender: function () {
                                $templateElement_1.find("[data-bind]").each(function (index, currentElement) {
                                    var $currentElement = $(currentElement);
                                    var attrValue = $currentElement.attr("data-bind");
                                    if (((attrValue.search("text:") < 0) && (attrValue.search("textConverter:") < 0)) || (currentElement.innerText !== "")) {
                                        $currentElement.removeAttr("data-bind");
                                    }
                                });
                            }
                        }, templateElement_1);
                        viewModel.columns.forEach(function (column) {
                            if (column.isRightAligned) {
                                $dataListElement.find(".column" + column.collapseOrder).addClass("textRight");
                                $templateElement_1.find(".column" + column.collapseOrder).addClass("textRight");
                            }
                        });
                        return WinJS.UI.simpleItemRenderer(function (item) {
                            var lineTemplate = templateElement_1.cloneNode(true);
                            var rowConfig = {
                                columnConfigs: viewModel.columns.map(function (col) {
                                    return {
                                        data: col.getValue(item.data),
                                        field: "$data",
                                        converter: col.converter,
                                        type: col.type,
                                        ariaLabel: "true",
                                        columnToBind: col.title
                                    };
                                })
                            };
                            ko.applyBindings(rowConfig, lineTemplate);
                            return lineTemplate;
                        });
                    }
                    else {
                        return WinJS.UI.simpleItemRenderer(function (item) {
                            var templateElement = document.createElement("div");
                            ko.renderTemplate(templateName, item.data, {}, templateElement);
                            return templateElement;
                        });
                    }
                };
                DataListBindingHandler.getListLayout = function (listType, cardType) {
                    if (listType === DataList.ListType.Card) {
                        cardType = cardType || DataList.CardType.Static;
                        if (cardType === DataList.CardType.Stretchable) {
                            return new WinJS.UI.ListLayout();
                        }
                        else {
                            return new WinJS.UI.GridLayout({ orientation: WinJS.UI.Orientation.vertical });
                        }
                    }
                    else {
                        return new WinJS.UI.ListLayout();
                    }
                };
                DataListBindingHandler.setListClasses = function ($dataListElement, listType) {
                    if (listType === DataList.ListType.Card) {
                        $dataListElement.removeClass("dataList");
                        $dataListElement.addClass("dataCardList");
                        var $dataListHeaderElement = $dataListElement.find(DataListBindingHandler._dataListHeaderClassName);
                        $dataListHeaderElement.hide();
                    }
                    else {
                        $dataListElement.removeClass("dataCardList");
                        $dataListElement.addClass("dataList");
                        var $dataListHeaderElement = $dataListElement.find(DataListBindingHandler._dataListHeaderClassName);
                        $dataListHeaderElement.css("display", "flex");
                    }
                };
                DataListBindingHandler.prototype.init = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    var listViewControl;
                    var options = new ExtensibleDataListOptions(ko.utils.unwrapObservable(valueAccessor()) || {});
                    var $element = $(element);
                    if (Commerce.StringExtensions.isNullOrWhitespace(element.id)) {
                        throw "Element ID is required for a Data List.";
                    }
                    if (Commerce.ObjectExtensions.isNullOrUndefined(options.itemDataSource) && Commerce.ObjectExtensions.isNullOrUndefined(options.incrementalDataSource)) {
                        throw "Data source is required for a Data List.";
                    }
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(options.incrementalDataSource)) {
                        if (Commerce.ObjectExtensions.isNullOrUndefined(options.incrementalDataSource.callerMethod)) {
                            throw "callerMethod must be specified for a DataList incremental data source.";
                        }
                        options.incrementalDataSource.pageSize = options.incrementalDataSource.pageSize || Commerce.Config.defaultPageSize;
                        options.incrementalDataSource.pageLoadCallBack = options.incrementalDataSource.pageLoadCallBack || null;
                        options.incrementalDataSource.reloadCallBack = options.incrementalDataSource.reloadCallBack || null;
                        options.incrementalDataSource.updateItemCallBack = options.incrementalDataSource.updateItemCallBack || null;
                    }
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(options.groupedDataListInformation)) {
                        if (Commerce.ObjectExtensions.isNullOrUndefined(options.groupedDataListInformation.groupDataSelector)) {
                            throw "groupedDataSelector must be specified for a DataList grouped data source.";
                        }
                        if (Commerce.ObjectExtensions.isNullOrUndefined(options.groupedDataListInformation.groupKeySelector)) {
                            throw "groupedKeySelector must be specified for a DataList grouped data source.";
                        }
                        if (Commerce.ObjectExtensions.isNullOrUndefined(options.groupedDataListInformation.headerInvoked)) {
                            throw "headerInvoked must be specified for a DataList grouped data source.";
                        }
                        if (Commerce.ObjectExtensions.isNullOrUndefined(options.groupedDataListInformation.headerTemplate)) {
                            throw "headerTemplate must be specified for a DataList grouped data source.";
                        }
                        if (Commerce.ObjectExtensions.isNullOrUndefined(options.groupedDataListInformation.keyName)) {
                            throw "keyName must be specified for a DataList grouped data source.";
                        }
                        if (Commerce.ObjectExtensions.isNullOrUndefined(options.groupedDataListInformation.parentId)) {
                            throw "parentId must be specified for a DataList grouped data source.";
                        }
                    }
                    options.emptyDataListTemplate = options.emptyDataListTemplate || DataListBindingHandler._emptyDataListTemplate;
                    options.emptyDataListMessageResx = options.emptyDataListMessageResx || "string_1032";
                    options.selectionModes = options.selectionModes || DataList.SelectionMode.None;
                    options.itemDataSource = options.itemDataSource || ko.observableArray([]);
                    options.onItemDataSourceUpdated = options.onItemDataSourceUpdated || (function () {
                        return;
                    });
                    options.autoSelectFirstItem = options.autoSelectFirstItem || false;
                    options.autoFocusFirstItem = options.autoFocusFirstItem || false;
                    options.selectInvokedItem = options.selectInvokedItem || false;
                    options.autoFocusDelayInMilliseconds = options.autoFocusDelayInMilliseconds || 0;
                    if (Commerce.ObjectExtensions.isNullOrUndefined(options.defaultListType)) {
                        if (!Commerce.ObjectExtensions.isNullOrUndefined(options.columns)) {
                            options.defaultListType = DataList.ListType.List;
                        }
                        else if (!Commerce.ObjectExtensions.isNullOrUndefined(options.itemTemplates)
                            || Commerce.ArrayExtensions.hasElements(options.itemTemplates)) {
                            options.defaultListType = DataList.ListType.Card;
                        }
                        else {
                            throw "Columns are a required parameter for a DataList of List type, and itemTemplates are a required parameter for DataList of Card type.";
                        }
                    }
                    else if (options.defaultListType === DataList.ListType.List
                        && (Commerce.ObjectExtensions.isNullOrUndefined(options.columns)
                            || !Commerce.ArrayExtensions.hasElements(options.columns))) {
                        throw "Columns are a required parameter for a DataList of List type.";
                    }
                    else if (options.defaultListType === DataList.ListType.Card
                        && (Commerce.ObjectExtensions.isNullOrUndefined(options.itemTemplates)
                            || !Commerce.ArrayExtensions.hasElements(options.itemTemplates))) {
                        throw "itemTemplates is a required parameter for a DataList of Card type.";
                    }
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(options.itemTemplates)) {
                        options.itemTemplates.forEach(function (item) {
                            if (Commerce.StringExtensions.isNullOrWhitespace(item.templateId)) {
                                throw "templateId must be specified for a DataList item template.";
                            }
                            item.cardType = item.cardType || DataList.CardType.Static;
                            item.name = item.name || Commerce.StringExtensions.EMPTY;
                            item.deviceType = item.deviceType || DataList.DeviceType.All;
                        });
                    }
                    options.columns = options.columns || [];
                    var ratioSum = 0;
                    var collapseOrderSum = 0;
                    var indexSum = 0;
                    options.columns.forEach(function (column, index) {
                        if (Commerce.ObjectExtensions.isNullOrUndefined(column.collapseOrder)) {
                            throw "Collapse order is a required parameter for DataList columns.";
                        }
                        if (!options.columns.every(function (compareColumn, compareIndex) {
                            if (index !== compareIndex) {
                                return column.collapseOrder !== compareColumn.collapseOrder;
                            }
                            return true;
                        })) {
                            throw "Collapse order must be unique for each column in a DataList.";
                        }
                        if (Commerce.ObjectExtensions.isNullOrUndefined(column.ratio)) {
                            throw "Ratio is a required parameter for DataList columns.";
                        }
                        if (Commerce.ObjectExtensions.isNullOrUndefined(column.minWidth)) {
                            throw "minWidth is a required parameter for DataList columns.";
                        }
                        if (Commerce.StringExtensions.isNullOrWhitespace(column.title) && Commerce.StringExtensions.isNullOrWhitespace(column.titleResx)) {
                            throw "Either column title or titleResx must be provided and non-empty for DataList columns.";
                        }
                        ratioSum += column.ratio;
                        collapseOrderSum += column.collapseOrder;
                        indexSum += index + 1;
                        column.title = column.title || Commerce.ViewModelAdapter.getResourceString(column.titleResx);
                        column.converter = column.converter || "Commerce.Core.Converter.emptyFormatter";
                        column.type = column.type || "text";
                        column.isRightAligned = column.isRightAligned || false;
                        column.isSecondaryTitleHidden = column.isSecondaryTitleHidden || false;
                    });
                    if (ratioSum !== 100 && options.defaultListType === DataList.ListType.List) {
                        throw "Ratios for all columns in a DataList must total to 100.";
                    }
                    if (collapseOrderSum !== indexSum) {
                        throw "Collapse order for columns in a DataList must not skip numbers in the order sequence.";
                    }
                    ko.applyBindingsToNode(element, { template: { name: DataListBindingHandler._dataListTemplateName, data: options } });
                    var toggleEmptyGridTemplate = function (count) {
                        var $tableContent = $element.find(".tableContent");
                        var $dataListEmptyContentPlaceholder = $element.find(DataListBindingHandler._emptyDataListPlaceholderClassName);
                        if (count < 1) {
                            $tableContent.hide();
                            $tableContent.removeData("forceLayoutDone");
                            $dataListEmptyContentPlaceholder.css("display", "flex");
                            var bindingData = void 0;
                            if (options.emptyDataListTemplate === DataListBindingHandler._emptyDataListTemplate) {
                                bindingData = options;
                            }
                            else {
                                bindingData = viewModel;
                            }
                            ko.applyBindingsToNode($dataListEmptyContentPlaceholder[0], {
                                template: {
                                    name: options.emptyDataListTemplate,
                                    data: bindingData
                                }
                            });
                        }
                        else {
                            if ($tableContent.is(":hidden")) {
                                $dataListEmptyContentPlaceholder.hide();
                                $tableContent.show();
                                if ($tableContent.data("forceLayoutDone") !== true) {
                                    listViewControl.forceLayout();
                                    $tableContent.data("forceLayoutDone", true);
                                }
                            }
                        }
                    };
                    var winControlBindings = {};
                    var currentCardType = DataList.CardType.Static;
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(options.itemTemplates)) {
                        currentCardType = options.itemTemplates[0].cardType;
                    }
                    winControlBindings.layout = DataListBindingHandler.getListLayout(options.defaultListType, currentCardType);
                    DataListBindingHandler.setListClasses($element, options.defaultListType);
                    var isItemDataSourceBound = Commerce.ObjectExtensions.isNullOrUndefined(options.groupedDataListInformation)
                        && Commerce.ObjectExtensions.isNullOrUndefined(options.incrementalDataSource)
                        && !Commerce.ObjectExtensions.isNullOrUndefined(options.itemDataSource);
                    if (isItemDataSourceBound) {
                        var memberValue = ko.utils.unwrapObservable(options.itemDataSource);
                        var listDataSource_1 = new WinJS.Binding.List(memberValue);
                        if (options.itemDataSource.subscribe) {
                            options.itemDataSource.subscribe(function (newValue) {
                                WinJS.Promise.timeout().then(function () {
                                    listDataSource_1.splice(0, listDataSource_1.length);
                                    for (var i = 0; i < newValue.length; i++) {
                                        listDataSource_1.push(newValue[i]);
                                    }
                                    options.onItemDataSourceUpdated.call(viewModel, element.dataListViewModel);
                                });
                            });
                        }
                        winControlBindings.itemDataSource = listDataSource_1.dataSource;
                    }
                    switch (options.selectionModes) {
                        case null:
                        case DataList.SelectionMode.None:
                        case DataList.SelectionMode.NoneOrSingle:
                        case DataList.SelectionMode.NoneOrMulti:
                            winControlBindings.selectionMode = WinJS.UI.SelectionMode.none;
                            winControlBindings.tapBehavior = WinJS.UI.TapBehavior.none;
                            break;
                        case DataList.SelectionMode.InvokeOnly:
                        case DataList.SelectionMode.InvokeOrSingle:
                        case DataList.SelectionMode.InvokeOrMulti:
                            winControlBindings.selectionMode = WinJS.UI.SelectionMode.none;
                            winControlBindings.tapBehavior = WinJS.UI.TapBehavior.invokeOnly;
                            break;
                        case DataList.SelectionMode.SingleSelect:
                            winControlBindings.selectionMode = WinJS.UI.SelectionMode.single;
                            winControlBindings.tapBehavior = WinJS.UI.TapBehavior.toggleSelect;
                            break;
                        case DataList.SelectionMode.MultiSelect:
                            winControlBindings.selectionMode = WinJS.UI.SelectionMode.multi;
                            winControlBindings.tapBehavior = WinJS.UI.TapBehavior.toggleSelect;
                            break;
                        default:
                            throw "Invalid selection mode provided for DataList. Please use DataList.SelectionMode enum.";
                    }
                    if (winControlBindings.selectionMode === WinJS.UI.SelectionMode.none) {
                        $element.addClass("no-select");
                    }
                    var $dataListPlaceholder = $element.find(DataListBindingHandler._dataListPlaceholderClassName);
                    listViewControl = new WinJS.UI.ListView($dataListPlaceholder[0], winControlBindings);
                    if (options.defaultListType === DataList.ListType.List) {
                        listViewControl.itemTemplate = DataListBindingHandler.renderItemTemplate($element, DataListBindingHandler._linesTemplateName, options, options.defaultListType);
                    }
                    else {
                        listViewControl.itemTemplate = DataListBindingHandler.renderItemTemplate($element, options.itemTemplates[0].templateId, options, options.defaultListType);
                    }
                    var dataListViewModel = new DataListViewModel(element, listViewControl, options);
                    element.dataListViewModel = dataListViewModel;
                    if (isItemDataSourceBound) {
                        options.onItemDataSourceUpdated.call(viewModel, dataListViewModel);
                    }
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(options.itemInvoked) && Commerce.ObjectExtensions.isFunction(options.itemInvoked)) {
                        var itemInvokedCallback_1 = options.itemInvoked;
                        var itemInvoked = function (event) {
                            DataListBindingHandler._triggerEvent(element, DataList.InteractionEvents.RowClicked);
                            if (listViewControl.tapBehavior === WinJS.UI.TapBehavior.invokeOnly) {
                                Commerce.RetailLogger.librariesWinJsListViewItemClick(element.id);
                                event.detail.itemPromise.then(function (item) {
                                    if (options.selectInvokedItem) {
                                        listViewControl.selection.set(item);
                                    }
                                    itemInvokedCallback_1.call(viewModel, item.data);
                                });
                            }
                        };
                        listViewControl.addEventListener("iteminvoked", WinJS.Utilities.markSupportedForProcessing(itemInvoked));
                    }
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(options.selectionChanged) && Commerce.ObjectExtensions.isFunction(options.selectionChanged)) {
                        var selectionChangedCallBack_1 = { eventHandlerCallBack: options.selectionChanged };
                        var selectionChanged = function (event) {
                            if (listViewControl.selection.count() > 0) {
                                DataListBindingHandler._triggerEvent(element, DataList.InteractionEvents.RowSelected);
                            }
                            event.target.winControl.selection.getItems().then(function (item) {
                                Commerce.Host.instance.timers.setImmediate(function () {
                                    selectionChangedCallBack_1.eventHandlerCallBack.call(viewModel, item.map(function (item) { return item.data; }));
                                    $element.find(".win-container.win-selected .win-selectioncheckmark:not([role])").each(function (index, currentElement) {
                                        var $currentElement = $(currentElement);
                                        $currentElement.attr("role", "checkbox");
                                    });
                                });
                                event.preventDefault();
                                event.stopImmediatePropagation();
                            });
                        };
                        listViewControl.addEventListener("selectionchanged", WinJS.Utilities.markSupportedForProcessing(selectionChanged));
                    }
                    var loadingStateChanged = function (event) {
                        if (Commerce.ApplicationHelper.isWebApplicationType(Commerce.Host.instance.application.getApplicationType())
                            && Commerce.Host.instance.application.getBrowserType() === Commerce.Host.BrowserType.Chrome
                            && dataListViewModel.getCurrentListType() === DataList.ListType.Card
                            && listViewControl.loadingState === "itemsLoading") {
                            $element.removeData("recalculateDone");
                        }
                        if (listViewControl.loadingState === "complete") {
                            if (!Commerce.ObjectExtensions.isNullOrUndefined(options.emptyDataListTemplate)) {
                                toggleEmptyGridTemplate(listViewControl.itemDataSource.list.length);
                            }
                            if (Commerce.ObjectExtensions.isNullOrUndefined(options.incrementalDataSource)
                                && options.autoSelectFirstItem === true
                                && listViewControl.selection.count() === 0) {
                                listViewControl.selection.set(0);
                            }
                            if (options.autoFocusFirstItem) {
                                var inFirstPage = true;
                                var itemDataSourceLength = listViewControl.itemDataSource.list.length;
                                if (!Commerce.ObjectExtensions.isNullOrUndefined(options.incrementalDataSource)) {
                                    inFirstPage = itemDataSourceLength <= options.incrementalDataSource.pageSize;
                                }
                                if ((itemDataSourceLength > 0) && inFirstPage && (!listViewControl.currentItem.hasFocus)) {
                                    listViewControl.currentItem = { index: 0, hasFocus: true, showFocus: true };
                                }
                            }
                            if (!Commerce.ObjectExtensions.isNullOrUndefined(options.onLoadingComplete) && Commerce.ObjectExtensions.isFunction(options.onLoadingComplete)) {
                                options.onLoadingComplete.call(viewModel, dataListViewModel);
                            }
                            if (Commerce.ApplicationHelper.isWebApplicationType(Commerce.Host.instance.application.getApplicationType())
                                && Commerce.Host.instance.application.getBrowserType() === Commerce.Host.BrowserType.Chrome
                                && dataListViewModel.getCurrentListType() === DataList.ListType.Card
                                && $element.data("recalculateDone") !== true) {
                                listViewControl.recalculateItemPosition();
                                $element.data("recalculateDone", true);
                            }
                        }
                        if (listViewControl.selectionMode !== WinJS.UI.SelectionMode.none) {
                            $element.find(".win-surface").addClass("win-selectionmode");
                            $element.find(DataListBindingHandler._headerCheckboxClassName).show();
                        }
                    };
                    listViewControl.addEventListener("loadingstatechanged", WinJS.Utilities.markSupportedForProcessing(loadingStateChanged));
                    if (!Commerce.StringExtensions.isNullOrWhitespace(options.ariaLabelResx)) {
                        $dataListPlaceholder.attr("aria-label", Commerce.ViewModelAdapter.getResourceString(options.ariaLabelResx));
                    }
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(options.incrementalDataSource)) {
                        Commerce.ViewModelAdapter.createIncrementalDataSourceAdapter(listViewControl, options.incrementalDataSource.dataManager, options.incrementalDataSource.callerMethod, options.incrementalDataSource.pageSize, "#" + element.id + " " + DataListBindingHandler._emptyDataListPlaceholderClassName, options.incrementalDataSource.onLoading, options.autoSelectFirstItem, options.autoFocusFirstItem, options.selectInvokedItem, options.incrementalDataSource.pageLoadCallBack, options.incrementalDataSource.reloadCallBack, options.incrementalDataSource.updateItemCallBack, options.incrementalDataSource.pageLoadCompleteCallBackFunction, options.autoFocusDelayInMilliseconds);
                    }
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(options.groupedDataListInformation)) {
                        Commerce.ViewModelAdapter.createGroupedDataSourceAdapter(listViewControl, options.itemDataSource, options.groupedDataListInformation.groupKeySelector, options.groupedDataListInformation.groupDataSelector, options.groupedDataListInformation.parentId, options.groupedDataListInformation.keyName);
                        listViewControl.groupHeaderTemplate = DataListBindingHandler.renderItemTemplate($element, options.groupedDataListInformation.headerTemplate, options, options.defaultListType);
                        listViewControl.addEventListener("groupheaderinvoked", function (eventInfo) {
                            eventInfo.detail.groupHeaderPromise.then(function (headerItem) {
                                options.groupedDataListInformation.headerInvoked.call(viewModel, headerItem.data);
                            });
                        });
                    }
                    ko.utils.domNodeDisposal.addDisposeCallback(element, function (e) {
                        dataListViewModel.dispose();
                    });
                    return { controlsDescendantBindings: true };
                };
                DataListBindingHandler._dataListTemplateName = "dataListTemplate";
                DataListBindingHandler._linesTemplateName = "dataListLinesTemplate";
                DataListBindingHandler._emptyDataListTemplate = "emptyDataListTemplate";
                DataListBindingHandler._dataListPlaceholderClassName = ".dataListPlaceholder";
                DataListBindingHandler._headerCheckboxClassName = ".headerCheckbox";
                DataListBindingHandler._emptyDataListPlaceholderClassName = ".dataListEmptyContentPlaceholder";
                DataListBindingHandler._dataListHeaderClassName = ".dataListHeader";
                return DataListBindingHandler;
            }());
            DataList.DataListBindingHandler = DataListBindingHandler;
        })(DataList = Controls.DataList || (Controls.DataList = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var DataList;
        (function (DataList) {
            "use strict";
            var SelectionMode;
            (function (SelectionMode) {
                SelectionMode[SelectionMode["None"] = 0] = "None";
                SelectionMode[SelectionMode["NoneOrSingle"] = 1] = "NoneOrSingle";
                SelectionMode[SelectionMode["NoneOrMulti"] = 2] = "NoneOrMulti";
                SelectionMode[SelectionMode["InvokeOnly"] = 3] = "InvokeOnly";
                SelectionMode[SelectionMode["InvokeOrSingle"] = 4] = "InvokeOrSingle";
                SelectionMode[SelectionMode["InvokeOrMulti"] = 5] = "InvokeOrMulti";
                SelectionMode[SelectionMode["SingleSelect"] = 6] = "SingleSelect";
                SelectionMode[SelectionMode["MultiSelect"] = 7] = "MultiSelect";
            })(SelectionMode = DataList.SelectionMode || (DataList.SelectionMode = {}));
            var ListType;
            (function (ListType) {
                ListType[ListType["List"] = 0] = "List";
                ListType[ListType["Card"] = 1] = "Card";
            })(ListType = DataList.ListType || (DataList.ListType = {}));
            var CardType;
            (function (CardType) {
                CardType[CardType["Static"] = 0] = "Static";
                CardType[CardType["Stretchable"] = 1] = "Stretchable";
            })(CardType = DataList.CardType || (DataList.CardType = {}));
            var DeviceType;
            (function (DeviceType) {
                DeviceType[DeviceType["All"] = 0] = "All";
                DeviceType[DeviceType["Tablet"] = 1] = "Tablet";
                DeviceType[DeviceType["Phone"] = 2] = "Phone";
            })(DeviceType = DataList.DeviceType || (DataList.DeviceType = {}));
            var InteractionEvents;
            (function (InteractionEvents) {
                InteractionEvents[InteractionEvents["RowSelected"] = 0] = "RowSelected";
                InteractionEvents[InteractionEvents["RowClicked"] = 1] = "RowClicked";
            })(InteractionEvents = DataList.InteractionEvents || (DataList.InteractionEvents = {}));
        })(DataList = Controls.DataList || (Controls.DataList = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var DatePicker;
        (function (DatePicker) {
            var DatePickerBindingHandler = (function () {
                function DatePickerBindingHandler() {
                }
                DatePickerBindingHandler.prototype.init = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    var options = ko.utils.unwrapObservable(valueAccessor()) || Object.create(null);
                    var picker = new WinJS.UI.DatePicker(element);
                    ko.applyBindingsToNode(picker.element, {
                        winControl: {
                            disabled: options.disabled || false,
                            current: options.current || Commerce.DateExtensions.now,
                            datePattern: options.datePattern || Commerce.StringExtensions.EMPTY
                        }
                    }, viewModel);
                    if (Commerce.ObjectExtensions.isFunction(options.onChange)) {
                        picker.onchange = function (event) {
                            var datePickerDiv = event.currentTarget;
                            var datePickerControl = datePickerDiv.winControl;
                            options.onChange(Commerce.DateExtensions.getDate(datePickerControl.current));
                        };
                    }
                    return { controlsDescendantBindings: true };
                };
                return DatePickerBindingHandler;
            }());
            DatePicker.DatePickerBindingHandler = DatePickerBindingHandler;
        })(DatePicker = Controls.DatePicker || (Controls.DatePicker = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var DatePicker;
        (function (DatePicker) {
            "use strict";
        })(DatePicker = Controls.DatePicker || (Controls.DatePicker = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        "use strict";
        var ExtensionTemplatedDialog = (function (_super) {
            __extends(ExtensionTemplatedDialog, _super);
            function ExtensionTemplatedDialog(htmlFragmentPath, templateControl, options, numPadInputBroker) {
                var _this = _super.call(this, numPadInputBroker) || this;
                _this.closeClickHandler = null;
                _this.controlName = "ExtensionTemplatedDialog";
                if (Commerce.StringExtensions.isNullOrWhitespace(htmlFragmentPath)) {
                    throw "ExtensionTemplatedDialog: required parameter 'htmlFragmentPath' is empty or undefined.";
                }
                _this._htmlFragmentPath = htmlFragmentPath;
                if (Commerce.ObjectExtensions.isNullOrUndefined(templateControl)) {
                    throw "ExtensionTemplatedDialog: required parameter 'templateControl' is null or undefined.";
                }
                _this._templateControl = templateControl;
                if (Commerce.ObjectExtensions.isNullOrUndefined(options)) {
                    throw "ExtensionTemplatedDialog: required parameter 'options' is null or undefined.";
                }
                _this._options = options;
                if (!Commerce.StringExtensions.isNullOrWhitespace(options.title)) {
                    _this.title(options.title);
                }
                if (!Commerce.StringExtensions.isNullOrWhitespace(options.subTitle)) {
                    _this.subTitle(options.subTitle);
                }
                _this.dialogButtons = [];
                _this.addDialogButton(options.button1, ExtensionTemplatedDialog.EXTENSION_TEMPLATED_DIALOG_BUTTON1);
                _this.addDialogButton(options.button2, ExtensionTemplatedDialog.EXTENSION_TEMPLATED_DIALOG_BUTTON2);
                if (Commerce.ObjectExtensions.isFunction(options.onCloseX)) {
                    _this.closeClickHandler = function () {
                        var canCloseDialog = options.onCloseX();
                        if (canCloseDialog === true) {
                            _this.closeDialog();
                        }
                    };
                }
                _this._barcodeScannerIsEnabled = false;
                _this._msrIsEnabled = false;
                return _this;
            }
            ExtensionTemplatedDialog.prototype.openDialog = function () {
                _super.prototype.show.call(this, this._options, false);
            };
            ExtensionTemplatedDialog.prototype.closeDialog = function () {
                _super.prototype.hide.call(this);
            };
            ExtensionTemplatedDialog.prototype.setButtonDisabledState = function (buttonId, disabled) {
                for (var i = 0; i < this.dialogButtons.length; i++) {
                    var modalDialogButton = this.dialogButtons[i];
                    if (modalDialogButton.id === buttonId) {
                        modalDialogButton.disable(disabled);
                        break;
                    }
                }
            };
            ExtensionTemplatedDialog.prototype.onShowing = function (dialogState) {
                var _this = this;
                _super.prototype.onShowing.call(this, dialogState);
                var nodes = this.element.getElementsByClassName("ExtensionTemplateDialogContentPlaceholder");
                if (nodes.length !== 1) {
                    throw Commerce.StringExtensions.format("ExtensionTemplatedDialog: Found unexpected number of placeholder elements: {0}, expected 1.", nodes.length);
                }
                var contentPlaceholder = nodes[0];
                ko.cleanNode(contentPlaceholder);
                WinJS.Utilities.empty(contentPlaceholder);
                var newElement = document.createElement("div");
                newElement.className = "col grow";
                contentPlaceholder.appendChild(newElement);
                WinJS.UI.Fragments.render(this._htmlFragmentPath, newElement).done(function (newElement) {
                    if (Commerce.ObjectExtensions.isFunction(_this._templateControl.onReady)) {
                        _this._templateControl.onReady(newElement);
                    }
                    if (Commerce.ObjectExtensions.isFunction(_this._templateControl.onBarcodeScanned)) {
                        Commerce.Peripherals.instance.barcodeScanner.enableAsync(_this._templateControl.onBarcodeScanned.bind(_this._templateControl));
                        _this._barcodeScannerIsEnabled = true;
                    }
                    if (Commerce.ObjectExtensions.isFunction(_this._templateControl.onMsrSwiped)) {
                        Commerce.Peripherals.instance.magneticStripeReader.enableAsync(_this._templateControl.onMsrSwiped.bind(_this._templateControl));
                        _this._msrIsEnabled = true;
                    }
                }, function (error) {
                    throw Commerce.StringExtensions.format("ExtensionTemplatedDialog: Error thrown while rendering fragment {0}.", JSON.stringify(error));
                });
            };
            ExtensionTemplatedDialog.prototype.onHidden = function () {
                if (this._barcodeScannerIsEnabled) {
                    Commerce.Peripherals.instance.barcodeScanner.disableAsync();
                    this._barcodeScannerIsEnabled = false;
                }
                if (this._msrIsEnabled) {
                    Commerce.Peripherals.instance.magneticStripeReader.disableAsync();
                    this._msrIsEnabled = false;
                }
                _super.prototype.onHidden.call(this);
            };
            ExtensionTemplatedDialog.prototype.buttonClickHandler = function (operationId) {
                if (!Commerce.ObjectExtensions.isNullOrUndefined(this._options)) {
                    var button = void 0;
                    switch (operationId) {
                        case ExtensionTemplatedDialog.EXTENSION_TEMPLATED_DIALOG_BUTTON1:
                            button = this._options.button1;
                            break;
                        case ExtensionTemplatedDialog.EXTENSION_TEMPLATED_DIALOG_BUTTON2:
                            button = this._options.button2;
                            break;
                    }
                    var canCloseDialog = false;
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(button) &&
                        Commerce.ObjectExtensions.isFunction(button.onClick)) {
                        canCloseDialog = button.onClick.call(undefined, button);
                    }
                    if (canCloseDialog) {
                        this.closeDialog();
                    }
                }
            };
            ExtensionTemplatedDialog.prototype.addDialogButton = function (button, operationId) {
                if (!Commerce.ObjectExtensions.isNullOrUndefined(button)) {
                    var dialogButton = {
                        id: button.id,
                        label: Commerce.StringExtensions.isNullOrWhitespace(button.label) ? null : button.label,
                        isPrimary: Commerce.ObjectExtensions.isBoolean(button.isPrimary) ? button.isPrimary : false,
                        operationId: operationId,
                        disable: ko.observable(false)
                    };
                    this.dialogButtons.push(dialogButton);
                }
            };
            ExtensionTemplatedDialog.EXTENSION_TEMPLATED_DIALOG_BUTTON1 = "ExtensionTemplatedDialogButton1";
            ExtensionTemplatedDialog.EXTENSION_TEMPLATED_DIALOG_BUTTON2 = "ExtensionTemplatedDialogButton2";
            return ExtensionTemplatedDialog;
        }(Controls.ModalDialog));
        Controls.ExtensionTemplatedDialog = ExtensionTemplatedDialog;
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        "use strict";
        var ExtensionTemplatedDialogProxy = (function () {
            function ExtensionTemplatedDialogProxy(htmlFragmentPath, templateData) {
                this._htmlFragmentPath = htmlFragmentPath;
                this._templateData = templateData;
                this._numPadInputBroker = new Commerce.Peripherals.NumPadInputBroker();
            }
            ExtensionTemplatedDialogProxy.prototype.openDialog = function (options) {
                this._templatedDialog = new Commerce.Controls.ExtensionTemplatedDialog(this._htmlFragmentPath, this._templateData, options, this._numPadInputBroker);
                this._templatedDialog.openDialog();
            };
            ExtensionTemplatedDialogProxy.prototype.closeDialog = function () {
                if (!Commerce.ObjectExtensions.isNullOrUndefined(this._templatedDialog)) {
                    this._templatedDialog.closeDialog();
                    this._templatedDialog = null;
                }
            };
            ExtensionTemplatedDialogProxy.prototype.setButtonDisabledState = function (buttonId, disabled) {
                if (!Commerce.ObjectExtensions.isNullOrUndefined(this._templatedDialog)) {
                    this._templatedDialog.setButtonDisabledState(buttonId, disabled);
                }
            };
            ExtensionTemplatedDialogProxy.prototype.numPadInputBroker = function () {
                return this._numPadInputBroker;
            };
            return ExtensionTemplatedDialogProxy;
        }());
        Controls.ExtensionTemplatedDialogProxy = ExtensionTemplatedDialogProxy;
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var HeaderSplitView;
        (function (HeaderSplitView) {
            "use strict";
            var HeaderSplitViewBindingHandler = (function () {
                function HeaderSplitViewBindingHandler() {
                    if (!Commerce.ObjectExtensions.isFunction(HeaderSplitViewBindingHandler._viewModelFactoryMethod)) {
                        throw "Cannot create new instances of HeaderSplitViewBindingHandler until the factory method is set.";
                    }
                }
                HeaderSplitViewBindingHandler.setViewModelFactory = function (factoryMethod) {
                    HeaderSplitViewBindingHandler._viewModelFactoryMethod = factoryMethod;
                };
                HeaderSplitViewBindingHandler.prototype.init = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    var options = ko.utils.unwrapObservable(valueAccessor()) || Object.create(null);
                    var $element = $(element);
                    var divElement;
                    $element.addClass("headerSplitView");
                    ko.applyBindingsToDescendants(bindingContext, element);
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(options.data)) {
                        viewModel = options.data;
                    }
                    if (Commerce.ObjectExtensions.isFunction(options.searchClick)) {
                        options.searchClick = options.searchClick.bind(viewModel);
                    }
                    var headerSplitViewViewModel = HeaderSplitViewBindingHandler._viewModelFactoryMethod($element, options);
                    element.controlViewModel = headerSplitViewViewModel;
                    headerSplitViewViewModel.isSearchVisible(headerSplitViewViewModel.isHeaderContentVisible()
                        ? (Commerce.ObjectExtensions.isNullOrUndefined(options.searchVisible) ? true : options.searchVisible)
                        : false);
                    var vm = {
                        template: { name: "headerSplitViewTopTemplate", data: headerSplitViewViewModel }
                    };
                    if (headerSplitViewViewModel.isHeaderContentVisible()) {
                        var divElementHtml = "<div class='accentBackground width100Percent headerSplitViewHeader headerBackgroundColor' />";
                        divElement = $(divElementHtml)[0];
                        if (!Commerce.ObjectExtensions.isNullOrUndefined(options.preventInteraction)) {
                            var divElementToPrevent_1 = $(divElement);
                            if (ko.isObservable(options.preventInteraction)) {
                                var preventInteractionObservable = options.preventInteraction;
                                var preventInteractionSubscription_1 = preventInteractionObservable.subscribe(function (newValue) {
                                    Controls.PreventInteraction.PreventInteractionHelper.setInteractionState(divElementToPrevent_1, newValue);
                                });
                                ko.utils.domNodeDisposal.addDisposeCallback($element.get(0), function (e) {
                                    preventInteractionSubscription_1.dispose();
                                });
                            }
                            var preventInteraction = ko.utils.unwrapObservable(options.preventInteraction);
                            if (preventInteraction) {
                                Controls.PreventInteraction.PreventInteractionHelper.setInteractionState(divElementToPrevent_1, true);
                            }
                        }
                    }
                    else {
                        divElement = $("<div class='top0 width48' />")[0];
                    }
                    element.insertBefore(divElement, element.firstChild);
                    ko.applyBindingsToNode(divElement, vm, bindingContext);
                    divElement = $("<div />")[0];
                    element.insertBefore(divElement, element.firstChild);
                    ko.applyBindingsToNode(divElement, {
                        template: {
                            name: "headerSplitViewExpandedPaneTemplate",
                            data: headerSplitViewViewModel
                        }
                    }, bindingContext);
                    $element.find(".headerSplitViewToggleButton").each(function (index, elem) {
                        $(elem).addClass("win-splitviewpanetoggle");
                        $(elem).attr("title", Commerce.ViewModelAdapter.getResourceString("string_48"));
                        var splitViewPaneToggleOptions = {
                            splitView: element
                        };
                        ko.applyBindingsToNode(elem, { resx: { ariaLabel: "string_48" } }, bindingContext);
                        var splitViewToggle = new WinJS.UI.SplitViewPaneToggle(elem, splitViewPaneToggleOptions);
                        splitViewToggle.addEventListener("invoked", function () {
                            headerSplitViewViewModel.hideAllExtraPanels();
                            $element.find(".expandedNavButton").focus();
                        });
                    });
                    var splitViewControlOptions = {
                        openedDisplayMode: "overlay",
                        closedDisplayMode: headerSplitViewViewModel.isCompactMode() ? "none" : "inline"
                    };
                    var splitViewControl = new WinJS.UI.SplitView(element, splitViewControlOptions);
                    splitViewControl.addEventListener("afterclose", function () {
                        headerSplitViewViewModel.hideAllExtraPanels();
                    });
                    var $splitViewPaneElement = $element.find(".win-splitview-pane");
                    $splitViewPaneElement.addClass("splitViewBackgroundColor flex");
                    vm = { preventInteraction: options.preventInteraction };
                    ko.applyBindingsToNode($splitViewPaneElement[0], vm, bindingContext);
                    HeaderSplitViewBindingHandler.updateMargins($element, headerSplitViewViewModel);
                    ko.utils.domNodeDisposal.addDisposeCallback($element.get(0), function (e) {
                        element.controlViewModel.dispose();
                        element.controlViewModel = null;
                    });
                    headerSplitViewViewModel.toggleCompactMode(headerSplitViewViewModel.isCompactMode());
                    return { controlsDescendantBindings: true };
                };
                HeaderSplitViewBindingHandler.prototype.update = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                    var options = ko.utils.unwrapObservable(valueAccessor()) || Object.create(null);
                    var splitViewHeaderViewModel = element.controlViewModel;
                    splitViewHeaderViewModel.updateOptions(options);
                };
                HeaderSplitViewBindingHandler.updateMargins = function ($element, headerSplitViewViewModel) {
                    var $splitViewContentWrapper = $element.find(".win-splitview-content").addClass("col");
                    var sectionCssClasses = "grow margin0 pad0 height100Percent";
                    var $section = $splitViewContentWrapper.find("> .section");
                    var $appBar = $splitViewContentWrapper.find("> .win-appbar:visible");
                    var showAppBarLabel = Commerce.ApplicationContext.Instance.deviceConfiguration.ShowAppBarLabel;
                    if ($appBar.length > 0) {
                        if (showAppBarLabel) {
                            $splitViewContentWrapper.addClass("padBottom64");
                        }
                        else {
                            $splitViewContentWrapper.addClass("padBottom48");
                        }
                    }
                    if ($section.length !== 0) {
                        $section.addClass(sectionCssClasses);
                    }
                    else {
                        $splitViewContentWrapper.addClass(sectionCssClasses);
                    }
                };
                return HeaderSplitViewBindingHandler;
            }());
            HeaderSplitView.HeaderSplitViewBindingHandler = HeaderSplitViewBindingHandler;
        })(HeaderSplitView = Controls.HeaderSplitView || (Controls.HeaderSplitView = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var HeaderSplitView;
        (function (HeaderSplitView) {
            "use strict";
        })(HeaderSplitView = Controls.HeaderSplitView || (Controls.HeaderSplitView = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var Loader;
        (function (Loader) {
            "use strict";
            var LoaderColor;
            (function (LoaderColor) {
                LoaderColor[LoaderColor["White"] = 1] = "White";
                LoaderColor[LoaderColor["Accent"] = 2] = "Accent";
            })(LoaderColor = Loader.LoaderColor || (Loader.LoaderColor = {}));
        })(Loader = Controls.Loader || (Controls.Loader = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var Loader;
        (function (Loader) {
            "use strict";
            var LoaderType;
            (function (LoaderType) {
                LoaderType[LoaderType["Page"] = 1] = "Page";
                LoaderType[LoaderType["Nested"] = 2] = "Nested";
                LoaderType[LoaderType["Dialog"] = 3] = "Dialog";
                LoaderType[LoaderType["NestedWithBackground"] = 4] = "NestedWithBackground";
            })(LoaderType = Loader.LoaderType || (Loader.LoaderType = {}));
        })(Loader = Controls.Loader || (Controls.Loader = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var Loader;
        (function (Loader) {
            "use strict";
        })(Loader = Controls.Loader || (Controls.Loader = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var Loader;
        (function (Loader) {
            "use strict";
            var LoaderBindingHandler = (function () {
                function LoaderBindingHandler() {
                }
                LoaderBindingHandler.hasLoader = function (element, loaderType, onlyVisible) {
                    var loaderTypeClass = LoaderBindingHandler.getLoaderTypeClass(loaderType);
                    var loaders = $(element).find("." + loaderTypeClass + " > ." + LoaderBindingHandler.loaderClass);
                    var hasLoader = false;
                    if (onlyVisible) {
                        loaders.each(function (index, elem) {
                            hasLoader = hasLoader || Commerce.CSSHelpers.isVisible(elem);
                        });
                    }
                    else {
                        hasLoader = loaders.length > 0;
                    }
                    return hasLoader;
                };
                LoaderBindingHandler.prototype.init = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    var options = ko.utils.unwrapObservable(valueAccessor() || {});
                    options.color = options.color || Loader.LoaderColor.Accent;
                    options.type = options.type || Loader.LoaderType.Page;
                    options.isSmall = Commerce.ObjectExtensions.isNullOrUndefined(options.isSmall) ? false : options.isSmall;
                    var $element = $(element);
                    var data = {
                        isSmall: options.isSmall,
                        innerCircleClass: Commerce.StringExtensions.format(LoaderBindingHandler.innerCircleClassFormat, LoaderBindingHandler.colors[options.color - 1])
                    };
                    var template = {
                        name: LoaderBindingHandler.templateName,
                        data: data
                    };
                    ko.applyBindingsToNode(element, { template: template });
                    var loaderClass = LoaderBindingHandler.getLoaderTypeClass(options.type);
                    if (Commerce.StringExtensions.isNullOrWhitespace(loaderClass)) {
                        throw new Error(Commerce.StringExtensions.format("Unknown loader type {0}", options.type));
                    }
                    switch (options.type) {
                        case Loader.LoaderType.Nested:
                        case Loader.LoaderType.NestedWithBackground:
                            $element.parent().css("position", "relative");
                            break;
                    }
                    LoaderBindingHandler.setTabIndex($element, options);
                    $element.addClass(loaderClass);
                    $element.attr("aria-label", Commerce.ViewModelAdapter.getResourceString("string_525"));
                    $element.on("keydown", function (event) {
                        var data = [];
                        for (var _i = 1; _i < arguments.length; _i++) {
                            data[_i - 1] = arguments[_i];
                        }
                        if (options.type !== Loader.LoaderType.Nested) {
                            event.preventDefault();
                        }
                    });
                    LoaderBindingHandler.toggleElementVisibility($element, options);
                    return { controlsDescendantBindings: true };
                };
                LoaderBindingHandler.prototype.update = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    var $element = $(element);
                    var options = ko.utils.unwrapObservable(valueAccessor() || {});
                    LoaderBindingHandler.toggleElementVisibility($element, options);
                    ko.utils.domNodeDisposal.addDisposeCallback(element, function (e) {
                        var currentElement = element;
                        currentElement.previousFocusedElement = null;
                    });
                    return { controlsDescendantBindings: true };
                };
                LoaderBindingHandler.toggleElementVisibility = function ($element, options) {
                    var isVisible = $element.css("display") !== "none";
                    var optionVisible = ko.utils.unwrapObservable(options.visible) || false;
                    var restoreFocus = Commerce.ObjectExtensions.isBoolean(options.restoreFocus) ? options.restoreFocus : true;
                    if (optionVisible !== isVisible) {
                        $element.toggle();
                    }
                    var targetElementVisibilityState;
                    if (ko.isObservable(options.visible)) {
                        targetElementVisibilityState = options.visible;
                    }
                    else if (Commerce.ObjectExtensions.isBoolean(options.visible)) {
                        targetElementVisibilityState = ko.observable(options.visible);
                    }
                    if (!LoaderBindingHandler.isNestedLoaderType(options.type)) {
                        var currentElement = $element.get(0);
                        if (optionVisible) {
                            currentElement.previousFocusedElement = $(":focus")[0];
                            LoaderBindingHandler.tryFocus($element, targetElementVisibilityState);
                        }
                        else {
                            if (!Commerce.ObjectExtensions.isNullOrUndefined(currentElement.previousFocusedElement) && restoreFocus) {
                                setTimeout(function (elementToFocus) {
                                    LoaderBindingHandler.tryFocus(elementToFocus);
                                }, LoaderBindingHandler.DELAY_IN_MILLISECONDS_BEFORE_RESTORE_FOCUS, $(currentElement.previousFocusedElement));
                                currentElement.previousFocusedElement = null;
                            }
                        }
                    }
                };
                LoaderBindingHandler.tryFocus = function ($element, targetElementVisibilityState) {
                    if (Commerce.ObjectExtensions.isNullOrUndefined(targetElementVisibilityState)) {
                        targetElementVisibilityState = ko.observable(true);
                    }
                    Commerce.Host.instance.timers.setImmediate(function (elementToFocus) {
                        if (targetElementVisibilityState()) {
                            LoaderBindingHandler.focus(elementToFocus);
                        }
                    }, $element);
                    setTimeout(function (elementToFocus) {
                        if (targetElementVisibilityState()) {
                            LoaderBindingHandler.focus(elementToFocus);
                        }
                    }, LoaderBindingHandler.DELAY_IN_MILLISECONDS_BEFORE_FOCUS_ON_LOADER, $element);
                };
                LoaderBindingHandler.focus = function ($element) {
                    if ($element.is(":visible") && !$element.is(":focus")) {
                        $element.focus();
                    }
                };
                LoaderBindingHandler.setTabIndex = function ($element, options) {
                    var tabIndex = "tabindex";
                    if (LoaderBindingHandler.isNestedLoaderType(options.type) || (!Commerce.StringExtensions.isNullOrWhitespace($element.attr(tabIndex)))) {
                        return;
                    }
                    $element.attr(tabIndex, "-1");
                };
                LoaderBindingHandler.isNestedLoaderType = function (loaderType) {
                    return loaderType === Loader.LoaderType.Nested || loaderType === Loader.LoaderType.NestedWithBackground;
                };
                LoaderBindingHandler.getLoaderTypeClass = function (loaderType) {
                    var loaderTypeClass;
                    switch (loaderType) {
                        case Loader.LoaderType.Page:
                            loaderTypeClass = LoaderBindingHandler.pageLoaderClass;
                            break;
                        case Loader.LoaderType.Nested:
                            loaderTypeClass = LoaderBindingHandler.nestedLoaderClass;
                            break;
                        case Loader.LoaderType.NestedWithBackground:
                            loaderTypeClass = LoaderBindingHandler.nestedLoaderWithBackgroundClass;
                            break;
                        case Loader.LoaderType.Dialog:
                            loaderTypeClass = LoaderBindingHandler.dialogLoaderClass;
                            break;
                        default:
                            loaderTypeClass = null;
                            break;
                    }
                    return loaderTypeClass;
                };
                LoaderBindingHandler.DELAY_IN_MILLISECONDS_BEFORE_FOCUS_ON_LOADER = 300;
                LoaderBindingHandler.DELAY_IN_MILLISECONDS_BEFORE_RESTORE_FOCUS = 500;
                LoaderBindingHandler.pageLoaderClass = "page-loader";
                LoaderBindingHandler.nestedLoaderClass = "nested-loader";
                LoaderBindingHandler.nestedLoaderWithBackgroundClass = "nested-loader-with-background";
                LoaderBindingHandler.dialogLoaderClass = "dialog-loader";
                LoaderBindingHandler.loaderClass = "loader";
                LoaderBindingHandler.templateName = "loader-template";
                LoaderBindingHandler.innerCircleClassFormat = "inner-circle {0}";
                LoaderBindingHandler.colors = ["inner-circle-white", "accentBackground"];
                return LoaderBindingHandler;
            }());
            Loader.LoaderBindingHandler = LoaderBindingHandler;
        })(Loader = Controls.Loader || (Controls.Loader = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var Menu;
        (function (Menu) {
            "use strict";
        })(Menu = Controls.Menu || (Controls.Menu = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var Menu;
        (function (Menu) {
            "use strict";
        })(Menu = Controls.Menu || (Controls.Menu = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var Menu;
        (function (Menu) {
            "use strict";
        })(Menu = Controls.Menu || (Controls.Menu = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var Menu;
        (function (Menu) {
            "use strict";
        })(Menu = Controls.Menu || (Controls.Menu = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var Menu;
        (function (Menu) {
            "use strict";
        })(Menu = Controls.Menu || (Controls.Menu = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var Menu;
        (function (Menu) {
            "use strict";
        })(Menu = Controls.Menu || (Controls.Menu = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var Menu;
        (function (Menu) {
            "use strict";
            var MenuBindingHandler = (function () {
                function MenuBindingHandler() {
                }
                MenuBindingHandler.prototype.init = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    var options = ko.utils.unwrapObservable(valueAccessor()) || {};
                    var disposables = [];
                    $(element).addClass("menu");
                    ko.applyBindingsToDescendants(bindingContext, element);
                    if (Commerce.StringExtensions.isNullOrWhitespace(options.anchor) &&
                        Commerce.ObjectExtensions.isNullOrUndefined(options.anchorElement)) {
                        throw new Error("MenuBindingHandler: The parameter 'anchor' or 'anchorElement' must be defined");
                    }
                    if (Commerce.ObjectExtensions.isNullOrUndefined(options.placement)) {
                        options.placement = "auto";
                    }
                    if (Commerce.ObjectExtensions.isNullOrUndefined(options.alignment)) {
                        options.alignment = "center";
                    }
                    if ((options.alignment === "right" || options.alignment === "left") && Commerce.CSSHelpers.isRightToLeft()) {
                        options.alignment = (options.alignment === "right") ? "left" : "right";
                    }
                    if (Commerce.ArrayExtensions.hasElements(options.commands)) {
                        options.commands.forEach(function (value) {
                            value.onclick = value.onClick;
                        });
                    }
                    var menuWinControl = new WinJS.UI.Menu(element, options);
                    if (ko.isObservable(options.visible)) {
                        disposables.push(options.visible.subscribe(function (newValue) {
                            var menuControlReference = menuWinControl;
                            if (newValue === true) {
                                var anchorElement = void 0;
                                if (ko.isObservable(options.anchorElement) && !Commerce.ObjectExtensions.isNullOrUndefined(options.anchorElement())) {
                                    anchorElement = options.anchorElement();
                                }
                                else {
                                    anchorElement = $(options.anchor).get(0);
                                }
                                menuControlReference.show(anchorElement, options.placement, options.alignment);
                                options.visible(false);
                            }
                        }));
                    }
                    var toggleShowHide = function () {
                        if (element.winControl.hidden) {
                            element.winControl.show($(element.winControl.anchor)[0], element.winControl.placement, element.winControl.alignment);
                        }
                        else {
                            element.winControl.hide();
                        }
                    };
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(options.toggleShowHide)) {
                        options.toggleShowHide(toggleShowHide);
                    }
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(options.itemDataSource) &&
                        !Commerce.ObjectExtensions.isNullOrUndefined(options.template)) {
                        ko.applyBindingsToNode(element, {
                            template: {
                                name: options.template,
                                foreach: options.itemDataSource
                            }
                        }, this);
                    }
                    ko.utils.domNodeDisposal.addDisposeCallback(element, function (e) {
                        if (Commerce.ArrayExtensions.hasElements(disposables)) {
                            disposables.forEach(function (disposableObject) {
                                Commerce.ObjectExtensions.tryDispose(disposableObject);
                            });
                        }
                        if (element.winControl) {
                            Commerce.ObjectExtensions.tryDispose(element.winControl);
                        }
                    });
                    return { controlsDescendantBindings: true };
                };
                return MenuBindingHandler;
            }());
            Menu.MenuBindingHandler = MenuBindingHandler;
        })(Menu = Controls.Menu || (Controls.Menu = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var Menu;
        (function (Menu) {
            "use strict";
            var MenuCommandBindingHandler = (function () {
                function MenuCommandBindingHandler() {
                }
                MenuCommandBindingHandler.prototype.init = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    var options = ko.utils.unwrapObservable(valueAccessor()) || {};
                    if (Commerce.ObjectExtensions.isString(options.label) && !Commerce.StringExtensions.isNullOrWhitespace(options.label)) {
                        options.tooltip = options.label;
                    }
                    new WinJS.UI.MenuCommand(element, options);
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(element.winControl)) {
                        var onclickHandler_2 = options.onClick;
                        var menuCommand_1 = element.winControl;
                        if (menuCommand_1.type === "toggle") {
                            options.onClick = function (eventArgs) {
                                var childNodes = $(element).parent().children();
                                childNodes.each(function (index, childElement) {
                                    var item = childElement.winControl;
                                    if (item.id === options.id) {
                                        item.selected = true;
                                    }
                                    else {
                                        item.selected = false;
                                    }
                                });
                                if (Commerce.ObjectExtensions.isFunction(onclickHandler_2)) {
                                    onclickHandler_2.call(viewModel, viewModel, { selected: menuCommand_1.selected });
                                }
                            };
                            menuCommand_1.onclick = options.onClick;
                        }
                        else if (Commerce.ObjectExtensions.isFunction(onclickHandler_2)) {
                            menuCommand_1.onclick = function () {
                                onclickHandler_2.call(viewModel, viewModel, { selected: menuCommand_1.selected });
                            };
                        }
                    }
                    ko.utils.domNodeDisposal.addDisposeCallback(element, function (e) {
                        if (element.winControl) {
                            element.winControl.dispose();
                        }
                    });
                };
                return MenuCommandBindingHandler;
            }());
            Menu.MenuCommandBindingHandler = MenuCommandBindingHandler;
        })(Menu = Controls.Menu || (Controls.Menu = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var Menu;
        (function (Menu) {
            "use strict";
            var ToggleMenuBindingHandler = (function (_super) {
                __extends(ToggleMenuBindingHandler, _super);
                function ToggleMenuBindingHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                ToggleMenuBindingHandler.prototype.init = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    var options = ko.utils.unwrapObservable(valueAccessor()) || {};
                    if (Commerce.ArrayExtensions.hasElements(options.commands)) {
                        options.commands.forEach(function (menuCommand) {
                            var menuCommandOnClick = menuCommand.onClick;
                            menuCommand.onClick = function (eventArgs) {
                                var currentMenuCommand = $(eventArgs.target).closest(Menu.ToggleMenuCommandBindingHandler.TOGGLE_COMMAND_BUTTON_SELECTOR).get(0).winControl;
                                Menu.ToggleMenuCommandBindingHandler.selectCurrentUnselectOther(currentMenuCommand, menuCommandOnClick);
                            };
                        });
                    }
                    _super.prototype.init.call(this, element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
                };
                return ToggleMenuBindingHandler;
            }(Menu.MenuBindingHandler));
            Menu.ToggleMenuBindingHandler = ToggleMenuBindingHandler;
        })(Menu = Controls.Menu || (Controls.Menu = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var Menu;
        (function (Menu) {
            "use strict";
            var ToggleMenuCommandBindingHandler = (function () {
                function ToggleMenuCommandBindingHandler() {
                }
                ToggleMenuCommandBindingHandler.selectCurrentUnselectOther = function (currentMenuCommand, menuCommandOnClick) {
                    var childNodes = $(currentMenuCommand.element).parent().children(ToggleMenuCommandBindingHandler.TOGGLE_COMMAND_BUTTON_SELECTOR);
                    childNodes.each(function (index, childElement) {
                        var menuCommand = childElement.winControl;
                        menuCommand.selected = menuCommand.id === currentMenuCommand.id;
                    });
                    if (Commerce.ObjectExtensions.isFunction(menuCommandOnClick)) {
                        menuCommandOnClick({ id: currentMenuCommand.id, selected: currentMenuCommand.selected });
                    }
                };
                ToggleMenuCommandBindingHandler.prototype.init = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    var options = ko.utils.unwrapObservable(valueAccessor()) || {};
                    options.type = "toggle";
                    var menuCommandWinControl = new WinJS.UI.MenuCommand(element, options);
                    menuCommandWinControl.onclick = function (eventArgs) {
                        var menuCommandOnClick = options.onClick;
                        var currentMenuCommand = element.winControl;
                        ToggleMenuCommandBindingHandler.selectCurrentUnselectOther(currentMenuCommand, menuCommandOnClick);
                    };
                    menuCommandWinControl = null;
                    ko.utils.domNodeDisposal.addDisposeCallback(element, function (e) {
                        if (element.winControl) {
                            element.winControl.dispose();
                        }
                    });
                };
                ToggleMenuCommandBindingHandler.TOGGLE_COMMAND_BUTTON_SELECTOR = ".win-command-toggle";
                return ToggleMenuCommandBindingHandler;
            }());
            Menu.ToggleMenuCommandBindingHandler = ToggleMenuCommandBindingHandler;
        })(Menu = Controls.Menu || (Controls.Menu = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var NumPad;
        (function (NumPad) {
            "use strict";
            var NumPadBindingHandler = (function () {
                function NumPadBindingHandler() {
                    this._handlers = [];
                    this.init = this.init.bind(this);
                    this.update = this.update.bind(this);
                    this._observerObject = new MutationObserver(this._updateNumpadInputAriaLabel.bind(this));
                }
                NumPadBindingHandler.prototype.init = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    var _this = this;
                    ko.applyBindingsToNode(element, { template: this.templateId });
                    var $element = $(element);
                    var options = ko.utils.unwrapObservable(valueAccessor() || Object.create(null));
                    if (Commerce.ObjectExtensions.isNullOrUndefined(options.inputDataBinding) && Commerce.ObjectExtensions.isNullOrUndefined(options.labelDataBinding)) {
                        throw new Error("Atleast one of the inputDataBinding and labelDataBinding parameters has to be specified for numpad control.");
                    }
                    var state = this.createState(element, options, viewModel);
                    $element.addClass("numpad flex stretch");
                    this.setNumpadStateOfElement($element, state);
                    this.initNumPadControlInput(options, state);
                    this.initNumPadControlLabel(options, $element);
                    this.getInputHandlers(options).forEach(function (handler) {
                        _this.addHandler(handler);
                    });
                    this.attachToButtonEvent($element);
                    this.attachToKeyboardEvent($element, state.inputElement);
                    this.attachToNumpadInputSource($element, options.numPadInputSource);
                    this.attachClearMarkToTarget($element, state.inputElement);
                    this._initializeObserver(state.inputElement);
                    this.updateInputElementState(state, false);
                    this.updateValues(state);
                    ko.utils.domNodeDisposal.addDisposeCallback($element.get(0), function () {
                        _this._observerObject.disconnect();
                    });
                    return { controlsDescendantBindings: true };
                };
                NumPadBindingHandler.prototype.update = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    var $element = $(element);
                    var state = this.getNumpadStateOfElement($element);
                    this.updateValues(state);
                };
                NumPadBindingHandler.prototype.getNumpadStateOfElement = function ($element) {
                    return $element.data(NumPadBindingHandler.STATE_KEY_NAME);
                };
                NumPadBindingHandler.prototype.setNumpadStateOfElement = function ($element, value) {
                    $element.data(NumPadBindingHandler.STATE_KEY_NAME, value);
                };
                Object.defineProperty(NumPadBindingHandler.prototype, "templateId", {
                    get: function () {
                        throw "Abstract";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NumPadBindingHandler.prototype, "$numPadLabel", {
                    get: function () {
                        return this._$numPadLabel;
                    },
                    enumerable: true,
                    configurable: true
                });
                NumPadBindingHandler.prototype.getInputHandlers = function (options) {
                    return [
                        NumPad.InputHandlers.clear,
                        NumPad.InputHandlers.backspace,
                        NumPad.InputHandlers.enter,
                        NumPad.InputHandlers.decimalSeparator
                    ];
                };
                NumPadBindingHandler.prototype.createState = function (numpad, options, callerContext) {
                    return new NumPad.NumPadState(numpad, options, callerContext);
                };
                NumPadBindingHandler.prototype.updateState = function (state) {
                    var parsedValue = this.parse(state, state.textContent);
                    if (!Commerce.StringExtensions.isNullOrWhitespace(state.textContent) && Commerce.StringExtensions.isNullOrWhitespace(parsedValue)) {
                        state.textContent = state.oldTextContent;
                        parsedValue = this.parse(state, state.textContent);
                    }
                    state.oldTextContent = state.textContent;
                    var value = state.options.value;
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(value)) {
                        if (typeof value === "string") {
                            value = parsedValue;
                        }
                        else {
                            value(parsedValue);
                        }
                    }
                    state.value = parsedValue;
                    this.updateInputElementState(state);
                };
                NumPadBindingHandler.prototype._initializeObserver = function (inputElement) {
                    this._observerObject.observe(inputElement, {
                        attributes: true,
                        attributeFilter: ["value", "readonly", "aria-label"]
                    });
                };
                NumPadBindingHandler.prototype._updateNumpadInputAriaLabel = function (mutationRecordsList) {
                    var _this = this;
                    mutationRecordsList.forEach(function (mutationRecord) {
                        var inputElement = mutationRecord.target;
                        if (Commerce.ObjectExtensions.isNullOrUndefined(inputElement)) {
                            return;
                        }
                        var ariaLabel = inputElement.getAttribute("aria-label");
                        if (Commerce.StringExtensions.isNullOrWhitespace(ariaLabel)) {
                            return;
                        }
                        var editingTextString = Commerce.ViewModelAdapter.getResourceString("string_4398");
                        var indexOfEditing = ariaLabel.indexOf(editingTextString);
                        if (indexOfEditing >= 0) {
                            ariaLabel = ariaLabel.substr(0, indexOfEditing);
                        }
                        if (inputElement.readOnly) {
                            inputElement.setAttribute("role", "presentation");
                            ariaLabel = ariaLabel + editingTextString + inputElement.value;
                        }
                        else {
                            inputElement.setAttribute("role", "textbox");
                        }
                        _this._observerObject.disconnect();
                        inputElement.setAttribute("aria-label", ariaLabel);
                        _this._initializeObserver(inputElement);
                    });
                };
                NumPadBindingHandler.prototype.initNumPadControlInput = function (options, state) {
                    var inputDataBinding = options.inputDataBinding;
                    if (Commerce.ObjectExtensions.isNullOrUndefined(inputDataBinding)) {
                        inputDataBinding = {};
                    }
                    if (Commerce.ObjectExtensions.isNullOrUndefined(inputDataBinding.resx) && !Commerce.ObjectExtensions.isNullOrUndefined(options.labelDataBinding)) {
                        Object.keys(options.labelDataBinding).forEach(function (memberName) {
                            switch (memberName) {
                                case "resx":
                                    inputDataBinding.resx = { ariaLabel: options.labelDataBinding[memberName].textContent };
                                    break;
                                case "text":
                                    inputDataBinding.resx = { ariaLabel: options.labelDataBinding[memberName] };
                                    break;
                            }
                        });
                    }
                    if (Commerce.ObjectExtensions.isNullOrUndefined(inputDataBinding.resx)) {
                        return;
                    }
                    ko.applyBindingsToNode(state.inputElement, inputDataBinding);
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(options.autoFocusOnInput) && options.autoFocusOnInput) {
                        setTimeout(function () {
                            state.inputElement.focus();
                        }, 0);
                    }
                };
                NumPadBindingHandler.prototype.initNumPadControlLabel = function (options, $numPad) {
                    var labelDataBinding = options.labelDataBinding;
                    if (Commerce.ObjectExtensions.isNullOrUndefined(labelDataBinding)) {
                        return;
                    }
                    var $label = $numPad.find(".numpad-control-label");
                    ko.applyBindingsToNode($label.get(0), labelDataBinding);
                    this._$numPadLabel = $label;
                };
                NumPadBindingHandler.prototype.updateValues = function (state) {
                    var newValue = ko.utils.unwrapObservable(state.options.value);
                    if (Commerce.ObjectExtensions.isNullOrUndefined(newValue)) {
                        newValue = Commerce.StringExtensions.EMPTY;
                    }
                    var parsedValue = this.parse(state, newValue);
                    var parsedTextContent = this.parse(state, state.textContent);
                    if ((parsedTextContent !== parsedValue) || (Commerce.StringExtensions.isEmpty(parsedValue))) {
                        state.value = parsedValue;
                        state.oldTextContent = state.textContent = Commerce.StringExtensions.EMPTY;
                        this.updateInputElementState(state);
                    }
                };
                NumPadBindingHandler.prototype.addHandler = function (handler) {
                    if (this._handlers.some(function (h) { return h === handler; })) {
                        return;
                    }
                    this._handlers.push(handler);
                };
                NumPadBindingHandler.prototype.attachClearMarkToTarget = function ($numpad, target) {
                    var _this = this;
                    if (Commerce.ObjectExtensions.isNullOrUndefined(target)) {
                        return;
                    }
                    ko.applyBindingsToNode(target, {
                        clearMark: {
                            fontSize: "24px",
                            handler: function () {
                                _this.handleButtonEvent($numpad, "clear");
                            }
                        }
                    });
                };
                NumPadBindingHandler.prototype.attachToButtonEvent = function ($element) {
                    var _this = this;
                    $element.find("button").on("mousedown keydown", function (event) {
                        if ((event.type === "keydown") && (!_this.isEnterOrWhitespace(event.originalEvent))) {
                            return;
                        }
                        var state = _this.getNumpadStateOfElement($element);
                        if (document.activeElement === state.inputElement) {
                            state.ignoreInputElementBlurOnce = true;
                        }
                        var key = _this.getButtonKeyFromEvent(event);
                        _this.handleButtonEvent($element, key);
                        _this.focusInputOnAbc($element, key);
                    });
                };
                NumPadBindingHandler.prototype.focusInputOnAbc = function ($numpad, key) {
                    if (key === "abc") {
                        var state_2 = this.getNumpadStateOfElement($numpad);
                        if (!state_2.inputElement.readOnly) {
                            setTimeout(function () {
                                state_2.inputElement.focus();
                            }, 0);
                        }
                    }
                };
                NumPadBindingHandler.prototype.getButtonKeyFromEvent = function (event) {
                    var $buttonElement = $(event.target);
                    if ($buttonElement.is(":button") === false) {
                        $buttonElement = $buttonElement.closest(":button");
                    }
                    return $buttonElement.val();
                };
                NumPadBindingHandler.prototype.handleButtonEvent = function ($element, key) {
                    var state = this.getNumpadStateOfElement($element);
                    this._handleKey(state, key, null, NumPad.KeySource.UI);
                };
                NumPadBindingHandler.prototype.attachToKeyboardEvent = function ($element, textInput) {
                    var _this = this;
                    if (Commerce.ObjectExtensions.isNullOrUndefined(textInput)) {
                        return;
                    }
                    var $textInput = $(textInput);
                    $textInput.keydown(function (event) {
                        _this.handleKeyboardEvent($element, event);
                    });
                    $textInput.keypress(function (event) {
                        _this.handleKeyboardEvent($element, event);
                    });
                    $textInput.bind("input", function (event) {
                        var state = _this.getNumpadStateOfElement($element);
                        state.textContent = $(event.target).val();
                        _this.updateState(state);
                        event.preventDefault();
                        event.stopPropagation();
                    });
                    $textInput.blur(function (event) {
                        var state = _this.getNumpadStateOfElement($element);
                        if (!state.alwaysAllowTargetInputEnabled) {
                            if (state.ignoreInputElementBlurOnce) {
                                state.ignoreInputElementBlurOnce = false;
                                return;
                            }
                            state.inputElement.readOnly = true;
                            _this.updateInputElementState(state);
                        }
                    });
                };
                NumPadBindingHandler.prototype.attachToNumpadInputSource = function ($element, subscriber) {
                    var _this = this;
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(subscriber)) {
                        var listener_1 = function (event) {
                            if (!_this.ignoreNumpadInputSourceEvent(event, $element)) {
                                return _this.handleKeyboardEvent($element, event);
                            }
                            return false;
                        };
                        subscriber.subscribe(listener_1);
                        ko.utils.domNodeDisposal.addDisposeCallback($element.get(0), function () {
                            subscriber.unsubscribe(listener_1);
                        });
                    }
                };
                NumPadBindingHandler.prototype.handleKeyboardEvent = function ($element, event) {
                    var state = this.getNumpadStateOfElement($element);
                    var handled = false;
                    if (!this.ignoreKeyboardEvent(event, state)) {
                        handled = this._handleKey(state, null, event.which, NumPad.KeySource.KEYBOARD);
                    }
                    if (handled) {
                        event.preventDefault();
                        event.stopImmediatePropagation();
                    }
                    return handled;
                };
                NumPadBindingHandler.prototype._handleKey = function (state, uiCode, keyboardCode, keySource) {
                    var handledBy = null;
                    var handled = this._handlers.some(function (handler) {
                        var result = handler(state, uiCode, keyboardCode, keySource);
                        if (result) {
                            handledBy = handler;
                        }
                        return result;
                    });
                    if (handled && (handledBy !== NumPad.InputHandlers.enter)) {
                        this.updateState(state);
                    }
                    return handled;
                };
                NumPadBindingHandler.prototype.updateInputElementState = function (state, adjustFont) {
                    if (adjustFont === void 0) { adjustFont = true; }
                    if (Commerce.ObjectExtensions.isNullOrUndefined(state.inputElement)) {
                        return;
                    }
                    this.adjustPlaceholder(state.inputElement);
                    var targetReadonlyClass = "numpad-control-input-readonly";
                    if (state.inputElement.readOnly) {
                        state.inputElement.classList.add(targetReadonlyClass);
                    }
                    else {
                        state.inputElement.classList.remove(targetReadonlyClass);
                    }
                    if (adjustFont) {
                        this.adjustFontSizeToContainer(state.inputElement);
                    }
                    state.updateClearMark();
                };
                NumPadBindingHandler.prototype.adjustPlaceholder = function (element) {
                    var targetPlaceholderClass = "numpad-control-input-placeholder";
                    var targetClassList = element.classList;
                    if (element.clientWidth > 0) {
                        element.style.fontSize = null;
                    }
                    if (Commerce.StringExtensions.isNullOrWhitespace(element.value)) {
                        if (Commerce.StringExtensions.isNullOrWhitespace(element.dataset[NumPadBindingHandler.ORIGINAL_FONT_SIZE_KEY])) {
                            var computedStyle = window.getComputedStyle(element, null);
                            element.dataset[NumPadBindingHandler.ORIGINAL_FONT_SIZE_KEY] = computedStyle.fontSize;
                        }
                        targetClassList.add(targetPlaceholderClass);
                    }
                    else {
                        targetClassList.remove(targetPlaceholderClass);
                    }
                };
                NumPadBindingHandler.prototype.adjustFontSizeToContainer = function (element) {
                    if (element.clientWidth <= 0) {
                        return;
                    }
                    var MIN_FONT_SIZE = 6;
                    var measuringDiv = document.createElement("div");
                    var measuringDivStyle = measuringDiv.style;
                    measuringDivStyle.position = "absolute";
                    measuringDivStyle.top = "0";
                    measuringDivStyle.left = "0";
                    measuringDivStyle.width = "auto";
                    measuringDivStyle.height = "auto";
                    measuringDivStyle.display = "block";
                    measuringDivStyle.visibility = "hidden";
                    var computedStyle = window.getComputedStyle(element, null);
                    measuringDivStyle.font = computedStyle.font;
                    measuringDivStyle.fontFamily = computedStyle.fontFamily;
                    measuringDivStyle.fontStyle = computedStyle.fontStyle;
                    measuringDivStyle.fontSize = computedStyle.fontSize;
                    measuringDivStyle.fontWeight = computedStyle.fontWeight;
                    measuringDivStyle.fontVariant = computedStyle.fontVariant;
                    measuringDivStyle.fontFeatureSettings = computedStyle.fontFeatureSettings;
                    measuringDivStyle.fontStretch = computedStyle.fontStretch;
                    measuringDivStyle.whiteSpace = computedStyle.whiteSpace;
                    measuringDivStyle.padding = computedStyle.padding;
                    measuringDivStyle.paddingBottom = computedStyle.paddingBottom;
                    measuringDivStyle.paddingTop = computedStyle.paddingTop;
                    measuringDivStyle.paddingLeft = computedStyle.paddingLeft;
                    measuringDivStyle.paddingRight = computedStyle.paddingRight;
                    var originalFontSize = parseInt(element.dataset[NumPadBindingHandler.ORIGINAL_FONT_SIZE_KEY], 10);
                    if (Commerce.StringExtensions.isNullOrWhitespace(element.value)) {
                        measuringDiv.innerText = element.placeholder;
                        originalFontSize = parseInt(computedStyle.fontSize, 10);
                    }
                    else {
                        measuringDiv.innerText = element.value;
                    }
                    document.body.appendChild(measuringDiv);
                    while (measuringDiv.clientWidth < element.clientWidth) {
                        var fontSize = parseInt(measuringDivStyle.fontSize, 10);
                        if (fontSize >= originalFontSize) {
                            break;
                        }
                        measuringDivStyle.fontSize = fontSize + 1 + "px";
                    }
                    while ((measuringDiv.clientWidth > element.clientWidth) && (measuringDiv.clientWidth > 0)) {
                        var fontSize = parseInt(measuringDivStyle.fontSize, 10);
                        if (fontSize <= MIN_FONT_SIZE) {
                            break;
                        }
                        measuringDivStyle.fontSize = fontSize - 1 + "px";
                    }
                    if (measuringDiv.clientWidth > 0) {
                        element.style.fontSize = measuringDivStyle.fontSize;
                    }
                    document.body.removeChild(measuringDiv);
                };
                NumPadBindingHandler.prototype.parse = function (state, valueToParse) {
                    if (Commerce.ObjectExtensions.isNullOrUndefined(state.options.parser)) {
                        return valueToParse;
                    }
                    return state.options.parser.parse(valueToParse, { decimalPrecision: state.getDecimalPrecision() });
                };
                NumPadBindingHandler.prototype.ignoreKeyboardEvent = function (event, state) {
                    var keyCode = event.keyCode;
                    var isEnter = keyCode === 13;
                    var ignore = false;
                    switch (event.type) {
                        case "keydown":
                            var specialKeysOnKeydownExceptBackspace = (event.charCode === 0) && (keyCode !== 8) && !isEnter;
                            ignore = ignore || specialKeysOnKeydownExceptBackspace;
                            break;
                        case "keypress":
                            ignore = ignore || Commerce.ObjectExtensions.isUndefined(keyCode);
                            ignore = ignore || isEnter;
                            break;
                    }
                    ignore = ignore || (!state.inputElement.readOnly && !isEnter && !state.alwaysAllowTargetInputEnabled);
                    return ignore;
                };
                NumPadBindingHandler.prototype.isInputField = function (event) {
                    return Commerce.Peripherals.KeyboardEventAggregator.isInputField(event.srcElement);
                };
                NumPadBindingHandler.prototype.isButton = function (event) {
                    var element = event.srcElement;
                    if (Commerce.ObjectExtensions.isNullOrUndefined(element)) {
                        return false;
                    }
                    return (element.tagName === "BUTTON");
                };
                NumPadBindingHandler.prototype.isActiveHyperlink = function (event) {
                    var anchor = event.srcElement;
                    if (Commerce.ObjectExtensions.isNullOrUndefined(anchor)) {
                        return false;
                    }
                    return (anchor.tagName === "A") && (!Commerce.StringExtensions.isNullOrWhitespace(anchor.href));
                };
                NumPadBindingHandler.prototype.isCheckbox = function (event) {
                    var input = event.srcElement;
                    if (Commerce.ObjectExtensions.isNullOrUndefined(input)) {
                        return false;
                    }
                    return (input.tagName === "INPUT" && input.type === "checkbox");
                };
                NumPadBindingHandler.prototype.isEnter = function (event) {
                    return event.which === 13;
                };
                NumPadBindingHandler.prototype.isWhitespace = function (event) {
                    return event.which === 32;
                };
                NumPadBindingHandler.prototype.isEnterOrWhitespace = function (event) {
                    return this.isEnter(event) || this.isWhitespace(event);
                };
                NumPadBindingHandler.prototype.isWinElementInFocus = function (event) {
                    var $srcElement = $(event.srcElement);
                    if ($srcElement.hasClass("win-itemcontainer") && ($srcElement.children(".win-itembox.win-focused").length > 0)) {
                        return true;
                    }
                    if ($srcElement.hasClass("win-item") && ($srcElement.closest(".win-itembox.win-focused").length > 0)) {
                        return true;
                    }
                    return false;
                };
                NumPadBindingHandler.prototype.isMarkedForIgnore = function (event) {
                    var $srcElement = $(event.srcElement);
                    var data = $srcElement.data("retail-numpad-ignore-keys");
                    data = Commerce.StringExtensions.isNullOrWhitespace(data) ? data : data.toLowerCase();
                    switch (data) {
                        case "all":
                            return true;
                        case "enter":
                            return this.isEnter(event);
                        case "whitespace":
                            return this.isWhitespace(event);
                        case "enterorwhitespace":
                            return this.isEnterOrWhitespace(event);
                        default:
                            return false;
                    }
                };
                NumPadBindingHandler.prototype._isElementHidden = function (element) {
                    var isHidden = true;
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(element)) {
                        var $element = $(element);
                        isHidden = !$element.is(":visible") || ($element.css("visibility") === "hidden");
                    }
                    return isHidden;
                };
                NumPadBindingHandler.prototype.ignoreNumpadInputSourceEvent = function (event, $numpad) {
                    var state = this.getNumpadStateOfElement($numpad);
                    return (!state.inputElement.readOnly && !state.alwaysAllowTargetInputEnabled)
                        || (this._isElementHidden(state.numPadButtons) && this._isElementHidden(state.inputElement))
                        || this.isInputField(event)
                        || (this.isButton(event) && this.isEnterOrWhitespace(event))
                        || (this.isCheckbox(event) && this.isWhitespace(event))
                        || (this.isWinElementInFocus(event) && this.isEnterOrWhitespace(event))
                        || (this.isActiveHyperlink(event) && this.isEnter(event))
                        || this.isMarkedForIgnore(event);
                };
                NumPadBindingHandler.STATE_KEY_NAME = "BaseNumPadKnockoutHandlerState";
                NumPadBindingHandler.ORIGINAL_FONT_SIZE_KEY = "axRetailOriginalFontSize";
                return NumPadBindingHandler;
            }());
            NumPad.NumPadBindingHandler = NumPadBindingHandler;
        })(NumPad = Controls.NumPad || (Controls.NumPad = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var NumPad;
        (function (NumPad) {
            "use strict";
            var AlphanumericNumPadBindingHandler = (function (_super) {
                __extends(AlphanumericNumPadBindingHandler, _super);
                function AlphanumericNumPadBindingHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                AlphanumericNumPadBindingHandler.prototype.getInputHandlers = function (options) {
                    return [
                        NumPad.InputHandlers.clear,
                        NumPad.InputHandlers.abc
                    ]
                        .concat(_super.prototype.getInputHandlers.call(this, options))
                        .concat([NumPad.InputHandlers.anyText]);
                };
                Object.defineProperty(AlphanumericNumPadBindingHandler.prototype, "templateId", {
                    get: function () {
                        return "numberpad-alphanumeric-template";
                    },
                    enumerable: true,
                    configurable: true
                });
                return AlphanumericNumPadBindingHandler;
            }(NumPad.NumPadBindingHandler));
            NumPad.AlphanumericNumPadBindingHandler = AlphanumericNumPadBindingHandler;
        })(NumPad = Controls.NumPad || (Controls.NumPad = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var NumPad;
        (function (NumPad) {
            "use strict";
            var NumPadState = (function () {
                function NumPadState(element, options, callerContext) {
                    this.inputElement = null;
                    this.numPadButtons = null;
                    this.options = options || Object.create(null);
                    this._element = element;
                    this._callerContext = callerContext;
                    this.initializeState();
                }
                NumPadState.setTriggerEventMethod = function (triggerEventMethod) {
                    NumPadState._triggerEvent = triggerEventMethod;
                };
                Object.defineProperty(NumPadState.prototype, "element", {
                    get: function () {
                        return this._element;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NumPadState.prototype, "value", {
                    get: function () {
                        if (this.inputElement) {
                            return this.inputElement.value = this._value;
                        }
                        return this._value;
                    },
                    set: function (newValue) {
                        this._value = newValue;
                        if (this.inputElement) {
                            var oldValue = this.inputElement.value;
                            if (oldValue !== newValue) {
                                this.inputElement.value = newValue;
                            }
                            this.updateClearMark();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                NumPadState.prototype.updateClearMark = function () {
                    $(this.inputElement).trigger("ax-retail-clearMark-toggle");
                };
                NumPadState.prototype.getDecimalPrecision = function () {
                    var decimalPrecision = ko.utils.unwrapObservable(this.options.decimalPrecision);
                    return Commerce.ObjectExtensions.isNumber(decimalPrecision) ? decimalPrecision : Number.MAX_VALUE;
                };
                NumPadState.prototype.getResult = function () {
                    return { value: this.value };
                };
                NumPadState.prototype.clearState = function () {
                    this.oldTextContent = this.textContent = Commerce.StringExtensions.EMPTY;
                };
                NumPadState.prototype.initializeState = function (clearOnEnter) {
                    var _this = this;
                    if (clearOnEnter === void 0) { clearOnEnter = false; }
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(this.options.onEnter)) {
                        var originalOnEnter_1 = this.options.onEnter;
                        this.options.onEnter = function (result) {
                            originalOnEnter_1.call(_this._callerContext, result);
                            if (clearOnEnter) {
                                _this.clearState();
                            }
                            if (!Commerce.StringExtensions.isNullOrWhitespace(result.value)) {
                                Commerce.ViewModelAdapter.raiseTaskRecorderEvent(_this.element);
                            }
                            NumPadState._triggerEvent(_this.element, NumPad.InteractionEvents.NumpadEnter);
                        };
                    }
                    this.numPadButtons = $(this._element).find(NumPadState.NUMPAD_CONTROL_BUTTONS_CLASS)[0];
                    this.inputElement = $(this._element).find(".numpad-control-input")[0];
                    this.ignoreInputElementBlurOnce = false;
                    this.inputElement.readOnly = true;
                    this.alwaysAllowTargetInputEnabled = false;
                    this.initializeContent(this.inputElement.value);
                };
                NumPadState.prototype.initializeContent = function (content) {
                    if (Commerce.StringExtensions.isNullOrWhitespace(content)) {
                        content = Commerce.StringExtensions.EMPTY;
                    }
                    this._value = this.oldTextContent = this.textContent = content;
                };
                NumPadState.NUMPAD_CONTROL_BUTTONS_CLASS = ".numpad-control-buttons";
                return NumPadState;
            }());
            NumPad.NumPadState = NumPadState;
        })(NumPad = Controls.NumPad || (Controls.NumPad = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var NumPad;
        (function (NumPad) {
            "use strict";
            var CartNumPadModes;
            (function (CartNumPadModes) {
                CartNumPadModes[CartNumPadModes["QuantityOrProduct"] = 0] = "QuantityOrProduct";
                CartNumPadModes[CartNumPadModes["Product"] = 1] = "Product";
            })(CartNumPadModes = NumPad.CartNumPadModes || (NumPad.CartNumPadModes = {}));
            var KeySource;
            (function (KeySource) {
                KeySource[KeySource["UI"] = 0] = "UI";
                KeySource[KeySource["KEYBOARD"] = 1] = "KEYBOARD";
            })(KeySource = NumPad.KeySource || (NumPad.KeySource = {}));
            var CartNumPadState = (function (_super) {
                __extends(CartNumPadState, _super);
                function CartNumPadState() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(CartNumPadState.prototype, "hasDisplayTitleAboveControlsChanged", {
                    get: function () {
                        return this.isValueDifferent(this.lastDisplayTitleAboveControls, this.currentDisplayTitleAboveControls);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CartNumPadState.prototype, "hasPlaceholderChanged", {
                    get: function () {
                        return this.isValueDifferent(this.lastPlaceholder, this.currentPlaceholder);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CartNumPadState.prototype, "hasHideButtonsChanged", {
                    get: function () {
                        return this.isValueDifferent(this.lastHideButtons, this.currentHideButtons);
                    },
                    enumerable: true,
                    configurable: true
                });
                CartNumPadState.prototype.getResult = function () {
                    return { value: this.value, quantity: this.quantity };
                };
                CartNumPadState.prototype.updateState = function (displayTitleAboveControls, placeholder, hideButtons) {
                    this.lastDisplayTitleAboveControls = this.currentDisplayTitleAboveControls;
                    this.lastPlaceholder = this.currentPlaceholder;
                    this.lastHideButtons = this.currentHideButtons;
                    this.currentDisplayTitleAboveControls = displayTitleAboveControls;
                    this.currentPlaceholder = placeholder;
                    this.currentHideButtons = hideButtons;
                };
                CartNumPadState.prototype.initializeState = function (clearOnEnter) {
                    if (clearOnEnter === void 0) { clearOnEnter = false; }
                    _super.prototype.initializeState.call(this, true);
                    this.quantity = undefined;
                    this.numPadMode = CartNumPadModes.QuantityOrProduct;
                    this.lastDisplayTitleAboveControls = undefined;
                    this.lastPlaceholder = undefined;
                    this.lastHideButtons = undefined;
                };
                CartNumPadState.prototype.clearState = function () {
                    _super.prototype.clearState.call(this);
                    this.quantity = undefined;
                    this.numPadMode = CartNumPadModes.QuantityOrProduct;
                };
                CartNumPadState.prototype.isValueDifferent = function (val1, val2) {
                    var isSame = false;
                    var isVal1NullOrUndefined = Commerce.ObjectExtensions.isNullOrUndefined(val1);
                    var isVal2NullOrUndefined = Commerce.ObjectExtensions.isNullOrUndefined(val2);
                    if (isVal1NullOrUndefined || isVal2NullOrUndefined) {
                        isSame = isVal1NullOrUndefined && isVal2NullOrUndefined;
                    }
                    else {
                        isSame = val1 === val2;
                    }
                    return !isSame;
                };
                return CartNumPadState;
            }(NumPad.NumPadState));
            NumPad.CartNumPadState = CartNumPadState;
        })(NumPad = Controls.NumPad || (Controls.NumPad = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var NumPad;
        (function (NumPad) {
            "use strict";
            var CurrencyNumPadBindingHandler = (function (_super) {
                __extends(CurrencyNumPadBindingHandler, _super);
                function CurrencyNumPadBindingHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                CurrencyNumPadBindingHandler.prototype.getInputHandlers = function (options) {
                    return _super.prototype.getInputHandlers.call(this, options).concat([
                        NumPad.InputHandlers.toggleMinus,
                        NumPad.InputHandlers.numbers
                    ]);
                };
                CurrencyNumPadBindingHandler.prototype.createState = function (element, options, callerContext) {
                    options.parser = options.parser || new Commerce.DecimalNotRequiredParser();
                    options.decimalPrecision = options.decimalPrecision
                        || Commerce.NumberExtensions.getDecimalPrecision(Commerce.ApplicationContext.Instance.deviceConfiguration.Currency);
                    return _super.prototype.createState.call(this, element, options, callerContext);
                };
                Object.defineProperty(CurrencyNumPadBindingHandler.prototype, "templateId", {
                    get: function () {
                        return "numberpad-currency-template";
                    },
                    enumerable: true,
                    configurable: true
                });
                return CurrencyNumPadBindingHandler;
            }(NumPad.NumPadBindingHandler));
            NumPad.CurrencyNumPadBindingHandler = CurrencyNumPadBindingHandler;
        })(NumPad = Controls.NumPad || (Controls.NumPad = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var NumPad;
        (function (NumPad) {
            "use strict";
        })(NumPad = Controls.NumPad || (Controls.NumPad = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var NumPad;
        (function (NumPad) {
            "use strict";
        })(NumPad = Controls.NumPad || (Controls.NumPad = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var NumPad;
        (function (NumPad) {
            "use strict";
            var InputHandlers = (function () {
                function InputHandlers() {
                }
                InputHandlers.enter = function (state, uiCode, keyboardCode, source) {
                    if ((uiCode === "enter") || (keyboardCode === 13)) {
                        Commerce.RetailLogger.librariesNumpadEnterKey(state.value);
                        if (!Commerce.ObjectExtensions.isNullOrUndefined(state.options.onEnter)) {
                            state.options.onEnter(state.getResult());
                        }
                        return true;
                    }
                    return false;
                };
                InputHandlers.toggleMinus = function (state, uiCode, keyboardCode, source) {
                    var minusChar = "-";
                    var isNumber = !isNaN(parseFloat(state.textContent));
                    if ((uiCode === minusChar) || (String.fromCharCode(keyboardCode) === minusChar)) {
                        if (Commerce.StringExtensions.isNullOrWhitespace(state.textContent) ||
                            isNumber) {
                            if (state.textContent.charAt(0) !== minusChar) {
                                state.textContent = minusChar + state.textContent;
                            }
                            else {
                                state.textContent = state.textContent.substr(1);
                            }
                        }
                        else {
                            state.textContent += minusChar;
                        }
                        return true;
                    }
                    return false;
                };
                InputHandlers.clear = function (state, uiCode, keyboardCode, source) {
                    if (uiCode === "clear") {
                        state.textContent = Commerce.StringExtensions.EMPTY;
                        return true;
                    }
                    return false;
                };
                InputHandlers.backspace = function (state, uiCode, keyboardCode, source) {
                    if ((uiCode === "backspace") || (keyboardCode === 8)) {
                        if (state.textContent.length >= 1) {
                            state.textContent = state.textContent.substr(0, state.textContent.length - 1);
                        }
                        return true;
                    }
                    return false;
                };
                InputHandlers.decimalSeparator = function (state, uiCode, keyboardCode, source) {
                    var separator = Commerce.NumberExtensions.decimalSeparator;
                    if ((uiCode === "decimal") || (String.fromCharCode(keyboardCode) === separator)) {
                        if (state.textContent.indexOf(separator) === -1 && state.getDecimalPrecision() !== 0) {
                            state.textContent += separator;
                        }
                        return true;
                    }
                    return false;
                };
                InputHandlers.numbers = function (state, uiCode, keyboardCode, source) {
                    var decimalSeparatorIndex = state.textContent.indexOf(Commerce.NumberExtensions.decimalSeparator);
                    var currentPrecision = decimalSeparatorIndex !== -1 ? (state.textContent.length - decimalSeparatorIndex - 1) : -1;
                    var valueToAdd;
                    var algarism = uiCode || String.fromCharCode(keyboardCode);
                    if (algarism >= "0" && algarism <= "9") {
                        valueToAdd = algarism;
                    }
                    if (!Commerce.ObjectExtensions.isUndefined(valueToAdd) && (currentPrecision < state.getDecimalPrecision())) {
                        state.textContent += valueToAdd;
                        return true;
                    }
                    return false;
                };
                InputHandlers.anyText = function (state, uiCode, keyboardCode, source) {
                    var valueToAdd = uiCode || String.fromCharCode(keyboardCode);
                    state.textContent += valueToAdd;
                    return true;
                };
                InputHandlers.quantity = function (state, uiCode, keyboardCode, source) {
                    if (uiCode === "*" || String.fromCharCode(keyboardCode) === "*") {
                        if (state.numPadMode === NumPad.CartNumPadModes.QuantityOrProduct) {
                            var value = Commerce.NumberExtensions.parseNumber(state.textContent);
                            if (isNaN(value)) {
                                Commerce.NotificationHandler.displayErrorMessage("string_29823");
                            }
                            else {
                                state.quantity = value;
                                state.numPadMode = NumPad.CartNumPadModes.Product;
                                state.textContent = Commerce.StringExtensions.EMPTY;
                            }
                        }
                        else {
                            state.quantity = null;
                            state.numPadMode = NumPad.CartNumPadModes.QuantityOrProduct;
                        }
                        return true;
                    }
                    return false;
                };
                InputHandlers.abc = function (state, uiCode, keyboardCode, source) {
                    if (Commerce.ObjectExtensions.isNullOrUndefined(state.inputElement)) {
                        throw new Error("Cannot find input element.");
                    }
                    if (uiCode === "abc") {
                        state.inputElement.readOnly = !state.inputElement.readOnly;
                        return true;
                    }
                    else if (!state.inputElement.readOnly && (source === NumPad.KeySource.UI)) {
                        state.inputElement.readOnly = true;
                        return false;
                    }
                    return false;
                };
                return InputHandlers;
            }());
            NumPad.InputHandlers = InputHandlers;
        })(NumPad = Controls.NumPad || (Controls.NumPad = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var NumPad;
        (function (NumPad) {
            "use strict";
            var InteractionEvents;
            (function (InteractionEvents) {
                InteractionEvents[InteractionEvents["NumpadEnter"] = 0] = "NumpadEnter";
            })(InteractionEvents = NumPad.InteractionEvents || (NumPad.InteractionEvents = {}));
        })(NumPad = Controls.NumPad || (Controls.NumPad = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var NumPad;
        (function (NumPad) {
            "use strict";
        })(NumPad = Controls.NumPad || (Controls.NumPad = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var NumPad;
        (function (NumPad) {
            "use strict";
            var NumericNumPadBindingHandler = (function (_super) {
                __extends(NumericNumPadBindingHandler, _super);
                function NumericNumPadBindingHandler() {
                    return _super.call(this) || this;
                }
                Object.defineProperty(NumericNumPadBindingHandler.prototype, "templateId", {
                    get: function () {
                        return "numberpad-numeric-template";
                    },
                    enumerable: true,
                    configurable: true
                });
                NumericNumPadBindingHandler.prototype.getInputHandlers = function (options) {
                    return _super.prototype.getInputHandlers.call(this, options).concat([NumPad.InputHandlers.numbers]);
                };
                return NumericNumPadBindingHandler;
            }(NumPad.NumPadBindingHandler));
            NumPad.NumericNumPadBindingHandler = NumericNumPadBindingHandler;
        })(NumPad = Controls.NumPad || (Controls.NumPad = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var NumPad;
        (function (NumPad) {
            "use strict";
            var TransactionNumPadBindingHandler = (function (_super) {
                __extends(TransactionNumPadBindingHandler, _super);
                function TransactionNumPadBindingHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                TransactionNumPadBindingHandler.prototype.update = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    _super.prototype.update.call(this, element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
                    var $element = $(element);
                    var $numPadButtons = $element.find(".numpad-control-buttons");
                    this.updateControlLayout($element, $numPadButtons);
                };
                Object.defineProperty(TransactionNumPadBindingHandler.prototype, "templateId", {
                    get: function () {
                        return "numberpad-transaction-template";
                    },
                    enumerable: true,
                    configurable: true
                });
                TransactionNumPadBindingHandler.prototype.getInputHandlers = function (options) {
                    return [
                        NumPad.InputHandlers.clear,
                        NumPad.InputHandlers.abc
                    ]
                        .concat(_super.prototype.getInputHandlers.call(this, options))
                        .concat([
                        NumPad.InputHandlers.quantity,
                        NumPad.InputHandlers.toggleMinus,
                        NumPad.InputHandlers.anyText
                    ]);
                };
                TransactionNumPadBindingHandler.prototype.createState = function (element, options, callerContext) {
                    return new NumPad.CartNumPadState(element, options, callerContext);
                };
                TransactionNumPadBindingHandler.prototype.updateControlLayout = function ($element, $numPadButtons) {
                    var state = this.getNumpadStateOfElement($element);
                    var options = state.options;
                    var layout;
                    if (options.viewName) {
                        if (options.containerId) {
                            layout = Commerce.ApplicationContext.Instance.tillLayoutProxy.getLayoutItem(options.viewName, options.containerId);
                        }
                        else {
                            Commerce.ViewModelAdapter.displayMessage("NumPad control requires a unique identifier as a parameter.", Commerce.MessageType.Error);
                        }
                    }
                    if (Commerce.ObjectExtensions.isNullOrUndefined(layout)) {
                        state.updateState(undefined, options.placeholder, undefined);
                        return;
                    }
                    else {
                        state.updateState(layout.DisplayTitleAboveControl, options.placeholder, layout.HideButtons);
                    }
                    if (state.hasDisplayTitleAboveControlsChanged || state.hasPlaceholderChanged) {
                        if (!layout.DisplayTitleAboveControl) {
                            this.$numPadLabel.hide();
                            if (!Commerce.ObjectExtensions.isNullOrUndefined(options.placeholder)) {
                                state.inputElement.placeholder = Commerce.ViewModelAdapter.getResourceString(options.placeholder);
                                state.inputElement.blur();
                            }
                        }
                        else {
                            this.$numPadLabel.show();
                            state.inputElement.placeholder = Commerce.StringExtensions.EMPTY;
                        }
                    }
                    if (state.hasHideButtonsChanged) {
                        if (layout.HideButtons) {
                            $numPadButtons.hide();
                            state.inputElement.readOnly = false;
                            state.alwaysAllowTargetInputEnabled = true;
                        }
                        else {
                            $numPadButtons.show();
                            state.inputElement.readOnly = true;
                            state.alwaysAllowTargetInputEnabled = false;
                        }
                    }
                    this.updateState(state);
                };
                return TransactionNumPadBindingHandler;
            }(NumPad.NumPadBindingHandler));
            NumPad.TransactionNumPadBindingHandler = TransactionNumPadBindingHandler;
        })(NumPad = Controls.NumPad || (Controls.NumPad = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var Pivot;
        (function (Pivot) {
            "use strict";
        })(Pivot = Controls.Pivot || (Controls.Pivot = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var Pivot;
        (function (Pivot) {
            "use strict";
        })(Pivot = Controls.Pivot || (Controls.Pivot = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var Pivot;
        (function (Pivot) {
            var PivotBindingHandler = (function () {
                function PivotBindingHandler() {
                    this.init = this.init.bind(this);
                    this.update = this.update.bind(this);
                }
                PivotBindingHandler.prototype.init = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                    var options = ko.utils.unwrapObservable(valueAccessor()) || Object.create(null);
                    var $element = $(element);
                    $element.addClass("pivot height100Percent");
                    ko.applyBindingsToDescendants(bindingContext, element);
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(options.groupedDataSource)) {
                        var observableMember = options.groupedDataSource;
                        var memberValue = ko.utils.unwrapObservable(observableMember);
                        var memberValueTmp_1 = memberValue;
                        var itemInvokedHandler_1 = function (invokedItem) {
                            if (Commerce.ObjectExtensions.isFunction(options.iteminvoked)) {
                                options.iteminvoked.call(viewModel, invokedItem);
                            }
                        };
                        var applyList = function (value) {
                            if (!value || value.length < 1) {
                                return;
                            }
                            var elementRecordId = memberValueTmp_1.parentId();
                            var groupsCollection = [];
                            var groupHeaderItems = [];
                            groupHeaderItems = value.filter(function (element) {
                                return (element[memberValueTmp_1.groupKeySelector] === elementRecordId ||
                                    element[memberValueTmp_1.groupKeySelector] === element[memberValueTmp_1.groupDataSelector]);
                            });
                            groupHeaderItems = Commerce.ObjectExtensions.clone(groupHeaderItems);
                            $.each(groupHeaderItems, function (index, groupHeaderItem) {
                                var secondlevelItems = [groupHeaderItem];
                                var childItems = value.filter(function (element) {
                                    return element[memberValueTmp_1.groupKeySelector] === groupHeaderItem[memberValueTmp_1.groupDataSelector];
                                });
                                secondlevelItems = secondlevelItems.concat(childItems);
                                groupsCollection.push({
                                    groupDetails: groupHeaderItem,
                                    groupItems: ko.observableArray(secondlevelItems),
                                    itemInvokedHandler: itemInvokedHandler_1,
                                    templateName: options.templateName,
                                    orientation: options.orientation || WinJS.UI.Orientation.vertical
                                });
                            });
                            ko.applyBindingsToNode(element, {
                                template: { name: "groupedPivotTemplate", data: groupsCollection }
                            });
                        };
                        applyList(memberValue.itemList());
                    }
                    var pivotWinControl = new WinJS.UI.Pivot(element, options);
                    this._pivotWinControl = pivotWinControl;
                    this._allPivotItems = pivotWinControl.items.filter(function () { return true; });
                    pivotWinControl.locked = pivotWinControl.items.length === 1;
                    pivotWinControl.addEventListener("selectionchanged", function () {
                        var event = document.createEvent("Event");
                        event.initEvent("resize", true, false);
                        window.dispatchEvent(event);
                    });
                    pivotWinControl.addEventListener("itemanimationend", function () {
                        var listViewQuery = $(pivotWinControl.selectedItem.element).find(".win-listview");
                        if (listViewQuery.length > 0 &&
                            !Commerce.ObjectExtensions.isNullOrUndefined(listViewQuery[0].winControl) &&
                            listViewQuery.is(":visible") &&
                            listViewQuery[0].winControl.indexOfFirstVisible === -1) {
                            listViewQuery[0].winControl.forceLayout();
                        }
                        if (pivotWinControl.items.length === 1) {
                            $(".win-pivot-header-items").children("div").attr("tabindex", "-1");
                            $(".win-pivot-header-items .win-pivot-headers").find("button").attr("tabindex", "-1");
                        }
                    });
                    if (!Commerce.StringExtensions.isNullOrWhitespace(options.headerItemsAxBubbleAttr)) {
                        Commerce.BubbleHelper.addAttribute($(pivotWinControl.element).find(".win-pivot-header-items"), options.headerItemsAxBubbleAttr);
                    }
                    ko.utils.domNodeDisposal.addDisposeCallback(element, function (e) {
                        if (element.winControl) {
                            element.winControl.dispose();
                        }
                    });
                    return { controlsDescendantBindings: true };
                };
                PivotBindingHandler.prototype.update = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    var _this = this;
                    var options = ko.utils.unwrapObservable(valueAccessor()) || {};
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(options) && !Commerce.ObjectExtensions.isNullOrUndefined(options.pivotItemVisibilities)) {
                        var pivotWinControlPivotitemIndex_1 = 0;
                        this._allPivotItems.forEach(function (pivotItem) {
                            var pivotItemVisibility = Commerce.ArrayExtensions.firstOrUndefined(options.pivotItemVisibilities, function (pivotItemVisibility) {
                                return pivotItemVisibility.pivotItemId === pivotItem.element.id;
                            });
                            var shouldPivotItemBeVisible = Commerce.ObjectExtensions.isNullOrUndefined(pivotItemVisibility) ? true : pivotItemVisibility.visible();
                            var isPivotItemVisible = _this._pivotWinControl.items.length > pivotWinControlPivotitemIndex_1
                                && _this._pivotWinControl.items.getAt(pivotWinControlPivotitemIndex_1).element.id === pivotItem.element.id;
                            if (shouldPivotItemBeVisible && isPivotItemVisible) {
                                pivotWinControlPivotitemIndex_1++;
                            }
                            else if (shouldPivotItemBeVisible) {
                                _this._pivotWinControl.items.splice(pivotWinControlPivotitemIndex_1, 0, pivotItem);
                                pivotWinControlPivotitemIndex_1++;
                            }
                            else if (isPivotItemVisible) {
                                _this._pivotWinControl.items.splice(pivotWinControlPivotitemIndex_1, 1);
                            }
                        });
                    }
                };
                return PivotBindingHandler;
            }());
            Pivot.PivotBindingHandler = PivotBindingHandler;
        })(Pivot = Controls.Pivot || (Controls.Pivot = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var Pivot;
        (function (Pivot) {
            var PivotItemBindingHandler = (function () {
                function PivotItemBindingHandler() {
                }
                PivotItemBindingHandler.prototype.init = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                    var options = ko.utils.unwrapObservable(valueAccessor()) || Object.create(null);
                    var $element = $(element);
                    $element.addClass("pivotItem");
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(options.headerResx)) {
                        options.header = Commerce.ViewModelAdapter.getResourceString(ko.utils.unwrapObservable(options.headerResx));
                    }
                    new WinJS.UI.PivotItem(element, options);
                    if ($element.attr("role") === "tabpanel") {
                        $element.removeAttr("role");
                    }
                    ko.utils.domNodeDisposal.addDisposeCallback(element, function (e) {
                        if (element.winControl) {
                            element.winControl.dispose();
                        }
                    });
                };
                return PivotItemBindingHandler;
            }());
            Pivot.PivotItemBindingHandler = PivotItemBindingHandler;
        })(Pivot = Controls.Pivot || (Controls.Pivot = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var PreventInteraction;
        (function (PreventInteraction) {
            "use strict";
            var PreventInteractionBindingHandler = (function () {
                function PreventInteractionBindingHandler() {
                }
                PreventInteractionBindingHandler.prototype.init = function (element, valueAccessor) {
                    var value = valueAccessor();
                    var preventInteraction = ko.isObservable(value) ? value : ko.observable(false);
                    PreventInteraction.PreventInteractionHelper.setInteractionState($(element), preventInteraction());
                };
                PreventInteractionBindingHandler.prototype.update = function (element, valueAccessor) {
                    var value = valueAccessor();
                    var preventInteraction = ko.isObservable(value) ? value : ko.observable(false);
                    PreventInteraction.PreventInteractionHelper.setInteractionState($(element), preventInteraction());
                };
                return PreventInteractionBindingHandler;
            }());
            PreventInteraction.PreventInteractionBindingHandler = PreventInteractionBindingHandler;
        })(PreventInteraction = Controls.PreventInteraction || (Controls.PreventInteraction = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var PreventInteraction;
        (function (PreventInteraction) {
            "use strict";
            var PreventInteractionHelper = (function () {
                function PreventInteractionHelper() {
                }
                PreventInteractionHelper.setInteractionState = function ($element, prevent) {
                    if (prevent) {
                        PreventInteractionHelper._preventInteraction($element);
                    }
                    else {
                        PreventInteractionHelper._enableInteraction($element);
                    }
                };
                PreventInteractionHelper._stopPropagation = function (e) {
                    var eventData = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        eventData[_i - 1] = arguments[_i];
                    }
                    e.stopPropagation();
                };
                PreventInteractionHelper._enableInteraction = function ($element) {
                    var enableOnDisabledElement = false;
                    var $elementsWithPointerAccess = $element.find("[" + PreventInteractionHelper.HAD_ORIGINAL_POINTER_EVENT_CLASS_ATTRIBUTE_NAME + "]").add($element);
                    $elementsWithPointerAccess.each(function (index, elem) {
                        var $elem = $(elem);
                        var originalPointerEventClassAttribute = $elem.attr(PreventInteractionHelper.HAD_ORIGINAL_POINTER_EVENT_CLASS_ATTRIBUTE_NAME);
                        if (!Commerce.StringExtensions.isNullOrWhitespace(originalPointerEventClassAttribute)) {
                            $elem.removeAttr(PreventInteractionHelper.HAD_ORIGINAL_POINTER_EVENT_CLASS_ATTRIBUTE_NAME);
                            enableOnDisabledElement = true;
                            if ((originalPointerEventClassAttribute === "false") && $elem.hasClass(PreventInteractionHelper.POINTER_EVENT_CLASS_NAME)) {
                                $elem.removeClass(PreventInteractionHelper.POINTER_EVENT_CLASS_NAME);
                            }
                            $elem.off("keypress keydown keyup", PreventInteractionHelper._stopPropagation);
                        }
                    });
                    if (enableOnDisabledElement) {
                        var $listOfElementsToRestoreTabOrder = $element.find("[" + PreventInteractionHelper.ORIGINAL_TAB_INDEX_ATTRIBUTE_NAME + "]").add($element);
                        $listOfElementsToRestoreTabOrder.each(function (index, elem) {
                            var $elem = $(elem);
                            var originalTabIndex = $elem.attr(PreventInteractionHelper.ORIGINAL_TAB_INDEX_ATTRIBUTE_NAME);
                            if (!Commerce.StringExtensions.isNullOrWhitespace(originalTabIndex)) {
                                if (originalTabIndex === "false") {
                                    $elem.removeAttr(PreventInteractionHelper.TAB_INDEX_ATTRIBUTE_NAME);
                                }
                                else {
                                    $elem.attr(PreventInteractionHelper.TAB_INDEX_ATTRIBUTE_NAME, originalTabIndex);
                                }
                                $elem.removeAttr(PreventInteractionHelper.ORIGINAL_TAB_INDEX_ATTRIBUTE_NAME);
                            }
                        });
                    }
                };
                PreventInteractionHelper._preventInteraction = function ($element) {
                    var originalPointerEventClassAttribute = $element.attr(PreventInteractionHelper.HAD_ORIGINAL_POINTER_EVENT_CLASS_ATTRIBUTE_NAME);
                    if (Commerce.StringExtensions.isNullOrWhitespace(originalPointerEventClassAttribute)) {
                        if ($element.hasClass(PreventInteractionHelper.POINTER_EVENT_CLASS_NAME)) {
                            $element.attr(PreventInteractionHelper.HAD_ORIGINAL_POINTER_EVENT_CLASS_ATTRIBUTE_NAME, "true");
                        }
                        else {
                            $element.attr(PreventInteractionHelper.HAD_ORIGINAL_POINTER_EVENT_CLASS_ATTRIBUTE_NAME, "false");
                            $element.addClass(PreventInteractionHelper.POINTER_EVENT_CLASS_NAME);
                        }
                        $element.on("keypress keydown keyup", PreventInteractionHelper._stopPropagation);
                    }
                    var listOfElementsToRemoveFromTabOrder = $element.find(PreventInteractionHelper.ELEMENTS_TO_SET_INTERACTION_STATE_QUERY).add($element[0]);
                    listOfElementsToRemoveFromTabOrder.each(function (index, elem) {
                        var $elem = $(elem);
                        var tabIndexAttributeValue = $elem.attr(PreventInteractionHelper.TAB_INDEX_ATTRIBUTE_NAME);
                        if (Commerce.StringExtensions.isNullOrWhitespace($elem.attr(PreventInteractionHelper.ORIGINAL_TAB_INDEX_ATTRIBUTE_NAME))) {
                            if (Commerce.StringExtensions.isNullOrWhitespace(tabIndexAttributeValue)) {
                                $elem.attr(PreventInteractionHelper.ORIGINAL_TAB_INDEX_ATTRIBUTE_NAME, "false");
                            }
                            else {
                                $elem.attr(PreventInteractionHelper.ORIGINAL_TAB_INDEX_ATTRIBUTE_NAME, tabIndexAttributeValue);
                            }
                            $elem.attr(PreventInteractionHelper.TAB_INDEX_ATTRIBUTE_NAME, "-1");
                            if (!Commerce.ObjectExtensions.isNullOrUndefined(document.activeElement) && document.activeElement.isSameNode(elem)) {
                                $elem.blur();
                            }
                        }
                    });
                };
                PreventInteractionHelper.ORIGINAL_TAB_INDEX_ATTRIBUTE_NAME = "originaltabindex";
                PreventInteractionHelper.TAB_INDEX_ATTRIBUTE_NAME = "tabindex";
                PreventInteractionHelper.HAD_ORIGINAL_POINTER_EVENT_CLASS_ATTRIBUTE_NAME = "hadoriginalpointereventsnone";
                PreventInteractionHelper.POINTER_EVENT_CLASS_NAME = "pointerEventsNone";
                PreventInteractionHelper.ELEMENTS_TO_SET_INTERACTION_STATE_QUERY = ":input,[data-bind]";
                return PreventInteractionHelper;
            }());
            PreventInteraction.PreventInteractionHelper = PreventInteractionHelper;
        })(PreventInteraction = Controls.PreventInteraction || (Controls.PreventInteraction = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var TextConverter;
        (function (TextConverter) {
            "use strict";
            var FieldType = (function () {
                function FieldType() {
                }
                FieldType.html = "html";
                FieldType.text = "text";
                return FieldType;
            }());
            TextConverter.FieldType = FieldType;
        })(TextConverter = Controls.TextConverter || (Controls.TextConverter = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var TextConverter;
        (function (TextConverter) {
            "use strict";
            var TextConverterBindingHandler = (function () {
                function TextConverterBindingHandler() {
                }
                TextConverterBindingHandler.prototype.init = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    var value = ko.utils.unwrapObservable(valueAccessor()) || {};
                    var data = value.data;
                    var fieldValue;
                    var convertedValue;
                    var columnToBind = value.columnToBind || Commerce.StringExtensions.EMPTY;
                    var columnToBindResx = value.columnToBindResx || Commerce.StringExtensions.EMPTY;
                    if (value.field === "$data") {
                        fieldValue = data;
                    }
                    else if (!Commerce.StringExtensions.isNullOrWhitespace(value.field)) {
                        var fieldSplit = value.field.split(".");
                        if (fieldSplit.length > 1) {
                            fieldValue = data;
                            fieldSplit.forEach(function (field) {
                                if (!Commerce.ObjectExtensions.isNullOrUndefined(fieldValue)) {
                                    fieldValue = fieldValue[field];
                                }
                            });
                        }
                        else {
                            fieldValue = data[value.field];
                        }
                    }
                    var converterMethodOrObject;
                    if (Commerce.ObjectExtensions.isFunction(value.converter) || Commerce.ObjectExtensions.isObject(value.converter)) {
                        converterMethodOrObject = value.converter;
                    }
                    else if (Commerce.ObjectExtensions.isString(value.converter) && !Commerce.StringExtensions.isNullOrWhitespace(value.converter)) {
                        var pathNames = value.converter.split(".");
                        converterMethodOrObject = window[pathNames[0]];
                        for (var i = 1; i < pathNames.length; i++) {
                            converterMethodOrObject = converterMethodOrObject[pathNames[i]];
                        }
                    }
                    var converterMethod;
                    if (!Commerce.ObjectExtensions.isNullOrUndefined(converterMethodOrObject) &&
                        Commerce.ObjectExtensions.isObject(converterMethodOrObject) &&
                        Commerce.ObjectExtensions.isFunction(converterMethodOrObject.computeValue)) {
                        converterMethod = converterMethodOrObject.computeValue.bind(converterMethodOrObject);
                    }
                    else if (Commerce.ObjectExtensions.isFunction(converterMethodOrObject)) {
                        converterMethod = converterMethodOrObject;
                    }
                    else {
                        converterMethod = undefined;
                    }
                    if (Commerce.ObjectExtensions.isFunction(converterMethod)) {
                        if (converterMethod.supportedForProcessing) {
                            var destinationData = {
                                convertedValue: "",
                                winBindingToken: { configurable: false, writable: false, enumerable: false, value: "innerText" }
                            };
                            var sourceProperties = [];
                            var destinationProperties = ["convertedValue"];
                            if (Commerce.ObjectExtensions.isNullOrUndefined(fieldValue)) {
                                if (!Commerce.ObjectExtensions.isNullOrUndefined(value.defaultValue)) {
                                    converterMethod(value.defaultValue, sourceProperties, destinationData, destinationProperties, null);
                                    convertedValue = destinationData.convertedValue;
                                }
                                else {
                                    convertedValue = "";
                                }
                            }
                            else {
                                converterMethod(fieldValue, sourceProperties, destinationData, destinationProperties, null);
                                convertedValue = destinationData.convertedValue;
                            }
                        }
                        else {
                            convertedValue = converterMethod(fieldValue);
                        }
                    }
                    else {
                        if (Commerce.ObjectExtensions.isNullOrUndefined(fieldValue)) {
                            if (!Commerce.ObjectExtensions.isNullOrUndefined(value.defaultValue)) {
                                convertedValue = value.defaultValue;
                            }
                            else {
                                convertedValue = "";
                            }
                        }
                        else {
                            convertedValue = fieldValue;
                        }
                    }
                    var type = value.type ? value.type : TextConverter.FieldType.text;
                    var binding = {};
                    binding[type] = convertedValue;
                    if (value.cssClassField) {
                        var cssAttributeName = "css";
                        binding[cssAttributeName] = data[value.cssClassField];
                    }
                    if (!value.cssClassField && type === TextConverter.FieldType.text) {
                        element.innerHTML = convertedValue;
                        if (type === TextConverter.FieldType.text && value.ariaLabel === "true") {
                            if (Commerce.StringExtensions.isEmptyOrWhitespace(columnToBind)) {
                                columnToBind = Commerce.ViewModelAdapter.getResourceString(columnToBindResx);
                            }
                            convertedValue = convertedValue || Commerce.StringExtensions.EMPTY;
                            convertedValue = Commerce.StringExtensions.format(Commerce.ViewModelAdapter.getResourceString("string_1831"), columnToBind, convertedValue);
                            element.setAttribute("aria-label", convertedValue);
                        }
                        return;
                    }
                    ko.applyBindingsToNode(element, binding);
                    return { controlsDescendantBindings: true };
                };
                return TextConverterBindingHandler;
            }());
            TextConverter.TextConverterBindingHandler = TextConverterBindingHandler;
        })(TextConverter = Controls.TextConverter || (Controls.TextConverter = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var TimePicker;
        (function (TimePicker) {
            "use strict";
        })(TimePicker = Controls.TimePicker || (Controls.TimePicker = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var TimePicker;
        (function (TimePicker) {
            var TimePickerBindingHandler = (function () {
                function TimePickerBindingHandler() {
                }
                TimePickerBindingHandler.prototype.init = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    var options = ko.utils.unwrapObservable(valueAccessor()) || Object.create(null);
                    var picker = new WinJS.UI.TimePicker(element);
                    ko.applyBindingsToNode(picker.element, {
                        winControl: {
                            disabled: options.disabled || false,
                            current: options.current || Commerce.DateExtensions.now,
                            hourPattern: options.hourPattern || Commerce.StringExtensions.EMPTY,
                            minutePattern: options.minutePattern || Commerce.StringExtensions.EMPTY,
                            minuteIncrement: options.minuteIncrement || 1
                        }
                    }, viewModel);
                    if (Commerce.ObjectExtensions.isFunction(options.onChange)) {
                        picker.onchange = function (event) {
                            var datePickerDiv = event.currentTarget;
                            var datePickerControl = datePickerDiv.winControl;
                            options.onChange(datePickerControl.current);
                        };
                    }
                    return { controlsDescendantBindings: true };
                };
                return TimePickerBindingHandler;
            }());
            TimePicker.TimePickerBindingHandler = TimePickerBindingHandler;
        })(TimePicker = Controls.TimePicker || (Controls.TimePicker = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var ToggleSwitch;
        (function (ToggleSwitch) {
            "use strict";
        })(ToggleSwitch = Controls.ToggleSwitch || (Controls.ToggleSwitch = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var ToggleSwitch;
        (function (ToggleSwitch) {
            var ToggleSwitchBindingHandler = (function () {
                function ToggleSwitchBindingHandler() {
                }
                ToggleSwitchBindingHandler.prototype.init = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    var toggleSwitch = new WinJS.UI.ToggleSwitch(element);
                    var value = ko.utils.unwrapObservable(valueAccessor() || Object.create(null));
                    $(element).addClass("toggleSwitch");
                    if (Commerce.ObjectExtensions.isFunction(value.onChange)) {
                        toggleSwitch.addEventListener("change", function (event) {
                            var toggleSwitch = event.srcElement.winControl;
                            value.onChange.apply(viewModel, [toggleSwitch.checked, toggleSwitch, viewModel]);
                        });
                    }
                    var checked = ko.utils.unwrapObservable(value.checked) === true;
                    toggleSwitch.checked = checked;
                    var enabled = ko.utils.unwrapObservable(value.enabled) !== false;
                    toggleSwitch.disabled = !enabled;
                    element.winControl.labelOn = Commerce.ViewModelAdapter.getResourceString(value.labelOn) ||
                        Commerce.ViewModelAdapter.getResourceString("string_7411");
                    element.winControl.labelOff = Commerce.ViewModelAdapter.getResourceString(value.labelOff) ||
                        Commerce.ViewModelAdapter.getResourceString("string_7412");
                    element.tabIndex = value.tabIndex;
                    ko.utils.domNodeDisposal.addDisposeCallback(element, function (e) {
                        if (element.winControl) {
                            element.winControl.dispose();
                        }
                    });
                };
                ToggleSwitchBindingHandler.prototype.update = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    var toggleSwitch = element.winControl;
                    var value = ko.utils.unwrapObservable(valueAccessor() || {});
                    if (ko.isObservable(value.checked)) {
                        var checked = ko.utils.unwrapObservable(value.checked) === true;
                        if (toggleSwitch.checked !== checked) {
                            toggleSwitch.checked = checked;
                        }
                    }
                    $(element).attr("title", toggleSwitch.checked ? element.winControl.labelOn : element.winControl.labelOff);
                    var enabled = ko.utils.unwrapObservable(value.enabled) !== false;
                    toggleSwitch.disabled = !enabled;
                };
                return ToggleSwitchBindingHandler;
            }());
            ToggleSwitch.ToggleSwitchBindingHandler = ToggleSwitchBindingHandler;
        })(ToggleSwitch = Controls.ToggleSwitch || (Controls.ToggleSwitch = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var TotalsPanel;
        (function (TotalsPanel) {
            "use strict";
        })(TotalsPanel = Controls.TotalsPanel || (Controls.TotalsPanel = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var TotalsPanel;
        (function (TotalsPanel) {
            "use strict";
        })(TotalsPanel = Controls.TotalsPanel || (Controls.TotalsPanel = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var TotalsPanel;
        (function (TotalsPanel) {
            "use strict";
            var TotalsPanelBindingHandler = (function () {
                function TotalsPanelBindingHandler() {
                }
                TotalsPanelBindingHandler.prototype.init = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    var leftFieldsClass = ".left";
                    var rightFieldsClass = ".right";
                    var mainFieldsClass = ".fields";
                    var value = ko.utils.unwrapObservable(valueAccessor()) || {};
                    var $element = $(element);
                    var dynamicElements = [];
                    var id = $element.attr("id");
                    if (!id) {
                        Commerce.ViewModelAdapter.displayMessage("tab control requires a unique Id", Commerce.MessageType.Error);
                        return;
                    }
                    if (!Commerce.StringExtensions.isNullOrWhitespace(value.view)) {
                        var $leftPanel_1 = $element.find(leftFieldsClass);
                        var $rightPanel_1 = $element.find(rightFieldsClass);
                        var $mainPanel_1 = $element.find(mainFieldsClass);
                        var item = Commerce.ApplicationContext.Instance.tillLayoutProxy.getLayoutItem(value.view, id);
                        if (!Commerce.ObjectExtensions.isNullOrUndefined(item)) {
                            var addFieldsToPanel = function ($fromPanel, $toPanel, selectedFields) {
                                if (Commerce.ArrayExtensions.hasElements(selectedFields)) {
                                    $toPanel.show();
                                    selectedFields.forEach(function (item, index) {
                                        var $field;
                                        var customFieldIndex = Commerce.ArrayExtensions.findIndex(value.customFieldViewModels, function (vm) {
                                            return vm.id === item.ID;
                                        });
                                        $field = $fromPanel.find("#" + item.ID);
                                        if ($field.length === 0) {
                                            if (customFieldIndex !== -1) {
                                                var vm = value.customFieldViewModels[customFieldIndex];
                                                vm.captionResourceId = Commerce.StringExtensions.format("string_{0}", item.CaptionTextId);
                                                var field = document.createElement("div");
                                                field.id = Commerce.StringExtensions.format("CartViewTotalsPanelCustomField-{0}", item.ID);
                                                var customFieldOptions = {
                                                    captionResourceId: vm.captionResourceId,
                                                    value: vm.value
                                                };
                                                dynamicElements.push({
                                                    element: field,
                                                    fieldOptions: customFieldOptions
                                                });
                                                $field = $(field);
                                            }
                                            else {
                                                Commerce.RetailLogger.extensibilityFrameworkTotalsPanelCustomFieldNotImplemented(item.ID);
                                            }
                                        }
                                        else if (customFieldIndex !== -1) {
                                            Commerce.RetailLogger.extensibilityFrameworkTotalsPanelCustomFieldConflictsWithStandardField(item.ID);
                                        }
                                        if ($field.length !== 0) {
                                            $field.css({
                                                visibility: "visible",
                                                position: "relative"
                                            });
                                            $toPanel.append($field);
                                        }
                                    });
                                }
                                else {
                                    $toPanel.hide();
                                }
                            };
                            if (Commerce.Config.isPhone) {
                                addFieldsToPanel($mainPanel_1, $mainPanel_1, [].concat(item.LeftSelectedTotalsFields, item.RightSelectedTotalsFields));
                            }
                            else {
                                addFieldsToPanel($leftPanel_1, $leftPanel_1, item.LeftSelectedTotalsFields);
                                addFieldsToPanel($leftPanel_1, $rightPanel_1, item.RightSelectedTotalsFields);
                            }
                        }
                        var orientationChangedHandler_1 = function (args) {
                            if (Commerce.Config.isPhone) {
                                $mainPanel_1.children().removeAttr("style");
                            }
                            else {
                                $rightPanel_1.children().appendTo($leftPanel_1);
                                $leftPanel_1.children().removeAttr("style");
                            }
                            dynamicElements.forEach(function (dynamicElement) {
                                $(dynamicElement.element).remove();
                            });
                            Commerce.ApplicationContext.Instance.tillLayoutProxy.removeOrientationChangedHandler(element, orientationChangedHandler_1);
                            ko.cleanNode(element);
                            ko.applyBindings(viewModel, element);
                        };
                        Commerce.ApplicationContext.Instance.tillLayoutProxy.addOrientationChangedHandler(element, orientationChangedHandler_1);
                    }
                    ko.applyBindingsToDescendants(viewModel, element);
                    dynamicElements.forEach(function (dynamicElement) {
                        ko.cleanNode(dynamicElement.element);
                        ko.applyBindingsToNode(dynamicElement.element, { totalsPanelField: dynamicElement.fieldOptions });
                    });
                    return { controlsDescendantBindings: true };
                };
                return TotalsPanelBindingHandler;
            }());
            TotalsPanel.TotalsPanelBindingHandler = TotalsPanelBindingHandler;
        })(TotalsPanel = Controls.TotalsPanel || (Controls.TotalsPanel = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
var Commerce;
(function (Commerce) {
    var Controls;
    (function (Controls) {
        var TotalsPanel;
        (function (TotalsPanel) {
            "use strict";
            var TotalsPanelFieldBindingHandler = (function () {
                function TotalsPanelFieldBindingHandler() {
                }
                TotalsPanelFieldBindingHandler.prototype.init = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    var options = ko.utils.unwrapObservable(valueAccessor()) || {};
                    options.isCurrency = options.isCurrency || false;
                    ko.applyBindingsToNode(element, {
                        template: {
                            name: "totalsPanelFieldTemplate",
                            data: options
                        }
                    });
                    return { controlsDescendantBindings: true };
                };
                return TotalsPanelFieldBindingHandler;
            }());
            TotalsPanel.TotalsPanelFieldBindingHandler = TotalsPanelFieldBindingHandler;
        })(TotalsPanel = Controls.TotalsPanel || (Controls.TotalsPanel = {}));
    })(Controls = Commerce.Controls || (Commerce.Controls = {}));
})(Commerce || (Commerce = {}));
//# sourceMappingURL=Pos.Controls.js.map
// SIG // Begin signature block
// SIG // MIIjpgYJKoZIhvcNAQcCoIIjlzCCI5MCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // xtUeX9Oz8Ky5wNGuRqPm6da+bIZqZ0V8DnqHeP7AnTig
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
// SIG // ARUwLwYJKoZIhvcNAQkEMSIEIKCJq0F0BHbImqZp9Wnd
// SIG // iIuImH4HyoIKDCPaDCrNtymNMGQGCisGAQQBgjcCAQwx
// SIG // VjBUoDaANABnAGwAbwBiAGEAbABpAHoAZQAuAGMAdQBs
// SIG // AHQAdQByAGUALgBsAHYALQBMAFYALgBqAHOhGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBAC+uiAGQeebBwdT9QMV3bUKApkNdxr6l4r45
// SIG // bq3vV6jBQcO4QzFIpBLFH2M8vWBoIlLG9E8tsNfqXnPw
// SIG // F6UCpATuyGgKZXBgEDckPSI+hLIozsn0erZfN3OVLOee
// SIG // 7HD9y4Tu3GTWFibHIxziQf9B0fJajenTOhbS+nFYJdcg
// SIG // gtTlrZiI6MPRi35IjuCMkuHQJmGR2KNu1vxmLuGn3cOh
// SIG // HXKX1AgDziSxrkDgQKDes/s1rr4s28Q9wQ2TTw/INgUJ
// SIG // AkDToeY73TW8gAoKOft/LTG/lFVTbELThJyQGu8bGYog
// SIG // EPBoaREGbuFZIYM1bqFgi/2zm0iD+oJu9M/assQJNH6h
// SIG // ghLlMIIS4QYKKwYBBAGCNwMDATGCEtEwghLNBgkqhkiG
// SIG // 9w0BBwKgghK+MIISugIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBUQYLKoZIhvcNAQkQAQSgggFABIIBPDCCATgCAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQgpldq
// SIG // hmvi0Gkh6vN16IU+256LZLBCHfFb3ES8IWt83cQCBlxn
// SIG // dmPSbBgTMjAxOTAzMTIwOTUxNTYuNTc2WjAEgAIB9KCB
// SIG // 0KSBzTCByjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAldB
// SIG // MRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24xLTArBgNVBAsTJE1pY3Jv
// SIG // c29mdCBJcmVsYW5kIE9wZXJhdGlvbnMgTGltaXRlZDEm
// SIG // MCQGA1UECxMdVGhhbGVzIFRTUyBFU046QTI0MC00Qjgy
// SIG // LTEzMEUxJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0
// SIG // YW1wIHNlcnZpY2Wggg48MIIE8TCCA9mgAwIBAgITMwAA
// SIG // AOCyGKnU0cK09wAAAAAA4DANBgkqhkiG9w0BAQsFADB8
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNy
// SIG // b3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDAeFw0xODA4
// SIG // MjMyMDI3MDFaFw0xOTExMjMyMDI3MDFaMIHKMQswCQYD
// SIG // VQQGEwJVUzELMAkGA1UECBMCV0ExEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEtMCsGA1UECxMkTWljcm9zb2Z0IElyZWxhbmQg
// SIG // T3BlcmF0aW9ucyBMaW1pdGVkMSYwJAYDVQQLEx1UaGFs
// SIG // ZXMgVFNTIEVTTjpBMjQwLTRCODItMTMwRTElMCMGA1UE
// SIG // AxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgc2VydmljZTCC
// SIG // ASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMKX
// SIG // +GcOx6ZsnHsUxLlG5omyJAkM/S2KrJ4J622I2UZw2hrj
// SIG // byhW1uUfrJlq0JdnKDKHNucMmh9Mcga12ITNBzl8+F11
// SIG // 9N3iERCB3lyH8GUYhNcUTAnh38aEdlDWFst2IFP+PrtD
// SIG // HXlV65fLmf+Mz0+8hsGSxJbBfy+uSFFP+uprXFauYX5J
// SIG // 9xgrD6kL53e1QeuAAKjRhpUe5LeOWleDfcD6m6XzCJtk
// SIG // FwbEwXUKrCU/QB8xbrQOniqb8kttbF3H+k6KI6sz+3KQ
// SIG // UO0Sc3TsddGNcOEOF8h4ELPgY+IIQWT3gBoXHKwV4Wf2
// SIG // /LPtPIonFSSxcmG1YaraLhaY9ymHIPMCAwEAAaOCARsw
// SIG // ggEXMB0GA1UdDgQWBBRrQdMKtjnOrO/+njita5JtdoCH
// SIG // 6DAfBgNVHSMEGDAWgBTVYzpcijGQ80N7fEYbxTNoWoVt
// SIG // VTBWBgNVHR8ETzBNMEugSaBHhkVodHRwOi8vY3JsLm1p
// SIG // Y3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9NaWNU
// SIG // aW1TdGFQQ0FfMjAxMC0wNy0wMS5jcmwwWgYIKwYBBQUH
// SIG // AQEETjBMMEoGCCsGAQUFBzAChj5odHRwOi8vd3d3Lm1p
// SIG // Y3Jvc29mdC5jb20vcGtpL2NlcnRzL01pY1RpbVN0YVBD
// SIG // QV8yMDEwLTA3LTAxLmNydDAMBgNVHRMBAf8EAjAAMBMG
// SIG // A1UdJQQMMAoGCCsGAQUFBwMIMA0GCSqGSIb3DQEBCwUA
// SIG // A4IBAQALH96d2ZLkNbrGBvx8h0Soj3rd9QHsihiVg1BT
// SIG // 9hnCrXnm4rWXCFwflHUJpUyv6XI0h8PyX6WrLyZ2i75n
// SIG // ByufOjebZQQY7S40V3hzwh7Dlnj1X7oCiNPrPkgYmHfL
// SIG // nq4MAJDNFmtH7bq4LHWcuxiMr9a3FAOrUgcdZ4DF+sbG
// SIG // wBk7UF1CjbkzHfhmx5WJWP66x+bLSdSZ+9nSEVwx413i
// SIG // Lgp2zTeRj8LBZVkHDra0CM4cr9zzXA7uGK6270lfgw2N
// SIG // oS4V2F6I3CYfICZumpibPor70g8zvmJcQtvOMNzrIsml
// SIG // U6rXuB9UMJrB6vLOBWcLYIjGruAMbJMz1p/Ay0RJMIIG
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
// SIG // U1MgRVNOOkEyNDAtNEI4Mi0xMzBFMSUwIwYDVQQDExxN
// SIG // aWNyb3NvZnQgVGltZS1TdGFtcCBzZXJ2aWNloiMKAQEw
// SIG // BwYFKw4DAhoDFQDGeaSM5d52mrIdCqQkaft7CFIL0aCB
// SIG // gzCBgKR+MHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpX
// SIG // YXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYD
// SIG // VQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAkBgNV
// SIG // BAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEw
// SIG // MA0GCSqGSIb3DQEBBQUAAgUA4DGYbzAiGA8yMDE5MDMx
// SIG // MjEwMzExMVoYDzIwMTkwMzEzMTAzMTExWjB3MD0GCisG
// SIG // AQQBhFkKBAExLzAtMAoCBQDgMZhvAgEAMAoCAQACAgjR
// SIG // AgH/MAcCAQACAhIcMAoCBQDgMunvAgEAMDYGCisGAQQB
// SIG // hFkKBAIxKDAmMAwGCisGAQQBhFkKAwKgCjAIAgEAAgMH
// SIG // oSChCjAIAgEAAgMBhqAwDQYJKoZIhvcNAQEFBQADgYEA
// SIG // fkrEKa8AXZbD8nrmvQwCpFlaeX0EwAboqDt+AjHdnreM
// SIG // rhSeqEqQbfl7fE/UFXtxy/WpReOHaaFRfvuvqTm4NrWH
// SIG // gJhSjiJyqQ4Bhux7seneY7DfwNn48qQ+hgFEkZmugqa+
// SIG // oIYNINkNyolmDui37p4+VfkjVPSYotAOhtlic6kxggMN
// SIG // MIIDCQIBATCBkzB8MQswCQYDVQQGEwJVUzETMBEGA1UE
// SIG // CBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEe
// SIG // MBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYw
// SIG // JAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0Eg
// SIG // MjAxMAITMwAAAOCyGKnU0cK09wAAAAAA4DANBglghkgB
// SIG // ZQMEAgEFAKCCAUowGgYJKoZIhvcNAQkDMQ0GCyqGSIb3
// SIG // DQEJEAEEMC8GCSqGSIb3DQEJBDEiBCADXYrRPWKrN6H7
// SIG // mqt9TcnFR/3dLyKuAbpP3+vq3NCqEDCB+gYLKoZIhvcN
// SIG // AQkQAi8xgeowgecwgeQwgb0EIKWBL1WkMyiyV3KDUZA9
// SIG // VWTnDA04P49yXZqgu9GsQl+QMIGYMIGApH4wfDELMAkG
// SIG // A1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAO
// SIG // BgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29m
// SIG // dCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0
// SIG // IFRpbWUtU3RhbXAgUENBIDIwMTACEzMAAADgship1NHC
// SIG // tPcAAAAAAOAwIgQg8Wz4J3Ka0IjirhyGmsWtQMXt/t/U
// SIG // cgmAtxV2Wye9L/wwDQYJKoZIhvcNAQELBQAEggEAl0Ct
// SIG // WxCx70S2MBV564aqRcxg1Ygz5vYwyN0M8wGLRl5m5eGF
// SIG // Chi7Ccc/ZCuk6SA8Qxq+f+2SSSSST5SWFjf0rZ59oLVA
// SIG // MKstQCHZGs6tIM+lHZWFuTgsNt7uk/Vjt0tcy+Ruz0Ep
// SIG // HW+T5bT0aGLPP32ysNlrXyhZ5vQYcU7H3G4tvWtMQGlv
// SIG // vh6WL1Lefb0YRGTv9Uy8YyaHU3NRo4jRUItaKk6FCoDo
// SIG // xAwL42D4JCltwMxHjo4PmhLlfcV02SQEt0LVoplvlqqL
// SIG // 8AdipBBl7gOZbe1PPV9lmsc6ykgNgfi/TFBD3mHxu/4U
// SIG // fr89flckOQy6cjMEEHJ4At4X8jJqQQ==
// SIG // End signature block
