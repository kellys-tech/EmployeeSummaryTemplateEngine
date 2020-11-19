// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

//extends Employee

//properties
    // school

//methods
    // getSchool()
    // getRole() will override to return Intern

const Employee = require("./Employee");

class Intern extends Employee {
    constructor (school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;