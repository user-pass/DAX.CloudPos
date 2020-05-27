import { IExtensionViewControllerContext } from "PosApi/Create/Views";
import * as Menu from "PosUISdk/Controls/Menu";
import { InvitationController } from "../DataServices/DataServiceRequests";
import { ITextInputDialogOptions } from "PosApi/Consume/Dialogs";
import { ClientEntities } from "PosApi/Entities";
import { Entities } from "../DataServices/DataServiceEntities";
import KnockoutExtensionViewModelBase from "../BaseClasses/KnockoutExtensionViewModelBase";


export default class GreetingsDataListViewModel extends KnockoutExtensionViewModelBase {

    private context: IExtensionViewControllerContext;
    public invitations: ObservableArray<Entities.Invitation>;

    constructor(_context: IExtensionViewControllerContext) {
        super();
        this.context = _context;
        this.invitations = ko.observableArray<Entities.Invitation>([]);
    }

    public selectedLine: Entities.Invitation = null;

    public dataListSelectionChanged(lines: Entities.Invitation[]): void {
        this.selectedLine = lines[0];
    }

    public menuCommandClickDeleteSelected(args: Menu.IMenuCommandClickArgs): void {
        let dataService: InvitationController.DeleteInvitationRequest<InvitationController.DeleteInvitationResponse> =
            new InvitationController.DeleteInvitationRequest(this.selectedLine);
        this.context.runtime.executeAsync(dataService).then((result) => {
            if (!result.canceled) {
                this.loadDataPage();
            }     
        });
    }

    public menuCommandClickDeleteAll(args: Menu.IMenuCommandClickArgs): void {
        let dataService: InvitationController.DeleteAllInvitationsRequest<InvitationController.DeleteAllInvitationsResponse> =
            new InvitationController.DeleteAllInvitationsRequest();
        this.context.runtime.executeAsync(dataService).then((result) => {
            if (!result.canceled) {
                this.loadDataPage();
            }
        });
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
                            let dataService: InvitationController.InsertInvitationRequest<InvitationController.InsertInvitationResponse> =
                                new InvitationController.InsertInvitationRequest(newInvitation);
                                this.context.runtime.executeAsync(dataService).then((result: ClientEntities.ICancelableDataResult<InvitationController.DeleteInvitationResponse>): void => {
                                if (!result.canceled) {
                                    this.loadDataPage();
                                    }
                            });
                        }
                    }
                });
            }
        });
    }

    public menuCommandClickUpdateSelected(args: Menu.IMenuCommandClickArgs): void {
        if (this.selectedLine) {

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
                                newInvitation.Id = this.selectedLine.Id;

                                let dataService: InvitationController.UpdateInvitationRequest<InvitationController.UpdateInvitationResponse> =
                                    new InvitationController.UpdateInvitationRequest(newInvitation);
                                this.context.runtime.executeAsync(dataService).then((result) => {
                                    if (!result.canceled) {
                                        this.loadDataPage();
                                    }
                                });
                            }
                        }
                    });
                }
            });          
        }
    }

    public loadDataPage(): void {
        let dataService: InvitationController.GetAllInvitationsRequest<InvitationController.GetAllInvitationsResponse> =
            new InvitationController.GetAllInvitationsRequest();
        this.context.runtime.executeAsync(dataService).then((result) => {
            this.invitations(result.data.result);
        });
    }

}