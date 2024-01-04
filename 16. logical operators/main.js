// logical operators = są używane do łączenia lub manipulowania wartościami Boolean
//                     (prawda/fałsz)

// Wyróżniamy:
//                    AND = &&
//                    OR = ||
//                    NOT = !

/*
Krótka teoria ode mnie ze studiów, jeżeli ktoś to czyta.

Kiedy używamy &&(AND [w logice tzw. koniunkcja, mówimy i]) to chcemy powiedzieć, że każda z przesłanek jest prawdziwa
Jeżeli chociaż jedna przesłanka jest fałszywa to cały wniosek jest fałszywy
np. 2 == 2 && 4==4 --> ?
    (prawda) i (prawda) --> prawda
Czyli zdanie powyżej jest prawdziwe
natomiast np. 2 == 2 && 5 == 10 --> ?
            (prawda) i (fałsz) --> fałsz
No i jeżeli oba są fałszywe to całość jest fałszywa

Dalej dla || (OR [w logice tzw. alternatywa, mówimy lub]) jest prawdziwe, jeżeli min. 1 przesłanka jest prawdziwa
np. 2 == 2 || 5 == 10 --> ?
    (prawda) lub (fałsz) --> prawda
natomiast 2 == 4 || 5 == 6 --> ?
        (fałsz) lub (fałsz) --> fałsz

Na końcu (ponieważ niema tu implikacji i równoważności) jest ! (NOT[w logice negacja])
Zmienia wartość zdania z np. prawda --> fałsz i vice versa
np. 2 == 2 && !(2 == 2) --?
    (prawda) i (nieprawda [czyli fałsz]) --> fałsz
*/

const temp = 200;

// bez operatorów logicznych
/*
if(temp > 0){ //program zatrzymuje się tutaj i nie dochodzi do else
    console.log("The weather is GOOD");
}
else if(temp <= 30){
    console.log("The weather is GOOD");
}
else{
    console.log("The weather is BAD")
}
*/
// z operatorami logicznymi
// Przykład z AND(&&)
if(temp > 0 && temp <= 30){ // 200 > 0 (prawda) && 200 <= 30 (fałsz) --> fałsz
    console.log("The weather is GOOD");
}
else{ // program zatrzymuje się tutaj
    console.log("The weather is BAD");
}
// Przykłąd z OR(||)
if(temp <= 0 || temp > 30){ // 200 <= 0 (fałsz) || 200 > 30 (prawda) --> prawda
    // program zatrzymuje się tutaj
    console.log("The weather is BAD");
}
else{
    console.log("The weather is GOOD");
}
// Przykład NOT(!)

const isSunny = true;
// Tutaj bez operatora not
if(isSunny){ // isSunny jest prawdziwe
    // program zatrzymuje się tutaj
    console.log("It is Sunny");
}
else{
    console.log("It is CLOUDY");
}
// Tutaj z operatorem not
if(!(isSunny)){ // isSunny jest nieprawdziwe(fałszywe)
    
    console.log("It is Sunny");
}
else{ // program zatrzymuje się tutaj
    console.log("It is CLOUDY");
}

