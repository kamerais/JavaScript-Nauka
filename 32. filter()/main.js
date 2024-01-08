// .filter() = tworzy nową tablicę poprzez filtrowanie elementów

let numbers = [1,2,3,4,5,6,7];
let evenNums = numbers.filter(isEven); // Jeżeli spełnia warunek to wkłada liczbę z numbers do nowej tablicy evenNums
let oddNums = numbers.filter(isOdd); // Jeżeli spełnia warunek to wkłada liczbę z numbers do nowej tablicy evenNums

console.log(evenNums); // output: [2,4,6]
console.log(oddNums); // output: [1, 3, 5, 7]


function isEven(element){
    return element % 2 === 0; // zwaraca wartość bool (prawda/fałsz)
}
function isOdd(element){
    return element % 2 !== 0; // zwaraca wartość bool (prawda/fałsz)
}

const ages = [16,17,18,19,20,60];
const adults = ages.filter(isAdult);
const childs = ages.filter(isChild);

console.log(adults); // output: [18, 19, 20, 60]
console.log(childs); // output: [16, 17]

function isAdult(element){
    return element >= 18; // zwaraca wartość bool (prawda/fałsz)
}
function isChild(element){
    return element < 18; // zwaraca wartość bool (prawda/fałsz)
}

const words = ["apple", "orange", "banana", "kiwi",
                "pomegranate", "coconut"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(shortWords); // output: ['apple', 'orange', 'banana', 'kiwi']
console.log(longWords); // output: ['pomegranate', 'coconut']

function getShortWords(element){
    return element.length <= 6
}
function getLongWords(element){
    return element.length > 6
}