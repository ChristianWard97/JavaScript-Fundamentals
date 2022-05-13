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

//6 random numbers between 1/50
// let Num = [];
// for(let i = 0; i < 6; i++){
// console.log (Math.floor((Math.random()*50)+1)); (Num);
// }


// loop count 9-0
// let nums = [];

// for(let i = 0; i < 10; i++){
//     if (i % 1 == 0){
//             nums.push(i);
//     }
// }

// console.log(nums.reverse());


// List 4 movies and find ghost busters
// let movies = ["Inception", "Bruce Almighty", "Ghost Busters", "King Kong"];

// if (movies[2] == 'Ghost Busters') {
//     console.log("Yay! It's Ghost Busters!")
// }
// else {
//     console.log("Boo! We want Ghost Busters!")
// }


// generate 6 numbers and advise if divisible by 7 or not
for(let i = 0; i < 6; i++){
    genNum = Math.floor((Math.random() * 30) + 1); 
    if(genNum % 7 == 0){
        console.log(`${genNum} is Divisible.`);
    } else{ 
        console.log(`${genNum} is not divisible.`)
    }
}   

