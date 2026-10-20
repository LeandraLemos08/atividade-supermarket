import { EmployeeService } from '../src/services/EmployeeService';
import { Supervisor } from '../src/models/Supervisor';
import { describe, expect, test } from '@jest/globals';
import { Admin } from '../src/models/Admin';
import { Armazenamento } from '../src/services/Armazenamento';

describe('Deve rejeitar remoção por supervisor', () => {
    test('Deve lançar erro ao tentar remover supervisor', () => {
        //Arrange
        const armazenamento = new Armazenamento();
        const service = new EmployeeService(armazenamento);
        const idSupervisor2 = 4;
        const supervisor = new Supervisor(idSupervisor2, "Supervisor", "supervisor@example.com");
        const idSupervisor = 1;
        const supervisorToRemove = new Supervisor(idSupervisor, "Supervisor to Remove", "supervisor2@example.com");

        //Act & Assert
        expect(() => {
            service.removeUser(supervisor, supervisorToRemove.getId());
        }).toThrow();
    });
});
