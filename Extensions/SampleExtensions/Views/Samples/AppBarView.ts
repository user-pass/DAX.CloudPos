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
import * as AppBar from "PosUISdk/Controls/AppBar";

/**
 * The controller for AppBarView.
 */
export default class AppBarView extends NewView.ExtensionViewControllerBase {
    public readonly headerSplitView: HeaderSplitView.HeaderSplitView;
    public readonly appBar: AppBar.AppBar;
    public readonly appBarCommand: AppBar.AppBarCommand;

    constructor(context: NewView.IExtensionViewControllerContext) {
        // Do not save in history
        super(context, false);

        this.headerSplitView = new HeaderSplitView.HeaderSplitView({
            title: "AppBar sample"
        });

        this.appBar = new AppBar.AppBar();
        this.appBarCommand = new AppBar.AppBarCommand({
            id: "AppBarView_appBarCommand",
            label: "Execute command",
            extraClass: "iconAdd", // Predefined icon css class
            execute: this.appBarCommandExecute.bind(this) // bind is necessary to save "this" context.
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
     * Callback for appbar command.
     */
    private appBarCommandExecute(): void {
        this.context.logger.logInformational("appBarCommandExecute");
    }
}
