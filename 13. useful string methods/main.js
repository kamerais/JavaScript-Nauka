// string methods = pozwalają na manipulowanie i pracę z tekstem (stringiem)

let userName = "kamerais";

//metoda .charAt(nr.indexu) pokazuje jaka literka znajduję się w podanym indexie
console.log(userName.charAt(0)); // output: k

// metoda indexOf("literka z tekstu") mówi na którym indexie od 0 do n - 1 znajduje się literka

console.log(userName.indexOf("r")); //output: 4

// metoda .lastIndexOf("Literka z tekstu") mówi na którym indexie od n - 1 do 0 znajduje się literka

console.log(userName.lastIndexOf("r")); //output: 4

// Jeżeli mój userName miałby więcej takich samych liter to pierwszy znaleziony i ostatni znaleziony index
// miałyby inne wartości
//Przykład

userName = "Hakunamatata";

console.log(userName.indexOf("a")); //output: 1
console.log(userName.lastIndexOf("a")); //output: 11
