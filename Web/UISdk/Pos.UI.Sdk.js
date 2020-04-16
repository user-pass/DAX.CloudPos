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
System.register("PosUISdk/Controls/PosControl", [], function (exports_1, context_1) {
    "use strict";
    var PosControl;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            PosControl = /** @class */ (function () {
                function PosControl() {
                }
                PosControl.prototype.dispose = function () {
                    Commerce.ObjectExtensions.disposeAllProperties(this);
                };
                PosControl.prototype.getObservable = function (value, defaultValue) {
                    if (Commerce.ObjectExtensions.isNullOrUndefined(value)) {
                        if (Commerce.ObjectExtensions.isNullOrUndefined(defaultValue)) {
                            return undefined;
                        }
                        return ko.observable(defaultValue);
                    }
                    else if (ko.isObservable(value)) {
                        return value;
                    }
                    else {
                        return ko.observable(value);
                    }
                };
                return PosControl;
            }());
            exports_1("PosControl", PosControl);
        }
    };
});
System.register("PosUISdk/Controls/AppBar", ["PosUISdk/Controls/PosControl"], function (exports_2, context_2) {
    "use strict";
    var PosControl_1, AppBar, AppBarCommand;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (PosControl_1_1) {
                PosControl_1 = PosControl_1_1;
            }
        ],
        execute: function () {
            AppBar = /** @class */ (function (_super) {
                __extends(AppBar, _super);
                function AppBar() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return AppBar;
            }(PosControl_1.PosControl));
            exports_2("AppBar", AppBar);
            AppBarCommand = /** @class */ (function (_super) {
                __extends(AppBarCommand, _super);
                function AppBarCommand(initialState) {
                    var _this = _super.call(this) || this;
                    if (Commerce.ObjectExtensions.isNullOrUndefined(initialState)) {
                        throw new Commerce.UI.Sdk.InvalidConstructorStateException(AppBarCommand.CONTROL_NAME, "Invalid state provided to the AppBarCommand constructor: The initialState cannot be null or undefined.");
                    }
                    else if (Commerce.StringExtensions.isNullOrWhitespace(initialState.id)) {
                        throw new Commerce.UI.Sdk.InvalidConstructorStateException(AppBarCommand.CONTROL_NAME, "Invalid state provided to the AppBarCommand constructor: The initialState must contain a valid id.");
                    }
                    else if (Commerce.ObjectExtensions.isNullOrUndefined(initialState.label)) {
                        throw new Commerce.UI.Sdk.InvalidConstructorStateException(AppBarCommand.CONTROL_NAME, "Invalid state provided to the AppBarCommand constructor: The initialState must contain a valid label.");
                    }
                    else if (!Commerce.ObjectExtensions.isFunction(initialState.execute)) {
                        throw new Commerce.UI.Sdk.InvalidConstructorStateException(AppBarCommand.CONTROL_NAME, "Invalid state provided to the AppBarCommand constructor: The initialState must contain a valid execute method.");
                    }
                    _this.enabled = _this.getObservable(initialState.enabled, true);
                    _this.visible = _this.getObservable(initialState.visible, true);
                    _this.label = _this.getObservable(initialState.label);
                    _this.id = initialState.id;
                    _this.extraClass = initialState.extraClass;
                    _this.flyoutSelector = initialState.flyoutSelector;
                    _this._execute = initialState.execute;
                    return _this;
                }
                AppBarCommand.prototype.execute = function () {
                    if (Commerce.ObjectExtensions.isFunction(this._execute)) {
                        this._execute();
                    }
                };
                AppBarCommand.CONTROL_NAME = "AppBarCommand";
                return AppBarCommand;
            }(PosControl_1.PosControl));
            exports_2("AppBarCommand", AppBarCommand);
        }
    };
});
System.register("PosUISdk/Controls/DataList", ["PosUISdk/Controls/PosControl"], function (exports_3, context_3) {
    "use strict";
    var PosControl_2, SelectionMode, DataList;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (PosControl_2_1) {
                PosControl_2 = PosControl_2_1;
            }
        ],
        execute: function () {
            (function (SelectionMode) {
                SelectionMode[SelectionMode["None"] = 0] = "None";
                SelectionMode[SelectionMode["NoneOrSingle"] = 1] = "NoneOrSingle";
                SelectionMode[SelectionMode["NoneOrMulti"] = 2] = "NoneOrMulti";
                SelectionMode[SelectionMode["InvokeOnly"] = 3] = "InvokeOnly";
                SelectionMode[SelectionMode["InvokeOrSingle"] = 4] = "InvokeOrSingle";
                SelectionMode[SelectionMode["InvokeOrMulti"] = 5] = "InvokeOrMulti";
                SelectionMode[SelectionMode["SingleSelect"] = 6] = "SingleSelect";
                SelectionMode[SelectionMode["MultiSelect"] = 7] = "MultiSelect"; // Multi selection
            })(SelectionMode || (SelectionMode = {}));
            exports_3("SelectionMode", SelectionMode);
            DataList = /** @class */ (function (_super) {
                __extends(DataList, _super);
                function DataList(initialState) {
                    var _this = _super.call(this) || this;
                    if (Commerce.ObjectExtensions.isNullOrUndefined(initialState)) {
                        throw new Commerce.UI.Sdk.InvalidConstructorStateException(DataList.CONTROL_NAME, "Invalid state provided to the DataList constructor: The initialState cannot be null or undefined.");
                    }
                    _this.autoSelectFirstItem = Commerce.ObjectExtensions.isNullOrUndefined(initialState.autoSelectFirstItem) ? false : initialState.autoSelectFirstItem;
                    _this.columns = initialState.columns;
                    _this.emptyDataListTemplateId = initialState.emptyDataListTemplateId;
                    _this.itemDataSource = initialState.itemDataSource;
                    _this.selectionMode = Commerce.ObjectExtensions.isNullOrUndefined(initialState.selectionMode) ? SelectionMode.None : initialState.selectionMode;
                    if (Commerce.ObjectExtensions.isFunction(initialState.itemInvoked)) {
                        _this.itemInvoked = initialState.itemInvoked;
                    }
                    if (Commerce.ObjectExtensions.isFunction(initialState.selectionChanged)) {
                        _this.selectionChanged = initialState.selectionChanged;
                    }
                    return _this;
                }
                DataList.CONTROL_NAME = "DataList";
                return DataList;
            }(PosControl_2.PosControl));
            exports_3("DataList", DataList);
        }
    };
});
System.register("PosUISdk/Controls/DatePicker", ["PosUISdk/Controls/PosControl"], function (exports_4, context_4) {
    "use strict";
    var PosControl_3, DatePicker;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (PosControl_3_1) {
                PosControl_3 = PosControl_3_1;
            }
        ],
        execute: function () {
            DatePicker = /** @class */ (function (_super) {
                __extends(DatePicker, _super);
                function DatePicker(initialState) {
                    var _this = _super.call(this) || this;
                    if (Commerce.ObjectExtensions.isNullOrUndefined(initialState)) {
                        throw new Commerce.UI.Sdk.InvalidConstructorStateException(DatePicker.CONTROL_NAME, "Invalid state provided to the " + DatePicker.CONTROL_NAME + " constructor: The initialState cannot be null or undefined.");
                    }
                    if (!Commerce.ObjectExtensions.isFunction(initialState.onChange)) {
                        throw new Commerce.UI.Sdk.InvalidConstructorStateException(DatePicker.CONTROL_NAME, "Invalid state provided to the " + DatePicker.CONTROL_NAME + " constructor: The initialState.onChange callback must be set to a function.");
                    }
                    _this.datePattern = initialState.datePattern;
                    _this.current = initialState.initialValue;
                    _this.disabled = initialState.disabled;
                    _this.onChange = initialState.onChange;
                    return _this;
                }
                DatePicker.CONTROL_NAME = "DatePicker";
                return DatePicker;
            }(PosControl_3.PosControl));
            exports_4("DatePicker", DatePicker);
        }
    };
});
System.register("PosUISdk/Controls/HeaderSplitView", ["PosUISdk/Controls/PosControl"], function (exports_5, context_5) {
    "use strict";
    var PosControl_4, HeaderSplitView;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (PosControl_4_1) {
                PosControl_4 = PosControl_4_1;
            }
        ],
        execute: function () {
            HeaderSplitView = /** @class */ (function (_super) {
                __extends(HeaderSplitView, _super);
                function HeaderSplitView(initialState) {
                    var _this = _super.call(this) || this;
                    _this.title = _this.getObservable(initialState.title);
                    return _this;
                }
                return HeaderSplitView;
            }(PosControl_4.PosControl));
            exports_5("HeaderSplitView", HeaderSplitView);
        }
    };
});
System.register("PosUISdk/Controls/Loader", ["PosUISdk/Controls/PosControl"], function (exports_6, context_6) {
    "use strict";
    var PosControl_5, Loader;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (PosControl_5_1) {
                PosControl_5 = PosControl_5_1;
            }
        ],
        execute: function () {
            Loader = /** @class */ (function (_super) {
                __extends(Loader, _super);
                function Loader(initialState) {
                    var _this = _super.call(this) || this;
                    if (Commerce.ObjectExtensions.isNullOrUndefined(initialState)) {
                        throw new Commerce.UI.Sdk.InvalidConstructorStateException(Loader.CONTROL_NAME, "Invalid state provided to the Loader constructor: The initialState cannot be null or undefined.");
                    }
                    _this.visible = initialState.visible;
                    return _this;
                }
                Loader.CONTROL_NAME = "Loader";
                return Loader;
            }(PosControl_5.PosControl));
            exports_6("Loader", Loader);
        }
    };
});
System.register("PosUISdk/Controls/Menu", ["PosUISdk/Controls/PosControl"], function (exports_7, context_7) {
    "use strict";
    var PosControl_6, GenericMenuState, Menu, MenuCommand, ToggleMenu, ToggleMenuCommand;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [
            function (PosControl_6_1) {
                PosControl_6 = PosControl_6_1;
            }
        ],
        execute: function () {
            GenericMenuState = /** @class */ (function (_super) {
                __extends(GenericMenuState, _super);
                function GenericMenuState(initialState) {
                    var _this = _super.call(this) || this;
                    if (Commerce.ObjectExtensions.isNullOrUndefined(initialState)) {
                        throw new Commerce.UI.Sdk.InvalidConstructorStateException(GenericMenuState.CONTROL_NAME, "Invalid state provided to the Menu constructor: The initialState cannot be null or undefined.");
                    }
                    _this.anchorElement = ko.observable(null);
                    _this.visible = ko.observable(false);
                    _this.placement = initialState.placement;
                    _this.alignment = initialState.alignment;
                    _this.commands = initialState.commands;
                    return _this;
                }
                /**
                 * Show menu using anchor element.
                 * @param {HTMLElement} anchorElement The anchor element.
                 */
                GenericMenuState.prototype.show = function (anchorElement) {
                    if (Commerce.ObjectExtensions.isNullOrUndefined(anchorElement)) {
                        throw new Error("Invalid options passed to the Menu 'show' method: anchorElement cannot be null or undefined.");
                    }
                    this.anchorElement(anchorElement);
                    this.visible(true);
                };
                GenericMenuState.CONTROL_NAME = "Menu";
                return GenericMenuState;
            }(PosControl_6.PosControl));
            exports_7("GenericMenuState", GenericMenuState);
            Menu = /** @class */ (function (_super) {
                __extends(Menu, _super);
                function Menu() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return Menu;
            }(GenericMenuState));
            exports_7("Menu", Menu);
            MenuCommand = /** @class */ (function (_super) {
                __extends(MenuCommand, _super);
                function MenuCommand(initialState) {
                    var _this = _super.call(this) || this;
                    _this.BASE_CONTROL_NAME = "MenuCommand";
                    if (Commerce.ObjectExtensions.isNullOrUndefined(initialState)) {
                        throw new Commerce.UI.Sdk.InvalidConstructorStateException(_this.BASE_CONTROL_NAME, "Invalid state provided to the MenuCommand constructor: The initialState cannot be null or undefined.");
                    }
                    if (Commerce.StringExtensions.isNullOrWhitespace(initialState.id)) {
                        throw new Commerce.UI.Sdk.InvalidConstructorStateException(_this.BASE_CONTROL_NAME, "Invalid state provided to the MenuCommand constructor: The id cannot be null or empty.");
                    }
                    if (Commerce.StringExtensions.isNullOrWhitespace(initialState.label)) {
                        throw new Commerce.UI.Sdk.InvalidConstructorStateException(_this.BASE_CONTROL_NAME, "Invalid state provided to the MenuCommand constructor: The label cannot be null or empty.");
                    }
                    _this.id = initialState.id;
                    _this.label = initialState.label;
                    _this.onClick = initialState.onClick;
                    return _this;
                }
                return MenuCommand;
            }(PosControl_6.PosControl));
            exports_7("MenuCommand", MenuCommand);
            ToggleMenu = /** @class */ (function (_super) {
                __extends(ToggleMenu, _super);
                function ToggleMenu() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return ToggleMenu;
            }(GenericMenuState));
            exports_7("ToggleMenu", ToggleMenu);
            ToggleMenuCommand = /** @class */ (function (_super) {
                __extends(ToggleMenuCommand, _super);
                function ToggleMenuCommand(initialState) {
                    var _this = _super.call(this, initialState) || this;
                    _this.CONTROL_NAME = "ToggleMenuCommand";
                    if (Commerce.ObjectExtensions.isNullOrUndefined(initialState)) {
                        throw new Commerce.UI.Sdk.InvalidConstructorStateException(_this.CONTROL_NAME, "Invalid state provided to the ToggleMenuCommand constructor: The initialState cannot be null or undefined.");
                    }
                    _this.selected = initialState.selected;
                    return _this;
                }
                return ToggleMenuCommand;
            }(MenuCommand));
            exports_7("ToggleMenuCommand", ToggleMenuCommand);
        }
    };
});
System.register("PosUISdk/Controls/NumPad", ["PosUISdk/Controls/PosControl"], function (exports_8, context_8) {
    "use strict";
    var PosControl_7, NumPad, AlphanumericNumPad, DecimalPrecisionNumPad, CurrencyNumPad, NumericNumPad, TransactionNumPad;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [
            function (PosControl_7_1) {
                PosControl_7 = PosControl_7_1;
            }
        ],
        execute: function () {
            /**
             * Base class for numpad control.
             */
            NumPad = /** @class */ (function (_super) {
                __extends(NumPad, _super);
                function NumPad(initialState, controlName, numPadContainer) {
                    var _this = _super.call(this) || this;
                    if (Commerce.ObjectExtensions.isNullOrUndefined(initialState)) {
                        throw new Commerce.UI.Sdk.InvalidConstructorStateException(controlName, "Invalid state provided to the numpad constructor: The initialState cannot be null or undefined.");
                    }
                    if (initialState.captureGlobalInput
                        && (Commerce.ObjectExtensions.isNullOrUndefined(numPadContainer)
                            || Commerce.ObjectExtensions.isNullOrUndefined(numPadContainer.numPadInputBroker))) {
                        throw new Commerce.UI.Sdk.InvalidConstructorStateException(controlName, "Extension view controller or numPadInputBroker cannot be null or undefined if autoFocus is true.");
                    }
                    _this.label = initialState.label;
                    _this.value = ko.observable("");
                    if (initialState.captureGlobalInput) {
                        _this.numPadInputSource = numPadContainer.numPadInputBroker;
                        numPadContainer.captureGlobalInputForNumPad = true;
                    }
                    if (Commerce.ObjectExtensions.isFunction(initialState.onEnter)) {
                        _this.onEnter = initialState.onEnter;
                    }
                    return _this;
                }
                return NumPad;
            }(PosControl_7.PosControl));
            exports_8("NumPad", NumPad);
            /**
             * The class for the alphanumeric numpad control.
             */
            AlphanumericNumPad = /** @class */ (function (_super) {
                __extends(AlphanumericNumPad, _super);
                function AlphanumericNumPad(numPadContainer, initialState) {
                    return _super.call(this, initialState, "AlphanumericNumberPad", numPadContainer) || this;
                }
                return AlphanumericNumPad;
            }(NumPad));
            exports_8("AlphanumericNumPad", AlphanumericNumPad);
            /**
             * Base class for numpads that require decimal precision.
             */
            DecimalPrecisionNumPad = /** @class */ (function (_super) {
                __extends(DecimalPrecisionNumPad, _super);
                function DecimalPrecisionNumPad(initialState, controlName, numPadContainer) {
                    var _this = _super.call(this, initialState, controlName, numPadContainer) || this;
                    _this.decimalPrecision = initialState.decimalPrecision;
                    return _this;
                }
                return DecimalPrecisionNumPad;
            }(NumPad));
            exports_8("DecimalPrecisionNumPad", DecimalPrecisionNumPad);
            /**
             * The class for the currency numpad control. The decimal precision can be set on this numpad. The numbers typed follow currency format.
             * It will ignore letters.
             */
            CurrencyNumPad = /** @class */ (function (_super) {
                __extends(CurrencyNumPad, _super);
                function CurrencyNumPad(numPadContainer, initialState) {
                    return _super.call(this, initialState, "CurrencyNumberPad", numPadContainer) || this;
                }
                return CurrencyNumPad;
            }(DecimalPrecisionNumPad));
            exports_8("CurrencyNumPad", CurrencyNumPad);
            /**
             * The class for the numeric numpad control. The decimal precision can be set on this numpad. The numbers are not formmated as the currency numpad.
             * It will ignore letters.
             */
            NumericNumPad = /** @class */ (function (_super) {
                __extends(NumericNumPad, _super);
                function NumericNumPad(numPadContainer, initialState) {
                    return _super.call(this, initialState, "NumericNumberPad", numPadContainer) || this;
                }
                return NumericNumPad;
            }(DecimalPrecisionNumPad));
            exports_8("NumericNumPad", NumericNumPad);
            /**
             * The class for the transaction numpad control. This numpad is very similar to the alphanumeric one, but it also returns the quantity when "*" is typed.
             * For example: 5*0001. When the user press "enter", it will return on the callback function the value 0001 and quantity 5.
             */
            TransactionNumPad = /** @class */ (function (_super) {
                __extends(TransactionNumPad, _super);
                function TransactionNumPad(numPadContainer, initialState) {
                    return _super.call(this, initialState, "TransactionNumPad", numPadContainer) || this;
                }
                return TransactionNumPad;
            }(NumPad));
            exports_8("TransactionNumPad", TransactionNumPad);
        }
    };
});
System.register("PosUISdk/Controls/Pivot", ["PosUISdk/Controls/PosControl"], function (exports_9, context_9) {
    "use strict";
    var PosControl_8, Pivot, PivotItem;
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [
            function (PosControl_8_1) {
                PosControl_8 = PosControl_8_1;
            }
        ],
        execute: function () {
            Pivot = /** @class */ (function (_super) {
                __extends(Pivot, _super);
                function Pivot(initialState) {
                    var _this = _super.call(this) || this;
                    if (Commerce.ObjectExtensions.isNullOrUndefined(initialState)) {
                        throw new Commerce.UI.Sdk.InvalidConstructorStateException(Pivot.CONTROL_NAME, "Invalid state provided to the Pivot constructor: The initialState cannot be null or undefined.");
                    }
                    _this.onSelectionChanged = initialState.onSelectionChanged;
                    return _this;
                }
                Pivot.CONTROL_NAME = "Pivot";
                return Pivot;
            }(PosControl_8.PosControl));
            exports_9("Pivot", Pivot);
            PivotItem = /** @class */ (function (_super) {
                __extends(PivotItem, _super);
                function PivotItem(initialState) {
                    var _this = _super.call(this) || this;
                    _this.header = initialState.header;
                    return _this;
                }
                return PivotItem;
            }(PosControl_8.PosControl));
            exports_9("PivotItem", PivotItem);
        }
    };
});
System.register("PosUISdk/Controls/TimePicker", ["PosUISdk/Controls/PosControl"], function (exports_10, context_10) {
    "use strict";
    var PosControl_9, TimePicker;
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [
            function (PosControl_9_1) {
                PosControl_9 = PosControl_9_1;
            }
        ],
        execute: function () {
            TimePicker = /** @class */ (function (_super) {
                __extends(TimePicker, _super);
                function TimePicker(initialState) {
                    var _this = _super.call(this) || this;
                    if (Commerce.ObjectExtensions.isNullOrUndefined(initialState)) {
                        throw new Commerce.UI.Sdk.InvalidConstructorStateException(TimePicker.CONTROL_NAME, "Invalid state provided to the " + TimePicker.CONTROL_NAME + " constructor: The initialState cannot be null or undefined.");
                    }
                    if (!Commerce.ObjectExtensions.isFunction(initialState.onChange)) {
                        throw new Commerce.UI.Sdk.InvalidConstructorStateException(TimePicker.CONTROL_NAME, "Invalid state provided to the " + TimePicker.CONTROL_NAME + " constructor: The initialState.onChange callback must be set to a function.");
                    }
                    _this.hourPattern = initialState.hourPattern;
                    _this.minutePattern = initialState.minutePattern;
                    _this.minuteIncrement = initialState.minuteIncrement;
                    _this.current = initialState.initialValue;
                    _this.disabled = initialState.disabled;
                    _this.onChange = initialState.onChange;
                    return _this;
                }
                TimePicker.CONTROL_NAME = "TimePicker";
                return TimePicker;
            }(PosControl_9.PosControl));
            exports_10("TimePicker", TimePicker);
        }
    };
});
System.register("PosUISdk/Controls/ToggleSwitch", ["PosUISdk/Controls/PosControl"], function (exports_11, context_11) {
    "use strict";
    var PosControl_10, ToggleSwitch;
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [
            function (PosControl_10_1) {
                PosControl_10 = PosControl_10_1;
            }
        ],
        execute: function () {
            ToggleSwitch = /** @class */ (function (_super) {
                __extends(ToggleSwitch, _super);
                function ToggleSwitch(initialState) {
                    var _this = _super.call(this) || this;
                    if (Commerce.ObjectExtensions.isNullOrUndefined(initialState)) {
                        throw new Commerce.UI.Sdk.InvalidConstructorStateException(ToggleSwitch.CONTROL_NAME, "Invalid state provided to the ToggleSwitch constructor: The initialState cannot be null or undefined.");
                    }
                    else if (Commerce.StringExtensions.isNullOrWhitespace(initialState.labelOn)) {
                        throw new Commerce.UI.Sdk.InvalidConstructorStateException(ToggleSwitch.CONTROL_NAME, "Invalid state provided to the ToggleSwitch constructor: The initialState must contain a valid label when switch is on.");
                    }
                    else if (Commerce.ObjectExtensions.isNullOrUndefined(initialState.labelOff)) {
                        throw new Commerce.UI.Sdk.InvalidConstructorStateException(ToggleSwitch.CONTROL_NAME, "Invalid state provided to the ToggleSwitch constructor: The initialState must contain a valid label when switch is off.");
                    }
                    else if (Commerce.ObjectExtensions.isNullOrUndefined(initialState.tabIndex)) {
                        throw new Commerce.UI.Sdk.InvalidConstructorStateException(ToggleSwitch.CONTROL_NAME, "Invalid state provided to the ToggleSwitch constructor: The initialState must contain a valid tab index.");
                    }
                    else if (!Commerce.ObjectExtensions.isFunction(initialState.onChange)) {
                        throw new Commerce.UI.Sdk.InvalidConstructorStateException(ToggleSwitch.CONTROL_NAME, "Invalid state provided to the " + ToggleSwitch.CONTROL_NAME + " constructor: The initialState.onChange callback must be set to a function.");
                    }
                    _this.labelOn = initialState.labelOn;
                    _this.labelOff = initialState.labelOff;
                    _this.enabled = _this.getObservable(initialState.enabled, true);
                    _this.checked = _this.getObservable(initialState.checked, false);
                    // holds on to previously checked value.
                    _this._previousCheckedValue = _this.checked();
                    _this.tabIndex = initialState.tabIndex;
                    _this.onChange = _this._onChange.bind(_this);
                    _this._initialStateOnChange = initialState.onChange;
                    return _this;
                }
                ToggleSwitch.prototype._onChange = function (toggleSwitchResult) {
                    // Check if new switch result is different from previously saved value.
                    if (toggleSwitchResult !== this._previousCheckedValue &&
                        Commerce.ObjectExtensions.isFunction(this._initialStateOnChange)) {
                        this._previousCheckedValue = toggleSwitchResult;
                        this._initialStateOnChange(toggleSwitchResult);
                    }
                };
                ToggleSwitch.CONTROL_NAME = "ToggleSwitch";
                return ToggleSwitch;
            }(PosControl_10.PosControl));
            exports_11("ToggleSwitch", ToggleSwitch);
        }
    };
});
//# sourceMappingURL=Pos.UI.Sdk.js.map
// SIG // Begin signature block
// SIG // MIIkdQYJKoZIhvcNAQcCoIIkZjCCJGICAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // rw/ygqgR2rvGomheP2FvxTQOER6rhZm4zfUrkkRlk8qg
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
// SIG // SEXAQsmbdlsKgEhr/Xmfwb1tbWrJUnMTDXpQzTGCFkww
// SIG // ghZIAgEBMIGVMH4xCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xKDAm
// SIG // BgNVBAMTH01pY3Jvc29mdCBDb2RlIFNpZ25pbmcgUENB
// SIG // IDIwMTECEzMAAAEDXiUcmR+jHrgAAAAAAQMwDQYJYIZI
// SIG // AWUDBAIBBQCggdAwGQYJKoZIhvcNAQkDMQwGCisGAQQB
// SIG // gjcCAQQwHAYKKwYBBAGCNwIBCzEOMAwGCisGAQQBgjcC
// SIG // ARUwLwYJKoZIhvcNAQkEMSIEINJYvd2l3BIV+1f39yq0
// SIG // wfN9e7Ll0xUb88VYOFmpIlFCMGQGCisGAQQBgjcCAQwx
// SIG // VjBUoDaANABnAGwAbwBiAGEAbABpAHoAZQAuAGMAdQBs
// SIG // AHQAdQByAGUALgBsAHYALQBMAFYALgBqAHOhGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBABRW408zy1sEY2zr+5gmcYTuNNBJU1jPXMLO
// SIG // QDfQXriYszc7WDtTxgcPE0V41IzoqYnIFYVf39cWUEn5
// SIG // 5DE3Fg5kKr1eGuN8hNSa3CfhZ09OqorwU8h7uFYF3L0V
// SIG // AFOhBRpqKvpIil2OJ1yfDiZ1hc1eFwwezCBA8C+j4ViE
// SIG // 4PnXG24fYx6/WYC/ySRRG7U0TsbfWtDYyTWoYpTZKbOj
// SIG // xKK/EOVpi8txu1ljqUkiJAgZGrnNrmCsYegxGsFyZEYr
// SIG // I1WJ3OBuiV/W0hS20zmjtlzXHC7hT2rBQqPFGYE+NI55
// SIG // 10CPLNwe/jICU6jztuxV9g95xHvk3qNrPD8MTx8sHQKh
// SIG // ghO0MIITsAYKKwYBBAGCNwMDATGCE6AwghOcBgkqhkiG
// SIG // 9w0BBwKgghONMIITiQIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBVQYLKoZIhvcNAQkQAQSgggFEBIIBQDCCATwCAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQgAwOi
// SIG // SaH7lHLC2KphLaEssaSwCepSSjvnE47SjoUsRUQCBlx2
// SIG // pF91TxgTMjAxOTAzMTIwOTU0NDkuNjI2WjAEgAIB9KCB
// SIG // 1KSB0TCBzjELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEpMCcGA1UE
// SIG // CxMgTWljcm9zb2Z0IE9wZXJhdGlvbnMgUHVlcnRvIFJp
// SIG // Y28xJjAkBgNVBAsTHVRoYWxlcyBUU1MgRVNOOjE0OEMt
// SIG // QzRCOS0yMDY2MSUwIwYDVQQDExxNaWNyb3NvZnQgVGlt
// SIG // ZS1TdGFtcCBTZXJ2aWNloIIPHzCCBPUwggPdoAMCAQIC
// SIG // EzMAAADVpyPleJVqCf8AAAAAANUwDQYJKoZIhvcNAQEL
// SIG // BQAwfDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hp
// SIG // bmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoT
// SIG // FU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMd
// SIG // TWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTAwHhcN
// SIG // MTgwODIzMjAyNjQ1WhcNMTkxMTIzMjAyNjQ1WjCBzjEL
// SIG // MAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24x
// SIG // EDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jv
// SIG // c29mdCBDb3Jwb3JhdGlvbjEpMCcGA1UECxMgTWljcm9z
// SIG // b2Z0IE9wZXJhdGlvbnMgUHVlcnRvIFJpY28xJjAkBgNV
// SIG // BAsTHVRoYWxlcyBUU1MgRVNOOjE0OEMtQzRCOS0yMDY2
// SIG // MSUwIwYDVQQDExxNaWNyb3NvZnQgVGltZS1TdGFtcCBT
// SIG // ZXJ2aWNlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIB
// SIG // CgKCAQEAwhQJK64X8TSCMvzuifB27nQzUHBTFDC2tlYR
// SIG // BgKYsyEaE1H/d5DEEP2WpjgVjGFFnVvF+wiOztIq9wXS
// SIG // bVh+GArmP0F1m/O5552QRjwxVS7jXMHXx2f42Zp6XPm8
// SIG // XP0EurmEk8AR1mDdlH7h0/vX21Vck/+JWSyUtNMof9ip
// SIG // PxVyJ6Zc5RoKwr9F7vF0F7yoFKGw7BuAPvFVjCCZ6/P5
// SIG // tJndSxYKVxwEH2QyE0eGeIgqS4yjgE0nm177KnwoFXLO
// SIG // ie0qa06FLVco1IjLARYDNEYpm2U/foNUY7L1IZqPB5XR
// SIG // GMeSpkxQPW0SIhoOgGmJldpwc+d7UVAbBKMrg0yUSwID
// SIG // AQABo4IBGzCCARcwHQYDVR0OBBYEFCloozGUdkPZX10N
// SIG // m5/TsoT2YjeEMB8GA1UdIwQYMBaAFNVjOlyKMZDzQ3t8
// SIG // RhvFM2hahW1VMFYGA1UdHwRPME0wS6BJoEeGRWh0dHA6
// SIG // Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2kvY3JsL3Byb2R1
// SIG // Y3RzL01pY1RpbVN0YVBDQV8yMDEwLTA3LTAxLmNybDBa
// SIG // BggrBgEFBQcBAQROMEwwSgYIKwYBBQUHMAKGPmh0dHA6
// SIG // Ly93d3cubWljcm9zb2Z0LmNvbS9wa2kvY2VydHMvTWlj
// SIG // VGltU3RhUENBXzIwMTAtMDctMDEuY3J0MAwGA1UdEwEB
// SIG // /wQCMAAwEwYDVR0lBAwwCgYIKwYBBQUHAwgwDQYJKoZI
// SIG // hvcNAQELBQADggEBAHnZy8LpxNHAqy0O0ia/2megC/32
// SIG // wLbBAvLiuYHNYvaQj+yV4E1ejvhyp0Bahh8tEJCj4O5b
// SIG // abn/SYx7gOm88MtgJBJImQC27+FQvzTCKTlmpo28h+nu
// SIG // HX8In8oy4iB3xZuE1nEvIblLhbsCzrrtA2J/B4KuMWpk
// SIG // xX1e0E7bCPP1C2LVGN04iaFftXiR0JgpK11CDbEmFRT1
// SIG // m0+oamu2Fo+q2j0WF6qzfsLDa87e0CNioxdNkK/JvP7h
// SIG // tQfEha+q8khcum48/PXMK8Ki0t8HPMGJX2aIgQFeye/a
// SIG // ogiR0OchKqWshnWdd1Ed1eXhmEF/fABlH8TAgu8pqSwo
// SIG // VjOuTgswggZxMIIEWaADAgECAgphCYEqAAAAAAACMA0G
// SIG // CSqGSIb3DQEBCwUAMIGIMQswCQYDVQQGEwJVUzETMBEG
// SIG // A1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9u
// SIG // ZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MTIwMAYDVQQDEylNaWNyb3NvZnQgUm9vdCBDZXJ0aWZp
// SIG // Y2F0ZSBBdXRob3JpdHkgMjAxMDAeFw0xMDA3MDEyMTM2
// SIG // NTVaFw0yNTA3MDEyMTQ2NTVaMHwxCzAJBgNVBAYTAlVT
// SIG // MRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdS
// SIG // ZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9y
// SIG // YXRpb24xJjAkBgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0
// SIG // YW1wIFBDQSAyMDEwMIIBIjANBgkqhkiG9w0BAQEFAAOC
// SIG // AQ8AMIIBCgKCAQEAqR0NvHcRijog7PwTl/X6f2mUa3RU
// SIG // ENWlCgCChfvtfGhLLF/Fw+Vhwna3PmYrW/AVUycEMR9B
// SIG // GxqVHc4JE458YTBZsTBED/FgiIRUQwzXTbg4CLNC3ZOs
// SIG // 1nMwVyaCo0UN0Or1R4HNvyRgMlhgRvJYR4YyhB50YWeR
// SIG // X4FUsc+TTJLBxKZd0WETbijGGvmGgLvfYfxGwScdJGcS
// SIG // chohiq9LZIlQYrFd/XcfPfBXday9ikJNQFHRD5wGPmd/
// SIG // 9WbAA5ZEfu/QS/1u5ZrKsajyeioKMfDaTgaRtogINeh4
// SIG // HLDpmc085y9Euqf03GS9pAHBIAmTeM38vMDJRF1eFpwB
// SIG // BU8iTQIDAQABo4IB5jCCAeIwEAYJKwYBBAGCNxUBBAMC
// SIG // AQAwHQYDVR0OBBYEFNVjOlyKMZDzQ3t8RhvFM2hahW1V
// SIG // MBkGCSsGAQQBgjcUAgQMHgoAUwB1AGIAQwBBMAsGA1Ud
// SIG // DwQEAwIBhjAPBgNVHRMBAf8EBTADAQH/MB8GA1UdIwQY
// SIG // MBaAFNX2VsuP6KJcYmjRPZSQW9fOmhjEMFYGA1UdHwRP
// SIG // ME0wS6BJoEeGRWh0dHA6Ly9jcmwubWljcm9zb2Z0LmNv
// SIG // bS9wa2kvY3JsL3Byb2R1Y3RzL01pY1Jvb0NlckF1dF8y
// SIG // MDEwLTA2LTIzLmNybDBaBggrBgEFBQcBAQROMEwwSgYI
// SIG // KwYBBQUHMAKGPmh0dHA6Ly93d3cubWljcm9zb2Z0LmNv
// SIG // bS9wa2kvY2VydHMvTWljUm9vQ2VyQXV0XzIwMTAtMDYt
// SIG // MjMuY3J0MIGgBgNVHSABAf8EgZUwgZIwgY8GCSsGAQQB
// SIG // gjcuAzCBgTA9BggrBgEFBQcCARYxaHR0cDovL3d3dy5t
// SIG // aWNyb3NvZnQuY29tL1BLSS9kb2NzL0NQUy9kZWZhdWx0
// SIG // Lmh0bTBABggrBgEFBQcCAjA0HjIgHQBMAGUAZwBhAGwA
// SIG // XwBQAG8AbABpAGMAeQBfAFMAdABhAHQAZQBtAGUAbgB0
// SIG // AC4gHTANBgkqhkiG9w0BAQsFAAOCAgEAB+aIUQ3ixuCY
// SIG // P4FxAz2do6Ehb7Prpsz1Mb7PBeKp/vpXbRkws8LFZslq
// SIG // 3/Xn8Hi9x6ieJeP5vO1rVFcIK1GCRBL7uVOMzPRgEop2
// SIG // zEBAQZvcXBf/XPleFzWYJFZLdO9CEMivv3/Gf/I3fVo/
// SIG // HPKZeUqRUgCvOA8X9S95gWXZqbVr5MfO9sp6AG9LMEQk
// SIG // IjzP7QOllo9ZKby2/QThcJ8ySif9Va8v/rbljjO7Yl+a
// SIG // 21dA6fHOmWaQjP9qYn/dxUoLkSbiOewZSnFjnXshbcOc
// SIG // o6I8+n99lmqQeKZt0uGc+R38ONiU9MalCpaGpL2eGq4E
// SIG // QoO4tYCbIjggtSXlZOz39L9+Y1klD3ouOVd2onGqBooP
// SIG // iRa6YacRy5rYDkeagMXQzafQ732D8OE7cQnfXXSYIghh
// SIG // 2rBQHm+98eEA3+cxB6STOvdlR3jo+KhIq/fecn5ha293
// SIG // qYHLpwmsObvsxsvYgrRyzR30uIUBHoD7G4kqVDmyW9rI
// SIG // DVWZeodzOwjmmC3qjeAzLhIp9cAvVCch98isTtoouLGp
// SIG // 25ayp0Kiyc8ZQU3ghvkqmqMRZjDTu3QyS99je/WZii8b
// SIG // xyGvWbWu3EQ8l1Bx16HSxVXjad5XwdHeMMD9zOZN+w2/
// SIG // XU/pnR4ZOC+8z1gFLu8NoFA12u8JJxzVs341Hgi62jbb
// SIG // 01+P3nSISRKhggOtMIIClQIBATCB/qGB1KSB0TCBzjEL
// SIG // MAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24x
// SIG // EDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jv
// SIG // c29mdCBDb3Jwb3JhdGlvbjEpMCcGA1UECxMgTWljcm9z
// SIG // b2Z0IE9wZXJhdGlvbnMgUHVlcnRvIFJpY28xJjAkBgNV
// SIG // BAsTHVRoYWxlcyBUU1MgRVNOOjE0OEMtQzRCOS0yMDY2
// SIG // MSUwIwYDVQQDExxNaWNyb3NvZnQgVGltZS1TdGFtcCBT
// SIG // ZXJ2aWNloiUKAQEwCQYFKw4DAhoFAAMVAK3DJLzR2XXw
// SIG // XdDdRR85MZ5u1p6xoIHeMIHbpIHYMIHVMQswCQYDVQQG
// SIG // EwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UE
// SIG // BxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENv
// SIG // cnBvcmF0aW9uMSkwJwYDVQQLEyBNaWNyb3NvZnQgT3Bl
// SIG // cmF0aW9ucyBQdWVydG8gUmljbzEnMCUGA1UECxMebkNp
// SIG // cGhlciBOVFMgRVNOOjRERTktMEM1RS0zRTA5MSswKQYD
// SIG // VQQDEyJNaWNyb3NvZnQgVGltZSBTb3VyY2UgTWFzdGVy
// SIG // IENsb2NrMA0GCSqGSIb3DQEBBQUAAgUA4DERzDAiGA8y
// SIG // MDE5MDMxMjAwNTY0NFoYDzIwMTkwMzEzMDA1NjQ0WjB0
// SIG // MDoGCisGAQQBhFkKBAExLDAqMAoCBQDgMRHMAgEAMAcC
// SIG // AQACAgLoMAcCAQACAhiGMAoCBQDgMmNMAgEAMDYGCisG
// SIG // AQQBhFkKBAIxKDAmMAwGCisGAQQBhFkKAwGgCjAIAgEA
// SIG // AgMHoSChCjAIAgEAAgMHoSAwDQYJKoZIhvcNAQEFBQAD
// SIG // ggEBACEoZup1SV16RfJJjG/4CH5i3uXraZ3dYFOVqcQz
// SIG // +0XWBGMyMFAFAtdHxHs/Y1vDNGFFGeenpzM9ffnwkEmR
// SIG // YlDA0cNGWZYwHW1kX6oL7w8cI7lc5Dl6rYNBXm7OQhgF
// SIG // 6CTS+auK/weYhcTtxMRynUAz9sH4US8noblpaKHrgUw3
// SIG // kHIhavN2kHDc7oMSHc7w8CMDDLIpz53z3sef+anxmi46
// SIG // JxatxFiMTudfNmmRARn2Y30K19zNmLa1Rkj87jjwUJGK
// SIG // h7GmhbCMAOId8MvLgJLZhMmgULxE2VhvOPY1X9/xuLCM
// SIG // 7gpKebBBWmTrkI8PeEYvTv4byGp7S/fpcGGyz+sxggL1
// SIG // MIIC8QIBATCBkzB8MQswCQYDVQQGEwJVUzETMBEGA1UE
// SIG // CBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEe
// SIG // MBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYw
// SIG // JAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0Eg
// SIG // MjAxMAITMwAAANWnI+V4lWoJ/wAAAAAA1TANBglghkgB
// SIG // ZQMEAgEFAKCCATIwGgYJKoZIhvcNAQkDMQ0GCyqGSIb3
// SIG // DQEJEAEEMC8GCSqGSIb3DQEJBDEiBCD57SXzXGjywxzn
// SIG // eGqWhpwM0s7NWtPa4C+2/dh837JHNDCB4gYLKoZIhvcN
// SIG // AQkQAgwxgdIwgc8wgcwwgbEEFK3DJLzR2XXwXdDdRR85
// SIG // MZ5u1p6xMIGYMIGApH4wfDELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAg
// SIG // UENBIDIwMTACEzMAAADVpyPleJVqCf8AAAAAANUwFgQU
// SIG // tJWmkl+CdqyA2IRBwCfUsb+095wwDQYJKoZIhvcNAQEL
// SIG // BQAEggEAY5dzq/6vLtKoPPjO11VOXkBvxjDG/DtBH8BT
// SIG // jOa0htDDqZziU3E3TYg2bYchBau/9YktT1aEQq6Tl1Yo
// SIG // 5PTKDpsQnK0uXsbQ2O/yT/vpQ0gQl7Vy0cMJr6wzlLIF
// SIG // umWaOpHkGOnGB73xQwbpGHnU+C75CgusOHpESXDVUtQZ
// SIG // OVQwZftL8YOTVjqdCaj0PJfG+lBMEbXzCIVQhtZqXjlJ
// SIG // +eIMNxFoC0gLsyykL5U8gf0aYCgGgKhQOeqtslLzBPQr
// SIG // FmxkHsrhvSAkDmghA4HSw5dHLVeG9Viij3W4xcKdMNYA
// SIG // 6fLYLIQSQ8JWxEr65WvHw+ST/bPCrzZlEzVe0OElpw==
// SIG // End signature block
