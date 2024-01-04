// Number Guessing Game

const minValue = 1; // granica początkowa
const maxValue = 100; // granica końcowa
const answer = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue; // losowanie liczby od minValue do maxValue

let attempts = 0; // ilość podejść
let guess; // zmienna, która będzie przyjmować user input
let running = true;

console.log(answer)
while(running){
    guess = window.prompt(`Welcome to the number guessing game. Enter a number from ${minValue} to ${maxValue}`);
    guess = Number(guess);
    
    if(isNaN(guess)){ // NaN = Not a Number
        window.alert("Please enter a valid number");
    }
    else if (guess < minValue || guess > maxValue){
        window.alert("Please enter a valid number");
    }
    else{
        attempts++;
        if (guess < answer){
            window.alert(`${guess} is bigger than looked number`);
        }
        else if (guess > answer){
            window.alert(`${guess} is smaller than looked number`);
        }
        else{
            window.alert(`Congratz. You guessed the number ${answer} correctly. It took you ${attempts}`);
            running = false;
        }
    }
}