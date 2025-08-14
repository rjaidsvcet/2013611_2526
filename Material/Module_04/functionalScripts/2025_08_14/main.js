// Arrays 

const langs = ['javascript', 'java', 'python']
langs[3] = 'rust'
langs.push('dart')
// console.log(langs);
langs.pop ()
// console.log(langs);

// Objects 
const person = {
    firstName : 'Peter',
    lastName : 'Parker',
    address : {
        district : 'Queens',
        city : 'NY'
    }
}

person.email = 'peter.parker@mcu.com'

// console.log(person.firstName);

// Destructuring
const {firstName, lastName} = person
// console.log(`The name is ${firstName} and surname is ${lastName}`);


// Arrays of Object 
const todos = [
    {
        id : 1,
        text : 'Code',
        isCompleted : true
    },
    {
        id : 2,
        text : 'Eat',
        isCompleted : true
    },
    {
        id : 3,
        text : 'Sleep',
        isCompleted : false
    }
]

// console.log(todos[1].text);

// JSON accessibility
const todosJson = JSON.stringify (todos)


// For loops 
for (let i=0; i<todos.length; i++) {
    // console.log(todos[i]);
}

// for of loop
for (t of todos) {
    // console.log(t.text);
}

// High order array functions 
// for each 
todos.forEach (function (t) {
    // console.log(t.isCompleted);
})

// Map Function 
const todoText = todos.map (function (t) {
    return t.text
})

// Filter Function 
// const todosIsCompleted = todos.filter (function (t) {
//     return t.isCompleted === true
// })

// console.log(todosIsCompleted);

// Arrow Functions 
// By nature returnable
const todosIsCompleted = todos.filter ((t) => t.isCompleted === true)
    .map ((t) => t.text)
// console.log(todosIsCompleted);

const genericNumber = 8

// if (genericNumber > 9) {
//     console.log('red');
// } else {
//     console.log('blue');
// }

// console.log(genericNumber > 9 ? 'red' : 'blue');


// ES5 OOP
// function Person (firstName, lastName, dob) {
//     this.fn = firstName
//     this.ln = lastName
//     this.dob = new Date (dob)
//     this.dobYear = () => this.dob.getFullYear ()
// }

// const firstPerson = new Person ('A', 'B', '12-12-2077')
// console.log(firstPerson.dobYear ());

// ES6 OOP 
// Classes 

class Person {
    constructor (firstName, lastName, dob) {
        this.fn = firstName
        this.ln = lastName
        this.dob = new Date (dob)
    }

    getBirthYear () {
        return this.dob.getFullYear ()
    }
}

const secondPerson = new Person ('D', 'E', '12-12-2098')
// console.log(secondPerson.getBirthYear ());

// ----------------------------------------------------

// DOM - Document Object Manipulation
// const ul = document.querySelector('.items')
// ul.firstElementChild.innerHTML = '<h2>Hello World</h2>'
// ul.lastElementChild.innerHTML = '<h2>World Hello</h2>'

const btn = document.querySelector ('#btn')
btn.addEventListener ('click', ()=> console.log('Hello'))
