import { expect } from "chai"

import generator from "generator";

describe("generator", function () {
    it("is a generator test", () => {
        let iterator = generator(3);

        let result = iterator.next();
        expect(result).to.be.exist;
        expect(result.done).to.be.false;
        expect(result.value).to.be.equal(0);

        result = iterator.next();
        expect(result).to.be.exist;
        expect(result.done).to.be.false;
        expect(result.value).to.be.equal(1);

        result = iterator.next();
        expect(result).to.be.exist;
        expect(result.done).to.be.false;
        expect(result.value).to.be.equal(2);

        result = iterator.next();
        expect(result).to.be.exist;
        expect(result.done).to.be.true;
        expect(result.value).to.be.undefined;
    });
})
