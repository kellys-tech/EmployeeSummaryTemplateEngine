// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.



//extends Employee

//properties
    //github - githubusername

//methods
    // getGithub()
    // getRole() will override to return Engineer

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (github) {
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

module.exports = Engineer