import EmployeeDiscountOperationResponse from "../Operations/EmployeeDiscount/EmployeeDiscountOperationResponse";
import EmployeeDiscountOperationRequest from "../Operations/EmployeeDiscount/EmployeeDiscountOperationRequest";
import { ShowMessageDialogClientRequest, ShowMessageDialogClientResponse, IMessageDialogOptions, ITextInputDialogOptions } from "PosApi/Consume/Dialogs";
import { IExtensionContext } from "PosApi/Framework/ExtensionContext";
import { ClientEntities } from "PosApi/Entities";
import { ExtensionOperationRequestType } from "PosApi/Create/Operations";

export default class EmployeeDiscountMessageDialog<TResponse extends EmployeeDiscountOperationResponse>{

    public supportedRequestType(): ExtensionOperationRequestType<TResponse> {
        return EmployeeDiscountOperationRequest;
    }

    public static show(context: IExtensionContext): Promise<string> {
        let promise: Promise<string> = new Promise<string>((resolve: (value: string) => void, reject: (reason?: any) => void) => {
            let messageDialogOptions: IMessageDialogOptions = {
                title: "Warning",
                message: "No customer found. Do you want to add one?",
                showCloseX: true,
                button1: {
                    id: "button1OK",
                    label: "Yes",
                    result: "OKResult"
                },
                button2: {
                    id: "Button2Cancel",
                    label: "Cancel",
                    result: "CancelResult"
                }
            };

            let dialogRequest: ShowMessageDialogClientRequest<ShowMessageDialogClientResponse> =
                new ShowMessageDialogClientRequest<ShowMessageDialogClientResponse>(messageDialogOptions);
            context.runtime.executeAsync(dialogRequest).then((result: ClientEntities.ICancelableDataResult<ShowMessageDialogClientResponse>) => {

                if (result.data.result.dialogResult.toString() == "OKResult") {
                    let options: ITextInputDialogOptions = { label: "Please enter customer account:" };
                    let corellationId: string;
                    let customerAccount: string;

                    let customerAccountRequest: Commerce.ShowTextInputDialogClientRequest<Commerce.ShowTextInputDialogClientResponse> =
                        new Commerce.ShowTextInputDialogClientRequest(options, corellationId);
                    context.runtime.executeAsync(customerAccountRequest).then((result: ClientEntities.ICancelableDataResult<Commerce.ShowTextInputDialogClientResponse>) => {

                        if (!result.canceled) {
                            customerAccount = result.data.result.value.toString();

                            let getScanResult: Commerce.GetScanResultClientRequest<Commerce.GetScanResultClientResponse> =
                                new Commerce.GetScanResultClientRequest(customerAccount);
                            context.runtime.executeAsync(getScanResult).then((result: ClientEntities.ICancelableDataResult<Commerce.GetScanResultClientResponse>) => {

                                if (result.data.result.Customer) {
                                    let setCustomerAccountRequest: Commerce.SetCustomerOnCartOperationRequest<Commerce.SetCustomerOnCartOperationResponse> =
                                        new Commerce.SetCustomerOnCartOperationRequest(corellationId, customerAccount);
                                    context.runtime.executeAsync(setCustomerAccountRequest).then((result: ClientEntities.ICancelableDataResult<Commerce.SetCustomerOnCartOperationResponse>) => {

                                    }).catch((reason: any) => {
                                        context.logger.logError(JSON.stringify(reason));
                                        reject(reason);
                                    });

                                } else { this.show(context); }

                            }).catch((reason: any) => {
                                context.logger.logError(JSON.stringify(reason));
                                reject(reason);
                            });

                        } else { resolve(null); }

                    }).catch((reason: any) => {
                        context.logger.logError(JSON.stringify(reason));
                        reject(reason);
                    });

                    context.logger.logInformational("MessageDialog result:" + result.data.result.dialogResult);
                    resolve(result.data.result.dialogResult);

                } else { resolve(null); }

            }).catch((reason: any) => {
                context.logger.logError(JSON.stringify(reason));
                reject(reason);
            });
        });

        return promise;
    }

}