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
 * The controller for MenuView.
 */
export default class MenuView extends NewView.ExtensionViewControllerBase {
    public readonly headerSplitView: HeaderSplitView.HeaderSplitView;
    public readonly menu: Menu.Menu;

    constructor(context: NewView.IExtensionViewControllerContext) {
        // Do not save in history
        super(context, false);

        this.headerSplitView = new HeaderSplitView.HeaderSplitView({
            title: "Menu sample"
        });

        this.menu = new Menu.Menu({
            commands: [
                {
                    id: "MenuCommand1",
                    label: "Menu command 1",
                    onClick: this.menuCommandClick.bind(this)
                }, {
                    id: "MenuCommand2",
                    label: "Menu command 2",
                    onClick: this.menuCommandClick.bind(this)
                }
            ]
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
     * Callback for menu.
     * @param {MenuView} controller View controller.
     * @param {Event} eventArgs Html event.
     */
    public showMenu(controller: MenuView, eventArgs: Event): void {
        this.menu.show(<HTMLElement>event.currentTarget);
    }

    /**
     * Callback for menu command.
     * @param {IMenuCommandClickArgs} args Menu command arguments.
     */
    private menuCommandClick(args: Menu.IMenuCommandClickArgs): void {
        this.context.logger.logInformational("menuCommandClick: " + args.id);
    }
}