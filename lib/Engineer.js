
//use require to get Employee module
const Employee = require("./Employee");

//define the Engineer class, inheriting Employee
class Engineer extends Employee {
    constructor(github) {
        super(name, id, email);
        this.github = github;
    }
    getGitHub() {
        return this.github;
    }
    getRole() {
        return "Engineer"
    }
};

//export Engineer class
module.exports = Engineer