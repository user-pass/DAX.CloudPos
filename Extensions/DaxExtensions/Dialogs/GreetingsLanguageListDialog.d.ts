import { IListInputDialogItem } from "PosApi/Consume/Dialogs";
import { IExtensionContext } from "PosApi/Framework/ExtensionContext";
import { Entities } from "../DataServices/DataServiceEntities";
export default class ListDialog {
    static show(context: IExtensionContext, listItems: ObservableArray<Entities.Language>): Promise<IListInputDialogItem>;
}
