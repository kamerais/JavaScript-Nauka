// Temperature conversion program

const textBox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "℉";
        // metoda .toFixed(liczba) pozwala na ustawienie z jaką dokładnością po przecinku ma się wyświetlać liczba
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "℉";
    }
    else{
        result.textContent = "Select a unit";
    }
}
/*
Alternatywne napisanie tego programu (Zaproponował: pan1c z discorda)
const textBoxValue = document.getElementById("textbox").value; z góry wiem, że będę pobierać wartość tego co wprowadzi użytkownik,
                                                        dlatego daję .value, aby pobrać tę wartość
const toFahrenheit = document.getElementById("toFahrenheit").checked; -,,- sprawdzać czy wybrana konwersja przez użytkownika
                                                                    jest zaznaczona
const toCelsius = document.getElementById("toCelsius").checked; -,,-
const result = document.getElementById("result");

function conver(){
    if(!toFahrenheit && !toCelsius){
        result.textContent = "Select a unit";
        return;
    }
    const valueToNumber = Number(textBox);
    else{
        result.textContent = toFahrenheit
        ? "$({textBoxValue * 9} / 5 + 32).toFixed(1)F"
        : "$({textBoxValue - 32} * (5 / 9) ).toFixed(1)C";
    }
}
W bardziej skróconej formie:
function convert() {
    const valueToNumber = Number(textBoxValue);
    result.textContent =
    !toFahrenheit && !toCelsius // najpierw pytam czy użytkownik NIE wybrał konwersji?
    ? "Select a unit" // jeżeli NIE wybrał to result.textContent = "Select a unit";
    : toFahrenheit jeżeli wybrał to pytam czy chce zamienić na Fahrenheity?
    ? `${((valueToNumber * 9) / 5 + 32).toFixed(1)}F` // jeżeli tak to używam formuły z Celsiuszy na Fahrenheity
    : `${((valueToNumber - 32) * (5 / 9)).toFixed(1)}C`; // w przeciwnym razie vice versa
}

*/