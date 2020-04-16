/**
 * SAMPLE CODE NOTICE
 * 
 * THIS SAMPLE CODE IS MADE AVAILABLE AS IS.  MICROSOFT MAKES NO WARRANTIES, WHETHER EXPRESS OR IMPLIED,
 * OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY OR COMPLETENESS OF RESPONSES, OF RESULTS, OR CONDITIONS OF MERCHANTABILITY.
 * THE ENTIRE RISK OF THE USE OR THE RESULTS FROM THE USE OF THIS SAMPLE CODE REMAINS WITH THE USER.
 * NO TECHNICAL SUPPORT IS PROVIDED.  YOU MAY NOT DISTRIBUTE THIS CODE UNLESS YOU HAVE A LICENSE AGREEMENT WITH MICROSOFT THAT ALLOWS YOU TO DO SO.
 */

import { PaymentTerminalCapturePaymentRequestHandler } from "PosApi/Extend/RequestHandlers/PeripheralsRequestHandlers";
import { PaymentTerminalCapturePaymentRequest, PaymentTerminalCapturePaymentResponse } from "PosApi/Consume/Peripherals";
import { ClientEntities, ProxyEntities } from "PosApi/Entities";
import { GetCurrentCartClientRequest, GetCurrentCartClientResponse } from "PosApi/Consume/Cart";
import { PaymentHandlerHelper } from "./PaymentHandlerHelper";
import { ObjectExtensions } from "PosApi/TypeExtensions";

/**
 * Override request handler class for the payment terminal Capture payment request.
 */
export default class PaymentTerminalCapturePaymentRequestHandlerExt extends PaymentTerminalCapturePaymentRequestHandler {
    /**
     * Executes the request handler asynchronously.
     * @param {PaymentTerminalCapturePaymentRequest<PaymentTerminalCapturePaymentResponse>} request The request.
     * @return {Promise<ICancelableDataResult<PaymentTerminalCapturePaymentResponse>>} The cancelable promise containing the response.
     */
    public executeAsync(request: PaymentTerminalCapturePaymentRequest<PaymentTerminalCapturePaymentResponse>):
        Promise<ClientEntities.ICancelableDataResult<PaymentTerminalCapturePaymentResponse>> {
        let cart: ProxyEntities.Cart = null;
        let cartRequest: GetCurrentCartClientRequest<GetCurrentCartClientResponse> = new GetCurrentCartClientRequest();

        // Get cart first and then build extension properties based on cart info.
        return this.context.runtime.executeAsync(cartRequest)
            .then((result: ClientEntities.ICancelableDataResult<GetCurrentCartClientResponse>): void => {
                if (!(result.canceled || ObjectExtensions.isNullOrUndefined(result.data))) {
                    cart = result.data.result;
                }
            }).then((): Promise<ClientEntities.ICancelableDataResult<PaymentTerminalCapturePaymentResponse>> => {
                let newRequest: PaymentTerminalCapturePaymentRequest<PaymentTerminalCapturePaymentResponse> =
                    new PaymentTerminalCapturePaymentRequest<PaymentTerminalCapturePaymentResponse>(
                        request.amount,
                        request.paymentProperties,
                        PaymentHandlerHelper.FillExtensionProperties(cart, request.extensionTransactionProperties));

                return this.defaultExecuteAsync(newRequest);
            });
    }
}