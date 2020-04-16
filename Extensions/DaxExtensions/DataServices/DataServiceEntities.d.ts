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
}
