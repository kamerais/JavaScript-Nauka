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