// while loop (pętla) = powtarza kod tyle raz ile razy DOPÓKI spełnia warunki

let username ="";

//Przykład pętli, która nigdy się nie skończy
/*
while (username ===""){ // warunek tutaj jest stale prawdziwy, dlatego wchodząc do pętli nigdy z niej nie wyjdziemy
                        // no chyba, że pamięci zabraknie i program sam się zatrzyma
    console.log("Enter your username");
}
console.log(`Hello ${username}`);
*/

// Przykład programu do sprawdzania czy użytkownik nie zostawił wolnego pola wpisaniu nickname

while(username === "" || username === null){ //pętla nie skończy się dopóki użytkownik nie poda jakiejś wartości do pola tekstowego, które mu wyskakuje
    //null (No Value), jeżeli użytkownik naciśnie cancel to i tak będzie proszony o wpisanie jego nazwy
    username = window.prompt("Enter your username: ");
}
// input: kamerais
console.log(`Hello ${username}`); // output: Hello kamerais