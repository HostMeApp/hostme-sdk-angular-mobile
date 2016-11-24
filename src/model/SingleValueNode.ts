'use strict';
import * as models from './models';

export interface SingleValueNode {
	typeReference?: models.IEdmTypeReference;
	kind?: SingleValueNode.KindEnum;
}

export namespace SingleValueNode {
        export enum KindEnum {
            None = 'None' as any,
            Constant = 'Constant' as any,
            Convert = 'Convert' as any,
            NonentityRangeVariableReference = 'NonentityRangeVariableReference' as any,
            BinaryOperator = 'BinaryOperator' as any,
            UnaryOperator = 'UnaryOperator' as any,
            SingleValuePropertyAccess = 'SingleValuePropertyAccess' as any,
            CollectionPropertyAccess = 'CollectionPropertyAccess' as any,
            SingleValueFunctionCall = 'SingleValueFunctionCall' as any,
            Any = 'Any' as any,
            CollectionNavigationNode = 'CollectionNavigationNode' as any,
            SingleNavigationNode = 'SingleNavigationNode' as any,
            SingleValueOpenPropertyAccess = 'SingleValueOpenPropertyAccess' as any,
            SingleEntityCast = 'SingleEntityCast' as any,
            All = 'All' as any,
            EntityCollectionCast = 'EntityCollectionCast' as any,
            EntityRangeVariableReference = 'EntityRangeVariableReference' as any,
            SingleEntityFunctionCall = 'SingleEntityFunctionCall' as any,
            CollectionFunctionCall = 'CollectionFunctionCall' as any,
            EntityCollectionFunctionCall = 'EntityCollectionFunctionCall' as any,
            NamedFunctionParameter = 'NamedFunctionParameter' as any
        }
}
