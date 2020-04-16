/**
 * SAMPLE CODE NOTICE
 * 
 * THIS SAMPLE CODE IS MADE AVAILABLE AS IS.  MICROSOFT MAKES NO WARRANTIES, WHETHER EXPRESS OR IMPLIED,
 * OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY OR COMPLETENESS OF RESPONSES, OF RESULTS, OR CONDITIONS OF MERCHANTABILITY.
 * THE ENTIRE RISK OF THE USE OR THE RESULTS FROM THE USE OF THIS SAMPLE CODE REMAINS WITH THE USER.
 * NO TECHNICAL SUPPORT IS PROVIDED.  YOU MAY NOT DISTRIBUTE THIS CODE UNLESS YOU HAVE A LICENSE AGREEMENT WITH MICROSOFT THAT ALLOWS YOU TO DO SO.
 */

import { ProxyEntities } from "PosApi/Entities";
export { ProxyEntities };

export namespace Entities {

    /**
     * WarrantyPlan entity class.
     */
    export class WarrantyPlan {
        public PlanId: number;
        public ProductId: number;
        public Name: string;
        public Description: string;
        public Price: number;
        public ExtensionProperties: ProxyEntities.CommerceProperty[];

        // Navigation properties names

        /**
         * Construct an object from odata response.
         * @param {any} odataObject The odata result object.
         */
        constructor(odataObject?: any) {
            odataObject = odataObject || {};
            this.PlanId = (odataObject.PlanId != null) ? parseInt(odataObject.PlanId, 10) : undefined;

            this.ProductId = (odataObject.ProductId != null) ? parseInt(odataObject.ProductId, 10) : undefined;

            this.Name = odataObject.Name;

            this.Description = odataObject.Description;

            this.Price = (odataObject.Price != null) ? parseFloat(odataObject.Price) : undefined;

            this.ExtensionProperties = undefined;
            if (odataObject.ExtensionProperties) {
                this.ExtensionProperties = [];
                for (var i = 0; i < odataObject.ExtensionProperties.length; i++) {
                    if (odataObject.ExtensionProperties[i] != null) {
                        if (odataObject.ExtensionProperties[i]['@odata.type'] != null) {
                            var className: string = odataObject.ExtensionProperties[i]['@odata.type'];
                            className = className.substr(className.lastIndexOf('.') + 1).concat("Class");
                            this.ExtensionProperties[i] = new ProxyEntities[className](odataObject.ExtensionProperties[i])
                        } else {
                            this.ExtensionProperties[i] = new ProxyEntities.CommercePropertyClass(odataObject.ExtensionProperties[i]);
                        }
                    } else {
                        this.ExtensionProperties[i] = undefined;
                    }
                }
            }

        }
    }

}
