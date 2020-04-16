import { CustomerDetailsCustomControlBase, ICustomerDetailsCustomControlState, ICustomerDetailsCustomControlContext } from "PosApi/Extend/Views/CustomerDetailsView";
export default class CustomerDetailsPanel extends CustomerDetailsCustomControlBase {
    custTypeField: Observable<string>;
    custIdField: Observable<string>;
    private static readonly TEMPLATE_ID;
    constructor(id: string, context: ICustomerDetailsCustomControlContext);
    onReady(element: HTMLElement): void;
    init(state: ICustomerDetailsCustomControlState): void;
}
