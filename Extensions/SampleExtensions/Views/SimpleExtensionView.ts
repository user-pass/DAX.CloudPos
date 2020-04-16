/**
 * SAMPLE CODE NOTICE
 * 
 * THIS SAMPLE CODE IS MADE AVAILABLE AS IS.  MICROSOFT MAKES NO WARRANTIES, WHETHER EXPRESS OR IMPLIED,
 * OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY OR COMPLETENESS OF RESPONSES, OF RESULTS, OR CONDITIONS OF MERCHANTABILITY.
 * THE ENTIRE RISK OF THE USE OR THE RESULTS FROM THE USE OF THIS SAMPLE CODE REMAINS WITH THE USER.
 * NO TECHNICAL SUPPORT IS PROVIDED.  YOU MAY NOT DISTRIBUTE THIS CODE UNLESS YOU HAVE A LICENSE AGREEMENT WITH MICROSOFT THAT ALLOWS YOU TO DO SO.
 */

import * as NewView from "PosApi/Create/Views";
import { ClientEntities } from "PosApi/Entities";
import KnockoutExtensionViewControllerBase from "./BaseClasses/KnockoutExtensionViewControllerBase";
import SimpleExtensionViewModel from "./SimpleExtensionViewModel";
import { ISimpleExtensionViewModelOptions } from "./NavigationContracts";
import { AppBar, AppBarCommand, IAppBarCommandState } from "PosUISdk/Controls/AppBar";
import { DatePicker, IDatePickerState } from "PosUISdk/Controls/DatePicker";
import { HeaderSplitView, IHeaderSplitViewState } from "PosUISdk/Controls/HeaderSplitView";
import { TimePicker, ITimePickerState } from "PosUISdk/Controls/TimePicker";
import { ToggleSwitch, IToggleSwitchState } from "PosUISdk/Controls/ToggleSwitch";
import * as MenuControls from "PosUISdk/Controls/Menu";

/**
 * The controller for SimpleExtensionView.
 */
export default class SimpleExtensionView extends KnockoutExtensionViewControllerBase<SimpleExtensionViewModel> {
    public readonly viewModel: SimpleExtensionViewModel;
    public readonly appBar: AppBar;
    public readonly datePicker: DatePicker;
    public readonly headerSplitView: HeaderSplitView;
    public readonly navigateNextCommand: AppBarCommand;
    public readonly timePicker: TimePicker;
    public readonly toggleSwitch: ToggleSwitch;
    public readonly menuStatic: MenuControls.Menu;
    public readonly toggleMenuStatic: MenuControls.ToggleMenu;
    public readonly toggleMenuCommandStatic1: MenuControls.ToggleMenuCommand;
    public readonly toggleMenuCommandStatic2: MenuControls.ToggleMenuCommand;

    constructor(context: NewView.IExtensionViewControllerContext, options?: ISimpleExtensionViewModelOptions) {
        // Do not save in history
        super(context, false);

        this.onBarcodeScanned = this._barcodeScannedHandler.bind(this);
        this.onMsrSwiped = this._msrSwipedHandler.bind(this);

        // Initialize the view model.
        this.viewModel = new SimpleExtensionViewModel(context, options);

        // Initialize the POS SDK Controls.
        let headerSplitViewState: IHeaderSplitViewState = {
            title: this.viewModel.title
        };

        this.headerSplitView = new HeaderSplitView(headerSplitViewState);
        let navigateNextCommandState: IAppBarCommandState = {
            extraClass: "iconAdd",
            id: "navigateToNextPageCommand",
            execute: this.viewModel.navigateNext.bind(this.viewModel),
            label: this.context.resources.getString("string_58"),
            visible: true,
            enabled: this.viewModel.allowNavigateNext
        };

        this.appBar = new AppBar();
        this.navigateNextCommand = new AppBarCommand(navigateNextCommandState);

        let toggleSwitchState: IToggleSwitchState = {
            labelOn: this.context.resources.getString("string_59"),
            labelOff: this.context.resources.getString("string_60"),
            tabIndex: 0,
            checked: this.viewModel.permitDateAndTimeChanges(),
            enabled: true,
            onChange: this.viewModel.toggleChanged.bind(this.viewModel)
        };
        this.toggleSwitch = new ToggleSwitch(toggleSwitchState);

        // Initialize the date picker.
        let datePickerState: IDatePickerState = {
            initialValue: this.viewModel.date(),
            onChange: (newDate: Date): void => { this.viewModel.date(newDate); },
            disabled: this.viewModel.preventDateAndTimeChanges
        };
        this.datePicker = new DatePicker(datePickerState);

        // Initialize the time picker.
        let timePickerState: ITimePickerState = {
            minuteIncrement: 15,
            initialValue: this.viewModel.time(),
            onChange: (newDate: Date): void => { this.viewModel.time(newDate); },
            disabled: this.viewModel.preventDateAndTimeChanges
        };
        this.timePicker = new TimePicker(timePickerState);

        // Menu
        let menuState: MenuControls.IMenuState = {
            placement: "bottom",
            commands: [{
                id: "MenuCommand1",
                label: this.context.resources.getString("string_61"),
                onClick: this._menuCommandClick.bind(this)
            }, {
                id: "MenuCommand2",
                label: this.context.resources.getString("string_62"),
                onClick: this._menuCommandClick2.bind(this)
            }]
        };
        this.menuStatic = new MenuControls.Menu(menuState);

        // Toggle menu
        let toggleMenuState: MenuControls.IToggleMenuState = {
            placement: "bottom",
            commands: [{
                id: "MenuCommand1",
                label: this.context.resources.getString("string_61"),
                onClick: this._menuCommandClick.bind(this)
            }, {
                id: "MenuCommand2",
                label: this.context.resources.getString("string_62"),
                selected: true,
                onClick: this._menuCommandClick2.bind(this)
            }]
        };
        this.toggleMenuStatic = new MenuControls.ToggleMenu(toggleMenuState);
    }

    /**
     * Shows the toggle menu.
     * @param {any} data The data.
     * @param {Event} event The event.
     */
    public showToggleMenuStatic(data: any, event: Event): void {
        this.toggleMenuStatic.show(<HTMLElement>event.currentTarget);
    }

    /**
     * Shows the static menu.
     * @param {any} data The data.
     * @param {Event} event The event.
     */
    public showMenuStatic(data: any, event: Event): void {
        this.menuStatic.show(<HTMLElement>event.currentTarget);
    }

    /**
     * The click handler for the first menu command.
     */
    private _menuCommandClick(): void {
        this.context.logger.logVerbose("menuCommandClick1");
    }

    /**
     * The click handler for the second menu command.
     */
    private _menuCommandClick2(): void {
        this.context.logger.logVerbose("menuCommandClick2");
    }

    /**
     * Handler for barcode scanned.
     * @param {string} barcode The barcode that was scanned.
     */
    private _barcodeScannedHandler(barcode: string): void {
        this.context.logger.logVerbose(barcode);
    }

    /**
     * Handler for card swiped on msr.
     * @param {ClientEntities.ICardInfo} card The card information
     */
    private _msrSwipedHandler(card: ClientEntities.ICardInfo): void {
        this.context.logger.logVerbose(JSON.stringify(card));
    }
}
