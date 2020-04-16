/**
 * SAMPLE CODE NOTICE
 * 
 * THIS SAMPLE CODE IS MADE AVAILABLE AS IS.  MICROSOFT MAKES NO WARRANTIES, WHETHER EXPRESS OR IMPLIED,
 * OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY OR COMPLETENESS OF RESPONSES, OF RESULTS, OR CONDITIONS OF MERCHANTABILITY.
 * THE ENTIRE RISK OF THE USE OR THE RESULTS FROM THE USE OF THIS SAMPLE CODE REMAINS WITH THE USER.
 * NO TECHNICAL SUPPORT IS PROVIDED.  YOU MAY NOT DISTRIBUTE THIS CODE UNLESS YOU HAVE A LICENSE AGREEMENT WITH MICROSOFT THAT ALLOWS YOU TO DO SO.
 */

import * as NewView from "PosApi/Create/Views";
import * as HeaderSplitView from "PosUISdk/Controls/HeaderSplitView";
import * as DataList from "PosUISdk/Controls/DataList";

export interface IShiftData {
    requestDateTime: Date;
    requestedWorkerName: string;
    requestType: string;
    requestStatus: string;
}

/**
 * The controller for DataListView.
 */
export default class DataListView extends NewView.ExtensionViewControllerBase {
    public readonly headerSplitView: HeaderSplitView.HeaderSplitView;
    public readonly dataList: DataList.DataList<IShiftData>;
    public readonly dataListDataSource: ObservableArray<IShiftData>;

    constructor(context: NewView.IExtensionViewControllerContext) {
        // Do not save in history
        super(context, false);

        this.headerSplitView = new HeaderSplitView.HeaderSplitView({
            title: "DataList sample"
        });

        this.dataListDataSource = ko.observableArray([]);

        this.dataList = new DataList.DataList<IShiftData>({
            columns: [
                {
                    title: "Name",
                    ratio: 30,
                    collapseOrder: 3,
                    minWidth: 100,
                    computeValue: (value: IShiftData): string => {
                        return value.requestedWorkerName;
                    }
                },
                {
                    title: "Type",
                    ratio: 30,
                    collapseOrder: 1,
                    minWidth: 100,
                    computeValue: (value: IShiftData): string => {
                        return value.requestType;
                    }
                },
                {
                    title: "Status",
                    ratio: 40,
                    collapseOrder: 2,
                    minWidth: 100,
                    computeValue: (value: IShiftData): string => {
                        return value.requestStatus;
                    }
                }
            ],
            itemDataSource: this.dataListDataSource,
            selectionMode: DataList.SelectionMode.MultiSelect,
            selectionChanged: this.dataListSelectionChanged.bind(this)
        });

        this.dataListDataSource([{
            requestDateTime: new Date(),
            requestedWorkerName: "Allison Berker",
            requestType: "Leave request",
            requestStatus: "Approved"
        },
        {
            requestDateTime: new Date(),
            requestedWorkerName: "Bert Miner",
            requestType: "Shift Swap",
            requestStatus: "Pending"
        },
        {
            requestDateTime: new Date(),
            requestedWorkerName: "Greg Marchievsky",
            requestType: "Shift Offer",
            requestStatus: "Rejected"
        }]);
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
     * Callback for data list.
     */
    private dataListSelectionChanged(): void {
        this.context.logger.logInformational("dataListSelectionChanged");
    }
}
