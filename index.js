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

//file writing (???)
function genHTML (fileName, data) {
    fs.writeFile(`./dist/index.html`, generateHTML(teamMembers),  err => {
        if (err){
            throw err
        }
           console.log("Congrats!! Your page is created! Go you (-:")
    })
}
//arrays for storage
const teamMembers = [];

//prompts
function userInfo() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the employee name here.",
            name: "name",
            function(nameInput) {
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
            function(emailInput) {
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
            function(idInput) {
                if (idInput) {
                    return true;
                } else {
                    return "I'm sorry, please re-enter the employee's ID."
                }
            }
        },
        {
            type: "list",
            message: "Please select the role of the employee.",
            name: "role",
            choices: ["Manager", "Engineer", "Intern"]
        },

    ])

        .then(answers => {
            if (answers.role === 'Manager') {
                inquirer.prompt([
                    {
                        type: "input",
                        message: "Please enter the corresponding office number.",
                        name: "office",
                        validate: officeInput => {
                            if (officeInput) {
                                return true;
                            } else {
                                return "Please enter office number.";
                            }
                        }
                    }
                ])

                    .then(answers => {
                        console.log(answers.office);
                        const ManagerTeam = new Manager(answers.name, answers.email, answers.id, answers.role, answers.office);
                        teamMembers.push(ManagerTeam);
                        addOption()
                    })

            } else if (answers.role === 'Engineer') {
                inquirer.prompt([
                    {
                        type: "input",
                        message: "Enter GitHub username",
                        name: "GitHub",
                        validate: githubInput => {
                            if (githubInput) {
                                return true;
                            } else {
                                return "Please enter GitHub username";
                            }
                        }
                    }
                ])

                    .then(answers => {
                        console.log(answers.github)
                        const EngineerTeam = new Engineer(answers.name, answers.email, answers.id, answers.role, answers.github);
                        teamMembers.push(EngineerTeam);
                        addOption();
                    })

            } else if (answers.role === 'Intern') {
                inquirer.prompt([
                    {
                        type: "input",
                        message: "Enter the school's name",
                        name: "school",
                        function(schoolInput) {
                            if (schoolInput) {
                                return true;
                            } else {
                                return "Please enter the name of the school.";
                            }
                        }
                    }
                ])
                    .then(answers => {
                        console.log(answers.school);
                        const internTeam = new Intern(answers.name, answers.email, answers.id, answers.role);
                        teamMembers.push(internTeam);
                        addOption()
                    })
            }

            else {
                const employeeTeam = new Employee(answers.name, answers.email, answers.id, answers.role);
                teamMembers.push(employeeTeam);
                addOption();
            }

            function addOption() {
                inquirer.prompt([
                    {
                        type: "confirm",
                        message: "Would you like to add another Employee?",
                        name: "addMore",
                    }
                ])
                .then(response => {
                    if (response.addMore === true){
                        userInfo(teamMembers);
                    }
                })
        }})};

        userInfo();