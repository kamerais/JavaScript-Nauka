// Counter Program

const decreaseBtn = document.getElementById("decreaseButton"); //przypisuję do zmiennej id przycisku zmniejszania wartości
const resetBtn = document.getElementById("resetButton"); //przypisuję do zmiennej id przycisku resetowania wartości
const increaseBtn = document.getElementById("increaseButton"); //przypisuję do zmiennej id przycisku zwiększania wartości
const countLabel = document.getElementById("countLabel"); //przypisuję do zmiennej id etykiety licznika

let count = 0; //ustawiam licznik na 0

increaseBtn.onclick = function(){
    count++; // dodaję 1 do licznika
    countLabel.textContent = count; // zamieniam text na wartość licznika
}

resetBtn.onclick = function(){
    count = 0; // ustawiam licznik na 0
    countLabel.textContent = count; // zamieniam text na wartość licznika
}

decreaseBtn.onclick = function(){
    count--; // odejmuję 1 do licznika
    countLabel.textContent = count; // zamieniam text na wartość licznika
}