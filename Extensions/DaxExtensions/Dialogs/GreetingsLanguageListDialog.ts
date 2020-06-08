import { ShowListInputDialogClientRequest, ShowListInputDialogClientResponse, IListInputDialogOptions, IListInputDialogItem } from "PosApi/Consume/Dialogs";
import { IExtensionContext } from "PosApi/Framework/ExtensionContext";
import { ClientEntities } from "PosApi/Entities";
import { Entities } from "../DataServices/DataServiceEntities";


export default class ListDialog {

    public static show(context: IExtensionContext, listItems: ObservableArray<Entities.Language>): Promise<IListInputDialogItem> {
        let promise: Promise<IListInputDialogItem> = new Promise<IListInputDialogItem>((resolve: (item: IListInputDialogItem) => void, reject: (reason?: any) => void) => {

            let title: "Add language";
            let message: "Choose language from list below";

            let dataList: IListInputDialogItem[] = listItems().map((listItem: Entities.Language): IListInputDialogItem => {
                let convertedListItem: IListInputDialogItem = {
                    label: listItem.LanguageId, 
                    value: listItem.LanguageId 
                };
                return convertedListItem;
                });

            let listInputDialogOptions: IListInputDialogOptions = {
                title: title,
                subTitle: message,
                items: dataList
            };

            let dialogRequest: ShowListInputDialogClientRequest<ShowListInputDialogClientResponse> =
                new ShowListInputDialogClientRequest<ShowListInputDialogClientResponse>(listInputDialogOptions);

            context.runtime.executeAsync(dialogRequest)
                .then((result: ClientEntities.ICancelableDataResult<ShowListInputDialogClientResponse>) => {
                    if (!result.canceled) {
                        let selectedItem: IListInputDialogItem = result.data.result.value;
                        resolve(selectedItem);

                    } else {
                        context.logger.logInformational("Canceled");
                        reject(null);
                    }
                }).catch((reason: any) => {
                    context.logger.logError(JSON.stringify(reason));
                    reject(reason);
                });
        });

        return promise;
    }
}