import { IExtensionViewControllerContext } from "PosApi/Create/Views";
import * as Menu from "PosUISdk/Controls/Menu";
import { InvitationController } from "../DataServices/DataServiceRequests";
import { ITextInputDialogOptions } from "PosApi/Consume/Dialogs";
import { ClientEntities } from "PosApi/Entities";
import { Entities } from "DataServices/DataServiceEntities";
import KnockoutExtensionViewModelBase from "../BaseClasses/KnockoutExtensionViewModelBase";
import GreetingsDataListView from "Views/GreetingsDataListView";


export default class GreetingsDataListViewModel extends KnockoutExtensionViewModelBase {

    private context: IExtensionViewControllerContext;
    private view: GreetingsDataListView;

    constructor(_context: IExtensionViewControllerContext, _view: GreetingsDataListView) {
        super();
        this.context = _context;
        this.view = _view;
    }

    public menuCommandClickDeleteSelected(args: Menu.IMenuCommandClickArgs): void {
        let dataService: InvitationController.DeleteInvitationRequest<InvitationController.DeleteInvitationResponse> =
            new InvitationController.DeleteInvitationRequest(this.view.selectedLine);
        this.context.runtime.executeAsync(dataService);
    }

    public menuCommandClickDeleteAll(args: Menu.IMenuCommandClickArgs): void {
        let dataService: InvitationController.DeleteAllInvitationsRequest<InvitationController.DeleteAllInvitationsResponse> =
            new InvitationController.DeleteAllInvitationsRequest();
        this.context.runtime.executeAsync(dataService);
    }

    public menuCommandClickAddNewRecord(args: Menu.IMenuCommandClickArgs): void {

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
                        if (languageText) {
                            let newInvitation = new Entities.Invitation();
                            newInvitation.Language = languageText;
                            newInvitation.Message = messageText;
                        }
                    }
                });
            }
        });
    }

    public loadDataPage(): Promise<Entities.Invitation[]> {
        let promise: Promise<any> = new Promise((resolve: (value?: any) => void) => {
            let dataService: InvitationController.GetAllInvitationsRequest<InvitationController.GetAllInvitationsResponse> =
                new InvitationController.GetAllInvitationsRequest();
            this.context.runtime.executeAsync(dataService).then((result) => {
                setTimeout(() => {
                    let pageData: Entities.Invitation[] = result.data.result;
                    resolve(pageData);
                }, 1000);
            });
        });

        return promise;
    }
}

