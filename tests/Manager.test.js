const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Manager TestName', '8912', 'manager@test.com', 'OfficeTest123');
    
    expect(manager.name).toBe('Manager TestName');
    expect(manager.id).toBe('8912');
    expect(manager.email).toBe('manager@test.com');
    expect(manager.officeNumber).toBe('OfficeTest123');
});

test("returns manager office number", () => {
    const manager = new Manager('Manager TestName', '8912', 'manager@test.com', 'OfficeTest123');
    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining('OfficeTest123'));
});

test("returns employee's role", () => {
    const manager = new Manager('Manager TestName', '8912', 'manager@test.com', 'OfficeTest123');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});