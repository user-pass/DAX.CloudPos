/**
 * SAMPLE CODE NOTICE
 * 
 * THIS SAMPLE CODE IS MADE AVAILABLE AS IS.  MICROSOFT MAKES NO WARRANTIES, WHETHER EXPRESS OR IMPLIED,
 * OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY OR COMPLETENESS OF RESPONSES, OF RESULTS, OR CONDITIONS OF MERCHANTABILITY.
 * THE ENTIRE RISK OF THE USE OR THE RESULTS FROM THE USE OF THIS SAMPLE CODE REMAINS WITH THE USER.
 * NO TECHNICAL SUPPORT IS PROVIDED.  YOU MAY NOT DISTRIBUTE THIS CODE UNLESS YOU HAVE A LICENSE AGREEMENT WITH MICROSOFT THAT ALLOWS YOU TO DO SO.
 */

import * as HeaderSplitView from "PosUISdk/Controls/HeaderSplitView";
import { GetCurrentCartClientRequest, GetCurrentCartClientResponse } from "PosApi/Consume/Cart";
import { ClientEntities } from "PosApi/Entities";
import * as NewView from "PosApi/Create/Views";

import { VoidTransactionOperationRequest, VoidTransactionOperationResponse } from "PosApi/Consume/Cart";

type ICancelableDataResult<TResult> = ClientEntities.ICancelableDataResult<TResult>;

/**
 * The controller for AppBarView.
 */
export default class ForceVoidTransactionView extends NewView.ExtensionViewControllerBase {
    public readonly headerSplitView: HeaderSplitView.HeaderSplitView;

    public currentCart: Observable<string>;

    /**
     * Creates a new instance of the ForceVoidTransactionView class.
     * @param {NewView.IExtensionViewControllerContext} context The extension controller context.
     * @param {any} [options] The options used to initialize the view state.
     */
    constructor(context: NewView.IExtensionViewControllerContext, options?: any) {
        // Do not save in history
        super(context, false);
        this.headerSplitView = new HeaderSplitView.HeaderSplitView({
            title: "Force Void Transaction sample"
        });

        this.currentCart = ko.observable("");
    }

    /**
     * Bind the html element with view controller.
     * @param {HTMLElement} element DOM element.
     */
    public onReady(element: HTMLElement): void {
        super.onReady(element);

        // Customized binding
        ko.applyBindings(this, element);
    }

    /**
     * Callback for get cart button
     */
    public getCurrentCart(): void {
        let getCartRequest: GetCurrentCartClientRequest<GetCurrentCartClientResponse> = new GetCurrentCartClientRequest<GetCurrentCartClientResponse>();
        this.context.runtime.executeAsync(getCartRequest).then((value: ICancelableDataResult<GetCurrentCartClientResponse>) => {
            let cart: Commerce.Proxy.Entities.Cart = (<GetCurrentCartClientResponse>value.data).result;
            this.currentCart(JSON.stringify(cart));
        }).catch((err: any) => {
            this.currentCart(JSON.stringify(err));
        });
    }

    /**
     * Callback for force void button
     */
    public forceVoidTransaction(): void {
        let forceVoidTransactionRequest: VoidTransactionOperationRequest<VoidTransactionOperationResponse> =
            new VoidTransactionOperationRequest<VoidTransactionOperationResponse>(false, this.context.logger.getNewCorrelationId());

        this.context.runtime.executeAsync(forceVoidTransactionRequest).then((value: ICancelableDataResult<VoidTransactionOperationResponse>) => {
            this.currentCart(JSON.stringify(value.data.cart));
        }).catch((err: any) => {
            this.currentCart(JSON.stringify(err));
        });
    }
}