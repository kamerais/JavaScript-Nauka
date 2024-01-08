// spread operator = ...
// Pozwala czemuś Iterowalnemu np. array (tablicy) lub string(tekst)
// rodzielić na pojedyńcze elementy
// (wypakowyje te elementy)

let numbers = [1, 2, 3, 4, 5];
let max = Math.max(numbers); // dlatego, że jest to struktura, a nie liczba to (patrz. output)
console.log(max); //output: NaN

// natomiast jeżeli dodam ... przed zmienną przechowującą tablicę to (patrz output)

max = Math.max(...numbers);
console.log(max); // output: 5

let min = Math.min(...numbers);
console.log(min);

// to samo można zrobić z tekstem

let username = "kamerais"; // ustalam mój username
let letters = [...username]; // za pomocą ... wypakowuje litery z mojego tekstu pojedyńczo i wkładam je do tej tablicy osobno

console.log(letters); // output: ["k", "a", "m", "e", "r", "a", "i", "s"]
console.log(typeof letters); //output object

// mogę sobie połączyć te litery jakimś znakiem np. "-"

letters = letters.join("-");
console.log(letters); // output: k-a-m-e-r-a-i-s
console.log(typeof letters); //output string