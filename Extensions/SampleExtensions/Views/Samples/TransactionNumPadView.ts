/**
 * SAMPLE CODE NOTICE
 * 
 * THIS SAMPLE CODE IS MADE AVAILABLE AS IS.  MICROSOFT MAKES NO WARRANTIES, WHETHER EXPRESS OR IMPLIED,
 * OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY OR COMPLETENESS OF RESPONSES, OF RESULTS, OR CONDITIONS OF MERCHANTABILITY.
 * THE ENTIRE RISK OF THE USE OR THE RESULTS FROM THE USE OF THIS SAMPLE CODE REMAINS WITH THE USER.
 * NO TECHNICAL SUPPORT IS PROVIDED.  YOU MAY NOT DISTRIBUTE THIS CODE UNLESS YOU HAVE A LICENSE AGREEMENT WITH MICROSOFT THAT ALLOWS YOU TO DO SO.
 */

import * as NewView from "PosApi/Create/Views";
import * as HeaderSplitView from "PosUISdk/Controls/HeaderSplitView";
import * as ScanResults from "PosApi/Consume/ScanResults";
import * as Products from "PosApi/Consume/Products";
import { ClientEntities, ProxyEntities } from "PosApi/Entities";
import { ObjectExtensions } from "PosApi/TypeExtensions";

import { TransactionNumPad, ITransactionNumPadState, ITransactionNumPadResult } from "PosUISdk/Controls/NumPad";

/**
 * The controller for TransactionNumPadView.
 */
export default class TransactionNumPadView extends NewView.ExtensionViewControllerBase {
    public readonly headerSplitView: HeaderSplitView.HeaderSplitView;
    public readonly numPad: TransactionNumPad;
    public numPadValue: Observable<string>;
    public numPadQuantity: Observable<string>;
    public scanResult: Observable<string>;

    constructor(context: NewView.IExtensionViewControllerContext) {
        // Do not save in history
        super(context, false);

        this.headerSplitView = new HeaderSplitView.HeaderSplitView({
            title: "TransactionNumPad sample"
        });

        this.numPadValue = ko.observable("");
        this.numPadQuantity = ko.observable("");
        this.scanResult = ko.observable("");
        let numPadState: ITransactionNumPadState = {
            onEnter: this.onNumPadEnter.bind(this),
            captureGlobalInput: true,
            label: "NumPad label"
        };

        this.numPad = new TransactionNumPad(this, numPadState);
    }

    /**
     * Bind the html element with view controller.
     *
     * @param {HTMLElement} element DOM element.
     */
    public onReady(element: HTMLElement): void {
        super.onReady(element);

        // Customized binding
        ko.applyBindings(this, element);
    }

    /**
     * Callback for numpad.
     * @param {INumPadResult} result Numpad current value and quantity.
     */
    private onNumPadEnter(result: ITransactionNumPadResult): void {
        this.numPadValue(result.value);
        if (result.quantity) {
            this.numPadQuantity(result.quantity.toString());
        } else {
            this.numPadQuantity("");
        }

        this.numPad.value("");
        this.scanResult("");

        let getScanResultClientRequest: ScanResults.GetScanResultClientRequest<ScanResults.GetScanResultClientResponse> =
            new ScanResults.GetScanResultClientRequest(result.value);

        this.context.runtime.executeAsync(getScanResultClientRequest)
            .then((response: ClientEntities.ICancelableDataResult<ScanResults.GetScanResultClientResponse>): void => {
                if (ObjectExtensions.isNullOrUndefined(response.data)
                    || ObjectExtensions.isNullOrUndefined(response.data.result)) {
                    this.scanResult("Error");
                } else {
                    let scanResult: ProxyEntities.ScanResult = response.data.result;
                    let barcodeMaskType: ProxyEntities.BarcodeMaskType = scanResult.MaskTypeValue;
                    switch (barcodeMaskType) {
                        case ProxyEntities.BarcodeMaskType.Item:
                            // If the scanned text maps to a product bar code based on the bar code mask,
                            // but the product associated with the bar code is not found, the Product field
                            // on the scanResult won't be set.
                            let product: ProxyEntities.SimpleProduct = scanResult.Product;
                            if (ObjectExtensions.isNullOrUndefined(product)) {
                                this.scanResult("Product error: The product associated with the bar code was not found.");
                            } else {
                                // If a KitMaster product is passed on the request below, its default configuration will be loaded.
                                if (product.ProductTypeValue === ProxyEntities.ProductType.Master) {
                                    let selectPVClientRequest: Products.SelectProductVariantClientRequest<Products.SelectProductVariantClientResponse> =
                                        new Products.SelectProductVariantClientRequest(product);
                                    this.context.runtime.executeAsync(selectPVClientRequest)
                                        .then((response: ClientEntities.ICancelableDataResult<Products.SelectProductVariantClientResponse>): void => {
                                            if (response.canceled) {
                                                this.scanResult("Product variant selection canceled.");
                                            } else {
                                                this.scanResult("Product variant: " + response.data.result.Name);
                                            }
                                        }).catch((reason: any) => {
                                            this.context.logger.logError("Select product variant error: " + JSON.stringify(reason));
                                        });
                                } else {
                                    this.scanResult("Product: " + product.Name);
                                }
                            }
                            break;
                        case ProxyEntities.BarcodeMaskType.Customer:
                            // If the scanned text maps to a customer bar code based on the bar code mask,
                            // but the customer associated with the bar code is not found, the Customer field
                            // on the scanResult won't be set.
                            if (ObjectExtensions.isNullOrUndefined(scanResult.Customer)) {
                                this.scanResult("Customer error: The customer associated with the bar code was not found.");
                            } else {
                                this.scanResult("Customer: " + scanResult.Customer.Name);
                            }
                            break;
                        case ProxyEntities.BarcodeMaskType.LoyaltyCard:
                            // If the scanned text maps to a loyalty card bar code based on the bar code mask,
                            // but the loyalty card associated with the bar code is not found, the Loyalty card field
                            // on the scanResult won't be set.
                            if (ObjectExtensions.isNullOrUndefined(scanResult.LoyaltyCard)) {
                                this.scanResult("Customer error: The customer associated with the bar code was not found.");
                            } else {
                                this.scanResult("LoyaltyCard: " + scanResult.LoyaltyCard.CardNumber);
                            }
                            break;
                        case ProxyEntities.BarcodeMaskType.DiscountCode:
                            this.scanResult("Discount code: " + scanResult.Barcode.DiscountCode);
                            break;
                        case ProxyEntities.BarcodeMaskType.Coupon:
                            this.scanResult("Coupon code: " + scanResult.Barcode.CouponId);
                            break;
                        case ProxyEntities.BarcodeMaskType.None:
                            this.scanResult("Nothing was found");
                            break;
                        default:
                            this.scanResult("The bar code type that was scanned is not supported.");
                            break;
                    }
                }
            });
    }
}
