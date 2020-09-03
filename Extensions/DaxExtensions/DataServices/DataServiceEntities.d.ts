import { ProxyEntities } from "PosApi/Entities";
export { ProxyEntities };
export declare namespace Entities {
    class Invitation {
        Id: number;
        Language: string;
        Message: string;
        ExtensionProperties: ProxyEntities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class Language {
        RecId: number;
        LanguageId: string;
        ExtensionProperties: ProxyEntities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class TenderTypeModel {
        TenderTypeModelId: string;
        Name: string;
        DraftNeeded: boolean;
        ExtensionProperties: ProxyEntities.CommerceProperty[];
        constructor(odataObject?: any);
    }
}
