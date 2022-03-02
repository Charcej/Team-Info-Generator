// Manager Class constructor

const Employee = require("./Employee");

class Manager extends Employee  {
    // Object containing the Manager properties
    constructor(name, id, email, officeNumber){
        // Calls the employee constructor plus add Manager Role
        super(name, id, email, 'Manager', officeNumber);
        // Adds call for Office Number
        this.officeNumber = officeNumber;
    }
    // Returns Office Number input
    getOfficeNumber(){
        return this.officeNumber;
    };
}
// Exports Manager function 
module.exports = Manager;