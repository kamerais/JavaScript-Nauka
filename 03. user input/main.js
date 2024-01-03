/* Jak przyjąć user input (czyli dane od użytkownika)
    1. Prosty sposób = window prompt
    2. Profesjonalny sposób = HTML textbox
*/

/*
let username; // deklaruję zmienną

username = window.prompt("Jak masz na imie?"); // Na stronie wyskoczy informacja z polem tekstowym i zapytaniem
//                                                Jak masz na imie?

console.log(username); // output: (jak wpisałem kamerais) kamerais
*/

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    //console.log(username);
    document.getElementById("myH1").textContent = `Hello ${username}`
}