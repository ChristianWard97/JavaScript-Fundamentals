// Logging If Else If Else weather conditions:
// let weather = "rainy";
// if (weather =="sunny") {
//     console.log("Well, I better wear some suncream!")
// } else if (weather == "rainy") {
//     console.log("Better take an umbrella")
// } else {
//     console.log("Hmmm, it could go either way!")
// }

// Logging True or False.
// if (1 != "1") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// Logging location and weather conditions.
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

//Logging different car types:
// let car = "peugeot";
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

// Logging grade results.
// const grade = 87;
// switch (true) {
//     case grade >= 70:
//         console.log("Distinction");
//         break;
//     case grade >= 60:
//         console.log("Merit");
//         break;
//         case grade >= 50:
//         console.log("Pass");
//         break;
//         default:
//         console.log("failed");
// }

/* ACTIVITY 1: Create a variable called age. Write an if statement
that logs “Yes I can serve you” if the age is greater 
than 17 and else logs “You aren’t old enough”. */

// let age = 21;
// let country = "UK";

// if (age == 21 && country == "UK"){
//     console.log("Yes, I can serve you.");
// } else {
//     console.log("You aren't old enough");
// }

/* ACTIVITY 2: Create a variable for any pizza topping. 
Create a switch statement, if the topping is one of your 
favourite ingredients, log to the console “These are 
important ingredients for my pizza.” If you don’t mind 
having Pepperoni for example log to the console “I don’t 
mind having ${topping} on my pizza. 
Finally, for any topping you don’t like log “${topping} 
should not be on a pizza.” */

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

/* ACTIVITY 3: Create a variable called password. 
Check how many letters are in the password, if there are 
less than 8, log to the console that the password is too 
short. Otherwise log the password to the console. */

// const password = "Password123";
//     if (password.length < 8){
//         console.log("password too short");
       
//     }else {
//         console.log(`password: ${password} accepted!`);
//     }

/* ACTIVITY 4: Create a variable called num. 
Check if the variable is divisible by 3 or 5. If it 
is, log “This number is divisible by 3 or 5”. 
Otherwise log something else.  */

// let num = 15;

// if (num % 3 == 0 || num % 5 == 0){
//     console.log("This number is divisible by three or five.")
// } else {
//     console.log("This number is not divisible by three or five.")
// }

/* ACTIVITY 5: Create a variable called num.
If num is divisible by 3 log “fizz” to the console, if it’s divisible by
5 log “buzz” to the console, if it’s divisible by both 3 and 5 log 
“fizz buzz” to the console. Otherwise log num to the console.  */

// let num = 15;
// if (num % 3 == 0){
//     console.log("fizz")
// } else {
//     if (num % 5 == 0)
// console.log("buzz")
//     if (num % 3 ==0 || num % 5 == 0)
//     console.log("fizz buzz")
// }

/* ACTIVITY 6: Create a variable called num.
Check if the number is a palindrome (looks the 
same forward as it does backwards e.g. 1001 or 20202) */

// let num = 30003;
// let numString = num.toString(); 
// let reverseNumString = numString.split('').reverse().join('');

// if (num == reverseNumString){
//     console.log(`Yes ${num} is a palindrome`)
// } else {
//     console.log(`No ${num} is not a palindrome`)
// }

/* ACTIVITY 7: Create a variable called time, a variable called placeOfWork 
and a variable called townOfHome. Create an if statement that 
logs to the console where someone is at times of the day. E.g. if 
the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.  */

// let time = 9
// let placeOfWork = "CodeNation"
// let townOfHome = "Shropshire"

// if (time >= 9 && placeOfWork == "CodeNation"){
//     console.log(`I am working at ${placeOfWork}.`);
// } 
// else
// if (time >= 8 ){
//     console.log(`I am commuting to ${placeOfWork}.`);
//     }
// else
// if (time <=8 ){
//     console.log(`I am at home in ${townOfHome}.`);
//     };

/* ACTIVITY 8: Take the string 
“jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh 
gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. 
Find the index of a last vowel in the string  */

// let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
// let vowel = ['a', 'e', 'i', 'o', 'u'];
// let highestIndex =0;
// for (let i = 0; i < vowel.length; i++){

// index = string.lastIndexOf(vowel[i]);

// if (index >= highestIndex ){
//     highestIndex = index;
//     lastVowel = vowel[i];
// }
// }
// console.log(lastVowel);
// console.log(highestIndex)

/* ACTIVITY 9: Create a variable called word that takes a string. 
Create an if statement that checks if the last letter is the same as 
the first. If it is return true, otherwise return false. */

// let word = ("TEST");
// if (word.charAt(0) == word.charAt(word.length-1)){
//     console.log("True");
// } else {
//     console.log ("False");
// }

/* ACTIVITY 10: Create two variables called num1 and num2.
Create an if statement that checks if the result of the sum is even. 
If it is return the number, otherwise return the numbers multiplied together. */

// let num1 = 11;
// let num2 = 11;
// let sum = num1 + num2;

// if (sum %2 == 0){
//     console.log(`${sum} is an even number.`)
// } else {
//     console.log(`${num1 * num2} is an odd number`)
// }