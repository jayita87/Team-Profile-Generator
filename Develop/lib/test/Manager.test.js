const Manager = require('../Manager');

describe("Manager", () => {
    it('should creates an Manager object', () => {
        const manager = new Manager('name', 100, 'test.test@gmail.com', 14);
        
        expect(manager.officeNumber).toEqual(expect.any(Number));
    });
    
    it('should gets role of employee', () => {
        const manager = new Manager('name', 100, 'test.test@gmail.com');
    
        expect(manager.getRole()).toEqual("Manager");
    }); 
});