'use strict';
import * as models from './models';

export interface IEdmType {
	typeKind?: IEdmType.TypeKindEnum;
}

export namespace IEdmType {
        export enum TypeKindEnum {
            None = 'None' as any,
            Primitive = 'Primitive' as any,
            Entity = 'Entity' as any,
            Complex = 'Complex' as any,
            Row = 'Row' as any,
            Collection = 'Collection' as any,
            EntityReference = 'EntityReference' as any,
            Enum = 'Enum' as any
        }
}
