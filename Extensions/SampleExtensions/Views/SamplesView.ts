/**
 * SAMPLE CODE NOTICE
 * 
 * THIS SAMPLE CODE IS MADE AVAILABLE AS IS.  MICROSOFT MAKES NO WARRANTIES, WHETHER EXPRESS OR IMPLIED,
 * OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY OR COMPLETENESS OF RESPONSES, OF RESULTS, OR CONDITIONS OF MERCHANTABILITY.
 * THE ENTIRE RISK OF THE USE OR THE RESULTS FROM THE USE OF THIS SAMPLE CODE REMAINS WITH THE USER.
 * NO TECHNICAL SUPPORT IS PROVIDED.  YOU MAY NOT DISTRIBUTE THIS CODE UNLESS YOU HAVE A LICENSE AGREEMENT WITH MICROSOFT THAT ALLOWS YOU TO DO SO.
 */

import * as NewView from "PosApi/Create/Views";
import { HeaderSplitView, IHeaderSplitViewState } from "PosUISdk/Controls/HeaderSplitView";

export interface ISampleItem {
    label: string;
    viewName?: string;
    items?: ISampleItem[];
}

/**
 * The controller for SamplesView.
 */
export default class SamplesView extends NewView.ExtensionViewControllerBase {
    public readonly headerSplitView: HeaderSplitView;
    public readonly samplesList: ISampleItem[];

    constructor(context: NewView.IExtensionViewControllerContext) {
        // Do not save in history
        super(context, false);

        // Initialize the POS SDK Controls.
        let headerSplitViewState: IHeaderSplitViewState = {
            title: "Samples"
        };

        this.headerSplitView = new HeaderSplitView(headerSplitViewState);

        this.samplesList = [
            {
                label: "Knockout Bindings",
                items: [
                    { label: "msPosAlphanumericNumPad", viewName: "AlphanumericNumPadView" },
                    { label: "msPosAppBar", viewName: "AppBarView" },
                    { label: "msPosCurrencyNumPad", viewName: "CurrencyNumPadView" },
                    { label: "msPosDataList", viewName: "DataListView" },
                    { label: "msPosDataList (dynamic)", viewName: "DynamicDataListView" },
                    { label: "msPosDatePicker", viewName: "DatePickerView" },
                    { label: "msPosHeaderSplitView", viewName: "HeaderSplitViewView" },
                    { label: "msPosLoader", viewName: "LoaderView" },
                    { label: "msPosMenu", viewName: "MenuView" },
                    { label: "msPosNumericNumPad", viewName: "NumericNumPadView" },
                    { label: "msPosPivot", viewName: "PivotView" },
                    { label: "msPosTimePicker", viewName: "TimePickerView" },
                    { label: "msPosToggleMenu", viewName: "ToggleMenuView" },
                    { label: "msPosToggleSwitch", viewName: "ToggleSwitchView" },
                    { label: "msPosTransactionNumPad", viewName: "TransactionNumPadView" }
                ]
            },
            {
                label: "Api",
                items: [
                    { label: "ApiView", viewName: "ApiView" },
                    { label: "AddTenderLineToCart", viewName: "AddTenderLineToCartView" },
                    { label: "CloseShift", viewName: "CloseShiftView" },
                    { label: "ForceVoidTransactionView", viewName: "ForceVoidTransactionView" },
                    { label: "SyncStockCountJournalsView", viewName: "SyncStockCountJournalsView" },
                    { label: "VoidTenderLineView", viewName: "VoidTenderLineView" },
                    { label: "VoidCartLineView", viewName: "VoidCartLineView" }
                ]
            },
            {
                label: "Other",
                items: [
                    { label: "SimpleExtensionView", viewName: "SimpleExtensionView" }
                ]
            },
            {
                label: "Dialogs",
                items: [
                    { label: "ListInputDialogView", viewName: "ListInputDialogView" },
                    { label: "AlphanumericInputDialogView", viewName: "AlphanumericInputDialogView" },
                    { label: "NumericInputDialogView", viewName: "NumericInputDialogView" },
                    { label: "TextInputDialogView", viewName: "TextInputDialogView" }
                ]
            }
        ];
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

    /**
     * Click handler for sample link.
     * @param sampleItem Sample item that was clicked.
     */
    public sampleClick(sampleItem: ISampleItem): void {
        this.context.navigator.navigate(sampleItem.viewName);
    }
}
