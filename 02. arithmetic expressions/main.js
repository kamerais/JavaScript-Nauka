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