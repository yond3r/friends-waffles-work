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
    inquirer.prompt([
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
        message: "enter email here",
        name: "email",
        function (nameInput) {
            if (nameInput) {
                return true;
            } else {
                return "Please try again, this time with the employee's name.";
            }
        }
            
        



    ])
}
