// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, email, id, role, github){
    super(name, email, id, role)
    this.github = gitHub;
}

    getGitHub (){
        return this.gitHub;
    }
}

    module.exports = Engineer;