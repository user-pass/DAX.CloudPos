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
import PromotionsViewModel from "./PromotionsViewModel";
import { Loader, ILoaderState } from "PosUISdk/Controls/Loader";
import { Pivot, IPivotState, PivotItem, IPivotItemState } from "PosUISdk/Controls/Pivot";
import { IPromotionsViewModelOptions } from "./NavigationContracts";
import { HeaderSplitView, IHeaderSplitViewState } from "PosUISdk/Controls/HeaderSplitView";
import { AppBar, AppBarCommand, IAppBarCommandState } from "PosUISdk/Controls/AppBar";
import { DataList, IDataListState, SelectionMode } from "PosUISdk/Controls/DataList";
import { ProxyEntities } from "PosApi/Entities";
import * as MenuControls from "PosUISdk/Controls/Menu";
import { BooleanFormatter, DateFormatter } from "PosApi/Consume/Formatters";
import { ObjectExtensions, StringExtensions } from "PosApi/TypeExtensions";

/**
 * The controller for PromotionsView.
 */
export default class PromotionsView extends KnockoutExtensionViewControllerBase<PromotionsViewModel> {
    public readonly viewModel: PromotionsViewModel;
    public readonly headerSplitView: HeaderSplitView;
    public readonly appBar: AppBar;
    public readonly loader: Loader;
    public readonly showConstantPromotionsDiscountsCommand: AppBarCommand;
    public readonly addToSaleCommand: AppBarCommand;
    public readonly sellNowCommand: AppBarCommand;
    public readonly availableDiscountsDataList: DataList<ProxyEntities.DiscountCode>;
    public readonly upcomingDiscountsDataList: DataList<ProxyEntities.DiscountCode>;
    public readonly promotionsPivot: Pivot;
    public readonly availableDiscountsPivotItem: PivotItem;
    public readonly upcomingDiscountsPivotItem: PivotItem;
    public readonly constantPromotionDiscountsMenu: MenuControls.Menu;
    private readonly _promotionsViewModelOptions?: IPromotionsViewModelOptions;

    /**
     * Initializes a new instance of the PromotionsViewModel class.
     * @param {IExtensionViewControllerContext} context The extension context.
     * @param {IPromotionsViewModelOptions} [options] The promotions view model options.
     */
    constructor(context: NewView.IExtensionViewControllerContext, options?: IPromotionsViewModelOptions) {
        // Do not save in history
        super(context, false);

        // Initialize the view model.
        this._promotionsViewModelOptions = options;
        this.viewModel = new PromotionsViewModel(context);

        // Initialize the POS SDK Controls.
        let headerSplitViewState: IHeaderSplitViewState = {
            title: this.viewModel.title
        };
        this.headerSplitView = new HeaderSplitView(headerSplitViewState);

        // Initialize the additional commands on the app bar
        let showConstantPromotionsDiscountsCommandState: IAppBarCommandState = {
            extraClass: "iconMoney",
            id: "showConstantPromotionDiscountsMenuCommand",
            execute: this.showConstantPromotionsDiscounts.bind(this),
            label: context.resources.getString("string_20"), // Discounts
            visible: true,
            enabled: true
        };

        let addToSaleCommandState: IAppBarCommandState = {
            extraClass: "iconAdd",
            id: "addToSaleCommand",
            execute: this.viewModel.addToSaleAsync.bind(this.viewModel),
            label: context.resources.getString("string_21"), // Add to sale
            visible: true,
            enabled: this.viewModel.canAddItem
        };

        let sellNowCommandState: IAppBarCommandState = {
            extraClass: "iconBuy",
            id: "sellNowCommand",
            execute: this.viewModel.sellNowAsync.bind(this.viewModel),
            label: context.resources.getString("string_22"), // Sell now,
            visible: true,
            enabled: this.viewModel.canAddItem
        };

        this.appBar = new AppBar();
        this.showConstantPromotionsDiscountsCommand = new AppBarCommand(showConstantPromotionsDiscountsCommandState);
        this.addToSaleCommand = new AppBarCommand(addToSaleCommandState);
        this.sellNowCommand = new AppBarCommand(sellNowCommandState);

        // Initialize the constant discounts menu and attach it to the menu bar
        let menuState: MenuControls.IMenuState = {
            placement: "top",
            commands: [{
                id: "apply5PercentTotalDiscountMenuCommand",
                label: context.resources.getString("string_25"), // Apply 5% total discount
                onClick: this.viewModel.setTransactionDiscount.bind(this.viewModel, 5)
            }, {
                id: "apply10PercentTotalDiscountMenuCommand",
                label: context.resources.getString("string_26"), // Apply 10% total discount
                onClick: this.viewModel.setTransactionDiscount.bind(this.viewModel, 10)
            }]
        };
        this.constantPromotionDiscountsMenu = new MenuControls.Menu(menuState);

        // Initialize the Available Discount DataList
        let availableDiscountDataListOptions: IDataListState<ProxyEntities.DiscountCode> = {
            selectionMode: SelectionMode.None,
            itemInvoked: this.viewModel.listItemInvoked.bind(this.viewModel),
            itemDataSource: this.viewModel.availablePromotions,
            columns: [
                {
                    title: context.resources.getString("string_10"), // Discount,
                    ratio: 10,
                    collapseOrder: 4,
                    minWidth: 50,
                    computeValue: (event: ProxyEntities.DiscountCode): string => {
                        return ObjectExtensions.isNullOrUndefined(event.Code) ? StringExtensions.EMPTY : event.Code;
                    }
                },
                {
                    title: context.resources.getString("string_11"), // Name
                    ratio: 50,
                    collapseOrder: 3,
                    minWidth: 100,
                    computeValue: (event: ProxyEntities.DiscountCode): string => {
                        return ObjectExtensions.isNullOrUndefined(event.Description) ? StringExtensions.EMPTY : event.Description;

                    }
                },
                {
                    title: context.resources.getString("string_13"), // End date
                    ratio: 20,
                    collapseOrder: 2,
                    minWidth: 50,
                    computeValue: (event: ProxyEntities.DiscountCode): string => {
                        return ObjectExtensions.isNullOrUndefined(event.ValidTo) ?
                            StringExtensions.EMPTY :
                            DateFormatter.toShortDateAndTime(event.ValidTo);
                    }
                },
                {
                    title: context.resources.getString("string_14"), // Coupon required
                    ratio: 20,
                    collapseOrder: 1,
                    minWidth: 25,
                    computeValue: (event: ProxyEntities.DiscountCode): string => { return BooleanFormatter.toYesNo(event.IsDiscountCodeRequired); }
                }
            ]
        };
        this.availableDiscountsDataList = new DataList(availableDiscountDataListOptions);

        // Initialize the Upcoming Discount DataList
        let upcomingDiscountDataListOptions: IDataListState<ProxyEntities.DiscountCode> = {
            selectionMode: SelectionMode.None,
            itemInvoked: this.viewModel.listItemInvoked.bind(this.viewModel),
            itemDataSource: this.viewModel.upcomingPromotions,
            columns: [
                {
                    title: context.resources.getString("string_10"), // Discount,
                    ratio: 10,
                    collapseOrder: 5,
                    minWidth: 50,
                    computeValue: (event: ProxyEntities.DiscountCode): string => {
                        return ObjectExtensions.isNullOrUndefined(event.Code) ? StringExtensions.EMPTY : event.Code;
                    }
                },
                {
                    title: context.resources.getString("string_11"), // Name
                    ratio: 40,
                    collapseOrder: 4,
                    minWidth: 100,
                    computeValue: (event: ProxyEntities.DiscountCode): string => {
                        return ObjectExtensions.isNullOrUndefined(event.Description) ? StringExtensions.EMPTY : event.Description;
                    }
                },
                {
                    title: context.resources.getString("string_12"), // Start date
                    ratio: 15,
                    collapseOrder: 3,
                    minWidth: 50,
                    computeValue: (event: ProxyEntities.DiscountCode): string => {
                        return ObjectExtensions.isNullOrUndefined(event.ValidFrom) ?
                            StringExtensions.EMPTY :
                            DateFormatter.toShortDateAndTime(event.ValidFrom);
                    }
                },
                {
                    title: context.resources.getString("string_13"), // End date
                    ratio: 15,
                    collapseOrder: 2,
                    minWidth: 50,
                    computeValue: (event: ProxyEntities.DiscountCode): string => {
                        return ObjectExtensions.isNullOrUndefined(event.ValidTo) ?
                            StringExtensions.EMPTY :
                            DateFormatter.toShortDateAndTime(event.ValidTo);
                    }
                },
                {
                    title: context.resources.getString("string_14"), // Coupon required
                    ratio: 20,
                    collapseOrder: 1,
                    minWidth: 25,
                    computeValue: (event: ProxyEntities.DiscountCode): string => { return BooleanFormatter.toYesNo(event.IsDiscountCodeRequired); }
                }
            ]
        };
        this.upcomingDiscountsDataList = new DataList(upcomingDiscountDataListOptions);

        // Initialize the Available Discount Pivot
        let availableDiscountsPivotItemState: IPivotItemState = {
            header: context.resources.getString("string_5") // Available
        };
        this.availableDiscountsPivotItem = new PivotItem(availableDiscountsPivotItemState);

        // Initialize the Upcoming Discount Pivot
        let upcomingDiscountsPivotItemState: IPivotItemState = {
            header: context.resources.getString("string_6") // Upcoming
        };
        this.upcomingDiscountsPivotItem = new PivotItem(upcomingDiscountsPivotItemState);

        // Set the Promotions Pivot
        let promotionsPivotState: IPivotState = {
        };

        this.promotionsPivot = new Pivot(promotionsPivotState);

        // Set the header
        let loaderState: ILoaderState = {
            visible: this.viewModel.isBusy
        };

        this.loader = new Loader(loaderState);
    }

    /**
     * Called when the element of the page is ready.
     * @param {HTMLElement} element DOM element.
     */
    public onReady(element: HTMLElement): void {
        super.onReady(element);
        this.viewModel.loadAsync(this._promotionsViewModelOptions);
    }

    /**
     * Called to show the constant promotions discounts.
     * @param {any} data DOM element.
     * @param {Event} event The click event.
     */
    public showConstantPromotionsDiscounts(data: any, event: Event): void {
        let anchor: HTMLElement = document.getElementById("showConstantPromotionDiscountsMenuCommand");
        this.constantPromotionDiscountsMenu.show(anchor);
    }
}