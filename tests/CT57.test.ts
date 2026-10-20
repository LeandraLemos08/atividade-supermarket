import { describe, it, expect } from '@jest/globals';
import { EmployeeService } from '../src/services/EmployeeService';
import { Armazenamento } from '../src/services/Armazenamento';
import { User } from '../src/models/User';
import { Admin } from '../src/models/Admin';
import { test } from '@jest/globals';

describe('Deve rejeitar cadastro de funcionário sem salário', () => {
    test('Deve lançar erro ao tentar cadastrar funcionário sem salário', () => {
        //Arrange
        const armazenamento = new Armazenamento();
        const service = new EmployeeService(armazenamento);
        const admin = new Admin(1, "Admin", "admin@example.com");
        const name = "John Doe";
        const email = "johndoe@gmail.com"
        const id = 1;
        const department = "IT";

        //Act & Assert
        expect(() => {
            service.registerUser(admin, "EMPLOYEE", id, name, email, undefined, department);
        }).toThrow();

    })
});