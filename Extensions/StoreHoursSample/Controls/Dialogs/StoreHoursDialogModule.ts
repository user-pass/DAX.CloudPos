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
import { IStoreHoursDialogResult } from "./IStoreHoursDialogResult";
import { Hours, IAvailableHour, IStoreHours } from "../../Entities/IStoreHours";
import StoreHourConverter from "../../Converter/StoreHourConverter";

type StoreHoursDialogResolve = (value: IStoreHoursDialogResult) => void;
type StoreHoursDialogReject = (reason: any) => void;

export default class DialogSampleModule extends Dialogs.ExtensionTemplatedDialogBase {
    public messagePassedToDialog: Observable<string>;
    public availableHours: ObservableArray<IAvailableHour>;
    public selectedOpenHour: Observable<Hours>;
    public selectedCloseHour: Observable<Hours>;

    private _resolve: StoreHoursDialogResolve;
    private _originalStoreHour: IStoreHours;

    constructor() {
        super();
        this.availableHours = ko.observableArray([
            { hour: Hours.zero, displayText: "00:00" },
            { hour: Hours.one, displayText: "01:00" },
            { hour: Hours.two, displayText: "02:00" },
            { hour: Hours.three, displayText: "03:00" },
            { hour: Hours.four, displayText: "04:00" },
            { hour: Hours.five, displayText: "05:00" },
            { hour: Hours.six, displayText: "06:00" },
            { hour: Hours.seven, displayText: "07:00" },
            { hour: Hours.eight, displayText: "08:00" },
            { hour: Hours.nine, displayText: "09:00" },
            { hour: Hours.ten, displayText: "10:00" },
            { hour: Hours.eleven, displayText: "11:00" },
            { hour: Hours.twelve, displayText: "12:00" },
            { hour: Hours.thirteen, displayText: "13:00" },
            { hour: Hours.fourteen, displayText: "14:00" },
            { hour: Hours.fifteen, displayText: "15:00" },
            { hour: Hours.sixteen, displayText: "16:00" },
            { hour: Hours.seventeen, displayText: "17:00" },
            { hour: Hours.eightteen, displayText: "18:00" },
            { hour: Hours.nineteen, displayText: "19:00" },
            { hour: Hours.twenty, displayText: "20:00" },
            { hour: Hours.twentyOne, displayText: "21:00" },
            { hour: Hours.twentyTwo, displayText: "22:00" },
            { hour: Hours.twentyThree, displayText: "23:00" },
            { hour: Hours.twentyFour, displayText: "24:00" }
        ]);
        this.selectedOpenHour = ko.observable(Hours.nine);
        this.selectedCloseHour = ko.observable(Hours.twenty);
    }

    public onReady(element: HTMLElement): void {
        ko.applyBindings(this, element);
    }

    public open(origStoreHours: IStoreHours): Promise<IStoreHoursDialogResult> {
        // set selected open and close hour
        this.selectedOpenHour(origStoreHours.openHour);
        this.selectedCloseHour(origStoreHours.closeHour);
        this._originalStoreHour = origStoreHours;

        let promise: Promise<IStoreHoursDialogResult> = new Promise((resolve: StoreHoursDialogResolve, reject: StoreHoursDialogReject) => {
            this._resolve = resolve;
            let option: Dialogs.ITemplatedDialogOptions = {
                title: "Update store hours for " + StoreHourConverter.getWeekdayName(origStoreHours.weekDay),
                button1: {
                    id: "btnUpdate",
                    label: this.context.resources.getString("string_4"),
                    isPrimary: true,
                    onClick: this.btnUpdateClickHandler.bind(this)
                },
                button2: {
                    id: "btnCancel",
                    label: this.context.resources.getString("string_5"),
                    onClick: this.btnCancelClickHandler.bind(this)
                }
            };

            this.openDialog(option);
        });

        return promise;
    }

    private btnUpdateClickHandler(): boolean {
        this.resolvePromise({
            id: this._originalStoreHour.id,
            weekDay: this._originalStoreHour.weekDay,
            openHour: this.selectedOpenHour(),
            closeHour: this.selectedCloseHour()
        });

        return true;
    }

    private btnCancelClickHandler(): boolean {
        // Cancel will return the original value
        // this.resolvePromise(this._originalStoreHour);
        this.resolvePromise(null);
        return true;
    }

    private resolvePromise(result: IStoreHours): void {
        if (ObjectExtensions.isFunction(this._resolve)) {
            this._resolve(<IStoreHoursDialogResult>{
                updatedStoreHours: result
            });

            this._resolve = null;
        }
    }
}