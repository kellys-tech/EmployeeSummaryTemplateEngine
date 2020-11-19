
//use require to get Employee module
const Employee = require("./Employee");

//define the Intern class, inheriting Employee
class Intern extends Employee {
    constructor(school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
};

//export Intern class
module.exports = Intern;