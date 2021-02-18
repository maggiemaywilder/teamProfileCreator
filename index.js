const inquirer = require('inquirer');
const Employee = require('./lib/employee.js');


  // function of questions to ask about team members
    // need last question to change with type of member
  // function to add member and push to array using the prompt from above

function newMember(type) {
  const person = type;
  const lastQ = {
    'team manager': `What is the team manager's office number?`,
    'engineer': `What is your engineer's GitHub username?`,
    'intern': `What is your intern's school?`
  };
  const correctQ = lastQ[person];
  inquirer.prompt([
    {
      type: 'input',
      name: `name`,
      message: `What is the ${person}'s name?`
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
      name: 'last',
      message: `${correctQ}`
    },
  ])
  .then ((answers) => {
    console.log(person, answers); //will change to creating object and pushing
  })
  .catch(error => {
    if(error.isTtyError) {
      console.log(`Prompts couldn't be rendered in current environment.`);
    } else {
      console.log('error');
    }
  })

  }


// variable type, use type to complete questions, use when to pick last question, use answers to create new Employee, push to array of team members, ask next member, return type. In init, if !type array complete, else run new member again passing in type.

function init() {
  newMember('team manager');
}



// need to loop through array creating new members from constructors

// need function and file to write to html 
// ~OO~ create readme homework



// Function call to initialize app
init();
