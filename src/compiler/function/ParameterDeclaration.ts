﻿import * as ts from "typescript";
import {Node} from "./../common";
import {DeclarationNamedNode, InitializerExpressionableNode, TypedNode} from "./../base";

export const ParameterDeclarationBase = TypedNode(InitializerExpressionableNode(DeclarationNamedNode(Node)));
export class ParameterDeclaration extends ParameterDeclarationBase<ts.ParameterDeclaration> {
    /**
     * Gets if it's a rest parameter.
     */
    isRestParameter() {
        return this.node.dotDotDotToken != null;
    }

    /**
     * Gets if it's an optional parameter.
     */
    isOptional() {
        return this.node.questionToken != null || this.isRestParameter() || this.hasInitializer();
    }
}