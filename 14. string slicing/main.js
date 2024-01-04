// string slicing = tworzenie podstringów
//                  z porcji innego stringu

//                  string.slice(start,end - 1)

const fullName = "kamerais";

let firstName = fullName.slice(0,4); //jeżeli dałbym .slice(0,3)
console.log(firstName); //output: kame, a przy .slice(0,3) output: kam

let lastName = fullName.slice(4,8); // lub poprostu .slice(4) samo dopisze koniec
console.log(lastName); //output: rais

let firstChar = fullName.slice(0,1);
console.log(firstChar); //output: k

let lastChar = fullName.slice(-1); //używając wartości mniejszych od 0 idzie się od końca do początku
console.log(lastChar); // output: s

const fullName2 = "Adam Stankiewicz";
// Jak znaleźć imie i nazwisko?
let firstName2 = fullName2.slice(0,fullName2.indexOf(" "));
let lastName2 = fullName2.slice(fullName2.indexOf(" ")+1); // +1 dlatego, że bez tego doda spację na początek

console.log(firstName2); //output: Adam
console.log(lastName2); //output: Stankiewicz

const email = "kamerais123@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1)

console.log(username) // output: kamerais123
console.log(extension) // output: gmail.com