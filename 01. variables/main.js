// varialble (czyli zmienna) = To taki kontener, który przechowuje jakąś wartość.
//                              Zachowuje się jakoby by była tą wartością, którą przechowuje

// 1. deklaracja        let x;
// 2. przypisanie       x = 100;

//let x;
//x = 100;

//console.log(x); // wyświetla w konsoli w narzędziach developera na stronie liczbę 100.

// można dokonać deklaracji i przypisania jednocześnie

let x = 100;

console.log(x); // To też wyświetli 100 (Trzeba pamiętać, że nie można zadeklarować 2 razy tej samej zmiennej)

// Rodzaje wartości

// Integer/int - liczba całkowita
let age = 19;
console.log(age);

// Float - zmiennoprzecinkowe
let gpi = 2.1;
console.log(gpi);

// String - nitki (tekst)
let firstName = "kamerais";
console.log(`Twoje imie to ${firstName}`); // tutaj użyłem ``, żeby móc włożyć moją zmienną od razu w zdanie
                                          // za pomocą ${zmienna} (działa dla dowolnych wartości zmiennej)
// Bool - Prawda/Fałsz
let bool = true; // true jak i false piszemy z małej litery
console.log(bool);

// Jeżeli chciałbym wyświetlić zmienne na swojej stronie muszę znać id lub klasę taga w HTMLu i przypisać mu tę zmienną

document.getElementById("p1").textContent = `Nazywam się ${firstName} witam na mojej stronie`
document.getElementById("p2").textContent = `Mam ${age} lat`
document.getElementById("p3").textContent = `Jestem studentem, czyli wartość bool=${bool}`