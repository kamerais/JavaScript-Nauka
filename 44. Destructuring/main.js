// destructuring = wydobywa wartości z tablic i objektów,
//                 wtedy przypisuje je do zmiennych w dogodny sposób
//                 [] = aby wykonać array destructuring
//                 {} = aby wykonać object destructuring
//                 5 przykładów

// -------- Przykład  1 ----------
// Zamień wartości między dwiema zmiennymi

let a = 1;
let b = 2;
// przed destrukturyzacją

console.log(a); // output: 1
console.log(b); // output: 2

// dokonuję destrukturyzacji
[a, b] = [b, a]; // po lewej stronie korzystamy z destructuring a po prawej tworzymy tablicę

// po destrukturyzacji
console.log(a); // output: 2
console.log(b); // output: 1

// -------- Przykład  2 ----------
// Zamień 2 elementy w tablicy
/*
const colors = ["red","green","blue","black","white"];

// przed destrukturyzacją
console.log(colors); // output: ['red', 'green', 'blue', 'black', 'white']

// chcę zamienić index 0 z ostatnim
[colors[0],colors[4]] = [colors[4], colors[0]];

// po destrukturyzacji
console.log(colors); // output: ['white', 'green', 'blue', 'black', 'red']
*/
// -------- Przykład  3 ----------
// Przypisz elementy z tablicy do zmiennych

const colors = ["red","green","blue","black","white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
// używam ... do wyodrębnienia reszty kolorów, którym nic nie przypisuję
console.log(firstColor); // output: red
console.log(secondColor); // output: green
console.log(thirdColor); // output: blue
console.log(extraColors); // output: ['black', 'white']

