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

// -------- Przykład  4 ----------
// Wydobądź wartości z obiektu
/*
const person1 ={
    firstName: "SpongeBob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook",
}

const person2 ={
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}
*/
// Przykład dla person1
/*
const {firstName, lastName, age, job} = person1;

console.log(firstName); // output: SpongeBob
console.log(lastName); // output: SquarePants
console.log(age); // output: 30
console.log(job); // output: Fry Cook
*/
// Przykład dla person1
/*
const {firstName, lastName, age, job="unemployed"} = person2;

console.log(firstName); // output: Patrick
console.log(lastName); // output: Star
console.log(age); // output: 34
console.log(job); // output: unemployed (gdy nie wartość defualtowa to undefined)
*/
// -------- Przykład  5 ----------
// Destrukturyzuj w parametrach funkcji

function displayPerson({firstName, lastName, age, job}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}
const person1 ={
    firstName: "SpongeBob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook",
}

const person2 ={
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}
// Przykład dla person1
displayPerson(person1);
/*
    Output:
    name: SpongeBob SquarePants
    age: 30
    job: Fry Cook
*/
//Przykład dla person 2
displayPerson(person2);
/*
    Output:
    name: Patrick Star
    age: 34
    job: undefined (jakbym ustawił defualtową wartość dla job="unmployed" byłoby unmployed)
*/