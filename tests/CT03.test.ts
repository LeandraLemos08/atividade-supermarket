import { UserRole } from "../src/models/User";
import { User } from "../src/models/User";
import { expect, test } from "@jest/globals";

class TestUser extends User {
    public constructor(id: number, name: string, email: string, role: UserRole) {
        super(id, name, email, role);
    }
}

test("Deve rejeitar um id negativo", () => {
    expect(() => new TestUser(-1, "John Doe", "john.doe@example.com", "EMPLOYEE")).toThrow();
})


