// string slicing = tworzenie podstringów
//                  z porcji innego stringu

//                  string.slice(start,end - 1)

const fullName = "kamerais";

let firstName = fullName.slice(0,4); //jeżeli dałbym .slice(0,3)
console.log(firstName); //output: kame, a przy .slice(0,3) output: kam

let lastName = fullName.slice(4,8); // lub poprostu .slice(4) samo dopisze koniec
console.log(lastName); //output: rais

let firstChar = fullName.slice(0,1);
console.log(firstChar);

let lastChar = fullName.slice(-1); //używając wartości mniejszych od 0 idzie się od końca do początku