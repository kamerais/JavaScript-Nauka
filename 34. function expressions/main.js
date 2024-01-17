// function declaration = definiuje reużywalny blok kodu
//                        który wykonuje konkretne polecenia

// function expression = sposób na zdefiniowanie funkcji
//                       jako wartości lub zmiennych

// Przykład function declaration
function hello1(){
    console.log("Hello");
}
hello1();
// Przykład fuction expression
const hello2 = function(){
    console.log("Hello")
}
hello2()
// Jeżeli jest funckja o tej samej nazwie jest już zadeklarowana to wyrzuci błąd
// dlatego jest hello1()i hello2()


// function expression można wprowadzać jako argument w innych funkcjach
// setTimeout(callback, ilość sekund w ms) = opóźnia uruchomienie funkcji o jakiś czas w ms

setTimeout(function(){
    console.log("Hello po 3 sekundach");
},3000); // 3000 ms = 3s
// Przykład użycia fuction expression przy reduce,map i filter na tablicach
const numbers = [1,2,3,4,5,6];

const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});
console.log(squares); // output: [1, 4, 9, 16, 25, 36]

const evenNumbers = numbers.filter(function(element){
    return element % 2 === 0;
});
console.log(evenNumbers); // output: [2, 4, 6]

const total = numbers.reduce(function(accumulator,element){
    return accumulator + element;
});

console.log(total); // output: 21