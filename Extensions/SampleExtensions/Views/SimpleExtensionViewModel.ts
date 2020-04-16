/**
 * SAMPLE CODE NOTICE
 * 
 * THIS SAMPLE CODE IS MADE AVAILABLE AS IS.  MICROSOFT MAKES NO WARRANTIES, WHETHER EXPRESS OR IMPLIED,
 * OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY OR COMPLETENESS OF RESPONSES, OF RESULTS, OR CONDITIONS OF MERCHANTABILITY.
 * THE ENTIRE RISK OF THE USE OR THE RESULTS FROM THE USE OF THIS SAMPLE CODE REMAINS WITH THE USER.
 * NO TECHNICAL SUPPORT IS PROVIDED.  YOU MAY NOT DISTRIBUTE THIS CODE UNLESS YOU HAVE A LICENSE AGREEMENT WITH MICROSOFT THAT ALLOWS YOU TO DO SO.
 */

import { IExtensionViewControllerContext } from "PosApi/Create/Views";
import { ObjectExtensions, StringExtensions } from "PosApi/TypeExtensions";
import { ISimpleExtensionViewModelOptions, ISimpleNextViewModelOptions } from "./NavigationContracts";
import DialogSampleModule from "../Controls/DialogSample/DialogSampleModule";
import { ISampleDialogResult } from "../Controls/DialogSample/IDialogSampleResult";
import BarcodeMsrDialog from "../Controls/BarcodeMsrDialog/BarcodeMsrDialog";
import { IBarcodeMsrDialogResult } from "../Controls/BarcodeMsrDialog/BarcodeMsrDialogTypes";
import MessageDialog from "../Controls/DialogSample/MessageDialog";

import KnockoutExtensionViewModelBase from "./BaseClasses/KnockoutExtensionViewModelBase";

/**
 * The ViewModel for SimpleExtensionView.
 */
export default class SimpleExtensionViewModel extends KnockoutExtensionViewModelBase {
    public simpleMessage: Observable<string>;
    public allowNavigateNext: Observable<boolean>;
    public title: Observable<string>;
    public dialogResult: Observable<string>;
    public date: Observable<Date>;
    public time: Observable<Date>;
    public permitDateAndTimeChanges: Observable<boolean>;
    public preventDateAndTimeChanges: Computed<boolean>;
    private _context: IExtensionViewControllerContext;

    constructor(context: IExtensionViewControllerContext, options?: ISimpleExtensionViewModelOptions) {
        super();

        if (ObjectExtensions.isNullOrUndefined(options) || StringExtensions.isNullOrWhitespace(options.displayMesssge)) {
            this.simpleMessage = ko.observable("string_51");
        } else {
            this.simpleMessage = ko.observable(options.displayMesssge);
        }

        this._context = context;
        this.allowNavigateNext = ko.observable(false);
        this.title = ko.observable(this._context.resources.getString("string_50"));
        this.dialogResult = ko.observable("");
        this.date = ko.observable(new Date());
        this.time = ko.observable(new Date());
        this.permitDateAndTimeChanges = ko.observable(true);
        this.preventDateAndTimeChanges = ko.computed((): boolean => { return !this.permitDateAndTimeChanges(); }, this);
    }

    /**
     * Update on screen display message when button is clicked.
     */
    public updateMessage(): void {
        this._context.logger.logInformational("SimpleExtensionViewModel: Updating message...");
        this.simpleMessage(this._context.resources.getString("string_52"));
        this.allowNavigateNext(true);
    }

    /**
     * Opens the templated dialog sample.
     */
    public openTemplatedDialog(): void {
        let dialog: DialogSampleModule = new DialogSampleModule();
        dialog.open(this._context.resources.getString("string_53")).then((result: ISampleDialogResult) => {
            this.dialogResult(StringExtensions.format(this._context.resources.getString("string_54"), result.selectedValue));
        }).catch((reason: any) => {
            this._context.logger.logError("SimpleExtensionViewModel.openTemplatedDialog: " + JSON.stringify(reason));
        });
    }

    /**
     * Opens the barcode msr dialog sample.
     */
    public openBarcodeMsrDialog(): void {
        let dialog: BarcodeMsrDialog = new BarcodeMsrDialog();
        dialog.open().then((result: IBarcodeMsrDialogResult): void => {
            if (!result.canceled) {
                this.dialogResult("InputType: " + result.inputType + " -- Input Value: " + result.value);
            }
        }).catch((reason: any): void => {
            this._context.logger.logError("SimpleExtensionViewModel.openBarcodeMsrDialog: " + JSON.stringify(reason));
        });
    }

    /**
     * Opens the message dialog sample.
     */
    public openMessageDialog(): void {
        MessageDialog.show(this._context, this._context.resources.getString("string_55")).then(() => {
            this._context.logger.logInformational("MessageDialog closed");
        });
    }
    /**
     * Navigate to SimpleNextView.
     */
    public navigateNext(): void {
        // Navigator to SimpleNext page.
        this._context.logger.logInformational("SimpleExtensionViewModel: Navigating to SimpleNextView...");
        let options: ISimpleNextViewModelOptions = { message: this._context.resources.getString("string_56") };
        this._context.navigator.navigate("SimpleNextView", options);
    }

    /**
     * Update on screen display message when toggle is changed.
     * @param {boolean} toggleValue The value of the toggle.
     */
    public toggleChanged(toggleValue: boolean): void {
        this.simpleMessage(StringExtensions.format(this._context.resources.getString("string_57"), toggleValue));
        this.permitDateAndTimeChanges(toggleValue);
    }
}
