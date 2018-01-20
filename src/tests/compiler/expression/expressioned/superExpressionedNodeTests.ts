import * as ts from "typescript";
import {expect} from "chai";
import {PropertyAccessExpression, SuperExpressionedNode} from "./../../../../compiler";
import {getInfoFromTextWithDescendant} from "./../../testHelpers";

describe(nameof(SuperExpressionedNode), () => {
    describe(nameof<SuperExpressionedNode>(n => n.getExpression), () => {
        function doTest(text: string, expectedText: string) {
            const {descendant} = getInfoFromTextWithDescendant<PropertyAccessExpression>(text, ts.SyntaxKind.PropertyAccessExpression);
            expect(descendant.getExpression().getText()).to.equal(expectedText);
        }

        it("should get the correct expression", () => {
            doTest("super.x", "super");
        });
    });
});
