const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Test Name', '1234', 'test@email.com', 'Employee');

    expect(employee.name).toBe('Test Name');
    expect(employee.id).toBe('1234');
    expect(employee.email).toBe('test@email.com');
    expect(employee.role).toBe('Employee');
});

test("returns employee's name", () => {
    const employee = new Employee('Test Name', '1234', 'test@email.com', 'Employee');

    expect(employee.getName()).toEqual(expect.stringContaining('Test Name'));
});

test("returns employee's ID", () => {
    const employee = new Employee('Test Name', '1234', 'test@email.com', 'Employee');

    expect(employee.getId()).toEqual(expect.stringContaining('1234'));
});

test("returns employee's email", () => {
    const employee = new Employee('Test Name', '1234', 'test@email.com', 'Employee');

    expect(employee.getEmail()).toEqual(expect.stringContaining('test@email.com'));
});

test("returns employee's role", () => {
    const employee = new Employee ('Test Name', '1234', 'test@email.com', 'Employee')

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});