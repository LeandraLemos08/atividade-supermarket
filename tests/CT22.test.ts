import { describe, it, expect } from "@jest/globals";
import { Employee } from "../src/models/Employee";

describe("Employee", () => {
  it("não deve retornar salário negativo", () => {
    expect(() => new Employee(1, "John Doe", "john.doe@example.com", -5000, "")).toThrow();
  });
});
