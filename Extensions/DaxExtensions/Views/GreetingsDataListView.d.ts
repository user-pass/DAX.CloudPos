import * as NewView from "PosApi/Create/Views";
import * as HeaderSplitView from "PosUISdk/Controls/HeaderSplitView";
import * as DataList from "PosUISdk/Controls/DataList";
import * as Menu from "PosUISdk/Controls/Menu";
export interface InvitationData {
    Message: string;
    Language: string;
    Id: number;
}
export default class GreetingsDataListView extends NewView.ExtensionViewControllerBase {
    readonly headerSplitView: HeaderSplitView.HeaderSplitView;
    readonly menu: Menu.Menu;
    dataList: DataList.DataList<InvitationData>;
    private static readonly TEMPLATE_ID;
    constructor(context: NewView.IExtensionViewControllerContext);
    onReady(element: HTMLElement): void;
    showMenu(controller: GreetingsDataListView, eventArgs: Event): void;
    private dataListSelectionChanged(lines);
    private loadDataPage();
    private menuCommandClickDeleteSelected(args);
    private menuCommandClickDeleteAll(args);
    private menuCommandClickAddNewRecord(args);
}
