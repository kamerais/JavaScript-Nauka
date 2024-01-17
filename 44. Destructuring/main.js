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

