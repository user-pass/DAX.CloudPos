import { ISearchFilterDefinitionContext, CustomTextSearchFilterDefinitionBase } from "PosApi/Extend/Views/CustomSearchFilters";
export default class SSNNumberCustomerSearchFilter extends CustomTextSearchFilterDefinitionBase {
    protected readonly labelValue: string;
    protected readonly id: string;
    constructor(context: ISearchFilterDefinitionContext);
}
