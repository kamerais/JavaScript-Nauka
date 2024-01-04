// function (funkcja) = Sekcja reużywalnego kodu
//                      Zadeklarowany raz kod, może zostać użyty kiedy chcesz
//                      Wywołaj funkcję, abu uruchomić ten kod
/*
function happyBirthday(){
    console.log("Happy birthday to you");
    console.log("Happy birthday to you");
    console.log("Happy birthday dear you");
    console.log("Happy birthday to you");
}
*/
// funkcja wymagająca pewnych argumentów (parametry funkcji)
/*
function happyBirthday(username, age){ //UWAGA!!! Kolejność ma znaczenie
    console.log("Happy birthday to you");
    console.log("Happy birthday to you");
    console.log(`Happy birthday dear ${username}`);
    console.log("Happy birthday to you");
    console.log(`You are ${age} years old`);
}
happyBirthday("kamerais", 19); // argumenty funkcj
*/
// Jak działa return keyword?
function add(x,y){ // tworzę funkcję, która dodaje do siebie dwie wartości
    let result = x + y; // tworzę zmienną, która przechowuje sumę dwóch wartości
    return result; // zwracam wartość sumy
    
}
function substract(x,y){
    return x - y;
}

function multiply(x,y){
    return x * y;
}

function divide(x,y){
    return x / y;
}

function isEven(number){
    return number % 2 === 0 ? true : false;
}

function isValidEmail(email){
    return email.includes("@") ? true : false;
}

let answer = add(2,3); // tworzę zmienną, która będzie przechowywać to co funkcja zwraca
console.log(answer); // output: 5
//lub
console.log(substract(3,2)); // output: 1
console.log(multiply(3,2)); // output: 6
console.log(divide(3,2)); // output: 1.5
console.log(isEven(2)); // output: true
console.log(isValidEmail("kamerais@koper.com")); // output: true