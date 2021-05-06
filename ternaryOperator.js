// Basic IF statement

// let canAfford = (itemPrice, accountBalance) => {
//     if(itemPrice > accountBalance) {
//         return `Cannot afford! You are $${itemPrice - accountBalance} short`;
//     }else{
//         return "Can afford!";
//     }
// }


//  Ternary statement

// let canAfford = (itemPrice, accountBalance) => {
//     return itemPrice > accountBalance? `Cannot afford! You are $${itemPrice - accountBalance} short`  : "Can afford";
// }

// let myBankAccountBalance = 1000;
// const drone = 1001;

// let droneOnSale = drone - drone * 0.03;

// console.log(canAfford(drone, myBankAccountBalance));
// console.log(canAfford(droneOnSale, myBankAccountBalance));


const myVar = 10 < 20
    ? 5 < 10
        ? true
        : false
    : false
