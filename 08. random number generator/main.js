// Random Number Generator
/* Teoria

let randomNum = Math.random(); // losuje liczbę między 0, a 1

console.log(randomNum);

// Jeżeli chcę losować liczbę całkowitę od 1 do 6

randomNum = Math.floor(randomNum * 6) + 1; // zaokrąglam w dół (dostaję liczby od 0-5) i dodaję 1 (dostaję liczby 1-6)

console.log(randomNum); //output: losowa liczba całkowita od 1 do 6

// Jeżeli chcę wylosować liczbę z jakiegoś przedziału

const min = 50;
const max = 100;

randomNum = Math.floor(Math.random()*(max-min)) + min;
// zaokrąglam w dół liczbę z przedziału od 0-50 (100 - 50 = 50) i dodaję do zaokrąglonej liczby 50
//                                              (max - min)         +                           min
console.log(randomNum)
*/

const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;
}