// constructor = specjalna matoda do definiowania
//               właściwości i metod objektów

// Przykład konstruktora

function Car(make,model,year,color){
    this.make = make; // czyt. dla tego obiektu.make przypisz argument z parametru make
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford","Mustang",2024,"red");
/*
    Jeżeli nie użyjemy new to nie stworzy nam obiektu o danych argumentach
    const car2 = Car("Chevrolet","Corvette", 2013, "blue");
    console.log(car2.make); // output: Uncaught TypeError: Cannot read properties of undefined (reading 'make')
*/
console.log(car1.make); // output: Ford
console.log(car1.model); // output: Mustang
console.log(car1.year); // output: 2024
console.log(car1.color); // output: red
car1.drive(); // output: You drive the Mustang

const car2 = new Car("Chevrolet","Corvette", 2013, "blue");

console.log(car2.make); // output: Chevrolet
console.log(car2.model); // output: Corvette
console.log(car2.year); // output: 2013
console.log(car2.color); // output: blue
car2.drive(); // output: You drive the Corvette