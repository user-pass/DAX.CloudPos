import * as Triggers from "PosApi/Extend/Triggers/ApplicationTriggers";
import { ClientEntities } from "PosApi/Entities";
export default class PreLogonTrigger extends Triggers.PreLogOnTrigger {
    execute(options: Triggers.IPreLogOnTriggerOptions): Promise<ClientEntities.ICancelable>;
}
