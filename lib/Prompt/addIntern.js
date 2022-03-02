const { prompt } = require("inquirer");
const internQuest = require("../../quest/Intern.quest");
const Intern = require("../Intern");

//Function to record Intern answer from user
const addIntern = async () => {
    const internAnswers = await prompt(internQuest);
    const { name, id, email, school } = internAnswers;
    const intern = new Intern(name, id, email, school);
    console.log(intern);
    return intern;
};

module.exports = addIntern;