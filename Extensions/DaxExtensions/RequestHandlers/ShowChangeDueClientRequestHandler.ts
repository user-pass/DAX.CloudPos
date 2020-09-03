import { ShowChangeDueClientRequestHandler } from "PosApi/Extend/RequestHandlers/CartRequestHandlers";
import { ShowChangeDueClientRequest, ShowChangeDueClientResponse } from "PosApi/Consume/Cart";
import { ClientEntities } from "PosApi/Entities";
import { Entities } from "../DataServices/DataServiceEntities";
import { TenderTypeController } from "../DataServices/DataServiceRequests";



export default class ShowChangeDueClientRequestHandlerExt extends ShowChangeDueClientRequestHandler {

    public tenderTypes: ObservableArray<Entities.TenderTypeModel>;

    public executeAsync(request: ShowChangeDueClientRequest): Promise<ClientEntities.ICancelableDataResult<ShowChangeDueClientResponse>> {

        this.tenderTypes = ko.observableArray<Entities.TenderTypeModel>([]);

        let tenderTypesRequest: TenderTypeController.GetTenderTypesRequest<TenderTypeController.GetTenderTypesResponse> =
            new TenderTypeController.GetTenderTypesRequest();
        this.context.runtime.executeAsync(tenderTypesRequest).then((result) => {
            if (!result.canceled) {
                var iterator = 0;
                this.tenderTypes(result.data.result);
        //        alert(this.tenderTypes().length);

                for (let i = 0; i < request.salesOrder.TenderLines.length; i++) {
                    for (let j = 0; j < this.tenderTypes().length; j++) {
                        if (request.salesOrder.TenderLines[i].TenderTypeId == this.tenderTypes()[j].TenderTypeModelId && this.tenderTypes()[j].DraftNeeded == true) {
                            iterator++;
                        }
                    }
                }
                if (iterator > 0)
                    return this.defaultExecuteAsync(request);
                else
                    return Promise.resolve({ canceled: false });

            } else {
                return Promise.resolve({ canceled: false });
            }
        });

        return Promise.resolve({ canceled: false });
    }

}
