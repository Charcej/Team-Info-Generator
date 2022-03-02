const engineerQuest = [
    {
    name: 'name',
    message: 'Please enter the engineers name:',
    type: 'input',
    validate: answer => {
        if (answer !== ''){
            return true;
        }
        return 'A engineers name is required please enter a name:';
        }
    },
    {
    name: 'id',
    message: 'Please enter the engineers ID:',
    type: 'input',
    validate: answer => {
        if (answer !== ''){
            return true;
        }
        return 'Please enter a valid ID:';
        }
    },
    {
    name: 'email',
    message: 'Please enter the engineers email address:',
    type: 'input',
    validate: answer => {
        if (answer !== ''){
            return true;
        }
        return 'Please enter a valid email address:';
        }
    },
    {
    name: 'gitHub',
    message: 'Please enter the GitHub username:',
    type: 'input',
    validate: answer => {
        if (answer !== ''){
            return true;
        }
        return 'Please enter a valid GitHub username:';
        }
    },
];

module.exports = engineerQuest