import {
    CustomerDetailsCustomControlBase,
    ICustomerDetailsCustomControlState,
    ICustomerDetailsCustomControlContext
} from "PosApi/Extend/Views/CustomerDetailsView";

import { ProxyEntities } from "PosApi/Entities";


export default class CustomerDetailsPanel extends CustomerDetailsCustomControlBase {

    public custTypeField: Observable<string>;
    public custIdField: Observable<string>;

    private static readonly TEMPLATE_ID: string = "CustomerDetails_DaxExtension";

    constructor(id: string, context: ICustomerDetailsCustomControlContext) {
        super(id, context);
        this.custIdField = ko.observable("");
        this.custTypeField = ko.observable("");

    }

    public onReady(element: HTMLElement): void {
        ko.applyBindingsToNode(element, {
            template: {
                name: CustomerDetailsPanel.TEMPLATE_ID,
                data: this
            }
        });
    }


    public init(state: ICustomerDetailsCustomControlState): void {
        this.isVisible = true;
        if (state.customer.IdentificationNumber.length >= 4) {
            let securedString = state.customer.IdentificationNumber.slice(0, -4) + '****';
            this.custIdField(securedString);
        }

        if (state.customer.CustomerTypeValue == ProxyEntities.CustomerType.Person) {
            this.custTypeField("Person");
        } else {
            if (state.customer.CustomerTypeValue == ProxyEntities.CustomerType.Organization) {
                this.custTypeField("Organization");
            } else {
                this.custTypeField("None");
            }
        }
    }
}