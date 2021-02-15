const Employee = require('./employee');

class Intern extends Employee{
    constructor(school) {
        this.school = school;
    }

    getSchool()

    getRole()  // overrides to return Intern

}