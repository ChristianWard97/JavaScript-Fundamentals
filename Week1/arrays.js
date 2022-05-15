// Logging Arrays including push and pop methods:
// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - 'Whatever"
// ];
// coffeeOrder[1] = "Ann - Vanilla Latte";
// coffeeOrder.push("Donna - Espresso");

// console.log(coffeeOrder);

/* ACTIVITY 1: Create an array that lists your favourite films, up to 5 elements.
Add 2 more using a method. 
Use a loop to cycle through the array. */

// let favoriteFilms = [
//     "Harry Potter",
//     "Inception",
//     "Happy Gilmour",
//     "Bruce Almighty",
//     "CARS"
// ];
// favoriteFilms.push("Breaking Bad", "Unbroken");
// favoriteFilms.pop();
// console.log (favoriteFilms);

// for (let i = 0; i < favoriteFilms.length; i++){
//     console.log(favoriteFilms[i]);
// }

/* ACTIVITY 6 : Imagine you’re a programmer for a social media platform! You have 
been tasked with building a prototype for a mutual followers program. 
> Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers. 
In these arrays place 4 names as strings. Make sure there are 2 names 
that are in BOTH arrays.
> Using a nested loop iterate over both arrays and console.log out the 
matching follower. */

let bobsFollowers = [
    "@Harry2Savvy",
    "@FreddyVJason",
    "@KingRichard",
    "@BethAnni"
];

let hannahsFollowers = [
    "@Harry2Savvy",
    "@FreddyVJason",
    "@DatGuyEddie",
    "@QuickFixNick"
];

for(i=0; i< bobsFollowers.length;i++){
        for(let j=0; j< hannahsFollowers.length;j++){
            if(bobsFollowers[i] == hannahsFollowers[j]){
                console.log(`${bobsFollowers[i]} is a mutual friend with Hannah and Bob`);
                continue;
            }
        }
    }





