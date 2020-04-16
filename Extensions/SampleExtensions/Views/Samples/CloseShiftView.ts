/**
 * SAMPLE CODE NOTICE
 * 
 * THIS SAMPLE CODE IS MADE AVAILABLE AS IS.  MICROSOFT MAKES NO WARRANTIES, WHETHER EXPRESS OR IMPLIED,
 * OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY OR COMPLETENESS OF RESPONSES, OF RESULTS, OR CONDITIONS OF MERCHANTABILITY.
 * THE ENTIRE RISK OF THE USE OR THE RESULTS FROM THE USE OF THIS SAMPLE CODE REMAINS WITH THE USER.
 * NO TECHNICAL SUPPORT IS PROVIDED.  YOU MAY NOT DISTRIBUTE THIS CODE UNLESS YOU HAVE A LICENSE AGREEMENT WITH MICROSOFT THAT ALLOWS YOU TO DO SO.
 */

import * as HeaderSplitView from "PosUISdk/Controls/HeaderSplitView";
import { CloseShiftOperationRequest, CloseShiftOperationResponse } from "PosApi/Consume/Shifts";
import { ClientEntities } from "PosApi/Entities";
import * as NewView from "PosApi/Create/Views";

/**
 * The controller for CloseShift.
 */
export default class CloseShiftView extends NewView.ExtensionViewControllerBase {
    public readonly headerSplitView: HeaderSplitView.HeaderSplitView;

    public lastStatus: Observable<string>;

    /**
     * Creates a new instance of the CloseShiftView class.
     * @param {NewView.IExtensionViewControllerContext} context The extension controller context.
     * @param {any} [options] The options used to initialize the view state.
     */
    constructor(context: NewView.IExtensionViewControllerContext, options?: any) {
        // Do not save in history
        super(context, false);
        this.headerSplitView = new HeaderSplitView.HeaderSplitView({
            title: "Close Shift"
        });

        this.lastStatus = ko.observable("");
    }

    /**
     * Bind the html element with view controller.
     * @param {HTMLElement} element DOM element.
     */
    public onReady(element: HTMLElement): void {
        super.onReady(element);

        // Customized binding
        ko.applyBindings(this, element);
    }

    /**
     * Performs the sync operation.
     */
    public closeShiftAsync(): void {
        let clientRequest: CloseShiftOperationRequest<CloseShiftOperationResponse> =
            new CloseShiftOperationRequest<CloseShiftOperationResponse>(this.context.logger.getNewCorrelationId());
        this.context.runtime.executeAsync(clientRequest)
            .then((result: ClientEntities.ICancelableDataResult<CloseShiftOperationResponse>) => {
                if (result.canceled) {
                    this.lastStatus("cancelled");
                } else {
                    this.lastStatus(JSON.stringify(result.data));
                }
            }).catch((error: any) => {
                this.lastStatus(JSON.stringify(error));
            });
    }
}
