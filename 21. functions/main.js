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
function happyBirthday(username, age){
    console.log("Happy birthday to you");
    console.log("Happy birthday to you");
    console.log(`Happy birthday dear ${username}`);
    console.log("Happy birthday to you");
    console.log(`You are ${age} years old`);
}
happyBirthday("kamerais", 19); // argumenty funkcji
