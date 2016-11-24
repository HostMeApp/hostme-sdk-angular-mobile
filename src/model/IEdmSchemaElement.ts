'use strict';
import * as models from './models';

export interface IEdmSchemaElement {
	schemaElementKind?: IEdmSchemaElement.SchemaElementKindEnum;
	namespace?: string;
	name?: string;
}

export namespace IEdmSchemaElement {
        export enum SchemaElementKindEnum {
            None = 'None' as any,
            TypeDefinition = 'TypeDefinition' as any,
            Function = 'Function' as any,
            ValueTerm = 'ValueTerm' as any,
            EntityContainer = 'EntityContainer' as any
        }
}
