// let multiplication = document.querySelector('#multiplication');

// multiplication.innerHTML = "Multiplication:"

//Declaration with let and const
let someStrng = 'Hello World';
console.log(someStrng);

const constString = "This string can't be modified";
console.log(constString);

//Type Annotations and Type Inference
let x: string = 'I will forever be a string.';
let y = 'I will also forever be a string.';

//Using let and const with Type Annotations
let movieTitle: string = 'A New Hope';
console.log(`Movie Title: ${movieTitle}`);

//Union Types
let someValue: number | string;
someValue = 42;
someValue = 'Hello World';

//Using the --strictNullChecks
let nullableString: string | null;
nullableString = null;

let mysteryString: string | null | undefined;
mysteryString = null;
mysteryString = undefined;

console.log('This is where the basic types');
