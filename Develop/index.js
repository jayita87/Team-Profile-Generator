const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const employees = [];

function init() {
    generateHTML();
    addMember();
}
function addMember() {
    inquirer.prompt(

        [
            {
                type: 'input',
                name: 'name',
                message: 'Team members name:',
            },
            {
                type: 'list',
                name: 'role',
                message: "Select team member's role:",
                choices: ["Manager", "Engineer", "Intern"],

            },
            {
                type: 'input',
                name: 'id',
                message: 'Employee ID:',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter email address:',
            }])

        .then(function ({ name, role, id, email }) {
            let roleInfo = '';
            if (role === 'Engineer') {
                roleInfo = 'GitHub username';
            } else if (role === 'Intern') {
                roleInfo = 'school name';
            } else {
                roleInfo = 'office phone number';
            };

            inquirer.prompt([{
                type: 'input',
                name: 'roleInfo',
                message: `Enter team member's ${roleInfo}`
            },
            {
                type: 'list',
                name: 'moreMembers',
                message: 'Would you like to add more team members?',
                choices: ['yes', 'no'],
            }])

                .then(function ({ roleInfo, moreMembers }) {
                    let newMember;                    
                    if (role === 'Engineer') {
                        newMember = new Engineer(name, id, email, roleInfo);
                    } else if (role === 'Intern') {
                        newMember = new Intern(name, id, email, roleInfo);
                    } else {
                        newMember = new Manager(name, id, email, roleInfo);
                    }
                    employees.push(newMember);
                    addHtml(newMember)
                        .then(function () {
                            if (moreMembers === 'yes') {
                                addMember();
                            } else {
                                endHTML();
                            }
                        });
                });
        });
}

function generateHTML() {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossorigin="anonymous">
    <title>Team-Profile-Generator</title>
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    <link rel="stylesheet" href="../style.css">
    
</head>
<body>
<div class="container-fluid">
<div class="row">
    <div class="col-12 jumbotron mb-3 team-heading">
            <h1 class="text-center text-white">MY TEAM</h1>
        </div>
    </div>
</div>
<div class="container">
<div class="row">`

    fs.writeFile("./index.html", html, function (err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

function addHtml(member) {
    return new Promise(function (resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = member.getGithub();
            data = `<div 
            class="card employee-card">
            <div class="card-header text-white">
                <h2 class="card-title">${name}</h2>
                <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${role}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID:${id}</li>
                    <li class="list-group-item">Email:<a href="mailto:name@rapidtables.com" class="card-link">${email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${gitHub}" class="card-link">${gitHub}</a>
                    </li>
                </ul>
            </div>
        </div>`;
        }
        else if (role === 'Intern') {
            const school = member.getSchool();
            data = ` <div class="card employee-card">
          <div class="card-header text-white">
              <h2 class="card-title">${name}</h2>
              <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${role}</h3>
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID:${id}</li>
                  <li class="list-group-item">Email: <a href="mailto:name@rapidtables.com" class="card-link">${email}</a></li>
                  <li class="list-group-item">School: ${school}</li>
              </ul>
          </div>
      </div>`;
        }
        else if (role === 'Manager') {
            const officeNumber = member.getOfficeNumber();
            data = `<div
 class="row team-area col-12 d-flex justify-content-center">
            <div class="card employee-card">
                    <div class="card-header text-white">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${role}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID:${id}</li>
                            <li class="list-group-item">Email:<a href="mailto:name@rapidtables.com" class="card-link">${email}</a></li>
                            <li class="list-group-item">Office number:${officeNumber} </li>
                        </ul>
                    </div>
                </div> ` ;
        }
        console.log('Successfully adding team member');
        fs.appendFile('index.html', data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
    fs.appendFile('index.html', endHTML, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log('end of HTML');
};

function endHTML() {
    const endHTML = ` </div>
        </div>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>

    </body>
    </html>`;
}

init();
