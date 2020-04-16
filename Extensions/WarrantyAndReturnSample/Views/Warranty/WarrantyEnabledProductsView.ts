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
import { Pivot, IPivotState } from "PosUISdk/Controls/Pivot";
import { PivotItem, IPivotItemState } from "PosUISdk/Controls/Pivot";
import { AppBar, AppBarCommand, IAppBarCommandState } from "PosUISdk/Controls/AppBar";
import { DataList, IDataListState, SelectionMode } from "PosUISdk/Controls/DataList";
import { Loader, ILoaderState } from "PosUISdk/Controls/Loader";

import WarrantyEnabledProductsViewModel from "./WarrantyEnabledProductsViewModel";
import { IWarrantyEnabledProductsViewModelOptions } from "./IWarrantyEnabledProductsViewModelOptions";
import { ISalesLineProduct } from "./WarrantyEnabledProductsViewModel";

/**
 * The controller for BuyWarrantyView.
 */
export default class WarrantyEnabledProductsView extends NewView.ExtensionViewControllerBase {
    public readonly viewModel: WarrantyEnabledProductsViewModel;
    public readonly loader: Loader;
    public readonly headerSplitView: HeaderSplitView;
    public readonly appBar: AppBar;
    public readonly selectWarrantyPlanCommand: AppBarCommand;
    public readonly dataList: DataList<ISalesLineProduct>;
    public readonly noProductsWithWarrantyMessage: string = this.context.resources.getString("NoWarrantyEnabledProductsMessage");
    public readonly pivot: Pivot;
    public readonly pivotItem: PivotItem;

    /**
     * Creates an instance of the WarrantyEnabledProductsView class.
     * @param {NewView.IExtensionViewControllerContext} context The extension context.
     * @param {IWarrantyEnabledProductsViewModelOptions} options The view model options.
     */
    constructor(context: NewView.IExtensionViewControllerContext, options?: IWarrantyEnabledProductsViewModelOptions) {
        // Do not save in history
        super(context, false);

        // Initialize the view model.
        this.viewModel = new WarrantyEnabledProductsViewModel(context, options);

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
            id: "selectWarrantyPlanCommand",
            label: this.context.resources.getString("ShowWarrantyPlansLabel"),
            execute: this.viewModel.showWarrantyPlans.bind(this.viewModel),
            extraClass: "iconLightningBolt"
        };
        this.selectWarrantyPlanCommand = new AppBarCommand(commandState);

        let simplePivotItemState: IPivotItemState = { header: this.context.resources.getString("WarrantyEnabledProductsHeaderLabel") };
        this.pivotItem = new PivotItem(simplePivotItemState);

        let pivotState: IPivotState = { onSelectionChanged: undefined };
        this.pivot = new Pivot(pivotState);

        let dataListOptions: IDataListState<ISalesLineProduct> = {
            emptyDataListTemplateId: "noProductsWithWarranty",
            autoSelectFirstItem: true,
            selectionMode: SelectionMode.SingleSelect,
            selectionChanged: this.viewModel.selectionChanged.bind(this.viewModel),
            itemDataSource: this.viewModel.warrantyEnabledProducts,
            columns: [
                {
                    title: context.resources.getString("ItemIdColumnName"),
                    ratio: 20,
                    collapseOrder: 3,
                    minWidth: 100,
                    computeValue: (rowData: ISalesLineProduct): string => rowData.salesLine.ItemId
                },
                {
                    title: context.resources.getString("NameColumnName"),
                    ratio: 30,
                    collapseOrder: 4,
                    minWidth: 100,
                    computeValue: (rowData: ISalesLineProduct): string => rowData.product.Name
                },
                {
                    title: context.resources.getString("QuantityColumnName"),
                    ratio: 30,
                    collapseOrder: 1,
                    minWidth: 100,
                    computeValue: (rowData: ISalesLineProduct): number => rowData.salesLine.Quantity
                },
                {
                    title: context.resources.getString("PriceColumnName"),
                    ratio: 20,
                    collapseOrder: 2,
                    minWidth: 100,
                    computeValue: (rowData: ISalesLineProduct): string => CurrencyFormatter.toCurrency(rowData.salesLine.Price)
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
    }
}