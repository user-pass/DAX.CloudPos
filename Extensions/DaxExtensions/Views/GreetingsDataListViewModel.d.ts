import { IExtensionViewControllerContext } from "PosApi/Create/Views";
import * as Menu from "PosUISdk/Controls/Menu";
import { Entities } from "../DataServices/DataServiceEntities";
import KnockoutExtensionViewModelBase from "../BaseClasses/KnockoutExtensionViewModelBase";
export default class GreetingsDataListViewModel extends KnockoutExtensionViewModelBase {
    private context;
    invitations: ObservableArray<Entities.Invitation>;
    constructor(_context: IExtensionViewControllerContext);
    selectedLine: Entities.Invitation;
    dataListSelectionChanged(lines: Entities.Invitation[]): void;
    menuCommandClickDeleteSelected(args: Menu.IMenuCommandClickArgs): void;
    menuCommandClickDeleteAll(args: Menu.IMenuCommandClickArgs): void;
    menuCommandClickAddNewRecord(args: Menu.IMenuCommandClickArgs): void;
    menuCommandClickUpdateSelected(args: Menu.IMenuCommandClickArgs): void;
    loadDataPage(): void;
}
