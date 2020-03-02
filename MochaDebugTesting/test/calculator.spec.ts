import { expect } from "chai"

import Calculator from "src/calculator";

describe("Calculator", function () {
    it("is a sum test", () => {
        let a = 100;
        let b = 100;

        const result = Calculator.sum(a, b);

        expect(result).to.be.equal(200);
    });
});
