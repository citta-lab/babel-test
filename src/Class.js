import ageInMonths from './Function';

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `(${this.name}, is of age ${this.age})`;
    }

    getInMonths() {
        const inMonths = ageInMonths(this.age);
        return `(${this.name}, is ${inMonths} months old)`;
    }
}

export default Student;