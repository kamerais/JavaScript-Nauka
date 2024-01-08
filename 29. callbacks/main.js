// callback - funkcja, która jest wprowadzana jako argument dla innej funkcji

//            używana jest do obchodzenia się z asynchronicznymi operacjami:
//            1. Czytanie pliku
//            2. Network requests
//            3. Interaktowanie z bazami danych

//            "Hey, when you're done, call this next" - to mówi JS do callbacka
hello(wait, leave, goodbye);


function hello(callWait, callLeave, callBye){
    console.log("Hello"); // output: Hello
    callWait(); // output: Wait
    callLeave(); // output: Leave!
    callBye(); // output: Goodbye
}
/*
Jeżeli ja zmienię kolejność wykonywanych funkcji, to i kolejność wyświetlanego tekstu się zmieni
np.
function hello(callWait, callLeave, callBye){
    callWait(); // output: Wait
    console.log("Hello"); // output: Hello
    callBye(); // output: Goodbye
    callLeave(); // output: Leave!
    
}
*/

function wait(){
    console.log("Wait");
}

function leave(){
    console.log("Leave!");
}


function goodbye(){
    console.log("Goodbye");
}

sum(displayConsole, 1, 2); // output: 3 (w konsoli)

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}
function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}

sum(displayPage, 12, 12); // output: 12 (na stronie)