import { ShowChangeDueClientRequestHandler } from "PosApi/Extend/RequestHandlers/CartRequestHandlers";
import { ShowChangeDueClientRequest, ShowChangeDueClientResponse } from "PosApi/Consume/Cart";
import { ClientEntities } from "PosApi/Entities";
import { Entities } from "../DataServices/DataServiceEntities";
export default class ShowChangeDueClientRequestHandlerExt extends ShowChangeDueClientRequestHandler {
    tenderTypes: ObservableArray<Entities.TenderTypeModel>;
    executeAsync(request: ShowChangeDueClientRequest): Promise<ClientEntities.ICancelableDataResult<ShowChangeDueClientResponse>>;
}
