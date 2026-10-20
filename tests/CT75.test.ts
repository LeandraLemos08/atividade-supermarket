import { Armazenamento } from '../src/services/Armazenamento';
import { User } from '../src/models/User';
import { Admin } from '../src/models/Admin';
import { test } from '@jest/globals';
import { Employee } from '../src/models/Employee';
import { describe, expect } from '@jest/globals';
import { EmployeeService } from '../src/services/EmployeeService';

describe('Executar o cadastro de funcionário', () => {
    test('Verificar leitura dos campos e mensagem de sucesso.', () => {
        //Arrange
        const armazenamento = new Armazenamento();
        const service = new EmployeeService(armazenamento);
        const admin = new Admin(1, "Admin", "admin@example.com");
        //Act
        //Assert
       //Verificar se fez a leitura dos campos corretamente
        const employee = new Employee(1, "John Doe", "john@example.com", 5000, "IT");
        const registeredEmployee = service.registerUser(admin, "EMPLOYEE", employee.getId(), employee.getName(), employee.getEmail(), employee.getSalary(), employee.getDepartment()) as Employee;
        expect(registeredEmployee.getId()).toBe(1);
        expect(registeredEmployee.getName()).toBe("John Doe");
        expect(registeredEmployee.getEmail()).toBe("john@example.com");
        expect(registeredEmployee.getSalary()).toBe(5000);
        expect(registeredEmployee.getDepartment()).toBe("IT");
    });
});