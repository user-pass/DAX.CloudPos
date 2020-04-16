/**
 * SAMPLE CODE NOTICE
 * 
 * THIS SAMPLE CODE IS MADE AVAILABLE AS IS.  MICROSOFT MAKES NO WARRANTIES, WHETHER EXPRESS OR IMPLIED,
 * OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY OR COMPLETENESS OF RESPONSES, OF RESULTS, OR CONDITIONS OF MERCHANTABILITY.
 * THE ENTIRE RISK OF THE USE OR THE RESULTS FROM THE USE OF THIS SAMPLE CODE REMAINS WITH THE USER.
 * NO TECHNICAL SUPPORT IS PROVIDED.  YOU MAY NOT DISTRIBUTE THIS CODE UNLESS YOU HAVE A LICENSE AGREEMENT WITH MICROSOFT THAT ALLOWS YOU TO DO SO.
 */

import { ProxyEntities } from "PosApi/Entities";
import { IExtensionCommandContext } from "PosApi/Extend/Views/AppBarCommands";
import * as SearchOrdersView from "PosApi/Extend/Views/SearchOrdersView";
import MessageDialog from "../../Controls/DialogSample/MessageDialog";

export default class SampleSearchOrdersCommand extends SearchOrdersView.SearchOrdersExtensionCommandBase {

    private _salesOrdertmp: ProxyEntities.SalesOrder;

    /**
     * Creates a new instance of the SampleSearchOrdersCommand class.
     * @param {IExtensionCommandContext<SearchOrdersView.ISearchOrdersToExtensionCommandMessageTypeMap>} context The command context.
     * @remarks The command context contains APIs through which a command can communicate with POS.
     */
    constructor(context: IExtensionCommandContext<SearchOrdersView.ISearchOrdersToExtensionCommandMessageTypeMap>) {
        super(context);

        this.id = "sampleSearchOrdersCommand";
        this.label = "Sample search orders command";
        this.extraClass = "iconLightningBolt";
    }

    /**
     * Initializes the command.
     * @param {SearchOrdersView.ISerchOrdersExtensionCommandState} state The state used to initialize the command.
     */
    protected init(state: SearchOrdersView.ISerchOrdersExtensionCommandState): void {
        this.isVisible = true;

        this.orderSelectionHandler = (data: SearchOrdersView.SearchOrdersSelectedData): void => {
            this.canExecute = true;
            this._salesOrdertmp = data.salesOrder;
        };

        this.orderSelectionClearedHandler = () => {
            this.canExecute = false;
            this._salesOrdertmp = undefined;
        };
    }

    /**
     * Executes the command.
     */
    protected execute(): void {
        let message: string = this._salesOrdertmp.Name + " : " + this._salesOrdertmp.CreatedDateTime;
        MessageDialog.show(this.context, message);
    }
}