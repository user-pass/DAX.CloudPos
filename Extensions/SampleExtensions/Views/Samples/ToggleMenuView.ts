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

import * as Menu from "PosUISdk/Controls/Menu";

/**
 * The controller for ToggleMenuView.
 */
export default class ToggleMenuView extends NewView.ExtensionViewControllerBase {
    public readonly headerSplitView: HeaderSplitView.HeaderSplitView;
    public readonly toggleMenu: Menu.ToggleMenu;

    constructor(context: NewView.IExtensionViewControllerContext) {
        // Do not save in history
        super(context, false);

        this.headerSplitView = new HeaderSplitView.HeaderSplitView({
            title: "AppBar sample"
        });

        this.toggleMenu = new Menu.ToggleMenu({
            placement: "bottom",
            commands: [{
                id: "MenuCommand1",
                label: "Menu command 1",
                onClick: this.menuCommandClick.bind(this)
            }, {
                id: "MenuCommand2",
                label: "Menu command 2",
                selected: true,
                onClick: this.menuCommandClick.bind(this)
            }]
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
     * Callback for toggle menu.
     * @param {ToggleMenuView} controller View controller.
     * @param {Event} event Html event object.
     */
    public showToggleMenu(controller: ToggleMenuView, event: Event): void {
        this.toggleMenu.show(<HTMLElement>event.currentTarget);
    }

    /**
     * Callback for toggle menu command.
     * @param {IToggleMenuCommandClickArgs} args Arguments.
     */
    private menuCommandClick(args: Menu.IToggleMenuCommandClickArgs): void {
        this.context.logger.logInformational(JSON.stringify(args));
    }
}
