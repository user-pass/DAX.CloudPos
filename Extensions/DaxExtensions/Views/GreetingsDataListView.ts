import * as HeaderSplitView from "PosUISdk/Controls/HeaderSplitView";
import * as Menu from "PosUISdk/Controls/Menu";
import { Entities } from "../DataServices/DataServiceEntities";
import { DataList, SelectionMode, IDataListState } from "PosUISdk/Controls/DataList";
import GreetingsDataListViewModel from "../Views/GreetingsDataListViewModel";
import { IExtensionViewControllerContext } from "PosApi/Create/Views";
import KnockoutExtensionViewControllerBase from "../BaseClasses/KnockoutExtensionViewControllerBase";


export default class GreetingsDataListView extends KnockoutExtensionViewControllerBase<GreetingsDataListViewModel> {

    public readonly viewModel: GreetingsDataListViewModel;
    public readonly headerSplitView: HeaderSplitView.HeaderSplitView;
    public readonly menu: Menu.Menu;
    public dataList: DataList<Entities.Invitation>;

    constructor(context: IExtensionViewControllerContext) {
        super(context, true);

        this.viewModel = new GreetingsDataListViewModel(context);

        this.headerSplitView = new HeaderSplitView.HeaderSplitView({
            title: "Invitation Table View"
        });

        let invitationDataListOptions: IDataListState<Entities.Invitation> = {
            autoSelectFirstItem: false,
            selectionMode: SelectionMode.SingleSelect,
            selectionChanged: this.viewModel.dataListSelectionChanged.bind(this.viewModel),
            itemDataSource: this.viewModel.invitations,

            columns: [
                {
                    title: "Message",
                    ratio: 50,
                    collapseOrder: 2,
                    minWidth: 100,
                    computeValue: (value: Entities.Invitation): string => {
                        return value.Message;
                    }
                },
                {
                    title: "Language",
                    ratio: 50,
                    collapseOrder: 1,
                    minWidth: 100,
                    computeValue: (value: Entities.Invitation): string => {
                        return value.Language;
                    }
                }
            ]
        };

        this.dataList = new DataList<Entities.Invitation>(invitationDataListOptions);

        this.menu = new Menu.Menu({
            commands: [
                {
                    id: "deleteSelected",
                    label: "Delete selected record",
                    onClick: this.viewModel.menuCommandClickDeleteSelected.bind(this.viewModel)

                },
                {
                    id: "deleteAll",
                    label: "Delete all records",
                    onClick: this.viewModel.menuCommandClickDeleteAll.bind(this.viewModel)
                },
                {
                    id: "addNew",
                    label: "Add new record",
                    onClick: this.viewModel.menuCommandClickAddNewRecord.bind(this.viewModel)
                },
                {
                    id: "updateSelected",
                    label: "Update selected record",
                    onClick: this.viewModel.menuCommandClickUpdateSelected.bind(this.viewModel)
                }
            ]
        });
    }

    public onReady(element: HTMLElement): void {

        super.onReady(element);
        this.viewModel.loadDataPage();
    }

    public showMenu(controller: GreetingsDataListView, eventArgs: Event): void {
        this.menu.show(<HTMLElement>event.currentTarget);
    }

}