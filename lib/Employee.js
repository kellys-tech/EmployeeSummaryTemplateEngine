// TODO: Write code to define and export the Employee class

// properties
    // name
    // id
    // email

// methods
    // getName()
    // getID()
    // getEmail()
    // getRole() returns Employee

    class Employee {
        constructor(name, id, email) {
            this.name = name;
            this.id = id;
            this.email = email
        }
    
    getName() {
        return this.name;
    }
    getID() {
        return this.id;
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return "Employee"
    }
}

module.exports =  Employee;