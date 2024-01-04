// variable scope = jest to zasięg na jaki zmienna jest rozpoznawana i dostępna
//                  (global vs local)

// W wielkim skrócie jeżeli jakaś zmienna jest poza schematem blokowym np. poza wnętrzem funkcji wtedy jest to zmienna globalna
// Przykładowo
let x = 1; // ten x jest globalny, bo widzi wszystkich
// Natomiast, jeżeli zmienna jest między w jakimś bloku, czyli otoczona {} np. w pętlach, funkcjach, if else-ach itp. to jest to zmienna lokalna
// Zawsze sprawdzane jest najpierw czy zmienna jest lokalna, jeżeli tak to nie szuka zmiennej globalnej

function function1() {
    let x = 2; // ten x jest lokalny, więc nie musi sprawdzać czy ktoś jest na zewnątrz
    console.log(`To jest zmienna lokalna x = ${x} w funkcji1`); // output -,,- x = 2 w funkcji1
}
function function2() {
    let x = 3; // ten x jest lokalny, więc nie musi sprawdzać czy ktoś jest na zewnątrz
    console.log(`To jest zmienna lokalna x = ${x} w funkcji2`); // output -,,- x = 3 w funkcji1
}
console.log(`To jest zmienna GLOBALNA poza obszarami funkcji, gdzie x = ${x}`); // output -,,- x = 1 jako zmienna globalna
function1();
function2();
// Nie ważne w jaki sposób ja kolejności ustawię te funkcje i info o zmiennej globalnej
// One siebie nigdy nie nadpiszą, ponieważ najpierw sprawdzane jest czy zmienna jest już lokalnie
// Jeżeli nieinstnieje zmienna lokalna, wtedy szukana jest zmienna globalna
// Każdy x jest inny, indywidualny dla każdego blocku. Nawet dla pętli czy instrukcji warunkowych
