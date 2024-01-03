// ternary operator = to skrót do if{} i else{} statements
//                    pomaga ustalić co ma mieć w sobie zmienna za pomocą warunku
//                    syntax: condition ? codeIfTrue : codeIfFalse

//let age = 21;
//let message = age >= 18 ? "You are an adult" : "You are a minor";

//alternatywa
/*
if (age >= 18){
    message = "You are an adult";
}
else{
    message = "Your are a minor"
}
*/
//console.log(message);
/*
let time = 16;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";

console.log(greeting);
*/
/*
let isStudent = true;
let message = isStudent ? "You are a student" : "You are not a student";

console.log(message);
*/
let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;

console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`)