// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter coffee",
//         "Tea",
//         "Hot chocolate"
//     ],

//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "Sorry no offer",

//     openCafe(){
//         return "Come on in";
//     },
//     closeCafe(){
//         return "We are closed, come back tomorrow!"
//     }

// };

// console.log(cafe.openCafe());
// console.log(cafe.closeCafe());

// if (time < 1100){
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// } else if (time < 1500){
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
// }





//     let day = "Saturday"

// const alarm = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am",
// }
// if (day == "Saturday" || (day == "Sunday")){
//     console.log(alarm.weekendAlarm)
// }else{
//     console.log(alarm.weekdayAlarm)
// }


// const person = {
//     name: "Christian, ",
//     age: "25",
//     favSongs: [
        
//     "STUCK - Westside Boogie",
//     "CHRONICLES - Cordae",
//     "MIDDLE CHILD - J.cole"

// ],
// sayHi(){
//     return`Hello my name is ${this.name}`
// }
// };

// console.log(person.name, person.age, person.favSongs);

// console.log(person.sayHi())


// const pet = {
//     name: "William", 
//     typeOfPet: "Dog",
//     age: "RIP",
//     colour: "Black",
//     eating(){
//         return `${this.name} is eating`},
//         drinking(){
//             return `${this.name} is drinking`
//         }
// };

// console.log(pet.eating());
// console.log(pet.drinking());



let order = [];
const coffeeShop = {
    branch:"manchester",
    drinksWithPrices:{"tea":1.00,"americano":2.00,"mocha":3.00,"latte":3.00,water:0},
    foodWithPrices:{"salad":2.00,"sandwich":3.00,"tunaJacket":4.50,"steak":15.00},
    drinksOrdered(drink1,drink2){
        let drinks = Object.keys(this.drinksWithPrices); 
        let drinkValues = Object.values(this.drinksWithPrices); 
        order.push(drinkValues[drinks.indexOf(drink1)]);
        order.push(drinkValues[drinks.indexOf(drink2)]);
        return `For drinks you've ordered ${drink1} and ${drink2}`;},
    foodOrdered(food1,food2){
        let foods = Object.keys(this.foodWithPrices); 
        let foodValues = Object.values(this.foodWithPrices); 
        order.push(foodValues[foods.indexOf(food1)]);
        order.push(foodValues[foods.indexOf(food2)]);
        return `For food you've ordered ${food1} and ${food2}`;
    }
}
console.log(coffeeShop.drinksOrdered("tea","mocha"));
console.log(coffeeShop.foodOrdered("salad","steak"));
let total = 0;
for(i=0;i<order.length;i++){
    total+=order[i];
}

console.log(`Your total comes to £${total}.`);