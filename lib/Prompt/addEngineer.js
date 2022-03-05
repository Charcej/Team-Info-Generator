const { prompt } = require("inquirer");
const engineerQuestions = require("../../questions/Engineer.questions");
const Engineer = require("../Engineer");

const addEngineer = async () => {
    const engineerAnswers = await prompt(engineerQuestions);
    const { name, id, email, gitHub } = engineerAnswers;
    const engineer = new Engineer(name, id, email, gitHub);
    console.log(engineer);
    return engineer;
};

module.exports = addEngineer