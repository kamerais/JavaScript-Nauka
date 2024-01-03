// const (stała) = zmienna, której nie można zmienić
/*
//let pi = 3.14;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);
*/
/*
console.log(circumference); //output 12.56 (jeżeli input = 2)

// Dlaczego używamy const? Bo ktoś może przypadkiem zmienić wartość zmiennej, która powinna być stała no, pi
pi = 31.4
circumference = 2 * pi * radius;

console.log(circumference) //output 125.6 (jeżeli input = 2)
*/
/*
//const w praktyce
const pi = 3.14;
circumference = 2 * pi * radius;
console.log(circumference); //output 12.56 (jeżeli input = 2)

pi = 31.4;
console.log(circumference); // wyskakuje błąd "main.js:26 Uncaught TypeError: Assignment to constant variable."
*/
// Przykład na stronie internetowej
const PI = 3.14; //jeżeli jest to stała wartość pisać ją z dużych liter
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
    // output 12.56cm, jeżeli input = 2
}