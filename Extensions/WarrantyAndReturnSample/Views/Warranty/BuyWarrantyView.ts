/**
 * SAMPLE CODE NOTICE
 * 
 * THIS SAMPLE CODE IS MADE AVAILABLE AS IS.  MICROSOFT MAKES NO WARRANTIES, WHETHER EXPRESS OR IMPLIED,
 * OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY OR COMPLETENESS OF RESPONSES, OF RESULTS, OR CONDITIONS OF MERCHANTABILITY.
 * THE ENTIRE RISK OF THE USE OR THE RESULTS FROM THE USE OF THIS SAMPLE CODE REMAINS WITH THE USER.
 * NO TECHNICAL SUPPORT IS PROVIDED.  YOU MAY NOT DISTRIBUTE THIS CODE UNLESS YOU HAVE A LICENSE AGREEMENT WITH MICROSOFT THAT ALLOWS YOU TO DO SO.
 */

import * as NewView from "PosApi/Create/Views";
import { CurrencyFormatter } from "PosApi/Consume/Formatters";
import { HeaderSplitView, IHeaderSplitViewState } from "PosUISdk/Controls/HeaderSplitView";
import { AppBar, AppBarCommand, IAppBarCommandState } from "PosUISdk/Controls/AppBar";
import { DataList, IDataListState, SelectionMode } from "PosUISdk/Controls/DataList";
import { Loader, ILoaderState } from "PosUISdk/Controls/Loader";

import BuyWarrantyViewModel from "./BuyWarrantyViewModel";
import { IBuyWarrantyViewModelOptions } from "./IBuyWarrantyViewModelOptions";
import { Entities } from "../../DataService/DataServiceRequests.g";

/**
 * The controller for BuyWarrantyView.
 */
export default class BuyWarrantyView extends NewView.ExtensionViewControllerBase {
    public readonly viewModel: BuyWarrantyViewModel;
    public readonly loader: Loader;
    public readonly headerSplitView: HeaderSplitView;
    public readonly appBar: AppBar;
    public readonly buyWarrantyPlanCommand: AppBarCommand;
    public readonly dataList: DataList<Entities.WarrantyPlan>;

    /**
     * Creates an instance of the BuyWarrantyView class.
     * @param {NewView.IExtensionViewControllerContext} context The extension context.
     * @param {IBuyWarrantyViewModelOptions} options The view model options.
     */
    constructor(context: NewView.IExtensionViewControllerContext, options?: IBuyWarrantyViewModelOptions) {
        // Do not save in history
        super(context, false);

        // Initialize the view model.
        this.viewModel = new BuyWarrantyViewModel(context, options);

        // Initialize the POS SDK Controls.
        let loaderState: ILoaderState = {
            visible: this.viewModel.isBusy
        };

        this.loader = new Loader(loaderState);

        let headerSplitViewState: IHeaderSplitViewState = {
            title: this.viewModel.title
        };

        this.headerSplitView = new HeaderSplitView(headerSplitViewState);
        this.appBar = new AppBar();

        let commandState: IAppBarCommandState = {
            id: "buyWarrantyPlanCommand",
            label: this.context.resources.getString("AddToTransactionLabel"),
            execute: this.viewModel.buyWarrantyPlan.bind(this.viewModel),
            extraClass: "iconLightningBolt"
        };
        this.buyWarrantyPlanCommand = new AppBarCommand(commandState);

        let dataListOptions: IDataListState<Entities.WarrantyPlan> = {
            autoSelectFirstItem: true,
            selectionMode: SelectionMode.SingleSelect,
            selectionChanged: this.viewModel.selectionChanged.bind(this.viewModel),
            itemDataSource: this.viewModel.warrantyPlans,
            columns: [
                {
                    title: context.resources.getString("PlanIdColumnName"),
                    ratio: 20,
                    collapseOrder: 1,
                    minWidth: 100,
                    computeValue: (rowData: Entities.WarrantyPlan): number => rowData.PlanId
                },
                {
                    title: context.resources.getString("NameColumnName"),
                    ratio: 60,
                    collapseOrder: 3,
                    minWidth: 100,
                    computeValue: (rowData: Entities.WarrantyPlan): string => rowData.Name
                },
                {
                    title: context.resources.getString("PriceColumnName"),
                    ratio: 20,
                    collapseOrder: 2,
                    minWidth: 100,
                    computeValue: (rowData: Entities.WarrantyPlan): string => CurrencyFormatter.toCurrency(rowData.Price)
                }
            ]
        };
        this.dataList = new DataList(dataListOptions);
    }

    /**
     * Bind the html element with view controller.
     *
     * @param {HTMLElement} element DOM element.
     */
    public onReady(element: HTMLElement): void {
        super.onReady(element);

        // Customized binding
        ko.applyBindings(this, element);

        this.viewModel.load();
    }
}