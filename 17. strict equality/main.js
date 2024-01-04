// = assignment operator (operator przypisania)
// == comparison operator (operator porównania) (porównuje czy wartości są sobie równe)
// === strict equality operator (operator ścisłej równości) (sprawdza czy wartości i typ danych są takie same)
// != inequality operator (operator nierówności)
// !== strict inequality operator (operator ścisłej nierówności)

const PI = 3.14;

// przykład z ==
if(PI == "3.14"){ // Wartości PI jest równa wartości w tekście (nawet jeżeli są to różne typy danych)
    // program zatrzymuje się tutaj
    console.log("That is PI");
}
else{
    console.log("That is NOT PI");
}
// przykład z ===
if(PI === "3.14"){ // Wartość PI mimo, że jest równa wartości w tekście to PI nie jest tekstem tylko liczbą
    console.log("That is PI");
}
else{ // program zatrzymuje się tutaj
    console.log("That is NOT PI");
}
// przykład z !=
if(PI != "3.14"){ // Wartości PI jest równa wartości w tekście (nawet jeżeli są to różne typy danych)
    // program zatrzymuje się tutaj
    console.log("That is NOT PI");
}
else{
    console.log("That is PI");
}
// przykład z !==
if(PI !== "3.14"){ // Wartość PI mimo, że jest równa wartości w tekście to PI nie jest tekstem tylko liczbą
    console.log("That is NOT PI");
}
else{ // program zatrzymuje się tutaj
    console.log("That is PI");
}