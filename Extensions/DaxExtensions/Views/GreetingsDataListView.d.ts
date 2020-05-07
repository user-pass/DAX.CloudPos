import * as HeaderSplitView from "PosUISdk/Controls/HeaderSplitView";
import * as Menu from "PosUISdk/Controls/Menu";
import { Entities } from "DataServices/DataServiceEntities";
import { DataList } from "PosUISdk/Controls/DataList";
import GreetingsDataListViewModel from "Views/GreetingsDataListViewModel";
import { IExtensionViewControllerContext } from "PosApi/Create/Views";
import KnockoutExtensionViewControllerBase from "../BaseClasses/KnockoutExtensionViewControllerBase";
export default class GreetingsDataListView extends KnockoutExtensionViewControllerBase<GreetingsDataListViewModel> {
    readonly viewModel: GreetingsDataListViewModel;
    readonly headerSplitView: HeaderSplitView.HeaderSplitView;
    readonly menu: Menu.Menu;
    invitations: ObservableArray<Entities.Invitation>;
    selectedLine: Entities.Invitation;
    dataList: DataList<Entities.Invitation>;
    constructor(context: IExtensionViewControllerContext);
    onReady(element: HTMLElement): void;
    showMenu(controller: GreetingsDataListView, eventArgs: Event): void;
    private dataListSelectionChanged(lines);
}
