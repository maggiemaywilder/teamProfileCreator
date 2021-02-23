const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const createPage = require('./src/generatePage.js');
const fs = require('fs');

const team = [];
var member;

  // function of questions to ask about team members
    // need last question to change with type of member
  // function to add member and push to array using the prompt from above

function writeToFile(data) {
  let fileName = (`./dist/index.html`);
  let htmlContent = createPage(data);
  fs.writeFile(fileName, htmlContent, (err) => 
  err ? console.log(err) : console.log('Success!')
  );
}

function newMember(type) {
  const person = type;
  member = [];
  member.push(type);
  const lastQ = [
    {key: 'team manager',
      value: `What is the team manager's office number?`},
    {key: 'engineer',
      value: `What is your engineer's GitHub username?`},
    {key: 'intern',
      value: `What is your intern's school?`}
  ];
  const finalQ = lastQ.find(({key}) => key === type);
  inquirer.prompt([
    {
      type: 'input',
      name: `name`,
      message: `What is the ${type}'s name?`
    },      
    {
      type: 'number',
      name: `id`,
      message: `What is the ${person}'s id?`
    },
    {
      type: 'input',
      name: `email`,
      message: `What is the ${person}'s email?`
    },
    {
      type: 'input',
      name: `last`,
      message: finalQ.value
    },
  ])
  .then ((answers) => {
    member.push(answers);
    team.push(member);
    next();
  })
  .catch((error) => {
    if(error.isTtyError) {
      console.log(`Prompts couldn't be rendered in current environment.`);
    } else {
      console.log('error');
    }
  });
}

function next() {
  inquirer.prompt([
    {
      type: 'expand',
      name: 'memberType',
      message: `Which type of team member would you like to add?`,
      choices: [
        {key: 'm', name: 'Manager', value: 'team manager'},
        {key: 'e', name: 'Engineer', value: 'engineer'},
        {key: 'i', name: 'Intern', value: 'intern'},
        {key: 'n', name: `I would not like to add any further team members.`, value: `none`}
      ],
    },
  ])
  .then ((answer) => {
    newP = answer.memberType;
    if(newP === 'none') {
      writeToFile(team);
    } else {
      newMember(newP);
    }
  });
}

function init() {
  newMember('team manager');

}



// need to loop through array creating new members from constructors

// need function and file to write to html 
// ~OO~ create readme homework



// Function call to initialize app
init();
