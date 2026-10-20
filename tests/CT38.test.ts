import { describe, it, expect } from '@jest/globals';
import { Armazenamento } from '../src/services/Armazenamento';

describe('Armazenamento id', () => {
    it('Deve rejeitar a busca por um id inexistente', () => {
        const storage = new Armazenamento();
        expect(() => storage.findUserById(999)).toThrow();
    });
});

