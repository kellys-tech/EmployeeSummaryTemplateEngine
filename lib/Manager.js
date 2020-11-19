// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

//extends Employee

//properties
    //officeNumber

//methods
    // why do we not need a method to get the office number?
    // getRole() will override to return Manager

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber
        
    }
    get officeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager"
    }
};

module.exports = Manager