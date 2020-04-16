/**
 * SAMPLE CODE NOTICE
 * 
 * THIS SAMPLE CODE IS MADE AVAILABLE AS IS.  MICROSOFT MAKES NO WARRANTIES, WHETHER EXPRESS OR IMPLIED,
 * OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY OR COMPLETENESS OF RESPONSES, OF RESULTS, OR CONDITIONS OF MERCHANTABILITY.
 * THE ENTIRE RISK OF THE USE OR THE RESULTS FROM THE USE OF THIS SAMPLE CODE REMAINS WITH THE USER.
 * NO TECHNICAL SUPPORT IS PROVIDED.  YOU MAY NOT DISTRIBUTE THIS CODE UNLESS YOU HAVE A LICENSE AGREEMENT WITH MICROSOFT THAT ALLOWS YOU TO DO SO.
 */

import { IExtensionViewControllerContext } from "PosApi/Create/Views";
import { AppBar, AppBarCommand, IAppBarCommandState } from "PosUISdk/Controls/AppBar";
import { HeaderSplitView, IHeaderSplitViewState } from "PosUISdk/Controls/HeaderSplitView";
import { Loader, ILoaderState } from "PosUISdk/Controls/Loader";
import { Pivot, IPivotState, PivotItem, IPivotItemState } from "PosUISdk/Controls/Pivot";
import { DataList, IDataListState, SelectionMode } from "PosUISdk/Controls/DataList";
import KnockoutExtensionViewControllerBase from "./BaseClasses/KnockoutExtensionViewControllerBase";
import { IEventRequest, SimpleNextViewModel } from "./SimpleNextViewModel";
import { ISimpleNextViewModelOptions } from "./NavigationContracts";
import { ClientEntities } from "PosApi/Entities";
import { DateFormatter } from "PosApi/Consume/Formatters";

/**
 * The controller for SimpleNextView.
 */
export default class SimpleNextView extends KnockoutExtensionViewControllerBase<SimpleNextViewModel> {
    public readonly viewModel: SimpleNextViewModel;
    public readonly dataList: DataList<IEventRequest>;
    public readonly headerSplitView: HeaderSplitView;
    public readonly appBar: AppBar;
    public readonly loader: Loader;
    public readonly navigateToSimpleViewCommand: AppBarCommand;
    public readonly pivot: Pivot;
    public readonly simplePivotItem: PivotItem;
    public readonly workerRequestPivotItem: PivotItem;

    constructor(context: IExtensionViewControllerContext, options: ISimpleNextViewModelOptions) {
        // Do not save the view in the navigation history.
        super(context, false);

        this.context.logger.logInformational("SimpleNextView loaded");

        // Initialize the view model.
        this.viewModel = new SimpleNextViewModel(context, options);

        // Initialize the POS SDK Controls.
        let dataListOptions: IDataListState<IEventRequest> = {
            selectionMode: SelectionMode.MultiSelect,
            itemInvoked: this.viewModel.listItemInvoked.bind(this.viewModel),
            selectionChanged: this.viewModel.selectionChanged.bind(this.viewModel),
            itemDataSource: this.viewModel.eventRequests,
            columns: [
                {
                    title: this.context.resources.getString("string_12"),
                    ratio: 20,
                    collapseOrder: 2,
                    minWidth: 100,
                    computeValue: (rowData: IEventRequest): string => { return DateFormatter.toShortDateAndTime(rowData.requestDateTime); }
                },
                {
                    title: this.context.resources.getString("string_13"),
                    ratio: 30,
                    collapseOrder: 4,
                    minWidth: 100,
                    computeValue: (rowData: IEventRequest): string => { return rowData.requestedWorkerName; }
                },
                {
                    title: this.context.resources.getString("string_14"),
                    ratio: 30,
                    collapseOrder: 1,
                    minWidth: 100,
                    computeValue: (rowData: IEventRequest): string => { return rowData.requestType; }
                },
                {
                    title: this.context.resources.getString("string_15"),
                    ratio: 20,
                    collapseOrder: 3,
                    minWidth: 100,
                    computeValue: (rowData: IEventRequest): string => { return rowData.requestStatus; }
                }
            ]
        };
        this.dataList = new DataList(dataListOptions);

        this.onBarcodeScanned = this._barcodeScannedHandler.bind(this);
        this.onMsrSwiped = this._msrSwipedHandler.bind(this);

        // Initialize the header split view.
        let splitViewState: IHeaderSplitViewState = {
            title: this.context.resources.getString("string_10")
        };

        this.headerSplitView = new HeaderSplitView(splitViewState);

        // Initialize the app bar.
        this.appBar = new AppBar();

        let commandState: IAppBarCommandState = {
            id: "updateMessageCommand",
            label: this.context.resources.getString("string_11"),
            execute: this.viewModel.updateMessage.bind(this.viewModel),
            extraClass: "iconLightningBolt"
        };

        this.navigateToSimpleViewCommand = new AppBarCommand(commandState);

        // Initialize the pivot.
        let simplePivotItemState: IPivotItemState = {
            header: this.context.resources.getString("string_8")
        };
        this.simplePivotItem = new PivotItem(simplePivotItemState);

        let extendedPivotItemState: IPivotItemState = {
            header: this.context.resources.getString("string_9")
        };
        this.workerRequestPivotItem = new PivotItem(extendedPivotItemState);

        let pivotState: IPivotState = {
            onSelectionChanged: this.viewModel.tabChanged.bind(this.viewModel, "onSelectionChanged")
        };
        this.pivot = new Pivot(pivotState);

        // Initialize the loader.
        let loaderState: ILoaderState = {
            visible: this.viewModel.isBusy
        };
        this.loader = new Loader(loaderState);
    }

    /**
     * Initializes the page state when the page is created.
     * @param {HTMLElement} element The view's DOM element.
     */
    public onReady(element: HTMLElement): void {
        super.onReady(element);

        this.viewModel.loadAsync();
    }

    /**
     * Handler for barcode scanned.
     * @param {string} barcode
     */
    private _barcodeScannedHandler(barcode: string): void {
        this.context.logger.logInformational(barcode);
    }

    /**
     * Handler for card swiped on msr.
     * @param {ClientEntities.ICardInfo} card
     */
    private _msrSwipedHandler(card: ClientEntities.ICardInfo): void {
        this.context.logger.logInformational(card.CardNumber);
    }
}