// let weather = "rainy";
// if (weather =="sunny") {
//     console.log("Well, I better wear some suncream!")
// } else if (weather == "rainy") {
//     console.log("Better take an umbrella")
// } else {
//     console.log("Hmmm, it could go either way!")
// }

// if (1 != "1") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// let place = "manc";
// let weather = "cloudy";

// if (place == "manc" && weather == "sunny") {
//     console.log("check again");
// }

// else if (place == "manc" && weather == "rain") {
//     console.log("obvs");
// }
// else {
//     console.log("what it isnt raining?");
// }

// let car = "ford";
// switch (car){
//     case "ford":
//         case "GM":
//             console.log("You've got an american car!");
//             break;
//             case "peugeot":
//                 case "citroen":
//                     console.log("You've got a french boy!");
//                     break;
//                     case "Honda":
//                         case "Toyota":
//                             case "Suzuki":
//                                 console.log("Japanese cars are dead quiet!");
//                                 break;
//                                 case "Mercedes":
//                                     console.log("You are proper posh German!");
//                                     break;
//                                     case "Volkswagen":
//                                         console.log("German arent that bad at all");
//                                         break;
//                                         case "Hyundai":
//                                             case "Kia":
//                                                 console.log("south korean cars are getting popular");
//                                                 break;
//                                                 default:
//                                                     console.log("your car is not in the top ten companies in the world");
                                    
// }


// let age = 21;
// let country = "UK";

// if (age == 21 && country == "UK"){
//     console.log("Yes, I can serve you.");
// } else {
//     console.log("You aren't old enough");
// }

// let topping = "olives";
// switch (topping) {
//     case "cheese":
//     case "pepperoni":
//     case "chicken":
//             console.log("These are important ingredients for my pizza")
//             break;
//             case "olives":
//                 case "anchovies":
//                 console.log("I do not want these toppings on my pizza!")
                
// }

// const password = "christian";
// switch (password) {
//     case (password.length <= 8):
//         console.log("password too short");
//         break;
//     case (password.length >= 8):
//         console.log("password accepted");
//         break;
// }


// let num = 15;

// if (num % 3 == 0 || num % 5 == 0){
//     console.log("This number is divisible by three or five.")
// } else {
//     console.log("This number is not divisible by three or five.")
// }

// let num = 15;
// if (num % 3 == 0){
//     console.log("fizz")
// } else {
//     if (num % 5 == 0)
// console.log("buzz")
//     if (num % 3 ==0 || num % 5 == 0)
//     console.log("fizz buzz")
// }



// let num = 1001;
// let reversed = num.reverse();

// if (num === reversed) {
//     console.log ("it is a palindrome")
// } else {console.log ("it is not a palindrome")
// }

let num = 30033;
let numString = num.toString(); 
let reverseNumString = numString.split('').reverse().join('');

if (num == reverseNumString){
    console.log(`Yes ${num} is a palindrome`)
} else {
    console.log(`No ${num} is not a palindrome`)
}