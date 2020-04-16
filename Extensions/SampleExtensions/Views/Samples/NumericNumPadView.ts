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

import { NumericNumPad, IDecimalPrecisionNumPadState, INumPadResult } from "PosUISdk/Controls/NumPad";

/**
 * The controller for NumericNumPadView.
 */
export default class NumericNumPadView extends NewView.ExtensionViewControllerBase {
    public readonly headerSplitView: HeaderSplitView.HeaderSplitView;
    public readonly numPad: NumericNumPad;
    public numPadValue: Observable<string>;

    constructor(context: NewView.IExtensionViewControllerContext) {
        // Do not save in history
        super(context, false);

        this.headerSplitView = new HeaderSplitView.HeaderSplitView({
            title: "NumericNumPad sample"
        });

        this.numPadValue = ko.observable("");
        let numPadState: IDecimalPrecisionNumPadState = {
            decimalPrecision: 1,
            onEnter: this.onNumPadEnter.bind(this),
            captureGlobalInput: true,
            label: "NumPad label"
        };

        this.numPad = new NumericNumPad(this, numPadState);
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
     * Callback for numpad.
     * @param {INumPadResult} result Numpad current value.
     */
    private onNumPadEnter(result: INumPadResult): void {
        this.numPadValue(result.value);
        this.numPad.value("");
    }
}
