/**
 * SAMPLE CODE NOTICE
 * 
 * THIS SAMPLE CODE IS MADE AVAILABLE AS IS.  MICROSOFT MAKES NO WARRANTIES, WHETHER EXPRESS OR IMPLIED,
 * OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY OR COMPLETENESS OF RESPONSES, OF RESULTS, OR CONDITIONS OF MERCHANTABILITY.
 * THE ENTIRE RISK OF THE USE OR THE RESULTS FROM THE USE OF THIS SAMPLE CODE REMAINS WITH THE USER.
 * NO TECHNICAL SUPPORT IS PROVIDED.  YOU MAY NOT DISTRIBUTE THIS CODE UNLESS YOU HAVE A LICENSE AGREEMENT WITH MICROSOFT THAT ALLOWS YOU TO DO SO.
 */

import * as Dialogs from "PosApi/Create/Dialogs";
import { ObjectExtensions } from "PosApi/TypeExtensions";
import { ISampleDialogResult } from "./IDialogSampleResult";

type SampleMessageDialogResolve = (value: ISampleDialogResult) => void;
type SampleMessageDialogReject = (reason: any) => void;

export default class DialogSampleModule extends Dialogs.ExtensionTemplatedDialogBase {
    public messagePassedToDialog: Observable<string>;
    public userEnteredValue: Observable<string>;

    private resolve: SampleMessageDialogResolve;

    constructor() {
        super();
        this.userEnteredValue = ko.observable("");
    }

    public onReady(element: HTMLElement): void {
        ko.applyBindings(this, element);
    }

    public open(message: string): Promise<ISampleDialogResult> {
        this.userEnteredValue(message);

        let promise: Promise<ISampleDialogResult> = new Promise((resolve: SampleMessageDialogResolve, reject: SampleMessageDialogReject) => {
            this.resolve = resolve;
            let option: Dialogs.ITemplatedDialogOptions = {
                title: "Templated dialog sample",
                subTitle: "Dialog sub title",
                onCloseX: this.onCloseX.bind(this),
                button1: {
                    id: "Button1",
                    label: "OK",
                    isPrimary: true,
                    onClick: this.button1ClickHandler.bind(this)
                },
                button2: {
                    id: "Button2",
                    label: "Cancel",
                    onClick: this.button2ClickHandler.bind(this)
                }
            };

            this.openDialog(option);
        });

        this.setButtonDisabledState("Button1", true);

        return promise;
    }

    public closeDialogClicked(): void {
        this.closeDialog();
        this.resolvePromise("Closed");
    }

    public enableOkClicked(): void {
        this.setButtonDisabledState("Button1", false);
        this.resolvePromise("Closed");
    }

    private onCloseX(): boolean {
        this.resolvePromise("Closed");
        return true;
    }

    private button1ClickHandler(): boolean {
        this.resolvePromise("Everything ok");
        return true;
    }

    private button2ClickHandler(): boolean {
        this.resolvePromise("Canceled");
        return false;
    }

    private resolvePromise(result: string): void {
        if (ObjectExtensions.isFunction(this.resolve)) {
            this.resolve(<ISampleDialogResult>{
                selectedValue: result
            });

            this.resolve = null;
        }
    }
}