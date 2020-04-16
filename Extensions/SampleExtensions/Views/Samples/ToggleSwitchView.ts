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

import * as ToggleSwitch from "PosUISdk/Controls/ToggleSwitch";

/**
 * The controller for ToggleSwitchView.
 */
export default class ToggleSwitchView extends NewView.ExtensionViewControllerBase {
    public readonly headerSplitView: HeaderSplitView.HeaderSplitView;
    public readonly toggleSwitch: ToggleSwitch.ToggleSwitch;

    constructor(context: NewView.IExtensionViewControllerContext) {
        // Do not save in history
        super(context, false);

        this.headerSplitView = new HeaderSplitView.HeaderSplitView({
            title: "ToggleSwitch sample"
        });

        this.toggleSwitch = new ToggleSwitch.ToggleSwitch({
            tabIndex: 0,
            enabled: true,
            checked: false,
            labelOn: "On",
            labelOff: "Off",
            onChange: this.toggleSwitchChanged.bind(this)
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
     * Callback for toggle switch.
     * @param {boolean} checked True if checked. Otherwize false.
     */
    private toggleSwitchChanged(checked: boolean): void {
        this.context.logger.logInformational("toggleSwitchChanged: " + checked);
    }
}
