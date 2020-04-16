import * as Triggers from "PosApi/Extend/Triggers/ProductTriggers";
import { ClientEntities } from "PosApi/Entities";
import { InvitationController } from "../DataServices/DataServiceRequests";

export default class PreProductSaleTrigger extends Triggers.PreProductSaleTrigger {


    public execute(options: Triggers.IPreProductSaleTriggerOptions): Promise<ClientEntities.ICancelable> {
        this.context.logger.logVerbose("Executing PreProductSaleTrigger with options " + JSON.stringify(options) + " at " + new Date().getTime() + ".");

        let dataService: InvitationController.GetInvitationRequest<InvitationController.GetInvitationResponse> =
            new InvitationController.GetInvitationRequest();

        this.context.runtime.executeAsync(dataService).then((result) => {
            alert(result.data.result);
        });

        return Promise.resolve({ canceled: false });
    }
}