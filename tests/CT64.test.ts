import { Armazenamento } from '../src/services/Armazenamento';
import { User, UserRole } from '../src/models/User';
import { Admin } from '../src/models/Admin';
import { test } from '@jest/globals';
import { describe } from '@jest/globals';
import { Supervisor } from '../src/models/Supervisor';
import { expect } from '@jest/globals';
import { EmployeeService } from '../src/services/EmployeeService';

describe('Buscar usuário por ID com administrador ou supervisor', () => {
    class TestUser extends User {
        public constructor(id: number, name: string, email: string, role: UserRole) {
            super(id, name, email, role);
        }
    }
    
    test('Deve permitir que um administrador ou supervisor busque um usuário por ID', () => {
        const armazenamento = new Armazenamento();
        const service = new EmployeeService(armazenamento);
        const supervisor = new Supervisor(1, "Supervisor", "supervisor@example.com");
        const admin = new Admin(1, "Admin", "admin@example.com");
        const user = new TestUser(2, "John Doe", "john.doe@example.com", "EMPLOYEE");
        armazenamento.addUser(user);

        // Verifica se o administrador pode buscar o usuário
        const foundByAdmin = service.getUser(admin, 2);
        expect(foundByAdmin).toBe(user);

        // Verifica se o supervisor pode buscar o usuário
        const foundBySupervisor = service.getUser(supervisor, 2);
        expect(foundBySupervisor).toBe(user);

    });
});