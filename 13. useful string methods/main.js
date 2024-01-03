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

// (nie jest to metoda wyłącznie dla tekstu, ale bardzo podobne) .length liczy ile jest liter w tekście od 1 do n
console.log(userName.length); // output: 12

// metoda .trim() pozwala na usunięcie z tekstu spacji znajdujących się przed nim i po nim
userName = "       Hakuna      Matata            ";

console.log(userName.trim()); // output: Hakuna      Matata

//metoda .toUpperCase() jeżeli chcę wszystkie litery w tekście zamienić na drukowane
userName = "kamerais";

console.log(userName.toUpperCase()); //output: KAMERAIS

//metoda .toLowerCase() opozycyjnie do poprzedniej metody
userName.toUpperCase(); // zmieniam wszystkie literki z tekstu na drukowane

console.log(userName.toLowerCase()); //output: kamerais

//metoda .repeat(ile razy) powtarza tekst tyle razy ile się chce

console.log(userName.repeat(2)); //output: kameraiskamerais

// metoda .startsWith("Literka, spacja, itp.") zwraca prawda/fałsz jeżeli pierwsza literka jest zgodna z wprowadzoną literką

                                //UWAGA duże i małe litery mają znaczenie
userName = "kamerais";
console.log(userName.startsWith("k")); //output: true
console.log(userName.startsWith("K")); //output: false
// metoda .endsWith("Literka, spacja, itp.") to opozycyjne do .startsWith("Literka")

console.log(userName.endsWith("s")); //output: true
console.log(userName.endsWith("S")); //output: false

// metoda .includes("Literka, spacja, itp.") sprawdza czy tekst ma w sobie wprowadzoną literkę, spację lub itp.

console.log(userName.includes(" ")); //output: false

// metoda .replaceAll(coś,na coś) zamienia wszystkie cosie na cosie :D

let phoneNumber = "123-456-789";

phoneNumber = phoneNumber.replaceAll("-", ""); //zmienna teraz to 123456789

console.log(phoneNumber); //output: 123456789

// metoda .padStart(do jakiego momentu od początku, aż tekst będzie odpowiednio długi, "Literka, spacja, itp.")
phoneNumber = "123-456-789";

console.log(phoneNumber.length); //output: 11
// Ja chce mieć go o 4 "0" większy
phoneNumber = phoneNumber.padStart(15, "0");

console.log(phoneNumber); // output: 0000123-456-789
console.log(phoneNumber.length); //output: 15
// metoda .padEnd(to samo tylko od końca, "Literka, spacja, itp.")

phoneNumber = "123-456-789";

console.log(phoneNumber.length); //output: 11
// Ja chce mieć go o 4 "0" większy
phoneNumber = phoneNumber.padEnd(15, "0");

console.log(phoneNumber); // output: 123-456-7890000
console.log(phoneNumber.length); //output: 15
