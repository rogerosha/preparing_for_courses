const ticket = '';
//write down a six-digit number (for example, '806325')
const firstHalf = ticket.slice(0, 3); 
const secondHalf = ticket.slice(3, 6);
let firstNumber = +firstHalf[0], 
    secondNumber = +firstHalf[1], 
    thirdNumber = +firstHalf[2], 
    fourthNumber = +secondHalf[0], 
    fifthNumber = +secondHalf[1], 
    sixthNumber = +secondHalf[2];
let firstSum = firstNumber + secondNumber + thirdNumber; 
    secondSum = fourthNumber + fifthNumber + sixthNumber;
if (firstSum != secondSum) {
    console.log('Sorry, your ticket is not lucky. Try next time!')
} else {
    console.log('Congratulations! Your ticket is lucky!')
}
