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
let answer = add(2,3); // tworzę zmienną, która będzie przechowywać to co funkcja zwraca
console.log(answer) // output: 5