// rest parameters = (...rest) przyjmuje jakąś liczbę zmiennych jako agrumenty, z którymi pracuje
//                             poprzez pakowanie ich do tablicy
//
//                             
//                             spread = rozbija tablicę na pojedyńcze elementy
//                             rest = łączy pojedyńcze elementy do tablicy

function openFridge(...foods){
    console.log(foods);
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";

openFridge(food1, food2, food3, food4); //output: ["pizza", "hamburger", "hotdog", "sushi"]