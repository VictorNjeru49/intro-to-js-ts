type Car = {
  make: string;
  model: string;
  year: number;
  start: () => void;
  accelarate: () => void;
  brake: () => void;
  stop: () => void;
  drive: (speed: number) => void;
};

let car: Car = {
  make: "Toyota",
    model: "Camry",
    year: 2020,
    start() {                           //drive: function(speed) { 
        console.log("Car started");         //   console.log(`Car is driving at ${speed} km/h`);
    },                                     // },
    accelarate() {
        console.log("Car is accelerating");
    },
    brake() {
        console.log("Car reduced speed");
    },
    stop() {
        console.log("Car stopped");
    },
    drive: function(speed) {
        console.log(`Car is driving at ${speed} km/h`);
    }
};
car.start(); // Output: Car started
car.stop(); // Output: Car stopped
car.drive(60); // Output: Car is driving at 60 km/h


type Person = {
    name: string;
    age: number;
    greet: () => void;
    introduce: () => void;
    birthday: () => void;
    retire: () => void;
    work: (job: string) => void;
    study: (subject: string) => void;
    play: (game: string) => void;
    sleep: (hours: number) => void;
    eat: (food: string) => void;
    exercise: (activity: string) => void;
    travel: (destination: string) => void;
    relax: () => void;
    socialize: (friend: string) => void;
    volunteer: (cause: string) => void;
    learn: (skill: string) => void;
    create: (project: string) => void;
    explore: (place: string) => void;
    meditate: () => void;
    reflect: () => void;
    journal: (entry: string) => void;
    connect: (person: string) => void;
    inspire: (message: string) => void;
    motivate: (goal: string) => void;
    celebrate: (occasion: string) => void;
    appreciate: (thing: string) => void;
    share: (experience: string) => void;
    learnNewSkill: (skill: string) => void;
    practice: (skill: string) => void;
    teach: (subject: string) => void;
    mentor: (person: string) => void;
    coach: (team: string) => void;
    lead: (project: string) => void;
    manage: (task: string) => void;
    organize: (event: string) => void;
    plan: (goal: string) => void;
    prioritize: (task: string) => void;
    delegate: (task: string) => void;
    collaborate: (team: string) => void;
    brainstorm: (idea: string) => void;
}

let Kenyan: Person ;
Kenyan = {
    name: "John",
    age: 30,
    greet() {
        console.log("Hello, my name is " + this.name);
    },
    introduce() {
        console.log("I am " + this.age + " years old.");
    },
    birthday() {
        this.age++;
        console.log("Happy birthday! You are now " + this.age + " years old.");
    },
    retire() {
        console.log("I am retiring at the age of " + this.age);
    },
    work(job) {
        console.log("I work as a " + job);
    },
    study(subject) {
        console.log("I am studying " + subject);
    },
    play(game) {
        console.log("I love to play " + game);
    },
    sleep(hours) {
        console.log("I sleep for " + hours + " hours");
    },
    eat(food) {
        console.log("I enjoy eating " + food);
    },
    exercise(activity) {
        console.log("I like to " + activity);
    },
    travel(destination) {
        console.log("I want to travel to " + destination);
    },
    relax() {
        console.log("I like to relax and unwind");
    },
    socialize(friend) {
        console.log("I enjoy spending time with " + friend);
    },
    volunteer(cause) {
        console.log("I volunteer for " + cause);
    },
    learn(skill) {
        console.log("I am learning " + skill);
    },
    create(project) {
        console.log("I am creating a " + project);
    },
    explore(place) {
        console.log("I want to explore " + place);
    },
    meditate() {
        console.log("I practice meditation");
    },
    reflect() {
        console.log("I take time to reflect on my day");
    },
    journal(entry) {
        console.log("I write in my journal: " + entry);
    },
    connect(person) {
        console.log("I connect with " + person);
    },
    inspire(message) {
        console.log("I want to inspire others with " + message);
    },
    motivate(goal) {
        console.log("I am motivated to achieve " + goal);
    },
    celebrate(occasion) {
        console.log("I love to celebrate " + occasion);
    },
    appreciate(thing) {
        console.log("I appreciate " + thing);
    },
    share(experience) {
        console.log("I want to share my " + experience);
    },
    learnNewSkill(skill) {
        console.log("I am learning a new skill: " + skill);
    },
    practice(skill) {
        console.log("I practice " + skill);
    },
    teach(subject) {
        console.log("I teach " + subject);
    },
    mentor(person) {
        console.log("I mentor " + person);
    },
    coach(team) {
        console.log("I coach " + team);
    },
    lead(project) {
        console.log("I lead " + project);
    },
    manage(task) {
        console.log("I manage " + task);
    },
    organize(event) {
        console.log("I organize " + event);
    },
    plan(goal) {
        console.log("I plan to achieve " + goal);
    },
    prioritize(task) {
        console.log("I prioritize " + task);
    },
    delegate(task) {
        console.log("I delegate " + task);
    },
    collaborate(team) {
        console.log("I collaborate with " + team);
    },
    brainstorm(idea) {
        console.log("I brainstorm " + idea);
    }
}

console.log(Kenyan.greet()); // Output: Hello, my name is John


type Employee = {
    name: string;
    position: string;
    salary: number;
    hireDate: Date;
    promote: () => void;
    demote: () => void;
    giveRaise: (amount: number) => void;
    fire: () => void;
    takeLeave: (days: number) => void;
}

type Manager = {
    name: string;
    department: string;
    budget: number;
    hireEmployee: (employee: Employee) => void;
    fireEmployee: (employee: Employee) => void;
    allocateBudget: (amount: number) => void;
    manageProject: (project: string) => void;
}

type Intern = {
    name: string;
    mentor: string;
    duration: number;
    completeTask: (task: string) => void;
    askForHelp: (mentor: string) => void;
}

type persons  = Intern & Employee;
type person2 = Manager & Employee;

let personDetails: persons = {
    name: "Jane",
    position: "Intern",
    salary: 30000,

    hireDate: new Date(),
    promote() {
        console.log("Promoted to a higher position");
    },
    demote() {
        console.log("Demoted to a lower position");
    },
    giveRaise(amount: number) {
        this.salary += amount;
        console.log(`Salary increased by ${amount}`);
    },
    fire() {
        console.log("Employee fired");
    },
    takeLeave(days: number) {
        console.log("Leave taken for " + days + " days");
    },
    mentor: "John",
    duration: 6,
    completeTask(task: string) {
        console.log("Task completed: " + task);
    },
    askForHelp(mentor: string) {
        console.log("Asking for help from " + mentor);
    }

}

console.log(personDetails.giveRaise(1000)); // Output: Salary increased by 1000

interface Human {
eyes: number
}
interface Person1 extends Human {
name: string;
age: number;
address: {
street: string;
city: string;
country: string;
}
hobbies: string[];
}

const John: Person1 = {
name: "John Doe",
age: 30,
address: {
city: "New York",
street: "123 Main St",
country: "USA"
},
hobbies: ["reading", "gaming", "hiking"],
eyes: 2
}