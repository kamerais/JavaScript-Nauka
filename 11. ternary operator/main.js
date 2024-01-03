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

let time = 16;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";

console.log(greeting);