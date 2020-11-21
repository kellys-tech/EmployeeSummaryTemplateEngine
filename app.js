
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const team = [];

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

//switch statement to select Employee role
function emplRole() {
    inquirer.prompt ([ { 
        type: "list",
        message: "Select Employee Role",
        choices: ["Engineer", "Intern", "Manager", "Done"],
        name: "switch",
    },
])
.then (function (answer) {
    switch (answer.switch) {
        case "Engineer": 
            questEngineer();
        break;
        case "Intern":
            questIntern();
        break;
        case "Manager":
            questManager();
        break;
        case "Done":
            renderSite();
        break;
    }
}
)}

//Employee questions array
const employeeQuestions = [{
    type: "input",
    name: "emplName",
    message: "Enter Employee Name", 
},
{
    type: "input",
    name: "emplId",
    message: "Enter Employee ID",
},
{
    type: "input",
    name: "emplEmail",
    message: "Enter Employee Email",
},
];
//Engineer questions array 
const engineerQuestions = [{
    type: "input",
    name: "engName",
    message: "Enter Engineer Name",
},
{
    type: "input",
    name: "engId",
    message: "Enter Engineer ID",
},
{
    type: "input",
    name: "engEmail",
    message: "Enter Engineer Email",
},
{
    type: "input",
    name: "engGithub",
    message: "Enter Engineer Github link",
}];
//Intern questions array
const intquestions = [{
    type: "input",
    name: "intName",
    message: "Enter Intern Name",
},
{
    type: "input",
    name: "intId",
    messsage: "Enter Intern ID",
},
{
    type: "input",
    name: "intEmail",
    message: "Enter Intern Email",
},
{
    type: "input",
    name: "intSchool",
    message: "Enter Intern School"
}];
//Manager questions array
const mgrquestions = [{
    type: "input",
    name: "mgrName",
    message: "Enter Manager Name",
},
{
    type: "input",
    name: "mgrId",
    message: "Enter Manager ID",
},
{
    type: "input",
    name: "mgrEmail",
    message: "Enter Manager Email",
},
{
    type: "input",
    name: "mgrOfficeNumber",
    message: "Enter Manager Office Number",
}];

//function to prompt Employee questions
function questEmployee() {
    inquirer.prompt(employeeQuestions)
        .then(function (emplAnswers) {
            const employee = new Employee(
                emplAnswers.emplName,
                emplAnswers.emplId,
                emplAnswers.emplEmail
            );
            console.log(employee);
            team.push(employee);
            emplRole();
        });
}

//function to prompt Engineer questions
function questEngineer() {
    inquirer.prompt(engineerQuestions)
        .then(function (engineerAnswers) {
            const engineer = new Engineer(
                engineerAnswers.engName,
                engineerAnswers.engId,
                engineerAnswers.engEmail,
                engineerAnswers.engGithub,
            );
            console.log(engineer);
            team.push(engineer);
            emplRole();
        });
}

//function to prompt Intern questions
function questIntern() {
    inquirer.prompt(intquestions)
        .then(function (internAnswers) {
            const intern = new Intern(
                internAnswers.intName,
                internAnswers.intId,
                internAnswers.intEmail,
                internAnswers.intSchool,
            );
            console.log(intern);
            team.push(intern);
            emplRole();
        });
}

//function to prompt Manager questions
function questManager() {
    inquirer.prompt(mgrquestions)
        .then(function (mgrAnswers) {
            const manager = new Manager(
                mgrAnswers.mgrName,
                mgrAnswers.mgrId,
                mgrAnswers.mgrEmail,
                mgrAnswers.mgrOfficeNumber,
            );
            console.log(manager);
            team.push(manager);
            emplRole();
        });
}

//render site function
function renderSite() {
    // if(lfs.existsSync(OUTPUT_DIR)) {
        // fs.mkdirSync(OUTPUT_DIR) {
            fs.writeFileSync(outputPath, render(team), "UTF8")
        // }
    // }
}

emplRole();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

