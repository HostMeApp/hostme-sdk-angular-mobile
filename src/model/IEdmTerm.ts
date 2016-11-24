'use strict';
import * as models from './models';

export interface IEdmTerm {
	termKind?: IEdmTerm.TermKindEnum;
	schemaElementKind?: IEdmTerm.SchemaElementKindEnum;
	namespace?: string;
	name?: string;
}

export namespace IEdmTerm {
        export enum TermKindEnum {
            None = 'None' as any,
            Type = 'Type' as any,
            Value = 'Value' as any
        }
        export enum SchemaElementKindEnum {
            None = 'None' as any,
            TypeDefinition = 'TypeDefinition' as any,
            Function = 'Function' as any,
            ValueTerm = 'ValueTerm' as any,
            EntityContainer = 'EntityContainer' as any
        }
}
