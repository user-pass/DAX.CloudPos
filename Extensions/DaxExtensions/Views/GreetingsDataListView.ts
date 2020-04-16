import * as NewView from "PosApi/Create/Views";
import * as HeaderSplitView from "PosUISdk/Controls/HeaderSplitView";
import * as DataList from "PosUISdk/Controls/DataList";
import * as Menu from "PosUISdk/Controls/Menu";
import { InvitationController } from "../DataServices/DataServiceRequests";
import { Entities } from "DataServices/DataServiceEntities";
import { ITextInputDialogOptions } from "PosApi/Consume/Dialogs";
import { ClientEntities } from "PosApi/Entities";


export interface InvitationData {
    Message: string;
    Language: string;
    Id: number;
}

export default class GreetingsDataListView extends NewView.ExtensionViewControllerBase {
    public readonly headerSplitView: HeaderSplitView.HeaderSplitView;
    public readonly menu: Menu.Menu;
    public dataList: DataList.DataList<InvitationData>;
    private static readonly TEMPLATE_ID: string = "GreetingsDataList_DaxExtension";
    //public selectedLine: Entities.Invitation = null; //Mistake here

    constructor(context: NewView.IExtensionViewControllerContext) {
        super(context, false);

        this.headerSplitView = new HeaderSplitView.HeaderSplitView({
            title: "Invitation Table View"
        });

        let dataListDataSource: DataList.IIncrementalDataSource<InvitationData> = {
            pageSize: 5,
            loadDataPage: this.loadDataPage.bind(this)
        };

        this.dataList = new DataList.DataList<InvitationData>({

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
            ],

            itemDataSource: dataListDataSource,
            selectionMode: DataList.SelectionMode.SingleSelect,
            selectionChanged: this.dataListSelectionChanged.bind(this),
            autoSelectFirstItem: false
        });

        this.menu = new Menu.Menu({
            commands: [
                {
                    id: "deleteSelected",
                    label: "Delete selected record",
                    onClick: this.menuCommandClickDeleteSelected.bind(this)

                },
                {
                    id: "deleteAll",
                    label: "Delete all records",
                    onClick: this.menuCommandClickDeleteAll.bind(this)
                },
                {
                    id: "addNew",
                    label: "Add new record",
                    onClick: this.menuCommandClickAddNewRecord.bind(this)
                }
            ]
        });
    }



    public onReady(element: HTMLElement): void {
        ko.applyBindingsToNode(element, {
            template: {
                name: GreetingsDataListView.TEMPLATE_ID,
                data: this
            }
        });
    }

    public showMenu(controller: GreetingsDataListView, eventArgs: Event): void {
        this.menu.show(<HTMLElement>event.currentTarget);
    }


    private dataListSelectionChanged(lines: Entities.Invitation[]): void {
        //this.selectedLine = lines[0];
    }

    private loadDataPage(): Promise<InvitationData[]> {
        let promise: Promise<any> = new Promise((resolve: (value?: any) => void) => {
            let dataService: InvitationController.GetAllInvitationsRequest<InvitationController.GetAllInvitationsResponse> =
                new InvitationController.GetAllInvitationsRequest();
            this.context.runtime.executeAsync(dataService).then((result) => {
                setTimeout(() => {
                    let pageData: InvitationData[] = result.data.result;
                    resolve(pageData);
                }, 1000);
            });
        });

        return promise;
    }

    private menuCommandClickDeleteSelected(args: Menu.IMenuCommandClickArgs): void {
        //let dataService: InvitationController.DeleteInvitationRequest<InvitationController.DeleteInvitationResponse> =
        //    new InvitationController.DeleteInvitationRequest(this.selectedLine);
        //this.context.runtime.executeAsync(dataService);
        this.loadDataPage();
    }

    private menuCommandClickDeleteAll(args: Menu.IMenuCommandClickArgs): void {
        let dataService: InvitationController.DeleteAllInvitationsRequest<InvitationController.DeleteAllInvitationsResponse> =
            new InvitationController.DeleteAllInvitationsRequest();
        this.context.runtime.executeAsync(dataService);
    }

    private menuCommandClickAddNewRecord(args: Menu.IMenuCommandClickArgs): void {

        let messageOptions: ITextInputDialogOptions = { label: "Please enter new message:" };
        let messageText = "";
        let languageOptions: ITextInputDialogOptions = { label: "Please enter new language:" };
        let languageText = "";
        let corellationId: string;

        let messageRequest: Commerce.ShowTextInputDialogClientRequest<Commerce.ShowTextInputDialogClientResponse> =
            new Commerce.ShowTextInputDialogClientRequest(messageOptions, corellationId);
        this.context.runtime.executeAsync(messageRequest).then((result: ClientEntities.ICancelableDataResult<Commerce.ShowTextInputDialogClientResponse>) => {
            if (!result.canceled) {
                messageText = result.data.result.value.toString();
                let languageRequest: Commerce.ShowTextInputDialogClientRequest<Commerce.ShowTextInputDialogClientResponse> =
                    new Commerce.ShowTextInputDialogClientRequest(languageOptions, corellationId);
                this.context.runtime.executeAsync(languageRequest).then((result: ClientEntities.ICancelableDataResult<Commerce.ShowTextInputDialogClientResponse>) => {
                    if (!result.canceled) {
                        languageText = result.data.result.value.toString();
                        //let i = 0;
                        //if (i = 1) {
                        let newInvitation = new Entities.Invitation(); //Mistake here 
                            newInvitation.Language = languageText;
                            newInvitation.Message = messageText;
                        //}
                        //let dataService: InvitationController.InsertInvitationRequest<InvitationController.InsertInvitationResponse> =
                        //    new InvitationController.InsertInvitationRequest(newInvitation);
                        //this.context.runtime.executeAsync(dataService);
                    }
                });
            }
        });
    }

    //private newData(message: string, language: string): InvitationData[] {
    //    return [
    //        {
    //        Message: message,
    //        Language: language,
    //        Id: null
    //        }
    //    ];
    //}
}
