// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, email, id, role) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getId() {
        return this.id;
    }

    getRole() {
        return "Employee";
    }
}
module.exports = Employee;

// Manager -- Ron Swanson
// Engineer -- Leslie Knope
// Engineer -- Ben Wyatt -- ice town
// Intern -- April Ludgate 