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
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
}