const { prompt } = require("inquirer");
const internQuestions = require("../../questions/Intern.questions");
const Intern = require("../Intern");

const addIntern = async () => {
    const internAnswers = await prompt(internQuestions);
    const { name, id, email, school } = internAnswers;
    const intern = new Intern(name, id, email, school);
    console.log(intern);
    return intern;
};

module.exports = addIntern;