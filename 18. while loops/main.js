// while loop (pętla) = powtarza kod tyle raz ile razy DOPÓKI spełnia warunki

//let username ="";

//Przykład pętli, która nigdy się nie skończy
/*
while (username ===""){ // warunek tutaj jest stale prawdziwy, dlatego wchodząc do pętli nigdy z niej nie wyjdziemy
                        // no chyba, że pamięci zabraknie i program sam się zatrzyma
    console.log("Enter your username");
}
console.log(`Hello ${username}`);
*/

// Przykład programu do sprawdzania czy użytkownik nie zostawił wolnego pola wpisaniu nickname
/*
while(username === "" || username === null){ //pętla nie skończy się dopóki użytkownik nie poda jakiejś wartości do pola tekstowego, które mu wyskakuje
    //null (No Value), jeżeli użytkownik naciśnie cancel to i tak będzie proszony o wpisanie jego nazwy
    username = window.prompt("Enter your username: ");
}
// input: kamerais
console.log(`Hello ${username}`); // output: Hello kamerais
*/
// Przykład pętli do while loop (wykonuj kod dopóki)
// W porównaniu do zwykłej pętli while, do while najpierw wykonuje to co jest w do, a potem sprawdza warunek
// Z tego powodu mozna byłoby nie przypisywać, żadnej wartości dla username tylko zostawić let username;
// Wtedy użytkownik byłby poproszony o wprowadzenie username, jeżeli nie spełni to warunków to po prosi kolejny raz,
// aż nie wprowadzi czegoś do username
/*
let nick;
do{
    nick = window.prompt("Enter your username: "); // prosi o nick
}while(nick === "" || nick === null) // jeżeli nie spełni warunków, prosi o nick jeszcze raz

// input: kamerais
console.log(`Hello ${nick}`); // output: Hello kamerais
*/
//Ćwiczenie:
// Sprawdź czy użytkownik jest zalogowany
// Aby się zalogować musi podać swój username i password
// jeżeli się zaloguje ma zostać przywitany
// Jeżeli nick nie zostanie wprowadzony ma poprosić o nick
// Jeżeli password nie zostanie wprowadzony ma poprosić o password

let isLoggedIn = false;
let username;
let password;

while(!isLoggedIn){
    username = window.prompt("Enter your username: ");
    password = window.prompt("Enter your password: ");
    if(username === "myUsername" && password === "myPassword"){
        isLoggedIn = true;
        console.log(`Welcome ${username}`);
    }
    else{
        console.log("Nieprawidłowe dane, proszę powtórzyć");

    }
}

do{
    username = window.prompt("Enter your username: ");
    password = window.prompt("Enter your password: ");
    if(username === "myUsername" && password === "myPassword"){
        isLoggedIn = true;
        console.log(`Welcome ${username}`);
    }
    else{
        console.log("Nieprawidłowe dane, proszę powtórzyć");

    }
}while(!isLoggedIn)

