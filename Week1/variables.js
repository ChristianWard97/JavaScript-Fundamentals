// Console logging the 8th character of the following sentence.
// console.log ("all around the world".charAt(8).toUpperCase());

//Assigning i to the number 10.
// let i = 10;
// i = i + 2;
// console.log (i);

// i += 2;

//camelCase - logging favorite drink.
// let favoriteDrink = "coffee";
// console.log (favoriteDrink);
// console.log ("My favorite Drink is " + favoriteDrink);

// let name = `Christian`;
// let age = 25;
// let favDrink = `Coffee`

// console.log(`Hi, my name is ${name}. I am ${age} years old and my favorite drink is ${favoriteDrink}.`)

// Updating variables as they are let and not const.
// age = 31;
// favoriteDrink = "Water";

// console.log(`Hi, my name is ${name}. I am ${age} years old and my favorite drink is ${favoriteDrink}.`)

/* ACTIVITY 1: Create a program that stores someone’s name, 
age and favourite colour and log it to the console in a complete sentence using Template Literals. */

let name = "Christian";
let age = "25";
let favoriteColour = "green";

// Updated variables.
age2 = 26;
favoriteColour2 = "red";

 console.log (`My name is ${name} I am ${age} years old and my favorite colour is ${favoriteColour}.`)
 console.log (`My name is ${name} I am ${age2} years old and my favorite colour is ${favoriteColour2}.`)

 /* ACTIVITY 2: Create a program that stores what you eat today 
for breakfast, lunch and dinner. Log these to the 
console. */

let breakfast = "cornflakes";
let lunch = "eggs";
let dinner = "burger";

// Updated variables.
breakfast2 = "eggs";
lunch2 = "sandwich";
dinner2 = "steak";

 console.log (`This morning I ate ${breakfast}, in the afternoon I'll cook some ${lunch}, and for dinner I will have a ${dinner}.`)
 console.log (`Tommorow I will have ${breakfast2}, in the afternoon I'll have a ${lunch2}, and for dinner I will have ${dinner2}.`)

  /* ACTIVITY 3: Create a program that calculates the number 
of days from today to your birth date. */

const oneDay = 24 * 60 * 60 * 1000; 
const firstDate = new Date(1997, 3, 11);
const secondDate = new Date(2022, 5, 10);

const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

console.log (firstDate);
console.log (secondDate);
console.log (diffDays);

  /* ACTIVITY 4: 
> Create 9 variables: space1, space2… space9. 
> Assign either the value ‘x’,’o’,’ ‘, to each of 
these variables.

> Insert the variables into your board using the 
${varName} syntax and make it look like the 
displayed board.  */

let space1 = "X";
let space2 = "O";
let space3 = " ";
let space4 = "X";
let space5 = "X";
let space6 = " ";
let space7 = "O";
let space8 = " ";
let space9 = " ";

let row = [
    `   |   |   \n ${space1} | ${space2} | ${space3}  \n   |   |   `,
    `   |   |   \n ${space4} | ${space5} | ${space6}  \n   |   |   `,
    `   |   |   \n ${space7} | ${space8} | ${space9}  \n   |   |   `,
]
     for (let i = 0; i < row.length; i++){
     console.log(row[i]);
     if(i < row.length -1) {
         console.log('-----------')
     }};
