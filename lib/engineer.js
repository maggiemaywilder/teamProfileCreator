const Employee = require('./employee');

class Engineer extends Employee{
    constructor(github) {
        this.github = github;
    }

    getGitHub(
        return `https://github.com/${this.github}`;
    )

    getRole()  // overrides to return Engineer
}