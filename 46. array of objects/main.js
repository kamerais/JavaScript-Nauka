// array of objects = po prostu tablica, która ma w sobie objekty
//                   lista = [{parametr1: wartość,...},{parametr1: wartość, ...},...]
//                   wewnątrz tablicy są objekty ze swoimi parametrami i ich wartościami

const fruits = [
                {name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}
                ]
// Przykład jak otrzymać wartość z parametru w  danym obiekcie
console.log(fruits[0].name) // output: apple