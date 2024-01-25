// array of objects = po prostu tablica, która ma w sobie objekty
//                   lista = [{parametr1: wartość,...},{parametr1: wartość, ...},...]
//                   wewnątrz tablicy są objekty ze swoimi parametrami i ich wartościami

const fruits = [
                {name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}
                ];
// Przykład jak otrzymać wartość z parametru w  danym obiekcie
console.log(fruits[0].name); // output: apple

// Można dodawać obiekty do listy

console.log(fruits); // output: tablica z 5 obiektami

fruits.push({name: "grapges", color: "purple", calories: 62});

console.log(fruits); // output: tablica z 6 obiektami

// Można usuwać ostatni obiekt z listy

fruits.pop();

console.log(fruits); // output: tablica z 5 obiektami

// Można obciąć listę i wydobyć z niej przedział elementów

// fruits.slice(1,2)

// console.log(fruits) // output: tablica z 3 obiektami

// Można użyć metody forEach(), aby wydobywać obiekty lub wartości ich parametrów z listy

fruits.forEach(fruit =>{
    console.log(fruit.name); // output: (nazwy wszystkich owoców po kolei)
});

// Można użyć metody map(), aby zmapować je z jakąś funkcją i stworzyć nową listę

const fruitNames = fruits.map(fruit => fruit.name);

console.log(fruitNames); // output: ['apple', 'orange', 'banana', 'coconut', 'pineapple']

// Można użyć metody filter(), aby przefiltrować obiekty

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");

console.log(yellowFruits); // output: (wyświetla listę z obiektami, które mają kolor żółty)

// Można użyć metody reduce(), aby sprawdzić, który obiekt ma w sobie najwięcej kalorii

const maxCalories = fruits.reduce((max, fruit) =>
                                fruit.calories > max.calories ? fruit : max);

console.log(maxCalories); // output: {name: 'coconut', color: 'white', calories: 159}

const minCalories = fruits.reduce((min, fruit) =>
                                fruit.calories < min.calories ? fruit : min);
console.log(minCalories); // output: {name: 'pineapple', color: 'yellow', calories: 37}