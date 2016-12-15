'use strict';
var IEdmTerm;
(function (IEdmTerm) {
    var TermKindEnum;
    (function (TermKindEnum) {
        TermKindEnum[TermKindEnum["None"] = 'None'] = "None";
        TermKindEnum[TermKindEnum["Type"] = 'Type'] = "Type";
        TermKindEnum[TermKindEnum["Value"] = 'Value'] = "Value";
    })(TermKindEnum = IEdmTerm.TermKindEnum || (IEdmTerm.TermKindEnum = {}));
    var SchemaElementKindEnum;
    (function (SchemaElementKindEnum) {
        SchemaElementKindEnum[SchemaElementKindEnum["None"] = 'None'] = "None";
        SchemaElementKindEnum[SchemaElementKindEnum["TypeDefinition"] = 'TypeDefinition'] = "TypeDefinition";
        SchemaElementKindEnum[SchemaElementKindEnum["Function"] = 'Function'] = "Function";
        SchemaElementKindEnum[SchemaElementKindEnum["ValueTerm"] = 'ValueTerm'] = "ValueTerm";
        SchemaElementKindEnum[SchemaElementKindEnum["EntityContainer"] = 'EntityContainer'] = "EntityContainer";
    })(SchemaElementKindEnum = IEdmTerm.SchemaElementKindEnum || (IEdmTerm.SchemaElementKindEnum = {}));
})(IEdmTerm = exports.IEdmTerm || (exports.IEdmTerm = {}));
//# sourceMappingURL=IEdmTerm.js.map