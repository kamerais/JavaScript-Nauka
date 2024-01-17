// arrow functions = krótszy sposób na napisanie fuction expressions
//                   dobre dla prostych funkcji, które zostaną użyte tylko raz
//                   (parametry) => { jakiś kod }

// Przykład arrow function

const hello = (name,age) => {console.log(`Hello ${name}`)
                            console.log(`You are ${age} years old`)
                            };

hello("kamerais",19);

// Przykład arrow function jako argument

setTimeout(() => {
    console.log("Hello");
},3000);
/*
    Jeżeli jest to kod jedno linijkowy można napisać zwykłe
    setTimeout(() => console.log("Hello");, 3000)
*/

// Przykład arrow function przy map,reduce i filter

const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element) => Math.pow(element, 2));

console.log(squares); // output: [1, 4, 9, 16, 25, 36]

const evenNumbers = numbers.filter((element) => element % 2 === 0);

console.log(evenNumbers); // output [2, 4, 6]

const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(total); // output: 21