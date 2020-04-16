/**
 * SAMPLE CODE NOTICE
 * 
 * THIS SAMPLE CODE IS MADE AVAILABLE AS IS.  MICROSOFT MAKES NO WARRANTIES, WHETHER EXPRESS OR IMPLIED,
 * OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY OR COMPLETENESS OF RESPONSES, OF RESULTS, OR CONDITIONS OF MERCHANTABILITY.
 * THE ENTIRE RISK OF THE USE OR THE RESULTS FROM THE USE OF THIS SAMPLE CODE REMAINS WITH THE USER.
 * NO TECHNICAL SUPPORT IS PROVIDED.  YOU MAY NOT DISTRIBUTE THIS CODE UNLESS YOU HAVE A LICENSE AGREEMENT WITH MICROSOFT THAT ALLOWS YOU TO DO SO.
 */

import { IExtensionViewControllerContext } from "PosApi/Create/Views";
import { GetDeviceConfigurationClientRequest, GetDeviceConfigurationClientResponse } from "PosApi/Consume/Device";
import { IStoreHoursExtensionViewModelOptions } from "./NavigationContracts";
import KnockoutExtensionViewModelBase from "./BaseClasses/KnockoutExtensionViewModelBase";
import * as ClientStoreHours from "../Entities/IStoreHours";
import StoreHoursDialogModule from "../Controls/Dialogs/StoreHoursDialogModule";
import { IStoreHoursDialogResult } from "../Controls/Dialogs/IStoreHoursDialogResult";
import { ObjectExtensions } from "PosApi/TypeExtensions";
import { ClientEntities, ProxyEntities } from "PosApi/Entities";
import StoreHourConverter from "../Converter/StoreHourConverter";
import { StoreHours } from "../DataService/DataServiceRequests.g";
import { Entities } from "../DataService/DataServiceEntities.g";

/**
 * The ViewModel for SimpleExtensionView.
 */
export default class StoreHoursViewModel extends KnockoutExtensionViewModelBase {
    public title: Observable<string>;
    public isBusy: Observable<boolean>;
    public currentStoreHours: ObservableArray<ClientStoreHours.IStoreHours>;
    private _context: IExtensionViewControllerContext;
    private _storeHours: ClientStoreHours.IStoreHours[];

    constructor(context: IExtensionViewControllerContext, options?: IStoreHoursExtensionViewModelOptions) {
        super();

        this._context = context;
        this.title = ko.observable(context.resources.getString("string_0"));
        this.isBusy = ko.observable(true);
        this.currentStoreHours = ko.observableArray([]);

        // Get current store number
        this._context.runtime.executeAsync(new GetDeviceConfigurationClientRequest())
            .then((response: ClientEntities.ICancelableDataResult<GetDeviceConfigurationClientResponse>): ProxyEntities.DeviceConfiguration => {
                return response.data.result;
            })
            // get store hours
            .then((deviceConfiguration: ProxyEntities.DeviceConfiguration)
                : Promise<ClientEntities.ICancelableDataResult<StoreHours.GetStoreDaysByStoreResponse>> => {
                return this._context.runtime.executeAsync(
                    new StoreHours.GetStoreDaysByStoreRequest<StoreHours.GetStoreDaysByStoreResponse>(deviceConfiguration.StoreNumber));
            }).then((response: ClientEntities.ICancelableDataResult<StoreHours.GetStoreDaysByStoreResponse>): void => {
                if (ObjectExtensions.isNullOrUndefined(response)
                    || ObjectExtensions.isNullOrUndefined(response.data)
                    || response.canceled) {
                    return;
                }

                let storeDayHours: ClientStoreHours.IStoreHours[] = [];
                response.data.result.forEach((storeHour: Entities.StoreDayHours): void => {
                    storeDayHours.push(StoreHourConverter.convertToClientStoreHours(storeHour));
                });
                this._storeHours = storeDayHours;
                this.currentStoreHours(this._storeHours);

                this.isBusy(false);
            }).catch((reason: any) => {
                this._context.logger.logError("StoreHoursView.StoreHoursDialog: " + JSON.stringify(reason));
                this.isBusy(false);
            });
    }

    /**
     * Handler for list item selection.
     * @param {any} item
     */
    public listItemSelected(item: any): void {
        this._context.logger.logInformational("Item selected on:" + item.weekDay);

        // Open update store hours dialog
        let dialog: StoreHoursDialogModule = new StoreHoursDialogModule();
        dialog.open(item)
            .then((result: IStoreHoursDialogResult): void => {
                // No action if it is cancel
                if (ObjectExtensions.isNullOrUndefined(result.updatedStoreHours)) {
                    return;
                }

                this.isBusy(true);

                let rsStoreDayHours: Entities.StoreDayHours = StoreHourConverter.convertToServerStoreHours(result.updatedStoreHours);
                this._context.runtime.executeAsync(
                        new StoreHours.UpdateStoreDayHoursRequest<StoreHours.UpdateStoreDayHoursResponse>(rsStoreDayHours.Id, rsStoreDayHours)
                    ).then((response: ClientEntities.ICancelableDataResult<StoreHours.UpdateStoreDayHoursResponse>): void => {
                        if (ObjectExtensions.isNullOrUndefined(response)
                            || ObjectExtensions.isNullOrUndefined(response.data)
                            || response.canceled) {
                            return;
                        }

                        this._context.logger.logInformational("Updated hours is: " + result.updatedStoreHours.openHour.toString());

                        let returnedStoreHours: ClientStoreHours.IStoreHours = StoreHourConverter.convertToClientStoreHours(response.data.result);
                        this._storeHours[item.weekDay - 1].openHour = returnedStoreHours.openHour;
                        this._storeHours[item.weekDay - 1].closeHour = returnedStoreHours.closeHour;
                        this.currentStoreHours(this._storeHours);

                        this.isBusy(false);
                    }).catch((reason: any) => {
                        this._context.logger.logError("StoreHoursView.StoreHoursDialog.UpdateStoreDayHoursRequest: " + JSON.stringify(reason));
                        this.isBusy(false);
                    });
            }).catch((reason: any) => {
                this._context.logger.logError("StoreHoursView.StoreHoursDialog: " + JSON.stringify(reason));
            });
    }
}
