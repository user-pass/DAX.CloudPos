/**
 * SAMPLE CODE NOTICE
 * 
 * THIS SAMPLE CODE IS MADE AVAILABLE AS IS.  MICROSOFT MAKES NO WARRANTIES, WHETHER EXPRESS OR IMPLIED,
 * OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY OR COMPLETENESS OF RESPONSES, OF RESULTS, OR CONDITIONS OF MERCHANTABILITY.
 * THE ENTIRE RISK OF THE USE OR THE RESULTS FROM THE USE OF THIS SAMPLE CODE REMAINS WITH THE USER.
 * NO TECHNICAL SUPPORT IS PROVIDED.  YOU MAY NOT DISTRIBUTE THIS CODE UNLESS YOU HAVE A LICENSE AGREEMENT WITH MICROSOFT THAT ALLOWS YOU TO DO SO.
 */

import * as NewView from "PosApi/Create/Views";
import KnockoutExtensionViewControllerBase from "./BaseClasses/KnockoutExtensionViewControllerBase";
import StoreHoursViewModel from "./StoreHoursViewModel";
import * as StoreHours from "../Entities/IStoreHours";
import StoreHourConverter from "../Converter/StoreHourConverter";
import { IStoreHoursExtensionViewModelOptions } from "./NavigationContracts";
import { HeaderSplitView, IHeaderSplitViewState } from "PosUISdk/Controls/HeaderSplitView";
import { DataList, IDataListState, SelectionMode } from "PosUISdk/Controls/DataList";
import { Loader, ILoaderState } from "PosUISdk/Controls/Loader";

/**
 * The controller for SimpleExtensionView.
 */
export default class StoreHoursView extends KnockoutExtensionViewControllerBase<StoreHoursViewModel> {
    public readonly viewModel: StoreHoursViewModel;
    public readonly headerSplitView: HeaderSplitView;
    public readonly dataList: DataList<StoreHours.IStoreHours>;
    public readonly loader: Loader;

    constructor(context: NewView.IExtensionViewControllerContext, options?: IStoreHoursExtensionViewModelOptions) {
        // Do not save in history
        super(context, false);

        // Initialize the view model.
        this.viewModel = new StoreHoursViewModel(context, options);

        // Initialize the POS SDK Controls.
        // Loader
        let loaderState: ILoaderState = {
            visible: this.viewModel.isBusy
        };

        this.loader = new Loader(loaderState);
        // HeaderSplit
        let headerSplitViewState: IHeaderSplitViewState = {
            title: this.viewModel.title
        };
        this.headerSplitView = new HeaderSplitView(headerSplitViewState);

        // DataList
        let dataListOptions: IDataListState<StoreHours.IStoreHours> = {
            selectionMode: SelectionMode.InvokeOnly,
            itemInvoked: this.viewModel.listItemSelected.bind(this.viewModel),
            itemDataSource: this.viewModel.currentStoreHours,
            columns: [
                {
                    title: context.resources.getString("string_1"), // Week Day,
                    ratio: 40, collapseOrder: 1, minWidth: 100,
                    computeValue: (event: StoreHours.IStoreHours): string => { return StoreHourConverter.getWeekdayName(event.weekDay); }
                },
                {
                    title: context.resources.getString("string_2"), // Open hour
                    ratio: 30, collapseOrder: 2, minWidth: 100,
                    computeValue: (event: StoreHours.IStoreHours): string => { return StoreHourConverter.formatStoreHour(event.openHour); }
                },
                {
                    title: context.resources.getString("string_3"), // Close hour
                    ratio: 30, collapseOrder: 3, minWidth: 100,
                    computeValue: (event: StoreHours.IStoreHours): string => { return StoreHourConverter.formatStoreHour(event.closeHour); }
                }
            ]
        };
        this.dataList = new DataList(dataListOptions);
    }
}