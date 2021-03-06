// Prototypal Inheritance (different but similar than c++ inheritance)
// Prorotype Chain
//     myPerson --> Person.prototype --> Object.prototype --> null

// Constructor
class Person {
    
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes;
    };

    getBio() {
        let bio = `${this.firstName} is ${this.age}.`;

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`;
        });
    
        return bio;
    };

    set fullName(fullName) {
        const names = fullName.split(' ');  // splits the fullName by a space (returns an array with 2 items)
        this.firstName = names[0];
        this.lastName = names[1];
    };

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    };

};

// SUBCLASSES

class Employee extends Person {

    constructor(firstName, lastName, age, position, likes = []) {
        super(firstName, lastName, age, likes); // call the parent constructor first (required)
        this.position = position;
    };

    // override parent function
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}.`;
    };

    // New method for Employee (not inherited/overriden from parent class)
    getYearsLeft() {
        return 65 - this.age;
    };

};

class Student extends Person {

    constructor(firstName, lastName, age, grade, likes = []) {
        super(firstName, lastName, age, likes);
        this.grade = grade;
    };

    updateGrade(change) {
        this.grade += change;
    };

    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing';
        return `${this.firstName} is ${status} the class.`;
    };

};

const me = new Employee('Jeff', 'Slavin', 38, 'Teacher');
me.fullName = 'Crazy Master';
console.log(me.getBio());
//me.updateGrade(-20);
//console.log(me.getBio());

// const myPerson = new PersonClass('Jeff', 'Slavin', 38, ['Teaching']);
// console.log(myPerson.getBio());

// // Constructor
// // Likes has a default of an empty array
// const Person = function(firstName, lastName, age, likes = []) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.likes = likes;
// };

// // Member method
// Person.prototype.getBio = function () {
//     let bio = `${this.firstName} is ${this.age}.`;

//     this.likes.forEach((like) => {
//         bio += ` ${this.firstName} likes ${like}.`;
//     });

//     return bio;
// };

// // Member method
// Person.prototype.setName = function (fullName) {
//     const names = fullName.split(' ');  // splits the fullName by a space (returns an array with 2 items)
//     this.firstName = names[0];
//     this.lastName = names[1];
// };

// Members do not need to be methods. This creates a non function member with the value of 'Thailand' for all instances of Person
// Usually does not serve much of a purpose
// Person.prototype.location = 'Thailand';

//const me = Person();
// const me = new Employee('Jenn', 'Slavin', 37, 'Teacher', ['Teaching', 'Biking']);
// console.log(me);
// console.log(me.getYearsLeft());
// Shadowing (prototypal inheritance)
// We setup a new property on our instance
// "me" first looks on itself, and it finds getBio, it never goes up to the prototype
// This won't impact person2 below, since person2 does not have 'getBio' on the instance level, so it looks up to the prototype
// me.getBio = function () {
//     return 'This is fake!';
// };
// me.setName('Noah Slavin');
// console.log(me);
// console.log(typeof me);
// console.log(me.age);
// me.firstName = 'Jeff';
// console.log(me);
// console.log(me.getBio());

// you can change what the member method does (above 'me' variable gets the first bio msg, the one below will get this new testing msg)
// Person.prototype.getBio = function () {
//     return 'Testing testing';
// };

// const person2 = new Person('Jake', 'Davis', 40);
// // console.log(person2);
// console.log(person2.getBio());