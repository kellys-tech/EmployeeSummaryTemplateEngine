
//use require to get Employee module
const Employee = require("./Employee");

//define the Manager class, inheriting Employee
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

//export Manager class
module.exports = Manager