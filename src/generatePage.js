const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
// file just for generating the page elements dynamically
var teamObjs = [];

function constructors(team) {
    console.log(team);
    const managersObjs = [];
    const engineersObjs = [];
    const internsObjs = [];
    let managers = team.filter(function (element) {
        return (element[0] === 'team manager');
    });
    let engineers = team.filter(function (element) {
        return (element[0] === 'engineer');
    });
    let interns = team.filter(function (element) {
        return (element[0] === 'intern');
    });
    managers.forEach(function (item) {
        const boss = (new Manager(item[1].name, item[1].id, item[1].email, item[1].last));
        managersObjs.push(boss);
    });
    engineers.forEach(function (item) {
        const brains = (new Engineer(item[1].name, item[1].id, item[1].email, item[1].last));
        engineersObjs.push(brains);
    });
    interns.forEach(function (item) {
        const student = (new Intern(item[1].name, item[1].id, item[1].email, item[1].last));
        internsObjs.push(student);
    });
    teamObjs = [...managersObjs, ...engineersObjs, ...internsObjs];
    return (teamObjs);


    }
    

function createPage(team) {
    constructors(team);
    // teamObjs;
    console.log(teamObjs, 'line 43');

}

module.exports = createPage;

