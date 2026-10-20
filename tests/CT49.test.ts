import { describe, it, expect } from '@jest/globals';
import { Armazenamento } from '../src/services/Armazenamento';

describe('Após clear a busca deve estar vazia e a contagem ser zero', () => {
    it('Deve limpar o armazenamento e verificar a contagem', () => {
        const storage = new Armazenamento();
        storage.clear();
        expect(storage.getUserCount()).toBe(0);
    });
});