/* type conversion (kowersja typu zmiennej) = zmiana typu danych z jednego typu wartości na drugi
                                            (strings, numbers, booleans)
*/

let age = window.prompt("How old are you?"); //typ string
/*
age += 1; // do stringu dodaję 1.

console.log(age); // output: np. 251, jeżeli input = 25

//Aby zobaczyć typ zmiennej możemy użyć funkcji wbudawanej typeof(zmienna)

console.log(typeof (age)) // output: string
*/
/*
// konwersja na liczbę
age = Number(age); //zamienia tekst na liczbę
age += 1; // do liczby dodaje 1

console.log(age, typeof(age)); // output: 26 (jeżeli input = 25) 'number'
*/
// Pokazanie różnych konwersji na tym samym przykładzie
let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x); // zamieniam x na liczbę
y = String(y); // zamieniam y na string
z = Boolean(z); // zamieniam z na prawda/fałsz (bool)

console.log(x, typeof x); // output: NaN (Not a Number) 'number'
console.log(y, typeof y); // output: pizza string
console.log(z, typeof z); // output: true 'boolean'