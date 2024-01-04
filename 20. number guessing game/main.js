// Number Guessing Game

const minValue = 1; // granica początkowa
const maxValue = 100; // granica końcowa
const answer = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue; // losowanie liczby od minValue do maxValue

let attempts = 0; // ilość podejść
let guess; // zmienna, która będzie przyjmować user input
let running = true;