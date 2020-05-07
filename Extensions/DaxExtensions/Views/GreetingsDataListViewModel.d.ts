import { IExtensionViewControllerContext } from "PosApi/Create/Views";
import * as Menu from "PosUISdk/Controls/Menu";
import { Entities } from "DataServices/DataServiceEntities";
import KnockoutExtensionViewModelBase from "../BaseClasses/KnockoutExtensionViewModelBase";
import GreetingsDataListView from "Views/GreetingsDataListView";
export default class GreetingsDataListViewModel extends KnockoutExtensionViewModelBase {
    private context;
    constructor(_context: IExtensionViewControllerContext);
    menuCommandClickDeleteSelected(args: Menu.IMenuCommandClickArgs, view: GreetingsDataListView): void;
    menuCommandClickDeleteAll(args: Menu.IMenuCommandClickArgs): void;
    menuCommandClickAddNewRecord(args: Menu.IMenuCommandClickArgs): void;
    loadDataPage(): Promise<Entities.Invitation[]>;
}
