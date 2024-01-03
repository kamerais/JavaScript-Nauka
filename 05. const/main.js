// const (stała) = zmienna, której nie można zmienić

let pi = 3.14;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

circumference = 2 * pi * radius;

console.log(circumference); //output 12.56 (jeżeli input = 2)

