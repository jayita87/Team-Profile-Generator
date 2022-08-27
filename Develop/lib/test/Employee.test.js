const Employee = require("../Employee");

describe("Employee", () => {
    describe("Initialization", () => {
      it("should create an employee object", () => {
        const employee = new Employee('name', 100, 'test.test@gmail.com');
  
        // Verify that the new object has the correct properties
        expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
})
});

it('should gets employee name', () => {
    const employee = new Employee('name', 100, 'test.test@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});
 
it('should gets employee ID',()=> {
    const employee = new Employee('name', 100, 'test.test@gmail.com');
     
    expect(employee.getId()).toEqual(expect.any(Number));
})

it('should gets employee email', () => {
    const employee = new Employee('name', 100, 'test.test@gmail.com');
    const value = 'test.test@gmail.com';
    expect(employee.getEmail()).toEqual(value);
}); 

it('should gets role of employee', () => {
    const employee = new Employee('name', 100, 'test.test@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 