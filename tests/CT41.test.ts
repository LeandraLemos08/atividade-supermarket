import { describe, it, expect } from "@jest/globals";
import { Armazenamento } from "../src/services/Armazenamento";

describe('Armazenamento email', () => {
    it('Deve rejeitar a busca por um email inexistente', () => {
        const storage = new Armazenamento();
        expect(() => storage.findUserByEmail("nonexistent@example.com")).toThrow();
    });
});