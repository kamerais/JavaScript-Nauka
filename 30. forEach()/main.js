// forEach() = metoda ta jest używania do interowania przez elementy w tablicy
//             oraz aplikowania konkretnej funkcji (callback) dla każdego elementu

//             array.forEach(callback)
//             element, index, array są zapewnione

let numbers = [1,2,3,4,5];

//numbers.forEach(double);
//numbers.forEach(display); // output: 2,4,6,8,10

function double(element, index, array){
    array[index] = element * 2;
}
//numbers.forEach(triple);
//numbers.forEach(display); // output: 3,6,9,12,15
function triple(element, index, array){
    array[index] = element * 3;
}
//numbers.forEach(square);
//numbers.forEach(display); // output: 1,4,9,16,25
function square(element, index, array){
    array[index] = element ** 2;
}
//numbers.forEach(cube);
//numbers.forEach(display); // output: 1,8,27,64,125
function cube(element, index, array){
    array[index] = element ** 3;
}

function display(element){
    console.log(element);
}
let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(upperCase);
fruits.forEach(display); // output: apple orange banana coconut

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array){
    array[index] = element.chatAt(0).toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
}