const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
// file just for generating the page elements dynamically
var teamObjs = [];

function constructors(team) {
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
    return makeCards(teamObjs);
    }
    
function makeCards(objArray) {
    let teamCards = [];
    objArray.forEach(function(employee){
        switch(employee.getRole()) {
            case 'Manager':
                teamCards.push(`<div class="card">
    <div class="card-heading bg-success">
        <h3>${employee.name}</h3>
        <h4>${employee.getRole()}</h4>
    </div>
    <div class="card-body">
        <Ul>
            <li>ID:${employee.id}</li>
            <li>Email: <a href=mailto:${employee.email}>${employee.email}</a>
            <li>Office number: ${employee.officeNumber}</li>
        </ul>
    </div>
</div>`);
                break;
            case 'Engineer':
                teamCards.push(`<div class="card">
    <div class="card-heading bg-primary">
        <h3>${employee.name}</h3>
        <h4>${employee.getRole()}</h4>
    </div>
    <div class="card-body">
        <Ul>
            <li>ID:${employee.id}</li>
            <li>Email: <a href="mailto:${employee.email}">${employee.email}</a>
            <li>GitHub: <a href="https://github.com/${employee.github}">${employee.github}</a></li>
        </ul>
    </div>
</div>`);
                break;
            case 'Intern':
                teamCards.push(`<div class="card">
    <div class="card-heading bg-warning">
        <h3>${employee.name}</h3>
        <h4>${employee.getRole()}</h4>
    </div>
    <div class="card-body">
        <Ul>
            <li>ID:${employee.id}</li>
            <li>Email: <a href=mailto:${employee.email}>${employee.email}</a>
            <li>School: ${employee.school}</li>
        </ul>
    </div>
</div>`);
                break;
        }
    });
    return teamCards.join("");
};


function createPage(team) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">

    <style>
        .header {
            height: 100px;
        }


    </style>
    <title>Team Profile Page</title>
</head>
<body>
    <head class="container-fluid bg-info header">
        <h1>My Team</h1>
    </head>
    <main class="container-lg bg-light">
        <div class="row align-items-center">
${constructors(team)}
        </div>
    </main>

    <!-- Bootstrap Icons? -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
</body>
</html>`
    // teamObjs;

}

module.exports = createPage;

