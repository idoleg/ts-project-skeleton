import { assert } from "chai";
import hello from "./index";

describe("Hello function", () => {

    it("should greeting default user", () => {
        const result = hello();
        assert.equal(result, "Hello, User");
    });

    it("should greeting user by their name", () => {
        const userNames: string[] = ["Maria", "Ivan", "Petr"];

        for (const name of userNames) {
            const result = hello(name);
            assert.equal(result, "Hello, " + name);
        }

    });
});
