// Math = wbudowany obiekt, który zawiera w sobie
//        zbiór własności i metod


// Przykłady

// 1. Math.PI
console.log(Math.PI); // wyświetla liczbę pi

// 2. Math.E
console.log(Math.E); // wyświetla liczbę Eulera używaną przy logarytmach naturalnych lnX = log(e)X

// 3. Math.round(liczba) i Math.floor(liczba) i Math.ceil(liczba)
let x = 3.21;
let y = 2;
let z;

z = Math.round(x); // zaokrągla liczbę przy zasadzie, że dla liczba.x jeżeli 0 <= x < 5 to w dół, a 5 < x <= 9 to w górę

console.log(z); // output: 3

z = Math.floor(x); // zaokrągla w dół

console.log(z); // output: 3

z = Math.ceil(x); // zaokrągla w górę

console.log(z); // output: 4

// 4. Math.trunc(liczba)

z = Math.trunc(x); // usuwa część zmiennoprzecinkową i zostawia liczbę całkowitą

console.log(z); // output: 3

// 5. Math.pow(liczba,do potęgi)

x = 3; // ustawiam przypisuję wartość 3 dla x

z = Math.pow(x,y); // robię 3 do potęgi 2 (inaczej 3 ** 2)

console.log(z); //output: 9

// 5. Math.sqrt(liczba) pierwiastek zdanej liczby

console.log(Math.sqrt(z)); // wiadomo, że zmienna z = 9, więc output: 3

// 6. Math.log(liczba) (logarytm naturalny)
x = 10; // przypisuję wartość 10 dla x

z = Math.log(x); // z to logarytm naturalny z x

console.log(z); // 2.3025...

// 7. Math.sin(liczba jako radiany) i Math.cos(liczba jako radiany) Math.tan(liczba jako radiany)

x = 30; // przypisuję wartość 30 dla x

z = Math.sin(x); // x zamienia się na radiany i liczy sinus z x

console.log(z); // output: -0.988...

z = Math.cos(x); // x zamienia się na radiany i liczy cosinus z x

console.log(z); // output: 0.154...

z = Math.tan(x); // x zamienia się na radiany i liczy tangens z x

console.log(z); // output: -6.405...

// 8. Math.abs(liczba) (wartość bezwzględna)

x = -3.21; // przypisuję wartość -3.21 dla x

z = Math.abs(x); // liczę wartość bezwzględną dla x

console.log(z); // output: 3.21

// 9. Math.sign(liczba) (sprawdza czy znak jest wartością -1 lub 0 lub 1)
//                      (spradza czy wartość jest ujemna lub 0 lub dodatnia)

z = Math.sign(x); // sprawdzam czy x jest ujemne lub x = 0 lub dodatnie

console.log(z); // output: -1 (czyli ujemne)

// 10. Math.max(parametr1, parametr2,...,parametrN) Math.min(parametr1, parametr2,...,parametrN)

x = 3; // przypisuję wartość 3 dla x
y = 2; // przypisuję wartość 2 dla y
z = 1; // przypisuję wartość 1 dla z

let max = Math.max(x,y,z); // szukam maksymalnej wartości z x,y,z i przypisuję do zmiennej max
let min = Math.min(x,y,z); // szukam minimalnej wartości z x,y,z i przypisuję do zmiennej min

console.log(max); // output: 3

console.log(min); // output: 1