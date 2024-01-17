// function declaration = definiuje reużywalny blok kodu
//                        który wykonuje konkretne polecenia

// function expression = sposób na zdefiniowanie funkcji
//                       jako wartości lub zmiennych

// Przykład function declaration
function hello1(){
    console.log("Hello");
}
hello1();
// Przykład fuction expression
const hello2 = function(){
    console.log("Hello")
}
hello2()
// Jeżeli jest funckja o tej samej nazwie jest już zadeklarowana to wyrzuci błąd
// dlatego jest hello1()i hello2()


// function expression można wprowadzać jako argument w innych funkcjach
// setTimeout(callback, ilość sekund w ms) = opóźnia uruchomienie funkcji o jakiś czas w ms

setTimeout(function(){
    console.log("Hello po 3 sekundach");
},3000); // 3000 ms = 3s