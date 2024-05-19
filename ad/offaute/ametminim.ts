class Employee {
    private _salary: number;

    constructor(salary: number) {
        this._salary = salary;
    }

    public getSalary(): number {
        return this._salary;
    }

    public setSalary(newSalary: number): void {
        if (newSalary >= 0) {
            this._salary = newSalary;
        } else {
            console.error('Invalid salary amount');
        }
    }
}

// Usage
const employee = new Employee(2000);
console.log(`The employee's salary is: ${employee.getSalary()} USD`);
