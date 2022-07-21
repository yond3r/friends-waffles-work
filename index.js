//file writing
const fs = require('fs');

//for prompting user
const inquirer = require('inquirer');

//importing constructors
const Employee = require(`./Develop/lib/Employee`);
const Engineer = require(`./Develop/lib/Engineer`);
const Intern = require(`./Develop/lib/Intern`);
const Manager = require(`./Develop/lib/Manager`);

//html imports 
const generateHTML = require(`./Develop/util/generateHtml`);

//arrays for storage
function userInfo() {
    inquirer.prompt ([
        type: "input",
        message: "Please enter the employee name here.",
        name: "names",
        function (nameInput) {
            if (nameInput) {
                return true;
            } else {
                return "Please try again, this time with the employee's name.";
            }
        }
    },
    {
        type: "input",
        message: "Please enter the employee's email here",
        name: "email",
        function (emailInput) {
            if (emailInput) {
                return true;
            } else {
                return "I'm sorry, please re-enter the employee's email.";
            }
        }
    },
    {
        type: "input",
        message: "Please enter the employee's ID here",
        name: "ID",
        function (idInput) {
            if (idInput) {
                return true;
            } else {
                return "I'm sorry, please re-enter the employee's ID."
            }
        }
    },
    {
        type: "list",
        message: "Please select the role of the employee."
        name: "role"
        choices: ["Manager, Engineer, Intern,"]
        }
    ])
        .then(answers => {
            if (answers.role === 'Manager') {
                type: "input",
                message: "Please enter the corresponding office number.",
                name: "office,"
                (officeInput) => {
                    if (officeInput) {
                        return true;
                        } else {
                            return "Please enter office number.";
                        }
                    }
                }
            ])

            .then(response => {
                console.log(response.office);
                const ManagerTeam = newManager (answers.name, answers.email, answers.id, answers.role, response.office);
                teamMembers.push(ManagerTeam);
                addOption()
            })

        } else if (answers.role === 'Engineer'){
            inquirer.prompt([
                {
                    type: "input",
                    message: "Enter GitHub username",
                    name: "GitHub",
                    githubInput => {
                        if (githubInput) {
                            return true; 
                        } else {
                            return "Please enter GitHub username";
                        }
                        }
                    }
                }
            ])
        
