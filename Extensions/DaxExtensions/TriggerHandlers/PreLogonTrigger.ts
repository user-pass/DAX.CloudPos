import * as Triggers from "PosApi/Extend/Triggers/ApplicationTriggers";
import { ClientEntities } from "PosApi/Entities";
import { InvitationController } from "../DataServices/DataServiceRequests";
import { IMessageDialogOptions } from "PosApi/Consume/Dialogs";


export default class PreLogonTrigger extends Triggers.PreLogOnTrigger {
   
    public execute(options: Triggers.IPreLogOnTriggerOptions): Promise<ClientEntities.ICancelable> {

        let dataService: InvitationController.GetInvitationRequest<InvitationController.GetInvitationResponse> =
            new InvitationController.GetInvitationRequest();

        this.context.runtime.executeAsync(dataService).then((result) => {
            let messageDialogOptions: IMessageDialogOptions = {
                title: "Hello",
                message: result.data.result,
                showCloseX: true,
            }
            let dialogRequest: Commerce.ShowMessageDialogClientRequest<Commerce.ShowMessageDialogClientResponse> =
                new Commerce.ShowMessageDialogClientRequest(messageDialogOptions);
            this.context.runtime.executeAsync(dialogRequest);
        });
        return Promise.resolve({ canceled: false });
    }
}