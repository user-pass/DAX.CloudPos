import * as NewView from "PosApi/Create/Views";
import KnockoutExtensionViewModelBase from "./KnockoutExtensionViewModelBase";
declare abstract class KnockoutExtensionViewControllerBase<TViewModel extends KnockoutExtensionViewModelBase> extends NewView.ExtensionViewControllerBase {
    readonly abstract viewModel: TViewModel;
    constructor(context: NewView.IExtensionViewControllerContext, saveInHistory: boolean);
    onReady(element: HTMLElement): void;
}
export default KnockoutExtensionViewControllerBase;
