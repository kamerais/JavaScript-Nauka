// Method Chaining = wywoływanie metod jedna po drugiej
//                   w jednej ciągłej linijce kodu

// ------- Bez Method Chaining-u -------

let username = window.prompt("Enter your username");

// Chcę, usunąć wszystkie spacje od lewej i od prawej strony
// Pierwszą literę zrobić dużą, a reszta ma być z małych liter
// Na końcu wyświetlić output
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();

username = letter + extraChars;
// input:     kaMErAiS     
console.log(username); //output: Kamerais

// ------- Z Method Chaining-iem -------