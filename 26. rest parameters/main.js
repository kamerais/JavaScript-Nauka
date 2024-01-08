// rest parameters = (...rest) przyjmuje jakąś liczbę zmiennych jako agrumenty, z którymi pracuje
//                             poprzez pakowanie ich do tablicy
//
//                             
//                             spread = rozbija tablicę na pojedyńcze elementy
//                             rest = łączy pojedyńcze elementy do tablicy

function openFridge(...foods){
    console.log(foods); // (...foods) - pakuje argumenty do jednej tablicy
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";

openFridge(food1, food2, food3, food4); //output: ["pizza", "hamburger", "hotdog", "sushi"]

function unpackOpenFridge(...foods){
    console.log(...foods); // ...foods - rozpakowywuje wszystkie elementy
}
unpackOpenFridge(food1, food2, food3, food4); // output: pizza hamburger hotdog sushi

function sum(...numbers){
    let result = 0;

    for (number of numbers){
        result += number;
    }
    return result;
}

const total = sum(1,2,3,4,5,6); // 1 + 2 + 3 + 4 + 5 + 6 = 21

console.log(`Your total is $${total}`); // output: Your total is $21

function getAverage(...numbers){
    let result = 0;

    for (number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const average = getAverage(1,2,3,4,5,6); // 21 / 6 = 3.5

console.log(`The average is ${average}`) // output: The average is 3.5

function combineString(...strings){
    return strings.join(" ");
}

const fullName = combineString("Mr","Spongebob","Squarepants","III");

console.log(fullName);