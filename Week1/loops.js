// let favoriteDrinks = ["Coke", "Fanta", "Coffee", "Redbull"];

// console.log (favoriteDrinks[0]);
// console.log (favoriteDrinks[1]);
// console.log (favoriteDrinks[2]);

// let favoriteDrinks = [
//     "Coke",
//     "Fanta",
//     "Coffee",
// ];

// for (let i = 0; i < favoriteDrinks.length; i++){
//     console.log(favoriteDrinks[i]);
// }

// let multiplesTwo = [];
// for (let i = 0; i <= 20; i++){
//     if (i % 2 == 0){
//         multiplesTwo.push(i);
//     }
// }
// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);

// let age = 15;
// while ( age < 18){
//     console.log("You're a child");
//     age++;
// }
// console.log("You're an adult");

// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club";
// while (currentCard != "Spade"){
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];
// }
// console.log(currentCard);

/* ACTIVITY 2: Generate 6 random numbers betwen 1-50 and log them to the console. */
// let Num = [];
// for(let i = 0; i < 6; i++){
// console.log (Math.floor((Math.random()*50)+1)); (Num);
// }

/* ACTIVITY 3 : If we can create a loop to put 0-9 on the screen,
how can we count from 9-0? Create a program that does 
this. */

// for (let i = 9; i>=0; i--){
//   console.log(i)
// }

/* ACTIVITY 4 : Displays 4 films stored in an array. 
Use a for loop to show each film in the array.
Use an if statement to check if the 3rd film in the array is Ghostbusters. 
If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo! we want Ghostbusters! */

// let movies = ["Inception", "Bruce Almighty", "Ghost Busters", "King Kong"];

// if (movies[2] == 'Ghost Busters') {
//     console.log("Yay! It's Ghost Busters!")
// }
// else {
//     console.log("Boo! We want Ghost Busters!")
// }


/* ACTIVITY 5 : Generate a random number between 1 and 30 six times.
For each random number generated, check if this number of divisible by 7 or not.
Log out a message to the console if it is divisible by 7 or not. */

for(let i = 0; i < 6; i++){
    genNum = Math.floor((Math.random() * 30) + 1); 
    if(genNum % 7 == 0){
        console.log(`${genNum} is Divisible.`);
    } else{ 
        console.log(`${genNum} is not divisible.`)
    }
}   


/* ACTIVITY 7 : Research on do...while loop, 
find out about the difference between 
for loop, while loop and do...while 
loop. Give an example of each. 
What are the pros and cons? 

For loop: Loops a code block while a condition is true

While loop: Loops a code block while a condition is true

do...while loop: Loops a code block once, and then while a condition is true
Example: 
do {
    code block to be executed
  }
  while (condition); 
  
  */
