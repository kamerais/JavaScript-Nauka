/* type conversion (kowersja typu zmiennej) = zmiana typu danych z jednego typu wartości na drugi
                                            (strings, numbers, booleans)
*/

let age = window.prompt("How old are you?"); //typ string

age += 1; // do stringu dodaję 1.

console.log(age); // output: np. 251, jeżeli input = 25

//Aby zobaczyć typ zmiennej możemy użyć funkcji wbudawanej typeof(zmienna)

console.log(typeof (age)) // output: string