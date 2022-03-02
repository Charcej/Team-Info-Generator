// Engineer Class constructor

const Employee = require("./Employee");

class Engineer extends Employee {
    // Object containing the Engineer properties
    constructor(name, id, email, gitHub){
        // Calls the employee constructor plus add engineer role
        super(name, id, email, 'Engineer');
        // Adds call for GitHub account
        this.gitHub = gitHub;
    }
// Returns GitHub input
    getGitHub(){
        return this.gitHub;
    };
}

// Exports Engineer function 
module.exports = Engineer;