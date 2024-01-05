// array = zmienna w formie struktury, która przechowuje więcej niż 1 wartość

//Jak wygląda tablica?

let fruits = ["apple", "orange", "banana"];

console.log(fruits);
/*     output:
            0: "apple"
            1: "orange"
            2: " "
            length: 3
*/
// Jeżeli chcemy wyświetlić konkretny element korzystamy z zmienna_z_tablicą[index od 0 do n - 1];

console.log(fruits[0]); //output: apple
console.log(fruits[1]); //output: orange
console.log(fruits[2]); //output: banana
console.log(fruits[3]); // output: undefined
// Możemy zmieniać wartości tablicy

fruits[0] = "coconut";

console.log(fruits[0]); //output: coconut
// Mogę też w ten sposób dodać element

fruits[3] = "avocado";

console.log(fruits[3]); // output: avocado

// Metody tablic
// Metoda .push(element) ustawia element na końcu tablicy

fruits.push("makaron");
console.log(fruits[4]); //output: makaron

// Metoda .pop() usuwa ostatni element z tablicy

fruits.pop();
console.log(fruits[4]); //output undefined

// Metoda .unshift(element) dodaje element na początek tablicy

fruits.unshift("mango");
console.log(fruits[0]); //output: mango

// Metoda .shift() usuwa element z początku tablicy

fruits.shift();
console.log(fruits[0]); //output: coconut

// Metoda .length() pokazuje jaka liczba elementów znajduje się w tablicy

let numOfFruits = fruits.length;

console.log(numOfFruits) //output: 4

// Metoda .indexOf pozwala znaleźć na którym indexie znajduje się element z tablicy

let index = fruits.indexOf("apple");

console.log(index) // Jeżeli index == -1 to znaczy, że go tam nie ma

// Można użyć pętli for do wyświetlania elementów z listy

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
    // Na początku i = 0, więc będzie fruts[0] output: coconut
    // Potem i = 1, więc będzie fruts[1] output: orange
    // Potem i = 2, więc będzie fruts[2] output: banana
    // Potem i = 3, więc będzie fruts[3] output: avocado
    // Jeżeli i = 4 (a to długość tablicy) to po prostu nie wypisze tego elemntu, bo i ma być mniejsze od długości tablicy
}

// Alternatywna wersja for loop

for(let fruit of fruits){
    console.log(fruit);
    // wykonuje to samo co pętla wyżej tylko tutaj ona sama iteruje przez tablice i wypisuje elementy
    // nie trzeba ustalać długości listy
}

// Metoda .sort() posortuje elementy w liście w kolejności alfabetycznej, od najmniejszej do największej itd.

fruits.sort(); // jeżeli chcemy je w odwrotnej kolejności do .sort() można dopisać .reverse()
               // powinno to wtedy wyglądać tak fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}