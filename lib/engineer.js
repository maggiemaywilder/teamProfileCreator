const Employee = require('./employee');

class Engineer extends Employee{
    constructor(github) {
        this.github = github;
    }

    getGitHub()

    getRole()  // overrides to return Engineer
}