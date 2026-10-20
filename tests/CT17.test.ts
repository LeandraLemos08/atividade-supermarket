import { describe, expect, test } from '@jest/globals';
import { Admin } from '../src/models/Admin';

describe('Supervisor', () => {
  test('Deve verificar se o supervisor é válido', () => {
    const admin = new Admin(1, 'John Doe', 'john.doe@example.com');
    expect(admin.getId()).toBe(1);
    expect(admin.getName()).toBe('John Doe');
    expect(admin.getEmail()).toBe('john.doe@example.com');
  });
});
