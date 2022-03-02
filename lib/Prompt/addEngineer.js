const { prompt } = require("inquirer");
const engineerQuest = require("../../quest/Engineer.quest");
const Engineer = require("../Engineer");

// Function to record Engineer answers from user
const addEngineer = async () => {
    const engineerAnswers = await prompt(engineerQuest);
    const { name, id, email, gitHub } = engineerAnswers;
    const engineer = new Engineer(name, id, email, gitHub);
    console.log(engineer);
    return engineer;
};

module.exports = addEngineer