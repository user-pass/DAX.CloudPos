import * as HeaderSplitView from "PosUISdk/Controls/HeaderSplitView";
import * as Menu from "PosUISdk/Controls/Menu";
import { Entities } from "DataServices/DataServiceEntities";
import { DataList, SelectionMode, IDataListState } from "PosUISdk/Controls/DataList";
import GreetingsDataListViewModel from "Views/GreetingsDataListViewModel";
import { IExtensionViewControllerContext } from "PosApi/Create/Views";
import KnockoutExtensionViewControllerBase from "../BaseClasses/KnockoutExtensionViewControllerBase";


export default class GreetingsDataListView extends KnockoutExtensionViewControllerBase<GreetingsDataListViewModel> {

    public readonly viewModel: GreetingsDataListViewModel;
    public readonly headerSplitView: HeaderSplitView.HeaderSplitView;
    public readonly menu: Menu.Menu;

    public invitations: ObservableArray<Entities.Invitation>;
    public selectedLine: Entities.Invitation = null; 


    public dataList: DataList<Entities.Invitation>;

    constructor(context: IExtensionViewControllerContext) {
        super(context, false);

        this.invitations = ko.observableArray<Entities.Invitation>([]);

        this.viewModel = new GreetingsDataListViewModel(context);

        this.headerSplitView = new HeaderSplitView.HeaderSplitView({
            title: "Invitation Table View"
        });

        let invitationDataListOptions: IDataListState<Entities.Invitation> = {
            autoSelectFirstItem: false,
            selectionMode: SelectionMode.SingleSelect,
            selectionChanged: this.dataListSelectionChanged,
            itemDataSource: this.invitations,

            columns: [
                {
                    title: "Message",
                    ratio: 40,
                    collapseOrder: 3,
                    minWidth: 100,
                    computeValue: (value: Entities.Invitation): string => {
                        return value.Message;
                    }
                },
                {
                    title: "Language",
                    ratio: 30,
                    collapseOrder: 1,
                    minWidth: 100,
                    computeValue: (value: Entities.Invitation): string => {
                        return value.Language;
                    }
                },
                {
                    title: "Record ID",
                    ratio: 30,
                    collapseOrder: 2,
                    minWidth: 100,
                    computeValue: (value: Entities.Invitation): number => {
                        return value.Id;
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
                    onClick: this.viewModel.menuCommandClickDeleteSelected.bind(this)

                },
                {
                    id: "deleteAll",
                    label: "Delete all records",
                    onClick: this.viewModel.menuCommandClickDeleteAll.bind(this)
                },
                {
                    id: "addNew",
                    label: "Add new record",
                    onClick: this.viewModel.menuCommandClickAddNewRecord.bind(this)
                }
            ]
        });
    }

    public onReady(element: HTMLElement): void {

        super.onReady(element);
        var arr = [];
        arr.push(this.viewModel.loadDataPage());
        this.invitations(arr);

        ko.applyBindings(this, element);
    }

    public showMenu(controller: GreetingsDataListView, eventArgs: Event): void {
        this.menu.show(<HTMLElement>event.currentTarget);
    }

    private dataListSelectionChanged(lines: Entities.Invitation[]): void {
        this.selectedLine = lines[0];
    }
}
