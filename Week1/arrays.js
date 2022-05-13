

// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - 'Whatever"
// ];
// coffeeOrder[1] = "Ann - Vanilla Latte";
// coffeeOrder.push("Donna - Espresso");

// console.log(coffeeOrder);


// let favoriteFilms = [
//     "Harry Potter",
//     "Inception",
//     "Happy Gilmour",
//     "Bruce Almighty",
//     "CARS"
// ];
// favoriteFilms.push("Breaking Bad",);
// favoriteFilms.pop();
// console.log (favoriteFilms);

// for (let i = 0; i < favoriteFilms.length; i++){
//     console.log(favoriteFilms[i]);
// }

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





