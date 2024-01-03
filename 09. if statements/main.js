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

/*

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

*/

/*

// jak działają else if statements
let age = 101;

if(age >= 100){ // jeżeli wiek jest większy bądź równy 100 to wykonaj ten kod
    console.log("You are too old to enter this site");
}
*/

/*
dlaczego zamieniłem age >= 18 z age >= 100 miejscami?
Warunki są czytane od góry do dołu. Jakbym dał age >= 18 pierwsze to warunek zostałby spełniony
co za tym idzie warunek age >= 100 nigdy by się nie wykonał, bo age = 101 jest większe od 18
*/

/*

else if(age == 0){ // jeżeli wiek jest równy 0 wykonaj ten kod
    console.log("You can't enter. You were just born.")
}
else if(age >= 18){ // jeżeli wiek jest większy bądź równy 18 to wykonaj ten kod
    console.log("You are old enough to enter this site");
}
else if(age < 0){ // jeżeli wiek jest mniejszy od 0 to wykonaj ten kod
    console.log("Your age can't be below 0");
}
else{ // w przeciwnym wypadku wykonaj ten kod
    console.log("You must be 18+ to enter this site");
}

*/

const myText = document.getElementById("myText");
const submitButton = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

submitButton.onclick = function(){
    age = myText.value;
    age = Number(age);

    if(age >= 100){ // jeżeli wiek jest większy bądź równy 100 to wykonaj ten kod
        resultElement.textContent = "You are too old to enter this site";
    }
    else if(age == 0){ // jeżeli wiek jest równy 0 wykonaj ten kod
        resultElement.textContent = "You can't enter. You were just born.";
    }
    else if(age >= 18){ // jeżeli wiek jest większy bądź równy 18 to wykonaj ten kod
        resultElement.textContent = "You are old enough to enter this site";
    }
    else if(age < 0){ // jeżeli wiek jest mniejszy od 0 to wykonaj ten kod
        resultElement.textContent = "Your age can't be below 0";
    }
    else{ // w przeciwnym wypadku wykonaj ten kod
        resultElement.textContent = "You must be 18+ to enter this site";
    }
}