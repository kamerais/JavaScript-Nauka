// const (stała) = zmienna, której nie można zmienić

let pi = 3.14;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

circumference = 2 * pi * radius;

console.log(circumference); //output 12.56 (jeżeli input = 2)

// Dlaczego używamy const? Bo ktoś może przypadkiem zmienić wartość zmiennej, która powinna być stała no, pi
pi = 31.4
circumference = 2 * pi * radius;

console.log(circumference) //output 125.6 (jeżeli input = 2)
