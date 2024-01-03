// if statements (instrukcja warunkowa) = Jeżeli warunek jest spełniony to wykonaj kod
//                                        jeżeli nie to zrób coś innego
/*

let age = 25;

if(age >= 18) { // Jeżeli zmienna age większa lub równa 18 to wykonaj ten kod
    console.log("You are old enough to enter this site")
}
else{ // w przeciwnym razie wykonaj ten kod
    console.log("You must be 18+ to enter this site")
}

*/

/*
let time = 13; // powiedzmy, że to czas w godzinach

if (time < 12){ // jeżeli czas jest mniejszy niż godzina 12 to wykonaj ten kod
    console.log("Good morning")
}
else{ // w przeciwnym razie wykonaj ten kod
    console.log("Good afternoon")
}

*/

/*

let isStudent = true; // ustawiam, że ten warunek jest prawdziwy

if(isStudent){ // jeżeli zmienna isStudent jest prawdziwa to wykonaj ten kod
    console.log("You are a student")
}
else{ // w przeciwnym razie wykonaj ten kod
    console.log("You are not a student")
}

*/
// Można tworzyć tzw. nested if-statements (zagnieżdżone instrukcje warunkowe)
let age = 25;
let hasLicense = false;
// W Ameryce trzeba mieć przynajmniej 16 lat, żeby mieć licencję

if(age >= 16){
    console.log("You are old enough to have a license");

    if(hasLicense){
        console.log("You have your license");
    }
    else{
        console.log("You do not have your license yet!")
    }
}
else{
    console.log("You are not old enough to have a license");
}