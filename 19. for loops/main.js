// for loop = wykonuje jakiś kod limitowaną ilość razy, kiedy while loop może być nieskończone

// Przykład for loop wypisującego 3 razy Hello

for(let i = 0; i <= 2; i++){
    console.log("Hello!");
}
// Przykład kodu wypisującego 10 cyfr od 1 do 10

for (let i = 1; i <= 10; i++){
    console.log(i);
}

// Przykład kodu wypisującego cyfry od 10 do 0

for (let i = 10; i >= 0; i--){
    console.log(i);
}
console.log("Happy New Year");

/* Definicja break i continue
    break; - gdy kod się z nim spotka to go zatrzymuje (przydatne przy pętlach)
    continue; - gdy kod się z nim spotka to pomija wartość, która spełnia pewien warunek i kontynuuje
*/

// Przykład kodu wypisujący liczby parzyste

for(let i = 0; i <= 10; i++){
    if(i % 2 == 1){ // jeżeli reszta z dzielenia przez 2 jest równa 1 (czyli liczba jest nieparzysta)
        continue;
    }
    else{
        console.log(i);
    }
}

// Przykład kodu piszącego 5 pierwszych liczb w zakresie od 20 do 40

for(let i = 20; i <= 40;i++){
    end = 25;
    if(i === end){
        console.log(i)
        break;
    }
    else{
        console.log(i)
    }
}