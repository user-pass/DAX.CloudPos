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
import { ClientEntities, ProxyEntities } from "PosApi/Entities";
import * as NewView from "PosApi/Create/Views";
import { ArrayExtensions } from "PosApi/TypeExtensions";

import { VoidCartLineOperationRequest, VoidCartLineOperationResponse } from "PosApi/Consume/Cart";

type ICancelableDataResult<TResult> = ClientEntities.ICancelableDataResult<TResult>;

/**
 * The controller for VoidCartLineView.
 */
export default class VoidCartLineView extends NewView.ExtensionViewControllerBase {
    public readonly headerSplitView: HeaderSplitView.HeaderSplitView;

    public currentCart: Observable<string>;
    public cartLineId: string;

    /**
     * Creates a new instance of the VoidCartLineView class.
     * @param {NewView.IExtensionViewControllerContext} context The extension controller context.
     * @param {any} [options] The options used to initialize the view state.
     */
    constructor(context: NewView.IExtensionViewControllerContext, options?: any) {
        // Do not save in history
        super(context, false);
        this.headerSplitView = new HeaderSplitView.HeaderSplitView({
            title: "Void cart line sample"
        });

        this.currentCart = ko.observable("");
        this.cartLineId = "";
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
     * Gets the current cart.
     */
    public getCurrentCart(): void {
        let getCartRequest: GetCurrentCartClientRequest<GetCurrentCartClientResponse> = new GetCurrentCartClientRequest<GetCurrentCartClientResponse>();
        this.context.runtime.executeAsync(getCartRequest).then((value: ICancelableDataResult<GetCurrentCartClientResponse>) => {
            let cart: ProxyEntities.Cart = (<GetCurrentCartClientResponse>value.data).result;
            let nonVoidedCartLines: ProxyEntities.CartLine[] = cart.CartLines.filter((cartLine: ProxyEntities.CartLine) => {
                return !cartLine.IsVoided;
            });
            if (ArrayExtensions.hasElements(nonVoidedCartLines)) {
                this.cartLineId = nonVoidedCartLines[0].LineId;
            }

            this.currentCart(JSON.stringify(cart));
        }).catch((err: any) => {
            this.currentCart(JSON.stringify(err));
        });
    }

    /**
     * Voids a cart line.
     */
    public voidCartLine(): void {
        let voidCartLineOperationRequest: VoidCartLineOperationRequest<VoidCartLineOperationResponse> =
            new VoidCartLineOperationRequest<VoidCartLineOperationResponse>(this.cartLineId, this.context.logger.getNewCorrelationId());

        this.context.runtime.executeAsync(voidCartLineOperationRequest).then((value: ICancelableDataResult<VoidCartLineOperationResponse>) => {
            if (value.canceled) {
                this.currentCart("Void cart line is canceled");
            } else {
                this.currentCart(JSON.stringify(value.data.cart));
            }
        }).catch((err: any) => {
            this.currentCart(JSON.stringify(err));
        });
    }
}
