const Intern = require('../Intern');

describe("Intern", () => {
it('should creates an Intern object', () => {
    const intern = new Intern('name', 100, 'test.test@gmail.com', 'GCU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

it('should return a school', () => {
    const intern = new Intern('name', 100, 'test.test@gmail.com', 'GCU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

it('should gets role of employee', () => {
    const intern = new Intern('name', 100, 'test.test@gmail.com', 'GCU');

    expect(intern.getRole()).toEqual("Intern");
}); 
});
