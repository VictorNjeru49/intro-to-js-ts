
class Person {

    //Properties
    private name: string;
    private age: number;
    private gender: string;
    //Constructor
    constructor(_name: string, _age: number, _gender: string) {
        this.name =_name;
        this.age = _age;
        this.gender= _gender;
    }
        //Methods
    getName(): string{
        return this.name;
    }
    getAge(): number{
        return this.age;
    }
    getGender(): string{
        return this.gender;
    }

    greet():void{
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I am ${this.gender}.`);
    }
}

const person = new Person("John Doe", 34, "Male");
person.greet();
const person2 = new Person("Jane Doe", 28, "Female");
person2.greet();


class Person2 {
    //Properties
    public name: string;
    public gender: string;
    protected id: number;
    protected dateOfBirth: Date;
    //Constructor
    constructor(_name: string, _gender: string, _id: number, _dateOfBirth: Date) {
        this.id = _id;
        this.name =_name;
        this.gender= _gender;
        this.dateOfBirth = _dateOfBirth;
    }
        //Methods
    getName(): string{
        return this.name;
    }
    public getAge(): number{
            return new Date().getFullYear() - this.dateOfBirth.getFullYear();
        }
    getGender(): string{
        return this.gender;
    }

    greet():void{
        const age = this.getAge()
        console.log(`Hello, my name is ${this.name}, 
            I am ${age} years old and 
            I am ${this.gender} 
            this is my id no. ${this.id}.`);
    }
}
const person3 = new Person2("John Doe", "male", 1111, new Date("1990-01-01"));
person3.greet();

