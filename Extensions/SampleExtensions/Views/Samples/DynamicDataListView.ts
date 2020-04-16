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
    requestId: number;
    requestDateTime: Date;
    requestedWorkerName: string;
    requestType: string;
    requestStatus: string;
}

/**
 * The controller for DynamicDataListView.
 */
export default class DynamicDataListView extends NewView.ExtensionViewControllerBase {
    public readonly headerSplitView: HeaderSplitView.HeaderSplitView;
    public readonly dataList: DataList.DataList<IShiftData>;

    constructor(context: NewView.IExtensionViewControllerContext) {
        // Do not save in history
        super(context, false);

        this.headerSplitView = new HeaderSplitView.HeaderSplitView({
            title: "Dynamic DataList sample"
        });

        let dataListDataSource: DataList.IIncrementalDataSource<IShiftData> = {
            pageSize: 5,
            loadDataPage: this.loadDataPage.bind(this)
        };

        this.dataList = new DataList.DataList<IShiftData>({
            columns: [
                {
                    title: "ID",
                    ratio: 20,
                    collapseOrder: 3,
                    minWidth: 100,
                    computeValue: (value: IShiftData): string => {
                        return value.requestId.toString();
                    }
                },
                {
                    title: "Name",
                    ratio: 30,
                    collapseOrder: 4,
                    minWidth: 100,
                    computeValue: (value: IShiftData): string => {
                        return value.requestedWorkerName;
                    }
                },
                {
                    title: "Type",
                    ratio: 25,
                    collapseOrder: 1,
                    minWidth: 100,
                    computeValue: (value: IShiftData): string => {
                        return value.requestType;
                    }
                },
                {
                    title: "Status",
                    ratio: 25,
                    collapseOrder: 2,
                    minWidth: 100,
                    computeValue: (value: IShiftData): string => {
                        return value.requestStatus;
                    }
                }
            ],
            itemDataSource: dataListDataSource,
            selectionMode: DataList.SelectionMode.MultiSelect,
            selectionChanged: this.dataListSelectionChanged.bind(this)
        });
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

    /**
     * Load data page callback.
     * @param {number} size The number of items to load.
     * @param {number} skip The number of items that were already loaded.
     * @returns {Promise<IShiftData[]>} The loaded items promise.
     */
    private loadDataPage(size: number, skip: number): Promise<IShiftData[]> {
        let promise: Promise<any> = new Promise((resolve: (value?: any) => void) => {
            // Emulate delay of request to server.
            setTimeout(() => {
                this.context.logger.logInformational("dataListPageLoaded");
                let pageData: IShiftData[] = this.getData(size, skip);
                resolve(pageData);
            }, 1000);
        });

        return promise;
    }

    /**
     * Gets items.
     * @param {number} size The number of items to return.
     * @param {number} skip The number of items to skip.
     * @returns {Promise<IShiftData[]>} The requested items.
     */
    private getData(size: number, skip: number): IShiftData[] {
        return [{
            requestId: 1,
            requestDateTime: new Date(),
            requestedWorkerName: "Allison Berker",
            requestType: "Leave request",
            requestStatus: "Approved"
        },
        {
            requestId: 2,
            requestDateTime: new Date(),
            requestedWorkerName: "Bert Miner",
            requestType: "Shift Swap",
            requestStatus: "Pending"
        },
        {
            requestId: 3,
            requestDateTime: new Date(),
            requestedWorkerName: "Greg Marchievsky",
            requestType: "Shift Offer",
            requestStatus: "Rejected"
        },
        {
            requestId: 4,
            requestDateTime: new Date(),
            requestedWorkerName: "Allison Berker",
            requestType: "Leave request",
            requestStatus: "Approved"
        },
        {
            requestId: 5,
            requestDateTime: new Date(),
            requestedWorkerName: "Bert Miner",
            requestType: "Shift Swap",
            requestStatus: "Pending"
        },
        {
            requestId: 6,
            requestDateTime: new Date(),
            requestedWorkerName: "Allison Berker",
            requestType: "Leave request",
            requestStatus: "Approved"
        },
        {
            requestId: 7,
            requestDateTime: new Date(),
            requestedWorkerName: "Bert Miner",
            requestType: "Shift Swap",
            requestStatus: "Pending"
        },
        {
            requestId: 8,
            requestDateTime: new Date(),
            requestedWorkerName: "Allison Berker",
            requestType: "Leave request",
            requestStatus: "Approved"
        },
        {
            requestId: 9,
            requestDateTime: new Date(),
            requestedWorkerName: "Bert Miner",
            requestType: "Shift Swap",
            requestStatus: "Pending"
        },
        {
            requestId: 10,
            requestDateTime: new Date(),
            requestedWorkerName: "Allison Berker",
            requestType: "Leave request",
            requestStatus: "Approved"
        },
        {
            requestId: 11,
            requestDateTime: new Date(),
            requestedWorkerName: "Bert Miner",
            requestType: "Shift Swap",
            requestStatus: "Pending"
        },
        {
            requestId: 12,
            requestDateTime: new Date(),
            requestedWorkerName: "Allison Berker",
            requestType: "Leave request",
            requestStatus: "Approved"
        },
        {
            requestId: 13,
            requestDateTime: new Date(),
            requestedWorkerName: "Bert Miner",
            requestType: "Shift Swap",
            requestStatus: "Pending"
        },
        {
            requestId: 14,
            requestDateTime: new Date(),
            requestedWorkerName: "Allison Berker",
            requestType: "Leave request",
            requestStatus: "Approved"
        },
        {
            requestId: 15,
            requestDateTime: new Date(),
            requestedWorkerName: "Allison Berker",
            requestType: "Leave request",
            requestStatus: "Approved"
        },
        {
            requestId: 16,
            requestDateTime: new Date(),
            requestedWorkerName: "Bert Miner",
            requestType: "Shift Swap",
            requestStatus: "Pending"
        },
        {
            requestId: 17,
            requestDateTime: new Date(),
            requestedWorkerName: "Allison Berker",
            requestType: "Leave request",
            requestStatus: "Approved"
        },
        {
            requestId: 18,
            requestDateTime: new Date(),
            requestedWorkerName: "Bert Miner",
            requestType: "Shift Swap",
            requestStatus: "Pending"
        },
        {
            requestId: 19,
            requestDateTime: new Date(),
            requestedWorkerName: "Allison Berker",
            requestType: "Leave request",
            requestStatus: "Approved"
        },
        {
            requestId: 20,
            requestDateTime: new Date(),
            requestedWorkerName: "Bert Miner",
            requestType: "Shift Swap",
            requestStatus: "Pending"
        },
        {
            requestId: 21,
            requestDateTime: new Date(),
            requestedWorkerName: "Allison Berker",
            requestType: "Leave request",
            requestStatus: "Approved"
        },
        {
            requestId: 22,
            requestDateTime: new Date(),
            requestedWorkerName: "Bert Miner",
            requestType: "Shift Swap",
            requestStatus: "Pending"
        },
        {
            requestId: 23,
            requestDateTime: new Date(),
            requestedWorkerName: "Allison Berker",
            requestType: "Leave request",
            requestStatus: "Approved"
        },
        {
            requestId: 24,
            requestDateTime: new Date(),
            requestedWorkerName: "Bert Miner",
            requestType: "Shift Swap",
            requestStatus: "Pending"
        },
        {
            requestId: 25,
            requestDateTime: new Date(),
            requestedWorkerName: "Allison Berker",
            requestType: "Leave request",
            requestStatus: "Approved"
        },
        {
            requestId: 26,
            requestDateTime: new Date(),
            requestedWorkerName: "Bert Miner",
            requestType: "Shift Swap",
            requestStatus: "Pending"
        },
        {
            requestId: 27,
            requestDateTime: new Date(),
            requestedWorkerName: "Allison Berker",
            requestType: "Leave request",
            requestStatus: "Approved"
        },
        {
            requestId: 28,
            requestDateTime: new Date(),
            requestedWorkerName: "Bert Miner",
            requestType: "Shift Swap",
            requestStatus: "Pending"
        },
        {
            requestId: 29,
            requestDateTime: new Date(),
            requestedWorkerName: "Allison Berker",
            requestType: "Leave request",
            requestStatus: "Approved"
        },
        {
            requestId: 30,
            requestDateTime: new Date(),
            requestedWorkerName: "Bert Miner",
            requestType: "Shift Swap",
            requestStatus: "Pending"
        }].slice(skip, skip + size);
    }
}
