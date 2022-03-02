// Intern Class constructor

const Employee = require('./Employee');

class Intern extends Employee {
    // Object containing the Intern properties
    constructor(name, id, email, school){
        // Calls the employee constructor plus add Intern Role
        super(name, id, email, 'Intern');
        // Adds call for School 
        this.school = school;
    }
    // Returns School input
    getSchool(){
        return this.school;
    };
}

// Exports Intern function 
module.exports = Intern;