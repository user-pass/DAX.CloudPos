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

import * as Pivot from "PosUISdk/Controls/Pivot";

/**
 * The controller for PivotView.
 */
export default class PivotView extends NewView.ExtensionViewControllerBase {
    public readonly headerSplitView: HeaderSplitView.HeaderSplitView;
    public readonly pivot: Pivot.Pivot;
    public readonly pivotItem1: Pivot.PivotItem;
    public readonly pivotItem2: Pivot.PivotItem;

    constructor(context: NewView.IExtensionViewControllerContext) {
        // Do not save in history
        super(context, false);

        this.headerSplitView = new HeaderSplitView.HeaderSplitView({
            title: "Pivot sample"
        });

        this.pivot = new Pivot.Pivot({});

        this.pivotItem1 = new Pivot.PivotItem({
            header: "Pivot item 1"
        });

        this.pivotItem2 = new Pivot.PivotItem({
            header: "Pivot item 2"
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
}
