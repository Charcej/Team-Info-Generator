const Intern = require('../lib/Intern.js');

test ('creates an intern object', () => {
    const intern = new Intern('Intern TestName', '9112', 'intern@test.com', 'Test School');
    expect(intern.name).toBe('Intern TestName');
    expect(intern.id).toBe('9112');
    expect(intern.email).toBe('intern@test.com');
    expect(intern.school).toBe('Test School');
});

test("returns intern's school", () => {
    const intern = new Intern('Intern TestName', '9112', 'intern@test.com', 'Test School');
    expect(intern.getSchool()).toEqual(expect.stringContaining('Test School'));
});

test("returns intern's role", () => {
    const intern = new Intern('Intern TestName', '9112', 'intern@test.com', 'Test School');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});