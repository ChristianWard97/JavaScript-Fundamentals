// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds");
// }

// pressGrindBeans();
// pressGrindBeans();
// pressGrindBeans();

// let coffeeIsGrinding = false;
// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false;
//     } else {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;
//     }
// }

// pressGrindBeans();

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
// }

// cashWithdrawal(300, 50449921);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(200, 50447921);

// let accnumber = 50449921;
// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
// }
// cashWithdrawal(300, accnumber);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(200, 50447921);

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }
// addUp (7,3);
// console.log(addUp(2,5));

// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
// }

// const getFahrenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 32;
// };

// console.log ("The temperature is " + getFahrenheit(15) + "°F");

/* ACTIVITY 1 : Take this code and turn it into arrow function syntax */

// const factorial = (n) => {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   };
//   console.log(factorial(33));

/* ACTIVITY 2 : Edit the below snippet to include two parameters and a
running order count updated when the function is called: */


// let orderCount = 0;
// const takeOrder = (topping) => {
//     console.log (`Pizza with ${topping}`);
//     orderCount++;
// }

// takeOrder("pineapple");


// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
//     console.log(` Order: ${orderCount} needs ${topping1} and ${topping2} `);
//     orderCount++;
// }

// takeOrder("pineapple", "ham");
// takeOrder("pepperoni", "cheese");

/* ACTIVITY 3 :  Dispenses cash if your pin number is correct and your 
balance is equal to, or more than, the amount you’re trying to withdraw! */

let pinNum = 4454;
let amount = 30;
let balance = 100;

const cashWithdrawal = (amount, pinNum) => {

    if (pinNum = true) {
        let newBalance = balance - amount;
        console.log (`Withdrawing £ ${amount}, your remaining balance is £ ${newBalance}`);
    }
    else {
        console.log("incorrect pin, no withdrawal available");
    }
}

cashWithdrawal("30",4454);