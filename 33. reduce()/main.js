// .reduce() = redukuje ilość elementów do pojedyńczej wartości
/*
Biorą pod lupę funkcję sum
Działa ona w ten sposób, że pobiera poprzedni element z tablicy i dodaje go z następnym elementem z tablicy
Dlatego, że pierwszy element nie ma poprzedniego elementu to poprzednim elementem będzie 0.
Teraz program będzie wykonywać tę funkcję w taki sposób
sum(0,5) ; total = 5 // dlaczego 0? (patrz. 2 linijki wyżej).
Teraz 5 będzie poprzednim elementem, a 30 następnym, więc
sum(5,30) ; total = 35, potem
sum(30,10) ; total = 45, potem
.
.
.
sum(15,20) ; total = 105
Czyli .reduce(callback) sprawdza poprzedni element z listy oraz następny element z listy, a co się z nimi dzieje
determinuje funkcja wywołana poprzez callback.
Dlatego w sum wymaga 2 parametrów
*/
const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`) // output: $105.00

function sum(previousElement, nextElement){
    return previousElement + nextElement;
}

const grades = [75,50,90,80,65,95];

const maximum = grades.reduce(getMax);
const minumum = grades.reduce(getMin);

console.log(maximum); // output: 95
console.log(minumum); // output: 50

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}
function getMin(accumulator, element){
    return Math.min(accumulator, element);
}