// Employee Class constructor

class Employee {
    // Object containing the Employee properties
    constructor(name, id, email, role = 'Employee'){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    // Function to call Employee methods
    getName(){
        return this.name;
    };

    getId(){
        return this.id;
    };

    getEmail(){
        return this.email;
    };

    getRole(){
        return this.role;
    }

}

// Exports employee function 
module.exports = Employee;