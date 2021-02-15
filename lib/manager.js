const Employee = require('./employee');

class Engineer extends Employee{
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }

    getRole()  // overrides to return Manager

}