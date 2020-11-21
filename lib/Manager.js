
//use require to get Employee module
const Employee = require("./Employee");

//define the Intern class, inheriting Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
};

//export Manager class
module.exports = Manager;