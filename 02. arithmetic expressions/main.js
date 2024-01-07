/* operatory arytmetyczne = operands (wartości, zmienne, etc.)
                            operatory (+ - * /)
                            ex. x = 11 + 5
*/

let students = 30;

console.log(students);

students = students + 1; // lub szybciej students += 1. Jeżeli chcę dodać coś do wartości zmiennej.
console.log(students); // output: 31

students = students - 11; // lub szybciej students -= 11. Jeżeli chcę odjąć coś od wartości zmiennej
console.log(students); // output: 20

students = students * 2; // -,,- students *= 2. Jeżeli chcę pomnożyć wartość zmiennej.
console.log(students); // output: 40

students = students / 4; // -,,- students /= 4. Jeżeli chcę podzielić wartość zmiennej.
console.log(students); // output: 10

students = students ** 2; // -,,- students **= 2. Jeżeli chcę zpotęgować wartość zmiennej.
console.log(students); // output: 100

students = students % 10; // -,,- students %= 10. Jeżeli chcę resztę z dzielenia przez wartość zmiennej.
console.log(students); // output: 0 (10 jest dzielnikiem 100, więc nie ma reszty z dzielenia)

// Można dodawać i odejmować pojedyńczo (korzystając z 1) robią zmienna++; lub zmienna--;
students++; // dodaję 1
console.log(students); // output: 1

students --; // odejmuję 1
console.log(students); // output: 0

/*
    operator precedence (kolejność wykonywania działań od lewej do prawej)
    1. nawiasy ()
    2. potęgowanie
    3. mnożenie i dzielenie i modulo (reszta z dzielenia)
    4. dodawania i odejmowanie
*/
let result = 1 + 2 * 3 + 4 ** 2; // najpierw potęguję, mnożę, a na końcu dodaję
console.log(result); // output: 23

result = 12 % 5 + 8 / 2; // tutaj szukam reszty z dzielenia, potem dzielę i dodaje lub na odwrót i dodaję
// Dodawanie jest przemienne, czyli 12 % 5 + 8 / 2 = 8 / 2 + 12 % 5
console.log(result); // output: 6

result = 6 / 2 ** (2 + 5); //najpierw robię działanie w nawiasie, potem potęguję, a na końcu dzielę
console.log(result) // output: 0.046875
/*
  Bodmas vs Pemdas                                                                                  
  Bodmas (B - Brackets, O - Order of powers, D - Division, M - Multiplication, A - Addition, and S - Subtraction) 
  ustala kolejność:
  1) nawiasy
  2) pierwiastkowanie 
  3) dzielenie
  4) mnożenie
  5) dodawanie
  6) odejmowanie

  Pemdas (P - Parenthesis E - Exponents M - Multiplying D - Dividing A - Adding S - Subtracting)
  ustala kolejność:
  1) nawiasy
  2) potęgowanie
  3) mnożenie
  4) dzielenie
  5) dodawanie
  6) odejmowanie
*/
