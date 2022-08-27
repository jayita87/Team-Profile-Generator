const Engineer = require('../Engineer');

describe('Engineer', () => {
    it('should set GitHub', () => {
        const Value = 'GitHub user';
        const engineer = new Engineer('name', 100, 'test.test@gmail.com', Value);
        expect(engineer.github).toEqual(Value);
    });

    it("should return GitHub username", () => {
        const Value =  "GitHub user";
        const engineer = new Engineer('name', 100, 'test.test@gmail.com', Value);
        expect(engineer.getGithub()).toEqual(Value);
    });

    it("should return Engineer", () => {
        const Value = "Engineer"
        const engineer = new Engineer('name', 100, 'test.test@gmail.com','GitHub user');
        expect(engineer.getRole()).toEqual(Value);
    });
})